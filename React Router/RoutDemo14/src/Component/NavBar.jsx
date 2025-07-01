/** @format */

import React from "react"
import {NavLink} from 'react-router-dom'

export default function NavBar({ isValid, handlerLogOut }) {
	
	return (
		<>
			<nav className="navBar">
				<NavLink className="navBarLink" to="/">
					Home
				</NavLink>
				<NavLink className="navBarLink" to="/About">
					About
				</NavLink>
				<NavLink className="navBarLink" to="/Posts">
					Posts
				</NavLink>
				<span className="verticleLine"></span>
				{!isValid ? (
					<NavLink className="navBarLink" to="/Login">
						Login
					</NavLink>
				) : (
					<>
						<NavLink className="navBarLink" to="/Stats">
							Stats
						</NavLink>
						<button className="navBarLink" onClick={()=>handlerLogOut(false)}>
							LogOut
						</button>
					</>
				)}
			</nav>
		</>
	);
}
