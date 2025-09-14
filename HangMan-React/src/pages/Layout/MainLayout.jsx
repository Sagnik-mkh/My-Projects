import { Outlet, useLocation } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function MainLayout() {
	const locator = useLocation();
	const currPageName = locator.state?.pathName;
	return (
		<div className="flex flex-col min-h-screen">
			<NavBar
				title={"Hangman"}
				links={currPageName ? ["Home", currPageName] : ["Home"]}
			/>
			<Outlet />
			<Footer
				text={"Git-hub project"}
				iconList={[
					"fa-brands fa-twitter",
					"fa-brands fa-github",
					"fa-brands fa-facebook",
				]}
			/>
		</div>
	);
}

export default MainLayout;
