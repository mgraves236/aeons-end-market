import {displayCards} from "./cardsDisplay.js";

export const selectedGames = new Set();

export function setGame(key, checked) {
  if (checked) {
    selectedGames.add(key);
  } else {
    selectedGames.delete(key);
  }
  displayCards(Array.from(selectedGames));
}

export function getSelectedGames() {
  return Array.from(selectedGames);
}
