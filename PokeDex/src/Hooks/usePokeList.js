import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function usePokeList(url) {
	/**
	 * 1.Setting state for data, loading and errors
	 */
	const [pokeData, setPokeData] = useState({
		data: null,
		loading: true,
		error: null,
	});

	/**
	 * 1.Fetching data using axios
	 * 2.Caching result using "useCallback()" hook
	 * 3.Using callbacks to set the state variable as it ensures all setters run one after another 
	 */
	const FetchData = useCallback(async () => {
		// resetting the pokeData state
		setPokeData((state) => {
			return {
				...state, // current state
				loading: true,
				error: null,
			};
		});
		// Fetching data
		try {
			const response = await axios.get(url);
			setPokeData((state) => {
				return {
					...state, // current state
					data: response.data,
					loading: false,
				};
			});
		} catch (error) { // Catching errors
			console.log("Error fetching pokemon list:", error);
			setPokeData((state) => {
				return {
					...state, // current state
					error: error,
					loading: false,
				};
			});
		}
	}, [url]);

	/**
	 * 1.Effect for running the function as per dependencies.
	 * 2.Dependencies: url and cached callback (API GET).
	 */
	useEffect(() => {
		if (url) {
			FetchData();
		}
	}, [url, FetchData]);

	// return the final state variable
	return pokeData;
}

export default usePokeList;
