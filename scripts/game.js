

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



let win_condition = 10;
let plankBasePrice = 100;
let showExport = 0;
let countdown = 30;

myTimer = setInterval(endOfTurnCalc, 1000);
function endOfTurnCalc() {
    if (game.castle <= 10) {
        let wood_prod_rate = (game.woodGrowth * game.woodUpgLevel) - (game.plankUpgLevel * production.plank) - (game.toolsUpgLevel * production.tools.wood)
        let stone_prod_rate = (game.stoneGrowth * game.stoneUpgLevel) - (game.blocksUpgLevel * production.blocks)
        let copperore_prod_rate = (game.copperoreGrowth * game.copperoreUpgLevel) - (game.copperingotUpgLevel * production.copperingot)
        let tinore_prod_rate = (game.tinoreGrowth * game.tinoreUpgLevel) - (game.tiningotUpgLevel * production.tiningot)
        let ironore_prod_rate = (game.ironoreGrowth * game.ironoreUpgLevel) - (game.ironingotUpgLevel * production.ironingot)
        let copperingot_prod_rate = (game.copperingotGrowth * game.copperingotUpgLevel) - (game.bronzeingotUpgLevel * production.bronzeingot.copperingot)
        let tiningot_prod_rate = (game.tiningotGrowth * game.tiningotUpgLevel) - (game.bronzeingotUpgLevel * production.bronzeingot.tiningot)
        let ironingot_prod_rate = (game.ironingotGrowth * game.ironingotUpgLevel) - (game.toolsUpgLevel * production.tools.ironingot) - (game.nailsUpgLevel * production.nails)

        game.taxes = parseFloat((game.population * (game.taxesUpgLevel +  game.taxesGrowth / 10)).toFixed(1))

        game.money += game.taxes
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

        updateButtons();
        Milestones();
        updateUI();
        
    } if (game.castle == 10 && game.wall == 25 && game.house == 50) {
        winGame();
    }
}

function winGame() {
    clearTimeout(myTimer);
    Swal.fire({
        title: "Вы победили!!!",
        text: "Ждите апдейта с продолжением!",
        icon: "success"
    });
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
    if (game.house >= 10 && ui.sawmill.div.style.display != "flex"){
        ui.sawmill.div.style.display = "flex";
        Swal.fire({
            title: "Мы ближе к цели!",
            html: `У нас теперь достаточно жителей, чтобы построить лесопилку и начать обрабатывать бревна.\n 
            Мы стали на шаг ближе к цели!.`.replace(/\n/g, '<br>'),
            icon: "success"
        });
    }
    if (game.house >= 15 && game.sawmill == 1 && ui.quarry.div.style.display != "flex"){
        ui.quarry.div.style.display = "flex";
        Swal.fire({
            title: "Мы ближе к цели!",
            html: `Больше жителей - больше свободных рук!\n 
            Теперь мы можем построить карьер для добычи камня.`.replace(/\n/g, '<br>'),
            icon: "success"
        });
    }
    if (game.house >= 18 &&  game.quarry == 1 && ui.stonemason.div.style.display != "flex"){
        ui.stonemason.div.style.display = "flex";
        Swal.fire({
            title: "Мы ближе к цели!",
            html: `Добыча камня - это важный процесс, но из необработанного камня стены не построить.\n 
            Нам необходима мастерская каменщика!.`.replace(/\n/g, '<br>'),
            icon: "success"
        });
    }
    if (game.house >= 20 &&  game.stonemason == 1 && ui.coppermine.div.style.display != "flex" && ui.smelter.div.style.display != "flex"){
        ui.coppermine.div.style.display = "flex";
        ui.smelter.div.style.display = "flex";
        Swal.fire({
            title: "Мы ближе к цели!",
            html: `Разведчики нашли залежи меди недалеко от карьера.\n 
            Это отличная возможность начать добычу и переплавку металлов!`.replace(/\n/g, '<br>'),
            icon: "success"
        });
    }
    if (game.house >= 23 &&  game.coppermine == 1 && ui.tinmine.div.style.display != "flex"){
        ui.tinmine.div.style.display = "flex";
        Swal.fire({
            title: "Мы ближе к цели!",
            html: `Мы нашли залежи олова.\n 
            Больше материалов на переработку и продажу.`.replace(/\n/g, '<br>'),
            icon: "success"
        });
    }
    if (game.house >= 25 &&  game.tinmine == 1 && ui.ironmine.div.style.display != "flex"){
        ui.ironmine.div.style.display = "flex";
        Swal.fire({
            title: "Мы ближе к цели!",
            html: `Это самое лучшее место для города!\n 
            Мы нашли залежи железа. Вскоре мы сможем начать изготавливать инструменты для нужд посления!`.replace(/\n/g, '<br>'),
            icon: "success"
        });
    }
    if (game.house >= 30 &&  game.ironmine == 1 &&  ui.smelter.upgrade_btn.disabled != false &&  ui.smelter.upgrade_btn.innerHTML != `50 <img src="static/iron_ingot.png"> 100 <img src="static/block.png"> 100 <img src="static/plank.png">`){
        
        ui.smelter.upgrade_btn.disabled = false;
        ui.smelter.upgrade_btn.innerHTML = `50 <img src="static/iron_ingot.png"> 100 <img src="static/block.png"> 100 <img src="static/plank.png">`;
        Swal.fire({
            title: "Мы ближе к цели!",
            html: `Время улучшений!\n 
            Нам нужно улучшить плавильню, чтобы начать изготавливать сплавы.`.replace(/\n/g, '<br>'),
            icon: "success"
        });

    }
    if (game.house >= 35 &&  game.smelter == 2 && ui.blacksmith.div.style.display != "flex"){

        ui.blacksmith.div.style.display = "flex";
        Swal.fire({
            title: "Мы ближе к цели!",
            html: `С новой плавильной, мы можем начать изотавливать инструменты и ковать гвозди.\n 
            Осталось только построить кузницу.`.replace(/\n/g, '<br>'),
            icon: "success"
        });
        
    }
    if (game.house >= 40 && game.wall >= 10 && ui.castle.div.style.display != "flex"){
        ui.castle.div.style.display = "flex";
        Swal.fire({
            title: "Последний шаг!",
            html: `Настало время начать строить наш замок.\n 
            Главное не забывать о оставшихся домах для жителей и стенах для защиты.`.replace(/\n/g, '<br>'),
            icon: "success"
        });
    }
    if (game.wall == 25){
        ui.wall.upgrade_btn.disabled =true;
    }
    if (game.house == 50){
        ui.house.upgrade_btn.disabled = true;
    }
    if (game.castle == 10){
        ui.castle.upgrade_btn.disabled = true;
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
        game.population += 1;
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
        game.population += 1;
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






