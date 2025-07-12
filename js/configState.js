import {displayCards} from "./cardsDisplay.js";

export const selectedGames = new Set();

export function setGame(key, checked) {
  if (checked) {
    selectedGames.add(key);
  } else {
    selectedGames.delete(key);
  }
  console.log("Selected games:", Array.from(selectedGames));
  displayCards(Array.from(selectedGames));
}

export function getSelectedGames() {
  return Array.from(selectedGames);
}
