import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

export const Icons = function ({ nameOfIcon }) {
	switch (nameOfIcon) {
		case "circle":
			return <FaRegCircle />;
		case "cross":
			return <FaTimes />;
		default:
			return <FaPen />;
	}
};
