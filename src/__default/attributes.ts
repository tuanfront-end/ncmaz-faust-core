import { AttrsGenericType } from "../types";
import {
	BLOCK_DEFAULT_PANEL__A,
	BLOCK_DEFAULT_PANEL__A_DEMO,
} from "./BlockDefaultPanel_A";

export interface BlockDefault_Attrs {
	uniqueId: string;
	a: BLOCK_DEFAULT_PANEL__A;
}

const blokcAttrs: AttrsGenericType<BlockDefault_Attrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	a: {
		type: "object",
		default: BLOCK_DEFAULT_PANEL__A_DEMO,
	},
};

export default blokcAttrs;
