/** @format */

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import NotFound from "./Component/NotFound";
function App() {
	return (
		<div>
			<nav style={{ margin: "10px" }}>
				<Link style={{ margin: "10px", textDecoration: "none" }} to="/">
					Home
				</Link>
				<Link style={{ margin: "10px", textDecoration: "none" }} to="/about">
					About
				</Link>
				<Link style={{ margin: "10px", textDecoration: "none" 	}} to="/Contact">
					Contact
				</Link>
			</nav>
			<Routes>
				<Route path="/about" element={<About />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/" element={<Home />}></Route>
				<Route path="/*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
