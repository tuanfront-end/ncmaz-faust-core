export const avatarColors = [
	"#ffdd00",
	"#fbb034",
	"#ff4c4c",
	"#c1d82f",
	"#f48924",
	"#7ac143",
	"#30c39e",
	"#06BCAE",
	"#0695BC",
	"#037ef3",
	"#146eb4",
	"#8e43e7",
	"#ea1d5d",
	"#fc636b",
	"#ff6319",
	"#e01f3d",
	"#a0ac48",
	"#00d1b2",
	"#472f92",
	"#388ed1",
	"#a6192e",
	"#4a8594",
	"#7B9FAB",
	"#1393BD",
	"#5E13BD",
	"#E208A7",
];

//
// ===================== POSTS =================================================
export const POST_COMMONT_FIELDS_HAS_CONTENT = `
    id
    link
    content
    status
    commentStatus
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
           ...CoreImageFields
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
    tags {
      edges {
        node {
          id
          link
          name
          uri
          slug
          count
          tagId
        }
      }
    }
    commentCount
    date
    excerpt
    featuredImage {
      node {
       ...CoreImageFields
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
		likedReactionList
		readingTime
		savedList
		singlePageStyle
		viewsCount
		showRightSidebar
    }
    ncmazGalleryImgs {
      image1 {
       ...CoreImageFields
      }
      image2 {
       ...CoreImageFields
      }
      image3 {
       ...CoreImageFields
      }
      image4 {
       ...CoreImageFields
      }
      image5 {
       ...CoreImageFields
      }
      image6 {
       ...CoreImageFields
      }
      image7 {
       ...CoreImageFields
      }
      image8 {
       ...CoreImageFields
      }
    }
`;

export const POST_COMMONT_FIELDS = `
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
           ...CoreImageFields
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
       ...CoreImageFields
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
		likedReactionList
		readingTime
		savedList
		singlePageStyle
		viewsCount
		showRightSidebar
    }
    ncmazGalleryImgs {
      image1 {
       ...CoreImageFields
      }
      image2 {
       ...CoreImageFields
      }
      image3 {
       ...CoreImageFields
      }
      image4 {
       ...CoreImageFields
      }
      image5 {
       ...CoreImageFields
      }
      image6 {
       ...CoreImageFields
      }
      image7 {
       ...CoreImageFields
      }
      image8 {
       ...CoreImageFields
      }
    }
`;
