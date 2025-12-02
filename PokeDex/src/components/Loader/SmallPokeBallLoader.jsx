export default function SmallPokeBallLoader() {
	return (
		<div className="flex flex-col items-center justify-center h-[40vh] gap-4">
			<div className="pokeball w-16 h-16 rounded-full border-4 border-black relative animate-spin-slow overflow-hidden">
				{/* Top red half */}
				<div className="absolute top-0 left-0 w-full h-1/2 bg-red-500"></div>

				{/* Bottom white half */}
				<div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

				{/* Middle black stripe */}
				<div className="absolute top-1/2 left-0 w-full h-2 bg-black -translate-y-1/2"></div>

				{/* Center button */}
				<div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white border-4 border-black rounded-full -translate-x-1/2 -translate-y-1/2 shadow"></div>
			</div>

			<p className="text-base font-medium opacity-70">Loading...</p>
		</div>
	);
}