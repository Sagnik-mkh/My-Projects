let operation = "";
const inpt = document.querySelector("[data-inpt]");
const allBtn = document.querySelector("[data-all-btn]");
const evalBtn = document.querySelector("[data-ans-btn]");
const clearBtn = document.querySelector("[data-clear-btn]");
const delBtn = document.querySelector("[data-del-btn]");

function addOperation(inptVal) {
    operation += inptVal;
    inpt.value = operation;
}

function resetOperation() {
    operation = "";
    inpt.value = "";
}

function setOperation(value) {
    operation = value;
    inpt.value = value;
}

function btnOnClickStyle(bgStyle, txtStyle, data, dataVal, myBtn) {
    myBtn.setAttribute(data, dataVal);
    myBtn.style.backgroundColor = bgStyle;
    myBtn.style.color = txtStyle;
}

function btnOffClickStyle(myBtn, data, dataVal, ...props) {
    myBtn.setAttribute(data, dataVal);
    props.forEach((prop) => {
        myBtn.style.removeProperty(prop)
    });
}

function onClick(btnType, tgt) {
    if (btnType === "num") {
        btnOnClickStyle("white", "black", "data-click", "active", tgt);
    } else if (btnType == "op") {
        btnOnClickStyle("darkorange", "black", "data-click", "active", tgt);
    } else if (btnType == "del") {
        btnOnClickStyle("darkred", "white", "data-click", "active", tgt);
    }
}

function offClick(tgt) {
    btnOffClickStyle(tgt, "data-click", "inactive", "background-color", "color")
}

allBtn.addEventListener(`click`, (event) => {
    const btn = event.target;
    const isReqtBtn = (btn.hasAttribute("data-num-btn") || btn.hasAttribute("data-op-btn"));
    if (isReqtBtn) addOperation(btn.textContent.trim());
});

allBtn.addEventListener(`mouseover`, function mouseOverHandler(event) {
    const tgt = event.target;
    if (tgt.tagName === "BUTTON") {
        const btnType = tgt.getAttribute("data-btn-type");
        tgt.addEventListener(`mousedown`, function changeStyle(event) { onClick(btnType, tgt) });
        tgt.addEventListener(`mouseup`, function reverseStyle(event) { offClick(tgt) });
    }
});

allBtn.addEventListener(`mouseout`, function mouseOutHandler(event) {
    const tgt = event.target;
    if (tgt.tagName === "BUTTON") {
        tgt.removeEventListener(`mousedown`, function changeStyle(event) { onClick(btnType, tgt) });
        btnOffClickStyle(tgt, "data-click", "inactive", "background-color", "color");
    }
});

evalBtn.addEventListener(`click`, function getAns(event) {
    try {
        const ans = Function(`"use strict"; return (${operation})`)();
        setOperation(ans);
    } catch (error) {
        alert("Invalid Input");
        resetOperation();
    }
});

clearBtn.addEventListener(`click`, function clearBtn(event) { resetOperation(); });

delBtn.addEventListener(`click`, function delOpn(event) {
    operation = operation.slice(0, -1);
    inpt.value = operation;
});