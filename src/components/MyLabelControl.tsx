import React, { FC, ReactNode } from "react";
import { __ } from "@wordpress/i18n";

export type CSSUnits = "px" | "em" | "rem" | "%";

export interface MyLabelControlProps {
	className?: string;
	help?: string;
	children: ReactNode;
}

const MyLabelControl: FC<MyLabelControlProps> = ({
	children,
	className = "mb-2",
	help,
}) => {
	return (
		<div
			className={`components-base-control__label font-medium uppercase text-[11px] ${className}`}
		>
			<div className="wb-control-label flex items-center">
				<div className="wb-base-control__label">{children}</div>
			</div>
			{!!help && (
				<div className="wb-base-help text-xs text-slate-500">
					<p className="components-base-control__help">{help}</p>
				</div>
			)}
		</div>
	);
};

export default MyLabelControl;
