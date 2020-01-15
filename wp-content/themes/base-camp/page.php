<?php

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;

$context['posttype'] = $post->post_type;

// get posts related by tags
if ( is_post_type_archive() ) {
  $context['titles'] = post_type_archive_title( '', false );
  $context['isarchive'] = 'isarchive';
}
$tag_ids = wp_get_post_tags( $post->ID, array( 'fields' => 'ids' ) );

$related_posts = new WP_Query(
  array(
    'tag__in'   => $tag_ids,
    'posts_per_page' => 6,
    'orderby'        => 'rand',
    'post__not_in'   => array( $post->ID )
  )
);
$context['relposts'] = new Timber\PostQuery($related_posts);


Timber::render(['page-' . $post->post_name . '.twig', 'page.twig'], $context);
