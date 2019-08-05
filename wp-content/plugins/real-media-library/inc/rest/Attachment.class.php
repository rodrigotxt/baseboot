<?php
namespace MatthiasWeb\RealMediaLibrary\rest;
use MatthiasWeb\RealMediaLibrary\base;
use MatthiasWeb\RealMediaLibrary\general;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * Enables the /attachments REST.
 */
class Attachment extends base\Base {
    
    const MODIFIER_TYPE_BULK_MOVE = 'bulkMove';
    
    /**
     * Register endpoints.
     */
    public function rest_api_init() {
        register_rest_route(Service::SERVICE_NAMESPACE, '/attachments/(?P<id>\d+)', array(
            'methods' => 'PUT',
            'callback' => array($this, 'updateItem')
        ));
        
        register_rest_route(Service::SERVICE_NAMESPACE, '/attachments/(?P<id>\d+)/shortcutInfo', array(
            'methods' => 'GET',
            'callback' => array($this, 'routeShortcutInfo')
        ));
        
        register_rest_route(Service::SERVICE_NAMESPACE, '/attachments/bulk/move', array(
            'methods' => 'PUT',
            'callback' => array($this, 'routeBulkMove')
        ));
    }
    
    /**
     * @api {put} /realmedialibrary/v1/attachments/:id Update an attachment order by id
     * @apiParam {int} folderId The folder id
     * @apiParam {int} attachmentId The attachment id
     * @apiParam {int} [nextId] The next id relative to the attachment
     * @apiParam {int} lastId The last id in the current sortable view
     * @apiName UpdateAttachment
     * @apiGroup Attachment
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function updateItem($request) {
        if (($permit = Service::permit()) !== null) return $permit;
        
        $folderId = $request->get_param('folderId');
        $attachmentId = $request->get_param('id');
        $nextId = $request->get_param('nextId');
        $lastIdInView = $request->get_param('lastId');
        
        if (!empty($folderId) && !empty($nextId)) {
            wp_attachment_order_update($folderId, $attachmentId, $nextId, $lastIdInView);
        }
    }
    
    /**
     * @api {get} /realmedialibrary/v1/posts/:id/shortcutInfo Get the shortcut container
     * @apiName GetAttachmentShortcutInfo
     * @apiGroup Attachment
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function routeShortcutInfo($request) {
        if (($permit = Service::permit()) !== null) return $permit;
        
        $id = $request->get_param('id');
        return new \WP_REST_Response(array('html' => \MatthiasWeb\RealMediaLibrary\attachment\CustomField::getInstance()->getShortcutInfoContainer($id)));
    }
    
    /**
     * @api {put} /realmedialibrary/v1/attachments/bulk/move Move/Copy multipe attachments
     * @apiParam {int[]} ids The post ids to move / copy
     * @apiParam {int} to The term id
     * @apiParam {boolean} isCopy If true the post is appended to the category
     * @apiName UpdatePostBulkMove
     * @apiGroup Attachment
     * @apiVersion 1.0.0
     * @apiPermission upload_files
     */
    public function routeBulkMove($request) {
        if (($permit = Service::permit()) !== null) return $permit;
        
        $ids = $request->get_param('ids');
        $to = intval($request->get_param('to'));
        $isCopy = $request->get_param('isCopy');
        $isCopy = gettype($isCopy) === 'string' ? $isCopy === 'true' : $isCopy;

        if (!is_array($ids) || count($ids) == 0 || $to == null) {
            return new \WP_Error('rest_rcl_posts_bulk_move_failed', __('Something went wrong.', RCL_TD), array('status' => 500));
        }
        
        $result = wp_rml_move($to, $ids, false, $isCopy);
        
        if (is_array($result)) {
            return new \WP_Error('rest_rml_attachment_bulk_move_failed', implode(' ', $result), array('status' => 500));
        }else{
            wp_rml_structure_reset();
            return new \WP_REST_Response(Service::responseModify(self::MODIFIER_TYPE_BULK_MOVE, array(
                'counts' => \MatthiasWeb\RealMediaLibrary\attachment\Structure::getInstance()->getFolderCounts()
            )));
        }
    }
}