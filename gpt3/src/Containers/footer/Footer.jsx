/** @format */

import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";

export default function Footer() {
	return (
		<div className="gpt3__footer section__padding">
			<div className="gpt3__footer-heading">
				<h1 className="gradient__text">
					Do you want to step in the future before others
				</h1>
			</div>
			<div className="gpt3__footer-btn">
				<p>Request Early Access</p>
			</div>
			<div className="gpt3__footer-links">
				<div className="gpt3__footer-links_logo">
					<img src={gpt3logo} alt="gpt3logo" />
					<p>
						Createrwoord k12 dk alknkcb, all Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Possimus, numquam?
					</p>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Links</h4>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contacts</p>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Company</h4>
					<p>Term & Conditions</p>
					<p>Privacy & Policy</p>
					<p>Contacts</p>
					<p>Contacts</p>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Get In touch</h4>
					<p>Creacther k12 182 ok alknjkb</p>
					<p>085-13254635</p>
					<p>info@payme.com</p>
				</div>
			</div>
			<div className="gpt3__footer-copyRight">
				<p>© 2021 GPT-3. All rights reserved.</p>
			</div>
		</div>
	);
}
