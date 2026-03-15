/** @format */
import "./Display.css";
const Display = ({ displayValue }) => {
	return (
		<>
			<input type="text" className="Display" value={displayValue} readOnly />
		</>
	);
};
export default Display;
