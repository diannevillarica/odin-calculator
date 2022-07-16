const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let displayValue;

let a = "";
let b = "";
let operator = "";

const add = (a, b) => parseInt(a) + parseInt(b);
const subtract = (a, b) => parseInt(a) - parseInt(b);
const multiply = (a, b) => parseInt(a) * parseInt(b);
const divide = (a, b) => parseInt(a) / parseInt(b);

const operate = (operator, a, b) => {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (operator === "") {
        displayValue = a += e.target.innerText;
        display.innerHTML = displayValue;
        console.log(a);
      } else {
        displayValue = b += e.target.innerText;
        console.log(b);
        display.innerHTML = displayValue;
      }
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
            display.innerHTML = displayValue;
            break;
          case "-":
            displayValue = subtract(a, b);
            display.innerHTML = displayValue;
            break;
          case "x":
            displayValue = multiply(a, b);
            display.innerHTML = displayValue;
            break;
          case "÷":
            displayValue = divide(a, b);
            display.innerHTML = displayValue;
            break;
          default:
            break;
        }
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

operate(operator, a, b); // this is user input
