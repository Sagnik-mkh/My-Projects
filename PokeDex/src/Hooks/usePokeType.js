import { useQuery } from "@tanstack/react-query";
import FetchPokeWeakness from "../services/FetchPokeWeakness";

function usePokeType(types) {
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
