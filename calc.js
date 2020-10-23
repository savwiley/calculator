//ADD
function add(a, b) {
    displayValue = Number(a) + Number(b)
    return display.textContent = displayValue;
}
let addBtn = document.querySelector("#plus");
//FUNC FOR ADD BUTTON
function addB(val) {
    if (sign){
        firstop = operate(value, sign, displayValue);
    };
    value = val;
    sign = '+';
    return display.textContent = (displayValue = "");
}
//ADD BUTTON
addBtn.addEventListener('click', () => {
    addB(displayValue)
});


//SUBTRACT
function subtract(a, b) {
    displayValue = Number(a) - Number(b);
    return display.textContent = displayValue;
}
let subBtn = document.querySelector("#minus");
//FUNC FOR SUBTRACT BUTTON
function subB(val) {
    if (sign){
        firstop = operate(value, sign, displayValue);
    };
    value = val;
    sign = '-';
    return display.textContent = (displayValue = "");
}
//SUBTRACT BUTTON
subBtn.addEventListener('click', () => {
    subB(displayValue)
});


//MULTIPLY
function multiply(a, b) {
    displayValue = Number(a) * Number(b);
    return display.textContent = displayValue;
}
let multBtn = document.querySelector("#times");
//FUNC FOR MULTIPLICATION BUTTON
function multB(val) {
    if (sign){
        firstop = operate(value, sign, displayValue);
    };
    value = val;
    sign = '*';
    return display.textContent = (displayValue = "");
}
//MULTIPLICATION BUTTON
multBtn.addEventListener('click', () => {
    multB(displayValue)
});


//DIVIDE
function divide(a, b) {
    displayValue = Number(a) / Number(b);
    return display.textContent = displayValue;
}
let divBtn = document.querySelector("#divide");
//FUNC FOR DIVIDE BUTTON
function divB(val) {
    if (sign){
        firstop = operate(value, sign, displayValue);
    };
    value = val;
    sign = '/';
    return display.textContent = (displayValue = "");
}
//DIVIDE BUTTON
divBtn.addEventListener('click', () => {
    divB(displayValue)
});



//A & OPERATOR VARIABLES
let value;
let sign;



//EQUALS
function operate(a, operator, b) {
    if (firstop) {
        a = firstop;
    }
    if (operator === '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }
}
let equals = document.querySelector("#equal");
equals.addEventListener('click', () => {
    operate(value, sign, displayValue);
});

//displayValue in operate() above should be secondop


//DISPLAY
let displayValue = "";
let firstop = null;
let display = document.querySelector(".display");
display.textContent = displayValue;

/*
https://mrbuddh4.github.io/calculator/
*/



//CLEAR BUTTON
let clearBtn = document.querySelector("#clear");
function clear() {
    firstop = null;
    value = null;
    sign = null;
    return display.textContent = (displayValue = "");
}
clearBtn.addEventListener('click', clear);



//NUMBER BUTTONS
let oneBtn = document.querySelector("#one");
function one() {
    return display.textContent = displayValue += 1;
}
oneBtn.addEventListener('click', one);

let twoBtn = document.querySelector("#two");
function two() {
    return display.textContent = displayValue += 2;
}
twoBtn.addEventListener('click', two);

let threeBtn = document.querySelector("#three");
function three() {
    return display.textContent = displayValue += 3;
}
threeBtn.addEventListener('click', three);

let fourBtn = document.querySelector("#four");
function four() {
    return display.textContent = displayValue += 4;
}
fourBtn.addEventListener('click', four);

let fiveBtn = document.querySelector("#five");
function five() {
    return display.textContent = displayValue += 5;
}
fiveBtn.addEventListener('click', five);

let sixBtn = document.querySelector("#six");
function six() {
    return display.textContent = displayValue += 6;
}
sixBtn.addEventListener('click', six);

let svnBtn = document.querySelector("#seven");
function seven() {
    return display.textContent = displayValue += 7;
}
svnBtn.addEventListener('click', seven);

let eightBtn = document.querySelector("#eight");
function eight() {
    return display.textContent = displayValue += 8;
}
eightBtn.addEventListener('click', eight);

let nineBtn = document.querySelector("#nine");
function nine() {
    return display.textContent = displayValue += 9;
}
nineBtn.addEventListener('click', nine);

let zeroBtn = document.querySelector("#zero");
function zero() {
    return display.textContent = displayValue += 0;
}
zeroBtn.addEventListener('click', zero);


//OTHER BUTTONS
let deciBtn = document.querySelector("#deci");
function deci() {
    if (displayValue.includes('.')){
        return display.textContent = displayValue;
    } else {
    return display.textContent = displayValue += '.';
    }
}
deciBtn.addEventListener('click', deci);

let backBtn = document.querySelector("#basp");
function back() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    return display.textContent = displayValue;
}
backBtn.addEventListener('click', back);

let percBtn = document.querySelector("#perc");
function perc() {
    displayValue /= 100;
    return display.textContent = displayValue;
}
percBtn.addEventListener('click', perc);