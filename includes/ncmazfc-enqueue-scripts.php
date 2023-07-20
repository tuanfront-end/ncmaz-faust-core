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
