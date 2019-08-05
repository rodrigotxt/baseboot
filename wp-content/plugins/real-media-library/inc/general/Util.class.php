<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\folder;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Util.
 */
class Util extends base\Base {
    
	private static $me = null;

    private function __construct() {
        // Silence is golden.
    }
    
    /**
     * Query multiple sql statements.
     * 
     * @param string... $args SQL statements
     */
    public function query() {
        global $wpdb;
        
        if (is_array(func_get_arg(0))) {
            $sqls = func_get_arg(0);
        }else{
            $sqls = func_get_args();
        }
        
        foreach ($sqls as $param) {
            $wpdb->query($param);
        }
    }
    
    public function doActionAnyParentHas($folder, $action, $args = null) {
        global $wpdb;
        if (!is_rml_folder($folder)) {
            return;
        }
        
        /**
         * Add a condition after a defined action ($action) to check if any parent has a metadata.
         * It also includes the self folder so you can check for own folder metadata.
         * <strong>Note:</strong> All found parents are grouped and passed through an action
         * RML/$action/AnyParentHasMeta/$meta_key so you can execute your command. The allowed
         * $actions are:
         * <ul>
         *  <li>"Folder/Insert": Items are moved to the folder (see RML/Item/MoveFinished action for $args)</li>
         *  <li>Your action: Please contact Real Media Library developer to request another action</li>
         * </ul>
         * 
         * @param {string[]} $conditions The conditions which are joined together with OR
         * @param {IFolder} $folder The IFolder object
         * @param {arguments[]} $args The referenced arguments
         * @example <caption>Add a condition</caption>
         * $conditions[] = $wpdb->prepare("rmlmeta.meta_key = 'myMeta' AND rmlmeta.meta_value = %s", "test");
         * @returns {string[]} The conditions
         * @see IFolder::anyParentHasMetadata()
         * @see wp_rml_create_all_parents_sql()
         * @see RML/$action/AnyParentHasMeta/$meta_key
         * @hook RML/$action/AnyParentHasMeta
         * @since 3.3
         */
        $conditions = apply_filters("RML/" . $action . "/AnyParentHasMeta", array(), $folder, $args);
        if (count($conditions) > 0) {
            $sql = wp_rml_create_all_parents_sql($folder, true, null, array(
                "fields" => "rmlmeta.meta_id AS id, rmlmeta.realmedialibrary_id AS folderId, rmlmeta.meta_key, rmlmeta.meta_value AS value",
                "join" => "JOIN " . $this->getTableName("meta") . " rmlmeta ON rmlmeta.realmedialibrary_id = rmldata.id",
                "afterWhere" => "AND ((" . implode(") OR (", $conditions) . "))"
            ));
            
            if ($sql !== false) {
                $rows = $this->group_by($wpdb->get_results($sql, ARRAY_A), "meta_key");
                foreach ($rows as $meta_key => $metas) {
                    /**
                     * This action is called for the results of the RML/$action/AnyParentHasMeta filter.
                     * <strong>Note:</strong> The allowed $actions are: See RML/$action/AnyParentHasMeta
                     * 
                     * @param {array} $metas Result array for this meta key, similar to IFolder::anyParentHasMetadata result
                     * @param {IFolder} $folder The IFolder object
                     * @param {arguments[]} $args The referenced arguments which are also passed to RML/$action/AnyParentHasMeta
                     * @param {array} $all_metas All found metas grouped by meta_key so you can check for multiple meta_keys
                     * @see RML/$action/AnyParentHasMeta
                     * @hook RML/$action/AnyParentHasMeta/$meta_key
                     * @since 3.3
                     */
                    do_action("RML/" . $action . "/AnyParentHasMeta/" . $meta_key, $metas, $folder, $args, $rows);
                }
            }
        }
    }
    
    /**
     * Build a tree from an array.
     * 
     * @see https://stackoverflow.com/questions/8840319/build-a-tree-from-a-flat-array-in-php
     */
    public function buildTree(&$elements, $parentId = -1, $keyParent = 'parent', $key = 'id', $keyChildren = 'children') {
        $branch = array();
        foreach ($elements as &$element) {
            if ($element[$keyParent] == $parentId) {
                $children = $this->buildTree($elements, $element[$key], $keyParent, $key, $keyChildren);
                if ($children) {
                    $element[$keyChildren] = $children;
                }
                $branch[$element[$key]] = $element;
                unset($element);
            }
        }
        return $branch;
    }
    
    /**
     * Clears an array of a tree of the parent and id values.
     *
     * @param array $tree The result of this::buildTree
     * @param string[] $clear
     * @parma string $keyChildren
     */
    public function clearTree(&$tree, $clear = array(), $keyChildren = 'children') {
        foreach ($tree as &$node) {
            foreach ($clear as $c) {
                if (isset($node[$c])) {
                    unset($node[$c]);
                }
            }
            if (isset($node[$keyChildren])) {
                $this->clearTree($node[$keyChildren], $clear, $keyChildren);
                $node[$keyChildren] = array_values($node[$keyChildren]);
            }
        }
        return array_values($tree);
    }
    
    public function group_by($array, $key) {
        $return = array();
        foreach($array as $val) {
            $return[$val[$key]][] = $val;
        }
        return $return;
    }
    
    /**
     * Fixing the missing isShortcut parameter in wp_realmedialibrary_posts
     * when SC is given in the guid.
     */
    public function fixIsShortcutInPosts() {
        $this->debug("Fixing the isShortcut parameter in posts table...", __METHOD__);
        
        global $wpdb;
        $table_name_posts = $this->getTableName("posts");
        $result = $wpdb->get_results("SELECT rmlp.*, p.guid FROM $table_name_posts rmlp
        INNER JOIN $wpdb->posts p ON rmlp.attachment = p.ID
        WHERE rmlp.isShortcut = 0 AND p.guid LIKE '%?sc=%'", ARRAY_A);
        
        $this->debug("Found " . count($result) . " rows", __METHOD__);
        foreach ($result as $row) {
            preg_match('/\?sc=([0-9]+)$/', $row["guid"], $matches);
            if (isset($matches) && is_array($matches) && isset($matches[1])) {
                $sc = (int) $matches[1];
                $sql = $wpdb->query($wpdb->prepare("UPDATE $table_name_posts SET isShortcut = %d WHERE attachment = %d AND fid = %d AND isShortcut = %d",
                    $sc, $row["attachment"], $row["fid"], $row["isShortcut"]));
            }
        }
    }
    
    /**
     * Allows to reset all names with slugs and absolute pathes.
     */
    public function resetAllSlugsAndAbsolutePathes($remap = null) {
        global $wpdb;
        $this->debug("Start resetting names, slugs and absolute pathes...", __METHOD__);
        
        // Read rows
        $table_name = $this->getTableName();
        $sql = "SELECT t1.id, t2.name FROM ( SELECT t0.r_init AS id, IF(t0.reset_r = 1, (@r := t0.r_init), (@r := (select parent from $table_name where id = @r))) AS r, IF(t0.reset_r = 1, (@l := 1), (@l := @l + 1)) AS lvl FROM (SELECT m0.id as counter, m1.id AS r_init, ((SELECT min(id) FROM $table_name) = m0.id) AS reset_r FROM $table_name m0, $table_name m1 ORDER BY r_init, counter) t0 ORDER BY t0.r_init, t0.counter ) t1 INNER JOIN $table_name t2 ON t2.id = t1.r WHERE r <> -1 ORDER BY id, lvl DESC";
        $rows = $wpdb->get_results($sql, ARRAY_A); // folder|folderparentpart|name
        if (count($rows) > 0) {
            // Create migration table
            $table_name_reset = $this->getTableName("resetnames");
            $this->getCore()->getActivator()->install(false, array($this, "resetAllSlugsAndAbsolutePathesTable"));
            
            // Clear already created resets
            $wpdb->query("DELETE FROM " . $table_name_reset);
            
            // Get rows and create
            $rows = $this->group_by($rows, "id");
            $sqlInserts = array();
            foreach ($rows as $fid => $parts) {
                $names = array();
                foreach ($parts as $part) {
                    $names[] = $part["name"];
                }
                if ($remap !== null) {
                    $names = array_map($remap, $names);
                }
                $slugs = array_map("_wp_rml_sanitize", $names);
                
                $partCount = count($names);
                $lastIdx = $partCount - 1;
                
                // Updateable columns
                $name = $names[$lastIdx];
                $slug = $slugs[$lastIdx];
                $absolutePath = implode("/", $slugs);
                
                // Add to update statement
                if (!empty($name)) {
                    $sqlInserts[] = $wpdb->prepare("%d,%s,%s,%s", $fid, $name, $slug, $absolutePath);
                }
            }
            
            // Create SQL INSERT statements
            $chunks = array_chunk($sqlInserts, 150);
            foreach ($chunks as $sqlInsert) {
                $sql = "INSERT INTO $table_name_reset VALUES (" . implode("),(", $sqlInserts) . ")";
                $wpdb->query($sql);
            }
            
            // Create UPDATE statement
            $wpdb->query("UPDATE $table_name AS rml
                LEFT JOIN $table_name_reset AS rmlnew ON rml.id = rmlnew.id
                SET rml.name = rmlnew.name, rml.slug = rmlnew.slug, rml.absolute = rmlnew.absolute");
            
            // Clear again
            //$wpdb->query("DELETE FROM " . $table_name_reset);
        }
        
        // Resolve duplicate slugs
        $this->debug("Reset finished", __METHOD__);
        $dups = $wpdb->get_results("SELECT rml.id, rml.slug
            FROM $table_name rml
            INNER JOIN (
             SELECT rmlSlug.slug
                FROM $table_name rmlSlug
                GROUP BY rmlSlug.slug
                HAVING COUNT( id ) > 1
            ) j ON rml.slug = j.slug", ARRAY_A);
        if (count($dups) > 0) {
            $this->debug("Resolving duplicate slugs...", __METHOD__);
            foreach ($this->group_by($dups, "slug") as $dupIds) {
                for ($i = 1; $i < count($dupIds); $i++) {
                    $folder = wp_rml_get_object_by_id($dupIds[$i]["id"]);
                    if ($folder !== null) {
                        $folder->updateThisAndChildrensAbsolutePath();
                    }
                }
            }
        }
    }
    
    public function resetAllSlugsAndAbsolutePathesTable() {
        $this->debug("Create reset table...", __METHOD__);
        $table_name = $this->getTableName("resetnames");
        $sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL,
			name tinytext NOT NULL,
			slug text DEFAULT '' NOT NULL,
			absolute text DEFAULT '' NOT NULL,
			UNIQUE KEY id (id)
		) $charset_collate;";
		dbDelta( $sql );
    }
    
    /**
     * @see wp_rml_create_all_parents_sql
     */
    public function createSQLForAllParents($folder, $includeSelf = false, $until = null, $options = null) {
        global $wpdb;
        
        // Get folder id
        $folderId = $folder instanceof folder\Creatable ? $folder->getId() : $folder;
        if (!is_numeric($folderId)) {
            return false;
        }
        
        // Parse options
        $options = array_merge(array(
            "fields" => "rmldata.*, rmltmp.lvl AS lvlup",
            "join" => "",
            "where" => "rmltmp.lvl > " . ($includeSelf === true ? "-1" : "0"),
            "afterWhere" => "",
            "orderby" => "rmltmp.lvl ASC",
            "limit" => ""
        ), $options === null ? array() : $options);
        
        $table_name = general\Core::getInstance()->getTableName();
        return $wpdb->prepare("SELECT " . $options["fields"] . "
            FROM ( SELECT @r AS _id, (SELECT @r := parent FROM $table_name WHERE id = _id) AS parent, @l := @l + 1 AS lvl
                    FROM (SELECT @r := %d, @l := -1) vars, $table_name m
                    WHERE @r <> %d) rmltmp
            JOIN $table_name rmldata ON rmltmp._id = rmldata.id " . $options["join"] . "
            WHERE " . $options["where"] . " " . $options["afterWhere"] . "
            ORDER BY " . $options["orderby"] . " " . $options["limit"], $folderId, $until == null ? _wp_rml_root() : $until);
    }
    
    /**
     * @see wp_rml_create_all_children_sql
     */
    public function createSQLForAllChildren($folder, $includeSelf = false, $options = null) {
        global $wpdb;
        
        // Get folder id
        $folderId = $folder instanceof folder\Creatable ? $folder->getId() : $folder;
        if (!is_numeric($folderId)) {
            return false;
        }
        
        // Parse options
        $options = array_merge(array(
            "fields" => "rmldata.*",
            "join" => "",
            "where" => '1=1 ' . ($includeSelf === true ? "" : $wpdb->prepare(" AND rmldata.id != %d", $folderId)),
            "afterWhere" => "",
            "orderby" => "rmldata.parent, rmldata.ord",
            "limit" => ""
        ), $options === null ? array() : $options);
        
        // Set concat size for this session
        $wpdb->query('SET SESSION group_concat_max_len = 100000');
        $table_name = general\Core::getInstance()->getTableName();
        return 'SELECT ' . $options['fields'] . ' FROM (SELECT _rmldata.*
        	FROM (SELECT * FROM ' . $table_name . ' ORDER BY parent, id) _rmldata, 
        		(SELECT @pv := ' . $wpdb->prepare('%d', $folderId) . ') initialisation 
        	WHERE (FIND_IN_SET(_rmldata.parent, @pv) > 0 AND @pv := CONCAT(@pv, \',\', _rmldata.id)) OR @pv = _rmldata.id
        ) rmldata ' . $options['join'] . ' WHERE ' . $options['where'] . ' ' . $options['afterWhere'] . ' ORDER BY ' . $options['orderby'] . ' ' . $options['limit'];
    }
    
    public function esc_sql_name($name) {
        return str_replace( "`", "``", $name );
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new Util();
        }
        return self::$me;
    }
}

?>