let displayValue = '0';
function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
        }
        updateDisplay();
    }
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}
function backspace() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}
function calculate() {
    try {
        displayValue = String(eval(displayValue));
        if (displayValue.length > 14) {
            displayValue = Number(displayValue).toExponential(8);
        }
        if (displayValue === 'Infinity' || displayValue === '-Infinity' || displayValue === 'NaN') {
            displayValue = 'Error';
        }
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
updateDisplay();