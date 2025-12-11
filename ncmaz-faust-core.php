<?php

/**
 * Plugin Name:       Ncmaz Faust Core
 * Description:       Core for Ncmaz headless!
 * Requires at least: 6.5
 * Requires PHP:      7.3
 * Requires Plugins:  advanced-custom-fields, wp-graphql, faustwp, wpgraphql-acf, wpgraphql-smart-cache, mailpoet, WPGraphQL Content Blocks
 * Version:           2.8.3
 * Author:            BooliiTheme
 * Author URI:        https://booliitheme.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-faust-core
 *
 * @package           create-block
 */

defined('ABSPATH') || exit;
define('NCMAZFC_VERSION', '2.8.3');
define('NCMAZFC_FILE', __FILE__);
define('NCMAZFC_PLUGIN_BASE', plugin_basename(NCMAZFC_FILE));
define('NCMAZFC_PATH', plugin_dir_path(NCMAZFC_FILE));
define('NCMAZFC_URI', plugins_url('/', NCMAZFC_FILE));
define('NCMAZFC_BUILD_PATH', __DIR__ . '/build');

// tgmpa required plugins
require plugin_dir_path(__FILE__) . 'includes/ncmazfc_required_plugins.php';

// enqueue scripts
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-enqueue-scripts.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-hooks.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'includes/gutenberg/index.php';
// __wpgraphql 
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-fragments.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-AFC-fields.php';
// __wpgraphql
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-mutation.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-custom-where.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-wpgraphql.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-update-post-custom-fields.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-ocid.php';

/*
* Add theme support
*/
add_theme_support('post-formats',  ['gallery', 'video', 'audio']);


if (!function_exists('ncmazfc_plugin_graphql_content_block_is_active')):
    function ncmazfc_plugin_graphql_content_block_is_active()
    {
        return defined('WPGRAPHQL_CONTENT_BLOCKS_DIR') && defined('WPGRAPHQL_CONTENT_BLOCKS_VERSION');
    }
endif;

/*
* Notification if required plugins are not installed
*/
add_action('plugins_loaded',  function () {
    if (
        !ncmazfc_plugin_graphql_content_block_is_active()
    ) {
        add_action('admin_notices', function () {
            $class    = 'notice notice-error';
            $message1 = __('The Ncmaz Faust Core plugin is not working correctly.', 'ncmaz-faust-core');

            // Tạo link tới trang plugin trên wp.org (click sẽ dẫn tới phần tìm kiếm plugin)
            $plugin_name = 'WPGraphQL Content Blocks';
            $link = sprintf(
                '<a href="%s">%s</a>',
                esc_url(add_query_arg(
                    [
                        'plugin_status' => 'all',
                        'page'          => 'tgmpa-install-plugins',
                    ],
                    admin_url('themes.php')
                )),
                esc_html($plugin_name)
            );

            $message2 = sprintf(
                /* translators: %s = plugin name with link */
                __('Please install and activate the %s plugin.', 'ncmaz-faust-core'),
                $link
            );

            printf(
                '<div class="%1$s"><h4>%2$s</h4><p>%3$s</p></div>',
                esc_attr($class),
                esc_html($message1),
                wp_kses_post($message2) // Cho phép thẻ <a> an toàn
            );
        });
    }
}, 999);
