let firstNumber = null;
let operator = ['+', '-', '/', '*'];
let secondNumber = null;
let currentOperation = null;

let currentDisplayValue = '0';

const displayValue = document.querySelector("#calculatorDisplay");
displayValue.innerText = currentDisplayValue;

function updateDisplay() {
    displayValue.innerText = currentDisplayValue;
}

const numberButtonFunction = document.querySelectorAll(".numberButton");
numberButtonFunction.forEach(function(button) { 
    button.addEventListener('click', function() {
        if (currentDisplayValue === '0') {
            currentDisplayValue = button.textContent;
        }
        else {
            currentDisplayValue += button.textContent;
        }
        updateDisplay();
    })
});

const clearButtonFunction = document.querySelector("#clearButton");
clearButtonFunction.addEventListener('click', function() {
    currentDisplayValue = '0';
    updateDisplay();
});

const addButtonFunction = document.querySelector("#addButton");
addButtonFunction.addEventListener('click', function() {
    if (currentOperation !== null) {
        secondNumber = parseFloat(currentDisplayValue);

        const result = operate(currentOperation, parseFloat(firstNumber), secondNumber);

        firstNumber = result.toString();

        currentDisplayValue = firstNumber;
    }
    else {
        firstNumber = currentDisplayValue;
    }
    currentOperation = '+';
    currentDisplayValue = '0';
    updateDisplay();
});

const subtractButtonFunction = document.querySelector("#subtractButton");
subtractButtonFunction.addEventListener('click', function() {
    if (currentOperation !== null) {
        secondNumber = parseFloat(currentDisplayValue);

        const result = operate(currentOperation, parseFloat(firstNumber), parseFloat(secondNumber));

        firstNumber = result.toString();

        currentDisplayValue = firstNumber; 
    }
    else {
        firstNumber = currentDisplayValue;
    }
    currentOperation = '-';
    currentDisplayValue = '0';
    updateDisplay();
});

const multiplyButtonFunction = document.querySelector("#multiplyButton");
multiplyButtonFunction.addEventListener('click', function() {
    if (currentOperation !== null) {
        secondNumber = parseFloat(currentDisplayValue);

        const result = operate(currentOperation, parseFloat(firstNumber), parseFloat(secondNumber));

        firstNumber = result.toString();

        currentDisplayValue = firstNumber; 
    }
    else {
        firstNumber = currentDisplayValue;
    }
    currentOperation = '*';
    currentDisplayValue = '0';
    updateDisplay();
});

const divideButtonFunction = document.querySelector("#divideButton");
divideButtonFunction.addEventListener('click', function() {
    if (currentOperation !== null) {
        secondNumber = parseFloat(currentDisplayValue);

        const result = operate(currentOperation, parseFloat(firstNumber), parseFloat(secondNumber));

        firstNumber = result.toString();

        currentDisplayValue = firstNumber; 
    }
    else {
        firstNumber = currentDisplayValue;
    }
    currentOperation = '/';
    currentDisplayValue = '0';
    updateDisplay();
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === '/' && num2 === 0) {
        return 'Cannot divide by 0!';
    }

    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Enter valid operator."
    }
}

console.log(operate('/', 5, 0));

