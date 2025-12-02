import axios from "axios";

async function FetchPokemonList(url) {
	try {
		const response = await axios.get(url);
		const resData = response.data;
		const getAllPokeUrls = resData.results.map((ele) => ele.url);
		return {
			urls: getAllPokeUrls,
			next: resData.next,
			prev: resData.previous,
		};
	} catch (error) {
		// Catching errors
		console.log("Error fetching pokemon list:", error);
		throw error;
	}
}

export default FetchPokemonList;
