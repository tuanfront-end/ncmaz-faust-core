<?php
// Enqueue for Frontend
if (!function_exists("ncmazfc__my_scripts_method")) {
    function ncmazfc__my_scripts_method()
    {
        wp_localize_script(
            'jquery',
            'ncmazFcAjaxObject',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'homeUrl' => home_url(),
            )
        );
    }
    add_action('wp_enqueue_scripts', 'ncmazfc__my_scripts_method');
}

//  enqueue for Admin
add_action('admin_enqueue_scripts', 'ncmazfc__enqueue_scripts_for_admin_editor');
function ncmazfc__enqueue_scripts_for_admin_editor()
{
    wp_localize_script(
        'jquery',
        'ncmazcoreJsData',
        [
            'ajaxurl'                   => admin_url('admin-ajax.php'),
            'restUrl'                   => get_rest_url(),
            'graphQLBasePath'           => get_site_url(null, '/graphql'),
            'img_empty_png'             => plugins_url('../public/images/empty.png', __FILE__),
            'img_musicWave_png'         => plugins_url('../public/images/musicWave.png', __FILE__),
            'homeURL'                   => get_site_url(),
        ]
    );
}
