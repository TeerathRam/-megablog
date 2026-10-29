import React from "react";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
	return (
		<Link to={`/post/${$id}`}>
			<div className="bg-white border rounded-xl p-3">
				<div>
					<img
						src={appwriteService.getFilePreview(featuredImage)}
						alt={title}
						className="rounded-xl"
					/>
				</div>
				<h2 className="text-xl font-bold">{title}</h2>
			</div>
		</Link>
	);
}

export default PostCard;
