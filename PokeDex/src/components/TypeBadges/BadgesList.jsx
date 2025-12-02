import TypeBadges from "./TypeBadges";

function BadgesList({ names, text }) {
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
}

export default BadgesList;
