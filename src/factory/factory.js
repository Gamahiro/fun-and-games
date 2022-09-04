//class for resources the player can spend on buildings, tools or in shop, for example gold, wood

class playerResource {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    get name() {
        return this._name;
    }
    set name(setName) {
        this._name = setName;
    }


    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }
}


//class for buildings that will give the player yield

class playerBuilding {
    constructor(name, cost, gain, type) {
        this.name = name;
        this.cost = cost;
        this.gain = gain;
        this.type = type;
    }
    get name() {
        return this.name;
    }
    get yield() {
        return this.gain;
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

export {
    playerResource,
    playerVillager,
    playerBuilding
}