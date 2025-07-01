/** @format */

import React from "react";
import { Routes, Route} from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import DashBoard from "./Component/DashBoard";
import NotFound from "./Component/NotFound";

export default function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/DashBoard" element={<DashBoard />} />
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</div>
	);
}
