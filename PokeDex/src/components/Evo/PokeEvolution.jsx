import React from "react";
import EvoPokemon from "../Pokemon/EvoPokemon";

export default React.memo(function PokeEvolution({ infoSuccess, infoData, evoSuccess }) {
	/**
	 * ----------------------
	 * Render the poke evolution
	 * ----------------------
	 * @param {boolean} infoSuccess - Whether the info data is success
	 * @param {array} infoData - The info data
	 * @param {boolean} evoSuccess - Whether the evo data is success
	 * @returns {JSX.Element} The poke evolution component
	 */
	return (
		<div className="px-2 py-6 rounded-lg bg-black/65">
			<h2 className="ml-4 mb-6 text-2xl text-white">Evolutions</h2>
			<div className="flex">
				{infoSuccess &&
					evoSuccess &&
					infoData.map((pokemon, idx) => {
						return (
							<div className="flex justify-center items-center">
								<EvoPokemon
									key={pokemon.name}
									pokemonId={pokemon.id}
									pokemonImage={pokemon.image2}
									pokemonName={pokemon.name}
									pokemonType={pokemon.types}
								/>
								<div className="mb-24 text-8xl font-medium text-white">
									{idx != infoData.length - 1 ? ">" : ""}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
});
