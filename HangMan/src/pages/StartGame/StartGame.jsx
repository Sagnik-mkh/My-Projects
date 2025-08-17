import { Link, useNavigate } from "react-router-dom";
import TextInputContainer from "../../components/textInputForm/textInputContainer";

function StartGame() {
	const navigator = useNavigate();

	function goToPlayGame() {
		navigator("/Play");
	}

	return (
		<div>
			<h1>Start Game</h1>
			<TextInputContainer onSubmit={goToPlayGame} />
		</div>
	);
}

export default StartGame;
