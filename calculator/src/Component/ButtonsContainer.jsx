/** @format */
import "./ButtonsContainer.css";
const ButtonsContainer = ({ onButtonClick }) => {
	let btnArr = [
		"C",
		"1",
		"2",
		"+",
		"3",
		"4",
		"-",
		"5",
		"6",
		"*",
		"7",
		"8",
		"/",
		"9",
		"0",
		"%",
		".",
		"=",
	];
	return (
		<div className="btnContainer">
			{btnArr.map((btnNo, index) => (
				<button
					key={index}
					className="btnItem"
					onClick={() => onButtonClick(btnNo)}
				>
					{btnNo}
				</button>
			))}
		</div>
	);
};
export default ButtonsContainer;
