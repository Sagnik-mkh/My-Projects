import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

function MainLayout() {
	/**
	 * ----------------------
	 * Render the main layout
	 * ----------------------
	 * @returns {JSX.Element} The main layout component
	 */
	return (
		<div className="flex flex-col justify-center items-center gap-12">
			{/* Variable component */}
			<Outlet />

			{/* fixed component */}
			<Footer />
		</div>
	);
}

export default MainLayout;
