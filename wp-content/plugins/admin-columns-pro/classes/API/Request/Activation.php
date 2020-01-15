<?php
namespace ACP\API\Request;

use ACP\API\Request;

class Activation extends Request {

	public function __construct( $license_key ) {
		parent::__construct( array(
			'command'          => 'activation',
			'subscription_key' => $license_key,
			'site_url'         => site_url(),
		) );
	}

}