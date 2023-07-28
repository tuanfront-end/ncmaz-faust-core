/**
 * WordPress dependencies
 */
import React, { FC, useEffect } from "react";
import {
	PanelBody,
	ToggleControl,
	SelectControl,
	RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { ContainerEditProps } from "../types";
import { BlockTerms_Attrs } from "./attributes";
import TermOrderControl from "./order-control";
import ServerSideRender from "@wordpress/server-side-render";
import BlockLoadingPlaceholder from "../components/BlockLoadingPlaceholder";
import DemoTermsList from "./DemoTermsList";
import { NcmazFcTermsCardFieldsFragment } from "../__generated__/graphql";

const MIN_TAGS = 1;
const MAX_TAGS = 100;

const Edit: FC<ContainerEditProps<BlockTerms_Attrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;

	const {
		blockVariation,
		numberOfTags,
		showTagCounts,
		taxonomy,
		uniqueId,
		order,
		orderBy,
	} = attributes;

	// ---- SAVE uniqueId ----
	useEffect(() => {
		setAttributes({ uniqueId: clientId });
	}, []);

	const getTermsDataFromSeverSideRenderNode = () => {
		const node = document.querySelector(
			`#block-${clientId} .ncmazfc-block-terms__content`
		) as HTMLElement | null;

		const dataInitTerms =
			node?.getAttribute("data-ncmazfc-init-terms") || "null";
		const dataInitErrors =
			node?.getAttribute("data-ncmazfc-init-errors") || "null";

		console.log(1111, {
			node,
			uniqueId,
			a: `#block-${clientId} .ncmazfc-block-terms__content`,
			dataInitTerms,
			initTerms: JSON.parse(dataInitTerms),
			initErrors: JSON.parse(dataInitErrors),
		});
		return {
			initTerms: JSON.parse(
				dataInitTerms
			) as NcmazFcTermsCardFieldsFragment["edges"],
			initErrors: JSON.parse(dataInitErrors),
		};
	};

	const data = getTermsDataFromSeverSideRenderNode();

	const renderLayoutType = () => {
		const dataLists = data?.initTerms;
		if (!dataLists?.length) {
			return null;
		}

		return <DemoTermsList terms={dataLists || []} />;
	};

	// render
	const inspectorControls = (
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
				</div>
			</PanelBody>
			<PanelBody title={__("Settings")}>
				<SelectControl
					__nextHasNoMarginBottom
					label={__("Taxonomy")}
					options={[
						{ label: "CATEGORY", value: "CATEGORY" },
						{ label: "POSTFORMAT", value: "POSTFORMAT" },
						{ label: "TAG", value: "TAG" },
					]}
					value={taxonomy}
					onChange={(selectedTaxonomy) =>
						setAttributes({
							taxonomy: selectedTaxonomy as BlockTerms_Attrs["taxonomy"],
						})
					}
				/>

				<TermOrderControl
					{...{ order, orderBy }}
					onChange={({ order, orderBy }) => {
						setAttributes({ order, orderBy });
					}}
				/>

				<ToggleControl
					__nextHasNoMarginBottom
					label={__("Show post counts")}
					checked={showTagCounts}
					onChange={() => setAttributes({ showTagCounts: !showTagCounts })}
				/>
				<RangeControl
					__nextHasNoMarginBottom
					label={__("Number of tags")}
					value={numberOfTags}
					onChange={(value) => setAttributes({ numberOfTags: value })}
					min={MIN_TAGS}
					max={MAX_TAGS}
					required
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{inspectorControls}
			<div {...useBlockProps()}>
				{renderLayoutType()}

				{!!data?.initErrors && !data?.initTerms && (
					<div>
						<h2>Error!</h2>
						<pre>
							<code>{JSON.stringify(data?.initErrors, null, 2)}</code>
						</pre>
					</div>
				)}

				<ServerSideRender
					block="ncmaz-faust/block-terms"
					attributes={attributes}
					httpMethod="POST"
					LoadingResponsePlaceholder={BlockLoadingPlaceholder}
				/>
			</div>
		</>
	);
};

// @ts-ignore
export default Edit;
