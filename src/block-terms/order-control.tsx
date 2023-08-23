/**
 * WordPress dependencies
 */
import React from "react";
import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { BlockTerms_Attrs } from "./attributes";

const orderOptions: {
	label: string;
	value: `${BlockTerms_Attrs["orderBy"]}/${BlockTerms_Attrs["order"]}`;
}[] = [
	{
		label: __("Item count/desc"),
		value: "COUNT/DESC",
	},
	{
		label: __("Item count/asc"),
		value: "COUNT/ASC",
	},
	{
		/* translators: label for ordering posts by title in ascending order */
		label: __("A → Z"),
		value: "NAME/ASC",
	},
	{
		/* translators: label for ordering posts by title in descending order */
		label: __("Z → A"),
		value: "NAME/DESC",
	},
	{
		/* translators: label for ordering posts by title in ascending order */
		label: __("Term group/asc"),
		value: "TERM_GROUP/ASC",
	},
	{
		/* translators: label for ordering posts by title in descending order */
		label: __("Term group/desc"),
		value: "TERM_GROUP/DESC",
	},
	{
		/* translators: label for ordering posts by title in ascending order */
		label: __("Term order/asc"),
		value: "TERM_ORDER/ASC",
	},
	{
		/* translators: label for ordering posts by title in descending order */
		label: __("Term order/desc"),
		value: "TERM_ORDER/DESC",
	},
];
function TermOrderControl({
	order,
	orderBy,
	onChange,
}: {
	order: BlockTerms_Attrs["order"];
	orderBy: BlockTerms_Attrs["orderBy"];
	onChange: (value: {
		order: BlockTerms_Attrs["order"];
		orderBy: BlockTerms_Attrs["orderBy"];
	}) => void;
}) {
	return (
		<SelectControl
			__nextHasNoMarginBottom
			label={__("Order by")}
			value={`${orderBy}/${order}`}
			options={orderOptions}
			onChange={(value) => {
				const [newOrderBy, newOrder] = value.split("/");
				// @ts-ignore
				onChange({ order: newOrder, orderBy: newOrderBy });
			}}
		/>
	);
}

export default TermOrderControl;
