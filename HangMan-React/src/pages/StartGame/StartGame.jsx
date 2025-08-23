import { useNavigate } from "react-router";
import Button from "../../components/Buttons/Button";
import Header from "../../components/Header/Header";
import TextInputFormConatiner from "../../components/TextInput/TextInputFormContainer";

function StartGame() {
	const navigate = useNavigate();

	return (
		<>
			<div className="absolute top-0 right-0 p-3 mx-2 my-1">
				<Button btnText={"Back"} onClickHandler={() => navigate("/")} />
			</div>
			<div className="container mx-auto">
				<div className="p-2 mt-6 text-center">
					<Header text={"Start Game"} />
				</div>
				<TextInputFormConatiner />
			</div>
		</>
	);
}

export default StartGame;
