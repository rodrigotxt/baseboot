<?php
namespace MatthiasWeb\RealMediaLibrary\usersettings;
use MatthiasWeb\RealMediaLibrary\base;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\api;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Add an option so the user can hide shortcuts in "All files" view.
 * 
 * @since 4.0.8
 */
class AllFilesShortcuts extends base\Base implements api\IUserSettings {
    
    use CommonUserSettingsTrait;
    
    const FIELD_NAME = 'hideAllFilesShortcuts';
    
    const OPTION_NAME = 'rmlHideAllFilesShortcuts';
    
    public function __construct() {
        if (self::isEnabled()) {
            add_filter('RML/Filter/PostsClauses', array($this, 'posts_clauses'), 10, 3);
        }
    }
    
    public function posts_clauses($clauses, $query, $folderId) {
        $isGridMode = defined('DOING_AJAX') && DOING_AJAX && isset($_REQUEST['action']) && $_REQUEST['action'] === 'query-attachments';
        $isListMode = $this->getCore()->getAssets()->isScreenBase('upload');
        if (($isGridMode || $isListMode) && $folderId === 0) {
            $clauses['where'] .= ' AND IFNULL(rmlposts.isShortcut, 0) = 0 ';
        }
        return $clauses;
    }
    
    public function content($content, $user) {
        $content .= '<label><input name="' . self::FIELD_NAME . '" type="checkbox" value="1" ' . checked(1, self::isEnabled(), false) . ' /> ' . __('Hide shortcuts in "All files"', RML_TD) . '</label>
            <p class="description">' . __('The count is always inclusive shortcuts', RML_TD) . '</p>';
        return $content;
    }
    
    public function save($response, $user, $request) {
        $param = $request->get_param(self::FIELD_NAME);
        if (self::isEnabled($param === '1') !== false)
            $this->reloadAfterSave($response);
        return $response;
    }

    public function scripts($assets) {
        // Silence is golden.
    }
    
    public static function isEnabled($persist = null) {
        return self::is(self::OPTION_NAME, $persist);
    }
}