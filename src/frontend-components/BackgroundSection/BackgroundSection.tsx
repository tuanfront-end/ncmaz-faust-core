import React, { FC } from "react";

const BackgroundSection = ({
	className = "bg-neutral-100 dark:bg-black/20 ",
}) => {
	return (
		<div
			className={`absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0  ${className}`}
		>
			<span className="sr-only hidden">bg</span>
		</div>
	);
};

export default BackgroundSection;
