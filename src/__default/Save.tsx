import { useBlockProps } from "@wordpress/block-editor";
import React from "react";
import { BlockDefault_Attrs } from "./attributes";

export default function save({
	attributes,
}: {
	attributes: BlockDefault_Attrs & { anchor: string; align: string };
}) {
	return (
		<p {...useBlockProps.save()}>
			{"Todo List – hello from the saved content!"}
		</p>
	);
}
