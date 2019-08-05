<?php
namespace MatthiasWeb\RealMediaLibrary\comp;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class handles the compatibility for WPML.
 */
class WPML extends base\Base {
    
    private static $me = null;
    
    private $active = false;
    
    /**
     * Avoid duplicate call of move action.
     */
    private $previousIds = null;
    
    /**
     * Avoid duplicate call of move action.
     */
    private $previousFolderId = null;
    
    private function __construct($root = null) {
        // Silence is golden.
    }
    
    /**
     * Initialize actions and filters.
     */
    public function init() {
        global $sitepress;
        $this->active = $sitepress !== null && get_class($sitepress) === "SitePress";

        if ($this->active) {
            add_action('wpml_media_create_duplicate_attachment', array($this, 'wpml_media_create_duplicate_attachment'), 10, 2);
            add_action('RML/Options/Register', array($this, 'options_register'));
            add_action('RML/Item/MoveFinished', array($this, 'item_move_finished'), 10, 4);
            add_action('wpml_update_active_languages', array($this, 'wpml_update_active_languages'));
            add_action('RML/Count/Update', array($this, 'updateCountCache'), 10, 3);
            add_filter('RML/Tree/SQLStatement/SELECT', array($this, 'sqlstatement_select_fields'));
            add_filter('RML/Tree/SQLStatement/JOIN', array($this, 'sqlstatement_join'));
            add_filter('RML/Tree/CountAttachments', array($this, 'wpml_count_attachments'));
            add_filter('RML/Localize', array($this, 'localize'));
            add_filter('RML/Sortable/PostsClauses', array($this, 'sqlstatement_order'), 10, 3);
            add_filter('RML/Sortable/Ids', array($this, 'sortable_ids'), 10);
            
            // Set the RML + WPML language to the user
            if (is_user_logged_in()) {
                $userId = get_current_user_id();
                $userLanguage = get_user_meta($userId, 'rml_wpml_lang', true);
                $currentLanguage = $sitepress->get_current_language();
                if ($userLanguage !== $currentLanguage) {
                    $saveLanguage = $currentLanguage === 'all' ? $sitepress->get_default_language() : $currentLanguage; // "all" is not allowed for WPML / RML
                    update_user_meta($userId, 'rml_wpml_lang', $saveLanguage);
                }
            }
        }
    }
    
    public function localize($arr) {
        global $sitepress;
        if (!$this->isDefaultLanguage()) {
            $arr['restQuery']['lang'] = $sitepress->get_current_language();
        }
        return $arr;
    }
    
    public function sqlstatement_order($pieces, $query, $folder) {
        global $sitepress, $wpdb;
        
        // Apply only when not-default language
        if (!$this->isDefaultLanguage()) {
            $pieces['fields'] = str_replace('rmlorder.nr', 'IFNULL(rmlorderwpml.nr, rmlorder.nr)', $pieces['fields']);
            $pieces['join'] .= ' LEFT JOIN ' . $wpdb->prefix . 'icl_translations rmlorderwpmlicl
            	ON rmlorderwpmlicl.trid = t.trid AND rmlorderwpmlicl.source_language_code IS NULL
            LEFT JOIN ' . $this->getTableName('posts') . ' rmlorderwpml
            	ON rmlorderwpmlicl.element_id = rmlorderwpml.attachment ';
            $pieces['orderby'] = str_replace('rmlorder.nr', 'IFNULL(rmlorderwpml.nr, rmlorder.nr)', $pieces['orderby']);
        }
        
        return $pieces;
    }
    
    public function sortable_ids($ids) {
        global $sitepress;
        
        // Apply only when not-default language
        if (!$this->isDefaultLanguage()) {
            $ids['attachment'] = $this->getDefaultId($ids['attachment']);
            if ($ids['next'] !== false) {
                $ids['next'] = $this->getDefaultId($ids['next']);
            }
            if ($ids['lastInView'] !== false) {
                $ids['lastInView'] = $this->getDefaultId($ids['lastInView']);
            }
        }
        
        return $ids;
    }
    
    /**
     * Add a JOIN to the WPML count cache table.
     */
    public function sqlstatement_join($joins) {
        global $wpdb;
        $table_name = $this->getTableName("icl_count");
        
        // Check if table exists and create it
        $exists = strcasecmp($wpdb->get_var("SHOW TABLES LIKE '$table_name'"), $table_name);
        if (0 !== $exists) {
            $this->dbDeltaCountCache();
        }
        
        $joins[] = "LEFT JOIN $table_name AS rmlicl ON tn.id = rmlicl.fid";
        return $joins;
    }
    
    /**
     * Load the cnt from the WPML count cache table.
     */
    public function sqlstatement_select_fields($fields) {
        global $sitepress;
        $currentLanguage = $sitepress->get_current_language();
        $escaped = general\Util::getInstance()->esc_sql_name($currentLanguage);
        $fields[1] = "rmlicl.`cnt_$escaped` AS cnt, IFNULL(rmlicl.`cnt_$escaped`, (
            " . $this->getSingleCountSql($currentLanguage, "tn.id") . "
        )) AS cnt_result";
        return $fields;
    }
    
    /**
     * Get the single SQL for the subquery of count getter.
     */
    public function getSingleCountSql($code, $fieldId = 'tn.fid') {
        global $wpdb;
        $table_name_posts = $this->getTableName('posts');
        $where = empty($fieldId) ? "" : "WHERE rmlpostscnt.fid = $fieldId";
        
        return "SELECT COUNT(*) FROM $table_name_posts AS rmlpostscnt
        	INNER JOIN " . $wpdb->prefix . "icl_translations AS wpmlt
        	ON wpmlt.element_id = rmlpostscnt.attachment
        	AND wpmlt.element_type = 'post_attachment'
        	AND wpmlt.language_code = '$code'
        	$where";
    }
    
    /**
     * Update the count cache for WPML regarding the active languages.
     */
    public function updateCountCache($folders, $attachments, $where) {
        global $wpdb, $sitepress;
        $table_name = $this->getTableName();
        $table_name_posts = $this->getTableName('posts');
        $table_name_icl = $this->getTableName('icl_count');
        $langs = $sitepress->get_active_languages();
        $where = $where !== "tn.cnt IS NULL" // Ignore "all" for default table
            ? str_replace('tn.id', 'tn.fid', $where)
            : "1=1";
        
        // Keep both tables synced (performance should be good because both queries use the best available index)
        $wpdb->query("INSERT IGNORE INTO $table_name_icl (`fid`) SELECT id FROM $table_name");
        $wpdb->query("DELETE rmlicl FROM $table_name_icl AS rmlicl WHERE NOT EXISTS(SELECT * FROM $table_name AS rml WHERE rml.id = rmlicl.fid)");
            
        // Sync available languages counts
        $setters = array();
        foreach (array_keys($langs) as $code) {
            $escaped = general\Util::getInstance()->esc_sql_name($code);
            $setters[] = "`cnt_$escaped` = (" . $this->getSingleCountSql($code) . ")";
        }
        
        // Create UPDATE query
        $sqlStatement = "UPDATE $table_name_icl AS tn SET " . join(",", $setters) . " WHERE $where";
        $wpdb->query($sqlStatement);
        $this->debug("WPML: Update count cache table", __METHOD__);
    }
    
    /**
     * Fired when wpml language gets activated.
     */
    public function wpml_update_active_languages() {
        $this->debug("WPML: Update active languages in count cache table", __METHOD__);
        $this->dbDeltaCountCache();
    }
    
    /**
     * Create a count cache table with dbDelta functionality.
     */
    public function dbDeltaCountCache() {
        if (!$this->active) {
            return false;
        }
        
        $this->getCore()->getActivator()->install(false, array($this, '_dbDeltaCountCache'));
        
        return true;
    }
    
    public function _dbDeltaCountCache() {
        global $wpdb, $sitepress;
        $charset_collate = $wpdb->get_charset_collate();
        $table_name = $this->getTableName('icl_count');
        $langs = $sitepress->get_active_languages();
        
        if (count($langs) > 0) {
            $keys = "";
            $langs = array_keys($langs);
            foreach ($langs as $code) {
                $escaped = general\Util::getInstance()->esc_sql_name($code);
                $keys .= "`cnt_$escaped` mediumint(10) DEFAULT NULL,
    		    ";
            }
            
            $sql = "CREATE TABLE $table_name (
    		  fid mediumint(9) NOT NULL,
    		  " . trim($keys) . "
    		  UNIQUE KEY fid (fid)
    		) $charset_collate;";
    		dbDelta($sql);
    		
    		if ($update) {
    	    	attachment\CountCache::getInstance()->updateCountCache();
    		}
        }
    }
    
    /**
     * Register option for PolyLang
     */
    public function options_register() {
        register_setting( 'media', 'rml_wpml_move', 'esc_attr' );
        add_settings_field(
            'rml_wpml_move',
            '<label for="rml_wpml_move">'.__('WPML: Automatically move translations' , RML_TD ).'</label>' ,
            array($this, 'html_options_move'),
            'media',
            'rml_options_general'
        );
    }
    
    public function html_options_move() {
        $value = get_option( 'rml_wpml_move', '1' );
        echo '<input type="checkbox" id="rml_wpml_move"
                name="rml_wpml_move" value="1" ' . checked(1, $value, false) . ' />
                <label>' . __('If you move a file also move the associated translation files.', RML_TD) . '</label>';
    }
    
    /**
     * A file is moved (not copied) and then move also all the translations.
     */
    public function item_move_finished($folderId, $ids, $folder, $isShortcut) {
        if (!$isShortcut && get_option( 'rml_wpml_move', '1' ) === '1'
            && json_encode($ids) !== json_encode($this->previousIds)
            && $folderId !== $this->previousFolderId) {
            global $sitepress;
            $moveToFolder = array();
            $this->previousFolderId = $folderId;
            $this->previousIds = $ids;
            
            // Iterate all moved ids
            foreach ($ids as $post_id) {
                $trid = $sitepress->get_element_trid($post_id);
                $translations = $sitepress->get_element_translations($trid, "post_attachment");
                
                // Iterate all translation ids
                foreach ($translations as $tr) {
                    $tr_id = $tr->element_id;
                    if (!in_array($tr_id, $ids)) {
                        $moveToFolder[] = $tr_id;
                    }
                }
            }
            
            if (count($moveToFolder) > 0) {
                $this->debug("WPML: While moving to folder $folderId there are some translations which also must be moved: " . json_encode($moveToFolder), __METHOD__);
                wp_rml_move($folderId, $moveToFolder);
            }
        }
    }
    
    /**
     * New translation created => synchronize with original post.
     * Then reset the count cache for the unogranized folder.
     */
    public function wpml_media_create_duplicate_attachment($post_id, $tr_id) {
        $folderId = wp_attachment_folder($post_id);
        _wp_rml_synchronize_attachment($tr_id, $folderId);
        $this->debug("WPML: Move translation id " . $tr_id . " to the original file (" . $post_id . ") folder id " . $folderId, __METHOD__);

        attachment\CountCache::getInstance()->addNewAttachment($tr_id)
            ->resetCountCacheOnWpDie(_wp_rml_root());
    }
    
    /**
     * @see https://wpml.org/forums/topic/wp_count_posts/
     */
    public function wpml_count_attachments($count) {
        global $wpdb, $sitepress;
        $lang = $sitepress->get_current_language();
        $table_name = $wpdb->prefix . 'icl_translations';
        
        return (int) $wpdb->get_var("SELECT COUNT(*)
            FROM $table_name AS wpmlt
            INNER JOIN $wpdb->posts AS p ON p.id = wpmlt.element_id
            WHERE wpmlt.element_type =  'post_attachment'
            AND wpmlt.language_code =  '$lang'");
    }
    
    public function isDefaultLanguage() {
        global $sitepress;
        return $sitepress->get_current_language() === $sitepress->get_default_language();
    }
    
    public function getDefaultId($attachment) {
        global $sitepress;
        return apply_filters('wpml_object_id', $attachment, 'post', true, $sitepress->get_default_language());
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new WPML();
        }
        return self::$me;
    }
}

?>