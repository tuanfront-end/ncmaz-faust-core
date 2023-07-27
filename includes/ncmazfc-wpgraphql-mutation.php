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
    ],
    'mutateAndGetPayload' => function ($input, $context, $info) {
        // Do any logic here to sanitize the input, check user capabilities, etc
        $userID = $input['user_id'];
        $postID = $input['post_id'];
        $reaction = $input['reaction'];
        $number = $input['number'];
        $outPut = [];


        if (empty($postID) || empty($userID) || empty($reaction)) {
            return [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'ERROR',
                'errors' => "Invalid input. Empty postID or userID or reaction"
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

        if ($post) {
            // 1. when user update view count --------------------------------
            if ($reaction == 'VIEW') {
                // when user update view count, and view count is exist
                // return error and do nothing 
                $outPut = [
                    'user_id'   => $userID,
                    'post_id'   => $postID,
                    'reaction'  => $reaction,
                    'result'    => 'ERROR',
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
                    'new_count' =>  $newCount
                ];
            }
        } else {
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
                    'new_count' =>  $newCount,
                ];
            } else {
                // false or null when Insert Post data failure.
                $outPut = [
                    'user_id' => $userID,
                    'post_id' => $postID,
                    'reaction' => $reaction,
                    'result' => 'ERROR',
                    'errors' => $new_reaction_post_id->get_error_message()
                ];
            }
        }

        return $outPut;
    }
]);
