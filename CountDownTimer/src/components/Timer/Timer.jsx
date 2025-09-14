function Timer({ days, hours, mins, secs }) {
	return (
		<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span className="font-mono text-5xl countdown">
					<span
						style={{ "--value": days }}
						aria-live="polite"
						aria-label={days}
					>
						{days}
					</span>
				</span>
				days
			</div>
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span className="font-mono text-5xl countdown">
					<span
						style={{ "--value": hours }}
						aria-live="polite"
						aria-label={hours}
					>
						{hours}
					</span>
				</span>
				hours
			</div>
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span className="font-mono text-5xl countdown">
					<span
						style={{ "--value": mins }}
						aria-live="polite"
						aria-label={mins}
					>
						{mins}
					</span>
				</span>
				min
			</div>
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<span className="font-mono text-5xl countdown">
					<span
						style={{ "--value": secs }}
						aria-live="polite"
						aria-label={secs}
					>
						{secs}
					</span>
				</span>
				sec
			</div>
		</div>
	);
}

export default Timer;
