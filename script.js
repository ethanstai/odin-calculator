let result;

function operate(num1, sign, num2) {
    if (sign === "-") result = (num1 - num2);
    if (sign === "+") result = (num1 + num2);
    if (sign === "x") result = (num1 * num2);
    if (sign === "/") result = (num1 / num2);
    return result;
}


let firstNum = 0;
let secondNum = 0;
let operator = undefined;
let operator2 = undefined;
let output = undefined;
let outputDisplayed;

let display = document.querySelector('#display');
let buttons = [];

let equal = document.querySelector('#equal');
let opBtns = document.querySelectorAll('.opBtn');
let numBtns = document.querySelectorAll('.normBtn');

let clearBtn = document.querySelector('#clear');
let clearClicked = false;

clearBtn.addEventListener('click', () => {
    clearClicked = true;
    firstNum = 0;
    secondNum = 0;
    operator = undefined;
    operator2 = undefined;
    output = undefined;
    clearDisplay();
    outputDisplayed = false;
});

function clearDisplay() {
    display.textContent = "";
}

numBtns.forEach((numBtn) => numBtn.addEventListener('click', () => {
    if (clearClicked) clearClicked = false;
    if (outputDisplayed) {
        clearDisplay();
        outputDisplayed = false;
    }
    display.textContent += numBtn.textContent;
}));

opBtns.forEach((opBtn) => opBtn.addEventListener('click', () => {
    if (firstNum == 0) {
        operator = opBtn.textContent
        firstNum = parseFloat(display.textContent);
        clearDisplay();
    }

    else if (secondNum === 0 && display.textContent !== '') {
        operator2 = opBtn.textContent
        secondNum = parseFloat(display.textContent);
        output = operate(firstNum, operator, secondNum);
        display.textContent = output;
        outputDisplayed = true;
    }

    else if (output !== undefined && display.textContent !== '') {
        operator = operator2;
        operator2 = opBtn.textContent;
        firstNum = output;
        secondNum = parseFloat(display.textContent);
        output = operate(firstNum, operator, secondNum);
        display.textContent = output;
        outputDisplayed = true;
    }
}));

equal.addEventListener('click', () => {
    if (clearClicked == false && secondNum == 0 && display.textContent !== '') {
        secondNum = parseFloat(display.textContent);
        clearDisplay();
        output = operate(firstNum, operator, secondNum);
    }

    if (output != undefined && display.textContent !== "") {
        firstNum = output;
        secondNum = parseFloat(display.textContent);
        clearDisplay();
        output = operate(firstNum, operator2, secondNum);
    }

    display.textContent = output;
});