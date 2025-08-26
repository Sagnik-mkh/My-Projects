import { getButtonStyle } from "../../Util/Util";

function Button({ text, color, style, size, onClickHandler, isDisabled = false, children }) {
	const buttonClass = getButtonStyle(style, color, size);
	return (
		<button disabled={isDisabled} onClick={onClickHandler} className={`${buttonClass}`}>
			{children}
			{text}
		</button>
	);
}

export default Button;
