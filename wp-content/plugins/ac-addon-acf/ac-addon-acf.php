<?php
/*
Plugin Name: 	Admin Columns Pro - Advanced Custom Fields (ACF)
Version: 		2.5.5
Description: 	Supercharges Admin Columns Pro with very cool ACF columns.
Author: 		Admin Columns
Author URI: 	https://www.admincolumns.com
Plugin URI: 	https://www.admincolumns.com
Text Domain: 	codepress-admin-columns
*/

use AC\Autoloader;
use ACA\ACF\AdvancedCustomFields;
use ACA\ACF\Dependencies;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! is_admin() ) {
	return;
}

require_once __DIR__ . '/classes/Dependencies.php';

add_action( 'after_setup_theme', function () {
	$dependencies = new Dependencies( plugin_basename( __FILE__ ), '2.5.5' );
	$dependencies->requires_acp( '4.7.1' );
	$dependencies->requires_php( '5.3.6' );

	if ( ! class_exists( 'acf', false ) ) {
		$dependencies->add_missing_plugin( 'Advanced Custom Fields', 'https://www.advancedcustomfields.com/' );
	}

	if ( $dependencies->has_missing() ) {
		return;
	}

	Autoloader::instance()->register_prefix( 'ACA\ACF', __DIR__ . '/classes/' );
	Autoloader\Underscore::instance()
	                     ->add_alias( 'ACA\ACF\Column', 'ACA_ACF_Column' )
	                     ->add_alias( 'ACA\ACF\Field', 'ACA_ACF_Field' );

	$addon = new AdvancedCustomFields( __FILE__ );
	$addon->register();
} );

function ac_addon_acf() {
	return new AdvancedCustomFields( __FILE__ );
}