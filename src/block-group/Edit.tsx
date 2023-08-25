import { __ } from "@wordpress/i18n";
import React, { lazy, Suspense, useEffect, FC } from "react";
import {
	InnerBlocks,
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { ContainerEditProps } from "../types";
import { BlockGroup_Attrs } from "./attributes";
import { FormToggle, PanelBody, SelectControl } from "@wordpress/components";
import classNames from "../utils/className";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";

const Edit: FC<ContainerEditProps<BlockGroup_Attrs & { align: string }>> = (
	props
) => {
	const { attributes, setAttributes } = props;
	const { align, hasBackground, variation } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Layout">
					<div className="space-y-4">
						<SelectControl
							label={__("Select block's variation", "ncmazfc")}
							value={variation}
							onChange={(variation) =>
								setAttributes({
									variation: variation as BlockGroup_Attrs["variation"],
								})
							}
							options={[
								{
									label: __("Style 1", "ncmazfc"),
									value: "style1",
								},
								{
									label: __("Style 2", "ncmazfc"),
									value: "style2",
								},
								{
									label: __("Style 3", "ncmazfc"),
									value: "style3",
								},
							]}
						></SelectControl>

						{/* <div className="flex justify-between gap-2">
							<label htmlFor="showHeading">
								{__("Show Heading", "ncmazfc")}
							</label>
							<FormToggle
								checked={showHeading}
								onChange={() => setAttributes({ showHeading: !showHeading })}
								name="showHeading"
								id="showHeading"
							/>
						</div> */}
						<div className="flex justify-between gap-2">
							<label htmlFor="hasBackground">
								{__("Enable Background", "ncmazfc")}
							</label>
							<FormToggle
								checked={hasBackground}
								onChange={() =>
									setAttributes({ hasBackground: !hasBackground })
								}
								name="hasBackground"
								id="hasBackground"
							/>
						</div>
					</div>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: classNames("relative not-prose"),
				})}
			>
				{hasBackground && (
					<BackgroundSection
						className={classNames(
							variation === "style2"
								? "bg-yellow-100 dark:bg-black/20"
								: undefined,
							variation === "style3"
								? "bg-green-100 dark:bg-black/20"
								: undefined,
							variation !== "style2" && variation !== "style3"
								? "bg-neutral-100 dark:bg-black/20"
								: undefined
						)}
					/>
				)}

				<InnerBlocks
					allowedBlocks={[
						"ncmaz-faust/block-heading",
						"ncmaz-faust/block-magazine",
						"ncmaz-faust/block-terms",
					]}
					template={[
						["ncmaz-faust/block-heading", {}],
						["ncmaz-faust/block-magazine", {}],
					]}
				/>
			</div>
		</>
	);
};

export default Edit;
