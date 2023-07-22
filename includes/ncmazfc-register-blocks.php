<?php

// require NCMAZFC_PATH . 'includes/wcb-render-callback-for-block-posts-grid.php';


//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================

// commont css for all blocks, do not remove!
register_block_type(
    NCMAZFC_BUILD_PATH . '/__default',
    []
);

register_block_type(
    NCMAZFC_BUILD_PATH . '/block-posts-grid',
    [
        // "render_callback"     => "wcb_block_posts_grid__renderCallback",
        "view_script_handles" => []
    ]
);
