import React, { FC } from "react";
import {
	NcmazFcImageFieldsFragment,
	NcmazFcTermCardFieldsFragment,
	TermsWithVariablesQueryQuery,
} from "../../__generated__/graphql";
import CardCategory1 from "../CardCategory1/CardCategory1";
import CardCategory2 from "../CardCategory2/CardCategory2";
import CardCategory3 from "../CardCategory3/CardCategory3";
import CardCategory4 from "../CardCategory4/CardCategory4";
import CardCategory5 from "../CardCategory5/CardCategory5";
import MySlider from "../MySlider";

export type TaxonomyType = NcmazFcTermCardFieldsFragment & {
	ncTaxonomyMeta?: {
		color?: string;
		featuredImage?: NcmazFcImageFieldsFragment;
	};
};

export interface SectionSliderNewCategoriesProps {
	className?: string;
	terms: NonNullable<TermsWithVariablesQueryQuery["terms"]>["edges"];
	categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5";
	itemPerRow?: 4 | 5;
}

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
	className = "",
	terms,
	itemPerRow = 5,
	categoryCardType = "card3",
}) => {
	const renderCard = (item: TaxonomyType, index: number) => {
		const topIndex = index < 3 ? `#${index + 1}` : undefined;
		switch (categoryCardType) {
			case "card1":
				return <CardCategory1 key={index} taxonomy={item} />;
			case "card2":
				return <CardCategory2 key={index} index={topIndex} taxonomy={item} />;
			case "card3":
				return <CardCategory3 key={index} taxonomy={item} />;
			case "card4":
				return <CardCategory4 key={index} index={topIndex} taxonomy={item} />;
			case "card5":
				return <CardCategory5 key={index} taxonomy={item} />;
			default:
				return null;
		}
	};

	return (
		<div className={`nc-SectionSliderNewCategories ${className}`}>
			<MySlider
				data={terms}
				renderItem={(item, indx) => renderCard(item.node, indx)}
				itemPerRow={itemPerRow}
			/>
		</div>
	);
};

export default SectionSliderNewCategories;
