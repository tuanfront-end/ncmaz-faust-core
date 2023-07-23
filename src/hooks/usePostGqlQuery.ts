import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { PostsQueriesControlsType } from "../components/posts-queries-controls/PostsQueriesControls";
import { POST_COMMONT_FIELDS, XXXXXXX } from "../contains/contants";
import { RootQueryToPostConnection } from "../__generated__/graphql";
import { graphql } from "../__generated__/";
import { NC_POST_CARD_FRAGMENT } from "../fragments";

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

	const NC_POST_CARD_FRAGMENT = graphql(/* GraphQL */ `
		fragment XXXXXXXXXXXX on MediaItem {
			altText
			authorId
			caption
			id
		}
	`);

	// =================== QUERY GRAPHQL ===================

	const postsWithVariablesQueryDocument = graphql(/* GraphQL */ `
		query postsWithVariablesQuery(
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
						status
						featuredImage {
							node {
								...XXXXXXXXXXXX
							}
						}
					}
				}
			}
		}
	`);

	const { loading, error, data } = useQuery(postsWithVariablesQueryDocument, {
		variables,
	});

	const dataLists = data?.posts?.edges || [];
	console.log(dataLists[0].node.featuredImage?.node);

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
