<?php
namespace MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\folder;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**.
 * Folders permission handling.
 * 
 * @see folder\Folder::$restrictions
 * @see folder\Folder::isRestrictFor
 * @see Structure::createFolder
 */
class Permissions extends base\Base {
    
    private static $me = null;
    
    /**
     * Restrict to insert/upload new attachments, automatically moved to root if upload
     * Restrict to move files outside of a folder.
     */
    public static function insert($errors, $id, $folder) {
        if (is_rml_folder($folder) && $folder->isRestrictFor("ins")) {
            $errors[] = __("You are not allowed to insert files here.", RML_TD);
            return $errors;
        }
        
        // Check if "mov" of current folder is allowed
        $otherFolder = wp_attachment_folder($id);
        if ($otherFolder !== "") {
            $otherFolder = wp_rml_get_by_id($otherFolder, null, true);
            if (is_rml_folder($otherFolder) && $otherFolder->isRestrictFor("mov")) {
                $errors[] = __("You are not allowed to move the file.", RML_TD);
            }
        }
        
        return $errors;
    }
    
    /**
     * Restrict to create new subfolders.
     */
    public static function create($errors, $name, $parent, $type) {
        $folder = wp_rml_get_by_id($parent, null, true);
        if (is_rml_folder($folder) && $folder->isRestrictFor("cre")) {
            $errors[] = __("You are not allowed to create a subfolder here.", RML_TD);
        }
        return $errors;
    }
    
    /**
     * Restrict to create new subfolders.
     */
    public static function deleteFolder($errors, $id, $folder) {
        if (is_rml_folder($folder) && $folder->isRestrictFor("del")) {
            $errors[] = __("You are not allowed to delete this folder.", RML_TD);
        }
        return $errors;
    }
    
    /**
     * Restrict to rename a folder.
     */
    public static function setName($errors, $name, $folder) {
        if (is_rml_folder($folder) && $folder->isRestrictFor("ren")) {
            $errors[] = __("You are not allowed to rename this folder.", RML_TD);
        }
        return $errors;
    }

    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new Permissions();
        }
        return self::$me;
    }
}

?>