import MaskedText from "../../components/MaskedText/MaskedText";
import Button from "../../components/Buttons/Button";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { makePlayBtnType, setGameOver } from "../../components/Util/Utility";
import { ToastContainer, toast } from "react-toastify";

function PlayGame() {
	const alphabets = Array(26)
		.fill("")
		.map((ele, idx) => String.fromCharCode(ele == "" ? 65 + idx : ele));
	const [selectedLetters, setSelectedLetters] = useState(new Array());
	const location = useLocation();
	const currWord = location.state?.wordSelected;
	const navigator = useNavigate();
	const [wrongCounter, setWrongCounter] = useState(0);

	function getSelectedLetters(event) {
		if (!setGameOver(currWord, selectedLetters, wrongCounter)) {
			const currLetter = event.target.textContent.trim();
			if (!selectedLetters.includes(currLetter)) {
				selectedLetters.push(currLetter);
				setSelectedLetters([...selectedLetters]);
				const wordArray = currWord.toUpperCase().split("");
				if (!wordArray.includes(currLetter))
					setWrongCounter(wrongCounter + 1);
			}
		}
		if (setGameOver(currWord, selectedLetters, wrongCounter)) {
			toast("Game Over");
		}
	}

	function makeAlpha(ele, idx) {
		const btnType = makePlayBtnType(currWord, selectedLetters, ele);
		return (
			<div
				className={btnType == "success" ? "animate-bounce" : ""}
				key={idx}
			>
				<Button
					btnText={ele}
					type={btnType}
					size={"xl"}
					onClickHandler={getSelectedLetters}
				/>
			</div>
		);
	}

	return (
		<>
			<ToastContainer position="top-center" />
			<div className="container mx-auto">
				<div className="text-center my-12 p-2">
					<Header text={"Play Game"} />
				</div>
				<div className="mt-12 text-center">
					<MaskedText text={currWord} usedLetters={selectedLetters} />
				</div>
				<div className="flex justify-center items-center text-xl flex-wrap gap-12 mt-24">
					{alphabets.map(makeAlpha)}
				</div>
				<div className="flex justify-center items-center m-12 p-12">
					<Button
						btnText={"Back"}
						type={"secondary"}
						onClickHandler={() => navigator("/start")}
					/>
				</div>
			</div>
		</>
	);
}

export default PlayGame;
