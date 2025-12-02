import { useParams } from "react-router";
import usePokeSpecies from "../../hooks/usePokeSpecies";
import { POKEDEX_API_BASE_URL } from "../../Helper/Constants";
import usePokeShortInfo from "../../hooks/usePokeShortInfo";
import usePokeType from "../../hooks/usePokeType";
import PokeDetails from "./PokeDetails";
import PokeBallLoader from "../Loader/PokeBallLoader";
import PokeEvoContainer from "../Evo/PokeEvoContainer";

function PokeDetailsContainer() {
	/**
	 * ----------------------
	 * Render the poke details container
	 * ----------------------
	 * @returns {JSX.Element} The poke details container component
	 */
	const { pokemon } = useParams();

	/**
	 * ----------------------
	 * Render the species data
	 * ----------------------
	 * @returns {JSX.Element} The species data component
	 */
	const {
		data: speciesData,
		isLoading: speciesLoading,
		isError: speciesError,
		isSuccess: speciesSuccess,
	} = usePokeSpecies(pokemon);

	const {
		data: pokeDataArray,
		isLoading: pokeLoading,
		isError: pokeError,
		isSuccess: pokeSuccess,
	} = usePokeShortInfo([`${POKEDEX_API_BASE_URL}/${pokemon}`]);

	const {
		data: weaknessData,
		isLoading: weaknessLoading,
		isError: weaknessError,
		isSuccess: weaknessSuccess,
	} = usePokeType(pokeDataArray?.[0]?.types);

	if (speciesLoading || pokeLoading || weaknessLoading) {
		return <PokeBallLoader />;
	}

	if (speciesError || pokeError || weaknessError) {
		return <div>{pokeError ? pokeError : speciesError}</div>;
	}

	if (speciesSuccess && pokeSuccess && weaknessSuccess) {
		return (
			<>
				<PokeDetails
					pokeData={pokeDataArray[0]}
					speciesData={speciesData}
					weaknessData={weaknessData}
				/>
				<PokeEvoContainer pokeId={pokeDataArray[0].id} />
			</>
		);
	}
}

export default PokeDetailsContainer;
