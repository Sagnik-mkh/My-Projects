import React from "react";

function Button({
	buttonColor = "btn-primary",
	buttonSize = "btn-md",
	onClickHandler,
	buttonText,
	isDisable,
}) {
	/**
	 * ----------------------
	 * Render the button
	 * ----------------------
	 */
	return (
		<button
			className={`btn ${buttonColor} ${buttonSize} ${isDisable}`}
			onClick={onClickHandler}
		>
			{buttonText}
		</button>
	);
}
export default React.memo(Button);
