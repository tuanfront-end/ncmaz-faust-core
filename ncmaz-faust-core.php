<?php

/**
 * Plugin Name:       Ncmaz Faust Core
 * Description:       Core for Ncmaz headless!
 * Requires at least: 5.8
 * Requires PHP:      7.3
 * Version:           0.0.1
 * Author:            ChisNghiax
 * Author URI:        https://ChisNghiax.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmazfc
 *
 * @package           create-block
 */

defined('ABSPATH') || exit;


// required plugins -----------------
// 1 - advanced-custom-fields - advancedcustomfields.com
// 2 - wp-graphql - wpgraphql.com
// 3 - Faust.js™ - https://faustjs.org/
// 4 - WPGraphQL Content Blocks - https://github.com/wpengine/wp-graphql-content-blocks / https://faustjs.org/tutorial/get-started-with-wp-graphql-content-blocks
// 5 - WPGraphQL for Advanced Custom Fields - https://github.com/wp-graphql/wpgraphql-acf
// 6 - WPGraphQL Smart Cache - https://github.com/wp-graphql/wp-graphql-smart-cache
// 7 - mailpoet - https://www.mailpoet.com/
// -- check one of the required plugins is not active then deactivate this plugin
if (!is_plugin_active('advanced-custom-fields/acf.php') || !is_plugin_active('wp-graphql/wp-graphql.php') || !is_plugin_active('faustwp/faustwp.php') || !is_plugin_active('wp-graphql-content-blocks/wp-graphql-content-blocks.php') || !is_plugin_active('wp-graphql-acf/wp-graphql-acf.php') || !is_plugin_active('wp-graphql-smart-cache/wp-graphql-smart-cache.php') || !is_plugin_active('mailpoet/mailpoet.php')) {

    // show a notice that required plugins is not active
    add_action('admin_notices', function () {
        $class = 'notice notice-error';
        $message = __('Ncmaz Faust Core plugin requires Advanced Custom Fields, WPGraphQL, Faust.js™, WPGraphQL Content Blocks, WPGraphQL for Advanced Custom Fields, WPGraphQL Smart Cache, MailPoet to be installed and activated!', 'ncmazfc');

        printf('<div class="%1$s"><p>%2$s</p></div>', esc_attr($class), esc_html($message));
    });

    add_action('admin_init', function () {
        deactivate_plugins(plugin_basename(__FILE__));
    });
    return;
}




// Define Constants.
define('NCMAZFC_VERSION', '0.0.1');
define('NCMAZFC_FILE', __FILE__);
define('NCMAZFC_PLUGIN_BASE', plugin_basename(NCMAZFC_FILE));
define('NCMAZFC_PATH', plugin_dir_path(NCMAZFC_FILE));
define('NCMAZFC_URI', plugins_url('/', NCMAZFC_FILE));
define('NCMAZFC_BUILD_PATH', __DIR__ . '/build');
// 
define('_NCMAZ_FRONTEND_VERSION', '4.4.2');
define('_NCMAZ_FRONTEND_DIR_URL', plugin_dir_url(__FILE__));
define('_NCMAZ_FRONTEND_DIR_PATH', plugin_dir_path(__FILE__));
define('_NCMAZ_FRONTEND_PREFIX', 'ncmaz_frontend_prefix_');
define('_NCMAZ_FRONTEND_TEXT_DOMAIN', 'ncmaz-frontend');

// ****  -----------------
add_theme_support('post-formats',  ['gallery', 'video', 'audio']);




// ****  -----------------
// below is of ncmaz frontend plugin -----------------


require plugin_dir_path(__FILE__) . 'includes/ncmaz-AFC-fields.php';
add_action('plugins_loaded',  function () {
    require plugin_dir_path(__FILE__) . 'includes/ncmaz-custom-wpgraphql.php';
    require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-mutation.php';
    require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-custom-where.php';
});
require plugin_dir_path(__FILE__) . 'includes/ncmaz-custom-hooks.php';
// ****  -----------------
// below is of ncmaz faust core plugin -----------------
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-fragments.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-update-post-custom-fields.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-enqueue-scripts.php';
require plugin_dir_path(__FILE__) . 'includes/gutenberg/index.php';
// end


//  ****  -----------------
//  update some ACF custom fields -----------------
function ncmazfc__plugin_activate_update_fields()
{
    add_option('ncmazFc_is_update_one_time', 'NO');
}
register_activation_hook(__FILE__, 'ncmazfc__plugin_activate_update_fields');


if (!function_exists('ncmazFc__update_posts_custom_fields_one_time')) :
    // update reading time for all posts (Note: only run once time when you active this plugin)
    function ncmazFc__update_posts_custom_fields_one_time()
    {
        if (!is_admin() || get_option('ncmazFc_is_update_one_time') !== 'NO' || !is_plugin_active('advanced-custom-fields/acf.php')) {
            return;
        }
        delete_option('ncmazFc_is_update_one_time');

        /* do stuff once right after activation */
        $args = array(
            'post_type'      => 'post', // Chỉnh post_type nếu bạn sử dụng post type khác.
            'posts_per_page' => -1,
        );
        $query = new WP_Query($args);
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $id = get_the_ID();
                $post = get_post($id);
                // Cập nhật giá trị reading_time cho bài viết hiện tại.
                if (!get_field('reading_time', $id)) {
                    $reading_time = ncmazFc__calculate_reading_time_by_content($post->post_content);
                    update_field('reading_time', $reading_time, $id);
                }
            }
            // Đặt lại truy vấn để đảm bảo không có lỗi trong các truy vấn tiếp theo.
            wp_reset_query();
        }
    }
    add_action('admin_init', 'ncmazFc__update_posts_custom_fields_one_time');
endif;

// update reading time 
if (!function_exists("ncmazFc__update_reading_time_when_save_post")) :
    function ncmazFc__update_reading_time_when_save_post($post_ID, $post, $update)
    {
        if ($post->post_type !== 'post' || !function_exists('get_field')) {
            return null;
        }

        if (!get_field('reading_time', $post_ID)) {
            $reading_time = ncmazFc__calculate_reading_time_by_content($post->post_content);
            update_field('reading_time', $reading_time, $post_ID);
        }
    }
    add_action('save_post', 'ncmazFc__update_reading_time_when_save_post', 10, 3);
endif;
