<?php
namespace MatthiasWeb\RealMediaLibrary\metadata;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\api;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Implements a description field.
 */
class Description implements api\IMetadata {
    
    public function getDescription($folder_id) {
        return get_media_folder_meta($folder_id, "description", true);
    }
    
    public function content($content, $folder) {
        $description = $this->getDescription($folder->getId());
        $content .= '<label>' . __('Description') . '</label><textarea name="description" class="regular-text">' . esc_textarea($description) . '</textarea>';
        
        return $content;
    }
    
    public function save($response, $folder, $request) {
        $fid = $folder->getId();
        $description = $this->getDescription($fid);
        $new = $request->get_param("description");
        
        if (isset($new) && $new !== $description) {
            if (strlen($new) > 0) {
                update_media_folder_meta($fid, "description", $new);
            }else{
                // Delete it
                delete_media_folder_meta($fid, "description");
            }
        }
        return $response;
    }
    
    public function scripts($assets) {
        // Silence is golden.
    }
}