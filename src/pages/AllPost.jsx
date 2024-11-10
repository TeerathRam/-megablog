import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/conf";

function AllPost() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		appwriteService.getPosts().then((posts) => {
			if (posts) {
				setPosts(posts.documents);
			}
		});
	}, []);

	return (
		<div className="w-full py-8">
			<Container>
				<div className="flex flex-wrap flex-col items-center sm:flex-row">
					{posts.map((post) => (
						<div key={post.$id} className="p-2 w-full sm:w-1/3">
							<PostCard {...post} />
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

export default AllPost;
