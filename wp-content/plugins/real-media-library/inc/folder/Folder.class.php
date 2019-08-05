<?php
namespace MatthiasWeb\RealMediaLibrary\folder;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\order;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class creates a folder object. (Type 0)
 * See parent classes / interfaces for better documentation.
 */
class Folder extends order\Sortable {
    
    public static function create($rowData) {
        $result = new Folder($rowData->id);
        $result->setParent($rowData->parent);
        $result->setName($rowData->name, $rowData->supress_validation);
        $result->setRestrictions($rowData->restrictions);
        return $result;
    }
    
    public static function instance($rowData) {
        return new Folder($rowData->id, $rowData->parent, $rowData->name, $rowData->slug, $rowData->absolute, 
                            $rowData->ord, $rowData->cnt_result, $rowData);
    }
    
    public function getAllowedChildrenTypes() {
        /**
         * Get allowed children folder types for a given folder type. $type can be 
         * replaced with RML_TYPE_FOLDER for example.
         * 
         * @param {int[]} $allowed The allowed folder types
         * @hook RML/Folder/Types/$type
         * @returns {int[]} The allowed folder types
         */
        return apply_filters("RML/Folder/Types/" . $this->getType(), array(RML_TYPE_FOLDER, RML_TYPE_COLLECTION));
    }
    
    public function getType() {
        return RML_TYPE_FOLDER;
    }
}
?>