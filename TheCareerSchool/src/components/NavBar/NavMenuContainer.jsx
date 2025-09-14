import DropDownItem, { DropDownSmall } from "./DropDownItem";
import MenuItem, { MenuItemsSmall } from "./MenuItem";

export function NavMenuContainerSmall({ menuItems }) {
	return menuItems.map(function createMobItems(item, idx) {
		const itemName = item[0];
		const isDropDown = item[1];
		return isDropDown ? (
			<DropDownSmall key={idx} dropDownItems={isDropDown} itemName={itemName} />
		) : (
			<MenuItemsSmall key={idx} itemName={itemName} />
		);
	});
}

export function NavMenuContainer({ menuItems, dropDownBgColor }) {
	return menuItems?.map(function createMenuItems(item, idx) {
		const itemName = item[0];
		const isDropDown = item[1];
		return isDropDown ? (
			<DropDownItem
				dropDownItems={isDropDown}
				dropDownBgColor={dropDownBgColor}
				itemName={itemName}
				key={idx}
			/>
		) : (
			<MenuItem itemName={itemName} key={idx} />
		);
	});
}
