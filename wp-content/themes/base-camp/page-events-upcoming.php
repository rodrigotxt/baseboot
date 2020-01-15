<?php

/**
 * Template Name: Page Events Upcoming
 */

/**
 * Get Context
 */
$context = Timber::get_context();

$post = Timber::query_post();

$context['post'] = $post;

$context['eventdate'] = get_field('date');
$context['eventdateend'] = get_field('date_end');

$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$context = Timber::context();
$args = array(
  'post_type'      => 'events',
  'posts_per_page' => 8,
  'order'          =>'ASC',
  'orderby'        =>'date',
  'paged'          => $paged,
  'meta_query' => array(
      'relation' => 'OR',
      array(
          'key'     => 'date',
          'value'   => date( 'Ymd' ),
          'compare' => '>=',
          'type'    => 'date'
      ),
      // https://support.advancedcustomfields.com/forums/topic/query-posts-where-end-or-start-date-are-in-the-past/
      // array(
      //     'relation' => 'AND',
      //     array(
      //         'key'     => 'date',
      //         'value'   => date( 'Ymd' ),
      //         'compare' => '<=',
      //         'type'    => 'date'
      //     ),
      //     array(
      //         'key'     => 'date',
      //         'value'   => date( 'Ymd' ),
      //         'compare' => '>=',
      //         'type'    => 'date'
      //     ),
      // ),
  )
);
$context['posts'] = new Timber\PostQuery($args);

Timber::render( 'page-events.twig' , $context );
