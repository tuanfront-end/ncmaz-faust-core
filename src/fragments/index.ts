import { graphql } from "../__generated__";

// Terms =================================================
export const NC_TERM_CARD_FRAGMENT = graphql(/* GraphQL */ `
	fragment NcmazFcTermCardFields on TermNode {
		__typename
		id
		count
		name
		slug
		databaseId
		description
		link
		taxonomyName
		... on Category {
			id
			name
			ncTaxonomyMeta {
				color
				featuredImage {
					...NcmazFcImageFields
				}
			}
		}
		... on Tag {
			id
			name
			ncTaxonomyMeta {
				color
				featuredImage {
					...NcmazFcImageFields
				}
			}
		}
	}
`);

export const NC_TERMS_EDGES_FRAGMENT = graphql(/* GraphQL */ `
	fragment NcmazFcTermsCardFields on RootQueryToTermNodeConnection {
		__typename
		edges {
			node {
				...NcmazFcTermCardFields
			}
		}
	}
`);

// POSTS =================================================
export const NC_POSTS_EDGES_FRAGMENT = graphql(`
	fragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {
		__typename
		edges {
			node {
				...NcmazFcPostCardFields
			}
		}
	}
`);

export const NC_POST_CARD_FRAGMENT = graphql(/* GraphQL */ `
	fragment NcmazFcPostCardFields on Post {
		__typename
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
`);

// MEDIA =================================================
export const NC_IMAGE_MEDIA_FRAGMENT = graphql(`
	fragment NcmazFcImageFields on MediaItem {
		__typename
		id
		altText
		caption
		databaseId
		sizes
		sourceUrl
		srcSet
	}
`);

//  POSTS =================================================
export const NC_POST_META_DATA_FRAGMENT = graphql(`
	fragment NcmazFcPostMetaFields on Post_Ncpostmetadata {
		__typename
		reactionLikedList
		savedList
		showRightSidebar
		singlePageStyle
		viewsCount
		readingTime
	}
`);
