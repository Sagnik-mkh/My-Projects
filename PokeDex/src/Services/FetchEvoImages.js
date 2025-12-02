import axios from "axios";
import { POKEDEX_API_BASE_URL } from "../Helper/Constants";

/**
 * ----------------------
 * Fetch the evolution images
 * ----------------------
 * @param {array} evolution - The evolution of the pokemon
 * @returns {array} The evolution images
 */
async function FetchEvoImages(evolution) {
	/**
	 * ----------------------
	 * Fetch the evolution images
	 * ----------------------
	 * @param {array} evolution - The evolution of the pokemon
	 * @returns {array} The evolution images
	 */
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
