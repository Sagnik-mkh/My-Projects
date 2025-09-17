import { Button } from "../Button/Buttons";

function Header({ turn, resetBoard }) {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-6 my-12 select-none">
				<h1 className="p-1 text-4xl text-center">Welcome to TicTakToe</h1>
				<div className="flex items-center gap-3 p-1">
					<span className="text-lg basis-24 shrink-0">
						Turn for {turn}
					</span>
					<Button
						onClickHandler={resetBoard}
						value={"Reset"}
						style={"secondary"}
					/>
				</div>
			</div>
		</>
	);
}

export default Header;
