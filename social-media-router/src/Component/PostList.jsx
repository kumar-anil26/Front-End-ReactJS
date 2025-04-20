/** @format */
import { PostList as postListData } from "../Store/PostLIstStore";
import React, { useContext } from "react";
import { v4 } from "uuid";
import Post from "./Post";
import WelComeMessage from "./WelComeMessage";
import Loading from "./Loading";

export default function PostList() {
	const { postList, fetching } = useContext(postListData);

	return (
		<>
			{fetching && <Loading />}
			{!fetching && postList.length === 0 && <WelComeMessage />}
			{!fetching && postList.map((post) => <Post key={v4()} post={post} />)}
		</>
	);
}
