

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
    copperore: 0,
    copperoreGrowth: 1,
    copperoreUpgLevel: 0,
    tinore: 0,
    tinoreGrowth: 1,
    tinoreUpgLevel: 0,
    ironore: 0,
    ironoreGrowth: 1,
    ironoreUpgLevel: 0,
}

const updrademulti = {
    wood: 1,
    plank: 11,
    stone: 31,
    blocks: 51,
    copperore: 51,
    tinore: 76,
    ironore: 101
}

const sell = {
    wood: 1,
    plank: 10,
    stone: 30,
    blocks: 50,
    copperore: 50,
    tinore: 75,
    ironore: 100
}

const baseprice = {
    wood: 10,
    plank: 100,
    stone: 300,
    blocks: 500,
    copperore: 500,
    tinore: 750,
    ironore: 1000
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
        game.copperore = game.copperore + game.copperoreGrowth * game.copperoreUpgLevel;
        game.tinore = game.tinore + game.tinoreGrowth * game.tinoreUpgLevel;
        game.ironore = game.ironore + game.ironoreGrowth * game.ironoreUpgLevel;


        if (game.wood + wood_prod_rate >= 0) {
            game.wood += (game.woodGrowth * game.woodUpgLevel) - (game.plankUpgLevel * production.plank);
            game.plank = game.plank + game.plankGrowth * game.plankUpgLevel;
        }

        if (game.stone + stone_prod_rate >= 0) {
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

function updateButtons() {
    for (let elem of document.getElementsByClassName('base_btn')) {
        if (elem.id.includes("Upg")) {
            if (UpgradeCost(elem.id.substring(6).toLowerCase()) > game.money) {
                elem.disabled = true;
            }
            else {
                elem.disabled = false;
            }
        }
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
        upgrade_btn: document.getElementById("btnUpgWood"),
        upgrade: document.getElementById("spnWoodUpg"),
        level: document.getElementById("spnWoodUpgLevel"),
        rate: document.getElementById("spnWoodRate"),
        sell: document.getElementById("btnSellWood")
    },
    stone: {
        value: document.getElementById("spnStoneValue"),
        upgrade_btn: document.getElementById("btnUpgStone"),
        upgrade: document.getElementById("spnStoneUpg"),
        level: document.getElementById("spnStoneUpgLevel"),
        rate: document.getElementById("spnStoneRate"),
        sell: document.getElementById("btnSellStone")
    },
    copperore: {
        value: document.getElementById("spnCopperOreValue"),
        upgrade_btn: document.getElementById("btnUpgCopperOre"),
        upgrade: document.getElementById("spnCopperOreUpg"),
        level: document.getElementById("spnCopperOreUpgLevel"),
        rate: document.getElementById("spnCopperOreRate"),
        sell: document.getElementById("btnSellCopperOre")
    },
    tinore: {
        value: document.getElementById("spnTinOreValue"),
        upgrade_btn: document.getElementById("btnUpgTinOre"),
        upgrade: document.getElementById("spnTinOreUpg"),
        level: document.getElementById("spnTinOreUpgLevel"),
        rate: document.getElementById("spnTinOreRate"),
        sell: document.getElementById("btnSellTinOre")
    },
    ironore: {
        value: document.getElementById("spnIronOreValue"),
        upgrade_btn: document.getElementById("btnUpgIronOre"),
        upgrade: document.getElementById("spnIronOreUpg"),
        level: document.getElementById("spnIronOreUpgLevel"),
        rate: document.getElementById("spnIronOreRate"),
        sell: document.getElementById("btnSellIronOre")
    },
    plank: {
        value: document.getElementById("spnPlankValue"),
        upgrade_btn: document.getElementById("btnUpgPlank"),
        upgrade: document.getElementById("spnPlankUpg"),
        level: document.getElementById("spnPlankUpgLevel"),
        rate: document.getElementById("spnPlankRate"),
        sell: document.getElementById("btnSellPlank")
    },
    
    blocks: {
        value: document.getElementById("spnBlocksValue"),
        upgrade_btn: document.getElementById("btnUpgBlocks"),
        upgrade: document.getElementById("spnBlocksUpg"),
        level: document.getElementById("spnBlocksUpgLevel"),
        rate: document.getElementById("spnBlocksRate"),
        sell: document.getElementById("btnSellBlocks")
    },
    menuselector: document.getElementById("menuselector"),
}

function updateUI() {
    ui.money.textContent = game.money;
    updateButtons()

    ui.wood.value.textContent = game.wood;
    if (game.woodUpgLevel === 0) {
        ui.plank.upgrade.textContent = baseprice.wood;
    } else {
        ui.wood.upgrade.textContent = UpgradeCost("wood");
    }
    ui.wood.rate.textContent = (game.woodGrowth * game.woodUpgLevel) - (game.plankUpgLevel * production.plank);
    ui.wood.level.textContent = game.woodUpgLevel;

    ui.plank.value.textContent = game.plank;
    if (game.plankUpgLevel === 0) {
        ui.plank.upgrade.textContent = baseprice.plank;
    } else {
        ui.plank.upgrade.textContent = UpgradeCost("plank");
    }
    ui.plank.rate.textContent = game.plankGrowth * game.plankUpgLevel;
    ui.plank.level.textContent = game.plankUpgLevel;

    ui.stone.value.textContent = game.stone;
    if (game.stoneUpgLevel === 0) {
        ui.stone.upgrade.textContent = baseprice.stone;
    } else {
        ui.stone.upgrade.textContent = UpgradeCost("stone");
    }
    ui.stone.rate.textContent = game.stoneGrowth * game.stoneUpgLevel - (game.blocksUpgLevel * production.blocks);
    ui.stone.level.textContent = game.stoneUpgLevel;

    ui.copperore.value.textContent = game.copperore;
    if (game.copperoreUpgLevel === 0) {
        ui.copperore.upgrade.textContent = baseprice.copperore;
    } else {
        ui.copperore.upgrade.textContent = UpgradeCost("copperore");
    }
    ui.copperore.rate.textContent = game.copperoreGrowth * game.copperoreUpgLevel - (game.blocksUpgLevel * production.blocks);
    ui.copperore.level.textContent = game.copperoreUpgLevel;

    ui.tinore.value.textContent = game.tinore;
    if (game.tinoreUpgLevel === 0) {
        ui.tinore.upgrade.textContent = baseprice.tinore;
    } else {
        ui.tinore.upgrade.textContent = UpgradeCost("tinore");
    }
    ui.tinore.rate.textContent = game.tinoreGrowth * game.tinoreUpgLevel - (game.blocksUpgLevel * production.blocks);
    ui.tinore.level.textContent = game.tinoreUpgLevel;

    ui.ironore.value.textContent = game.ironore;
    if (game.ironoreUpgLevel === 0) {
        ui.ironore.upgrade.textContent = baseprice.ironore;
    } else {
        ui.ironore.upgrade.textContent = UpgradeCost("ironore");
    }
    ui.ironore.rate.textContent = game.ironoreGrowth * game.ironoreUpgLevel - (game.blocksUpgLevel * production.blocks);
    ui.ironore.level.textContent = game.ironoreUpgLevel;

    ui.blocks.value.textContent = game.blocks;
    if (game.blocksUpgLevel === 0) {
        ui.blocks.upgrade.textContent = baseprice.blocks;
    } else {
        ui.blocks.upgrade.textContent = UpgradeCost("blocks");
    }
    ui.blocks.rate.textContent = game.blocksGrowth * game.blocksUpgLevel;
    ui.blocks.level.textContent = game.blocksUpgLevel;
    
}

ui.chop.addEventListener("click", function () {
    game.wood += 1
    updateUI()
})

ui.wood.upgrade_btn.addEventListener("click", function () {
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

ui.plank.upgrade_btn.addEventListener("click", function () {
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

ui.stone.upgrade_btn.addEventListener("click", function () {
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

ui.blocks.upgrade_btn.addEventListener("click", function () {
    if (game.blocksUpgLevel == 0) {
        BuildItem("blocks");
        updateUI();
    } else {
        UpgradeItem("blocks");
        updateUI();
    }

})

ui.copperore.upgrade_btn.addEventListener("click", function () {
    if (game.copperoreUpgLevel == 0) {
        BuildItem("copperore");
        updateUI();
    } else {
        UpgradeItem("copperore");
        updateUI();
    }

})

ui.copperore.sell.addEventListener("click", function () {
    sellItems("copperore")
    updateUI()
})

ui.tinore.upgrade_btn.addEventListener("click", function () {
    if (game.tinoreUpgLevel == 0) {
        BuildItem("tinore");
        updateUI();
    } else {
        UpgradeItem("tinore");
        updateUI();
    }

})

ui.tinore.sell.addEventListener("click", function () {
    sellItems("tinore")
    updateUI()
})

ui.ironore.upgrade_btn.addEventListener("click", function () {
    if (game.ironoreUpgLevel == 0) {
        BuildItem("ironore");
        updateUI();
    } else {
        UpgradeItem("ironore");
        updateUI();
    }

})

ui.ironore.sell.addEventListener("click", function () {
    sellItems("ironore")
    updateUI()
})

ui.blocks.sell.addEventListener("click", function () {
    sellItems("blocks")
    updateUI()
})

ui.menuselector.addEventListener("change", function (evt) {
    if (evt.target.value === "Save") {
        localStorage.setItem('gameTutorial', JSON.stringify(game));
        Swal.fire({
            title: "Игра сохранена!",
            text: "Ваша игра сохранена в браузере",
            icon: "success"
        });
    }
    if (evt.target.value === "Load") {
        gameTemp = JSON.parse(localStorage.getItem('gameTutorial'));
        for (var propertyName in gameTemp) { game[propertyName] = gameTemp[propertyName]; }
        updateUI();
        Swal.fire({
            title: "Игра загружена!",
            text: "С возвращением!",
            icon: "success"
        });
    }
    if (evt.target.value === "Export") {
        Swal.fire({
            title: 'Ваша строка сохранение',
            text: btoa(JSON.stringify(game)),
            confirmButtonText: 'OK'
        });
        updateUI();
    }
    if (evt.target.value === "Import") {
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
    }
    menuselector.value = "menu";
})

