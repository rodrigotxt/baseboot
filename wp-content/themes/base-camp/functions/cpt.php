<?php


function create_post_types(){

  // register_post_type(
  //   'campaigns',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Campaigns', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Campaign', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Campaigns', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Campaigns', 'textdomain' ),
  //         'all_items'                  => __( 'All Campaigns', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Campaign', 'textdomain' ),
  //         'update_item'                => __( 'Update Campaign', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Campaign', 'textdomain' ),
  //         'new_item_name'              => __( 'New Campaign Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Campaigns with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Campaigns', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Campaigns', 'textdomain' ),
  //         'not_found'                  => __( 'No Campaigns found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Campaigns', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-megaphone',
  //     'supports' => array('title','thumbnail'),
  //     'rewrite' => array( 'slug' => 'campaigns', 'with_front'=> true )
  //   )
  // );

  register_post_type(
    'team',
    array(
      'labels' => array(
          'name'                       => _x( 'Teams', 'taxonomy general name', 'textdomain' ),
          'singular_name'              => _x( 'Team', 'taxonomy singular name', 'textdomain' ),
          'search_items'               => __( 'Search Teams', 'textdomain' ),
          'popular_items'              => __( 'Popular Teams', 'textdomain' ),
          'all_items'                  => __( 'All Teams', 'textdomain' ),
          'parent_item'                => null,
          'parent_item_colon'          => null,
          'edit_item'                  => __( 'Edit Team', 'textdomain' ),
          'update_item'                => __( 'Update Team', 'textdomain' ),
          'add_new_item'               => __( 'Add New Team', 'textdomain' ),
          'new_item_name'              => __( 'New Team Name', 'textdomain' ),
          'separate_items_with_commas' => __( 'Separate Teams with commas', 'textdomain' ),
          'add_or_remove_items'        => __( 'Add or remove Teams', 'textdomain' ),
          'choose_from_most_used'      => __( 'Choose from the most used Teams', 'textdomain' ),
          'not_found'                  => __( 'No Teams found.', 'textdomain' ),
          'menu_name'                  => __( 'Team', 'textdomain' ),
      ),
      'public' => true,
      'has_archive' => false,
      'hierarchical' => true,
      'menu_icon' => 'dashicons-admin-users',
      'supports' => array('title','thumbnail'),
      'rewrite' => array( 'slug' => 'team', 'with_front'=> true )
    )
  );

  register_post_type(
    'event',
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

  // register_post_type(
  //   'partnership',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Partnerships', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Partnership', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Partnerships', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Partnerships', 'textdomain' ),
  //         'all_items'                  => __( 'All Partnerships', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Partnership', 'textdomain' ),
  //         'update_item'                => __( 'Update Partnership', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Partnership', 'textdomain' ),
  //         'new_item_name'              => __( 'New Partnership Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Partnerships with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Partnerships', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Partnerships', 'textdomain' ),
  //         'not_found'                  => __( 'No Partnerships found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Agency Partnerships', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'menu_icon' => 'dashicons-groups',
  //     'supports' => array('title','thumbnail'),
  //     'rewrite' => array( 'slug' => '/work-we-do/partnerships', 'with_front'=> true )
  //   )
  // );

  // register_post_type(
  //   'reports',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Reports', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Report', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Reports', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Reports', 'textdomain' ),
  //         'all_items'                  => __( 'All Reports', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Report', 'textdomain' ),
  //         'update_item'                => __( 'Update Report', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Report', 'textdomain' ),
  //         'new_item_name'              => __( 'New Report Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Reports with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Reports', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Reports', 'textdomain' ),
  //         'not_found'                  => __( 'No Reports found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Reports', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'menu_icon' => 'dashicons-book-alt',
  //     'supports' => array('title','thumbnail'),
  //     'rewrite' => array( 'slug' => '/resources/reports', 'with_front'=> true )
  //   )
  // );

  // register_post_type(
  //   'publication',
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
  //         'new_item_name'              => __( 'New Publication Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Publications with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Publications', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Publications', 'textdomain' ),
  //         'not_found'                  => __( 'No Publications found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Publications', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => true,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-layout',
  //     'supports' => array('title','editor','excerpt','thumbnail'),
  //     'rewrite' => array( 'slug' => '/publication', 'with_front'=> true )
  //   )
  // );

  // register_post_type(
  //   'transit_tool',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Transit Tools', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Transit Tool', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Transit Tools', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Transit Tools', 'textdomain' ),
  //         'all_items'                  => __( 'All Transit Tools', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Transit Tool', 'textdomain' ),
  //         'update_item'                => __( 'Update Transit Tool', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Transit Tool', 'textdomain' ),
  //         'new_item_name'              => __( 'New Transit Tool Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Transit Tools with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Transit Tools', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Transit Tools', 'textdomain' ),
  //         'not_found'                  => __( 'No Transit Tools found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Transit Tools', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-admin-tools',
  //     'supports' => array('title','thumbnail'),
  //     'rewrite' => array( 'slug' => '/publications/type/transit-tools', 'with_front'=> true )
  //   )
  // );

  register_post_type(
    'videos',
    array(
      'labels' => array(
          'name'                       => _x( 'Videos', 'taxonomy general name', 'textdomain' ),
          'singular_name'              => _x( 'Video', 'taxonomy singular name', 'textdomain' ),
          'search_items'               => __( 'Search Videos', 'textdomain' ),
          'popular_items'              => __( 'Popular Videos', 'textdomain' ),
          'all_items'                  => __( 'All Videos', 'textdomain' ),
          'parent_item'                => null,
          'parent_item_colon'          => null,
          'edit_item'                  => __( 'Edit Video', 'textdomain' ),
          'update_item'                => __( 'Update Video', 'textdomain' ),
          'add_new_item'               => __( 'Add New Video', 'textdomain' ),
          'new_item_name'              => __( 'New Video Name', 'textdomain' ),
          'separate_items_with_commas' => __( 'Separate Videos with commas', 'textdomain' ),
          'add_or_remove_items'        => __( 'Add or remove Videos', 'textdomain' ),
          'choose_from_most_used'      => __( 'Choose from the most used Videos', 'textdomain' ),
          'not_found'                  => __( 'No Videos found.', 'textdomain' ),
          'menu_name'                  => __( 'Videos', 'textdomain' ),
      ),
      'public' => true,
      'has_archive' => true,
      'hierarchical' => true,
      'taxonomies' => array('post_tag', 'category'),
      'menu_icon' => 'dashicons-video-alt3',
      'supports' => array('title','excerpt','thumbnail'),
      'rewrite' => array( 'slug' => '/video', 'with_front'=> true )
    )
  );

  // register_post_type(
  //   'animation_block',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Animation Blocks', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Animation Block', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Animation Blocks', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Animation Blocks', 'textdomain' ),
  //         'all_items'                  => __( 'All Animation Blocks', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Animation Block', 'textdomain' ),
  //         'update_item'                => __( 'Update Animation Block', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Animation Block', 'textdomain' ),
  //         'new_item_name'              => __( 'New Animation Block Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Animation Blocks with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Animation Blocks', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Animation Blocks', 'textdomain' ),
  //         'not_found'                  => __( 'No Animation Blocks found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Animation Blocks', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'menu_icon' => 'dashicons-screenoptions',
  //     'supports' => array('title','thumbnail'),
  //     'rewrite' => array( 'slug' => 'animation_block', 'with_front'=> true )
  //   )
  // );


  // register_post_type(
  //   'initiative',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Initiatives', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Initiative', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Initiatives', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Initiatives', 'textdomain' ),
  //         'all_items'                  => __( 'All Initiatives', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Initiative', 'textdomain' ),
  //         'update_item'                => __( 'Update Initiative', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Initiative', 'textdomain' ),
  //         'new_item_name'              => __( 'New Initiative Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Initiatives with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Initiatives', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Initiatives', 'textdomain' ),
  //         'not_found'                  => __( 'No Initiatives found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Initiatives', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'menu_icon' => 'dashicons-screenoptions',
  //     'supports' => array('title','thumbnail'),
  //     'rewrite' => array( 'slug' => 'initiative', 'with_front'=> true )
  //   )
  // );

  // register_post_type(
  //   'grant',
  //   array(
  //     'labels' => array(
  //         'name'                       => _x( 'Grants', 'taxonomy general name', 'textdomain' ),
  //         'singular_name'              => _x( 'Grant', 'taxonomy singular name', 'textdomain' ),
  //         'search_items'               => __( 'Search Grants', 'textdomain' ),
  //         'popular_items'              => __( 'Popular Grants', 'textdomain' ),
  //         'all_items'                  => __( 'All Grants', 'textdomain' ),
  //         'parent_item'                => null,
  //         'parent_item_colon'          => null,
  //         'edit_item'                  => __( 'Edit Grant', 'textdomain' ),
  //         'update_item'                => __( 'Update Grant', 'textdomain' ),
  //         'add_new_item'               => __( 'Add New Grant', 'textdomain' ),
  //         'new_item_name'              => __( 'New Grant Name', 'textdomain' ),
  //         'separate_items_with_commas' => __( 'Separate Grants with commas', 'textdomain' ),
  //         'add_or_remove_items'        => __( 'Add or remove Grants', 'textdomain' ),
  //         'choose_from_most_used'      => __( 'Choose from the most used Grants', 'textdomain' ),
  //         'not_found'                  => __( 'No Grants found.', 'textdomain' ),
  //         'menu_name'                  => __( 'Grants', 'textdomain' ),
  //     ),
  //     'public' => true,
  //     'has_archive' => false,
  //     'hierarchical' => true,
  //     'taxonomies' => array('post_tag', 'category'),
  //     'menu_icon' => 'dashicons-awards',
  //     'supports' => array('title','thumbnail'),
  //     'rewrite' => array( 'slug' => 'grant', 'with_front'=> true )
  //   )
  // );

}
add_action('init', 'create_post_types');


////////////////////////////////////////////////////////////////////
/////////////////////// CUSTOM TAXONOMIES //////////////////////////
////////////////////////////////////////////////////////////////////


// function registeryeartype() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Year Type', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Year Type', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Year Type' ),
//     'all_items'         => __( 'All Year Type' ),
//     'parent_item'       => __( 'Parent Year Type' ),
//     'parent_item_colon' => __( 'Parent Year Type:' ),
//     'edit_item'         => __( 'Edit Year Type' ),
//     'update_item'       => __( 'Update Year Type' ),
//     'add_new_item'      => __( 'Add New Year Type' ),
//     'new_item_name'     => __( 'New Year Type Name' ),
//     'menu_name'         => __( 'Year Type' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => false,
//     'show_admin_column' => false,
//   );
//   register_taxonomy( 'year_type', array(
//     'grant'
//   ), $args );


// }
// add_action( 'init', 'registeryeartype' );

// // Register Custom Taxonomy
// function reggrantyear() {

//   $labels = array(
//     'name'                       => _x( 'Grant Years', 'Taxonomy General Name', 'text_domain' ),
//     'singular_name'              => _x( 'Grant Year', 'Taxonomy Singular Name', 'text_domain' ),
//     'menu_name'                  => __( 'Taxonomy', 'text_domain' ),
//     'all_items'                  => __( 'All Items', 'text_domain' ),
//     'parent_item'                => __( 'Parent Item', 'text_domain' ),
//     'parent_item_colon'          => __( 'Parent Item:', 'text_domain' ),
//     'new_item_name'              => __( 'New Item Name', 'text_domain' ),
//     'add_new_item'               => __( 'Add New Item', 'text_domain' ),
//     'edit_item'                  => __( 'Edit Item', 'text_domain' ),
//     'update_item'                => __( 'Update Item', 'text_domain' ),
//     'view_item'                  => __( 'View Item', 'text_domain' ),
//     'separate_items_with_commas' => __( 'Separate items with commas', 'text_domain' ),
//     'add_or_remove_items'        => __( 'Add or remove items', 'text_domain' ),
//     'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
//     'popular_items'              => __( 'Popular Items', 'text_domain' ),
//     'search_items'               => __( 'Search Items', 'text_domain' ),
//     'not_found'                  => __( 'Not Found', 'text_domain' ),
//     'no_terms'                   => __( 'No items', 'text_domain' ),
//     'items_list'                 => __( 'Items list', 'text_domain' ),
//     'items_list_navigation'      => __( 'Items list navigation', 'text_domain' ),
//   );
//   $args = array(
//     'labels'                     => $labels,
//     'hierarchical'               => true,
//     'public'                     => true,
//     'show_ui'                    => true,
//     'show_admin_column'          => true,
//     'show_in_nav_menus'          => true,
//     'show_tagcloud'              => true,
//   );
//   register_taxonomy( 'grantyear', array( 'grant' ), $args );

// }
// add_action( 'init', 'reggrantyear', 0 );


// function registertopic() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'topics', 'taxonomy general name' ),
//     'singular_name'     => _x( 'topic', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Topics' ),
//     'all_items'         => __( 'All Topics' ),
//     'parent_item'       => __( 'Parent Topic' ),
//     'parent_item_colon' => __( 'Parent Topic:' ),
//     'edit_item'         => __( 'Edit Topic' ),
//     'update_item'       => __( 'Update Topic' ),
//     'add_new_item'      => __( 'Add New Topic' ),
//     'new_item_name'     => __( 'New Topic Name' ),
//     'menu_name'         => __( 'Topics' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_admin_column' => true,
//     'rewrite'           => array( 'slug' => '/year_type', 'with_front' => true)
//   );
//   register_taxonomy( 'year_type', array(
//     'reports', 'transit_tool', 'videos'
//   ), $args );


// }
// add_action( 'init', 'registertopic' );


// function registergranttype() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Grant Type', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Grant Type', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Grant Type' ),
//     'all_items'         => __( 'All Grant Type' ),
//     'parent_item'       => __( 'Parent Grant Type' ),
//     'parent_item_colon' => __( 'Parent Grant Type:' ),
//     'edit_item'         => __( 'Edit Grant Type' ),
//     'update_item'       => __( 'Update Grant Type' ),
//     'add_new_item'      => __( 'Add New Grant Type' ),
//     'new_item_name'     => __( 'New Grant Type Name' ),
//     'menu_name'         => __( 'Grant Type' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_admin_column' => true,
//     'rewrite'           => array( 'slug' => '/grant_type', 'with_front' => true)
//   );
//   register_taxonomy( 'grant_type', array(
//     'grant'
//   ), $args );


// }
// add_action( 'init', 'registergranttype' );


// function registerprojecttype() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Project Type', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Project Type', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Project Type' ),
//     'all_items'         => __( 'All Project Type' ),
//     'parent_item'       => __( 'Parent Project Type' ),
//     'parent_item_colon' => __( 'Parent Project Type:' ),
//     'edit_item'         => __( 'Edit Project Type' ),
//     'update_item'       => __( 'Update Project Type' ),
//     'add_new_item'      => __( 'Add New Project Type' ),
//     'new_item_name'     => __( 'New Project Type Name' ),
//     'menu_name'         => __( 'Project Type' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_admin_column' => true,
//     'rewrite'           => array( 'slug' => '/project_type', 'with_front' => true)
//   );
//   register_taxonomy( 'project_type', array(
//     'grant'
//   ), $args );


// }
// add_action( 'init', 'registerprojecttype' );



// function registerrecipient() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Recipient', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Recipient', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Recipient' ),
//     'all_items'         => __( 'All Recipient' ),
//     'parent_item'       => __( 'Parent Recipient' ),
//     'parent_item_colon' => __( 'Parent Recipient:' ),
//     'edit_item'         => __( 'Edit Recipient' ),
//     'update_item'       => __( 'Update Recipient' ),
//     'add_new_item'      => __( 'Add New Recipient' ),
//     'new_item_name'     => __( 'New Recipient Name' ),
//     'menu_name'         => __( 'Recipient' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_admin_column' => true,
//     'rewrite'           => array( 'slug' => '/recipient', 'with_front' => true)
//   );
//   register_taxonomy( 'recipient', array(
//     'grant'
//   ), $args );


// }
// add_action( 'init', 'registerrecipient' );


// function registercity() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'City', 'taxonomy general name' ),
//     'singular_name'     => _x( 'City', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search City' ),
//     'all_items'         => __( 'All City' ),
//     'parent_item'       => __( 'Parent City' ),
//     'parent_item_colon' => __( 'Parent City:' ),
//     'edit_item'         => __( 'Edit City' ),
//     'update_item'       => __( 'Update City' ),
//     'add_new_item'      => __( 'Add New City' ),
//     'new_item_name'     => __( 'New City Name' ),
//     'menu_name'         => __( 'City' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_admin_column' => true,
//     'rewrite'           => array( 'slug' => '/city', 'with_front' => true)
//   );
//   register_taxonomy( 'city', array(
//     'grant'
//   ), $args );


// }
// add_action( 'init', 'registercity' );


// function registereventtype() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Event Type', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Event Type', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Event Type' ),
//     'all_items'         => __( 'All Event Type' ),
//     'parent_item'       => __( 'Parent Event Type' ),
//     'parent_item_colon' => __( 'Parent Event Type:' ),
//     'edit_item'         => __( 'Edit Event Type' ),
//     'update_item'       => __( 'Update Event Type' ),
//     'add_new_item'      => __( 'Add New Event Type' ),
//     'new_item_name'     => __( 'New Event Type Name' ),
//     'menu_name'         => __( 'Event Type' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_admin_column' => true,
//     'rewrite'           => array( 'slug' => '/event_type', 'with_front' => true)
//   );
//   register_taxonomy( 'event_type', array(
//     'event'
//   ), $args );


// }
// add_action( 'init', 'registereventtype' );

// function registertype() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Publication Type', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Publication Type', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Publication Types' ),
//     'all_items'         => __( 'All Publication Types' ),
//     'parent_item'       => __( 'Parent Publication Type' ),
//     'parent_item_colon' => __( 'Parent Publication Type:' ),
//     'edit_item'         => __( 'Edit Publication Type' ),
//     'update_item'       => __( 'Update Publication Type' ),
//     'add_new_item'      => __( 'Add New Publication Type' ),
//     'new_item_name'     => __( 'New Publication Type Name' ),
//     'menu_name'         => __( 'Publication Types' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_in_quick_edit'=> true,
//     'meta_box_cb'       => false,
//     'show_admin_column' => false,
//     'rewrite'           => array( 'slug' => 'publications/type', 'with_front' => true)
//   );
//   register_taxonomy( 'publication_type', array(
//     'publication',
//   ), $args );


// }
// add_action( 'init', 'registertype' );

// function registerpubtime() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Publication Time', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Publication Time', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Publication Times' ),
//     'all_items'         => __( 'All Publication Times' ),
//     'parent_item'       => __( 'Parent Publication Time' ),
//     'parent_item_colon' => __( 'Parent Publication Time:' ),
//     'edit_item'         => __( 'Edit Publication Time' ),
//     'update_item'       => __( 'Update Publication Time' ),
//     'add_new_item'      => __( 'Add New Publication Time' ),
//     'new_item_name'     => __( 'New Publication Time Name' ),
//     'menu_name'         => __( 'Publication Times' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => true,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_in_quick_edit'=> true,
//     'meta_box_cb'       => false,
//     'show_admin_column' => false,
//     'rewrite'           => array( 'slug' => 'publications/time', 'with_front' => true)
//   );
//   register_taxonomy( 'publication_time', array(
//     'publication',
//   ), $args );


// }
// add_action( 'init', 'registerpubtime' );


// function registerconnectioncity() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Connection City', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Connection City', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Connection City' ),
//     'all_items'         => __( 'All Connection City' ),
//     'parent_item'       => __( 'Parent Connection City' ),
//     'parent_item_colon' => __( 'Parent Connection City:' ),
//     'edit_item'         => __( 'Edit Connection City' ),
//     'update_item'       => __( 'Update Connection City' ),
//     'add_new_item'      => __( 'Add New Connection City' ),
//     'new_item_name'     => __( 'New Connection City Name' ),
//     'menu_name'         => __( 'Connection City' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => false,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_admin_column' => true,
//     'rewrite'           => array( 'slug' => '/connection-city', 'with_front' => true)
//   );
//   register_taxonomy( 'connection-city', array(
//     'post'
//   ), $args );


// }
// add_action( 'init', 'registerconnectioncity' );

// function registerconnectionproject() {

//   // Add Class taxonomy, make it hierarchical (like categories)
//   $labels = array(
//     'name'              => _x( 'Connection Project', 'taxonomy general name' ),
//     'singular_name'     => _x( 'Connection Project', 'taxonomy singular name' ),
//     'search_items'      => __( 'Search Connection Project' ),
//     'all_items'         => __( 'All Connection Project' ),
//     'parent_item'       => __( 'Parent Connection Project' ),
//     'parent_item_colon' => __( 'Parent Connection Project:' ),
//     'edit_item'         => __( 'Edit Connection Project' ),
//     'update_item'       => __( 'Update Connection Project' ),
//     'add_new_item'      => __( 'Add New Connection Project' ),
//     'new_item_name'     => __( 'New Connection Project Name' ),
//     'menu_name'         => __( 'Connection Project' ),
//   );
//   $args = array(
//     'labels'            => $labels,
//     'hierarchical'      => false,
//     'query_var'         => true,
//     'public'            => true,
//     'show_ui'           => true,
//     'show_admin_column' => true,
//     'rewrite'           => array( 'slug' => '/connection-project', 'with_front' => true)
//   );
//   register_taxonomy( 'connection-project', array(
//     'post'
//   ), $args );


// }
// add_action( 'init', 'registerconnectionproject' );

