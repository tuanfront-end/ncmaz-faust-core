<?php
// JAVASCRIPT FRONTEND OBJECT VARIABLES

// add_action('wp_enqueue_scripts', 'ncmazFe_enqueueScriptCustomize');
// if (!function_exists('ncmazFe_enqueueScriptCustomize')) :
//     function ncmazFe_enqueueScriptCustomize()
//     {
//         global $wp_locale;
//         global $ncmaz_redux_demo;

//         if (empty($ncmaz_redux_demo)) {
//             return false;
//         }

//         $currentUser = ncmazFe_getCurrentUserGraphql();
//         $allSettings = ncmazFe_getAllSettingsGraphql();

//         // ENQUEUE customizer.js file
//         wp_enqueue_script('ncmazFe-mainJs-preload', _NCMAZ_FRONTEND_DIR_URL . 'dist/js/customizer.js', array(), _NCMAZ_FRONTEND_VERSION, false);
//         wp_enqueue_script('ncmazFe-mainJs', _NCMAZ_FRONTEND_DIR_URL . 'dist/js/customizer.js', array(), _NCMAZ_FRONTEND_VERSION, true);

//         // =============
//         $monthNames = array_map(array(&$wp_locale, 'get_month'), range(1, 12));
//         $monthNamesShort = array_map(array(&$wp_locale, 'get_month_abbrev'), $monthNames);
//         $dayNames = array_map(array(&$wp_locale, 'get_weekday'), range(0, 6));
//         $dayNamesShort = array_map(array(&$wp_locale, 'get_weekday_abbrev'), $dayNames);

//         wp_add_inline_script('ncmazFe-mainJs', 'window.DATE_I18N = ' . json_encode(
//             [
//                 "month_names"       => $monthNames,
//                 "month_names_short" => $monthNamesShort,
//                 "day_names"         => $dayNames,
//                 "day_names_short"   => $dayNamesShort
//             ]
//         ), 'before');

//         // get SLUGS
//         $variablePagePostSubmissionEditorUrl =  get_permalink($ncmaz_redux_demo['adv-global-variable--pagePostSubmissionEditorUrl']);
//         $variablePageNcmazAccountUrl =  get_permalink($ncmaz_redux_demo['adv-global-variable--pageNcmazAccountUrl']);
//         $IS_ENABLE_POLYLANG_SWITCH = boolval($ncmaz_redux_demo['nc-general-settings--general-switch-polylang']);
//         $FRONTEND_TRANSLATE_LANG_NAMES = $ncmaz_redux_demo['nc-general-Frontend-translate__lang_names'];
//         wp_add_inline_script('ncmazFe-mainJs', 'window.frontendObject = ' . json_encode(
//             [
//                 'ajaxurl'                       => admin_url('admin-ajax.php'),
//                 'stylesheetDirectory'           => get_template_directory_uri(),
//                 'restUrl'                       => get_rest_url(),
//                 'dateFormat'                    => get_option('date_format'),
//                 'placeholderImg'                => get_template_directory_uri() . '/placeholder-small.png',
//                 'graphQLBasePath'               => get_site_url(null, '/graphql'),
//                 'socialsShare'                  => $ncmaz_redux_demo['nc-general-settings--multi-socials-share'],
//                 'homeURL'                       => get_site_url(),
//                 'currentUser'                   => empty($currentUser['data']['viewer']) ?  null : $currentUser['data']['viewer'],
//                 'allSettings'                   => empty($allSettings['data']['allSettings']) ?  null : $allSettings['data']['allSettings'],
//                 'currentObject'                 => ['id'    => get_queried_object_id()],
//                 'pll_current_language'          => function_exists('pll_current_language') ? strtoupper(pll_current_language()) : null,
//                 'pll_current_language_correct_code' => function_exists('pll_current_language') ? pll_current_language() : null,
//                 'pll_themeoption_actived'       => (function_exists('pll_current_language') && $IS_ENABLE_POLYLANG_SWITCH) ? true : null,
//                 'musicPlayerMode'               => true,
//                 'musicPlayerMediaSource'        => $ncmaz_redux_demo['nc-general-settings--music-player-media-source'],
//                 'switchPreviewVideo'            => boolval($ncmaz_redux_demo['nc-general-settings--general-switch-preview-video-card']),
//                 'isPlaceholderPostNotFeatured'    => boolval($ncmaz_redux_demo['post-card--placeholder-for-post-has-not-featured']),
//                 'restVarsEndpoint'              => esc_url_raw(rest_url('/wp/v2/media/')),
//                 'restVarsNonce'                 => wp_create_nonce('wp_rest'),
//                 'pagePostSubmissionEditorUrl'   => empty($variablePagePostSubmissionEditorUrl) ? "" : $variablePagePostSubmissionEditorUrl,
//                 'pageNcmazAccountUrl'           => empty($variablePageNcmazAccountUrl) ? "" : $variablePageNcmazAccountUrl,
//                 'wpLogoutUrl'                   => wp_logout_url(get_site_url()),
//                 // 
//                 'maxTagsLengSubmit'             => empty(intval($ncmaz_redux_demo['adv-global-variable--max-tags-submit'])) ? 5 : intval($ncmaz_redux_demo['adv-global-variable--max-tags-submit']),
//                 'maxCategoriesLengSubmit'       => empty(intval($ncmaz_redux_demo['adv-global-variable--max-categories-submit'])) ? 5 : intval($ncmaz_redux_demo['adv-global-variable--max-categories-submit']),
//                 'authorPageCoverImgDefault'     => empty($ncmaz_redux_demo['nc-archive-page-settings--authorPageCoverImgDefault']) ? "" : $ncmaz_redux_demo['nc-archive-page-settings--authorPageCoverImgDefault']['url'],
//                 'archivePageCoverImgDefault'    => empty($ncmaz_redux_demo['nc-archive-page-settings--archivePageCoverImgDefault']) ? "" : $ncmaz_redux_demo['nc-archive-page-settings--archivePageCoverImgDefault']['url'],
//                 'searchPageCoverImgDefault'     => empty($ncmaz_redux_demo['nc-search-page-settings--media-background']) ? "" : $ncmaz_redux_demo['nc-search-page-settings--media-background']['url'],
//                 // === Locales JS files
//                 "frontendTranslations"          => [
//                     [
//                         'name'      => 'localesJsFile__default',
//                         'language'  => 'default',
//                         'jsCode'    => $ncmaz_redux_demo['nc-general-Frontend-translate__lang--default']
//                     ],
//                     [
//                         'name'      => 'localesJsFile__one',
//                         'language'  => $FRONTEND_TRANSLATE_LANG_NAMES['language_1'],
//                         'jsCode'    => ($IS_ENABLE_POLYLANG_SWITCH && boolval($FRONTEND_TRANSLATE_LANG_NAMES['language_1'])) ? $ncmaz_redux_demo['nc-general-Frontend-translate__lang--one'] : null,
//                     ],
//                     [
//                         'name'      => 'localesJsFile__two',
//                         'language'  => $FRONTEND_TRANSLATE_LANG_NAMES['language_2'],
//                         'jsCode'    => ($IS_ENABLE_POLYLANG_SWITCH && boolval($FRONTEND_TRANSLATE_LANG_NAMES['language_2'])) ? $ncmaz_redux_demo['nc-general-Frontend-translate__lang--two'] : null,
//                     ],
//                     [
//                         'name'      => 'localesJsFile__three',
//                         'language'  => $FRONTEND_TRANSLATE_LANG_NAMES['language_3'],
//                         'jsCode'    => ($IS_ENABLE_POLYLANG_SWITCH && boolval($FRONTEND_TRANSLATE_LANG_NAMES['language_3'])) ? $ncmaz_redux_demo['nc-general-Frontend-translate__lang--three'] : null,
//                     ],
//                     [
//                         'name'      => 'localesJsFile__four',
//                         'language'  => $FRONTEND_TRANSLATE_LANG_NAMES['language_4'],
//                         'jsCode'    => ($IS_ENABLE_POLYLANG_SWITCH && boolval($FRONTEND_TRANSLATE_LANG_NAMES['language_4'])) ? $ncmaz_redux_demo['nc-general-Frontend-translate__lang--four'] : null,
//                     ],
//                 ],
//                 // 
//                 "isActivePluginFavorites"       => boolval(defined("FAVORITES_PLUGIN_FILE")),
//                 "currentPageType"               => ncmazFe_getPageType(),
//                 // 
//                 "archivePostCardType"           => $ncmaz_redux_demo['nc-search-page-settings--post-card-type'] ?? "card11",
//                 "enableScrollToTop"             => boolval($ncmaz_redux_demo['nc-general-settings--general-switch-scroll-to-top'] ?? true),

//             ]
//         ), 'before');

//         wp_add_inline_script('ncmazFe-mainJs', 'window.ncmazFrontendVariables = ' . json_encode(
//             [
//                 'pluginDir'             => _NCMAZ_FRONTEND_DIR_URL,
//                 'pluginDistImagesDir'   => _NCMAZ_FRONTEND_DIR_URL . 'dist/images/',
//             ]
//         ), 'before');
//     }

// endif;
