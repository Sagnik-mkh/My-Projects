import React from "react";
import { useNavigate } from "react-router";
import AltCard from "../Card/AltCard";

export default React.memo(function EvoPokemon({ pokemonId, pokemonName, pokemonType, pokemonImage }) {
	/**
	 * ----------------------
	 * Navigate to the pokemon details page using react-router
	 * ----------------------
	 */
	const navigator = useNavigate();

	/**
	 * ----------------------
	 * Navigation handler
	 * ----------------------
	 */
	function onClickHandler() {
		navigator(`/details/${pokemonName}`);
	}

	/**
	 * ----------------------
	 * Render the pokemon card
	 * ----------------------
	 * @param {number} pokemonId - The id of the pokemon
	 * @param {string} pokemonName - The name of the pokemon
	 * @param {array} pokemonType - The type of the pokemon
	 * @param {string} pokemonImage - The image of the pokemon
	 * @returns {JSX.Element} The pokemon card component
	 */
	return (
		<AltCard
			imageUrl={pokemonImage}
			imageAlt={pokemonName}
			title={pokemonName}
			cardId={pokemonId}
			badges={pokemonType}
			onClickHandler={onClickHandler}
		/>
	);
});
