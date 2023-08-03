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


// DEMO Truy vấn  Post theo userReactionPost authorID va userReactionPost title với GraphQL ------------------------------
add_action('graphql_register_types', function () {
    register_graphql_field('RootQueryToPostConnectionWhereArgs', 'inUserReactionPosts', [
        'type' => 'String',
        'description' => __('Filter posts liked/save/viewed by user (user_id/reaction, eg: 1/SAVE)', 'ncmazfc'),
    ]);
});
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {
    if (!empty($args['where']['inUserReactionPosts'])) {

        // -----------------------------------------------------------------
        if (!function_exists('ncmazfc__GetUserReactionPostsByAuthorAndSearch')) :
            function ncmazfc__GetUserReactionPostsByAuthorAndSearch($author, $search)
            {
                $variables = [
                    "author" => $author,
                    "search" => $search,
                ];


                $query = 'query GetUserReactionPostsByAuthorAndSearch($author: Int = 1, $search: String = "") {
                userReactionPosts(where: {author: $author, search: $search}, first: 200) {
                  nodes {
                      id
                      title
                  }
                }
              }';

                //  query 
                $results = graphql(
                    [
                        'query'          => $query,
                        'variables'      => $variables,
                        'operation_name' => "GetUserReactionPostsByAuthorAndSearch",
                    ]
                );
                return  $results;
            }
        endif;
        // -----------------------------------------------------------------

        $userID_reaction = explode("/",  $args['where']['inUserReactionPosts']);
        $data = ncmazfc__GetUserReactionPostsByAuthorAndSearch(intval($userID_reaction[0]), $userID_reaction[1]);
        $userReactionPosts = $data['data']['userReactionPosts']['nodes'] ?? [];

        // $item['title'] se o dinh danh la [postID,reaction], eg: 1,SAVE
        $ids =  array_map(function ($item) {
            return explode(",", $item['title'])[0];
        }, $userReactionPosts);

        // 
        $query_args['post__in'] = empty($ids) ? [0] : $ids;
    }
    return $query_args;
}, 10, 5);
