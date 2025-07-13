import ENG from "./game-data";
import {dragStartHandler, dropHandler, dragOverHandler} from "./dropState.js";


export function displayCards(selectedGames) {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";
  console.log(selectedGames)
  for (let i = 0; i < selectedGames.length; i++) {
    let gameSetDataCards = ENG[selectedGames[i]]["data"]["cards"];
    for (let j = 0; j < gameSetDataCards.length; j++) {

      const cardDiv = document.createElement("div");
      cardDiv.className = "cardContainer"
      cardDiv.draggable = true;
      cardDiv.addEventListener("dragstart", (event) => dragStartHandler(event));

      const cardContentDiv = document.createElement("div");
      cardContentDiv.className = "cardContentContainer"

      const img = document.createElement("img")

      img.src = "https://cdn.shopify.com/s/files/1/0384/0265/files/" + gameSetDataCards[j]["id"] + ".jpg";
      img.style.width = "15em";
      img.id = gameSetDataCards[j]["id"];
      cardDiv.appendChild(img)
      // Image not found, generate a placeholder
      img.onerror = function () {
        img.remove();
        cardDiv.appendChild(cardContentDiv);
        cardDiv.id = gameSetDataCards[j]["id"];
        const cost = document.createElement("div");
        cost.className = "cardCost"
        cost.innerHTML = gameSetDataCards[j]["cost"];
        cardContentDiv.appendChild(cost);
        const name = document.createElement("div");
        name.className = "cardName"
        name.innerHTML = gameSetDataCards[j]["name"];
        cardContentDiv.appendChild(name);

        const description = document.createElement("div");
        description.className = "cardDesc"
        description.innerHTML = gameSetDataCards[j]["effect"];
        cardContentDiv.appendChild(description);

        const type = document.createElement("div");
        type.className = "cardType"
        type.innerHTML = gameSetDataCards[j]["type"];
        cardContentDiv.appendChild(type);


        if (gameSetDataCards[j]["type"] === "Gem") {
          description.style.backgroundColor = "#dbb6e6"
        }
        if (gameSetDataCards[j]["type"] === "Spell") {
          description.style.backgroundColor = "#FDE9D1"
        }
        if (gameSetDataCards[j]["type"] === "Relic") {
          description.style.backgroundColor = "#D7EAF6"
        }
      };
      document.getElementById("cards").appendChild(cardDiv);
    }
  }
}
