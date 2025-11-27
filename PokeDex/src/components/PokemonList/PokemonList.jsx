import { useQueries, useQuery } from "@tanstack/react-query";
import FetchPokemonList from "../../Services/FetchPokemonList";
import FetchPokemonDetails from "../../Services/FetchPokemonDetails";
import { useEffect } from "react";

function PokemonList() {
	const { data } = useQuery({
		queryKey: ["pokemon"],
		queryFn: FetchPokemonList,
		staleTime: Infinity,
		cachesTime: Infinity,
	});

	const pokemonDetails = useQueries({
		queries: (data?.results || []).map((pokemon) => {
			return {
				queryKey: ["pokemon", pokemon.name],
				queryFn: () => FetchPokemonDetails(pokemon.url),
				enabled: !!data,
				staleTime: Infinity,
				cachesTime: Infinity,
			};
		}),
	});

	useEffect(() => {
		const allSuccess =
			pokemonDetails.length > 0 &&
			pokemonDetails.every((q) => q.isSuccess);

		if (allSuccess) {
			console.log(
				"All Pokémon details:",
				pokemonDetails.map((q) => q.data)
			);
		}
	}, [pokemonDetails]);

	return <></>;
}

export default PokemonList;
