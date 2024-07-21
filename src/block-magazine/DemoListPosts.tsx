import React, { FC } from "react";
import ncFormatDate from "../utils/formatDate";
import { PostRoot } from "./type";
import useLoadPostMessage from "./useLoadPostMessage";

interface Props {
	className?: string;
	posts: PostRoot[];
	clientId?: string;
	blockVariation: string;
}

const DemoListPosts: FC<Props> = ({ posts, clientId, blockVariation }) => {
	const { front_uri, iframeHeight, iframeRef } = useLoadPostMessage({
		data: posts,
		clientId: clientId || "",
		type: "ncmazfc-preview-posts-block",
		blockVariation,
	});

	return (
		<>
			{!front_uri && (
				<div className="px-8 py-5 bg-slate-100/70 rounded-xl border-2 my-12">
					<p>
						To get a live preview of the styles of the different variants, make
						sure to set{" "}
						<a
							href="https://faustjs.org/tutorial/get-started-with-faust#set-your-front-end-site-url"
							target="_blank"
							rel="noopener noreferrer"
							className="underline text-green-600"
						>
							the frontend site URL
						</a>{" "}
						in the Faust WordPress Plugin Settings.
					</p>
				</div>
			)}
			<div className={`no-prose py-5 relative ${!front_uri ? "divide-y" : ""}`}>
				{!!front_uri && (
					<iframe
						ref={iframeRef}
						className="w-full min-h-96 overflow-auto hiddenScrollbar"
						title="ncmaz_for_ncmazfc_preview_blocks"
						src={front_uri + "/ncmaz_for_ncmazfc_preview_blocks/"}
						style={{
							height: iframeHeight || undefined,
							opacity: iframeHeight ? 1 : 0,
						}}
					/>
				)}

				{!front_uri &&
					posts.map((post) => {
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
						} = post;

						return (
							<article
								key={databaseId}
								className="relative isolate flex flex-col gap-4 lg:flex-row py-4"
							>
								<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-28 lg:shrink-0">
									{featuredImage?.node?.sourceUrl ? (
										<img
											src={featuredImage?.node?.sourceUrl || ""}
											className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
										/>
									) : (
										<div className="absolute inset-0 h-full w-full rounded-2xl bg-gray-200 object-cover"></div>
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
														<div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
															{category.name}
														</div>
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
										<div className="relative flex items-center gap-x-3">
											{author?.node?.ncUserMeta?.featuredImage?.node
												?.sourceUrl ? (
												<img
													src={
														author?.node?.ncUserMeta?.featuredImage?.node
															?.sourceUrl
													}
													className="h-8 w-8 object-cover rounded-full bg-gray-200"
												/>
											) : (
												<div className="w-8 h-8 bg-neutral-200 rounded-full" />
											)}
											<div className="relative flex items-center gap-x-2 text-sm leading-6">
												<span className="font-semibold text-gray-900">
													{author?.node?.name || ""}
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

				<div className="absolute inset-0 bg-transparent"></div>
			</div>
		</>
	);
};

export default DemoListPosts;
