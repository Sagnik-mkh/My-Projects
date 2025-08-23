import React from "react";
import { getBtnSize, getBtnStyle } from "../Util/Utility";

function Button({ btnText, onClickHandler, type, size, btnType }) {
	const btnStyle = getBtnStyle(type);
	const btnSize = getBtnSize(size);

	return (
		<React.Fragment>
			<button
				type={btnType}
				className={`${btnStyle} ${btnSize}`}
				onClick={onClickHandler}
			>
				{btnText}
			</button>
		</React.Fragment>
	);
}

export default Button;
