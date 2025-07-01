/** @format */

import React from "react";
import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import NotFound from "./Component/NotFound";
import Posts from "./Component/Posts";
import PostList from "./Component/PostList";

export default function App() {
	const posts = [
		{
			id: 101,
			title: "React Hooks",
			description:
				"React Hooks are functions that enable the use of state and other React features within functional components, eliminating the need for class components to manage state and lifecycle methods. They were introduced in React 16.8 and have since become a fundamental part of React development. ",
		},
		{
			id: 102,
			title: "React Router",
			description:
				"React Router is a standard library for client-side routing in React applications. It enables the creation of Single-Page Applications (SPAs) by allowing navigation between different views or components without a full page reload. ",
		},
	];
	return (
		<>
			<nav>
				<NavLink className="navBar" to="/">
					Home
				</NavLink>
				<NavLink className="navBar" to="/About">
					About
				</NavLink>
				<NavLink className="navBar" to="/Posts">
					Posts
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/*" element={<NotFound />} />
				<Route path="/Posts" element={<Posts />}>
					<Route index element={<PostList posts={posts} />} />
				</Route>
			</Routes>
		</>
	);
}
