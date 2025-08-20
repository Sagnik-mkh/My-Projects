import win from "../../assets/audio/gameover.mp3";
import ting from "../../assets/audio/ting.mp3";

export const checkWin = function (currBoard, player) {
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

	for (let [a, b, c] of winCond) {
		const val1 = currBoard[a];
		const val2 = currBoard[b];
		const val3 = currBoard[c];

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
