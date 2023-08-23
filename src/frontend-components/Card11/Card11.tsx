import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "../PostCardMeta/PostCardMeta";

const Card11 = ({
	className = "h-full",
	post,
	hiddenAuthor = false,
	ratio = "aspect-w-4 aspect-h-3",
}) => {
	const { title, link, categories, date, featuredImage } = post;

	return (
		<div
			className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
			data-nc-id="Card11"
		>
			<div
				className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden bg-gray-300 ${ratio}`}
			>
				<NcImage
					src={featuredImage?.node.sourceUrl}
					srcSet={featuredImage?.node.srcSet}
				/>
			</div>
			<a href={link} className="absolute inset-0"></a>
			<span className="absolute top-3 inset-x-3">
				<CategoryBadgeList categories={categories} />
			</span>

			<div className="p-4 h-full flex flex-col flex-grow">
				{!hiddenAuthor ? (
					<PostCardMeta meta={post} />
				) : (
					<span className="text-xs text-neutral-500">{date}</span>
				)}
				<h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3">
					<a href={link} className="line-clamp-2" title={title}>
						{title}
					</a>
				</h2>
				<div className="flex items-end justify-between mt-auto">
					<PostCardLikeAndComment className="relative" postData={post} />
					<PostCardDropdownShare />
				</div>
			</div>
		</div>
	);
};

export default Card11;
