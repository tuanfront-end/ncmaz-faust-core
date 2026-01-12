<?php
// DEMO Truy vấn Sticky Post với GraphQL ------------------------------
add_action('graphql_register_types', function () {
    register_graphql_field('RootQueryToPostConnectionWhereArgs', 'onlySticky', [
        'type' => 'Boolean',
        'description' => __('Whether to only include sticky posts', 'ncmaz-faust-core'),
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


// DEMO Truy vấn logo với GraphQL ------------------------------
add_action('graphql_register_types', function () {
    register_graphql_field('RootQuery', 'siteLogo', [
        'type' => 'MediaItem',
        'description' => __('The logo set in the customizer', 'ncmaz-faust-core'),
        'resolve' => function () {
            $logo_id = get_theme_mod('custom_logo');
            if (!isset($logo_id) || !absint($logo_id)) {
                return null;
            }
            $media_object = get_post($logo_id);
            return new \WPGraphQL\Model\Post($media_object);
        }
    ]);
});
// end ------------------------------


/*
 * Increase perPage for userReactionPosts. This is needed 
 */
add_filter('graphql_connection_max_query_amount', function (int $max_amount, $source, array $args, $context, $info) {
    // Bail if the fieldName isn't avail
    if (empty($info->fieldName)) {
        return $max_amount;
    }
    // Bail if we're not dealing with our target fieldName
    if ('userReactionPosts' !== $info->fieldName) {
        return $max_amount;
    }

    return 500;
}, 10, 5);
// end ------------------------------



// add filter to add orderby views_count and likes_count to postObjectConnection ------------------------------
add_filter('graphql_PostObjectsConnectionOrderbyEnum_values', function ($values) {
    $values['VIEWS_COUNT'] = [
        'value' => 'views_count',
        'description' => __('The number of views on the post', 'ncmaz-faust-core'),
    ];
    $values['LIKES_COUNT'] = [
        'value' => 'likes_count',
        'description' => __('The number of likes on the post', 'ncmaz-faust-core'),
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


//  Truy vấn  Post theo authorID va user reaction: liked/save/view ------------------------------
// su dung truy van nay trong cac tab: liked/save/view trong trang author
add_action('graphql_register_types', function () {
    register_graphql_field('RootQueryToPostConnectionWhereArgs', 'inUserAndReaction', [
        'type' => 'String',
        'description' => __('Filter posts liked/save/viewed by user slug (user_slug/reaction, eg: admin/SAVE)', 'ncmaz-faust-core'),
    ]);
});
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {
    if (!empty($args['where']['inUserAndReaction'])) {
        if (!is_string($args['where']['inUserAndReaction'])) {
            $query_args['post__in'] = [0];
            return $query_args;
        }

        $userID_reaction = explode("/",  $args['where']['inUserAndReaction']);

        if (empty($userID_reaction[0]) || empty($userID_reaction[1])) {
            $query_args['post__in'] = [0];
            return $query_args;
        }

        // get user meta by slug
        $user = get_user_by('slug', $userID_reaction[0]);
        if (empty($user)) {
            $query_args['post__in'] = [0];
            return $query_args;
        }

        $reaction = $userID_reaction[1];
        $user_id = $user->ID;

        // SAVE
        if ($reaction == "save" || $reaction == "SAVE") {
            // get user meta saved_posts
            $saved_posts = get_user_meta($user_id, 'saved_posts', true);
            $saved_posts =  ncmazfc__convert_string_to_array($saved_posts);
            $ids = array_map('intval', $saved_posts);
        } else if ($reaction == "like" || $reaction == "LIKE") {
            // get user meta liked_posts
            $liked_posts = get_user_meta($user_id, 'liked_posts', true);
            $liked_posts =  ncmazfc__convert_string_to_array($liked_posts);
            $ids = array_map('intval', $liked_posts);
        } else if ($reaction == "view" || $reaction == "VIEW") {
            // get user meta viewed_posts
            $viewed_posts = get_user_meta($user_id, 'viewed_posts', true);
            $viewed_posts =  ncmazfc__convert_string_to_array($viewed_posts);
            $ids = array_map('intval', $viewed_posts);
        } else {
            $query_args['post__in'] = [0];
            return $query_args;
        }
        // 
        $query_args['post__in'] = empty($ids) ? [0] : $ids;
        $query_args['orderby'] = "post__in";
        $query_args['posts_per_page'] = 200;
    }
    return $query_args;
}, 10, 5);



//  Truy vấn related  Posts  theo post id ------------------------------
add_action('graphql_register_types', function () {
    register_graphql_field('RootQueryToPostConnectionWhereArgs', 'isRelatedOfPostId', [
        'type' => 'Int',
        'description' => __('Filter related posts of post_database_id', 'ncmaz-faust-core'),
    ]);
});
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {
    if (!isset($args['where']['isRelatedOfPostId'])) {
        return $query_args;
    }
    if (empty($args['where']['isRelatedOfPostId'])) {
        return $query_args;
    }

    $post_id = $args['where']['isRelatedOfPostId'];
    $categories = wp_get_post_categories($post_id, array('fields' => 'ids'));
    $tags = wp_get_post_tags($post_id, array('fields' => 'ids'));

    $query_args['category__in'] =  empty($categories) ? [] : $categories;
    $query_args['tag__in'] = empty($tags) ? [] : $tags;
    $query_args['post__not_in'] = array($post_id);


    return $query_args;
}, 10, 5);
