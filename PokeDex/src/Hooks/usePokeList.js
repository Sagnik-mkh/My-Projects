import { useQuery } from "@tanstack/react-query";
import FetchPokemonList from "../services/FetchPokemonList";

/**
 * ----------------------
 * Custom hook to fetch the list of pokemon
 * ----------------------
 * @param {string} url - The url to fetch the list of pokemon
 * @returns {object} The list of pokemon
 */
function usePokeList(url) {
	/**
	 * ----------------------
	 * Fetch the list of pokemon
	 * ----------------------
	 * @param {string} url - The url to fetch the list of pokemon
	 * @returns {object} The list of pokemon
	 */
	const { data, isSuccess, isPending, isLoading, isError, refetch } =
		useQuery({
			queryKey: ["pokemon", url],
			queryFn: () => FetchPokemonList(url),
			enabled: !!url,
			staleTime: 10 * 60 * 1000,
			cacheTime: 15 * 60 * 1000,
		});

	return { data, isLoading, isPending, isSuccess, isError, refetch };
}

export default usePokeList;
