/** @format */

import React from "react";
import { Navigate } from "react-router-dom";

export default function Protected({ isValid, children }) {
	if (!isValid) {
		return <Navigate to="/Login" replace />;
	} else {
		return children;
	}
}
