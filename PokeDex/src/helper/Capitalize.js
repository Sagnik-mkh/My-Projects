function Capitalize(text) {
	/**
	 * ----------------------
	 * Capitalize the text
	 * ----------------------
	 * @param {string} text - The text to capitalize
	 * @returns {string} The capitalized text
	 */
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export default Capitalize;
