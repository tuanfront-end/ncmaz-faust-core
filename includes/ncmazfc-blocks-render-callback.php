<?php
// =============================================render_callback_block_magazine=====================================================================


if (!function_exists("ncmazfc__render_callback_block_magazine")) :
    function ncmazfc__render_callback_block_magazine($attributes)
    {
        $data = [];
        $data = ncmazfc__graphql_query_posts_from_post_block($attributes['queries']);

        $block_posts = "null";
        $errors = "null";

        if (!empty($data["data"]['posts']['edges'] ?? "")) {
            $block_posts = $data["data"]['posts']['edges'];
        }

        if (!empty($data['errors'] ?? "")) {
            $errors = $data['errors'];
            $block_posts = "null";
        }
        ob_start();
?>
        <div hidden class="hidden ncmazfc-block-magazine__content" data-ncmazfc-unique-id="<?php echo esc_attr(wp_json_encode($attributes["uniqueId"])); ?>" data-ncmazfc-init-posts="<?php echo esc_attr(wp_json_encode($block_posts)); ?>" data-ncmazfc-init-errors="<?php echo esc_attr(wp_json_encode($errors)); ?>">
            <!-- <pre>
                <code>
                    <?php //echo wp_json_encode($attributes['queries']);
                    ?>
                </code>
            </pre>
            <pre>
                <code>
                    <?php //var_dump($block_posts[0]); 
                    ?>
                </code>
            </pre> -->
        </div>
<?php
        $output = ob_get_contents(); // collect output
        ob_end_clean(); // Turn off ouput buffer
        return $output; // Print output
    }
endif;


// 

if (!function_exists(('ncmazfc__graphql_query_posts_from_post_blockxxxxx'))) :
    function ncmazfc__graphql_query_posts_from_post_blockxxxxx($queries)
    {
        if (!function_exists('graphql')) {
            return null;
        }

        global $NC_POSTS_EDGES_FRAGMENT, $NC_POST_CARD_FRAGMENT, $NC_IMAGE_MEDIA_FRAGMENT, $NC_POST_META_DATA_FRAGMENT, $NC_TERMS_EDGES_FRAGMENT, $NC_TERM_CARD_FRAGMENT;

        $categoryIn = !empty($queries['taxQuery']["category"] ?? []) ? $queries['taxQuery']["category"] : [];
        $tagIn = !empty($queries['taxQuery']["post_tag"] ?? []) ? $queries['taxQuery']["post_tag"] : [];
        $authorIn = !empty($queries['author'] ?? "") ? explode(',', $queries['author']) : [];
        $perPage = !empty($queries['perPage'] ?? '') ? intval($queries['perPage']) : 10;

        // $authorIn =  



        $variables = [
            "authorIn" => $authorIn,
            "categoryIn" => $categoryIn,
            "tagIn" => $tagIn,
            "search" => $queries["search"],
            "field" => $queries["orderBy"],
            "order" => $queries["order"],
            "first" => $perPage,
        ];

        $query2 = ' query postsWithVariablesQuery(
                $authorIn: [ID] = ""
                $categoryIn: [ID] = ""
                $tagIn: [ID] = ""
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

        $query = '{
                posts (
                    where: {
                        authorIn: []
                        categoryIn: []
                        tagIn: []
                        search: ""
                        orderby: { field: AUTHOR, order: ASC }
                    }
                    first: 10
                ) {
                    ...NcmazFcPostsEdegsFields
                }
            } ' . $NC_POSTS_EDGES_FRAGMENT . ' ' . $NC_POST_CARD_FRAGMENT . ' ' . $NC_IMAGE_MEDIA_FRAGMENT . ' ' . $NC_POST_META_DATA_FRAGMENT;




        //  query 
        $results = graphql(
            [
                'query'          => $query2,
                'variables'      => [
                    "author" => 10,
                    "categoryIn" => $categoryIn,
                    "tagIn" => $tagIn,
                ],
            ]
        );

        return  $results;
    }
endif;
