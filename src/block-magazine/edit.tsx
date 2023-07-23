import React, { lazy, Suspense, useEffect, FC } from "react";
import { __ } from "@wordpress/i18n";
import {
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	Spinner,
	Toolbar,
} from "@wordpress/components";
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import usePostGqlQuery from "../hooks/usePostGqlQuery";
import { ContainerEditProps } from "../types";
import { BlockMagazine_Attrs } from "./attributes";
import PostsQueriesControls from "../components/posts-queries-controls/PostsQueriesControls";
import QueryToolbar from "./query-toolbar";

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
	const { attributes, setAttributes } = props;

	//
	const {
		uniqueId,
		showFilterTab,
		viewMoreHref,
		blockVariation,
		queries,
		initPosts,
	} = attributes;

	const { variables, dataLists, error, loading, data } =
		usePostGqlQuery(queries);

	// ---- SAVE initPosts ----
	useEffect(() => {
		console.log(888, { loading, dataLists, error, data, variables });
		if (loading || error) {
			return;
		}

		setAttributes({
			initPosts: dataLists,
		});
	}, [error, loading, dataLists]);

	// ---- SAVE graphQLvariables ----
	// useEffect(() => {
	// 	if (!data) {
	// 		return;
	// 	}
	// 	setAttributes({
	// 		graphQLvariables: {
	// 			variables,
	// 			queryString: GQL_QUERY__string_text,
	// 		},
	// 		expectedNumberResults: dataLists.length || numberPerPage,
	// 	});
	// }, [data]);

	const renderLayoutType = () => {
		switch (blockVariation) {
			case "magazine-1":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine1Lazy activePosts={dataLists} />
					</Suspense>
				);
			case "magazine-2":
				return (
					<Suspense fallback={<Spinner />}>
						<SectionMagazine2Lazy activePosts={dataLists} />{" "}
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
						<SectionMagazine1Lazy activePosts={dataLists} />
					</Suspense>
				);
		}
	};

	const renderContent = () => {
		return (
			<div className={`nc-FactoryBlockMagazine relative `}>
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

				<div className="relative">
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}

					{!dataLists.length && !loading && <EmptyState />}
				</div>

				{renderLayoutType()}
			</div>
		);
	};
	//
	return (
		<div {...useBlockProps()}>
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

			{/* Content */}
			{/* {renderContent()} */}
		</div>
	);
};

export default Edit;
