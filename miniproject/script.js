const counterElement = document.querySelector("h2");
const addButton = document.querySelector("#plsBtn");
const minusButton = document.querySelector("#minusBtn");

let counter = 0;

function updateCounter(value) {
  //add button
  counter = counter + value;
  counterElement.textContent = counter;

  if (counter == 10) {
    addButton.setAttribute("disabled", true);
  } else {
    addButton.removeAttribute("disabled", false);
  }

  //minus button

  if (counter == 0) {
    minusButton.setAttribute("disabled", true);
  } else {
    minusButton.removeAttribute("disabled", false);
  }
}

addButton.addEventListener("click", () => {
  updateCounter(1);
});

minusButton.addEventListener("click", () => {
  updateCounter(-1);
});
