import React from "react";
import TypeBadges from "./TypeBadges";

export default React.memo(function BadgesList({ names, text }) {
	/**
	 * ----------------------
	 * Render the badges list
	 * ----------------------
	 * @param {array} names - The names of the badges
	 * @param {string} text - The text of the badges
	 * @returns {JSX.Element} The badges list component
	 */
	return (
		<div>
			<h2 className="mb-3 text-lg">{text}</h2>
			<TypeBadges
				names={names}
				textSize={"text-sm"}
				curve={"rounded-lg"}
				padding={"mb-2 mr-2"}
				badgeSize={"w-32 h-8"}
			/>
		</div>
	);
});
