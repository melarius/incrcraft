let game = {
    money: 0,
    population: 0,
    taxes: 0,
    taxesUpgLevel: 0,
    taxesmodUpgLevel:0,
    taxesGrowth: 0,
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
    wall:0,
    castle:0,

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
    nails: 1000,
    taxupgrade: 10000,
    taxmodupgrade: 10000
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