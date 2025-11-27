import axiosInstance from "../helper/AxiosInstance";

async function FetchPokemonList() {
	try {
		const reponse = await axiosInstance.get("/pokemon");
		return reponse.data;
	} catch (error) {
		console.log("Error fetching pokemon list:", error);
		throw error;
	}
}

export default FetchPokemonList;