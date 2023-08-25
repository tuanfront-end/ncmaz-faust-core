import { AttrsGenericType, HtmlTagsType } from "../types";

export interface BlockCTA_Attrs {
	uniqueId: string;
	heading: string;
	subHeading: string;
	headingTag: HtmlTagsType;
	ctaButton: string;
	ctaButtonHref: string;
	description: string;
	showSubHeading: boolean;
	showCtaButton: boolean;
	style: object;
	showSubcribeForm: boolean;
	descLists: string[];
	showDescLists: boolean;
	hasBackground: boolean;
	align: string;
}

const blokcAttrs: AttrsGenericType<BlockCTA_Attrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	descLists: {
		type: "array",
		default: ["Create a free account", "Write your story"],
	},
	heading: {
		type: "string",
		default: "Become an author and share your great stories",
	},
	subHeading: {
		type: "string",
		default: "SUPPER CHANGE YOUR PLANNING POWERS",
	},
	description: {
		type: "string",
		default:
			"Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome.",
	},
	ctaButton: {
		type: "string",
		default: "Become an author",
	},
	ctaButtonHref: {
		type: "string",
		default: "#",
	},
	headingTag: {
		type: "string",
		default: "h2",
	},
	showSubHeading: {
		type: "boolean",
		default: true,
	},
	showCtaButton: {
		type: "boolean",
		default: true,
	},
	showSubcribeForm: {
		type: "boolean",
		default: false,
	},
	showDescLists: {
		type: "boolean",
		default: false,
	},
	hasBackground: {
		type: "boolean",
		default: false,
	},
	align: {
		type: "string",
		default: "wide",
	},

	style: {
		type: "object",
		default: {
			spacing: {
				margin: {
					bottom: "6rem",
					top: "6rem",
				},
			},
		},
	},
};

export default blokcAttrs;
