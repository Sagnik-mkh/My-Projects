import { POKEDEX_API_BASE_URL } from "../../Helper/Constants";
import usePokeShortInfo from "../../hooks/usePokeShortInfo";
import usePokeList from "../../hooks/usePokeList";
import Pagination from "./Pagination";
import PokeCards from "./PokeCards";
import React, { useState } from "react";
import PokeCardSkeleton from "../Loader/CustomListLoader";

export default React.memo(function PokemonList() {
	/**
	 * ----------------------
	 * State for maintaining the current page data API url
	 * Changes basis pagination
	 * ----------------------
	 * @returns {JSX.Element} The pokemon list component
	 */
	const [pokeApiUrl, setApiUrl] = useState(POKEDEX_API_BASE_URL);

	// Custom hook for getting list of urls
	const {
		data: listData,
		isLoading: listLoading,
		isError: listError,
		isSuccess: listSuccess,
		isPending: listPending,
	} = usePokeList(pokeApiUrl);

	// Custom hook used for GET pokemon related info
	const {
		data: infoData,
		isLoading: infoLoading,
		isError: infoError,
		isSuccess: infoSuccess,
		isPending: infoPending,
	} = usePokeShortInfo(listData?.urls);

	// Navigate to prev page
	function goToPrevUrl() {
		setApiUrl(listData.prev ? listData.prev : pokeApiUrl);
	}

	// Navigate to next page
	function goToNextUrl() {
		setApiUrl(listData.next ? listData.next : pokeApiUrl);
	}

	// Custom Loader
	if (listLoading || infoLoading || infoPending || listPending) {
		const skeletonArray = Array.from({ length: 20 });
		return (
			<div className="container">
				<div className="grid grid-cols-4 justify-items-center gap-12">
					{skeletonArray.map((_, idx) => (
						<PokeCardSkeleton key={idx} />
					))}
				</div>
			</div>
		);
	}

	// Error state
	if (infoError || listError) {
		return (
			<div className="btn btn-accent">
				{infoError ? infoError : listError}
			</div>
		);
	}

	if (infoSuccess && listSuccess) {
		console.log("Info data", infoData);
		return (
			<div className="container">
				<Pagination
					goToNextUrl={goToNextUrl}
					goToPrevUrl={goToPrevUrl}
				/>
				<div className="grid grid-cols-4 justify-items-center gap-12">
					<PokeCards infoData={infoData} infoLoading={infoLoading} />
				</div>
			</div>
		);
	}
});
