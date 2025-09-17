import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

// Get Icons from react-icons based on keywords
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
