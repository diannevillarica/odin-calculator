const display = document.querySelector(".display span");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let displayValue;

const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => Number(a) / Number(b);
const modulus = (a, b) => Number(a) % Number(b);

const operate = (operator, a, b) => {
  numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
      operator === ""
        ? (displayValue = a += e.target.innerText)
        : (displayValue = b += e.target.innerText);
      display.innerHTML = displayValue;
    });
  });

  operators.forEach((op) => {
    op.addEventListener("click", (e) => {
      if (e.target.innerText !== "=") {
        operator = e.target.innerText;
      } else {
        switch (operator) {
          case "+":
            displayValue = add(a, b);
            break;
          case "-":
            displayValue = subtract(a, b);
            break;
          case "x":
            displayValue = multiply(a, b);
            break;
          case "÷":
            displayValue = divide(a, b);
            break;
          case "%":
            displayValue = modulus(a, b);
            break;
          case "+/-":
            if (operator === "+") {
              displayValue = subtract(a, b);
            } else if (operator === "-") {
              displayValue = add(a, b);
            }
            break;
          default:
            break;
        }
        display.innerHTML = displayValue;
      }
    });
  });

  clear.addEventListener("click", () => {
    a = "";
    b = "";
    operator = "";
    displayValue = "0";
    display.innerHTML = displayValue;
  });
};

let a = "";
let b = "";
let operator = "";
operate(operator, a, b);
