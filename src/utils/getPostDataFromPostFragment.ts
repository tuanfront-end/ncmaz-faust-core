import { FragmentType, useFragment } from "../__generated__";
import {
	NC_IMAGE_MEDIA_FRAGMENT,
	NC_POST_CARD_FRAGMENT,
	NC_POST_META_DATA_FRAGMENT,
} from "../fragments";

export function getPostDataFromPostFragment(
	post: FragmentType<typeof NC_POST_CARD_FRAGMENT>
) {
	const query = useFragment(NC_POST_CARD_FRAGMENT, post);

	const { title, link, date, categories, excerpt, author, postFormats } = query;
	const featuredImage = useFragment(
		NC_IMAGE_MEDIA_FRAGMENT,
		query.featuredImage?.node
	);
	const ncPostMetaData = useFragment(
		NC_POST_META_DATA_FRAGMENT,
		query.ncPostMetaData
	);

	return {
		...query,
		featuredImage,
		ncPostMetaData,
	};
}
