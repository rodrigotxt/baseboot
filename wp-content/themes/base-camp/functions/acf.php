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
    // $context['tagrepeater'] = get_field('tag_repeater');
    // $context['tagtaxonomy'] = get_field('tag_taxonomy');

    // $context['taxtag'] = get_field('taxtag');
    // $context['relatedpages'] = get_field('related_pages');
    // $context['publicationcolornew'] = get_field('publication_color_new');
    // $context['campaignpublications'] = get_field('campaign_publications');
    // $context['postherobackground'] = get_field('post_hero_background');
    // $context['postherobackgroundmobile'] = get_field('post_hero_background_mobile');
    // $context['postherotitle'] = get_field('post_hero_title');
    // $context['postherofixed'] = get_field('is_post_hero_fixed');
    // $context['postherotype'] = get_field('post_hero_type');
    // $context['postherovideodesktop'] = get_field('post_hero_video_desktop');
    // $context['postvideo_url'] = get_field('post_hero_video_desktop');
    // $context['postheroheight'] = get_field('post_hero_height');
    // $context['postherovideomobile'] = get_field('post_hero_video_mobile');
    // $context['postherosubtitle'] = get_field('post_hero_subtitle');
    // $context['postherooverlaycolor'] = get_field('post_hero_overlay_color');
    // $context['postherooverlayopacity'] = get_field('post_hero_overlay_opacity');
    // $context['postherotitleseparator'] = get_field('post_hero_title_separator');
    // $context['postherowidth'] = get_field('post_hero_title_width');
    // $context['herocta'] = get_field('hero_cta');
    // $context['pdffile'] = get_field('pdf_file');
    // $context['taximage'] = get_field('tax_image');

    // $context['teamtypeboard'] = get_field('team_type_board');
    // $context['teamtypestaff'] = get_field('team_type_staff');

    // $context['strategiescolor'] = get_field('strategies_color');
    // $context['storiescolor'] = get_field('stories_color');
    // $context['backgroundcolor'] = get_field('background_color');
    // $context['initiativescolor'] = get_field('initiatives_color');
    // $context['initiativesrelationship'] = get_field('initiatives_relationship');
    // $context['strategiesrelationship'] = get_field('strategies_relationship');
    // $context['backgroundtype'] = get_field('background_type');
    // $context['backgroundvideoid'] = get_field('background_video_id');
    // $context['blockbackgroundcolor'] = get_field('block_background_color');

    // $context['mainnavexcerpt'] = get_field('main_nav_excerpt');

    // $context['prefooterhero'] = get_field('pre_footer_hero', 'option');
    // $context['prefooterherotext'] = get_field('pre_footer_hero_text', 'option');
    // $context['prefooterdownloadreportpdf'] = get_field('pre_footer_download_report_pdf', 'option');
    // $context['prefooterdownloadreportcsv'] = get_field('pre_footer_download_report_csv', 'option');

    // $context['prefooterdownloadfilesrepeater'] = get_field('pre_footer_download_files_repeater', 'option');
    // $context['footerreportrepeater'] = get_field('footer_report_repeater', 'option');

    // $context['splashimage'] = get_field('splash_image');
    // $context['awardtext'] = get_field('award_text');
    // $context['casestudydetails'] = get_field('case_study_details');
    // $context['casestudytagline'] = get_field('case_study_tagline');
    // $context['casestudyquote'] = get_field('case_study_quote');
    // $context['relatedcontent'] = get_field('related_content');
    // $context['associatedcasestudy'] = get_field('associated_case_study');

    // $context['storyrelationship'] = get_field('story_relationship');
    // $context['downloadreportgroup'] = get_field('download_report_group');

    // $context['approachrepeater'] = get_field('approach_repeater');
    // $context['capabilitiesrepeater'] = get_field('capabilities_repeater');

    // //flexblocks
    // $context['flexblock'] = get_field('content_blocks');
    // $context['flexblockstories'] = get_field('transitcenter_flexible_content');

    return $context;

  }

?>