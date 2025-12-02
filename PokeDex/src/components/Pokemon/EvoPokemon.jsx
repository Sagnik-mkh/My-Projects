import React from "react";
import { useNavigate } from "react-router";
import AltCard from "../Card/AltCard";

function EvoPokemon({ pokemonId, pokemonName, pokemonType, pokemonImage }) {
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
}

export default React.memo(EvoPokemon);
