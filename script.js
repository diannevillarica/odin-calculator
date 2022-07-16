const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let displayValue = display.innerHTML;

//  = displayValue;

let a = "";
let b = "";
let operator = "";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      if (operator === "") {
        displayValue = a += e.target.innerText;
        console.log(a);
      } else {
        displayValue = b += e.target.innerText;
        console.log(b);
      }
    });
  });

  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      if (e.target.innerText !== "=") {
        operator = e.target.innerText;
        // console.log(operator);
        console.log(a);
      } else {
        console.log(b);

        switch (operator) {
          case "+":
            add(a, b);
            break;
          case "−":
            subtract(a, b);
            break;
          case "×":
            multiply(a, b);
            break;
          case "÷":
            divide(a, b);
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
  });
};

operate(operator, a, b); // this is user input
