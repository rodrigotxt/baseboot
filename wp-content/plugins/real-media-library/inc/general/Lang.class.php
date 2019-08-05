<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * Language texts.
 */
class Lang extends base\Base {
    /**
     * Get an array of language keys and translations.
     * 
     * @returns array
     */
    public function getItems($assets) {
        return array(
            'reloadContent' => __('Reload content', RML_TD),
            'folder' => __('Folder', RML_TD),
            'gutenBergBlockSelect' => __('Please select a Media Library folder in the block settings.', RML_TD),
            'warnDelete' => $assets->media_view_strings(false),
            'restrictionsInherits' => __('New folders inherit this restriction', RML_TD),
            'restrictionsSuffix' => __('The current selected folder has some restrictions:', RML_TD),
            'restrictions.par' => __('You can not change *parent* folder'),
            'restrictions.rea' => __('You can not *rearrange* subfolders', RML_TD),
            'restrictions.cre' => __('You can not *create* subfolders', RML_TD),
            'restrictions.ins' => __('You can not *insert* new files. New files will be moved to Unorganized...', RML_TD),
            'restrictions.ren' => __('You can not *rename* the folder', RML_TD),
            'restrictions.del' => __('You can not *delete* the folder', RML_TD),
            'restrictions.mov' => __('You can not *move* files outside the folder', RML_TD),
            'coverImageDropHere' => __('Drop image here', RML_TD),
            'uploaderUsesLeftTree' => __('The file is uploaded to the folder you are currently in.', RML_TD),
            'areYouSure' => __('Are you sure?', RML_TD),
            'success' => __('Success'),
            'failed' => __('Failed'),
            'noEntries' => __('No entries found', RML_TD),
            'deleteConfirm' => __('Are you sure to delete *{name}*? All files gets moved to / Unorganized.', RML_TD),
            'ok' => __('Ok'),
            'cancel' => __('Cancel'),
            'save' => __('Save'),
            'back' => __('Back'),
            'noFoldersTitle' => __('No folders found', RML_TD),
            'noFoldersDescription' => __('You have actually not created any folder. Just click on the header button to create your first folder.', RML_TD),
            'folders' => __('Folders', RML_TD),
            'noSearchResult' => __('No search results.', RML_TD),
            'renameLoadingText' => __('Renaming to *{name}*...', RML_TD),
            'renameSuccess' => __('Successfully renamed folder to *{name}*', RML_TD),
            'addLoadingText' => __('Creating *{name}*...', RML_TD),
            'addSuccess' => __('Successfully created *{name}*', RML_TD),
            'deleteFailedSub' => __('The folder you try to delete has subfolders.', RML_TD),
            'deleteSuccess' => __('Successfully deleted *{name}*', RML_TD),
            'sortLoadingText' => __('Reordering the tree hierarchy...', RML_TD),
            'sortedSuccess' => __('Successfully sorted the tree hierarchy', RML_TD),
            'filesRemaining' => __('{count} files remaining...', RML_TD),
            'receiveData' => __('Receiving data...', RML_TD),
            'shortcut' => __('Shortcut', RML_TD),
            'shortcutInfo' => __('This is a shortcut of a media library file. Shortcuts doesn\'t need any physical storage *(0kb)*. If you want to change the file itself, you must do this in the original file (for example replace media file through a plugin).
Note also that the fields in the shortcuts can be different to the original file, for example "Title", "Description" or "Caption".', RML_TD),
            'orderFilterActive' => __('In the current view of uploads are filters active. Please reset these and refresh the view.', RML_TD),
            'uploadingCollection' => __('A collection can not contain files. Upload moved to Unorganized...', RML_TD),
            'uploadingGallery' => __('A gallery can contain only images. Upload moved to Unorganized...', RML_TD),
            'orderLoadingText' => __('Order content by *{name}*...', RML_TD),
            'resetOrder' => __('Reset order', RML_TD),
            'applyOrderOnce' => __('Apply order once...', RML_TD),
            'last' => __('Last', RML_TD),
            'deactivateOrderAutomatically' => __('Deactivate automatically ordering', RML_TD),
            'applyOrderAutomatically' => __('Apply automatic order...', RML_TD),
            'latest' => __('Latest', RML_TD),
            'reindexOrder' => __('Reindex order', RML_TD),
            'resetToLastOrder' => __('Reset to last order', RML_TD),
            'allPosts' => __('All files', RML_TD),
            'unorganized' => __('Unorganized', RML_TD),
            'move' => __('Move {count} files', RML_TD),
            'moveOne' => __('Move one file', RML_TD),
            'append' => __('Copy {count} files', RML_TD),
            'appendOne' => __('Copy one file', RML_TD),
            'moveLoadingText' => __('Moving {count} files...', RML_TD),
            'moveLoadingTextOne' => __('Moving one file...', RML_TD),
            'appendLoadingText' => __('Copying {count} files...', RML_TD),
            'appendLoadingTextOne' => __('Copying one file...', RML_TD),
            'moveSuccess' => __('Successfully moved {count} files', RML_TD),
            'moveSuccessOne' => __('Successfully moved one file', RML_TD),
            'appendSuccess' => __('Successfully copied {count} files', RML_TD),
            'appendSuccessOne' => __('Successfully copied one file', RML_TD),
            'moveTip' => __('Hold any key to create a shortcut', RML_TD),
            'appendTip' => __('Release key to move file', RML_TD),
            'creatable0ToolTipTitle' => __('Click this to create a new folder', RML_TD),
            'creatable0ToolTipText' => __('A folder can contain every type of file and collections, but no galleries. If you want to create a subfolder simply select a folder from the list and click this button.', RML_TD),
            'creatable1ToolTipTitle' => __('Click this to create a new collection', RML_TD),
            'creatable1ToolTipText' => __('A collection can contain no files. But you can create there other collections and *galleries*. The mentioned above gallery is only a *gallery data folder*, that means they are not automatically in your frontend (your website).

You can create a *visual gallery* from this *gallery data folder* via the Visual Editor in your page/post.', RML_TD),
            'creatable2ToolTipTitle' => __('Click this to create a *new gallery data folder*', RML_TD),
            'creatable2ToolTipText' => __('A *gallery data folder* can only contain images. It is simplier for you to distinguish where your visual galleries are.

You can also order the images into *a custom image order* per drag&drop.', RML_TD),
            'userSettingsToolTipTitle' => __('Settings', RML_TD),
            'userSettingsToolTipText' => __('General settings for the current logged in user.', RML_TD),
            'lockedToolTipTitle' => __('Permissions', RML_TD),
            'orderToolTipTitle' => __('Reorder files in this folder', RML_TD),
            'orderToolTipText' => __('Start to reorder the files / images by *title, filename, ID, ...*', RML_TD),
            'refreshToolTipTitle' => __('Refresh', RML_TD),
            'refreshToolTipText' => __('Refreshes the current folder view.', RML_TD),
            'renameToolTipTitle' => __('Rename', RML_TD),
            'renameToolTipText' => __('Rename the current selected folder.', RML_TD),
            'trashToolTipTitle' => __('Delete', RML_TD),
            'trashToolTipText' => __('Delete the current selected folder.', RML_TD),
            'sortToolTipTitle' => __('Rearrange', RML_TD),
            'sortToolTipText' => __('Change the hierarchical order of the folders.', RML_TD),
            'detailsToolTipTitle' => __('Folder details', RML_TD),
            'detailsToolTipText' => __('Select a folder and view more details about it.', RML_TD),
            'methodNotAllowed405' => __('An error occured during requesting the Real Media Library REST endpoint *{endpoint}* from the server (_405 Method not allowed_). One reason can be that your server configuration is missing something.', RML_TD),
            'methodNotAllowed405LinkText' => __('Click here to learn how to resolve this (external link)', RML_TD),
            'methodMoved301' => __('It seems the tree could not be fetched because the WP REST API endpoint *tree* is not reachable. Do you use a plugin which disables the WP REST API like *Clearfy*?', RML_TD),
            
            'noProductLicense' => __('Product license not activated, yet.', RML_TD),
            'enterLicense' => __('Enter license', RML_TD),
            'licenseNoticeDismiss' => __('Dismiss notice for 20 days', RML_TD)
        );
    }
}