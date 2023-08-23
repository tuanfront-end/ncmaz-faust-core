import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";

export interface BLOCK_DEFAULT_PANEL__A {
	textAlignment: string;
	headingTag: string;
}

export const BLOCK_DEFAULT_PANEL__A_DEMO: BLOCK_DEFAULT_PANEL__A = {
	textAlignment: "left",
	headingTag: "h2",
};

interface Props {
	panelData: BLOCK_DEFAULT_PANEL__A;
	setAttr__: (data: BLOCK_DEFAULT_PANEL__A) => void;
}

const NcmazFcDefaultPanel_A: FC<Props> = ({
	panelData = BLOCK_DEFAULT_PANEL__A_DEMO,
	setAttr__,
}) => {
	const { textAlignment, headingTag } = panelData;

	return (
		<PanelBody title={__("Panel Heading", "wcb")}>
			<div className={"space-y-5"}></div>
		</PanelBody>
	);
};

export default NcmazFcDefaultPanel_A;
