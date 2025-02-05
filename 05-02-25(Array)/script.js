// What is array ?
// Collection of value or variables
// one dimensional and multi dimensional

// How to create array
// 1.
// Array Literal

// let array1 = ["a", "b", 1, false, { name: "John" }, ["fruits", "veggies"]];

// console.log(array1);

//2. Array Constructor
// let newArray = new Array("Priya", "Neha", "Jana");
// console.log(newArray);

// let newArray = ["", "", ""];

// console.log(newArray.length);

// let newArray2 = new Array(5);
// console.log(newArray2.length);

// to check all the array methods
// console.dir(Array.prototype)

// const fruits = ["apple", "mango", "banana", "grapes"];

// fruits.forEach((fruit, index) => {
//   console.log(`${index + 1} : ${fruit}`);
// });

// Real World Examples
//Array of Object

// WAP using forEach to print each student's name and score, also count how many students scored above 70, finally log the count.

const students = [
  ["shivani"],
  { name: "Jana", score: 87 },
  { name: "Sindhu", score: 81 },
  { name: "Harsha", score: 70 },
  { name: "Nithin", score: 57 },
  { name: "Nikita", score: 37 },
];

let studentCount = 0;

students.forEach((student) => {
  console.log(` ${student.name} and ${student.score}`);

  if (student.score > 70) {
    studentCount++;
  }
});

console.log(studentCount);
