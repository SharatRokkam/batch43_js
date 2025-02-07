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

let products = [
  { name: "laptop", price: 10000 },
  { name: "Mobiles", price: 5000 },
  { name: "Tablets", price: 7000 },
];

// 10%
let discounPrice=products.map(product=>product.price-(product.price*10/100));
console.log(discounPrice);