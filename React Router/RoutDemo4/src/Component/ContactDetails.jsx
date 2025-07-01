/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactDetails() {
    const navigate = useNavigate();
    
	const handlerBack = () => {
		navigate(-1);
    };
    
	const handlerHome = () => {
		navigate("/");
    };
    
	return (
		<div>
			<div>
				<h1>Contact Number</h1>
				<p>
					<strong>7393855698</strong>
				</p>
				<p>
					<strong>9826453204</strong>
				</p>
			</div>
			<div>
				<h1>Email ID</h1>
				<p>
					<strong>anil123@gmail.com</strong>
				</p>
				<p>
					<strong>scalive4u@gmail.com</strong>
				</p>
			</div>
			<div>
				<button onClick={handlerBack}>
					Go Back
				</button>
				<button className="cdbtn" onClick={handlerHome}>
					Go HOme
				</button>
			</div>
		</div>
	);
}
