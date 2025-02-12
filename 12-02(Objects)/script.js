// Objects
// ---> collection of data which has key and value pair
// ---> ways of create objects are: object literal, function constructor, new object constructor, class

//singleton

// let obj1 = { name: "Sharat" };
// let obj2 = { name: "Sharat" };

// console.log(obj1 == obj2);

// function constructor

// Object Literal

//JS --> Object and Events
// Symbol - IMP

let mysym = Symbol("key1");
// console.log(mysym);

let jsUser = {
  name: "John",
  "full name": "John Doe",
  [mysym]: "myKey1",
  age: 18,
  location: "hyderabad",
  isLogged: false,
  daysOfLogin: ["Monday", "saturday"],
  greeting: function () {
    console.log("good morning");
  },
  cards: { aadharCard: true, passport: false },
};

// let arr = ["one", "two"];
// arr[1]

//key are been taken as string behind the scene, but we don't write it in ""
// 1st way of accessing the element
// console.log(jsUser.cards);
// console.log(jsUser["full name"]);
// 2nd way of accessing the element
// console.log(jsUser["age"]);
// console.log(jsUser);
// console.log(typeof jsUser[mysym]);

// jsUser.location = "Kashmir";

// freeze the object
Object.freeze(jsUser);

jsUser.name = "Delhi";
jsUser.location = "Banglore";

console.log(jsUser);

let obj1 = new Object();

obj1.name = "Shivani";

obj1.email = "shivani@google.com";

obj1.age = 19;
obj1.age = 20;

console.log(obj1);

let obj1 = { a: "1", b: "2" };
let obj2 = { c: "1", d: "2" };
// let obj5 = { e: "1", f: "2" };

// let obj3 = Object.assign(target, source);

// let obj4 = Object.assign({}, obj1, obj2, obj5);
// console.log(obj4);



let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

var employee = {
  name: "something",
  username: {
    fullName: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};

// console.log(employee.username.fullName.lastName);

// API : application

// console.log(Object.keys(employee.username.fullName));
// console.log(Object.values(employee));

// console.log(Object.entries(employee));
// console.log(Object.entries(obj3));

let properties = employee.hasOwnProperty("age");
console.log(properties);

// Spread and Rest -> introduced in es6
// ... function parameter , ...argument rest 
// Destructuring