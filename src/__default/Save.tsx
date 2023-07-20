import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { NcmazFcAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface NcmazFcAttrsForSave
	extends Omit<NcmazFcAttrs, "heading" | "subHeading"> {}

export default function save({ attributes }: { attributes: NcmazFcAttrs }) {
	const { uniqueId, advance_responsiveCondition, advance_zIndex } = attributes;
	//

	const newAttrForSave: NcmazFcAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
	};
	//
	const blockProps = useBlockProps.save({
		className: "wcb-default__wrap " + (attributes.className || ""),
	});
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-default__wrap"
			uniqueId={uniqueId}
			{...blockProps}
		>
			<div>CHILD</div>
		</SaveCommon>
	);
}
