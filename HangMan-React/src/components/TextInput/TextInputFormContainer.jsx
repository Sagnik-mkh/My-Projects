import { useState } from "react";
import { useNavigate } from "react-router";
import { ResetInputBox } from "../Util/Utility";
import TextInputForm from "./TextInputForm";

function TextInputFormConatiner() {
	let word = "";
	const [inptType, setInptType] = useState("password");
	const navigate = useNavigate();

	function resetWord() {
		ResetInputBox(word);
		setInptType("password");
	}

	function onSubmit(event) {
		event.preventDefault();
		navigate("/play", { state: { wordSelected: word } });
	}
	return (
		<>
			<TextInputForm
				onSubmit={onSubmit}
				inptShow={inptType}
				setWord={(event) => (word = event.target.value)}
				onShowClick={() =>
					inptType == "password"
						? setInptType("text")
						: setInptType("password")
				}
				resetWord={resetWord}
				navigator={onSubmit}
			/>
		</>
	);
}

export default TextInputFormConatiner;
