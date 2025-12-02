import { POKEDEX_API_BASE_URL } from "../../Helper/Constants";
import usePokeEvo from "../../hooks/usePokeEvo";
import usePokeShortInfo from "../../hooks/usePokeShortInfo";
import EvoPokemon from "../Pokemon/EvoPokemon";

function PokeEvolution({ pokeId }) {
	const {
		data: evoData,
		isLoading: evoLoading,
		isSuccess: evoSuccess,
		isError: evoError,
	} = usePokeEvo(pokeId);

	const {
		data: infoData,
		isLoading: infoLoading,
		isSuccess: infoSuccess,
		isError: infoError,
	} = usePokeShortInfo(
		evoData?.map((ele) => `${POKEDEX_API_BASE_URL}/${ele}`)
	);

	if (infoLoading || evoLoading) return <div>Loading...</div>;

	if (infoError || evoError) return <div>{infoError}</div>

	return (
		<div className="px-2 py-6 rounded-lg bg-black/65">
			<h2 className="ml-4 mb-6 text-2xl text-white">Evolutions</h2>
			<div className="flex">
				{infoSuccess &&
					evoSuccess &&
					infoData.map((pokemon, idx) => {
						return (
							<div className="flex justify-center items-center">
								<EvoPokemon
									key={pokemon.name}
									pokemonId={pokemon.id}
									pokemonImage={pokemon.image2}
									pokemonName={pokemon.name}
									pokemonType={pokemon.types}
								/>
								<div className="mb-24 text-8xl font-medium text-white">
									{idx != infoData.length - 1 ? ">" : ""}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default PokeEvolution;
