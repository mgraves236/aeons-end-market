const selectedContainer = document.getElementById("chosenCards");

selectedContainer.addEventListener("dragover", (event) => dragOverHandler(event));
selectedContainer.addEventListener("drop", (event) => dropHandler(event));

export function dragStartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

export function dragOverHandler(ev) {
  ev.preventDefault();
  ev.target.style.backgroundColor = "black";
}

export function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
