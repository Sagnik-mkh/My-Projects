import Capitalize from "../../Helper/Capitalize";

function Header({ name, id }) {
	return (
		<h1 className="my-12 text-4xl text-center bg-base-100">
			{Capitalize(name)} #{id}
		</h1>
	);
}

export default Header;
