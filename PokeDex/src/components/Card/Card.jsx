import React from "react";
import Capitalize from "../../Helper/Capitalize";
import TypeBadges from "../TypeBadges/TypeBadges";

export default React.memo(function Card({
	imageUrl,
	imageAlt,
	title,
	cardId,
	badges,
	onClickHandler,
}) {
	/**
	 * ----------------------
	 * Render the card
	 * ----------------------
	 * @param {string} imageUrl - The url of the image
	 * @param {string} imageAlt - The alt text of the image
	 * @param {string} title - The title of the card
	 * @param {number} cardId - The id of the card
	 * @param {array} badges - The badges of the card
	 * @param {function} onClickHandler - The function to be called when the card is clicked
	 * @returns {JSX.Element} The card component
	 */
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
});
