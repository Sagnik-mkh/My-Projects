import { useQuery } from "@tanstack/react-query";
import FetchPokeSpeciesInfo from "../services/FetchPokeSpeciesInfo";
import { POKEDEX_API_SPECIES_URL } from "../Helper/Constants";

/**
 * ----------------------
 * Custom hook to fetch the species info of a pokemon
 * ----------------------
 * @param {string} pokeName - The name of the pokemon
 * @returns {object} The species info of the pokemon
 */
function usePokeSpecies(pokeName) {
	/**
	 * ----------------------
	 * Fetch the species info of a pokemon
	 * ----------------------
	 * @param {string} pokeName - The name of the pokemon
	 * @returns {object} The species info of the pokemon
	 */
	const { data, isSuccess, isLoading, isPending, isError, refetch } =
		useQuery({
			queryKey: ["Pokemon", pokeName],
			queryFn: () =>
				FetchPokeSpeciesInfo(`${POKEDEX_API_SPECIES_URL}/${pokeName}`),
			enabled: !!pokeName,
			staleTime: 10 * 60 * 1000,
			cacheTime: 15 * 60 * 1000,
		});

	return { data, isSuccess, isLoading, isPending, isError, refetch };
}

export default usePokeSpecies;
