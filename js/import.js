import {getSelectedCards, setSelectedCards} from "./chosenCardsState.js";
import {getSelectedGames, setGame} from "./configState.js";
import ENG from "./game-data/index.js";

document.getElementById('file-upload').addEventListener('change', importSelectedCards);

let chosenCardsList = document.getElementById('chosenCardsList')

export function importSelectedCards(event) {
  let fr = new FileReader();
  let gameAbbr = [];

  fr.onload = function () {
    let cardsJSON = fr.result;
    cardsJSON = JSON.parse(cardsJSON);
    for (let cardId in cardsJSON) {
      let game = cardsJSON[cardId]["game"];

      for (let gameId in ENG) {
        if (ENG[gameId]["name"] === game) {
          gameAbbr.push(gameId);
        }
      }
      let uniqGame = [...new Set(gameAbbr)];
      for (let i = 0; i < uniqGame.length; i++) {
        setGame(uniqGame[i], true);
        let gameCheckbox = document.getElementById(uniqGame[i]).checked = true;
      }
      let card = document.getElementById(cardId);
      setSelectedCards(cardId);
      chosenCardsList.appendChild(card);
    }
  };
  fr.readAsText(event.target.files[0]);
}

