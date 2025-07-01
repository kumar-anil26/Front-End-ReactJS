/** @format */

import React from "react";
import {NavLink} from 'react-router-dom'

export default function Posts() {
	return (
		<div>
			<h1>Posts</h1>
			<ul>
				<li><NavLink to='/React'>React Router</NavLink></li>
				<li><NavLink to='/ReactRedux'>React Redux</NavLink></li>
			</ul>
		</div>
	);
}
