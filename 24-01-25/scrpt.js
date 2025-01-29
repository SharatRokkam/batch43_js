// const student = { name: "Vaishnavi", age: 22, isStudent: true, branch: "CSE" };

// for (let key in student) {
//   console.log(`${key} : ${student[key]}`);
// }

// const employee = ["Shivani", "Neha", "Nithin", "Mehboob", "Siva", "Sindhu"];

// for (let i in employee) {
//   console.log(`Index : ${i} value : ${employee[i]}`);
// }

// const fruits = ["apple", "banana", "mango"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// let text = "Innomatics";

// for (let i of text) {
//   console.log(i);
// }

// let movies = ["Dhruva", "Arjun Reddy", "Shiva", "Kalki"];

// let users = {
//   John: ["Order1", "O2", "O3"],
//   Shivani: ["Order1", "O2", "O3", "O4"],
//   Sindhu: ["Order1", "O2"],
//   Shiva: ["Order1", "O3"],
// };

// for (let key in users) {
//   console.log(`${key}'s orders`);

//   for (let order in users[key]) {
//     console.log(`- ${key[order]}`);
//   }
// }

// 121 - 121

let number = 123;
let originalNumber = number;
let reversedNumber = 0;


while(number > 0){
    let lastValue = number % 10;
    reversedNumber = reversedNumber * 10 + lastValue;
    number = Math.floor(number / 10)
}


// 153-->> Armstrong Number  

121

1 + 8 + 1 = 10