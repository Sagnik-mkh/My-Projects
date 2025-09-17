import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import Header from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import { checkWin, makeTingSound, makeGameOverSound } from "../../utility/Utils";
import Grid from "./Grid";

function GridContainer({ numberOfCells }) {
	const [turn, setTurn] = useState("X"); // maintain current turn
	const [board, setBoard] = useState(Array(numberOfCells).fill("")); // maintain current board
	const [winner, setWinner] = useState(""); // maintain winner

	// Calling game over effects on change of winner
	useEffect(gameOverEffects, [winner]);

	// Game over effects
	function gameOverEffects() {
		if (winner != "" && winner != "Draw") toast(`Winner : ${winner}`);
		else if (winner == "Draw") toast("Draw");
	}

	// checking if game is over
	const chkGameOver = function (currTurn, currBoard) {
		const isWin = checkWin(currBoard, currTurn); // checking for win
		const isDraw = !currBoard.includes(""); //checking for draw
		if (isWin) setWinner(currTurn); // setting winner
		else if (isDraw) setWinner("Draw");
		return isWin || isDraw; // returing if game is over
	};

	// Changing turn and checking if game is over
	const changeTurn = function (idx) {
		// perform operation only if card has not been filled yet or winner not decided
		if (board[idx] == "" && winner == "") {
			board[idx] = turn; // filling the array element with the player value
			const isGameOver = chkGameOver(turn, board); // checking game over
			isGameOver ? makeGameOverSound() : makeTingSound(); // sound effects
			if (!isGameOver) setTurn(turn == "X" ? "O" : "X"); // turn changes on next re-render when game is not over
			setBoard([...board]); // updating board
		}
	};

	// Generating cards
	const makeCard = function (icon, idx) {
		return (
			<Card icon={icon} onClickHandler={changeTurn} key={idx} idx={idx} />
		);
	};

	// Resetting the board
	const resetBoard = function () {
		setBoard(Array(numberOfCells).fill(""));
		setTurn("X");
		setWinner("");
	};

	return (
		<>
			<h1>Winner : {winner}</h1>
			<ToastContainer position="top-center" />
			<Header turn={turn} resetBoard={resetBoard} />
			<Grid board={board} makeCard={makeCard} />
		</>
	);
}

export default GridContainer;
