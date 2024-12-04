<?php


// ****  -----------------
//  update some ACF custom fields -----------------

// update View Count
if (!function_exists("ncmazFc__increment_view_count_by_id")) :
    /**
     * Hàm tăng số lượng bài viết được xem.
     * @param int $post_id ID của bài viết.
     * @return int
     */
    function ncmazFc__increment_view_count_by_id($post_id)
    {
        // Kiểm tra xem post_id có hợp lệ không
        if (!$post_id || !is_numeric($post_id)) {
            return 0;
        }

        if (!function_exists('get_field')) {
            return 0;
        }

        // Lấy post_type của bài viết dựa vào post_id
        $post_type = get_post_type($post_id);

        if ($post_type !== 'post') {
            return 0;
        }
        $currentCount = get_field('views_count', $post_id);
        update_field('views_count', intval($currentCount) + 1, $post_id);

        return intval($currentCount) + 1;
    }
endif;

//  ****  -----------------
// update Liked Count
if (!function_exists("ncmazFc__update_likes_count_by_id")) :
    /**
     * Hàm cập nhật số lượng bài viết được like.
     * @param int $post_id ID của bài viết.
     * @param int $number // 1: like, 0: unlike
     * @return int
     */
    function ncmazFc__update_likes_count_by_id($post_id, $number)
    {
        // number is the number of likes
        // number = 1 => like
        // number = 0 => unlike

        // Kiểm tra xem post_id có hợp lệ không
        if (!$post_id || !is_numeric($post_id)) {
            return 0;
        }

        // Lấy post_type của bài viết dựa vào post_id
        $post_type = get_post_type($post_id);
        if ($post_type !== 'post') {
            return 0;
        }

        if (!function_exists('get_field')) {
            return 0;
        }

        $currentCount = get_field('likes_count', $post_id);
        $currentCount = intval($currentCount);

        if ($number == 0 && $currentCount == 0) {
            return 0;
        }
        if ($number == 0 && $currentCount > 0) {
            $number = -1;
        }

        update_field('likes_count', intval($currentCount) + intval($number), $post_id);
        return intval($currentCount) + intval($number);
    }
endif;


//  ****  -----------------
// update Saved Count
if (!function_exists("ncmazFc__update_saveds_count_by_id")) :
    /**
     * Hàm cập nhật số lượng bài viết được lưu.
     * @param int $post_id ID của bài viết.
     * @param int $number // 1: save, 0: unsave
     * @return int
     */

    function ncmazFc__update_saveds_count_by_id($post_id, $number)
    {
        // number is the number of likes
        // number = 1 => save
        // number = 0 => unsave

        // Kiểm tra xem post_id có hợp lệ không
        if (!$post_id || !is_numeric($post_id)) {
            return 0;
        }

        // Lấy post_type của bài viết dựa vào post_id
        $post_type = get_post_type($post_id);
        if ($post_type !== 'post') {
            return 0;
        }

        if (!function_exists('get_field')) {
            return 0;
        }

        $currentCount = get_field('saveds_count', $post_id);
        $currentCount = intval($currentCount);

        if ($number == 0 && $currentCount == 0) {
            return 0;
        }

        if ($number == 0 && $currentCount > 0) {
            $number = -1;
        }

        update_field('saveds_count', intval($currentCount) + intval($number), $post_id);

        return intval($currentCount) + intval($number);
    }
endif;
