<?php
namespace MatthiasWeb\RealMediaLibrary\base;
use MatthiasWeb\RealMediaLibrary\general;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * Base class for all available classes for the plugin.
 */
abstract class Base {
    /**
     * Simple-to-use error_log debug log. This debug is only outprintted when
     * you define RML_DEBUG=true constant in wp-config.php 
     * 
     * @param mixed $message The message
     * @param string $methodOrFunction __METHOD__ OR __FUNCTION__
     */
    public function debug($message, $methodOrFunction = null) {
        $log = (empty($methodOrFunction) ? "" : "(" . $methodOrFunction . ")") . ": " . (is_string($message) ? $message : json_encode($message));
        if (function_exists('get_option') && get_option("rml_debug")) {
            global $wpdb;
            $tablename = $this->getTableName("debug");
            $wpdb->query($wpdb->prepare("INSERT INTO $tablename (`text`) VALUES(%s);", $log));
        }
        if (defined('RML_DEBUG') && RML_DEBUG) {
            error_log("RML_DEBUG " . $log);
        }
    }
    
    /**
     * Get a plugin relevant table name depending on the RML_DB_PREFIX constant.
     * 
     * @param string $name Append this name to the plugins relevant table with _{$name}.
     * @returns string
     */
    public function getTableName($name = "") {
        global $wpdb;
        return $wpdb->prefix . RML_DB_PREFIX . (($name == "") ? "" : "_" . $name);
    }
    
    /**
     * Get the core.
     * 
     * @returns general\Core
     */
    public function getCore() {
        return general\Core::getInstance();
    }
}