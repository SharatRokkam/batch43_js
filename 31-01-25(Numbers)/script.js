// let myNumber = 30;
// console.log(myNumber);

// const myNum = Number("1233");
// console.log(typeof myNum);

// console.log(10 / 0);
// console.log(-10 / 0);
// console.log("abc" / 10);

// console.dir(Number.prototype)

// console.table([{name: "Amit", age: 30}, {name: "Jatin", age: 25}]);

// let myKey = 123.4567;
// console.log(myKey.toFixed(2))
// console.log(typeof myKey.toString());
// console.log(typeof myKey);
// console.log(myKey.toPrecision(4));
// console.log(Number.isNaN(10 / 10));
// console.log(Number.isInteger(123));

// Output based Questions
// console.log(0.5 + 0.4);

// console.log(parseInt("10.99"));

// console.log(parseInt("99px"));

// console.log(parseInt("abc99"));

// let myNum = 123.46;
// console.log(myNum.toFixed(1));

// Math Method

// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.2));
// console.log(Math.round(4.5));

// console.log(Math.max(3, 5, 9));
// console.log(Math.min(3, 5, 9));

// Guess the number
// console.log(Math.round(Math.random() * 10))

// console.log(Math.floor(Math.random() * 6) + 1);

// console.log(Math.floor(Math.random() * 6) + 1);

// Write a function to take prompt from the user and checks if the guessed number is correct or not, alert correct number guessed or number didn't the match

function guessTheNumber() {
  let correctNum = Math.floor(Math.random() * 10) + 1;

  let userInput = Number(prompt("enter number between 1 to 10"));

  if (userInput === correctNum) {
    alert("enter number matched");
  } else {
    alert("enter number didn't matched");
  }
}

guessTheNumber();
