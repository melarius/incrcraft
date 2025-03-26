const ui = {
    money: document.getElementById("spnMoneyValue"),
    chop: document.getElementById("btnChopTrees"),
    sellall: document.getElementById("btnSellAll"),
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
    copperingot: {
        value: document.getElementById("spnCopperIngotValue"),
        upgrade_btn: document.getElementById("btnUpgCopperIngot"),
        upgrade: document.getElementById("spnCopperIngotUpg"),
        level: document.getElementById("spnCopperIngotUpgLevel"),
        rate: document.getElementById("spnCopperIngotRate"),
        sell: document.getElementById("btnSellCopperIngot")
    },
    tiningot: {
        value: document.getElementById("spnTinIngotValue"),
        upgrade_btn: document.getElementById("btnUpgTinIngot"),
        upgrade: document.getElementById("spnTinIngotUpg"),
        level: document.getElementById("spnTinIngotUpgLevel"),
        rate: document.getElementById("spnTinIngotRate"),
        sell: document.getElementById("btnSellTinIngot")
    },
    ironingot: {
        value: document.getElementById("spnIronIngotValue"),
        upgrade_btn: document.getElementById("btnUpgIronIngot"),
        upgrade: document.getElementById("spnIronIngotUpg"),
        level: document.getElementById("spnIronIngotUpgLevel"),
        rate: document.getElementById("spnIronIngotRate"),
        sell: document.getElementById("btnSellIronIngot")
    },
    bronzeingot: {
        value: document.getElementById("spnBronzeIngotValue"),
        upgrade_btn: document.getElementById("btnUpgBronzeIngot"),
        upgrade: document.getElementById("spnBronzeIngotUpg"),
        level: document.getElementById("spnBronzeIngotUpgLevel"),
        rate: document.getElementById("spnBronzeIngotRate"),
        sell: document.getElementById("btnSellBronzeIngot")
    },
    tools: {
        value: document.getElementById("spnToolsValue"),
        upgrade_btn: document.getElementById("btnUpgTools"),
        upgrade: document.getElementById("spnToolsUpg"),
        level: document.getElementById("spnToolsUpgLevel"),
        rate: document.getElementById("spnToolsRate"),
        sell: document.getElementById("btnSellTools")
    },
    nails: {
        value: document.getElementById("spnNailsValue"),
        upgrade_btn: document.getElementById("btnUpgNails"),
        upgrade: document.getElementById("spnNailsUpg"),
        level: document.getElementById("spnNailsUpgLevel"),
        rate: document.getElementById("spnNailsRate"),
        sell: document.getElementById("btnSellNails")
    },
    house: {
        value: document.getElementById("spnHouseValue"),
        upgrade_btn: document.getElementById("btnBuildHouse"),
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
    ui.wood.rate.textContent = (game.woodGrowth * game.woodUpgLevel) - (game.plankUpgLevel * production.plank) - (game.toolsUpgLevel * production.tools.wood);
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
    ui.stone.rate.textContent = (game.stoneGrowth * game.stoneUpgLevel) - (game.blocksUpgLevel * production.blocks);
    ui.stone.level.textContent = game.stoneUpgLevel;

    ui.copperore.value.textContent = game.copperore;
    if (game.copperoreUpgLevel === 0) {
        ui.copperore.upgrade.textContent = baseprice.copperore;
    } else {
        ui.copperore.upgrade.textContent = UpgradeCost("copperore");
    }
    ui.copperore.rate.textContent = (game.copperoreGrowth * game.copperoreUpgLevel) - (game.copperingotUpgLevel * production.copperingot);
    ui.copperore.level.textContent = game.copperoreUpgLevel;

    ui.tinore.value.textContent = game.tinore;
    if (game.tinoreUpgLevel === 0) {
        ui.tinore.upgrade.textContent = baseprice.tinore;
    } else {
        ui.tinore.upgrade.textContent = UpgradeCost("tinore");
    }
    ui.tinore.rate.textContent = (game.tinoreGrowth * game.tinoreUpgLevel) - (game.tiningotUpgLevel * production.tiningot);
    ui.tinore.level.textContent = game.tinoreUpgLevel;

    ui.ironore.value.textContent = game.ironore;
    if (game.ironoreUpgLevel === 0) {
        ui.ironore.upgrade.textContent = baseprice.ironore;
    } else {
        ui.ironore.upgrade.textContent = UpgradeCost("ironore");
    }
    ui.ironore.rate.textContent = (game.ironoreGrowth * game.ironoreUpgLevel) - (game.ironingotUpgLevel * production.ironingot);
    ui.ironore.level.textContent = game.ironoreUpgLevel;

    ui.blocks.value.textContent = game.blocks;
    if (game.blocksUpgLevel === 0) {
        ui.blocks.upgrade.textContent = baseprice.blocks;
    } else {
        ui.blocks.upgrade.textContent = UpgradeCost("blocks");
    }
    ui.blocks.rate.textContent = game.blocksGrowth * game.blocksUpgLevel;
    ui.blocks.level.textContent = game.blocksUpgLevel;

    ui.copperingot.value.textContent = game.copperingot;
    if (game.copperingotUpgLevel === 0) {
        ui.copperingot.upgrade.textContent = baseprice.copperingot;
    } else {
        ui.copperingot.upgrade.textContent = UpgradeCost("copperingot");
    }
    ui.copperingot.rate.textContent = (game.copperingotGrowth * game.copperingotUpgLevel) - (game.bronzeingotUpgLevel * production.bronzeingot.copperingot);
    ui.copperingot.level.textContent = game.copperingotUpgLevel;

    ui.tiningot.value.textContent = game.tiningot;
    if (game.tiningotUpgLevel === 0) {
        ui.tiningot.upgrade.textContent = baseprice.tiningot;
    } else {
        ui.tiningot.upgrade.textContent = UpgradeCost("tiningot");
    }
    ui.tiningot.rate.textContent = (game.tiningotGrowth * game.tiningotUpgLevel) - (game.bronzeingotUpgLevel * production.bronzeingot.tiningot);
    ui.tiningot.level.textContent = game.tiningotUpgLevel;

    ui.ironingot.value.textContent = game.ironingot;
    if (game.ironingotUpgLevel === 0) {
        ui.ironingot.upgrade.textContent = baseprice.ironingot;
    } else {
        ui.ironingot.upgrade.textContent = UpgradeCost("ironingot");
    }
    ui.ironingot.rate.textContent = (game.ironingotGrowth * game.ironingotUpgLevel) - (game.toolsUpgLevel * production.tools.ironingot) - (game.nailsUpgLevel * production.nails);
    ui.ironingot.level.textContent = game.ironingotUpgLevel;

    ui.bronzeingot.value.textContent = game.bronzeingot;
    if (game.bronzeingotUpgLevel === 0) {
        ui.bronzeingot.upgrade.textContent = baseprice.bronzeingot;
    } else {
        ui.bronzeingot.upgrade.textContent = UpgradeCost("bronzeingot");
    }
    ui.bronzeingot.rate.textContent = game.bronzeingotGrowth * game.bronzeingotUpgLevel * 4;
    ui.bronzeingot.level.textContent = game.bronzeingotUpgLevel;

    ui.tools.value.textContent = game.tools;
    if (game.toolsUpgLevel === 0) {
        ui.tools.upgrade.textContent = baseprice.tools;
    } else {
        ui.tools.upgrade.textContent = UpgradeCost("tools");
    }
    ui.tools.rate.textContent = game.toolsGrowth * game.toolsUpgLevel;
    ui.tools.level.textContent = game.toolsUpgLevel;

    ui.nails.value.textContent = game.nails;
    if (game.nailsUpgLevel === 0) {
        ui.nails.upgrade.textContent = baseprice.nails;
    } else {
        ui.nails.upgrade.textContent = UpgradeCost("nails");
    }
    ui.nails.rate.textContent = game.nailsGrowth * game.nailsUpgLevel;
    ui.nails.level.textContent = game.nailsUpgLevel;
    
    ui.house.value.textContent = game.house
}