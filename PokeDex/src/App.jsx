import { POKEDEX_API_BASE_URL } from "./Helper/Constants";
import usePokeShortInfo from "./Hooks/usePokeShortInfo";
import Routing from "./Routing/Routing";

function App() {
	const { data, loading, error } = usePokeShortInfo(POKEDEX_API_BASE_URL);
	if (!loading && !error) console.log("usePokeShortInfo", data);
	return <Routing />;
}

export default App;
