<?php

namespace ACP\Search\Comparison\User\Date;

use ACP\Search\Comparison;
use ACP\Search\Operators;

class Registered extends Comparison\User\Date {

	protected function get_field() {
		return 'user_registered';
	}

	/**
	 * @return Operators
	 */
	public function operators() {
		return new Operators( array(
			Operators::EQ,
			Operators::GT,
			Operators::LT,
			Operators::BETWEEN,
			Operators::TODAY,
		) );
	}

}