import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

import { HeaderSectionFilterTabs } from "../frontend-components/HeaderSectionFilter/HeaderSectionFilter";
import { PostsQueriesControlsType } from "../components/posts-queries-controls/PostsQueriesControls";
import { CORE_IMAGE_FIELDS_FRAGMENT } from "../fragments";

export interface ListPostsGQLResultData {
	posts: ListPosts;
}

export interface ListPosts {
	edges: Post[];
}

export interface Post {
	node: PostNode;
}

export interface PostNode {
	id: string;
	link: string;
	status: string;
	author?: any;
	categories?: any;
	commentCount?: any;
	date?: string;
	excerpt?: string;
	featuredImage?: any;
	postFormats?: string;
	postId: number;
	slug: string;
	title: string;
	ncPostMetaData: {
		favoriteButtonShortcode?: string;
		readingTimeShortcode?: string;
		viewsCount?: number;
		fieldGroupName: "ncPostMetaData";
	};
	__typename: string;
}

export default function usePostGqlQuery(queries: PostsQueriesControlsType) {
	const {
		author,
		exclude,
		inherit,
		offset,
		order,
		orderBy,
		pages,
		parents,
		perPage,
		postType,
		search,
		sticky,
		taxQuery,
	} = queries;
	// const {
	// 	filterDataBy,
	// 	posts,
	// 	categories,
	// 	tags,
	// 	orderBy,
	// 	order,
	// 	numberPerPage,
	// 	authors,
	// } = attributes;
	//
	// const [tabActiveId, setTabActiveId] = useState(-1);

	//
	// let GQL_QUERY__string = "";
	// let GQL_QUERY__string_text = "";
	let variables = {};
	let variablesUseNow;
	//

	// GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_FILTER;
	// GQL_QUERY__string_text = "GQL_QUERY_GET_POSTS_BY_FILTER";
	variables = {
		order: order.toUpperCase(),
		field: orderBy.toUpperCase(),
		first: Number(perPage),
		parentIn: parents,
		authorIn: !!author
			? author.split(",").map((item) => Number(item)) || []
			: [],
		categoryIn: queries?.taxQuery?.category || [],
		tagIn: queries?.taxQuery?.post_tag || [],
	};

	// variablesUseNow = {
	// 	...variables,
	// 	categoryIn:
	// 		tabActiveId && tabActiveId !== -1
	// 			? [tabActiveId]
	// 			: categories?.map((item) => item.value) || [],
	// };

	// =================== QUERY GRAPHQL ===================
	const gqlQuery = gql`
		${CORE_IMAGE_FIELDS_FRAGMENT}
		query GetPosts(
			$authorIn: [ID] = ""
			$categoryIn: [ID] = ""
			$tagIn: [ID] = ""
			$search: String = ""
			$parentIn: [ID] = ""
			$first: Int = 10
			$field: PostObjectsConnectionOrderbyEnum = AUTHOR
			$order: OrderEnum = ASC
		) {
			posts(
				where: {
					authorIn: $authorIn
					categoryIn: $categoryIn
					tagIn: $tagIn
					search: $search
					parentIn: $parentIn
					orderby: { field: $field, order: $order }
				}
				first: $first
			) {
				edges {
					node {
						id
						link
						date
						featuredImage {
							node {
								...CoreImageFields
							}
						}
					}
				}
			}
		}
	`;
	const { loading, error, data } = useQuery<ListPostsGQLResultData>(gqlQuery, {
		variables: variablesUseNow || variables,
	});

	const dataLists = data?.posts?.edges || [];

	//
	// const handleClickTab = (tab: -1 | HeaderSectionFilterTabs) => {
	// 	if (tab === -1) {
	// 		setTabActiveId(tab);
	// 		return;
	// 	}
	// 	if (tab.id === tabActiveId) {
	// 		return;
	// 	}
	// 	setTabActiveId(tab.id);
	// };

	return {
		variables,
		loading,
		error,
		data,
		dataLists,
	};
}
