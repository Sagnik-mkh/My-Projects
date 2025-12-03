import { Routes, Route } from "react-router";
import MainLayout from "../pages/layouts/MainLayout";
import { lazy, Suspense } from "react";
import PokeBG from "../assets/images/pokemonBackground.jpg";

/**
 * ----------------------
 * Lazy load the home page
 * ----------------------
 * @returns {JSX.Element} The home page component
 */
const Home = lazy(() => import("../pages/Home"));

/**
 * ----------------------
 * Lazy load the poke details container
 * ----------------------
 * @returns {JSX.Element} The poke details container component
 */
const PokeDetailsContainer = lazy(() =>
	import("../components/PokeDetails/PokeDetailsContainer")
);

function Routing() {
	/**
	 * ----------------------
	 * Render the routing
	 * ----------------------
	 * @returns {JSX.Element} The routing component
	 */
	return (
		<div
			className={`flex flex-col gap-20 bg-cover bg-fixed bg-center h-full`}
			style={{ backgroundImage: `url(${PokeBG})` }}
		>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route
						path="/details/:pokemon"
						element={
							<Suspense fallback={<div>Loading...</div>}>
								<PokeDetailsContainer />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default Routing;
