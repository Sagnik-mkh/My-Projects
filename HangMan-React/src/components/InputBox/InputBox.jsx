import { getInputStyle } from "../Util/Utility";

function InputBox({ type, style, size, onChangeHandler }) {
	const inptStyle = getInputStyle(style, size);
	return (
		<input
			data-input-box
			type={type}
			className={`min-w-2xs border-2 ${inptStyle}`}
			onChange={onChangeHandler}
		/>
	);
}

export default InputBox;
