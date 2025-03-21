// Deep and Shallow Copy

// Primitive (Stack) and Non-Primitive (Heap)

// let employee = {
//   name: "Something",
//   age: 32,
//   isEmployee: true,
//     cards: {
//       isAdhar: true,
//       driving: {
//         license: true,
//         rc: false,
//       },
//     },
// };

// Shallow Copy - top level value will not get effected rest

// let newEmployee = employee;

// console.log(employee);
// console.log(newEmployee);

// After modification

// Deep Copy

// let newEmployee = JSON.parse(JSON.stringify(employee));

// newEmployee.name = "Nothing";

// newEmployee.designation = "backend Developer";

// console.log(employee);
// console.log(newEmployee);

// Data inconsistent

// Global scope - window
// console.log(this);

//regular Function

// JS is forgiving language

// "use strict"; //on the top
// function showMsg() {
//   console.log(this);
// }
// showMsg();

// Where and How
// let employee = {
//   name: "Sharath",
//   greet: function () {
//     console.log(`Good Morning! ${this.name}`);
//   },
// };

// employee.greet();
// employee.name = "Shiva";
// employee.greet();

// Constructor Function : first letter should be capital, this
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User("Sharat", 23);
// User("Jana", 23);

// function User1(gender) {
//     this.gender = gender;
//     console.log(`Hello! Mr.${this.name}, Gender : ${this.gender}`);
// }

// User1("Male");

function Student(name) {
  this.name = name;
  console.log(`${this.name}`);
}

let student1 = Student("John");
let student2 = Student("J");
let student3 = Student("Mon");
let student4 = Student("Con");
