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
    "\n\tfragment NcmazFcTagShortFieldsFragment on Tag {\n\t\t__typename\n\t\tname\n\t\turi\n\t\tdatabaseId\n\t\tcount\n\t}\n": types.NcmazFcTagShortFieldsFragmentFragmentDoc,
    "\n\tfragment NcmazFcTagFullFieldsFragment on Tag {\n\t\t...NcmazFcTagShortFieldsFragment\n\t\tdescription\n\t\tcount\n\t}\n": types.NcmazFcTagFullFieldsFragmentFragmentDoc,
    "\n\tfragment NcmazFcCategoryFullFieldsFragment on Category {\n\t\t__typename\n\t\tdatabaseId\n\t\tdescription\n\t\tname\n\t\turi\n\t\tcount\n\t\tncTaxonomyMeta {\n\t\t\tcolor\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcCategoryFullFieldsFragmentFragmentDoc,
    "\n\tfragment NcmazFcCategoryCardFieldsNotImage on Category {\n\t\t__typename\n\t\tname\n\t\turi\n\t\tcount\n\t\tdatabaseId\n\t\tncTaxonomyMeta {\n\t\t\tcolor\n\t\t}\n\t}\n": types.NcmazFcCategoryCardFieldsNotImageFragmentDoc,
    "\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\tnodes {\n\t\t\t...NcmazFcPostCardFields\n\t\t}\n\t}\n": types.NcmazFcPostsEdegsFieldsFragmentDoc,
    "\n\tfragment NcmazFcPostFullFields on Post {\n\t\t__typename\n\t\turi\n\t\tmodified\n\t\tdate\n\t\tcommentStatus\n\t\tstatus\n\t\tcommentCount\n\t\texcerpt\n\t\tdatabaseId\n\t\ttitle\n\t\tcontent\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tdescription\n\t\t\t\t...NcmazFcUserShortForPostCardFragment\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcCategoryCardFieldsNotImage\n\t\t\t}\n\t\t}\n\t\ttags(first: 20) {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcTagShortFieldsFragment\n\t\t\t}\n\t\t}\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFullFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcPostFullFieldsFragmentDoc,
    "\n\tfragment NcmazFcPostCardFields on Post {\n\t\t...NcmazFcPostCardFieldsNOTNcmazGalleryImgs\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcPostCardFieldsFragmentDoc,
    "\n\tfragment NcmazFcPostCardFieldsNOTNcmazGalleryImgs on Post {\n\t\t__typename\n\t\tdatabaseId\n\t\ttitle\n\t\turi\n\t\tstatus\n\t\tmodified\n\t\tdate\n\t\tcommentStatus\n\t\tcommentCount\n\t\texcerpt\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\t...NcmazFcUserShortForPostCardFragment\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcCategoryCardFieldsNotImage\n\t\t\t}\n\t\t}\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tnodes {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t}\n": types.NcmazFcPostCardFieldsNotNcmazGalleryImgsFragmentDoc,
    "\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\taltText\n\t\tdatabaseId\n\t\tsourceUrl\n\t}\n": types.NcmazFcImageFieldsFragmentDoc,
    "\n\tfragment NcmazFcImageHasDetailFields on MediaItem {\n\t\t__typename\n\t\taltText\n\t\tdatabaseId\n\t\tsourceUrl\n\t\tcaption\n\t\tmediaDetails {\n\t\t\theight\n\t\t\twidth\n\t\t}\n\t}\n": types.NcmazFcImageHasDetailFieldsFragmentDoc,
    "\n\tfragment NcmazFcPostMetaFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t}\n": types.NcmazFcPostMetaFieldsFragmentDoc,
    "\n\tfragment NcmazFcPostMetaFullFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t\tsavedsCount\n\t\tshowRightSidebar\n\t\ttemplate\n\t}\n": types.NcmazFcPostMetaFullFieldsFragmentDoc,
    "\n\tfragment NcmazFcUserShortForPostCardFragment on User {\n\t\tdatabaseId\n\t\turi\n\t\tusername\n\t\tname\n\t\tncUserMeta {\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcUserShortForPostCardFragmentFragmentDoc,
    "\n\tfragment NcmazFcUserFullFields on User {\n\t\tid\n\t\tdatabaseId\n\t\turi\n\t\tusername\n\t\tname\n\t\tdescription\n\t\tncUserMeta {\n\t\t\tbuymeacoffeUrl\n\t\t\tcolor\n\t\t\tfacebookUrl\n\t\t\tgithubUrl\n\t\t\tinstagramUrl\n\t\t\tlinkedinUrl\n\t\t\tmediumUrl\n\t\t\tncBio\n\t\t\tpinterestUrl\n\t\t\ttwitchUrl\n\t\t\ttwitterUrl\n\t\t\tvimeoUrl\n\t\t\twebsiteUrl\n\t\t\tyoutubeUrl\n\t\t\ttiktokUrl\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.NcmazFcUserFullFieldsFragmentDoc,
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
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcTagShortFieldsFragment on Tag {\n\t\t__typename\n\t\tname\n\t\turi\n\t\tdatabaseId\n\t\tcount\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcTagShortFieldsFragment on Tag {\n\t\t__typename\n\t\tname\n\t\turi\n\t\tdatabaseId\n\t\tcount\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcTagFullFieldsFragment on Tag {\n\t\t...NcmazFcTagShortFieldsFragment\n\t\tdescription\n\t\tcount\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcTagFullFieldsFragment on Tag {\n\t\t...NcmazFcTagShortFieldsFragment\n\t\tdescription\n\t\tcount\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcCategoryFullFieldsFragment on Category {\n\t\t__typename\n\t\tdatabaseId\n\t\tdescription\n\t\tname\n\t\turi\n\t\tcount\n\t\tncTaxonomyMeta {\n\t\t\tcolor\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcCategoryFullFieldsFragment on Category {\n\t\t__typename\n\t\tdatabaseId\n\t\tdescription\n\t\tname\n\t\turi\n\t\tcount\n\t\tncTaxonomyMeta {\n\t\t\tcolor\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcCategoryCardFieldsNotImage on Category {\n\t\t__typename\n\t\tname\n\t\turi\n\t\tcount\n\t\tdatabaseId\n\t\tncTaxonomyMeta {\n\t\t\tcolor\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcCategoryCardFieldsNotImage on Category {\n\t\t__typename\n\t\tname\n\t\turi\n\t\tcount\n\t\tdatabaseId\n\t\tncTaxonomyMeta {\n\t\t\tcolor\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\tnodes {\n\t\t\t...NcmazFcPostCardFields\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostsEdegsFields on RootQueryToPostConnection {\n\t\tnodes {\n\t\t\t...NcmazFcPostCardFields\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcPostFullFields on Post {\n\t\t__typename\n\t\turi\n\t\tmodified\n\t\tdate\n\t\tcommentStatus\n\t\tstatus\n\t\tcommentCount\n\t\texcerpt\n\t\tdatabaseId\n\t\ttitle\n\t\tcontent\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tdescription\n\t\t\t\t...NcmazFcUserShortForPostCardFragment\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcCategoryCardFieldsNotImage\n\t\t\t}\n\t\t}\n\t\ttags(first: 20) {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcTagShortFieldsFragment\n\t\t\t}\n\t\t}\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFullFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostFullFields on Post {\n\t\t__typename\n\t\turi\n\t\tmodified\n\t\tdate\n\t\tcommentStatus\n\t\tstatus\n\t\tcommentCount\n\t\texcerpt\n\t\tdatabaseId\n\t\ttitle\n\t\tcontent\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\tdescription\n\t\t\t\t...NcmazFcUserShortForPostCardFragment\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcCategoryCardFieldsNotImage\n\t\t\t}\n\t\t}\n\t\ttags(first: 20) {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcTagShortFieldsFragment\n\t\t\t}\n\t\t}\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tnodes {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFullFields\n\t\t}\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageHasDetailFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcPostCardFields on Post {\n\t\t...NcmazFcPostCardFieldsNOTNcmazGalleryImgs\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostCardFields on Post {\n\t\t...NcmazFcPostCardFieldsNOTNcmazGalleryImgs\n\t\tncmazGalleryImgs {\n\t\t\timage1 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage2 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage3 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage4 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage5 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage6 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage7 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\timage8 {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcPostCardFieldsNOTNcmazGalleryImgs on Post {\n\t\t__typename\n\t\tdatabaseId\n\t\ttitle\n\t\turi\n\t\tstatus\n\t\tmodified\n\t\tdate\n\t\tcommentStatus\n\t\tcommentCount\n\t\texcerpt\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\t...NcmazFcUserShortForPostCardFragment\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcCategoryCardFieldsNotImage\n\t\t\t}\n\t\t}\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tnodes {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostCardFieldsNOTNcmazGalleryImgs on Post {\n\t\t__typename\n\t\tdatabaseId\n\t\ttitle\n\t\turi\n\t\tstatus\n\t\tmodified\n\t\tdate\n\t\tcommentStatus\n\t\tcommentCount\n\t\texcerpt\n\t\tauthor {\n\t\t\tnode {\n\t\t\t\t...NcmazFcUserShortForPostCardFragment\n\t\t\t}\n\t\t}\n\t\tcategories {\n\t\t\tnodes {\n\t\t\t\t...NcmazFcCategoryCardFieldsNotImage\n\t\t\t}\n\t\t}\n\t\tfeaturedImage {\n\t\t\tnode {\n\t\t\t\t...NcmazFcImageFields\n\t\t\t}\n\t\t}\n\t\tpostFormats {\n\t\t\tnodes {\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tncmazVideoUrl {\n\t\t\tvideoUrl\n\t\t}\n\t\tncmazAudioUrl {\n\t\t\taudioUrl\n\t\t}\n\t\tncPostMetaData {\n\t\t\t...NcmazFcPostMetaFields\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\taltText\n\t\tdatabaseId\n\t\tsourceUrl\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcImageFields on MediaItem {\n\t\t__typename\n\t\taltText\n\t\tdatabaseId\n\t\tsourceUrl\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcImageHasDetailFields on MediaItem {\n\t\t__typename\n\t\taltText\n\t\tdatabaseId\n\t\tsourceUrl\n\t\tcaption\n\t\tmediaDetails {\n\t\t\theight\n\t\t\twidth\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcImageHasDetailFields on MediaItem {\n\t\t__typename\n\t\taltText\n\t\tdatabaseId\n\t\tsourceUrl\n\t\tcaption\n\t\tmediaDetails {\n\t\t\theight\n\t\t\twidth\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcPostMetaFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostMetaFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcPostMetaFullFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t\tsavedsCount\n\t\tshowRightSidebar\n\t\ttemplate\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcPostMetaFullFields on NcPostMetaData {\n\t\t__typename\n\t\tviewsCount\n\t\treadingTime\n\t\tlikesCount\n\t\tsavedsCount\n\t\tshowRightSidebar\n\t\ttemplate\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcUserShortForPostCardFragment on User {\n\t\tdatabaseId\n\t\turi\n\t\tusername\n\t\tname\n\t\tncUserMeta {\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcUserShortForPostCardFragment on User {\n\t\tdatabaseId\n\t\turi\n\t\tusername\n\t\tname\n\t\tncUserMeta {\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tfragment NcmazFcUserFullFields on User {\n\t\tid\n\t\tdatabaseId\n\t\turi\n\t\tusername\n\t\tname\n\t\tdescription\n\t\tncUserMeta {\n\t\t\tbuymeacoffeUrl\n\t\t\tcolor\n\t\t\tfacebookUrl\n\t\t\tgithubUrl\n\t\t\tinstagramUrl\n\t\t\tlinkedinUrl\n\t\t\tmediumUrl\n\t\t\tncBio\n\t\t\tpinterestUrl\n\t\t\ttwitchUrl\n\t\t\ttwitterUrl\n\t\t\tvimeoUrl\n\t\t\twebsiteUrl\n\t\t\tyoutubeUrl\n\t\t\ttiktokUrl\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment NcmazFcUserFullFields on User {\n\t\tid\n\t\tdatabaseId\n\t\turi\n\t\tusername\n\t\tname\n\t\tdescription\n\t\tncUserMeta {\n\t\t\tbuymeacoffeUrl\n\t\t\tcolor\n\t\t\tfacebookUrl\n\t\t\tgithubUrl\n\t\t\tinstagramUrl\n\t\t\tlinkedinUrl\n\t\t\tmediumUrl\n\t\t\tncBio\n\t\t\tpinterestUrl\n\t\t\ttwitchUrl\n\t\t\ttwitterUrl\n\t\t\tvimeoUrl\n\t\t\twebsiteUrl\n\t\t\tyoutubeUrl\n\t\t\ttiktokUrl\n\t\t\tfeaturedImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tnode {\n\t\t\t\t\t...NcmazFcImageFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;