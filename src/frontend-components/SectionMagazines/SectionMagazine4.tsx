import React, { FC } from "react";

import Card9 from "../Card9/Card9";
import Card8 from "../Card8/Card8";

const SectionMagazine4 = ({ activePosts }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
			{activePosts[0] && (
				<Card8 className="sm:col-span-2" post={activePosts[0].node} />
			)}
			{activePosts
				.filter((_, i) => i < 3 && i >= 1)
				.map((item, index) => (
					<Card9 key={index} post={item.node} />
				))}
			{activePosts
				.filter((_, i) => i < 5 && i >= 3)
				.map((item, index) => (
					<Card9 key={index} post={item.node} />
				))}
			{activePosts[5] && (
				<Card8 className="sm:col-span-2" post={activePosts[5].node} />
			)}
		</div>
	);
};

export default SectionMagazine4;
