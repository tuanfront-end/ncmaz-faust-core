"use strict";
(self["webpackChunkncmazfaustcore"] = self["webpackChunkncmazfaustcore"] || []).push([["src_frontend-components_SectionMagazines_SectionMagazine7_tsx"],{

/***/ "./src/contains/contants.ts":
/*!**********************************!*\
  !*** ./src/contains/contants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NC_IMAGE_MEDIA_FIELDS: () => (/* binding */ NC_IMAGE_MEDIA_FIELDS),
/* harmony export */   NC_POST_META_DATA_FIELD: () => (/* binding */ NC_POST_META_DATA_FIELD),
/* harmony export */   POST_COMMONT_FIELDS: () => (/* binding */ POST_COMMONT_FIELDS),
/* harmony export */   POST_COMMONT_FIELDS_HAS_CONTENT: () => (/* binding */ POST_COMMONT_FIELDS_HAS_CONTENT),
/* harmony export */   XXXXXXX: () => (/* binding */ XXXXXXX),
/* harmony export */   avatarColors: () => (/* binding */ avatarColors)
/* harmony export */ });
const avatarColors = ["#ffdd00", "#fbb034", "#ff4c4c", "#c1d82f", "#f48924", "#7ac143", "#30c39e", "#06BCAE", "#0695BC", "#037ef3", "#146eb4", "#8e43e7", "#ea1d5d", "#fc636b", "#ff6319", "#e01f3d", "#a0ac48", "#00d1b2", "#472f92", "#388ed1", "#a6192e", "#4a8594", "#7B9FAB", "#1393BD", "#5E13BD", "#E208A7"];

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
const XXXXXXX = `
commentCount
date
excerpt
`;
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

/***/ }),

/***/ "./src/frontend-components/Avatar/Avatar.tsx":
/*!***************************************************!*\
  !*** ./src/frontend-components/Avatar/Avatar.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contains_contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contains/contants */ "./src/contains/contants.ts");
/* harmony import */ var _utils_getImageSizesBySizeName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getImageSizesBySizeName */ "./src/utils/getImageSizesBySizeName.ts");




const Avatar = ({
  containerClassName = "ring-1 ring-white dark:ring-neutral-900",
  sizeClass = "h-6 w-6 text-sm",
  radius = "rounded-md",
  imgUrl,
  userName,
  imageSizes = "THUMBNAIL",
  srcSet = undefined
}) => {
  let SIZES = (0,_utils_getImageSizesBySizeName__WEBPACK_IMPORTED_MODULE_3__["default"])({
    sizeName: imageSizes
  });
  const url = imgUrl || "";
  const name = userName || "John Doe";
  const _setBgColor = name => {
    const backgroundIndex = Math.floor(name.charCodeAt(0) % _contains_contants__WEBPACK_IMPORTED_MODULE_2__.avatarColors.length);
    return _contains_contants__WEBPACK_IMPORTED_MODULE_2__.avatarColors[backgroundIndex];
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`,
    style: {
      backgroundColor: url ? undefined : _setBgColor(name)
    }
  }, url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "absolute inset-0 w-full h-full object-cover",
    src: url,
    srcSet: srcSet,
    alt: name,
    sizes: SIZES
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wil-avatar__name"
  }, name[0]));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

/***/ }),

/***/ "./src/frontend-components/Badge/Badge.tsx":
/*!*************************************************!*\
  !*** ./src/frontend-components/Badge/Badge.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Badge = ({
  className = "relative",
  name,
  color = "pink",
  href = ""
}) => {
  const getColorClass = (hasHover = true) => {
    switch (color) {
      case "pink":
        return `text-pink-800 bg-pink-100 ${hasHover ? "hover:bg-pink-800" : ""}`;
      case "red":
        return `text-red-800 bg-red-100 ${hasHover ? "hover:bg-red-800" : ""}`;
      case "gray":
        return `text-gray-800 bg-gray-100 ${hasHover ? "hover:bg-gray-800" : ""}`;
      case "green":
        return `text-green-800 bg-green-100 ${hasHover ? "hover:bg-green-800" : ""}`;
      case "purple":
        return `text-purple-800 bg-purple-100 ${hasHover ? "hover:bg-purple-800" : ""}`;
      case "indigo":
        return `text-indigo-800 bg-indigo-100 ${hasHover ? "hover:bg-indigo-800" : ""}`;
      case "yellow":
        return `text-yellow-800 bg-yellow-100 ${hasHover ? "hover:bg-yellow-800" : ""}`;
      case "blue":
        return `text-blue-800 bg-blue-100 ${hasHover ? "hover:bg-blue-800" : ""}`;
      default:
        return `text-pink-800 bg-pink-100 ${hasHover ? "hover:bg-pink-800" : ""}`;
    }
  };
  const CLASSES = "nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs " + className;
  return !!href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: href || "",
    className: `transition-colors hover:text-white duration-300 ${CLASSES} ${getColorClass()}`
  }, name) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${CLASSES} ${getColorClass(false)} ${className}`
  }, name);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ "./src/frontend-components/Card10/Card10.tsx":
/*!***************************************************!*\
  !*** ./src/frontend-components/Card10/Card10.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardMeta_PostCardMetaV2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardMeta/PostCardMetaV2 */ "./src/frontend-components/PostCardMeta/PostCardMetaV2.tsx");
/* harmony import */ var _PostCardLikeAction_PostCardLikeAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAction/PostCardLikeAction */ "./src/frontend-components/PostCardLikeAction/PostCardLikeAction.tsx");






const Card10 = ({
  className = "h-full",
  post
}) => {
  const {
    link,
    categories,
    ncPostMetaData,
    featuredImage
  } = post;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card10 relative flex flex-col ${className}`,
    "data-nc-id": "Card10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "block  group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-10 overflow-hidden"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: featuredImage?.node.sourceUrl,
    srcSet: featuredImage?.node.srcSet
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute top-3 inset-x-3 flex justify-between items-start space-x-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAction_PostCardLikeAction__WEBPACK_IMPORTED_MODULE_5__["default"], {
    favoriteButtonShortcode: ncPostMetaData.favoriteButtonShortcode || ""
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5 mt-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMetaV2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "leading-none",
    meta: post
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card10);

/***/ }),

/***/ "./src/frontend-components/Card10/Card10V3.tsx":
/*!*****************************************************!*\
  !*** ./src/frontend-components/Card10/Card10V3.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");
/* harmony import */ var _CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardAuthor2/CardAuthor2 */ "./src/frontend-components/CardAuthor2/CardAuthor2.tsx");
/* harmony import */ var _utils_getImgsFromNcmazGalleryImgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/getImgsFromNcmazGalleryImgs */ "./src/utils/getImgsFromNcmazGalleryImgs.ts");







const Card10V3 = ({
  className = "h-full",
  post,
  galleryType = 1,
  isSkeleton
}) => {
  const {
    title,
    link,
    categories,
    postFormats,
    ncmazGalleryImgs,
    author,
    date,
    ncPostMetaData,
    featuredImage
  } = post;
  const galleryImgs = (0,_utils_getImgsFromNcmazGalleryImgs__WEBPACK_IMPORTED_MODULE_6__["default"])(ncmazGalleryImgs);
  const renderGallery2 = () => {
    if (!galleryImgs) return null;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full h-full grid grid-cols-1 grid-rows-2 gap-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-3 gap-2 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative col-span-2",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[0]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[1]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-3 gap-2 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[2]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative col-span-2",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[3]
    })));
  };
  const renderGallery = () => {
    if (!galleryImgs) return null;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full h-full grid grid-cols-3 gap-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-1 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[0]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-1 grid-rows-2 gap-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[1]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[2]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      containerClassName: "relative",
      className: "absolute inset-0 object-cover w-full h-full",
      src: isSkeleton ? "." : galleryImgs[3]
    })));
  };
  const renderFeaturedImage = () => {
    if (postFormats?.edges[0]?.node.slug !== "post-format-gallery" || !galleryImgs?.length) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        containerClassName: "absolute inset-0",
        src: featuredImage?.node.sourceUrl
      }));
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, galleryType === 1 ? renderGallery() : renderGallery2());
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card10V3 group relative flex flex-col ${className}`,
    "data-nc-id": "Card10V3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden"
  }, renderFeaturedImage(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute top-3 inset-x-3 flex justify-between items-start space-x-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5 mt-4 px-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "line-clamp-1",
    title: title
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mt-3",
    author: author,
    hoverReadingTime: false,
    date: date,
    readingTimeShortcode: ncPostMetaData.readingTimeShortcode
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card10V3);

/***/ }),

/***/ "./src/frontend-components/CardAuthor2/CardAuthor2.tsx":
/*!*************************************************************!*\
  !*** ./src/frontend-components/CardAuthor2/CardAuthor2.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.ts");
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar/Avatar */ "./src/frontend-components/Avatar/Avatar.tsx");




const CardAuthor2 = ({
  className = "",
  author,
  readingTimeShortcode = "",
  date,
  hoverReadingTime = true
}) => {
  if (!author) {
    return null;
  }
  const {
    node
  } = author;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: node.url + node.uri,
    className: `nc-CardAuthor2 relative inline-flex items-center ${className}`,
    "data-nc-id": "CardAuthor2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sizeClass: "h-10 w-10 text-base",
    containerClassName: "flex-shrink-0 mr-3",
    radius: "rounded-full",
    imgUrl: node.avatar?.url,
    userName: node.username
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium`
  }, node.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__["default"])(date)), readingTimeShortcode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `hidden lg:inline mx-1 transition-opacity ${hoverReadingTime ? "opacity-0 group-hover:opacity-100" : ""}`
  }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `hidden lg:inline transition-opacity ${hoverReadingTime ? "opacity-0 group-hover:opacity-100" : ""}`,
    dangerouslySetInnerHTML: {
      __html: readingTimeShortcode
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardAuthor2);

/***/ }),

/***/ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx":
/*!*************************************************************************!*\
  !*** ./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Badge_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Badge/Badge */ "./src/frontend-components/Badge/Badge.tsx");



const CategoryBadgeList = ({
  className = "",
  itemClass = "",
  categories
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-CategoryBadgeList flow-root `,
    "data-nc-id": "CategoryBadgeList"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `flex flex-wrap space-x-2 -my-1 ${className}`
  }, categories.edges.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Badge_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `relative my-1 ${itemClass}`,
    key: index,
    name: item.node.name,
    href: item.node.link
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryBadgeList);

/***/ }),

/***/ "./src/frontend-components/NcImage/NcImage.tsx":
/*!*****************************************************!*\
  !*** ./src/frontend-components/NcImage/NcImage.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getImageSizesBySizeName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/getImageSizesBySizeName */ "./src/utils/getImageSizesBySizeName.ts");



const NcImage = ({
  containerClassName = "",
  alt = "nc-imgs",
  className = "object-cover w-full h-full",
  loading = "lazy",
  src,
  sizes,
  imageSizes = window.innerWidth < 475 ? "MEDIUM" : "MEDIUM_LARGE",
  ...args
}) => {
  let SIZES = (0,_utils_getImageSizesBySizeName__WEBPACK_IMPORTED_MODULE_2__["default"])({
    sizeName: imageSizes,
    sizes
  });
  const renderLoadingPlaceholder = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "h-2/4 max-w-[50%]"
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-NcImage ${containerClassName}`,
    "data-nc-id": "NcImage"
  }, !!src && src.includes("http") ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: src,
    alt: alt,
    className: className,
    loading: loading,
    ...args,
    sizes: SIZES
    // srcSet="http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732.jpg 960w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-240x300.jpg 240w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-819x1024.jpg 819w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-768x960.jpg 768w"
  }) : renderLoadingPlaceholder());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NcImage);

/***/ }),

/***/ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx":
/*!*********************************************************************************!*\
  !*** ./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PostCardDropdownShare = () => {
  const renderButton = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "24",
      height: "24",
      fill: "none",
      viewBox: "0 0 24 24"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.1",
      d: "M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.1",
      d: "M12 14.25L12 5"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.1",
      d: "M8.75 8.25L12 4.75L15.25 8.25"
    })));
  };
  return renderButton();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardDropdownShare);

/***/ }),

/***/ "./src/frontend-components/PostCardLikeAction/PostCardLikeAction.tsx":
/*!***************************************************************************!*\
  !*** ./src/frontend-components/PostCardLikeAction/PostCardLikeAction.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PostCardLikeAction = ({
  favoriteButtonShortcode,
  className = "relative"
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: favoriteButtonShortcode
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardLikeAction);

/***/ }),

/***/ "./src/frontend-components/PostCardMeta/PostCardMetaV2.tsx":
/*!*****************************************************************!*\
  !*** ./src/frontend-components/PostCardMeta/PostCardMetaV2.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.ts");
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar/Avatar */ "./src/frontend-components/Avatar/Avatar.tsx");




const PostCardMetaV2 = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal"
}) => {
  let {
    date,
    author,
    title
  } = meta;
  author = author?.node;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${size === "normal" ? "text-xs" : "text-sm"} ${className}`,
    "data-nc-id": "PostCardMetaV2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "relative flex space-x-2"
  }, !hiddenAvatar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    radius: "rounded-full",
    sizeClass: size === "normal" ? "h-9 w-9 text-base" : "h-10 w-10 text-xl",
    imgUrl: author?.avatar?.url,
    userName: author?.name
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `block font-semibold nc-card-title ${size === "normal" ? "text-base" : "text-lg"}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-2",
    dangerouslySetInnerHTML: {
      __html: title
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex mt-1.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
  }, author?.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
  }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 font-normal"
  }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__["default"])(date))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardMetaV2);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine7.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine7.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card10_Card10V3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card10/Card10V3 */ "./src/frontend-components/Card10/Card10V3.tsx");
/* harmony import */ var _Card10_Card10__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card10/Card10 */ "./src/frontend-components/Card10/Card10.tsx");




const SectionMagazine7 = ({
  activePosts,
  isLoading = false
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid grid-cols-1 gap-6 md:gap-8`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2`
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card10_Card10V3__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    post: activePosts[0].node
  }), activePosts[1] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card10_Card10V3__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSkeleton: isLoading,
    galleryType: 2,
    post: activePosts[1].node
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3"
  }, activePosts.filter((_, i) => i > 1).map(post => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card10_Card10__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: post.node.id,
    post: post.node
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionMagazine7);

/***/ }),

/***/ "./src/utils/formatDate.ts":
/*!*********************************!*\
  !*** ./src/utils/formatDate.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ncFormatDate)
/* harmony export */ });
function ncFormatDate(date) {
  // CAN LAM THEM PHAN DATE FOrMAT ---- get_option(date_format)

  let d = new Date(date);
  let ye = new Intl.DateTimeFormat("en", {
    year: "numeric"
  }).format(d);
  let mo = new Intl.DateTimeFormat("en", {
    month: "short"
  }).format(d);
  let da = new Intl.DateTimeFormat("en", {
    day: "2-digit"
  }).format(d);
  return `${mo} ${da}, ${ye}`;
}

/***/ }),

/***/ "./src/utils/getImageSizesBySizeName.ts":
/*!**********************************************!*\
  !*** ./src/utils/getImageSizesBySizeName.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getImageSizesBySizeName = ({
  sizeName,
  sizes
}) => {
  let SIZES;
  switch (sizeName) {
    case "THUMBNAIL":
      SIZES = "(max-width: 150px) 100vw, 150px";
      break;
    case "MEDIUM":
      SIZES = "(max-width: 475px) 100vw, 475px";
      break;
    case "MEDIUM_LARGE":
      SIZES = "(max-width: 768px) 100vw, 768px";
      break;
    case "LARGE":
      SIZES = "(max-width: 1024px) 100vw, 1024px";
      break;
    case "_1536X1536":
      SIZES = "(max-width: 1536px) 100vw, 1536px";
      break;
    case "_2048X2048":
      SIZES = "(max-width: 1600px) 100vw, 1600px";
      break;
    case "IS_SIZES":
      SIZES = sizes;
      break;
    default:
      break;
  }
  return SIZES;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getImageSizesBySizeName);

/***/ }),

/***/ "./src/utils/getImgsFromNcmazGalleryImgs.ts":
/*!**************************************************!*\
  !*** ./src/utils/getImgsFromNcmazGalleryImgs.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getImgsFromNcmazGalleryImgs(ncmazGalleryImgs) {
  const {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  } = ncmazGalleryImgs;
  const arr = [(image1 || {}).sourceUrl, (image2 || {}).sourceUrl, (image3 || {}).sourceUrl, (image4 || {}).sourceUrl, (image5 || {}).sourceUrl, (image6 || {}).sourceUrl, (image7 || {}).sourceUrl, (image8 || {}).sourceUrl].filter(item => !!item);
  return arr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getImgsFromNcmazGalleryImgs);

/***/ })

}]);
//# sourceMappingURL=src_frontend-components_SectionMagazines_SectionMagazine7_tsx.js.map