function DropDownItem({ dropDownItems, itemName, dropDownBgColor }) {
	return (
		<li>
			<details>
				<summary>{itemName}</summary>
				<ul className={`p-2 ${dropDownBgColor} z-30`}>
					{dropDownItems.map(function createSubMenu(item, idx) {
						return (
							<li key={idx}>
								<a className="text-nowrap text-neutral-content">
									{item}
								</a>
							</li>
						);
					})}
				</ul>
			</details>
		</li>
	);
}

export function DropDownSmall({ dropDownItems, itemName }) {
	return (
		<>
			<li>
				<a>{itemName}</a>
			</li>
			<ul className="p-2">
				{dropDownItems.map(function createMobSubItems(item, idx) {
					return (
						<li key={idx}>
							<a>{item}</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default DropDownItem;
