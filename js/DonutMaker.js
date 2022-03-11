export default class DonutMaker {


    constructor() {
        this.count = 0;
        this.autos = 0;
        this.multis = 0;
        this.autoCost = 100;
        this.multiCost = 10;
        this.autoBuyEnabled = false;
        this.multiBuyEnabled = false;
    }

    addDonut() {

        //multiplier bonus
        if (this.multis === 0) {
            this.count += 1;
        } else {
            this.count += Math.pow(1.2, this.multis);
        }

        //enable buy buttons
        if (this.count >= this.autoCost) {
            this.autoBuyEnabled = true;
        }
        if (this.count >= this.multiCost) {
            this.multiBuyEnabled = true;
        }

        console.log(this.count);
        console.log(this.multiCost);
        console.log(this.autoCost);
    }

    buyAutoClicker() {
        this.count -= this.autoCost;
        this.autos += 1;
        this.autoCost += this.autoCost * .1;

        if (this.count < this.multiCost) {
            this.multiBuyEnabled = false;
        }
        if (this.count < this.autoCost) {
            this.autoBuyEnabled = false;
        }

        console.log(this.count);
        console.log(this.multiCost);
        console.log(this.autoCost);
    }

    buyMultiplier() {
        this.count -= this.multiCost;
        this.multis += 1;
        this.multiCost += this.multiCost * .1;
        
        if (this.count < this.multiCost) {
            this.multiBuyEnabled = false;
        }
        if (this.count < this.autoCost) {
            this.autoBuyEnabled = false;
        }

        console.log(this.count);
        console.log(this.multiCost);
        console.log(this.autoCost);
    }

    resetGame() {
        this.count = 0;
        this.autos = 0;
        this.multis = 0;
        this.autoCost = 100;
        this.autoBuyEnabled = false;
        this.multiCost = 10;
        this.multiBuyEnabled = false;

        console.log(this.count);
        console.log(this.multiCost);
        console.log(this.autoCost);
    }

}