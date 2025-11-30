function Button({
	buttonColor = "btn-primary",
	buttonSize = "btn-md",
	onClickHandler,
	buttonText,
}) {
	return (
		<button
			className={`btn ${buttonColor} ${buttonSize}`}
			onClick={onClickHandler}
		>
			{buttonText}
		</button>
	);
}
export default Button;
