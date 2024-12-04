<?php

/**
 * Plugin Name:       Ncmaz Faust Core
 * Description:       Core for Ncmaz headless!
 * Requires at least: 5.8
 * Requires PHP:      7.3
 * Version:           2.8.1
 * Author:            BooliiTheme
 * Author URI:        https://booliitheme.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmazfc
 *
 * @package           create-block
 */

defined('ABSPATH') || exit;

define('NCMAZFC_VERSION', '2.8.1');
define('NCMAZFC_FILE', __FILE__);
define('NCMAZFC_PLUGIN_BASE', plugin_basename(NCMAZFC_FILE));
define('NCMAZFC_PATH', plugin_dir_path(NCMAZFC_FILE));
define('NCMAZFC_URI', plugins_url('/', NCMAZFC_FILE));
define('NCMAZFC_BUILD_PATH', __DIR__ . '/build');

// *** IMPORTANT CHECKS REQUIRED PLUGINS ******************
require plugin_dir_path(__FILE__) . 'includes/ncmazfc_required_plugins.php';

// ****  --------------------------------------------------------------------
add_theme_support('post-formats',  ['gallery', 'video', 'audio']);

require plugin_dir_path(__FILE__) . 'includes/ncmazfc-enqueue-scripts.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-hooks.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'includes/gutenberg/index.php';
// __graphql 
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-fragments.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-AFC-fields.php';

add_action('plugins_loaded',  function () {
    if (
        class_exists('WPGraphQL') && class_exists('ACF') && defined('FAUSTWP_FILE') && defined('WPGRAPHQL_FOR_ACF_VERSION') && defined('WPGRAPHQL_SMART_CACHE_VERSION') && (defined('WPGRAPHQL_CONTENT_BLOCKS_DIR') || defined('WPGRAPHQL_CONTENT_BLOCKS_VERSION')) && defined('MAILPOET_VERSION')
    ) {
        require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-mutation.php';
        require plugin_dir_path(__FILE__) . 'includes/ncmazfc-wpgraphql-custom-where.php';
        require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-wpgraphql.php';
        require plugin_dir_path(__FILE__) . 'includes/ncmazfc-update-post-custom-fields.php';
        require plugin_dir_path(__FILE__) . 'includes/ncmazfc-ocid.php';
    } else {
        // hien thi thong bao va deactive this plugin
        add_action('admin_notices', function () {
            $class = 'notice notice-error';
            $message1 = __('the Ncmaz Faust Core cannot load!!', 'ncmazfc');
            $message2 = __('WPGraphQL, ACF, FaustWP, WPGraphQL for Advanced Custom Fields, WPGraphQL Smart Cache, WPGraphQL Content Blocks, MailPoet must be active for plugin "Ncmaz Faust Core" to work.', 'ncmazfc');

            printf('<div class="%1$s"><h3>%2$s</h3><p>%3$s</p></div>', esc_attr($class), esc_html($message1), esc_html($message2));
        });
        return;
    }
    // 
}, 999);
// end-----------------
