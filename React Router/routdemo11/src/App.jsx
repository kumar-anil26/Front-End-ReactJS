/** @format */

import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Posts from "./Component/Posts";
import PostList from "./Component/PostList";
import "./App.css";
import NotFound from "./Component/NotFound";

export default function App() {
	const posts = [
		{
			id: 101,
			title: "React Hooks",
			description:
				"React Hooks are functions that enable the use of state and other React features within functional components, eliminating the need for class components for managing state and side effects. They were introduced in React 16.8.",
		},
		{
			id: 102,
			title: "React router",
			description:
				"React Router is a popular, external library for managing client-side routing in React applications. It enables the creation of Single-Page Applications (SPAs) that feel like traditional multi-page websites by allowing navigation between different views or components without triggering a full page reload.",
		},
		{
			id: 103,
			title: "React Redux",
			description:
				"React-Redux is a popular state management library that helps manage the application state in React applications. It is an essential tool in the React ecosystem, allowing you to efficiently handle complex state logic and data flow within large applications",
		},
	];
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
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Posts" element={<PostList posts={posts} />}>
					<Route path=":postid" element={<Posts posts={posts} />} />
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
}
