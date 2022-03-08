import DonutMaker from "./DonutMaker.js";


const donutButton = document.querySelector(".donut__button");
const donutCountEl = document.querySelector(".donut__count");

const autoButton = document.querySelector(".auto__button");
const autoCountEl = document.querySelector(".auto__count");
const autoCostEl = document.querySelector(".auto__cost");

const multiButton = document.querySelector(".multi__button");
const multiCountEl = document.querySelector(".multi__count");
const multiCostEl = document.querySelector(".multi__cost");


const donutMaker = new DonutMaker("Tasty Pastry");

// view
function updateView() {
  autoButton.disabled = !donutMaker.autoBuyEnabled;
  multiButton.disabled = !donutMaker.multiBuyEnabled;
  donutCountEl.innerText = "Donuts: " + donutMaker.count;
  autoCountEl.innerText = "Auto-Clickers: " + donutMaker.autos;
  autoCostEl.innerText = "Auto-Clicker Cost: " + donutMaker.autoCost;
  multiCountEl.innerText = "Multipliers: " + donutMaker.multis;
  multiCostEl.innerText = "Multiplier Cost: " + donutMaker.multiCost;
}

updateView();

//make a Donut
function makeNewDonut() {
  donutMaker.addDonut();
}

donutButton.addEventListener("click", () => {
  makeNewDonut();
  updateView();
})

//auto-clicker button
autoButton.addEventListener("click", () => {
  donutMaker.buyAutoClicker();
  setInterval(makeNewDonut, 1000);
  setInterval(updateView, 1000);
  donutMaker.increaseAutoCost();
  updateView();
})

//multiplier button
multiButton.addEventListener("click", () => {
  donutMaker.buyMultiplier();
  donutMaker.increaseMultiCost();
  updateView();
})



