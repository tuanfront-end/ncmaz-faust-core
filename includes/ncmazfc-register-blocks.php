<?php

add_action('init', 'ncmazfc__register_blocks_gutenberg_init');
if (!function_exists("ncmazfc__register_blocks_gutenberg_init")) :
    // START REGISTER GUTENBERG BLOCKS
    //======================================================================================================================================
    function ncmazfc__register_blocks_gutenberg_init()
    {

        register_block_type(
            NCMAZFC_BUILD_PATH . '/block-magazine',
            []
        );
        register_block_type(
            NCMAZFC_BUILD_PATH . '/block-terms',
            []
        );
    }

endif;
