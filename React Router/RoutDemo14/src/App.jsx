/** @format */

import React from "react";
import Stats from "./Component/Stats";
import NavBar from "./Component/NavBar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Posts from "./Component/Posts";
import Login from "./Component/Login";
import { useState } from "react";
import Protected from "./Component/Protected";

export default function App() {
	const [isValid, setisValid] = useState(false);

	const handlerIsValid = (e) => {
		console.log("user name and pass is valid ");
		setisValid(e);
		console.log(e);
	};

	return (
		<div>
			<NavBar isValid={isValid} handlerLogOut={(e) => setisValid(e)} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Posts" element={<Posts />} />
				<Route
					path="/Login"
					element={<Login handlerIsValid={handlerIsValid} />}
				/>
				<Route
					path="/Stats"
					element={
						<Protected isValid={isValid}>
							<Stats />
						</Protected>
					}
				/>
			</Routes>
		</div>
	);
}
