function TypeBadges({
	names,
	textSize = "text-sm",
	badgeSize = "badge-md",
	curve,
	padding,
}) {
	return (
		<div className="flex flex-wrap">
			{names.map((types) => {
				return (
					<div
						key={types}
						className={`${padding} ${textSize} ${badgeSize} ${curve} badge bg-pokemon-${types}`}
					>
						{types}
					</div>
				);
			})}
		</div>
	);
}

export default TypeBadges;
