import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { graphql } from "../__generated__";
import { BlockTerms_Attrs } from "../block-terms/attributes";

export const ANKJABCJBA = graphql(/* GraphQL */ `
	fragment Abcsahfkhafe on TermNode {
		__typename
		databaseId
		description
		link
		taxonomyName
	}
`);

const termsWithVariablesQueryDocument = graphql(/* GraphQL */ `
	query termsWithVariablesQuery(
		$first: Int = 10
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$taxonomies: [TaxonomyEnum] = CATEGORY
	) {
		terms(
			where: { taxonomies: $taxonomies, orderby: $orderby, order: $order }
			first: $first
		) {
			edges {
				node {
					__typename
					id
					count
					...Abcsahfkhafe
				}
			}
		}
	}
`);
// ...NcmazFcTermCardFields

export default function useTermGqlQuery(attributes: BlockTerms_Attrs) {
	const {
		blockVariation,
		numberOfTags,
		showTagCounts,
		taxonomy,
		uniqueId,
		order,
		orderBy,
	} = attributes;
	//
	let variables = {};
	//

	// CATEGORIES
	variables = {
		order,
		orderby: orderBy,
		first: Number(numberOfTags),
		taxonomies: taxonomy,
	};

	// =================== QUERY GRAPHQL ===================
	const { loading, error, data } = useQuery(termsWithVariablesQueryDocument, {
		variables,
	});

	const dataLists: any[] = data?.terms?.edges || [];

	return {
		variables,
		loading,
		error,
		data,
		dataLists,
	};
}
