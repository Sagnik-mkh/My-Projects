import Card from "../../../../components/Card/Card";
import Hero from "../Hero/Hero";

function Body() {
	return (
		<>
			<div className="flex flex-col gap-12">
				<Hero />
				<div className="container flex justify-center gap-6 mx-auto">
					<Card
						title={"Play Anywhere"}
						body={"Works on browser, no download"}
						icon={"fa-solid fa-mobile-screen"}
					/>
					<Card
						title={"Boost Vocabulary"}
						body={"Lear new workds while playing"}
					/>
					<Card
						title={"Compete and Climb"}
						body={"Enter hidden words and solve"}
						icon={"fa-solid fa-trophy"}
					/>
				</div>
			</div>
		</>
	);
}

export default Body;
