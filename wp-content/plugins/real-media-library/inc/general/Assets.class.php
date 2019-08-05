<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;
use MatthiasWeb\RealMediaLibrary\rest;
use MatthiasWeb\RealMediaLibrary\order;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * Asset management for frontend scripts and styles.
 */
class Assets extends base\Assets {
    
    /**
     * Enable ES6 and ES7 shims.
     */
    private function registerPolyFills() {
        $this->enqueueLibraryScript('es6-shim', 'es6-shim/es6-shim.min.js');
        $this->enqueueLibraryScript('es7-shim', 'es7-shim/dist/es7-shim.min.js', array('es6-shim'));
    }
    
    /**
     * Enqueue scripts and styles depending on the type. This function is called
     * from both admin_enqueue_scripts and wp_enqueue_scripts. You can check the
     * type through the $type parameter. In this function you can include your
     * external libraries from public/lib, too.
     * 
     * @param string $type The type (see base\Assets constants)
     */
    public function enqueue_scripts_and_styles($type) {
        if (!wp_rml_active()) {
            return;
        }
        $publicFolder = $this->getPublicFolder();
        $isDebug = $this->isScriptDebug();
        $minSuffix = $isDebug ? '' : '.min';
        
        // Your assets implementation here... See base\Assets for enqueue* methods.
        if ($type === base\Assets::TYPE_ADMIN || Options::load_frontend()) {
            wp_enqueue_media();
            add_thickbox();
            
            // jQuery scripts (Helper) core.js, widget.js, mouse.js, draggable.js, droppable.js, sortable.js
        	$requires = array("jquery", "jquery-ui-core", "jquery-ui-widget", "jquery-ui-mouse", "jquery-ui-draggable", "jquery-ui-droppable", "jquery-ui-sortable", "jquery-touch-punch");
            array_walk($requires, 'wp_enqueue_script');
            $this->registerPolyFills();
            
            // React / ReactDOM
            $react = array('react/umd/react.production.min.js');
            if ($isDebug) array_unshift($react, 'react/umd/react.development.js');
            $reactDom = array('react-dom/umd/react-dom.production.min.js');
            if ($isDebug) array_unshift($reactDom, 'react-dom/umd/react-dom.development.js');
            $this->enqueueLibraryScript('react', $react, array('es7-shim'));
            $this->enqueueLibraryScript('react-dom', $reactDom, array('react', 'es7-shim'));
            
            // i18n-react
            $i18nReact = array('i18n-react/dist/i18n-react.umd.min.js');
            if ($isDebug) array_unshift($i18nReact, 'i18n-react/dist/i18n-react.umd.js');
            $this->enqueueLibraryScript('i18n-react', $i18nReact, array('react-dom'));
            
            // mobx
            $mobx = array('mobx/lib/mobx.umd.min.js');
            if ($isDebug) array_unshift($mobx, 'mobx/lib/mobx.umd.js');
            $this->enqueueLibraryScript('mobx', $mobx);
            
            // mobx-state-tree
            $this->enqueueLibraryScript('mobx-state-tree', 'mobx-state-tree/dist/mobx-state-tree.umd.js', array('mobx'));
            
            // React AIOT
            $this->enqueueLibraryScript('react-aiot.vendor', 'react-aiot/umd/react-aiot.vendor.umd.js', array('react-dom'));
            $this->enqueueLibraryStyle('react-aiot.vendor', 'react-aiot/umd/react-aiot.vendor.umd.css');
            $this->enqueueLibraryScript('react-aiot', 'react-aiot/umd/react-aiot.umd.js', array('react-aiot.vendor'));
            $this->enqueueLibraryStyle('react-aiot', 'react-aiot/umd/react-aiot.umd.css');
            
            // React AIOT watch mode in local development environment
            //wp_enqueue_script('react-aiot.vendor', '/repos/react-aiot/umd/react-aiot.vendor.umd.js', array('react-dom'), rand(), true);
            //wp_enqueue_style('react-aiot.vendor', '/repos/react-aiot/umd/react-aiot.vendor.umd.css', array(), rand());
            //wp_enqueue_script('react-aiot', '/repos/react-aiot/umd/react-aiot.umd.js', array('react-aiot.vendor'), rand(), true);
            //wp_enqueue_style('react-aiot', '/repos/react-aiot/umd/react-aiot.umd.css', array(), rand());
            
            // Plugin scripts
            wp_enqueue_script('wp-api');
            $this->enqueueScript('real-media-library', 'rml.js', array('react-dom'));
		    $this->enqueueStyle('real-media-library', 'rml.css');
		    wp_localize_script('real-media-library', 'rmlOpts', $this->adminLocalizeScript());
		    
		    // Plugin icon font
		    wp_enqueue_style('rml-font', plugins_url( 'public/others/icons/css/rml.css', RML_FILE), array(), RML_VERSION);
		    
		    /**
		     * This action is fired when RML has enqueued scripts and styles.
		     * 
		     * @param {Assets} $assets The assets instance
		     * @hook RML/Scripts
		     */
		    do_action('RML/Scripts', $this);
        }
    }
    
    /**
     * Enqueue gutenberg specific files.
     */
    public function enqueue_block_editor_assets() {
        $this->registerPolyFills();
        $this->enqueueScript('real-media-library-gutenberg', 'rml_gutenberg.js', array('wp-blocks', 'wp-i18n', 'wp-element', 'es6-shim', 'es7-shim'));
    }
    
    /**
     * Localize the WordPress admin backend.
     * 
     * @returns array
     */
    public function adminLocalizeScript() {
        $mode = get_user_option( 'media_library_mode', get_current_user_id() ) ? get_user_option( 'media_library_mode', get_current_user_id() ) : 'grid';
    	$core = $this->getCore();
        $isLicenseActivated = $core->getUpdater()->isActivated();
        $isLicenseNoticeDismissed = $core->isLicenseNoticeDismissed();
    	
    	$lang = new Lang();
        return apply_filters('RML/Localize', array(
            'version' => RML_VERSION,
            'textDomain' => RML_TD,
            'restUrl' => rest\Service::getUrl(rest\Service::SERVICE_NAMESPACE),
            'restRoot' => get_rest_url(),
            'restNonce' => ( wp_installing() && ! is_multisite() ) ? '' : wp_create_nonce( 'wp_rest' ),
            'restQuery' => array('_v' => RML_VERSION),
            'blogId' => get_current_blog_id(),
            'rootId' => _wp_rml_root(),
            'listMode' => $mode,
            'lang' => $lang->getItems($this),
            'userSettings' => has_filter("RML/User/Settings/Content"),
            'sortables' => order\GalleryOrder::getInstance()->getAvailableOrders(true),
            'showLicenseNotice' => !$isLicenseActivated && !$isLicenseNoticeDismissed && current_user_can('install_plugins'),
            'pluginsUrl' => admin_url('plugins.php')
        ));
    }
    
    /**
     * Enqueue scripts and styles for admin pages.
     */
    public function admin_enqueue_scripts() {
        $this->enqueue_scripts_and_styles(base\Assets::TYPE_ADMIN);
    }
    
    /**
     * Enqueue scripts and styles for frontend pages.
     */
    public function wp_enqueue_scripts() {
        $this->enqueue_scripts_and_styles(base\Assets::TYPE_FRONTEND);
    }
    
    /**
     * Checks if a specific screen is active.
     * 
     * @param string $base The base
     * @param boolean $log If true the current screen gets logged
     * @returns boolean
     */
    public function isScreenBase($base, $log = false) {
        if (function_exists("get_current_screen")) {
            $screen = get_current_screen();
        }else{
            return false;
        }
        
        if ($log) error_log($screen->base);
        
        if (isset($screen->base)) {
            return $screen->base == $base;
        }else{
            return false;
        }
    }
    
    /**
     * Add an "Add-On" link to the plugin row links.
     */
    public function plugin_row_meta($links, $file) {
        if( false !== strpos($file, 'real-media-library/index.php') ){
            $links[] = '<a target="_blank" href="https://matthias-web.com/wordpress/real-media-library/add-ons/"><strong>'.__('Browse Add-Ons', RML_TD).'</strong></a>';
        } 
        return $links;
    }
    
    /**
     * Modify the media view strings for a shortcut hint in the media grid view.
     * This function is also used to return the single string for the note when 
     * $strings is false.
     * 
     * 'warnDelete'
     * 'warnBulkDelete'
     */
    public function media_view_strings($strings) {
        $str = __("\n\nNote: If you want to delete a shortcut file, the source file will NOT bet deleted.\nIf you want to delete a non-shortcut file, all associated shortcuts are deleted, too.", RML_TD);
        if ($strings === false)
            return $str;
        
        if (isset($strings['warnDelete']))
            $strings['warnDelete'] .= $str;
        if (isset($strings['warnBulkDelete']))
            $strings['warnBulkDelete'] .= $str;
        return $strings;
    }
    
    /**
     * Modify the media view strings for a shortcut hint in the media table view.
     */
    public function media_row_actions($actions, $post) {
        if (isset($actions["delete"])) {
            $actions['delete'] = str_replace('showNotice.warn();', 'window.rmlWarnDelete();', $actions['delete']);
        }
        
        // Add a table mode "helper" to create the rml icon
        if (wp_attachment_is_shortcut($post)) {
            $actions['rmlShortcutSpan'] = '&nbsp;';
        }
        return $actions;
    }
}