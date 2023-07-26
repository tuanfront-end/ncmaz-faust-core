<?php



if (!function_exists(('ncmazfc__graphql_query_posts_from_post_block'))) :
    function ncmazfc__graphql_query_posts_from_post_block($queries)
    {
        if (!function_exists('graphql')) {
            return null;
        }
        global $NC_POSTS_EDGES_FRAGMENT, $NC_POST_CARD_FRAGMENT, $NC_IMAGE_MEDIA_FRAGMENT, $NC_POST_META_DATA_FRAGMENT, $NC_TERMS_EDGES_FRAGMENT, $NC_TERM_CARD_FRAGMENT;


        $categoryIn = !empty($queries['taxQuery']["category"] ?? []) ? $queries['taxQuery']["category"] : [];
        $tagIn = !empty($queries['taxQuery']["post_tag"] ?? []) ? $queries['taxQuery']["post_tag"] : [];
        $authorIn = !empty($queries['author'] ?? "") ? explode(',', $queries['author']) : [];

        $perPage = !empty($queries['perPage'] ?? '') ? intval($queries['perPage']) : 10;


        $variables = [
            // "author" => !empty($queries['author']) ? $queries['author'] : 0,
            "authorIn" => $authorIn,
            "categoryIn" => $categoryIn,
            "tagIn" => $tagIn,
            "search" => $queries["search"],
            "field" => $queries["orderBy"],
            "order" => $queries["order"],
            "first" => $perPage,
        ];


        $query = ' query postsWithVariablesQuery(
                $authorIn: [ID] = []
                $categoryIn: [ID] = []
                $tagIn: [ID] = []
                $search: String = ""
                $first: Int = 10
                $field: PostObjectsConnectionOrderbyEnum = AUTHOR
                $order: OrderEnum = ASC
            ) {
                posts (
                    where: {
                        authorIn: $authorIn
                        categoryIn: $categoryIn
                        tagIn: $tagIn
                        search: $search
                        orderby: { field: $field, order: $order }
                    }
                    first: $first
                ) {
                    ...NcmazFcPostsEdegsFields
                }
            } ' . $NC_POSTS_EDGES_FRAGMENT . ' ' . $NC_POST_CARD_FRAGMENT . ' ' . $NC_IMAGE_MEDIA_FRAGMENT . ' ' . $NC_POST_META_DATA_FRAGMENT;

        //  query 
        $results = graphql(
            [
                'query'          => $query,
                'variables'      => $variables,
                'operation_name' => "postsWithVariablesQuery",
            ]
        );
        return  $results;
    }
endif;
