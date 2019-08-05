<?php
/**
 * @wordpress-plugin
 * Plugin Name: 	WP Real Media Library
 * Plugin URI:		https://matthias-web.com/wordpress/real-media-library/
 * Description: 	Organize your wordpress media library in a nice way.
 * Author:          Matthias Günter
 * Author URI:		https://matthias-web.com
 * Version: 		4.2.0
 * Text Domain:		real-media-library
 * Domain Path:		/languages
 */

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * Plugin constants. This file is procedural coding style for initialization of
 * the plugin core and definition of plugin configuration.
 */
if (defined('RML_PATH')) return;
define('RML_FILE', __FILE__);
define('RML_PATH', realpath(plugin_dir_path(RML_FILE)));
define('RML_INC', trailingslashit(realpath(path_join(RML_PATH, 'inc'))));
define('RML_MIN_PHP', '5.4.0'); // Minimum of PHP 5.4 required for autoloading, namespaces and traits
define('RML_MIN_WP', '4.4.0'); // Minimum of WordPress 4.4 required
define('RML_NS', 'MatthiasWeb\\RealMediaLibrary');
define('RML_DB_PREFIX', 'realmedialibrary'); // The table name prefix wp_{prefix}
define('RML_OPT_PREFIX', 'rml'); // The option name prefix in wp_options
//define('RML_TD', ''); This constant is defined in the core class. Use this constant in all your __() methods
//define('RML_VERSION', ''); This constant is defined in the core class
//define('RML_DEBUG', true); This constant should be defined in wp-config.php to enable the Base::debug() method

// Folder types
define('RML_TYPE_FOLDER', 0);
define('RML_TYPE_COLLECTION', 1);
define('RML_TYPE_GALLERY', 2);
define('RML_TYPE_ALL', 3);
define('RML_TYPE_ROOT', 4);

// Check PHP Version and print notice if minimum not reached, otherwise start the plugin core
require_once(RML_INC . "others/" . (version_compare(phpversion(), RML_MIN_PHP, ">=") ? "start.php" : "fallback-php-version.php"));