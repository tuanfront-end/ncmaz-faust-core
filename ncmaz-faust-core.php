<?php

/**
 * Plugin Name:       Ncmaz Faust Core
 * Description:       Core for Ncmaz headless!
 * Requires at least: 5.8
 * Requires PHP:      7.3
 * Version:           0.0.1
 * Author:            ChisNghiax
 * Author URI:        https://ChisNghiax.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmazfc
 *
 * @package           create-block
 */

defined('ABSPATH') || exit;

// Define Constants.
define('NCMAZFC_VERSION', '0.0.1');
define('NCMAZFC_FILE', __FILE__);
define('NCMAZFC_PLUGIN_BASE', plugin_basename(NCMAZFC_FILE));
define('NCMAZFC_PATH', plugin_dir_path(NCMAZFC_FILE));
define('NCMAZFC_URI', plugins_url('/', NCMAZFC_FILE));
define('NCMAZFC_BUILD_PATH', __DIR__ . '/build');
// 
define('_NCMAZ_FRONTEND_VERSION', '4.4.2');
define('_NCMAZ_FRONTEND_DIR_URL', plugin_dir_url(__FILE__));
define('_NCMAZ_FRONTEND_DIR_PATH', plugin_dir_path(__FILE__));
define('_NCMAZ_FRONTEND_PREFIX', 'ncmaz_frontend_prefix_');
define('_NCMAZ_FRONTEND_TEXT_DOMAIN', 'ncmaz-frontend');

// below is of ncmaz frontend plugin -----------------

// maybe this will be slow down the wpgraphql query.
// require plugin_dir_path(__FILE__) . 'includes/ncmaz-fe-total-counts-for-wp-graphql.php';

require plugin_dir_path(__FILE__) . 'includes/ncmaz-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'includes/ncmaz-enqueue-scripts.php';
require plugin_dir_path(__FILE__) . 'includes/ncmaz-update-views-count.php';
require plugin_dir_path(__FILE__) . 'includes/ncmaz-register-widgets.php';
require plugin_dir_path(__FILE__) . 'includes/ncmaz-AFC-fields.php';
add_action('plugins_loaded',  function () {
    require plugin_dir_path(__FILE__) . 'includes/ncmaz-redux-sample-config.php';
    require plugin_dir_path(__FILE__) . 'includes/ncmaz-custom-wpgraphql.php';
});
require plugin_dir_path(__FILE__) . 'includes/ncmaz-custom-hooks.php';

// below is of ncmaz faust core plugin -----------------
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-custom-funcs.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-enqueue-scripts.php';
require plugin_dir_path(__FILE__) . 'includes/ncmazfc-register-blocks.php';
// end
