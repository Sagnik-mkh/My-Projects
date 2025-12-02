import axios from "axios";

async function FetchPokeInfo(urls) {
	try {
		// returning response
		const response = urls.map((ele) => axios.get(ele));

		// resolving response
		const resolvePromise = await axios.all(response);

		// GET request data
		const reqPokeInfo = resolvePromise.map((ele) => {
			const myData = ele.data;
			return {
				id: myData.id,
				name: myData.name,
				image: myData.sprites.other.dream_world.front_default,
				types: myData.types.map((ele) => ele.type.name),
				stats: myData.stats.map((ele) => {
					return {
						label: ele.stat.name,
						value: ele.base_stat,
					};
				}),
				image2: myData.sprites.other["official-artwork"].front_default,
				weight: myData.weight,
				height: myData.height,
				abilities: myData.abilities.map((ele) => ele.ability.name),
			};
		});

		return reqPokeInfo;
	} catch (error) {
		// catching errors
		console.log("Error fetching usePokeShortInfo", error);
		throw error;
	}
}

export default FetchPokeInfo;
