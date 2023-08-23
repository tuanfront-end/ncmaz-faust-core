import { Spinner } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React from "react";

const BlockLoadingPlaceholder = () => (
	<div className="container flex items-center justify-center py-7">
		<Spinner />
	</div>
);
export default BlockLoadingPlaceholder;
