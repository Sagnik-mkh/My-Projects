import TextInput from "../textInput/TextInput";
import Button from "../button/button";

function TextInputForm({
	handleFormSubmit,
	inputValue,
	handleInputChange,
	offClick,
	onClick,
	show,
}) {
	return (
		<form className="flex items-end justify-center" onSubmit={handleFormSubmit}>
			<div className="mr-4">
				<TextInput
					label={"Enter a word or phrase"}
					type={show}
					value={inputValue}
					onChange={handleInputChange}
				/>
			</div>
			<div className="flex gap-2.5">
				<Button
					text={"Show"}
					type={"button"}
					styleType={"secondary"}
					btnSize={"md"}
					offClickHandler={offClick}
					onClickHandler={onClick}
				/>
				<Button
					text={"Ok"}
					type={"submit"}
					styleType={"primary"}
					btnSize={"md"}
				/>
			</div>
		</form>
	);
}

export default TextInputForm;
