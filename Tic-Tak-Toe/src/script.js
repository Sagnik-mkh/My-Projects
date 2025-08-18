import tingSound from "./assets/audio/ting.mp3";
import gameOverSound from "./assets/audio/gameover.mp3";

//current turn, winner, all available values in all boxes
let currTurn = "X";
let winner = "";
let allVals = new Array();

//Element of Turn display
const turnInd = document.querySelector("[data-turn-ind]");

//All boxes and audio on click
const allBoxes = document.querySelectorAll("[data-box]");
const boxArray = Array.from(allBoxes);
const audioTing = new Audio(tingSound);

//Element conatining reset button
const resetBtn = document.querySelector("[data-reset]");

//Element conatining game over details and sound on game over
const gameOver = document.querySelector("[data-game-over]");
const playAgain = document.querySelector("[data-play-again]");
const winCard = document.querySelector("[data-win-card]");
const gameOverSnd = new Audio(gameOverSound);

//Function to execute when win
function onWin() {
	//Updating array with values present at an instance in all boxes
	boxArray.forEach((element, idx) => {
		allVals[idx] = element.textContent.trim();
	});

	//All possible win conditions
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

	//Win Scenario
	for (let i = 0; i < winCond.length; i++) {
		// All values at win places
		let val1 = allVals[winCond[i][0]];
		let val2 = allVals[winCond[i][1]];
		let val3 = allVals[winCond[i][2]];
		if (
			val1 != "" &&
			val2 != "" &&
			val3 != "" &&
			val1 == val2 &&
			val2 == val3
		) {
			winner = val1; //setting winner value
			turnInd.textContent = `${winner} Wins`; //Declaring winner
			winCard.textContent =
				winner === "Draw" ? "Draw" : `Player ${winner} Wins! 🏆`;
			if (gameOver.getAttribute("data-game-over") == "inactive") {
				gameOverSnd.play(); //sound when game over
				gameOver.setAttribute("data-game-over", "active");
				gameOver.classList.remove("animate-fade-out");
				gameOver.classList.add("animate-fade-in");
				gameOver.style.opacity = 1;
				gameOver.style.zIndex = "50";
			}
		}
	}

	//Draw Scenario
	let isFilled = true;
	for (let i = 0; i < allVals.length; i++) {
		if (allVals[i] === "") {
			isFilled = false;
			break;
		}
	}

	if (isFilled == true) {
		winner = "Draw"; //setting winner value
		turnInd.textContent = `${winner}`; //Declaring winner
		winCard.textContent =
			winner === "Draw" ? "Draw" : `Player ${winner} Wins! 🏆`;
		if (gameOver.getAttribute("data-game-over") == "inactive") {
			gameOverSnd.play(); //sound when game over
			gameOver.setAttribute("data-game-over", "active");
			gameOver.classList.remove("animate-fade-out");
			gameOver.classList.add("animate-fade-in");
			gameOver.style.opacity = 1;
			gameOver.style.zIndex = "50";
		}
	}
}

//function to change turn
function changeTurn(turn) {
	return turn === "X" ? "O" : "X";
}

//Function to reset the board
function onReset(event) {
	event.stopPropagation();
	boxArray.forEach(function exeReset(box) {
		box.textContent = "";
		box.setAttribute("data-status", "active");
	});
	currTurn = "X";
	winner = "";
	turnInd.textContent = `Turn for ${currTurn}`;
}

//While playing
function onBoxClick(box) {
	box.addEventListener("click", function exeClick(event) {
		event.stopPropagation();
		if (box.getAttribute("data-status") === "active") {
			box.textContent = currTurn;
			box.setAttribute("data-status", "inactive");
			currTurn = changeTurn(currTurn);
			turnInd.textContent = `Turn for ${currTurn}`;
			audioTing.pause();
			audioTing.currentTime = 0;
			audioTing.play();
		}
		onWin();
	});
}

//Function after game over to play again
function exePlayAgain(event) {
	if (gameOver.getAttribute("data-game-over") == "active") {
		gameOver.setAttribute("data-game-over", "inactive");
		gameOver.style.opacity = 0;
		gameOver.style.zIndex = "-50";
		gameOver.classList.add("animate-fade-out");
		gameOver.classList.remove("animate-fade-in");
		onReset(event);
	}
}

boxArray.forEach(onBoxClick);

resetBtn.addEventListener("click", onReset);

playAgain.addEventListener("click", exePlayAgain);
