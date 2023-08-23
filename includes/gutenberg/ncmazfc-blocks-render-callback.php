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

        // test admin editor
        // return "<pre>" . wp_json_encode($data) . "</pre>";

        ob_start();
?>
        <div hidden class="ncmazfc-block-content-common-class ncmazfc-block-magazine__content hidden" data-ncmazfc-unique-id="<?php echo esc_attr(wp_json_encode($attributes["uniqueId"])); ?>" data-ncmazfc-init-posts="<?php !empty($block_posts) ? esc_attr_e(wp_json_encode($block_posts)) : null ?>" data-ncmazfc-init-errors="<?php !empty($errors) ? esc_attr_e(wp_json_encode($errors)) : null ?>" data-ncmazfc-init-query-variables="<?php echo esc_attr(wp_json_encode($queryVariables)); ?>" data-ncmazfc-init-data-page-info="<?php echo esc_attr(wp_json_encode($pageInfo)); ?>">
        </div>
    <?php
        $output = ob_get_contents(); // collect output
        ob_end_clean(); // Turn off ouput buffer
        return $output; // Print output
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

        // test admin editor
        // return "<pre>" . wp_json_encode($block_terms) . "</pre>";

        ob_start();
    ?>
        <div hidden class="ncmazfc-block-content-common-class ncmazfc-block-terms__content hidden" data-ncmazfc-unique-id="<?php echo esc_attr(wp_json_encode($attributes["uniqueId"])); ?>" data-ncmazfc-init-terms="<?php !empty($block_terms) ? esc_attr_e(wp_json_encode($block_terms)) : null ?>" data-ncmazfc-init-errors="<?php !empty($errors) ? esc_attr_e(wp_json_encode($errors)) : null ?>">
        </div>
<?php
        $output = ob_get_contents(); // collect output
        ob_end_clean(); // Turn off ouput buffer
        return $output; // Print output
    }
endif;
