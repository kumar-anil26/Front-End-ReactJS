/** @format */

import React from "react";
import { Routes, Route, NavLink} from "react-router-dom";
import Home from "./Component/Home";
import User from "./Component/User";
import Users from "./Component/Users";
import './App.css';

export default function App() {
	const users = [
		{ id: 1, name: "Anil Kumar", gender: "Male" },
		{ id: 2, name: "Pinkey Kumari", gender: "Female" },
		{ id: 3, name: "Rahul Kumar", gender: "Male" },
		{ id: 4, name: "Rani Kumari", gender: "Female" },
		{ id: 5, name: "AAdarsh Kumar", gender: "Male" },
	];
	return (
		<>
			<nav className="navBar">
				<NavLink className="navBarLink" to="/">
					Home
				</NavLink>
				<NavLink className="navBarLink" to="/Users">
					Users
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Users" element={<Users users={users} />}>
					<Route path=":userid" element={<User users={users} />} />
				</Route>
			</Routes>
		</>
	);
}
