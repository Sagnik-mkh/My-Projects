import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import FetchPokeInfo from "../../Services/FetchPokeInfo";
import Capitalize from "../../Helper/Capitalize";
import React from "react";
import AboutPokemon from "./AboutPokemon";
import TypeBadges from "../../Components/TypeBadges/TypeBadges";
import PokeEvolution from "./PokeEvolution";

function PokeDetails() {
	const { pokemon } = useParams();
	const { data, isSuccess, isLoading, isPending } = useQuery({
		queryKey: [pokemon],
		queryFn: () => FetchPokeInfo(pokemon),
	});

	if (isLoading || isPending) {
		return <div>Loading...</div>;
	}

	if (isSuccess) {
		return (
			<React.Fragment>
				<h1 className="my-12 text-4xl text-center">
					{Capitalize(data.name)} #{data.id}
				</h1>
				<div className="container flex gap-12 justify-center mx-auto">
					<div className="bg-gray-200">
						<img src={data.image} alt={data.name} />
					</div>
					<div className="flex flex-col gap-6">
						<AboutPokemon
							height={data.height}
							weight={data.weight}
							category={data.category}
							abilities={data.abilities}
						/>
						<div>
							<p className="my-3 text-lg">Types</p>
							<TypeBadges
								names={data.types}
								textSize="text-sm"
								badgeSize="badge-xl"
								curve="rounded-lg"
								padding="px-6 py-5"
							/>
						</div>
						<div>
							<p className="my-3 text-lg">Weakness</p>
							<TypeBadges
								names={data.weakness}
								textSize="text-sm"
								badgeSize="badge-xl"
								curve="rounded-lg"
								padding="px-6 py-5"
							/>
						</div>
					</div>
				</div>
				<div className="container mx-auto">
					<PokeEvolution evolution={data.evolution} />
				</div>
			</React.Fragment>
		);
	}
}

export default PokeDetails;
