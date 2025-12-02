import { useQuery } from "@tanstack/react-query";
import FetchEvolution from "../services/FetchEvolution";

/**
 * ----------------------
 * Custom hook to fetch the evolution of a pokemon
 * ----------------------
 * @param {number} id - The id of the pokemon
 * @returns {object} The evolution of the pokemon
 */
function usePokeEvo(id) {
	/**
	 * ----------------------
	 * Fetch the evolution of a pokemon
	 * ----------------------
	 * @param {number} id - The id of the pokemon
	 * @returns {object} The evolution of the pokemon
	 */
	const { data, isSuccess, isPending, isLoading, isError, refetch } =
		useQuery({
			queryKey: ["pokemon", id],
			queryFn: () => FetchEvolution(id),
			enabled: !!id,
			staleTime: 10 * 60 * 1000,
			cacheTime: 15 * 60 * 1000,
		});

	return { data, isLoading, isPending, isSuccess, isError, refetch };
}

export default usePokeEvo;
