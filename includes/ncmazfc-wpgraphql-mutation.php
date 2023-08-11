<?php
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
        $reaction = $input['reaction'];
        $number = $input['number']; // 1 is add, and 0 is remove
        $outPut = [];

        if (empty($postID) || empty($userID) || empty($reaction) || ($number !== 0 && $number !== 1)) {
            return [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'ERROR',
                'number' => $number,
                'errors' => "Invalid input. Empty postID or userID or reaction or number is not ADD_1 or REMOVE_1"
            ];
        }

        // when user save, like post ----------
        $userPosts = graphql([
            'query' =>  'query GetUserReactionPostsSaved($author: Int = 1, $title: String = "") {
                userReactionPosts(where: {author: $author, title: $title}) {
                  edges {
                    node {
                      id
                      databaseId
                      date
                      authorId
                      title
                    }
                  }
                }
              }',
            'variables' => [
                'author' => $userID,
                'title' => $postID . ',' . $reaction
            ]
        ]);
        $post = ($userPosts['data']['userReactionPosts']['edges'][0]['node'] ?? null);

        // error case 1
        if (empty($post) && $number === 0) {
            return [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'ERROR',
                'number' => $number,
                'errors' => "Reaction Post is not exist, so can not remove it. "
            ];
        }
        // error case 2
        if ($post && $number === 1) {
            return [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'ERROR',
                'number' => $number,
                'errors' => "Reaction Post is already exist."
            ];
        }


        if ($post && $number === 0) {
            // 1. when user update view count --------------------------------
            if ($reaction == 'VIEW') {
                // when user update view count, and view count is exist
                // return error and do nothing 
                $outPut = [
                    'user_id'   => $userID,
                    'post_id'   => $postID,
                    'reaction'  => $reaction,
                    'result'    => 'ERROR',
                    'number' => $number,
                    'errors'    => 'View count is already exist.'
                ];
                return $outPut;
            }


            // 2. when user update save or like count --------------------------------
            // Delete Post data 

            $is_post_deleted = wp_delete_post($post['databaseId'], true);
            // false or null when Delete Post data failure.
            if (!$is_post_deleted) {
                $outPut = [
                    'user_id'   => $userID,
                    'post_id'   => $postID,
                    'reaction'  => $reaction,
                    'result'    => 'ERROR',
                    'number' => $number,
                    'errors'    => 'Delete Reaction_post data failure.'
                ];
            } else {
                // Delete Post data on success,
                $newCount = 0;
                if ($reaction == 'SAVE') {
                    $newCount = ncmazFc__update_saveds_count_by_id($postID, 0);
                } else if ($reaction == 'LIKE') {
                    $newCount = ncmazFc__update_likes_count_by_id($postID, 0);
                }

                $outPut = [
                    'user_id'   => $userID,
                    'post_id'   => $postID,
                    'reaction'  => $reaction,
                    'result'    => 'REMOVED',
                    'number' => $number,
                    'new_count' =>  $newCount
                ];
            }
        } else if (empty($post) && $number === 1) {
            // have no post and add 1
            $postTitle = $postID . ',' . $reaction;
            $newCount = 0;
            $new_reaction_post_id = wp_insert_post([
                'post_title' => $postTitle,
                'post_author' =>  $userID,
                'post_type' => 'user-reaction-post',
                'post_status'   => 'publish',
            ]);

            //  Insert Post data on success,
            if (!is_wp_error($new_reaction_post_id)) {
                if ($reaction == 'SAVE') {
                    $newCount = ncmazFc__update_saveds_count_by_id($postID, 1);
                } else if ($reaction == 'LIKE') {
                    $newCount = ncmazFc__update_likes_count_by_id($postID, 1);
                } else if ($reaction == 'VIEW') {
                    $newCount = ncmazFc__increment_view_count_by_id($postID);
                }

                $outPut = [
                    'user_id' => $userID,
                    'post_id' => $postID,
                    'reaction' => $reaction,
                    'result' => 'ADDED',
                    'number' => $number,
                    'new_count' =>  $newCount,
                ];
            } else {
                // false or null when Insert Post data failure.
                $outPut = [
                    'user_id' => $userID,
                    'post_id' => $postID,
                    'reaction' => $reaction,
                    'result' => 'ERROR',
                    'errors' => $new_reaction_post_id->get_error_message(),
                    'number' => $number,
                ];
            }
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
            'ncTags'        => ['type' => 'String'],
            'ncFeaturedImageDatabaseId' => ['type' => 'Int'],
            'ncmazAudioUrl' => ['type' => 'String'],
            'ncmazVideoUrl' => ['type' => 'String'],
            // 
            'ncmazGalleryImgs1DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs2DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs3DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs4DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs5DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs6DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs7DatabaseID' => ['type' => 'Int'],
            'ncmazGalleryImgs8DatabaseID' => ['type' => 'Int'],
        ]);
    }
    if ($type_name === 'UpdateUserInput') {
        $fields = array_merge($fields, [
            'ncmazFeaturedImage'        => ['type' => 'Int'],
            'ncmazBackgroundImage'      => ['type' => 'Int'],
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
            'ncmazBuymeacoffeUrl'       => ['type' => 'String'],
        ]);
    }
    return $fields;
}, 20, 3);

add_action('graphql_post_object_mutation_update_additional_data', function ($post_id, $input, $mutation_name, $context, $info) {

    if (!empty($input['ncTags'])) {
        wp_set_post_tags($post_id, $input['ncTags'], true);
    }

    if (isset($input['ncmazAudioUrl'])) {
        update_field('audio_url', $input['ncmazAudioUrl'], $post_id);
    }
    if (isset($input['ncmazVideoUrl'])) {
        update_field('video_url', $input['ncmazVideoUrl'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs1DatabaseID'])) {
        update_field('image_1', $input['ncmazGalleryImgs1DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs2DatabaseID'])) {
        update_field('image_2', $input['ncmazGalleryImgs2DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs3DatabaseID'])) {
        update_field('image_3', $input['ncmazGalleryImgs3DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs4DatabaseID'])) {
        update_field('image_4', $input['ncmazGalleryImgs4DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs5DatabaseID'])) {
        update_field('image_5', $input['ncmazGalleryImgs5DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs6DatabaseID'])) {
        update_field('image_6', $input['ncmazGalleryImgs6DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs7DatabaseID'])) {
        update_field('image_7', $input['ncmazGalleryImgs7DatabaseID'], $post_id);
    }
    if (isset($input['ncmazGalleryImgs8DatabaseID'])) {
        update_field('image_8', $input['ncmazGalleryImgs8DatabaseID'], $post_id);
    }
    if (!empty($input['ncFeaturedImageDatabaseId'])) {
        set_post_thumbnail($post_id,  $input['ncFeaturedImageDatabaseId']);
    } else {
        delete_post_thumbnail($post_id);
    }
}, 10, 5);

add_action('graphql_user_object_mutation_update_additional_data', function ($user_id, $input, $mutation_name, $context, $info) {
    $user_id = "user_" . $user_id;
    if (isset($input['ncmazFeaturedImage'])) {
        update_field('featured_image', $input['ncmazFeaturedImage'], $user_id);
    }
    if (isset($input['ncmazBackgroundImage'])) {
        update_field('background_image', $input['ncmazBackgroundImage'], $user_id);
    }
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
    if (isset($input['ncmazBuymeacoffeUrl'])) {
        update_field('buymeacoffe_url', $input['ncmazBuymeacoffeUrl'], $user_id);
    }
}, 10, 5);
