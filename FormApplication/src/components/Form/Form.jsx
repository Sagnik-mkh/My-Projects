import PasswordValidator from "../../helper/PasswordValidator";
import EmailValidator from "../../helper/EmailValidator";
import Input from "../Input/Input";
import { formValueStore } from "../../zustand/store";
import { useRef } from "react";

function Form() {
	// state to capture email and password while typing
	const { formValue } = formValueStore();
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	// function to determine what happens when form is submitted
	const handleFormSubmit = (event) => {
		event.preventDefault(); // prevents the page from reloading when form is submitted
		const isValidEmail = EmailValidator(formValue.email); // JS function to check if email is Valid
		const isValidPassword = PasswordValidator(formValue.password); // JS  function to check if password is Valid

		// Using ref properties to change component attributes
		if (!isValidEmail) {
			emailRef.current.focus();
			emailRef.current.setInvalid();
			emailRef.current.shakeInput();
		}

		if (!isValidPassword) {
			passwordRef.current.focus();
			passwordRef.current.setInvalid();
			passwordRef.current.shakeInput();
		}
	};

	return (
		<>
			<div>
				<form onSubmit={handleFormSubmit}>
					<fieldset className="p-4 border fieldset bg-base-200 border-base-300 rounded-box w-xs">
						<legend className="fieldset-legend">New Form</legend>

						<label className="label" htmlFor="inpurEmail">
							Email
						</label>
						<Input
							id={"emailInput"}
							name={"emailInput"}
							label={"email"}
							ref={emailRef}
						/>

						<label className="label" htmlFor="inputPassword">
							Password
						</label>
						<Input
							id={"passwordInput"}
							name={"passwordInput"}
							label={"password"}
							ref={passwordRef}
						/>
						<div className="flex items-center justify-center mt-3">
							{" "}
							<input
								type="submit"
								className="btn btn-secondary"
							/>
						</div>
					</fieldset>
				</form>
			</div>
		</>
	);
}

export default Form;
