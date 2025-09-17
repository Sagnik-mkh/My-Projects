function Grid({ board, makeCard }) {
	return (
		<div className="w-[300px] sm:w-[500px] aspect-square grid grid-cols-3 mx-auto gap-0.5">
			{/* Making all the cards from array */}
			{board.map((item, idx) => makeCard(item, idx))}
		</div>
	);
}

export default Grid;
