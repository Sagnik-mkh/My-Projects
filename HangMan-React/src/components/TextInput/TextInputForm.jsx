import InputBox from "../InputBox/InputBox";
import Button from "../Buttons/Button";

function TextInputForm({
	onSubmit,
	inptShow,
	onChangeHandler,
	resetWord,
	navigator,
	word,
	showInput,
	hideInput,
}) {
	return (
		<>
			<form
				id="textInputForm"
				className="flex flex-col items-center justify-center gap-5"
				onSubmit={onSubmit}
			>
				<h2 className="text-lg text-center text-nowrap animate-bounce">
					Enter a word to start game
				</h2>
				{/* container to take form input */}
				<InputBox
					type={inptShow}
					style={"secondary"}
					size={"md"}
					onChangeHandler={onChangeHandler}
					currVal={word}
				/>
				<div className="flex gap-3 p-2">
					{/* button to show the input */}
					<Button
						btnText={"Show"}
						type={"btn-secondary"}
						size={"btn-md"}
						onMouseDownHandler={showInput}
						onMouseUpHandler={hideInput}
						onMouseLeaveHandler={hideInput}
						btnType={"button"}
					/>
					{/* button to reset the input */}
					<Button
						btnText={"Reset"}
						type={"btn-error"}
						size={"btn-md"}
						btnType={"button"}
						onClickHandler={resetWord}
					/>
					{/* button to submit and play */}
					<Button
						btnText={"Submit"}
						type={"btn-primary"}
						size={"btn-md"}
						onClickHandler={navigator}
						btnType={"submit"}
					/>
				</div>
			</form>
		</>
	);
}

export default TextInputForm;
