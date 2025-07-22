export const selectedCards = new Set();

export function setSelectedCards(key) {
    selectedCards.add(key);
    console.log(Array.from(selectedCards))
}

export function removeSelectedCard(key) {
  selectedCards.delete(key);
  console.log(Array.from(selectedCards))
}

export function getSelectedCards() {
  return Array.from(selectedCards);
}
