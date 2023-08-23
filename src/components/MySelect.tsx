import { SelectControl } from "@wordpress/components";
import React, { FC } from "react";
import MyLabelControl from "./MyLabelControl";

const MySelect = ({ label = "My select", labelClass = "flex-1", ...props }) => {
	return (
		<div className="wcb-MySelect w-full flex justify-between items-center">
			<MyLabelControl className={labelClass}>{label}</MyLabelControl>
			<div className="flex-1">
				<SelectControl hideLabelFromVision {...props} />
			</div>
		</div>
	);
};

export default MySelect;
