// let squareOfNumbers = [1, 3, 5, 6, 7];

// let square = squareOfNumbers.map((num) => num * num);

// console.log(squareOfNumbers);

// console.log(square);

// Take an array convert the list of temperatures from celsius to fahrenheit

// let tempInCelsius = [34, 23, 55, 21];

// let tempInFahrenheit = tempInCelsius.map((degree) => (degree * 9) / 5 + 32);

// console.log(tempInFahrenheit);

// let studentsName = [
//   "abhinav",
//   "neha",
//   "shiva",
//   "vaishnavi",
//   "priya",
//   "shivani",
//   "jana",
//   "harsha",
//   "nikita",
//   "vamshi",
// ];

// let students = studentsName.map(
//   (student) =>
//     student.slice(0, -1) + student.charAt(student.length - 1).toUpperCase()
// );

// console.log(students);

// let products = [
//   { name: "laptop", price: 10000 },
//   { name: "Mobiles", price: 5000 },
//   { name: "Tablets", price: 7000 },
// ];

// // 10%
// let discounPrice=products.map(product=>product.price-(product.price*10/100));
// console.log(discounPrice);

// Filter and Reduce (Array)

// Filter: It is used to extract the result from the array after checking the given...
//It return the new array

// let numbers = [2, 4, 6, 3, 5, 75, 32];

// let evenNum = numbers.filter((num) => num % 2 == 0);
// let oddNum = numbers.filter((num) => num % 2 != 0);
// console.log(evenNum);
// console.log(oddNum);

// let names = ["jana", "vaishnavi", "Mohammad", "Dattu", "Neha"];

// let filteredName = names.filter((name) => name.length > 4);
// console.log(filteredName);

let products = [
  { name: "laptop", price: 10000 },
  { name: "Mobiles", price: 5000 },
  { name: "Tablets", price: 7000 },
  { name: "Accessories", price: 5000 },
  { name: "Iron Box", price: 3000 },
];

// Given an array of products with the prices, apply a 15% tax to all the products prices using Map() and return the updated product list

//Suppose you manage a supermarket. Write a program to filter out the products that cost more than 100 rupees, then apply 20% discount to the filtered products using map()
// const product = [
//   { name: "milk", price: 100 },
//   { name: "cheese", price: 50 },
//   { name: "butter", price: 200 },
//   { name: "meat", price: 400 },
// ];

//capitalize the movie title(first and last letter only)

// let array1 = ["the lion king", "avatar", "titanic"];

// Map and Filter

// Reduce

// let sumOfNumber = [1, 3, 5, 6, 6];

// let result = sumOfNumber.reduce(
//   (accumulator, current) => accumulator + current,
//   0
// );

// console.log(result);

// let multipliedVal = sumOfNumber.reduce((acc, cur) => acc * cur, 1);
// console.log(multipliedVal);

let fruits = ["apple", "banana", "apple", "grapes", "banana", "apple", "kiwi"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);

// {apple : 0, banana: 0, grapes : 0}
// acc[fruit] = (acc[fruit] || 0) + 1;
// undefined || 0 + 1
// apple : 1
// undefined || 0 + 1
//banana : 1
// 1 || 0 + 1
// apple : 2
// undefined || 0 + 1
//grapes : 1
// 1 || 0 + 1
// banana: 2
// 2 || 0 + 1;
//apple : 3

