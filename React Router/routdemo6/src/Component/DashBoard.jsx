/** @format */

import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function DashBoard() {
	const navigate = useNavigate()
	const location = useLocation()
	const str = location.state.currdt;
	
    const handlerBack = () => {
        navigate('/')
    }
	return (
		<div>
			<h2>DashBoard</h2>
			<h3>Welcome to the dashboard</h3>
			{
				<p>
					Your login time : <strong>{str}</strong>
				</p>
			}
			<button onClick={handlerBack}>Go Back</button>
		</div>
	);
}
