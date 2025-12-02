import AboutPokemon from "../About/AboutPokemon";
import StatsTable from "../Stats/Stats";
import BadgesList from "../TypeBadges/BadgesList";
import Capitalize from "../../Helper/Capitalize";
import React from "react";

export default React.memo(function PokeDetails({
	pokeData,
	speciesData,
	weaknessData,
}) {
	/**
	 * ----------------------
	 * Render the poke details
	 * ----------------------
	 * @param {object} pokeData - The data of the pokemon
	 * @param {object} speciesData - The data of the species
	 * @param {array} weaknessData - The data of the weakness
	 * @returns {JSX.Element} The poke details component
	 */
	return (
		<>
			<h1 className="my-12 text-4xl text-center bg-base-100">
				{Capitalize(pokeData.name)} #{pokeData.id}
			</h1>
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
});
