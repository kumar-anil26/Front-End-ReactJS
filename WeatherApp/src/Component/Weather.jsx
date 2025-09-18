/** @format */

import React, { useState } from "react";

export default function Weather() {
	const [cityname, setCityname] = useState("");
	const [weatherData, setWeatherData] = useState();
	const [loading, setLoading] = useState(true);

	const handlerSubmit = (event) => {
		setLoading(false);
		console.log(loading);
		event.preventDefault();

		if (cityname === "") {
			alert("Plese enter city name first...");
			setLoading(true);
		} else {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=751d66e130befad396405dc13796a57c&units=metric`
			)
				.then((Response) => Response.json())
				.then((finalData) => {
					if (finalData.cod == 404) {
						setWeatherData(undefined);
						setLoading(true);
					} else {
						setWeatherData(finalData);
						setLoading(true);
						console.log(finalData);
					}
				});

			setCityname("");
		}
	};
	return (
		<div className="max-w-screen-md mx-auto mt-10 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-500 h-fit shadow-xl shadow-gray-500">
			<h1 className="text-center text-4xl mb-10 text-amber-500 font-bold">
				Simple Weather App
			</h1>
			<form
				onSubmit={handlerSubmit}
				action="GET"
				className="flex flex-row justify-between items-center"
			>
				<div className="flex flex-row w-1/2 items-center justify-center mb-5">
					<input
						type="text"
						value={cityname}
						onChange={(e) => setCityname(e.target.value)}
						className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
						placeholder="Search for city..."
					/>
				</div>
				<button
					onSubmit={handlerSubmit}
					className="text-white text-xl  cursor-pointer transition ease-out hover:scale-125"
				>
					Search
				</button>
			</form>
			<img
				className={`m-auto mt-5 ${loading ? "hidden" : ""}`}
				src="../Public/loading1.gif"
				alt="no image found"
			/>
			{weatherData !== undefined ? (
				<>
					{loading ? (
						<>
							<div className="flex flex-col items-center justify-center my-6">
								<p className="text-white text-2xl font-extralight">
									{weatherData.name}{" "}
									<span className="bg-yellow-400 px-2 py-0.5 rounded-xl">
										IN
									</span>
								</p>
								<h1 className="text-white text-5xl font-medium">
									{weatherData.main.temp}°C
								</h1>
								<p className="text-white text-2xl font-extralight">
									{weatherData.weather[0].main}
								</p>
							</div>

							<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
								<div className="flex flex-col items-center justify-center">
									<p className="font-medium">
										{Math.floor(weatherData.main.temp_max)}°C
									</p>
									<p className="font-light">High</p>
								</div>
								<div className="flex flex-col items-center justify-center">
									<p className="font-medium">
										{Math.floor(weatherData.main.temp_min)}°C
									</p>
									<p className="font-light">Low</p>
								</div>
							</div>
						</>
					) : (
						""
					)}
				</>
			) : (
				<div className="flex flex-col items-center justify-center my-6">
					<h1 className="text-orange-700 text-4xl font-medium mt-4">
						{loading ? "No Data found !" : ""}
					</h1>
				</div>
			)}
		</div>
	);
}
