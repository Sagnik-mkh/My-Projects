import { Route, Routes } from "react-router";
import CoinDetails from "../pages/CoinDetails";
import Home from "../pages/Home";

function Routing() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/details/:coinId" element={<CoinDetails />} />
		</Routes>
	);
}
export default Routing;
