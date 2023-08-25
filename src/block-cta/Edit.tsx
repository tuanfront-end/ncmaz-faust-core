import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import {
	InnerBlocks,
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import { ContainerEditProps, HtmlTagsType } from "../types";
import { BlockCTA_Attrs } from "./attributes";
import {
	FormToggle,
	FormTokenField,
	PanelBody,
	SelectControl,
} from "@wordpress/components";
import classNames from "../utils/className";
import ButtonPrimary from "../frontend-components/Button/ButtonPrimary";
import Input from "../frontend-components/Input/Input";
import ButtonCircle from "../frontend-components/Button/ButtonCircle";
import Badge from "../frontend-components/Badge/Badge";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import { __experimentalInputControl as InputControl } from "@wordpress/components";

const Edit: FC<ContainerEditProps<BlockCTA_Attrs & { anchor: string }>> = (
	props
) => {
	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		heading,
		headingTag,
		subHeading,
		showSubHeading,
		ctaButton,
		showCtaButton,
		showSubcribeForm,
		description,
		descLists,
		showDescLists,
		anchor,
		style,
		hasBackground,
		ctaButtonHref,
	} = attributes;

	const renderSubcribeForm = () => {
		return (
			<div>
				<form className="ncmazfaust-block-CTA__subcribe_form mt-10 relative max-w-sm">
					<Input
						required
						aria-required
						placeholder="Enter your email"
						type="email"
					/>
					<ButtonCircle
						type="submit"
						className="absolute transform top-1/2 -translate-y-1/2 end-1 dark:bg-neutral-300 dark:text-black"
					>
						<ArrowRightIcon className="w-5 h-5 rtl:rotate-180" />
					</ButtonCircle>
				</form>
				<i className="block ncmazfaust-block-CTA__subcribe_success text-green-500 text-xs"></i>
				<i className="block ncmazfaust-block-CTA__subcribe_error text-red-500 text-xs"></i>
			</div>
		);
	};

	const renderContent = () => {
		return (
			<div className="ncmazfaust-block-CTA__wrap relative flex flex-col lg:flex-row items-center gap-14 lg:gap-10 not-prose">
				<div className="flex-shrink-0 lg:w-2/5">
					{showSubHeading && (
						<RichText
							tagName="span"
							identifier="subHeading"
							className={
								"text-xs uppercase tracking-wider font-medium text-neutral-400 block mb-3"
							}
							value={subHeading}
							placeholder="Add sub heading"
							onChange={(subHeading) => setAttributes({ subHeading })}
						/>
					)}
					<RichText
						identifier="heading"
						tagName={headingTag || "h2"}
						className={classNames("font-semibold text-3xl sm:text-4xl")}
						value={heading}
						placeholder="Add heading"
						onChange={(heading) => setAttributes({ heading })}
					/>
					<RichText
						tagName="span"
						identifier="description"
						className={classNames(
							"block mt-6 text-neutral-500 dark:text-neutral-400"
						)}
						value={description}
						placeholder="Add the description here!"
						onChange={(description) => setAttributes({ description })}
					/>

					{showDescLists && (
						<ul className="space-y-5 mt-10">
							{descLists.map((item, index) => (
								<li className="flex items-center gap-4">
									<Badge
										color={index % 2 === 0 ? "pink" : "green"}
										name={`0${index + 1}`}
									/>
									<span className="font-medium text-neutral-700 dark:text-neutral-300">
										{item}
									</span>
								</li>
							))}
						</ul>
					)}

					{showSubcribeForm && renderSubcribeForm()}

					{showCtaButton && (
						<ButtonPrimary className="mt-8" type="button">
							<RichText
								tagName="span"
								identifier="ctaButton"
								value={ctaButton}
								placeholder="Become an author"
								onChange={(ctaButton) => setAttributes({ ctaButton })}
							/>
						</ButtonPrimary>
					)}
				</div>
				<div className="flex-1">
					<InnerBlocks
						allowedBlocks={["core/image"]}
						templateLock="all"
						template={[["core/image", {}]]}
					/>
				</div>
			</div>
		);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Layout">
					<div className="space-y-4">
						<SelectControl
							label={__("Select heading tag", "ncmazfc")}
							value={headingTag}
							onChange={(headingTag) =>
								setAttributes({
									headingTag: headingTag as HtmlTagsType,
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

						<div className="flex gap-3">
							<FormToggle
								checked={showSubHeading}
								onChange={() =>
									setAttributes({ showSubHeading: !showSubHeading })
								}
								name="showSubHeading"
								id="showSubHeading"
							/>
							<label htmlFor="showSubHeading">
								{__("Show sub-heading", "ncmazfc")}
							</label>
						</div>

						<div className="flex gap-3">
							<FormToggle
								checked={showCtaButton}
								onChange={() =>
									setAttributes({ showCtaButton: !showCtaButton })
								}
								name="showCtaButton"
								id="showCtaButton"
							/>
							<label htmlFor="showCtaButton">
								{__("Show CTA button", "ncmazfc")}
							</label>
						</div>

						{!!showCtaButton && (
							<InputControl
								title="CTA button link"
								label="CTA button link"
								type="url"
								value={ctaButtonHref}
								onChange={(nextValue) =>
									setAttributes({ ctaButtonHref: nextValue || "#" })
								}
							/>
						)}

						<div className="flex gap-3">
							<FormToggle
								checked={showSubcribeForm}
								onChange={() =>
									setAttributes({ showSubcribeForm: !showSubcribeForm })
								}
								name="showSubcribeForm"
								id="showSubcribeForm"
							/>
							<label htmlFor="showSubcribeForm">
								{__("Show Subcribe form", "ncmazfc")}
							</label>
						</div>
						<div className="flex gap-3">
							<FormToggle
								checked={showDescLists}
								onChange={() =>
									setAttributes({ showDescLists: !showDescLists })
								}
								name="showDescLists"
								id="showDescLists"
							/>
							<label htmlFor="showDescLists">
								{__("Show feature list", "ncmazfc")}
							</label>
						</div>

						{showDescLists && (
							<div className="mb-3">
								<FormTokenField
									value={descLists}
									suggestions={[]}
									onChange={(descLists) =>
										setAttributes({ descLists: descLists as string[] })
									}
									label="Add feature list"
								/>
							</div>
						)}

						<div className="w-full gap-3 flex">
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

			<div
				{...useBlockProps({
					className: classNames(
						"not-prose",
						hasBackground ? "relative py-16" : ""
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
