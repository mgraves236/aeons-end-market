import {selectedCards, setSelectedCards, removeSelectedCard} from "./chosenCardsState.js";

const selectedContainer = document.getElementById("chosenCards");
const choseCardsContainer = document.getElementById("cards");


selectedContainer.addEventListener("dragover", (event) => dragOverHandler(event));
selectedContainer.addEventListener("drop", (event) => dropHandler(event));
// choseCardsContainer.addEventListener("dragover", (event) => dragOverRemoveHandler(event));
// choseCardsContainer.addEventListener("drop", (event) => dropHandlerRemove(event));

export function dragStartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  // console.log(ev.dataTransfer.getData("text"))
}

export function dragOverHandler(ev) {
  ev.preventDefault();
  ev.target.style.backgroundColor = "black";
}

export function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  let card = document.getElementById(data);
  card.style.width = "1rem !important";
  setSelectedCards(data);
}

// export function dragOverRemoveHandler(ev) {
//   ev.preventDefault();
//   ev.target.style.backgroundColor = "black";
// }
//
// export function dropHandlerRemove(ev) {
//   ev.preventDefault();
//   const data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
//   removeSelectedCard(data);
// }
