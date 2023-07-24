import React, { FC } from "react";
import Card2 from "../Card2/Card2";
import Card6 from "../Card6/Card6";
import { NcmazFcPostsEdegsFieldsFragment } from "../../__generated__/graphql";

interface Props {
	className?: string;
	posts: NcmazFcPostsEdegsFieldsFragment["edges"];
}

const SectionMagazine1: FC<Props> = ({ posts, className }) => {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
				{posts[0] && <Card2 size="large" post={posts[0].node} />}
				<div className="grid grid-cols-1 gap-6 md:gap-8">
					{posts
						.filter((_, i) => i < 4 && i > 0)
						.map((item, index) => (
							<Card6 key={index} post={item.node} />
						))}
				</div>
			</div>
		</div>
	);
};

export default SectionMagazine1;
