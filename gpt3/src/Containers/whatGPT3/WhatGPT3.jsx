/** @format */

import React from "react";
import "./WhatGPT3.css";
import { Feature } from "../../Component";

export default function WhatGPT3() {
	return (
		<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
			<div className="gpt3__whatgpt3-feature">
				<Feature
					title="What is GPT-3"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor concinced residenc own Conmnection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he Friendly bachaior entrance to on by."
				/>
			</div>
			<div className="gpt3__whatgpt3-heading">
				<h1 className="gradient__text">
					This possibilities are beyond your imagination
				</h1>
				<p>Explore the Library</p>
			</div>
			<div className="gpt3__whatgpt3-container">
				<Feature
					title="Chatbots"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
				/>
				<Feature
					title="Knowledgebase"
					text="At jointure ladyship an insisted so humanity be friendly bachelor entrance to on by. As put impossible own apartments"
				/>
				<Feature
					title="Education"
					text="At jointure ladyship an insisted so humanity be friendly bachelor entrance to on by. As put impossibile own apartments."
				/>
			</div>
		</div>
	);
}
