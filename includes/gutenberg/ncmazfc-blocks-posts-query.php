<?php

//  GraphQL Query for Posts Block
if (!function_exists(('ncmazfc__graphql_query_posts_from_post_block'))) :
    function ncmazfc__graphql_query_posts_from_post_block($queries)
    {
        if (!function_exists('graphql')) {
            return null;
        }
        global $NC_POSTS_EDGES_FRAGMENT, $NC_POST_CARD_FRAGMENT, $NC_IMAGE_MEDIA_FRAGMENT, $NC_POST_META_DATA_FRAGMENT;

        $categoryIn = !empty($queries['taxQuery']["category"] ?? []) ? $queries['taxQuery']["category"] : [];
        $tagIn = !empty($queries['taxQuery']["post_tag"] ?? []) ? $queries['taxQuery']["post_tag"] : [];
        $authorIn = !empty($queries['author'] ?? "") ? explode(',', $queries['author']) : [];

        $perPage = !empty($queries['perPage'] ?? '') ? intval($queries['perPage']) : 10;


        $variables = [
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
                $field: PostObjectsConnectionOrderbyEnum = DATE
                $order: OrderEnum = DESC
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
                    pageInfo {
                        endCursor
                        hasNextPage
                      }
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
        return [
            "data"          => $results,
            'variables'      => $variables,
        ];
    }
endif;





// =================  TERM TERM TERM TERM TERM ===============================================
// =================  TERM TERM TERM TERM TERM ===============================================
//  GraphQL Query for Terms Block
if (!function_exists(('ncmazfc__graphql_query_terms_from_terms_block'))) :
    function ncmazfc__graphql_query_terms_from_terms_block($queries)
    {
        if (!function_exists('graphql')) {
            return null;
        }
        global $NC_IMAGE_MEDIA_FRAGMENT;

        $numberOfTags = !empty($queries['numberOfTags'] ?? '') ? intval($queries['numberOfTags']) : 30;

        $variables = [
            "taxonomies" => $queries["taxonomy"],
            "orderBy" => $queries["orderBy"],
            "order" => $queries["order"],
            "first" => $numberOfTags,
        ];


        $query = ' query termsCardWithVariablesQuery(
            $first: Int = 10
            $order: OrderEnum = ASC
            $orderby: TermObjectsConnectionOrderbyEnum = COUNT
            $taxonomies: [TaxonomyEnum] = CATEGORY
        ) {
            terms(
                where: { taxonomies: $taxonomies, orderby: $orderby, order: $order }
                first: $first
            ) {
                nodes {
                    id
                    count
                    name
                    uri
                    databaseId
                    taxonomyName
                    ... on Category {
                        ncTaxonomyMeta {
                            color
                            featuredImage {
                                node {
                                    ...NcmazFcImageFields
                                }
                            }
                        }
                    }
                }
            }
        } ' . $NC_IMAGE_MEDIA_FRAGMENT;

        //  query 
        $results = graphql(
            [
                'query'          => $query,
                'variables'      => $variables,
                'operation_name' => "termsCardWithVariablesQuery",
            ]
        );
        return  $results;
    }
endif;
