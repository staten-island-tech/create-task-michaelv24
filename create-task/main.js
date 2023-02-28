import "styles./style.css";
import { array } from "./array.js";

const DOMSelectors = {
  buttonUtil: document.getElementById("btnUtil"),
  buttonBooks: document.getElementById("btnBooks"),
  buttonToys: document.getElementById("btnToys"),
  storeFront: document.querySelector("main"),
  name: document.querySelector(".name"),
  item: document.querySelector(".brand"),
  display: document.querySelector(".img"),
  remove: document.getElementsByClassName("remove"),
};

DOMSelectors.button;

function removeItem(i) {
  i.parentElement.remove();
}
