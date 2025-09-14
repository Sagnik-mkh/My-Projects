import { Route, Routes } from "react-router";
import LandingPage from "../../pages/LandingPage/LandingPage";
import StartGame from "../../pages/StartGame/StartGame";
import PlayGame from "../../pages/PlayGame/PlayGame";
import MainLayout from "../../pages/Layout/MainLayout";

function Routing() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<LandingPage />} />
				<Route path="/start" element={<StartGame />} />
				<Route path="/play" element={<PlayGame />} />
			</Route>
			<Route path="/*" element={<div>Not Found</div>} />
		</Routes>
	);
}

export default Routing;
