import { Icons } from "../Icons/Icon";

export const Card = function ({ changeTurn, idx, icon }) {
	let currIcon = <Icons nameOfIcon={"pen"} />;
	if (icon === "X") {
		currIcon = <Icons nameOfIcon={"cross"} />;
	} else if (icon === "O") {
		currIcon = <Icons nameOfIcon={"circle"} />;
	}

	return (
		<>
			<div
				onClick={() => changeTurn(idx)}
				className="flex items-center justify-center text-4xl border-2 border-black rounded-md bg-amber-300 text-neutral-800"
			>
				{currIcon}
			</div>
		</>
	);
};
