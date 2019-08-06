<?php

$context                = Timber::get_context();
$post                   = new TimberPost();
$context['post']        = $post;
$context['cancel_link'] = get_cancel_comment_reply_link(__('Cancel reply', 'base-camp'));

$context['terms'] = Timber::get_terms('category');
$context['tags'] = Timber::get_terms('post_tag');

$context['posttype'] = $post->post_type;

$context['title'] = 'Archive';

if ( is_post_type_archive() ) {
  $context['titles'] = post_type_archive_title( '', false );
  $context['isarchive'] = 'isarchive';
}


$related_posts = new WP_Query(
    array(
        'category__in'   => wp_get_post_categories( $post->ID ),
        'posts_per_page' => 2,
        'orderby'        => 'rand',
        'post__not_in'   => array( $post->ID )
    )
);

$context['relposts'] = new Timber\PostQuery($related_posts);


if (post_password_required($post->ID)) {
    Timber::render('single-password.twig', $context);
} else {
    Timber::render(['single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig'], $context);
}
