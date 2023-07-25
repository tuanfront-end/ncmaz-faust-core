<?php

add_action('init', 'ncmazfc__register_blocks_gutenberg_init');
if (!function_exists("ncmazfc__register_blocks_gutenberg_init")) :
    // START REGISTER GUTENBERG BLOCKS
    //======================================================================================================================================
    function ncmazfc__register_blocks_gutenberg_init()
    {

        register_block_type(
            NCMAZFC_BUILD_PATH . '/block-magazine',
            [
                "attributes" => [
                    "uniqueId" => [
                        "type" => "string",
                    ],
                    "queries" => [
                        "type" => "object",
                    ],
                    "blockVariation" => [
                        "type" => "string",
                    ],
                    "initData" => [
                        "type" => "object",
                    ],
                    "showFilterTab" => [
                        "type" => "boolean",
                    ],
                    "viewMoreHref" => [
                        "type" => "string",
                    ],
                ]
            ]
        );
        register_block_type(
            NCMAZFC_BUILD_PATH . '/block-terms',
            []
        );
    }

endif;
