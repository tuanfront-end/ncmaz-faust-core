import React, { FC } from "react";
import { NcmazFcPostsEdegsFieldsFragment } from "../__generated__/graphql";
import { getPostDataFromPostFragment } from "../utils/getPostDataFromPostFragment";
import ncFormatDate from "../utils/formatDate";
import { Notice } from "@wordpress/components";
interface Props {
	className?: string;
	posts: NcmazFcPostsEdegsFieldsFragment["edges"];
}
const DemoListPosts: FC<Props> = ({ posts }) => {
	return (
		<div className="no-prose mt-12 space-y-12 lg:mt-12 lg:space-y-12">
			{posts.map((post) => {
				const {
					id,
					title,
					link,
					date,
					categories,
					excerpt,
					author,
					postFormats,
					featuredImage,
					ncPostMetaData,
					databaseId,
					__typename,
					isSticky,
					commentCount,
					dateGmt,
				} = getPostDataFromPostFragment(post.node);

				return (
					<article
						key={id}
						className="relative isolate flex flex-col gap-8 lg:flex-row"
					>
						<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
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
									{categories &&
										categories.edges.length > 0 &&
										categories.edges.map((category) => {
											return (
												<a
													href={category.node.link || ""}
													className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
												>
													{category.node.name}
												</a>
											);
										})}
								</>
							</div>
							<div className="group relative max-w-xl">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<span>
										<span className="absolute inset-0" />
										{title}
									</span>
								</h3>
								<div
									dangerouslySetInnerHTML={{ __html: excerpt || "" }}
									className="mt-5 text-sm leading-6 text-gray-600"
								></div>
							</div>
							<div className="mt-6 flex border-t border-gray-900/5 pt-6">
								<div className="relative flex items-center gap-x-4">
									<img
										src={author?.node.avatar?.url || ""}
										alt=""
										className="h-10 w-10 rounded-full bg-gray-50"
									/>
									<div className="text-sm leading-6">
										<p className="font-semibold text-gray-900">
											<a href={author?.node.url || ""}>
												<span className="absolute inset-0" />
												{author?.node.name || ""}
											</a>
										</p>
										<p className="text-gray-600">{ncFormatDate(date || "")}</p>
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
