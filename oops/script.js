// object literal

// let user = {
//   name: "John",
//   isLoggedIn: true,
//   loginCount: 10,
// };

// Constructor function

// function User(name, isLoggedIn, loginCount) {
//   this.name = name;
//   this.isLoggedIn = isLoggedIn;
//   this.loginCount = loginCount;

// }

// //new instance of object
// const user1 = new User("George", true, 10);
// const user2 = new User("Shiva", false, 14);
// console.log(user1.name);
// console.log(user2.name);

// class

// class Person {
//   constructor(name = "John", isLoggedIn, loginCount) {
//     this.name = name;
//     this.isLoggedIn = isLoggedIn;
//     this.loginCount = loginCount;
//   }

//   greet() {
//     console.log(`Hello! ${this.name}`);
//   }
// }

// // const person1 = new Person("Bold", true, 14);
// const person1 = new Person();
// person1.greet();


//inheritance
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`This animal does ${sound} `);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
const dog1 = new Dog("Dummy");
const dog2 = new Dog("Grumpy");
dog.speak();
dog1.speak()
