const mainContainer = document.querySelector(".mainContainer");
const mainWindow = document.querySelector(".mainWindow");
const chopWoodBtn = document.querySelector("#chopWood");
const woodCount = document.querySelector("#woodCount");
const craftPlankBtn = document.querySelector("#craftPlank");
const plankCount = document.querySelector("#plankCount");
const goldCount = document.querySelector("#goldCount");
const houseCount = document.querySelector("#houseCount")
const buildHouseBtn = document.querySelector("#buildHouse");
const villagerCount = document.querySelector("#villagerCount");
const recruitVillagerBtn = document.querySelector('#recruitVillager');
const gainAmount = document.querySelector('#gainAmount');
const infoButton = document.querySelector('#infoButton');
const bannerCanvas = document.querySelector('#bannerCanvas');

let woodAmount = 0;
let plankAmount = 0;
let goldAmount = 1000000;
let houseAmount = 100;
let villagerAmount = 0;
let toolAmount = 0;

let mainWindowDisplay = "Shop";


let banner = bannerCanvas.getContext("2d");
banner.font = "50px Calibri";
banner.strokeStyle = "black";
banner.lineWidth = 6;
banner.strokeText("Chop Wood!" , 10, 50);
banner.fillStyle = "green";
banner.fillText("Chop Wood!" , 10, 50);
banner.textAlign = "center";

/** @TODO Add img for resource that increases based on amount of resource held
 * Add img for villagers & houses that represents how many owned
 * buy resource functionality?
 * Add items to increase resource gain
 * add upgrades to housing/villagers
 * add crafting of trade items to sell
 * add tooltips
 * add local save
 * 
 */


function updateResources() {
woodCount.textContent = woodAmount;
plankCount.textContent = plankAmount;
goldCount.textContent = goldAmount;
houseCount.textContent = houseAmount;
villagerCount.textContent = villagerAmount;
}




function addWood() {
woodAmount += 1;
updateResources();
}

function craftPlank() {
    if (woodAmount > 9) {
woodAmount -= 10;
plankAmount += 1;
updateResources();
}else {
    alert('Not enough wood!')
}

}


function buildHouse() {
    if(plankAmount > 9) {
    plankAmount -= 10;
    houseAmount += 1;
    updateResources();
    } else alert('House costs 10 planks')
}

function buyItem(item) {
    if (item === "tool") {
        if(goldAmount > 15) {
            goldAmount -= 15;
            toolAmount += 1;

        }else alert('Tools costs 15 gold');

    }

}

function sellItem(item) {
    if (item === "wood") {
        if(woodAmount > 9) {
        woodAmount -= 10;
        goldAmount += 1;
        updateResources();
        }else {
            alert('You need to sell 10 at a time');
        }
    }
    if (item === "planks") {
        if(plankAmount > 9) {
        plankAmount -= 10;
        goldAmount += 11;
        updateResources();
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
        updateResources();
    }else {alert('villager costs 50 gold');}
    
}else {alert('You need 1 house per 2 villagers');}

}

function gainVillagerIncome() {

    if(villagerAmount > 0) {
    woodAmount += villagerAmount;
    updateResources();
    gainAmount.textContent = "+" + villagerAmount;
} else return;
 }

function changeColorText() {

    if(villagerAmount > 0) {
    if (woodCount.className === "woodCountCl2") {
        woodCount.className = "woodCountCl1";
        gainAmount.style.opacity = "1";
    } else {
        woodCount.className = "woodCountCl2";
        gainAmount.style.opacity = "0";

    }
    }else return;


}

 setInterval(changeColorText, 325);
 setInterval(gainVillagerIncome, 750);


 let visible = false;

 document.querySelector("#shopBtn").addEventListener('click', () => {
    if (mainWindowDisplay != "shop") {
        mainWindowDisplay = "shop";

        const buyToolsButton = document.createElement("button");

        buyToolsButton.classList.add('menuButton');
        buyToolsButton.id = 'shopButton';
        buyToolsButton.textContent = 'Buy Tools';
        

        const sellWoodBtn = document.createElement('button');
        sellWoodBtn.id = "sellWoodBtn";
        sellWoodBtn.classList.add('menuButton');
        sellWoodBtn.textContent = 'Sell Wood';
        sellWoodBtn.addEventListener('click', () => {sellItem("wood");});

        const sellPlanksBtn = document.createElement('button');
        sellPlanksBtn.id = "sellPlanksBtn";
        sellPlanksBtn.classList.add('menuButton');
        sellPlanksBtn.textContent ='Sell planks';
        sellPlanksBtn.addEventListener('click', () => {sellItem("planks");});

        mainWindow.appendChild(buyToolsButton);
        mainWindow.appendChild(sellWoodBtn);
            mainWindow.appendChild(sellPlanksBtn);


    } else return;
});

chopWoodBtn.addEventListener('click', addWood);
craftPlankBtn.addEventListener('click', craftPlank);


buildHouseBtn.addEventListener('click', buildHouse);
recruitVillagerBtn.addEventListener('click', recruitVillager);
infoButton.addEventListener('click', () => {
if (visible === false) {
    document.querySelector(".infoBox").innerHTML = "<p>Testing a lot of stuff, we'll see how well this goes when i write a longer sentence</p>"
    document.querySelector(".infoBox").style.display = "block";
    visible = true;
}else {
    document.querySelector(".infoBox").textContent = "";
    document.querySelector(".infoBox").style.display = "none";
    visible = false;
}
});


 /* mainWindow.innerHTML = '';
mainWindow.innerHTML = '<button class="menuButton" id="buyToolsBtn">Buy Tools</button><p>Tools:</p><p id="toolCount">';
document.querySelector("#buyToolsBtn").addEventListener('click', () => {
    buyItem("tool");
});    */



