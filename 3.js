let displayElement = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = undefined;

function appendNumber(number) {
    if (currentInput.length >= 10) return; // Prevent overflow
    if (currentInput === '0' && number === '0') return; // Prevent leading zeros
    currentInput += number;
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = currentInput || previousInput || '0';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = undefined;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = undefined;
    previousInput = '';
    updateDisplay();
}
