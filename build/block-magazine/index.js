/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/settings.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/settings.js ***!
  \************************************************************************/
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

const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);
//# sourceMappingURL=settings.js.map

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
/* harmony export */   graphql: () => (/* binding */ graphql)
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
  "\n\tfragment NcmazFcTermCardFields on TermNode {\n\t\t__typename\n\t\tid\n\t\tcount\n\t\turi\n\t\tname\n\t\tslug\n\t\tdatabaseId\n\t\tdescription\n\t\tlink\n\t\ttaxonomyName\n\t\t... on Category {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t... on Tag {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcTermCardFieldsFragmentDoc,
  "\n\tfragment NcmazFcTermsCardFields on RootQueryToTermNodeConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcTermCardFields\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcTermsCardFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcPostCardFields\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostsEdegsFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostCardFields on Post {\n\t\t__typename\n\t\tid\n\t\tlink\n\t\turi\n\t\tmodifiedGmt\n\t\tmodified\n\t\tisSticky\n\t\tdateGmt\n\t\tdate\n\t\tcommentStatus\n\t\tstatus\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tid\n\t\t\t\tdatabaseId\n\t\t\t\tavatar {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\turl\n\t\t\t\turi\n\t\t\t\tusername\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tncUserMeta {\n\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tlink\n\t\t\t\t\tname\n\t\t\t\t\turi\n\t\t\t\t\tslug\n\t\t\t\t\tcount\n\t\t\t\t\tdatabaseId\n\t\t\t\t\tncTaxonomyMeta {\n\t\t\t\t\t\tcolor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcommentCount\n\t\tdate\n\t\texcerpt\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdatabaseId\n\t\tslug\n\t\ttitle\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostCardFieldsFragmentDoc,
  "\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\tid\n\t\taltText\n\t\tcaption\n\t\tdatabaseId\n\t\tsizes\n\t\tsourceUrl\n\t\tsrcSet\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcImageFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostMetaFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t\tsavedsCount\n\t\tshowRightSidebar\n\t\ttemplate\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostMetaFieldsFragmentDoc
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */

function graphql(source) {
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
/* harmony export */   MediaItemIdType: () => (/* binding */ MediaItemIdType),
/* harmony export */   MediaItemSizeEnum: () => (/* binding */ MediaItemSizeEnum),
/* harmony export */   MediaItemStatusEnum: () => (/* binding */ MediaItemStatusEnum),
/* harmony export */   MenuItemNodeIdTypeEnum: () => (/* binding */ MenuItemNodeIdTypeEnum),
/* harmony export */   MenuLocationEnum: () => (/* binding */ MenuLocationEnum),
/* harmony export */   MenuNodeIdTypeEnum: () => (/* binding */ MenuNodeIdTypeEnum),
/* harmony export */   MimeTypeEnum: () => (/* binding */ MimeTypeEnum),
/* harmony export */   NcmazFcImageFieldsFragmentDoc: () => (/* binding */ NcmazFcImageFieldsFragmentDoc),
/* harmony export */   NcmazFcPostCardFieldsFragmentDoc: () => (/* binding */ NcmazFcPostCardFieldsFragmentDoc),
/* harmony export */   NcmazFcPostMetaFieldsFragmentDoc: () => (/* binding */ NcmazFcPostMetaFieldsFragmentDoc),
/* harmony export */   NcmazFcPostsEdegsFieldsFragmentDoc: () => (/* binding */ NcmazFcPostsEdegsFieldsFragmentDoc),
/* harmony export */   NcmazFcTermCardFieldsFragmentDoc: () => (/* binding */ NcmazFcTermCardFieldsFragmentDoc),
/* harmony export */   NcmazFcTermsCardFieldsFragmentDoc: () => (/* binding */ NcmazFcTermsCardFieldsFragmentDoc),
/* harmony export */   NcmazFcUserReactionPostActionEnum: () => (/* binding */ NcmazFcUserReactionPostActionEnum),
/* harmony export */   NcmazFcUserReactionPostNumberUpdateEnum: () => (/* binding */ NcmazFcUserReactionPostNumberUpdateEnum),
/* harmony export */   NcmazFcUserReactionPostUpdateResuiltEnum: () => (/* binding */ NcmazFcUserReactionPostUpdateResuiltEnum),
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
/* eslint-disable */ /** All built-in and custom scalars, mapped to their actual values */ /** A Field Group managed by ACF */ /** Fields associated with an ACF Field Group */ /** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */ /** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */let AvatarRatingEnum=/*#__PURE__*/function(AvatarRatingEnum){AvatarRatingEnum["G"]="G";AvatarRatingEnum["Pg"]="PG";AvatarRatingEnum["R"]="R";AvatarRatingEnum["X"]="X";return AvatarRatingEnum;}({});/** Block that supports Anchor field */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** Connection to category Nodes */ /** Edge between a Node and a connected category */ /** Page Info on the connected CategoryConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let CategoryIdType=/*#__PURE__*/function(CategoryIdType){CategoryIdType["DatabaseId"]="DATABASE_ID";CategoryIdType["Id"]="ID";CategoryIdType["Name"]="NAME";CategoryIdType["Slug"]="SLUG";CategoryIdType["Uri"]="URI";return CategoryIdType;}({});/** Connection between the Category type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */ /** Connection between the Category type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToCategoryConnection&quot; */ /** Arguments for filtering the CategoryToCategoryConnection connection */ /** Connection between the Category type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToContentNodeConnection&quot; */ /** Arguments for filtering the CategoryToContentNodeConnection connection */ /** Connection between the Category type and the category type */ /** Connection between the Category type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToPostConnection&quot; */ /** Arguments for filtering the CategoryToPostConnection connection */ /** Connection between the Category type and the Taxonomy type */ /** A Comment object */ /** A Comment object */ /** A Comment object */ /** A Comment object */ /** A Comment Author object */ /** A Comment Author object */ /** Connection to Comment Nodes */ /** Edge between a Node and a connected Comment */ /** Page Info on the connected CommentConnectionEdge */ /** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */let CommentNodeIdTypeEnum=/*#__PURE__*/function(CommentNodeIdTypeEnum){CommentNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";CommentNodeIdTypeEnum["Id"]="ID";return CommentNodeIdTypeEnum;}({});/** The status of the comment object. */let CommentStatusEnum=/*#__PURE__*/function(CommentStatusEnum){CommentStatusEnum["Approve"]="APPROVE";CommentStatusEnum["Hold"]="HOLD";CommentStatusEnum["Spam"]="SPAM";CommentStatusEnum["Trash"]="TRASH";return CommentStatusEnum;}({});/** Connection between the Comment type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;CommentToCommentConnection&quot; */ /** Arguments for filtering the CommentToCommentConnection connection */ /** Connection between the Comment type and the Commenter type */ /** Connection between the Comment type and the ContentNode type */ /** Connection between the Comment type and the Comment type */ /** Arguments for filtering the CommentToParentCommentConnection connection */ /** The author of a comment */ /** Edge between a Node and a connected Commenter */ /** Options for ordering the connection */let CommentsConnectionOrderbyEnum=/*#__PURE__*/function(CommentsConnectionOrderbyEnum){CommentsConnectionOrderbyEnum["CommentAgent"]="COMMENT_AGENT";CommentsConnectionOrderbyEnum["CommentApproved"]="COMMENT_APPROVED";CommentsConnectionOrderbyEnum["CommentAuthor"]="COMMENT_AUTHOR";CommentsConnectionOrderbyEnum["CommentAuthorEmail"]="COMMENT_AUTHOR_EMAIL";CommentsConnectionOrderbyEnum["CommentAuthorIp"]="COMMENT_AUTHOR_IP";CommentsConnectionOrderbyEnum["CommentAuthorUrl"]="COMMENT_AUTHOR_URL";CommentsConnectionOrderbyEnum["CommentContent"]="COMMENT_CONTENT";CommentsConnectionOrderbyEnum["CommentDate"]="COMMENT_DATE";CommentsConnectionOrderbyEnum["CommentDateGmt"]="COMMENT_DATE_GMT";CommentsConnectionOrderbyEnum["CommentId"]="COMMENT_ID";CommentsConnectionOrderbyEnum["CommentIn"]="COMMENT_IN";CommentsConnectionOrderbyEnum["CommentKarma"]="COMMENT_KARMA";CommentsConnectionOrderbyEnum["CommentParent"]="COMMENT_PARENT";CommentsConnectionOrderbyEnum["CommentPostId"]="COMMENT_POST_ID";CommentsConnectionOrderbyEnum["CommentType"]="COMMENT_TYPE";CommentsConnectionOrderbyEnum["UserId"]="USER_ID";return CommentsConnectionOrderbyEnum;}({});/** GraphQL representation of WordPress Conditional Tags. */ /** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */ /** Nodes used to manage content */ /** Nodes used to manage content */ /** Nodes used to manage content */ /** Connection to ContentNode Nodes */ /** Edge between a Node and a connected ContentNode */ /** Page Info on the connected ContentNodeConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let ContentNodeIdTypeEnum=/*#__PURE__*/function(ContentNodeIdTypeEnum){ContentNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";ContentNodeIdTypeEnum["Id"]="ID";ContentNodeIdTypeEnum["Uri"]="URI";return ContentNodeIdTypeEnum;}({});/** Connection between the ContentNode type and the ContentType type */ /** Connection between the ContentNode type and the User type */ /** Connection between the ContentNode type and the User type */ /** Connection between the ContentNode type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */ /** Connection between the ContentNode type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */ /** The template assigned to a node of content */ /** An Post Type object */ /** An Post Type object */ /** An Post Type object */ /** Connection to ContentType Nodes */ /** Edge between a Node and a connected ContentType */ /** Page Info on the connected ContentTypeConnectionEdge */ /** Allowed Content Types */let ContentTypeEnum=/*#__PURE__*/function(ContentTypeEnum){ContentTypeEnum["Attachment"]="ATTACHMENT";ContentTypeEnum["Page"]="PAGE";ContentTypeEnum["Post"]="POST";ContentTypeEnum["UserReactionPost"]="USER_REACTION_POST";return ContentTypeEnum;}({});/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */let ContentTypeIdTypeEnum=/*#__PURE__*/function(ContentTypeIdTypeEnum){ContentTypeIdTypeEnum["Id"]="ID";ContentTypeIdTypeEnum["Name"]="NAME";return ContentTypeIdTypeEnum;}({});/** Connection between the ContentType type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */ /** Arguments for filtering the ContentTypeToContentNodeConnection connection */ /** Connection between the ContentType type and the Taxonomy type */ /** An edge in a connection */ /** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */ /** Allowed Content Types of the Category taxonomy. */let ContentTypesOfCategoryEnum=/*#__PURE__*/function(ContentTypesOfCategoryEnum){ContentTypesOfCategoryEnum["Post"]="POST";return ContentTypesOfCategoryEnum;}({});/** Allowed Content Types of the PostFormat taxonomy. */let ContentTypesOfPostFormatEnum=/*#__PURE__*/function(ContentTypesOfPostFormatEnum){ContentTypesOfPostFormatEnum["Post"]="POST";return ContentTypesOfPostFormatEnum;}({});/** Allowed Content Types of the Tag taxonomy. */let ContentTypesOfTagEnum=/*#__PURE__*/function(ContentTypesOfTagEnum){ContentTypesOfTagEnum["Post"]="POST";return ContentTypesOfTagEnum;}({});/** A block used for editing the site */ /** Attributes of the CoreArchives Block Type */ /** A block used for editing the site */ /** Attributes of the CoreAudio Block Type */ /** A block used for editing the site */ /** Attributes of the CoreAvatar Block Type */ /** A block used for editing the site */ /** Attributes of the CoreBlock Block Type */ /** A block used for editing the site */ /** Attributes of the CoreButton Block Type */ /** A block used for editing the site */ /** Attributes of the CoreButtons Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCalendar Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCategories Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCode Block Type */ /** A block used for editing the site */ /** Attributes of the CoreColumn Block Type */ /** A block used for editing the site */ /** Attributes of the CoreColumns Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentAuthorName Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentContent Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentDate Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentEditLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentReplyLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentTemplate Block Type */ /** A block used for editing the site */ /** Attributes of the CoreComments Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPagination Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationNext Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationNumbers Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationPrevious Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCover Block Type */ /** A block used for editing the site */ /** Attributes of the CoreEmbed Block Type */ /** A block used for editing the site */ /** Attributes of the CoreFile Block Type */ /** A block used for editing the site */ /** Attributes of the CoreFreeform Block Type */ /** A block used for editing the site */ /** Attributes of the CoreGallery Block Type */ /** A block used for editing the site */ /** Attributes of the CoreGroup Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHeading Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHomeLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHtml Block Type */ /** A block used for editing the site */ /** Attributes of the CoreImage Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLatestComments Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLatestPosts Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLegacyWidget Block Type */ /** A block used for editing the site */ /** Attributes of the CoreList Block Type */ /** A block used for editing the site */ /** Attributes of the CoreListItem Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLoginout Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMediaText Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMissing Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMore Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigation Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigationLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigationSubmenu Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNextpage Block Type */ /** A block used for editing the site */ /** Attributes of the CorePageList Block Type */ /** A block used for editing the site */ /** Attributes of the CorePageListItem Block Type */ /** A block used for editing the site */ /** Attributes of the CoreParagraph Block Type */ /** A block used for editing the site */ /** Attributes of the CorePattern Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthor Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthorBiography Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthorName Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostComments Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostCommentsForm Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostContent Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostDate Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostExcerpt Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostFeaturedImage Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostNavigationLink Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTemplate Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTerms Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CorePreformatted Block Type */ /** A block used for editing the site */ /** Attributes of the CorePullquote Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQuery Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryNoResults Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPagination Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationNext Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationNumbers Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationPrevious Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQuote Block Type */ /** A block used for editing the site */ /** Attributes of the CoreReadMore Block Type */ /** A block used for editing the site */ /** Attributes of the CoreRss Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSearch Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSeparator Block Type */ /** A block used for editing the site */ /** Attributes of the CoreShortcode Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteLogo Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteTagline Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSocialLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSocialLinks Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSpacer Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTable Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTagCloud Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTemplatePart Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTermDescription Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTextColumns Block Type */ /** A block used for editing the site */ /** Attributes of the CoreVerse Block Type */ /** A block used for editing the site */ /** Attributes of the CoreVideo Block Type */ /** A block used for editing the site */ /** Attributes of the CoreWidgetGroup Block Type */ /** Input for the createCategory mutation. */ /** The payload for the createCategory mutation. */ /** Input for the createComment mutation. */ /** The payload for the createComment mutation. */ /** Input for the createMediaItem mutation. */ /** The payload for the createMediaItem mutation. */ /** Input for the createPage mutation. */ /** The payload for the createPage mutation. */ /** Input for the createPostFormat mutation. */ /** The payload for the createPostFormat mutation. */ /** Input for the createPost mutation. */ /** The payload for the createPost mutation. */ /** Input for the createTag mutation. */ /** The payload for the createTag mutation. */ /** Input for the createUser mutation. */ /** The payload for the createUser mutation. */ /** Input for the createUserReactionPost mutation. */ /** The payload for the createUserReactionPost mutation. */ /** Object that can be identified with a Database ID */ /** Date values */ /** Filter the connection based on input */ /** The template assigned to the node */ /** Input for the deleteCategory mutation. */ /** The payload for the deleteCategory mutation. */ /** Input for the deleteComment mutation. */ /** The payload for the deleteComment mutation. */ /** Input for the deleteMediaItem mutation. */ /** The payload for the deleteMediaItem mutation. */ /** Input for the deletePage mutation. */ /** The payload for the deletePage mutation. */ /** Input for the deletePostFormat mutation. */ /** The payload for the deletePostFormat mutation. */ /** Input for the deletePost mutation. */ /** The payload for the deletePost mutation. */ /** Input for the deleteTag mutation. */ /** The payload for the deleteTag mutation. */ /** Input for the deleteUser mutation. */ /** The payload for the deleteUser mutation. */ /** Input for the deleteUserReactionPost mutation. */ /** The payload for the deleteUserReactionPost mutation. */ /** The discussion setting type */ /** Relational context between connected nodes */ /** Blocks that can be edited to create content and layouts */ /** Asset enqueued by the CMS */ /** Script enqueued by the CMS */ /** Connection to EnqueuedScript Nodes */ /** Edge between a Node and a connected EnqueuedScript */ /** Page Info on the connected EnqueuedScriptConnectionEdge */ /** Stylesheet enqueued by the CMS */ /** Connection to EnqueuedStylesheet Nodes */ /** Edge between a Node and a connected EnqueuedStylesheet */ /** Page Info on the connected EnqueuedStylesheetConnectionEdge */ /** The general setting type */ /** Input for the generateAuthorizationCode mutation. */ /** The payload for the generateAuthorizationCode mutation. */ /** Types of styles to load */let GlobalStylesheetTypesEnum=/*#__PURE__*/function(GlobalStylesheetTypesEnum){GlobalStylesheetTypesEnum["BaseLayoutStyles"]="BASE_LAYOUT_STYLES";GlobalStylesheetTypesEnum["Presets"]="PRESETS";GlobalStylesheetTypesEnum["Styles"]="STYLES";GlobalStylesheetTypesEnum["Variables"]="VARIABLES";return GlobalStylesheetTypesEnum;}({});/** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */ /** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */ /** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** Node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** File details for a Media Item */ /** File details for a Media Item */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** Connection to mediaItem Nodes */ /** Edge between a Node and a connected mediaItem */ /** Page Info on the connected MediaItemConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let MediaItemIdType=/*#__PURE__*/function(MediaItemIdType){MediaItemIdType["DatabaseId"]="DATABASE_ID";MediaItemIdType["Id"]="ID";MediaItemIdType["Slug"]="SLUG";MediaItemIdType["SourceUrl"]="SOURCE_URL";MediaItemIdType["Uri"]="URI";return MediaItemIdType;}({});/** Meta connected to a MediaItem */ /** The size of the media item object. */let MediaItemSizeEnum=/*#__PURE__*/function(MediaItemSizeEnum){MediaItemSizeEnum["Large"]="LARGE";MediaItemSizeEnum["Medium"]="MEDIUM";MediaItemSizeEnum["MediumLarge"]="MEDIUM_LARGE";MediaItemSizeEnum["Thumbnail"]="THUMBNAIL";MediaItemSizeEnum["1536X1536"]="_1536X1536";MediaItemSizeEnum["2048X2048"]="_2048X2048";return MediaItemSizeEnum;}({});/** The status of the media item object. */let MediaItemStatusEnum=/*#__PURE__*/function(MediaItemStatusEnum){MediaItemStatusEnum["AutoDraft"]="AUTO_DRAFT";MediaItemStatusEnum["Inherit"]="INHERIT";MediaItemStatusEnum["Private"]="PRIVATE";MediaItemStatusEnum["Trash"]="TRASH";return MediaItemStatusEnum;}({});/** Connection between the MediaItem type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;MediaItemToCommentConnection&quot; */ /** Arguments for filtering the MediaItemToCommentConnection connection */ /** Details of an available size for a media item */ /** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */ /** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */ /** Connection to Menu Nodes */ /** Edge between a Node and a connected Menu */ /** Page Info on the connected MenuConnectionEdge */ /** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */ /** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */ /** Connection to MenuItem Nodes */ /** Edge between a Node and a connected MenuItem */ /** Page Info on the connected MenuItemConnectionEdge */ /** Nodes that can be linked to as Menu Items */ /** Edge between a Node and a connected MenuItemLinkable */ /** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */let MenuItemNodeIdTypeEnum=/*#__PURE__*/function(MenuItemNodeIdTypeEnum){MenuItemNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";MenuItemNodeIdTypeEnum["Id"]="ID";return MenuItemNodeIdTypeEnum;}({});/** Deprecated in favor of MenuItemLinkeable Interface */ /** Connection between the MenuItem type and the Menu type */ /** Connection between the MenuItem type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */ /** Arguments for filtering the MenuItemToMenuItemConnection connection */ /** Connection between the MenuItem type and the MenuItemLinkable type */ /** Registered menu locations */let MenuLocationEnum=/*#__PURE__*/function(MenuLocationEnum){MenuLocationEnum["Footer"]="FOOTER";MenuLocationEnum["Primary"]="PRIMARY";return MenuLocationEnum;}({});/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */let MenuNodeIdTypeEnum=/*#__PURE__*/function(MenuNodeIdTypeEnum){MenuNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";MenuNodeIdTypeEnum["Id"]="ID";MenuNodeIdTypeEnum["Location"]="LOCATION";MenuNodeIdTypeEnum["Name"]="NAME";MenuNodeIdTypeEnum["Slug"]="SLUG";return MenuNodeIdTypeEnum;}({});/** Connection between the Menu type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;MenuToMenuItemConnection&quot; */ /** Arguments for filtering the MenuToMenuItemConnection connection */ /** The MimeType of the object */let MimeTypeEnum=/*#__PURE__*/function(MimeTypeEnum){MimeTypeEnum["ApplicationFontWoff"]="APPLICATION_FONT_WOFF";MimeTypeEnum["ApplicationFontWoff2"]="APPLICATION_FONT_WOFF2";MimeTypeEnum["ApplicationJava"]="APPLICATION_JAVA";MimeTypeEnum["ApplicationMsword"]="APPLICATION_MSWORD";MimeTypeEnum["ApplicationOctetStream"]="APPLICATION_OCTET_STREAM";MimeTypeEnum["ApplicationOnenote"]="APPLICATION_ONENOTE";MimeTypeEnum["ApplicationOxps"]="APPLICATION_OXPS";MimeTypeEnum["ApplicationPdf"]="APPLICATION_PDF";MimeTypeEnum["ApplicationRar"]="APPLICATION_RAR";MimeTypeEnum["ApplicationRedux"]="APPLICATION_REDUX";MimeTypeEnum["ApplicationRtf"]="APPLICATION_RTF";MimeTypeEnum["ApplicationTtafXml"]="APPLICATION_TTAF_XML";MimeTypeEnum["ApplicationVndAppleKeynote"]="APPLICATION_VND_APPLE_KEYNOTE";MimeTypeEnum["ApplicationVndAppleNumbers"]="APPLICATION_VND_APPLE_NUMBERS";MimeTypeEnum["ApplicationVndApplePages"]="APPLICATION_VND_APPLE_PAGES";MimeTypeEnum["ApplicationVndMsAccess"]="APPLICATION_VND_MS_ACCESS";MimeTypeEnum["ApplicationVndMsExcel"]="APPLICATION_VND_MS_EXCEL";MimeTypeEnum["ApplicationVndMsExcelAddinMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelSheetBinaryMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelSheetMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelTemplateMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsFontobject"]="APPLICATION_VND_MS_FONTOBJECT";MimeTypeEnum["ApplicationVndMsPowerpoint"]="APPLICATION_VND_MS_POWERPOINT";MimeTypeEnum["ApplicationVndMsPowerpointAddinMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointPresentationMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointSlideshowMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointSlideMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointTemplateMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsProject"]="APPLICATION_VND_MS_PROJECT";MimeTypeEnum["ApplicationVndMsWordDocumentMacroenabled_12"]="APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsWordTemplateMacroenabled_12"]="APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsWrite"]="APPLICATION_VND_MS_WRITE";MimeTypeEnum["ApplicationVndMsXpsdocument"]="APPLICATION_VND_MS_XPSDOCUMENT";MimeTypeEnum["ApplicationVndOasisOpendocumentChart"]="APPLICATION_VND_OASIS_OPENDOCUMENT_CHART";MimeTypeEnum["ApplicationVndOasisOpendocumentDatabase"]="APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE";MimeTypeEnum["ApplicationVndOasisOpendocumentFormula"]="APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA";MimeTypeEnum["ApplicationVndOasisOpendocumentGraphics"]="APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS";MimeTypeEnum["ApplicationVndOasisOpendocumentPresentation"]="APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION";MimeTypeEnum["ApplicationVndOasisOpendocumentSpreadsheet"]="APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET";MimeTypeEnum["ApplicationVndOasisOpendocumentText"]="APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE";MimeTypeEnum["ApplicationWordperfect"]="APPLICATION_WORDPERFECT";MimeTypeEnum["ApplicationX_7ZCompressed"]="APPLICATION_X_7Z_COMPRESSED";MimeTypeEnum["ApplicationXGzip"]="APPLICATION_X_GZIP";MimeTypeEnum["ApplicationXTar"]="APPLICATION_X_TAR";MimeTypeEnum["ApplicationZip"]="APPLICATION_ZIP";MimeTypeEnum["AudioAac"]="AUDIO_AAC";MimeTypeEnum["AudioFlac"]="AUDIO_FLAC";MimeTypeEnum["AudioMidi"]="AUDIO_MIDI";MimeTypeEnum["AudioMpeg"]="AUDIO_MPEG";MimeTypeEnum["AudioOgg"]="AUDIO_OGG";MimeTypeEnum["AudioWav"]="AUDIO_WAV";MimeTypeEnum["AudioXMatroska"]="AUDIO_X_MATROSKA";MimeTypeEnum["AudioXMsWax"]="AUDIO_X_MS_WAX";MimeTypeEnum["AudioXMsWma"]="AUDIO_X_MS_WMA";MimeTypeEnum["AudioXRealaudio"]="AUDIO_X_REALAUDIO";MimeTypeEnum["FontOtf"]="FONT_OTF";MimeTypeEnum["FontTtf"]="FONT_TTF";MimeTypeEnum["ImageBmp"]="IMAGE_BMP";MimeTypeEnum["ImageGif"]="IMAGE_GIF";MimeTypeEnum["ImageHeic"]="IMAGE_HEIC";MimeTypeEnum["ImageJpeg"]="IMAGE_JPEG";MimeTypeEnum["ImagePng"]="IMAGE_PNG";MimeTypeEnum["ImageSvgXml"]="IMAGE_SVG_XML";MimeTypeEnum["ImageTiff"]="IMAGE_TIFF";MimeTypeEnum["ImageWebp"]="IMAGE_WEBP";MimeTypeEnum["ImageXIcon"]="IMAGE_X_ICON";MimeTypeEnum["TextCalendar"]="TEXT_CALENDAR";MimeTypeEnum["TextCss"]="TEXT_CSS";MimeTypeEnum["TextCsv"]="TEXT_CSV";MimeTypeEnum["TextPlain"]="TEXT_PLAIN";MimeTypeEnum["TextRichtext"]="TEXT_RICHTEXT";MimeTypeEnum["TextTabSeparatedValues"]="TEXT_TAB_SEPARATED_VALUES";MimeTypeEnum["TextVtt"]="TEXT_VTT";MimeTypeEnum["Video_3Gpp"]="VIDEO_3GPP";MimeTypeEnum["Video_3Gpp2"]="VIDEO_3GPP2";MimeTypeEnum["VideoAvi"]="VIDEO_AVI";MimeTypeEnum["VideoDivx"]="VIDEO_DIVX";MimeTypeEnum["VideoMp4"]="VIDEO_MP4";MimeTypeEnum["VideoMpeg"]="VIDEO_MPEG";MimeTypeEnum["VideoOgg"]="VIDEO_OGG";MimeTypeEnum["VideoQuicktime"]="VIDEO_QUICKTIME";MimeTypeEnum["VideoWebm"]="VIDEO_WEBM";MimeTypeEnum["VideoXFlv"]="VIDEO_X_FLV";MimeTypeEnum["VideoXMatroska"]="VIDEO_X_MATROSKA";MimeTypeEnum["VideoXMsAsf"]="VIDEO_X_MS_ASF";MimeTypeEnum["VideoXMsWm"]="VIDEO_X_MS_WM";MimeTypeEnum["VideoXMsWmv"]="VIDEO_X_MS_WMV";MimeTypeEnum["VideoXMsWmx"]="VIDEO_X_MS_WMX";return MimeTypeEnum;}({});/** Added by WPGraphQL for ACF Redux */ /** Interface representing fields of the ACF &quot;NcPostMetaData&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Connection between the NcTaxonomyMeta type and the MediaItem type */ /** Interface representing fields of the ACF &quot;NcTaxonomyMeta&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Connection between the NcUserMeta type and the MediaItem type */ /** Connection between the NcUserMeta type and the MediaItem type */ /** Interface representing fields of the ACF &quot;NcUserMeta&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Interface representing fields of the ACF &quot;NcmazAudioUrl&quot; Field Group */ /** A block used for editing the site */ /** Attributes of the NcmazFaustBlockMagazine Block Type */ /** A block used for editing the site */ /** Attributes of the NcmazFaustBlockTerms Block Type */ /** Input for the ncmazFaustUpdateUserReactionPostCount mutation. */ /** The payload for the ncmazFaustUpdateUserReactionPostCount mutation. */ /** Reaction of user, like save, likes, view, or something else */let NcmazFcUserReactionPostActionEnum=/*#__PURE__*/function(NcmazFcUserReactionPostActionEnum){NcmazFcUserReactionPostActionEnum["Like"]="LIKE";NcmazFcUserReactionPostActionEnum["Save"]="SAVE";NcmazFcUserReactionPostActionEnum["View"]="VIEW";return NcmazFcUserReactionPostActionEnum;}({});/** 1 = add, 0 = remove */let NcmazFcUserReactionPostNumberUpdateEnum=/*#__PURE__*/function(NcmazFcUserReactionPostNumberUpdateEnum){NcmazFcUserReactionPostNumberUpdateEnum["Add_1"]="ADD_1";NcmazFcUserReactionPostNumberUpdateEnum["Remove_1"]="REMOVE_1";return NcmazFcUserReactionPostNumberUpdateEnum;}({});/** Added, Removed, or Error */let NcmazFcUserReactionPostUpdateResuiltEnum=/*#__PURE__*/function(NcmazFcUserReactionPostUpdateResuiltEnum){NcmazFcUserReactionPostUpdateResuiltEnum["Added"]="ADDED";NcmazFcUserReactionPostUpdateResuiltEnum["Error"]="ERROR";NcmazFcUserReactionPostUpdateResuiltEnum["Removed"]="REMOVED";return NcmazFcUserReactionPostUpdateResuiltEnum;}({});/** Added by WPGraphQL for ACF Redux */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Connection between the NcmazGalleryImgs type and the MediaItem type */ /** Interface representing fields of the ACF &quot;NcmazGalleryImgs&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Added by WPGraphQL for ACF Redux */ /** Connection between the NcmazMenuCustomFields type and the TermNode type */ /** An edge in a connection */ /** Page Info on the &quot;NcmazMenuCustomFieldsTaxonomiesToTermNodeConnection&quot; */ /** Interface representing fields of the ACF &quot;NcmazMenuCustomFields&quot; Field Group */ /** Interface representing fields of the ACF &quot;NcmazMenuCustomFields&quot; Field Group */ /** Added by WPGraphQL for ACF Redux */ /** Interface representing fields of the ACF &quot;NcmazVideoUrl&quot; Field Group */ /** An object with an ID */ /** A node that can have an author assigned to it */ /** Connection between the NodeWithAuthor type and the User type */ /** A node that can have comments associated with it */ /** A node that supports the content editor */ /** A node that supports the content editor */ /** Node that has content blocks associated with it */ /** Node that has content blocks associated with it */ /** A node that can have an excerpt */ /** A node that can have an excerpt */ /** A node that can have a featured image set */ /** Connection between the NodeWithFeaturedImage type and the MediaItem type */ /** A node that can have page attributes */ /** Node that has Page content blocks associated with it */ /** Node that has Page content blocks associated with it */ /** Node that has Post content blocks associated with it */ /** Node that has Post content blocks associated with it */ /** A node that can have revisions */ /** Connection between the NodeWithRevisions type and the ContentNode type */ /** A node that can have a template associated with it */ /** A node that NodeWith a title */ /** A node that NodeWith a title */ /** A node that can have trackbacks and pingbacks */ /** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */ /** The cardinality of the connection order */let OrderEnum=/*#__PURE__*/function(OrderEnum){OrderEnum["Asc"]="ASC";OrderEnum["Desc"]="DESC";return OrderEnum;}({});/** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** Connection to page Nodes */ /** Edge between a Node and a connected page */ /** Page Info on the connected PageConnectionEdge */ /** EditorBlock Interface for Page Block Type */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PageIdType=/*#__PURE__*/function(PageIdType){PageIdType["DatabaseId"]="DATABASE_ID";PageIdType["Id"]="ID";PageIdType["Uri"]="URI";return PageIdType;}({});/** Information about pagination in a connection. */ /** Connection between the Page type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;PageToCommentConnection&quot; */ /** Arguments for filtering the PageToCommentConnection connection */ /** Connection between the Page type and the page type */ /** Connection between the Page type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;PageToRevisionConnection&quot; */ /** Arguments for filtering the PageToRevisionConnection connection */ /** An plugin object */ /** Connection to Plugin Nodes */ /** Edge between a Node and a connected Plugin */ /** Page Info on the connected PluginConnectionEdge */ /** The status of the WordPress plugin. */let PluginStatusEnum=/*#__PURE__*/function(PluginStatusEnum){PluginStatusEnum["Active"]="ACTIVE";PluginStatusEnum["DropIn"]="DROP_IN";PluginStatusEnum["Inactive"]="INACTIVE";PluginStatusEnum["MustUse"]="MUST_USE";PluginStatusEnum["Paused"]="PAUSED";PluginStatusEnum["RecentlyActive"]="RECENTLY_ACTIVE";PluginStatusEnum["Upgrade"]="UPGRADE";return PluginStatusEnum;}({});/** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** Set relationships between the post to categories */ /** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** Connection to post Nodes */ /** Edge between a Node and a connected post */ /** Page Info on the connected PostConnectionEdge */ /** EditorBlock Interface for Post Block Type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** Connection to postFormat Nodes */ /** Edge between a Node and a connected postFormat */ /** Page Info on the connected PostFormatConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PostFormatIdType=/*#__PURE__*/function(PostFormatIdType){PostFormatIdType["DatabaseId"]="DATABASE_ID";PostFormatIdType["Id"]="ID";PostFormatIdType["Name"]="NAME";PostFormatIdType["Slug"]="SLUG";PostFormatIdType["Uri"]="URI";return PostFormatIdType;}({});/** Connection between the PostFormat type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */ /** Arguments for filtering the PostFormatToContentNodeConnection connection */ /** Connection between the PostFormat type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;PostFormatToPostConnection&quot; */ /** Arguments for filtering the PostFormatToPostConnection connection */ /** Connection between the PostFormat type and the Taxonomy type */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PostIdType=/*#__PURE__*/function(PostIdType){PostIdType["DatabaseId"]="DATABASE_ID";PostIdType["Id"]="ID";PostIdType["Slug"]="SLUG";PostIdType["Uri"]="URI";return PostIdType;}({});/** The format of post field data. */let PostObjectFieldFormatEnum=/*#__PURE__*/function(PostObjectFieldFormatEnum){PostObjectFieldFormatEnum["Raw"]="RAW";PostObjectFieldFormatEnum["Rendered"]="RENDERED";return PostObjectFieldFormatEnum;}({});/** The column to use when filtering by date */let PostObjectsConnectionDateColumnEnum=/*#__PURE__*/function(PostObjectsConnectionDateColumnEnum){PostObjectsConnectionDateColumnEnum["Date"]="DATE";PostObjectsConnectionDateColumnEnum["Modified"]="MODIFIED";return PostObjectsConnectionDateColumnEnum;}({});/** Field to order the connection by */let PostObjectsConnectionOrderbyEnum=/*#__PURE__*/function(PostObjectsConnectionOrderbyEnum){PostObjectsConnectionOrderbyEnum["Author"]="AUTHOR";PostObjectsConnectionOrderbyEnum["CommentCount"]="COMMENT_COUNT";PostObjectsConnectionOrderbyEnum["Date"]="DATE";PostObjectsConnectionOrderbyEnum["In"]="IN";PostObjectsConnectionOrderbyEnum["MenuOrder"]="MENU_ORDER";PostObjectsConnectionOrderbyEnum["Modified"]="MODIFIED";PostObjectsConnectionOrderbyEnum["NameIn"]="NAME_IN";PostObjectsConnectionOrderbyEnum["Parent"]="PARENT";PostObjectsConnectionOrderbyEnum["Slug"]="SLUG";PostObjectsConnectionOrderbyEnum["Title"]="TITLE";return PostObjectsConnectionOrderbyEnum;}({});/** Options for ordering the connection */ /** Set relationships between the post to postFormats */ /** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** The status of the object. */let PostStatusEnum=/*#__PURE__*/function(PostStatusEnum){PostStatusEnum["AcfDisabled"]="ACF_DISABLED";PostStatusEnum["AutoDraft"]="AUTO_DRAFT";PostStatusEnum["Draft"]="DRAFT";PostStatusEnum["Future"]="FUTURE";PostStatusEnum["Inherit"]="INHERIT";PostStatusEnum["Pending"]="PENDING";PostStatusEnum["Private"]="PRIVATE";PostStatusEnum["Publish"]="PUBLISH";PostStatusEnum["RequestCompleted"]="REQUEST_COMPLETED";PostStatusEnum["RequestConfirmed"]="REQUEST_CONFIRMED";PostStatusEnum["RequestFailed"]="REQUEST_FAILED";PostStatusEnum["RequestPending"]="REQUEST_PENDING";PostStatusEnum["Trash"]="TRASH";return PostStatusEnum;}({});/** Set relationships between the post to tags */ /** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** Connection between the Post type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;PostToCategoryConnection&quot; */ /** Arguments for filtering the PostToCategoryConnection connection */ /** Connection between the Post type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;PostToCommentConnection&quot; */ /** Arguments for filtering the PostToCommentConnection connection */ /** Connection between the Post type and the postFormat type */ /** An edge in a connection */ /** Page Info on the &quot;PostToPostFormatConnection&quot; */ /** Arguments for filtering the PostToPostFormatConnection connection */ /** Connection between the Post type and the post type */ /** Connection between the Post type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;PostToRevisionConnection&quot; */ /** Arguments for filtering the PostToRevisionConnection connection */ /** Connection between the Post type and the tag type */ /** An edge in a connection */ /** Page Info on the &quot;PostToTagConnection&quot; */ /** Arguments for filtering the PostToTagConnection connection */ /** Connection between the Post type and the TermNode type */ /** An edge in a connection */ /** Page Info on the &quot;PostToTermNodeConnection&quot; */ /** Arguments for filtering the PostToTermNodeConnection connection */ /** Details for labels of the PostType */ /** Nodes that can be seen in a preview (unpublished) state. */ /** The reading setting type */ /** Input for the registerUser mutation. */ /** The payload for the registerUser mutation. */ /** The logical relation between each item in the array when there are more than one. */let RelationEnum=/*#__PURE__*/function(RelationEnum){RelationEnum["And"]="AND";RelationEnum["Or"]="OR";return RelationEnum;}({});/** Input for the resetUserPassword mutation. */ /** The payload for the resetUserPassword mutation. */ /** Input for the restoreComment mutation. */ /** The payload for the restoreComment mutation. */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** Connection between the RootQuery type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToCategoryConnection&quot; */ /** Arguments for filtering the RootQueryToCategoryConnection connection */ /** Connection between the RootQuery type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToCommentConnection&quot; */ /** Arguments for filtering the RootQueryToCommentConnection connection */ /** Connection between the RootQuery type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */ /** Arguments for filtering the RootQueryToContentNodeConnection connection */ /** Connection between the RootQuery type and the ContentType type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */ /** Connection between the RootQuery type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */ /** Connection between the RootQuery type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */ /** Connection between the RootQuery type and the mediaItem type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */ /** Arguments for filtering the RootQueryToMediaItemConnection connection */ /** Connection between the RootQuery type and the Menu type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMenuConnection&quot; */ /** Arguments for filtering the RootQueryToMenuConnection connection */ /** Connection between the RootQuery type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */ /** Arguments for filtering the RootQueryToMenuItemConnection connection */ /** Connection between the RootQuery type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPageConnection&quot; */ /** Arguments for filtering the RootQueryToPageConnection connection */ /** Connection between the RootQuery type and the Plugin type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPluginConnection&quot; */ /** Arguments for filtering the RootQueryToPluginConnection connection */ /** Connection between the RootQuery type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPostConnection&quot; */ /** Arguments for filtering the RootQueryToPostConnection connection */ /** Connection between the RootQuery type and the postFormat type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */ /** Arguments for filtering the RootQueryToPostFormatConnection connection */ /** Connection between the RootQuery type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */ /** Arguments for filtering the RootQueryToRevisionsConnection connection */ /** Connection between the RootQuery type and the tag type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTagConnection&quot; */ /** Arguments for filtering the RootQueryToTagConnection connection */ /** Connection between the RootQuery type and the Taxonomy type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */ /** Connection between the RootQuery type and the TermNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */ /** Arguments for filtering the RootQueryToTermNodeConnection connection */ /** Connection between the RootQuery type and the Theme type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToThemeConnection&quot; */ /** Connection between the RootQuery type and the User type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToUserConnection&quot; */ /** Arguments for filtering the RootQueryToUserConnection connection */ /** Connection between the RootQuery type and the userReactionPost type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToUserReactionPostConnection&quot; */ /** Arguments for filtering the RootQueryToUserReactionPostConnection connection */ /** Connection between the RootQuery type and the UserRole type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */ /** Input for the sendPasswordResetEmail mutation. */ /** The payload for the sendPasswordResetEmail mutation. */ /** All of the registered settings */ /** The tag type */ /** The tag type */ /** The tag type */ /** The tag type */ /** The tag type */ /** Connection to tag Nodes */ /** Edge between a Node and a connected tag */ /** Page Info on the connected TagConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let TagIdType=/*#__PURE__*/function(TagIdType){TagIdType["DatabaseId"]="DATABASE_ID";TagIdType["Id"]="ID";TagIdType["Name"]="NAME";TagIdType["Slug"]="SLUG";TagIdType["Uri"]="URI";return TagIdType;}({});/** Connection between the Tag type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;TagToContentNodeConnection&quot; */ /** Arguments for filtering the TagToContentNodeConnection connection */ /** Connection between the Tag type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;TagToPostConnection&quot; */ /** Arguments for filtering the TagToPostConnection connection */ /** Connection between the Tag type and the Taxonomy type */ /** A taxonomy object */ /** A taxonomy object */ /** Connection to Taxonomy Nodes */ /** Edge between a Node and a connected Taxonomy */ /** Page Info on the connected TaxonomyConnectionEdge */ /** Allowed taxonomies */let TaxonomyEnum=/*#__PURE__*/function(TaxonomyEnum){TaxonomyEnum["Category"]="CATEGORY";TaxonomyEnum["Postformat"]="POSTFORMAT";TaxonomyEnum["Tag"]="TAG";return TaxonomyEnum;}({});/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */let TaxonomyIdTypeEnum=/*#__PURE__*/function(TaxonomyIdTypeEnum){TaxonomyIdTypeEnum["Id"]="ID";TaxonomyIdTypeEnum["Name"]="NAME";return TaxonomyIdTypeEnum;}({});/** Connection between the Taxonomy type and the ContentType type */ /** An edge in a connection */ /** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */ /** The template assigned to the node */ /** The template assigned to the node */ /** The template assigned to the node */ /** The template assigned to the node */ /** The template assigned to the node */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Connection to TermNode Nodes */ /** Edge between a Node and a connected TermNode */ /** Page Info on the connected TermNodeConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */let TermNodeIdTypeEnum=/*#__PURE__*/function(TermNodeIdTypeEnum){TermNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";TermNodeIdTypeEnum["Id"]="ID";TermNodeIdTypeEnum["Name"]="NAME";TermNodeIdTypeEnum["Slug"]="SLUG";TermNodeIdTypeEnum["Uri"]="URI";return TermNodeIdTypeEnum;}({});/** Connection between the TermNode type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */ /** Connection between the TermNode type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */ /** Options for ordering the connection by */let TermObjectsConnectionOrderbyEnum=/*#__PURE__*/function(TermObjectsConnectionOrderbyEnum){TermObjectsConnectionOrderbyEnum["Count"]="COUNT";TermObjectsConnectionOrderbyEnum["Description"]="DESCRIPTION";TermObjectsConnectionOrderbyEnum["Name"]="NAME";TermObjectsConnectionOrderbyEnum["Slug"]="SLUG";TermObjectsConnectionOrderbyEnum["TermGroup"]="TERM_GROUP";TermObjectsConnectionOrderbyEnum["TermId"]="TERM_ID";TermObjectsConnectionOrderbyEnum["TermOrder"]="TERM_ORDER";return TermObjectsConnectionOrderbyEnum;}({});/** A theme object */ /** Connection to Theme Nodes */ /** Edge between a Node and a connected Theme */ /** Page Info on the connected ThemeConnectionEdge */ /** Any node that has a URI */ /** Input for the updateCategory mutation. */ /** The payload for the updateCategory mutation. */ /** Input for the updateComment mutation. */ /** The payload for the updateComment mutation. */ /** Input for the updateMediaItem mutation. */ /** The payload for the updateMediaItem mutation. */ /** Input for the updatePage mutation. */ /** The payload for the updatePage mutation. */ /** Input for the updatePostFormat mutation. */ /** The payload for the updatePostFormat mutation. */ /** Input for the updatePost mutation. */ /** The payload for the updatePost mutation. */ /** Input for the updateSettings mutation. */ /** The payload for the updateSettings mutation. */ /** Input for the updateTag mutation. */ /** The payload for the updateTag mutation. */ /** Input for the updateUser mutation. */ /** The payload for the updateUser mutation. */ /** Input for the updateUserReactionPost mutation. */ /** The payload for the updateUserReactionPost mutation. */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** Connection to User Nodes */ /** Edge between a Node and a connected User */ /** Page Info on the connected UserConnectionEdge */ /** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */let UserNodeIdTypeEnum=/*#__PURE__*/function(UserNodeIdTypeEnum){UserNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";UserNodeIdTypeEnum["Email"]="EMAIL";UserNodeIdTypeEnum["Id"]="ID";UserNodeIdTypeEnum["Slug"]="SLUG";UserNodeIdTypeEnum["Uri"]="URI";UserNodeIdTypeEnum["Username"]="USERNAME";return UserNodeIdTypeEnum;}({});/** The userReactionPost type */ /** The userReactionPost type */ /** The userReactionPost type */ /** The userReactionPost type */ /** Connection to userReactionPost Nodes */ /** Edge between a Node and a connected userReactionPost */ /** Page Info on the connected UserReactionPostConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let UserReactionPostIdType=/*#__PURE__*/function(UserReactionPostIdType){UserReactionPostIdType["DatabaseId"]="DATABASE_ID";UserReactionPostIdType["Id"]="ID";UserReactionPostIdType["Slug"]="SLUG";UserReactionPostIdType["Uri"]="URI";return UserReactionPostIdType;}({});/** Connection between the UserReactionPost type and the userReactionPost type */ /** A user role object */ /** Connection to UserRole Nodes */ /** Edge between a Node and a connected UserRole */ /** Page Info on the connected UserRoleConnectionEdge */ /** Names of available user roles */let UserRoleEnum=/*#__PURE__*/function(UserRoleEnum){UserRoleEnum["Administrator"]="ADMINISTRATOR";UserRoleEnum["Author"]="AUTHOR";UserRoleEnum["Contributor"]="CONTRIBUTOR";UserRoleEnum["Editor"]="EDITOR";UserRoleEnum["Subscriber"]="SUBSCRIBER";return UserRoleEnum;}({});/** Connection between the User type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;UserToCommentConnection&quot; */ /** Arguments for filtering the UserToCommentConnection connection */ /** Connection between the User type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */ /** Connection between the User type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */ /** Connection between the User type and the mediaItem type */ /** An edge in a connection */ /** Page Info on the &quot;UserToMediaItemConnection&quot; */ /** Arguments for filtering the UserToMediaItemConnection connection */ /** Connection between the User type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;UserToPageConnection&quot; */ /** Arguments for filtering the UserToPageConnection connection */ /** Connection between the User type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;UserToPostConnection&quot; */ /** Arguments for filtering the UserToPostConnection connection */ /** Connection between the User type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;UserToRevisionsConnection&quot; */ /** Arguments for filtering the UserToRevisionsConnection connection */ /** Connection between the User type and the userReactionPost type */ /** An edge in a connection */ /** Page Info on the &quot;UserToUserReactionPostConnection&quot; */ /** Arguments for filtering the UserToUserReactionPostConnection connection */ /** Connection between the User type and the UserRole type */ /** An edge in a connection */ /** Page Info on the &quot;UserToUserRoleConnection&quot; */ /** Field to order the connection by */let UsersConnectionOrderbyEnum=/*#__PURE__*/function(UsersConnectionOrderbyEnum){UsersConnectionOrderbyEnum["DisplayName"]="DISPLAY_NAME";UsersConnectionOrderbyEnum["Email"]="EMAIL";UsersConnectionOrderbyEnum["Login"]="LOGIN";UsersConnectionOrderbyEnum["LoginIn"]="LOGIN_IN";UsersConnectionOrderbyEnum["NiceName"]="NICE_NAME";UsersConnectionOrderbyEnum["NiceNameIn"]="NICE_NAME_IN";UsersConnectionOrderbyEnum["Registered"]="REGISTERED";UsersConnectionOrderbyEnum["Url"]="URL";return UsersConnectionOrderbyEnum;}({});/** Options for ordering the connection */ /** Column used for searching for users. */let UsersConnectionSearchColumnEnum=/*#__PURE__*/function(UsersConnectionSearchColumnEnum){UsersConnectionSearchColumnEnum["Email"]="EMAIL";UsersConnectionSearchColumnEnum["Id"]="ID";UsersConnectionSearchColumnEnum["Login"]="LOGIN";UsersConnectionSearchColumnEnum["Nicename"]="NICENAME";UsersConnectionSearchColumnEnum["Url"]="URL";return UsersConnectionSearchColumnEnum;}({});/** Information about pagination in a connection. */ /** Provides access to fields of the &quot;NcPostMetaData&quot; ACF Field Group via the &quot;ncPostMetaData&quot; field */ /** Provides access to fields of the &quot;NcTaxonomyMeta&quot; ACF Field Group via the &quot;ncTaxonomyMeta&quot; field */ /** Provides access to fields of the &quot;NcUserMeta&quot; ACF Field Group via the &quot;ncUserMeta&quot; field */ /** Provides access to fields of the &quot;NcmazAudioUrl&quot; ACF Field Group via the &quot;ncmazAudioUrl&quot; field */ /** Provides access to fields of the &quot;NcmazGalleryImgs&quot; ACF Field Group via the &quot;ncmazGalleryImgs&quot; field */ /** Provides access to fields of the &quot;NcmazMenuCustomFields&quot; ACF Field Group via the &quot;ncmazMenuCustomFields&quot; field */ /** Provides access to fields of the &quot;NcmazVideoUrl&quot; ACF Field Group via the &quot;ncmazVideoUrl&quot; field */ /** The writing setting type */const NcmazFcImageFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}}]};const NcmazFcTermCardFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTermCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TermNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}}]};const NcmazFcTermsCardFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTermsCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RootQueryToTermNodeConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcTermCardFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTermCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TermNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}}]}}]};const NcmazFcPostMetaFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"savedsCount"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"template"}}]}}]};const NcmazFcPostCardFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"isSticky"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazGalleryImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image6"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image7"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image8"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"savedsCount"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"template"}}]}}]};const NcmazFcPostsEdegsFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostsEdegsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RootQueryToPostConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostCardFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NcPostMetaData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"savedsCount"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"template"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"isSticky"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazGalleryImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image6"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image7"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image8"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}}]};

/***/ }),

/***/ "./src/__generated__/index.ts":
/*!************************************!*\
  !*** ./src/__generated__/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   graphql: () => (/* reexport safe */ _gql__WEBPACK_IMPORTED_MODULE_1__.graphql),
/* harmony export */   isFragmentReady: () => (/* reexport safe */ _fragment_masking__WEBPACK_IMPORTED_MODULE_0__.isFragmentReady),
/* harmony export */   makeFragmentData: () => (/* reexport safe */ _fragment_masking__WEBPACK_IMPORTED_MODULE_0__.makeFragmentData),
/* harmony export */   useFragment: () => (/* reexport safe */ _fragment_masking__WEBPACK_IMPORTED_MODULE_0__.useFragment)
/* harmony export */ });
/* harmony import */ var _fragment_masking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-masking */ "./src/__generated__/fragment-masking.ts");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gql */ "./src/__generated__/gql.ts");



/***/ }),

/***/ "./src/block-magazine/DemoListPosts.tsx":
/*!**********************************************!*\
  !*** ./src/block-magazine/DemoListPosts.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getPostDataFromPostFragment */ "./src/utils/getPostDataFromPostFragment.ts");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/formatDate */ "./src/utils/formatDate.ts");




const DemoListPosts = ({
  posts
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "no-prose mt-12 space-y-12 lg:mt-12 lg:space-y-12"
  }, posts.map(post => {
    const {
      id,
      title,
      link,
      date,
      categories,
      excerpt,
      author,
      postFormats,
      featuredImage,
      ncPostMetaData,
      databaseId,
      __typename,
      isSticky,
      commentCount,
      dateGmt
    } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_2__.getPostDataFromPostFragment)(post.node);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      key: id,
      className: "relative isolate flex flex-col gap-8 lg:flex-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
    }, featuredImage?.sourceUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: featuredImage?.sourceUrl || "",
      alt: "",
      className: "absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center gap-x-4 text-xs"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-gray-500"
    }, ncPostMetaData?.likesCount || 0, " likes \u2022", " ", ncPostMetaData?.viewsCount || 0, " views \u2022", " ", ncPostMetaData?.readingTime || 1, " min read"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, categories && categories.edges.length > 0 && categories.edges.map(category => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: category.node.link || "",
        className: "relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
      }, category.node.name);
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group relative max-w-xl"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "absolute inset-0"
    }), title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      dangerouslySetInnerHTML: {
        __html: excerpt || ""
      },
      className: "mt-5 text-sm leading-6 text-gray-600"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-6 flex border-t border-gray-900/5 pt-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative flex items-center gap-x-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: author?.node.avatar?.url || "",
      alt: "",
      className: "h-10 w-10 rounded-full bg-gray-50"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-sm leading-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "font-semibold text-gray-900"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: author?.node.url || ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "absolute inset-0"
    }), author?.node.name || "")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-gray-600"
    }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_3__["default"])(date || "")))))));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoListPosts);

/***/ }),

/***/ "./src/block-magazine/attributes.ts":
/*!******************************************!*\
  !*** ./src/block-magazine/attributes.ts ***!
  \******************************************/
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

  // khi tuy chinh o day cung can thay doi trong file render_callback.php of block magazine
  queries: {
    type: "object"
    // default: PostsQueriesControls_DEMO_DATA,
  },

  //
  blockVariation: {
    type: "string"
    // default: "style-1",
  },

  showFilterTab: {
    type: "boolean"
    // default: false,
  },

  viewMoreHref: {
    type: "string"
    // default: "",
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blokcAttrs);

/***/ }),

/***/ "./src/block-magazine/deprecated.ts":
/*!******************************************!*\
  !*** ./src/block-magazine/deprecated.ts ***!
  \******************************************/
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

/***/ "./src/block-magazine/edit.tsx":
/*!*************************************!*\
  !*** ./src/block-magazine/edit.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_posts_queries_controls_PostsQueriesControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/posts-queries-controls/PostsQueriesControls */ "./src/components/posts-queries-controls/PostsQueriesControls.tsx");
/* harmony import */ var _query_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query-toolbar */ "./src/block-magazine/query-toolbar.tsx");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_BlockLoadingPlaceholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BlockLoadingPlaceholder */ "./src/components/BlockLoadingPlaceholder.tsx");
/* harmony import */ var _DemoListPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DemoListPosts */ "./src/block-magazine/DemoListPosts.tsx");










const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;

  //
  const {
    uniqueId,
    showFilterTab,
    viewMoreHref,
    blockVariation,
    queries
  } = attributes;

  // ---- SAVE uniqueId ----
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      uniqueId: clientId
    });
  }, []);
  const getPostsDataFromSeverSideRenderNode = () => {
    const node = document.querySelector(`#block-${clientId} .ncmazfc-block-magazine__content`);
    const dataInitPosts = node?.getAttribute("data-ncmazfc-init-posts") || "null";
    const dataInitErrors = node?.getAttribute("data-ncmazfc-init-errors") || "null";

    // console.log(1, {
    // 	node,
    // 	uniqueId,
    // 	a: `#block-${clientId} .ncmazfc-block-magazine__content`,
    // 	dataInitPosts,
    // 	dataInitErrors,
    // });
    return {
      initPosts: JSON.parse(dataInitPosts),
      initErrors: JSON.parse(dataInitErrors)
    };
  };
  const data = getPostsDataFromSeverSideRenderNode();
  const renderLayoutType = () => {
    if (!data?.initPosts?.length) {
      return null;
    }
    const dataLists = data?.initPosts;
    // console.log(11, { dataLists });

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DemoListPosts__WEBPACK_IMPORTED_MODULE_9__["default"], {
      posts: dataLists
    });
  };
  const renderContent = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `ncmazfc-block-magazine relative `
    }, renderLayoutType(), !!data?.initErrors && !data?.initPosts && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Error!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, JSON.stringify(data?.initErrors, null, 2)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_7___default()), {
      block: "ncmaz-faust/block-magazine",
      attributes: attributes,
      httpMethod: "POST",
      LoadingResponsePlaceholder: _components_BlockLoadingPlaceholder__WEBPACK_IMPORTED_MODULE_8__["default"]
    }));
  };
  //
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select block's variation", "ncmazfc"),
    value: blockVariation,
    onChange: blockVariation => setAttributes({
      blockVariation
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select a layout for the block. For preview of each layout, please visit the preview page.", "ncmazfc")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
    label: "Magazine"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-1"
  }, "Magazine 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-2"
  }, "Magazine 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-3"
  }, "Magazine 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-4"
  }, "Magazine 4"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-5"
  }, "Magazine 5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-6"
  }, "Magazine 6"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-7"
  }, "Magazine 7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-8"
  }, "Magazine 8"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-9"
  }, "Magazine 9"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "magazine-10"
  }, "Magazine 10")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
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
  }, "Grid 5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-6"
  }, "Grid 6"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-7"
  }, "Grid 7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-8"
  }, "Grid 8"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-9"
  }, "Grid 9"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "grid-10"
  }, "Grid 10")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
    label: "List"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-1"
  }, "List 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-2"
  }, "List 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-3"
  }, "List 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-4"
  }, "List 4"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-5"
  }, "List 5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-6"
  }, "List 6"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-7"
  }, "List 7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-8"
  }, "List 8"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-9"
  }, "List 9"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "list-10"
  }, "List 10"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("View more href", "ncmazfc"),
    value: viewMoreHref || "",
    type: "url",
    onChange: viewMoreHref => setAttributes({
      viewMoreHref
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_posts_queries_controls_PostsQueriesControls__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: queries,
    setQuery: query => {
      setAttributes({
        queries: {
          ...queries,
          ...query
        }
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, {
    group: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_query_toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    query: queries,
    setQuery: query => {
      setAttributes({
        queries: {
          ...queries,
          ...query
        }
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)()
  }, renderContent()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/block-magazine/index.js":
/*!*************************************!*\
  !*** ./src/block-magazine/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-magazine/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-magazine/edit.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block-magazine/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated */ "./src/block-magazine/deprecated.ts");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/block-magazine/attributes.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");




/**
 * Internal dependencies
 */





// for tailwind, only import the styles in this file


//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => null,
  // attributes,
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_5__["default"],
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

/***/ "./src/block-magazine/query-toolbar.tsx":
/*!**********************************************!*\
  !*** ./src/block-magazine/query-toolbar.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const QueryToolbar = ({
  query,
  setQuery
}) => {
  const maxPageInputId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useInstanceId)(QueryToolbar, "blocks-query-pagination-max-page-input");
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    contentClassName: "block-library-query-toolbar__popover",
    renderToggle: ({
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Display settings"),
      onClick: onToggle
    }),
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      __unstableInputWidth: "60px",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Items per Page"),
      labelPosition: "edge",
      min: 1,
      max: 100,
      onChange: val => {
        let value = Number(val);
        if (isNaN(value) || value < 1 || value > 100) {
          return;
        }
        setQuery({
          perPage: value
        });
      },
      step: "1",
      value: String(query.perPage),
      isDragEnabled: false
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      __unstableInputWidth: "60px",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Offset"),
      labelPosition: "edge",
      min: 0,
      max: 100,
      onChange: val => {
        let value = Number(val);
        if (isNaN(value) || value < 0 || value > 100) {
          return;
        }
        setQuery({
          offset: value
        });
      },
      step: "1",
      value: query.offset,
      isDragEnabled: false
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
      id: maxPageInputId,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Limit the pages you want to show, even if the query has more results. To show all pages use 0 (zero).")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      id: maxPageInputId,
      __unstableInputWidth: "60px",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Max page to show"),
      labelPosition: "edge",
      min: 0,
      onChange: val => {
        let value = Number(val);
        if (isNaN(value) || value < 0) {
          return;
        }
        setQuery({
          pages: value
        });
      },
      step: "1",
      value: query.pages,
      isDragEnabled: false
    })))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryToolbar);

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
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
  scale: 1.2,
  fontSize: 22
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockLoadingPlaceholder);

/***/ }),

/***/ "./src/components/posts-queries-controls/PostsQueriesControls.tsx":
/*!************************************************************************!*\
  !*** ./src/components/posts-queries-controls/PostsQueriesControls.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostsQueriesControls_DEMO_DATA: () => (/* binding */ PostsQueriesControls_DEMO_DATA),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _order_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-control */ "./src/components/posts-queries-controls/order-control.tsx");
/* harmony import */ var _author_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./author-control */ "./src/components/posts-queries-controls/author-control.tsx");
/* harmony import */ var _parent_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parent-control */ "./src/components/posts-queries-controls/parent-control.tsx");
/* harmony import */ var _taxonomy_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taxonomy-controls */ "./src/components/posts-queries-controls/taxonomy-controls.tsx");
/* harmony import */ var _sticky_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sticky-control */ "./src/components/posts-queries-controls/sticky-control.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./src/components/posts-queries-controls/utils.ts");

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */






const PostsQueriesControls_DEMO_DATA = {
  pages: 0,
  perPage: null,
  offset: 0,
  postType: "post",
  order: "DESC",
  orderBy: "DATE",
  author: "",
  search: "",
  exclude: [],
  sticky: "",
  inherit: true,
  taxQuery: null,
  parents: []
};
const PostsQueriesControls = ({
  attributes,
  setQuery
}) => {
  // const { query, displayLayout } = attributes;
  const query = attributes;
  const {
    order,
    orderBy,
    author: authorIds,
    postType,
    sticky,
    inherit,
    taxQuery,
    parents
  } = query;
  // const allowedControls = useAllowedControls({ query: attributes });
  const [showSticky, setShowSticky] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(postType === "post");
  const {
    postTypesTaxonomiesMap,
    postTypesSelectOptions
  } = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.usePostTypes)();
  const taxonomies = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.useTaxonomies)(postType);
  const isPostTypeHierarchical = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.useIsPostTypeHierarchical)(postType);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setShowSticky(postType === "post");
  }, [postType]);
  const onPostTypeChange = newValue => {
    const updateQuery = {
      postType: newValue
    };
    // We need to dynamically update the `taxQuery` property,
    // by removing any not supported taxonomy from the query.
    const supportedTaxonomies = postTypesTaxonomiesMap[newValue];
    const updatedTaxQuery = Object.entries(taxQuery || {}).reduce((accumulator, [taxonomySlug, terms]) => {
      if (supportedTaxonomies.includes(taxonomySlug)) {
        accumulator[taxonomySlug] = terms;
      }
      return accumulator;
    }, {});
    updateQuery.taxQuery = !!Object.keys(updatedTaxQuery).length ? updatedTaxQuery : undefined;
    if (newValue !== "post") {
      updateQuery.sticky = "";
    }
    // We need to reset `parents` because they are tied to each post type.
    updateQuery.parents = [];
    setQuery({
      ...query,
      ...updateQuery
    });
  };
  const [querySearch, setQuerySearch] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(query.search);
  const onChangeDebounced = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.debounce)(() => {
    if (query.search !== querySearch) {
      setQuery({
        search: querySearch
      });
    }
  }, 250), [querySearch, query.search]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    onChangeDebounced();
    return onChangeDebounced.cancel;
  }, [querySearch, onChangeDebounced]);
  const showInheritControl = false;
  const showPostTypeControl = false;
  const showOrderControl = true;
  const showStickyControl = true;
  const showSettingsPanel = showInheritControl || showPostTypeControl || showOrderControl || showStickyControl;
  const showTaxControl = !!taxonomies?.length;
  const showAuthorControl = true;
  const showSearchControl = true;
  const showParentControl = isPostTypeHierarchical;
  const showFiltersPanel = showTaxControl || showAuthorControl || showSearchControl || showParentControl;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Settings")
  }, showInheritControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Inherit query from template"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Toggle to use the global query context that is set with the current template, such as an archive or search. Disable to customize the settings independently."),
    checked: !!inherit,
    onChange: value => setQuery({
      inherit: !!value
    })
  }), showPostTypeControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    __nextHasNoMarginBottom: true,
    options: postTypesSelectOptions,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Post type"),
    onChange: onPostTypeChange,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("WordPress contains different types of content and they are divided into collections called “Post types”. By default there are a few different ones such as blog posts and pages, but plugins could add more.")
  }), showOrderControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_order_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    order,
    orderBy,
    onChange: setQuery
  }), showStickyControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sticky_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: sticky,
    onChange: value => setQuery({
      sticky: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanel, {
    className: "block-library-query-toolspanel__filters",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Filters"),
    resetAll: () => {
      setQuery({
        author: "",
        parents: [],
        search: "",
        taxQuery: null
      });
      setQuerySearch("");
    }
  }, showTaxControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Taxonomies"),
    hasValue: () => Object.values(taxQuery || {}).some(terms => !!terms.length),
    onDeselect: () => setQuery({
      taxQuery: null
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_taxonomy_controls__WEBPACK_IMPORTED_MODULE_9__.TaxonomyControls, {
    onChange: setQuery,
    query: query
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xs block mt-1 text-slate-500"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Currently, NcmazFaust only supports filtering data for Category and Tag. If you want support for custom taxonomy, please contact support."))), showAuthorControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
    hasValue: () => !!authorIds,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Authors"),
    onDeselect: () => setQuery({
      author: ""
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_author_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: authorIds,
    onChange: setQuery
  })), showSearchControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
    hasValue: () => !!querySearch,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Keyword"),
    onDeselect: () => setQuerySearch("")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Keyword"),
    value: querySearch,
    onChange: setQuerySearch
  })), showParentControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
    hasValue: () => !!parents?.length,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Parents"),
    onDeselect: () => setQuery({
      parents: []
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_parent_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    parents: parents,
    postType: postType,
    onChange: setQuery
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsQueriesControls);

/***/ }),

/***/ "./src/components/posts-queries-controls/author-control.tsx":
/*!******************************************************************!*\
  !*** ./src/components/posts-queries-controls/author-control.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/components/posts-queries-controls/utils.ts");

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */

const AUTHORS_QUERY = {
  who: "authors",
  per_page: -1,
  _fields: "id,name",
  context: "view"
};
function AuthorControl({
  value,
  onChange
}) {
  const authorsList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getUsers
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    return getUsers(AUTHORS_QUERY);
  }, []);
  if (!authorsList) {
    return null;
  }
  const authorsInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getEntitiesInfo)(authorsList);
  /**
   * We need to normalize the value because the block operates on a
   * comma(`,`) separated string value and `FormTokenFiels` needs an
   * array.
   */
  const normalizedValue = !value ? [] : value.toString().split(",");
  // Returns only the existing authors ids. This prevents the component
  // from crashing in the editor, when non existing ids are provided.
  const sanitizedValue = normalizedValue.reduce((accumulator, authorId) => {
    const author = authorsInfo.mapById[authorId];
    if (author) {
      accumulator.push({
        id: authorId,
        value: author.name
      });
    }
    return accumulator;
  }, []);
  const getIdByValue = (entitiesMappedByName, authorValue) => {
    const id = authorValue?.id || entitiesMappedByName[authorValue]?.id;
    if (id) return id;
  };
  const onAuthorChange = newValue => {
    const ids = Array.from(newValue.reduce((accumulator, author) => {
      // Verify that new values point to existing entities.
      const id = getIdByValue(authorsInfo.mapByName, author);
      if (id) accumulator.add(id);
      return accumulator;
    }, new Set()));
    onChange({
      author: ids.join(",")
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Authors"),
    value: sanitizedValue,
    suggestions: authorsInfo.names,
    onChange: onAuthorChange,
    __experimentalShowHowTo: false
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorControl);

/***/ }),

/***/ "./src/components/posts-queries-controls/order-control.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/posts-queries-controls/order-control.tsx ***!
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * WordPress dependencies
 */



const orderOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Newest to oldest"),
  value: "DATE/DESC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Oldest to newest"),
  value: "DATE/ASC"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("A → Z"),
  value: "TITLE/ASC"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Z → A"),
  value: "TITLE/DESC"
}, {
  /* translators: label for ordering posts by title in ascending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Comment count / asc"),
  value: "COMMENT_COUNT/ASC"
}, {
  /* translators: label for ordering posts by title in descending order */
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Comment count / desc"),
  value: "COMMENT_COUNT/DESC"
}];
function OrderControl({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderControl);

/***/ }),

/***/ "./src/components/posts-queries-controls/parent-control.tsx":
/*!******************************************************************!*\
  !*** ./src/components/posts-queries-controls/parent-control.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/components/posts-queries-controls/utils.ts");

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */

const EMPTY_ARRAY = [];
const BASE_QUERY = {
  order: "asc",
  _fields: "id,title",
  context: "view"
};
function ParentControl({
  parents,
  postType,
  onChange
}) {
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(EMPTY_ARRAY);
  const [suggestions, setSuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(EMPTY_ARRAY);
  const debouncedSearch = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useDebounce)(setSearch, 250);
  const {
    searchResults,
    searchHasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    if (!search) {
      return {
        searchResults: EMPTY_ARRAY,
        searchHasResolved: true
      };
    }
    const {
      getEntityRecords,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    const selectorArgs = ["postType", postType, {
      ...BASE_QUERY,
      search,
      orderby: "relevance",
      exclude: parents,
      per_page: 20
    }];
    return {
      searchResults: getEntityRecords(...selectorArgs),
      searchHasResolved: hasFinishedResolution("getEntityRecords", selectorArgs)
    };
  }, [search, parents]);
  const currentParents = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    if (!parents?.length) return EMPTY_ARRAY;
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    return getEntityRecords("postType", postType, {
      ...BASE_QUERY,
      include: parents,
      per_page: parents.length
    });
  }, [parents]);
  // Update the `value` state only after the selectors are resolved
  // to avoid emptying the input when we're changing parents.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!parents?.length) {
      setValue(EMPTY_ARRAY);
    }
    if (!currentParents?.length) return;
    const currentParentsInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getEntitiesInfo)((0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToIHasNameAndId)(currentParents, "title.rendered"));
    // Returns only the existing entity ids. This prevents the component
    // from crashing in the editor, when non existing ids are provided.
    const sanitizedValue = parents.reduce((accumulator, id) => {
      const entity = currentParentsInfo.mapById[id];
      if (entity) {
        accumulator.push({
          id,
          value: entity.name
        });
      }
      return accumulator;
    }, []);
    setValue(sanitizedValue);
  }, [parents, currentParents]);
  const entitiesInfo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!searchResults?.length) return EMPTY_ARRAY;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getEntitiesInfo)((0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToIHasNameAndId)(searchResults, "title.rendered"));
  }, [searchResults]);
  // Update suggestions only when the query has resolved.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!searchHasResolved) return;
    setSuggestions(entitiesInfo.names);
  }, [entitiesInfo.names, searchHasResolved]);
  const getIdByValue = (entitiesMappedByName, entity) => {
    const id = entity?.id || entitiesMappedByName?.[entity]?.id;
    if (id) return id;
  };
  const onParentChange = newValue => {
    const ids = Array.from(newValue.reduce((accumulator, entity) => {
      // Verify that new values point to existing entities.
      const id = getIdByValue(entitiesInfo.mapByName, entity);
      if (id) accumulator.add(id);
      return accumulator;
    }, new Set()));
    setSuggestions(EMPTY_ARRAY);
    onChange({
      parents: ids
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Parents"),
    value: value,
    onInputChange: debouncedSearch,
    suggestions: suggestions,
    onChange: onParentChange,
    __experimentalShowHowTo: false
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParentControl);

/***/ }),

/***/ "./src/components/posts-queries-controls/sticky-control.tsx":
/*!******************************************************************!*\
  !*** ./src/components/posts-queries-controls/sticky-control.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyControl)
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



const stickyOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Include"),
  value: ""
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Exclude"),
  value: "exclude"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Only"),
  value: "only"
}];
function StickyControl({
  value,
  onChange
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Sticky posts"),
    options: stickyOptions,
    value: value,
    onChange: onChange,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Blog posts can be “stickied”, a feature that places them at the top of the front page of posts, keeping it there until new sticky posts are published.")
  });
}

/***/ }),

/***/ "./src/components/posts-queries-controls/taxonomy-controls.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/posts-queries-controls/taxonomy-controls.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaxonomyControls: () => (/* binding */ TaxonomyControls)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/components/posts-queries-controls/utils.ts");

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */

const EMPTY_ARRAY = [];
const BASE_QUERY = {
  order: "asc",
  _fields: "id,name",
  context: "view"
};

// Helper function to get the term id based on user input in terms `FormTokenField`.
const getTermIdByTermValue = (terms, termValue) => {
  // First we check for exact match by `term.id` or case sensitive `term.name` match.
  const termId = termValue?.id || terms?.find(term => term.name === termValue)?.id;
  if (termId) {
    return termId;
  }

  /**
   * Here we make an extra check for entered terms in a non case sensitive way,
   * to match user expectations, due to `FormTokenField` behaviour that shows
   * suggestions which are case insensitive.
   *
   * Although WP tries to discourage users to add terms with the same name (case insensitive),
   * it's still possible if you manually change the name, as long as the terms have different slugs.
   * In this edge case we always apply the first match from the terms list.
   */
  const termValueLower = termValue.toLocaleLowerCase();
  return terms?.find(term => term.name.toLocaleLowerCase() === termValueLower)?.id;
};
function TaxonomyControls({
  onChange,
  query
}) {
  const {
    postType,
    taxQuery
  } = query;
  const taxonomies = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.useTaxonomies)(postType);
  if (!taxonomies || taxonomies.length === 0) {
    return null;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, taxonomies.map(taxonomy => {
    const termIds = taxQuery?.[taxonomy.slug] || [];
    const handleChange = newTermIds => onChange({
      taxQuery: {
        ...taxQuery,
        [taxonomy.slug]: newTermIds
      }
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TaxonomyItem, {
      key: taxonomy.slug,
      taxonomy: taxonomy,
      termIds: termIds,
      onChange: handleChange
    });
  }));
}

/**
 * Renders a `FormTokenField` for a given taxonomy.
 *
 * @param {Object}   props          The props for the component.
 * @param {Object}   props.taxonomy The taxonomy object.
 * @param {number[]} props.termIds  An array with the block's term ids for the given taxonomy.
 * @param {Function} props.onChange Callback `onChange` function.
 * @return {JSX.Element} The rendered component.
 */
function TaxonomyItem({
  taxonomy,
  termIds,
  onChange
}) {
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(EMPTY_ARRAY);
  const [suggestions, setSuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(EMPTY_ARRAY);
  const debouncedSearch = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(setSearch, 250);
  const {
    searchResults,
    searchHasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    if (!search) {
      return {
        searchResults: EMPTY_ARRAY,
        searchHasResolved: true
      };
    }
    const {
      getEntityRecords,
      hasFinishedResolution
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    const selectorArgs = ["taxonomy", taxonomy.slug, {
      ...BASE_QUERY,
      search,
      orderby: "name",
      exclude: termIds,
      per_page: 20
    }];
    return {
      searchResults: getEntityRecords(...selectorArgs),
      searchHasResolved: hasFinishedResolution("getEntityRecords", selectorArgs)
    };
  }, [search, termIds]);
  // `existingTerms` are the ones fetched from the API and their type is `{ id: number; name: string }`.
  // They are used to extract the terms' names to populate the `FormTokenField` properly
  // and to sanitize the provided `termIds`, by setting only the ones that exist.
  const existingTerms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    if (!termIds?.length) return EMPTY_ARRAY;
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    return getEntityRecords("taxonomy", taxonomy.slug, {
      ...BASE_QUERY,
      include: termIds,
      per_page: termIds.length
    });
  }, [termIds]);
  // Update the `value` state only after the selectors are resolved
  // to avoid emptying the input when we're changing terms.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!termIds?.length) {
      setValue(EMPTY_ARRAY);
    }
    if (!existingTerms?.length) return;
    // Returns only the existing entity ids. This prevents the component
    // from crashing in the editor, when non existing ids are provided.
    const sanitizedValue = termIds.reduce((accumulator, id) => {
      const entity = existingTerms.find(term => term.id === id);
      if (entity) {
        accumulator.push({
          id,
          value: entity.name
        });
      }
      return accumulator;
    }, []);
    setValue(sanitizedValue);
  }, [termIds, existingTerms]);
  // Update suggestions only when the query has resolved.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!searchHasResolved) return;
    setSuggestions(searchResults.map(result => result.name));
  }, [searchResults, searchHasResolved]);
  const onTermsChange = newTermValues => {
    const newTermIds = new Set();
    for (const termValue of newTermValues) {
      const termId = getTermIdByTermValue(searchResults, termValue);
      if (termId) {
        newTermIds.add(termId);
      }
    }
    setSuggestions(EMPTY_ARRAY);
    onChange(Array.from(newTermIds));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-library-query-inspector__taxonomy-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
    label: taxonomy.name,
    value: value,
    onInputChange: debouncedSearch,
    suggestions: suggestions,
    onChange: onTermsChange,
    __experimentalShowHowTo: false
  }));
}

/***/ }),

/***/ "./src/components/posts-queries-controls/utils.ts":
/*!********************************************************!*\
  !*** ./src/components/posts-queries-controls/utils.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEntitiesInfo: () => (/* binding */ getEntitiesInfo),
/* harmony export */   getValueFromObjectPath: () => (/* binding */ getValueFromObjectPath),
/* harmony export */   mapToIHasNameAndId: () => (/* binding */ mapToIHasNameAndId),
/* harmony export */   useIsPostTypeHierarchical: () => (/* binding */ useIsPostTypeHierarchical),
/* harmony export */   usePostTypes: () => (/* binding */ usePostTypes),
/* harmony export */   useTaxonomies: () => (/* binding */ useTaxonomies)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




// import { store as blockEditorStore } from "@wordpress/block-editor";
// import { cloneBlock, store as blocksStore } from "@wordpress/blocks";

/**
 * The object used in Query block that contains info and helper mappings
 * from an array of IHasNameAndId objects.
 *
 * @typedef {Object} QueryEntitiesInfo
 * @property {IHasNameAndId[]}               entities  The array of entities.
 * @property {Object<string, IHasNameAndId>} mapById   Object mapping with the id as key and the entity as value.
 * @property {Object<string, IHasNameAndId>} mapByName Object mapping with the name as key and the entity as value.
 * @property {string[]}                      names     Array with the entities' names.
 */

/**
 * Returns a helper object with mapping from Objects that implement
 * the `IHasNameAndId` interface. The returned object is used for
 * integration with `FormTokenField` component.
 *
 * @param {IHasNameAndId[]} entities The entities to extract of helper object.
 * @return {QueryEntitiesInfo} The object with the entities information.
 */
const getEntitiesInfo = entities => {
  const mapping = entities?.reduce((accumulator, entity) => {
    const {
      mapById,
      mapByName,
      names
    } = accumulator;
    mapById[entity.id] = entity;
    mapByName[entity.name] = entity;
    names.push(entity.name);
    return accumulator;
  }, {
    mapById: {},
    mapByName: {},
    names: []
  });
  return {
    entities,
    ...mapping
  };
};

/**
 * Helper util to return a value from a certain path of the object.
 * Path is specified as a string of properties, separated by dots,
 * for example: "parent.child".
 *
 * @param {Object} object Input object.
 * @param {string} path   Path to the object property.
 * @return {*} Value of the object property at the specified path.
 */
const getValueFromObjectPath = (object, path) => {
  const normalizedPath = path.split(".");
  let value = object;
  normalizedPath.forEach(fieldName => {
    value = value?.[fieldName];
  });
  return value;
};

/**
 * Helper util to map records to add a `name` prop from a
 * provided path, in order to handle all entities in the same
 * fashion(implementing`IHasNameAndId` interface).
 *
 * @param {Object[]} entities The array of entities.
 * @param {string}   path     The path to map a `name` property from the entity.
 * @return {IHasNameAndId[]} An array of enitities that now implement the `IHasNameAndId` interface.
 */
const mapToIHasNameAndId = (entities, path) => {
  return (entities || []).map(entity => ({
    ...entity,
    name: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(getValueFromObjectPath(entity, path))
  }));
};

/**
 * Returns a helper object that contains:
 * 1. An `options` object from the available post types, to be passed to a `SelectControl`.
 * 2. A helper map with available taxonomies per post type.
 *
 * @return {Object} The helper object related to post types.
 */
const usePostTypes = () => {
  const postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getPostTypes
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const excludedPostTypes = ["attachment"];
    const filteredPostTypes = getPostTypes({
      per_page: -1
    })?.filter(({
      viewable,
      slug
    }) => viewable && !excludedPostTypes.includes(slug));
    return filteredPostTypes;
  }, []);
  const postTypesTaxonomiesMap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!postTypes?.length) return;
    return postTypes.reduce((accumulator, type) => {
      accumulator[type.slug] = type.taxonomies;
      return accumulator;
    }, {});
  }, [postTypes]);
  const postTypesSelectOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (postTypes || []).map(({
    labels,
    slug
  }) => ({
    label: labels.singular_name,
    value: slug
  })), [postTypes]);
  return {
    postTypesTaxonomiesMap,
    postTypesSelectOptions
  };
};

/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @param {string} postType The post type from which to retrieve the associated taxonomies.
 * @return {Object[]} An array of the associated taxonomies.
 */
const useTaxonomies = postType => {
  const taxonomies = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getTaxonomies
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const filteredTaxonomies = getTaxonomies({
      type: postType,
      per_page: -1,
      context: "view"
    });
    return filteredTaxonomies;
  }, [postType]);
  return taxonomies;
};

/**
 * Hook that returns whether a specific post type is hierarchical.
 *
 * @param {string} postType The post type to check.
 * @return {boolean} Whether a specific post type is hierarchical.
 */
function useIsPostTypeHierarchical(postType) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const type = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getPostType(postType);
    return type?.viewable && type?.hierarchical;
  }, [postType]);
}

//
// export function useAllowedControls(attributes) {
// 	return useSelect(
// 		(select) =>
// 			select(blocksStore).getActiveBlockVariation(queryLoopName, attributes)
// 				?.allowedControls,

// 		[attributes]
// 	);
// }
// export function isControlAllowed(allowedControls, key) {
// 	// Every controls is allowed if the list is not defined.
// 	if (!allowedControls) {
// 		return true;
// 	}
// 	return allowedControls.includes(key);
// }

/**
 * Clones a pattern's blocks and then recurses over that list of blocks,
 * transforming them to retain some `query` attribute properties.
 * For now we retain the `postType` and `inherit` properties as they are
 * fundamental for the expected functionality of the block and don't affect
 * its design and presentation.
 *
 * Returns the cloned/transformed blocks and array of existing Query Loop
 * client ids for further manipulation, in order to avoid multiple recursions.
 *
 * @param {WPBlock[]}        blocks               The list of blocks to look through and transform(mutate).
 * @param {Record<string,*>} queryBlockAttributes The existing Query Loop's attributes.
 * @return {{ newBlocks: WPBlock[], queryClientIds: string[] }} An object with the cloned/transformed blocks and all the Query Loop clients from these blocks.
 */
// export const getTransformedBlocksFromPattern = (
// 	blocks,
// 	queryBlockAttributes
// ) => {
// 	const {
// 		query: { postType, inherit },
// 	} = queryBlockAttributes;
// 	const clonedBlocks = blocks.map((block) => cloneBlock(block));
// 	const queryClientIds = [];
// 	const blocksQueue = [...clonedBlocks];
// 	while (blocksQueue.length > 0) {
// 		const block = blocksQueue.shift();
// 		if (block.name === "core/query") {
// 			block.attributes.query = {
// 				...block.attributes.query,
// 				postType,
// 				inherit,
// 			};
// 			queryClientIds.push(block.clientId);
// 		}
// 		block.innerBlocks?.forEach((innerBlock) => {
// 			blocksQueue.push(innerBlock);
// 		});
// 	}
// 	return { newBlocks: clonedBlocks, queryClientIds };
// };

/**
 * Helper hook that determines if there is an active variation of the block
 * and if there are available specific patterns for this variation.
 * If there are, these patterns are going to be the only ones suggested to
 * the user in setup and replace flow, without including the default ones
 * for Query Loop.
 *
 * If there are no such patterns, the default ones for Query Loop are going
 * to be suggested.
 *
 * @param {string} clientId   The block's client ID.
 * @param {Object} attributes The block's attributes.
 * @return {string} The block name to be used in the patterns suggestions.
 */
// export function useBlockNameForPatterns(clientId, attributes) {
// 	const activeVariationName = useSelect(
// 		(select) =>
// 			select(blocksStore).getActiveBlockVariation(queryLoopName, attributes)
// 				?.name,
// 		[attributes]
// 	);
// 	const blockName = `${queryLoopName}/${activeVariationName}`;
// 	const activeVariationPatterns = useSelect(
// 		(select) => {
// 			if (!activeVariationName) {
// 				return;
// 			}
// 			const { getBlockRootClientId, getPatternsByBlockTypes } =
// 				select(blockEditorStore);
// 			const rootClientId = getBlockRootClientId(clientId);
// 			return getPatternsByBlockTypes(blockName, rootClientId);
// 		},
// 		[clientId, activeVariationName]
// 	);
// 	return activeVariationPatterns?.length ? blockName : queryLoopName;
// }

/**
 * Helper hook that determines if there is an active variation of the block
 * and if there are available specific scoped `block` variations connected with
 * this variation.
 *
 * If there are, these variations are going to be the only ones suggested
 * to the user in setup flow when clicking to `start blank`, without including
 * the default ones for Query Loop.
 *
 * If there are no such scoped `block` variations, the default ones for Query
 * Loop are going to be suggested.
 *
 * The way we determine such variations is with the convention that they have the `namespace`
 * attribute defined as an array. This array should contain the names(`name` property) of any
 * variations they want to be connected to.
 * For example, if we have a `Query Loop` scoped `inserter` variation with the name `products`,
 * we can connect a scoped `block` variation by setting its `namespace` attribute to `['products']`.
 * If the user selects this variation, the `namespace` attribute will be overridden by the
 * main `inserter` variation.
 *
 * @param {Object} attributes The block's attributes.
 * @return {WPBlockVariation[]} The block variations to be suggested in setup flow, when clicking to `start blank`.
 */
// export function useScopedBlockVariations(attributes) {
// 	const { activeVariationName, blockVariations } = useSelect(
// 		(select) => {
// 			const { getActiveBlockVariation, getBlockVariations } =
// 				select(blocksStore);
// 			return {
// 				activeVariationName: getActiveBlockVariation(queryLoopName, attributes)
// 					?.name,
// 				blockVariations: getBlockVariations(queryLoopName, "block"),
// 			};
// 		},
// 		[attributes]
// 	);
// 	const variations = useMemo(() => {
// 		// Filter out the variations that have defined a `namespace` attribute,
// 		// which means they are 'connected' to specific variations of the block.
// 		const isNotConnected = (variation) => !variation.attributes?.namespace;
// 		if (!activeVariationName) {
// 			return blockVariations.filter(isNotConnected);
// 		}
// 		const connectedVariations = blockVariations.filter((variation) =>
// 			variation.attributes?.namespace?.includes(activeVariationName)
// 		);
// 		if (!!connectedVariations.length) {
// 			return connectedVariations;
// 		}
// 		return blockVariations.filter(isNotConnected);
// 	}, [activeVariationName, blockVariations]);
// 	return variations;
// }

/**
 * Hook that returns the block patterns for a specific block type.
 *
 * @param {string} clientId The block's client ID.
 * @param {string} name     The block type name.
 * @return {Object[]} An array of valid block patterns.
 */
// export const usePatterns = (clientId, name) => {
// 	return useSelect(
// 		(select) => {
// 			const { getBlockRootClientId, getPatternsByBlockTypes } =
// 				select(blockEditorStore);
// 			const rootClientId = getBlockRootClientId(clientId);
// 			return getPatternsByBlockTypes(name, rootClientId);
// 		},
// 		[name, clientId]
// 	);
// };

/***/ }),

/***/ "./src/fragments/index.ts":
/*!********************************!*\
  !*** ./src/fragments/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NC_IMAGE_MEDIA_FRAGMENT: () => (/* binding */ NC_IMAGE_MEDIA_FRAGMENT),
/* harmony export */   NC_POSTS_EDGES_FRAGMENT: () => (/* binding */ NC_POSTS_EDGES_FRAGMENT),
/* harmony export */   NC_POST_CARD_FRAGMENT: () => (/* binding */ NC_POST_CARD_FRAGMENT),
/* harmony export */   NC_POST_META_DATA_FRAGMENT: () => (/* binding */ NC_POST_META_DATA_FRAGMENT),
/* harmony export */   NC_TERMS_EDGES_FRAGMENT: () => (/* binding */ NC_TERMS_EDGES_FRAGMENT),
/* harmony export */   NC_TERM_CARD_FRAGMENT: () => (/* binding */ NC_TERM_CARD_FRAGMENT)
/* harmony export */ });
/* harmony import */ var _generated___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__generated__ */ "./src/__generated__/index.ts");


// Terms =================================================
const NC_TERM_CARD_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)( /* GraphQL */`
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
const NC_TERMS_EDGES_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)( /* GraphQL */`
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
const NC_POSTS_EDGES_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)( /* GraphQL */`
	fragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {
		__typename
		edges {
			node {
				...NcmazFcPostCardFields
			}
		}
	}
`);
const NC_POST_CARD_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)( /* GraphQL */`
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
const NC_IMAGE_MEDIA_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)( /* GraphQL */`
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
const NC_POST_META_DATA_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)( /* GraphQL */`
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

/***/ "./src/utils/getPostDataFromPostFragment.ts":
/*!**************************************************!*\
  !*** ./src/utils/getPostDataFromPostFragment.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPostDataFromPostFragment: () => (/* binding */ getPostDataFromPostFragment)
/* harmony export */ });
/* harmony import */ var _generated___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__generated__ */ "./src/__generated__/index.ts");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fragments */ "./src/fragments/index.ts");


function getPostDataFromPostFragment(post) {
  const query = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.useFragment)(_fragments__WEBPACK_IMPORTED_MODULE_1__.NC_POST_CARD_FRAGMENT, post);
  const {
    title,
    link,
    date,
    categories,
    excerpt,
    author,
    postFormats
  } = query;
  const featuredImage = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.useFragment)(_fragments__WEBPACK_IMPORTED_MODULE_1__.NC_IMAGE_MEDIA_FRAGMENT, query.featuredImage?.node);
  const ncPostMetaData = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.useFragment)(_fragments__WEBPACK_IMPORTED_MODULE_1__.NC_POST_META_DATA_FRAGMENT, query.ncPostMetaData);
  return {
    ...query,
    featuredImage,
    ncPostMetaData
  };
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-magazine/style.scss":
/*!***************************************!*\
  !*** ./src/block-magazine/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

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

/***/ "./src/block-magazine/block.json":
/*!***************************************!*\
  !*** ./src/block-magazine/block.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ncmaz-faust/block-magazine","version":"0.1.0","title":"Block Magazine","category":"ncmazfc-blocks","icon":"smiley","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false,"align":["wide","full"],"anchor":true,"className":true},"textdomain":"ncmazfc","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"block-magazine/index": 0,
/******/ 			"block-magazine/style-index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkncmazfaustcore"] = self["webpackChunkncmazfaustcore"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-magazine/style-index"], () => (__webpack_require__("./src/block-magazine/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map