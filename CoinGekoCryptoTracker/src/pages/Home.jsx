import Banner from "../components/Banner/Banner";
import CoinTable from "../components/CoinTable/CoinTable";
import NavBar from "../components/NavBar.jsx/NavBar";

function Home() {
	return (
		<>
			<NavBar name={"Crypto Tracker"} dropdownItems={["USD", "INR", "EUR"]}/>
			<Banner />
			<CoinTable />
		</>
	);
}

export default Home;
