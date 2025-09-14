import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { formValueStore } from "../../zustand/store";

function Input({ label, id, name, ref }) {
	// zustand state variable to store the value of email and password
	const { formValue, setFormValue } = formValueStore();
	const [isValid, setIsValid] = useState(true);
	const [shake, setShake] = useState(false);
	const [text, setText] = useState("");

	// Introducing a local ref
	const localRef = useRef(null);

	// Re-setting isValid and shake when inner text changes
	useEffect(() => {
		setIsValid(true);
		setShake(false);
	}, [text]);

	// adding custom properties to current value of ref
	useImperativeHandle(ref, () => {
		return {
			focus: () => localRef.current.focus(),
			setInvalid: () => setIsValid(false),
			shakeInput: () => setShake(true),
		};
	});

	// function expression to change the value of state variable on change of values
	const onChangeHandler = (event) => {
		setText(event.target.value);
		setFormValue({
			[label]: event.target.value,
		});
	};

	return (
		<>
			<input
				id={id}
				name={name}
				type={label}
				className={`${isValid ? "input" : "input input-error"} ${
					shake ? "animate-shake" : ""
				}`}
				value={formValue[label]} // state as value
				onChange={onChangeHandler} // on change event
				ref={localRef} // passing local ref
			/>
		</>
	);
}

export default Input;
