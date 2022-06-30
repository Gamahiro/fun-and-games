const chopWoodBtn = document.querySelector("#chopWood");
const woodCount = document.querySelector("#woodCount");
const craftPlankBtn = document.querySelector("#craftPlank");
const plankCount = document.querySelector("#plankCount");
const sellWoodBtn = document.querySelector("#sellWoodBtn");
const sellPlanksBtn = document.querySelector("#sellPlanksBtn");
const goldCount = document.querySelector("#goldCount");
const houseCount = document.querySelector("#houseCount")
const buildHouseBtn = document.querySelector("#buildHouse");
const villagerCount = document.querySelector("#villagerCount");
const recruitVillagerBtn = document.querySelector('#recruitVillager');
const gainAmount = document.querySelector('#gainAmount');


let woodAmount = 0;
let plankAmount = 0;
let goldAmount = 1000000;
let houseAmount = 1;
let villagerAmount = 0;

function addWood() {
woodAmount += 1;
woodCount.textContent = woodAmount;
}

function craftPlank() {
    if (woodAmount > 9) {

    
woodAmount -= 10;
woodCount.textContent = woodAmount;

plankAmount += 1;
plankCount.textContent = plankAmount;
}else {
    alert('Not enough wood!')
}

}


function buildHouse() {
    if(plankAmount > 9) {
    plankAmount -= 10;
    houseAmount += 1;
    plankCount.textContent = plankAmount;
    houseCount.textContent = houseAmount;
    } else {alert('House costs 10 planks')}
}

function sellItem(item) {
    if (item === "wood") {
        if(woodAmount > 9) {
        woodAmount -= 10;
        goldAmount += 1;
        goldCount.textContent = goldAmount;
        woodCount.textContent = woodAmount;
        }else {
            alert('You need to sell 10 at a time');
        }
    }
    if (item === "planks") {
        if(plankAmount > 9) {
        plankAmount -= 10;
        goldAmount += 11;
        goldCount.textContent = goldAmount;
        plankCount.textContent = plankAmount;
        }else {
            alert('You need to sell 10 at a time');
        }
    }
}

function recruitVillager() {
console.log(villagerAmount / 2);

    if(villagerAmount < houseAmount * 2) {

    if(goldAmount > 49) {
        goldAmount -= 50;
        villagerAmount += 1;
        villagerCount.textContent = villagerAmount;
        goldCount.textContent = goldAmount;
    }else {alert('villager costs 50 gold');}
    
}else {alert('You need 1 house per 2 villagers');}

}

function gainVillagerIncome() {

    if(villagerAmount > 0) {
    woodAmount += villagerAmount;
    woodCount.textContent = woodAmount;
    gainAmount.textContent = "+" + villagerAmount;
} else return;
 }

function changeColorText() {

    if(villagerAmount > 0) {
    if (woodCount.className === "woodCountCl1") {
        woodCount.className = "woodCountCl2";
    } else {
        woodCount.className = "woodCountCl1";
    }
    }else return;


}

 setInterval(changeColorText, 750);
 setInterval(gainVillagerIncome, 1500);






chopWoodBtn.addEventListener('click', addWood);
craftPlankBtn.addEventListener('click', craftPlank);
sellWoodBtn.addEventListener('click', () => {sellItem("wood");});
sellPlanksBtn.addEventListener('click', () => {sellItem("planks");});
buildHouseBtn.addEventListener('click', buildHouse);
recruitVillagerBtn.addEventListener('click', recruitVillager);


//wood > planks > house > villager with passive income
//villager costs gold
//get gold by selling wood & planks