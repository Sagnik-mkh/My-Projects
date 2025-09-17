import { Icons } from "../Icons/Icon";

// component for each box in the grid
export const Card = function ({ onClickHandler, idx, icon }) {
	return (
		<>
			<div
				onClick={() => onClickHandler(idx)}
				className="flex items-center justify-center text-2xl border-2 border-black rounded-md md:text-4xl bg-amber-300 text-neutral-800"
			>
				{/* Icons rendered as per the prop passed */}
				<Icons
					nameOfIcon={
						icon === "X" ? "cross" : icon === "O" ? "circle" : "pen"
					}
				/>
			</div>
		</>
	);
};
