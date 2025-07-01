/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
function App() {
	return (
		<Routes>
			<Route path="/about" element={<About />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	);
}

export default App;
