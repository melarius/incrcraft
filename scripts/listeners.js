ui.sellall.addEventListener("click", function () {
    for (let [key, value] of Object.entries(sell)){
        game.money += game[key] * value
        game[key] = 0
    }
    updateUI()
})

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

ui.blocks.sell.addEventListener("click", function () {
    sellItems("blocks")
    updateUI()
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

ui.copperingot.upgrade_btn.addEventListener("click", function () {
    if (game.copperingotUpgLevel == 0) {
        BuildItem("copperingot");
        updateUI();
    } else {
        UpgradeItem("copperingot");
        updateUI();
    }

})

ui.copperingot.sell.addEventListener("click", function () {
    sellItems("copperingot")
    updateUI()
})

ui.tiningot.upgrade_btn.addEventListener("click", function () {
    if (game.tiningotUpgLevel == 0) {
        BuildItem("tiningot");
        updateUI();
    } else {
        UpgradeItem("tiningot");
        updateUI();
    }

})

ui.tiningot.sell.addEventListener("click", function () {
    sellItems("tiningot")
    updateUI()
})

ui.ironingot.upgrade_btn.addEventListener("click", function () {
    if (game.ironingotUpgLevel == 0) {
        BuildItem("ironingot");
        updateUI();
    } else {
        UpgradeItem("ironingot");
        updateUI();
    }

})

ui.ironingot.sell.addEventListener("click", function () {
    sellItems("ironingot")
    updateUI()
})

ui.bronzeingot.upgrade_btn.addEventListener("click", function () {
    if (game.bronzeingotUpgLevel == 0) {
        BuildItem("bronzeingot");
        updateUI();
    } else {
        UpgradeItem("bronzeingot");
        updateUI();
    }

})

ui.bronzeingot.sell.addEventListener("click", function () {
    sellItems("bronzeingot")
    updateUI()
})

ui.tools.upgrade_btn.addEventListener("click", function () {
    if (game.toolsUpgLevel == 0) {
        BuildItem("tools");
        updateUI();
    } else {
        UpgradeItem("tools");
        updateUI();
    }

})

ui.tools.sell.addEventListener("click", function () {
    sellItems("tools")
    updateUI()
})

ui.nails.upgrade_btn.addEventListener("click", function () {
    if (game.nailsUpgLevel == 0) {
        BuildItem("nails");
        updateUI();
    } else {
        UpgradeItem("nails");
        updateUI();
    }

})

ui.nails.sell.addEventListener("click", function () {
    sellItems("nails")
    updateUI()
})

ui.house.upgrade_btn.addEventListener("click", function (){
    Construct({"wood":10}, "house")
    updateUI()
})

ui.sawmill.upgrade_btn.addEventListener("click", function (){
    Construct({"wood":50}, "sawmill")
    updateUI()
})

ui.quarry.upgrade_btn.addEventListener("click", function (){
    Construct({"wood":100, "plank":50}, "quarry")
    updateUI()
})

ui.stonemason.upgrade_btn.addEventListener("click", function (){
    Construct({"wood":100, "stone":50}, "stonemason")
    updateUI()
})

ui.coppermine.upgrade_btn.addEventListener("click", function (){
    Construct({"plank":50}, "coppermine")
    updateUI()
})

ui.smelter.upgrade_btn.addEventListener("click", function (){
    if (game.smelter == 0){
        Construct({"stone":100, "blocks":50, "plank":100}, "smelter")
    } else {
        Construct({"ironingot":50, "blocks":100, "plank":200}, "smelter")
    }
    
    updateUI()
})

ui.tinmine.upgrade_btn.addEventListener("click", function (){
    Construct({"copperingot":50}, "tinmine")
    updateUI()
})

ui.ironmine.upgrade_btn.addEventListener("click", function (){
    Construct({"copperingot":50,"tiningot":50}, "ironmine")
    updateUI()
})

ui.blacksmith.upgrade_btn.addEventListener("click", function (){
    Construct({"plank":50,"bronzeingot":50, "ironingot":50}, "blacksmith")
    updateUI()
})

ui.wall.upgrade_btn.addEventListener("click", function (){
    Construct({"blocks":50}, "wall")
    updateUI()
})

ui.castle.upgrade_btn.addEventListener("click", function (){
    Construct({"nails":20, "tools":50, "blocks":100}, "castle")
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
