import Capitalize from "../../Helper/Capitalize";
import TypeBadges from "../TypeBadges/TypeBadges";

function Card({ imageUrl, imageAlt, title, cardId, badges, onClickHandler }) {
	return (
		<div
			onClick={onClickHandler}
			className="w-2xs h-full text-black shadow-sm cursor-pointer card hover:poke-pop"
		>
			{/* Card image */}
			<figure className="pt-6 bg-gray-200 rounded-md">
				<img
					className="object-contain w-full h-40"
					src={imageUrl}
					alt={imageAlt}
				/>
			</figure>
			<div className="card-body">
				{/* Card title */}
				<h2 className="card-title">
					{Capitalize(title)}
					<div className="text-xs badge badge-ghost">#{cardId}</div>
				</h2>
				<div className="justify-start card-actions">
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

export default Card;
