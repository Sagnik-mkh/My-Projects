export const ResetInputBox = function (word) {
	const inptbx = document.querySelector("[data-input-box]");
	word = "";
	inptbx.value = word;
};

export const makePlayBtnType = function (currWord, selectedLetters, ele) {
	const wordArray = currWord.toUpperCase().split("");
	const btnType = selectedLetters.includes(ele)
		? wordArray.includes(ele)
			? "success"
			: "error"
		: "primary";
	return btnType;
};

export const getWordNow = function (word, letters) {
	const wordArray = word.toUpperCase().split("");
	const gussedLetters = new Set(letters);

	return wordArray.map((ele) => {
		if (gussedLetters.has(ele)) return ele;
		return "_";
	});
};

export const setGameOver = function (currWord, selectedLetters, wrongCounter) {
	let isGameOver = true;
	const wordArray = currWord.toUpperCase().split("");
	const selectedLettersSet = new Set(selectedLetters);
	wordArray.forEach((ele) => {
		if (!selectedLettersSet.has(ele)) isGameOver = false;
	});
	return isGameOver ? isGameOver : wrongCounter >= 7 ? true : isGameOver;
};

export const getBtnStyle = function (type = "primary") {
	let primaryBtn = "btn btn-primary";
	let secondaryBtn = "btn btn-secondary";
	let successBtn = "btn btn-success";
	let errorBtn = "btn btn-error";

	switch (type) {
		case "primary":
			return primaryBtn;
		case "secondary":
			return secondaryBtn;
		case "success":
			return successBtn;
		case "error":
			return errorBtn;
	}
};

export const getInputStyle = function (style = "primaryInpt", size = "md") {
	let primaryInpt = "input input-primary";
	let secondaryInpt = "input input-secondary";
	let successInpt = "input input-success";
	let errorInpt = "input input-error";
	let inptSize = `input-${size}`;

	switch (style) {
		case "primary":
			return [primaryInpt, inptSize].join(" ");
		case "secondary":
			return [secondaryInpt, inptSize].join(" ");
		case "success":
			return [successInpt, inptSize].join(" ");
		case "error":
			return [errorInpt, inptSize].join(" ");
	}
};

export const getBtnSize = function (size = "md") {
	switch (size) {
		case "xs":
			return "btn-xs";
		case "lg":
			return "btn-lg";
		case "xl":
			return "btn-xl";
		default:
			return "btn-md";
	}
};
