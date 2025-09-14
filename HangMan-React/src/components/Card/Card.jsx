function Card({ title, body, icon }) {
	return (
		<div className="shadow-sm card w-72 bg-base-300 card-lg">
			<div className="card-body">
				<div className="flex items-center gap-4">
					<i className={`text-white ${icon} text-2xl`}></i>
					<div className="flex flex-col">
						<h2 className="card-title">{title}</h2>
						<p>{body}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
