import { getInputStyle } from "../Util/Utility";

function InputBox({ type, style, size, onChangeHandler, currVal }) {
	const inptStyle = getInputStyle(style, size); // JS function which returns input style as string

	return (
		<input
			data-input-box
			type={type}
			className={`min-w-2xs border-2 ${inptStyle}`}
			value={currVal}
			onChange={onChangeHandler} // on click event listener
		/>
	);
}

export default InputBox;
