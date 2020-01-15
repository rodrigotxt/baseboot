<?php

namespace ACP\Export\Settings;

use AC;
use AC\View;
use ACP;

class Column extends AC\Settings\Column {

	/**
	 * @return array
	 */
	protected function define_options() {
		return array(
			'export',
		);
	}

	private function get_tooltip_markup() {
		$tooltip = $this->is_enabled() ?
			new ACP\Export\Tooltip\Export( $this->column->get_name() ) :
			new ACP\Export\Tooltip\ExportDisabled( $this->column->get_name() );

		return $tooltip->get_label() . $tooltip->get_instructions();
	}

	private function is_enabled() {
		return $this->column instanceof ACP\Export\Exportable && $this->column->export()->is_active();
	}

	/**
	 * @return View
	 */
	public function create_view() {

		$view = new View();
		$view->set( 'label', __( 'Export', 'codepress-admin-columns' ) )
		     ->set( 'setting',
			     sprintf( '<em>%s</em>%s', $this->get_status(), $this->get_tooltip_markup() )
		     );

		return $view;
	}

	private function get_status() {
		return ( $this->is_enabled() )
			? __( 'Enabled', 'codepress-admin-columns' )
			: __( 'Disabled', 'codepress-admin-columns' );
	}

}