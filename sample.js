const gridButton = document.querySelector(".column-button");
const rowButton = document.querySelector(".row-button");
const gapButton = document.querySelector(".gap-button");
const gridCntr = document.querySelector(".grid");

gridButton.addEventListener("click", function () {
  gridCntr.classList.toggle("toggle-column");
});

rowButton.addEventListener("click", function () {
  gridCntr.classList.toggle("toggle-row");
});

gapButton.addEventListener("click", function () {
  gridCntr.classList.toggle("toggle-gap");
});
