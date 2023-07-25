<?php

// Add Saved List Mutation to WPGraphQL Schema 
add_action('graphql_register_types', function () {
    register_graphql_mutation('ncmazfcUpdateSavedList', [
        'inputFields' => [
            'userDatabaseId' => [
                'type' => 'String',
            ],
            'postDatabaseId' => [
                'type' => 'String',
            ],
        ],
        'outputFields' => [
            'userDatabaseId' => [
                'type' => 'String',
            ],
            'postDatabaseId' => [
                'type' => 'String',
            ],
            'newData' => [
                'type' => 'String',
            ],
            'oldData' => [
                'type' => 'String',
            ],
            'isAction' => [
                'type' => 'String',
            ],

        ],
        'mutateAndGetPayload' => function ($input) {
            $userId = $input['userDatabaseId'];
            $postId = $input['postDatabaseId'];

            if (!function_exists('get_field') || !function_exists('update_field') || !$userId || !$postId) {
                return;
            }

            $aOld = get_field('saved_list', $postId);
            $a = $aOld;
            $b = $userId;
            // Tách chuỗi $a thành mảng
            $aArray = explode(",", $a);
            $isAction = '';
            // Kiểm tra sự tồn tại của $b trong mảng
            if (($key = array_search($b, $aArray)) !== false) {
                // Nếu $b tồn tại trong mảng, loại bỏ tất cả giá trị bằng $b
                $isAction = 'removed';
                $aArray = array_diff($aArray, [$b]);
            } else {
                $aArray[] = $userId;
                $isAction = 'added';
            }
            // Ghép mảng thành chuỗi
            $a = implode(",", $aArray);

            update_field('saved_list', $a, $postId);

            return [
                'userDatabaseId' => $input['userDatabaseId'] ?? null,
                'postDatabaseId' => $input['postDatabaseId'] ?? null,
                'oldData'        => $aOld ?? null,
                'newData'        => $a ?? null,
                'isAction'       => $isAction,
            ];
        }
    ]);
});
