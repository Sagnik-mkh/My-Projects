import { useQuery } from "@tanstack/react-query";
import FetchEvoImages from "../../Services/FetchEvoImages";
import Pokemon from "../Pokemon/Pokemon";

function PokeEvolution({ evolution }) {
	const { data, isSuccess } = useQuery({
		queryKey: evolution,
		queryFn: () => FetchEvoImages(evolution),
	});

	if (isSuccess) console.log(data);

	return (
		<div className="flex">
			{isSuccess &&
				data?.map((p) => {
					return (
						<Pokemon
							key={p.name}
							pokemonImage={p.image}
							pokemonId={p.id}
							pokemonType={p.types}
							pokemonName={p.name}
						/>
					);
				})}
		</div>
	);
}

export default PokeEvolution;
