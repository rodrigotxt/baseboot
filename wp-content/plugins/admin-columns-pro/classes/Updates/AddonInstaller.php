<?php
namespace ACP\Updates;

use AC\Ajax;
use AC\Registrable;
use ACP\API;
use ACP\RequestDispatcher;
use Plugin_Upgrader;
use WP_Ajax_Upgrader_Skin;
use WP_Error;

class AddonInstaller implements Registrable {

	/** @var RequestDispatcher */
	private $api;

	/** @var string */
	private $license_key;

	public function __construct( RequestDispatcher $api, $license_key ) {
		$this->api = $api;
		$this->license_key = $license_key;
	}

	public function register() {
		$this->get_ajax_handler()->register();
	}

	/**
	 * @return Ajax\Handler
	 */
	protected function get_ajax_handler() {
		$handler = new Ajax\Handler();
		$handler->set_action( 'acp-install-addon' )
		        ->set_callback( array( $this, 'ajax_handle_request' ) );

		return $handler;
	}

	public function ajax_handle_request() {
		$this->get_ajax_handler()->verify_request();

		if ( ! current_user_can( 'install_plugins' ) ) {
			return;
		}

		if ( ! $this->license_key ) {
			$message = __( 'License is not active.', 'codepress-admin-columns' ) . ' ' . sprintf( __( 'Enter your license key on <a href="%s">the settings page</a>.', 'codepress-admin-columns' ), $this->get_license_page_url() );

			wp_send_json_error( $message );
		}

		$plugin_name = filter_input( INPUT_POST, 'plugin_name' );

		$response = $this->api->dispatch( new API\Request\DownloadInformation( $plugin_name, $this->license_key ) );

		// Check download permission by requesting download information.
		if ( $response->has_error() ) {
			wp_send_json_error( $response->get_error()->get_error_message() );
		}

		$plugin_basename = $this->install_plugin( $response->get( 'download_link' ) );

		if ( is_wp_error( $plugin_basename ) ) {
			wp_send_json_error( $plugin_basename->get_error_message() );
		}

		if ( ! $plugin_basename ) {
			wp_send_json_error( __( 'Install failed.', 'codepress-admin-columns' ) );
		}

		$result = activate_plugin( $plugin_basename );

		wp_send_json_success( array(
			'installed' => true,
			'activated' => null === $result,
			'status'    => __( 'Active', 'codepress-admin-columns' ),
		) );
	}

	/**
	 * Check if the license for this plugin is managed per site or network
	 * @return boolean
	 * @since 3.6
	 */
	private function is_network_managed_license() {
		return is_multisite() && ACP()->is_network_active();
	}

	/**
	 * Get the URL to manage your license based on network or site managed license
	 * @return string
	 */
	private function get_license_page_url() {
		$url = ac_get_admin_url( 'settings' );

		if ( $this->is_network_managed_license() ) {
			$url = ACP()->network_admin()->get_url( 'settings' );
		}

		return $url;
	}

	/**
	 * @param string $package zip file
	 *
	 * @return string|WP_Error|false Plugin basename on success. False or WP_Error when failed.
	 */
	private function install_plugin( $package_url ) {
		include_once( ABSPATH . 'wp-admin/includes/class-wp-upgrader.php' );
		include_once( ABSPATH . 'wp-admin/includes/plugin-install.php' );

		$skin = new WP_Ajax_Upgrader_Skin();
		$upgrader = new Plugin_Upgrader( $skin );

		$result = $upgrader->install( $package_url );

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		if ( $skin->get_errors()->get_error_codes() ) {
			return $skin->get_errors();
		}

		if ( true !== $result ) {
			return false;
		}

		return $upgrader->plugin_info();
	}

}