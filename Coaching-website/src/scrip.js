function openNavBar() {
    let element = document.getElementById("drop-down-bars");
    let elementIcon = document.getElementById("drop-down-icon");

    if (element.classList.contains("max-h-0")) {
        element.classList.remove("max-h-0", "opacity-0");
        element.classList.add("max-h-screen", "opacity-100");
        elementIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        element.classList.remove("max-h-screen", "opacity-100");
        element.classList.add("opacity-0");

        setTimeout(() => {
            element.classList.add("max-h-0");
        }, 500);

        elementIcon.classList.replace("fa-xmark", "fa-bars");
    }
}