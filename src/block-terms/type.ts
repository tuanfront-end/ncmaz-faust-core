export interface TermRoot {
	id: string;
	count: number;
	name: string;
	uri: string;
	databaseId: number;
	taxonomyName: string;
	ncTaxonomyMeta: NcTaxonomyMeta;
}

interface NcTaxonomyMeta {
	color: string[];
	featuredImage: FeaturedImage;
}

interface FeaturedImage {
	node: Node;
}

interface Node {
	__typename: string;
	altText: string;
	databaseId: number;
	sourceUrl: string;
}
