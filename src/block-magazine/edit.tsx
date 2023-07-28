import React, { lazy, Suspense, FC, useEffect } from "react";
import { __ } from "@wordpress/i18n";
import {
	TextControl,
	PanelBody,
	SelectControl,
	Spinner,
} from "@wordpress/components";
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { ContainerEditProps } from "../types";
import { BlockMagazine_Attrs } from "./attributes";
import PostsQueriesControls from "../components/posts-queries-controls/PostsQueriesControls";
import QueryToolbar from "./query-toolbar";
import ServerSideRender from "@wordpress/server-side-render";
import BlockLoadingPlaceholder from "../components/BlockLoadingPlaceholder";
import BlockEmptyPlaceholder from "../components/BlockEmptyPlaceholder";
import DemoListPosts from "./DemoListPosts";

const Edit: FC<ContainerEditProps<BlockMagazine_Attrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;

	//
	const { uniqueId, showFilterTab, viewMoreHref, blockVariation, queries } =
		attributes;

	// ---- SAVE uniqueId ----
	useEffect(() => {
		setAttributes({ uniqueId: clientId });
	}, []);

	const getPostsDataFromSeverSideRenderNode = () => {
		const node = document.querySelector(
			`#block-${clientId} .ncmazfc-block-magazine__content`
		) as HTMLElement | null;

		const dataInitPosts =
			node?.getAttribute("data-ncmazfc-init-posts") || "null";
		const dataInitErrors =
			node?.getAttribute("data-ncmazfc-init-errors") || "null";

		// console.log(1, {
		// 	node,
		// 	uniqueId,
		// 	a: `#block-${clientId} .ncmazfc-block-magazine__content`,
		// 	dataInitPosts,
		// 	dataInitErrors,
		// });
		return {
			initPosts: JSON.parse(dataInitPosts),
			initErrors: JSON.parse(dataInitErrors),
		};
	};

	const data = getPostsDataFromSeverSideRenderNode();

	const renderLayoutType = () => {
		if (!data?.initPosts?.length) {
			return null;
		}

		const dataLists = data?.initPosts;
		// console.log(11, { dataLists });

		return <DemoListPosts posts={dataLists} />;
	};

	const renderContent = () => {
		return (
			<div className={`ncmazfc-block-magazine relative `}>
				{/* {showFilterTab && !!categories?.length ? (
					<HeaderSectionFilter
						tabActiveId={tabActiveId}
						tabs={categories}
						viewMoreHref={viewMoreHref}
						heading={heading}
						subHeading={subHeading}
						onClickTab={handleClickTab}
					/>
				) : (
					<Heading desc={subHeading}>{heading}</Heading>
				)} */}

				{renderLayoutType()}

				{!!data?.initErrors && !data?.initPosts && (
					<div>
						<h2>Error!</h2>
						<pre>
							<code>{JSON.stringify(data?.initErrors, null, 2)}</code>
						</pre>
					</div>
				)}
				<ServerSideRender
					block="ncmaz-faust/block-magazine"
					attributes={attributes}
					httpMethod="POST"
					LoadingResponsePlaceholder={BlockLoadingPlaceholder}
				/>
			</div>
		);
	};
	//
	return (
		<>
			<InspectorControls>
				<PanelBody title="Layout">
					<div className="space-y-2.5">
						<SelectControl
							label={__("Select block's variation", "ncmazfc")}
							value={blockVariation}
							onChange={(blockVariation) => setAttributes({ blockVariation })}
							help={__(
								"Select a layout for the block. For preview of each layout, please visit the preview page.",
								"ncmazfc"
							)}
						>
							<optgroup label="Magazine">
								<option value="magazine-1">Magazine 1</option>
								<option value="magazine-2">Magazine 2</option>
								<option value="magazine-3">Magazine 3</option>
								<option value="magazine-4">Magazine 4</option>
								<option value="magazine-5">Magazine 5</option>
								<option value="magazine-6">Magazine 6</option>
								<option value="magazine-7">Magazine 7</option>
								<option value="magazine-8">Magazine 8</option>
								<option value="magazine-9">Magazine 9</option>
								<option value="magazine-10">Magazine 10</option>
							</optgroup>

							<optgroup label="Grid">
								<option value="grid-1">Grid 1</option>
								<option value="grid-2">Grid 2</option>
								<option value="grid-3">Grid 3</option>
								<option value="grid-4">Grid 4</option>
								<option value="grid-5">Grid 5</option>
								<option value="grid-6">Grid 6</option>
								<option value="grid-7">Grid 7</option>
								<option value="grid-8">Grid 8</option>
								<option value="grid-9">Grid 9</option>
								<option value="grid-10">Grid 10</option>
							</optgroup>

							<optgroup label="List">
								<option value="list-1">List 1</option>
								<option value="list-2">List 2</option>
								<option value="list-3">List 3</option>
								<option value="list-4">List 4</option>
								<option value="list-5">List 5</option>
								<option value="list-6">List 6</option>
								<option value="list-7">List 7</option>
								<option value="list-8">List 8</option>
								<option value="list-9">List 9</option>
								<option value="list-10">List 10</option>
							</optgroup>
						</SelectControl>

						<TextControl
							label={__("View more href", "ncmazfc")}
							value={viewMoreHref || ""}
							type="url"
							onChange={(viewMoreHref) => setAttributes({ viewMoreHref })}
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<PostsQueriesControls
				attributes={queries}
				setQuery={(query) => {
					setAttributes({ queries: { ...queries, ...query } });
				}}
			/>
			{/* @ts-ignore */}
			<BlockControls group="block">
				<QueryToolbar
					query={queries}
					setQuery={(query) => {
						setAttributes({ queries: { ...queries, ...query } });
					}}
				/>
			</BlockControls>

			{/* edit content render */}
			<div {...useBlockProps()}>{renderContent()}</div>
		</>
	);
};

export default Edit;
