import { BtnStyle } from "./GetBtnStyle";

export const Button = function ({ value, style, onClickHandler }) {
	return (
		<button onClick={onClickHandler} className={`${BtnStyle(style)}`}>
			{value}
		</button>
	);
};
