import { useQuery } from "@tanstack/react-query";
import FetchPokemonList from "../services/FetchPokemonList";
import FetchEvolution from "../services/FetchEvolution";

function usePokeEvo(id) {
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
