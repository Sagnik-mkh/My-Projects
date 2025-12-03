import { useQuery } from "@tanstack/react-query";
import FetchPokeInfo from "../services/FetchPokeInfo";
import FetchAppendedInfo from "../services/FetchAppendedInfo";

/**
 * ----------------------
 * Custom hook to fetch the short info of a pokemon
 * ----------------------
 * @param {array} urls - The urls to fetch the short info of the pokemon
 * @returns {object} The short info of the pokemon
 */
function useLoadMore(urls, array = []) {
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
			queryFn: () => FetchAppendedInfo(urls, array),
			enabled: !!urls,
			staleTime: 10 * 60 * 1000,
			cacheTime: 15 * 60 * 1000,
		});

	return { data, isSuccess, isLoading, isPending, isError, refetch };
}

export default useLoadMore;
