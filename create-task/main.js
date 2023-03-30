import "./styles/style.css";
import { array } from "./array.js";

let cart = [];

const DOMSelectors = {
  buttonUtil: document.querySelector(".btnUtil"),
  buttonBook: document.querySelector(".btnBook"),
  buttonToy: document.querySelector(".btnToy"),
  buttonClear: document.querySelector(".btnClear"),
  clearCart: document.querySelector(".btnClearCart"),
  cart: document.querySelector(".btnCart"),
  storeFront: document.querySelector(".main"),
  name: document.querySelector(".name"),
  item: document.querySelector(".brand"),
  display: document.getElementById("app"),
  remove: document.getElementsByClassName("remove"),
  search: document.getElementById("btnSearch"),
  form: document.getElementById("form"),
  input: document.querySelector(".input"),
  addTo: document.getElementsByClassName("addTo"),
};

const removeDiv = function () {
  DOMSelectors.display.innerHTML = "";
};

const addToCart = function (object) {
  cart.push(object);
  alert("Item added to cart");
};

const dispCart = function () {
  console.log(cart);
  DOMSelectors.display.insertAdjacentHTML("beforeend", "<text>Cart</text>");
  for (let i of cart) {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<div>${i.innerHTML}</div>`
    );
    for (let j of DOMSelectors.addTo) {
      j.remove();
    }
  }
};

const clearCart = function () {
  DOMSelectors.display.insertAdjacentHTML("beforeend", "<text>Cart</text>");
  cart = [];
  alert("Cart has been cleared");
};

const Data = function (target) {
  let obj;
  for (let i of array) {
    if (i.name === target) {
      obj = i;
      break;
    }
  }
  const name = obj.name;
  const image = obj.image;
  const type = obj.type;
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card"><ul><li class="list-name">${name}</li> <li class="list-category">${type}</li> <li class="list-description">${type}</li> <li><img src="${image}" alt="Picture of ${name}" class="img"></img></li> <button class="addTo">Add To Cart</button>`
  );
};

const chooseUtilities = function () {
  array
    .filter((theArr) => theArr.type === "utilities")
    .forEach((obj) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${obj.image}><img><p>${obj.name}</p>
        <p>${obj.type}</p> <button class="addTo">Add To Cart</button></div>`
      );
    });
};
const chooseBooks = function () {
  array
    .filter((theArr) => theArr.type === "Books")
    .forEach((array) =>
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${array.image}><img><p>${array.name}</p>
        <p>${array.type}</p> <button class="addTo">Add To Cart</button> </div>`
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
        <p>${array.type}</p> <button class="addTo">Add To Cart</button> </div>`
      )
    );
};

DOMSelectors.buttonUtil.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  chooseUtilities();
  for (let btn of DOMSelectors.addTo) {
    btn.addEventListener("click", function () {
      addToCart(this.parentElement);
    });
  }
});
DOMSelectors.buttonBook.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  chooseBooks();
  for (let btn of DOMSelectors.addTo) {
    btn.addEventListener("click", function () {
      addToCart(this.parentElement);
    });
  }
});
DOMSelectors.buttonToy.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  chooseToys();
  for (let btn of DOMSelectors.addTo) {
    btn.addEventListener("click", function () {
      addToCart(this.parentElement);
    });
  }
});

DOMSelectors.buttonClear.addEventListener("click", function () {
  removeDiv();
});
DOMSelectors.cart.addEventListener("click", function () {
  removeDiv();
  dispCart();
});
DOMSelectors.clearCart.addEventListener("click", function () {
  removeDiv();
  clearCart();
});

DOMSelectors.form.addEventListener("submit", async function () {
  event.preventDefault();
  removeDiv();
  let name = DOMSelectors.input.value.toLowerCase();
  name = name.trim();
  try {
    Data(name);
  } catch (e) {
    alert("Item Does not exist");
  }
  DOMSelectors.form.reset();
  for (let btn of DOMSelectors.addTo) {
    btn.addEventListener("click", function () {
      addToCart(this.parentElement);
    });
  }
  // for (let btn of DOMSelectors.remove) {
  //   btn.addEventListener("click", function () {
  //     this.parentElement.parentElement.remove();
  //   });
  // }
});

// function removeDiv(e) {
//   e.parentElement.remove();
// }
