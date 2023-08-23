import React, { FC } from "react";
import { NcmazFcPostsEdegsFieldsFragment } from "../__generated__/graphql";
import { getPostDataFromPostFragment } from "../utils/getPostDataFromPostFragment";
import ncFormatDate from "../utils/formatDate";
import { getImageDataFromImageFragment } from "../utils/getImageDataFromImageFragment";
interface Props {
	className?: string;
	posts: NcmazFcPostsEdegsFieldsFragment["nodes"];
}
const DemoListPosts: FC<Props> = ({ posts }) => {
	console.log(22, { posts });

	return (
		<div className="no-prose mt-12 divide-y">
			{posts.map((post) => {
				const {
					title,
					date,
					categories,
					excerpt,
					author,
					postFormats,
					featuredImage,
					ncPostMetaData,
					databaseId,
					__typename,
					commentCount,
				} = getPostDataFromPostFragment(post);

				return (
					<article
						key={databaseId}
						className="relative isolate flex flex-col gap-4 lg:flex-row py-4"
					>
						<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-28 lg:shrink-0">
							{featuredImage?.sourceUrl ? (
								<img
									src={featuredImage?.sourceUrl || ""}
									alt=""
									className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
								/>
							) : (
								<div className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"></div>
							)}
							<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
						</div>
						<div>
							<div className="flex items-center gap-x-4 text-xs">
								<span className="text-gray-500">
									{ncPostMetaData?.likesCount || 0} likes •{" "}
									{ncPostMetaData?.viewsCount || 0} views •{" "}
									{ncPostMetaData?.readingTime || 1} min read
								</span>
								<>
									{!!categories?.nodes?.length &&
										categories?.nodes?.map((category) => {
											return (
												<a
													href={category.link || ""}
													className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
												>
													{category.name}
												</a>
											);
										})}
								</>
							</div>
							<div className="group relative max-w-xl">
								<h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<span>
										<span className="absolute inset-0" />
										{title}
									</span>
								</h3>
							</div>
							<div className="mt-2 flex pt-2">
								<div className="relative flex items-center gap-x-4">
									{getImageDataFromImageFragment(
										author?.ncUserMeta?.featuredImage?.node
									)?.sourceUrl ? (
										<img
											src={
												getImageDataFromImageFragment(
													author?.ncUserMeta?.featuredImage?.node
												)?.sourceUrl || ""
											}
											alt=""
											className="h-8 w-8 object-cover rounded-full bg-gray-50"
										/>
									) : (
										<div className="w-8 h-8 bg-neutral-100 rounded-full" />
									)}
									<div className="relative flex items-center gap-x-2 text-sm leading-6">
										<span className="font-semibold text-gray-900">
											{author?.name || ""}
										</span>
										<span> • </span>
										<span className="text-gray-600 my-0">
											{ncFormatDate(date || "")}
										</span>
									</div>
								</div>
							</div>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default DemoListPosts;
