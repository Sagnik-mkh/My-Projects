import Card from "../Card/Card";

function Pokemon({ pokemonId, pokemonName, pokemonType, pokemonImage }) {
	return (
		<>
			<Card
				imageUrl={pokemonImage}
				imageAlt={pokemonName}
				title={pokemonName}
				cardId={pokemonId}
				badges={pokemonType}
			/>
		</>
	);
}

export default Pokemon;
