/**
 * WordPress dependencies
 */
import React, { FC, useEffect, useState, useRef } from "react";
import {
	PanelBody,
	ToggleControl,
	SelectControl,
	RangeControl,
	FormToggle,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { ContainerEditProps } from "../types";
import { BlockTerms_Attrs } from "./attributes";
import TermOrderControl from "./order-control";
import ServerSideRender from "@wordpress/server-side-render";
import BlockLoadingPlaceholder from "../components/BlockLoadingPlaceholder";
import DemoTermsList from "./DemoTermsList";
import BlockEmptyPlaceholder from "../components/BlockEmptyPlaceholder";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import classNames from "../utils/className";

const MIN_TAGS = 1;
const MAX_TAGS = 80;

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
		hasBackground,
	} = attributes;

	const [initTermsFromSSR, setInitTermsFromSSR] = useState<any[] | null>(null);
	const [initErrorFromSSR, setInitErrorFromSSR] = useState<string | null>(null);
	const SERVER_SIDE_ID = "ncmazfcSSR-block-" + clientId;
	const observerRef = useRef<MutationObserver | null>(null);
	// ---- SAVE uniqueId ----
	useEffect(() => {
		setAttributes({ uniqueId: clientId });
	}, []);

	const getTermsDataFromSeverSideRenderNode = (wrapNode: HTMLElement) => {
		const node = wrapNode.querySelector(
			"div[data-block-json-wrap]",
		) as HTMLElement | null;

		const dataObject = JSON.parse(node?.textContent || "{}");

		return {
			initTerms: dataObject?.block_terms || null,
			initErrors: dataObject?.errors || null,
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
					const { initErrors, initTerms } = getTermsDataFromSeverSideRenderNode(
						mutation.target,
					);
					setInitErrorFromSSR(initErrors);
					setInitTermsFromSSR(initTerms);
					if (!!initErrors || !!initTerms) {
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

		return (
			<DemoTermsList
				terms={dataLists || []}
				clientId={clientId}
				blockVariation={blockVariation}
			/>
		);
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
									href="https://ncmaz-faust-delta.vercel.app/block-term-variations-preview"
									target="_blank"
									rel="noopener noreferrer"
									className="underline text-blue-400"
								>
									styling of the variations here
								</a>
							</div>
						}
						onChange={(value) => {
							setAttributes({ blockVariation: value });
							console.log(value);
						}}
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
					<div className="w-full space-x-3 flex ">
						<FormToggle
							checked={hasBackground}
							onChange={() => setAttributes({ hasBackground: !hasBackground })}
						/>
						<legend>{__("Enable Background", "ncmazfc")}</legend>
					</div>
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

	const renderContent = () => {
		return (
			<div className="relative">
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
				{initTermsFromSSR && renderLayoutType()}

				<div id={SERVER_SIDE_ID}>
					<ServerSideRender
						block="ncmaz-faust/block-terms"
						attributes={attributes}
						httpMethod="POST"
						LoadingResponsePlaceholder={() => (
							<div className="absolute bg-black/10 -inset-2.5 flex items-center justify-center">
								<BlockLoadingPlaceholder />
							</div>
						)}
						EmptyResponsePlaceholder={() => <div />}
					/>
				</div>
			</div>
		);
	};

	return (
		<>
			{inspectorControls}

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

// @ts-ignore
export default Edit;
