import { POKEDEX_API_BASE_URL } from "../../Helper/Constants";
import usePokeEvo from "../../hooks/usePokeEvo";
import usePokeShortInfo from "../../hooks/usePokeShortInfo";
import SmallPokeBallLoader from "../Loader/SmallPokeBallLoader";
import PokeEvolution from "./PokeEvolution";

export default function PokeEvoContainer({ pokeId }) {
	/**
	 * ----------------------
	 * Render the poke evolution container
	 * ----------------------
	 * @param {number} pokeId - The id of the pokemon
	 * @returns {JSX.Element} The poke evolution container component
	 */
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

	if (infoLoading || evoLoading) return <SmallPokeBallLoader />;

	if (infoError || evoError) return <div>{infoError}</div>;

	return (
		<PokeEvolution
			infoSuccess={infoSuccess}
			infoData={infoData}
			evoSuccess={evoSuccess}
		/>
	);
}
