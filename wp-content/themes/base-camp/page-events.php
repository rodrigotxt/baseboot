<?php
/**
 * Template Name: Page Events
 */

$context = Timber::get_context();

$post = Timber::query_post();

$context['post'] = $post;

$context['posttype'] = $post->post_type;

$context['eventdate'] = get_field('date_start');
$context['eventdateend'] = get_field('date_end');

$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$context = Timber::context();
$args = array(
  'post_type'       => 'events',
  'posts_per_page'  => 8,
  'meta_key'        => 'date',
  'orderby'         => 'meta_value',
  'order'           => 'DESC',
  'paged'           => $paged
);
$context['posts'] = new Timber\PostQuery($args);

Timber::render(['page-events.twig'], $context);
