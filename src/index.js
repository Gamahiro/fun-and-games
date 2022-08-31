import { resourceGainer } from "../factory/factory";

let wood = 'wood';
let gold;
let gainAmount;
let health;

const lumberMill = new resourceGainer('Lumber Mill', wood, 1, 100);

const goldMine = new resourceGainer('Gold Mine', 'gold', 3, 100);

console.log(lumberMill.health);
lumberMill.health = 50;
console.log(lumberMill);
