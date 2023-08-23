/**
 * WordPress dependencies
 */
import {
	ToolbarGroup,
	Dropdown,
	ToolbarButton,
	BaseControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { useInstanceId } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";
import { settings, list, grid } from "@wordpress/icons";
import React from "react";
import { PostsQueriesControlsType } from "../components/posts-queries-controls/PostsQueriesControls";

/**
 * Internal dependencies
 */

const QueryToolbar = ({
	query,
	setQuery,
}: {
	query: PostsQueriesControlsType;
	setQuery: (query: Partial<PostsQueriesControlsType>) => void;
}) => {
	const maxPageInputId = useInstanceId(
		QueryToolbar,
		"blocks-query-pagination-max-page-input"
	);

	return (
		<ToolbarGroup>
			<Dropdown
				contentClassName="block-library-query-toolbar__popover"
				renderToggle={({ onToggle }) => (
					<ToolbarButton
						icon={settings}
						label={__("Display settings")}
						onClick={onToggle}
					/>
				)}
				renderContent={() => (
					<>
						<BaseControl>
							<NumberControl
								__unstableInputWidth="60px"
								label={__("Items per Page")}
								labelPosition="edge"
								min={1}
								max={25}
								onChange={(val) => {
									let value = Number(val);
									if (isNaN(value) || value < 1 || value > 25) {
										return;
									}
									setQuery({
										perPage: value,
									});
								}}
								step="1"
								value={String(query.perPage)}
								isDragEnabled={false}
							/>
						</BaseControl>
						<BaseControl>
							<NumberControl
								__unstableInputWidth="60px"
								label={__("Offset")}
								labelPosition="edge"
								min={0}
								max={100}
								onChange={(val) => {
									let value = Number(val);
									if (isNaN(value) || value < 0 || value > 100) {
										return;
									}
									setQuery({ offset: value });
								}}
								step="1"
								value={query.offset}
								isDragEnabled={false}
							/>
						</BaseControl>
						<BaseControl
							id={maxPageInputId}
							help={__(
								"Limit the pages you want to show, even if the query has more results. To show all pages use 0 (zero)."
							)}
						>
							<NumberControl
								id={maxPageInputId}
								__unstableInputWidth="60px"
								label={__("Max page to show")}
								labelPosition="edge"
								min={0}
								onChange={(val) => {
									let value = Number(val);
									if (isNaN(value) || value < 0) {
										return;
									}
									setQuery({ pages: value });
								}}
								step="1"
								value={query.pages}
								isDragEnabled={false}
							/>
						</BaseControl>
					</>
				)}
			/>
		</ToolbarGroup>
	);
};

export default QueryToolbar;
