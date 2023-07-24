import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { PostsQueriesControlsType } from "../components/posts-queries-controls/PostsQueriesControls";
import { NcmazFcPostsEdegsFieldsFragment } from "../__generated__/graphql";
import { graphql } from "../__generated__/";

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
			...NcmazFcPostsEdegsFields
		}
	}
`);

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

	//
	const variables = {
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

	// =================== QUERY GRAPHQL ===================

	const { loading, error, data } = useQuery(postsWithVariablesQueryDocument, {
		variables,
	});

	//
	const dataLists: NcmazFcPostsEdegsFieldsFragment["edges"] =
		// @ts-ignore
		data?.posts?.edges || [];

	return {
		variables,
		loading,
		error,
		data,
		dataLists,
	};
}
