<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class handles all hooks for the options.
 * 
 * If you want to extend the options for your plugin
 * please use the RML/Options/Register action. There are no
 * parameters. The settings section headline must start with
 * RealMediaLibrary:* (also in translation). The *-value will be
 * added as navigation label.
 */
class Options extends base\Base {
    
    private static $me = null;
    
    private function __construct() {
        // Silence is golden.
    }
    
    /**
     * Register RML core fields.
     */
    public function register_fields() {
        if (!wp_rml_active()) {
            return;
        }
        
        add_settings_section(
        	'rml_options_general',
        	__('RealMediaLibrary:General'),
        	array($this, 'empty_callback'),
        	'media'
        );
        
        register_setting( 'media', 'rml_load_frontend', 'esc_attr' );
        add_settings_field(
            'rml_load_frontend',
            '<label for="rml_load_frontend">'.__('Load RML functionality in frontend' , RML_TD ).'</label>' ,
            array($this, 'html_rml_load_frontend'),
            'media',
            'rml_options_general'
        );
        
        register_setting( 'media', 'rml_debug', 'esc_attr' );
        add_settings_field(
            'rml_debug',
            '<label for="rml_debug">Debug mode</label>' ,
            array($this, 'html_debug'),
            'media',
            'rml_options_general'
        );
        
        /**
         * Allows you to register new options tabs and fields to the Real Media 
         * Library options panel (Settings > Media).
         * 
         * @example <caption>Create a new tab with a settings field</caption>
         * add_action( 'RML/Options/Register', function() {
         *  // Register tab
         *  add_settings_section(
         *  	'rml_options_custom',
         *  	__('RealMediaLibrary:My Tab'), // The label must begin with RealMediaLibrary:
         *  	array(MatthiasWeb\RealMediaLibrary\general\Options::getInstance(), 'empty_callback'),
         *  	'media'
         *  );
         * 
         *  add_settings_field(
         *      'rml_button_custom',
         *      '<label for="rml_button_custom">Your custom button</label>' ,
         *      'my_function_to_print_rml_button_custom',
         *      'media',
         *      'rml_options_custom' // The section
         *  );
         * } );
         * @hook RML/Options/Register
         */
        do_action("RML/Options/Register");
        
        // Reset
        add_settings_section(
        	'rml_options_reset',
        	__('RealMediaLibrary:Reset'),
        	array($this, 'empty_callback'),
        	'media'
        );
        
        add_settings_field(
            'rml_button_order_reset',
            '<label for="rml_button_order_reset">'.__('Reset the order of all galleries' , RML_TD ).'</label>' ,
            array($this, 'html_rml_button_order_reset'),
            'media',
            'rml_options_reset'
        );
        
        add_settings_field(
            'rml_button_wipe',
            '<label for="rml_button_wipe">'.__('Wipe all settings (folders, attachment relations)' , RML_TD ).'</label>' ,
            array($this, 'html_rml_button_wipe'),
            'media',
            'rml_options_reset'
        );
        
        add_settings_field(
            'rml_button_cnt_reset',
            '<label for="rml_button_wipe">'.__('Reset folder count cache' , RML_TD ).'</label>' ,
            array($this, 'html_rml_button_cnt_reset'),
            'media',
            'rml_options_reset'
        );
        
        add_settings_field(
            'rml_button_slug_reset',
            '<label for="rml_button_wipe">'.__('Reset names, slugs and absolute pathes' , RML_TD ).'</label>' ,
            array($this, 'html_rml_button_slug_reset'),
            'media',
            'rml_options_reset'
        );
        
        // Migrations
        add_settings_section(
        	'rml_options_migration',
        	__('RealMediaLibrary:Upgrade'),
        	array($this, 'empty_callback'),
        	'media'
        );
        
        add_settings_field(
            'rml_migration_placeholder',
            '&nbsp;' ,
            array($this, 'html_migration_info'),
            'media',
            'rml_options_migration'
        );
    }
    
    public function empty_callback( $arg ) {
        // Silence is golden.
    }
    
    public function html_migration_info() {
        _e("If Real Media Library made some technical changes in a newer update version you will see here upgrade options.", RML_TD);
    }
    
    public function html_rml_button_wipe() {
        // Check if reinstall the database tables
        if (isset($_GET["rml_install"])) {
            echo "DB Update was executed<br /><br />";
            $this->getCore()->getActivator()->install(true);
            echo "<br /><br />";
        }
        
        echo '<a class="rml-rest-button button" data-url="reset/relations" data-method="DELETE">' . __('Wipe attachment relations', RML_TD) . '</a>
        <a class="rml-rest-button button" data-url="reset/folders" data-method="DELETE">' . __('Wipe all', RML_TD) . '</a>';
    }
    
    public function html_rml_button_cnt_reset() { 
        echo '<a class="rml-rest-button button rml-button-wipe" data-url="reset/count" data-method="DELETE">' . __('Reset count', RML_TD) . '</a>';
    }
    
    public function html_rml_button_slug_reset() { 
        echo '<a class="rml-rest-button button rml-button-wipe" data-url="reset/slugs" data-method="DELETE">' . __('Reset', RML_TD) . '</a>';
    }
    
    public function html_rml_load_frontend() {
        $value = get_option( 'rml_load_frontend', '1' );
        echo '<input type="checkbox" id="rml_load_frontend"
                name="rml_load_frontend" value="1" ' . checked(1, $value, false) . ' />
                <label>' . __('If you are using a front end page builder, for example Visual Composer', RML_TD) . '</label>';
    }

    public function html_debug() {
        $value = get_option( 'rml_debug' );
        echo '<input type="checkbox" id="rml_debug"
                name="rml_debug" value="1" ' . checked(1, $value, false) . ' />';
                
        if ($value) {
            echo '<a class="rml-rest-button button rml-button-wipe" data-url="reset/debug" data-method="DELETE">' . __('Reset') . '</a>';
            
            global $wpdb;
            $tablename = $this->getTableName("debug");
            $dateFormat = get_option( 'date_format' ) . " H:i:s";
            $logs = $wpdb->get_results("SELECT * FROM $tablename ORDER BY id DESC LIMIT 75", ARRAY_A);
            echo '<br /><br /><p style="font-size:9px;">';
            $logs = array_reverse($logs);
            foreach ($logs as $value) {
                echo "[<strong>" . date_i18n( $dateFormat, strtotime($value["created"]) ) . "]</strong> " . $value["text"] . "<br />";
            }
            echo '</p>';
        }
    }
    
    public function html_rml_button_order_reset() {
        echo '<a class="rml-rest-button button button-primary" data-url="reset/order" data-method="DELETE">' . __('Reset') . '</a>
            <p class="description">' . __('You can also reset a single folder when navigating to the folder details.', RML_TD) . '</p>';
    }
    
    /**
     * Is RML allowed to load on frontend? (Non-Admin area)
     * 
     * @returns boolean
     */
    public static function load_frontend() {
        return get_option( 'rml_load_frontend', '1' ) === '1';
    }
    
    public static function getInstance() {
        if (self::$me == null) {
                self::$me = new Options();
        }
        return self::$me;
    }
}

?>