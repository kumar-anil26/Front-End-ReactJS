/** @format */

import React from "react";
import { useNavigate } from 'react-router-dom';

export default function DashBoard() {
    const navigate = useNavigate()
    const handlerBack = () => {
        navigate('/')
    }
	return (
		<div>
			<h2>DashBoard</h2>
			<h3>Welcome to the dashboard</h3>
			<button onClick={handlerBack}>Go Back</button>
		</div>
	);
}
