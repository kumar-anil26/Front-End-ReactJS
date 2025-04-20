/** @format */
import { MdDelete } from "react-icons/md";
import React, { useContext } from "react";
import { v4 } from "uuid";
import { PostList } from "../Store/PostLIstStore";

export default function Post({ post }) {
	const { deletePost } = useContext(PostList);

	return (
		<>
			<div
				className="card post-card"
				style={{ width: "35rem", minWidth: "25rem" }}
			>
				<div className="card-body">
					<h5 className="card-title">{post.title}</h5>
					<span
						className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
						onClick={() => deletePost(post.userId)}
					>
						<MdDelete />
					</span>
					<p className="card-text">{post.body}</p>
					{post.tags.map((tag) => (
						<span className="badge text-bg-primary post-tag" key={v4()}>
							{tag}
						</span>
					))}
					<div className="alert alert-info reaction" role="alert">
						This post has been reacted by {post.reaction} peoples.
					</div>
				</div>
			</div>
		</>
	);
}
