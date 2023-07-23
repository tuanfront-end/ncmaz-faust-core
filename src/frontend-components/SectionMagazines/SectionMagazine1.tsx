import React, { FC } from "react";
import Card2 from "../Card2/Card2";
import Card6 from "../Card6/Card6";
import { NcmazFcPostCardFieldsFragment } from "../../__generated__/graphql";
import { FragmentType, useFragment } from "../../__generated__";
import { NC_POSTS_EDGES_FRAGMENT } from "../../fragments";

type UserProfileHeaderProps = {
	posts: FragmentType<typeof NC_POSTS_EDGES_FRAGMENT>;
};

export default function UserProfileHeader(props: UserProfileHeaderProps) {
	const query = useFragment(NC_POSTS_EDGES_FRAGMENT, props.posts);
	const posts = query.edges;

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
}
