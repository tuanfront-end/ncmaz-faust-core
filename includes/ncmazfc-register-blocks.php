<?php

//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================

add_action('init', 'ncmaz_faust_core__create_blocks_gutenberg_init');
if (!function_exists("ncmaz_faust_core__create_blocks_gutenberg_init")) {
    function ncmaz_faust_core__create_blocks_gutenberg_init()
    {
        register_block_type(
            NCMAZFC_BUILD_PATH . '/__default',
            [
                "view_script_handles" => []
            ]
        );
    }
}
