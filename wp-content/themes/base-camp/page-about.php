<?php
/**
 * Template Name: Page About
 */

$context         = Timber::get_context();

$post = Timber::query_post();

$context['post'] = $post;

$context['posttype'] = $post->post_type;

// $related_posts = new WP_Query(
//     array(
//         'category__in'   => wp_get_post_categories( $post->ID ),
//         'posts_per_page' => 2,
//         'orderby'        => 'rand',
//         'post__not_in'   => array( $post->ID )
//     )
// );

// $context['relposts'] = new Timber\PostQuery($related_posts);


Timber::render(['page-about.twig'], $context);
