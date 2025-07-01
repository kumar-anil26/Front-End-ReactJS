/** @format */

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function PostList(props) {
	return (
		<div>
			<ul>
				{props.posts.map((post) => {
					return (
						<li key={post.id}>
							<NavLink to={`/Posts/${post.id}`}>{post.title}</NavLink>
						</li>
					);
				})}
            </ul>
            <Outlet/>
		</div>
	);
}
