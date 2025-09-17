/** @format */

import React from "react";
import { useState } from "react";
import { LC, NC, SC, UC } from "../data/Data";
import { ToastContainer, toast } from "react-toastify";

export default function RandomPass() {
	const [uppercase, setUppercase] = useState(false);
	const [lowercase, setLowercase] = useState(false);
	const [numbercase, setNumbercase] = useState(false);
	const [specicalchar, setSpecialchar] = useState(false);
	const [passwordlen, setPasswordlen] = useState(8);
	const [finalpassword, setFinalpassword] = useState("");

	const handlerGeneratePass = () => {
		let finalPass = "";
		let charSet = "";

		if (uppercase || lowercase || numbercase || specicalchar) {
			if (uppercase) charSet += UC;
			if (lowercase) charSet += LC;
			if (numbercase) charSet += NC;
			if (specicalchar) charSet += SC;

			for (let i = 0; i < passwordlen; i++) {
				finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
			}
			setFinalpassword(finalPass);
		} else {
			toast.error("Please check minimun one checkbox...",{position:'top-center'});
		}
	};

	const copyPassword = () => {
		if (finalpassword.length === 0) {
			toast.error("Please Generate password first...", {
				position: "top-center",
			});
		} else {
			navigator.clipboard.writeText(finalpassword);
			toast.success("Password copied !", { position: "top-center" });
		}
	};

	return (
		<div className="flex justify-center h-screen items-center">
			<div className="w-90 h-110 bg-blue-400 rounded-2xl p-4">
				<h1 className="text-center mt-3 font-bold text-xl">
					Random Password Generator
				</h1>
				<div className="bg-amber-300 p-2 mt-4 flex">
					<input
						type="text"
						className="flex-1 p-1 rounded text-lg tracking-wider "
						value={finalpassword}
						readOnly
					/>
					<button
						onClick={copyPassword}
						className="bg-blue-500 text-white px-2 ml-2 rounded hover:bg-blue-700 transition-colors duration-300"
					>
						copy
					</button>
				</div>
				<div className="mt-7 space-y-4">
					<div className="flex items-center gap-2 relative">
						<label>Password length will be (8-20) </label>
						<input
							type="number"
							min={8}
							max={20}
							value={passwordlen}
							onChange={(e) => setPasswordlen(e.target.value)}
							className="w-15 rounded absolute right-0 border-2 border-amber-200 focus:ring-blue-500 text-center"
						/>
					</div>
					<div className="space-y-2">
						<label className="flex items-center justify-between">
							<span>Include uppercase letters</span>
							<input
								type="checkbox"
								onClick={() => setUppercase(!uppercase)}
								className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
							/>
						</label>
						<label className="flex items-center justify-between">
							<span>Include lowercase letters</span>
							<input
								type="checkbox"
								onClick={() => setLowercase(!lowercase)}
								className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
							/>
						</label>
						<label className="flex items-center justify-between">
							<span>Include numbers</span>
							<input
								type="checkbox"
								onClick={() => setNumbercase(!numbercase)}
								className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
							/>
						</label>
						<label className="flex items-center justify-between">
							<span>Include symbols</span>
							<input
								type="checkbox"
								onClick={() => setSpecialchar(!specicalchar)}
								className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
							/>
						</label>
					</div>
				</div>
				<div className="mt-9 flex justify-center">
					<button
						onClick={handlerGeneratePass}
						className="cursor-pointer w-full md:w-auto px-22 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
					>
						Generate Password
					</button>
				</div>
			</div>
			<ToastContainer style={{ top: "100px", right: "50px" }} />
		</div>
	);
}
