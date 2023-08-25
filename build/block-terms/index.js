/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon({
  icon,
  size = 24,
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/file.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/file.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const file = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (file);
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "./src/__generated__/fragment-masking.ts":
/*!***********************************************!*\
  !*** ./src/__generated__/fragment-masking.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFragmentReady: () => (/* binding */ isFragmentReady),
/* harmony export */   makeFragmentData: () => (/* binding */ makeFragmentData),
/* harmony export */   useFragment: () => (/* binding */ useFragment)
/* harmony export */ });
// return non-nullable if `fragmentType` is non-nullable

// return nullable if `fragmentType` is nullable

// return array of non-nullable if `fragmentType` is array of non-nullable

// return array of nullable if `fragmentType` is array of nullable

function useFragment(_documentNode, fragmentType) {
  return fragmentType;
}
function makeFragmentData(data, _fragment) {
  return data;
}
function isFragmentReady(queryNode, fragmentNode, data) {
  const deferredFields = queryNode.__meta__?.deferredFields;
  if (!deferredFields) return true;
  const fragDef = fragmentNode.definitions[0];
  const fragName = fragDef?.name?.value;
  const fields = fragName && deferredFields[fragName] || [];
  return fields.length > 0 && fields.every(field => data && field in data);
}

/***/ }),

/***/ "./src/__generated__/gql.ts":
/*!**********************************!*\
  !*** ./src/__generated__/gql.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gql: () => (/* binding */ gql)
/* harmony export */ });
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql */ "./src/__generated__/graphql.ts");
/* eslint-disable */

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n\tfragment NcmazFcTagShortFieldsFragment on Tag {\n\t\t__typename\n\t\tname\n\t\turi\n\t\tdatabaseId\n\t\tcount\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcTagShortFieldsFragmentFragmentDoc,
  "\n\tfragment NcmazFcTagFullFieldsFragment on Tag {\n\t\t...NcmazFcTagShortFieldsFragment\n\t\tdescription\n\t\tcount\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcTagFullFieldsFragmentFragmentDoc,
  "\n\tfragment NcmazFcCategoryFullFieldsFragment on Category {\n\t\t__typename\n\t\tdatabaseId\n\t\tdescription\n\t\tname\n\t\turi\n\t\tcount\n\t\tncTaxonomyMeta {\n\t\t\tcolor\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcCategoryFullFieldsFragmentFragmentDoc,
  "\n\tfragment NcmazFcCategoryCardFieldsNotImage on Category {\n\t\t__typename\n\t\tname\n\t\turi\n\t\tcount\n\t\tdatabaseId\n\t\tncTaxonomyMeta {\n\t\t\tcolor\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcCategoryCardFieldsNotImageFragmentDoc,
  "\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\tnodes {\n\t\t\t...NcmazFcPostCardFields\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostsEdegsFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostFullFields on Post {\n\t\t__typename\n\t\turi\n\t\tmodified\n\t\tdate\n\t\tcommentStatus\n\t\tstatus\n\t\tcommentCount\n\t\texcerpt\n\t\tdatabaseId\n\t\ttitle\n\t\tcontent\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tdescription\n\t\t\t\t...NcmazFcUserShortForPostCardFragment\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcCategoryCardFieldsNotImage\n\t\t\t}\n\t\t}\n\t\ttags(first: 20) {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcTagShortFieldsFragment\n\t\t\t}\n\t\t}\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFullFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostFullFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostCardFields on Post {\n\t\t...NcmazFcPostCardFieldsNOTNcmazGalleryImgs\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostCardFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostCardFieldsNOTNcmazGalleryImgs on Post {\n\t\t__typename\n\t\tdatabaseId\n\t\ttitle\n\t\turi\n\t\tstatus\n\t\tmodified\n\t\tdate\n\t\tcommentStatus\n\t\tcommentCount\n\t\texcerpt\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\t...NcmazFcUserShortForPostCardFragment\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcCategoryCardFieldsNotImage\n\t\t\t}\n\t\t}\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tnodes {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostCardFieldsNotNcmazGalleryImgsFragmentDoc,
  "\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\taltText\n\t\tdatabaseId\n\t\tsourceUrl\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcImageFieldsFragmentDoc,
  "\n\tfragment NcmazFcImageHasDetailFields on MediaItem {\n\t\t__typename\n\t\taltText\n\t\tdatabaseId\n\t\tsourceUrl\n\t\tcaption\n\t\tmediaDetails {\n\t\t\theight\n\t\t\twidth\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcImageHasDetailFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostMetaFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostMetaFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostMetaFullFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t\tsavedsCount\n\t\tshowRightSidebar\n\t\ttemplate\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostMetaFullFieldsFragmentDoc,
  "\n\tfragment NcmazFcUserShortForPostCardFragment on User {\n\t\tdatabaseId\n\t\turi\n\t\tusername\n\t\tname\n\t\tncUserMeta {\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcUserShortForPostCardFragmentFragmentDoc,
  "\n\tfragment NcmazFcUserFullFields on User {\n\t\tid\n\t\tdatabaseId\n\t\turi\n\t\tusername\n\t\tname\n\t\tdescription\n\t\tncUserMeta {\n\t\t\tbuymeacoffeUrl\n\t\t\tcolor\n\t\t\tfacebookUrl\n\t\t\tgithubUrl\n\t\t\tinstagramUrl\n\t\t\tlinkedinUrl\n\t\t\tmediumUrl\n\t\t\tncBio\n\t\t\tpinterestUrl\n\t\t\ttwitchUrl\n\t\t\ttwitterUrl\n\t\t\tvimeoUrl\n\t\t\twebsiteUrl\n\t\t\tyoutubeUrl\n\t\t\ttiktokUrl\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcUserFullFieldsFragmentDoc
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

function gql(source) {
  var _source;
  return (_source = documents[source]) !== null && _source !== void 0 ? _source : {};
}

/***/ }),

/***/ "./src/__generated__/graphql.ts":
/*!**************************************!*\
  !*** ./src/__generated__/graphql.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarRatingEnum: () => (/* binding */ AvatarRatingEnum),
/* harmony export */   CategoryIdType: () => (/* binding */ CategoryIdType),
/* harmony export */   CommentNodeIdTypeEnum: () => (/* binding */ CommentNodeIdTypeEnum),
/* harmony export */   CommentStatusEnum: () => (/* binding */ CommentStatusEnum),
/* harmony export */   CommentsConnectionOrderbyEnum: () => (/* binding */ CommentsConnectionOrderbyEnum),
/* harmony export */   ContentNodeIdTypeEnum: () => (/* binding */ ContentNodeIdTypeEnum),
/* harmony export */   ContentTypeEnum: () => (/* binding */ ContentTypeEnum),
/* harmony export */   ContentTypeIdTypeEnum: () => (/* binding */ ContentTypeIdTypeEnum),
/* harmony export */   ContentTypesOfCategoryEnum: () => (/* binding */ ContentTypesOfCategoryEnum),
/* harmony export */   ContentTypesOfPostFormatEnum: () => (/* binding */ ContentTypesOfPostFormatEnum),
/* harmony export */   ContentTypesOfTagEnum: () => (/* binding */ ContentTypesOfTagEnum),
/* harmony export */   GlobalStylesheetTypesEnum: () => (/* binding */ GlobalStylesheetTypesEnum),
/* harmony export */   GraphqlDocumentIdType: () => (/* binding */ GraphqlDocumentIdType),
/* harmony export */   MediaItemIdType: () => (/* binding */ MediaItemIdType),
/* harmony export */   MediaItemSizeEnum: () => (/* binding */ MediaItemSizeEnum),
/* harmony export */   MediaItemStatusEnum: () => (/* binding */ MediaItemStatusEnum),
/* harmony export */   MenuItemNodeIdTypeEnum: () => (/* binding */ MenuItemNodeIdTypeEnum),
/* harmony export */   MenuLocationEnum: () => (/* binding */ MenuLocationEnum),
/* harmony export */   MenuNodeIdTypeEnum: () => (/* binding */ MenuNodeIdTypeEnum),
/* harmony export */   MimeTypeEnum: () => (/* binding */ MimeTypeEnum),
/* harmony export */   NcmazFcCategoryCardFieldsNotImageFragmentDoc: () => (/* binding */ NcmazFcCategoryCardFieldsNotImageFragmentDoc),
/* harmony export */   NcmazFcCategoryFullFieldsFragmentFragmentDoc: () => (/* binding */ NcmazFcCategoryFullFieldsFragmentFragmentDoc),
/* harmony export */   NcmazFcImageFieldsFragmentDoc: () => (/* binding */ NcmazFcImageFieldsFragmentDoc),
/* harmony export */   NcmazFcImageHasDetailFieldsFragmentDoc: () => (/* binding */ NcmazFcImageHasDetailFieldsFragmentDoc),
/* harmony export */   NcmazFcPostCardFieldsFragmentDoc: () => (/* binding */ NcmazFcPostCardFieldsFragmentDoc),
/* harmony export */   NcmazFcPostCardFieldsNotNcmazGalleryImgsFragmentDoc: () => (/* binding */ NcmazFcPostCardFieldsNotNcmazGalleryImgsFragmentDoc),
/* harmony export */   NcmazFcPostFullFieldsFragmentDoc: () => (/* binding */ NcmazFcPostFullFieldsFragmentDoc),
/* harmony export */   NcmazFcPostMetaFieldsFragmentDoc: () => (/* binding */ NcmazFcPostMetaFieldsFragmentDoc),
/* harmony export */   NcmazFcPostMetaFullFieldsFragmentDoc: () => (/* binding */ NcmazFcPostMetaFullFieldsFragmentDoc),
/* harmony export */   NcmazFcPostsEdegsFieldsFragmentDoc: () => (/* binding */ NcmazFcPostsEdegsFieldsFragmentDoc),
/* harmony export */   NcmazFcTagFullFieldsFragmentFragmentDoc: () => (/* binding */ NcmazFcTagFullFieldsFragmentFragmentDoc),
/* harmony export */   NcmazFcTagShortFieldsFragmentFragmentDoc: () => (/* binding */ NcmazFcTagShortFieldsFragmentFragmentDoc),
/* harmony export */   NcmazFcUserFullFieldsFragmentDoc: () => (/* binding */ NcmazFcUserFullFieldsFragmentDoc),
/* harmony export */   NcmazFcUserReactionPostActionEnum: () => (/* binding */ NcmazFcUserReactionPostActionEnum),
/* harmony export */   NcmazFcUserReactionPostNumberUpdateEnum: () => (/* binding */ NcmazFcUserReactionPostNumberUpdateEnum),
/* harmony export */   NcmazFcUserReactionPostUpdateResuiltEnum: () => (/* binding */ NcmazFcUserReactionPostUpdateResuiltEnum),
/* harmony export */   NcmazFcUserShortForPostCardFragmentFragmentDoc: () => (/* binding */ NcmazFcUserShortForPostCardFragmentFragmentDoc),
/* harmony export */   OrderEnum: () => (/* binding */ OrderEnum),
/* harmony export */   PageIdType: () => (/* binding */ PageIdType),
/* harmony export */   PluginStatusEnum: () => (/* binding */ PluginStatusEnum),
/* harmony export */   PostFormatIdType: () => (/* binding */ PostFormatIdType),
/* harmony export */   PostIdType: () => (/* binding */ PostIdType),
/* harmony export */   PostObjectFieldFormatEnum: () => (/* binding */ PostObjectFieldFormatEnum),
/* harmony export */   PostObjectsConnectionDateColumnEnum: () => (/* binding */ PostObjectsConnectionDateColumnEnum),
/* harmony export */   PostObjectsConnectionOrderbyEnum: () => (/* binding */ PostObjectsConnectionOrderbyEnum),
/* harmony export */   PostStatusEnum: () => (/* binding */ PostStatusEnum),
/* harmony export */   RelationEnum: () => (/* binding */ RelationEnum),
/* harmony export */   TagIdType: () => (/* binding */ TagIdType),
/* harmony export */   TaxonomyEnum: () => (/* binding */ TaxonomyEnum),
/* harmony export */   TaxonomyIdTypeEnum: () => (/* binding */ TaxonomyIdTypeEnum),
/* harmony export */   TermNodeIdTypeEnum: () => (/* binding */ TermNodeIdTypeEnum),
/* harmony export */   TermObjectsConnectionOrderbyEnum: () => (/* binding */ TermObjectsConnectionOrderbyEnum),
/* harmony export */   UserNodeIdTypeEnum: () => (/* binding */ UserNodeIdTypeEnum),
/* harmony export */   UserReactionPostIdType: () => (/* binding */ UserReactionPostIdType),
/* harmony export */   UserRoleEnum: () => (/* binding */ UserRoleEnum),
/* harmony export */   UsersConnectionOrderbyEnum: () => (/* binding */ UsersConnectionOrderbyEnum),
/* harmony export */   UsersConnectionSearchColumnEnum: () => (/* binding */ UsersConnectionSearchColumnEnum)
/* harmony export */ });
/* eslint-disable */ /** All built-in and custom scalars, mapped to their actual values */ /** A Field Group managed by ACF */ /** Fields associated with an ACF Field Group */ /** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */ /** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */let AvatarRatingEnum=/*#__PURE__*/function(AvatarRatingEnum){AvatarRatingEnum["G"]="G";AvatarRatingEnum["Pg"]="PG";AvatarRatingEnum["R"]="R";AvatarRatingEnum["X"]="X";return AvatarRatingEnum;}({});/** Block that supports Anchor field */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** Connection to category Nodes */ /** Edge between a Node and a connected category */ /** Page Info on the connected CategoryConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let CategoryIdType=/*#__PURE__*/function(CategoryIdType){CategoryIdType["DatabaseId"]="DATABASE_ID";CategoryIdType["Id"]="ID";CategoryIdType["Name"]="NAME";CategoryIdType["Slug"]="SLUG";CategoryIdType["Uri"]="URI";return CategoryIdType;}({});/** Connection between the Category type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */ /** Connection between the Category type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToCategoryConnection&quot; */ /** Arguments for filtering the CategoryToCategoryConnection connection */ /** Connection between the Category type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToContentNodeConnection&quot; */ /** Arguments for filtering the CategoryToContentNodeConnection connection */ /** Connection between the Category type and the category type */ /** Connection between the Category type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToPostConnection&quot; */ /** Arguments for filtering the CategoryToPostConnection connection */ /** Connection between the Category type and the Taxonomy type */ /** A Comment object */ /** A Comment object */ /** A Comment object */ /** A Comment object */ /** A Comment Author object */ /** A Comment Author object */ /** Connection to Comment Nodes */ /** Edge between a Node and a connected Comment */ /** Page Info on the connected CommentConnectionEdge */ /** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */let CommentNodeIdTypeEnum=/*#__PURE__*/function(CommentNodeIdTypeEnum){CommentNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";CommentNodeIdTypeEnum["Id"]="ID";return CommentNodeIdTypeEnum;}({});/** The status of the comment object. */let CommentStatusEnum=/*#__PURE__*/function(CommentStatusEnum){CommentStatusEnum["Approve"]="APPROVE";CommentStatusEnum["Hold"]="HOLD";CommentStatusEnum["Spam"]="SPAM";CommentStatusEnum["Trash"]="TRASH";return CommentStatusEnum;}({});/** Connection between the Comment type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;CommentToCommentConnection&quot; */ /** Arguments for filtering the CommentToCommentConnection connection */ /** Connection between the Comment type and the Commenter type */ /** Connection between the Comment type and the ContentNode type */ /** Connection between the Comment type and the Comment type */ /** Arguments for filtering the CommentToParentCommentConnection connection */ /** The author of a comment */ /** Edge between a Node and a connected Commenter */ /** Options for ordering the connection */let CommentsConnectionOrderbyEnum=/*#__PURE__*/function(CommentsConnectionOrderbyEnum){CommentsConnectionOrderbyEnum["CommentAgent"]="COMMENT_AGENT";CommentsConnectionOrderbyEnum["CommentApproved"]="COMMENT_APPROVED";CommentsConnectionOrderbyEnum["CommentAuthor"]="COMMENT_AUTHOR";CommentsConnectionOrderbyEnum["CommentAuthorEmail"]="COMMENT_AUTHOR_EMAIL";CommentsConnectionOrderbyEnum["CommentAuthorIp"]="COMMENT_AUTHOR_IP";CommentsConnectionOrderbyEnum["CommentAuthorUrl"]="COMMENT_AUTHOR_URL";CommentsConnectionOrderbyEnum["CommentContent"]="COMMENT_CONTENT";CommentsConnectionOrderbyEnum["CommentDate"]="COMMENT_DATE";CommentsConnectionOrderbyEnum["CommentDateGmt"]="COMMENT_DATE_GMT";CommentsConnectionOrderbyEnum["CommentId"]="COMMENT_ID";CommentsConnectionOrderbyEnum["CommentIn"]="COMMENT_IN";CommentsConnectionOrderbyEnum["CommentKarma"]="COMMENT_KARMA";CommentsConnectionOrderbyEnum["CommentParent"]="COMMENT_PARENT";CommentsConnectionOrderbyEnum["CommentPostId"]="COMMENT_POST_ID";CommentsConnectionOrderbyEnum["CommentType"]="COMMENT_TYPE";CommentsConnectionOrderbyEnum["UserId"]="USER_ID";return CommentsConnectionOrderbyEnum;}({});/** GraphQL representation of WordPress Conditional Tags. */ /** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */ /** Nodes used to manage content */ /** Nodes used to manage content */ /** Nodes used to manage content */ /** Connection to ContentNode Nodes */ /** Edge between a Node and a connected ContentNode */ /** Page Info on the connected ContentNodeConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let ContentNodeIdTypeEnum=/*#__PURE__*/function(ContentNodeIdTypeEnum){ContentNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";ContentNodeIdTypeEnum["Id"]="ID";ContentNodeIdTypeEnum["Uri"]="URI";return ContentNodeIdTypeEnum;}({});/** Connection between the ContentNode type and the ContentType type */ /** Connection between the ContentNode type and the User type */ /** Connection between the ContentNode type and the User type */ /** Connection between the ContentNode type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */ /** Connection between the ContentNode type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */ /** The template assigned to a node of content */ /** An Post Type object */ /** An Post Type object */ /** An Post Type object */ /** Connection to ContentType Nodes */ /** Edge between a Node and a connected ContentType */ /** Page Info on the connected ContentTypeConnectionEdge */ /** Allowed Content Types */let ContentTypeEnum=/*#__PURE__*/function(ContentTypeEnum){ContentTypeEnum["Attachment"]="ATTACHMENT";ContentTypeEnum["GraphqlDocument"]="GRAPHQL_DOCUMENT";ContentTypeEnum["Page"]="PAGE";ContentTypeEnum["Post"]="POST";ContentTypeEnum["UserReactionPost"]="USER_REACTION_POST";return ContentTypeEnum;}({});/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */let ContentTypeIdTypeEnum=/*#__PURE__*/function(ContentTypeIdTypeEnum){ContentTypeIdTypeEnum["Id"]="ID";ContentTypeIdTypeEnum["Name"]="NAME";return ContentTypeIdTypeEnum;}({});/** Connection between the ContentType type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */ /** Arguments for filtering the ContentTypeToContentNodeConnection connection */ /** Connection between the ContentType type and the Taxonomy type */ /** An edge in a connection */ /** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */ /** Allowed Content Types of the Category taxonomy. */let ContentTypesOfCategoryEnum=/*#__PURE__*/function(ContentTypesOfCategoryEnum){ContentTypesOfCategoryEnum["Post"]="POST";return ContentTypesOfCategoryEnum;}({});/** Allowed Content Types of the PostFormat taxonomy. */let ContentTypesOfPostFormatEnum=/*#__PURE__*/function(ContentTypesOfPostFormatEnum){ContentTypesOfPostFormatEnum["Post"]="POST";return ContentTypesOfPostFormatEnum;}({});/** Allowed Content Types of the Tag taxonomy. */let ContentTypesOfTagEnum=/*#__PURE__*/function(ContentTypesOfTagEnum){ContentTypesOfTagEnum["Post"]="POST";return ContentTypesOfTagEnum;}({});/** A block used for editing the site */ /** Attributes of the CoreArchives Block Type */ /** A block used for editing the site */ /** Attributes of the CoreAudio Block Type */ /** A block used for editing the site */ /** Attributes of the CoreAvatar Block Type */ /** A block used for editing the site */ /** Attributes of the CoreBlock Block Type */ /** A block used for editing the site */ /** Attributes of the CoreButton Block Type */ /** A block used for editing the site */ /** Attributes of the CoreButtons Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCalendar Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCategories Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCode Block Type */ /** A block used for editing the site */ /** Attributes of the CoreColumn Block Type */ /** A block used for editing the site */ /** Attributes of the CoreColumns Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentAuthorName Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentContent Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentDate Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentEditLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentReplyLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentTemplate Block Type */ /** A block used for editing the site */ /** Attributes of the CoreComments Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPagination Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationNext Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationNumbers Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationPrevious Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCover Block Type */ /** A block used for editing the site */ /** Attributes of the CoreDetails Block Type */ /** A block used for editing the site */ /** Attributes of the CoreEmbed Block Type */ /** A block used for editing the site */ /** Attributes of the CoreFile Block Type */ /** A block used for editing the site */ /** Attributes of the CoreFootnotes Block Type */ /** A block used for editing the site */ /** Attributes of the CoreFreeform Block Type */ /** A block used for editing the site */ /** Attributes of the CoreGallery Block Type */ /** A block used for editing the site */ /** Attributes of the CoreGroup Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHeading Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHomeLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHtml Block Type */ /** A block used for editing the site */ /** Attributes of the CoreImage Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLatestComments Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLatestPosts Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLegacyWidget Block Type */ /** A block used for editing the site */ /** Attributes of the CoreList Block Type */ /** A block used for editing the site */ /** Attributes of the CoreListItem Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLoginout Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMediaText Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMissing Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMore Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigation Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigationLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigationSubmenu Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNextpage Block Type */ /** A block used for editing the site */ /** Attributes of the CorePageList Block Type */ /** A block used for editing the site */ /** Attributes of the CorePageListItem Block Type */ /** A block used for editing the site */ /** Attributes of the CoreParagraph Block Type */ /** A block used for editing the site */ /** Attributes of the CorePattern Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthor Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthorBiography Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthorName Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostComments Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostCommentsForm Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostContent Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostDate Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostExcerpt Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostFeaturedImage Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostNavigationLink Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTemplate Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTerms Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CorePreformatted Block Type */ /** A block used for editing the site */ /** Attributes of the CorePullquote Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQuery Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryNoResults Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPagination Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationNext Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationNumbers Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationPrevious Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQuote Block Type */ /** A block used for editing the site */ /** Attributes of the CoreReadMore Block Type */ /** A block used for editing the site */ /** Attributes of the CoreRss Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSearch Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSeparator Block Type */ /** A block used for editing the site */ /** Attributes of the CoreShortcode Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteLogo Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteTagline Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSocialLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSocialLinks Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSpacer Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTable Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTagCloud Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTemplatePart Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTermDescription Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTextColumns Block Type */ /** A block used for editing the site */ /** Attributes of the CoreVerse Block Type */ /** A block used for editing the site */ /** Attributes of the CoreVideo Block Type */ /** A block used for editing the site */ /** Attributes of the CoreWidgetGroup Block Type */ /** Input for the createCategory mutation. */ /** The payload for the createCategory mutation. */ /** Input for the createComment mutation. */ /** The payload for the createComment mutation. */ /** Input for the createGraphqlDocument mutation. */ /** The payload for the createGraphqlDocument mutation. */ /** Input for the createMediaItem mutation. */ /** The payload for the createMediaItem mutation. */ /** Input for the createPage mutation. */ /** The payload for the createPage mutation. */ /** Input for the createPostFormat mutation. */ /** The payload for the createPostFormat mutation. */ /** Input for the createPost mutation. */ /** The payload for the createPost mutation. */ /** Input for the createTag mutation. */ /** The payload for the createTag mutation. */ /** Input for the createUser mutation. */ /** The payload for the createUser mutation. */ /** Input for the createUserReactionPost mutation. */ /** The payload for the createUserReactionPost mutation. */ /** Object that can be identified with a Database ID */ /** Date values */ /** Filter the connection based on input */ /** The template assigned to the node */ /** Input for the deleteCategory mutation. */ /** The payload for the deleteCategory mutation. */ /** Input for the deleteComment mutation. */ /** The payload for the deleteComment mutation. */ /** Input for the deleteGraphqlDocument mutation. */ /** The payload for the deleteGraphqlDocument mutation. */ /** Input for the deleteMediaItem mutation. */ /** The payload for the deleteMediaItem mutation. */ /** Input for the deletePage mutation. */ /** The payload for the deletePage mutation. */ /** Input for the deletePostFormat mutation. */ /** The payload for the deletePostFormat mutation. */ /** Input for the deletePost mutation. */ /** The payload for the deletePost mutation. */ /** Input for the deleteTag mutation. */ /** The payload for the deleteTag mutation. */ /** Input for the deleteUser mutation. */ /** The payload for the deleteUser mutation. */ /** Input for the deleteUserReactionPost mutation. */ /** The payload for the deleteUserReactionPost mutation. */ /** The discussion setting type */ /** Relational context between connected nodes */ /** Blocks that can be edited to create content and layouts */ /** Asset enqueued by the CMS */ /** Script enqueued by the CMS */ /** Connection to EnqueuedScript Nodes */ /** Edge between a Node and a connected EnqueuedScript */ /** Page Info on the connected EnqueuedScriptConnectionEdge */ /** Stylesheet enqueued by the CMS */ /** Connection to EnqueuedStylesheet Nodes */ /** Edge between a Node and a connected EnqueuedStylesheet */ /** Page Info on the connected EnqueuedStylesheetConnectionEdge */ /** The general setting type */ /** Input for the generateAuthorizationCode mutation. */ /** The payload for the generateAuthorizationCode mutation. */ /** Types of styles to load */let GlobalStylesheetTypesEnum=/*#__PURE__*/function(GlobalStylesheetTypesEnum){GlobalStylesheetTypesEnum["BaseLayoutStyles"]="BASE_LAYOUT_STYLES";GlobalStylesheetTypesEnum["Presets"]="PRESETS";GlobalStylesheetTypesEnum["Styles"]="STYLES";GlobalStylesheetTypesEnum["Variables"]="VARIABLES";return GlobalStylesheetTypesEnum;}({});/** The graphqlDocument type */ /** The graphqlDocument type */ /** The graphqlDocument type */ /** The graphqlDocument type */ /** The graphqlDocument type */ /** Connection to graphqlDocument Nodes */ /** Edge between a Node and a connected graphqlDocument */ /** Page Info on the connected GraphqlDocumentConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let GraphqlDocumentIdType=/*#__PURE__*/function(GraphqlDocumentIdType){GraphqlDocumentIdType["DatabaseId"]="DATABASE_ID";GraphqlDocumentIdType["Id"]="ID";GraphqlDocumentIdType["Slug"]="SLUG";GraphqlDocumentIdType["Uri"]="URI";return GraphqlDocumentIdType;}({});/** Connection between the GraphqlDocument type and the graphqlDocument type */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */ /** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */ /** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** Node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** A block used for editing the site */ /** Attributes of the MailpoetSubscriptionFormBlock Block Type */ /** A block used for editing the site */ /** Attributes of the MailpoetSubscriptionFormBlockRender Block Type */ /** File details for a Media Item */ /** File details for a Media Item */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** Connection to mediaItem Nodes */ /** Edge between a Node and a connected mediaItem */ /** Page Info on the connected MediaItemConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let MediaItemIdType=/*#__PURE__*/function(MediaItemIdType){MediaItemIdType["DatabaseId"]="DATABASE_ID";MediaItemIdType["Id"]="ID";MediaItemIdType["Slug"]="SLUG";MediaItemIdType["SourceUrl"]="SOURCE_URL";MediaItemIdType["Uri"]="URI";return MediaItemIdType;}({});/** Meta connected to a MediaItem */ /** The size of the media item object. */let MediaItemSizeEnum=/*#__PURE__*/function(MediaItemSizeEnum){MediaItemSizeEnum["Large"]="LARGE";MediaItemSizeEnum["MailpoetNewsletterMax"]="MAILPOET_NEWSLETTER_MAX";MediaItemSizeEnum["Medium"]="MEDIUM";MediaItemSizeEnum["MediumLarge"]="MEDIUM_LARGE";MediaItemSizeEnum["Thumbnail"]="THUMBNAIL";MediaItemSizeEnum["1536X1536"]="_1536X1536";MediaItemSizeEnum["2048X2048"]="_2048X2048";return MediaItemSizeEnum;}({});/** The status of the media item object. */let MediaItemStatusEnum=/*#__PURE__*/function(MediaItemStatusEnum){MediaItemStatusEnum["AutoDraft"]="AUTO_DRAFT";MediaItemStatusEnum["Inherit"]="INHERIT";MediaItemStatusEnum["Private"]="PRIVATE";MediaItemStatusEnum["Trash"]="TRASH";return MediaItemStatusEnum;}({});/** Connection between the MediaItem type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;MediaItemToCommentConnection&quot; */ /** Arguments for filtering the MediaItemToCommentConnection connection */ /** Details of an available size for a media item */ /** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */ /** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */ /** Connection to Menu Nodes */ /** Edge between a Node and a connected Menu */ /** Page Info on the connected MenuConnectionEdge */ /** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */ /** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */ /** Connection to MenuItem Nodes */ /** Edge between a Node and a connected MenuItem */ /** Page Info on the connected MenuItemConnectionEdge */ /** Nodes that can be linked to as Menu Items */ /** Edge between a Node and a connected MenuItemLinkable */ /** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */let MenuItemNodeIdTypeEnum=/*#__PURE__*/function(MenuItemNodeIdTypeEnum){MenuItemNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";MenuItemNodeIdTypeEnum["Id"]="ID";return MenuItemNodeIdTypeEnum;}({});/** Deprecated in favor of MenuItemLinkeable Interface */ /** Connection between the MenuItem type and the Menu type */ /** Connection between the MenuItem type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */ /** Arguments for filtering the MenuItemToMenuItemConnection connection */ /** Connection between the MenuItem type and the MenuItemLinkable type */ /** Registered menu locations */let MenuLocationEnum=/*#__PURE__*/function(MenuLocationEnum){MenuLocationEnum["Footer"]="FOOTER";MenuLocationEnum["Primary"]="PRIMARY";return MenuLocationEnum;}({});/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */let MenuNodeIdTypeEnum=/*#__PURE__*/function(MenuNodeIdTypeEnum){MenuNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";MenuNodeIdTypeEnum["Id"]="ID";MenuNodeIdTypeEnum["Location"]="LOCATION";MenuNodeIdTypeEnum["Name"]="NAME";MenuNodeIdTypeEnum["Slug"]="SLUG";return MenuNodeIdTypeEnum;}({});/** Connection between the Menu type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;MenuToMenuItemConnection&quot; */ /** Arguments for filtering the MenuToMenuItemConnection connection */ /** The MimeType of the object */let MimeTypeEnum=/*#__PURE__*/function(MimeTypeEnum){MimeTypeEnum["ApplicationJava"]="APPLICATION_JAVA";MimeTypeEnum["ApplicationMsword"]="APPLICATION_MSWORD";MimeTypeEnum["ApplicationOctetStream"]="APPLICATION_OCTET_STREAM";MimeTypeEnum["ApplicationOnenote"]="APPLICATION_ONENOTE";MimeTypeEnum["ApplicationOxps"]="APPLICATION_OXPS";MimeTypeEnum["ApplicationPdf"]="APPLICATION_PDF";MimeTypeEnum["ApplicationRar"]="APPLICATION_RAR";MimeTypeEnum["ApplicationRtf"]="APPLICATION_RTF";MimeTypeEnum["ApplicationTtafXml"]="APPLICATION_TTAF_XML";MimeTypeEnum["ApplicationVndAppleKeynote"]="APPLICATION_VND_APPLE_KEYNOTE";MimeTypeEnum["ApplicationVndAppleNumbers"]="APPLICATION_VND_APPLE_NUMBERS";MimeTypeEnum["ApplicationVndApplePages"]="APPLICATION_VND_APPLE_PAGES";MimeTypeEnum["ApplicationVndMsAccess"]="APPLICATION_VND_MS_ACCESS";MimeTypeEnum["ApplicationVndMsExcel"]="APPLICATION_VND_MS_EXCEL";MimeTypeEnum["ApplicationVndMsExcelAddinMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelSheetBinaryMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelSheetMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelTemplateMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpoint"]="APPLICATION_VND_MS_POWERPOINT";MimeTypeEnum["ApplicationVndMsPowerpointAddinMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointPresentationMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointSlideshowMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointSlideMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointTemplateMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsProject"]="APPLICATION_VND_MS_PROJECT";MimeTypeEnum["ApplicationVndMsWordDocumentMacroenabled_12"]="APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsWordTemplateMacroenabled_12"]="APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsWrite"]="APPLICATION_VND_MS_WRITE";MimeTypeEnum["ApplicationVndMsXpsdocument"]="APPLICATION_VND_MS_XPSDOCUMENT";MimeTypeEnum["ApplicationVndOasisOpendocumentChart"]="APPLICATION_VND_OASIS_OPENDOCUMENT_CHART";MimeTypeEnum["ApplicationVndOasisOpendocumentDatabase"]="APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE";MimeTypeEnum["ApplicationVndOasisOpendocumentFormula"]="APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA";MimeTypeEnum["ApplicationVndOasisOpendocumentGraphics"]="APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS";MimeTypeEnum["ApplicationVndOasisOpendocumentPresentation"]="APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION";MimeTypeEnum["ApplicationVndOasisOpendocumentSpreadsheet"]="APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET";MimeTypeEnum["ApplicationVndOasisOpendocumentText"]="APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE";MimeTypeEnum["ApplicationWordperfect"]="APPLICATION_WORDPERFECT";MimeTypeEnum["ApplicationX_7ZCompressed"]="APPLICATION_X_7Z_COMPRESSED";MimeTypeEnum["ApplicationXGzip"]="APPLICATION_X_GZIP";MimeTypeEnum["ApplicationXTar"]="APPLICATION_X_TAR";MimeTypeEnum["ApplicationZip"]="APPLICATION_ZIP";MimeTypeEnum["AudioAac"]="AUDIO_AAC";MimeTypeEnum["AudioFlac"]="AUDIO_FLAC";MimeTypeEnum["AudioMidi"]="AUDIO_MIDI";MimeTypeEnum["AudioMpeg"]="AUDIO_MPEG";MimeTypeEnum["AudioOgg"]="AUDIO_OGG";MimeTypeEnum["AudioWav"]="AUDIO_WAV";MimeTypeEnum["AudioXMatroska"]="AUDIO_X_MATROSKA";MimeTypeEnum["AudioXMsWax"]="AUDIO_X_MS_WAX";MimeTypeEnum["AudioXMsWma"]="AUDIO_X_MS_WMA";MimeTypeEnum["AudioXRealaudio"]="AUDIO_X_REALAUDIO";MimeTypeEnum["ImageBmp"]="IMAGE_BMP";MimeTypeEnum["ImageGif"]="IMAGE_GIF";MimeTypeEnum["ImageHeic"]="IMAGE_HEIC";MimeTypeEnum["ImageJpeg"]="IMAGE_JPEG";MimeTypeEnum["ImagePng"]="IMAGE_PNG";MimeTypeEnum["ImageTiff"]="IMAGE_TIFF";MimeTypeEnum["ImageWebp"]="IMAGE_WEBP";MimeTypeEnum["ImageXIcon"]="IMAGE_X_ICON";MimeTypeEnum["TextCalendar"]="TEXT_CALENDAR";MimeTypeEnum["TextCss"]="TEXT_CSS";MimeTypeEnum["TextCsv"]="TEXT_CSV";MimeTypeEnum["TextPlain"]="TEXT_PLAIN";MimeTypeEnum["TextRichtext"]="TEXT_RICHTEXT";MimeTypeEnum["TextTabSeparatedValues"]="TEXT_TAB_SEPARATED_VALUES";MimeTypeEnum["TextVtt"]="TEXT_VTT";MimeTypeEnum["Video_3Gpp"]="VIDEO_3GPP";MimeTypeEnum["Video_3Gpp2"]="VIDEO_3GPP2";MimeTypeEnum["VideoAvi"]="VIDEO_AVI";MimeTypeEnum["VideoDivx"]="VIDEO_DIVX";MimeTypeEnum["VideoMp4"]="VIDEO_MP4";MimeTypeEnum["VideoMpeg"]="VIDEO_MPEG";MimeTypeEnum["VideoOgg"]="VIDEO_OGG";MimeTypeEnum["VideoQuicktime"]="VIDEO_QUICKTIME";MimeTypeEnum["VideoWebm"]="VIDEO_WEBM";MimeTypeEnum["VideoXFlv"]="VIDEO_X_FLV";MimeTypeEnum["VideoXMatroska"]="VIDEO_X_MATROSKA";MimeTypeEnum["VideoXMsAsf"]="VIDEO_X_MS_ASF";MimeTypeEnum["VideoXMsWm"]="VIDEO_X_MS_WM";MimeTypeEnum["VideoXMsWmv"]="VIDEO_X_MS_WMV";MimeTypeEnum["VideoXMsWmx"]="VIDEO_X_MS_WMX";return MimeTypeEnum;}({});/** Added by WPGraphQL for ACF Redux */ /** Interface representing fields of the ACF &quot;NcPostMetaData&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Connection between the NcTaxonomyMeta type and the MediaItem type */ /** Interface representing fields of the ACF &quot;NcTaxonomyMeta&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Connection between the NcUserMeta type and the MediaItem type */ /** Connection between the NcUserMeta type and the MediaItem type */ /** Interface representing fields of the ACF &quot;NcUserMeta&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Interface representing fields of the ACF &quot;NcmazAudioUrl&quot; Field Group */ /** Input for the ncmazFaustAddSubscriberToMailpoet mutation. */ /** The payload for the ncmazFaustAddSubscriberToMailpoet mutation. */ /** A block used for editing the site */ /** Attributes of the NcmazFaustBlockCta Block Type */ /** A block used for editing the site */ /** Attributes of the NcmazFaustBlockGroup Block Type */ /** A block used for editing the site */ /** Attributes of the NcmazFaustBlockHeading Block Type */ /** A block used for editing the site */ /** Attributes of the NcmazFaustBlockMagazine Block Type */ /** A block used for editing the site */ /** Attributes of the NcmazFaustBlockTerms Block Type */ /** Input for the ncmazFaustUpdateUserReactionPostCount mutation. */ /** The payload for the ncmazFaustUpdateUserReactionPostCount mutation. */ /** Reaction of user, like save, likes, view, or something else */let NcmazFcUserReactionPostActionEnum=/*#__PURE__*/function(NcmazFcUserReactionPostActionEnum){NcmazFcUserReactionPostActionEnum["Like"]="LIKE";NcmazFcUserReactionPostActionEnum["Save"]="SAVE";NcmazFcUserReactionPostActionEnum["View"]="VIEW";return NcmazFcUserReactionPostActionEnum;}({});/** 1 = add, 0 = remove */let NcmazFcUserReactionPostNumberUpdateEnum=/*#__PURE__*/function(NcmazFcUserReactionPostNumberUpdateEnum){NcmazFcUserReactionPostNumberUpdateEnum["Add_1"]="ADD_1";NcmazFcUserReactionPostNumberUpdateEnum["Remove_1"]="REMOVE_1";return NcmazFcUserReactionPostNumberUpdateEnum;}({});/** Added, Removed, or Error */let NcmazFcUserReactionPostUpdateResuiltEnum=/*#__PURE__*/function(NcmazFcUserReactionPostUpdateResuiltEnum){NcmazFcUserReactionPostUpdateResuiltEnum["Added"]="ADDED";NcmazFcUserReactionPostUpdateResuiltEnum["Error"]="ERROR";NcmazFcUserReactionPostUpdateResuiltEnum["Removed"]="REMOVED";return NcmazFcUserReactionPostUpdateResuiltEnum;}({});/** Added by WPGraphQL for ACF Redux */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Interface representing fields of the ACF &quot;NcmazGalleryImgs&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Interface representing fields of the ACF &quot;NcmazVideoUrl&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Added by WPGraphQL for ACF Redux */ /** Connection between the NcmazfaustMenu type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;NcmazfaustMenuPostsToContentNodeConnection&quot; */ /** Interface representing fields of the ACF &quot;NcmazfaustMenu&quot; Field Group */ /** Interface representing fields of the ACF &quot;NcmazfaustMenu&quot; Field Group */ /** An object with an ID */ /** A node that can have an author assigned to it */ /** Connection between the NodeWithAuthor type and the User type */ /** A node that can have comments associated with it */ /** A node that supports the content editor */ /** A node that supports the content editor */ /** Node that has content blocks associated with it */ /** Node that has content blocks associated with it */ /** A node that can have an excerpt */ /** A node that can have an excerpt */ /** A node that can have a featured image set */ /** Connection between the NodeWithFeaturedImage type and the MediaItem type */ /** A node that can have page attributes */ /** Node that has Page content blocks associated with it */ /** Node that has Page content blocks associated with it */ /** Node that has Post content blocks associated with it */ /** Node that has Post content blocks associated with it */ /** A node that can have revisions */ /** Connection between the NodeWithRevisions type and the ContentNode type */ /** A node that can have a template associated with it */ /** A node that NodeWith a title */ /** A node that NodeWith a title */ /** A node that can have trackbacks and pingbacks */ /** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */ /** The cardinality of the connection order */let OrderEnum=/*#__PURE__*/function(OrderEnum){OrderEnum["Asc"]="ASC";OrderEnum["Desc"]="DESC";return OrderEnum;}({});/** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** Connection to page Nodes */ /** Edge between a Node and a connected page */ /** Page Info on the connected PageConnectionEdge */ /** EditorBlock Interface for Page Block Type */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PageIdType=/*#__PURE__*/function(PageIdType){PageIdType["DatabaseId"]="DATABASE_ID";PageIdType["Id"]="ID";PageIdType["Uri"]="URI";return PageIdType;}({});/** Information about pagination in a connection. */ /** Connection between the Page type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;PageToCommentConnection&quot; */ /** Arguments for filtering the PageToCommentConnection connection */ /** Connection between the Page type and the page type */ /** Connection between the Page type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;PageToRevisionConnection&quot; */ /** Arguments for filtering the PageToRevisionConnection connection */ /** An plugin object */ /** Connection to Plugin Nodes */ /** Edge between a Node and a connected Plugin */ /** Page Info on the connected PluginConnectionEdge */ /** The status of the WordPress plugin. */let PluginStatusEnum=/*#__PURE__*/function(PluginStatusEnum){PluginStatusEnum["Active"]="ACTIVE";PluginStatusEnum["DropIn"]="DROP_IN";PluginStatusEnum["Inactive"]="INACTIVE";PluginStatusEnum["MustUse"]="MUST_USE";PluginStatusEnum["Paused"]="PAUSED";PluginStatusEnum["RecentlyActive"]="RECENTLY_ACTIVE";PluginStatusEnum["Upgrade"]="UPGRADE";return PluginStatusEnum;}({});/** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** Set relationships between the post to categories */ /** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** Connection to post Nodes */ /** Edge between a Node and a connected post */ /** Page Info on the connected PostConnectionEdge */ /** EditorBlock Interface for Post Block Type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** Connection to postFormat Nodes */ /** Edge between a Node and a connected postFormat */ /** Page Info on the connected PostFormatConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PostFormatIdType=/*#__PURE__*/function(PostFormatIdType){PostFormatIdType["DatabaseId"]="DATABASE_ID";PostFormatIdType["Id"]="ID";PostFormatIdType["Name"]="NAME";PostFormatIdType["Slug"]="SLUG";PostFormatIdType["Uri"]="URI";return PostFormatIdType;}({});/** Connection between the PostFormat type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */ /** Arguments for filtering the PostFormatToContentNodeConnection connection */ /** Connection between the PostFormat type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;PostFormatToPostConnection&quot; */ /** Arguments for filtering the PostFormatToPostConnection connection */ /** Connection between the PostFormat type and the Taxonomy type */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PostIdType=/*#__PURE__*/function(PostIdType){PostIdType["DatabaseId"]="DATABASE_ID";PostIdType["Id"]="ID";PostIdType["Slug"]="SLUG";PostIdType["Uri"]="URI";return PostIdType;}({});/** The format of post field data. */let PostObjectFieldFormatEnum=/*#__PURE__*/function(PostObjectFieldFormatEnum){PostObjectFieldFormatEnum["Raw"]="RAW";PostObjectFieldFormatEnum["Rendered"]="RENDERED";return PostObjectFieldFormatEnum;}({});/** The column to use when filtering by date */let PostObjectsConnectionDateColumnEnum=/*#__PURE__*/function(PostObjectsConnectionDateColumnEnum){PostObjectsConnectionDateColumnEnum["Date"]="DATE";PostObjectsConnectionDateColumnEnum["Modified"]="MODIFIED";return PostObjectsConnectionDateColumnEnum;}({});/** Field to order the connection by */let PostObjectsConnectionOrderbyEnum=/*#__PURE__*/function(PostObjectsConnectionOrderbyEnum){PostObjectsConnectionOrderbyEnum["Author"]="AUTHOR";PostObjectsConnectionOrderbyEnum["CommentCount"]="COMMENT_COUNT";PostObjectsConnectionOrderbyEnum["Date"]="DATE";PostObjectsConnectionOrderbyEnum["In"]="IN";PostObjectsConnectionOrderbyEnum["LikesCount"]="LIKES_COUNT";PostObjectsConnectionOrderbyEnum["MenuOrder"]="MENU_ORDER";PostObjectsConnectionOrderbyEnum["Modified"]="MODIFIED";PostObjectsConnectionOrderbyEnum["NameIn"]="NAME_IN";PostObjectsConnectionOrderbyEnum["Parent"]="PARENT";PostObjectsConnectionOrderbyEnum["Slug"]="SLUG";PostObjectsConnectionOrderbyEnum["Title"]="TITLE";PostObjectsConnectionOrderbyEnum["ViewsCount"]="VIEWS_COUNT";return PostObjectsConnectionOrderbyEnum;}({});/** Options for ordering the connection */ /** Set relationships between the post to postFormats */ /** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** The status of the object. */let PostStatusEnum=/*#__PURE__*/function(PostStatusEnum){PostStatusEnum["AcfDisabled"]="ACF_DISABLED";PostStatusEnum["AutoDraft"]="AUTO_DRAFT";PostStatusEnum["Draft"]="DRAFT";PostStatusEnum["Future"]="FUTURE";PostStatusEnum["Inherit"]="INHERIT";PostStatusEnum["Pending"]="PENDING";PostStatusEnum["Private"]="PRIVATE";PostStatusEnum["Publish"]="PUBLISH";PostStatusEnum["RequestCompleted"]="REQUEST_COMPLETED";PostStatusEnum["RequestConfirmed"]="REQUEST_CONFIRMED";PostStatusEnum["RequestFailed"]="REQUEST_FAILED";PostStatusEnum["RequestPending"]="REQUEST_PENDING";PostStatusEnum["Trash"]="TRASH";return PostStatusEnum;}({});/** Set relationships between the post to tags */ /** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** Connection between the Post type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;PostToCategoryConnection&quot; */ /** Arguments for filtering the PostToCategoryConnection connection */ /** Connection between the Post type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;PostToCommentConnection&quot; */ /** Arguments for filtering the PostToCommentConnection connection */ /** Connection between the Post type and the postFormat type */ /** An edge in a connection */ /** Page Info on the &quot;PostToPostFormatConnection&quot; */ /** Arguments for filtering the PostToPostFormatConnection connection */ /** Connection between the Post type and the post type */ /** Connection between the Post type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;PostToRevisionConnection&quot; */ /** Arguments for filtering the PostToRevisionConnection connection */ /** Connection between the Post type and the tag type */ /** An edge in a connection */ /** Page Info on the &quot;PostToTagConnection&quot; */ /** Arguments for filtering the PostToTagConnection connection */ /** Connection between the Post type and the TermNode type */ /** An edge in a connection */ /** Page Info on the &quot;PostToTermNodeConnection&quot; */ /** Arguments for filtering the PostToTermNodeConnection connection */ /** Details for labels of the PostType */ /** Nodes that can be seen in a preview (unpublished) state. */ /** The reading setting type */ /** Input for the registerUser mutation. */ /** The payload for the registerUser mutation. */ /** The logical relation between each item in the array when there are more than one. */let RelationEnum=/*#__PURE__*/function(RelationEnum){RelationEnum["And"]="AND";RelationEnum["Or"]="OR";return RelationEnum;}({});/** Input for the resetUserPassword mutation. */ /** The payload for the resetUserPassword mutation. */ /** Input for the restoreComment mutation. */ /** The payload for the restoreComment mutation. */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** Connection between the RootQuery type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToCategoryConnection&quot; */ /** Arguments for filtering the RootQueryToCategoryConnection connection */ /** Connection between the RootQuery type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToCommentConnection&quot; */ /** Arguments for filtering the RootQueryToCommentConnection connection */ /** Connection between the RootQuery type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */ /** Arguments for filtering the RootQueryToContentNodeConnection connection */ /** Connection between the RootQuery type and the ContentType type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */ /** Connection between the RootQuery type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */ /** Connection between the RootQuery type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */ /** Connection between the RootQuery type and the graphqlDocument type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToGraphqlDocumentConnection&quot; */ /** Arguments for filtering the RootQueryToGraphqlDocumentConnection connection */ /** Connection between the RootQuery type and the mediaItem type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */ /** Arguments for filtering the RootQueryToMediaItemConnection connection */ /** Connection between the RootQuery type and the Menu type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMenuConnection&quot; */ /** Arguments for filtering the RootQueryToMenuConnection connection */ /** Connection between the RootQuery type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */ /** Arguments for filtering the RootQueryToMenuItemConnection connection */ /** Connection between the RootQuery type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPageConnection&quot; */ /** Arguments for filtering the RootQueryToPageConnection connection */ /** Connection between the RootQuery type and the Plugin type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPluginConnection&quot; */ /** Arguments for filtering the RootQueryToPluginConnection connection */ /** Connection between the RootQuery type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPostConnection&quot; */ /** Arguments for filtering the RootQueryToPostConnection connection */ /** Connection between the RootQuery type and the postFormat type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */ /** Arguments for filtering the RootQueryToPostFormatConnection connection */ /** Connection between the RootQuery type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */ /** Arguments for filtering the RootQueryToRevisionsConnection connection */ /** Connection between the RootQuery type and the tag type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTagConnection&quot; */ /** Arguments for filtering the RootQueryToTagConnection connection */ /** Connection between the RootQuery type and the Taxonomy type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */ /** Connection between the RootQuery type and the TermNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */ /** Arguments for filtering the RootQueryToTermNodeConnection connection */ /** Connection between the RootQuery type and the Theme type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToThemeConnection&quot; */ /** Connection between the RootQuery type and the User type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToUserConnection&quot; */ /** Arguments for filtering the RootQueryToUserConnection connection */ /** Connection between the RootQuery type and the userReactionPost type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToUserReactionPostConnection&quot; */ /** Arguments for filtering the RootQueryToUserReactionPostConnection connection */ /** Connection between the RootQuery type and the UserRole type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */ /** Input for the sendPasswordResetEmail mutation. */ /** The payload for the sendPasswordResetEmail mutation. */ /** All of the registered settings */ /** The tag type */ /** The tag type */ /** The tag type */ /** The tag type */ /** The tag type */ /** Connection to tag Nodes */ /** Edge between a Node and a connected tag */ /** Page Info on the connected TagConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let TagIdType=/*#__PURE__*/function(TagIdType){TagIdType["DatabaseId"]="DATABASE_ID";TagIdType["Id"]="ID";TagIdType["Name"]="NAME";TagIdType["Slug"]="SLUG";TagIdType["Uri"]="URI";return TagIdType;}({});/** Connection between the Tag type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;TagToContentNodeConnection&quot; */ /** Arguments for filtering the TagToContentNodeConnection connection */ /** Connection between the Tag type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;TagToPostConnection&quot; */ /** Arguments for filtering the TagToPostConnection connection */ /** Connection between the Tag type and the Taxonomy type */ /** A taxonomy object */ /** A taxonomy object */ /** Connection to Taxonomy Nodes */ /** Edge between a Node and a connected Taxonomy */ /** Page Info on the connected TaxonomyConnectionEdge */ /** Allowed taxonomies */let TaxonomyEnum=/*#__PURE__*/function(TaxonomyEnum){TaxonomyEnum["Category"]="CATEGORY";TaxonomyEnum["Postformat"]="POSTFORMAT";TaxonomyEnum["Tag"]="TAG";return TaxonomyEnum;}({});/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */let TaxonomyIdTypeEnum=/*#__PURE__*/function(TaxonomyIdTypeEnum){TaxonomyIdTypeEnum["Id"]="ID";TaxonomyIdTypeEnum["Name"]="NAME";return TaxonomyIdTypeEnum;}({});/** Connection between the Taxonomy type and the ContentType type */ /** An edge in a connection */ /** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */ /** The template assigned to the node */ /** The template assigned to the node */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Connection to TermNode Nodes */ /** Edge between a Node and a connected TermNode */ /** Page Info on the connected TermNodeConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */let TermNodeIdTypeEnum=/*#__PURE__*/function(TermNodeIdTypeEnum){TermNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";TermNodeIdTypeEnum["Id"]="ID";TermNodeIdTypeEnum["Name"]="NAME";TermNodeIdTypeEnum["Slug"]="SLUG";TermNodeIdTypeEnum["Uri"]="URI";return TermNodeIdTypeEnum;}({});/** Connection between the TermNode type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */ /** Connection between the TermNode type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */ /** Options for ordering the connection by */let TermObjectsConnectionOrderbyEnum=/*#__PURE__*/function(TermObjectsConnectionOrderbyEnum){TermObjectsConnectionOrderbyEnum["Count"]="COUNT";TermObjectsConnectionOrderbyEnum["Description"]="DESCRIPTION";TermObjectsConnectionOrderbyEnum["Name"]="NAME";TermObjectsConnectionOrderbyEnum["Slug"]="SLUG";TermObjectsConnectionOrderbyEnum["TermGroup"]="TERM_GROUP";TermObjectsConnectionOrderbyEnum["TermId"]="TERM_ID";TermObjectsConnectionOrderbyEnum["TermOrder"]="TERM_ORDER";return TermObjectsConnectionOrderbyEnum;}({});/** A theme object */ /** Connection to Theme Nodes */ /** Edge between a Node and a connected Theme */ /** Page Info on the connected ThemeConnectionEdge */ /** Any node that has a URI */ /** Input for the updateCategory mutation. */ /** The payload for the updateCategory mutation. */ /** Input for the updateComment mutation. */ /** The payload for the updateComment mutation. */ /** Input for the updateGraphqlDocument mutation. */ /** The payload for the updateGraphqlDocument mutation. */ /** Input for the updateMediaItem mutation. */ /** The payload for the updateMediaItem mutation. */ /** Input for the updatePage mutation. */ /** The payload for the updatePage mutation. */ /** Input for the updatePostFormat mutation. */ /** The payload for the updatePostFormat mutation. */ /** Input for the updatePost mutation. */ /** The payload for the updatePost mutation. */ /** Input for the updateSettings mutation. */ /** The payload for the updateSettings mutation. */ /** Input for the updateTag mutation. */ /** The payload for the updateTag mutation. */ /** Input for the updateUser mutation. */ /** The payload for the updateUser mutation. */ /** Input for the updateUserReactionPost mutation. */ /** The payload for the updateUserReactionPost mutation. */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** Connection to User Nodes */ /** Edge between a Node and a connected User */ /** Page Info on the connected UserConnectionEdge */ /** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */let UserNodeIdTypeEnum=/*#__PURE__*/function(UserNodeIdTypeEnum){UserNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";UserNodeIdTypeEnum["Email"]="EMAIL";UserNodeIdTypeEnum["Id"]="ID";UserNodeIdTypeEnum["Slug"]="SLUG";UserNodeIdTypeEnum["Uri"]="URI";UserNodeIdTypeEnum["Username"]="USERNAME";return UserNodeIdTypeEnum;}({});/** The userReactionPost type */ /** The userReactionPost type */ /** The userReactionPost type */ /** The userReactionPost type */ /** Connection to userReactionPost Nodes */ /** Edge between a Node and a connected userReactionPost */ /** Page Info on the connected UserReactionPostConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let UserReactionPostIdType=/*#__PURE__*/function(UserReactionPostIdType){UserReactionPostIdType["DatabaseId"]="DATABASE_ID";UserReactionPostIdType["Id"]="ID";UserReactionPostIdType["Slug"]="SLUG";UserReactionPostIdType["Uri"]="URI";return UserReactionPostIdType;}({});/** Connection between the UserReactionPost type and the userReactionPost type */ /** A user role object */ /** Connection to UserRole Nodes */ /** Edge between a Node and a connected UserRole */ /** Page Info on the connected UserRoleConnectionEdge */ /** Names of available user roles */let UserRoleEnum=/*#__PURE__*/function(UserRoleEnum){UserRoleEnum["Administrator"]="ADMINISTRATOR";UserRoleEnum["Author"]="AUTHOR";UserRoleEnum["Contributor"]="CONTRIBUTOR";UserRoleEnum["Editor"]="EDITOR";UserRoleEnum["Subscriber"]="SUBSCRIBER";return UserRoleEnum;}({});/** Connection between the User type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;UserToCommentConnection&quot; */ /** Arguments for filtering the UserToCommentConnection connection */ /** Connection between the User type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */ /** Connection between the User type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */ /** Connection between the User type and the mediaItem type */ /** An edge in a connection */ /** Page Info on the &quot;UserToMediaItemConnection&quot; */ /** Arguments for filtering the UserToMediaItemConnection connection */ /** Connection between the User type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;UserToPageConnection&quot; */ /** Arguments for filtering the UserToPageConnection connection */ /** Connection between the User type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;UserToPostConnection&quot; */ /** Arguments for filtering the UserToPostConnection connection */ /** Connection between the User type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;UserToRevisionsConnection&quot; */ /** Arguments for filtering the UserToRevisionsConnection connection */ /** Connection between the User type and the userReactionPost type */ /** An edge in a connection */ /** Page Info on the &quot;UserToUserReactionPostConnection&quot; */ /** Arguments for filtering the UserToUserReactionPostConnection connection */ /** Connection between the User type and the UserRole type */ /** An edge in a connection */ /** Page Info on the &quot;UserToUserRoleConnection&quot; */ /** Field to order the connection by */let UsersConnectionOrderbyEnum=/*#__PURE__*/function(UsersConnectionOrderbyEnum){UsersConnectionOrderbyEnum["DisplayName"]="DISPLAY_NAME";UsersConnectionOrderbyEnum["Email"]="EMAIL";UsersConnectionOrderbyEnum["Login"]="LOGIN";UsersConnectionOrderbyEnum["LoginIn"]="LOGIN_IN";UsersConnectionOrderbyEnum["NiceName"]="NICE_NAME";UsersConnectionOrderbyEnum["NiceNameIn"]="NICE_NAME_IN";UsersConnectionOrderbyEnum["Registered"]="REGISTERED";UsersConnectionOrderbyEnum["Url"]="URL";return UsersConnectionOrderbyEnum;}({});/** Options for ordering the connection */ /** Column used for searching for users. */let UsersConnectionSearchColumnEnum=/*#__PURE__*/function(UsersConnectionSearchColumnEnum){UsersConnectionSearchColumnEnum["Email"]="EMAIL";UsersConnectionSearchColumnEnum["Id"]="ID";UsersConnectionSearchColumnEnum["Login"]="LOGIN";UsersConnectionSearchColumnEnum["Nicename"]="NICENAME";UsersConnectionSearchColumnEnum["Url"]="URL";return UsersConnectionSearchColumnEnum;}({});/** Information about pagination in a connection. */ /** Provides access to fields of the &quot;NcPostMetaData&quot; ACF Field Group via the &quot;ncPostMetaData&quot; field */ /** Provides access to fields of the &quot;NcTaxonomyMeta&quot; ACF Field Group via the &quot;ncTaxonomyMeta&quot; field */ /** Provides access to fields of the &quot;NcUserMeta&quot; ACF Field Group via the &quot;ncUserMeta&quot; field */ /** Provides access to fields of the &quot;NcmazAudioUrl&quot; ACF Field Group via the &quot;ncmazAudioUrl&quot; field */ /** Provides access to fields of the &quot;NcmazGalleryImgs&quot; ACF Field Group via the &quot;ncmazGalleryImgs&quot; field */ /** Provides access to fields of the &quot;NcmazVideoUrl&quot; ACF Field Group via the &quot;ncmazVideoUrl&quot; field */ /** Provides access to fields of the &quot;NcmazfaustMenu&quot; ACF Field Group via the &quot;ncmazfaustMenu&quot; field */ /** The writing setting type */const NcmazFcTagShortFieldsFragmentFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTagShortFieldsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]};const NcmazFcTagFullFieldsFragmentFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTagFullFieldsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcTagShortFieldsFragment"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTagShortFieldsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]};const NcmazFcImageFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]};const NcmazFcCategoryFullFieldsFragmentFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcCategoryFullFieldsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]};const NcmazFcUserShortForPostCardFragmentFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]};const NcmazFcCategoryCardFieldsNotImageFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]};const NcmazFcPostMetaFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}}]}}]};const NcmazFcPostCardFieldsNotNcmazGalleryImgsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFieldsNOTNcmazGalleryImgs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}}]}}]};const NcmazFcPostCardFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostCardFieldsNOTNcmazGalleryImgs"}},{"kind":"Field","name":{"kind":"Name","value":"ncmazGalleryImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image6"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image7"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image8"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFieldsNOTNcmazGalleryImgs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFields"}}]}}]}}]};const NcmazFcPostsEdegsFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostsEdegsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RootQueryToPostConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostCardFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFieldsNOTNcmazGalleryImgs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostCardFieldsNOTNcmazGalleryImgs"}},{"kind":"Field","name":{"kind":"Name","value":"ncmazGalleryImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image6"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image7"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image8"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}}]};const NcmazFcImageHasDetailFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]};const NcmazFcPostMetaFullFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFullFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"savedsCount"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"template"}}]}}]};const NcmazFcPostFullFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostFullFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcTagShortFieldsFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFullFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazGalleryImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image6"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image7"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image8"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcUserShortForPostCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcCategoryCardFieldsNotImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTagShortFieldsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageHasDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"mediaDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFullFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"savedsCount"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"template"}}]}}]};const NcmazFcUserFullFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcUserFullFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buymeacoffeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"facebookUrl"}},{"kind":"Field","name":{"kind":"Name","value":"githubUrl"}},{"kind":"Field","name":{"kind":"Name","value":"instagramUrl"}},{"kind":"Field","name":{"kind":"Name","value":"linkedinUrl"}},{"kind":"Field","name":{"kind":"Name","value":"mediumUrl"}},{"kind":"Field","name":{"kind":"Name","value":"ncBio"}},{"kind":"Field","name":{"kind":"Name","value":"pinterestUrl"}},{"kind":"Field","name":{"kind":"Name","value":"twitchUrl"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"vimeoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"tiktokUrl"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]};

/***/ }),

/***/ "./src/__generated__/index.ts":
/*!************************************!*\
  !*** ./src/__generated__/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gql: () => (/* reexport safe */ _gql__WEBPACK_IMPORTED_MODULE_1__.gql),
/* harmony export */   isFragmentReady: () => (/* reexport safe */ _fragment_masking__WEBPACK_IMPORTED_MODULE_0__.isFragmentReady),
/* harmony export */   makeFragmentData: () => (/* reexport safe */ _fragment_masking__WEBPACK_IMPORTED_MODULE_0__.makeFragmentData),
/* harmony export */   useFragment: () => (/* reexport safe */ _fragment_masking__WEBPACK_IMPORTED_MODULE_0__.useFragment)
/* harmony export */ });
/* harmony import */ var _fragment_masking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-masking */ "./src/__generated__/fragment-masking.ts");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gql */ "./src/__generated__/gql.ts");



/***/ }),

/***/ "./src/block-terms/DemoTermsList.tsx":
/*!*******************************************!*\
  !*** ./src/block-terms/DemoTermsList.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__generated__ */ "./src/__generated__/index.ts");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fragments */ "./src/fragments/index.ts");




const DemoTermsList = ({
  terms
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `flex flex-wrap gap-3 mt-3`
  }, terms.map(term => {
    const node = (0,_generated___WEBPACK_IMPORTED_MODULE_2__.useFragment)(_fragments__WEBPACK_IMPORTED_MODULE_3__.NC_CATEGORY_FULL_FIELDS_FRAGMENT, term);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: node.databaseId,
      className: "relative inline-flex items-center justify-between p-2 pr-5 space-x-5 rounded-3xl bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center space-x-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "nc-NcImage absolute inset-0"
    }, node.ncTaxonomyMeta?.featuredImage?.node?.sourceUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src:
      // {/* @ts-ignore */}
      node.ncTaxonomyMeta?.featuredImage?.node?.sourceUrl,
      className: "object-cover w-full h-full ",
      alt: "DIYer and TV "
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-col flex-grow"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "block font-semibold text-lg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "line-clamp-1"
    }, node.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1"
    }, node.count, " articles"))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoTermsList);

/***/ }),

/***/ "./src/block-terms/attributes.ts":
/*!***************************************!*\
  !*** ./src/block-terms/attributes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const blokcAttrs = {
  uniqueId: {
    type: "string"
    // default: "",
  },

  order: {
    type: "string"
    // default: "DESC",
  },

  orderBy: {
    type: "string"
    // default: "NAME",
  },

  blockVariation: {
    type: "string"
    // default: "grid-1",
  },

  numberOfTags: {
    type: "number"
    // default: 30,
  },

  showTagCounts: {
    type: "boolean"
    // default: true,
  },

  taxonomy: {
    type: "string"
    // default: "TAG",
  },

  hasBackground: {
    type: "boolean"
    // default: "TAG",
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blokcAttrs);

/***/ }),

/***/ "./src/block-terms/deprecated.ts":
/*!***************************************!*\
  !*** ./src/block-terms/deprecated.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const v1 = {};
const v2 = {};
const deprecated = [v2, v1];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/block-terms/edit.tsx":
/*!**********************************!*\
  !*** ./src/block-terms/edit.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _order_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-control */ "./src/block-terms/order-control.tsx");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BlockLoadingPlaceholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlockLoadingPlaceholder */ "./src/components/BlockLoadingPlaceholder.tsx");
/* harmony import */ var _DemoTermsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DemoTermsList */ "./src/block-terms/DemoTermsList.tsx");
/* harmony import */ var _components_BlockEmptyPlaceholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BlockEmptyPlaceholder */ "./src/components/BlockEmptyPlaceholder.tsx");
/* harmony import */ var _frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../frontend-components/BackgroundSection/BackgroundSection */ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/className */ "./src/utils/className.tsx");

/**
 * WordPress dependencies
 */











const MIN_TAGS = 1;
const MAX_TAGS = 80;
const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    blockVariation,
    numberOfTags,
    showTagCounts,
    taxonomy,
    uniqueId,
    order,
    orderBy,
    hasBackground
  } = attributes;
  const [initTermsFromSSR, setInitTermsFromSSR] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [initErrorFromSSR, setInitErrorFromSSR] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const SERVER_SIDE_ID = "ncmazfcSSR-block-" + clientId;
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // ---- SAVE uniqueId ----
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      uniqueId: clientId
    });
  }, []);
  const getTermsDataFromSeverSideRenderNode = wrapNode => {
    const node = wrapNode.querySelector(".ncmazfc-block-content-common-class");
    const dataInitTerms = node?.getAttribute("data-ncmazfc-init-terms") || "null";
    const dataInitErrors = node?.getAttribute("data-ncmazfc-init-errors") || "null";
    return {
      initTerms: JSON.parse(dataInitTerms),
      initErrors: JSON.parse(dataInitErrors)
    };
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const targetNode = document.getElementById(SERVER_SIDE_ID);
    if (!targetNode) return;

    // Options for the observer (which mutations to observe)
    const config = {
      childList: true
    };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          const {
            initErrors,
            initTerms
          } = getTermsDataFromSeverSideRenderNode(mutation.target);
          setInitErrorFromSSR(initErrors);
          setInitTermsFromSSR(initTerms);
          if (!!initErrors || !!initTerms) {
            observer.disconnect();
            observerRef.current = null;
          }
        }
      }
    };
    if (!observerRef.current) {
      observerRef.current = new MutationObserver(callback);
      observerRef.current.observe(targetNode, config);
    }
  }, [numberOfTags, showTagCounts, taxonomy, uniqueId, order, orderBy]);
  const renderLayoutType = () => {
    const dataLists = initTermsFromSSR;
    if (!dataLists) {
      return null;
    }
    if (!dataLists?.length) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockEmptyPlaceholder__WEBPACK_IMPORTED_MODULE_9__["default"], null);
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DemoTermsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      terms: dataLists || []
    });
  };

  // render
  const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select block's variation", "ncmazfc"),
    value: blockVariation,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "(**) Select variation to change the layout and card style of the block. The editor preview of the variants is currently under construction, so you won't notice the change here, but it will be changed and applied in the client UI. Sorry for the inconvenience, you can check out the", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://ncmaz-faust.chisnghiax.com/block-term-variations-preview",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "underline text-blue-400"
    }, "styling of the variations here")),
    onChange: blockVariation => setAttributes({
      blockVariation
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
    label: "Grid"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-1"
  }, "Grid 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-2"
  }, "Grid 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-3"
  }, "Grid 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-4"
  }, "Grid 4"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-5"
  }, "Grid 5")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
    label: "Slider"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-1"
  }, "Slider 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-2"
  }, "Slider 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-3"
  }, "Slider 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-4"
  }, "Slider 4"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "slider-5"
  }, "Slider 5"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full space-x-3 flex "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormToggle, {
    checked: hasBackground,
    onChange: () => setAttributes({
      hasBackground: !hasBackground
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enable Background", "ncmazfc"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Settings")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Taxonomy"),
    options: [{
      label: "CATEGORY",
      value: "CATEGORY"
    }, {
      label: "POSTFORMAT",
      value: "POSTFORMAT"
    }, {
      label: "TAG",
      value: "TAG"
    }],
    value: taxonomy,
    onChange: selectedTaxonomy => setAttributes({
      taxonomy: selectedTaxonomy
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    order,
    orderBy,
    onChange: ({
      order,
      orderBy
    }) => {
      setAttributes({
        order,
        orderBy
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show post counts"),
    checked: showTagCounts,
    onChange: () => setAttributes({
      showTagCounts: !showTagCounts
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Number of tags"),
    value: numberOfTags,
    onChange: value => setAttributes({
      numberOfTags: value
    }),
    min: MIN_TAGS,
    max: MAX_TAGS,
    required: true
  })));
  const renderContent = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative"
    }, initErrorFromSSR && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-red-500 text-sm"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Error!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, JSON.stringify(initErrorFromSSR, null, 2)))), initTermsFromSSR && renderLayoutType(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: SERVER_SIDE_ID
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_6___default()), {
      block: "ncmaz-faust/block-terms",
      attributes: attributes,
      httpMethod: "POST",
      LoadingResponsePlaceholder: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "absolute bg-black/10 -inset-2.5 flex items-center justify-center"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockLoadingPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"], null)),
      EmptyResponsePlaceholder: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null)
    })));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_11__["default"])("not-prose", hasBackground ? "relative py-16" : "")
    })
  }, hasBackground ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_10__["default"], null) : null, renderContent()));
};

// @ts-ignore
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/block-terms/index.js":
/*!**********************************!*\
  !*** ./src/block-terms/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-terms/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-terms/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-terms/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-terms/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/block-terms/deprecated.ts");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes */ "./src/block-terms/attributes.ts");




/**
 * Internal dependencies
 */





//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  // attributes,
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"],
  example: {},
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "wcb-editor-block-icons fill-none ",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});

/***/ }),

/***/ "./src/block-terms/order-control.tsx":
/*!*******************************************!*\
  !*** ./src/block-terms/order-control.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */



const orderOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Item count/desc"),
  value: "COUNT/DESC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Item count/asc"),
  value: "COUNT/ASC"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("A → Z"),
  value: "NAME/ASC"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Z → A"),
  value: "NAME/DESC"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Term group/asc"),
  value: "TERM_GROUP/ASC"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Term group/desc"),
  value: "TERM_GROUP/DESC"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Term order/asc"),
  value: "TERM_ORDER/ASC"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Term order/desc"),
  value: "TERM_ORDER/DESC"
}];
function TermOrderControl({
  order,
  orderBy,
  onChange
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Order by"),
    value: `${orderBy}/${order}`,
    options: orderOptions,
    onChange: value => {
      const [newOrderBy, newOrder] = value.split("/");
      // @ts-ignore
      onChange({
        order: newOrder,
        orderBy: newOrderBy
      });
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermOrderControl);

/***/ }),

/***/ "./src/block-terms/save.tsx":
/*!**********************************!*\
  !*** ./src/block-terms/save.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, "Todo List – hello from the saved content!");
}

/***/ }),

/***/ "./src/components/BlockEmptyPlaceholder.tsx":
/*!**************************************************!*\
  !*** ./src/components/BlockEmptyPlaceholder.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/file.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const BlockEmptyPlaceholder = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  }),
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Ncmaz faust block!", "wcb"),
  className: ""
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("No results found! Please try another selection.", "ncmazfc"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockEmptyPlaceholder);

/***/ }),

/***/ "./src/components/BlockLoadingPlaceholder.tsx":
/*!****************************************************!*\
  !*** ./src/components/BlockLoadingPlaceholder.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const BlockLoadingPlaceholder = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "container flex items-center justify-center py-7"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockLoadingPlaceholder);

/***/ }),

/***/ "./src/fragments/index.ts":
/*!********************************!*\
  !*** ./src/fragments/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NC_CATEGORY_CARD_FIELD_NOT_IMAGE_FRAGMENT: () => (/* binding */ NC_CATEGORY_CARD_FIELD_NOT_IMAGE_FRAGMENT),
/* harmony export */   NC_CATEGORY_FULL_FIELDS_FRAGMENT: () => (/* binding */ NC_CATEGORY_FULL_FIELDS_FRAGMENT),
/* harmony export */   NC_IMAGE_MEDIA_FRAGMENT: () => (/* binding */ NC_IMAGE_MEDIA_FRAGMENT),
/* harmony export */   NC_IMAGE_MEDIA_HAS_DETAIL_FRAGMENT: () => (/* binding */ NC_IMAGE_MEDIA_HAS_DETAIL_FRAGMENT),
/* harmony export */   NC_POSTS_EDGES_FRAGMENT: () => (/* binding */ NC_POSTS_EDGES_FRAGMENT),
/* harmony export */   NC_POST_CARD_FRAGMENT: () => (/* binding */ NC_POST_CARD_FRAGMENT),
/* harmony export */   NC_POST_CARD_NOT_NCMAZGALLERY_FRAGMENT: () => (/* binding */ NC_POST_CARD_NOT_NCMAZGALLERY_FRAGMENT),
/* harmony export */   NC_POST_FULL_FRAGMENT: () => (/* binding */ NC_POST_FULL_FRAGMENT),
/* harmony export */   NC_POST_META_DATA_FRAGMENT: () => (/* binding */ NC_POST_META_DATA_FRAGMENT),
/* harmony export */   NC_POST_META_DATA_FULL_FRAGMENT: () => (/* binding */ NC_POST_META_DATA_FULL_FRAGMENT),
/* harmony export */   NC_TAG_FULL_FIELDS_FRAGMENT: () => (/* binding */ NC_TAG_FULL_FIELDS_FRAGMENT),
/* harmony export */   NC_TAG_SHORT_FIELDS_FRAGMENT: () => (/* binding */ NC_TAG_SHORT_FIELDS_FRAGMENT),
/* harmony export */   NC_USER_FULL_FIELDS_FRAGMENT: () => (/* binding */ NC_USER_FULL_FIELDS_FRAGMENT),
/* harmony export */   NC_USER_SHORT_FOR_POST_CARD_FRAGMENT: () => (/* binding */ NC_USER_SHORT_FOR_POST_CARD_FRAGMENT)
/* harmony export */ });
/* harmony import */ var _generated___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__generated__ */ "./src/__generated__/index.ts");


// TAG =================================================
const NC_TAG_SHORT_FIELDS_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcTagShortFieldsFragment on Tag {
		__typename
		name
		uri
		databaseId
		count
	}
`);
const NC_TAG_FULL_FIELDS_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcTagFullFieldsFragment on Tag {
		...NcmazFcTagShortFieldsFragment
		description
		count
	}
`);

// CATEGORY =================================================
const NC_CATEGORY_FULL_FIELDS_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcCategoryFullFieldsFragment on Category {
		__typename
		databaseId
		description
		name
		uri
		count
		ncTaxonomyMeta {
			color
			featuredImage {
				node {
					...NcmazFcImageFields
				}
			}
		}
	}
`);
const NC_CATEGORY_CARD_FIELD_NOT_IMAGE_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcCategoryCardFieldsNotImage on Category {
		__typename
		name
		uri
		count
		databaseId
		ncTaxonomyMeta {
			color
		}
	}
`);

// POSTS =================================================
const NC_POSTS_EDGES_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {
		nodes {
			...NcmazFcPostCardFields
		}
	}
`);
const NC_POST_FULL_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcPostFullFields on Post {
		__typename
		uri
		modified
		date
		commentStatus
		status
		commentCount
		excerpt
		databaseId
		title
		content
		author {
			node {
				description
				...NcmazFcUserShortForPostCardFragment
			}
		}
		categories {
			nodes {
				...NcmazFcCategoryCardFieldsNotImage
			}
		}
		tags(first: 20) {
			nodes {
				...NcmazFcTagShortFieldsFragment
			}
		}
		featuredImage {
			node {
				...NcmazFcImageHasDetailFields
			}
		}
		postFormats {
			nodes {
				id
				name
				slug
			}
		}
		ncmazVideoUrl {
			videoUrl
		}
		ncmazAudioUrl {
			audioUrl
		}
		ncPostMetaData {
			...NcmazFcPostMetaFullFields
		}
		ncmazGalleryImgs {
			image1 {
				node {
					...NcmazFcImageHasDetailFields
				}
			}
			image2 {
				node {
					...NcmazFcImageHasDetailFields
				}
			}
			image3 {
				node {
					...NcmazFcImageHasDetailFields
				}
			}
			image4 {
				node {
					...NcmazFcImageHasDetailFields
				}
			}
			image5 {
				node {
					...NcmazFcImageHasDetailFields
				}
			}
			image6 {
				node {
					...NcmazFcImageHasDetailFields
				}
			}
			image7 {
				node {
					...NcmazFcImageHasDetailFields
				}
			}
			image8 {
				node {
					...NcmazFcImageHasDetailFields
				}
			}
		}
	}
`);
const NC_POST_CARD_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcPostCardFields on Post {
		...NcmazFcPostCardFieldsNOTNcmazGalleryImgs
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
const NC_POST_CARD_NOT_NCMAZGALLERY_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcPostCardFieldsNOTNcmazGalleryImgs on Post {
		__typename
		databaseId
		title
		uri
		status
		modified
		date
		commentStatus
		commentCount
		excerpt
		author {
			node {
				...NcmazFcUserShortForPostCardFragment
			}
		}
		categories {
			nodes {
				...NcmazFcCategoryCardFieldsNotImage
			}
		}
		featuredImage {
			node {
				...NcmazFcImageFields
			}
		}
		postFormats {
			nodes {
				name
				slug
			}
		}
		ncmazVideoUrl {
			videoUrl
		}
		ncmazAudioUrl {
			audioUrl
		}
		ncPostMetaData {
			...NcmazFcPostMetaFields
		}
	}
`);

// MEDIA =================================================
const NC_IMAGE_MEDIA_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcImageFields on MediaItem {
		__typename
		altText
		databaseId
		sourceUrl
	}
`);
const NC_IMAGE_MEDIA_HAS_DETAIL_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcImageHasDetailFields on MediaItem {
		__typename
		altText
		databaseId
		sourceUrl
		caption
		mediaDetails {
			height
			width
		}
	}
`);

//  POSTS METADATA =================================================
const NC_POST_META_DATA_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcPostMetaFields on NcPostMetaData {
		__typename
		viewsCount
		readingTime
		likesCount
	}
`);
const NC_POST_META_DATA_FULL_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcPostMetaFullFields on NcPostMetaData {
		__typename
		viewsCount
		readingTime
		likesCount
		savedsCount
		showRightSidebar
		template
	}
`);

// USER   =================================================
const NC_USER_SHORT_FOR_POST_CARD_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcUserShortForPostCardFragment on User {
		databaseId
		uri
		username
		name
		ncUserMeta {
			featuredImage {
				node {
					...NcmazFcImageFields
				}
			}
		}
	}
`);
const NC_USER_FULL_FIELDS_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.gql)( /* GraphQL */`
	fragment NcmazFcUserFullFields on User {
		id
		databaseId
		uri
		username
		name
		description
		ncUserMeta {
			buymeacoffeUrl
			color
			facebookUrl
			githubUrl
			instagramUrl
			linkedinUrl
			mediumUrl
			ncBio
			pinterestUrl
			twitchUrl
			twitterUrl
			vimeoUrl
			websiteUrl
			youtubeUrl
			tiktokUrl
			featuredImage {
				node {
					...NcmazFcImageFields
				}
			}
			backgroundImage {
				node {
					...NcmazFcImageFields
				}
			}
		}
	}
`);

/***/ }),

/***/ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx":
/*!*************************************************************************!*\
  !*** ./src/frontend-components/BackgroundSection/BackgroundSection.tsx ***!
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


const BackgroundSection = ({
  className = "bg-neutral-100 dark:bg-black/20 "
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0  ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only hidden"
  }, "bg"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundSection);

/***/ }),

/***/ "./src/utils/className.tsx":
/*!*********************************!*\
  !*** ./src/utils/className.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ classNames)
/* harmony export */ });
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/***/ }),

/***/ "./src/block-terms/style.scss":
/*!************************************!*\
  !*** ./src/block-terms/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/block-terms/block.json":
/*!************************************!*\
  !*** ./src/block-terms/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ncmaz-faust/block-terms","version":"0.1.0","title":"NcmazFc Terms","category":"ncmazfc-blocks","icon":"smiley","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false,"align":["wide","full"],"className":true},"textdomain":"ncmazfc","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block-terms/index": 0,
/******/ 			"block-terms/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkncmaz_faust_core"] = self["webpackChunkncmaz_faust_core"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-terms/style-index"], () => (__webpack_require__("./src/block-terms/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map