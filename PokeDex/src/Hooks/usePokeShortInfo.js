import { useQuery } from "@tanstack/react-query";
import FetchPokeInfo from "../services/FetchPokeInfo";

/**
 * ----------------------
 * Custom hook to fetch the short info of a pokemon
 * ----------------------
 * @param {array} urls - The urls to fetch the short info of the pokemon
 * @returns {object} The short info of the pokemon
 */	
function usePokeShortInfo(urls) {
	/**
	 * ----------------------
	 * Fetch the short info of a pokemon
	 * ----------------------
	 * @param {array} urls - The urls to fetch the short info of the pokemon
	 * @returns {object} The short info of the pokemon
	 */
	const { data, isSuccess, isLoading, isPending, isError, refetch } =
		useQuery({
			queryKey: urls,
			queryFn: () => FetchPokeInfo(urls),
			enabled: !!urls,
			staleTime: 10 * 60 * 1000,
			cacheTime: 15 * 60 * 1000,
		});

	return { data, isSuccess, isLoading, isPending, isError, refetch };
}

export default usePokeShortInfo;
