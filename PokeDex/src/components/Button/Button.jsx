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
	 * @param {string} buttonColor - The color of the button
	 * @param {string} buttonSize - The size of the button
	 * @param {function} onClickHandler - The function to be called when the button is clicked
	 * @param {string} buttonText - The text of the button
	 * @param {boolean} isDisable - Whether the button is disabled
	 * @returns {JSX.Element} The button component
	 */
	return (
		<button
			type="button"
			className={`btn ${buttonColor} ${buttonSize} ${isDisable}`}
			onClick={onClickHandler}
		>
			{buttonText}
		</button>
	);
}
export default React.memo(Button);
