<?php

namespace ACP\Check;

use AC;
use AC\Ajax;
use AC\Capabilities;
use AC\Message;
use AC\Screen;
use AC\Storage;
use ACP\License;
use Exception;

class Renewal
	implements AC\Registrable {

	/** @var License */
	private $license;

	/**
	 * @var int[] Intervals to check in ascending order with a max of 90 days
	 */
	protected $intervals;

	public function __construct( License $license ) {
		$this->license = $license;
		$this->intervals = array( 1, 7, 21 );
	}

	public function register() {
		add_action( 'ac/screen', array( $this, 'display' ) );

		$this->get_ajax_handler()->register();
	}

	public function ajax_dismiss_notice() {
		$this->get_ajax_handler()->verify_request();

		$interval = (int) filter_input( INPUT_POST, 'interval', FILTER_SANITIZE_NUMBER_INT );

		if ( ! array_key_exists( $interval, $this->intervals ) ) {
			wp_die();
		}

		// 90 days
		$result = $this->get_dismiss_option( $interval )->save( time() + ( MONTH_IN_SECONDS * 3 ) );

		wp_die( $result );
	}

	/**
	 * @return Ajax\Handler
	 */
	protected function get_ajax_handler() {
		$handler = new Ajax\Handler();
		$handler->set_action( 'ac_notice_dismiss_renewal' )
		        ->set_callback( array( $this, 'ajax_dismiss_notice' ) );

		return $handler;
	}

	/**
	 * @param int $interval
	 *
	 * @return Storage\Timestamp
	 * @throws Exception
	 */
	protected function get_dismiss_option( $interval ) {
		return new Storage\Timestamp(
			new Storage\UserMeta( 'ac_notice_dismiss_renewal_' . $interval )
		);
	}

	/**
	 * @param Screen $screen
	 *
	 * @throws Exception
	 */
	public function display( Screen $screen ) {
		if ( ! $screen->has_screen() ) {
			return;
		}

		if ( ! current_user_can( Capabilities::MANAGE ) ) {
			return;
		}

		if ( apply_filters( 'acp/hide_renewal_notice', false ) ) {
			return;
		}

		if ( ! $screen->is_admin_screen() && ! $screen->is_list_screen() && ! $screen->is_plugin_screen() ) {
			return;
		}

		if ( ! $this->license->is_active() || $this->license->is_expired() || $this->license->is_auto_renew() ) {
			return;
		}

		$interval = $this->get_current_interval( (int) $this->license->get_time_remaining( 'days' ) );

		if ( false === $interval ) {
			return;
		}

		if ( ! $this->get_dismiss_option( $interval )->is_expired() ) {
			return;
		}

		$ajax_handler = $this->get_ajax_handler();
		$ajax_handler->set_param( 'interval', $interval );

		$notice = new Message\Notice\Dismissible(
			$this->get_message( $this->license->get_expiry_date(), $this->license->get_time_remaining( 'days' ), $this->license->get_renewal_discount() ),
			$ajax_handler
		);

		$notice
			->set_type( $notice::WARNING )
			->register();
	}

	/**
	 * Get the current interval compared to the license state. Returns false when no interval matches
	 *
	 * @param int $remaining_days
	 *
	 * @return false|int
	 */
	protected function get_current_interval( $remaining_days ) {
		foreach ( $this->intervals as $k => $interval ) {
			if ( $interval >= $remaining_days ) {
				return $k;
			}
		}

		return false;
	}

	/**
	 * @return string
	 */
	protected function get_message( $expiration_date, $remaining_days, $discount ) {
		$expiry_date = '<strong>' . date_i18n( get_option( 'date_format' ), $expiration_date ) . '</strong>';
		$days = '<strong>' . sprintf( _n( '1 day', '%s days', $remaining_days, 'codepress-admin-columns' ), $remaining_days ) . '</strong>';
		$renewal_link = ac_helper()->html->link( ac_get_site_utm_url( 'my-account', 'renewal' ), __( 'Renew your license', 'codepress-admin-columns' ) );

		if ( $discount ) {
			return sprintf(
				__( "Your Admin Columns Pro license will expire in %s. %s before %s to get a %d%% discount!", 'codepress-admin-columns' ),
				$days,
				$renewal_link,
				$expiry_date,
				$discount
			);
		}

		return sprintf(
			__( "Your Admin Columns Pro license will expire in %s. In order get access to new features and receive security updates, please %s before %s.", 'codepress-admin-columns' ),
			$days,
			strtolower( $renewal_link ),
			$expiry_date
		);
	}

}