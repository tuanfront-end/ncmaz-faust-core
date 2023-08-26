import { RichText, useBlockProps } from "@wordpress/block-editor";
import React from "react";
import { BlockHeading_Attrs } from "./attributes";
import classNames from "../utils/className";

export default function save({
	attributes,
}: {
	attributes: BlockHeading_Attrs & { anchor: string; align: string };
}) {
	const {
		heading,
		subHeading,
		headingTag,
		align,
		showDivider,
		showSubHeading,
		variation,
	} = attributes;

	return (
		<>
			<div
				{...useBlockProps.save({
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
					{!!heading && (
						<RichText.Content
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
						/>
					)}
					{showSubHeading && !!subHeading && (
						<RichText.Content
							tagName="span"
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
						/>
					)}
				</div>
			</div>
		</>
	);
}
