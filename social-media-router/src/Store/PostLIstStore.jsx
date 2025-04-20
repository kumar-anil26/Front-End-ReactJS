/** @format */

import { useCallback } from "react";
import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
	postList: [],
	addPost: () => {},
	fetching: false,
	deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
	let newPost = currentPostList;
	if (action.type === "Delete_post") {
		newPost = currentPostList.filter(
			(post) => post.userId !== action.payload.postUserID
		);
	} else if (action.type === "Add_Initial_Post") {
		newPost = action.payload.posts;
	} else if ((action.type = "Add_post")) {
		newPost = [action.payload.posts, ...currentPostList];
	}
	return newPost;
};

const PostListProvider = ({ children }) => {
	const [postList, dispatchPostList] = useReducer(postListReducer, []);

	const addPost = (posts) => {
		dispatchPostList({
			type: "Add_post",
			payload: { posts },
		});
	};
	const addInitialPost = (posts) => {
		dispatchPostList({
			type: "Add_Initial_Post",
			payload: { posts },
		});
	};

	const deletePost = useCallback((postUserID) => {
		dispatchPostList({
			type: "Delete_post",
			payload: {
				postUserID,
			},
		});
	});
	const [fetching, setFetching] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		setFetching(true);
		fetch("https://dummyjson.com/posts", { signal })
			.then((res) => res.json())
			.then((obj) => {
				addInitialPost(obj.posts);
				setFetching(false);
			});

		return () => {
			console.log("Cleaning up useEffect");
			controller.abort();
		};
	}, []);

	return (
		<PostList.Provider
			value={{
				postList,
				addPost,
				deletePost,
				fetching,
			}}
		>
			{children}
		</PostList.Provider>
	);
};

export default PostListProvider;
