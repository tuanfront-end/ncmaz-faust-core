<?php
// =====================================GENERAL SETTING ==================================================
$section = array(
    'title'  => esc_html__('General settings', 'ncmaz-frontend'),
    'id'     => 'nc-general-settings',
    'desc'   => esc_html__('All general settings', 'ncmaz-frontend'),
    'icon'   => 'el el-home',
    'fields' => array(),
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('General settings', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting general setting', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--general',
    'subsection' => true,
    'fields'     => array(

        [
            'id'       => 'nc-general-settings--general-default-theme-mode',
            'type'     => 'button_set',
            'title'    => esc_html__('Set theme-mode default', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Select the default mode of the theme', 'ncmaz-frontend'),
            'desc'     => esc_html__('The default mode will apply to first-time visitors or old visitors who have never clicked to the switch between modes.', 'ncmaz-frontend'),
            'options' => array(
                'light' => 'Light mode',
                'dark' => 'Dark mode',
            ),
            'default' => 'light'
        ],
        [
            'id'       => 'nc-general-settings--general-theme-radius',
            'type'     => 'radio',
            'title'    => esc_html__('Select theme radius level', 'ncmaz-frontend'),
            'subtitle' => esc_html__('When choosing the radius level, then the whole theme will use the same value for all elements', 'ncmaz-frontend'),
            'data'  => array(
                'DEFAULT' => 'DEFAULT',
                'no' => 'Radius none (0)',
                'md' => 'Radius medium (0.375rem)',
                'lg' => 'Radius large (0.5rem)',
                'xl' => 'Radius xl (0.75rem)',
                '2xl' => 'Radius 2xl (1rem)',
                '3xl' => 'Radius 3xl (1.5rem)',
            ),
            'default' => 'DEFAULT'
        ],
        [
            'id'       => 'nc-general-settings--general-switch-scroll-to-top',
            'type'     => 'switch',
            'title'    => __('Show scroll to top button', 'ncmaz-frontend'),
            'subtitle' => __('Enable/Disable button Scroll to top', 'ncmaz-frontend'),
            'default'  => true,
        ],
    ),
);
Redux::set_section($opt_name, $section);

// ===========================GENERAL SETTING__SUB2 POST CARD ========================
$section = array(
    'title'      => esc_html__('Post card', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for post card', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--post-card',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--general-switch-preview-video-card',
            'type'     => 'switch',
            'title'    => __('Video preview in post card', 'ncmaz-frontend'),
            'subtitle' => __('If enabled, the video in the post card will play in preview mode when hovering the mouse over the card (or card is in view with mobile divice)', 'ncmaz-frontend'),
            'desc'     => __('Default is on', 'ncmaz-frontend'),
            'default'  => true,
        ],
        [
            'id'       => 'post-card--placeholder-for-post-has-not-featured',
            'type'     => 'switch',
            'title'    => __('Placeholder image post card', 'ncmaz-frontend'),
            'subtitle' => __('If enabled, Display placeholder images for posts without featured images (Only applicable for some main post-card types)', 'ncmaz-frontend'),
            'desc'     => __('Default is on', 'ncmaz-frontend'),
            'default'  => true,
        ],
    ),
);
Redux::set_section($opt_name, $section);


// ===========================GENERAL SETTING__SUB1 --Header ========================
$section = array(
    'title'      => esc_html__('Header', 'ncmaz-frontend'),
    'desc'       => esc_html__('Desc for header settings', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--header',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--header-media-logo',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('Logo image', 'ncmaz-frontend'),
            'desc'     => __('Main logo for theme', 'ncmaz-frontend'),
            'subtitle' => __('Upload any media using the WordPress native uploader', 'ncmaz-frontend'),
            'default'  => array(
                'url' => 'https://s.wordpress.org/style/images/codeispoetry.png'
            ),
        ],
        [
            'id'       => 'nc-general-settings--header-media-logo-darkmode',
            'type'     => 'media',
            'url'      => true,
            'title'    => __('Logo darkmode', 'ncmaz-frontend'),
            'desc'     => __('Logo image will show on darkmode instead for default logo', 'ncmaz-frontend'),
            'subtitle' => __('Upload any media using the WordPress native uploader', 'ncmaz-frontend'),
            'default'  => array(
                'url' => 'https://s.wordpress.org/style/images/codeispoetry.png'
            ),
        ],
        [
            'id'       => 'nc-general-settings--header-switch-enableDarkmode',
            'type'     => 'switch',
            'title'    => __('Show/Hide darkmode switch', 'ncmaz-frontend'),
            'subtitle' => __('Disable will hide button switch darkmode on header', 'ncmaz-frontend'),
            'default'  => true,
        ],
    ),
);
Redux::set_section($opt_name, $section);

// =========================== Mobile Menu SETTING__SUB2 ========================
$section = array(
    'title'      => esc_html__('Mobile Menu', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for mobile menu nav side', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--mobile-menu',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--mobile-menu-btn-foot-text',
            'type'     => 'text',
            'title'    => esc_html__('Button footer', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter text for button on footer', 'ncmaz-frontend'),
            'default'  => 'Get this theme',
        ],
        [
            'id'       => 'nc-general-settings--mobile-menu-btn-foot-href',
            'type'     => 'text',
            'title'    => esc_html__('Button footer href', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter href for button on footer', 'ncmaz-frontend'),
            'default'  => '#',
        ],

    ),
);
Redux::set_section($opt_name, $section);


// ===========================SOCIALS Login SETTING__SUB2 SOCIALS ========================
$section = array(
    'title'      => esc_html__('Social Login', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for socials login setting', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--nextend-social-login',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--nextend-social-login-facebook',
            'type'     => 'text',
            'title'    => esc_html__('Facebook Login Url', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter facebook login url on usage nextend settings', 'ncmaz-frontend'),
            'default'  => '#',
        ],
        [
            'id'       => 'nc-general-settings--nextend-social-login-google',
            'type'     => 'text',
            'title'    => esc_html__('Google Login Url', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter Google login url on usage nextend settings', 'ncmaz-frontend'),
            'default'  => '#',
        ],
        [
            'id'       => 'nc-general-settings--nextend-social-login-twitter',
            'type'     => 'text',
            'title'    => esc_html__('Twitter Login Url', 'ncmaz-frontend'),
            'subtitle'    => esc_html__('Enter twitter login url on usage nextend settings', 'ncmaz-frontend'),
            'default'  => '#',
        ],


    ),
);
Redux::set_section($opt_name, $section);

// ===========================SOCIALS SHARE SETTING__SUB ========================
$section = array(
    'title'      => esc_html__('Social share', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for socials share setting', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--social-share',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--multi-socials-share',
            'type'     => 'select',
            'multi'    => true,
            'title'    => __('Multi Select Socials ', 'ncmaz-frontend'),
            'subtitle' => __('Select multi Socials you want enable for share on theme', 'ncmaz-frontend'),
            'options'  => [
                'Facebook'              => 'Facebook',
                // 'Facebook-Messenger'    => 'Facebook Messenger',
                'Twitter'               => 'Twitter',
                'Telegram'              => 'Telegram',
                'Whatsapp'              => 'Whatsapp',
                'LinkedIn'              => 'LinkedIn',
                'Pinterest'              => 'Pinterest',
                'VK'              => 'VK',
                'Odnoklassniki'              => 'Odnoklassniki',
                'Reddit'              => 'Reddit',
                'Reddit'              => 'Reddit',
                'MailRu'              => 'Mail.Ru',
                'LiveJournal'              => 'LiveJournal',
                'Viber'              => 'Viber',
                'Workplace'              => 'Workplace',
                'Line'              => 'Line',
                'Weibo'              => 'Weibo',
                'Pocket'              => 'Pocket',
                'Instapaper'              => 'Instapaper',
                'Hatena'              => 'Hatena',
                'email'              => 'email',
            ],
            'default'  => array('Facebook', 'Twitter', 'Telegram', 'Whatsapp')
        ],
    ),
);
Redux::set_section($opt_name, $section);


// =========================== MUSIC PLAYER SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Music Player', 'ncmaz-frontend'),
    'desc'       => esc_html__('All setting for Music Player', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--music-player',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general-settings--music-player-opt-switch',
            'type'     => 'switch',
            'title'    => esc_html__('Switch On', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Music player on/off', 'ncmaz-frontend'),
            'desc'      => __('Choose off if your site doesn\'t want to use the music player', 'ncmaz-frontend'),
            'default'  => true,
            'disabled'  => true,
        ],
        [
            'id'       => 'nc-general-settings--music-player-media-source',
            'type'     => 'select',
            'multi'    => true,
            'title'    => __('Select Media source', 'ncmaz-frontend'),
            'subtitle' => __('Select the source for your tracks', 'ncmaz-frontend'),
            'desc'      => __('Choose your source correctly. Currently the player best supports sources from Youtube and from mp3/mp4 files.', 'ncmaz-frontend'),
            'options'  => [
                'html5'     => 'Mp3/Mp4',
                'youtube'   => 'Youtube',
                'other'     => 'Other (Beta)',
            ],
            'default'  => ['html5', 'youtube']
        ],

    ),
);
Redux::set_section($opt_name, $section);


// =========================== THEME FONTS SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Theme Fonts', 'ncmaz-frontend'),
    'desc'       => esc_html__('Customize Fonts for theme', 'ncmaz-frontend'),
    'id'         => 'nc-general--theme-fonts',
    'subsection' => true,
    'fields'     => array(
        // FONTS
        [
            'id'          => 'nc-general-settings--general-theme-font-display',
            'type'        => 'typography',
            'title'       => esc_html__('Select google font for heading', 'ncmaz-frontend'),
            'google'        => true,
            'font-style'    => false,
            'font-weight'   => true,
            'font-size'     => false,
            'subsets'       => false,
            'line-height'   => false,
            'word-spacing'  => false,
            'letter-spacing' => false,
            'text-align'    => false,
            'color'         => false,
            'all_styles'    => true,
            'preview' => [
                "text" => "Preview font for heading tags",
                "font-size" => "32px",
                "always_display" => true,
            ],
            'subtitle'    => esc_html__('Heading font applies to heading tags from H1 - H6.', 'ncmaz-frontend'),
            'default'     => array(
                'font-family' => 'Poppins',
                'google'      => true,
            ),
        ],
        [
            'id'          => 'nc-general-settings--general-theme-font-body',
            'type'        => 'typography',
            'title'       => esc_html__('Select google font for body', 'ncmaz-frontend'),
            'google'        => true,
            'font-style'    => false,
            'font-weight'   => true,
            'font-size'     => false,
            'subsets'       => false,
            'line-height'   => false,
            'word-spacing'  => false,
            'letter-spacing' => false,
            'text-align'    => false,
            'color'         => false,
            'all_styles'    => true,
            'preview' => [
                "text" => "Preview font for body tags",
                "font-size" => "18px",
                "always_display" => true,
            ],
            'subtitle'    => esc_html__('Body font applied to body tags (p, span...)', 'ncmaz-frontend'),
            'default'     => array(
                'font-family' => 'Poppins',
                'google'      => true,
            ),
        ],
        // END FONTS
    ),
);
Redux::set_section($opt_name, $section);


// =========================== THEME COLORS SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Theme Colors', 'ncmaz-frontend'),
    'desc'       => esc_html__('Customize colors for theme', 'ncmaz-frontend'),
    'id'         => 'nc-general--theme-colors',
    'subsection' => true,
    'fields'     => array(
        [
            'id'       => 'nc-general--theme-color---pre-built-mode',
            'type'     => 'switch',
            'off'       => 'Customize primary color',
            'on'        => 'Choose a pre-built color palette',

            'title'    => esc_html__('Choose 1 color palette Or customize the main color', 'ncmaz-frontend'),
            'subtitle' => esc_html__('Customize the primary color or choose from a pre-built designer color palette!', 'ncmaz-frontend'),
            'default'  => true,
        ],
        // COLOR
        [
            'id'        => 'nc-general--theme-color--primary-hex',
            'type'      => 'color',
            'title'     =>   __('Customize Primary Color', 'ncmaz-frontend'),
            'subtitle'  => __('Customize color primary for theme.', 'ncmaz-frontend'),
            'desc'      => __('Currently the default Primary Color has 9 variations. If you change here, all variants will use the same value', 'ncmaz-frontend'),
            'validate' => 'color',
            'transparent' => false,
            'required' => array('nc-general--theme-color---pre-built-mode', '=', false)
        ],
        // END COLOR
        // PALETTE
        [
            'id'       => 'nc-general--theme-color--pre-built-palette',
            'type'     => 'select',
            'title'    => esc_html__('Select a pre-built palette', 'ncmaz-frontend'),
            'subtitle' => esc_html__('The color palettes have been meticulously selected by the designer.', 'ncmaz-frontend'),
            'desc'     => esc_html__('The color palettes are all built for Primary, Secondary and Neutral colors.', 'ncmaz-frontend'),
            'options'  => array(
                'DEFAULT' => 'DEFAULT',
                'theme-cyan-blueGrey' => 'cyan-blueGrey',
                'theme-blue-blueGrey' => 'blue-blueGrey',
                'theme-purple-blueGrey' => 'purple-blueGrey',
                'theme-teal-blueGrey' => 'teal-blueGrey',
                'theme-blueGrey-blueGrey' => 'blueGrey-blueGrey',
                'theme-red-warmGrey' => 'red-warmGrey',
                'theme-cyan-warmGrey' => 'cyan-warmGrey',
                'theme-blue-coolGrey' => 'blue-coolGrey',
                'theme-lightBlue-coolGrey' => 'lightBlue-coolGrey',
                'theme-pink-coolGrey' => 'pink-coolGrey',
                'theme-green-grey' => 'green-grey',
                'theme-yellow-grey' => 'yellow-grey',
                'theme-orange-grey' => 'orange-grey',
                'theme-fuchsia-blueGrey' => 'fuchsia-blueGrey',
            ),
            'default'  => 'DEFAULT',
            'required' => array('nc-general--theme-color---pre-built-mode', '=', true)
        ]
    ),
);
Redux::set_section($opt_name, $section);


// =========================== Global variable (Advance) SETTING__SUB2 GENRAL ========================
$section = array(
    'title'      => esc_html__('Global variable (Advance)', 'ncmaz-frontend'),
    'desc'       => esc_html__('Customize global variable for frontend', 'ncmaz-frontend'),
    'id'         => 'nc-general-settings--adv-global-variable',
    'subsection' => true,
    'fields'     => array(

        [
            'id'        => 'adv-global-variable--max-categories-submit',
            'type'      => 'slider',
            'title'     => esc_html__('Max categories submit', 'ncmaz-frontend'),
            'subtitle'  => esc_html__('Maximum number of categories allowed when submitting a post in the front end.', 'ncmaz-frontend'),
            "default"   => 5,
            "min"       => 1,
            "step"      => 1,
            "max"       => 30,
            'display_value' => 'label'
        ],
        [
            'id'        => 'adv-global-variable--max-tags-submit',
            'type'      => 'slider',
            'title'     => esc_html__('Max tags submit', 'ncmaz-frontend'),
            'subtitle'  => esc_html__('Maximum number of tags allowed when submitting a post in the front end.', 'ncmaz-frontend'),
            "default"   => 5,
            "min"       => 1,
            "step"      => 1,
            "max"       => 30,
            'display_value' => 'label'
        ],

    ),
);

Redux::set_section($opt_name, $section);
