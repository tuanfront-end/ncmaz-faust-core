import { __ } from "@wordpress/i18n";
import React, { lazy, Suspense, useEffect, FC } from "react";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import { ContainerEditProps } from "../types";
import { BlockDefault_Attrs } from "./attributes";

const Edit: FC<ContainerEditProps<BlockDefault_Attrs>> = (props) => {
	const { attributes, setAttributes } = props;
	const { uniqueId } = attributes;
	return (
		<p {...useBlockProps()}>
			{__("Todo List – hello from the editor!", "ncmaz-core")}
		</p>
	);
};

export default Edit;
