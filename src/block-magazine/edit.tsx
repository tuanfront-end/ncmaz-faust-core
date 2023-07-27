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

const SectionMagazine1Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine1")
);
const SectionMagazine2Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine2")
);
const SectionMagazine3Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine3")
);
const SectionMagazine4Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine4")
);
const SectionMagazine5Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine5")
);
const SectionMagazine6Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine6")
);
const SectionMagazine7Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine7")
);
const SectionMagazine8Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine8")
);
const SectionMagazine9Lazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionMagazine9")
);
const SectionLargeSliderLazy = lazy(
	() => import("../frontend-components/SectionMagazines/SectionLargeSlider")
);

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

		console.log(1, {
			node,
			uniqueId,
			a: `#block-${clientId} .ncmazfc-block-magazine__content`,
			dataInitPosts,
			dataInitErrors,
		});
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
		console.log(11, { dataLists });

		return <DemoListPosts posts={dataLists} />;

		switch (blockVariation) {
			case "magazine-1":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine1Lazy posts={dataLists} />
					</Suspense>
				);
			case "magazine-2":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine2Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-3":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine3Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-4":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine4Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-5":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine5Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-6":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine6Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-7":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine7Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-8":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine8Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-9":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine9Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "large-slider":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionLargeSliderLazy activePosts={dataLists} />
					</Suspense>
				);

			default:
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine1Lazy posts={dataLists} />
					</Suspense>
				);
		}
	};

	const renderPost = (post: any) => {
		return (
			<div>
				<h3>{post.title}</h3>
				<p>{post.excerpt}</p>
			</div>
		);
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
							options={[
								{ label: "Style 1", value: "style-1" },
								{ label: "Style 2", value: "style-2" },
								{ label: "Style 3", value: "style-3" },
								{ label: "Style 4", value: "style-4" },
								{ label: "Style 5", value: "style-5" },
								{ label: "Style 6", value: "style-6" },
								{ label: "Style 7", value: "style-7" },
								{ label: "Style 8", value: "style-8" },
								{ label: "Style 9", value: "style-9" },
								{ label: "Style 10", value: "style-10" },
							]}
							onChange={(blockVariation) => setAttributes({ blockVariation })}
						/>

						<TextControl
							label={__("View more href", "ncmazfc")}
							value={viewMoreHref}
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
