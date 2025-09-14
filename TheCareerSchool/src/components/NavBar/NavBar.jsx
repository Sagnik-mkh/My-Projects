import { ChangeTheme } from "../../Utility/Util";
import Icons from "../Icons/IconsContainer";
import DropDownItem, { DropDownSmall } from "./DropDownItem";
import MenuItem, { MenuItemsSmall } from "./MenuItem";
import { NavMenuContainer, NavMenuContainerSmall } from "./NavMenuContainer";

function NavBar({
	bgColor,
	textColor,
	dropDownBgColor,
	menuItems,
	navBarName,
	iconName = "book",
	buttonText,
}) {
	return (
		<>
			<div className={`${bgColor} ${textColor} shadow-sm`}>
				<div className="container mx-auto navbar">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<Icons iconName={"bars"} />
							</div>
							<ul
								tabIndex={0}
								className={`menu menu-sm dropdown-content bg-base-200 text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow ${dropDownBgColor}`}
							>
								<NavMenuContainerSmall menuItems={menuItems} />
							</ul>
						</div>

						<a className="text-xl btn btn-ghost text-wrap">
							<Icons iconName={iconName} />
							<span className="hidden xs:inline">
								{navBarName}
							</span>
						</a>
					</div>
					<div className="hidden navbar-center lg:flex">
						<ul className="px-1 menu menu-horizontal">
							<NavMenuContainer
								menuItems={menuItems}
								dropDownBgColor={dropDownBgColor}
							/>
						</ul>
					</div>
					<div className="navbar-end">
						<div className="flex items-center justify-center gap-2">
							<input
								type="checkbox"
								defaultChecked
								className="toggle bg-neutral text-white checked:text-accent"
								onChange={ChangeTheme}
							/>
							<a className="btn">{buttonText}</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
