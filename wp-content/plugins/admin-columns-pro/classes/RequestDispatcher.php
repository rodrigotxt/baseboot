<?php
namespace ACP;

use ACP\API\Request;
use ACP\API\Response;

interface RequestDispatcher {

	/** @return Response */
	public function dispatch( Request $request );

}