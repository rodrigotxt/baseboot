<?php
namespace MatthiasWeb\RealMediaLibrary\folder;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\order;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class creates a collection object. (Type 1)
 * See parent classes / interfaces for better documentation.
 */
class Collection extends order\Sortable {
    /**
     * Insert is not allowed for a collection.
     */
    public function insert($ids, $supress_validation = false, $isShortcut = false) {
        throw new \Exception(__("A collection can not contain files.", RML_TD));
    }
    
    public static function create($rowData) {
        $result = new Collection($rowData->id);
        $result->setParent($rowData->parent);
        $result->setName($rowData->name, $rowData->supress_validation);
        $result->setRestrictions($rowData->restrictions);
        return $result;
    }
    
    public static function instance($rowData) {
        return new Collection($rowData->id, $rowData->parent, $rowData->name, $rowData->slug, $rowData->absolute, 
                            $rowData->ord, $rowData->cnt_result, $rowData);
    }
    
    public function getAllowedChildrenTypes() {
        return array(RML_TYPE_GALLERY, RML_TYPE_COLLECTION);
    }
    
    public function getTypeName($default = null) {
        return parent::getTypeName($default === null ? __('Collection', RML_TD) : $default);
    }
    
    public function getTypeDescription($default = null) {
        return parent::getTypeDescription($default === null ? __('A collection can not contain files. But you can create there other collections and <strong>galleries</strong>.', RML_TD) : $default);
    }
    
    public function getType() {
        return RML_TYPE_COLLECTION;
    }
}

?>