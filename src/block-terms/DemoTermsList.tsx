import React, { FC } from "react";
import { NcmazFcTermsCardFieldsFragment } from "../__generated__/graphql";
import { useFragment } from "../__generated__";
import { NC_TERM_CARD_FRAGMENT } from "../fragments";
import { Notice } from "@wordpress/components";

interface Props {
	terms: NcmazFcTermsCardFieldsFragment["edges"];
}

const DemoTermsList: FC<Props> = ({ terms }) => {
	return (
		<div>
			<div className={`flex flex-wrap gap-3 mt-3`}>
				{terms.map((term) => {
					const node = useFragment(NC_TERM_CARD_FRAGMENT, term.node);
					return (
						<div
							key={node.databaseId}
							className="relative inline-flex items-center justify-between p-2 pr-5 space-x-5 rounded-3xl bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow "
						>
							<div className="flex items-center space-x-4">
								<div className="block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg">
									<div className="nc-NcImage absolute inset-0">
										{node.ncTaxonomyMeta?.featuredImage?.sourceUrl ? (
											<img
												src={node.ncTaxonomyMeta?.featuredImage?.sourceUrl}
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
									<span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
										{node.count} articles
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DemoTermsList;
