//class for resources the player can spend on buildings, tools or in shop, for example gold, wood

class playerResource {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    get name() {
        return this.name;
    }


    get amount() {
        return this.amount;
    }

    set amount(value) {
        this.amount = value;
    }
}


//class for buildings that will give the player yield

class playerBuilding {
    constructor(name, cost, yield, type) {
        this.name = name;
        this.cost = cost;
        this.yield = yield;
        this.type = type;
    }
    get name() {
        return this.name;
    }
    get yield() {
        return this.yield;
    }
    get type() {
        return this.type;
    }
    get cost() {
        return this.cost;
    }

}


//Villagers that can be used with buildings to increase the yield of buildings
class playerVillager {
    constructor(name, upkeep, workPower) {
        this.name = name;
        this.upkeep = upkeep;
        this.workPower = workPower;
    }

    get name() {
        return this.name;
    }
    get upkeep() {
        return this.upkeep;
    }
    get workPower() {
        return this.workPower;
    }

}




//player will store an array for each type of asset
const player = (name) => {

    let playerResources = [];
    let playerBuildings = [];
    let playerVillagers = [];




}







const gameModule = (() => {
    'use strict';






});



