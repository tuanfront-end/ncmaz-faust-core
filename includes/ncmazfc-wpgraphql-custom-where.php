<?php
// DEMO Truy vấn Sticky Post với GraphQL ------------------------------
add_action('graphql_register_types', function () {
    register_graphql_field('RootQueryToPostConnectionWhereArgs', 'onlySticky', [
        'type' => 'Boolean',
        'description' => __('Whether to only include sticky posts', 'ncmazfc'),
    ]);
});

add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {
    if (isset($args['where']['onlySticky']) && true === $args['where']['onlySticky']) {
        $sticky_ids = get_option('sticky_posts');
        $query_args['posts_per_page'] = count($sticky_ids);
        $query_args['post__in'] = $sticky_ids;
    }
    return $query_args;
}, 10, 5);
// end ------------------------------



/*
 * Increase perPage for userReactionPosts. This is needed 
 */
// add_filter('graphql_connection_max_query_amount', function (int $max_amount, $source, array $args, $context, $info) {
//     // Bail if the fieldName isn't avail
//     if (empty($info->fieldName)) {
//         return $max_amount;
//     }
//     // Bail if we're not dealing with our target fieldName
//     if ('userReactionPosts' !== $info->fieldName) {
//         return $max_amount;
//     }

//     return 500;
// }, 10, 5);
// end ------------------------------



// add filter to add orderby views_count and likes_count to postObjectConnection ------------------------------
add_filter('graphql_PostObjectsConnectionOrderbyEnum_values', function ($values) {
    $values['VIEWS_COUNT'] = [
        'value' => 'views_count',
        'description' => __('The number of views on the post', 'ncmazfc'),
    ];
    $values['LIKES_COUNT'] = [
        'value' => 'likes_count',
        'description' => __('The number of likes on the post', 'ncmazfc'),
    ];
    return $values;
});
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $input) {
    if (isset($input['where']['orderby']) && is_array($input['where']['orderby'])) {
        foreach ($input['where']['orderby'] as $orderby) {
            if (!isset($orderby['field']) || 'views_count' !== $orderby['field']) {
                continue;
            }
            $query_args['meta_key'] = 'views_count';
            $query_args['orderby'] = 'meta_value_num';
            $query_args['order'] = $orderby['order'];
        }
    }
    return $query_args;
}, 10, 3);
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $input) {
    if (isset($input['where']['orderby']) && is_array($input['where']['orderby'])) {
        foreach ($input['where']['orderby'] as $orderby) {
            if (!isset($orderby['field']) || 'likes_count' !== $orderby['field']) {
                continue;
            }
            $query_args['meta_key'] = 'likes_count';
            $query_args['orderby'] = 'meta_value_num';
            $query_args['order'] = $orderby['order'];
        }
    }
    return $query_args;
}, 10, 3);
// end ------------------------------