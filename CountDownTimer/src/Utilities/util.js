export const getDays = (diff) => {
	return Math.floor(diff / (1000 * 60 * 60 * 24));
};

export const getHours = (diff) => {
	const hrsInMs = diff % (1000 * 60 * 60 * 24);
	return Math.floor(hrsInMs / (1000 * 60 * 60));
};

export const getMins = (diff) => {
	const minsInMs = diff % (1000 * 60 * 60);
	return Math.floor(minsInMs / (1000 * 60));
};

export const getSecs = (diff) => {
	const secInMs = diff % (1000 * 60);
	return Math.floor(secInMs / 1000);
};
