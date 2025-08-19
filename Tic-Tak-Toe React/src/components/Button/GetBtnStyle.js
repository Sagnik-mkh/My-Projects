export const BtnStyle = function (name) {
	const primaryStyle = "btn btn-primary btn-md";
	const secondaryStyle = "btn btn-secondary btn-md";
	const accesntStyle = "btn btn-accent btn-md";

	switch (name) {
		case "primary":
			return primaryStyle;
		case "secondary":
			return secondaryStyle;
		case "accent":
			return accesntStyle;
		default:
			return primaryStyle;
	}
};
