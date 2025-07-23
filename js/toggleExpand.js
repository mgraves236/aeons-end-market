
let sideBarState = false; // false - closed, true - open

let chosenCards = document.getElementById('chosenCards')
let toggleHandler = document.getElementById('toggle');
let toogleIcon = document.getElementById('toggleIcon')
toggleHandler.addEventListener('click', (e) =>
{
  if (!sideBarState) {
    chosenCards.classList.add("extend");
    sideBarState = true;
    toogleIcon.classList.add("fa-arrow-right")
    toogleIcon.classList.remove("fa-arrow-left")

  } else {
    chosenCards.classList.remove("extend");
    toogleIcon.classList.add("fa-arrow-left")
    toogleIcon.classList.remove("fa-arrow-right")
    sideBarState = false;
  }
});
