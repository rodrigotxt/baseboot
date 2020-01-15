<?php

/**
 * Template Name: Page News
 */

/**
 * Get Context
 */
$context = Timber::get_context();

$post = Timber::query_post();

$context['post'] = $post;

$context['posttype'] = $post->post_type;

$context['title_post_type'] = get_post_type();

$context['categories'] = Timber::get_terms('category');


$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$context = Timber::context();
$args = array(
  'post_type'      => 'articles',
  'posts_per_page' => 8,
  'orderby'        => 'date',
  'order'          => 'DESC',
  'paged'          => $paged
);
$context['posts'] = new Timber\PostQuery($args);

Timber::render( 'page-news.twig' , $context );
