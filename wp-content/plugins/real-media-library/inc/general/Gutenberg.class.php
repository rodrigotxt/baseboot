<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Create gutenberg blocks with Server side rendering.
 */
class Gutenberg extends base\Base {
    
    private static $me = null;
    
    const ID_GALLERY = 'real-media-library/gallery';
    
    private function __construct() {
        register_block_type(self::ID_GALLERY, array(
            'render_callback' => array($this, 'renderGallery'),
 			'attributes' => array( 
 				'fid' => array(
 					'type' => 'number'
 				),
 				'align' => array(
 					'type' => 'string',
 					'default' => 'undefined'
 				),
 				'columns' => array(
 					'type' => 'number',
 					'default' => 3
 				),
 				'imageCrop' => array(
 					'type' => 'boolean',
 					'default' => true
 				),
 				'captions' => array(
 					'type' => 'boolean',
 					'default' => true
 				),
 				'linkTo' => array(
 					'type' => 'string',
 					'default' => 'none'
 				),
 				'lastEditReload' => array(
 					'type' => 'number',
 					'default' => 0
 				)
 			)
        ));
    }
    
    /**
     * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/gallery/index.js#L196-L222
     */
    public function renderGallery($attributes, $content) {
        if (!isset($attributes['fid']) || empty($attributes['fid'])) {
            return '<span></span>';
        }
        
        // Fetch images
        $query = new \WP_Query(array(
            'post_status' => 'inherit',
            'post_type' => 'attachment',
            'rml_folder' => $attributes['fid']
        ));
        $posts = $query->get_posts();
        
        // Iterate all items
        $html = '<ul class="wp-block-gallery align' . $attributes['align'] . ' columns-' . $attributes['columns'] . ' ' . ($attributes['imageCrop'] ? 'is-cropped' : '') . '">';
        foreach ($posts as $post) {
            if (!wp_attachment_is_image($post)) {
                continue;
            }
            
            // Collect data
            $href = false;
            $link = get_attachment_link($post->ID);
            $src = wp_get_attachment_image_src($post->ID, 'full');
            if (!isset($src[0])) {
                continue;
            }
            $src = $src[0];
            $alt = get_post_meta($post->id, '_wp_attachment_image_alt', true);
            $alt = empty($alt) ? $post->post_title : $alt;
            $caption = $attributes['captions'] ? $post->post_excerpt : '';
            
            switch ($attributes['linkTo']) {
                case 'media':
                    $href = $src;
                    break;
                case 'attachment':
                    $href = $link;
                    break;
            }
            
            // Create output
            $img = '<img src="' . $src . '" alt="' . $alt . '" data-id="' . $post->ID . '" data-link="' . $link . '" class="wp-image-' . $post->ID . '"/>';
            $img = empty($href) ? $img : '<a href="' . $href . '">' . $img . '</a>';
            $html .= '<li class="blocks-gallery-item"><figure>' . $img . (empty($caption) ? '' : ('<figcaption>' . $caption . '</figcaption>')) . '</figure></li>';
        }
        return $html . '</ul>';
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new Gutenberg();
        }
        return self::$me;
    }
}