import { PostsQueriesControlsType } from "../components/posts-queries-controls/PostsQueriesControls";
import { AttrsGenericType } from "../types";

export interface BlockMagazine_Attrs {
	uniqueId: string;
	queries: PostsQueriesControlsType;
	//
	blockVariation: string;
	showLoadMore: boolean;
	showViewAll: boolean;
	hasBackground: boolean;
}

const blokcAttrs: AttrsGenericType<BlockMagazine_Attrs> = {
	uniqueId: {
		type: "string",
		// default: "",
	},
	// khi tuy chinh o day cung can thay doi trong file render_callback.php of block magazine
	queries: {
		type: "object",
		// default: PostsQueriesControls_DEMO_DATA,
	},
	//
	blockVariation: {
		type: "string",
		// default: "style-1",
	},
	showLoadMore: {
		type: "boolean",
		// default: false,
	},
	showViewAll: {
		type: "boolean",
		// default: false,
	},
	hasBackground: {
		type: "boolean",
		// default: false,
	},
};

export default blokcAttrs;
