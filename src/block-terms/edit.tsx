/**
 * WordPress dependencies
 */
import React, { FC, useEffect, useState, useRef } from "react";
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
import BlockEmptyPlaceholder from "../components/BlockEmptyPlaceholder";

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

	const [initTermsFromSSR, setInitTermsFromSSR] = useState<
		NcmazFcTermsCardFieldsFragment["nodes"] | null
	>(null);
	const [initErrorFromSSR, setInitErrorFromSSR] = useState<string | null>(null);
	const SERVER_SIDE_ID = "ncmazfcSSR-block-" + clientId;
	const observerRef = useRef<MutationObserver | null>(null);
	// ---- SAVE uniqueId ----
	useEffect(() => {
		setAttributes({ uniqueId: clientId });
	}, []);

	const getTermsDataFromSeverSideRenderNode = (wrapNode: HTMLElement) => {
		const node = wrapNode.querySelector(
			".ncmazfc-block-content-common-class"
		) as HTMLElement | null;

		const dataInitTerms =
			node?.getAttribute("data-ncmazfc-init-terms") || "null";
		const dataInitErrors =
			node?.getAttribute("data-ncmazfc-init-errors") || "null";

		return {
			initTerms: JSON.parse(
				dataInitTerms
			) as NcmazFcTermsCardFieldsFragment["nodes"],
			initErrors: JSON.parse(dataInitErrors),
		};
	};

	useEffect(() => {
		const targetNode = document.getElementById(SERVER_SIDE_ID);
		if (!targetNode) return;

		// Options for the observer (which mutations to observe)
		const config = { childList: true };

		// Callback function to execute when mutations are observed
		const callback = (mutationList, observer) => {
			for (const mutation of mutationList) {
				if (mutation.type === "childList") {
					console.log(99, "__Term block - child node has been updated.", {
						mutation,
					});
					const { initErrors, initTerms } = getTermsDataFromSeverSideRenderNode(
						mutation.target
					);
					setInitErrorFromSSR(initErrors);
					setInitTermsFromSSR(initTerms);
					if (!!initErrors || !!initTerms) {
						console.log(123, "___Term blokc-disconnect___.", {
							mutation,
						});
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
	}, [numberOfTags, showTagCounts, taxonomy, uniqueId, order, orderBy]);

	const renderLayoutType = () => {
		const dataLists = initTermsFromSSR;
		if (!dataLists) {
			return null;
		}
		if (!dataLists?.length) {
			return <BlockEmptyPlaceholder />;
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
						help={
							<div>
								(**) Select variation to change the layout and card style of the
								block. The editor preview of the variants is currently under
								construction, so you won't notice the change here, but it will
								be changed and applied in the client UI. Sorry for the
								inconvenience, you can check out the{" "}
								<a
									href="https://ncmaz-faust.vercel.app/blocks-variations-review/"
									target="_blank"
									rel="noopener noreferrer"
									className="underline text-blue-400"
								>
									styling of the variations here
								</a>
							</div>
						}
						onChange={(blockVariation) => setAttributes({ blockVariation })}
					>
						<optgroup label="Grid">
							<option value="grid-1">Grid 1</option>
							<option value="grid-2">Grid 2</option>
							<option value="grid-3">Grid 3</option>
							<option value="grid-4">Grid 4</option>
							<option value="grid-5">Grid 5</option>
						</optgroup>

						<optgroup label="Slider">
							<option value="slider-1">Slider 1</option>
							<option value="slider-2">Slider 2</option>
							<option value="slider-3">Slider 3</option>
							<option value="slider-4">Slider 4</option>
							<option value="slider-5">Slider 5</option>
						</optgroup>
					</SelectControl>
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
				{initErrorFromSSR && (
					<div className="text-red-500 text-sm">
						<h3>Error!</h3>
						<pre>
							<code>{JSON.stringify(initErrorFromSSR, null, 2)}</code>
						</pre>
					</div>
				)}
				{initTermsFromSSR && renderLayoutType()}

				<div id={SERVER_SIDE_ID}>
					<ServerSideRender
						block="ncmaz-faust/block-terms"
						attributes={attributes}
						httpMethod="POST"
						LoadingResponsePlaceholder={BlockLoadingPlaceholder}
						EmptyResponsePlaceholder={() => <div />}
					/>
				</div>
			</div>
		</>
	);
};

// @ts-ignore
export default Edit;
