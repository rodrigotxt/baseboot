<?php

/*
|--------------------------------------------------------------------------
| Pagination mid size
|--------------------------------------------------------------------------
|
| Here you can define that how many pagination items there are before and after current
| pagination item in pagination list. First and last item are always visible.
|
| For example:
| $pagination_mid_size = 1 => 1 ... 5 [6] 7 ... 11
| $pagination_mid_size = 2 => 1 ... 4 5 [6] 7 8 ... 11
| $pagination_mid_size = 3 => 1 ... 3 4 5 [6] 7 8 9 ... 11
| $pagination_mid_size = 3 => 1 2 3 4 [5] 6 7 8 ... 11
|
| Supported Mid size value: 1 - n
|
*/

$pagination_mid_size = 2;

$pagination_mid_size += 2; // DON'T TOUCH

/*
|--------------------------------------------------------------------------
| Template paths
|--------------------------------------------------------------------------
|
| Here you may specify an array of paths where to load templates.
|
| Default path: 'resources/views'
|
*/

Timber::$dirname = ['resources/views'];

/**
 * Adds data to Timber context.
 *
 * @param $data
 *
 * @return mixed
 */
function add_to_context($context)
{
    // Add Main Menu to Timber context object
    $context['menu'] = new TimberMenu( 'Main Navigation' );
    $context['submenu'] = new TimberMenu( 'Sub Menu' );
    $context['pubtype'] = new TimberMenu( 'Publication Type' );
    $context['pubtime'] = new TimberMenu( 'Publication Time' );

    // Add main-sidebar to Timber context object
    $context['main_sidebar'] = Timber::get_widgets('main-sidebar');

    // Add Locale strings to Timber context object
    $context['messages'] = get_template_messages();

    // Logo
    $context['logo'] = images_path('transitcenter-logo.png');

    // Favicon
    $context['favicon'] = images_path('favicon.png');

    // Current Template File Name
    $context['current_template_file'] = basename($GLOBALS['template']);

    // Extend TimberSite object
    $context['site'] = new BaseCampSite();

    $context['in_production'] = bc_env('MODE', 'production') === 'production';

    return $context;
}

if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page();
    acf_add_options_sub_page( 'Global' );
}

if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page();
    acf_add_options_sub_page( '404' );
}

if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page();
    acf_add_options_sub_page( 'Footer' );
}

if ( function_exists( 'acf_set_options_page_menu' ) ) {
    acf_set_options_page_menu( __( 'Options' ) );
}


add_filter('timber_context', 'add_to_context');
