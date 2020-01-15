<?php
namespace ACP;

use AC;
use AC\Capabilities;
use AC\Integrations;
use AC\Registrable;
use AC\Storage;

class Updates implements Registrable {

	/** @var API */
	private $api;

	/** @var Integrations */
	private $integrations;

	/**
	 * @var License
	 */
	private $license;

	public function __construct( API $api, License $license ) {
		$this->api = $api;
		$this->license = $license;
		$this->integrations = new Integrations();
	}

	public function register() {

		// Register plugin and add-on to the WordPress updater.
		add_action( 'init', array( $this, 'register_updater' ), 9 );

		// Forces update check when user clicks "Check again" on dashboard page.
		add_action( 'init', array( $this, 'force_plugin_update_check_on_request' ) );

		// Update subscription renewal info (weekly).
		add_action( 'shutdown', array( $this, 'do_weekly_renewal_check' ) );
	}

	public function register_updater() {
		foreach ( $this->get_installed_plugins() as $basename => $version ) {

			// Add plugins to update process
			$updater = new Updates\Updater( $basename, $version, new API\Cached( $this->api ), $this->license->get_key() );
			$updater->register();

			// Click "view details" on plugin page
			$view_details = new Updates\ViewPluginDetails( dirname( $basename ), $this->api );
			$view_details->register();
		}
	}

	/**
	 * @return void
	 */
	public function force_plugin_update_check_on_request() {
		global $pagenow;

		if ( current_user_can( Capabilities::MANAGE ) && $pagenow === 'update-core.php' && '1' === filter_input( INPUT_GET, 'force-check' ) ) {
			$this->force_check_updates();
		}
	}

	/**
	 * @return void
	 */
	public function do_weekly_renewal_check() {
		$cache = new Storage\Timestamp(
			new Storage\Option( 'acp_renewal_check' )
		);

		if ( $cache->is_expired() ) {

			$subscription_updater = new Updates\UpdateSubscriptionDetails( $this->license, $this->api );
			$subscription_updater->update();

			$cache->save( time() + WEEK_IN_SECONDS );
		}
	}

	/**
	 * @return void
	 */
	private function force_check_updates() {
		$api = new API\Cached( $this->api, null, true );
		$api->dispatch( new API\Request\ProductsUpdate( $this->license->get_key() ) );
	}

	/**
	 * @return array [ $basename => $version ]
	 */
	private function get_installed_plugins() {
		$plugins = array(
			ACP()->get_basename() => ACP()->get_version(),
		);

		foreach ( $this->integrations as $integration ) {
			$plugin_info = new AC\PluginInformation( $integration->get_basename() );

			if ( $plugin_info->is_installed() ) {
				$plugins[ $plugin_info->get_basename() ] = $plugin_info->get_version();
			}
		}

		return $plugins;
	}

}