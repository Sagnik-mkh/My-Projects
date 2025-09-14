import { useEffect, useRef, useState } from "react";
import Timer from "../Timer/Timer";
import { getDays, getHours, getMins, getSecs } from "../../Utilities/util";

function CountDown() {
	const [target, setTarget] = useState(null);
	const [diff, setDiff] = useState(0);
	const id = useRef(0);

	function handleSubmit() {
		id.current ? clearInterval(id.current) : (id.current = 0);

		id.current = setInterval(() => {
			setDiff(new Date(target) - new Date());
		}, 1000);
	}

	useEffect(() => {
		if (diff < 0) {
			clearInterval(id.current);
			setDiff(0);
		}
	}, [diff]);

	return (
		<>
			<div className="flex flex-col items-center justify-center gap-12 mt-20">
				<h1 className="text-4xl font-semibold">Count Down Timer App</h1>
				<div className="flex items-center justify-center gap-3">
					<input
						type="datetime-local"
						className="input input-primary input-md"
						onChange={(event) => setTarget(event.target.value)}
					/>
					<button
						id="submit"
						onClick={handleSubmit}
						className="btn btn-primary"
					>
						start
					</button>
				</div>
				<Timer
					days={getDays(diff)}
					hours={getHours(diff)}
					mins={getMins(diff)}
					secs={getSecs(diff)}
				/>
			</div>
		</>
	);
}

export default CountDown;
