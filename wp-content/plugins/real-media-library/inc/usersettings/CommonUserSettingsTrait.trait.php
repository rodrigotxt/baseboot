<?php
namespace MatthiasWeb\RealMediaLibrary\usersettings;
use MatthiasWeb\RealMediaLibrary\metadata;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Trait common user settings helper methods.
 * 
 * @since 4.0.8
 */
trait CommonUserSettingsTrait {
    use metadata\CommonTrait;
    
    /**
     * Gets (and persists) a checkbox to the user (settings) metadata.
     * 
     * @param string $meta The meta key
     * @param boolean $persist If setted it will be updated or deleted
     * @returns boolean
     */
    static protected function is($meta, $persist = null) {
        if ($persist !== null) {
            if ($persist) {
                return update_user_meta(get_current_user_id(), $meta, $persist);
            }else{
                return delete_user_meta(get_current_user_id(), $meta);
            }
        }
        return (boolean) get_user_meta(get_current_user_id(), $meta, true);
    }
}