/** @format */

import React, { useContext, useRef } from "react";
import { PostList } from "../Store/PostLIstStore";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
	const { addPost } = useContext(PostList);
	const navigate = useNavigate();

	const userIDElement = useRef();
	const postTitleElement = useRef();
	const postContantElement = useRef();
	const postReactionsElement = useRef();
	const postTagsElement = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		const userID = userIDElement.current.value;
		const postTitle = postTitleElement.current.value;
		const postContant = postContantElement.current.value;
		const postReaction = postReactionsElement.current.value;
		const postTags = postTagsElement.current.value.split(" ");
		userIDElement.current.value = "";
		postTitleElement.current.value = "";
		postContantElement.current.value = "";
		postReactionsElement.current.value = "";
		postTagsElement.current.value = "";

		if (
			userID.length === 0 ||
			postTitle.length === 0 ||
			postContant.length === 0 ||
			postReaction.length === 0 ||
			postTags.length === 0
		) {
			alert("All fields are mandatatory !");
			return false;
		} else {
			fetch("https://dummyjson.com/posts/add", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					title: postTitle,
					body: postContant,
					reactions: postReaction,
					userId: userID,
					tags: postTags,
				}),
			})
				.then((res) => res.json())
				.then((post) => {
					addPost(post);
					navigate("/");
				});
		}
	};
	return (
		<>
			<form className="create-post" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="userid" className="form-label">
						UserID
					</label>
					<input
						ref={userIDElement}
						type="text"
						className="form-control"
						id="userid"
						aria-describedby="emailHelp"
						placeholder="Enter user ID..."
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Post Titel
					</label>
					<input
						ref={postTitleElement}
						type="text"
						className="form-control"
						id="title"
						aria-describedby="emailHelp"
						placeholder="How are you feelings today..."
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="postcontant" className="form-label">
						Post Contant
					</label>
					<textarea
						ref={postContantElement}
						type="text"
						rows="4"
						className="form-control"
						id="postcontant"
						aria-describedby="emailHelp"
						placeholder="Tell us more about it..."
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="reactions" className="form-label">
						Numbers of Reactions
					</label>
					<input
						ref={postReactionsElement}
						type="number"
						className="form-control"
						id="reactions"
						aria-describedby="emailHelp"
						placeholder="How many people reacted on this post..."
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="tags" className="form-label">
						Enter your Hostags
					</label>
					<input
						ref={postTagsElement}
						type="text"
						className="form-control"
						id="tags"
						aria-describedby="emailHelp"
						placeholder="Please enter tags using space..."
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Post
				</button>
			</form>
		</>
	);
}
