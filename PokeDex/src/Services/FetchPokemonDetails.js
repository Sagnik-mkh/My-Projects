import axios from "axios";

async function FetchPokemonDetails(url) {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log("Error fetching pokemon details", error);
		throw error;
	}
}

export default FetchPokemonDetails;
