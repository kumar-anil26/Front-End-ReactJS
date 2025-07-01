/** @format */

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import User from "./Component/User";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Account from "./Component/Account";

export default function App() {

	return (
		<>
			<nav className="navBar">
				<NavLink className="navLink" to="/">
					Home
				</NavLink>
				<NavLink className="navLink" to="/User">
					User
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/User" element={<User userName="Anil Roy" />}>
					<Route index element={<Profile />} />
					<Route path="ProfileDetails" element={<Profile />} />
					<Route path="AccountDetails" element={<Account />} />
				</Route>
			</Routes>
		</>
	);
}
