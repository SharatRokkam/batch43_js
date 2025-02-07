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

// const students = [
//   ["shivani"],
//   { name: "Jana", score: 87 },
//   { name: "Sindhu", score: 81 },
//   { name: "Harsha", score: 70 },
//   { name: "Nithin", score: 57 },
//   { name: "Nikita", score: 37 },
// ];

// let studentCount = 0;

// students.forEach((student) => {
//   console.log(` ${student.name} and ${student.score}`);

//   if (student.score > 70) {
//     studentCount++;
//   }
// });

// console.log(studentCount);

// Push
// let arrayOfNum = [1, 2, 4, 5, 6, 6];

// arrayOfNum.push(10);
// console.log(arrayOfNum);

//pop
// arrayOfNum.pop();
// console.log(arrayOfNum);

//shift
// arrayOfNum.shift();
// console.log(arrayOfNum);

//unshift
// arrayOfNum.unshift(43);
// console.log(arrayOfNum);

// let a = [1, 2, 3];
// let b = [8, 9, 0];

//concat
// let c = b.concat(a);
// console.log(c);

// join
// let myName = "John Doe";
// let myName = [1, 7, 4, 5, 6];
// console.log(myName.join("!"));

// slice
// let sliced = myName.slice(2, 4);
// console.log(sliced);

// console.log(myName);

// splice

// let spliced = myName.splice(1, 4);
// let spliced = myName.splice(2, 2, "Nithin", "Vaishnavi");
// console.log(spliced);
// console.log(myName);

// let fruits = ["apple", "carrot", "dates"];
// [0, 1, 2, 3]

// remove "banana" from the array
// replace dates with coconut
// add kiwi and grape after banana

// fruits.splice(1, 1);
// console.log(fruits);
// fruits.splice(2, 1, "coconut");
// console.log(fruits);
// fruits.splice(1, 0, "kiwi", "grape");
// console.log(fruits);

// let fruits = ["carrot", "Kiwi", "grape", "carrot", "carrot", "dates"];

let names = ["Neha", "Neha", "Neha", "Sneha"];

// indexOf and lastIndexOf
const index = names.indexOf("Neha");
console.log(index);

const lastIndex = names.lastIndexOf("Neha");
console.log(lastIndex);

// find, some, every, flat, reverse, toString, findIndex, includes, flatMap, reduceRight
