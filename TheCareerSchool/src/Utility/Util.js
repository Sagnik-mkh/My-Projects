export function ChangeTheme(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute("data-theme", "sunset");
	} else {
		document.documentElement.setAttribute("data-theme", "fantasy");
	}
}
