import { AttrsGenericType, HtmlTagsType } from "../types";

export type BlockGroup_variation = "style1" | "style2" | "style3";

export interface BlockGroup_Attrs {
	hasBackground: boolean;
	style: object;
	variation: BlockGroup_variation;
	align: string;
}

const blokcAttrs: AttrsGenericType<BlockGroup_Attrs> = {
	variation: {
		type: "string",
		// default: "style1",
	},
	hasBackground: {
		type: "boolean",
		// default: false,
	},
	align: {
		type: "string",
		// default: "wide",
	},

	style: {
		type: "object",
		// default: {
		// 	spacing: {
		// 		padding: {
		// 			bottom: "4rem",
		// 			top: "4rem",
		// 		},
		// 		margin: {
		// 			bottom: "5.25rem",
		// 			top: "5.25rem",
		// 		},
		// 	},
		// },
	},
};

export default blokcAttrs;
