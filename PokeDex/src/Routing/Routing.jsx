import { Routes, Route } from "react-router";
import PokeDex from "../Components/PokeDex/PokeDex";
import PokeDetails from "../Components/PokeDetails/PokeDetails";
import Footer from "../Components/Footer/Footer";

function Routing() {
	return (
		<div className="flex flex-col gap-2">
			<Routes>
				<Route path="/" element={<PokeDex />} />
				<Route path="/details/:pokemon" element={<PokeDetails />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default Routing;
