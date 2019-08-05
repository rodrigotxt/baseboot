<?php
namespace MatthiasWeb\RealMediaLibrary\rest;
use MatthiasWeb\RealMediaLibrary\base;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\metadata;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * Create a REST Service.
 */
class Service extends base\Base {
    
    /**
     * The namespace for this service.
     * 
     * @see Service::getUrl()
     */
    const SERVICE_NAMESPACE = 'realmedialibrary/v1';
    
    /**
     * @see addResponseModifier
     */
    private static $responseModifier = array();
    
    /**
     * Register endpoints.
     */
    public function rest_api_init() {
        register_rest_route(Service::SERVICE_NAMESPACE, '/plugin', array(
            'methods' => 'GET',
            'callback' => array($this, 'routePlugin')
        ));
        
        register_rest_route(Service::SERVICE_NAMESPACE, '/tree', array(
            'methods' => 'GET',
            'callback' => array($this, 'routeTree')
        ));
        
        register_rest_route(Service::SERVICE_NAMESPACE, '/tree/dropdown', array(
            'methods' => 'GET',
            'callback' => array($this, 'routeTreeDropdown')
        ));
        
        register_rest_route(Service::SERVICE_NAMESPACE, '/hierarchy/(?P<id>\d+)', array(
            'methods' => 'PUT',
            'callback' => array($this, 'routeHierarchy')
        ));
        
        register_rest_route(Service::SERVICE_NAMESPACE, '/usersettings', array(
            'methods' => 'GET',
            'callback' => array($this, 'getUserSettingsHTML')
        ));
        
        register_rest_route(Service::SERVICE_NAMESPACE, '/usersettings', array(
            'methods' => 'PUT',
            'callback' => array($this, 'updateUserSettings')
        ));
    }
    
    /**
     * @api {put} /realmedialibrary/v1/hierarchy/:id Change a folder position within the hierarchy
     * @apiParam {int} id The folder id
     * @apiParam {int} parent The parent
     * @apiParam {int} nextId The next id to the folder
     * @apiName PutHierarchy
     * @apiGroup Tree
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function routeHierarchy($request) {
        if (($permit = Service::permit()) !== null) return $permit;
        
        $id = $request->get_param('id');
        $parent = $request->get_param('parent');
        $nextId = $request->get_param('nextId');
        
        $folder = wp_rml_get_object_by_id($id);
        if (is_rml_folder($folder)) {
            $result = $folder->relocate($parent, $nextId);
                
            if ($result === true) {
                return new \WP_REST_Response(true);
            }else{
                return new \WP_Error('rest_rml_hierarchy_failed', implode(' ', $result), array('status' => 500));
            }
        }else{
            return new \WP_Error('rest_rml_hierarchy_not_found', __('Folder not found.', RML_TD), array('status' => 500));
        }
    }
    
    /**
     * @api {get} /realmedialibrary/v1/tree Get the full categories tree
     * @apiParam {string} [currentUrl] The current url to detect the active item
     * @apiName GetTree
     * @apiGroup Tree
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function routeTree($request) {
        if (($permit = Service::permit()) !== null) return $permit;
        
        $currentUrl = $request->get_param('currentUrl');
        
        // Receive structure
        $structure = attachment\Structure::getInstance();
        
        return new \WP_REST_Response(array(
            'tree' => $structure->getPlainTree(),
            'slugs' => $structure->getView()->namesSlugArray(),
            'cntAll' => $structure->getCntAttachments(),
            'cntRoot' => $structure->getCntRoot()
        ));
    }
    
    /**
     * @api {get} /realmedialibrary/v1/tree/dropdown Get the full categories tree as dropdown options (HTML)
     * @apiParam {string} [selected] The selected folder id
     * @apiName GetTreeDropdown
     * @apiGroup Tree
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function routeTreeDropdown($request) {
        if (($permit = Service::permit()) !== null) return $permit;
        
        return new \WP_REST_Response(array('html' => attachment\Structure::getInstance()->getView()->dropdown($request->get_param('selected'), null, false)));
    }
    
    /**
     * @api {get} /realmedialibrary/v1/usersettings Get the HTML for user settings
     * @apiName GetUserSettingsHTML
     * @apiGroup Folder
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function getUserSettingsHTML($request) {
        if (($permit = Service::permit()) !== null) return $permit;
        
        return new \WP_REST_Response(array(
            'html' => metadata\Meta::getInstance()->prepare_content('')
        ));
    }
    
    /**
     * @api {put} /realmedialibrary/v1/usersettings Update user settings
     * @apiDescription Send a key value map of form data so UserSettings implementations (IUsetSettings) can handle it
     * @apiName UpdateUserSettings
     * @apiGroup UserSettings
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function updateUserSettings($request) {
        if (($permit = Service::permit()) !== null) return $permit;
        
        /**
         * This filter is called to save the general user settings. You can use the $_POST
         * fields to validate the input. If an error occurs you can pass an
         * "error" array (string) to the response. Do not use this filter directly instead use the 
         * add_rml_user_settings_box() function!
         * 
         * @param {array} $response The response passed to the frontend
         * @param {int} $userId The current user id
         * @param {WP_REST_Request} $request The server request
         * @hook RML/User/Settings/Save
         * @returns {array}
         */
        $response = apply_filters("RML/User/Settings/Save", array('errors' => array(), 'data' => array()), get_current_user_id(), $request);
        
        if (is_array($response) && isset($response["errors"]) && count($response["errors"]) > 0) {
            return new \WP_Error('rest_rml_folder_update', $response["errors"], array('status' => 500));
        }else{
            if (isset($response["data"]) && is_array($response["data"])) {
                $response = $response["data"];
            }
            return new \WP_REST_Response($response);
        }
    }
    
    /**
     * @api {get} /realmedialibrary/v1/plugin Get plugin information
     * @apiHeader {string} X-WP-Nonce
     * @apiName GetPlugin
     * @apiGroup Plugin
     *
     * @apiSuccessExample {json} Success-Response:
     * {
     *     WC requires at least: "",
     *     WC tested up to: "",
     *     Name: "WP ReactJS Starter",
     *     PluginURI: "https://matthias-web.com/wordpress",
     *     Version: "0.1.0",
     *     Description: "This WordPress plugin demonstrates how to setup a plugin that uses React and ES6 in a WordPress plugin. <cite>By <a href="https://matthias-web.com">Matthias Guenter</a>.</cite>",
     *     Author: "<a href="https://matthias-web.com">Matthias Guenter</a>",
     *     AuthorURI: "https://matthias-web.com",
     *     TextDomain: "wp-reactjs-starter",
     *     DomainPath: "/languages",
     *     Network: false,
     *     Title: "<a href="https://matthias-web.com/wordpress">WP ReactJS Starter</a>",
     *     AuthorName: "Matthias Guenter"
     * }
     * @apiVersion 0.1.0
     */
    public function routePlugin() {
        return new \WP_REST_Response(general\Core::getInstance()->getPluginData());
    }
    
    /**
     * Checks if the current user has a given capability and throws an error if not.
     * 
     * @param string $cap The capability
     * @throws \WP_Error
     */
    public static function permit($cap = 'upload_files') {
        if (!current_user_can($cap)) {
            return new \WP_Error('rest_rml_forbidden', __('Forbidden'), array('status' => 403));
        }
        if (!wp_rml_active()) {
            return new \WP_Error('rest_rml_not_activated', __('Real Media Library is not active for the current user.', RML_TD), array('status' => 500));
        }
        return null;
    }
    
    /**
     * Allows you to modify a given type of response body. If you want to find the
     * different types you must have a look at the Service class constants.
     * 
     * @since 4.0.9
     */
    public static function addResponseModifier($type, $data) {
        if (!isset(self::$responseModifier[$type])) {
            self::$responseModifier[$type] = array();
        }
        self::$responseModifier[$type] = array_merge_recursive(self::$responseModifier[$type], $data);
    }
    
    /**
     * Apply response modifications to a given array.
     */
    public static function responseModify($type, $data) {
        if (isset(self::$responseModifier[$type])) {
            return array_merge_recursive($data, self::$responseModifier[$type]);
        }
        return $data;
    }
    
    /**
     * Get the wp-json URL for a defined REST service.
     * 
     * @param string $namespace The prefix for REST service
     * @param string $endpoint The path appended to the prefix
     * @returns String Example: https://example.com/wp-json
     * @example Service::url(Service::SERVICE_NAMESPACE) // => main path
     */
    public static function getUrl($namespace, $endpoint = '') {
        return site_url(rest_get_url_prefix()) . '/' . $namespace . '/' . $endpoint;
    }
}