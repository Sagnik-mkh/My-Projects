import { getWordNow } from "../Util/Utility";

function MaskedText({ text, usedLetters }) {
	const currWord = getWordNow(text, usedLetters);
	return (
		<>
			<div className="font-poppins">
				{currWord.map((ele, idx) => {
					return (
						<span
							key={`${ele}-${idx}`}
							className="text-2xl font-semibold select-none p-2 m-1.5"
						>
							{ele}
						</span>
					);
				})}
			</div>
		</>
	);
}

export default MaskedText;
