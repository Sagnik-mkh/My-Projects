import win from "../assets/audio/gameover.mp3";
import ting from "../assets/audio/ting.mp3";

// check win condition
export const checkWin = function (currBoard, player) {
	// win conditions--array to have same elements in one combination
	const winCond = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	// checking for each combination
	for (let [a, b, c] of winCond) {
		const val1 = currBoard[a];
		const val2 = currBoard[b];
		const val3 = currBoard[c];

		// if all 3 values are same && equal to current value then game won by current player
		if (
			val1 != "" &&
			val2 != "" &&
			val2 != "" &&
			val1 == player &&
			val1 === val2 &&
			val1 === val3
		) {
			return true;
		}
	}
	return false;
};

export const makeGameOverSound = function () {
	const winSound = new Audio(win);
	winSound.pause();
	winSound.currentTime = 0;
	winSound.play();
};

export const makeTingSound = function () {
	const tingSound = new Audio(ting);
	tingSound.pause();
	tingSound.currentTime = 0;
	tingSound.play();
};
