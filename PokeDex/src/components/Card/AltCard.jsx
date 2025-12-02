import React from "react";
import Capitalize from "../../Helper/Capitalize";
import TypeBadges from "../TypeBadges/TypeBadges";

export default React.memo(function AltCard({
	imageUrl,
	imageAlt,
	title,
	cardId,
	badges,
	onClickHandler,
}) {
	/**
	 * ----------------------
	 * Render the alt card
	 * ----------------------
	 * @param {string} imageUrl - The url of the image
	 * @param {string} imageAlt - The alt text of the image
	 * @param {string} title - The title of the card
	 * @param {number} cardId - The id of the card
	 * @param {array} badges - The badges of the card
	 * @param {function} onClickHandler - The function to be called when the card is clicked
	 * @returns {JSX.Element} The alt card component
	 */
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
});
