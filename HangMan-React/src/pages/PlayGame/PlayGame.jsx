import MaskedText from "../../components/MaskedText/MaskedText";
import Button from "../../components/Buttons/Button";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { makePlayBtnType, setGameOver } from "../../components/Util/Utility";
import { ToastContainer, toast } from "react-toastify";
import HangMan from "../../components/HangMan/HangMan";

function PlayGame() {
	// making alphabets
	const alphabets = Array(26)
		.fill("")
		.map((ele, idx) => String.fromCharCode(ele == "" ? 65 + idx : ele));
	// state containing the collection of selected letters
	const [selectedLetters, setSelectedLetters] = useState(new Array());
	const location = useLocation();
	const currWord = location.state?.wordSelected; // storing word value passed from start page
	const navigator = useNavigate();
	const [wrongCounter, setWrongCounter] = useState(0); // Number of wrong attempts state

	// Tracking Game Over
	useEffect(() => {
		if (
			setGameOver(currWord, selectedLetters, wrongCounter, 7) &&
			currWord
		) {
			// if game is over
			toast("Game Over");
		}
	}, [selectedLetters, wrongCounter, currWord]);

	// Tracking selected letters
	function getSelectedLetters(event) {
		// checking if game over
		if (!setGameOver(currWord, selectedLetters, wrongCounter, 7)) {
			// if not game over
			const currLetter = event.target.textContent.trim(); // get the letter selected
			// if selected letter is a new letter
			if (!selectedLetters.includes(currLetter)) {
				selectedLetters.push(currLetter); // if add the new selected letter to storage
				setSelectedLetters([...selectedLetters]); // update the state of selected letter storage
				const wordArray = currWord.toUpperCase().split(""); // making array of all letters of target word
				// if selected letter is wrong
				if (!wordArray.includes(currLetter))
					setWrongCounter(wrongCounter + 1); // update the state of wrong attempts counter by 1
			}
		}
	}

	// function to make letter buttons as inputs
	function makeAlpha(ele, idx) {
		const btnType = makePlayBtnType(currWord, selectedLetters, ele); // setting button style--basis--correct/wrong ans
		return (
			<div
				className={btnType == "btn-success" ? "animate-bounce" : ""} // if ans correct then give animation
				key={`${ele}-${idx}`}
			>
				<Button
					btnText={ele}
					type={btnType}
					size={"w-14 h-14 btn-xl"}
					onClickHandler={getSelectedLetters} // onclick handler which checks--game over/correct/wrong
				/>
			</div>
		);
	}

	return (
		<>
			<div className="container flex items-center justify-center flex-1 gap-24 mx-auto">
				{/* toast for game over */}
				<ToastContainer position="top-center" />{" "}
				<div className="flex flex-col gap-12">
					{/* header */}
					<div className="p-2 text-center">
						<Header text={"Play Game"} />
					</div>
					{/* masked text container */}
					<div className="text-center">
						{/* masked text component */}
						<MaskedText
							text={currWord}
							usedLetters={selectedLetters}
						/>
					</div>
					{/* letter input button container */}
					<div className="flex flex-wrap justify-center gap-8">
						{/* making letter buttons using array */}
						{alphabets.map(makeAlpha)}
					</div>
					{/* back button container */}
					<div className="flex items-center justify-center">
						<Button
							btnText={"Back"}
							type={"btn-secondary"}
							onClickHandler={() =>
								navigator("/start", {
									state: { pathName: "Start Game" },
								})
							}
						/>
					</div>
				</div>
				{/* HangMan */}
				<HangMan stageCounter={wrongCounter} />
			</div>
		</>
	);
}

export default PlayGame;
