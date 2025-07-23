import {removeSelectedCard, setSelectedCards} from "./chosenCardsState.js";
import {verifyMarket} from "./verifyMarket.js";

const left = document.getElementById('cardList');
const right = document.getElementById('chosenCardsList');

const containers = [
  document.getElementById('cardList'),
  document.getElementById('chosenCardsList'),
];

const drake = dragula(containers);

drake.on('drop', (el, target, source, sibling) => {
  console.log('Dropped', el, 'into', target);
  if (target.id === "cardList") {
    removeSelectedCard(el.id);
  } else {
    setSelectedCards(el.id);
  }
  verifyMarket();
})
