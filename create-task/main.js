import "./styles/style.css";
import { array } from "./array.js";

const DOMSelectors = {
  buttonUtil: document.querySelector(".btnUtil"),
  buttonBook: document.querySelector(".btnBooks"),
  buttonToy: document.querySelector(".btnToy"),
  storeFront: document.querySelector(".main"),
  name: document.querySelector(".name"),
  item: document.querySelector(".brand"),
  display: document.querySelector(".img"),
  remove: document.getElementsByClassName("remove"),
};

const chooseUtilities = function () {
  array
    .filter((theArr) => theArr.type === "utilities")
    .forEach((array) =>
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${array.image}><img><p>${array.name}</p>
        <p>${array.type}</p> </div>`
      )
    );
};
const chooseBooks = function () {
  array
    .filter((theArr) => theArr.type === "Books")
    .forEach((array) =>
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${array.image}><img><p>${array.name}</p>
        <p>${array.type}</p> </div>`
      )
    );
};
const chooseToys = function () {
  array
    .filter((theArr) => theArr.type === "Toys")
    .forEach((array) =>
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${array.image}><img><p>${array.name}</p>
        <p>${array.type}</p> </div>`
      )
    );
};

DOMSelectors.buttonUtil.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  chooseUtilities();
});
DOMSelectors.buttonBook.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  chooseBooks();
});
DOMSelectors.buttonToy.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  chooseToys();
});

// function removeDiv(e) {
//   e.parentElement.remove();
// }

const removeDiv = function () {
  DOMSelectors.display.innerHTML = "";
};
