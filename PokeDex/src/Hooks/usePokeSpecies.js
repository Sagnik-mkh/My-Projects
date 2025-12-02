import { useQuery } from "@tanstack/react-query";
import FetchPokeSpeciesInfo from "../services/FetchPokeSpeciesInfo";
import { POKEDEX_API_SPECIES_URL } from "../Helper/Constants";

function usePokeSpecies(pokeName) {
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
