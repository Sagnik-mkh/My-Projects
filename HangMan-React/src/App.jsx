import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/start" element={<StartGame />} />
				<Route path="/play" element={<PlayGame />} />
				<Route path="/*" element={<div>Not Found</div>} />
			</Routes>
		</>
	);
}

export default App;
