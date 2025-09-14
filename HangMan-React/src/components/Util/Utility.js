export const makePlayBtnType = function (currWord, selectedLetters, ele) {
	const wordArray = currWord.toUpperCase().split("");
	const btnType = selectedLetters.includes(ele)
		? wordArray.includes(ele)
			? "btn-success"
			: "btn-error"
		: "btn-primary";
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

export const setGameOver = function (currWord, selectedLetters, wrongCounter, maxWrongCount) {
	let isGameOver = true;
	const wordArray = currWord.toUpperCase().split(""); // making array of the target word
	const selectedLettersSet = new Set(selectedLetters); // making set of selected words
	// checking if all letters have been gussed or not
	wordArray.forEach((ele) => {
		if (!selectedLettersSet.has(ele)) isGameOver = false;
	});
	// game over if all letters have been gussed or number of wrong attempts have exceeded 7
	return isGameOver ? isGameOver : wrongCounter >= maxWrongCount ? true : isGameOver;
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
