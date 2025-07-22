import ENG from "./game-data/index.js";
import {setGame} from "./configState.js";


Object.keys(ENG).forEach(key => {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const input = document.createElement("input");

  input.type = "checkbox";
  input.id = key;

  input.addEventListener("change", (e) => {
    setGame(key, e.target.checked);
  });

  li.appendChild(input);
  li.appendChild(document.createTextNode(ENG[key].name));
  ul.appendChild(li);
  document.getElementById("games").appendChild(ul);
});

