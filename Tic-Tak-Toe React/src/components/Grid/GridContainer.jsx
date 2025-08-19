import { useState } from "react";
import { Card } from "../Card/Card";
import Header from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import { checkWin } from "./Utils";
import Grid from "./Grid";

function GridContainer({ numberOfCells }) {
	const [turn, setTurn] = useState("X");
	const [board, setBoard] = useState(Array(numberOfCells).fill(""));
	const [winner, setWinner] = useState("");
	function makeGrid(icon, idx) {
		return <Card icon={icon} changeTurn={changeTurn} key={idx} idx={idx} />;
	}

	function changeTurn(idx) {
		if (board[idx] === "") {
			board[idx] = turn;
			const win = checkWin(board, turn);
			if (win) {
				setWinner(turn);
				toast(`${turn} won`);
				// resetBoard();
			} else {
				setBoard([...board]);
				setTurn(turn === "X" ? "O" : "X");
			}
			let isFilled = true;
			let count = 0;
			board.forEach((element) => {
				if (element === "") {
					isFilled = false;
					count++;
				}
			});
			if (count < numberOfCells && isFilled) {
				toast(`Draw`);
				setWinner("");
			}
		}
	}

	function resetBoard() {
		setBoard(Array(numberOfCells).fill(""));
		setTurn("X");
		setWinner("")
	}

	return (
		<>
			<h1>Winner : {winner}</h1>
			<ToastContainer position="top-center" />
			<Header turn={turn} resetBoard={resetBoard} />
			<Grid board={board} makeGrid={makeGrid} />
		</>
	);
}

export default GridContainer;
