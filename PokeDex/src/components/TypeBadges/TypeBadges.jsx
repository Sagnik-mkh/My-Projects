import React from "react";
import Capitalize from "../../Helper/Capitalize";

export default React.memo(function TypeBadges({
	names,
	textSize = "text-sm",
	badgeSize = "badge-md",
	curve,
	padding,
}) {
	/**
	 * ----------------------
	 * Render the type badges
	 * ----------------------
	 * @param {array} names - The names of the type badges
	 * @param {string} textSize - The text size of the type badges
	 * @param {string} badgeSize - The badge size of the type badges
	 * @param {string} curve - The curve of the type badges
	 * @param {string} padding - The padding of the type badges
	 * @returns {JSX.Element} The type badges component
	 */
	names.sort((a, b) => a.localeCompare(b));
	return (
		<div className="flex flex-wrap">
			{names.map((types) => {
				return (
					<div
						key={types}
						className={`border-none ${padding} ${textSize} ${badgeSize} ${curve} badge bg-pokemon-${types}`}
					>
						{Capitalize(types)}
					</div>
				);
			})}
		</div>
	);
});
