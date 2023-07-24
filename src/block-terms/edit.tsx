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
import { store as coreStore } from "@wordpress/core-data";
import { withSelect } from "@wordpress/data";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { ContainerEditProps } from "../types";
import { BlockTerms_Attrs } from "./attributes";
import useTermGqlQuery from "../hooks/useTermGqlQuery";
import TermOrderControl from "./order-control";
import SectionSliderNewCategories from "../frontend-components/SectionSliderNewCategories/SectionSliderNewCategories";

const MIN_TAGS = 1;
const MAX_TAGS = 100;

const Edit: FC<ContainerEditProps<BlockTerms_Attrs>> = (props) => {
	const { attributes, setAttributes } = props;

	const {
		blockVariation,
		numberOfTags,
		showTagCounts,
		taxonomy,
		uniqueId,
		order,
		orderBy,
	} = attributes;

	const { data, dataLists, error, loading, variables } =
		useTermGqlQuery(attributes);

	// ---- SAVE initPosts ----
	useEffect(() => {
		if (loading) {
			return;
		}
		console.log(999, "__terms___", {
			loading,
			error,
			data,
			variables,
			dataLists,
		});
		setAttributes({
			initTerms: dataLists,
		});
	}, [loading]);

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
				<div className="space-y-2.5">
					{loading && <p>{__("Loading…")}</p>}
					{error && (
						<pre>
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}
				</div>

				<SectionSliderNewCategories
					terms={data?.terms?.edges || []}
					categoryCardType="card4"
				/>
			</div>
		</>
	);
};

// @ts-ignore
export default Edit;
