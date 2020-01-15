<?php
namespace ACP\API\Request;

use ACP\API\Request;

/**
 * Used for installing 'add-ons'
 */
class DownloadInformation extends Request {

	/**
	 * @param string $plugin_name e.g. 'plugin-name'
	 * @param string $license_key
	 */
	public function __construct( $plugin_name, $license_key ) {
		parent::__construct( array(
			'command'          => 'download_link',
			'subscription_key' => $license_key,
			'plugin_name'      => $plugin_name,
			'site_url'         => site_url(),
		) );
	}

}