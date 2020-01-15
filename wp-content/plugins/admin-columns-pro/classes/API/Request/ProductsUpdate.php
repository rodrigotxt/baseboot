<?php
namespace ACP\API\Request;

use ACP\API\Request;

/**
 * Used for the WordPress plugin updater
 */
class ProductsUpdate extends Request {

	/**
	 * @param string $license_key
	 */
	public function __construct( $license_key ) {
		parent::__construct( array(
			'command'          => 'products_update',
			'subscription_key' => $license_key,
		) );
	}

}