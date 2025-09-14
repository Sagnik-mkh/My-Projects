import Header from "../../components/Header/Header";
import TextInputFormConatiner from "../../components/TextInput/TextInputFormContainer";

function StartGame() {
	return (
		<>
			<div className="flex-1 bg-cover hero heroBackground1">
				{/* Overlay for bg img */}
				<div className="hero-overlay"></div>
				<div className="container flex flex-col gap-6 mx-auto">
					<div className="text-center">
						<Header text={"Start Game"} />
					</div>
					{/* Text input form */}
					<TextInputFormConatiner />
				</div>
			</div>
		</>
	);
}

export default StartGame;
