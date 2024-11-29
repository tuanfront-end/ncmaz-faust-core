<?php

add_action('init', 'ncmazfc__register_blocks_gutenberg_init');
if (!function_exists("ncmazfc__register_blocks_gutenberg_init")) :
    // START REGISTER GUTENBERG BLOCKS
    //========================================================================================  
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
                    "hasBackground" => [
                        "type" => "boolean",
                        "default" => false,
                    ],
                    // can follow theo attribute.ts file của block-magazine
                    "queries" => [
                        "type" => "object",
                        "default" => [
                            "pages" => 0,
                            "perPage" => 10,
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
                    "showLoadMore" => [
                        "type" => "boolean",
                        "default" => false,
                    ],
                    "showViewAll" => [
                        "type" => "boolean",
                        "default" => false,
                    ],
                    "align" => [
                        "type"      => "string",
                        "default"   => "wide",
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
                        "default" => 10,
                    ],
                    "showTagCounts" => [
                        "type" => "boolean",
                        "default" => true,
                    ],
                    "taxonomy" => [
                        "type" => "string",
                        "default" => "CATEGORY",
                    ],
                    "hasBackground" => [
                        "type" => "boolean",
                        "default" => false,
                    ],
                    "align" => [
                        "type"      => "string",
                        "default"   => "wide",
                    ],
                ]
            ]
        );

        register_block_type(
            NCMAZFC_BUILD_PATH . '/block-heading',
            []
        );

        register_block_type(
            NCMAZFC_BUILD_PATH . '/block-cta',
            []
        );

        register_block_type(
            NCMAZFC_BUILD_PATH . '/block-group',
            [
                "attributes" => [
                    "variation" => [
                        "type" => "string",
                        "default" => "style1",
                    ],
                    "hasBackground" => [
                        "type" => "boolean",
                        "default" => false,
                    ],
                    "align" => [
                        "type"      => "string",
                        "default"   => "wide",
                    ],
                    "style" => [
                        "type" => "object",
                        "default" => (object)[
                            "spacing" => [
                                "padding" => [
                                    "bottom" => "4rem",
                                    "top" => "4rem",
                                ],
                                "margin" => [
                                    "bottom" => "5.25rem",
                                    "top" => "5.25rem",
                                ],
                            ],
                        ],
                    ],
                ]
            ]
        );
    }

endif;
