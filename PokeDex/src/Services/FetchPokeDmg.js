import axios from "axios";
import { POKEDEX_API_TYPE_URL } from "../Helper/Constants";

async function FetchPokeDmg(types) {
	const typesSet = new Set(types);
	const response = types.map((type) =>
		axios.get(POKEDEX_API_TYPE_URL + "/" + type)
	);
	const resolvedResponse = await axios.all(response);
	const responseData = resolvedResponse.map((p) => p.data);
	const responseDmgRlation = responseData.map((p) => p.damage_relations);
	const dblDmgData = responseDmgRlation
		.map((p) => p.double_damage_from)
		.flat();
	const weaknessName = new Set(
		dblDmgData.filter((p) => !typesSet.has(p.name)).map((p) => p.name)
	);
	return [...weaknessName];
}

export default FetchPokeDmg;
