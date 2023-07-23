import { gql } from "@apollo/client";

// MEDIA =================================================
export const NC_IMAGE_MEDIA_FRAGMENT = gql`
	fragment NcmazFcImageFields on MediaItem {
		id
		altText
		caption
		databaseId
		sizes
		sourceUrl
		srcSet
	}
`;

//  POSTS =================================================
export const NC_POST_META_DATA_FRAGMENT = gql`
	fragment NcmazFcPostMetaFields on Post_Ncpostmetadata {
		reactionLikedList
		savedList
		showRightSidebar
		singlePageStyle
		viewsCount
		readingTime
	}
`;

export const NC_POST_CARD_FRAGMENT = gql`
	${NC_IMAGE_MEDIA_FRAGMENT}
	${NC_POST_META_DATA_FRAGMENT}
	fragment NcmazFcPostCardFields on Post {
		id
		link
		status
		author {
			node {
				id
				avatar {
					url
				}
				url
				uri
				username
				name
				slug
				ncUserMeta {
					featuredImage {
						...NcmazFcImageFields
					}
				}
			}
		}
		categories {
			edges {
				node {
					id
					link
					name
					uri
					slug
					count
					categoryId
					ncTaxonomyMeta {
						color
					}
				}
			}
		}
		commentCount
		date
		excerpt
		featuredImage {
			node {
				...NcmazFcImageFields
			}
		}
		postFormats {
			edges {
				node {
					id
					name
					slug
				}
			}
		}
		databaseId
		slug
		title
		ncmazVideoUrl {
			videoUrl
		}
		ncmazAudioUrl {
			audioUrl
		}
		ncPostMetaData {
			...NcmazFcPostMetaFields
		}
		ncmazGalleryImgs {
			image1 {
				...NcmazFcImageFields
			}
			image2 {
				...NcmazFcImageFields
			}
			image3 {
				...NcmazFcImageFields
			}
			image4 {
				...NcmazFcImageFields
			}
			image5 {
				...NcmazFcImageFields
			}
			image6 {
				...NcmazFcImageFields
			}
			image7 {
				...NcmazFcImageFields
			}
			image8 {
				...NcmazFcImageFields
			}
		}
	}
`;
