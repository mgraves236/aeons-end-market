import {getSelectedCards} from "./chosenCardsState.js";
import {findCardById} from "./export.js";


let expectedMarket = {
  "Gem": 3,
  "Spell": 4,
  "Relic": 2
}

export function verifyMarket() {
  let varSelectedCards = getSelectedCards();
  let typeCount = {
    "Gem": 0,
    "Spell": 0,
    "Relic": 0
  }
  let text = "";
  if (varSelectedCards.length > 9) {
    text = ""
    text = 'Too many cards chosen. ';
  }
  if (true) {

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
    //verify count
    for (const type in expectedMarket) {
      if (typeCount[type] > expectedMarket[type]) {
        text = text.concat('Too many cards of ' + type + ' type. ')
      }
    }
  }
  let infoText = document.getElementById('info');
  let infoContainer = document.getElementById('infoContainer');

  infoText.innerText =  text;

  if (text) {
    infoContainer.classList.remove('hidden');
  } else {
    infoContainer.classList.add('hidden');

  }
}
