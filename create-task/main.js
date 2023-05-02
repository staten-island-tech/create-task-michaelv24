import "./styles/style.css";
import { array } from "./array.js";

let cart = [];

const DOMSelectors = {
  buttonUtil: document.querySelector(".btnUtil"),
  buttonBook: document.querySelector(".btnBook"),
  buttonToy: document.querySelector(".btnToy"),
  buttonAll: document.querySelector(".btnAll"),
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

//Cart Functions
const removeDiv = function () {
  DOMSelectors.display.innerHTML = "";
};

const addToCart = function (object) {
  cart.push(object);
  alert("Item added to cart");
};

const dispCart = function () {
  console.log(cart);
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<text class="cartText">Cart</text>`
  );
  for (let i of cart) {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<div class="cartItem">${i.innerHTML}</div>`
    );
    for (let j of DOMSelectors.addTo) {
      j.remove();
    }
  }
};

const clearCart = function () {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<text class="cartText">Cart</text>`
  );
  cart = [];
  alert("Cart has been cleared");
};

//Gets target item and adds to the div
const Data = function (target) {
  let obj;
  console.log(array);
  for (let i of array) {
    if (i.name.toLowerCase().trim() === target.toLowerCase().trim()) {
      obj = i;
      break;
    }
  }
  if (!obj) {
    throw "item is not for sale";
  }
  const name = obj.name;
  const image = obj.image;
  const type = obj.type;
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card"><ul><li class="list-name">${name}</li> <li class="list-category">${type}</li> <li><img src="${image}" alt="Picture of ${name}" class="img"></img></li> <button class="addTo">Add To Cart</button>`
  );
};

//Filter Algorithm
const filterShop = function (type) {
  //if all passed in then dont filter and return all of the objects in the shop
  if (type === "All") {
    array.forEach((array) =>
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="text"><img class="img" src=${array.image}><img><p>${array.name}</p>
          <p>${array.type}</p> <button class="addTo">Add To Cart</button> </div>`
      )
    );
  }
  //if the type is none of these then the category does not exist
  else if (!type == "Utilities" || !type == "Toys" || !type == "Books") {
    alert("Category does not exist");
  }
  //Otherwise the array is filtered by type
  else {
    array
      .filter((theArr) => theArr.type === type)
      .forEach((obj) => {
        DOMSelectors.display.insertAdjacentHTML(
          "beforeend",
          `<div class="text"><img class="img" src=${obj.image}><img><p>${obj.name}</p>
        <p>${obj.type}</p> <button class="addTo">Add To Cart</button></div>`
        );
      });
  }
};

//Button Functions
DOMSelectors.buttonUtil.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  filterShop("Utilities");
  for (let btn of DOMSelectors.addTo) {
    btn.addEventListener("click", function () {
      addToCart(this.parentElement);
    });
  }
});
DOMSelectors.buttonBook.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  filterShop("Books");
  for (let btn of DOMSelectors.addTo) {
    btn.addEventListener("click", function () {
      addToCart(this.parentElement);
    });
  }
});
DOMSelectors.buttonToy.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  filterShop("Toys");
  for (let btn of DOMSelectors.addTo) {
    btn.addEventListener("click", function () {
      addToCart(this.parentElement);
    });
  }
});

DOMSelectors.buttonAll.addEventListener("click", function () {
  console.log(DOMSelectors.display);
  removeDiv();
  filterShop("All");
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

//Search Bar
DOMSelectors.form.addEventListener("submit", async function () {
  event.preventDefault();
  removeDiv();
  let name = DOMSelectors.input.value.toLowerCase();
  name = name.trim();
  try {
    Data(name);
  } catch (e) {
    alert("Item is not for sale");
    console.log(e);
  }
  DOMSelectors.form.reset();
  for (let btn of DOMSelectors.addTo) {
    btn.addEventListener("click", function () {
      addToCart(this.parentElement);
    });
  }
});
