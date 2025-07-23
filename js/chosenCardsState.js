export const selectedCards = new Set();

export function setSelectedCards(key) {
    selectedCards.add(key);
}

export function removeSelectedCard(key) {
  selectedCards.delete(key);
}

export function getSelectedCards() {
  return Array.from(selectedCards);
}
