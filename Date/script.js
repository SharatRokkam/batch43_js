const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// const myCreatedDate = new Date(2023, 1, 20);
// const myCreatedDate = new Date(2023, 1, 20, 5, 3);
// const myCreatedDate = new Date("2022-01-22");
// const myCreatedDate = new Date("2022/01/22");

// console.log(myCreatedDate);

// let myTimeStamp = Date.now();
// console.log(Math.floor(myTimeStamp / 1000));

// let time = date.getTime();
// let month = date.getMonth();
// let fullYear = date.getFullYear();
// let time = date.getTime();

// console.log(getHours);
// console.log(getMinutes);
// console.log(getSecond);

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");

const seconds = document.querySelector(".seconds");

function updateClock() {
  const date = new Date();
  let getHours = date.getHours();
  let getMinutes = date.getMinutes();
  let getSecond = date.getSeconds();

  hours.innerText = `${getHours}`;
  minutes.innerText = `${getMinutes}`;
  seconds.innerText = `${getSecond}`;
}
setInterval(updateClock, 1000);

// setInterval
