import React, { FC } from "react";
import { TaxonomyType } from "../SectionSliderNewCategories/SectionSliderNewCategories";
import NcImage from "../NcImage/NcImage";

export interface CardCategory1Props {
	className?: string;
	taxonomy: TaxonomyType;
	size?: "large" | "normal";
}

const CardCategory1: FC<CardCategory1Props> = ({
	className = "",
	size = "normal",
	taxonomy,
}) => {
	const { count, name, ncTaxonomyMeta } = taxonomy;
	return (
		<span className={`nc-CardCategory1 flex items-center ${className}`}>
			<NcImage
				alt=""
				containerClassName={`relative flex-shrink-0 ${
					size === "large" ? "w-20 h-20" : "w-12 h-12"
				} rounded-lg me-4 overflow-hidden`}
				src={ncTaxonomyMeta?.featuredImage?.sourceUrl || ""}
				fill
				className="object-cover"
				sizes="80px"
			/>
			<div>
				<h2
					className={`${
						size === "large" ? "text-lg" : "text-base"
					} nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold`}
				>
					{name}
				</h2>
				<span
					className={`${
						size === "large" ? "text-sm" : "text-xs"
					} block mt-[2px] text-neutral-500 dark:text-neutral-400`}
				>
					{count} Articles
				</span>
			</div>
		</span>
	);
};

export default CardCategory1;
