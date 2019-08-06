<?php

  add_filter( 'timber_context', 'global_timber_context'  );

  function global_timber_context( $context ) {

    //global
    $context['globalbkgcolor'] = get_field('global_background_color', 'option');
    $context['feedbackrepeater'] = get_field('feedback_repeater', 'option');


    // acf options
    $context['contactphone'] = get_field('contact-phone', 'option');
    $context['logolight'] = get_field('logo-light', 'option');
    $context['logodark'] = get_field('logo-dark', 'option');
    $context['socialnetworks'] = get_field('social_networks', 'option');
    $context['socialnetworklink'] = get_field('social_network_link', 'option');
    $context['notfoundbackgroundimage'] = get_field('404_background_image', 'option');
    $context['notfoundmessage'] = get_field('404_message', 'option');
    $context['defaultheroimage'] = get_field('default_hero_image', 'option');
    $context['subfootercopy'] = get_field('sub_footer_copy', 'option');
    $context['globalfeaturedevent'] = get_field('global_featured_event', 'option');
    $context['footerleftcolumntext'] = get_field('footer_left_column_text', 'option');
    $context['footercentercolumntext'] = get_field('footer_center_column_text', 'option');
    $context['primaryaddress'] = get_field('primary_address', 'option');
    $context['mapembed'] = get_field('map_embed', 'option');
    $context['primaryphonenumber'] = get_field('primary_phone_number', 'option');
    $context['primaryemail'] = get_field('primary_email', 'option');
    $context['tagrepeater'] = get_field('tag_repeater', 'option');
    $context['tagtaxonomy'] = get_field('tag_taxonomy', 'option');
    $context['option'] = get_fields('option');

    // post hero
    $context['taxtag'] = get_field('taxtag');
    $context['relatedpages'] = get_field('related_pages');
    $context['publicationcolornew'] = get_field('publication_color_new');
    $context['campaignpublications'] = get_field('campaign_publications');
    $context['postherobackground'] = get_field('post_hero_background');
    $context['postherobackgroundmobile'] = get_field('post_hero_background_mobile');
    $context['postherotitle'] = get_field('post_hero_title');
    $context['postherofixed'] = get_field('is_post_hero_fixed');
    $context['postherotype'] = get_field('post_hero_type');
    $context['postherovideodesktop'] = get_field('post_hero_video_desktop');
    $context['postvideo_url'] = get_field('post_hero_video_desktop');
    $context['postheroheight'] = get_field('post_hero_height');
    $context['postherovideomobile'] = get_field('post_hero_video_mobile');
    $context['postherosubtitle'] = get_field('post_hero_subtitle');
    $context['postherooverlaycolor'] = get_field('post_hero_overlay_color');
    $context['postherooverlayopacity'] = get_field('post_hero_overlay_opacity');
    $context['postherotitleseparator'] = get_field('post_hero_title_separator');
    $context['postherowidth'] = get_field('post_hero_title_width');
    $context['herocta'] = get_field('hero_cta');
    $context['pdffile'] = get_field('pdf_file');
    $context['taximage'] = get_field('tax_image');

    // flexblocks
    $context['flexblock'] = get_field('content_blocks');

    return $context;

  }

?>