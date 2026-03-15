/** @format */
import "./App.css";
import { useState } from "react";
import Display from "./Component/Display";
import ButtonsContainer from "./Component/ButtonsContainer";

const App = () => {
	const [displayValue, setdisplayValue] = useState("");
	const onButtonClick = (btnNo) => {
		if (btnNo === "C") {
			setdisplayValue("");
		} else if (btnNo === "=") {
			const result = eval(displayValue);
			setdisplayValue(result);
		} else {
			let newValue = displayValue + btnNo;
			setdisplayValue(newValue);
		}
	};
	return (
		<div className="mainContainer">
			<Display displayValue={displayValue} />
			<ButtonsContainer onButtonClick={onButtonClick} />
		</div>
	);
};
export default App;
