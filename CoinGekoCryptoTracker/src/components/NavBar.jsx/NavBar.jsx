// import { useContext } from "react";
// import { CurrencyContext } from "../../context/CurrencyContext";
import store from "../../store/store";

function NavBar({ name, dropdownItems = ["USD", "INR"] }) {
	const { setCurrency } = store();

	return (
		<>
			<div className="shadow-sm navbar bg-info text-info-content">
				<div className="container mx-auto navbar p-0 min-h-0.5">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle"
							>
								<i className="fa-solid fa-bars"></i>
							</div>
							<ul
								tabIndex={0}
								className="p-2 mt-3 font-semibold shadow text-neutral-content menu menu-sm dropdown-content bg-neutral rounded-box z-1 w-52"
							>
								{dropdownItems.map((item) => {
									return (
										<li
											onClick={() =>
												setCurrency(
													`${item.toLowerCase()}`
												)
											}
											className="p-0.5 cursor-pointer hover:bg-neutral-700 rounded-md"
										>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="navbar-center">
						<a className="text-xl btn btn-ghost">{name}</a>
					</div>
					<div className="navbar-end">
						<button className="btn btn-ghost btn-circle">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
						<button className="btn btn-ghost btn-circle">
							<div className="indicator">
								<i className="fa-solid fa-bell"></i>
								<span className="badge badge-xs badge-accent indicator-item"></span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
