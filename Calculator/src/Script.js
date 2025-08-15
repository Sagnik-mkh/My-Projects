// Stores the ongoing operation as a string
let operation = "";

// DOM element references
const inpt = document.querySelector("[data-inpt]");       // Input field to display operations and results
const allBtn = document.querySelector("[data-all-btn]"); // Container holding all calculator buttons
const evalBtn = document.querySelector("[data-ans-btn]");// "Equals" button
const clearBtn = document.querySelector("[data-clear-btn]");// "Clear" button
const delBtn = document.querySelector("[data-del-btn]"); // "Delete" button

// Appends a value (number/operator) to the current operation
function addOperation(inptVal) {
    operation += inptVal;
    inpt.value = operation;
}

// Resets the current operation
function resetOperation() {
    operation = "";
    inpt.value = "";
}

// Sets operation to a specific value (used when showing results)
function setOperation(value) {
    operation = value;
    inpt.value = value;
}

// Applies "active click" styling to a button
function btnOnClickStyle(bgStyle, txtStyle, data, dataVal, myBtn) {
    myBtn.setAttribute(data, dataVal);
    myBtn.style.backgroundColor = bgStyle;
    myBtn.style.color = txtStyle;
}

// Removes "active click" styling from a button
function btnOffClickStyle(myBtn, data, dataVal, ...props) {
    myBtn.setAttribute(data, dataVal);
    props.forEach((prop) => {
        myBtn.style.removeProperty(prop);
    });
}

// Handles styling when a button is clicked down
function onClick(btnType, tgt) {
    if (btnType === "num") {                 // Number buttons
        btnOnClickStyle("white", "black", "data-click", "active", tgt);
    } else if (btnType == "op") {            // Operator buttons
        btnOnClickStyle("darkorange", "black", "data-click", "active", tgt);
    } else if (btnType == "del") {           // Delete button
        btnOnClickStyle("darkred", "white", "data-click", "active", tgt);
    }
}

// Handles styling when a button click is released
function offClick(tgt) {
    btnOffClickStyle(tgt, "data-click", "inactive", "background-color", "color");
}

// Event: When any calculator button is clicked
allBtn.addEventListener(`click`, (event) => {
    const btn = event.target;
    const isReqtBtn = (btn.hasAttribute("data-num-btn") || btn.hasAttribute("data-op-btn"));
    if (isReqtBtn) addOperation(btn.textContent.trim()); // Append button value to operation
});

// Event: When mouse hovers over a button, add click event listeners for styling
allBtn.addEventListener(`mouseover`, function mouseOverHandler(event) {
    const tgt = event.target;
    if (tgt.tagName === "BUTTON") {
        const btnType = tgt.getAttribute("data-btn-type");
        if (tgt.getAttribute("data-click") === "inactive") {
            tgt.addEventListener(`mousedown`, function changeStyle() { onClick(btnType, tgt) });
            tgt.addEventListener(`mouseup`, function reverseStyle() { offClick(tgt) });
        }
    }
});

// Event: When mouse leaves a button, remove active styling
allBtn.addEventListener(`mouseout`, function mouseOutHandler(event) {
    const tgt = event.target;
    if (tgt.tagName === "BUTTON") {
        const btnType = tgt.getAttribute("data-btn-type");
        if (tgt.getAttribute("data-click") === "active") {
            tgt.removeEventListener(`mousedown`, function changeStyle() { onClick(btnType, tgt) });
            btnOffClickStyle(tgt, "data-click", "inactive", "background-color", "color");
        }
    }
});

// Event: When pointer is over a button (works for mouse & touch)
allBtn.addEventListener('pointerover', function (event) {
    const tgt = event.target;
    if (tgt.tagName === "BUTTON") {
        const btnType = tgt.getAttribute("data-btn-type");
        if (tgt.getAttribute("data-click") === "inactive") {
            tgt.addEventListener(`pointerdown`, function changeStyle() { onClick(btnType, tgt) });
            tgt.addEventListener(`pointerup`, function reverseStyle() { offClick(tgt) });
        }
    }
});

// Event: When pointer leaves a button (works for mouse & touch)
allBtn.addEventListener('pointerout', function (event) {
    const tgt = event.target;
    if (tgt.tagName === "BUTTON") {
        const btnType = tgt.getAttribute("data-btn-type");
        if (tgt.getAttribute("data-click") === "active") {
            tgt.removeEventListener(`pointerdown`, function changeStyle() { onClick(btnType, tgt) });
            btnOffClickStyle(tgt, "data-click", "inactive", "background-color", "color");
        }
    }
});

// Event: When equals button is clicked, evaluate the expression
evalBtn.addEventListener(`click`, function getAns() {
    try {
        // Secure evaluation using Function constructor
        const ans = Function(`"use strict"; return (${operation})`)();
        setOperation(ans); // Show result
    } catch (error) {
        alert("Invalid Input");
        console.log(error);
        resetOperation();
    }
});

// Event: When clear button is clicked, reset the operation
clearBtn.addEventListener(`click`, function clearBtn() { resetOperation(); });

// Event: When delete button is clicked, remove last character
delBtn.addEventListener(`click`, function delOpn() {
    operation = operation.slice(0, -1);
    inpt.value = operation;
});