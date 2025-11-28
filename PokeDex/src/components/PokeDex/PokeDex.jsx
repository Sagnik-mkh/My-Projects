import React from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

function PokeDex() {
	return (
		<React.Fragment>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl font-bold tracking-[1rem] my-8">
					PokeDex
				</h1>
				<Search />
				<PokemonList />
			</div>
		</React.Fragment>
	);
}

export default PokeDex;
