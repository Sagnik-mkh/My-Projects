import { useQuery } from "@tanstack/react-query";
import FetchPokemonDetails from "../../Services/FetchPokemonDetails";
import Pokemon from "../Pokemon/Pokemon";
import { POKEDEX_API_BASE_URL } from "../../helper/Constants";
import { useState } from "react";

function PokemonList() {
	const [pokeApiUrl, setApiUrl] = useState(POKEDEX_API_BASE_URL);

	const { isLoading, isFetching, isError, isSuccess, data, error } = useQuery(
		{
			queryKey: ["Pokemon", pokeApiUrl],
			queryFn: () => FetchPokemonDetails(pokeApiUrl),
			staleTime: 24 * 60 * 60 * 1000,
			cacheTime: 25 * 60 * 60 * 1000,
		}
	);

	if (isLoading || isFetching) return <div>Loading...</div>;

	if (isError) return <div>Error: {error.message}</div>;

	if (isSuccess) {
		return (
			<>
				<div className="container">
					<div className="flex justify-center items-center">
						<button
							className="btn btn-primary"
							onClick={() => {
								setApiUrl(
									data.prevUrl ? data.prevUrl : pokeApiUrl
								);
							}}
						>
							Prev
						</button>
						<button
							className="btn btn-primary"
							onClick={() =>
								setApiUrl(
									data.nextUrl ? data.nextUrl : pokeApiUrl
								)
							}
						>
							Next
						</button>
					</div>
					<div className="grid grid-cols-4 gap-4 mx-auto">
						{data.pokeList.map((pokemon) => {
							const pokeName = pokemon.name;
							const pokeId = pokemon.id;
							const pokeImg = pokemon.image;
							const pokeTypes = pokemon.types;

							return (
								<Pokemon
									key={pokeName}
									pokemonId={pokeId}
									pokemonImage={pokeImg}
									pokemonName={pokeName}
									pokemonType={pokeTypes}
								/>
							);
						})}
					</div>
				</div>
			</>
		);
	}
}

export default PokemonList;
