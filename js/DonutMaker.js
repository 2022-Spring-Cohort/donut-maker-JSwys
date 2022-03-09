export default class DonutMaker {


    constructor(name) {
        this.name = name;
        this.count = 0;
        this.autos = 0;
        this.multis = 0;
        this.autoCost = 100;
        this.autoBuyEnabled = false;
        this.multiCost = 10;
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
        if (this.count >= 100) {
            this.autoBuyEnabled = true;
        }
        if (this.count >= 10) {
            this.multiBuyEnabled = true;
        }

    }

    buyAutoClicker() {
        if (this.count >= 100) {
            this.count -= 100;
            this.autos += 1;
        }
        if (this.count < 10) {
            this.multiBuyEnabled = false;
        }
        if (this.count < 100) {
            this.autoBuyEnabled = false;
        }
    }

    increaseAutoCost() {
        if (this.autos === 0) {
            this.autoCost = 10;
        } else if (this.autos >= 1) {
            this.autoCost += this.autoCost * .1;
        }
    }

    buyMultiplier() {
        if (this.count >= 10) {
            this.count -= 10;
            this.multis += 1;
        }
        if (this.count < 10) {
            this.multiBuyEnabled = false;
        }
        if (this.count < 100) {
            this.autoBuyEnabled = false;
        }
    }

    increaseMultiCost() {
        if (this.multis === 0) {
            this.multiCost = 10;
        } else if (this.multis >= 1) {
            this.multiCost += this.multiCost * .1;
        }
    }

    resetGame() {
        this.count = 0;
        this.autos = 0;
        this.multis = 0;
        this.autoCost = 100;
        this.autoBuyEnabled = false;
        this.multiCost = 10;
        this.multiBuyEnabled = false;
    }


}