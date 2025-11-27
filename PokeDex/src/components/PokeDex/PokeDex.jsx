import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

function PokeDex() {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold tracking-[1rem] my-8">PokeDex</h1>
			<Search />
			<PokemonList />
		</div>
	);
}

export default PokeDex;
