<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * The activator class handles the plugin relevant activation hooks: Uninstall, activation,
 * deactivation and installation. The "installation" means installing needed database tables.
 */
class Activator extends base\Base {
    
    const DB_CHILD_QUERY_SUPPORTED = '_cqs';
    
    /**
     * Method gets fired when the user activates the plugin.
     */
    public function activate() {
        /**
         * This hook is fired when RML gets activated.
         * 
    	 * @hook RML/Activate
    	 */
    	do_action('RML/Activate');
    }
    
    /**
     * Method gets fired when the user deactivates the plugin.
     */
    public function deactivate() {
        // Your implementation...
    }
    
    /**
     * Install tables, stored procedures or whatever in the database.
     * 
     * @param boolean $errorlevel Set true to throw errors
     * @param callable $installThisCallable Set a callable to install this one instead of the default
     */
    public function install($errorlevel = false, $installThisCallable = null) {
    	global $wpdb;
    
    	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    	
    	/**
    	 * Indexes have a maximum size of 767 bytes. Historically, we haven't need to be concerned about that.
    	 * As of 4.2, however, we moved to utf8mb4, which uses 4 bytes per character. This means that an index which
    	 * used to have room for floor(767/3) = 255 characters, now only has room for floor(767/4) = 191 characters.
    	 * 
    	 * @see wp-admin/includes/schema.php#52
    	 * @internal
    	 */
    	$max_index_length = 191;
    
    	$charset_collate = $wpdb->get_charset_collate();

    	// Avoid errors printed out
    	if ($errorlevel === false) {
    		$show_errors = $wpdb->show_errors(false);
    		$suppress_errors = $wpdb->suppress_errors(false);
    		$errorLevel = error_reporting();
    		error_reporting(0);
    	}
    	
    	// Table wp_wprjss
    	if ($installThisCallable === null) {
    	    // Your table installation here...
    	    $table_name = $this->getTableName();
    		
    		// Main table
    		$sql = "CREATE TABLE $table_name (
    			id mediumint(9) NOT NULL AUTO_INCREMENT,
    			parent mediumint(9) DEFAULT '-1' NOT NULL,
    			name tinytext NOT NULL,
    			slug text DEFAULT '' NOT NULL,
    			absolute text DEFAULT '' NOT NULL,
    			owner bigint(20) NOT NULL,
    			ord mediumint(10) DEFAULT 0 NOT NULL,
    			contentCustomOrder tinyint(1) DEFAULT 0 NOT NULL,
    			type varchar(10) DEFAULT '0' NOT NULL,
    			restrictions varchar(255) DEFAULT '' NOT NULL,
    			cnt mediumint(10) DEFAULT NULL,
    			importId bigint(20) DEFAULT NULL,
    			UNIQUE KEY id (id)
    		) $charset_collate;";
    		dbDelta( $sql );
    		
    		if ($errorlevel) {
    			$wpdb->print_error();
    		}
    		
    		// Table realmedialibrary_posts
    		$table_name = $this->getTableName("posts");
    		$sql = "CREATE TABLE $table_name (
    			attachment bigint(20) NOT NULL,
    			fid mediumint(9) NOT NULL DEFAULT '-1',
    			isShortcut bigint(20) NOT NULL DEFAULT 0,
    			nr bigint(20),
    			oldCustomNr bigint(20) DEFAULT NULL,
    			importData text,
    			KEY rmljoin (attachment,fid),
    			UNIQUE KEY rmlorder (attachment,isShortcut)
    		) $charset_collate;";
    		dbDelta( $sql );
    		
    		if ($errorlevel) {
    			$wpdb->print_error();
    		}
    		
    		// Table realmedialibrary_meta
    		$table_name = $this->getTableName("meta");
    		$sql = "CREATE TABLE $table_name (
    		  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    		  `realmedialibrary_id` bigint(20) unsigned NOT NULL DEFAULT '0',
    		  `meta_key` varchar(255) DEFAULT NULL,
    		  `meta_value` longtext,
    		  PRIMARY KEY  (meta_id),
    		  KEY realmedialibrary_id (realmedialibrary_id),
    		  KEY meta_key (meta_key($max_index_length))
    		) $charset_collate;";
    		dbDelta( $sql );
    		
    		if ($errorlevel) {
    			$wpdb->print_error();
    		}
    		
    		// Table realmedialibrary_meta
    		$table_name = $this->getTableName("debug");
    		$sql = "CREATE TABLE $table_name (
    		  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    		  `text` text,
    		  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    		  PRIMARY KEY  (id)
    		) $charset_collate;";
    		dbDelta( $sql );
    		
    		if ($errorlevel) {
    			$wpdb->print_error();
    		}
    	}else{
    		call_user_func($installThisCallable);
    	}
    	
    	if ($errorlevel === false) {
    		$wpdb->show_errors($show_errors);
    		$wpdb->suppress_errors($suppress_errors);
    		error_reporting($errorLevel);
    	}
    	
    	if ($installThisCallable === null) {
    	    $installed = get_option(RML_OPT_PREFIX . '_db_version');
    		update_option(RML_OPT_PREFIX . '_db_version', RML_VERSION);
    		
    		/**
             * This action is fired when Real Media Library gets an update.
             * 
             * @param {string} $installed The old installed version
             * @param {string} $new The new installed version
             * @hook RML/Migration
             */
            do_action("RML/Migration", $installed, RML_VERSION);
    	}
    }
    
    /**
     * @see wp_rml_all_children_sql_supported
     */
    public function dbSupportsChildQuery($force = false) {
        $value = get_site_option(RML_OPT_PREFIX . self::DB_CHILD_QUERY_SUPPORTED, null);
        
        if ($value === null || $force) {
            $this->install(false, array($this, '_dbSupportsChildQuery'));
            $value = get_site_option(RML_OPT_PREFIX . self::DB_CHILD_QUERY_SUPPORTED, null);;
        }
        
        return (boolean) $value;
    }
    
    public function _dbSupportsChildQuery() {
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();
	    $table_name = $this->getTableName('tmp');
		
		// Main table
		$sql = "CREATE TABLE $table_name (
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			parent mediumint(9) DEFAULT '-1' NOT NULL,
			name tinytext NOT NULL,
			ord mediumint(10) DEFAULT 0 NOT NULL,
			UNIQUE KEY id (id)
		) $charset_collate;";
		dbDelta( $sql );
		
		$wpdb->query('DELETE FROM ' . $table_name);
		
		// Create hierarchy
		$wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, -1, "Root", 0)');
		$wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, ' . $wpdb->insert_id . ', "Roots 1st child (Bob)", 0)');
		$bob = $wpdb->insert_id;
		$wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, ' . $bob . ', "Bobs 1st child", 0)');
		$wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, ' . $bob . ', "Bobs 2nd child (Marie)", 1)');
		$wpdb->query('INSERT INTO ' . $table_name . ' VALUES(NULL, ' . $wpdb->insert_id . ', "Maries 1st child", 0)');
		
		// Check query result
		$sql = Util::getInstance()->createSQLForAllChildren($bob, true);
		$sql = str_replace($this->getTableName(), $table_name, $sql);
		$supported = count($wpdb->get_results($sql)) === 4;
		update_site_option(RML_OPT_PREFIX . self::DB_CHILD_QUERY_SUPPORTED, $supported ? '1' : '0');
		$this->debug('Your system supports recursive child SQL queries: ' . $supported, __METHOD__);
		$wpdb->query('DROP TABLE ' . $table_name);
    }
}