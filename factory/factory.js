

class resourceFactory {


    constructor(name, type, amount, health, villagerCost, goldCost){
        this.name = name;
        this.type = type;
        this.amount = amount;
        this.health = health;   
        this.villagerCost = villagerCost;
        this.goldCost = goldCost;
    }


}

class villager {
    constructor(name, workPower, attackPower, size) {
        this.name = name;
        this.workPower = workPower;
        this.attackPower = attackPower;
        this.size = size;
    }

}

