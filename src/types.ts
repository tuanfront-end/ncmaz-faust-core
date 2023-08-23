import { FragmentType } from "./__generated__";
import { ValueOfOptionFilterDataBy } from "./contains/common";
import { NC_IMAGE_MEDIA_FRAGMENT } from "./fragments";

export interface Option<T = string> {
	label: string;
	value: T;
}
export interface MySelectOption<T = string> extends Option<T> {}

export type HtmlTagsType = keyof HTMLElementTagNameMap;

export type MyTabsForColor = "Normal" | "Hover";
export type MyTabsForActive = "Normal" | "Active";

export type AlignmentH = "left" | "center" | "right";
export type MyPosition = "left" | "right" | "top" | "bottom";

export type AttrsGenericType<T> = {
	[k in keyof T]: {
		type: string;
		default?: T[k];
		source?: string;
		selector?: string;
		attribute?: string;
		__experimentalRole?: string;
	};
};
//
export type ContainerEditProps<T, C = any> = {
	attributes: T;
	setAttributes: (newAttributes: Partial<T>) => void;
	clientId: string;
	isSelected: boolean;
	context: C;
	className: string;
	insertBlocksAfter: Function;
	onReplace: Function;
};

export interface EditProps<T, C = any> extends ContainerEditProps<T, C> {}

export type NcImageFields = FragmentType<typeof NC_IMAGE_MEDIA_FRAGMENT>;
