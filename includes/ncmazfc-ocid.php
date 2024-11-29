<?php

add_filter('ocdi/import_files', 'ncmazfc__ocdi_import_files');
function ncmazfc__ocdi_import_files()
{
    return [
        [
            'import_file_name'           => 'Demo Import Ncmaz',
            'categories'                 => ['Category 1'],
            'import_file_url'            => NCMAZFC_URI . 'includes/xmls/all.xml',
            'import_preview_image_url'   => NCMAZFC_URI . 'public/images/demo-import-preview.png',
            'preview_url'                => 'https://ncmaz-faust-delta.vercel.app/',
        ],
    ];
}




// AFTER IMPORT DEMO -- SETTING MENU, FRONT-PAGE, WIDGET ...
add_action('ocdi/after_import', 'ncmazfc__ocdi_after_import_setup');
if (!function_exists('ncmazfc__ocdi_after_import_setup')) :
    function ncmazfc__ocdi_after_import_setup()
    {
        // Assign menus to their locations.
        $main_menu = get_term_by('name', 'Primary', 'nav_menu');
        $footer_menu = get_term_by('name', 'Footer', 'nav_menu');
        set_theme_mod(
            'nav_menu_locations',
            [
                'primary' => $main_menu->term_id,
                'footer' => $footer_menu->term_id,
            ]
        );


        // Assign front page and posts page (blog page).
        // WP_Query arguments
        $args = array(
            'post_type'              => array('page'),
            'posts_per_page'         => '1',
            'ignore_sticky_posts'    => true,
            'name'                   => 'home-1',
        );
        // The Query
        $query = new WP_Query($args);

        // The Loop
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                update_option('show_on_front', 'page');
                update_option('page_on_front',  get_the_ID());
            }
        } else {
            // no posts found
        }
    }
endif;
