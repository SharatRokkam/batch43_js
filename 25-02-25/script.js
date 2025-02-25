let heading = document.getElementById("title");

// heading.style.color = "blue";
// heading.style.backgroundColor = "yellow";
// heading.style.textAlign = "center";
// heading.style.width = "200px";

// let paragraph = document.getElementsByClassName("para")[];
// let paragraph = document.getElementsByTagName("p")[5];

// paragraph.style.color = "red";

// change the text of the tag
// innerText and textContent

// heading.innerText = "Data Object Madam";
// heading.textContent = "Data Object Model"

// heading.innerHTML = "Data Object Madam";

// querySelector and querySelectorAll

let paragraph = document.querySelectorAll("p");

// paragraph.style.backgroundColor = "yellow";

// paragraph.innerHTML = "hello from vscode";

paragraph.forEach(function (l) {
  l.style.color = "red";
  l.innerText = "Hello World";
});
