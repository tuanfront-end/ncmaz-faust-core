<?php

// CUSTOM  https://www.wpgraphql.com/recipes/

// =====================    Remove Extensions from GraphQL Response     ==============================
// add_filter('graphql_request_results', function ($response) {
//     if (is_array($response) && isset($response['extensions'])) {
//         unset($response['extensions']);
//     }
//     if (is_object($response) && isset($response->extensions)) {
//         unset($response->extensions);
//     }
//     return $response;
// }, 99, 1);



// add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $input) {
//     if (isset($input['where']['orderby']) && is_array($input['where']['orderby'])) {
//         foreach ($input['where']['orderby'] as $orderby) {
//             if (!isset($orderby['field']) || 'reaction_liked_list' !== $orderby['field']) {
//                 continue;
//             }
//             $query_args['meta_key'] = 'reaction_liked_list';
//             $query_args['orderby'] = 'meta_value_num';
//             $query_args['order'] = $orderby['order'];
//         }
//     }
//     return $query_args;
// }, 10, 3);

// MAKE ALL AUTHOR IS PUBLIC
// add_filter('graphql_connection_query_args', function ($query_args, $connection_resolver) {
//     if ($connection_resolver instanceof \WPGraphQL\Data\Connection\UserConnectionResolver) {
//         unset($query_args['has_published_posts']);
//     }
//     return $query_args;
// }, 10, 2);

// add_filter('graphql_object_visibility', function ($visibility, $model_name, $data, $owner, $current_user) {
//     // only apply our adjustments to the UserObject Model
//     if ('UserObject' === $model_name) {
//         $visibility = 'public';
//     }
//     return $visibility;
// }, 10, 5);
