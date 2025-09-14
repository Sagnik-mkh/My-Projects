const capitalLetterCheck = /[A-Z]/;
const specialCharCheck = /[!@#$%^&*(),.?":{}|<>_-]/;

function PasswordValidator(password) {
	const lengthCheck = password.length;

	if (!capitalLetterCheck.test(password)) {
		return false;
	}
	if (!specialCharCheck.test(password)) {
		return false;
	}
	if (lengthCheck < 8) {
		return false;
	}
	return true;
}

export default PasswordValidator;
