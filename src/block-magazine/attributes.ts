import {
	PostsQueriesControlsType,
	PostsQueriesControls_DEMO_DATA,
} from "../components/posts-queries-controls/PostsQueriesControls";
import { AttrsGenericType } from "../types";

export interface BlockMagazine_Attrs {
	uniqueId: string;
	queries: PostsQueriesControlsType;
	initData: Record<string, any>;
	//

	showFilterTab: boolean;
	viewMoreHref: string;
	blockVariation: string;
}

const blokcAttrs: AttrsGenericType<BlockMagazine_Attrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	queries: {
		type: "object",
		default: PostsQueriesControls_DEMO_DATA,
	},
	//
	blockVariation: {
		type: "string",
		default: "style-1",
	},

	initData: {
		type: "object",
		default: {},
	},

	showFilterTab: {
		type: "boolean",
		default: false,
	},
	viewMoreHref: {
		type: "string",
		default: "",
	},
};

export default blokcAttrs;
