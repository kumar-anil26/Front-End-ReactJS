/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navBar">
			<NavLink className="navBarLink" to="/">
				Home
			</NavLink>
			<NavLink className="navBarLink" to="/About">
				About
			</NavLink>
			<NavLink className="navBarLink" to="/Profile">
				Profile
			</NavLink>
		</nav>
	);
}
