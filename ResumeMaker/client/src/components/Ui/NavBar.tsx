import { FaBarsStaggered } from "react-icons/fa6";

export default function NavBar() {
	return (
		<div className="shadow-sm navbar bg-info">
			<div className="navbar-start">
				<a className="text-xl btn btn-ghost text-info-content font-bolder">
					ResuMake
				</a>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 font-black menu menu-horizontal">
					<li>
						<a>Item 1</a>
					</li>
					<li>
						<a>Item 2</a>
					</li>
					<li>
						<a>Item 3</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<i
						tabIndex={0}
						role="button"
						className="btn btn-sm rounded-field"
					>
						<FaBarsStaggered className="text-lg" />
					</i>
					<ul
						tabIndex={-1}
						className="fixed left-0 z-50 w-screen p-2 mt-4 text-white shadow-sm menu dropdown-content bg-base-200"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Item 2</a>
						</li>
					</ul>
				</div>
				<a className="hidden text-center md:btn md:inline">Button</a>
			</div>
		</div>
	);
}
