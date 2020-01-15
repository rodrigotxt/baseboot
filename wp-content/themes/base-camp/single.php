<?php

$context                = Timber::get_context();
$post                   = new TimberPost();
$context['post']        = $post;
$context['posttype']    = $post->post_type;
$context['postparent']  = $post->post_parent;
$context['terms']       = Timber::get_terms('category');
$context['tags']        = Timber::get_terms('post_tag');

// for subnav is annual meeting single template
// function my_category_posts_function() {
//   $post = new TimberPost();
//   wp_list_pages(
//     array(
//       'post_type' => 'annual-meeting',
//       'orderby' => 'menu_order',
//       'order' => 'ASC',
//       'depth' => 0,
//       'title_li' => '' // hides parent
//     )
//   );
// }


// query blog posts
$meetargs = array(
  'post_type' => 'annual-meeting',
  'post_parent' => 0,
);
$context['meetingpost'] = new Timber\PostQuery($meetargs);

// query blog posts
$meetnestargs = array(
  'post_type' => 'annual-meeting',
  'post_parent' => 0,
  'page_id' => $post->post_parent
);
$context['meetingnestpost'] = new Timber\PostQuery($meetnestargs);

if ( is_post_type_archive() ) {
  $context['titles'] = post_type_archive_title( '', false );
  $context['isarchive'] = 'isarchive';
}

// get posts related by tags
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

$related_events = new WP_Query(
  array(
    'post_type'     => 'event',
    'tag__in'   => $tag_ids,
    'posts_per_page' => 6,
    'orderby'        => 'rand',
    'post__not_in'   => array( $post->ID )
  )
);
$context['relevents'] = new Timber\PostQuery($related_events);

// query blog posts
$postargs = array(
  'post_type'      => 'post',
  'posts_per_page' => 3,
  'orderby'        => 'date',
  'order'          => 'DESC',
);
$context['blogposts'] = new Timber\PostQuery($postargs);

// query event posts
$grantargs = array(
  'post_type'      => 'event',
  'posts_per_page' => 3,
  'orderby'        => 'date',
  'order'          => 'DESC',
);
$context['eventposts'] = new Timber\PostQuery($grantargs);

// query publication posts
$pubargs = array(
  'post_type'      => 'publications',
  'posts_per_page' => 3,
  'orderby'        => 'date',
  'order'          => 'DESC',
);
$context['pubposts'] = new Timber\PostQuery($pubargs);


$posttype = $post->post_type;
$hasparent = $post->post_parent;

// check to see if nested page nav has children
if ($posttype == 'annual-meeting') {
  function has_children() {
    $post = new TimberPost();
    $children = get_pages( array(
      'child_of'  => $post->ID,
      'post_type' => $post->post_type,
    ));
    if( count( $children ) >= 1 ) {
        return true;
    } else {
        return false;
    }
  }
}

if (post_password_required($post->ID)) {
    Timber::render('single-password.twig', $context);
} else {
  Timber::render(['single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig'], $context);
}

