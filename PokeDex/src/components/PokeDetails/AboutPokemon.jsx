function AboutPokemon({ height, weight, category, abilities }) {
	return (
		<div className="overflow-x-auto border rounded-box border-none max-w-[70%] bg-info">
			<table className="table">
				<tbody className="text-base">
					{/* row 1 */}
					<tr>
						<td className="text-white">Height</td>
						<td>{height} dm</td>
					</tr>
					{/* row 2 */}
					<tr>
						<td className="text-white">Weight</td>
						<td>{weight} hg</td>
					</tr>
					{/* row 3 */}
					<tr>
						<td className="text-white">Category</td>
						<td>{category}</td>
					</tr>
					{/* row 4 */}
					<tr>
						<td className="text-white">Abilities</td>
						<td className="flex flex-wrap justify-start">
							{abilities.map((ability, idx) => {
								if (idx == abilities.length - 1) {
									return <span key={ability}>{ability}</span>;
								} else {
									return (
										<span key={ability}>{ability}, </span>
									);
								}
							})}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default AboutPokemon;
