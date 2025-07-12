import ENG from "./game-data";
import {setGame} from "./configState.js";


// for (const [key, value] of Object.entries(ENG)) {
//   document.getElementById("games").innerHTML +=
//     "<ul><li><input type='checkbox' id='" + key + "' onclick='setGame(\"" + key + "\")'>" +
//     ENG[key]["name"] + "</li></ul>";
//
// }


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

