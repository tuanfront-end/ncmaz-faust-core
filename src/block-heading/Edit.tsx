import { __ } from "@wordpress/i18n";
import React, { lazy, Suspense, useEffect, FC } from "react";
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { ContainerEditProps } from "../types";
import { BlockHeading_Attrs, BlockHeading_variation } from "./attributes";
import { FormToggle, PanelBody, SelectControl } from "@wordpress/components";
import classNames from "../utils/className";

const Edit: FC<
	ContainerEditProps<BlockHeading_Attrs & { anchor: string; align: string }>
> = (props) => {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		heading,
		headingTag,
		subHeading,
		variation,
		align,
		showDivider,
		showSubHeading,
	} = attributes;

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
									variation: variation as BlockHeading_variation,
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
						<SelectControl
							label={__("Select heading tag", "ncmazfc")}
							value={headingTag}
							onChange={(headingTag) =>
								setAttributes({
									headingTag: headingTag as BlockHeading_Attrs["headingTag"],
								})
							}
							options={[
								{
									label: __("h1", "ncmazfc"),
									value: "h1",
								},
								{
									label: __("h2", "ncmazfc"),
									value: "h2",
								},
								{
									label: __("h3", "ncmazfc"),
									value: "h3",
								},
								{
									label: __("h4", "ncmazfc"),
									value: "h4",
								},
								{
									label: __("h5", "ncmazfc"),
									value: "h5",
								},
								{
									label: __("h6", "ncmazfc"),
									value: "h6",
								},
							]}
						></SelectControl>

						<div className="flex justify-between gap-2">
							<label htmlFor="showSubHeading">
								{__("Show sub-heading", "ncmazfc")}
							</label>
							<FormToggle
								checked={showSubHeading}
								onChange={() =>
									setAttributes({ showSubHeading: !showSubHeading })
								}
								name="showSubHeading"
								id="showSubHeading"
							/>
						</div>
						<div className="flex justify-between gap-2">
							<label htmlFor="showDivider">
								{__("Show divider", "ncmazfc")}
							</label>
							<FormToggle
								checked={showDivider}
								onChange={() => setAttributes({ showDivider: !showDivider })}
								name="showDivider"
								id="showDivider"
							/>
						</div>
					</div>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: classNames(
						`ncmazfc-block-heading__wrap relative text-neutral-900 dark:text-neutral-50 not-prose`,
						showDivider
							? "border-b border-neutral-200 dark:border-neutral-700"
							: ""
					),
				})}
			>
				<div
					className={classNames(
						align === "center"
							? "text-center w-full max-w-2xl mx-auto"
							: "max-w-2xl w-full"
					)}
				>
					<RichText
						identifier="heading"
						tagName={headingTag || "h2"}
						className={classNames(
							`ncmazfc-block-heading__heading font-semibold`,
							variation === "style1"
								? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
								: "",
							variation === "style2" ? "text-xl md:text-2xl lg:text-3xl" : "",
							variation === "style3" ? "text-lg md:text-xl lg:text-2xl" : ""
						)}
						value={heading}
						placeholder="Add heading"
						onChange={(heading) => setAttributes({ heading })}
					/>
					{showSubHeading && (
						<RichText
							tagName="span"
							identifier="subHeading"
							className={classNames(
								`ncmazfc-block-heading__subHeading mt-2 font-normal block text-neutral-500 dark:text-neutral-400 max-w-4xl`,
								variation === "style1"
									? "md:mt-3 text-sm sm:text-base md:text-lg"
									: "",
								variation === "style2" ? "text-sm sm:text-base" : "",
								variation === "style3" ? "text-sm sm:text-base" : ""
							)}
							value={subHeading}
							placeholder="Add sub heading"
							onChange={(subHeading) => setAttributes({ subHeading })}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Edit;
