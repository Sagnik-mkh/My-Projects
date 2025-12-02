import Capitalize from "../../Helper/Capitalize";

function TypeBadges({
	names,
	textSize = "text-sm",
	badgeSize = "badge-md",
	curve,
	padding,
}) {
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
}

export default TypeBadges;
