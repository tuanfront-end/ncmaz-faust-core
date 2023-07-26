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
        '_0' => [
            'value' => 0,
            'description' => "Remove. Will remove 1 from the count"
        ],
        '_1' => [
            'value' => 1,
            'description' => "Add. Will add 1 to the count"
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
            'type' => 'String',
            'description' => __('Added or Removed', 'ncmazfc'),
        ],
        'new_count' => [
            'type' => 'Int',
            'description' => __('New count after update', 'ncmazfc'),
        ],
    ],
    'mutateAndGetPayload' => function ($input, $context, $info) {
        // Do any logic here to sanitize the input, check user capabilities, etc
        $userID = $input['user_id'];
        $postID = $input['post_id'];
        $reaction = $input['reaction'];
        $number = $input['number'];


        if (empty($postID) || empty($userID) || empty($reaction)) {
            return new \WP_Error('invalid_input', __('Invalid input', 'ncmazfc'));
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

        $outPut = [];
        if ($post) {
            wp_delete_post($post['databaseId'], true);

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
                'result'    => 'Removed',
                'new_count' =>  $newCount
            ];
        } else {
            $postTitle = $postID . ',' . $reaction;
            $newCount = 0;
            if ($reaction == 'SAVE') {
                $newCount = ncmazFc__update_saveds_count_by_id($postID, 1);
            } else if ($reaction == 'LIKE') {
                $newCount = ncmazFc__update_likes_count_by_id($postID, 1);
            } else if ($reaction == 'VIEW') {
                $newCount = ncmazFc__increment_view_count_by_id($postID);
            }

            wp_insert_post([
                'post_title' => $postTitle,
                'post_author' =>  $userID,
                'post_type' => 'user_reaction_post',
            ]);
            $outPut = [
                'user_id' => $userID,
                'post_id' => $postID,
                'reaction' => $reaction,
                'result' => 'Added',
                'new_count' =>  $newCount
            ];
        }

        return $outPut;
    }
]);
