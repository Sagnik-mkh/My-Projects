import axios from "axios";
import { POKEDEX_API_TYPE_URL } from "../Helper/Constants";

async function FetchPokeWeakness(types) {
	if (!types || types.length == 0) return;
	try {
		const responsePromise = [...new Set(types)].map((ele) =>
			axios.get(`${POKEDEX_API_TYPE_URL}/${ele}`)
		);
		const response = await axios.all(responsePromise);
		const damageRating = response.map((ele) => ele.data.damage_relations);
		const doubleDamage = damageRating.map((ele) => ele.double_damage_from);
		const doubleDamageTo = damageRating.map((ele) => ele.double_damage_to);
		const doubleDamageName = doubleDamage.flat().map((ele) => ele.name);
		const doubleDamageToName = doubleDamageTo.flat().map((ele) => ele.name);

		const typeSet = new Set(types);
		const exception = new Set(doubleDamageToName);
		return [
			...new Set(
				doubleDamageName.filter(
					(ele) => !typeSet.has(ele) && !exception.has(ele)
				)
			),
		];
	} catch (error) {
		console.log("Error fetching usePokeType", error);
		throw error;
	}
}

export default FetchPokeWeakness;
