import { useCallback, useEffect, useState } from "react";
import usePokeList from "./usePokeList";
import axios from "axios";
// import FetchPokemonList from "./FetchPokemonList";

function usePokeShortInfo(url) {
	/**
	 * 1.Setting state for data, loading and error
	 */
	const [pokeData, setPokeData] = useState({
		data: {
			next: null,
			prev: null,
			list: null,
		},
		loading: true,
		error: null,
	});

	/**
	 * 1.Fetching all pokemon data from usePokeList
	 */
	const { data, loading, error } = usePokeList(url);

	/**
	 * 1.Fetching required data using the urls(next, previous and pokemon details) from usePokeList.
	 * 2.Using useCallback to cache the results for optimization.
	 */
	const FetchData = useCallback(async () => {
		if (!loading && !error) { // check for loading/error of usePokeList
			setPokeData((state) => {
				return {
					...state,
					loading: true,
					error: null,
				};
			});
			try {
				// parsing the urls from axios
				const genPromise = data.results.map((ele) =>
					axios.get(ele.url)
				);
				// resolving the resturned promises
				const resolvePromise = await axios.all(genPromise);
				// Getting required data by mapping the resolved array
				const reqPokeInfo = resolvePromise.map((ele) => {
					const myData = ele.data;
					return {
						id: myData.id,
						name: myData.name,
						image: myData.sprites.other.dream_world.front_default,
						types: myData.types.map((ele) => ele.type.name),
					};
				});
				// Setting the state for result
				setPokeData((state) => {
					return {
						...state,
						loading: false,
						data: {
							...state.data,
							next: data.next,
							prev: data.previous,
							list: reqPokeInfo,
						},
					};
				});
			} catch (error) { // catching errors
				console.log("Error fetching usePokeShortInfo", error);
				// Setting the state for error
				setPokeData((state) => {
					return {
						...state,
						loading: false,
						error: error,
					};
				});
			}
		}
	}, [data, error, loading]);

	/**
	 * 1.Using effects to call the function basis dependencies.
	 * 2.Dependencies: data and FetchData
	 */
	useEffect(() => {
		if (data) {
			FetchData();
		}
	}, [data, FetchData]);

	/**
	 * Returning my resultant array
	 */
	return pokeData;
}

export default usePokeShortInfo;