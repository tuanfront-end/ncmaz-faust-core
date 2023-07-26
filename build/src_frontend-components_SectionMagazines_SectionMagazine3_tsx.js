"use strict";
(self["webpackChunkncmazfaustcore"] = self["webpackChunkncmazfaustcore"] || []).push([["src_frontend-components_SectionMagazines_SectionMagazine3_tsx"],{

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
  "\n\tfragment NcmazFcTermCardFields on TermNode {\n\t\t__typename\n\t\tid\n\t\tcount\n\t\turi\n\t\tname\n\t\tslug\n\t\tdatabaseId\n\t\tdescription\n\t\tlink\n\t\ttaxonomyName\n\t\t... on Category {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t... on Tag {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcTermCardFieldsFragmentDoc,
  "\n\tfragment NcmazFcTermsCardFields on RootQueryToTermNodeConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcTermCardFields\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcTermsCardFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcPostCardFields\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostsEdegsFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostCardFields on Post {\n\t\t__typename\n\t\tid\n\t\tlink\n\t\turi\n\t\tmodifiedGmt\n\t\tmodified\n\t\tisSticky\n\t\tdateGmt\n\t\tdate\n\t\tcommentStatus\n\t\tstatus\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tid\n\t\t\t\tdatabaseId\n\t\t\t\tavatar {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\turl\n\t\t\t\turi\n\t\t\t\tusername\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tncUserMeta {\n\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tlink\n\t\t\t\t\tname\n\t\t\t\t\turi\n\t\t\t\t\tslug\n\t\t\t\t\tcount\n\t\t\t\t\tcategoryId\n\t\t\t\t\tncTaxonomyMeta {\n\t\t\t\t\t\tcolor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcommentCount\n\t\tdate\n\t\texcerpt\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdatabaseId\n\t\tslug\n\t\ttitle\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostCardFieldsFragmentDoc,
  "\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\tid\n\t\taltText\n\t\tcaption\n\t\tdatabaseId\n\t\tsizes\n\t\tsourceUrl\n\t\tsrcSet\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcImageFieldsFragmentDoc,
  "\n\tfragment NcmazFcPostMetaFields on Post_Ncpostmetadata {\n\t\t__typename\n\t\treactionLikedList\n\t\tsavedList\n\t\tshowRightSidebar\n\t\tsinglePageStyle\n\t\tviewsCount\n\t\treadingTime\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.NcmazFcPostMetaFieldsFragmentDoc,
  "\n\tquery postsWithVariablesQuery(\n\t\t$authorIn: [ID] = \"\"\n\t\t$categoryIn: [ID] = \"\"\n\t\t$tagIn: [ID] = \"\"\n\t\t$search: String = \"\"\n\t\t$parentIn: [ID] = \"\"\n\t\t$first: Int = 10\n\t\t$field: PostObjectsConnectionOrderbyEnum = AUTHOR\n\t\t$order: OrderEnum = ASC\n\t) {\n\t\tposts(\n\t\t\twhere: {\n\t\t\t\tauthorIn: $authorIn\n\t\t\t\tcategoryIn: $categoryIn\n\t\t\t\ttagIn: $tagIn\n\t\t\t\tsearch: $search\n\t\t\t\tparentIn: $parentIn\n\t\t\t\torderby: { field: $field, order: $order }\n\t\t\t}\n\t\t\tfirst: $first\n\t\t) {\n\t\t\t...NcmazFcPostsEdegsFields\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.PostsWithVariablesQueryDocument,
  "\n\tquery termsWithVariablesQuery(\n\t\t$first: Int = 10\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$taxonomies: [TaxonomyEnum] = CATEGORY\n\t) {\n\t\tterms(\n\t\t\twhere: { taxonomies: $taxonomies, orderby: $orderby, order: $order }\n\t\t\tfirst: $first\n\t\t) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t__typename\n\t\t\t\t\tid\n\t\t\t\t\tcount\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tdatabaseId\n\t\t\t\t\tdescription\n\t\t\t\t\tlink\n\t\t\t\t\ttaxonomyName\n\t\t\t\t\t... on Category {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tncTaxonomyMeta {\n\t\t\t\t\t\t\tcolor\n\t\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t... on Tag {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tncTaxonomyMeta {\n\t\t\t\t\t\t\tcolor\n\t\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": _graphql__WEBPACK_IMPORTED_MODULE_0__.TermsWithVariablesQueryDocument
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
/* harmony export */   OrderEnum: () => (/* binding */ OrderEnum),
/* harmony export */   PageIdType: () => (/* binding */ PageIdType),
/* harmony export */   PluginStatusEnum: () => (/* binding */ PluginStatusEnum),
/* harmony export */   PostFormatIdType: () => (/* binding */ PostFormatIdType),
/* harmony export */   PostIdType: () => (/* binding */ PostIdType),
/* harmony export */   PostObjectFieldFormatEnum: () => (/* binding */ PostObjectFieldFormatEnum),
/* harmony export */   PostObjectsConnectionDateColumnEnum: () => (/* binding */ PostObjectsConnectionDateColumnEnum),
/* harmony export */   PostObjectsConnectionOrderbyEnum: () => (/* binding */ PostObjectsConnectionOrderbyEnum),
/* harmony export */   PostStatusEnum: () => (/* binding */ PostStatusEnum),
/* harmony export */   PostsWithVariablesQueryDocument: () => (/* binding */ PostsWithVariablesQueryDocument),
/* harmony export */   RelationEnum: () => (/* binding */ RelationEnum),
/* harmony export */   TagIdType: () => (/* binding */ TagIdType),
/* harmony export */   TaxQueryField: () => (/* binding */ TaxQueryField),
/* harmony export */   TaxQueryOperator: () => (/* binding */ TaxQueryOperator),
/* harmony export */   TaxonomyEnum: () => (/* binding */ TaxonomyEnum),
/* harmony export */   TaxonomyIdTypeEnum: () => (/* binding */ TaxonomyIdTypeEnum),
/* harmony export */   TermNodeIdTypeEnum: () => (/* binding */ TermNodeIdTypeEnum),
/* harmony export */   TermObjectsConnectionOrderbyEnum: () => (/* binding */ TermObjectsConnectionOrderbyEnum),
/* harmony export */   TermsWithVariablesQueryDocument: () => (/* binding */ TermsWithVariablesQueryDocument),
/* harmony export */   UserNodeIdTypeEnum: () => (/* binding */ UserNodeIdTypeEnum),
/* harmony export */   UserRoleEnum: () => (/* binding */ UserRoleEnum),
/* harmony export */   UsersConnectionOrderbyEnum: () => (/* binding */ UsersConnectionOrderbyEnum),
/* harmony export */   UsersConnectionSearchColumnEnum: () => (/* binding */ UsersConnectionSearchColumnEnum)
/* harmony export */ });
/* eslint-disable */ /** All built-in and custom scalars, mapped to their actual values */ /** A Field Group registered by ACF */ /** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */ /** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */let AvatarRatingEnum=/*#__PURE__*/function(AvatarRatingEnum){AvatarRatingEnum["G"]="G";AvatarRatingEnum["Pg"]="PG";AvatarRatingEnum["R"]="R";AvatarRatingEnum["X"]="X";return AvatarRatingEnum;}({});/** Block that supports Anchor field */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** The category type */ /** Connection to category Nodes */ /** Edge between a Node and a connected category */ /** Page Info on the connected CategoryConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let CategoryIdType=/*#__PURE__*/function(CategoryIdType){CategoryIdType["DatabaseId"]="DATABASE_ID";CategoryIdType["Id"]="ID";CategoryIdType["Name"]="NAME";CategoryIdType["Slug"]="SLUG";CategoryIdType["Uri"]="URI";return CategoryIdType;}({});/** Connection between the Category type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */ /** Connection between the Category type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToCategoryConnection&quot; */ /** Arguments for filtering the CategoryToCategoryConnection connection */ /** Connection between the Category type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToContentNodeConnection&quot; */ /** Arguments for filtering the CategoryToContentNodeConnection connection */ /** Connection between the Category type and the category type */ /** Connection between the Category type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;CategoryToPostConnection&quot; */ /** Arguments for filtering the CategoryToPostConnection connection */ /** Connection between the Category type and the Taxonomy type */ /** Field Group */ /** A Comment object */ /** A Comment object */ /** A Comment object */ /** A Comment object */ /** A Comment Author object */ /** A Comment Author object */ /** Connection to Comment Nodes */ /** Edge between a Node and a connected Comment */ /** Page Info on the connected CommentConnectionEdge */ /** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */let CommentNodeIdTypeEnum=/*#__PURE__*/function(CommentNodeIdTypeEnum){CommentNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";CommentNodeIdTypeEnum["Id"]="ID";return CommentNodeIdTypeEnum;}({});/** The status of the comment object. */let CommentStatusEnum=/*#__PURE__*/function(CommentStatusEnum){CommentStatusEnum["Approve"]="APPROVE";CommentStatusEnum["Hold"]="HOLD";CommentStatusEnum["Spam"]="SPAM";CommentStatusEnum["Trash"]="TRASH";return CommentStatusEnum;}({});/** Connection between the Comment type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;CommentToCommentConnection&quot; */ /** Arguments for filtering the CommentToCommentConnection connection */ /** Connection between the Comment type and the Commenter type */ /** Connection between the Comment type and the ContentNode type */ /** Connection between the Comment type and the Comment type */ /** Arguments for filtering the CommentToParentCommentConnection connection */ /** The author of a comment */ /** Edge between a Node and a connected Commenter */ /** Options for ordering the connection */let CommentsConnectionOrderbyEnum=/*#__PURE__*/function(CommentsConnectionOrderbyEnum){CommentsConnectionOrderbyEnum["CommentAgent"]="COMMENT_AGENT";CommentsConnectionOrderbyEnum["CommentApproved"]="COMMENT_APPROVED";CommentsConnectionOrderbyEnum["CommentAuthor"]="COMMENT_AUTHOR";CommentsConnectionOrderbyEnum["CommentAuthorEmail"]="COMMENT_AUTHOR_EMAIL";CommentsConnectionOrderbyEnum["CommentAuthorIp"]="COMMENT_AUTHOR_IP";CommentsConnectionOrderbyEnum["CommentAuthorUrl"]="COMMENT_AUTHOR_URL";CommentsConnectionOrderbyEnum["CommentContent"]="COMMENT_CONTENT";CommentsConnectionOrderbyEnum["CommentDate"]="COMMENT_DATE";CommentsConnectionOrderbyEnum["CommentDateGmt"]="COMMENT_DATE_GMT";CommentsConnectionOrderbyEnum["CommentId"]="COMMENT_ID";CommentsConnectionOrderbyEnum["CommentIn"]="COMMENT_IN";CommentsConnectionOrderbyEnum["CommentKarma"]="COMMENT_KARMA";CommentsConnectionOrderbyEnum["CommentParent"]="COMMENT_PARENT";CommentsConnectionOrderbyEnum["CommentPostId"]="COMMENT_POST_ID";CommentsConnectionOrderbyEnum["CommentType"]="COMMENT_TYPE";CommentsConnectionOrderbyEnum["UserId"]="USER_ID";return CommentsConnectionOrderbyEnum;}({});/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */ /** Nodes used to manage content */ /** Nodes used to manage content */ /** Nodes used to manage content */ /** Connection to ContentNode Nodes */ /** Edge between a Node and a connected ContentNode */ /** Page Info on the connected ContentNodeConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let ContentNodeIdTypeEnum=/*#__PURE__*/function(ContentNodeIdTypeEnum){ContentNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";ContentNodeIdTypeEnum["Id"]="ID";ContentNodeIdTypeEnum["Uri"]="URI";return ContentNodeIdTypeEnum;}({});/** Connection between the ContentNode type and the ContentType type */ /** Connection between the ContentNode type and the User type */ /** Connection between the ContentNode type and the User type */ /** Connection between the ContentNode type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */ /** Connection between the ContentNode type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */ /** The template assigned to a node of content */ /** An Post Type object */ /** An Post Type object */ /** An Post Type object */ /** Connection to ContentType Nodes */ /** Edge between a Node and a connected ContentType */ /** Page Info on the connected ContentTypeConnectionEdge */ /** Allowed Content Types */let ContentTypeEnum=/*#__PURE__*/function(ContentTypeEnum){ContentTypeEnum["Attachment"]="ATTACHMENT";ContentTypeEnum["Page"]="PAGE";ContentTypeEnum["Post"]="POST";return ContentTypeEnum;}({});/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */let ContentTypeIdTypeEnum=/*#__PURE__*/function(ContentTypeIdTypeEnum){ContentTypeIdTypeEnum["Id"]="ID";ContentTypeIdTypeEnum["Name"]="NAME";return ContentTypeIdTypeEnum;}({});/** Connection between the ContentType type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */ /** Arguments for filtering the ContentTypeToContentNodeConnection connection */ /** Connection between the ContentType type and the Taxonomy type */ /** An edge in a connection */ /** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */ /** Allowed Content Types of the Category taxonomy. */let ContentTypesOfCategoryEnum=/*#__PURE__*/function(ContentTypesOfCategoryEnum){ContentTypesOfCategoryEnum["Post"]="POST";return ContentTypesOfCategoryEnum;}({});/** Allowed Content Types of the PostFormat taxonomy. */let ContentTypesOfPostFormatEnum=/*#__PURE__*/function(ContentTypesOfPostFormatEnum){ContentTypesOfPostFormatEnum["Post"]="POST";return ContentTypesOfPostFormatEnum;}({});/** Allowed Content Types of the Tag taxonomy. */let ContentTypesOfTagEnum=/*#__PURE__*/function(ContentTypesOfTagEnum){ContentTypesOfTagEnum["Post"]="POST";return ContentTypesOfTagEnum;}({});/** A block used for editing the site */ /** Attributes of the CoreArchives Block Type */ /** A block used for editing the site */ /** Attributes of the CoreAudio Block Type */ /** A block used for editing the site */ /** Attributes of the CoreAvatar Block Type */ /** A block used for editing the site */ /** Attributes of the CoreBlock Block Type */ /** A block used for editing the site */ /** Attributes of the CoreButton Block Type */ /** A block used for editing the site */ /** Attributes of the CoreButtons Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCalendar Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCategories Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCode Block Type */ /** A block used for editing the site */ /** Attributes of the CoreColumn Block Type */ /** A block used for editing the site */ /** Attributes of the CoreColumns Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentAuthorName Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentContent Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentDate Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentEditLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentReplyLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentTemplate Block Type */ /** A block used for editing the site */ /** Attributes of the CoreComments Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPagination Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationNext Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationNumbers Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsPaginationPrevious Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCommentsTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreCover Block Type */ /** A block used for editing the site */ /** Attributes of the CoreEmbed Block Type */ /** A block used for editing the site */ /** Attributes of the CoreFile Block Type */ /** A block used for editing the site */ /** Attributes of the CoreFreeform Block Type */ /** A block used for editing the site */ /** Attributes of the CoreGallery Block Type */ /** A block used for editing the site */ /** Attributes of the CoreGroup Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHeading Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHomeLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreHtml Block Type */ /** A block used for editing the site */ /** Attributes of the CoreImage Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLatestComments Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLatestPosts Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLegacyWidget Block Type */ /** A block used for editing the site */ /** Attributes of the CoreList Block Type */ /** A block used for editing the site */ /** Attributes of the CoreListItem Block Type */ /** A block used for editing the site */ /** Attributes of the CoreLoginout Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMediaText Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMissing Block Type */ /** A block used for editing the site */ /** Attributes of the CoreMore Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigation Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigationLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNavigationSubmenu Block Type */ /** A block used for editing the site */ /** Attributes of the CoreNextpage Block Type */ /** A block used for editing the site */ /** Attributes of the CorePageList Block Type */ /** A block used for editing the site */ /** Attributes of the CorePageListItem Block Type */ /** A block used for editing the site */ /** Attributes of the CoreParagraph Block Type */ /** A block used for editing the site */ /** Attributes of the CorePattern Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthor Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthorBiography Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostAuthorName Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostComments Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostCommentsForm Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostContent Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostDate Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostExcerpt Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostFeaturedImage Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostNavigationLink Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTemplate Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTerms Block Type */ /** A block used for editing the site */ /** Attributes of the CorePostTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CorePreformatted Block Type */ /** A block used for editing the site */ /** Attributes of the CorePullquote Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQuery Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryNoResults Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPagination Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationNext Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationNumbers Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryPaginationPrevious Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQueryTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreQuote Block Type */ /** A block used for editing the site */ /** Attributes of the CoreReadMore Block Type */ /** A block used for editing the site */ /** Attributes of the CoreRss Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSearch Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSeparator Block Type */ /** A block used for editing the site */ /** Attributes of the CoreShortcode Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteLogo Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteTagline Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSiteTitle Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSocialLink Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSocialLinks Block Type */ /** A block used for editing the site */ /** Attributes of the CoreSpacer Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTable Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTagCloud Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTemplatePart Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTermDescription Block Type */ /** A block used for editing the site */ /** Attributes of the CoreTextColumns Block Type */ /** A block used for editing the site */ /** Attributes of the CoreVerse Block Type */ /** A block used for editing the site */ /** Attributes of the CoreVideo Block Type */ /** A block used for editing the site */ /** Attributes of the CoreWidgetGroup Block Type */ /** Input for the createCategory mutation. */ /** The payload for the createCategory mutation. */ /** Input for the createComment mutation. */ /** The payload for the createComment mutation. */ /** Input for the createMediaItem mutation. */ /** The payload for the createMediaItem mutation. */ /** Input for the createPage mutation. */ /** The payload for the createPage mutation. */ /** Input for the createPostFormat mutation. */ /** The payload for the createPostFormat mutation. */ /** Input for the createPost mutation. */ /** The payload for the createPost mutation. */ /** Input for the createTag mutation. */ /** The payload for the createTag mutation. */ /** Input for the createUser mutation. */ /** The payload for the createUser mutation. */ /** Object that can be identified with a Database ID */ /** Date values */ /** Filter the connection based on input */ /** The template assigned to the node */ /** Input for the deleteCategory mutation. */ /** The payload for the deleteCategory mutation. */ /** Input for the deleteComment mutation. */ /** The payload for the deleteComment mutation. */ /** Input for the deleteMediaItem mutation. */ /** The payload for the deleteMediaItem mutation. */ /** Input for the deletePage mutation. */ /** The payload for the deletePage mutation. */ /** Input for the deletePostFormat mutation. */ /** The payload for the deletePostFormat mutation. */ /** Input for the deletePost mutation. */ /** The payload for the deletePost mutation. */ /** Input for the deleteTag mutation. */ /** The payload for the deleteTag mutation. */ /** Input for the deleteUser mutation. */ /** The payload for the deleteUser mutation. */ /** The discussion setting type */ /** Relational context between connected nodes */ /** Blocks that can be edited to create content and layouts */ /** Asset enqueued by the CMS */ /** Script enqueued by the CMS */ /** Connection to EnqueuedScript Nodes */ /** Edge between a Node and a connected EnqueuedScript */ /** Page Info on the connected EnqueuedScriptConnectionEdge */ /** Stylesheet enqueued by the CMS */ /** Connection to EnqueuedStylesheet Nodes */ /** Edge between a Node and a connected EnqueuedStylesheet */ /** Page Info on the connected EnqueuedStylesheetConnectionEdge */ /** The general setting type */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Content node with hierarchical (parent/child) relationships */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */ /** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */ /** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */ /** Connection between the HierarchicalContentNode type and the ContentNode type */ /** Node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** Term node with hierarchical (parent/child) relationships */ /** File details for a Media Item */ /** File details for a Media Item */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** The mediaItem type */ /** Connection to mediaItem Nodes */ /** Edge between a Node and a connected mediaItem */ /** Page Info on the connected MediaItemConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let MediaItemIdType=/*#__PURE__*/function(MediaItemIdType){MediaItemIdType["DatabaseId"]="DATABASE_ID";MediaItemIdType["Id"]="ID";MediaItemIdType["Slug"]="SLUG";MediaItemIdType["SourceUrl"]="SOURCE_URL";MediaItemIdType["Uri"]="URI";return MediaItemIdType;}({});/** Meta connected to a MediaItem */ /** The size of the media item object. */let MediaItemSizeEnum=/*#__PURE__*/function(MediaItemSizeEnum){MediaItemSizeEnum["Large"]="LARGE";MediaItemSizeEnum["Medium"]="MEDIUM";MediaItemSizeEnum["MediumLarge"]="MEDIUM_LARGE";MediaItemSizeEnum["Thumbnail"]="THUMBNAIL";MediaItemSizeEnum["1536X1536"]="_1536X1536";MediaItemSizeEnum["2048X2048"]="_2048X2048";return MediaItemSizeEnum;}({});/** The status of the media item object. */let MediaItemStatusEnum=/*#__PURE__*/function(MediaItemStatusEnum){MediaItemStatusEnum["AutoDraft"]="AUTO_DRAFT";MediaItemStatusEnum["Inherit"]="INHERIT";MediaItemStatusEnum["Private"]="PRIVATE";MediaItemStatusEnum["Trash"]="TRASH";return MediaItemStatusEnum;}({});/** Connection between the MediaItem type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;MediaItemToCommentConnection&quot; */ /** Arguments for filtering the MediaItemToCommentConnection connection */ /** Details of an available size for a media item */ /** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */ /** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */ /** Connection to Menu Nodes */ /** Edge between a Node and a connected Menu */ /** Page Info on the connected MenuConnectionEdge */ /** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */ /** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */ /** Connection to MenuItem Nodes */ /** Edge between a Node and a connected MenuItem */ /** Page Info on the connected MenuItemConnectionEdge */ /** Nodes that can be linked to as Menu Items */ /** Edge between a Node and a connected MenuItemLinkable */ /** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */let MenuItemNodeIdTypeEnum=/*#__PURE__*/function(MenuItemNodeIdTypeEnum){MenuItemNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";MenuItemNodeIdTypeEnum["Id"]="ID";return MenuItemNodeIdTypeEnum;}({});/** Deprecated in favor of MenuItemLinkeable Interface */ /** Connection between the MenuItem type and the Menu type */ /** Connection between the MenuItem type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */ /** Arguments for filtering the MenuItemToMenuItemConnection connection */ /** Connection between the MenuItem type and the MenuItemLinkable type */ /** Field Group */ /** Registered menu locations */let MenuLocationEnum=/*#__PURE__*/function(MenuLocationEnum){MenuLocationEnum["Empty"]="EMPTY";return MenuLocationEnum;}({});/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */let MenuNodeIdTypeEnum=/*#__PURE__*/function(MenuNodeIdTypeEnum){MenuNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";MenuNodeIdTypeEnum["Id"]="ID";MenuNodeIdTypeEnum["Location"]="LOCATION";MenuNodeIdTypeEnum["Name"]="NAME";MenuNodeIdTypeEnum["Slug"]="SLUG";return MenuNodeIdTypeEnum;}({});/** Connection between the Menu type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;MenuToMenuItemConnection&quot; */ /** Arguments for filtering the MenuToMenuItemConnection connection */ /** The MimeType of the object */let MimeTypeEnum=/*#__PURE__*/function(MimeTypeEnum){MimeTypeEnum["ApplicationFontWoff"]="APPLICATION_FONT_WOFF";MimeTypeEnum["ApplicationFontWoff2"]="APPLICATION_FONT_WOFF2";MimeTypeEnum["ApplicationJava"]="APPLICATION_JAVA";MimeTypeEnum["ApplicationMsword"]="APPLICATION_MSWORD";MimeTypeEnum["ApplicationOctetStream"]="APPLICATION_OCTET_STREAM";MimeTypeEnum["ApplicationOnenote"]="APPLICATION_ONENOTE";MimeTypeEnum["ApplicationOxps"]="APPLICATION_OXPS";MimeTypeEnum["ApplicationPdf"]="APPLICATION_PDF";MimeTypeEnum["ApplicationRar"]="APPLICATION_RAR";MimeTypeEnum["ApplicationRedux"]="APPLICATION_REDUX";MimeTypeEnum["ApplicationRtf"]="APPLICATION_RTF";MimeTypeEnum["ApplicationTtafXml"]="APPLICATION_TTAF_XML";MimeTypeEnum["ApplicationVndAppleKeynote"]="APPLICATION_VND_APPLE_KEYNOTE";MimeTypeEnum["ApplicationVndAppleNumbers"]="APPLICATION_VND_APPLE_NUMBERS";MimeTypeEnum["ApplicationVndApplePages"]="APPLICATION_VND_APPLE_PAGES";MimeTypeEnum["ApplicationVndMsAccess"]="APPLICATION_VND_MS_ACCESS";MimeTypeEnum["ApplicationVndMsExcel"]="APPLICATION_VND_MS_EXCEL";MimeTypeEnum["ApplicationVndMsExcelAddinMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelSheetBinaryMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelSheetMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsExcelTemplateMacroenabled_12"]="APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsFontobject"]="APPLICATION_VND_MS_FONTOBJECT";MimeTypeEnum["ApplicationVndMsPowerpoint"]="APPLICATION_VND_MS_POWERPOINT";MimeTypeEnum["ApplicationVndMsPowerpointAddinMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointPresentationMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointSlideshowMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointSlideMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsPowerpointTemplateMacroenabled_12"]="APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsProject"]="APPLICATION_VND_MS_PROJECT";MimeTypeEnum["ApplicationVndMsWordDocumentMacroenabled_12"]="APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsWordTemplateMacroenabled_12"]="APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12";MimeTypeEnum["ApplicationVndMsWrite"]="APPLICATION_VND_MS_WRITE";MimeTypeEnum["ApplicationVndMsXpsdocument"]="APPLICATION_VND_MS_XPSDOCUMENT";MimeTypeEnum["ApplicationVndOasisOpendocumentChart"]="APPLICATION_VND_OASIS_OPENDOCUMENT_CHART";MimeTypeEnum["ApplicationVndOasisOpendocumentDatabase"]="APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE";MimeTypeEnum["ApplicationVndOasisOpendocumentFormula"]="APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA";MimeTypeEnum["ApplicationVndOasisOpendocumentGraphics"]="APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS";MimeTypeEnum["ApplicationVndOasisOpendocumentPresentation"]="APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION";MimeTypeEnum["ApplicationVndOasisOpendocumentSpreadsheet"]="APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET";MimeTypeEnum["ApplicationVndOasisOpendocumentText"]="APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT";MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate"]="APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE";MimeTypeEnum["ApplicationWordperfect"]="APPLICATION_WORDPERFECT";MimeTypeEnum["ApplicationX_7ZCompressed"]="APPLICATION_X_7Z_COMPRESSED";MimeTypeEnum["ApplicationXGzip"]="APPLICATION_X_GZIP";MimeTypeEnum["ApplicationXTar"]="APPLICATION_X_TAR";MimeTypeEnum["ApplicationZip"]="APPLICATION_ZIP";MimeTypeEnum["AudioAac"]="AUDIO_AAC";MimeTypeEnum["AudioFlac"]="AUDIO_FLAC";MimeTypeEnum["AudioMidi"]="AUDIO_MIDI";MimeTypeEnum["AudioMpeg"]="AUDIO_MPEG";MimeTypeEnum["AudioOgg"]="AUDIO_OGG";MimeTypeEnum["AudioWav"]="AUDIO_WAV";MimeTypeEnum["AudioXMatroska"]="AUDIO_X_MATROSKA";MimeTypeEnum["AudioXMsWax"]="AUDIO_X_MS_WAX";MimeTypeEnum["AudioXMsWma"]="AUDIO_X_MS_WMA";MimeTypeEnum["AudioXRealaudio"]="AUDIO_X_REALAUDIO";MimeTypeEnum["FontOtf"]="FONT_OTF";MimeTypeEnum["FontTtf"]="FONT_TTF";MimeTypeEnum["ImageBmp"]="IMAGE_BMP";MimeTypeEnum["ImageGif"]="IMAGE_GIF";MimeTypeEnum["ImageHeic"]="IMAGE_HEIC";MimeTypeEnum["ImageJpeg"]="IMAGE_JPEG";MimeTypeEnum["ImagePng"]="IMAGE_PNG";MimeTypeEnum["ImageSvgXml"]="IMAGE_SVG_XML";MimeTypeEnum["ImageTiff"]="IMAGE_TIFF";MimeTypeEnum["ImageWebp"]="IMAGE_WEBP";MimeTypeEnum["ImageXIcon"]="IMAGE_X_ICON";MimeTypeEnum["TextCalendar"]="TEXT_CALENDAR";MimeTypeEnum["TextCss"]="TEXT_CSS";MimeTypeEnum["TextCsv"]="TEXT_CSV";MimeTypeEnum["TextPlain"]="TEXT_PLAIN";MimeTypeEnum["TextRichtext"]="TEXT_RICHTEXT";MimeTypeEnum["TextTabSeparatedValues"]="TEXT_TAB_SEPARATED_VALUES";MimeTypeEnum["TextVtt"]="TEXT_VTT";MimeTypeEnum["Video_3Gpp"]="VIDEO_3GPP";MimeTypeEnum["Video_3Gpp2"]="VIDEO_3GPP2";MimeTypeEnum["VideoAvi"]="VIDEO_AVI";MimeTypeEnum["VideoDivx"]="VIDEO_DIVX";MimeTypeEnum["VideoMp4"]="VIDEO_MP4";MimeTypeEnum["VideoMpeg"]="VIDEO_MPEG";MimeTypeEnum["VideoOgg"]="VIDEO_OGG";MimeTypeEnum["VideoQuicktime"]="VIDEO_QUICKTIME";MimeTypeEnum["VideoWebm"]="VIDEO_WEBM";MimeTypeEnum["VideoXFlv"]="VIDEO_X_FLV";MimeTypeEnum["VideoXMatroska"]="VIDEO_X_MATROSKA";MimeTypeEnum["VideoXMsAsf"]="VIDEO_X_MS_ASF";MimeTypeEnum["VideoXMsWm"]="VIDEO_X_MS_WM";MimeTypeEnum["VideoXMsWmv"]="VIDEO_X_MS_WMV";MimeTypeEnum["VideoXMsWmx"]="VIDEO_X_MS_WMX";return MimeTypeEnum;}({});/** A block used for editing the site */ /** Attributes of the NcmazFaustBlockMagazine Block Type */ /** A block used for editing the site */ /** Attributes of the NcmazFaustBlockTerms Block Type */ /** Input for the ncmazfcUpdateSavedList mutation. */ /** The payload for the ncmazfcUpdateSavedList mutation. */ /** An object with an ID */ /** A node that can have an author assigned to it */ /** Connection between the NodeWithAuthor type and the User type */ /** A node that can have comments associated with it */ /** A node that supports the content editor */ /** A node that supports the content editor */ /** Node that has content blocks associated with it */ /** Node that has content blocks associated with it */ /** A node that can have an excerpt */ /** A node that can have an excerpt */ /** A node that can have a featured image set */ /** Connection between the NodeWithFeaturedImage type and the MediaItem type */ /** A node that can have page attributes */ /** Node that has Page content blocks associated with it */ /** Node that has Page content blocks associated with it */ /** Node that has Post content blocks associated with it */ /** Node that has Post content blocks associated with it */ /** A node that can have revisions */ /** Connection between the NodeWithRevisions type and the ContentNode type */ /** A node that can have a template associated with it */ /** A node that NodeWith a title */ /** A node that NodeWith a title */ /** A node that can have trackbacks and pingbacks */ /** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */ /** The cardinality of the connection order */let OrderEnum=/*#__PURE__*/function(OrderEnum){OrderEnum["Asc"]="ASC";OrderEnum["Desc"]="DESC";return OrderEnum;}({});/** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** The page type */ /** Connection to page Nodes */ /** Edge between a Node and a connected page */ /** Page Info on the connected PageConnectionEdge */ /** EditorBlock Interface for Page Block Type */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PageIdType=/*#__PURE__*/function(PageIdType){PageIdType["DatabaseId"]="DATABASE_ID";PageIdType["Id"]="ID";PageIdType["Uri"]="URI";return PageIdType;}({});/** Information about pagination in a connection. */ /** Connection between the Page type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;PageToCommentConnection&quot; */ /** Arguments for filtering the PageToCommentConnection connection */ /** Connection between the Page type and the page type */ /** Connection between the Page type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;PageToRevisionConnection&quot; */ /** Arguments for filtering the PageToRevisionConnection connection */ /** An plugin object */ /** Connection to Plugin Nodes */ /** Edge between a Node and a connected Plugin */ /** Page Info on the connected PluginConnectionEdge */ /** The status of the WordPress plugin. */let PluginStatusEnum=/*#__PURE__*/function(PluginStatusEnum){PluginStatusEnum["Active"]="ACTIVE";PluginStatusEnum["DropIn"]="DROP_IN";PluginStatusEnum["Inactive"]="INACTIVE";PluginStatusEnum["MustUse"]="MUST_USE";PluginStatusEnum["Paused"]="PAUSED";PluginStatusEnum["RecentlyActive"]="RECENTLY_ACTIVE";PluginStatusEnum["Upgrade"]="UPGRADE";return PluginStatusEnum;}({});/** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** The post type */ /** Set relationships between the post to categories */ /** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** Connection to post Nodes */ /** Edge between a Node and a connected post */ /** Page Info on the connected PostConnectionEdge */ /** EditorBlock Interface for Post Block Type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** The postFormat type */ /** Connection to postFormat Nodes */ /** Edge between a Node and a connected postFormat */ /** Page Info on the connected PostFormatConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PostFormatIdType=/*#__PURE__*/function(PostFormatIdType){PostFormatIdType["DatabaseId"]="DATABASE_ID";PostFormatIdType["Id"]="ID";PostFormatIdType["Name"]="NAME";PostFormatIdType["Slug"]="SLUG";PostFormatIdType["Uri"]="URI";return PostFormatIdType;}({});/** Connection between the PostFormat type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */ /** Arguments for filtering the PostFormatToContentNodeConnection connection */ /** Connection between the PostFormat type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;PostFormatToPostConnection&quot; */ /** Arguments for filtering the PostFormatToPostConnection connection */ /** Connection between the PostFormat type and the Taxonomy type */ /** Field Group */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let PostIdType=/*#__PURE__*/function(PostIdType){PostIdType["DatabaseId"]="DATABASE_ID";PostIdType["Id"]="ID";PostIdType["Slug"]="SLUG";PostIdType["Uri"]="URI";return PostIdType;}({});/** The format of post field data. */let PostObjectFieldFormatEnum=/*#__PURE__*/function(PostObjectFieldFormatEnum){PostObjectFieldFormatEnum["Raw"]="RAW";PostObjectFieldFormatEnum["Rendered"]="RENDERED";return PostObjectFieldFormatEnum;}({});/** The column to use when filtering by date */let PostObjectsConnectionDateColumnEnum=/*#__PURE__*/function(PostObjectsConnectionDateColumnEnum){PostObjectsConnectionDateColumnEnum["Date"]="DATE";PostObjectsConnectionDateColumnEnum["Modified"]="MODIFIED";return PostObjectsConnectionDateColumnEnum;}({});/** Field to order the connection by */let PostObjectsConnectionOrderbyEnum=/*#__PURE__*/function(PostObjectsConnectionOrderbyEnum){PostObjectsConnectionOrderbyEnum["Author"]="AUTHOR";PostObjectsConnectionOrderbyEnum["CommentCount"]="COMMENT_COUNT";PostObjectsConnectionOrderbyEnum["Date"]="DATE";PostObjectsConnectionOrderbyEnum["In"]="IN";PostObjectsConnectionOrderbyEnum["MenuOrder"]="MENU_ORDER";PostObjectsConnectionOrderbyEnum["Modified"]="MODIFIED";PostObjectsConnectionOrderbyEnum["NameIn"]="NAME_IN";PostObjectsConnectionOrderbyEnum["Parent"]="PARENT";PostObjectsConnectionOrderbyEnum["Slug"]="SLUG";PostObjectsConnectionOrderbyEnum["Title"]="TITLE";return PostObjectsConnectionOrderbyEnum;}({});/** Options for ordering the connection */ /** Set relationships between the post to postFormats */ /** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** The status of the object. */let PostStatusEnum=/*#__PURE__*/function(PostStatusEnum){PostStatusEnum["AcfDisabled"]="ACF_DISABLED";PostStatusEnum["AutoDraft"]="AUTO_DRAFT";PostStatusEnum["Draft"]="DRAFT";PostStatusEnum["Future"]="FUTURE";PostStatusEnum["Inherit"]="INHERIT";PostStatusEnum["Pending"]="PENDING";PostStatusEnum["Private"]="PRIVATE";PostStatusEnum["Publish"]="PUBLISH";PostStatusEnum["RequestCompleted"]="REQUEST_COMPLETED";PostStatusEnum["RequestConfirmed"]="REQUEST_CONFIRMED";PostStatusEnum["RequestFailed"]="REQUEST_FAILED";PostStatusEnum["RequestPending"]="REQUEST_PENDING";PostStatusEnum["Trash"]="TRASH";return PostStatusEnum;}({});/** Set relationships between the post to tags */ /** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */ /** Connection between the Post type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;PostToCategoryConnection&quot; */ /** Arguments for filtering the PostToCategoryConnection connection */ /** Connection between the Post type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;PostToCommentConnection&quot; */ /** Arguments for filtering the PostToCommentConnection connection */ /** Connection between the Post type and the postFormat type */ /** An edge in a connection */ /** Page Info on the &quot;PostToPostFormatConnection&quot; */ /** Arguments for filtering the PostToPostFormatConnection connection */ /** Connection between the Post type and the post type */ /** Connection between the Post type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;PostToRevisionConnection&quot; */ /** Arguments for filtering the PostToRevisionConnection connection */ /** Connection between the Post type and the tag type */ /** An edge in a connection */ /** Page Info on the &quot;PostToTagConnection&quot; */ /** Arguments for filtering the PostToTagConnection connection */ /** Connection between the Post type and the TermNode type */ /** An edge in a connection */ /** Page Info on the &quot;PostToTermNodeConnection&quot; */ /** Arguments for filtering the PostToTermNodeConnection connection */ /** Details for labels of the PostType */ /** Field Group */ /** Field Group */ /** Field Group */ /** Field Group */ /** Nodes that can be seen in a preview (unpublished) state. */ /** The reading setting type */ /** Input for the registerUser mutation. */ /** The payload for the registerUser mutation. */ /** The logical relation between each item in the array when there are more than one. */let RelationEnum=/*#__PURE__*/function(RelationEnum){RelationEnum["And"]="AND";RelationEnum["Or"]="OR";return RelationEnum;}({});/** Input for the resetUserPassword mutation. */ /** The payload for the resetUserPassword mutation. */ /** Input for the restoreComment mutation. */ /** The payload for the restoreComment mutation. */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root mutation */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** The root entry point into the Graph */ /** Connection between the RootQuery type and the category type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToCategoryConnection&quot; */ /** Arguments for filtering the RootQueryToCategoryConnection connection */ /** Connection between the RootQuery type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToCommentConnection&quot; */ /** Arguments for filtering the RootQueryToCommentConnection connection */ /** Connection between the RootQuery type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */ /** Arguments for filtering the RootQueryToContentNodeConnection connection */ /** Connection between the RootQuery type and the ContentType type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */ /** Connection between the RootQuery type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */ /** Connection between the RootQuery type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */ /** Connection between the RootQuery type and the mediaItem type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */ /** Arguments for filtering the RootQueryToMediaItemConnection connection */ /** Connection between the RootQuery type and the Menu type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMenuConnection&quot; */ /** Arguments for filtering the RootQueryToMenuConnection connection */ /** Connection between the RootQuery type and the MenuItem type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */ /** Arguments for filtering the RootQueryToMenuItemConnection connection */ /** Connection between the RootQuery type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPageConnection&quot; */ /** Arguments for filtering the RootQueryToPageConnection connection */ /** Connection between the RootQuery type and the Plugin type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPluginConnection&quot; */ /** Arguments for filtering the RootQueryToPluginConnection connection */ /** Connection between the RootQuery type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPostConnection&quot; */ /** Arguments for filtering the RootQueryToPostConnection connection */ /** Connection between the RootQuery type and the postFormat type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */ /** Arguments for filtering the RootQueryToPostFormatConnection connection */ /** Connection between the RootQuery type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */ /** Arguments for filtering the RootQueryToRevisionsConnection connection */ /** Connection between the RootQuery type and the tag type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTagConnection&quot; */ /** Arguments for filtering the RootQueryToTagConnection connection */ /** Connection between the RootQuery type and the Taxonomy type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */ /** Connection between the RootQuery type and the TermNode type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */ /** Arguments for filtering the RootQueryToTermNodeConnection connection */ /** Connection between the RootQuery type and the Theme type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToThemeConnection&quot; */ /** Connection between the RootQuery type and the User type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToUserConnection&quot; */ /** Arguments for filtering the RootQueryToUserConnection connection */ /** Connection between the RootQuery type and the UserRole type */ /** An edge in a connection */ /** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */ /** Input for the sendPasswordResetEmail mutation. */ /** The payload for the sendPasswordResetEmail mutation. */ /** All of the registered settings */ /** The tag type */ /** The tag type */ /** The tag type */ /** The tag type */ /** The tag type */ /** Connection to tag Nodes */ /** Edge between a Node and a connected tag */ /** Page Info on the connected TagConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is ID. */let TagIdType=/*#__PURE__*/function(TagIdType){TagIdType["DatabaseId"]="DATABASE_ID";TagIdType["Id"]="ID";TagIdType["Name"]="NAME";TagIdType["Slug"]="SLUG";TagIdType["Uri"]="URI";return TagIdType;}({});/** Connection between the Tag type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;TagToContentNodeConnection&quot; */ /** Arguments for filtering the TagToContentNodeConnection connection */ /** Connection between the Tag type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;TagToPostConnection&quot; */ /** Arguments for filtering the TagToPostConnection connection */ /** Connection between the Tag type and the Taxonomy type */ /** Field Group */ /** Query objects based on taxonomy parameters */ /** Which field to select taxonomy term by. Default value is "term_id" */let TaxQueryField=/*#__PURE__*/function(TaxQueryField){TaxQueryField["Id"]="ID";TaxQueryField["Name"]="NAME";TaxQueryField["Slug"]="SLUG";TaxQueryField["TaxonomyId"]="TAXONOMY_ID";return TaxQueryField;}({});let TaxQueryOperator=/*#__PURE__*/function(TaxQueryOperator){TaxQueryOperator["And"]="AND";TaxQueryOperator["Exists"]="EXISTS";TaxQueryOperator["In"]="IN";TaxQueryOperator["NotExists"]="NOT_EXISTS";TaxQueryOperator["NotIn"]="NOT_IN";return TaxQueryOperator;}({});/** A taxonomy object */ /** A taxonomy object */ /** Connection to Taxonomy Nodes */ /** Edge between a Node and a connected Taxonomy */ /** Page Info on the connected TaxonomyConnectionEdge */ /** Allowed taxonomies */let TaxonomyEnum=/*#__PURE__*/function(TaxonomyEnum){TaxonomyEnum["Category"]="CATEGORY";TaxonomyEnum["Postformat"]="POSTFORMAT";TaxonomyEnum["Tag"]="TAG";return TaxonomyEnum;}({});/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */let TaxonomyIdTypeEnum=/*#__PURE__*/function(TaxonomyIdTypeEnum){TaxonomyIdTypeEnum["Id"]="ID";TaxonomyIdTypeEnum["Name"]="NAME";return TaxonomyIdTypeEnum;}({});/** Connection between the Taxonomy type and the ContentType type */ /** An edge in a connection */ /** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */ /** The template assigned to the node */ /** The template assigned to the node */ /** The template assigned to the node */ /** The template assigned to the node */ /** The template assigned to the node */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Terms are nodes within a Taxonomy, used to group and relate other nodes. */ /** Connection to TermNode Nodes */ /** Edge between a Node and a connected TermNode */ /** Page Info on the connected TermNodeConnectionEdge */ /** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */let TermNodeIdTypeEnum=/*#__PURE__*/function(TermNodeIdTypeEnum){TermNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";TermNodeIdTypeEnum["Id"]="ID";TermNodeIdTypeEnum["Name"]="NAME";TermNodeIdTypeEnum["Slug"]="SLUG";TermNodeIdTypeEnum["Uri"]="URI";return TermNodeIdTypeEnum;}({});/** Connection between the TermNode type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */ /** Connection between the TermNode type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */ /** Options for ordering the connection by */let TermObjectsConnectionOrderbyEnum=/*#__PURE__*/function(TermObjectsConnectionOrderbyEnum){TermObjectsConnectionOrderbyEnum["Count"]="COUNT";TermObjectsConnectionOrderbyEnum["Description"]="DESCRIPTION";TermObjectsConnectionOrderbyEnum["Name"]="NAME";TermObjectsConnectionOrderbyEnum["Slug"]="SLUG";TermObjectsConnectionOrderbyEnum["TermGroup"]="TERM_GROUP";TermObjectsConnectionOrderbyEnum["TermId"]="TERM_ID";TermObjectsConnectionOrderbyEnum["TermOrder"]="TERM_ORDER";return TermObjectsConnectionOrderbyEnum;}({});/** A theme object */ /** Connection to Theme Nodes */ /** Edge between a Node and a connected Theme */ /** Page Info on the connected ThemeConnectionEdge */ /** Any node that has a URI */ /** Input for the updateCategory mutation. */ /** The payload for the updateCategory mutation. */ /** Input for the updateComment mutation. */ /** The payload for the updateComment mutation. */ /** Input for the updateMediaItem mutation. */ /** The payload for the updateMediaItem mutation. */ /** Input for the updatePage mutation. */ /** The payload for the updatePage mutation. */ /** Input for the updatePostFormat mutation. */ /** The payload for the updatePostFormat mutation. */ /** Input for the updatePost mutation. */ /** The payload for the updatePost mutation. */ /** Input for the updateSettings mutation. */ /** The payload for the updateSettings mutation. */ /** Input for the updateTag mutation. */ /** The payload for the updateTag mutation. */ /** Input for the updateUser mutation. */ /** The payload for the updateUser mutation. */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** A User object */ /** Connection to User Nodes */ /** Edge between a Node and a connected User */ /** Page Info on the connected UserConnectionEdge */ /** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */let UserNodeIdTypeEnum=/*#__PURE__*/function(UserNodeIdTypeEnum){UserNodeIdTypeEnum["DatabaseId"]="DATABASE_ID";UserNodeIdTypeEnum["Email"]="EMAIL";UserNodeIdTypeEnum["Id"]="ID";UserNodeIdTypeEnum["Slug"]="SLUG";UserNodeIdTypeEnum["Uri"]="URI";UserNodeIdTypeEnum["Username"]="USERNAME";return UserNodeIdTypeEnum;}({});/** A user role object */ /** Connection to UserRole Nodes */ /** Edge between a Node and a connected UserRole */ /** Page Info on the connected UserRoleConnectionEdge */ /** Names of available user roles */let UserRoleEnum=/*#__PURE__*/function(UserRoleEnum){UserRoleEnum["Administrator"]="ADMINISTRATOR";UserRoleEnum["Author"]="AUTHOR";UserRoleEnum["Contributor"]="CONTRIBUTOR";UserRoleEnum["Editor"]="EDITOR";UserRoleEnum["Subscriber"]="SUBSCRIBER";return UserRoleEnum;}({});/** Connection between the User type and the Comment type */ /** An edge in a connection */ /** Page Info on the &quot;UserToCommentConnection&quot; */ /** Arguments for filtering the UserToCommentConnection connection */ /** Connection between the User type and the EnqueuedScript type */ /** An edge in a connection */ /** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */ /** Connection between the User type and the EnqueuedStylesheet type */ /** An edge in a connection */ /** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */ /** Connection between the User type and the mediaItem type */ /** An edge in a connection */ /** Page Info on the &quot;UserToMediaItemConnection&quot; */ /** Arguments for filtering the UserToMediaItemConnection connection */ /** Connection between the User type and the page type */ /** An edge in a connection */ /** Page Info on the &quot;UserToPageConnection&quot; */ /** Arguments for filtering the UserToPageConnection connection */ /** Connection between the User type and the post type */ /** An edge in a connection */ /** Page Info on the &quot;UserToPostConnection&quot; */ /** Arguments for filtering the UserToPostConnection connection */ /** Connection between the User type and the ContentNode type */ /** An edge in a connection */ /** Page Info on the &quot;UserToRevisionsConnection&quot; */ /** Arguments for filtering the UserToRevisionsConnection connection */ /** Connection between the User type and the UserRole type */ /** An edge in a connection */ /** Page Info on the &quot;UserToUserRoleConnection&quot; */ /** Field Group */ /** Field to order the connection by */let UsersConnectionOrderbyEnum=/*#__PURE__*/function(UsersConnectionOrderbyEnum){UsersConnectionOrderbyEnum["DisplayName"]="DISPLAY_NAME";UsersConnectionOrderbyEnum["Email"]="EMAIL";UsersConnectionOrderbyEnum["Login"]="LOGIN";UsersConnectionOrderbyEnum["LoginIn"]="LOGIN_IN";UsersConnectionOrderbyEnum["NiceName"]="NICE_NAME";UsersConnectionOrderbyEnum["NiceNameIn"]="NICE_NAME_IN";UsersConnectionOrderbyEnum["Registered"]="REGISTERED";UsersConnectionOrderbyEnum["Url"]="URL";return UsersConnectionOrderbyEnum;}({});/** Options for ordering the connection */ /** Column used for searching for users. */let UsersConnectionSearchColumnEnum=/*#__PURE__*/function(UsersConnectionSearchColumnEnum){UsersConnectionSearchColumnEnum["Email"]="EMAIL";UsersConnectionSearchColumnEnum["Id"]="ID";UsersConnectionSearchColumnEnum["Login"]="LOGIN";UsersConnectionSearchColumnEnum["Nicename"]="NICENAME";UsersConnectionSearchColumnEnum["Url"]="URL";return UsersConnectionSearchColumnEnum;}({});/** Information about pagination in a connection. */ /** The writing setting type */const NcmazFcImageFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}}]};const NcmazFcTermCardFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTermCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TermNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}}]};const NcmazFcTermsCardFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTermsCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RootQueryToTermNodeConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcTermCardFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcTermCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TermNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}}]};const NcmazFcPostMetaFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post_Ncpostmetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"reactionLikedList"}},{"kind":"Field","name":{"kind":"Name","value":"savedList"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"singlePageStyle"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}}]}}]};const NcmazFcPostCardFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"isSticky"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazGalleryImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image6"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image7"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image8"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post_Ncpostmetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"reactionLikedList"}},{"kind":"Field","name":{"kind":"Name","value":"savedList"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"singlePageStyle"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}}]}}]};const NcmazFcPostsEdegsFieldsFragmentDoc={"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostsEdegsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RootQueryToPostConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostCardFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post_Ncpostmetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"reactionLikedList"}},{"kind":"Field","name":{"kind":"Name","value":"savedList"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"singlePageStyle"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"isSticky"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazGalleryImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image6"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image7"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image8"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]};const PostsWithVariablesQueryDocument={"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postsWithVariablesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorIn"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryIn"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagIn"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentIn"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"field"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostObjectsConnectionOrderbyEnum"}},"defaultValue":{"kind":"EnumValue","value":"AUTHOR"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderEnum"}},"defaultValue":{"kind":"EnumValue","value":"ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorIn"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"categoryIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryIn"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tagIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagIn"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parentIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentIn"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"orderby"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"Variable","name":{"kind":"Name","value":"field"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostsEdegsFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostMetaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post_Ncpostmetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"reactionLikedList"}},{"kind":"Field","name":{"kind":"Name","value":"savedList"}},{"kind":"Field","name":{"kind":"Name","value":"showRightSidebar"}},{"kind":"Field","name":{"kind":"Name","value":"singlePageStyle"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"readingTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostCardFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedGmt"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"isSticky"}},{"kind":"Field","name":{"kind":"Name","value":"dateGmt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"commentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"ncUserMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"postFormats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ncmazVideoUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazAudioUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncPostMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostMetaFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ncmazGalleryImgs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image6"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image7"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image8"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcPostsEdegsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RootQueryToPostConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcPostCardFields"}}]}}]}}]}}]};const TermsWithVariablesQueryDocument={"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"termsWithVariablesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderEnum"}},"defaultValue":{"kind":"EnumValue","value":"ASC"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderby"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TermObjectsConnectionOrderbyEnum"}},"defaultValue":{"kind":"EnumValue","value":"COUNT"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taxonomies"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaxonomyEnum"}}},"defaultValue":{"kind":"EnumValue","value":"CATEGORY"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"terms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"taxonomies"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taxonomies"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"orderby"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderby"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ncTaxonomyMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NcmazFcImageFields"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NcmazFcImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"databaseId"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}}]}}]};

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

/***/ "./src/contains/contants.ts":
/*!**********************************!*\
  !*** ./src/contains/contants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   avatarColors: () => (/* binding */ avatarColors)
/* harmony export */ });
const avatarColors = ["#ffdd00", "#fbb034", "#ff4c4c", "#c1d82f", "#f48924", "#7ac143", "#30c39e", "#06BCAE", "#0695BC", "#037ef3", "#146eb4", "#8e43e7", "#ea1d5d", "#fc636b", "#ff6319", "#e01f3d", "#a0ac48", "#00d1b2", "#472f92", "#388ed1", "#a6192e", "#4a8594", "#7B9FAB", "#1393BD", "#5E13BD", "#E208A7"];

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
const NC_POSTS_EDGES_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)(`
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
const NC_IMAGE_MEDIA_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)(`
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
const NC_POST_META_DATA_FRAGMENT = (0,_generated___WEBPACK_IMPORTED_MODULE_0__.graphql)(`
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

/***/ "./src/frontend-components/Card2/Card2.tsx":
/*!*************************************************!*\
  !*** ./src/frontend-components/Card2/Card2.tsx ***!
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
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostTypeFeaturedIcon/PostTypeFeaturedIcon */ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx");
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAndComment/PostCardLikeAndComment */ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx");
/* harmony import */ var _utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/getPostDataFromPostFragment */ "./src/utils/getPostDataFromPostFragment.ts");
/* harmony import */ var _PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PostCardMeta/PostCardMeta */ "./src/frontend-components/PostCardMeta/PostCardMeta.tsx");
/* harmony import */ var _PostCardSaveAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PostCardSaveAction */ "./src/frontend-components/PostCardSaveAction.tsx");









const Card2 = ({
  className = "",
  size = "normal",
  post
}) => {
  const {
    title,
    link,
    date,
    categories,
    excerpt,
    author,
    postFormats,
    featuredImage,
    ncPostMetaData
  } = (0,_utils_getPostDataFromPostFragment__WEBPACK_IMPORTED_MODULE_6__.getPostDataFromPostFragment)(post);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card2 group relative flex flex-col ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] z-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fill: true,
    sizes: "(max-width: 600px) 480px, 800px",
    className: "object-cover rounded-3xl",
    src: featuredImage?.sourceUrl || undefined
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "absolute bottom-2 left-2",
    postType: postFormats?.edges[0]?.node?.slug || "post",
    wrapSize: "w-8 h-8",
    iconSize: "w-4 h-4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "flex flex-wrap space-x-2 absolute top-3 left-3",
    itemClass: "relative",
    categories: categories
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-5 px-4 flex flex-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardMeta_PostCardMeta__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "relative text-sm",
    avatarSize: "h-8 w-8 text-sm",
    meta: post
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 ${size === "large" ? "text-base sm:text-lg md:text-xl" : "text-base"}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "line-clamp-2",
    title: title || ""
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block text-neutral-500 dark:text-neutral-400 text-[15px] leading-6 "
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione beatae quasi et, reprehenderit alias veritatis nostrum iste sed laboriosam eveniet possimus.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-5 border-t border-neutral-200 dark:border-neutral-700"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardSaveAction__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "relative",
    readingTime: ncPostMetaData?.readingTime || 2
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card2);

/***/ }),

/***/ "./src/frontend-components/Card9/Card9.tsx":
/*!*************************************************!*\
  !*** ./src/frontend-components/Card9/Card9.tsx ***!
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
/* harmony import */ var _CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBadgeList/CategoryBadgeList */ "./src/frontend-components/CategoryBadgeList/CategoryBadgeList.tsx");
/* harmony import */ var _NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcImage/NcImage */ "./src/frontend-components/NcImage/NcImage.tsx");
/* harmony import */ var _PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PostCardDropdownShare/PostCardDropdownShare */ "./src/frontend-components/PostCardDropdownShare/PostCardDropdownShare.tsx");
/* harmony import */ var _PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostCardLikeAndComment/PostCardLikeAndComment */ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx");
/* harmony import */ var _PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostTypeFeaturedIcon/PostTypeFeaturedIcon */ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.ts");








const Card9 = ({
  className = "h-full",
  ratio = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
  post,
  hoverClass = ""
}) => {
  const {
    title,
    link,
    featuredImage,
    categories,
    author,
    date,
    postFormats
  } = post;
  const renderMeta = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "inline-flex items-center text-xs text-neutral-300 "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: link,
      className: "block relative overflow-hidden"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "block text-lg font-semibold text-white "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "line-clamp-2",
      title: title
    }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center mt-2.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "block text-neutral-200 hover:text-white font-medium truncate py-1"
    }, author?.node.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mx-[6px] font-medium"
    }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "font-normal flex-shrink-0"
    }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_7__["default"])(date)))));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${hoverClass} ${className}`,
    "data-nc-id": "Card9"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 duration-300"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAndComment_PostCardLikeAndComment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "relative",
    postData: post
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardDropdownShare_PostCardDropdownShare__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `flex items-start relative w-full ${ratio}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcImage_NcImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    containerClassName: "absolute inset-0 rounded-3xl",
    className: "object-cover w-full h-full rounded-3xl",
    src: featuredImage?.node.sourceUrl,
    srcSet: featuredImage?.node.srcSet
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostTypeFeaturedIcon_PostTypeFeaturedIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "absolute top-3 left-3 group-hover:hidden",
    postType: postFormats.edges[0]?.node.slug,
    wrapSize: "w-7 h-7",
    iconSize: "w-4 h-4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    className: "absolute inset-0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CategoryBadgeList_CategoryBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    categories: categories
  })), renderMeta()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card9);

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

/***/ "./src/frontend-components/NcBookmark.tsx":
/*!************************************************!*\
  !*** ./src/frontend-components/NcBookmark.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
"use client";



const NcBookmark = ({
  containerClassName = "h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700",
  bookmarked = false
}) => {
  const [isBookmarked, setIsBookmarked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(bookmarked);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `nc-NcBookmark relative rounded-full flex items-center justify-center ${containerClassName}`,
    title: "Save to reading list",
    onClick: () => setIsBookmarked(!isBookmarked)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    fill: isBookmarked ? "currentColor" : "none",
    stroke: "currentColor",
    className: "w-[18px] h-[18px]"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NcBookmark);

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


const NcImage = ({
  containerClassName = "",
  alt = "nc-imgs",
  className = "object-cover w-full h-full",
  loading = "lazy",
  src,
  sizes,
  fill = false,
  ...args
}) => {
  const renderLoadingPlaceholder = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "h-2/4 max-w-[50%]"
    }));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-NcImage ${fill ? "absolute inset-0" : ""} ${containerClassName}`,
    "data-nc-id": "NcImage"
  }, !!src && src.includes("http") ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: src,
    alt: alt,
    className: ` ${fill ? "absolute inset-0 w-full h-full" : ""} ${className}`,
    loading: loading,
    ...args
  }) : renderLoadingPlaceholder());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NcImage);

/***/ }),

/***/ "./src/frontend-components/PostCardCommentBtn/PostCardCommentBtn.tsx":
/*!***************************************************************************!*\
  !*** ./src/frontend-components/PostCardCommentBtn/PostCardCommentBtn.tsx ***!
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


const PostCardCommentBtn = ({
  className = "flex px-3 h-8 text-xs",
  isATagOnSingle = false
}) => {
  if (isATagOnSingle) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#comments",
      className: `nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 ${className} `,
      title: "Comments"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "24",
      height: "24",
      fill: "none",
      viewBox: "0 0 24 24"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1",
      d: "M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ml-1 text-neutral-900 dark:text-neutral-200"
    }, "110"));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/single/demo-slug#comments",
    className: `nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 ${className} `,
    title: "Comments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1",
    d: "M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ml-1 text-neutral-900 dark:text-neutral-200"
  }, "110"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardCommentBtn);

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
/* harmony import */ var _utils_convertNumbThousand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/convertNumbThousand */ "./src/utils/convertNumbThousand.ts");



const PostCardLikeAction = ({
  className = "px-3 h-8 text-xs",
  likeCount = 34,
  liked = false
}) => {
  const [isLiked, setisLiked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(liked);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors ${className} ${isLiked ? "text-rose-600 bg-rose-50 dark:bg-rose-100" : "text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500"}`,
    onClick: () => setisLiked(!isLiked),
    title: "Liked"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    fill: isLiked ? "currentColor" : "none",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1",
    d: "M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z",
    clipRule: "evenodd"
  })), likeCount && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `ml-1 ${isLiked ? "text-rose-600" : "text-neutral-900 dark:text-neutral-200"}`
  }, (0,_utils_convertNumbThousand__WEBPACK_IMPORTED_MODULE_2__["default"])(likeCount)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardLikeAction);

/***/ }),

/***/ "./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx":
/*!***********************************************************************************!*\
  !*** ./src/frontend-components/PostCardLikeAndComment/PostCardLikeAndComment.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostCardLikeAction_PostCardLikeAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PostCardLikeAction/PostCardLikeAction */ "./src/frontend-components/PostCardLikeAction/PostCardLikeAction.tsx");
/* harmony import */ var _PostCardCommentBtn_PostCardCommentBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PostCardCommentBtn/PostCardCommentBtn */ "./src/frontend-components/PostCardCommentBtn/PostCardCommentBtn.tsx");




const PostCardLikeAndComment = ({
  className = "",
  itemClass = "px-3 h-8 text-xs",
  hiddenCommentOnMobile = true,
  useOnSinglePage = false
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardLikeAction_PostCardLikeAction__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: itemClass
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PostCardCommentBtn_PostCardCommentBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: `${hiddenCommentOnMobile ? "hidden sm:flex" : "flex"}  ${itemClass}`,
    isATagOnSingle: useOnSinglePage
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardLikeAndComment);

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
  className = "leading-none text-xs",
  meta,
  hiddenAvatar = false,
  avatarSize = "h-7 w-7 text-sm"
}) => {
  const {
    date,
    author
  } = meta;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "relative flex items-center space-x-2 rtl:space-x-reverse"
  }, !hiddenAvatar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    radius: "rounded-full",
    sizeClass: avatarSize,
    imgUrl: author.avatar,
    userName: author.displayName
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium"
  }, author.displayName)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium"
  }, "\xB7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-neutral-500 dark:text-neutral-400 font-normal"
  }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_3__["default"])(date))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardMeta);

/***/ }),

/***/ "./src/frontend-components/PostCardSaveAction.tsx":
/*!********************************************************!*\
  !*** ./src/frontend-components/PostCardSaveAction.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NcBookmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NcBookmark */ "./src/frontend-components/NcBookmark.tsx");



const PostCardSaveAction = ({
  className = "",
  bookmarkClass,
  hidenReadingTime = true,
  readingTime = 3
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`
  }, !hidenReadingTime && !!readingTime && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, readingTime, " min read"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcBookmark__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerClassName: bookmarkClass
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardSaveAction);

/***/ }),

/***/ "./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx":
/*!*******************************************************************************!*\
  !*** ./src/frontend-components/PostTypeFeaturedIcon/PostTypeFeaturedIcon.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PostTypeFeaturedIcon = ({
  className = "",
  postType = "Standard",
  onClick = () => {},
  wrapSize = "w-11 h-11",
  iconSize = "w-6 h-6"
}) => {
  const renderMediaIcon = () => {
    if (postType?.includes("video")) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: iconSize,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    }
    if (postType?.includes("audio")) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: iconSize,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M20.8398 16.8V12",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M9.40039 9.5199L20.8404 6.3999",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    }
    if (postType?.includes("gallery")) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: iconSize,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    }
    return null;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-PostTypeFeaturedIcon ${className}`,
    "data-nc-id": "PostTypeFeaturedIcon",
    onClick: onClick
  }, !!postType && postType !== "Standard" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white ${wrapSize}`
  }, renderMediaIcon()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTypeFeaturedIcon);

/***/ }),

/***/ "./src/frontend-components/SectionMagazines/SectionMagazine3.tsx":
/*!***********************************************************************!*\
  !*** ./src/frontend-components/SectionMagazines/SectionMagazine3.tsx ***!
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
/* harmony import */ var _Card2_Card2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card2/Card2 */ "./src/frontend-components/Card2/Card2.tsx");
/* harmony import */ var _Card9_Card9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card9/Card9 */ "./src/frontend-components/Card9/Card9.tsx");




const SectionMagazine3 = ({
  activePosts
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
  }, activePosts[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card2_Card2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "large",
    post: activePosts[0].node
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
  }, activePosts.filter((_, i) => i < 5 && i >= 1).map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card9_Card9__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ratio: "aspect-w-3 aspect-h-3",
    key: index,
    post: item.node
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionMagazine3);

/***/ }),

/***/ "./src/utils/convertNumbThousand.ts":
/*!******************************************!*\
  !*** ./src/utils/convertNumbThousand.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convertNumbThousand)
/* harmony export */ });
function convertNumbThousand(number) {
  let str = "";
  if (number < 1000) {
    str = String(number);
  } else {
    str = (number / 1000).toFixed(1) + "k";
  }
  return str;
}

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

/***/ })

}]);
//# sourceMappingURL=src_frontend-components_SectionMagazines_SectionMagazine3_tsx.js.map