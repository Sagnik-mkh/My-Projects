import { useEffect, useState } from "react";

function Hero() {
	const slides = ["heroBackground1", "heroBackground2", "heroBackground3"];

	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 10000);

		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<div className="relative w-full h-[80vh] overflow-hidden">
			{slides.map((bg, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
						current === index ? "opacity-100 z-10" : "opacity-0 z-0"
					}`}
				>
					<div className={`hero min-h-[80vh] ${bg}`}>
						<div className="hero-overlay"></div>
						<div className="container text-center hero-content text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 text-5xl font-bold text-white capitalize">
									learn from home
								</h1>
								<p className="mb-5 text-gray-200">
									Provident cupiditate voluptatem et in.
									Quaerat fugiat ut assumenda excepturi
									exercitationem quasi. In deleniti eaque aut
									repudiandae et a id nisi.
								</p>
								<button className="btn btn-primary">
									Get Started
								</button>
							</div>
						</div>
					</div>

					<div className="absolute flex justify-center gap-2 transform -translate-y-1/2 left-5 right-5 top-11/12 sm:top-1/2 sm:justify-between sm:gap-0">
						<button
							className="btn btn-circle"
							onClick={() =>
								setCurrent((prev) =>
									prev === 0 ? slides.length - 1 : prev - 1
								)
							}
						>
							❮
						</button>
						<button
							className="btn btn-circle"
							onClick={() =>
								setCurrent((prev) => (prev + 1) % slides.length)
							}
						>
							❯
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default Hero;
