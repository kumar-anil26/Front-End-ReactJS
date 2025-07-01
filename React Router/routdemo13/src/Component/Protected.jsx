/** @format */

import React from "react";
import { Navigate } from 'react-router-dom';

export default function Protected(props) {
	const { isLoggedIn, children } = props;

	if (!isLoggedIn) {
		return <Navigate to="/" replace />;
	} else {
		return children;
	}
}
