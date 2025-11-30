import Card from "../Card/Card";
import { useNavigate } from "react-router";

function Pokemon({ pokemonId, pokemonName, pokemonType, pokemonImage }) {
	const navigator = useNavigate();

	function onClickHandler() {
		navigator(`/details/${pokemonName}`);
	}

	return (
		<>
			<Card
				imageUrl={pokemonImage}
				imageAlt={pokemonName}
				title={pokemonName}
				cardId={pokemonId}
				badges={pokemonType}
				onClickHandler={onClickHandler}
			/>
		</>
	);
}

export default Pokemon;
