<?php
namespace MatthiasWeb\RealMediaLibrary\metadata;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\api;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Implements a cover image for root folder, collections, galleries and normal folders.
 */
class CoverImage extends base\Base implements api\IMetadata {
    public function __construct() {
        add_action("delete_attachment", array($this, "delete_attachment"));
    }
    
    public function delete_attachment($postid) {
        delete_metadata('realmedialibrary', null, "coverImage", $postid, true);
    }
    
    public function scripts($assets) {
        // Silence is golden.
    }
    
    public function content($content, $folder) {
        $id = $this->getAttachmentID($folder->getId());
        $filename = basename(get_attached_file($id));
        $url = wp_get_attachment_image_src($id, 'full');
        $display = 'display:' . ($url === false ? 'none' : 'inline-block');

        $content .= '<label>' . __('Cover image', RML_TD) . ' <a href="#" class="rml-coverimage-remove" style="text-decoration:none;' . $display . '"><span class="dashicons dashicons-no-alt"></span>Remove</a></label>
            <img class="rml-coverimage" src="' . ($url === false ? '' : $url[0]) . '" style="margin:5px 0;max-width:100%;height:auto;' . $display . ';" />
            <input name="coverImage" type="hidden" value="' . $id . '"/>
            <input class="regular-text" data-wprfc-visible="1" data-wprfc="metaCoverImage" value="' . esc_attr($filename) . '" type="text" disabled />';
        
        return $content;
    }
    
    public function save($response, $folder, $request) {
        $fid = $folder->getId();
        $coverImage = $this->getAttachmentID($fid);
        $new = $request->get_param('coverImage');
        
        if (isset($new) && $coverImage !== $new && wp_attachment_is_image($new)) {
            if (strlen($new) > 0) {
                update_media_folder_meta($fid, "coverImage", $new);
            }else{
                // Delete it
                delete_media_folder_meta($fid, "coverImage");
            }
        }
        return $response;
    }
    
    public function getAttachmentID($fid) {
        return get_media_folder_meta($fid, "coverImage", true);
    }
}