import axios from "axios";

async function FetchPokeSpeciesInfo(url) {
	try {
		// Fetch call
		const response = await axios.get(url);
		const respData = response.data;
		const EnFlavText = respData.flavor_text_entries.filter(
			(item) => item.language.name === "en"
		)[0];
		const genusEn = respData.genera.filter(
			(ele) => ele.language.name == "en"
		);
		return {
			description: EnFlavText.flavor_text, // pokemon description
			category: genusEn.map((ele) => ele.genus), // pokemon species category
		};
	} catch (error) {
		console.log("Error fetching pokemon list:", error);
		throw error;
	}
}

export default FetchPokeSpeciesInfo;
