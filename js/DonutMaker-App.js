import DonutMaker from "./DonutMaker.js";


const donutButton = document.querySelector(".donut__button");
const donutCountEl = document.querySelector(".donut__count");

const autoButton = document.querySelector(".auto__button");
const autoClickEl = document.querySelector(".auto__count");
const autoCostEl = document.querySelector(".auto__cost");


const donutMaker = new DonutMaker("Tasty Pastry");

//view
function updateView() {
  autoButton.disabled = !donutMaker.autoBuyEnabled;
  donutCountEl.innerText = "Donuts: " + donutMaker.count;
  autoClickEl.innerText = "Auto-Clickers: " + donutMaker.autos;
  autoCostEl.innerText = "Auto-Clicker Cost: " + Math.floor(donutMaker.autoCost);
}

updateView();

// make a donut
donutButton.addEventListener("click", () => {
  addDonut();
  updateView();
})

//buy an auto-clicker
autoButton.addEventListener("click", () => {
  buyAutoClicker();
  clickAutomatically();
  increaseAutoCost();
  updateView();
})

// donutMaker.clickAutomatically;

function addDonut() {
  donutMaker.count += 1;
  if(donutMaker.count >= 10) {
    donutMaker.autoBuyEnabled = true;
  }
}

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

