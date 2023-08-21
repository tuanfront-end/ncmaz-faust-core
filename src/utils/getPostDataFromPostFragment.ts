import { FragmentType, useFragment } from "../__generated__";
import {
	NC_IMAGE_MEDIA_HAS_DETAIL_FRAGMENT,
	NC_POST_CARD_FRAGMENT,
	NC_POST_CARD_NOT_NCMAZGALLERY_FRAGMENT,
	NC_POST_FULL_FRAGMENT,
	NC_POST_META_DATA_FULL_FRAGMENT,
} from "../fragments";
import { getCatgoryDataFromCategoryFragment } from "./getCatgoryDataFromCategoryFragment";
import { getUserDataFromUserCardFragment } from "./getUserDataFromUserCardFragment";

export type PostFormatNameType =
	| ""
	| "audio"
	| "gallery"
	| "video"
	| "aside"
	| "chat"
	| "image"
	| "quote"
	| "status"
	| "standard";

export function getPostDataFromPostFragment(
	post:
		| FragmentType<typeof NC_POST_CARD_FRAGMENT>
		| FragmentType<typeof NC_POST_FULL_FRAGMENT>
		| FragmentType<typeof NC_POST_CARD_NOT_NCMAZGALLERY_FRAGMENT>
) {
	const query = useFragment(
		NC_POST_FULL_FRAGMENT,
		post as FragmentType<typeof NC_POST_FULL_FRAGMENT>
	);

	//
	const postFormats = (
		query.postFormats?.nodes?.[0]?.name || ""
	).toLowerCase() as PostFormatNameType;
	const postFormatSlug = (
		query.postFormats?.nodes?.[0]?.slug || ""
	).toLowerCase();
	const postFormatsArr = query.postFormats?.nodes;
	//
	const featuredImage = useFragment(
		NC_IMAGE_MEDIA_HAS_DETAIL_FRAGMENT,
		query.featuredImage?.node
	);
	//
	const ncPostMetaData = useFragment(
		NC_POST_META_DATA_FULL_FRAGMENT,
		query.ncPostMetaData
	);

	return {
		...query,
		uri: query.uri || "",
		link: "",
		title: query.title || "",
		excerpt: query.excerpt || "",
		date: query.date || "",
		content: query.content || "",
		postFormats,
		postFormatSlug,
		postFormatsArr,
		featuredImage,
		ncPostMetaData,
		categories: {
			nodes: query.categories?.nodes?.map((term) =>
				getCatgoryDataFromCategoryFragment(term)
			),
		},

		author: getUserDataFromUserCardFragment({ ...query.author?.node }),
	};
}
