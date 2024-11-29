export interface PostRoot {
	__typename?: string;
	databaseId?: number;
	title?: string;
	uri?: string;
	modified?: string;
	date?: string;
	commentStatus?: string;
	commentCount?: any;
	status?: string;
	excerpt?: string;
	author?: Author;
	categories?: Categories;
	featuredImage?: FeaturedImage2;
	postFormats?: PostFormats;
	ncmazVideoUrl?: NcmazVideoUrl;
	ncmazAudioUrl?: NcmazAudioUrl;
	ncPostMetaData?: NcPostMetaData;
	ncmazGalleryImgs?: NcmazGalleryImgs;
}

interface Author {
	node?: Node;
}

interface Node {
	databaseId?: number;
	uri?: string;
	name?: string;
	ncUserMeta?: NcUserMeta;
}

interface NcUserMeta {
	featuredImage?: FeaturedImage;
}

interface FeaturedImage {
	node?: Node2;
}

interface Node2 {
	__typename?: string;
	altText?: string;
	databaseId?: number;
	sourceUrl?: string;
}

interface Categories {
	nodes?: Node3[];
}

interface Node3 {
	id?: string;
	name?: string;
	uri?: string;
	count?: number;
	databaseId?: number;
	ncTaxonomyMeta?: NcTaxonomyMeta;
}

interface NcTaxonomyMeta {
	color?: string[];
}

interface FeaturedImage2 {
	node?: Node4;
}

interface Node4 {
	__typename?: string;
	altText?: string;
	databaseId?: number;
	sourceUrl?: string;
}

interface PostFormats {
	nodes?: Node5[];
}

interface Node5 {
	name?: string;
	slug?: string;
}

interface NcmazVideoUrl {
	videoUrl?: any;
}

interface NcmazAudioUrl {
	audioUrl?: any;
}

interface NcPostMetaData {
	__typename?: string;
	viewsCount?: any;
	readingTime?: number;
	likesCount?: any;
}

interface NcmazGalleryImgs {
	image1?: Image1;
	image2?: Image2;
	image3?: Image3;
	image4?: Image4;
	image5?: any;
	image6?: any;
	image7?: any;
	image8?: any;
}

interface Image1 {
	node?: Node6;
}

interface Node6 {
	__typename?: string;
	altText?: string;
	databaseId?: number;
	sourceUrl?: string;
}

interface Image2 {
	node?: Node7;
}

interface Node7 {
	__typename?: string;
	altText?: string;
	databaseId?: number;
	sourceUrl?: string;
}

interface Image3 {
	node?: Node8;
}

interface Node8 {
	__typename?: string;
	altText?: string;
	databaseId?: number;
	sourceUrl?: string;
}

interface Image4 {
	node?: Node9;
}

interface Node9 {
	__typename?: string;
	altText?: string;
	databaseId?: number;
	sourceUrl?: string;
}
