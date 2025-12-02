// AboutPokemon.jsx
import React from "react";
import Capitalize from "../../Helper/Capitalize";

const AboutPokemon = ({ height, weight, category, abilities }) => {
	return (
		<div className="w-5/6 rounded-xl bg-[#48a8db] px-8 py-6 text-slate-900">
			<div className="grid grid-cols-1 gap-y-8 gap-x-16 md:grid-cols-2">
				{/* LEFT COLUMN */}
				<div className="space-y-8">
					{/* Height */}
					<div className="flex flex-col justify-center items-start">
						<p className="text-sky-50">Height</p>
						<p className="mt-1 text-lg tracking-wide">
							{height / 10} m
						</p>
					</div>

					{/* Weight */}
					<div className="flex flex-col justify-center items-start">
						<p className="text-sky-50">Weight</p>
						<p className="mt-1 text-lg tracking-wide">
							{weight / 10} kg
						</p>
					</div>

					{/* Gender */}
					<div className="flex flex-col justify-center items-start">
						<p className="text-sky-50">Gender</p>
						<p className="flex gap-4 items-center mt-2 text-2xl font-extrabold">
							<span>♂</span>
							<span>♀</span>
						</p>
					</div>
				</div>

				{/* RIGHT COLUMN */}
				<div className="space-y-8">
					{/* Category */}
					<div className="flex flex-col justify-center items-start">
						<p className="text-sky-50">Category</p>
						<p className="mt-1 text-lg tracking-wide">{category}</p>
					</div>

					{/* Abilities */}
					<div className="flex flex-col justify-center items-start">
						<p className="text-sky-50">Abilities</p>
						<div className="flex gap-3 items-center mt-1">
							<p className="text-lg tracking-wide">
								{Capitalize(abilities?.[0])}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPokemon;
