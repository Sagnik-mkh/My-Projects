import Capitalize from "../../Helper/Capitalize";
import TypeBadges from "../TypeBadges/TypeBadges";

function AltCard({
	imageUrl,
	imageAlt,
	title,
	cardId,
	badges,
	onClickHandler,
}) {
	return (
		<div
			onClick={onClickHandler}
			className="flex flex-col justify-center items-center h-full text-black cursor-pointer w-2xs"
		>
			{/* Card image */}
			<figure className="flex justify-center items-center">
				<img
					className="object-contain p-4 rounded-full border-8 border-white w-50 h-50"
					src={imageUrl}
					alt={imageAlt}
				/>
			</figure>
			<div className="pb-0 card-body">
				{/* Card title */}
				<h2 className="font-medium text-white card-title">
					{Capitalize(title)}
					<div className="text-white">#{cardId}</div>
				</h2>
				<div className="justify-center card-actions">
					{/* props: badges is an array */}
					<TypeBadges
						names={badges}
						textSize={"text-xs"}
						padding={"mr-1"}
						badgeSize={"rounded-md w-14"}
					/>
				</div>
			</div>
		</div>
	);
}

export default AltCard;
