import Pokemon from "../Pokemon/Pokemon";
import { POKEDEX_API_BASE_URL } from "../../Helper/Constants";
import { useState } from "react";
import usePokeShortInfo from "../../Hooks/usePokeShortInfo";
import Button from "../Button/Button";

function PokemonList() {
	const [pokeApiUrl, setApiUrl] = useState(POKEDEX_API_BASE_URL);
	const { data, loading, error } = usePokeShortInfo(pokeApiUrl);

	function goToPrevUrl() {
		setApiUrl(data.prev ? data.prev : pokeApiUrl);
	}

	function goToNextUrl() {
		setApiUrl(data.next ? data.next : pokeApiUrl);
	}

	if (loading) {
		return (
			<div className="btn btn-accent">
				<span className="loading loading-bars loading-xs py-3"></span>
				<span className="font-bold py-3">Loading...</span>
			</div>
		);
	}
	if (error) {
		return <div className="btn btn-accent">{error}</div>;
	}

	if (data) {
		return (
			<>
				<div className="container">
					<div className="flex justify-center items-center gap-6 mb-6">
						<Button
							buttonText={"Previous"}
							buttonColor="btn-info"
							buttonSize="btn-md w-24"
							onClickHandler={goToPrevUrl}
						/>
						<Button
							buttonText={"Next"}
							buttonColor="btn-info"
							buttonSize="btn-md w-24"
							onClickHandler={goToNextUrl}
						/>
					</div>
					<div className="grid grid-cols-4 gap-4 mx-auto">
						{data.list.map((pokemon) => {
							return (
								<Pokemon
									key={pokemon.name}
									pokemonId={pokemon.id}
									pokemonImage={pokemon.image}
									pokemonName={pokemon.name}
									pokemonType={pokemon.types}
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
