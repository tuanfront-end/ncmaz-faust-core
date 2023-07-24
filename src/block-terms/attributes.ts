import { AttrsGenericType } from "../types";

export interface BlockTerms_Attrs {
	uniqueId: string;
	numberOfTags: number;
	order: "DESC" | "ASC";
	orderBy: "NAME" | "COUNT" | "TERM_GROUP" | "TERM_ORDER";
	taxonomy: "CATEGORY" | "POSTFORMAT" | "TAG";
	showTagCounts: boolean;
	blockVariation: string;
	initTerms: any[];
}

const blokcAttrs: AttrsGenericType<BlockTerms_Attrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	initTerms: {
		type: "array",
		default: [],
	},
	order: {
		type: "string",
		default: "DESC",
	},
	orderBy: {
		type: "string",
		default: "NAME",
	},
	blockVariation: {
		type: "string",
		default: "style-1",
	},
	numberOfTags: {
		type: "number",
		default: 30,
	},
	showTagCounts: {
		type: "boolean",
		default: true,
	},
	taxonomy: {
		type: "string",
		default: "TAG",
	},
};

export default blokcAttrs;
