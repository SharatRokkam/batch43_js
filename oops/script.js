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
// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   speak() {
//     console.log(`This animal does ${sound} `);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// const dog = new Dog("Buddy");
// const dog1 = new Dog("Dummy");
// const dog2 = new Dog("Grumpy");
// dog.speak();
// dog1.speak()

// class ATM {
//   #balance;
//   constructor(balance) {
//     this.#balance = balance;
//   }

//   withdraw(amount) {
//     if (this.#authenticateUser()) {
//       this.#processTransaction(amount);
//     } else {
//       console.log("Authentication failed");
//     }
//   }
//   #authenticateUser() {
//     return true;
//   }

//   #processTransaction(amount) {
//     if (amount > this.balance) {
//       console.log("insuffecient funds");
//     } else {
//       this.#balance -= amount;
//       console.log(
//         `withdrawal successful your remaining balance is ${this.#balance}`
//       );
//     }
//   }

//   getBalance() {
//     return `The remaining balance is ${this.#balance}`;
//   }
// }

// const myATM = new ATM(500);
// console.log(myATM.getBalance());

// myATM.withdraw(200);
// console.log(myATM.getBalance());

class Animal {
  speak() {
    console.log(`make generic animal sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

class Lion extends Animal {
  speak() {
    console.log("roar");
  }
}

const animals = [new Dog(), new Cat(), new Lion()];

animals.forEach((animal) => animal.speak());
