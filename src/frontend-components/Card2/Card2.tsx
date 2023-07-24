import React, { FC } from "react";
import NcImage from "../NcImage/NcImage";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import { FragmentType } from "../../__generated__";
import { NC_POST_CARD_FRAGMENT } from "../../fragments";
import { getPostDataFromPostFragment } from "../../utils/getPostDataFromPostFragment";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import PostCardSaveAction from "../PostCardSaveAction";

export interface Card2Props {
	className?: string;
	size?: "normal" | "large";
	post: FragmentType<typeof NC_POST_CARD_FRAGMENT>;
}

const Card2: FC<Card2Props> = ({ className = "", size = "normal", post }) => {
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
		<div className={`nc-Card2 group relative flex flex-col ${className}`}>
			<div className="block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] z-0">
				<NcImage
					fill
					sizes="(max-width: 600px) 480px, 800px"
					className="object-cover rounded-3xl"
					src={featuredImage?.sourceUrl || undefined}
				/>
				<PostTypeFeaturedIcon
					className="absolute bottom-2 left-2"
					postType={postFormats?.edges[0]?.node?.slug || "post"}
					wrapSize="w-8 h-8"
					iconSize="w-4 h-4"
				/>
				<CategoryBadgeList
					className="flex flex-wrap space-x-2 absolute top-3 left-3"
					itemClass="relative"
					categories={categories}
				/>
			</div>

			<div className="mt-5 px-4 flex flex-col">
				<div className="space-y-3">
					<PostCardMeta
						className="relative text-sm"
						avatarSize="h-8 w-8 text-sm"
						meta={post}
					/>

					<h2
						className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 ${
							size === "large" ? "text-base sm:text-lg md:text-xl" : "text-base"
						}`}
					>
						<span className="line-clamp-2" title={title || ""}>
							{title}
						</span>
					</h2>
					<span className="block text-neutral-500 dark:text-neutral-400 text-[15px] leading-6 ">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
						beatae quasi et, reprehenderit alias veritatis nostrum iste sed
						laboriosam eveniet possimus.
					</span>
				</div>
				<div className="my-5 border-t border-neutral-200 dark:border-neutral-700"></div>
				<div className="flex items-center justify-between">
					<PostCardLikeAndComment />
					<PostCardSaveAction
						className="relative"
						readingTime={ncPostMetaData?.readingTime || 2}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card2;
