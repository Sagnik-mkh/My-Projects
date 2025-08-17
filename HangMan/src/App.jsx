import { Route, Routes } from "react-router-dom";
import TextInputContainer from "./components/textInputForm/textInputContainer";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
	return (
		<>
			<div>My Navbar</div>
			<Routes>
				<Route path="/Play" element={<PlayGame />} />
				<Route path="/Start" element={<StartGame />} />
				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
		</>
	);
}

export default App;
