import { useState } from "react";
import { Card } from "../Card/Card";
import Header from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import { checkWin, makeTingSound, makeGameOverSound } from "./Utils";
import Grid from "./Grid";

function GridContainer({ numberOfCells }) {
	const [turn, setTurn] = useState("X");
	const [board, setBoard] = useState(Array(numberOfCells).fill(""));
	const [winner, setWinner] = useState("");
	function makeGrid(icon, idx) {
		return <Card icon={icon} changeTurn={changeTurn} key={idx} idx={idx} />;
	}

	function changeTurn(idx) {
		if (board[idx] == "") {
			setTurn(turn == "X" ? "O" : "X");
			board[idx] = turn;
			if (checkWin(board, turn)) {
				setWinner(turn);
				board.forEach(
					(ele, idx) => (board[idx] = ele == "" ? "pen" : ele)
				);
				makeGameOverSound();
				toast(`${turn} Won`);
				return;
			} else if (!board.includes("")) {
				setWinner("");
				makeGameOverSound();
				toast(`Draw`);
			}
			setBoard([...board]);
			makeTingSound();
		}
	}

	function resetBoard() {
		setBoard(Array(numberOfCells).fill(""));
		setTurn("X");
		setWinner("");
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
