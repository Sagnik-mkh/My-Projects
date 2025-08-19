function Grid({ board, makeGrid }) {
	return (
		<div className="h-[500px] w-[500px] grid grid-cols-3 mx-auto gap-0.5">
			{board.map(makeGrid)}
		</div>
	);
}

export default Grid;
