import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import { FragmentType } from "../../__generated__";
import { NC_POST_CARD_FRAGMENT } from "../../fragments";
import { getPostDataFromPostFragment } from "../../utils/getPostDataFromPostFragment";
import PostCardSaveAction from "../PostCardSaveAction";

export interface Props {
	className?: string;
	post: FragmentType<typeof NC_POST_CARD_FRAGMENT>;
}

const Card6: FC<Props> = ({ className = "h-full", post }) => {
	const {
		title,
		link,
		date,
		categories,
		excerpt,
		author,
		postFormats,
		featuredImage,
		ncPostMetaData,
	} = getPostDataFromPostFragment(post);

	return (
		<div
			className={`nc-Card6 relative flex group flex-row items-center sm:p-4 sm:rounded-3xl sm:bg-white sm:dark:bg-neutral-900 sm:border border-neutral-200 dark:border-neutral-700 ${className}`}
		>
			<div className="flex flex-col flex-grow">
				<div className="space-y-3 mb-4">
					<CategoryBadgeList categories={categories} />
					<h2 className={`block font-semibold text-sm sm:text-base`}>
						<span className="line-clamp-2">{title}</span>
					</h2>
					<PostCardMeta meta={{ ...post }} />
				</div>
				<div className="flex items-center flex-wrap justify-between mt-auto">
					<PostCardLikeAndComment className="relative" />
					<PostCardSaveAction
						className="relative"
						readingTime={ncPostMetaData?.readingTime || 2}
					/>
				</div>
			</div>

			<span
				className={`block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden z-0`}
			>
				<NcImage
					sizes="(max-width: 600px) 180px, 400px"
					className="object-cover w-full h-full"
					fill
					src={featuredImage?.sourceUrl || undefined}
				/>
				<span className="absolute bottom-1 start-1">
					<PostTypeFeaturedIcon
						wrapSize="h-7 w-7"
						iconSize="h-4 w-4"
						postType={postFormats?.edges[0]?.node?.slug || "post"}
					/>
				</span>
			</span>
		</div>
	);
};

export default Card6;
