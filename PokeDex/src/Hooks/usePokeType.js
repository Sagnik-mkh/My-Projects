import { useQuery } from "@tanstack/react-query";
import FetchPokeWeakness from "../services/FetchPokeWeakness";

/**
 * ----------------------
 * Custom hook to fetch the type of a pokemon
 * ----------------------
 * @param {array} types - The types of the pokemon
 * @returns {object} The type of the pokemon
 */
function usePokeType(types) {
	/**
	 * ----------------------
	 * Fetch the type of a pokemon
	 * ----------------------
	 * @param {array} types - The types of the pokemon
	 * @returns {object} The type of the pokemon
	 */
	const { data, isSuccess, isLoading, isPending, isError, refetch } =
		useQuery({
			queryKey: types,
			queryFn: () => FetchPokeWeakness(types),
			enabled: !!types,
			staleTime: 10 * 60 * 1000,
			cacheTime: 15 * 60 * 1000,
		});

	return { data, isSuccess, isLoading, isPending, isError, refetch };
}

export default usePokeType;
