// StatsTable.jsx
import React from "react";
import Capitalize from "../../Helper/Capitalize";

const MAX_BLOCKS = 15; // how many rows per column
const MAX_STAT_VALUE = 255; // Pokémon base stats max (for scaling)

const StatsTable = ({ stats }) => {
	// stats should be an array like:
	// [{ label: "HP", value: 80 }, { label: "Attack", value: 120 }, ...]
	return (
		<div className="p-6 w-full rounded-2xl bg-neutral-400">
			<h2 className="mb-6 text-gray-800">Stats</h2>

			<div className="flex justify-around">
				{/* columns */}
				{stats.map((stat) => {
					const filledBlocks = Math.round(
						(stat.value / MAX_STAT_VALUE) * MAX_BLOCKS
					);

					return (
						<div
							key={stat.label}
							className="flex flex-col items-center text-center"
						>
							{/* blocks (bottom-filled) */}
							<div className="flex flex-col-reverse gap-1">
								{Array.from({ length: MAX_BLOCKS }).map(
									(_, idx) => {
										const isFilled = idx < filledBlocks;
										return (
											<div
												key={idx}
												className={`h-2 w-14 ${
													isFilled
														? "bg-sky-500"
														: "bg-white"
												}`}
											/>
										);
									}
								)}
							</div>

							{/* label */}
							<span className="mt-1.5 text-center w-14 text-xs font-semibold text-gray-800">
								{stat.label == "special-attack"
									? "Special Attack"
									: stat.label == "special-defense"
									? "Special Defence"
									: Capitalize(stat.label)}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default StatsTable;
