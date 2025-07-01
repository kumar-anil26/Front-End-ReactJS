/** @format */

import React from "react";
import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Posts from "./Component/Posts";

export default function App() {
	return (
		<div>
			<nav>
				<NavLink className="nvLink" to="/">
					Home
				</NavLink>
				<NavLink className="nvLink" to="/About">
					About
				</NavLink>
				<NavLink className="nvLink" to="/Posts">
					Posts
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Posts" element={<Posts />} />
			</Routes>
		</div>
	);
}
