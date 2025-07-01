/** @format */

import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Posts(props) {
	const { postid } = useParams();
	const { posts } = props;
	const userData = posts.find((post) => post.id == postid);
	if (!userData) {
		return <h3>Sorry ! NO user with id {postid} found in th DataBase.</h3>;
	} else {
		return (
			<>
				<h2 style={{ marginLeft: 10 }}>
					PostID : <b>{postid}</b>
				</h2>
				<div className="post">
					<p>
						<b>Post Title : </b>
						{userData.title}
					</p>
					<p>
						<b>Post Description : </b>
						{userData.description}
					</p>
                </div>
                <Link to='/Posts' style={{marginLeft:15}}>Back to Posts</Link>
			</>
		);
	}
}
