<?php


// ADD NEW gutenberg BLOCK CATEGORY 
function ncmazfc__add_new_block_category($block_categories, $editor_context)
{
    if (!empty($editor_context->post)) {
        array_unshift(
            $block_categories,
            array(
                'slug'  => 'ncmazfc-blocks',
                'title' => __('Ncmaz faust', 'wcb'),
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
add_filter('acf/prepare_field/name=views_count', 'ncmazFc__acf_prepare_field');
add_filter('acf/prepare_field/name=reading_time', 'ncmazFc__acf_prepare_field');
