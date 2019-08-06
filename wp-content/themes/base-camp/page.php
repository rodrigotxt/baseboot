<?php

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;

$context['posttype'] = $post->post_type;

Timber::render(['page-' . $post->post_name . '.twig', 'page.twig'], $context);
