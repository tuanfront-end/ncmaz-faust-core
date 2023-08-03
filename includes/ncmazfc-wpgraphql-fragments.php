<?php

// POSTS =================================================
$NC_POSTS_EDGES_FRAGMENT = '
	fragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {
		__typename
		nodes {
			...NcmazFcPostCardFields
		}
	}
';

$NC_POST_CARD_FRAGMENT = '
	fragment NcmazFcPostCardFields on Post {
		__typename
		id
		uri
		modified
		isSticky
		date
		commentStatus
		author {
			node {
				id
				databaseId
				uri
				name
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
					name
					uri
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
';

// MEDIA =================================================
$NC_IMAGE_MEDIA_FRAGMENT =  '
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
';

//  POSTS =================================================
$NC_POST_META_DATA_FRAGMENT = '
	fragment NcmazFcPostMetaFields on NcPostMetaData {
		__typename
		viewsCount
		readingTime
		likesCount
		savedsCount
		showRightSidebar
		template
	}
';
