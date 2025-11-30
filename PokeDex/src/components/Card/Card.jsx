import Capitalize from "../../Helper/Capitalize";
import TypeBadges from "../TypeBadges/TypeBadges";

function Card({ imageUrl, imageAlt, title, cardId, badges, onClickHandler }) {
	return (
		<div
			onClick={onClickHandler}
			className="w-full h-full text-black shadow-sm cursor-pointer card hover:poke-pop"
		>
			<figure className="pt-6 bg-gray-300 rounded-md">
				<img
					className="object-contain w-full h-40"
					src={imageUrl}
					alt={imageAlt}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{Capitalize(title)}
					<div className="text-xs badge badge-ghost">#{cardId}</div>
				</h2>
				<div className="justify-start card-actions">
					{/* props: badges is an array */}
					<TypeBadges
						names={badges}
						textSize="text-xs"
						padding={"px-3 py-3"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Card;
