<?php


// ****  -----------------
//  update some ACF custom fields -----------------

// update View Count
if (!function_exists("ncmazFc__increment_view_count_by_id")) :
    function ncmazFc__increment_view_count_by_id($post_id)
    {
        // Kiểm tra xem post_id có hợp lệ không
        if (!$post_id || !is_numeric($post_id)) {
            return false;
        }

        // Lấy post_type của bài viết dựa vào post_id
        $post_type = get_post_type($post_id);

        if ($post_type !== 'post') {
            return false;
        }
        $currentCount = get_field('views_count', $post_id);
        update_field('views_count', intval($currentCount) + 1, $post_id);
    }
endif;

//  ****  -----------------
// update Liked Count
if (!function_exists("ncmazFc__update_likes_count_by_id")) :
    function ncmazFc__update_likes_count_by_id($post_id, $number)
    {
        // number is the number of likes
        // number = 1 => like
        // number = -1 => unlike

        // Kiểm tra xem post_id có hợp lệ không
        if (!$post_id || !is_numeric($post_id)) {
            return false;
        }

        // Lấy post_type của bài viết dựa vào post_id
        $post_type = get_post_type($post_id);
        if ($post_type !== 'post') {
            return false;
        }

        $currentCount = get_field('likes_count', $post_id);
        update_field('likes_count', intval($currentCount) + intval($number), $post_id);
    }
endif;


//  ****  -----------------
// update Saved Count
if (!function_exists("ncmazFc__update_saveds_count_by_id")) :
    function ncmazFc__update_saveds_count_by_id($post_id, $number)
    {
        // number is the number of likes
        // number = 1 => save
        // number = -1 => unsave

        // Kiểm tra xem post_id có hợp lệ không
        if (!$post_id || !is_numeric($post_id)) {
            return false;
        }

        // Lấy post_type của bài viết dựa vào post_id
        $post_type = get_post_type($post_id);
        if ($post_type !== 'post') {
            return false;
        }

        $currentCount = get_field('saveds_count', $post_id);
        update_field('saveds_count', intval($currentCount) + intval($number), $post_id);
    }
endif;
