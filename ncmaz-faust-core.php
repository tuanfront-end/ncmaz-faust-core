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

// maybe this will be slow down the wpgraphql query.
// require plugin_dir_path(__FILE__) . 'includes/ncmaz-fe-total-counts-for-wp-graphql.php';

require plugin_dir_path(__FILE__) . 'includes/ncmaz-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'includes/ncmaz-enqueue-scripts.php';
require plugin_dir_path(__FILE__) . 'includes/ncmaz-update-views-count.php';
require plugin_dir_path(__FILE__) . 'includes/ncmaz-register-widgets.php';
require plugin_dir_path(__FILE__) . 'includes/ncmaz-AFC-fields.php';
add_action('plugins_loaded',  function () {
    require plugin_dir_path(__FILE__) . 'includes/ncmaz-redux-sample-config.php';
    require plugin_dir_path(__FILE__) . 'includes/ncmaz-custom-wpgraphql.php';
});
require plugin_dir_path(__FILE__) . 'includes/ncmaz-custom-hooks.php';


// ****  -----------------
// below is of ncmaz faust core plugin -----------------
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-enqueue-scripts.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-register-blocks.php';
// end


//  ****  -----------------
//  update some ACF custom fields -----------------
function ncmazfc__plugin_activate_update_fields()
{
    add_option('ncmazFc_is_update_one_time', 'NO');
}
register_activation_hook(__FILE__, 'ncmazfc__plugin_activate_update_fields');


if (!function_exists('ncmazFc__update_posts_custom_fields_one_time')) {
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
}
add_action('admin_init', 'ncmazFc__update_posts_custom_fields_one_time');
