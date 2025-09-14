import { useState } from "react";
import { useNavigate } from "react-router";
import TextInputForm from "./TextInputForm";

function TextInputFormConatiner() {
	const [word, setCurrWord] = useState(""); // using state to maintain form input
	const [inptType, setInptType] = useState("password"); // using state to maintain input type for show/hide
	const navigate = useNavigate();

	const onChangeHandler = (event) => setCurrWord(event.target.value); //storing the value in word
	const showInput = () => setInptType("text"); // change the input type to text
	const hideInput = () => setInptType("password"); // change the input type to password

	// Reset word to string of 0 length
	function resetWord() {
		setCurrWord("");
		setInptType("password");
	}

	// Submit handler to stop refresh on submit and change page to play page
	function onSubmit(event) {
		event.preventDefault();
		navigate("/play", {
			state: { wordSelected: word, pathName: "Play Game" },
		});
	}

	return (
		<>
			<TextInputForm
				onSubmit={onSubmit}
				inptShow={inptType}
				onChangeHandler={onChangeHandler}
				showInput={showInput}
				hideInput={hideInput}
				word={word}
				resetWord={resetWord}
				navigator={onSubmit}
			/>
		</>
	);
}

export default TextInputFormConatiner;
