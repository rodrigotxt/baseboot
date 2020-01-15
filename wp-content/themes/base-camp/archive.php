<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$templates = array( 'archive-' . get_post_type() . '.twig', 'archive.twig', 'index.twig' );

$context = Timber::context();

$context['term_page'] = new TimberTerm();

$context['posttype'] = get_post_type();

$context['title'] = 'Archive';

if ( is_post_type_archive() ) {
  $context['titles'] = post_type_archive_title( '', false );
  $context['isarchive'] = 'isarchive';
}

if ( is_day() ) {
  $context['title'] = 'Archive: ' . get_the_date( 'D M Y' );
} else if ( is_month() ) {
  $context['title'] = 'Archive: ' . get_the_date( 'M Y' );
} else if ( is_year() ) {
  $context['title'] = 'Archive: ' . get_the_date( 'Y' );
} else if ( is_tag() ) {
  $context['title'] = single_tag_title( '', false );
  $context['cat_type'] = 'Tag';
} else if ( is_tax() ) {
  $context['taxtype'] = 'Type';
  $context['title'] = single_term_title( '', false );
  $context['cat_type'] = 'Tax';
} else if ( is_category() ) {
  $context['cat_type'] = 'Category';
  $context['title'] = single_cat_title( '', false );
  array_unshift( $templates, 'archive-' . get_query_var( 'cat' ) . '.twig' );
} else if ( is_post_type_archive() ) {
  $context['title'] = post_type_archive_title( '', false );
  array_unshift( $templates, 'archive-' . get_post_type() . '.twig' );
}



// $query = $GLOBALS['wp_query']->query_vars;
// // $query['posts_per_page'] = 8;
// $query['orderby'] = 'menu_order';
// $query['order'] = '';
// $context['posts'] = new Timber\PostQuery($query);

$articleargs = Timber::get_posts(array(
  'post_type'      => 'articles',
  'order'          =>'ASC',
  'posts_per_page' => -1,
));

$context ['posts'] = Timber::get_posts($articleargs);

Timber::render( $templates, $context );