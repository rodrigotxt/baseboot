<?php
namespace MatthiasWeb\RealMediaLibrary\attachment;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class handles the count cache for the folder structure.
 */
class CountCache extends base\Base {
    
    private static $me = null;
    
    /**
     * An array of new attachment ID's which should be updated
     * with the this::updateCountCache method. This includes also
     * deleted attachments. The "new" means the attachments which are changed,
     * but new for the update.
     */
    private $newAttachments = array();
    
    /**
     * A collection of folder ids which gets resetted on wp_die event.
     */
    private $folderIdsOnWpDie = array();
    
    private function __construct($root = null) {
        // Silence is golden.
    }
    
    /**
     * Handle the count cache for the folders. This should avoid
     * a lack SQL subquery which loads data from the posts table.
     * 
     * @param int[] $folders Array of folders ID, if null then all folders with cnt = NULL are updated
     * @param int[] $attachments Array of attachments ID, is merged with $folders if given
     * @param boolean $onlyReturn Set to true if you only want the SQL query
     * @returns string Void or SQL query
     */
    public function updateCountCache($folders = null, $attachments = null, $onlyReturn = false) {
        global $wpdb;
        
        if ($folders !== null) {
            $this->debug("Update count cache for this folders: " . json_encode($folders), __METHOD__);
        }
        if ($attachments !== null) {
            $this->debug("Update count cache for this attachments: " . json_encode($attachments), __METHOD__);
        }
        
        $table_name = general\Core::getInstance()->getTableName();
        
        // Create where statement
        $where = "";
        
        // Update by specific folders
        if (is_array($folders) && count($folders) > 0) {
            $folders = array_unique($folders);
            $where .= " tn.id IN (" . implode(",", $folders) . ") ";
        }
        
        // Update by attachment IDs, catch all touched 
        if (is_array($attachments) && count($attachments) > 0) {
            $attachments = array_unique($attachments);
            $attachments_in = implode(",", $attachments);
            $table_posts = general\Core::getInstance()->getTableName("posts");
            $where .= ($where === "" ? "" : " OR") . " tn.id IN (SELECT DISTINCT(rmlposts.fid) FROM $table_posts AS rmlposts WHERE rmlposts.attachment IN ($attachments_in)) ";
        }
        
        // Default where statement
        if ($where === "") {
            $where = "tn.cnt IS NULL";
        }
        
        // Create statement
        $sqlStatement = "UPDATE $table_name AS tn SET cnt = (" . $this->getSingleCountSql() . ") WHERE $where";
        
        if ($onlyReturn) {
            return $sqlStatement;
        }else if (has_action('RML/Count/Update')) {
            /**
             * The folder needs to be updated. If minimum one hook exists the update on the main table
             * is no longer executed. This action is used for example for the WPML compatibility.
             * 
             * @param {array} $folders Array of folders ID, if null then all folders with cnt = NULL are updated
             * @param {array} $attachments Array of attachments ID, is merged with $folders if given
             * @param {string} $where The where statement used for the main table
             * @hook RML/Count/Update
             */
            do_action('RML/Count/Update', $folders, $attachments, $where);
        }else{
            $wpdb->query($sqlStatement);
        }
    }
    
    /**
     * Get the single SQL for the subquery of count getter.
     * 
     * @returns string
     */
    public function getSingleCountSql() {
        /**
         * Get the posts clauses for the count cache.
         * 
         * @param {string[]} $clauses The posts clauses with "from", "where"
         * @returns {string[]} The posts clauses
         * @hook RML/Count/PostsClauses
         */
        $sql = apply_filters('RML/Count/PostsClauses', array(
            'from' => $this->getTableName("posts") . ' AS rmlpostscnt',
            'where' => 'rmlpostscnt.fid = tn.id',
            'afterWhere' => ''
        ));
        
        return "SELECT COUNT(*) FROM " . $sql['from'] . " WHERE " . $sql['where'] . " " . $sql['afterWhere'];
    }
    
    /**
     * Reset the count cache for the current blog id. The content of the array is not prepared for the statement
     * 
     * @param int $folderId Array If you pass folder id/ids array, only this one will be resetted.
     * @returns CountCache
     */
    public function resetCountCache($folderId = null) {
        global $wpdb;
        
        $table_name = general\Core::getInstance()->getTableName();
        $blog_id = get_current_blog_id();
        
        if (is_array($folderId)) {
            $wpdb->query("UPDATE $table_name SET cnt=NULL WHERE id IN (" . implode(",", $folderId) . ")");
        }else{
            $wpdb->query("UPDATE $table_name SET cnt=NULL");
        }
        return $this;
    }
    
    /**
     * Is fired with wp_die event.
     * 
     * @param int $folderId The folder id
     */
    public function resetCountCacheOnWpDie($folderId) {
        if (!in_array($folderId, $this->folderIdsOnWpDie)) {
            $this->folderIdsOnWpDie[] = $folderId;
        }
    }
    
    /**
     * Update at the end of the script execution the count of the given added / deleted attachments.
     */
    public function wp_die() {
        if (count($this->newAttachments) > 0) {
            $this->debug("Update count cache on wp die...", __METHOD__);
            $this->updateCountCache(null, $this->newAttachments);
        }
        if (count($this->folderIdsOnWpDie) > 0) {
            $this->debug("Update count cache on wp die...", __METHOD__);
            $this->updateCountCache($this->folderIdsOnWpDie);
        }
    }
    
    /**
     * Add an attachment to the update queue.
     * 
     * @param int $id The attachment id
     */
    public function addNewAttachment($id) {
        $this->newAttachments[] = $id;
        return $this;
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new CountCache();
        }
        return self::$me;
    }
}

?>