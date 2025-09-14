function Footer({ text, iconList }) {
	const GenIcons = (iconName) => {
		return <i className={`${iconName} text-2xl`}></i>;
	};

	const GetIcons = (iconList) => {
		return iconList?.map((item, idx) => {
			return <a key={`${item}-${idx}`}>{GenIcons(item)}</a>;
		});
	};

	return (
		<div className="bg-neutral text-neutral-content">
			<footer className="container items-center p-4 mx-auto footer sm:footer-horizontal">
				<aside className="items-center grid-flow-col">
					<i className="text-3xl fa-solid fa-hashtag"></i>
					<p>{text}</p>
				</aside>
				<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
					{GetIcons(iconList)}
				</nav>
			</footer>
		</div>
	);
}

export default Footer;
