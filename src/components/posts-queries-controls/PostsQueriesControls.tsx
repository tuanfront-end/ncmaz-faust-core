/**
 * WordPress dependencies
 */
import {
	PanelBody,
	TextControl,
	RangeControl,
	ToggleControl,
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
	order: "ASC" | "DESC";
	orderBy: "DATE" | "TITLE" | "COMMENT_COUNT";
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
	order: "DESC",
	orderBy: "DATE",
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
		exclude,
		offset,
		pages,
		perPage,
		search,
	} = query;
	// const allowedControls = useAllowedControls({ query: attributes });
	const taxonomies = useTaxonomies(postType);
	const isPostTypeHierarchical = useIsPostTypeHierarchical(postType);

	const [querySearch, setQuerySearch] = useState(search);
	const onChangeDebounced = useCallback(
		debounce(() => {
			if (query.search !== querySearch) {
				setQuery({ search: querySearch });
			}
		}, 250),
		[querySearch, query.search],
	);
	useEffect(() => {
		onChangeDebounced();
		return onChangeDebounced.cancel;
	}, [querySearch, onChangeDebounced]);
	const showInheritControl = false;
	const showOrderControl = true;

	const showTaxControl = !!taxonomies?.length;
	const showAuthorControl = true;
	const showSearchControl = true;
	const showParentControl = isPostTypeHierarchical;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					{showInheritControl && (
						<ToggleControl
							__nextHasNoMarginBottom
							label={__("Inherit query from template")}
							help={__(
								"Toggle to use the global query context that is set with the current template, such as an archive or search. Disable to customize the settings independently.",
							)}
							checked={!!inherit}
							onChange={(value) => setQuery({ inherit: !!value })}
						/>
					)}

					{showOrderControl && (
						<OrderControl {...{ order, orderBy }} onChange={setQuery} />
					)}

					<RangeControl
						__nextHasNoMarginBottom
						label={__("Number of posts")}
						value={perPage || undefined}
						onChange={(value) => setQuery({ perPage: value })}
						min={0}
						max={25}
						required
					/>
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
							<span className="text-xs block mt-1 text-slate-500">
								{__(
									"Currently, NcmazFaust only supports filtering data for Category and Tag. If you want support for custom taxonomy, please contact support.",
								)}
							</span>
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
