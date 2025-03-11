// There are three ways to fetch data : Callback, Promise and Async Await
// Promise

// JS - FETCH(inbuilt)
// React - fetch, axios, rtk query, tanstack query

// function fetchData() {
//   fetch("https://fakestoreapi.com/products/")
//     //this then block will convert the data to json object
//     .then((response) => response.json())
//     .then((data) => {
//       const container = document.getElementById("postContainer");
//       container.innerHTML = "";

//       data.slice(4, 15).forEach((product) => {
//         const myData = document.createElement("div");
//         myData.innerHTML = `

//          <h3>* ${product.title}</h3>
//         `;

//         container.appendChild(myData);
//       });
//     })
//     .catch((error) => console.log(error));
// }

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function showLoading() {
//   console.log("loading....");
//   await delay(2000);
//   console.log("data got loaded");
//   console.log("not loading");
//   console.log("not loading");
//   console.log("not loading");
//   console.log("not loading");
// }

// showLoading();

async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const container = document.getElementById("postContainer");
    container.innerHTML = "";

    data.slice(4, 15).forEach((product) => {
      const myData = document.createElement("div");
      myData.setAttribute("class", "divContainer");
      myData.innerHTML = `
           <img src=${product.image} alt=${product.title} />
           <h3>${product.title.slice(0, 20)}</h3>
           <p>$ ${product.price}</p>
          `;

      container.appendChild(myData);
    });
  } catch (error) {
    console.log("error occured");
  }
}
