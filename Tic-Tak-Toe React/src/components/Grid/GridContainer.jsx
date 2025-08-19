import { useRef, useState } from "react";
import { Card } from "../Card/Card";
import Header from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import { checkWin } from "./Utils";
import Grid from "./Grid";
import ting from "../../assets/audio/ting.mp3";
import win from "../../assets/audio/gameover.mp3";

function GridContainer({ numberOfCells }) {
	const [turn, setTurn] = useState("X");
	const [board, setBoard] = useState(Array(numberOfCells).fill(""));
	const [winner, setWinner] = useState("");
	const tingSound = useRef(new Audio(ting));
	const winSound = useRef(new Audio(win));
	function makeGrid(icon, idx) {
		return <Card icon={icon} changeTurn={changeTurn} key={idx} idx={idx} />;
	}

	function changeTurn(idx) {
		if (board[idx] == "") {
			setTurn(turn == "X" ? "O" : "X");
			board[idx] = turn;
			setBoard([...board]);
			if (checkWin(board, turn)) {
				setWinner(turn);
				board.forEach((ele, idx) => {
					if (ele == "") board[idx] = "pen";
				});
				setBoard([...board]);
				toast(`${turn} Won`);
				winSound.current.pause();
				winSound.current.currentTime = 0;
				winSound.current.play();
				return;
			} else if (!board.includes("")) {
				setWinner("");
				toast(`Draw`);
			}
			tingSound.current.pause();
			tingSound.current.currentTime = 0;
			tingSound.current.play();
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
