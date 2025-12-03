import { useState } from "react";
import { useNavigate } from "react-router";

function Search() {
	const [pokemon, setPokemon] = useState(" ");
	const navigator = useNavigate();

	return (
		<div className="flex justify-center items-center gap-4 mb-12">
			<input
				onChange={(event) =>
					setPokemon(event.target.value.toLowerCase())
				}
				type="text"
				placeholder="Which pokemon are you looking for?"
				className="p-6 input input-primary w-2xl"
			/>
			<button
				className="btn btn-primary"
				onClick={() => navigator(`/details/${pokemon}`)}
			>
				Search
			</button>
		</div>
	);
}

export default Search;
