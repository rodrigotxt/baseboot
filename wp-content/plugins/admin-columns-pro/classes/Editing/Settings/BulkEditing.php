<?php
namespace ACP\Editing\Settings;

use AC;
use AC\View;
use ACP;

class BulkEditing extends AC\Settings\Column {

	/**
	 * @return array
	 */
	protected function define_options() {
		return array(
			'bulk-editing',
		);
	}

	private function get_tooltip() {
		return new ACP\Editing\Tooltip\BulkEditing( $this->column->get_name() );
	}

	/**
	 * @return View
	 */
	public function create_view() {
		$view = new View();
		$view->set( 'label', __( 'Bulk Editing', 'codepress-admin-columns' ) )
		     ->set( 'tooltip', __( 'Bulk Editing is always enabled.', 'codepress-admin-columns' ) )
		     ->set( 'setting',
			     sprintf( '<em>%s</em> %s', $this->get_status_label(), $this->get_tooltip()->get_label() . $this->get_tooltip()->get_instructions() )
		     );

		return $view;
	}

	private function get_status_label() {
		return $this->is_enabled() ?
			__( 'Enabled', 'codepress-admin-columns' ) :
			__( 'Disabled', 'codepress-admin-columns' );
	}

	/**
	 * @return bool
	 */
	private function is_enabled() {
		if ( ! $this->column instanceof ACP\Editing\Editable ) {
			return false;
		}

		if ( $this->column->editing() instanceof ACP\Editing\Model\Disabled ) {
			return false;
		}

		return $this->column->editing()->is_bulk_edit_active();
	}

}