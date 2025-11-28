function Card({ imageUrl, imageAlt, title, cardId, badges }) {
	return (
		<div className="w-full h-full text-black shadow-sm cursor-pointer card hover:poke-pop">
			<figure className="pt-6 bg-gray-300 rounded-md">
				<img
					className="object-contain w-full h-40"
					src={imageUrl}
					alt={imageAlt}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title.charAt(0).toUpperCase() + title.slice(1)}
					<div className="text-xs badge badge-ghost">{cardId}</div>
				</h2>
				<div className="justify-start card-actions">
					{/* props: badges is an array */}
					{badges.map((types) => {
						const typeName = types.type.name;
						return (
							<div
								key={typeName}
								className={`px-3 py-1.5 text-xs font-bold badge bg-pokemon-${typeName}`}
							>
								{typeName}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Card;
