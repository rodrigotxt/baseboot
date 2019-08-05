<?php
namespace MatthiasWeb\RealMediaLibrary\folder;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\order;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class creates a root object. (Type 4)
 * See parent classes / interfaces for better documentation.
 */
class Root extends order\Sortable {
    
    private static $me = null;
    
    public function __construct() {
        parent::__construct(-1, null, "/" . __('Unorganized', RML_TD), "/", "/");
    }
    
    public function persist() {
        throw new \Exception("You can not persist the root folder.");
    }
    
    public function getSlug($force = false, $fromSetName = false) {
        return $this->slug;
    }
    
    public function getAbsolutePath($force = false, $fromSetName = false) {
        return $this->absolutePath;
    }
    
    public function getCnt($forceReload = false) {
        return attachment\Structure::getInstance()->getCntRoot();
    }
    
    public function setParent($id, $ord = -1, $force = false) {
        throw new \Exception("You can not set a parent for the root folder.");
    }
    
    public function setName($name, $supress_validation = false) {
        throw new \Exception("You can not set a name for the root folder.");
    }
    
    public function setRestrictions($restrictions = array()) {
        throw new \Exception("You can not set permissions for the root folder.");
    }
    
    public function getChildren() {
        return attachment\Structure::getInstance()->getTree();
    }
    
    public function getAllowedChildrenTypes() {
        return apply_filters("RML/Folder/Types/" . $this->getType(), array(RML_TYPE_FOLDER, RML_TYPE_COLLECTION)); // already documentated
    }
    
    public function getType() {
        return RML_TYPE_ROOT;
    }
    
    public function getContentCustomOrder() {
        return "2";
    }
    
    public function getTypeName($default = null) {
        return parent::getTypeName($default === null ? __('Unorganized', RML_TD) : $default);
    }
    
    public function getTypeDescription($default = null) {
        return parent::getTypeDescription($default === null ? __('Unorganized is the same as a root folder. Here you can find all files which are not assigned to a folder.', RML_TD) : $default);
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new Root();
        }
        return self::$me;
    }
}

?>