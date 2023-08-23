import { AttrsGenericType, HtmlTagsType } from "../types";

export type BlockHeading_variation = "style1" | "style2" | "style3";

export interface BlockHeading_Attrs {
	uniqueId: string;
	heading: string;
	subHeading: string;
	variation: BlockHeading_variation;
	headingTag: HtmlTagsType;
	showDivider: boolean;
	showSubHeading: boolean;
	style: object;
}

const blokcAttrs: AttrsGenericType<BlockHeading_Attrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	heading: {
		type: "string",
		default: "",
	},
	subHeading: {
		type: "string",
		default: "",
	},
	variation: {
		type: "string",
		default: "style1",
	},
	headingTag: {
		type: "string",
		default: "h2",
	},
	showDivider: {
		type: "boolean",
		default: true,
	},
	showSubHeading: {
		type: "boolean",
		default: true,
	},
	style: {
		type: "object",
		default: {
			spacing: {
				padding: {
					bottom: "1.75rem",
				},
				margin: {
					bottom: "2.25rem",
				},
			},
		},
	},
};

export default blokcAttrs;
