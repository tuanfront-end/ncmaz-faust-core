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

// MEDIA =================================================
const NC_IMAGE_MEDIA_FIELDS = `
  id
  altText
  caption
  databaseId
  sizes
  sourceUrl
  srcSet
`;

//  POSTS =================================================

const NC_POST_META_DATA_FIELD = `
  reactionLikedList
  savedList
  showRightSidebar
  singlePageStyle
  viewsCount
  readingTime
`;

const POST_COMMONT_FIELDS_HAS_CONTENT = `
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
           ${NC_IMAGE_MEDIA_FIELDS}
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
       ${NC_IMAGE_MEDIA_FIELDS}
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
      ${NC_POST_META_DATA_FIELD}
    }
    ncmazGalleryImgs {
      image1 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image2 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image3 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image4 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image5 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image6 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image7 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image8 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
    }
`;

const POST_COMMONT_FIELDS = `
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
           ${NC_IMAGE_MEDIA_FIELDS}
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
       ${NC_IMAGE_MEDIA_FIELDS}
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
      ${NC_POST_META_DATA_FIELD}
    }
    ncmazGalleryImgs {
      image1 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image2 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image3 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image4 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image5 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image6 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image7 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
      image8 {
       ${NC_IMAGE_MEDIA_FIELDS}
      }
    }
`;
