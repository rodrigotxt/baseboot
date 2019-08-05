<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\folder;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Handles the shortcode for [folder-gallery].
 */
class FolderShortcode extends base\Base {
    private static $me = null;
    
    public static $TAG = 'folder-gallery';
    
    function __construct($args = array()){
        if (is_admin() && wp_rml_active()) {
            add_action('admin_head', array($this, 'admin_head'));
            add_action('RML/Localize', array($this, 'localize'));
        }
    }
    
    function admin_head() {
        // check user permissions
        if (!current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' )) {
            return;
        }
 
        // check if WYSIWYG is enabled
        if ('true' == get_user_option( 'rich_editing' )) {
            add_filter('mce_external_plugins', array( $this ,'mce_external_plugins' ));
            add_filter('mce_buttons', array($this, 'mce_buttons' ));
        }
    }
    
    public function shortcode_atts_gallery($out, $pairs, $atts) {
        $atts = shortcode_atts( array(
            'fid' => -2,
            'order' => 'DESC',
            'orderby' => 'date'
        ), $atts );
        
        // The fid can also come from $out
        if (isset($out['fid']) && $out['fid'] > -2) {
            $atts['fid'] = $out['fid'];
        }
        
        // RML order is only available with ASC
        if ($atts["orderby"] == "rml" || $out['orderby'] == "rml") {
            $out["orderby"] = "menu_order ID";
        }
        
        if ($atts["fid"] > -2) {
            if ($atts["fid"] > -1) {
                $folder = wp_rml_get_object_by_id($atts["fid"]);
                if ($folder != null) {
                    $out["include"] .= ',' . implode(',', $folder->read($atts["order"], $atts["orderby"]));
                }
            }else{
                $out["include"] .= ',' . implode(',', folder\Creatable::xread(-1, $atts["order"], $atts["orderby"]));
            }
            $out["include"] = ltrim($out["include"], ',');
            $out["include"] = rtrim($out["include"], ',');
        }
        
        // Overwrite the default order by this shortcode
        if (isset($out["orderby"]) && $out["orderby"] == "menu_order ID") {
            $out["orderby"] = "post__in";
        }
        
        return $out;
    }
    
    /**
     * Localized variables for TinyMCE shortcode generator.
     */
    public function localize($arr) {
        $arr["mce"] = array(
            'mceButtonTooltip' => __('Gallery from Media Folder', RML_TD),
            'mceListBoxDirsTooltip' => __('Note: You can only select galleries. Folders and collections are grayed.', RML_TD),
            'mceBodyGallery' => __('Folder', RML_TD),
            'mceBodyLinkTo' => __('Link to'),
            'mceBodyColumns' => __('Columns'),
            'mceBodyRandomOrder' => __('Random Order'),
            'mceBodySize' => __('Size'),
            'mceBodyLinkToValues' => array(
                array("value" => "post", "text" => __('Attachment File')),
                array("value" => "file", "text" => __('Media File')),
                array("value" => "none", "text" => __('None'))
            ),
            'mceBodySizeValues' => array(
                array("value" => "thumbnail", "text" => __('Thumbnail')),
                array("value" => "medium", "text" => __('Medium')),
                array("value" => "large", "text" => __('Large')),
                array("value" => "full", "text" => __('Full Size'))
            )
        );
        return $arr;
    }
 
    function mce_external_plugins( $plugin_array ) {
        $assets = $this->getCore()->getAssets();
        $dir = $assets->isScriptDebug() ? "dev" : "dist";
        $plugin_array[self::$TAG] = plugins_url('public/' . $dir . '/rml_shortcode.js' , RML_FILE );
        return $plugin_array;
    }
 
    function mce_buttons( $buttons ) {
        array_push($buttons, self::$TAG);
        return $buttons;
    }

    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new FolderShortcode();
        }
        return self::$me;
    }
}