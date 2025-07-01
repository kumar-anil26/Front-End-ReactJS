/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import ContactDetails from "./ContactDetails";

export default function Contact() {
	const navigate = useNavigate();
	const handlerClick = (e) => {
		navigate("/ContactDetails");
	};
	return (
		<div>
			<h1>Contact page</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
				praesentium ut ducimus esse qui. Voluptatibus dolor officia dolores
				autem neque assumenda, dolorem veniam doloribus exercitationem natus
				corrupti nihil sapiente dicta?
			</p>
			<button onClick={handlerClick}>Show contact Details</button>
		</div>
	);
}
