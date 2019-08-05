<?php
namespace MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class handles all hooks for the custom field in a attachments dialog.
 */
class CustomField extends base\Base {
    private static $me = null;
    
    private function __construct() {
        // Silence is golden.
    }
    
    /**
     * When editing a attachment show up a select option to change the parent folder.
     */
    public function attachment_fields_to_edit($form_fields, $post) {
        if (!wp_rml_active()) {
            return $form_fields;
        }
        
        $folderID = wp_attachment_folder($post->ID);
        
        // Check move permission
        $editable = true;
        if ($folderID > 0) {
            $folder = wp_rml_get_object_by_id($folderID);
            $editable = is_rml_folder($folder) && !$folder->isRestrictFor("mov");
        }
        
        $isShortcut = wp_attachment_is_shortcut($post->ID);
        
        $textToMove = $isShortcut
                        ? __("When you move this shortcut, the folder location of the source/main file will not be changed.", RML_TD)
                        : __("When you move this attachment, the folder location of the associated shortcuts of this attachment will not be changed.", RML_TD);
        
        /**
         * This content is showed in the attachment details below the custom field dropdown.
         * 
         * @param {string} $output HTML output
         * @param {WP_Post} $post The attachment
         * @param {boolean} $isShortcut If true the file is a shortcut
         * @parma {array} $form_fields
         * @returns {string} The HTML output
         * @since 4.0.7
         * @hook RML/CustomField
         */
        $appendHTML = apply_filters('RML/CustomField', '', $post, $isShortcut, $form_fields);
        
        // Create form field
        $form_fields['rml_dir'] = array(
        	'label' => __('Folder', RML_TD),
        	'input' => 'html',
        	'html'  => '<div class="rml-folder-edit">' .
        	    ($editable ? '<select class="rml-wprfc" data-wprfc="customField" data-selected="' . esc_attr($folderID) . '" name="attachments[' . $post->ID . '][rml_folder]"></select>' : '') .
    	        Structure::getInstance()->getView()->breadcrumb($folderID, $editable) . 
    	        '</div><p class="description">' . $textToMove . '</p>' . $appendHTML
        );
        
        // Create form field
        $form_fields['rml_shortcut'] = array(
        	'label' => '',
        	'input' => 'html',
        	'html'  => '<div class="rml-wprfc" data-wprfc="shortcutInfo" data-id="' . $post->ID . '"></div><script>jQuery(function() { window.rml.hooks.call("wprfc"); });</script>'
        );
        return $form_fields;
    }
    
    /**
     * Get the HTML shortcut info container.
     * 
     * @param int $postId The post id
     * @returns string
     */
    public function getShortcutInfoContainer($postId) {
        $post = get_post($postId);
        $output = "";
        
        if ($post !== null) {
            // Return output
            $output = '<div class="rml-shortcut-info-container" data-id="' . $postId . '">
                <div style="clear:both;"></div>
                <h2>' . __('Shortcut infos', RML_TD) . '</h2>';
            
            $shortcut = wp_attachment_is_shortcut($post, true);
            $output .= '<p class="description">';
            if ($shortcut > 0) {
                $output .= __('This is a shortcut of a media library file. Shortcuts doesn\'t need any physical storage <strong>(0kb)</strong>. If you want to change the file itself, you must do this in the original file (for example replace media file through a plugin).<br/>Note also that the fields in the shortcuts can be different to the original file, for example "Title", "Description" or "Caption".', RML_TD) . '
                    <a target="_blank" href="' . admin_url("post.php?post=" . $shortcut . "&action=edit") . '">Open original file.</a>';
            }else{
                $shortcuts = wp_attachment_get_shortcuts($post->ID, false, true);
                $shortcutsCnt = count($shortcuts);
                if ($shortcutsCnt > 0) {
                    $output .= sprintf(_n("For this file is one shortcut available in the following folder:", "For this file are %s shortcuts available in the following folders:", $shortcutsCnt, RML_TD), $shortcutsCnt);
                    foreach ($shortcuts as $value) {
                        $folderName = $value["folderId"] == "-1" ? wp_rml_get_object_by_id(-1)->getName(true) : htmlentities($value["name"]);
                        $output .= '<div>';
                        $output .= $folderName . ' (<a target="_blank" href="' . admin_url("post.php?post=" . $value["attachment"] . "&action=edit") . '">Open shortcut file</a>)';
                        $output .= '</div>';
                    }
                }else{
                    $output .= __("This file has no associated shortcuts. You can create shortcuts by moving files per mouse and hold any key.", RML_TD);
                }
            }
            $output .= '</p>';
            
            /**
             * This content is showed in the attachment details. It shows informations
             * about the shortcut.
             * 
             * @param {string} $output HTML output
             * @param {WP_Post} $post The attachment
             * @param {int} $shortcut If > 0 it is an attachment id (source)
             * @returns {string} The HTML output
             * @hook RML/Shortcut/Info
             */
            apply_filters("RML/Shortcut/Info", $output, $post, $shortcut);
    	    $output .= '</div>';
        }
        return $output;
    }
    
    /**
     * When saving a attachment change the parent folder.
     */
    public function attachment_fields_to_save($post, $attachment) {
        if (isset($attachment['rml_folder']) && wp_rml_active()) {
            $folder = wp_rml_get_object_by_id($attachment['rml_folder']);
            $folderId = $folder === null ? _wp_rml_root() : $folder->getId();
            
            // Get previous folder id
            $currentFolderId = wp_attachment_folder($post["ID"]);
            if ($currentFolderId !== $folderId) {
                $updateCount = array($currentFolderId, $folderId);
                
                // Update to new folder id
                $result = wp_rml_move($folderId, array($post['ID']));
                if (is_array($result)) {
                    $post['errors']['rml_folder']['errors'][] = implode(" ", $result);
                }
                
                // Reset the count of both folders manually because we do not use the wp_rml_move api method
                CountCache::getInstance()->resetCountCache($updateCount);
            }
        }
        
        return $post;
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new CustomField();
        }
        return self::$me;
    }
}