import { FaYoutube, FaGithub } from "react-icons/fa";
import { GiPokecog } from "react-icons/gi";

const icons = {
	github: FaGithub,
	youtube: FaYoutube,
	pokemon: GiPokecog, // placeholder Pokémon icon
};

export default function Icons({ iconName, size = "2em", color = "black" }) {
	const IconComponent = icons[iconName];

	// If icon doesn't exist, return null or a fallback UI
	if (!IconComponent) return null;

	return <IconComponent size={size} color={color} />;
}
