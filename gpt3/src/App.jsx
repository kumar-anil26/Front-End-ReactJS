/** @format */

import React from "react";
import "./App.css";

import {
	Blog,
	Features,
	Footer,
	Header,
	Posibility,
	WhatGPT3,
} from "./Containers";
import { Brand, CTA, Navbar } from "./Component";

export default function App() {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header/>
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Posibility />
			<CTA />
			<Blog/>
			<Footer/>
		</div>
	);
}
