const chopWoodBtn = document.querySelector("#chopWood");
const woodCount = document.querySelector("#woodCount");
const craftPlankBtn = document.querySelector("#craftPlank");
const plankCount = document.querySelector("#plankCount");
const sellWoodBtn = document.querySelector("#sellWoodBtn");
const sellPlanksBtn = document.querySelector("#sellPlanksBtn");
const goldCount = document.querySelector("#goldCount");


let woodAmount = 0;
let plankAmount = 0;
let goldAmount = 0;
let houseAmount = 1;

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
        goldAmount += 3;
        goldCount.textContent = goldAmount;
        plankCount.textContent = plankAmount;
        }else {
            alert('You need to sell 10 at a time');
        }
    }
}









chopWoodBtn.addEventListener('click', addWood);
craftPlankBtn.addEventListener('click', craftPlank);
sellWoodBtn.addEventListener('click', () => {sellItem("wood");});
sellPlanksBtn.addEventListener('click', () => {sellItem("planks");});


//wood > planks > house > villager with passive income
//villager costs gold
//get gold by selling wood & planks