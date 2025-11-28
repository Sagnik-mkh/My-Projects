import axios from "axios";
import FetchPokemonList from "./FetchPokemonList";
import { POKEDEX_API_BASE_URL } from "../helper/Constants";

async function FetchPokemonDetails(url) {
	try {
		const response = await FetchPokemonList(url);
		const pokemonResults = response?.results;
		console.log(response);
		const pokemonNextUrl = response.next;
		const pokemonPrevUrl = response.previous;
		const pokemonUrls = pokemonResults.map((poke) => axios.get(poke?.url));
		const pokemonListData = await axios.all(pokemonUrls);
		const pokemonList = pokemonListData.map((poke) => {
			const pokeInfo = poke?.data;
			return {
				id: pokeInfo.id,
				name: pokeInfo.name,
				image: pokeInfo.sprites.other.dream_world.front_default,
				types: pokeInfo.types,
			};
		});
		return {
			nextUrl: pokemonNextUrl,
			prevUrl: pokemonPrevUrl,
			pokeList: pokemonList,
		};
	} catch (error) {
		console.log("Error fetching pokemon details", error);
		throw error;
	}
}

export default FetchPokemonDetails;
