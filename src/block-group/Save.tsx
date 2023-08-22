import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import React from "react";
import { BlockGroup_Attrs } from "./attributes";
import classNames from "../utils/className";

export default function save({
	attributes,
}: {
	attributes: BlockGroup_Attrs & { anchor: string; align: string };
}) {
	const {} = attributes;

	return (
		<>
			<div
				{...useBlockProps.save({
					className: classNames("not-prose"),
				})}
			>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
