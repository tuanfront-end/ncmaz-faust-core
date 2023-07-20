import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { NcmazFcAttrsForSave } from "./Save";

interface Props extends NcmazFcAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject => {
		return {
			[`${WRAP_CLASSNAME}`]: {},
		};
	};

	if (!uniqueId) {
		return null;
	}
	return (
		<>
			<Global styles={getDivWrapStyles()} />

			{/* ADVANCE  */}
			{/* <Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "block",
				})}
			/> */}
		</>
	);
};

export default React.memo(GlobalCss);
