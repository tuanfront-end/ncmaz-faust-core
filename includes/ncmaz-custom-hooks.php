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


// SHOW POST STATE FOR NCMAZ REACT-EDITOR PAGE
add_filter('display_post_states', 'ncmazFe_custom_post_states', 10, 2);
if (!function_exists('ncmazFe_custom_post_states')) {
    function ncmazFe_custom_post_states($states, $post)
    {
        $currentSpecificPage = checkPageNcmazAccountOrPostSubmissionEditor($post->ID);
        if (empty($currentSpecificPage)) {
            return $states;
        }
        if ($currentSpecificPage === "pageNcmazAccountUrl") {
            $states[] = __('Ncmaz Edit Account Page');
        }
        if ($currentSpecificPage === "pagePostSubmissionEditorUrl") {
            $states[] = __('Ncmaz Post Submission Page');
        }

        return $states;
    }
}


// ADD THEME STYLE RADIUS FOR BODY CLASS
add_filter('body_class', function ($classes) {
    global $ncmaz_redux_demo;
    if (
        empty($ncmaz_redux_demo['nc-general-settings--general-theme-radius'])
        || $ncmaz_redux_demo['nc-general-settings--general-theme-radius'] === 'DEFAULT'
    ) {
        return $classes;
    }
    $radiusClass = ' ncmaztheme-' . $ncmaz_redux_demo['nc-general-settings--general-theme-radius'] . '-radius ';
    return array_merge($classes, array($radiusClass));
});

// 
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
