import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputContainer({ onSubmit }) {
	const [inputValue, setValue] = useState("");
	const [show, setShow] = useState("password");

	function handleFormSubmit(event) {
		event.preventDefault();
		console.log("Form Submitted", inputValue);
		if (onSubmit) onSubmit(inputValue);
	}

	function handleInputChange(event) {
		console.log("Input changed", event.target.value);
		setValue(event.target.value);
	}

	function showingText() {
		setShow("text");
	}

	function hidingText() {
		setShow("password");
	}

	return (
		<TextInputForm
			handleFormSubmit={handleFormSubmit}
			inputValue={inputValue}
			handleInputChange={handleInputChange}
			onClick={showingText}
			offClick={hidingText}
			show={show}
		/>
	);
}

export default TextInputContainer;
