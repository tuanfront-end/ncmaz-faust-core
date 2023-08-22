import { AttrsGenericType } from "../types";

export interface BlockTerms_Attrs {
	uniqueId: string;
	numberOfTags: number;
	order: "DESC" | "ASC";
	orderBy: "NAME" | "COUNT" | "TERM_GROUP" | "TERM_ORDER";
	taxonomy: "CATEGORY" | "POSTFORMAT" | "TAG";
	showTagCounts: boolean;
	blockVariation: string;
	hasBackground: boolean;
}

const blokcAttrs: AttrsGenericType<BlockTerms_Attrs> = {
	uniqueId: {
		type: "string",
		// default: "",
	},
	order: {
		type: "string",
		// default: "DESC",
	},
	orderBy: {
		type: "string",
		// default: "NAME",
	},
	blockVariation: {
		type: "string",
		// default: "grid-1",
	},
	numberOfTags: {
		type: "number",
		// default: 30,
	},
	showTagCounts: {
		type: "boolean",
		// default: true,
	},
	taxonomy: {
		type: "string",
		// default: "TAG",
	},
	hasBackground: {
		type: "boolean",
		// default: "TAG",
	},
};

export default blokcAttrs;
