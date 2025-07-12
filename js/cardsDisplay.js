import ENG from "./game-data";

export function displayCards(selectedGames) {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";
  console.log(selectedGames)
  for (var i = 0; i < selectedGames.length; i++) {
    var gameSetDataCards = ENG[selectedGames[i]]["data"]["cards"];
    for (var j = 0; j < gameSetDataCards.length; j++) {

        const ul = document.createElement("ul");
        const li = document.createElement("li");

        li.appendChild(document.createTextNode(gameSetDataCards[j]["name"]));
        ul.appendChild(li);
        document.getElementById("cards").appendChild(ul);
    }
  }
}
