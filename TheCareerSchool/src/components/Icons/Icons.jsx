import { FaBars, FaBookOpen } from "react-icons/fa6";

function GetIcon(name) {
	switch (name) {
		case "bars":
			return <FaBars />;
		case "book":
			return <FaBookOpen />;
		default:
			return <FaBars />;
	}
}

export default GetIcon;
