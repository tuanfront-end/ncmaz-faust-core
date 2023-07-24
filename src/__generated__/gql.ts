/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n\tfragment NcmazFcTermCardFields on TermNode {\n\t\t__typename\n\t\tid\n\t\tcount\n\t\tname\n\t\tslug\n\t\tdatabaseId\n\t\tdescription\n\t\tlink\n\t\ttaxonomyName\n\t\t... on Category {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t... on Tag {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcTermCardFieldsFragmentDoc,
    "\n\tfragment NcmazFcTermsCardFields on RootQueryToTermNodeConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcTermCardFields\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcTermsCardFieldsFragmentDoc,
    "\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcPostCardFields\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcPostsEdegsFieldsFragmentDoc,
    "\n\tfragment NcmazFcPostCardFields on Post {\n\t\t__typename\n\t\tid\n\t\tlink\n\t\tstatus\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tid\n\t\t\t\tavatar {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\turl\n\t\t\t\turi\n\t\t\t\tusername\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tncUserMeta {\n\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tlink\n\t\t\t\t\tname\n\t\t\t\t\turi\n\t\t\t\t\tslug\n\t\t\t\t\tcount\n\t\t\t\t\tcategoryId\n\t\t\t\t\tncTaxonomyMeta {\n\t\t\t\t\t\tcolor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcommentCount\n\t\tdate\n\t\texcerpt\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdatabaseId\n\t\tslug\n\t\ttitle\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcPostCardFieldsFragmentDoc,
    "\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\tid\n\t\taltText\n\t\tcaption\n\t\tdatabaseId\n\t\tsizes\n\t\tsourceUrl\n\t\tsrcSet\n\t}\n": types.NcmazFcImageFieldsFragmentDoc,
    "\n\tfragment NcmazFcPostMetaFields on Post_Ncpostmetadata {\n\t\t__typename\n\t\treactionLikedList\n\t\tsavedList\n\t\tshowRightSidebar\n\t\tsinglePageStyle\n\t\tviewsCount\n\t\treadingTime\n\t}\n": types.NcmazFcPostMetaFieldsFragmentDoc,
    "\n\tquery postsWithVariablesQuery(\n\t\t$authorIn: [ID] = \"\"\n\t\t$categoryIn: [ID] = \"\"\n\t\t$tagIn: [ID] = \"\"\n\t\t$search: String = \"\"\n\t\t$parentIn: [ID] = \"\"\n\t\t$first: Int = 10\n\t\t$field: PostObjectsConnectionOrderbyEnum = AUTHOR\n\t\t$order: OrderEnum = ASC\n\t) {\n\t\tposts(\n\t\t\twhere: {\n\t\t\t\tauthorIn: $authorIn\n\t\t\t\tcategoryIn: $categoryIn\n\t\t\t\ttagIn: $tagIn\n\t\t\t\tsearch: $search\n\t\t\t\tparentIn: $parentIn\n\t\t\t\torderby: { field: $field, order: $order }\n\t\t\t}\n\t\t\tfirst: $first\n\t\t) {\n\t\t\t...NcmazFcPostsEdegsFields\n\t\t}\n\t}\n": types.PostsWithVariablesQueryDocument,
    "\n\tfragment Abcsahfkhafe on TermNode {\n\t\t__typename\n\t\tdatabaseId\n\t\tdescription\n\t\tlink\n\t\ttaxonomyName\n\t}\n": types.AbcsahfkhafeFragmentDoc,
    "\n\tquery termsWithVariablesQuery(\n\t\t$first: Int = 10\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$taxonomies: [TaxonomyEnum] = CATEGORY\n\t) {\n\t\tterms(\n\t\t\twhere: { taxonomies: $taxonomies, orderby: $orderby, order: $order }\n\t\t\tfirst: $first\n\t\t) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t__typename\n\t\t\t\t\tid\n\t\t\t\t\tcount\n\t\t\t\t\t...Abcsahfkhafe\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.TermsWithVariablesQueryDocument,
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
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment NcmazFcTermCardFields on TermNode {\n\t\t__typename\n\t\tid\n\t\tcount\n\t\tname\n\t\tslug\n\t\tdatabaseId\n\t\tdescription\n\t\tlink\n\t\ttaxonomyName\n\t\t... on Category {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t... on Tag {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcTermCardFields on TermNode {\n\t\t__typename\n\t\tid\n\t\tcount\n\t\tname\n\t\tslug\n\t\tdatabaseId\n\t\tdescription\n\t\tlink\n\t\ttaxonomyName\n\t\t... on Category {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t... on Tag {\n\t\t\tid\n\t\t\tname\n\t\t\tncTaxonomyMeta {\n\t\t\t\tcolor\n\t\t\t\tfeaturedImage {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment NcmazFcTermsCardFields on RootQueryToTermNodeConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcTermCardFields\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcTermsCardFields on RootQueryToTermNodeConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcTermCardFields\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcPostCardFields\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\t__typename\n\t\tedges {\n\t\t\tnode {\n\t\t\t\t...NcmazFcPostCardFields\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment NcmazFcPostCardFields on Post {\n\t\t__typename\n\t\tid\n\t\tlink\n\t\tstatus\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tid\n\t\t\t\tavatar {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\turl\n\t\t\t\turi\n\t\t\t\tusername\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tncUserMeta {\n\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tlink\n\t\t\t\t\tname\n\t\t\t\t\turi\n\t\t\t\t\tslug\n\t\t\t\t\tcount\n\t\t\t\t\tcategoryId\n\t\t\t\t\tncTaxonomyMeta {\n\t\t\t\t\t\tcolor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcommentCount\n\t\tdate\n\t\texcerpt\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdatabaseId\n\t\tslug\n\t\ttitle\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostCardFields on Post {\n\t\t__typename\n\t\tid\n\t\tlink\n\t\tstatus\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tid\n\t\t\t\tavatar {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\turl\n\t\t\t\turi\n\t\t\t\tusername\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tncUserMeta {\n\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tlink\n\t\t\t\t\tname\n\t\t\t\t\turi\n\t\t\t\t\tslug\n\t\t\t\t\tcount\n\t\t\t\t\tcategoryId\n\t\t\t\t\tncTaxonomyMeta {\n\t\t\t\t\t\tcolor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tcommentCount\n\t\tdate\n\t\texcerpt\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdatabaseId\n\t\tslug\n\t\ttitle\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\tid\n\t\taltText\n\t\tcaption\n\t\tdatabaseId\n\t\tsizes\n\t\tsourceUrl\n\t\tsrcSet\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\tid\n\t\taltText\n\t\tcaption\n\t\tdatabaseId\n\t\tsizes\n\t\tsourceUrl\n\t\tsrcSet\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment NcmazFcPostMetaFields on Post_Ncpostmetadata {\n\t\t__typename\n\t\treactionLikedList\n\t\tsavedList\n\t\tshowRightSidebar\n\t\tsinglePageStyle\n\t\tviewsCount\n\t\treadingTime\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostMetaFields on Post_Ncpostmetadata {\n\t\t__typename\n\t\treactionLikedList\n\t\tsavedList\n\t\tshowRightSidebar\n\t\tsinglePageStyle\n\t\tviewsCount\n\t\treadingTime\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery postsWithVariablesQuery(\n\t\t$authorIn: [ID] = \"\"\n\t\t$categoryIn: [ID] = \"\"\n\t\t$tagIn: [ID] = \"\"\n\t\t$search: String = \"\"\n\t\t$parentIn: [ID] = \"\"\n\t\t$first: Int = 10\n\t\t$field: PostObjectsConnectionOrderbyEnum = AUTHOR\n\t\t$order: OrderEnum = ASC\n\t) {\n\t\tposts(\n\t\t\twhere: {\n\t\t\t\tauthorIn: $authorIn\n\t\t\t\tcategoryIn: $categoryIn\n\t\t\t\ttagIn: $tagIn\n\t\t\t\tsearch: $search\n\t\t\t\tparentIn: $parentIn\n\t\t\t\torderby: { field: $field, order: $order }\n\t\t\t}\n\t\t\tfirst: $first\n\t\t) {\n\t\t\t...NcmazFcPostsEdegsFields\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery postsWithVariablesQuery(\n\t\t$authorIn: [ID] = \"\"\n\t\t$categoryIn: [ID] = \"\"\n\t\t$tagIn: [ID] = \"\"\n\t\t$search: String = \"\"\n\t\t$parentIn: [ID] = \"\"\n\t\t$first: Int = 10\n\t\t$field: PostObjectsConnectionOrderbyEnum = AUTHOR\n\t\t$order: OrderEnum = ASC\n\t) {\n\t\tposts(\n\t\t\twhere: {\n\t\t\t\tauthorIn: $authorIn\n\t\t\t\tcategoryIn: $categoryIn\n\t\t\t\ttagIn: $tagIn\n\t\t\t\tsearch: $search\n\t\t\t\tparentIn: $parentIn\n\t\t\t\torderby: { field: $field, order: $order }\n\t\t\t}\n\t\t\tfirst: $first\n\t\t) {\n\t\t\t...NcmazFcPostsEdegsFields\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment Abcsahfkhafe on TermNode {\n\t\t__typename\n\t\tdatabaseId\n\t\tdescription\n\t\tlink\n\t\ttaxonomyName\n\t}\n"): (typeof documents)["\n\tfragment Abcsahfkhafe on TermNode {\n\t\t__typename\n\t\tdatabaseId\n\t\tdescription\n\t\tlink\n\t\ttaxonomyName\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery termsWithVariablesQuery(\n\t\t$first: Int = 10\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$taxonomies: [TaxonomyEnum] = CATEGORY\n\t) {\n\t\tterms(\n\t\t\twhere: { taxonomies: $taxonomies, orderby: $orderby, order: $order }\n\t\t\tfirst: $first\n\t\t) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t__typename\n\t\t\t\t\tid\n\t\t\t\t\tcount\n\t\t\t\t\t...Abcsahfkhafe\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery termsWithVariablesQuery(\n\t\t$first: Int = 10\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$taxonomies: [TaxonomyEnum] = CATEGORY\n\t) {\n\t\tterms(\n\t\t\twhere: { taxonomies: $taxonomies, orderby: $orderby, order: $order }\n\t\t\tfirst: $first\n\t\t) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\t__typename\n\t\t\t\t\tid\n\t\t\t\t\tcount\n\t\t\t\t\t...Abcsahfkhafe\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;