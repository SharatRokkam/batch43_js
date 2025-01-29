// let globalVar = 10;

// function access() {
//   var b = 20;
//   console.log(b);
// }

// console.log(b);
// access();

// let c = 20;
// {
//   let c = 30;
//   console.log(c);
// }

// console.log(c);

// function outer() {
//   let newvar = 100;
//   function inner() {
//     console.log(newvar);
//   }
//   inner();
// }
// outer();

function outer() {
  let counter = -1;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}

const increment = outer(); //1
const increment2 = outer(); // 1

// increment(); // 1
// increment(); // 2
