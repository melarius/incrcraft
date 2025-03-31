const ui_upgrade_tab = {
    taxes: {
        upgrade_btn: document.getElementById("btnUpgTaxes"),
        upgrade: document.getElementById("spnTaxesUpg"),
        value: document.getElementById("spnTaxesValue"),
        upg_value: document.getElementById("spnTaxesUpgValue")
    },
    taxesmod: {
        upgrade_btn: document.getElementById("btnUpgTaxesMod"),
        upgrade: document.getElementById("spnTaxesModUpg"),
        value: document.getElementById("spnTaxesModValue"),
        upg_value: document.getElementById("spnTaxesModUpgValue")
    },
}



ui_upgrade_tab.taxesmod.upgrade_btn.addEventListener("click", function () {
    if (game.taxesmodUpgLevel == 0) {
        if (game.money >= baseprice.taxmodupgrade){
            game.money -= baseprice.taxmodupgrade
            game.taxesGrowth +=1
            game.taxesmodUpgLevel += 1
            
        }
        updateUI();
    } else if (game.money >= baseprice.taxmodupgrade * game.taxesUpgLevel) {
        game.money = game.money - (baseprice.taxmodupgrade * game.taxesmodUpgLevel);
        game.taxesGrowth +=1
            game.taxesmodUpgLevel += 1
        updateUI()
    }
});

ui_upgrade_tab.taxes.upgrade_btn.addEventListener("click", function () {
    if (game.taxesUpgLevel == 0) {
        if (game.money >= baseprice.taxupgrade){
            game.money -= baseprice.taxupgrade
            game.taxesUpgLevel +=1
            document.getElementById("spnTaxesValue").style.display = "inline-block";
        }
        updateUI();
    } else if (game.money >= baseprice.taxupgrade * game.taxesUpgLevel) {
        game.money = game.money - (baseprice.taxupgrade * game.taxesUpgLevel);
        game.taxesUpgLevel +=1
        updateUI()
    }
});




function updateUI_upgrade(){
    ui_upgrade_tab.taxes.value.textContent = `(${game.taxes}/c)`
    ui_upgrade_tab.taxes.upg_value.textContent = game.taxesUpgLevel
    ui_upgrade_tab.taxesmod.upg_value.textContent = game.taxesmodUpgLevel

    if (game.taxesUpgLevel === 0) {
        ui_upgrade_tab.taxes.upgrade.textContent = baseprice.taxupgrade.toLocaleString();
    } else {
        ui_upgrade_tab.taxes.upgrade.textContent = (baseprice.taxupgrade * game.taxesUpgLevel).toLocaleString();
    }
    if (game.taxesUpgLevel == 5){
        ui_upgrade_tab.taxes.upgrade_btn.disabled = true
    }
}