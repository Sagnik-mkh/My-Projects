import axios from "axios";
import { POKEDEX_API_SPECIES_URL } from "../Helper/Constants";

async function FetchEvolution(id) {
	// 1. Fetch species data
	const response = await axios.get(`${POKEDEX_API_SPECIES_URL}/${id}`);
	const speciesData = response.data;

	// 2. Get evolution chain URL
	const evoChainURL = speciesData.evolution_chain.url;

	// 3. Fetch evolution chain data
	const evoResponse = await axios.get(evoChainURL);
	const evoData = evoResponse.data;

	// 4. Walk through chain and extract names
	const evolutionNames = [];

	function traverse(chain) {
		evolutionNames.push(chain.species.name);

		// If more evolutions exist, recursively walk them
		chain.evolves_to.forEach((next) => traverse(next));
	}

	traverse(evoData.chain);

	return evolutionNames;
}

export default FetchEvolution;
