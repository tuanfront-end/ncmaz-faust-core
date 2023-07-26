<?php
function my_var_dump($value)
{
    echo '<p style="color:red; padding: 50px 200px">';
    echo ('-----------start--wcb_var_dump-----------------');
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    var_dump($value);
    echo ('<br />');
    echo ('<br />');
    echo ('<br />');
    echo '</p>';
};

function my_var_export($value)
{
    echo '<pre style="color:red;"><code>';
    echo ('-----------start--vcb_var_export-----------------');
    echo ('<br />');
    var_export($value);
    echo ('<br />');
    echo '</code></pre>';
};
//  
// 
if (!function_exists("ncmazfc__is_enabled")) :
    function ncmazfc__is_enabled($variable)
    {
        if (!isset($variable)) return null;
        return filter_var($variable, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
    }
endif;



// Hàm ảo để tính toán thời gian đọc bài viết. Bạn cần thay thế hàm này bằng mã tính toán thực tế của bạn.
if (!function_exists('ncmazFc__calculate_reading_time_by_content')) :
    function ncmazFc__calculate_reading_time_by_content(string $post_content)
    {
        if (empty($post_content)) {
            return 1;
        }

        $words_per_minute = 190; // Số từ trung bình đọc trong một phút.
        $content = strip_shortcodes($post_content); // Loại bỏ shortcode trong nội dung bài viết.
        $content = strip_tags($content); // Loại bỏ các thẻ HTML trong nội dung bài viết.
        $word_count = str_word_count($content); // Đếm số từ trong nội dung bài viết.

        $reading_time_minutes = ceil($word_count / $words_per_minute); // Tính toán thời gian đọc (làm tròn lên).

        // minutes
        return $reading_time_minutes;
    }
endif;




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
