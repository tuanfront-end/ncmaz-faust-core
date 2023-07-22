/**
 * WordPress dependencies
 */
import {
	PanelBody,
	TextControl,
	SelectControl,
	RangeControl,
	ToggleControl,
	Notice,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { debounce } from "@wordpress/compose";
import React, { useEffect, useState, useCallback } from "react";

/**
 * Internal dependencies
 */
import OrderControl from "./order-control";
import AuthorControl from "./author-control";
import ParentControl from "./parent-control";
import { TaxonomyControls } from "./taxonomy-controls";
import StickyControl from "./sticky-control";
import {
	usePostTypes,
	useIsPostTypeHierarchical,
	useTaxonomies,
} from "./utils";

export interface PostsQueriesControlsType {
	perPage: number | null;
	// max page to show
	pages: number;
	offset: number;
	postType: string;
	order: string;
	orderBy: string;
	// multi author will separate by comma
	author: string;
	search: string;
	exclude: number[];
	sticky: string;
	inherit: boolean;
	parents: number[];
	taxQuery: {
		[taxonomySlug: string]: number[];
	} | null;
}

export const PostsQueriesControls_DEMO_DATA: PostsQueriesControlsType = {
	pages: 0,
	perPage: null,
	offset: 0,
	postType: "post",
	order: "desc",
	orderBy: "date",
	author: "",
	search: "",
	exclude: [],
	sticky: "",
	inherit: true,
	taxQuery: null,
	parents: [],
};

const PostsQueriesControls = ({
	attributes,
	setQuery,
}: {
	attributes: PostsQueriesControlsType;
	setQuery: (query: Partial<PostsQueriesControlsType>) => void;
}) => {
	// const { query, displayLayout } = attributes;
	const query = attributes;
	const {
		order,
		orderBy,
		author: authorIds,
		postType,
		sticky,
		inherit,
		taxQuery,
		parents,
	} = query;
	// const allowedControls = useAllowedControls({ query: attributes });
	const [showSticky, setShowSticky] = useState(postType === "post");
	const { postTypesTaxonomiesMap, postTypesSelectOptions } = usePostTypes();
	const taxonomies = useTaxonomies(postType);
	const isPostTypeHierarchical = useIsPostTypeHierarchical(postType);
	useEffect(() => {
		setShowSticky(postType === "post");
	}, [postType]);
	const onPostTypeChange = (newValue) => {
		const updateQuery: Partial<PostsQueriesControlsType> = {
			postType: newValue,
		};
		// We need to dynamically update the `taxQuery` property,
		// by removing any not supported taxonomy from the query.
		const supportedTaxonomies = postTypesTaxonomiesMap[newValue];
		const updatedTaxQuery = Object.entries(taxQuery || {}).reduce(
			(accumulator, [taxonomySlug, terms]) => {
				if (supportedTaxonomies.includes(taxonomySlug)) {
					accumulator[taxonomySlug] = terms;
				}
				return accumulator;
			},
			{}
		);
		updateQuery.taxQuery = !!Object.keys(updatedTaxQuery).length
			? updatedTaxQuery
			: undefined;

		if (newValue !== "post") {
			updateQuery.sticky = "";
		}
		// We need to reset `parents` because they are tied to each post type.
		updateQuery.parents = [];
		setQuery({
			...query,
			...updateQuery,
		});
	};
	const [querySearch, setQuerySearch] = useState(query.search);
	const onChangeDebounced = useCallback(
		debounce(() => {
			if (query.search !== querySearch) {
				setQuery({ search: querySearch });
			}
		}, 250),
		[querySearch, query.search]
	);
	useEffect(() => {
		onChangeDebounced();
		return onChangeDebounced.cancel;
	}, [querySearch, onChangeDebounced]);
	const showInheritControl = false;
	const showPostTypeControl = true;
	const showOrderControl = true;
	const showStickyControl = true;
	const showSettingsPanel =
		showInheritControl ||
		showPostTypeControl ||
		showOrderControl ||
		showStickyControl;
	const showTaxControl = !!taxonomies?.length;
	const showAuthorControl = true;
	const showSearchControl = true;
	const showParentControl = isPostTypeHierarchical;

	const showFiltersPanel =
		showTaxControl ||
		showAuthorControl ||
		showSearchControl ||
		showParentControl;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					{showInheritControl && (
						<ToggleControl
							__nextHasNoMarginBottom
							label={__("Inherit query from template")}
							help={__(
								"Toggle to use the global query context that is set with the current template, such as an archive or search. Disable to customize the settings independently."
							)}
							checked={!!inherit}
							onChange={(value) => setQuery({ inherit: !!value })}
						/>
					)}
					{showPostTypeControl && (
						<SelectControl
							__nextHasNoMarginBottom
							options={postTypesSelectOptions}
							value={postType}
							label={__("Post type")}
							onChange={onPostTypeChange}
							help={__(
								"WordPress contains different types of content and they are divided into collections called “Post types”. By default there are a few different ones such as blog posts and pages, but plugins could add more."
							)}
						/>
					)}

					{showOrderControl && (
						<OrderControl {...{ order, orderBy }} onChange={setQuery} />
					)}
					{showStickyControl && (
						<StickyControl
							value={sticky}
							onChange={(value) => setQuery({ sticky: value })}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<InspectorControls>
				<ToolsPanel
					className="block-library-query-toolspanel__filters"
					label={__("Filters")}
					resetAll={() => {
						setQuery({
							author: "",
							parents: [],
							search: "",
							taxQuery: null,
						});
						setQuerySearch("");
					}}
				>
					{showTaxControl && (
						<ToolsPanelItem
							label={__("Taxonomies")}
							hasValue={() =>
								Object.values(taxQuery || {}).some((terms) => !!terms.length)
							}
							onDeselect={() => setQuery({ taxQuery: null })}
						>
							<TaxonomyControls onChange={setQuery} query={query} />
						</ToolsPanelItem>
					)}
					{showAuthorControl && (
						<ToolsPanelItem
							hasValue={() => !!authorIds}
							label={__("Authors")}
							onDeselect={() => setQuery({ author: "" })}
						>
							<AuthorControl value={authorIds} onChange={setQuery} />
						</ToolsPanelItem>
					)}
					{showSearchControl && (
						<ToolsPanelItem
							hasValue={() => !!querySearch}
							label={__("Keyword")}
							onDeselect={() => setQuerySearch("")}
						>
							<TextControl
								__nextHasNoMarginBottom
								label={__("Keyword")}
								value={querySearch}
								onChange={setQuerySearch}
							/>
						</ToolsPanelItem>
					)}

					{/* Hierarchical post types can have descendants (like pages). */}
					{showParentControl && (
						<ToolsPanelItem
							hasValue={() => !!parents?.length}
							label={__("Parents")}
							onDeselect={() => setQuery({ parents: [] })}
						>
							<ParentControl
								parents={parents}
								postType={postType}
								onChange={setQuery}
							/>
						</ToolsPanelItem>
					)}
				</ToolsPanel>
			</InspectorControls>
		</>
	);
};

export default PostsQueriesControls;
