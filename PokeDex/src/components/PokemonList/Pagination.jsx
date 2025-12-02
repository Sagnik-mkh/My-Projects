import React from "react";
import Button from "../Button/Button";

export default React.memo(function Pagination({
	goToNextUrl,
	goToPrevUrl,
	isDisable,
}) {
	/**
	 * ----------------------
	 * Render the pagination
	 * ----------------------
	 * @param {function} goToNextUrl - The function to go to the next url
	 * @param {function} goToPrevUrl - The function to go to the previous url
	 * @param {boolean} isDisable - Whether the button is disabled
	 * @returns {JSX.Element} The pagination component
	 */
	return (
		<div className="flex justify-center items-center gap-6 mb-6">
			<Button
				buttonText={"Previous"}
				buttonColor="btn-info"
				buttonSize="btn-md w-24"
				onClickHandler={goToPrevUrl}
				isDisable={isDisable}
			/>
			<Button
				buttonText={"Next"}
				buttonColor="btn-info"
				buttonSize="btn-md w-24"
				onClickHandler={goToNextUrl}
				isDisable={isDisable}
			/>
		</div>
	);
});
