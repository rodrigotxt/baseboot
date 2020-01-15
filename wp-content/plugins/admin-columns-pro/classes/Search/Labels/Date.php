<?php

namespace ACP\Search\Labels;

use ACP\Search\Labels;
use ACP\Search\Operators;

class Date extends Labels {

	public function __construct( array $labels = array() ) {
		$labels = array_merge( array(
			Operators::GT     => __( 'is after', 'codepress-admin-columns' ),
			Operators::LT     => __( 'is before', 'codepress-admin-columns' ),
			Operators::TODAY  => __( 'is today', 'codepress-admin-columns' ),
			Operators::PAST   => __( 'is in the past', 'codepress-admin-columns' ),
			Operators::FUTURE => __( 'is in the future', 'codepress-admin-columns' ),
		), $labels );

		parent::__construct( $labels );
	}

}