import { ResetInputBox } from "../Util/Utility";
import InputBox from "../InputBox/InputBox";
import Button from "../Buttons/Button";

function TextInputForm({
	onSubmit,
	inptShow,
	setWord,
	onShowClick,
	resetWord,
	navigator,
}) {
	return (
		<>
			<form
				id="textInputForm"
				className="flex flex-col items-center justify-center gap-5 mt-6"
				onSubmit={onSubmit}
			>
				<h2 className="text-lg text-center text-nowrap animate-bounce">
					Enter a word to start game
				</h2>
				<InputBox
					type={inptShow}
					style={"secondary"}
					size={"md"}
					onChangeHandler={setWord}
				/>
				<div className="flex gap-3 p-2">
					<Button
						btnText={"Show"}
						type={"secondary"}
						size={"md"}
						onClickHandler={onShowClick}
						btnType={"button"}
					/>
					<Button
						btnText={"Reset"}
						type={"error"}
						size={"md"}
						btnType={"button"}
						onClickHandler={resetWord}
					/>
					<Button
						btnText={"Submit"}
						type={"primary"}
						size={"md"}
						onClickHandler={navigator}
						btnType={"submit"}
					/>
				</div>
			</form>
		</>
	);
}

export default TextInputForm;
