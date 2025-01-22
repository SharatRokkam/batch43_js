// console.log("wokring");

// Operator :
// Arithmetic Operator
// +, -, *, /, %, ++, --, **(exponentiation operator)

// let a = 40;
// let b = 4;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);
// console.log("a++ = ", a++);
// console.log(a);
// console.log("a--  = ", a--);
// console.log(a);

// console.log(++a); //41
// console.log(a); //41
// console.log(--a); //40
// console.log(a); //40

// Comparison Operator
// ==(double equal to), ===(triple equal to), !=(not equal to),!==(strict not equal to)
//>(greater than), <(less than), >=(greater than equal to), <=((less than equal to))

// code snippets
// let a = 5;
// let b = "5";

// console.log(a == b); //true
// console.log(a === b); //false

//interview question
// == checks the value
//=== checks the value and data type

// console.log(5 != "5");
// console.log(5 !== "5");

// console.log(5 > 6); //false
// console.log(5 < 6); //true
// console.log(5 >= 6); //false
// console.log(5 <= 6); //true

// Logical Operator
// AND (&&), OR(||) and NOT(!)

// let a = true,
//   b = false;

// true true => true
// false false ==> false
// false true => false
// true false => false

// console.log(a && b); //false
// console.log(a || b); //true
// console.log(!a); //false

// let a = 10,
//   b = 20,
//   c = 30;

// console.log(a === b && a >= b); //false
// console.log(a == b || a <= b || a >= c);

// Assignment Operator

// =, +=, -=, /=, *=, %=

// let x = 5;

// x += 3; //x = x + 3
// console.log(x); //8
// x -= 2; //x = x - 2;
// console.log(x); //6

// Bitwise Operator
// &, ^(XOR), ~NOT(tilde), <<, >>, <<<, >>>

//Ternary Operator
// condition ? expression 1 : expression 2

// let age = 17;

// let status = age >= 18 ? "You can vote" : "You cannot vote";

// console.log(status);

// String Operator (+)

// let text1 = "Hello      ";
// let text2 = "World";

// console.log(text1 + text2);

// Type Operator
//typeof and instanceof

// let a = 10;
// console.log(typeof a);

// // instanceof
// console.log(a instanceof Number);

// Conditional Statement

//if and if-else
// let age = 17;

// if (age > 18) {
//   console.log("you can drive");
// } else {
//   console.log("you cannot drive");
// }

//if-else-if-else

// let marks = 49;

// if (marks == 100) {
//   console.log("you have score A");
// } else if (marks >= 75) {
//   console.log("you have score B");
// } else if (marks >= 50) {
//   console.log("you have score C");
// } else {
//   console.log("you have failed");
// }

// nested condition

// let age = 18;
// let isCitizen = true;
// if (age >= 18) {
//   if (isCitizen) {
//     console.log("you are eligible to vote");
//   } else {
//     console.log("you are not eligible to vote");
//   }
// }

// odd or even

// let number1 = prompt("enter any number");

// if (number1 % 2 == 0) {
//   console.log("the number is even", number1);
// } else {
//   console.log("the number is odd", number1);
// }



if (a > b && a > c) {
  console.log("a is greater", a);
} else if (b > c ) {
  console.log("b is greater and the value", b);
} else {
  console.log("c is greater", c);
}
