<?php

function create_post_types(){

  register_post_type(
    'articles',
    array(
      'labels' => array(
        'name'                       => _x( 'Articles', 'taxonomy general name', 'textdomain' ),
        'singular_name'              => _x( 'Article', 'taxonomy singular name', 'textdomain' ),
        'search_items'               => __( 'Search Articles', 'textdomain' ),
        'popular_items'              => __( 'Popular Articles', 'textdomain' ),
        'all_items'                  => __( 'All Articles', 'textdomain' ),
        'parent_item'                => null,
        'parent_item_colon'          => null,
        'edit_item'                  => __( 'Edit Article', 'textdomain' ),
        'update_item'                => __( 'Update Article', 'textdomain' ),
        'add_new_item'               => __( 'Add New Article', 'textdomain' ),
        'new_item_name'              => __( 'New Article Name', 'textdomain' ),
        'separate_items_with_commas' => __( 'Separate Articles with commas', 'textdomain' ),
        'add_or_remove_items'        => __( 'Add or remove Articles', 'textdomain' ),
        'choose_from_most_used'      => __( 'Choose from the most used Articles', 'textdomain' ),
        'not_found'                  => __( 'No Articles found.', 'textdomain' ),
        'menu_name'                  => __( 'Articles', 'textdomain' ),
      ),
      'public' => true,
      'has_archive' => true,
      'hierarchical' => true,
      'taxonomies' => array('post_tag', 'category'),
      'menu_icon' => 'dashicons-media-document',
      'supports' => array('editor','title','excerpt','thumbnail'),
      'rewrite' => array( 'slug' => 'articles', 'with_front'=> true )
    )
  );

  register_post_type(
    'listings',
    array(
      'labels' => array(
        'name'                       => _x( 'Listings', 'taxonomy general name', 'textdomain' ),
        'singular_name'              => _x( 'Listing', 'taxonomy singular name', 'textdomain' ),
        'search_items'               => __( 'Search Listings', 'textdomain' ),
        'popular_items'              => __( 'Popular Listings', 'textdomain' ),
        'all_items'                  => __( 'All Listings', 'textdomain' ),
        'parent_item'                => null,
        'parent_item_colon'          => null,
        'edit_item'                  => __( 'Edit Listings', 'textdomain' ),
        'update_item'                => __( 'Update Listings', 'textdomain' ),
        'add_new_item'               => __( 'Add New Listings', 'textdomain' ),
        'new_item_name'              => __( 'New Listings Name', 'textdomain' ),
        'separate_items_with_commas' => __( 'Separate Listings with commas', 'textdomain' ),
        'add_or_remove_items'        => __( 'Add or remove Listings', 'textdomain' ),
        'choose_from_most_used'      => __( 'Choose from the most used Listings', 'textdomain' ),
        'not_found'                  => __( 'No Listings found.', 'textdomain' ),
        'menu_name'                  => __( 'Listings', 'textdomain' ),
      ),
      'public' => true,
      'has_archive' => true,
      'hierarchical' => true,
      'taxonomies' => array('post_tag', 'category'),
      'menu_icon' => 'dashicons-admin-site-alt3',
      'supports' => array('editor','title','excerpt','thumbnail'),
      'rewrite' => array( 'slug' => 'listings', 'with_front'=> true )
    )
  );

  register_post_type(
    'events',
    array(
      'labels' => array(
        'name'                       => _x( 'Events', 'taxonomy general name', 'textdomain' ),
        'singular_name'              => _x( 'Event', 'taxonomy singular name', 'textdomain' ),
        'search_items'               => __( 'Search Events', 'textdomain' ),
        'popular_items'              => __( 'Popular Events', 'textdomain' ),
        'all_items'                  => __( 'All Events', 'textdomain' ),
        'parent_item'                => null,
        'parent_item_colon'          => null,
        'edit_item'                  => __( 'Edit Event', 'textdomain' ),
        'update_item'                => __( 'Update Event', 'textdomain' ),
        'add_new_item'               => __( 'Add New Event', 'textdomain' ),
        'new_item_name'              => __( 'New Event Name', 'textdomain' ),
        'separate_items_with_commas' => __( 'Separate Events with commas', 'textdomain' ),
        'add_or_remove_items'        => __( 'Add or remove Events', 'textdomain' ),
        'choose_from_most_used'      => __( 'Choose from the most used Events', 'textdomain' ),
        'not_found'                  => __( 'No Events found.', 'textdomain' ),
        'menu_name'                  => __( 'Events', 'textdomain' ),
      ),
      'public' => true,
      'has_archive' => false,
      'hierarchical' => false,
      'taxonomies' => array('post_tag', 'category'),
      'menu_icon' => 'dashicons-calendar',
      'supports' => array('editor','title','excerpt','thumbnail')
    )
  );


}
add_action('init', 'create_post_types');

  // register_post_type(
  //   'annual-meeting',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Annual Meetings', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Annual Meeting', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Annual Meetings', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Annual Meetings', 'textdomain' ),
  //         'all_items'                  => __( 'All Annual Meetings', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Annual Meeting', 'textdomain' ),
  //         'update_item'                => __( 'Update Annual Meeting', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Annual Meeting', 'textdomain' ),
  //         'new_item_name'              => __( 'New Annual Meeting Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Annual Meetings with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Annual Meetings', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Annual Meetings', 'textdomain' ),
  //         'not_found'                  => __( 'No Annual Meetings found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Annual Meeting', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-admin-site-alt3',
  //     'supports' => array('title','page-attributes','thumbnail'),
  //     'rewrite' => array( 'slug' => 'annual-meetings', 'with_front'=> true )
  //   )
  // );


  // register_post_type(
  //   'people',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'People', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'People', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search People', 'textdomain' ),
  //         'popular_items'              => __( 'Popular People', 'textdomain' ),
  //         'all_items'                  => __( 'All People', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit People', 'textdomain' ),
  //         'update_item'                => __( 'Update People', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New People', 'textdomain' ),
  //         'new_item_name'              => __( 'New People Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate People with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove People', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used People', 'textdomain' ),
  //         'not_found'                  => __( 'No People found.', 'textdomain' ),
  //         'menu_name'                  => __( 'People', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-businesswoman',
  //     'supports' => array('title','attributes','thumbnail'),
  //     'rewrite' => array( 'slug' => 'people', 'with_front'=> true )
  //   )
  // );

  // register_post_type(
  //   'regions',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Regions', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Region', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Regions', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Regions', 'textdomain' ),
  //         'all_items'                  => __( 'All Regions', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Region', 'textdomain' ),
  //         'update_item'                => __( 'Update Region', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Region', 'textdomain' ),
  //         'new_item_name'              => __( 'New Region Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Regions with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Regions', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Regions', 'textdomain' ),
  //         'not_found'                  => __( 'No Regions found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Regional Members', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-admin-site',
  //     'supports' => array('title','editor','excerpt','thumbnail'),
  //     'rewrite' => array( 'slug' => 'regions', 'with_front'=> true )
  //   )
  // );

  // register_post_type(
  //   'policies',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Policies', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Policy', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Policies', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Policies', 'textdomain' ),
  //         'all_items'                  => __( 'All Policies', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Policy', 'textdomain' ),
  //         'update_item'                => __( 'Update Policy', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Policy', 'textdomain' ),
  //         'new_item_name'              => __( 'New Policie Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Policies with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Policies', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Policies', 'textdomain' ),
  //         'not_found'                  => __( 'No Policies found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Policy Areas', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-shield',
  //     'supports' => array('title','editor','excerpt','thumbnail'),
  //     'rewrite' => array( 'slug' => 'policies', 'with_front'=> true )
  //   )
  // );


  // register_post_type(
  //   'publications',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Publications', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Publication', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Publications', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Publications', 'textdomain' ),
  //         'all_items'                  => __( 'All Publications', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Publication', 'textdomain' ),
  //         'update_item'                => __( 'Update Publication', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Publication', 'textdomain' ),
  //         'new_item_name'              => __( 'New Policie Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Publications with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Publications', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Publications', 'textdomain' ),
  //         'not_found'                  => __( 'No Publications found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Publications', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-book',
  //     'supports' => array('title','thumbnail'),
  //     'rewrite' => array( 'slug' => 'publications', 'with_front'=> true )
  //   )
  // );




// nested nav dsacve for later @jamesgillispie

// function menu_nested_pages() {
//   $post = new TimberPost();
//   wp_list_pages(
//     array(
//       'post_type' => $post->post_type,
//       'child_of'  => $post->ID,
//       'orderby'   => 'menu_order',
//       'order'     => 'ASC',
//       'depth'     => 0,
//       'title_li'  => '' // hides parent
//     )
//   );
// }
// function is_menu_nested_pages() {
//   $post = new TimberPost();
//   $current_post_id = $post->ID;
//   wp_list_pages(
//     array(
//       'post_type' => $post->post_type,
//       'child_of'  => $post->post_ancestors,
//       'title_li' => '',
//       // 'exclude' => $current_post_id
//     )
//   );
// }
