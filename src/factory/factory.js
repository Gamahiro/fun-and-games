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
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get gain() {
        return this._gain;
    }
    set gain(value) {
        this._gain = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get cost() {
        return this._cost;
    }
    set cost(value) {
        this._cost = value;
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
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get upkeep() {
        return this.upkeep;
    }
    set upkeep(value) {
        this._upkeep = value;
    }
    get workPower() {
        return this.workPower;
    }
    set workPower(value) {
        this._workPower = value;
    }
}

export {
    playerResource,
    playerVillager,
    playerBuilding
}