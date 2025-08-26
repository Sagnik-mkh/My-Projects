export const getButtonStyle = function (style, color, size) {
	let btnColor;
	switch (color) {
		case "primary":
			btnColor = "btn-primary";
			break;
		case "secondary":
			btnColor = "btn-secondary";
			break;
		case "accent":
			btnColor = "btn-accent";
			break;
		case "info":
			btnColor = "btn-info";
			break;
		case "success":
			btnColor = "btn-success";
			break;
		case "warning":
			btnColor = "btn-warning";
			break;
		case "error":
			btnColor = "btn-error";
			break;
		default:
			btnColor = "btn-primary";
			break;
	}

	let btnStyle;
	switch (style) {
		case "solid":
			btnStyle = "";
			break;
		case "outline":
			btnStyle = "btn-outline";
			break;
		case "soft":
			btnStyle = "btn-soft";
			break;
		default:
			btnStyle = "";
			break;
	}

	let btnSize;
	switch (size) {
		case "sm":
			btnSize = "btn-sm";
			break;
		case "md":
			btnSize = "btn-md";
			break;
		case "lg":
			btnSize = "btn-lg";
			break;
		default:
			btnSize = "btn-md";
			break;
	}

	return `btn ${btnColor} ${btnStyle} ${btnSize}`;
};
