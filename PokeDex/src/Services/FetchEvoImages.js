import axios from "axios";
import { POKEDEX_API_BASE_URL } from "../Helper/Constants";

async function FetchEvoImages(evolution) {
	const response = evolution.map((species) =>
		axios.get(`${POKEDEX_API_BASE_URL}/${species.name}`)
	);
	const resolve = await axios.all(response);
	const resData = resolve.map((p) => p.data);
	const pokeImages = resData.map((p) => {
		return {
			name: p.name,
			image: p.sprites.other["official-artwork"].front_default,
			types: p.types.map((t) => t.type.name),
			id: p.id,
		};
	});
	return pokeImages;
}

export default FetchEvoImages;
