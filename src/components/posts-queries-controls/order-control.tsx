/**
 * WordPress dependencies
 */
import React from "react";
import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { PostsQueriesControlsType } from "./PostsQueriesControls";

const orderOptions: {
	label: string;
	value: `${PostsQueriesControlsType["orderBy"]}/${PostsQueriesControlsType["order"]}`;
}[] = [
	{
		label: __("Newest to oldest"),
		value: "DATE/DESC",
	},
	{
		label: __("Oldest to newest"),
		value: "DATE/ASC",
	},
	{
		/* translators: label for ordering posts by title in ascending order */
		label: __("A → Z"),
		value: "TITLE/ASC",
	},
	{
		/* translators: label for ordering posts by title in descending order */
		label: __("Z → A"),
		value: "TITLE/DESC",
	},
	{
		/* translators: label for ordering posts by title in ascending order */
		label: __("Comment count / asc"),
		value: "COMMENT_COUNT/ASC",
	},
	{
		/* translators: label for ordering posts by title in descending order */
		label: __("Comment count / desc"),
		value: "COMMENT_COUNT/DESC",
	},
];
function OrderControl({
	order,
	orderBy,
	onChange,
}: {
	order: PostsQueriesControlsType["order"];
	orderBy: PostsQueriesControlsType["orderBy"];
	onChange: (value: {
		order: PostsQueriesControlsType["order"];
		orderBy: PostsQueriesControlsType["orderBy"];
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

export default OrderControl;
