

let game = {
    money: 1000000,
    wood: 0,
    woodGrowth: 1,
    woodUpgLevel: 0,
    plank: 0,
    plankGrowth: 1,
    plankUpgLevel: 0,
    stone: 0,
    stoneGrowth: 1,
    stoneUpgLevel: 0,
    blocks: 0,
    blocksGrowth: 1,
    blocksUpgLevel: 0,
    copperore: 0,
    copperoreGrowth: 1,
    copperoreUpgLevel: 0,
    tinore: 0,
    tinoreGrowth: 1,
    tinoreUpgLevel: 0,
    ironore: 0,
    ironoreGrowth: 1,
    ironoreUpgLevel: 0,
    copperingot: 0,
    copperingotGrowth: 1,
    copperingotUpgLevel: 0,
    tiningot: 0,
    tiningotGrowth: 1,
    tiningotUpgLevel: 0,
    ironingot: 0,
    ironingotGrowth: 1,
    ironingotUpgLevel: 0,
    bronzeingot: 0,
    bronzeingotGrowth: 1,
    bronzeingotUpgLevel: 0,
    tools: 0,
    toolsGrowth: 1,
    toolsUpgLevel: 0,
    nails: 0,
    nailsGrowth: 1,
    nailsUpgLevel: 0,
    house: 0,
    sawmill: 0,
    quarry: 0,
    stonemason: 0,
    coppermine: 0,
    tinmine: 0,
    ironmine: 0,
    smelter:0,
    blacksmith: 0,

}

const milestones = {
    1:0
}

const updrademulti = {
    wood: 1,
    plank: 11,
    stone: 31,
    blocks: 51,
    copperore: 51,
    tinore: 76,
    ironingot: 101,
    copperingot: 501,
    tiningot: 751,
    ironingot: 1001,
    bronzeingot: 1501,
    tools: 1001,
    nails: 1001
    
}

const sell = {
    wood: 1,
    plank: 10,
    stone: 30,
    blocks: 50,
    copperore: 50,
    tinore: 75,
    ironore: 100,
    copperingot: 60,
    tiningot: 75,
    ironingot: 100,
    bronzeingot: 300,
    tools: 350,
    nails: 200
}

const baseprice = {
    wood: 10,
    plank: 100,
    stone: 300,
    blocks: 500,
    copperore: 500,
    tinore: 750,
    ironore: 1000,
    copperingot: 750,
    tiningot: 800,
    ironingot: 1000,
    bronzeingot: 1500,
    tools: 1000,
    nails: 1000
}

const production = {
    plank: 4,
    blocks: 2,
    copperingot: 3,
    tiningot: 2,
    ironingot: 4,
    bronzeingot: {
        copperingot: 4,
        tiningot: 1
    },
    tools: {
        wood:1,
        ironingot:2
    },
    nails: 2
}

function TestFunc() {
    // btn = document.getElementById("btnTest_1")
    // btn.innerHTML = `10 <img src="static/tools.png"> 100 <img src="static/coin.png">`
    ui.house.upgrade_btn.disabled = false
}

function ShowAll(){
    div = document.getElementsByClassName("material_line")
    for (e of div) {
        e.style.display = "flex"
    }
}



let win_condition = 10000000000000;
let plankBasePrice = 100;
let showExport = 0;
let countdown = 30;

myTimer = setInterval(endOfTurnCalc, 1000);
function endOfTurnCalc() {
    if (game.blocks < win_condition) {
        let wood_prod_rate = (game.woodGrowth * game.woodUpgLevel) - (game.plankUpgLevel * production.plank) - (game.toolsUpgLevel * production.tools.wood)
        let stone_prod_rate = (game.stoneGrowth * game.stoneUpgLevel) - (game.blocksUpgLevel * production.blocks)
        let copperore_prod_rate = (game.copperoreGrowth * game.copperoreUpgLevel) - (game.copperingotUpgLevel * production.copperingot)
        let tinore_prod_rate = (game.tinoreGrowth * game.tinoreUpgLevel) - (game.tiningotUpgLevel * production.tiningot)
        let ironore_prod_rate = (game.ironoreGrowth * game.ironoreUpgLevel) - (game.ironingotUpgLevel * production.ironingot)
        let copperingot_prod_rate = (game.copperingotGrowth * game.copperingotUpgLevel) - (game.bronzeingotUpgLevel * production.bronzeingot.copperingot)
        let tiningot_prod_rate = (game.tiningotGrowth * game.tiningotUpgLevel) - (game.bronzeingotUpgLevel * production.bronzeingot.tiningot)
        let ironingot_prod_rate = (game.ironingotGrowth * game.ironingotUpgLevel) - (game.toolsUpgLevel * production.tools.ironingot) - (game.nailsUpgLevel * production.nails)


        if (game.wood + wood_prod_rate >= 0) {
            game.wood += wood_prod_rate;
            game.plank += game.plankGrowth * game.plankUpgLevel;
        }

        if (game.stone + stone_prod_rate >= 0) {
            game.stone += stone_prod_rate;
            game.blocks += game.blocksGrowth * game.blocksUpgLevel;
        }

        if (game.copperore + copperore_prod_rate >= 0) {
            game.copperore += copperore_prod_rate;
            if (game.copperingot + copperingot_prod_rate > 0){
                game.copperingot += copperingot_prod_rate;
            } 
        }

        if (game.tinore + tinore_prod_rate >= 0) {
            game.tinore += tinore_prod_rate;
            if (game.tiningot + tiningot_prod_rate > 0){
                game.tiningot += tiningot_prod_rate;
            }
            
        }

        if (((game.tiningot + tiningot_prod_rate >= 0) && (game.copperingot + copperingot_prod_rate >= 0))&& ((game.copperore + copperore_prod_rate >= 0)&&(game.tinore + tinore_prod_rate >= 0))) {
            game.bronzeingot += game.bronzeingotGrowth * game.bronzeingotUpgLevel * 4
        }

        if (game.ironore + ironore_prod_rate >= 0) {
            game.ironore += ironore_prod_rate;
            if (game.ironingot + ironingot_prod_rate > 0){
                game.ironingot += ironingot_prod_rate;
            }
            
        }

        if ((game.ironingot + ironingot_prod_rate >= 0) && (game.wood + wood_prod_rate >= 0) && (game.ironore + ironore_prod_rate >= 0)){
            game.tools += game.toolsGrowth * game.toolsUpgLevel
        }

        if ((game.ironingot + ironingot_prod_rate >= 0) && (game.ironore + ironore_prod_rate >= 0)){
            game.nails += game.nailsGrowth * game.nailsUpgLevel
        }

        
        updateUI();
    } else {
        winGame();
    }
}

function winGame() {
    clearTimeout(myTimer);
    alert("Вы достигли цели! Вы накопили " + win_condition.toString());
    myRestartTimer = setInterval(restartGameDialog, 2000);
}

function updateButtons() {
    for (let elem of document.getElementsByClassName('base_btn')) {
        if (elem.id.includes("Upg")) {
            if (UpgradeCost(elem.id.substring(6).toLowerCase()) > game.money) {
                elem.disabled = true;
            }
            else {
                elem.disabled = false;
            }
        };
        if (elem.id.includes("Sell")){
            sellvalue = game[elem.id.substring(7).toLowerCase()]*sell[elem.id.substring(7).toLowerCase()]
            if (sellvalue == 0){
                elem.innerHTML = `${sellvalue} <img src="static/money-bag.png">`
                elem.disabled = true;
            }
            else {
                elem.disabled = false;
                elem.innerHTML = `${sellvalue} <img src="static/money-bag.png">`
            }
            
        }
    }
}

function Milestones() {
    if (game.house >= 10){
        ui.sawmill.div.style.display = "flex";
    }
    if (game.house >= 15 && game.sawmill == 1){
        ui.quarry.div.style.display = "flex"
    }
    if (game.house >= 18 &&  game.quarry == 1){
        ui.stonemason.div.style.display = "flex"
    }
    if (game.house >= 20 &&  game.stonemason == 1){
        ui.coppermine.div.style.display = "flex"
        ui.smelter.div.style.display = "flex"
    }
    if (game.house >= 23 &&  game.coppermine == 1){
        ui.tinmine.div.style.display = "flex"
    }
    if (game.house >= 25 &&  game.tinmine == 1){
        ui.ironmine.div.style.display = "flex"
    }
    if (game.house >= 30 &&  game.ironmine == 1){
        
        ui.smelter.upgrade_btn.disabled = false;
        ui.smelter.upgrade_btn.innerHTML = `50 <img src="static/iron_ingot.png"> 100 <img src="static/block.png"> 100 <img src="static/plank.png">`

    }
    if (game.house >= 35 &&  game.smelter == 2){

        ui.blacksmith.div.style.display = "flex"
        
    }
    if (game.house == 50){
        ui.house.upgrade_btn.disabled = true;
    }

    if (game.sawmill == 1){
        ui.plank.div.style.display = "flex";
        ui.sawmill.upgrade_btn.disabled = true;
    }
    if (game.quarry == 1){
        ui.stone.div.style.display = "flex";
        ui.quarry.upgrade_btn.disabled = true;
    }
    if (game.stonemason == 1){
        ui.blocks.div.style.display = "flex";
        ui.stonemason.upgrade_btn.disabled = true;
    }
    if (game.coppermine == 1){
        ui.copperore.div.style.display = "flex"
        ui.coppermine.upgrade_btn.disabled = true;
    }
    
    if (game.smelter == 1 && game.coppermine == 1 && game.house < 30){
        ui.copperingot.div.style.display = "flex"
        ui.smelter.upgrade_btn.disabled = true;
    }
    if (game.smelter == 1 && game.tinmine == 1){
        ui.tinore.div.style.display = "flex"
        ui.tiningot.div.style.display = "flex"
        ui.tinmine.upgrade_btn.disabled = true;
    }
    if (game.smelter == 1 && game.ironmine == 1){
        ui.ironore.div.style.display = "flex"
        ui.ironingot.div.style.display = "flex"
        ui.ironmine.upgrade_btn.disabled = true;

    }
    if (game.smelter == 2){
        ui.bronzeingot.div.style.display = "flex"
        ui.smelter.upgrade_btn.disabled = true;
    }
    if (game.blacksmith == 1 ){
        ui.tools.div.style.display = "flex"
        ui.nails.div.style.display = "flex"
        ui.blacksmith.upgrade_btn.disabled = true;
    }
}

function sellItems(string) {
    game.money += game[string] * sell[string]
    game[string] = 0
}

function UpgradeItem(string) {
    if (game.money >= UpgradeCost(string)) {
        game.money = game.money - UpgradeCost(string);
        game[string + "UpgLevel"] += 1;
        updateUI();
    }
}

function UpgradeCost(string) {
    return Math.ceil(baseprice[string] * Math.pow(1.07, game[string + "UpgLevel"]))
}

function BuildItem(string) {
    if (game.money >= baseprice[string]) {
        game.money -= baseprice[string];
        game[string + "UpgLevel"] = 1;
        updateUI();
    }

}

function Construct(obj, building) {
    let build = Boolean(true)
    for (const [key, value] of Object.entries(obj)) {
        if (value <= game[key]){
            build = Boolean(true)
        }else{
            build = Boolean(false)
            break
        }
      }
    if (build === Boolean(true)){
        game[building]+=1
        for (const [key, value] of Object.entries(obj)) {
            game[key]-=value
        }
    }
}






