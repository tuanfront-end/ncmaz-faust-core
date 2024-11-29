import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { BlockCTA_Attrs } from "./attributes";
import classNames from "../utils/className";
import ButtonPrimary from "../frontend-components/Button/ButtonPrimary";
import Input from "../frontend-components/Input/Input";
import ButtonCircle from "../frontend-components/Button/ButtonCircle";
import Badge from "../frontend-components/Badge/Badge";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";

export default function save({
	attributes,
}: {
	attributes: BlockCTA_Attrs & { anchor: string };
}) {
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							className="w-5 h-5 rtl:rotate-180"
						>
							<path
								fill-rule="evenodd"
								d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
								clip-rule="evenodd"
							></path>
						</svg>
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
						<RichText.Content
							tagName="span"
							className={
								"text-xs uppercase tracking-wider font-medium text-neutral-400 block mb-3"
							}
							value={subHeading}
						/>
					)}
					<RichText.Content
						tagName={headingTag || "h2"}
						className={classNames("font-semibold text-3xl sm:text-4xl")}
						value={heading}
					/>
					<RichText.Content
						tagName="span"
						className={classNames(
							"block mt-6 text-neutral-500 dark:text-neutral-400",
						)}
						value={description}
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
						<ButtonPrimary className="mt-8" type="button" href={ctaButtonHref}>
							<RichText.Content tagName="span" value={ctaButton} />
						</ButtonPrimary>
					)}
				</div>
				<div className="flex-1">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	};

	return (
		<div
			{...useBlockProps.save({
				className: classNames(
					"not-prose",
					hasBackground ? "relative py-16" : "",
				),
			})}
		>
			{hasBackground ? <BackgroundSection /> : null}
			{renderContent()}
		</div>
	);
}
