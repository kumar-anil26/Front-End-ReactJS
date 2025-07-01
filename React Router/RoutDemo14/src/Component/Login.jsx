/** @format */

import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
export default function Login({ handlerIsValid }) {

	const navigate = useNavigate()
	const [userName, setuserName] = useState("");
	const [pass, setpass] = useState("");
	const handlerSubmit = (e) => {
		e.preventDefault();
		if (userName === "admin" && pass === "Admin") {
			handlerIsValid(true);
			setuserName("");
			setpass("");
			navigate('/Stats');
		} else {
			alert("Sorry! Invalid credential, Try again...");
		}
	};
	
	return (
		<div>
			<h1>Please Fill the credentials</h1>
			<form onSubmit={handlerSubmit}>
				<input
					value={userName}
					type="text"
					placeholder="Enter the user name"
					onChange={(e) => setuserName(e.target.value)}
				/>
				<br />
				<br />
				<input
					type="password"
					value={pass}
					placeholder="Enter the password"
					onChange={(e) => setpass(e.target.value)}
				/>
				<br />
				<br />
				<button>Login</button>
			</form>
		</div>
	);
}
