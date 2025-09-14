import React from "react";

function Button({ btnText, onClickHandler, onMouseDownHandler, onMouseUpHandler, onMouseLeaveHandler, type, size, btnType }) {
	return (
		<React.Fragment>
			<button
				type={btnType}
				className={`btn ${type} ${size}`}
				onClick={onClickHandler} // on click event listener
				onMouseDown={onMouseDownHandler}
				onMouseUp={onMouseUpHandler}
				onMouseLeave={onMouseLeaveHandler}
			>
				{btnText}
			</button>
		</React.Fragment>
	);
}

export default Button;
