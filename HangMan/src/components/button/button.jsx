import getBtnStyle from "./getBtnStyleType";

function Button({
	text,
	styleType,
	onClickHandler,
	offClickHandler,
	btnSize,
	type = "button",
}) {
	const btnType = getBtnStyle(styleType);
	const size = `btn-${btnSize}`;
	return (
		<>
			<button
				type={type}
				onMouseDown={onClickHandler}
				onMouseUp={offClickHandler}
				className={`btn ${btnType} ${size}`}
			>
				{text}
			</button>
		</>
	);
}

export default Button;
