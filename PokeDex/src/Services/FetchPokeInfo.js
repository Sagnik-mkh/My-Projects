import axios from "axios";
import FetchPokeDmg from "./FetchPokeDmg";
import FetchEvolution from "./FetchEvolution";
import { POKEDEX_API_BASE_URL, POKEDEX_API_EVO_URL } from "../Helper/Constants";

async function FetchPokeInfo(pokemon) {
	const pokeResponse = await axios.get(`${POKEDEX_API_BASE_URL}/${pokemon}`);

	const fullPokeData = pokeResponse.data;
	const pokeImage =
		fullPokeData.sprites.other["official-artwork"].front_default;
	const pokeId = fullPokeData.id;
	const pokeStats = fullPokeData.stats.map((data) => {
		return {
			name: data.stat.name,
			value: data.base_stat,
			normalizedValue: Math.floor((data.base_stat / 255) * 100),
		};
	});
	const pokeWeight = fullPokeData.weight;
	const pokeHeight = fullPokeData.height;
	const pokeAbilities = fullPokeData.abilities.map(
		(data) => data.ability.name
	);
	const pokeType = fullPokeData.types.map((data) => data.type.name);
	const pokeWeakness = await FetchPokeDmg(pokeType);
	const pokeEvoData = await FetchEvolution(
		`${POKEDEX_API_EVO_URL}/${pokemon}`
	);

	return {
		name: pokemon,
		image: pokeImage,
		id: pokeId,
		stats: pokeStats,
		category: pokeEvoData.category,
		weight: pokeWeight,
		height: pokeHeight,
		abilities: pokeAbilities,
		types: pokeType,
		weakness: pokeWeakness,
		evolution: pokeEvoData.evoNames,
	};
}

export default FetchPokeInfo;
