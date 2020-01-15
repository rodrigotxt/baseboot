<?php
namespace ACP\API\Request;

use ACP\API\Request;

/**
 * Used for updating subscription information, such as expiration date.
 */
class SubscriptionDetails extends Request {

	/**
	 * @param string $license_key
	 */
	public function __construct( $license_key ) {
		parent::__construct( array(
			'command'          => 'subscription_details',
			'subscription_key' => $license_key,
		) );
	}

}