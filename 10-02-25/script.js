// Object
// Object is used to store collection of related data and functions in the format of key and value pair...

// Syntax
// let objectName = {
//     key : value,
// }

// 1. Object Literal
// let employee = {
//   name: "John",
//   id: 23943,
//   salary: "30k",
//   department: "IT",
//   func: function () {
//     console.log("new employee added");
//   },
// };

//Object Constructor function
// function Person(fname, age) {
//   this.fname = fname;
//   this.age = age;
//   this.greet = function () {
//     console.log("Good morning everyone");
//   };
// }

// const shiva = new Person("Shiva", 23);
// const vaishnavi = new Person("vaishnavi", 23);
// const shivani = new Person("shivani", 23);

// console.log(shivani);
// console.log(shivani.age);

// shiva.greet();

// new Object() Constructor

// const bike = new Object();

// bike.brand = "Hero";
// bike.cost = "100000";
// bike.displayInfo = function () {
//   console.log(`${this.brand} is producing very good bike at just ${this.cost}`);
// };

// bike.displayInfo();
// console.log(bike);

// Call, Apply, Bind(IMP)
// These are just the way of invoking or calling a function. But whenever we are using any method, for invoking then in argument the first thing would be an object

// function student(name, department) {
//   console.log(`${this.name} is in ` + department);
// }

// const person = { name: "Priya" };
// student.call(person, "CSE");

const person1 = { name: "Priya", age: 23 };
const person2 = { name: "Jana", age: 24 };
const person3 = { name: "Shivani", age: 24 };

function student(hobby, skill) {
  console.log(`Hi, ${this.name} is of ${this.age}. ${hobby} and ${skill}`);
}

// Call: invokes the function and take the arguments separately
student.call(person1, "reading", "cooking");

//apply : takes the arguments in an array format
student.apply(person2, ["racing", "cricket"]);

//bind: returns a new function with this bound to the provided object
//it does invokes the function immediately

const something = student.bind(person3, "reading", "drawing");

something();
