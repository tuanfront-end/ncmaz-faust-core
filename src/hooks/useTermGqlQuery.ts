import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { graphql } from "../__generated__";
import { BlockTerms_Attrs } from "../block-terms/attributes";

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
					name
					slug
					databaseId
					description
					link
					taxonomyName
					... on Category {
						id
						name
						ncTaxonomyMeta {
							color
							featuredImage {
								...NcmazFcImageFields
							}
						}
					}
					... on Tag {
						id
						name
						ncTaxonomyMeta {
							color
							featuredImage {
								...NcmazFcImageFields
							}
						}
					}
				}
			}
		}
	}
`);

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

	const dataLists = data?.terms?.edges || [];

	return {
		variables,
		loading,
		error,
		data,
		dataLists,
	};
}
