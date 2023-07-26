import { Placeholder } from "@wordpress/components";
import { Icon, file } from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import React from "react";

const BlockEmptyPlaceholder = () => (
	<Placeholder
		icon={<Icon icon={file} />}
		label={__("Woostify block Products", "wcb")}
		className="wc-block-products-grid wc-block-products-category"
	>
		{__("No products were found that matched your selection.", "wcb")}
	</Placeholder>
);
export default BlockEmptyPlaceholder;
