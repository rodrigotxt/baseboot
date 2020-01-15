<?php
namespace ACP\API\Request;

use ACP\API\Request;

class Deactivation extends Request {

	public function __construct( $license_key ) {
		parent::__construct( array(
			'command'          => 'deactivation',
			'subscription_key' => $license_key,
			'site_url'         => site_url(),
		) );
	}

}