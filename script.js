const calculator = {
  displayValue: "0",
  firstNumber: null,
  secondNumber: false,
  operator: null,
};

function inputNumber(number) {
  const { displayValue, secondNumber } = calculator;

  if (secondNumber === true) {
    calculator.displayValue = number;
    calculator.secondNumber = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? number : displayValue + number;
  }

  console.log(calculator);
}

function inputDecimal(decimal) {
  if (calculator.secondNumber === true) {
    calculator.displayValue = "0.";
    calculator.secondNumber = false;
    return;
  }
  if (!calculator.displayValue.includes(decimal)) {
    calculator.displayValue += decimal;
  }
}

function handleOperators(nextOperator) {
  const { firstNumber, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.secondNumber) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstNumber === null && !isNaN(inputValue)) {
    calculator.firstNumber = inputValue;
  } else if (operator) {
    const result = operate(firstNumber, inputValue, operator);

    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstNumber = result;
  }

  calculator.secondNumber = true;
  calculator.operator = nextOperator;

  console.log(calculator);
}

function operate(firstNumber, secondNumber, operator) {
  const add = (firstNumber, secondNumber) =>
    Number(firstNumber) + Number(secondNumber);
  const subtract = (firstNumber, secondNumber) =>
    Number(firstNumber) - Number(secondNumber);
  const multiply = (firstNumber, secondNumber) =>
    Number(firstNumber) * Number(secondNumber);
  const divide = (firstNumber, secondNumber) =>
    Number(firstNumber) / Number(secondNumber);
  const modulus = (firstNumber, secondNumber) =>
    Number(firstNumber) % Number(secondNumber);

  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "x") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "÷") {
    return divide(firstNumber, secondNumber);
  }
  return secondNumber;
}

function clearCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

function backSpace() {
  const { displayValue } = calculator;
  if (displayValue === "0") return;
  calculator.displayValue = displayValue.slice(0, -1);
  if (calculator.displayValue === "") calculator.displayValue = "0";
}

function updateDisplayValue() {
  const display = document.querySelector(".calculator__display");
  display.innerText = calculator.displayValue;
}
updateDisplayValue();

const buttons = document.querySelectorAll(".calculator__button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const { target } = event;
    const { value } = target;

    if (!target.matches("button")) return; // if not a button then immediate return

    switch (value) {
      case "+":
      case "-":
      case "x":
      case "÷":
      case "=":
        handleOperators(value);
        break;
      case ".":
        inputDecimal(value);
        break;
      case "clear":
        clearCalculator();
        break;
      case "↵":
        backSpace();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
        }
        inputNumber(value);
        break;
    }

    updateDisplayValue();
  });
});
