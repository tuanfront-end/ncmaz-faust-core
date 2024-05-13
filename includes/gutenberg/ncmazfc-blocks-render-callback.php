<?php
// =============================================render_callback_block_magazine============================== 
if (!function_exists("ncmazfc__render_callback_block_magazine")) :
    function ncmazfc__render_callback_block_magazine($attributes)
    {
        $data = [];
        $result = ncmazfc__graphql_query_posts_from_post_block($attributes['queries']);

        $data = $result['data'];
        $queryVariables = $result['variables'];
        $block_posts = "";
        $errors = "";
        $pageInfo = "";

        if (!empty($data["data"]['posts']['nodes'] ?? "")) {
            $block_posts = $data["data"]['posts']['nodes'];
            if ($attributes['showLoadMore'] === true) {
                $pageInfo = $data['data']['posts']['pageInfo'] ?? "";
            }
        }

        if (!empty($data['errors'] ?? "")) {
            $errors = $data['errors'];
            $block_posts = "";
        }

        // return object with json data
        $testOutputWithJsonData = [
            "queryVariables" => $queryVariables,
            "block_posts" => $block_posts,
            "errors" => $errors,
            "pageInfo" => $pageInfo,
        ];


        // test admin editor
        // return "<pre>" . wp_json_encode($data) . "</pre>";

        return "<pre>" . wp_json_encode($testOutputWithJsonData) . "</pre>";
    }
endif;



// =============================================render_callback_block_terms================================= 
if (!function_exists("ncmazfc__render_callback_block_terms")) :
    function ncmazfc__render_callback_block_terms($attributes)
    {
        $data = [];
        $data = ncmazfc__graphql_query_terms_from_terms_block($attributes);

        $block_terms = "";
        $errors = "";

        if (!empty($data["data"]['terms']['nodes'] ?? "")) {
            $block_terms = $data["data"]['terms']['nodes'];
        }

        if (!empty($data['errors'] ?? "")) {
            $errors = $data['errors'];
            $block_terms = "";
        }

        // return object with json data
        $testOutputWithJsonData = [
            "block_terms" => $block_terms,
            "errors" => $errors,
        ];

        // test admin editor
        // return "<pre>" . wp_json_encode($block_terms) . "</pre>";

        return wp_json_encode($testOutputWithJsonData);
    }
endif;
