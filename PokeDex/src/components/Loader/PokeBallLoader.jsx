export default function PokeballLoader() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-base-200">
			{/* Pokéball */}
			<div className="relative w-28 h-28 rounded-full border-4 border-black overflow-hidden animate-spin-slow shadow-lg">
				{/* Top half */}
				<div className="absolute top-0 left-0 w-full h-1/2 bg-red-500"></div>

				{/* Bottom half */}
				<div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

				{/* Black center band */}
				<div className="absolute top-1/2 left-0 w-full h-4 bg-black -translate-y-1/2"></div>

				{/* Center button */}
				<div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white border-4 border-black rounded-full -translate-x-1/2 -translate-y-1/2 shadow-md"></div>
			</div>

			<p className="text-lg font-semibold opacity-70 tracking-wide">
				Loading Pokémon…
			</p>
		</div>
	);
}
