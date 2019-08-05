<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Handles the view for dropdowns and custom UI's for folders.
 */
class View extends base\Base {
    private $structure;
    
    private $namesSlugArrayCache = null;
    
    public function __construct($structure) {
        $this->structure = $structure;
    }
    
    /**
     * Create dropdown from the current users tree.
     * 
     * @returns string HTML
     */
    public function dropdown($selected, $disabled, $useAll = true) {
        return $this->optionsHTML($selected, null, "", "&nbsp;&nbsp;", $useAll, $disabled);
    }
    
    /**
     * Gets a HTML formatted string for <option>.
     */
    private function optionsHTML($selected = -1, $tree = null, $slashed = "", $spaces = "&nbsp;&nbsp;", $useAll = true, $disabled = null) {
        $return = '';
        $selected = $selected == -1 ? _wp_rml_root() : $selected;
        
        if ($disabled === null) {
            $disabled = array();
        }
        
        if ($tree == null) {
            $root = _wp_rml_root();
            $tree = $this->structure->getTree();
            if ($useAll) {
                $return .= '<option value="" ' . $this->optionsSelected($selected, "") . 
                                ((in_array(RML_TYPE_ALL, $disabled)) ? 'disabled="disabled"' : '') . 
                                '>' . __('All', RML_TD) . '</option>';
            }
            $return .= '<option value="' . $root . '" ' . $this->optionsSelected($selected, $root) . 'data-path="/"' .
                            ((in_array(RML_TYPE_ROOT, $disabled)) ? 'disabled="disabled"' : '') .
                            ' data-name="' . esc_attr(__('/ Unorganized', RML_TD)) . '"' .
                            ' data-type="' . RML_TYPE_ROOT . '">' . __('/ Unorganized', RML_TD) . '</option>';
        }
        
        if(!is_null($tree) && count($tree) > 0) {
            foreach($tree as $parent) {
                $return .= '<option value="' . $parent->getId() . '" ' . $this->optionsSelected($selected, $parent->getId()) .
                                    ' data-path="/' . esc_attr($parent->getAbsolutePath()) . '"' .
                                    ' data-name="' . esc_attr($parent->getName()) . '"' .
                                    ' data-type="' . $parent->getType() . '"' .
                                    ((in_array($parent->getType(), $disabled)) ? ' disabled="disabled" ' : '') . '>' .
                                    $spaces . '&nbsp;' . $parent->getName(true) . '</option>';
                
                if (is_array($parent->getChildren()) &&
                    count($parent->getChildren()) > 0
                    ) {
                    $return .= $this->optionsHTML($selected, $parent->getChildren(), $slashed, str_repeat($spaces, 2), $useAll, $disabled);
                }
            }
        }
        
        return $return;
    }
    
    public function optionsSelected($selected, $value) {
        if ((is_array($selected) && in_array($value, $selected)) || $selected == $value) {
            return 'selected="selected"';
        }else{
            return '';
        }
    }
    
    /*
     * Get array for the javascript backbone view.
     * The private namesSlugArray is for caching purposes
     * and can be resetted with the given function.
     */
    public function namesSlugArray($tree = null, $spaces = "--", $forceReload = false) {
        if ($forceReload || $this->namesSlugArrayCache == null) {
            $result = $this->namesSlugArrayRec($tree, $spaces);
        }else{
            $result = $this->namesSlugArrayCache;
        }
        $this->namesSlugArrayCache = $result;
        return $result;
    }
    
    private function namesSlugArrayRec($tree = null, $spaces = "--") {
        $return = array(
            "names" => array(),
            "slugs" => array(),
            "types" => array()
        );
        
        if ($tree == null) {
            $tree = $this->structure->getTree();
            $return["names"][] = __('Unorganized pictures', RML_TD);
            $return["slugs"][] = _wp_rml_root();
            $return["types"][] = 0;
        }
        
        if(!is_null($tree) && count($tree) > 0) {
            foreach($tree as $parent) {
                $return["names"][] = $spaces . ' ' . $parent->getName();
                $return["slugs"][] = $parent->getId();
                $return["types"][] = $parent->getType();
                
                if (is_array($parent->getChildren()) &&
                    count($parent->getChildren()) > 0
                    ) {
                    $append = $this->namesSlugArrayRec($parent->getChildren(), $spaces . "--");
                    $return["names"] = array_merge($return["names"], $append["names"]);
                    $return["slugs"] = array_merge($return["slugs"], $append["slugs"]);
                    $return["types"] = array_merge($return["types"], $append["types"]);
                }
            }
        }
        
        return $return;
    }
    
    public function breadcrumb($id, $editable = false) {
        // Get folder
        $folder = wp_rml_get_object_by_id($id);
        if ($folder === null) {
            return '';
        }
        
        $parents = array_reverse($folder->getAllParents(null, 2));
        $parents[] = $folder->getName();
        return '<div class="rml-wprfc" data-wprfc="breadcrumb"'.
                    'data-attachment="' . esc_attr($id) . '"'.
                    'data-path="' . esc_attr(json_encode($parents)) . '"'.
                    'data-editable="' . esc_attr($editable) . '"></div>'.
                '<script>jQuery(function() { window.rml.hooks.call("wprfc"); });</script>';
    }
    
    public function getStructure() {
        return $this->structure;
    }
}

?>