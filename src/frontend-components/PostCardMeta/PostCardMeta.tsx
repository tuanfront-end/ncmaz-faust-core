import React, { FC } from "react";
import Avatar from "../Avatar/Avatar";
import ncFormatDate from "../../utils/formatDate";

export interface PostCardMetaProps {
	className?: string;
	meta: any;
	hiddenAvatar?: boolean;
	avatarSize?: string;
}

const PostCardMeta: FC<PostCardMetaProps> = ({
	className = "leading-none text-xs",
	meta,
	hiddenAvatar = false,
	avatarSize = "h-7 w-7 text-sm",
}) => {
	const { date, author } = meta;

	return (
		<div
			className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${className}`}
		>
			<span className="relative flex items-center space-x-2 rtl:space-x-reverse">
				{!hiddenAvatar && (
					<Avatar
						radius="rounded-full"
						sizeClass={avatarSize}
						imgUrl={author.avatar}
						userName={author.displayName}
					/>
				)}
				<span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
					{author.displayName}
				</span>
			</span>
			<>
				<span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
					·
				</span>
				<span className="text-neutral-500 dark:text-neutral-400 font-normal">
					{ncFormatDate(date)}
				</span>
			</>
		</div>
	);
};

export default PostCardMeta;
