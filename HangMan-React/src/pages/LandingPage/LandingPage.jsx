import React from "react";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import HangManLogo from "../../assets/img/HangMan Logo.png";

function LandingPage() {
	const navigate = useNavigate();

	return (
		<React.Fragment>
			<div className="flex flex-col items-center gap-2 mx-auto mt-12 conatiner">
				<div className="p-3 max-w-2xs">
					<img src={HangManLogo} alt="" />
				</div>
				<div className="flex items-center justify-center gap-3 p-4 mt-6 text-center">
					<Header text={"Welcome to HangMan"} />
					<Button
						btnText={"Start Game"}
						onClickHandler={() => navigate("/start")}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default LandingPage;
