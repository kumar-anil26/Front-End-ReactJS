/** @format */

import React from "react";
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
	return (
		<div>
			<h1>
				404 Page not found !<br />
				Please try after sometime
            </h1>
            <button onClick={()=>navigate('/')}>Go to Home</button>
		</div>
	);
}
