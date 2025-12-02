import Button from "../Button/Button";

function Pagination({ goToNextUrl, goToPrevUrl, isDisable }) {
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
}

export default Pagination;
