import PokemonList from "../components/PokemonList/PokemonList";
import Search from "../components/Search/Search";

function PokeDex({ header = "PokeDex" }) {
	/**
	 * ----------------------
	 * Render the home page
	 * ----------------------
	 * @param {string} header - The header of the home page
	 * @returns {JSX.Element} The home page component
	 */
	return (
		<div className="flex flex-col justify-center items-center">
			{/* Header */}
			<h1 className="text-4xl font-bold tracking-[1rem] my-8">
				{header}
			</h1>

			{/* Search bar */}
			<Search />

			{/* Pokemon list */}
			<PokemonList />
		</div>
	);
}

export default PokeDex;
