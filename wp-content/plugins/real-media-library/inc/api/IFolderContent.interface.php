<?php
namespace MatthiasWeb\RealMediaLibrary\api;

/**
 * This interface provides elementary action methods for folder content. All folder
 * types (Folder, Collection, Gallery, ...) have implemented this interface.
 * Also the root ("Unorganized") is a folder and implements this interface.
 * 
 * @since 3.3.1
 */ 
interface IFolderContent {
    /**
     * See API function for more information.
     * 
     * @throws Exception
     * @return true
     * @see wp_attachment_order_update()
     */
    public function contentOrder($attachmentId, $nextId, $lastIdInView = false);
    
    /**
     * Index the order table.
     * 
     * @param boolean $delete Delete the old order
     * @returns boolean
     */
    public function contentIndex($delete = true);
    
    /**
     * This function retrieves the order of the order
     * table and removes empty spaces, for example:
     * <pre>0 1 5 7 8 9 10 =>
     * 0 1 2 3 4 5 6</pre>
     * 
     * @returns boolean
     */
    public function contentReindex();
    
    /**
     * Enable the order functionlity for this folder.
     * 
     * @returns boolean
     * @see IFolderContent::getContentCustomOrder()
     */
    public function contentEnableOrder();
    
    /**
     * Deletes the complete order for this folder.
     * 
     * @returns boolean
     * @see IFolderContent::getContentCustomOrder()
     */
    public function contentDeleteOrder();
    
    /**
     * Restore the current order number to the old custom order number.
     * 
     * @returns boolean
     */
    public function contentRestoreOldCustomNr();
    
    /*
     * Checks if the folder is allowed to use custom content order.
     * 
     * @returns boolean
     */
    public function isContentCustomOrderAllowed();
    
    /**
     * The content custom order defines the state of the content order functionality:
     * 
     * <pre>0 = No content order defined
     * 1 = Content order is enabled
     * 2 = Custom content order is not allowed</pre>
     * 
     * @returns integer The content custom order value
     * @see IFolderContent::isContentCustomOrderAllowed()
     * @see IFolderContent::contentEnableOrder()
     */
    public function getContentCustomOrder();
    
    /**
     * Override this functionality to force the content custom order
     * in the posts_clauses.
     * 
     * @returns boolean
     * @since 4.0.2
     */
    public function forceContentCustomOrder();
    
    /**
     * Override the default posts_clauses join and orderby instead of the RML standard.
     * This can be useful if you want to take the order from another relationship.
     * You have to return true if you have overwritten it.
     * 
     * @param array $pieces The posts_clauses $pieces parameter
     * @returns boolean
     * @since 4.0.2
     */
    public function postsClauses($pieces);
    
    /**
     * Get the next attachment row for a specific attachment. It returns false if
     * the attachment is at the end or the folder has no custom content order.
     * 
     * @param integer $attachmentId The attachment id
     * @returns array or null
     * @since 4.0.8 Now the method returns an array instead of int
     */
    public function getAttachmentNextTo($attachmentId);
    
    /**
     * Gets the biggest order number;
     * 
     * @param string $function The SQL aggregation function (MIN or MAX)
     * @returns integer
     */
    public function getContentAggregationNr($function = "MAX");
    
    /**
     * Get the order number for a specific attachment in this folder.
     * 
     * @param integer $attachmentId The attachment id
     * @return int|boolean
     */
    public function getContentNrOf($attachmentId);
        
    /**
     * Get the old custom order number count so we can decide if already available.
     * 
     * @returns int Count
     */
    public function getContentOldCustomNrCount();
    
    

}
?>