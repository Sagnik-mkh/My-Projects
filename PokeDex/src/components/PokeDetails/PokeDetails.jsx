import AboutPokemon from "../About/AboutPokemon";
import StatsTable from "../Stats/Stats";
import Header from "./Header";
import BadgesList from "../TypeBadges/BadgesList";

function PokeDetails({ pokeData, speciesData, weaknessData }) {
	return (
		<>
			<Header name={pokeData.name} id={pokeData.id} />
			<div className="flex justify-center items-start mx-auto max-w-2/3 gap-12">
				<div className="basis-1/2 flex flex-col gap-6">
					<img
						className="w-full bg-base-200 rounded-lg"
						src={pokeData.image2}
						alt={pokeData.name}
					/>
					<StatsTable stats={pokeData.stats} />
				</div>
				<div className="flex flex-col gap-8 basis-1/2">
					<div>
						<h2 className="mb-3 text-lg">Description</h2>
						<p className="italic">{speciesData.description}</p>
					</div>
					<AboutPokemon
						height={pokeData.height}
						weight={pokeData.weight}
						category={speciesData.category}
						abilities={pokeData.abilities}
					/>
					<BadgesList names={pokeData.types} text={"Types"} />
					<BadgesList names={weaknessData} text={"Weakness"} />
				</div>
			</div>
		</>
	);
}

export default PokeDetails;
