/** @format */

import React from "react";

export default function Loading() {
	return (
		<div className="loading">
			<div
				className="spinner-border text-success"
				style={{ width: "4rem", height: "4rem" }}
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
			<div
				className="spinner-grow"
				style={{ width: "4rem", height: "4rem" }}
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
			<br />
			<br />
			<h4>Loading....</h4>
		</div>
	);
}
