import { Placeholder } from "@wordpress/components";
import { Icon, file } from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import React from "react";

const BlockEmptyPlaceholder = () => (
	<Placeholder
		icon={<Icon icon={file} />}
		label={__("Ncmaz faust block!", "wcb")}
		className=""
	>
		{__("No results found! Please try another selection.", "ncmazfc")}
	</Placeholder>
);
export default BlockEmptyPlaceholder;
