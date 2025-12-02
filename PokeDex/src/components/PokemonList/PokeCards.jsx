import { useMemo } from "react";
import Pokemon from "../Pokemon/Pokemon";

function PokeCards({ infoData, infoLoading }) {
	/**
	 * -----------------------------------------
	 * Memoize Pokémon card rendering
	 * Only recompute when data.list changes
	 * -----------------------------------------
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
}

export default PokeCards;
