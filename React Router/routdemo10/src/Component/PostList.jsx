/** @format */

import React from "react";

export default function PostList(props) {
    return (
			
				
				<ul style={{ width: 300, height: 200, marginLeft: 10 }}>
					{props.posts.map((post) => {
						return (
							<li key={post.id}>
								<h4>{post.title}</h4>
							</li>
						);
					})}
				</ul>
			
		);
}
