import React, { FC } from "react";
import { TermRoot } from "./type";
import useLoadPostMessage from "../block-magazine/useLoadPostMessage";

interface Props {
	terms: TermRoot[];
	clientId: string;
	blockVariation: string;
}

const DemoTermsList: FC<Props> = ({ terms, clientId, blockVariation }) => {
	const { front_uri, iframeHeight, iframeRef } = useLoadPostMessage({
		data: terms,
		clientId: clientId || "",
		type: "ncmazfc-preview-terms-block",
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

			<div className={`no-prose relative py-5`}>
				{!!front_uri && (
					<iframe
						ref={iframeRef}
						className="w-full min-h-60 overflow-auto hiddenScrollbar"
						title="ncmaz_for_ncmazfc_preview_blocks"
						src={front_uri + "/ncmaz_for_ncmazfc_preview_blocks/"}
						style={{
							height: iframeHeight || undefined,
							opacity: iframeHeight ? 1 : 0,
						}}
					/>
				)}

				{!front_uri && (
					<div className="flex flex-wrap gap-3 mt-3">
						{terms.map((node) => {
							return (
								<div
									key={node.databaseId}
									className="relative inline-flex items-center justify-between p-2 pr-5 space-x-5 rounded-3xl bg-neutral-200 hover:shadow-xl transition-shadow "
								>
									<div className="flex items-center space-x-4">
										<div className="block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg">
											<div className="nc-NcImage absolute inset-0">
												{node.ncTaxonomyMeta?.featuredImage?.node?.sourceUrl ? (
													<img
														src={
															node.ncTaxonomyMeta?.featuredImage?.node
																?.sourceUrl
														}
														className="object-cover w-full h-full "
														alt="DIYer and TV "
													/>
												) : (
													<div className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"></div>
												)}
											</div>
										</div>
										<div className="flex flex-col flex-grow">
											<h2 className="block font-semibold text-lg">
												<span className="line-clamp-1">{node.name}</span>
											</h2>
											<span className="text-xs text-neutral-500 mt-1">
												{node.count} articles
											</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				)}

				<div className="absolute inset-0 bg-transparent"></div>
			</div>
		</>
	);
};

export default DemoTermsList;
