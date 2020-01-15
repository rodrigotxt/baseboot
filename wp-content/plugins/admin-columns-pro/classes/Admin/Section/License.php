<?php
namespace ACP\Admin\Section;

use AC;
use AC\Message;
use ACP;
use ACP\API;
use ACP\API\Request;
use WP_Error;

class License extends AC\Admin\Section\Custom {

	/**
	 * @var API
	 */
	protected $api;

	/** @var ACP\License */
	private $license;

	public function __construct( API $api, ACP\License $license ) {
		$this->api = $api;
		$this->license = $license;

		parent::__construct( 'updates', __( 'Updates', 'codepress-admin-columns' ), __( 'Enter your license code to receive automatic updates.', 'codepress-admin-columns' ) );
	}

	public function register() {
		$this->handle_request();

		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
	}

	public function admin_scripts() {
		wp_enqueue_style( 'acp-license-manager', ACP()->get_url() . "assets/core/css/license-manager.css", array(), ACP()->get_version() );
		wp_enqueue_script( 'acp-license-manager', ACP()->get_url() . "assets/core/js/license-manager.js", array( 'jquery' ), ACP()->get_version() );
	}

	/**
	 * Check if the license for this plugin is managed per site or network
	 * @return boolean
	 * @since 3.6
	 */
	private function is_network_managed_license() {
		return is_multisite() && is_plugin_active_for_network( ACP()->get_basename() );
	}

	/**
	 * @param string $license_key
	 *
	 * @return string|WP_Error Success message
	 */
	private function activate_license( $license_key ) {
		$license_key = sanitize_text_field( $license_key );

		if ( empty( $license_key ) ) {
			return new WP_Error( 'empty-license', __( 'Empty license.', 'codepress-admin-columns' ) );
		}

		$this->license->delete();

		$response = $this->api->dispatch( new Request\Activation( $license_key ) );

		if ( $response->has_error() ) {
			return $response->get_error();
		}

		if ( null === $response->get( 'activated' ) ) {
			return new WP_Error( 'error', __( 'Wrong response from API.', 'codepress-admin-columns' ) );
		}

		$this->license->set_key( $license_key )
		              ->set_status( 'active' );

		if ( $response->get( 'expiry_date' ) ) {
			$this->license->set_expiry_date( $response->get( 'expiry_date' ) );
		}

		if ( $response->get( 'renewal_discount' ) ) {
			$this->license->set_renewal_discount( $response->get( 'renewal_discount' ) );
		}

		if ( $response->get( 'renewal_method' ) ) {
			$this->license->set_renewal_method( $response->get( 'renewal_method' ) );
		}

		$this->license->save();

		// check for plugin updates with the activated license key.
		$this->clear_plugins_api_cache();

		return $response->get( 'message' );
	}

	/**
	 * @return string|WP_Error Success message
	 */
	private function deactivate_license() {
		$response = $this->api->dispatch( new Request\Deactivation( $this->license->get_key() ) );

		$this->license->delete();

		if ( $response->has_error() ) {
			return new WP_Error( 'error', __( 'Wrong response from API.', 'codepress-admin-columns' ) . ' ' . $response->get_error()->get_error_message() );
		}

		if ( null === $response->get( 'deactivated' ) ) {
			return new WP_Error( 'error', __( 'Wrong response from API.', 'codepress-admin-columns' ) );
		}

		return $response->get( 'message' );
	}

	private function clear_plugins_api_cache() {
		$api = new API\Cached( $this->api, null, true );
		$api->dispatch( new API\Request\ProductsUpdate( $this->license->get_key() ) );

		// force update check
		delete_site_transient( 'update_plugins' );
	}

	private function update_license() {
		// update subscription info
		$subscription_updater = new ACP\Updates\UpdateSubscriptionDetails( $this->license, $this->api );
		$subscription_updater->update();

		$this->clear_plugins_api_cache();
	}

	/**
	 * @param string|WP_Error $message
	 */
	private function request_notice( $message ) {
		if ( is_wp_error( $message ) ) {
			$notice = new Message\Notice( $message->get_error_message() );
			$notice->set_type( $notice::ERROR );
		} else {
			$notice = new Message\Notice( wp_kses_post( $message ) );
		}

		$notice->register();
	}

	public function handle_request() {
		if ( ! current_user_can( AC\Capabilities::MANAGE ) ) {
			return;
		}

		if ( ! wp_verify_nonce( filter_input( INPUT_POST, '_acnonce' ), 'acp-license' ) ) {
			return;
		}

		switch ( filter_input( INPUT_POST, 'action' ) ) {
			case 'activate' :
				$message = $this->activate_license( filter_input( INPUT_POST, 'license' ) );
				$this->request_notice( $message );

				break;
			case 'deactivate' :
				$message = $this->deactivate_license();
				$this->request_notice( $message );

				break;
			case 'update' :
				$this->update_license();
				$this->request_notice( __( 'License information has been updated.', 'codepress-admin-columns' ) );

				break;
		}
	}

	public function display_fields() {
		/**
		 * Hook is used for hiding the license form from the settings page
		 *
		 * @param bool false Show license input fields
		 */
		if ( ! apply_filters( 'acp/display_licence', true ) ) {
			return;
		}

		// When the plugin is network activated, the license is managed globally
		if ( $this->is_network_managed_license() && ! is_network_admin() ) {
			?>
			<p>
				<?php
				$page = __( 'network settings page', 'codepress-admin-columns' );

				if ( current_user_can( 'manage_network_options' ) ) {
					$page = ac_helper()->html->link( network_admin_url( 'settings.php?page=codepress-admin-columns' ), $page );
				}

				printf( __( 'The license can be managed on the %s.', 'codepress-admin-columns' ), $page );
				?>
			</p>
			<?php
		} else {

			?>

			<form id="licence_activation" action="" method="post">
				<?php wp_nonce_field( 'acp-license', '_acnonce' ); ?>

				<?php if ( $this->license->get_key() ) : ?>

					<?php if ( $this->license->needs_update() ) : ?>
						<p>
							<span class="dashicons dashicons-no-alt"></span>
							<?php _e( 'Automatic updates are disabled.', 'codepress-admin-columns' ); ?>
							<button type="submit" class="button" name="action" value="deactivate"><?php _e( 'Deactivate license', 'codepress-admin-columns' ); ?></button>
							<button type="submit" class="button" name="action" value="update"><?php _e( 'Check license', 'codepress-admin-columns' ); ?></button>
						</p>

					<?php else : ?>

						<?php if ( $this->license->is_expired() ) : ?>
							<p>
								<span class="dashicons dashicons-no-alt"></span>
								<?php printf( __( 'License has expired on %s', 'codepress-admin-columns' ), '<strong>' . date_i18n( get_option( 'date_format' ), $this->license->get_expiry_date() ) . '</strong>' ); ?>
								<button type="submit" class="button" name="action" value="deactivate"><?php _e( 'Deactivate license', 'codepress-admin-columns' ); ?></button>
								<button type="submit" class="button" name="action" value="update"><?php _e( 'Check license', 'codepress-admin-columns' ); ?></button>
							</p>
						<?php else : ?>
							<p>
								<span class="dashicons dashicons-yes"></span>
								<?php _e( 'Automatic updates are enabled.', 'codepress-admin-columns' ); ?>
								<button type="submit" class="button" name="action" value="deactivate"><?php _e( 'Deactivate license', 'codepress-admin-columns' ); ?></button>
								<button type="submit" class="button" name="action" value="update"><?php _e( 'Check license', 'codepress-admin-columns' ); ?></button>
							</p>
							<p class="description">
								<?php if ( $this->license->has_expiry_date() ): ?>
									<?php _e( 'You have a lifetime license and your license will never expire.', 'codepress-admin-columns' ); ?>
								<?php else: ?>
									<?php printf( __( 'License is valid until %s', 'codepress-admin-columns' ), '<strong>' . date_i18n( get_option( 'date_format' ), $this->license->get_expiry_date() ) . '</strong>' ); ?>
								<?php endif; ?>
							</p>
						<?php endif; ?>

					<?php endif; ?>

				<?php else : ?>
					<input type="password" value="<?php echo esc_attr( $this->license->get_key() ); ?>" name="license" size="30" placeholder="<?php echo esc_attr( __( 'Enter your license code', 'codepress-admin-columns' ) ); ?>">
					<button type="submit" class="button" name="action" value="activate"><?php _e( 'Update license', 'codepress-admin-columns' ); ?></button>
					<p class="description">
						<?php printf( __( 'You can find your license key on your %s.', 'codepress-admin-columns' ), '<a href="' . ac_get_site_utm_url( 'my-account', 'license-activation' ) . '" target="_blank">' . __( 'account page', 'codepress-admin-columns' ) . '</a>' ); ?>
					</p>
				<?php endif; ?>
			</form>
			<?php
		}
	}

}