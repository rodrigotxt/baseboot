<?php
namespace MatthiasWeb\RealMediaLibrary\metadata;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Trait common folder meta and user settings helper methods.
 * 
 * @since 4.0.8
 */
trait CommonTrait {
    /**
     * Reload the current selected folder after the metadata is successfully saved.
     */
    private function reloadAfterSave(&$response) {
        if (!isset($response['data']['reload']) || $response['data']['reload'] === false) {
            $response['data']['reload'] = true;
        }
    }
}