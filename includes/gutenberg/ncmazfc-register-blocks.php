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
                "render_callback" => "ncmazfc__render_callback_block_magazine",
                "attributes" => [
                    "uniqueId" => [
                        "type" => "string",
                        "default" => "",
                    ],
                    // can follow theo attribute.ts file của block-magazine
                    "queries" => [
                        "type" => "object",
                        "default" => [
                            "pages" => 0,
                            "perPage" => null,
                            "offset" => 0,
                            "postType" => "post",
                            "order" => "DESC",
                            "orderBy" => "DATE",
                            "author" => "",
                            "search" => "",
                            "exclude" => [],
                            "sticky" => "",
                            "inherit" => true,
                            "taxQuery" => null,
                            "parents" => [],
                        ],
                    ],
                    "blockVariation" => [
                        "type" => "string",
                        "default" => "magazine-1",
                    ],
                    "showFilterTab" => [
                        "type" => "boolean",
                        "default" => true,
                    ],
                    "viewMoreHref" => [
                        "type" => "string",
                        "default" => "#",
                    ],
                ]
            ]
        );
        register_block_type(
            NCMAZFC_BUILD_PATH . '/block-terms',
            [
                "render_callback" => "ncmazfc__render_callback_block_terms",
                "attributes" => [
                    "uniqueId" => [
                        "type" => "string",
                    ],
                    // can follow theo attribute.ts file của block-terms
                    "order" => [
                        "type" => "string",
                        "default" => "DESC",
                    ],
                    "orderBy" => [
                        "type" => "string",
                        "default" => "NAME",
                    ],
                    "blockVariation" => [
                        "type" => "string",
                        "default" => "grid-1",
                    ],
                    "numberOfTags" => [
                        "type" => "number",
                        "default" => 30,
                    ],
                    "showTagCounts" => [
                        "type" => "boolean",
                        "default" => true,
                    ],
                    "taxonomy" => [
                        "type" => "string",
                        "default" => "CATEGORY",
                    ],
                ]
            ]
        );
    }

endif;
