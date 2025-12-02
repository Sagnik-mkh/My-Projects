import { Routes, Route } from "react-router";
import MainLayout from "../pages/layouts/MainLayout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const PokeDetailsContainer = lazy(() =>
	import("../components/PokeDetails/PokeDetailsContainer")
);

function Routing() {
	return (
		<div className="flex flex-col gap-20 bg-[url('../../public/pokemonBackground.jpg')] bg-cover bg-fixed bg-center h-full">
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
