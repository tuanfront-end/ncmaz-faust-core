import React, { useRef, useState, FC, useEffect } from "react";
import { __ } from "@wordpress/i18n";
import { FormToggle, PanelBody, SelectControl } from "@wordpress/components";
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
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import classNames from "../utils/className";
import { PostRoot } from "./type";

const Edit: FC<ContainerEditProps<BlockMagazine_Attrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;

	//
	const {
		uniqueId,
		blockVariation,
		queries,
		showLoadMore,
		hasBackground,
		showViewAll,
	} = attributes;
	const observerRef = useRef<MutationObserver | null>(null);

	const [initPostsFromSSR, setInitPostsFromSSR] = useState<PostRoot[] | null>(
		null,
	);
	const [initErrorFromSSR, setInitErrorFromSSR] = useState<string | null>(null);
	const SERVER_SIDE_ID = "ncmazfcSSR-block-" + clientId;

	// ---- SAVE uniqueId ----
	useEffect(() => {
		setAttributes({ uniqueId: clientId });
	}, []);

	const getPostsDataFromSeverSideRenderNode = (wrapNode: HTMLElement) => {
		//
		const node = wrapNode.querySelector(
			"div[data-block-json-wrap]",
		) as HTMLElement | null;

		const dataObject = JSON.parse(node?.textContent || "{}") as {
			block_posts: PostRoot[];
			errors: string;
		};

		return {
			initPosts: dataObject?.block_posts || null,
			initErrors: dataObject?.errors || null,
		};
	};

	useEffect(() => {
		// Select the node that will be observed for mutations
		const targetNode = document.getElementById(SERVER_SIDE_ID);
		if (!targetNode) return;

		// Options for the observer (which mutations to observe)
		const config = { childList: true };

		// Callback function to execute when mutations are observed
		const callback = (mutationList, observer) => {
			for (const mutation of mutationList) {
				if (mutation.type === "childList") {
					const { initErrors, initPosts } = getPostsDataFromSeverSideRenderNode(
						mutation.target,
					);
					setInitPostsFromSSR(initPosts);
					setInitErrorFromSSR(initErrors);
					if (!!initErrors || !!initPosts) {
						observer.disconnect();
						observerRef.current = null;
					}
				}
			}
		};
		if (!observerRef.current) {
			observerRef.current = new MutationObserver(callback);
			observerRef.current.observe(targetNode, config);
		}
	}, [queries]);

	// reder
	const renderLayoutType = () => {
		if (!initPostsFromSSR?.length) {
			return <BlockEmptyPlaceholder />;
		}
		return (
			<DemoListPosts
				posts={initPostsFromSSR}
				clientId={clientId}
				blockVariation={blockVariation}
			/>
		);
	};

	const renderContent = () => {
		return (
			<div className={`ncmazfc-block-magazine relative `}>
				{initErrorFromSSR && (
					<div className="text-red-500 text-sm p-10 bg-slate-100">
						<strong>
							{__("Error when fetching posts data from SSR", "ncmazfc")}
						</strong>
						<pre className="text-xs">
							<code>{JSON.stringify(initErrorFromSSR, null, 2)}</code>
						</pre>
					</div>
				)}

				{renderLayoutType()}

				<div id={SERVER_SIDE_ID}>
					<ServerSideRender
						block="ncmaz-faust/block-magazine"
						attributes={{ uniqueId, queries }}
						httpMethod="POST"
						LoadingResponsePlaceholder={() => (
							<div className="absolute bg-black/10 -inset-2.5 flex items-center justify-center">
								<BlockLoadingPlaceholder />
							</div>
						)}
						EmptyResponsePlaceholder={() => <BlockEmptyPlaceholder />}
					/>
				</div>
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
							help={
								<div>
									To get a live preview of the styles of the different variants,
									make sure to set{" "}
									<a
										href="https://faustjs.org/tutorial/get-started-with-faust#set-your-front-end-site-url"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-green-600"
									>
										the frontend site URL
									</a>{" "}
									in the Faust WordPress Plugin Settings. <br />
									Or you can check out the{" "}
									<a
										href="https://ncmaz-faust-delta.vercel.app/magazine-variations-preview/"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-blue-400"
									>
										styling of the variations here
									</a>
								</div>
							}
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
								<option value="magazine-11">Magazine 11</option>
								<option value="magazine-12">Magazine 12</option>
								<option value="magazine-13">Magazine 13</option>
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
							</optgroup>

							<optgroup label="Slider">
								<option value="slider-1">Slider 1</option>
								<option value="slider-2">Slider 2</option>
								<option value="slider-3">Slider 3</option>
								<option value="slider-4">Slider 4</option>
								<option value="slider-5">Slider 5</option>
								<option value="slider-6">Slider 6</option>
							</optgroup>
						</SelectControl>

						<div>
							<div className="flex gap-3">
								<FormToggle
									checked={showViewAll}
									onChange={() => setAttributes({ showViewAll: !showViewAll })}
									name="showViewAll"
									id="showViewAll"
								/>
								<label htmlFor="showViewAll">
									{__("Show View All button", "ncmazfc")}
								</label>
							</div>
							{!!showViewAll && (
								<i className="text-xs italic block mt-1">
									{__(
										"(You can see the View All button in the frontend page!)",
										"ncmazfc",
									)}
								</i>
							)}
						</div>

						<div>
							<div className="flex gap-3">
								<FormToggle
									checked={showLoadMore}
									onChange={() =>
										setAttributes({ showLoadMore: !showLoadMore })
									}
									name="showLoadMore"
									id="showLoadMore"
								/>
								<label htmlFor="showLoadMore">
									{__("Show Load More button", "ncmazfc")}
								</label>
							</div>
							{!!showLoadMore && (
								<i className="text-xs italic block mt-1">
									{__(
										"(You can see the Load more button in the frontend page!)",
										"ncmazfc",
									)}
								</i>
							)}
						</div>

						<div className="w-full gap-3 flex ">
							<FormToggle
								checked={hasBackground}
								onChange={() =>
									setAttributes({ hasBackground: !hasBackground })
								}
							/>
							<legend>{__("Enable Background", "ncmazfc")}</legend>
						</div>
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
			<div
				{...useBlockProps({
					className: classNames(
						"not-prose",
						hasBackground ? "relative py-16" : "",
					),
				})}
			>
				{hasBackground ? <BackgroundSection /> : null}
				{renderContent()}
			</div>
		</>
	);
};

export default Edit;
