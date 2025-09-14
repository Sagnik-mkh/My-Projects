import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";

function Home() {
	return (
		<>
			<NavBar
				bgColor={"bg-info"}
				textColor={"text-info-content"}
				dropDownBgColor={"bg-base-200"}
				menuItems={[
					["Home"],
					["About"],
					["Courses", ["Course1", "Course2"]],
					["Contacts"],
				]}
				navBarName={"The Career School"}
				buttonText={"Join Us"}
				iconName={"book"}
			/>
			<Hero />
		</>
	);
}

export default Home;
