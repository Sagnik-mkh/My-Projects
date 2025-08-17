function getBtnStyle(styleType) {
	const primaryBtnStl =
		"btn-primary";
	const secondaryBtnStl =
		"btn-secondary";
	const warningBtnStl =
		"btn-warning";

	switch (styleType) {
		case "primary":
			return primaryBtnStl;
		case "secondary":
			return secondaryBtnStl;
		case "warning":
			return warningBtnStl;
		default:
			return primaryBtnStl;
	}
}

export default getBtnStyle;
