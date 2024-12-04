<?php

if (!function_exists('register_graphql_enum_type') || !function_exists('register_graphql_mutation')) {
    return;
}

// Register enum type
register_graphql_enum_type('NcmazFcUserReactionPostActionEnum', [
    'description' => __('Reaction of user, like save, likes, view, or something else', 'ncmazfc'),
    'values' => [
        'SAVE' => [
            'value' => 'SAVE'
        ],
        'LIKE' => [
            'value' => 'LIKE'
        ],
        'VIEW' => [
            'value' => 'VIEW'
        ],
    ],
]);

register_graphql_enum_type('NcmazFcUserReactionPostNumberUpdateEnum', [
    'description' => __('1 = add, 0 = remove', 'ncmazfc'),
    'values' => [
        'REMOVE_1' => [
            'value' => 0,
            'description' => "Remove. Will remove 1 from the count"
        ],
        'ADD_1' => [
            'value' => 1,
            'description' => "Add. Will add 1 to the count"
        ],

    ],
]);

register_graphql_enum_type('NcmazFcUserReactionPostUpdateResuiltEnum', [
    'description' => __('Added, Removed, or Error', 'ncmazfc'),
    'values' => [
        'ADDED' => [
            'value' => 'ADDED',
            'description' => "Success! Added!"
        ],
        'REMOVED' => [
            'value' => 'REMOVED',
            'description' => "Success! Removed!"
        ],
        'ERROR' => [
            'value' => 'ERROR',
            'description' => "Error!, something went wrong!"
        ],

    ],
]);


// Register a mutation to update the likes count of a post
register_graphql_mutation('ncmazFaustUpdateUserReactionPostCount', [
    # inputFields expects an array of Fields to be used for inputting values to the mutation
    'inputFields'         => [
        'user_id' => [
            'type' => 'Int',
            'description' => __('User database id of user', 'ncmazfc'),
        ],
        'post_id' => [
            'type' => 'Int',
            'description' => __('Post database id of user', 'ncmazfc'),
        ],
        'reaction' => [
            'type' => 'NcmazFcUserReactionPostActionEnum',
            'description' => __('Save, likes, view, or something else,', 'ncmazfc'),
        ],
        'number' => [
            'type' => 'NcmazFcUserReactionPostNumberUpdateEnum',
            'description' => __('1 is add, and 0 is remove', 'ncmazfc'),
        ],
    ],
    'outputFields'        => [
        'user_id' => [
            'type' => 'Int',
            'description' => __('User database id of user', 'ncmazfc'),
        ],
        'post_id' => [
            'type' => 'Int',
            'description' => __('Post database id of user', 'ncmazfc'),
        ],
        'reaction' => [
            'type' => 'NcmazFcUserReactionPostActionEnum',
            'description' => __('Save, likes, view, or something else,', 'ncmazfc'),
        ],
        'result' => [
            'type' => 'NcmazFcUserReactionPostUpdateResuiltEnum',
            'description' => __('Added or Removed or Error', 'ncmazfc'),
        ],
        'new_count' => [
            'type' => 'Int',
            'description' => __('New count after update', 'ncmazfc'),
        ],
        'errors' => [
            'type' => 'String',
            'description' => __('Error of this mutation', 'ncmazfc'),
        ],
        'number' => [
            'type' => 'NcmazFcUserReactionPostNumberUpdateEnum',
            'description' => __('1 is add, and 0 is remove', 'ncmazfc'),
        ],
    ],
    'mutateAndGetPayload' => function ($input, $context, $info) {
        // Do any logic here to sanitize the input, check user capabilities, etc
        $userID = $input['user_id'];
        $postID = $input['post_id'];
        $reaction = $input['reaction']; // SAVE, LIKE, VIEW
        $number = $input['number']; // 1 is add, and 0 is remove
        $outPut = [];

        // truong hop khong co user id va increment view count
        if (empty($userID) && $reaction == 'VIEW' && !empty($postID) && $number === 1) {
            $newCount = ncmazFc__increment_view_count_by_id($postID);
            $outPut = [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'ADDED',
                'number' => $number,
                'new_count' =>  $newCount,
            ];
            return $outPut; // return here
        }

        //  Nhung truong loi...
        if (empty($postID) || empty($userID) || empty($reaction) || ($number !== 0 && $number !== 1) || !in_array($reaction, ['SAVE', 'LIKE', 'VIEW'])) {
            return [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'ERROR',
                'number' => $number,
                'errors' => "Invalid input. Empty postID or userID or reaction or number is not ADD_1 or REMOVE_1"
            ];
        }

        if ($number === 0) {
            // Delete id on user meta
            $newCount = 0;
            if ($reaction == 'SAVE') {
                $remove_result = ncmazfc__remove_user_post_interact($userID, $postID, 'save');
                if ($remove_result['is_meta_changed'] ?? false) {
                    $newCount = ncmazFc__update_saveds_count_by_id($postID, 0);
                } else {
                    $newCount = get_field('saveds_count', $postID) ?? 0;
                }
            } else if ($reaction == 'LIKE') {
                $remove_result = ncmazfc__remove_user_post_interact($userID, $postID, 'like');
                if ($remove_result['is_meta_changed'] ?? false) {
                    $newCount = ncmazFc__update_likes_count_by_id($postID, 0);
                } else {
                    $newCount = get_field('likes_count', $postID) ?? 0;
                }
            } else if ($reaction == 'VIEW') {
                ncmazfc__remove_user_post_interact($userID, $postID, 'view');
                $newCount = get_field('views_count', $postID) ?? 0;
            }

            $outPut = [
                'user_id'   => $userID,
                'post_id'   => $postID,
                'reaction'  => $reaction,
                'result'    => 'REMOVED',
                'number'    => $number,
                'new_count' =>  intval($newCount),
            ];
        } else if ($number === 1) {
            // have no post and add 1
            $newCount = 0;

            if ($reaction == 'SAVE') {
                $a_result = ncmazfc__add_user_post_interact($userID, $postID, 'save');
                if ($a_result['is_meta_changed'] ?? false) {
                    $newCount = ncmazFc__update_saveds_count_by_id($postID, 1);
                } else {
                    $newCount = get_field('saveds_count', $postID) ?? 0;
                }
            } else if ($reaction == 'LIKE') {
                $a_result = ncmazfc__add_user_post_interact($userID, $postID, 'like');
                if ($a_result['is_meta_changed'] ?? false) {
                    $newCount = ncmazFc__update_likes_count_by_id($postID, 1);
                } else {
                    $newCount = get_field('likes_count', $postID) ?? 0;
                }
            } else if ($reaction == 'VIEW') {
                $a_result = ncmazfc__add_user_post_interact($userID, $postID, 'view');
                if ($a_result['is_meta_changed'] ?? false) {
                    $newCount = ncmazFc__increment_view_count_by_id($postID);
                } else {
                    $newCount = get_field('views_count', $postID) ?? 0;
                }
            }

            $outPut = [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'ADDED',
                'number' => $number,
                'new_count' =>  intval($newCount),
            ];
        } else {
            return [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'ERROR',
                'number' => $number,
                'errors' => "Somethings went wrong."
            ];
        }

        return $outPut;
    }
]);


// =========== dang ky cac nuations VAO POST MUTATION ... ================= 
add_action('graphql_input_fields', function ($fields, $type_name, $config) {
    if ($type_name === 'CreatePostInput' || $type_name === 'UpdatePostInput') {
        $fields = array_merge($fields, [
            'postStyle'        => ['type' => 'String'],
            'showRightSidebar' => ['type' => 'String'],
            // 
            'ncTags'        => ['type' => 'String'],
            // 
            'ncmazAudioUrl' => ['type' => 'String'],
            'ncmazVideoUrl' => ['type' => 'String'],
            // 
            'ncmazGalleryImg1Url' => ['type' => 'String'],
            'ncmazGalleryImg2Url' => ['type' => 'String'],
            'ncmazGalleryImg3Url' => ['type' => 'String'],
            'ncmazGalleryImg4Url' => ['type' => 'String'],
            'ncmazGalleryImg5Url' => ['type' => 'String'],
            'ncmazGalleryImg6Url' => ['type' => 'String'],
            'ncmazGalleryImg7Url' => ['type' => 'String'],
            'ncmazGalleryImg8Url' => ['type' => 'String'],
            // 
            'ncmazGalleryImg1Alt' => ['type' => 'String'],
            'ncmazGalleryImg2Alt' => ['type' => 'String'],
            'ncmazGalleryImg3Alt' => ['type' => 'String'],
            'ncmazGalleryImg4Alt' => ['type' => 'String'],
            'ncmazGalleryImg5Alt' => ['type' => 'String'],
            'ncmazGalleryImg6Alt' => ['type' => 'String'],
            'ncmazGalleryImg7Alt' => ['type' => 'String'],
            'ncmazGalleryImg8Alt' => ['type' => 'String'],
            // 
            'ncmazFeaturedImgUrl' => ['type' => 'String'],
            'ncmazFeaturedImgAlt' => ['type' => 'String'],
        ]);
    }
    if ($type_name === 'UpdateUserInput') {
        $fields = array_merge($fields, [
            'ncmazFeaturedImgUrl'        => ['type' => 'String'],
            'ncmazBackgroundImgUrl'      => ['type' => 'String'],
            'ncmazFeaturedImgAlt'        => ['type' => 'String'],
            'ncmazBackgroundImgAlt'      => ['type' => 'String'],
            // 
            'ncmazBio'                  => ['type' => 'String'],
            'ncmazYoutubeUrl'           => ['type' => 'String'],
            'ncmazFacebookUrl'          => ['type' => 'String'],
            'ncmazMediumUrl'            => ['type' => 'String'],
            'ncmazGithubUrl'            => ['type' => 'String'],
            'ncmazVimeoUrl'             => ['type' => 'String'],
            'ncmazTwitterUrl'           => ['type' => 'String'],
            'ncmazInstagramUrl'         => ['type' => 'String'],
            'ncmazLinkedinUrl'          => ['type' => 'String'],
            'ncmazPinterestUrl'         => ['type' => 'String'],
            'ncmazTwitchUrl'            => ['type' => 'String'],
            'ncmazWebsiteUrl'           => ['type' => 'String'],
            'ncmazTiktokUrl'           => ['type' => 'String'],
            'ncmazBuymeacoffeUrl'       => ['type' => 'String'],
        ]);
    }
    return $fields;
}, 20, 3);

add_action('graphql_post_object_mutation_update_additional_data', function ($post_id, $input, $post_type_object, $mutation_name) {

    if ($mutation_name === "delete") {
        return;
    }

    $image1_id = null;
    $image2_id = null;
    $image3_id = null;
    $image4_id = null;
    $image5_id = null;
    $image6_id = null;
    $image7_id = null;
    $image8_id = null;
    $imageFeatured_id = null;

    $images_upload_error_message = "";


    // check gallery image 1 upload
    // why isset? then not empty? vi khi update, neu gia tri la "" thi phai set lai custom field
    if (!empty($input['ncmazGalleryImg1Url'])) {
        $image1_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazGalleryImg1Url'], $input['ncmazGalleryImg1Alt']);
        if (!$image1_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Gallery image 1 - " . $image1_id['error'] . ") ";
            $image1_id = '';
        } else {
            $image1_id = $image1_id['imageID'];
        }
    }

    // check gallery image 2 upload
    if (!empty($input['ncmazGalleryImg2Url'])) {
        $image2_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazGalleryImg2Url'], $input['ncmazGalleryImg2Alt']);
        if (!$image2_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Gallery image 2 - " . $image2_id['error'] . ") ";
            $image2_id = '';
        } else {
            $image2_id = $image2_id['imageID'];
        }
    }

    // check gallery image 3 upload
    if (!empty($input['ncmazGalleryImg3Url'])) {
        $image3_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazGalleryImg3Url'], $input['ncmazGalleryImg3Alt']);
        if (!$image3_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Gallery image 3 - " . $image3_id['error'] . ") ";
            $image3_id = '';
        } else {
            $image3_id = $image3_id['imageID'];
        }
    }

    // check gallery image 4 upload
    if (!empty($input['ncmazGalleryImg4Url'])) {
        $image4_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazGalleryImg4Url'], $input['ncmazGalleryImg4Alt']);
        if (!$image4_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Gallery image 4 - " . $image4_id['error'] . ") ";
            $image4_id = '';
        } else {
            $image4_id = $image4_id['imageID'];
        }
    }

    // check gallery image 5 upload
    if (!empty($input['ncmazGalleryImg5Url'])) {
        $image5_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazGalleryImg5Url'], $input['ncmazGalleryImg5Alt']);
        if (!$image5_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Gallery image 5 - " . $image5_id['error'] . ") ";
            $image5_id = '';
        } else {
            $image5_id = $image5_id['imageID'];
        }
    }

    // check gallery image 6 upload
    if (!empty($input['ncmazGalleryImg6Url'])) {
        $image6_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazGalleryImg6Url'], $input['ncmazGalleryImg6Alt']);
        if (!$image6_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Gallery image 6 - " . $image6_id['error'] . ") ";
            $image6_id = '';
        } else {
            $image6_id = $image6_id['imageID'];
        }
    }

    // check gallery image 7 upload
    if (!empty($input['ncmazGalleryImg7Url'])) {
        $image7_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazGalleryImg7Url'], $input['ncmazGalleryImg7Alt']);
        if (!$image7_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Gallery image 7 - " . $image7_id['error'] . ") ";
            $image7_id = '';
        } else {
            $image7_id = $image7_id['imageID'];
        }
    }

    // check gallery image 8 upload
    if (!empty($input['ncmazGalleryImg8Url'])) {
        $image8_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazGalleryImg8Url'], $input['ncmazGalleryImg8Alt']);
        if (!$image8_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Gallery image 8 - " . $image8_id['error'] . ") ";
            $image8_id = '';
        } else {
            $image8_id = $image8_id['imageID'];
        }
    }

    // check featured image upload
    if (!empty($input['ncmazFeaturedImgUrl'])) {
        $imageFeatured_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazFeaturedImgUrl'], $input['ncmazFeaturedImgAlt']);
        if (!$imageFeatured_id['success']) {
            $images_upload_error_message = $images_upload_error_message . " (Featured image - " . $imageFeatured_id['error'] . ") ";
            $imageFeatured_id = '';
        } else {
            $imageFeatured_id = $imageFeatured_id['imageID'];
        }
    }

    // update_field for ACF fields gallery images 1
    update_field('image_1', $image1_id, $post_id);
    update_field('image_2', $image2_id, $post_id);
    update_field('image_3', $image3_id, $post_id);
    update_field('image_4', $image4_id, $post_id);
    update_field('image_5', $image5_id, $post_id);
    update_field('image_6', $image6_id, $post_id);
    update_field('image_7', $image7_id, $post_id);
    update_field('image_8', $image8_id, $post_id);
    if (!empty($imageFeatured_id)) {
        set_post_thumbnail($post_id,  $imageFeatured_id);
    } else if ($mutation_name == 'update') {
        delete_post_thumbnail($post_id);
    }

    //  more fields
    if (!empty($input['ncTags'])) {
        wp_set_post_tags($post_id, $input['ncTags']);
    }
    if (isset($input['ncmazAudioUrl'])) {
        update_field('audio_url', $input['ncmazAudioUrl'], $post_id);
    }
    if (isset($input['ncmazVideoUrl'])) {
        update_field('video_url', $input['ncmazVideoUrl'], $post_id);
    }

    if (isset($input['showRightSidebar'])) {
        update_field('show_right_sidebar', boolval($input['showRightSidebar']) ? 1 : 0, $post_id);
    }
    if (isset($input['postStyle'])) {
        update_field('template', $input['postStyle'], $post_id);
    }


    // check if there is any error in images upload
    if (!empty($images_upload_error_message)) {
        /* translators: 1: Error message. */
        throw new  GraphQL\Error\UserError(esc_html__('The object has been updated but an error occurred while uploading the image ' . $images_upload_error_message, 'wp-graphql'));
    }
}, 10, 5);

add_action('graphql_user_object_mutation_update_additional_data', function ($user_id, $input, $mutation_name) {
    $user_id = "user_" . $user_id;

    $imageFeatured_id = null;
    $imageBackground_id = null;
    $images_upload_error_message = "";

    // check featured image upload
    if (isset($input['ncmazFeaturedImgUrl'])) :
        if (!empty($input['ncmazFeaturedImgUrl'])) {
            $imageFeatured_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazFeaturedImgUrl'], $input['ncmazFeaturedImgAlt']);
            if (!$imageFeatured_id['success']) {
                $images_upload_error_message = $images_upload_error_message . " (Featured image - " . $imageFeatured_id['error'] . ") ";
                $imageFeatured_id = '';
            } else {
                $imageFeatured_id = $imageFeatured_id['imageID'];
            }
        }
        update_field('featured_image', $imageFeatured_id, $user_id);
    endif;

    // check background image upload
    if (isset($input['ncmazBackgroundImgUrl'])) :
        if (!empty($input['ncmazBackgroundImgUrl'])) {
            $imageBackground_id = ncmazfc__addImageToMediaLibraryByURL($input['ncmazBackgroundImgUrl'], $input['ncmazBackgroundImgAlt']);
            if (!$imageBackground_id['success']) {
                $images_upload_error_message = $images_upload_error_message . " (Background image - " . $imageBackground_id['error'] . ") ";
                $imageBackground_id = '';
            } else {
                $imageBackground_id = $imageBackground_id['imageID'];
            }
        }
        update_field('background_image', $imageBackground_id, $user_id);
    endif;


    if (isset($input['ncmazBio'])) {
        update_field('nc_bio', $input['ncmazBio'], $user_id);
    }
    if (isset($input['ncmazYoutubeUrl'])) {
        update_field('youtube_url', $input['ncmazYoutubeUrl'], $user_id);
    }
    if (isset($input['ncmazFacebookUrl'])) {
        update_field('facebook_url', $input['ncmazFacebookUrl'], $user_id);
    }
    if (isset($input['ncmazMediumUrl'])) {
        update_field('medium_url', $input['ncmazMediumUrl'], $user_id);
    }
    if (isset($input['ncmazGithubUrl'])) {
        update_field('github_url', $input['ncmazGithubUrl'], $user_id);
    }
    if (isset($input['ncmazVimeoUrl'])) {
        update_field('vimeo_url', $input['ncmazVimeoUrl'], $user_id);
    }
    if (isset($input['ncmazTwitterUrl'])) {
        update_field('twitter_url', $input['ncmazTwitterUrl'], $user_id);
    }
    if (isset($input['ncmazInstagramUrl'])) {
        update_field('instagram_url', $input['ncmazInstagramUrl'], $user_id);
    }
    if (isset($input['ncmazLinkedinUrl'])) {
        update_field('linkedin_url', $input['ncmazLinkedinUrl'], $user_id);
    }
    if (isset($input['ncmazPinterestUrl'])) {
        update_field('pinterest_url', $input['ncmazPinterestUrl'], $user_id);
    }
    if (isset($input['ncmazTwitchUrl'])) {
        update_field('twitch_url', $input['ncmazTwitchUrl'], $user_id);
    }
    if (isset($input['ncmazWebsiteUrl'])) {
        update_field('website_url', $input['ncmazWebsiteUrl'], $user_id);
    }
    if (isset($input['ncmazTiktokUrl'])) {
        update_field('tiktok_url', $input['ncmazTiktokUrl'], $user_id);
    }
    if (isset($input['ncmazBuymeacoffeUrl'])) {
        update_field('buymeacoffe_url', $input['ncmazBuymeacoffeUrl'], $user_id);
    }

    // check if there is any error in images upload
    if (!empty($images_upload_error_message)) {
        /* translators: 1: Error message. */
        throw new  GraphQL\Error\UserError(esc_html__('The object has been updated but an error occurred while uploading the image ' . $images_upload_error_message, 'wp-graphql'));
    }
}, 10, 5);


// Register a mutation to add user to mailpoet list
register_graphql_mutation('ncmazFaustAddSubscriberToMailpoet', [
    # inputFields expects an array of Fields to be used for inputting values to the mutation
    'inputFields'         => [
        'user_email' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],
        'listId' => [
            'type' => 'String',
            'description' => __('listId', 'ncmazfc'),
        ],
        'user_first_name' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],

    ],
    'outputFields'        => [
        'user_email' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],
        'user_first_name' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],
        'errors' => [
            'type' => 'String',
            'description' => __('Error of this mutation', 'ncmazfc'),
        ],
        'success' => [
            'type' => 'Boolean',
            'description' => __('Is Added success!', 'ncmazfc'),
        ],

    ],
    'mutateAndGetPayload' => function ($input, $context, $info) {
        // Do any logic here to sanitize the input, check user capabilities, etc
        $listId = $input['listId'];
        $email = $input['user_email'];
        $first_name = $input['user_first_name'];
        $error_message = "Somethings went wrong!";
        $success = false;

        if (empty($email)) {
            $error_message = "Email is empty! Please check again!";
            return [
                'user_email' => $email,
                'user_first_name' => $first_name,
                'errors' => $error_message,
                'success' => false,
            ];
        }

        // 
        if (class_exists(\MailPoet\API\API::class)) {
            // Get MailPoet API instance
            $mailpoet_api = \MailPoet\API\API::MP('v1');
            $subscriber = [];
            $subscriber['email'] = $email;
            $subscriber['first_name'] = $first_name;
            $list_ids = $listId ? [$listId] : [];

            try {
                $get_subscriber = $mailpoet_api->getSubscriber($subscriber['email']);
            } catch (\Exception $e) {
            }

            try {
                if (!$get_subscriber) {
                    // Subscriber doesn't exist let's create one
                    $mailpoet_api->addSubscriber($subscriber, $list_ids);
                    $success = true;
                } else {
                    // In case subscriber exists just add him to new lists
                    $mailpoet_api->subscribeToLists($subscriber['email'], $list_ids);
                    $success = true;
                }
            } catch (\Exception $e) {
                $error_message = $e->getMessage();
                $success = false;
            }
        } else {
            $error_message = "Mailpoet not installed! Please contact the website owner.";
            $success = false;
        }

        $outPut = [
            'user_email' => $email,
            'user_first_name' => $first_name,
            'errors' => $error_message,
            'success' => $success,
        ];

        return $outPut;
    }
]);

// Register a mutation to contact form
register_graphql_mutation('ncmazFaustAddSentMessContactForm', [
    # inputFields expects an array of Fields to be used for inputting values to the mutation
    'inputFields'         => [
        'user_email' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],
        'message' => [
            'type' => 'String',
            'description' => __('message', 'ncmazfc'),
        ],
        'user_full_name' => [
            'type' => 'String',
            'description' => __('Full name of user', 'ncmazfc'),
        ],

    ],
    'outputFields'        => [
        'user_email' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],
        'user_full_name' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],
        'errors' => [
            'type' => 'String',
            'description' => __('Error of this mutation', 'ncmazfc'),
        ],
        'success' => [
            'type' => 'Boolean',
            'description' => __('Is Added success!', 'ncmazfc'),
        ],

    ],
    'mutateAndGetPayload' => function ($input, $context, $info) {
        // Do any logic here to sanitize the input, check user capabilities, etc
        $message = $input['message'];
        $email = $input['user_email'];
        $fullName = $input['user_full_name'];
        $error_message = "";
        $success = false;

        if (empty($email)) {
            $error_message = "Email is empty! Please check again!";
            return [
                'user_email' => $email,
                'user_full_name' => $fullName,
                'errors' => $error_message,
                'success' => false,
            ];
        }

        // check valid email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error_message = "Invalid email format! Please check again!";
            return [
                'user_email' => $email,
                'user_full_name' => $fullName,
                'errors' => $error_message,
                'success' => false,
            ];
        }
        // 

        try {

            // Lấy danh sách người dùng có vai trò quản trị viên
            $admins = get_users(array(
                'role' => 'administrator',
                'fields' => array('user_email')
            ));

            // Tạo danh sách email của quản trị viên
            $admin_emails = array();
            foreach ($admins as $admin) {
                $admin_emails[] = $admin->user_email;
            }

            // lấy title của website
            $site_title = get_bloginfo('name');

            // Tiêu đề email
            $subject = "New Contact Form Submission from $fullName";
            // Nội dung email
            $body = "Messages received via your Website's Contact Form through the Nextjs frontend page - $site_title. \nName: $fullName\nEmail: $email\n\nMessage:\n$message";
            // Đầu mục email
            $headers = ['Content-Type: text/plain; charset=UTF-8', "From: $fullName <$email>"];

            // Gửi email và cc cho tất cả quản trị viên
            if (!empty($admin_emails)) {
                wp_mail($admin_emails, $subject, $body, $headers);
            }

            $success = true;
            $error_message = "";
        } catch (\Throwable $th) {
            //throw $th;
            $error_message = $th->getMessage();
            $success = false;
        }

        $outPut = [
            'user_email' => $email,
            'user_full_name' => $fullName,
            'errors' => $error_message,
            'success' =>   $success
        ];

        return $outPut;
    }
]);

// Register a mutation to create a new delete_account nonce
register_graphql_mutation('ncmazFaustCreateDeleteAccountNonce', [
    # inputFields expects an array of Fields to be used for inputting values to the mutation
    'inputFields'         => [
        'user_email' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],
    ],
    'outputFields'        => [
        'user_email' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],
        'errors' => [
            'type' => 'String',
            'description' => __('Error of this mutation', 'ncmazfc'),
        ],
        'success' => [
            'type' => 'Boolean',
            'description' => __('Is Added success!', 'ncmazfc'),
        ],
        'nonce' => [
            'type' => 'String',
            'description' => __('Nonce', 'ncmazfc'),
        ],

    ],
    'mutateAndGetPayload' => function ($input, $context, $info) {
        // Do any logic here to sanitize the input, check user capabilities, etc
        $email = $input['user_email'];
        $error_message = "";
        $success = false;
        $nonce = "";

        // check valid email
        if (empty($email) || !filter_var($email ?? "", FILTER_VALIDATE_EMAIL)) {
            $error_message = "Email is empty or Invalid email format! Please check again!";
            return [
                'user_email' => $email,
                'errors' => $error_message,
                'success' => false,
                'nonce' => $nonce,
            ];
        }
        // 

        try {
            // create nonce
            $nonce = wp_create_nonce('delete_account_' . $email);
            $success = true;
            $error_message = "";
        } catch (\Throwable $th) {
            //throw $th;
            $error_message = $th->getMessage();
            $success = false;
        }

        $outPut = [
            'user_email' => $email,
            'errors' => $error_message,
            'success' =>   $success,
            'nonce' => $nonce,
        ];

        return $outPut;
    }
]);

// Register a mutation to delete a user account by nonce
register_graphql_mutation('ncmazFaustDeleteAccountByNonce', [
    # inputFields expects an array of Fields to be used for inputting values to the mutation
    'inputFields'         => [
        'nonce' => [
            'type' => 'String',
            'description' => __('Delete account Nonce', 'ncmazfc'),
        ],
        'user_email' => [
            'type' => 'String',
            'description' => __('Email of user', 'ncmazfc'),
        ],

    ],
    'outputFields'        => [
        'errors' => [
            'type' => 'String',
            'description' => __('Error of this mutation', 'ncmazfc'),
        ],
        'success' => [
            'type' => 'Boolean',
            'description' => __('Is Account Deleted success!', 'ncmazfc'),
        ],
    ],
    'mutateAndGetPayload' => function ($input, $context, $info) {
        // Do any logic here to sanitize the input, check user capabilities, etc
        $nonce = $input['nonce'];
        $email = $input['user_email'];
        $error_message = "";
        $success = false;

        // check valid nonce
        if (empty($nonce) || empty($email)) {
            $error_message = "Invalid nonce or email! Please check again!";
            return [
                'errors' => $error_message,
                'success' => false,
            ];
        }
        // 

        try {
            // verify nonce
            $nonce = wp_verify_nonce($nonce, 'delete_account_' . $email);

            if ($nonce === 1) {
                require_once(ABSPATH . 'wp-admin/includes/user.php');
                // delete user account
                $user = get_user_by('email', $email);
                if ($user) {
                    wp_delete_user($user->ID);
                    $success = true;
                } else {
                    $error_message = "User not found!";
                    $success = false;
                }
            } else {
                $error_message = "Invalid nonce!";
                $success = false;
            }
        } catch (\Throwable $th) {
            //throw $th;
            $error_message = $th->getMessage();
            $success = false;
        }

        $outPut = [
            'errors' => $error_message,
            'success' =>   $success,
        ];

        return $outPut;
    }
]);
