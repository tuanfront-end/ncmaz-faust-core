"use strict";
(self["webpackChunkncmazfaustcore"] = self["webpackChunkncmazfaustcore"] || []).push([["src_frontend-components_SectionMagazines_SectionMagazine6_tsx"],{

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

/***/ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx":
/*!***************************************************************!*\
  !*** ./src/frontend-components/PostCardMeta/PostCardMeta.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar/Avatar */ "./src/frontend-components/Avatar/Avatar.tsx");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.ts");




const PostCardMeta = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal"
}) => {
  let {
    date,
    author
  } = meta;
  author = author?.node;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostCardMeta inline-flex items-center  text-neutral-800 dark:text-neutral-200 truncate ${size === "normal" ? "text-xs" : "text-base"} ${className}`,
    "data-nc-id": "PostCardMeta"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: author?.url + author?.uri,
    className: "relative flex items-center space-x-2 truncate"
  }, !hiddenAvatar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    radius: "rounded-full",
    sizeClass: size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl",
    imgUrl: author?.avatar?.url,
    userName: author?.username
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate py-1"
  }, author?.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
  }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 font-normal flex-shrink-0"
  }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_3__["default"])(date))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardMeta);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine6.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine6.tsx ***!
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
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardAuthor2/CardAuthor2 */ "./src/frontend-components/CardAuthor2/CardAuthor2.tsx");
/* harmony import */ var _PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardMeta/PostCardMeta */ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx");





const SectionMagazine6 = ({
  activePosts
}) => {
  const renderMain = () => {
    const {
      featuredImage,
      author,
      title,
      date,
      excerpt,
      link,
      ncPostMetaData
    } = activePosts[0].node;
    const subPosts = activePosts.filter((_, i) => i > 0);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
      className: "relative"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      containerClassName: "absolute inset-0",
      src: featuredImage?.node.sourceUrl,
      srcSet: featuredImage?.node.srcSet
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-white"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: link,
      className: "line-clamp-2"
    }, title)), excerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "hidden lg:block text-base text-neutral-200 mt-5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "line-clamp-2",
      dangerouslySetInnerHTML: {
        __html: excerpt
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-7"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardAuthor2_CardAuthor2__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hoverReadingTime: false,
      readingTimeShortcode: ncPostMetaData.readingTimeShortcode || "",
      date: date,
      author: author
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flow-root h-full w-full overflow-y-auto hiddenScrollbar"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700"
    }, subPosts.map((post, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: i,
      className: "block py-5 lg:py-7"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "nc-card-title text-base font-semibold"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: post.node.title,
      href: post.node.link,
      className: "line-clamp-2"
    }, post.node.title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "mt-4",
      meta: post.node
    })))))));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, activePosts[0] && renderMain());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionMagazine6);

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

/***/ })

}]);
//# sourceMappingURL=src_frontend-components_SectionMagazines_SectionMagazine6_tsx.js.map