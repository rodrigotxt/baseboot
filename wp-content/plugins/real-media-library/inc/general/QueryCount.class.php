<?php
namespace MatthiasWeb\RealMediaLibrary\general;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Get the count of WP_Query resultset instead of all the rows.
 */
class QueryCount extends \WP_Query {
    
    public function __construct( $args = array() )
    {
        add_filter( 'posts_request',    array( $this, 'posts_request'   ), 999999);
        add_filter( 'posts_orderby',    array( $this, 'posts_orderby'   ), 999999);
        add_filter( 'post_limits',      array( $this, 'post_limits'     ), 999999);
        add_action( 'pre_get_posts',    array( $this, 'pre_get_posts'   ), 999999);
    
        parent::__construct( $args );
    }
    
    public function count()
    {
        if( isset( $this->posts[0] ) )
            return $this->posts[0];
    
        return '';          
    }
    
    public function posts_request( $request )
    {
        remove_filter( current_filter(), array( $this, __FUNCTION__ ), 999999 );
        $sql = sprintf( 'SELECT COUNT(*) FROM ( %s ) as t', $request );
        return $sql;
    }
    
    public function pre_get_posts( $q )
    {
        $q->query_vars['fields'] = 'ids';
        remove_action( current_filter(), array( $this, __FUNCTION__ ), 999999 );
    }
    
    public function post_limits( $limits )
    {
        remove_filter( current_filter(), array( $this, __FUNCTION__ ), 999999 );
        return '';
    }
    
    public function posts_orderby( $orderby )
    {
        remove_filter( current_filter(), array( $this, __FUNCTION__ ), 999999 );
        return '';
    }
}