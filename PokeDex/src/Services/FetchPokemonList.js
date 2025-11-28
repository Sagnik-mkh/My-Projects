import axios from "axios";

async function FetchPokemonList(url) {
	try {
		const reponse = await axios.get(url);
		return reponse.data;
	} catch (error) {
		console.log("Error fetching pokemon list:", error);
		throw error;
	}
}

export default FetchPokemonList;
