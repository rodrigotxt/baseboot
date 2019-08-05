<?php
namespace MatthiasWeb\RealMediaLibrary\metadata;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\api;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Create general functionality for the custom folder fields.
 * 
 * For an example see the function-doc of this::content_general and this::save_general
 */
class Meta extends base\Base implements api\IMetadata {
    
    private static $me = null;
    private $view = null;
    private $boxes = array();

    private function __construct() {
        // Add our folder meta table to wpdb
        global $wpdb;
        if (!isset($wpdb->realmedialibrary_meta)) {
            $wpdb->realmedialibrarymeta = general\Core::tableName("meta");
        }
        
        $this->view = attachment\Structure::getInstance()->getView();
    }
    
    public function content($content, $folder) {
        $type = $folder->getType();
        if ($type !== RML_TYPE_ROOT) {
            $content .= '<label>' . __('Path', RML_TD) . '</label>' . $folder->getPath(' > ') . '';
        }

        $content .= '<label>' . __('Folder type', RML_TD) . '</label>' . $folder->getTypeName() . ' <i>' . $folder->getTypeDescription() . '</i>';
        return $content;
    }
    
    public function save($response, $folder, $request) {
        return $response;
    }
    
    public function scripts($assets) {
        // Silence is golden.
    }
    
    public function prepare_content($fid) {
        $folder = null;
        $inputID = "all";
        $type = RML_TYPE_ALL;
        if (!empty($fid)) {
            $folder = wp_rml_get_object_by_id($fid);
            $inputID = $folder->getId();
            $type = $folder->getType();
            
            if ($folder === null) {
                return "404";
            }
        }
        
        /**
         * Add a tab group to the folder details or user settings dialog.
         * You cam use this function together with add_rml_meta_box()
         * or add_rml_user_settings_box(). Allowed $types: "User/Settings"|"Folder/Meta".
         * 
         * @param {array} $tabs The tabs with key (unique tab name) and value (display text)
         * @hook RML/$type/Groups
         * @returns {array} The tabs
         * @since 3.3
         */
        $tabs = apply_filters("RML/" . ($type === RML_TYPE_ALL ? "User/Settings" : "Folder/Meta") . "/Groups", array(
            "general" => __("General", RML_TD)
        ));
        
        // Create content form
        $content = '<form method="POST" action="">
            <input type="hidden" name="folderId" value="' . $inputID . '" />
            <input type="hidden" name="folderType" value="' . $type . '" />
            <ul class="rml-meta-errors"></ul>';
        
        // Create groups
        foreach ($tabs as $key => $value) {
            $content .= '<h3>' . $value . '</h3>';
            $hookAddition = $key === "general" ? "" : "/" . $key;
            
            // Create group content
            if ($type === RML_TYPE_ALL) {
                /**
                 * Add content to the general settings. Do not use this filter directly instead use the 
                 * add_rml_user_settings_box() function!
                 * 
                 * @param {string} $content The HTML content
                 * @param {int} $user The current user id
                 * @hook RML/User/Settings/Content[/$tabGroup]
                 * @returns {string} The HTML content
                 * @since 3.2
                 */
                $content .= apply_filters('RML/User/Settings/Content' . $hookAddition, "", get_current_user_id());
            }else{
                /**
                 * Add content to the folder metabox. Do not use this filter directly instead use the 
                 * add_rml_meta_box() function!
                 * 
                 * @param {string} $content The HTML content
                 * @param {IFolder} $folder The folder object
                 * @hook RML/Folder/Meta/Content[/$tabGroup]
                 * @returns {string} The HTML content
                 * @since 3.3.1 $folder can never be null
                 */
                $content .= apply_filters('RML/Folder/Meta/Content' . $hookAddition, "", $folder);
            }
        }
        
        $content .= '</form>';
        return $content;
    }
    
    public function add($name, $instance) {
        if ($this->get($name) !== null) {
            return false;
        }else{
            $this->boxes[$name] = $instance;
            return true;
        }
    }
    
    public function get($name) {
        foreach ($this->boxes as $key => $value) {
            if ($key === $name) {
                return $value;
            }
        }
        return null;
    }
    
    public function exists($name) {
        return $this->get($name) !== null;
    }
    
    public function folder_deleted($fid, $oldData) {
        truncate_media_folder_meta($fid);
    }

    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new Meta();
        }
        return self::$me;
    }
}