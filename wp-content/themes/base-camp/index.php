<?php

$thiseventpageid = '12';
$EventsPageId = $thiseventpageid;

global $post;
$post = get_post( $EventsPageId, OBJECT );
setup_postdata( $post );

$context               = Timber::get_context();
$context['posts']      = new Timber\PostQuery();

$context['term_page'] = new Timber\Term();

$context['categories'] = Timber::get_terms('category');


Timber::render('index.twig', $context);
