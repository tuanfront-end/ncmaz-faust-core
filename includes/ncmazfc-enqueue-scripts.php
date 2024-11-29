<?php
add_action('init', function () {
    if (is_admin()) {
        ncmazfc__PluginEnqueueScript();
    }
});

function ncmazfc__PluginEnqueueScript()
{
    wp_enqueue_script(
        'ncmazfc-admin-script',
        plugins_url('../public/js/customizer.js', __FILE__),
        [],
        NCMAZFC_VERSION,
        false
    );

    $frontend_uri = "";
    $faustwp_settings_settings = get_option('faustwp_settings', array());
    if (!empty($faustwp_settings_settings)) {
        $frontend_uri = $faustwp_settings_settings['frontend_uri'] ?? "";
    }

    wp_add_inline_script('ncmazfc-admin-script', 'window.ncmazfc_frontend_uri = ' . json_encode(
        [
            'frontend_uri'  => $frontend_uri,
        ]
    ), 'before');
}
