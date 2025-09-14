import { useNavigate } from "react-router";
import Logo from "../../../../components/Logos/Logo";
import Header from "../../../../components/Header/Header";
import Button from "../../../../components/Buttons/Button";
import HangManLogo from "../../../../assets/img/HangMan Logo.png";

function Hero() {
	const navigate = useNavigate();
	const GoToStart = () => {
		navigate("/start", { state: { pathName: "Start Game" } });
	};

	return (
		<div className="flex items-center justify-center gap-12 mx-auto conatiner">
			<Logo LogoSource={HangManLogo} />
			<div className="flex flex-col justify-center gap-6">
				<Header text={"Welcome to HangMan!"} />
				<p className="text-xl">
					Test your word skills before the stickman runs out of time
				</p>
				<Button
					btnText={"Start Game"}
					onClickHandler={GoToStart}
					type={"btn-primary"}
					size={"btn-md w-fit"}
				/>
			</div>
		</div>
	);
}

export default Hero;
