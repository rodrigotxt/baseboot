<?php
namespace MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\order;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class handles all hooks for the general filters.
 */
class Filter extends base\Base {
    private static $me = null;
    
    /**
     * @see wp_attachment_folder()
     */
    public function getAttachmentFolder($attachmentId, $default = null) {
        $isArray = is_array($attachmentId);
        $attachmentId = $isArray ? $attachmentId : array($attachmentId);
        
        if (count($attachmentId) > 0) {
            global $wpdb;
            $attachments_in = implode(",", $attachmentId);
            $table_name = general\Core::getInstance()->getTableName("posts");
            $folders = $wpdb->get_col("SELECT DISTINCT(rmlposts.fid) FROM $table_name AS rmlposts WHERE rmlposts.attachment IN ($attachments_in)");
            if ($isArray) {
                return $folders;
            }else{
                return (int) (isset($folders[0]) ? $folders[0] : (($default === null) ? _wp_rml_root() : $default));
            }
        }
        return $default;
    }
	
	/**
	 * Changes the SQL query like this way to JOIN the realmedialibrary_posts
	 * table and search for the given folder.
	 */
	public function posts_clauses($clauses, $query) {
	    global $wpdb;
	    
	    if ($query->get("post_type") !== "attachment") {
	    	$query->set('use_rml_folder', false);
	    	return $clauses;
	    }
	    
        $table_name = general\Core::getInstance()->getTableName("posts");
        $saveInCookie = (is_admin() && defined('DOING_AJAX') && DOING_AJAX || $this->getCore()->getAssets()->isScreenBase("upload")) && !headers_sent();
	    
	    // Shortcut destinations
	    $fields = trim($clauses["fields"], ",");
	    
	    // Get folder
	    $folderId = isset($query->query_vars['parsed_rml_folder']) ? $query->query_vars['parsed_rml_folder'] : 0;
        $root = _wp_rml_root();
        $cookieValue = $root; // Save the last queried cookie for "New media" dropdown
        
        /**
         * Do a filter to restrict the RML posts clauses and apply an own clauses modifier.
         * If you want to use your own implementation of posts_clauses you can add this code
         * to to restrict the RML standard posts_clauses: <code>$clauses["_restrictRML"] = true;</code>
         * 
         * @param {array} $clauses The list of clauses for the query
         * @param {WP_Query} $query The WP_Query instance
         * @param {int} $folderId The folder ID to query (0 = 'All files')
         * @param {int} $root The root folder ID, see also {@link RML/RootParent}
         * @returns {array} $clauses
         * @hook RML/Filter/PostsClauses
         * @see https://developer.wordpress.org/reference/hooks/posts_clauses/
         */
        $clauses = apply_filters("RML/Filter/PostsClauses", $clauses, $query, $folderId, $root);
        $builtIn = !isset($clauses["_restrictRML"]);
        if (!$builtIn) {
            unset($clauses["_restrictRML"]);
        }
        
        $query->set('use_rml_folder', $builtIn);
        
        // Change fields
        $fields = trim($clauses["fields"], ",");
        $clauses["fields"] = $fields . $wpdb->prepare(", IFNULL(rmlposts.fid, %d) AS fid, IFNULL(rmlposts.isShortcut, 0) AS isShortcut ", $root);
        
        // Change join regarding the folder id
        $clauses["join"] .= " LEFT JOIN $table_name AS rmlposts ON rmlposts.attachment = ".$wpdb->posts.".ID ";
        
        // Folder relevant data
        if ($builtIn === true) {
	        if (($folderId > 0 || $folderId == $root)) {
		        if ($folderId > 0) {
		            $clauses["join"] .= $wpdb->prepare(" AND rmlposts.fid = %d ", $folderId);
		            $clauses["where"] .= " AND rmlposts.fid IS NOT NULL ";
		        }else{
		            $clauses["where"] .= $wpdb->prepare(" AND (rmlposts.fid IS NULL OR rmlposts.fid = %d) ", $root);
		        }
		        
		        $cookieValue = $folderId;
	        }else{
	        	$cookieValue = 0;
	        }
        }
        
        // Save cookie value
        if ($saveInCookie && $builtIn) {
            $this->lastQueriedFolder($cookieValue);
        }
	    return $clauses;
	}
	
	/**
	 * Set or get the last queried folder.
	 * 
	 * @param int $folder The folder id (0 is handled as "All files" folder)
	 * @returns int
	 * @since 4.0.8 The data is now saved in user meta data instead of Cookie
	 */
	public function lastQueriedFolder($folder = null) {
	    $key = "rml_" . get_current_blog_id() . "_lastquery";
	    $userId = get_current_user_id();
	    $prevCookie = get_user_meta($userId, $key, true);
	    $prevCookie = empty($prevCookie) ? null : (int) $prevCookie;
	    
	    if ($folder !== null) {
		    $folder = intval($folder);
		    if ($folder !== $prevCookie) {
		    	$prevCookie = $folder;
		        update_user_meta($userId, $key, $folder);
		    }
	    }
	    return $prevCookie === null ? _wp_rml_root() : $prevCookie;
	}
	
    /**
     * Define a new query option for \WP_Query.
     */
    public function pre_get_posts($query) {
        $folder = $this->getFolder($query, $this->getCore()->getAssets()->isScreenBase("upload"));
    	$folder = isset($folder) ? $folder : 0;
	    $query->set('parsed_rml_folder', $folder);
    }
    
    /**
     * Get folder from different sources (WP_Query, GET Query).
     * 
     * @returns int
     */
    public function getFolder($query, $fromRequest = false) {
    	$folder = null;
    	
    	if ($query !== null && 
    		($queryFolder = $query->get('rml_folder')) &&
    		isset($queryFolder)) {
    			
	        // Query rml folder from query itself
    		$folder = $queryFolder;
    	}else if(wp_rml_active()) {
    		if ($fromRequest) {
	    		if (isset($_REQUEST["rml_folder"])) {
	    	        // Query rml folder from list mode
	        		$folder = $_REQUEST["rml_folder"];
	        	}else if (isset($_POST["query"]["rml_folder"])) {
	    	        // Query rml folder from grid mode
	    	        $folder = $_POST["query"]["rml_folder"];
	        	}else{
	        		return;
	        	}
    		}
        }else{
    		return null;
    	}
    	return is_numeric($folder) ? $folder : null;
    }
    
    /**
     * Modify AJAX request for query-attachments request.
     */
    public function ajax_query_attachments_args($query) {
    	$fid = $this->getFolder(null, true);
    	if ($fid !== null) {
    		$query["rml_folder"] = $fid;
    	}
    	return $query;
    }
    
    /**
     * Add the attachment ID to the count update when deleting it.
     */
    public function delete_attachment($postID) {
        //wp_rml_move(_wp_rml_root(), array($postID)); // Simulate an move to unorganized @deprecated
        
        // Reset folder count
        //CountCache::getInstance()->addNewAttachment($postID);
        CountCache::getInstance()->resetCountCacheOnWpDie(wp_attachment_folder($postID));
        
        // Delete row in posts table
        global $wpdb;
        $table_name = general\Core::getInstance()->getTableName("posts");
        $sql = $wpdb->query($wpdb->prepare("DELETE FROM $table_name WHERE attachment = %d", $postID));
        
        // Reindex folder
        $folder = wp_rml_get_object_by_id(wp_attachment_folder($postID));
        if (is_rml_folder($folder)) {
            $folder->contentReindex();
        }
    }
    
    /**
     * Add a attribute to the ajax output. The attribute represents
     * the folder order number if it is a gallery.
     */
    public function wp_prepare_attachment_for_js($response, $attachment, $meta) {
		// append attribute
		$rFolderId = $this->getFolder(null, true);
		$attachmentFid = isset($attachment->fid) ? $attachment->fid : null;
		$folderId = $attachmentFid !== null ? intval($attachmentFid) : null;
		$folderId = $folderId === null ? (!empty($rFolderId) ? $rFolderId : _wp_rml_root()) : $folderId;
		
		$response['rmlFolderId'] = $folderId;
		$response['rmlGalleryOrder'] = intval($attachment->orderNr);
		$response['rmlIsShortcut'] = $attachment->isShortcut > 0; //wp_attachment_is_shortcut($attachment->ID, true);
		
		// return
		return $response;
	}
	
    /**
     * Create a select option in list table of attachments.
     */
    public function restrict_manage_posts() {
        $screen = get_current_screen();
    	if ($screen->id == "upload") {
    		echo '<select name="rml_folder" id="filter-by-rml-folder" class="attachment-filters attachment-filters-rml">
    			' . Structure::getInstance()->getView()->dropdown(
    						isset($_REQUEST['rml_folder']) ? $_REQUEST['rml_folder'] : "",
    						array()
						) . '
    		</select>&nbsp;';
    	}
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new Filter();
        }
        return self::$me;
    }
}