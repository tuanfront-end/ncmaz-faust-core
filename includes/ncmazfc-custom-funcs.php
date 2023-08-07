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


if (!function_exists('ncmazfc__gqlGetUserReactionPostsByAuthorAndSearch')) :
    function ncmazfc__gqlGetUserReactionPostsByAuthorAndSearch($author, $search, $author_field_type = "id")
    {
        if (empty($author) || empty($search)) {
            return false;
        }

        $variables = [];

        if ($author_field_type == "id") {
            $variables = [
                "author" => $author,
                "search" => $search,
            ];
        } else if ($author_field_type == "slug") {
            $variables = [
                "authorName"    => $author,
                "search"        => $search,
            ];
        } else {
            return false;
        }


        $query = 'query GetUserReactionPostsByAuthorAndSearch($author: Int = 0, $authorName: String = null, $search: String = "") {
            userReactionPosts(where: {author: $author, authorName: $authorName, search: $search, orderby: {field: DATE, order: DESC}}, first: 500) {
                nodes {
                    id
                    title
                }
            }
        }';

        if (!function_exists('graphql')) {
            return false;
        }

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
