<?php

namespace ACP\Search\Helper;

use ACP\Search\Value;
use DateTime;
use Exception;

class DateValueFactory {

	/**
	 * @var string
	 */
	protected $type;

	/**
	 * @var string
	 */
	protected $format;

	/**
	 * @param string $type
	 * @param string $format
	 */
	public function __construct( $type, $format = null ) {
		if ( null === $format ) {
			$format = $this->get_format_from_type( $format );
		}

		$this->type = $type;
		$this->format = $format;
	}

	/**
	 * @param string $type
	 *
	 * @return string
	 */
	protected function get_format_from_type( $type ) {
		if ( $type === Value::INT ) {
			return 'U';
		}

		return 'Y-m-d H:i:s';
	}

	/**
	 * @param DateTime $start
	 * @param DateTime $end
	 *
	 * @return Value
	 */
	public function create_range( DateTime $start, DateTime $end ) {
		return new Value(
			array(
				$start->format( $this->format ),
				$end->format( $this->format ),
			),
			$this->type
		);
	}

	/**
	 * @return Value
	 * @throws Exception
	 */
	public function create_range_today() {
		return $this->create_range_single_day( new DateTime() );
	}

	/**
	 * @param DateTime $day
	 *
	 * @return Value
	 */
	public function create_range_single_day( DateTime $day ) {
		$day->setTime( 0, 0 );
		$end = clone $day;
		$end->modify( '+1 day -1 second' );

		return $this->create_range( $day, $end );
	}

	/**
	 * @param DateTime $day
	 *
	 * @return Value
	 */
	public function create_single_day( DateTime $day ) {
		$day->setTime( 0, 0 );

		return new Value(
			$day->format( $this->format ),
			$this->type
		);
	}

	/**
	 * @return Value
	 * @throws Exception
	 */
	public function create_today() {
		$date = new DateTime();
		$date->setTime( 0, 0 );

		return new Value(
			$date->format( $this->format ),
			$this->type
		);
	}

}