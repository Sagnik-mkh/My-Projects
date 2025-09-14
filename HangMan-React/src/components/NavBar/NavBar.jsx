import { Link } from "react-router";

function NavBar({ title, links }) {
	function GenNavigators() {
		return links?.map((item, idx) => {
			return (
				<li key={`${item}-${idx}`} className="mx-2">
					<Link
						to={"/"}
						className="text-base font-semibold btn btn-ghost"
					>
						{item}
					</Link>
				</li>
			);
		});
	}

	return (
		<>
			<div className="shadow-sm bg-info text-info-content">
				<div className="container mx-auto navbar">
					<div className="flex-1">
						<a className="text-3xl btn btn-ghost">{title}</a>
					</div>
					<div className="flex-none">
						<ul className="px-1 menu menu-horizontal">
							{GenNavigators()}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
