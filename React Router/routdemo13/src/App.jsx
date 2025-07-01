/** @format */

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Protected from "./Component/Protected";
import { useState } from "react";
import About from "./Component/About";
import NotFound from "./Component/NotFound";

export default function App() {
	const [isLoggedIn, setisLoggedIn] = useState(false);
	return (
		<>
			<Navbar />
			{isLoggedIn ? (
				<button onClick={() => setisLoggedIn(false)}>LogOut</button>
			) : (
				<button onClick={() => setisLoggedIn(true)}>Login</button>
			)}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route
					path="/Profile"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<Profile />
						</Protected>
					}
				/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</>
	);
}
