<?php
namespace ACP\API;

use AC\Transient;
use ACP\RequestDispatcher;
use ReflectionClass;

class Cached implements RequestDispatcher {

	/** @var RequestDispatcher */
	private $api;

	/**
	 * @var int Seconds
	 */
	private $expiration;

	/** @var bool */
	private $force_update;

	public function __construct( RequestDispatcher $api, $expiration = null, $force_update = false ) {
		if ( null === $expiration ) {
			$expiration = HOUR_IN_SECONDS;
		}

		$this->api = $api;
		$this->expiration = absint( $expiration );
		$this->force_update = (bool) $force_update;
	}

	private function get_cache( Request $request ) {
		$reflect = new ReflectionClass( $request );

		return new Transient( 'ac_api_request_' . sanitize_key( $reflect->getShortName() ) );
	}

	/**
	 * @param Request $request
	 *
	 * @return Response
	 */
	public function dispatch( Request $request ) {
		$cache = $this->get_cache( $request );

		if ( $cache->is_expired() || $this->force_update ) {
			$cache->save( serialize( $this->api->dispatch( $request ) ), $this->expiration );
		}

		return unserialize( $cache->get() );
	}

}