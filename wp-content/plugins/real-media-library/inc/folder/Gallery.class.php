<?php
namespace MatthiasWeb\RealMediaLibrary\folder;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\order;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class creates a gallery data folder object. (Type 2)
 * See parent classes / interfaces for better documentation.
 */
class Gallery extends order\Sortable {
    protected function singleCheckInsert($id) {
        if (!wp_attachment_is_image($id)) {
            throw new \Exception(__("You can only move images to a gallery.", RML_TD));
        }
    }
    
    public static function create($rowData) {
        $result = new Gallery($rowData->id);
        $result->setParent($rowData->parent);
        $result->setName($rowData->name, $rowData->supress_validation);
        $result->setRestrictions($rowData->restrictions);
        return $result;
    }
    
    public static function instance($rowData) {
        return new Gallery($rowData->id, $rowData->parent, $rowData->name, $rowData->slug, $rowData->absolute, 
                            $rowData->ord, $rowData->cnt_result, $rowData);
    }
    
    public function getAllowedChildrenTypes() {
        return array();
    }
    
    public function getTypeName($default = null) {
        return parent::getTypeName($default === null ? __('Gallery', RML_TD) : $default);
    }
    
    public function getTypeDescription($default = null) {
        return parent::getTypeDescription($default === null ? __('A gallery can contain only images. If you want to display a gallery go to a post and have a look at the visual editor buttons.', RML_TD) : $default);
    }
    
    public function getType() {
        return RML_TYPE_GALLERY;
    }
}

?>