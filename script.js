

let game = {
    money: 10000,
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
}

const updrademulti = {
    wood: 0,
    plank: 11,
    stone: 31,
    blocks: 51
}

const sell = {
    wood: 1,
    plank: 10,
    stone: 30,
    blocks: 50
}

const baseprice = {
    wood: 10,
    plank: 100,
    stone: 300,
    blocks: 500
}

const production = {
    plank: 4,
    blocks: 2
}



let win_condition = 10000000000000;
let plankBasePrice = 100;
let showExport = 0;
let countdown = 30;

myTimer = setInterval(endOfTurnCalc, 1000);
function endOfTurnCalc() {
    if (game.blocks < win_condition) {
        wood_prod_rate = (game.woodGrowth * game.woodUpgLevel) - (game.plankUpgLevel * production.plank)
        stone_prod_rate = (game.stoneGrowth * game.stoneUpgLevel) - (game.blocksUpgLevel * production.blocks)

        if (game.wood - (game.plankUpgLevel * production.plank) == 0 ||
            game.wood == Math.abs(wood_prod_rate) ||
            wood_prod_rate > 0 ||
            game.wood - Math.abs(wood_prod_rate) > 0) {
            game.wood += (game.woodGrowth * game.woodUpgLevel) - (game.plankUpgLevel * production.plank);
            game.plank = game.plank + game.plankGrowth * game.plankUpgLevel;
        }

        if (game.stone - (game.stoneUpgLevel * production.blocks) == 0 ||
            game.stone == Math.abs(stone_prod_rate) ||
            stone_prod_rate > 0 ||
            game.stone - Math.abs(stone_prod_rate) > 0) {
            game.stone += (game.stoneGrowth * game.stoneUpgLevel) - (game.blocksUpgLevel * production.blocks);
            game.blocks = game.blocks + game.blocksGrowth * game.blocksUpgLevel;
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
    return (game[string + "UpgLevel"] + updrademulti[string]) * 10
}

function BuildItem(string) {
    if (game.money >= baseprice[string]) {
        game.money -= baseprice[string];
        game[string + "UpgLevel"] = 1;
        updateUI();
    }

}

function woodUpgCost() {
    return game.woodUpgLevel * 10;
}

const ui = {
    money: document.getElementById("spnMoneyValue"),
    chop: document.getElementById("btnChopTrees"),
    wood: {
        value: document.getElementById("spnWoodValue"),
        upgrade: document.getElementById("btnUpgWood"),
        level: document.getElementById("spnWoodUpgLevel"),
        rate: document.getElementById("spnWoodRate"),
        sell: document.getElementById("btnSellWood")
    },
    plank: {
        value: document.getElementById("spnPlankValue"),
        upgrade: document.getElementById("btnUpgPlank"),
        level: document.getElementById("spnPlankUpgLevel"),
        rate: document.getElementById("spnPlankRate"),
        sell: document.getElementById("btnSellPlank")
    },
    stone: {
        value: document.getElementById("spnStoneValue"),
        upgrade: document.getElementById("btnUpgStone"),
        level: document.getElementById("spnStoneUpgLevel"),
        rate: document.getElementById("spnStoneRate"),
        sell: document.getElementById("btnSellStone")
    },
    blocks: {
        value: document.getElementById("spnBlocksValue"),
        upgrade: document.getElementById("btnUpgBlocks"),
        level: document.getElementById("spnBlocksUpgLevel"),
        rate: document.getElementById("spnBlocksRate"),
        sell: document.getElementById("btnSellBlocks")
    },
    buttonSave: document.getElementById("btnSaveGame"),
    buttonLoad: document.getElementById("btnLoadGame"),
    buttonExport: document.getElementById("btnExportGame"),
    buttonImport: document.getElementById("btnImportGame"),
}

function updateUI() {
    ui.money.textContent = game.money;

    ui.wood.value.textContent = game.wood;
    if (game.woodUpgLevel === 0) {
        ui.plank.upgrade.textContent = `Построить лесоповал,\r\n ${baseprice.wood} монет`;
    } else {
        ui.wood.upgrade.textContent = `Улучшить лесоповал,\r\n ${UpgradeCost("wood")} монет`;
    }
    ui.wood.rate.textContent = (game.woodGrowth * game.woodUpgLevel) - (game.plankUpgLevel * production.plank);
    ui.wood.level.textContent = game.woodUpgLevel;

    ui.plank.value.textContent = game.plank;
    if (game.plankUpgLevel === 0) {
        ui.plank.upgrade.textContent = `Построить лесопилку,\r\n ${baseprice.plank} монет`;
    } else {
        ui.plank.upgrade.textContent = `Улучшить лесопилку,\r\n ${UpgradeCost("plank")} монет`;
    }
    ui.plank.rate.textContent = game.plankGrowth * game.plankUpgLevel;
    ui.plank.level.textContent = game.plankUpgLevel;

    ui.stone.value.textContent = game.stone;
    if (game.stoneUpgLevel === 0) {
        ui.stone.upgrade.textContent = `Построить каменоломню,\r\n ${baseprice.stone} монет`;
    } else {
        ui.stone.upgrade.textContent = `Улучшить каменоломню,\r\n ${UpgradeCost("stone")} монет`;
    }
    ui.stone.rate.textContent = game.stoneGrowth * game.stoneUpgLevel - (game.blocksUpgLevel * production.blocks);
    ui.stone.level.textContent = game.stoneUpgLevel;

    ui.blocks.value.textContent = game.blocks;
    if (game.blocksUpgLevel === 0) {
        ui.blocks.upgrade.textContent = `Построить мастерскую,\r\n ${baseprice.blocks} монет`;
    } else {
        ui.blocks.upgrade.textContent = `Улучшить мастерскую,\r\n ${UpgradeCost("blocks")} монет`;
    }
    ui.blocks.rate.textContent = game.blocksGrowth * game.blocksUpgLevel;
    ui.blocks.level.textContent = game.blocksUpgLevel;
    // if (showExport===1){
    //   document.getElementById("divLblExport").style.display = "block";
    // } else {
    //   document.getElementById("divLblExport").style.display = "none";
    // }
}

ui.chop.addEventListener("click", function () {
    game.wood += 1
    updateUI()
})

ui.wood.upgrade.addEventListener("click", function () {
    if (game.woodUpgLevel == 0) {
        BuildItem("wood");
        updateUI();
    } else {
        UpgradeItem("wood");
        updateUI();
    }

})

ui.wood.sell.addEventListener("click", function () {
    sellItems("wood")
    updateUI()
})

ui.plank.upgrade.addEventListener("click", function () {
    if (game.plankUpgLevel == 0) {
        BuildItem("plank");
        updateUI();
    } else {
        UpgradeItem("plank");
        updateUI();
    }

})

ui.plank.sell.addEventListener("click", function () {
    sellItems("plank")
    updateUI()
})

ui.stone.upgrade.addEventListener("click", function () {
    if (game.stoneUpgLevel == 0) {
        BuildItem("stone");
        updateUI();
    } else {
        UpgradeItem("stone");
        updateUI();
    }

})

ui.stone.sell.addEventListener("click", function () {
    sellItems("stone")
    updateUI()
})

ui.blocks.upgrade.addEventListener("click", function () {
    if (game.blocksUpgLevel == 0) {
        BuildItem("blocks");
        updateUI();
    } else {
        UpgradeItem("blocks");
        updateUI();
    }

})

ui.blocks.sell.addEventListener("click", function () {
    sellItems("blocks")
    updateUI()
})

ui.buttonSave.addEventListener("click", function () {
    localStorage.setItem('gameTutorial', JSON.stringify(game));
    Swal.fire({
        title: "Игра сохранена!",
        text: "Ваша игра сохранена в браузере",
        icon: "success"
      });
})

ui.buttonLoad.addEventListener("click", function () {
    gameTemp = JSON.parse(localStorage.getItem('gameTutorial'));
    for (var propertyName in gameTemp) { game[propertyName] = gameTemp[propertyName]; }
    updateUI();
    Swal.fire({
        title: "Игра загружена!",
        text: "С возвращением!",
        icon: "success"
      });
})

ui.buttonExport.addEventListener("click", function () {
    Swal.fire({
        title: 'Ваша строка сохранение',
        text: btoa(JSON.stringify(game)),
        confirmButtonText: 'OK'
    });
    updateUI();
})
ui.buttonImport.addEventListener("click", function () {
    Swal.fire({
        input: "text",
        inputLabel: "Импорт сохранения",
        inputPlaceholder: "Вставьте сюда строку сохранения",
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            gameTemp = JSON.parse(atob(result.value));
            for (let propertyName in gameTemp) { game[propertyName] = gameTemp[propertyName]; }
            updateUI();
        }
    })
})

