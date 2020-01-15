<?php
/*
Plugin Name: Custom Twitter Feeds Pro Personal
Plugin URI: http://smashballoon.com/custom-twitter-feeds
Description: Customizable Twitter feeds for your website
Version: 1.6
Author: Smash Balloon
Author URI: http://smashballoon.com/
Text Domain: custom-twitter-feeds
*/
/*
Copyright 2019 Smash Balloon LLC (email: hey@smashballoon.com)
This program is paid software; you may not redistribute it under any
circumstances without the expressed written consent of the plugin author.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
*/

if ( ! defined( 'CTF_URL' ) ) {
    //Update info
    define( 'CTF_PRODUCT_NAME', 'Custom Twitter Feeds Personal' );
    define( 'CTF_PRODUCT_ID', '177805' ); //177805, 188603, 188605
    define( 'CTF_VERSION', '1.6' );
    //
    define( 'CTF_URL', plugin_dir_path( __FILE__ )  );
    define( 'CTF_JS_URL', plugins_url( '/js/ctf-scripts.js?ver=' . CTF_VERSION , __FILE__ ) );
    define( 'OAUTH_PROCESSOR_URL', 'https://api.smashballoon.com/twitter-login.php?return_uri=' );
    define( 'CTF_STORE_URL', 'https://smashballoon.com/' );
	define( 'CTF_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

if ( function_exists('ctf_init') ){
    wp_die( "Please deactivate the free version of the Custom Twitter Feeds plugin before activating this version.<br /><br />Back to the WordPress <a href='".get_admin_url(null, 'plugins.php')."'>Plugins page</a>." );
} else {
    include CTF_URL .'/inc/ctf-pro-functions.php';
}

function ctf_activate() {
    $existing_deprecated_options = get_option( 'ctf_configure' );
    $existing_pro_options = get_option( 'ctf_options' );

    if ( ! empty( $existing_deprecated_options ) && empty( $existing_pro_options ) ) {
        $merged_options = $existing_deprecated_options;
        $merged_options = array_merge( $merged_options, get_option( 'ctf_customize', array() ) );
        $merged_options = array_merge( $merged_options, get_option( 'ctf_style', array() ) );

        update_option( 'ctf_options', $merged_options );
    }

	set_transient( '_ctf_activation_redirect', true, 30 );
}
register_activation_hook( __FILE__, 'ctf_activate' );

//Plugin update script
if( !class_exists( 'EDD_SL_Plugin_Updater' ) ) {
    include( CTF_URL . '/inc/EDD_SL_Plugin_Updater.php' );
}
function sb_ctf_plugin_updater() {
    // Retrieve license key from the DB
    $ctf_license_key = trim( get_option( 'ctf_license_key' ) );

    // Setup the updater
    $edd_updater = new EDD_SL_Plugin_Updater( CTF_STORE_URL, __FILE__, array( 
            'version'   => CTF_VERSION,  // current version number
            'license'   => $ctf_license_key,  // license key
            'item_name' => CTF_PRODUCT_NAME,  // name of this plugin
            'author'    => 'Smash Balloon'  // author of this plugin
        )
    );
}
add_action( 'admin_init', 'sb_ctf_plugin_updater', 0 );

/**
 * Loads the javascript for the plugin front-end. Also localizes the admin-ajax file location for use in ajax calls
 */
function ctf_scripts_and_styles_pro() {
	$options = get_option( 'ctf_options' );
	$font_method = isset( $options['font_method'] ) ? $options['font_method'] : 'svg';
	$not_ajax_theme = (! isset( $options['ajax_theme'] ) || ! $options['ajax_theme']);

    wp_enqueue_style( 'ctf_styles', plugins_url( '/css/ctf-styles.css', __FILE__ ), array(), CTF_VERSION );

	if ( $font_method === 'fontfile' ) {
		wp_enqueue_style( 'sb-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
	}

	wp_register_script( 'ctf_twitter_intents', plugins_url( '/js/ctf-widgets.js', __FILE__ ), array( 'jquery' ), CTF_VERSION, true );

	if ( $not_ajax_theme ) {
		wp_register_script( 'ctf_scripts', plugins_url( '/js/ctf-scripts.js', __FILE__ ), array( 'jquery' ), CTF_VERSION, true );
		wp_localize_script( 'ctf_scripts', 'ctf', array(
				'ajax_url' => admin_url( 'admin-ajax.php' ),
				'font_method' => $font_method
			)
		);
	}

}
add_action( 'wp_enqueue_scripts', 'ctf_scripts_and_styles_pro' );

if ( ! function_exists( 'sb_remove_style_version' ) ) {
	function sb_remove_style_version( $src, $handle ){

		if ( $handle === 'sb-font-awesome' ) {
			$parts = explode( '?ver', $src );
			return $parts[0];
		} else {
			return $src;
		}

	}
	add_filter( 'style_loader_src', 'sb_remove_style_version', 15, 2 );
}

if ( ! function_exists( 'sb_remove_script_version' ) ) {
	function sb_remove_script_version( $src, $handle ){

		if ( $handle === 'sb-font-awesome-scripts' ) {
			$parts = explode( '?ver', $src );
			return $parts[0];
		} else {
			return $src;
		}

	}
	add_filter( 'script_loader_src', 'sb_remove_script_version', 15, 2 );
}

/**
 * Some CSS and JS needed in the admin area as well
 */
function ctf_admin_scripts_and_styles_pro() {
    wp_enqueue_style( 'ctf_admin_styles', plugins_url( '/css/ctf-admin-styles.css', __FILE__ ), array(), CTF_VERSION );
    wp_enqueue_script( 'ctf_admin_scripts', plugins_url( '/js/ctf-admin-scripts.js', __FILE__ ) , array( 'jquery' ), CTF_VERSION, false );
    wp_localize_script( 'ctf_admin_scripts', 'ctf', array(
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'sb_nonce' => wp_create_nonce( 'ctf-smash-balloon' )
        )
    );
    wp_enqueue_style( 'wp-color-picker' );
    wp_enqueue_script( 'wp-color-picker' );
}
add_action( 'admin_enqueue_scripts', 'ctf_admin_scripts_and_styles_pro' );

// Add a Settings link to the plugin on the Plugins page
$ctf_plugin_file = 'custom-twitter-feeds-pro/custom-twitter-feed.php';
add_filter( "plugin_action_links_{$ctf_plugin_file}", 'ctf_add_settings_link_pro', 10, 2 );
function ctf_add_settings_link_pro( $links, $file ) {
    $ctf_settings_link = '<a href="' . admin_url( 'admin.php?page=custom-twitter-feeds' ) . '">' . __( 'Settings', 'custom-twitter-feeds' ) . '</a>';
    array_unshift( $links, $ctf_settings_link );
    return $links;
}