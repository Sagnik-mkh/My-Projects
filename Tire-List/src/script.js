//Global variable declared for selecting the item which is being dragged
let currDragItem, dragItem, currTierLists;

/**
 * Function to intialize the current element being dragged
 */
function setUpDrag(ele) {
	ele.addEventListener(`dragstart`, function selectDraggedItem(event) {
		currDragItem = event.target.parentNode;
	});

	ele.addEventListener(`dblclick`, function removeFromTier(event) {
		const nonTierSection = document.getElementById(`img-lists`);
		nonTierSection.appendChild(event.target.parentNode);
	});
}

/**
 * Function to drop the dragged item
 */
function setUpDrop(ele) {
	ele.addEventListener(`drop`, (event) => {
		event.preventDefault();
		ele.appendChild(currDragItem);
	});

	ele.addEventListener(`dragover`, (event) => {
		event.preventDefault();
	});
}

/**
 * Function to generate random colors(rgb)
 */
function genRandColor() {
	const r = Math.ceil(Math.random() * 180);
	const g = Math.ceil(Math.random() * 180);
	const b = Math.ceil(Math.random() * 180);

	return `rgb(${r},${g},${b})`;
}

//Selecting the tier input and input button for creating a new tier
const tierInputBtn = document.getElementById(`tier-add-btn`);
const tierInput = document.getElementById("new-tier-name");

/**
 * Event listener for creating a new tier on submit
 */
tierInputBtn.addEventListener(`click`, function addNewTier(event) {
	event.preventDefault();
	const currTierName = tierInput.value;
	if (currTierName == "") {
		alert("Enter a valid tier name");
		return;
	}

	const currTierColor = genRandColor();

	const tierContainer = document.createElement(`div`);
	tierContainer.classList.add(
		"tier-list",
		"grid",
		"grid-cols-[1fr_4fr]",
		"md:grid-cols-[1fr_8fr]",
		"min-h-20",
		"border-b-4",
		"border-solid",
		"border-neutral-700",
		"bg-neutral-900"
	);

	const tierName = document.createElement(`h1`);
	tierName.textContent = currTierName;
	tierName.classList.add(
		"text-lg",
		"text-center",
		"text-wrap",
		"px-1",
		"h-full",
		"w-full",
		"border",
		"border-solid",
		"border-black",
		"place-content-center",
		"font-medium"
	);
	tierName.style.backgroundColor = currTierColor;

	const imgConatiner = document.createElement(`div`);
	imgConatiner.classList.add("tire-list-items", "flex", "flex-wrap", "gap-2");

	tierContainer.appendChild(tierName);
	tierContainer.appendChild(imgConatiner);

	const tierList = document.getElementById(`tier-lists-collection`);
	tierList.appendChild(tierContainer);

	/**
	 * Initializing all available tiers with `currTierLists`
	 * Adding event listener `drop` and `dragover` for dropping the seleted item
	 */
	currTierLists = document.querySelectorAll(`.tire-list-items`);
	currTierLists.forEach(setUpDrop);
});

//Selecting img input and input button for creating a new image from url
const imgInputBtn = document.getElementById("img-add-btn");
const imgInput = document.getElementById("new-img-url");

/**
 * Event Listener for input button to create a new image from given url on submit
 */
imgInputBtn.addEventListener(`click`, function addImg(event) {
	event.preventDefault();
	const imgUrl = imgInput.value;
	if (imgUrl == "") {
		alert("Enter valid url");
		return;
	}

	const imgContainer = document.createElement(`div`);
	imgContainer.classList.add("img-items", "h-20", "w-20");

	const img = document.createElement(`img`);
	img.setAttribute("src", imgUrl);
	img.setAttribute("alt", "img");
	img.classList.add("w-full", "h-full", "object-cover", "object-top");

	imgContainer.appendChild(img);

	const imgList = document.getElementById("img-lists");

	imgList.appendChild(imgContainer);

	/**
	 * Initializing `dragItem` with node list of all available images
	 * Adding event listener `dragstart` for all image elements
	 */
	dragItem = document.querySelectorAll(`.img-items`);
	dragItem.forEach(setUpDrag);
});
