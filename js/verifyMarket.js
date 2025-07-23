import {getSelectedCards} from "./chosenCardsState.js";
import {findCardById} from "./export.js";

let varSelectedCards = getSelectedCards();

let expectedMarket = {
  "Gem": 3,
  "Spell": 4,
  "Relic": 2
}

function verifyMarket() {
  let typeCount = {
    "Gem": 0,
    "Spell": 0,
    "Relic": 0
  }
  if (varSelectedCards.length > 9) {
    console.log('Too many cards');
  }
  if(varSelectedCards.length === 9) {
    for (let i = 0; i < varSelectedCards.length; i++) {
      let cardId = varSelectedCards[i];
      let data = findCardById(cardId);
      let cardData = data["cardData"];

        for (const type in expectedMarket) {
          if (cardData["type"] === type) {
            typeCount[type] += 1;
          }
        }
    }
  }
  console.log(typeCount)
}
