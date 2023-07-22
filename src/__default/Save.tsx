import { useBlockProps } from "@wordpress/block-editor";
import React from "react";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{"Todo List – hello from the saved content!"}
		</p>
	);
}
