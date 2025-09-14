const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function EmailValidator(email) {
	return regex.test(email);
}

export default EmailValidator;
