function Logo({ LogoSource }) {
	return (
		<div className="p-3 max-w-2xs">
			<img src={LogoSource} alt="Hangman Logo" />
		</div>
	);
}

export default Logo;
