<?php

// ADD NEW gutenberg BLOCK CATEGORY 
function ncmazfc__add_new_block_category($block_categories, $editor_context)
{
    if (!empty($editor_context->post)) {
        array_unshift(
            $block_categories,
            array(
                'slug'  => 'ncmazfc-blocks',
                'title' => __('Ncmaz faust', 'ncmaz-faust-core'),
                'icon'  => null,
            ),
        );
    }
    return $block_categories;
}
add_filter('block_categories_all', 'ncmazfc__add_new_block_category', 9999999, 2);


//  HIDE ADMIN BAR
add_action('wp', 'ncmazFrontend_maybe_hide_admin_bar');
if (!function_exists('ncmazFrontend_maybe_hide_admin_bar')) {
    function ncmazFrontend_maybe_hide_admin_bar()
    {
        if (!current_user_can('manage_options')) {
            add_filter('show_admin_bar', '__return_false');
        }
    }
}

// ============ READ ONLY SOME AFC FIELDS ============
if (!function_exists('ncmazFc__acf_prepare_field')) :
    function ncmazFc__acf_prepare_field($field)
    {
        $field['readonly'] = true;
        return $field;
    }
endif;
// add_filter('acf/prepare_field/name=views_count', 'ncmazFc__acf_prepare_field');
add_filter('acf/prepare_field/name=reading_time', 'ncmazFc__acf_prepare_field');
add_filter('acf/prepare_field/name=liked_posts', 'ncmazFc__acf_prepare_field');
add_filter('acf/prepare_field/name=saved_posts', 'ncmazFc__acf_prepare_field');
add_filter('acf/prepare_field/name=viewed_posts', 'ncmazFc__acf_prepare_field');


// *****  ============ update some ACF custom fields when plugin active ============
register_activation_hook(__FILE__, 'ncmazfc__plugin_activate_update_fields');
function ncmazfc__plugin_activate_update_fields()
{
    add_option('ncmazFc_is_update_one_time', 'NO');
}
add_action('admin_init', 'ncmazFc__update_posts_custom_fields_one_time');
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
endif;

// update reading time 
add_action('save_post', 'ncmazFc__update_reading_time_when_save_post', 99, 3);
if (!function_exists("ncmazFc__update_reading_time_when_save_post")) :
    function ncmazFc__update_reading_time_when_save_post($post_ID, $post, $update)
    {
        if ($post->post_type !== 'post' || !function_exists('update_field')) {
            return;
        }

        // bail out if this is an autosave
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        if (wp_is_post_revision($post_ID)) {
            return;
        }

        $reading_time = ncmazFc__calculate_reading_time_by_content($post->post_content);
        update_field('reading_time', $reading_time, $post_ID);
    }
endif;
