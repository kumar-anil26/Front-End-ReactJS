/** @format */

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Component/Home";
import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";

export default function App() {
	return (
		<div>
			<nav className="navBar">
				<NavLink className="NavBarLink" to="/">
					Home
				</NavLink>
				<NavLink className="NavBarLink" to="/About">
					About
				</NavLink>
				<NavLink className="NavBarLink" to="/Contact">
					Contact
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About/>} />
				<Route path="/Contact" element={<Contact/>}/>
			</Routes>
		</div>
	);
}
