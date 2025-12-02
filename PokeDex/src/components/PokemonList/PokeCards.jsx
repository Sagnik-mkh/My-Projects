import React, { useMemo } from "react";
import Pokemon from "../Pokemon/Pokemon";

export default React.memo(function PokeCards({ infoData, infoLoading }) {
	/**
	 * ----------------------
	 * Memoize Pokémon card rendering
	 * Only recompute when data.list changes
	 * ----------------------
	 * @param {array} infoData - The data of the pokemon
	 * @param {boolean} infoLoading - Whether the info data is loading
	 * @returns {JSX.Element} The pokemon cards component
	 */
	const allCards = useMemo(() => {
		if (!infoData || infoLoading) return null;

		return infoData.map((pokemon) => (
			<Pokemon
				key={pokemon.name}
				pokemonId={pokemon.id}
				pokemonImage={pokemon.image}
				pokemonName={pokemon.name}
				pokemonType={pokemon.types}
			/>
		));
	}, [infoData, infoLoading]);

	return allCards;
});
