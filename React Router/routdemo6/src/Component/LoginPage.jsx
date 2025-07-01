/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const today = new Date()
	const currDateTime = today.toDateString() + "@" + today.toLocaleTimeString();
	
	const navigate = useNavigate();
	const handlerChange = (e) => {
		if (e.target.value === "SCALive") {
			navigate("/DashBoard",{state:{currdt:currDateTime}});
		}
	};
	return (
		<div>
			<h1>LoginPage</h1>
			<p>Enter the secret code inside the text box</p>
			<input type="text" onChange={handlerChange} />
		</div>
	);
}
