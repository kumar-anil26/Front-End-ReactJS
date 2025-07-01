/** @format */

import React from "react";
import {Link, Outlet } from "react-router-dom";
export default function User(props) {
	return (
		<div>
					<h1>User : {props.userName}</h1>
			<nav>
				<Link className="pLink" to="/User/ProfileDetails">
					Profile
				</Link>
				<Link className="pLink" to="/User/AccountDetails">
					Account
				</Link>
			</nav>
			<Outlet />
		</div>
	);
}
