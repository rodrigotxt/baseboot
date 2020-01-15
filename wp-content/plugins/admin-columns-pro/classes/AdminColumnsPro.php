<?php

namespace ACP;

use AC;
use ACP\Admin;
use ACP\LayoutScreen;
use ACP\ThirdParty;
use ACP\Updates\AddonInstaller;

/**
 * The Admin Columns Pro plugin class
 * @since 1.0
 */
final class AdminColumnsPro extends AC\Plugin {

	/**
	 * @var AC\Admin
	 */
	private $network_admin;

	/**
	 * @var API
	 */
	private $api;

	/** @var License */
	private $license;

	/**
	 * @since 3.8
	 */
	private static $instance = null;

	/**
	 * @return AdminColumnsPro
	 * @since 3.8
	 */
	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		$this->api = new API();
		$this->api
			->set_url( ac_get_site_url() )
			->set_proxy( 'https://api.admincolumns.com' )
			->set_request_meta( array(
				'php_version' => PHP_VERSION,
				'acp_version' => $this->get_version(),
			) );

		$this->license = new License( $this->is_network_active() );

		$this->localize();

		$factory = new AdminFactory();
		$factory->create( is_network_admin(), AC()->admin(), $this->api, $this->license );

		add_action( 'init', array( $this, 'notice_checks' ) );

		add_filter( 'plugin_action_links', array( $this, 'add_settings_link' ), 1, 2 );
		add_filter( 'network_admin_plugin_action_links', array( $this, 'add_network_settings_link' ), 1, 2 );

		add_filter( 'ac/show_banner', '__return_false' );

		add_action( 'ac/table_scripts', array( $this, 'table_scripts' ) );

		add_action( 'init', array( $this, 'install' ) );

		add_filter( 'ac/view/templates', array( $this, 'templates' ) );

		$modules = array(
			new Editing\Addon(),
			new Sorting\Addon(),
			new Filtering\Addon(),
			new Export\Addon(),
			new Search\Addon(),
			new ThirdParty\ACF\Addon(),
			new ThirdParty\bbPress\Addon(),
			new ThirdParty\WooCommerce\Addon(),
			new ThirdParty\YoastSeo\Addon(),
			new LayoutScreen\Columns(),
			new LayoutScreen\Table(),
			new Table\HorizontalScrolling(),
			new ListScreens(),
			new NativeTaxonomies(),
			new IconPicker(),
			new TermQueryInformation(),
			new Updates( $this->api, $this->license ),
			new AddonInstaller( $this->api, $this->license->get_key() ),
		);

		foreach ( $modules as $module ) {
			if ( $module instanceof AC\Registrable ) {
				$module->register();
			}
		}
	}

	/**
	 * Localize
	 */
	public function localize() {
		load_plugin_textdomain( 'codepress-admin-columns', false, dirname( $this->get_basename() ) . '/languages/' );
		load_plugin_textdomain( 'codepress-admin-columns', false, dirname( $this->get_basename() ) . '/admin-columns/languages/' );
	}

	/**
	 * @return API
	 */
	public function get_api() {
		return $this->api;
	}

	/**
	 * Register notice checks
	 */
	public function notice_checks() {
		$checks = array(
			new Check\Activation( $this->license ),
			new Check\Expired( $this->license ),
			new Check\Renewal( $this->license ),
		);

		if ( $this->is_beta() ) {
			$checks[] = new Check\Beta( new Admin\Feedback() );
		}

		foreach ( $checks as $check ) {
			$check->register();
		}
	}

	/**
	 * @return string
	 */
	protected function get_file() {
		return ACP_FILE;
	}

	/**
	 * @return string
	 */
	protected function get_version_key() {
		return 'acp_version';
	}

	/**
	 * @param AC\ListScreen $list_screen
	 *
	 * @return Layouts
	 * @since 4.0
	 */
	public function layouts( AC\ListScreen $list_screen ) {
		return new Layouts( $list_screen );
	}

	/**
	 * @since 4.0
	 */
	public function network_admin() {
		return $this->network_admin;
	}

	/**
	 * @param array  $links
	 * @param string $file
	 *
	 * @return array
	 * @see   filter:plugin_action_links
	 * @since 1.0
	 */
	public function add_settings_link( $links, $file ) {
		if ( $file === $this->get_basename() ) {
			array_unshift( $links, sprintf( '<a href="%s">%s</a>', AC()->admin()->get_url( AC\Admin\Page\Columns::NAME ), __( 'Settings' ) ) );
		}

		return $links;
	}

	/**
	 * @param array  $links
	 * @param string $file
	 *
	 * @return array
	 */
	public function add_network_settings_link( $links, $file ) {
		if ( $file === $this->get_basename() ) {
			array_unshift( $links, sprintf( '<a href="%s">%s</a>', AC()->admin()->get_url( AC\Admin\Page\Settings::NAME ), __( 'Settings' ) ) );
		}

		return $links;
	}

	/**
	 * @return void
	 */
	public function table_scripts() {
		wp_enqueue_style( 'acp-table', $this->get_url() . "assets/core/css/table.css", array(), $this->get_version() );
		wp_enqueue_script( 'acp-table', $this->get_url() . "assets/core/js/table.js", array(), $this->get_version() );
	}

	/**
	 * @return void
	 */
	public function register_global_scripts() {
		wp_register_style( 'ac-jquery-ui', $this->get_url() . 'assets/core/css/ac-jquery-ui.css', array(), $this->get_version() );
	}

	/**
	 * @since 4.0
	 */
	public function editing() {
		_deprecated_function( __METHOD__, '4.5', 'acp_editing()' );

		return acp_editing();
	}

	/**
	 * @since 4.0
	 */
	public function filtering() {
		_deprecated_function( __METHOD__, '4.5', 'acp_filtering()' );

		return acp_filtering();
	}

	/**
	 * @since 4.0
	 */
	public function sorting() {
		_deprecated_function( __METHOD__, '4.5', 'acp_sorting()' );

		return acp_sorting();
	}

	/**
	 * @param array $templates
	 *
	 * @return array
	 */
	public function templates( $templates ) {
		$templates[] = $this->get_dir() . 'templates';

		return $templates;
	}

}