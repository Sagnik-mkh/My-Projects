import Icons from "../Icons/Icons";

function Footer() {
	return (
		<footer className="p-8 rounded footer footer-horizontal footer-center bg-base-200 text-base-content">
			<nav className="grid grid-flow-col gap-4">
				<a className="link link-hover">About us</a>
				<a className="link link-hover">Contact</a>
				<a className="link link-hover">Jobs</a>
				<a className="link link-hover">Press kit</a>
			</nav>
			<nav>
				<div className="grid grid-flow-col gap-4">
					<a href="https://github.com/Sagnik-mkh" target="_blank">
						<Icons iconName={"github"} />
					</a>
					<a
						href="https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q"
						target="_blank"
					>
						<Icons iconName={"youtube"} />
					</a>
					<a href="https://www.pokemon.com/us" target="_blank">
						<Icons iconName={"pokemon"} color="red" />
					</a>
				</div>
			</nav>
			<aside>
				<p>PokéDex UI • Built by Sagnik</p>
				<p>© {new Date().getFullYear()} — All rights reserved.</p>
			</aside>
		</footer>
	);
}

export default Footer;
