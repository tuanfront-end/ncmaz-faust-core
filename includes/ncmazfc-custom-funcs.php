<?php
if (!function_exists("my_var_dump")) :
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
endif;

if (!function_exists("my_var_export")) :
    function my_var_export($value)
    {
        echo '<pre style="color:red;"><code>';
        echo ('-----------start--vcb_var_export-----------------');
        echo ('<br />');
        var_export($value);
        echo ('<br />');
        echo '</code></pre>';
    };
endif;
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
        return intval($reading_time_minutes);
    }
endif;


// function add image to library from a image url
// https://developer.wordpress.org/reference/functions/media_sideload_image/
if (!function_exists("ncmazfc__addImageToMediaLibraryByURL")) :
    function ncmazfc__addImageToMediaLibraryByURL($imageUrl = "", $alt = "")
    {
        // check imageIur is our domain, if true return success true
        $siteUrl = get_site_url();
        if (strpos($imageUrl, $siteUrl) !== false) {
            // Sử dụng hàm attachment_url_to_postid để lấy ID
            $attachment_id = attachment_url_to_postid($imageUrl);
            if ($attachment_id) {
                return [
                    "success" => true,
                    "imageID" => $attachment_id
                ];
            }
        }


        if (!function_exists('wp_handle_sideload') || !function_exists('media_sideload_image')) {
            require_once(ABSPATH . 'wp-admin/includes/media.php');
            require_once(ABSPATH . 'wp-admin/includes/file.php');
            require_once(ABSPATH . 'wp-admin/includes/image.php');
        }

        $imageID = media_sideload_image($imageUrl, 0, $alt ?? "", 'id');

        if (!is_wp_error($imageID)) {
            // Add alt text
            if (!empty($alt)) {
                $attachment = get_post($imageID);
                update_post_meta($attachment->ID, '_wp_attachment_image_alt', $alt);
            }
            return [
                "success" => true,
                "imageID" => $imageID,
            ];
        }

        return [
            "success" => false,
            "imageID" => null,
            "error" => "Error when upload image " . $imageID->get_error_message(),
        ];
    }
endif;

if (!function_exists('ncmazfc__convert_string_to_array')):
    function ncmazfc__convert_string_to_array(string $value)
    {
        if (! $value || !is_string($value)) {
            $value = array();
        } else {
            $value = explode(',', $value);
        }

        if (!is_array($value)) {
            $value = array();
        }
        return $value;
    }
endif;


if (!function_exists('ncmazfc__add_user_post_interact')):
    /**
     * Hàm thêm thêm phản ứng của người dùng với bài viết.
     *
     * @param int $user_id ID của người dùng.
     * @param int  $post_id ID của bài viết.
     * @param string $interact Loại phản ứng (like, save, view).
     * @return array('is_meta_changed' => bool)
     */
    function ncmazfc__add_user_post_interact($user_id, $post_id, $interact)
    {
        $is_meta_changed = false;

        if (!$user_id || !$post_id || !$interact) {
            return array('is_meta_changed' => $is_meta_changed);
        }
        if (!in_array($interact, ['like', 'save', 'view'])) {
            return array('is_meta_changed' => $is_meta_changed);
        }

        $meta_key = '';
        if ($interact == 'like') {
            $meta_key = 'liked_posts';
        } else if ($interact == 'save') {
            $meta_key = 'saved_posts';
        } else if ($interact == 'view') {
            $meta_key = 'viewed_posts';
        }

        $r_posts = get_user_meta($user_id, $meta_key, true); // "1,22,11,223"
        $r_posts =  ncmazfc__convert_string_to_array($r_posts); // [1,22,11,223]

        if (!in_array($post_id, $r_posts)) {
            $r_posts[] = $post_id;
            $r_posts = implode(',', $r_posts); // "1,22,11,223"
            update_user_meta($user_id, $meta_key, $r_posts);
            $is_meta_changed = true;
        }

        return array('is_meta_changed' => $is_meta_changed);
    }
endif;



if (!function_exists('ncmazfc__remove_user_post_interact')):
    /**
     * Hàm thêm remove phản ứng của người dùng với bài viết.
     *
     * @param int $user_id ID của người dùng.
     * @param int  $post_id ID của bài viết.
     * @param string $interact Loại phản ứng (like, save, view).
     * @return array('is_meta_changed' => bool)
     */
    function ncmazfc__remove_user_post_interact($user_id, $post_id, $interact)
    {
        $is_meta_changed = false;

        if (!$user_id || !$post_id || !$interact) {
            return array('is_meta_changed' => $is_meta_changed);
        }

        if (!in_array($interact, ['like', 'save', 'view'])) {
            return array('is_meta_changed' => $is_meta_changed);
        }

        $meta_key = '';
        if ($interact == 'like') {
            $meta_key = 'liked_posts';
        } else if ($interact == 'save') {
            $meta_key = 'saved_posts';
        } else if ($interact == 'view') {
            $meta_key = 'viewed_posts';
        }

        $r_posts = get_user_meta($user_id, $meta_key, true); // "1,22,11,223"
        $r_posts =  ncmazfc__convert_string_to_array($r_posts); // [1,22,11,223]

        $key = array_search($post_id, $r_posts);
        if ($key !== false) {
            unset($r_posts[$key]);
            $r_posts = implode(',', $r_posts); // "1,22,11,223"
            update_user_meta($user_id, $meta_key, $r_posts);
            $is_meta_changed = true;
        }

        return array('is_meta_changed' => $is_meta_changed);
    }
endif;

// Kiểm tra like
if (!function_exists('ncmazfc__has_user_liked_post')):
    function ncmazfc__has_user_liked_post($user_id, $post_id)
    {
        $liked_posts = get_user_meta($user_id, 'liked_posts', true);
        $liked_posts =  ncmazfc__convert_string_to_array($liked_posts);
        return in_array($post_id, $liked_posts);
    }
endif;

// Kiểm tra save
if (!function_exists('ncmazfc__has_user_saved_post')):
    function ncmazfc__has_user_saved_post($user_id, $post_id)
    {
        $saved_posts = get_user_meta($user_id, 'saved_posts', true);
        $saved_posts =  ncmazfc__convert_string_to_array($saved_posts);
        return in_array($post_id, $saved_posts);
    }
endif;

// Kiểm tra view 
if (!function_exists('ncmazfc__has_user_viewed_post')):
    function ncmazfc__has_user_viewed_post($user_id, $post_id)
    {
        $viewed_posts = get_user_meta($user_id, 'viewed_posts', true);
        $viewed_posts =  ncmazfc__convert_string_to_array($viewed_posts);
        return in_array($post_id, $viewed_posts);
    }
endif;
