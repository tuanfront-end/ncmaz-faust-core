import { gql } from "@apollo/client";

export const CORE_IMAGE_FIELDS_FRAGMENT = gql`
	fragment CoreImageFields on MediaItem {
		id
		altText
		caption
		databaseId
		sizes
		sourceUrl
		srcSet
	}
`;
