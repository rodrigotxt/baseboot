<?php

/**
 * Template Name: Page Home
 */

/**
 * Get Context
 */
$context                = Timber::get_context();
$post                   = new TimberPost();
$context['post']        = $post;
$context['posttype']    = $post->post_type;
$context['postparent']  = $post->post_parent;
$context['title']       = get_post_type();
$context['terms']       = Timber::get_terms('category');
$context['tags']        = Timber::get_terms('post_tag');


$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

$args = array(
  'post_type'      => 'post',
  'posts_per_page' => 8,
  'orderby'        => 'date',
  'order'          => 'DESC',
  'paged'          => $paged
);
$context['posts'] = new Timber\PostQuery($args);


Timber::render( 'page-home.twig' , $context );
