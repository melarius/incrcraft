const ui_upgrade_tab = {
    taxes: {
        upgrade_btn: document.getElementById("btnUpgTaxes"),
        upgrade: document.getElementById("spnTaxesUpg"),
        value: document.getElementById("spnTaxesValue"),
        upg_value: document.getElementById("spnTaxexUpgValue")
    },
}



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

    if (game.taxesUpgLevel === 0) {
        ui_upgrade_tab.taxes.upgrade.textContent = baseprice.taxupgrade.toLocaleString();
    } else {
        ui_upgrade_tab.taxes.upgrade.textContent = (baseprice.taxupgrade * game.taxesUpgLevel).toLocaleString();
    }
    if (game.taxesUpgLevel == 5){
        ui_upgrade_tab.taxes.upgrade_btn.disabled = true
    }
}