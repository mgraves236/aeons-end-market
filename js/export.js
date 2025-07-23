import {getSelectedCards} from "./chosenCardsState.js";
import ENG from "./game-data/index.js";


document.getElementById('exportBtn').addEventListener('click', exportSelectedCards);

export function exportSelectedCards() {
  let varSelectedCards = getSelectedCards()
  let cardsJson = [];

  for (let i = 0; i < varSelectedCards.length; i++) {
    let cardId = varSelectedCards[i];
    let data = findCardById(cardId);
    let cardData = data["cardData"];
    let gameData = data["gameData"];
    cardsJson.push({
        'id': cardId,
        'name': cardData["name"],
        'desc': cardData["effect"],
        'type': cardData["type"],
        'cost': cardsJson["cost"],
        'game': gameData,

    });
  }
  const arrayToObject = (array) =>
    array.reduce((obj, item) => {
      obj[item.id] = item
      return obj
    }, {})
  cardsJson  =arrayToObject(cardsJson)
  cardsJson = JSON.stringify(cardsJson)
  // Save file
  download("AeonsEndMarketExport.txt",cardsJson);

}

export function findCardById(id) {
  for (const gameKey in ENG) {
    const game = ENG[gameKey];
    const cardsMarket = game["data"]["cards"];
    const card = cardsMarket.find(c => c["id"] === id);
    console.log(card)
    if (card) {
      return {
        "cardData": card,
        "gameData": game['name']
      };
    }
  }
  return null;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

