import { getWordNow } from "../Util/Utility";

function MaskedText({ text, usedLetters }) {
	const currWord = getWordNow(text, usedLetters); // JS function which returns an array with display elements

	return (
		<>
			<div className="font-poppins">
				{/* Array of JSX rendered separately using currWord array's elements */}
				{currWord.map((ele, idx) => {
					return (
						<span
							key={`${ele}-${idx}`} // array element and index together taken as key to handle identical elements
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
