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

//view
function updateView() {
  autoButton.disabled = !donutMaker.autoBuyEnabled;
  multiButton.disabled = !donutMaker.multiBuyEnabled;
  donutCountEl.innerText = "Donuts: " + donutMaker.count;
  autoCountEl.innerText = "Auto-Clickers: " + donutMaker.autos;
  autoCostEl.innerText = "Auto-Clicker Cost: " + Math.floor(donutMaker.autoCost);
  multiCountEl.innerText = "Multipliers: " + donutMaker.multis;
  multiCostEl.innerText = "Multiplier Cost: " + donutMaker.multiCost;
}

updateView();

// make a donut
donutButton.addEventListener("click", () => {
  addDonut();
  updateView();
})

function addDonut() {

  //multiplier bonus
  if(donutMaker.multis === 0) {
    donutMaker.count += 1;
  } else {
    donutMaker.count += Math.pow(1.2, donutMaker.multis);
  }

  //enable buy buttons
  if(donutMaker.count >= 10) {
    donutMaker.autoBuyEnabled = true;
  }
  if(donutMaker.count >= 10) {
    donutMaker.multiBuyEnabled = true;
  }

}

//auto-clicker stuff
autoButton.addEventListener("click", () => {
  buyAutoClicker();
  clickAutomatically();
  increaseAutoCost();
  updateView();
})

function buyAutoClicker() {
  if(donutMaker.count >= 10) {
      donutMaker.count -= 10;
      donutMaker.autos += 1;
  }
  if(donutMaker.count < 10) {
      donutMaker.autoBuyEnabled = false;
  }
}

function increaseAutoCost() {
  if(donutMaker.autos === 0) {
    donutMaker.autoCost = 10;
  } else if (donutMaker.autos >= 1) {
    donutMaker.autoCost += donutMaker.autoCost * .1;
  }
}

function clickAutomatically() {
  setInterval(addDonut, 1000);
  setInterval(updateView, 1000);
}

//multiplier stuff
multiButton.addEventListener("click", () => {
  buyMultiplier();
  increaseMultiCost();
  updateView();
})

function buyMultiplier() {
  if(donutMaker.count >= 10) {
    donutMaker.count -= 10;
    donutMaker.multis += 1;
  }
  if(donutMaker.count < 10) {
      donutMaker.multiBuyEnabled = false;
  }
}

function increaseMultiCost() {
  if(donutMaker.multis === 0) {
    donutMaker.multiCost = 10;
  } else if (donutMaker.multis >= 1) {
    donutMaker.multiCost += donutMaker.multiCost * .1;
  }
}


