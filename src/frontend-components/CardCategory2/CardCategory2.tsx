import React, { FC } from "react";
import NcImage from "../NcImage/NcImage";
import { TwMainColor } from "../../data/types";
import { TaxonomyType } from "../SectionSliderNewCategories/SectionSliderNewCategories";
import Badge from "../Badge/Badge";

export interface CardCategory2Props {
	className?: string;
	taxonomy: TaxonomyType;
	index?: string;
}

const CardCategory2: FC<CardCategory2Props> = ({
	className = "",
	taxonomy,
	index,
}) => {
	const { count, name, ncTaxonomyMeta } = taxonomy;
	return (
		<span
			className={`nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-3xl transition-colors ${className}`}
		>
			{index && (
				<Badge
					color={ncTaxonomyMeta?.color as TwMainColor}
					name={index}
					className="absolute -top-2 sm:top-3 left-3"
				/>
			)}
			<NcImage
				containerClassName={`relative flex-shrink-0 w-20 h-20 rounded-full shadow-lg overflow-hidden z-0`}
				src={ncTaxonomyMeta?.featuredImage?.sourceUrl || ""}
				fill
				sizes="80px"
				alt="categories"
				className="object-cover "
			/>
			<div className="mt-3">
				<h2 className={`text-base font-semibold`}>{name}</h2>
				<span
					className={`block mt-1 text-sm text-neutral-500 dark:text-neutral-400`}
				>
					{count} Articles
				</span>
			</div>
		</span>
	);
};

export default CardCategory2;
