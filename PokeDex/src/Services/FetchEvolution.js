import axios from "axios";

async function FetchEvolution(url) {
	// 1. Fetch species data
	const response = await axios.get(url);
	const speciesData = response.data;

	// 2. Get evolution chain URL
	const evoChainURL = speciesData.evolution_chain.url;

	// 3. Fetch evolution chain data
	const evoResponse = await axios.get(evoChainURL);
	const evoData = evoResponse.data;

	// 4. Walk through chain and extract names
	const evolutionNames = [];

	function traverse(chain) {
		evolutionNames.push(chain.species);

		// If more evolutions exist, recursively walk them
		chain.evolves_to.forEach((next) => traverse(next));
	}

	traverse(evoData.chain);

	const genera = speciesData.genera;
	const genusEn = genera.filter((p) => p.language.name == "en");
	return {
		evoNames: evolutionNames,
		category: genusEn[0].genus,
	};
}

export default FetchEvolution;
