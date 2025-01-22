// Syntax: if (condition) {
//   code will get executed
// }

// if condition

// let age = 21;

// if (age > 18) {
//   console.log("you can drive");
// } else {
//   console.log("you cannot drive");
// }

//if else if

// let age = prompt("enter any number");

// if (age > 18) {
//   console.log("you can vote");
// } else if (age < 18) {
//   console.log("you cannot vote");
// } else if (age == 18) {
//   console.log("you can also vote");
// }

// ternary operator

// let num = -12;

// let result = num > 0 ? "number is positive" : "Number is negative";

// console.log(result);

// switch

// let num = 8;

// switch (num) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("invalid number");
// }

//Simple calculator
//take two variable to store the number
//take the operator

// switch (operator) {
//   case "+":
//     //string interpolation(backtick)
//     console.log(`The addition of ${num1} + ${num2} is ${num1 + num2}`);
//     break;
//   case "*":
//     console.log(`The multiplication of ${num1} * ${num2} is ${num1 * num2}`);
//     break;
//   case "-":
//     console.log(`The subtraction of ${num1} - ${num2} is ${num1 - num2}`);
//     break;
//   case "/":
//     console.log(`The division of ${num1} / ${num2} is ${num1 / num2}`);
//     break;
//   default:
//     console.log("invalid operator");
// }

// let num1 = parseFloat(prompt("enter your number"));
// let num2 = parseInt(prompt("enter your second number"));
let num1 = prompt("enter your number");
let num2 = prompt("enter your second number");

let operator = prompt("enter the operator");

// Number constructor
// num1 = String(num1)
// num2 = Number(num2)

//parseInt
//parseFloat
// +

num1 = +num1;
num2 = +num2;

if (operator === "+") {
  console.log(`The ${num1} + ${num2} is ${num1 + num2}`);
} else if (operator === "-") {
  console.log(`The ${num1} - ${num2} is ${num1 - num2}`);
} else if (operator === "*") {
  console.log(`The ${num1} * ${num2} is ${num1 * num2}`);
} else if (operator === "/") {
  console.log(`The ${num1} / ${num2} is ${num1 / num2}`);
} else {
  console.log("invalid operator");
}
