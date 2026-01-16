// ================================
// Calculator - JavaScript
// Lab 8 - Full Calculator Logic
// ================================

class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        if (this.currentOperand === '0') return;
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1);
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0';
    }

    percent() {
        this.currentOperand = (parseFloat(this.currentOperand) / 100).toString();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '−':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    this.currentOperand = 'Error';
                    this.previousOperand = '';
                    this.operation = undefined;
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        // Round to avoid floating point issues
        this.currentOperand = parseFloat(computation.toFixed(10)).toString();
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        if (number === 'Error') return 'Error';

        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandElement.textContent = this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            this.previousOperandElement.textContent =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElement.textContent = '';
        }
    }
}

// DOM Elements
const previousOperandElement = document.getElementById('previousOperand');
const currentOperandElement = document.getElementById('currentOperand');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-action]');

// Initialize Calculator
const calculator = new Calculator(previousOperandElement, currentOperandElement);
calculator.updateDisplay();

// Number button clicks
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
    });
});

// Operator button clicks
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;

        switch (action) {
            case 'clear':
                calculator.clear();
                break;
            case 'delete':
                calculator.delete();
                break;
            case 'percent':
                calculator.percent();
                break;
            case 'add':
                calculator.chooseOperation('+');
                break;
            case 'subtract':
                calculator.chooseOperation('−');
                break;
            case 'multiply':
                calculator.chooseOperation('×');
                break;
            case 'divide':
                calculator.chooseOperation('÷');
                break;
            case 'equals':
                calculator.compute();
                break;
        }

        calculator.updateDisplay();

        // Update active state for operators
        document.querySelectorAll('.btn.operator').forEach(btn => btn.classList.remove('active'));
        if (['add', 'subtract', 'multiply', 'divide'].includes(action) && calculator.operation) {
            button.classList.add('active');
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    let key = e.key;

    // Prevent default for calculator keys
    if (/^[0-9.]$/.test(key) || ['+', '-', '*', '/', '=', 'Enter', 'Backspace', 'Escape', '%'].includes(key)) {
        e.preventDefault();
    }

    // Numbers
    if (/^[0-9.]$/.test(key)) {
        calculator.appendNumber(key);
        highlightButton(`[data-number="${key}"]`);
    }

    // Operators
    switch (key) {
        case '+':
            calculator.chooseOperation('+');
            highlightButton('[data-action="add"]');
            break;
        case '-':
            calculator.chooseOperation('−');
            highlightButton('[data-action="subtract"]');
            break;
        case '*':
            calculator.chooseOperation('×');
            highlightButton('[data-action="multiply"]');
            break;
        case '/':
            calculator.chooseOperation('÷');
            highlightButton('[data-action="divide"]');
            break;
        case '%':
            calculator.percent();
            highlightButton('[data-action="percent"]');
            break;
        case '=':
        case 'Enter':
            calculator.compute();
            highlightButton('[data-action="equals"]');
            break;
        case 'Backspace':
            calculator.delete();
            highlightButton('[data-action="delete"]');
            break;
        case 'Escape':
            calculator.clear();
            highlightButton('[data-action="clear"]');
            break;
    }

    calculator.updateDisplay();
});

// Visual feedback for keyboard
function highlightButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
        button.classList.add('pressed');
        setTimeout(() => button.classList.remove('pressed'), 100);
    }
}
