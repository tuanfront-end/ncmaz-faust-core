import { graphql } from "../__generated__";

// Terms =================================================
export const NC_TERM_CARD_FRAGMENT = graphql(/* GraphQL */ `
	fragment NcmazFcTermCardFields on TermNode {
		__typename
		id
		count
		uri
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
					node {
						...NcmazFcImageFields
					}
				}
			}
		}
		... on Tag {
			id
			name
			ncTaxonomyMeta {
				color
				featuredImage {
					node {
						...NcmazFcImageFields
					}
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
export const NC_POSTS_EDGES_FRAGMENT = graphql(/* GraphQL */ `
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
		uri
		modifiedGmt
		modified
		isSticky
		dateGmt
		date
		commentStatus
		status
		author {
			node {
				id
				databaseId
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
						node {
							...NcmazFcImageFields
						}
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
					databaseId
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
				node {
					...NcmazFcImageFields
				}
			}
			image2 {
				node {
					...NcmazFcImageFields
				}
			}
			image3 {
				node {
					...NcmazFcImageFields
				}
			}
			image4 {
				node {
					...NcmazFcImageFields
				}
			}
			image5 {
				node {
					...NcmazFcImageFields
				}
			}
			image6 {
				node {
					...NcmazFcImageFields
				}
			}
			image7 {
				node {
					...NcmazFcImageFields
				}
			}
			image8 {
				node {
					...NcmazFcImageFields
				}
			}
		}
	}
`);

// MEDIA =================================================
export const NC_IMAGE_MEDIA_FRAGMENT = graphql(/* GraphQL */ `
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
export const NC_POST_META_DATA_FRAGMENT = graphql(/* GraphQL */ `
	fragment NcmazFcPostMetaFields on NcPostMetaData {
		__typename
		viewsCount
		readingTime
		likesCount
		savedsCount
		showRightSidebar
		template
	}
`);
