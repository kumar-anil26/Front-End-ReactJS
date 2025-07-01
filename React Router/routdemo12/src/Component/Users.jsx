/** @format */

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Users(props) {
	const { users } = props;
	return (
		<>
			<h2>Users</h2>
			<h3>To show the Details of the user, click on the user name: </h3>
			<ul>
				{users.map((user) => {
					return (
						<li key={user.id}>
							<NavLink className='navBarLink' to={`/Users/${user.id}`}>{user.name}</NavLink>
						</li>
					);
				})}
            </ul>
            <Outlet/>
		</>
	);
}
