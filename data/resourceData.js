Game.resourceCategoryData = (function () {

    var instance = {};

    instance.energy = {
        title: '能源',
        category: 'energy'
    };

    instance.earth = {
        class: 'collapseEarth',
        title: '地球资源',
        category: 'earth'
    };

    instance.innerSol = {
        class: 'collapseInnerPlanetary',
        title: '内行星资源',
        category: 'innerSol'
    };

    instance.outerSol = {
        class: 'collapseOuterPlanetary',
        title: '外行星资源',
        category: 'outerSol'
    };

    return instance;

}());

Game.resourceData = (function () {

    var instance = {};

    instance.energy = {
        name: '能源',
        desc: '能源由蒸汽机、太阳能等发电装置产生，后期甚至可以使用聚变和核能。初始最大存储量为100,000，但可以解锁电池来增加容量。',
        icon: 'energyIcon',
        category: 'energy',
        baseCapacity: 50000,
        unlocked: false
    };

    instance.plasma = {
        name: '等离子体',
        desc: '等离子体是物质的第四态，被第四级机器和大型太空结构用作极端能源。初始最大存储量为100,000，但可以解锁和购买等离子体存储单元来增加容量。',
        icon: 'plasmaIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false
    };

    instance.uranium = {
        name: '铀',
        desc: '铀是重要的能源资源，用于核裂变发电站等设施。它是游戏中最基础的资源之一，用于存储升级、机械制造和太空探索。',
        icon: 'uraniumIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false
    };

    instance.lava = {
        name: '熔岩',
        desc: '难以处理且仅存在于火山中，熔岩是最难获取的资源之一。',
        icon: 'lavaIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false
    };

    instance.oil = {
        name: '石油',
        desc: '石油从地下泵出，用于建造二级资源采集器。',
        icon: 'oilIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: false
    };

    instance.metal = {
        name: '金属',
        desc: '金属是最基础的资源之一，广泛用于存储升级、机械制造和太空探索。',
        icon: 'metalIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true
    };

    instance.gem = {
        name: '宝石',
        desc: '宝石是基础资源之一，用于高级机械和强力工具组件。在游戏中后期更加有用。',
        icon: 'gemIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true
    };

    instance.charcoal = {
        name: '木炭',
        desc: '木炭是二级资源，被引擎用来为公司发电。1个木炭由燃烧木材制成。',
        icon: 'charcoalIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: false
    };

    instance.wood = {
        name: '木材',
        desc: '木材是基础资源之一，在游戏早期更多用于工具和建筑。',
        icon: 'woodIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true
    };

    instance.silicon = {
        name: '硅',
        desc: '硅用于三级自动采矿系统，对建造第一个奇迹非常有用。虽然是高级资源，但主要在地球上通过加热沙子获得。',
        icon: 'siliconIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: false
    };

    instance.lunarite = {
        name: '月岩',
        desc: '月岩在月球上发现，是地球上找不到的稀有资源。它比普通金属强得多，但也更难获取。',
        icon: 'lunariteIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.methane = {
        name: '甲烷',
        desc: '甲烷是金星上大量存在的气体，可以比固体燃料更有效地为公司提供动力。',
        icon: 'methaneIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.titanium = {
        name: '钛',
        desc: '钛主要在火星上发现的金属，用于建造强力机器和甲烷发电站。',
        icon: 'titaniumIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.gold = {
        name: '黄金',
        desc: '黄金是在小行星内部发现的金属，用于建造一些奇迹和复杂机械。',
        icon: 'goldIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.silver = {
        name: '白银',
        desc: '白银是另一种最常见的金属，主要在小行星带中发现。',
        icon: 'silverIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.hydrogen = {
        name: '氢',
        desc: '氢在木星和土星等气态巨行星上极其常见。',
        icon: 'hydrogenIcon',
        category: 'outerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.helium = {
        name: '氦',
        desc: '氦是木星和土星等气态巨行星上第二常见的元素。',
        icon: 'heliumIcon',
        category: 'outerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.ice = {
        name: '冰',
        desc: '冰虽然可以在地球上收集，但远不如驾驶装满冰的飞船往返冥王星有利可图。主要用于第四级机器所需的超冷技术。',
        icon: 'iceIcon',
        category: 'outerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.meteorite = {
        name: '陨石',
        desc: '制造陨石只能使用比地球技术产生的更纯净的能量形式。因此，等离子体是制造这种强力资源所必需的。',
        icon: 'meteoriteIcon',
        category: 'outerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.science = {
        name: '科学点',
        desc: '科学用于研究新技术以推进游戏进度。',
        icon: 'scienceIcon',
        baseCapacity: 1000000,
        unlocked: false
    };

    return instance;
}());

Game.storageData = (function(){

    var instance = {};

    var baseUpgradeData = {
        name: '存储升级：',
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        resource: undefined,
        displayNeedsUpdate: true,

        buttonText: '升级存储',

        apply: function (self) {
            if (typeof self.resource === 'undefined') {
                return;
            }
            var res = Game.resources.getResourceData(self.resource);
            res.capacity *= 2;
            res.displayNeedsUpdate = true;
            self.displayNeedsUpdate = true;
        },
    };

    instance.storageUpgradePlasma = $.extend({}, baseUpgradeData, {
        desc: '将你的等离子体存储升级到 ',
        resource: 'plasma',
        cost: { 'plasma': 50 }
    });

    instance.storageUpgradeUranium = $.extend({}, baseUpgradeData, {
        desc: '将你的铀存储升级到 ',
        resource: 'uranium',
        cost: { 'uranium': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeLava = $.extend({}, baseUpgradeData, {
        desc: '将你的熔岩存储升级到 ',
        resource: 'lava',
        cost: { 'lava': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeOil = $.extend({}, baseUpgradeData, {
        desc: '将你的石油存储升级到 ',
        resource: 'oil',
        cost: { 'oil': 50, 'metal': 20 }
    });

    instance.storageUpgradeMetal = $.extend({}, baseUpgradeData, {
        desc: '将你的金属存储升级到 ',
        resource: 'metal',
        cost: { 'metal': 50 }
    });

    instance.storageUpgradeGem = $.extend({}, baseUpgradeData, {
        desc: '将你的宝石存储升级到 ',
        resource: 'gem',
        cost: { 'gem': 50, 'metal': 20 }
    });

    instance.storageUpgradeCharcoal = $.extend({}, baseUpgradeData, {
        desc: '将你的木炭存储升级到 ',
        resource: 'charcoal',
        cost: { 'charcoal': 50, 'metal': 20 }
    });

    instance.storageUpgradeWood = $.extend({}, baseUpgradeData, {
        desc: '将你的木材存储升级到 ',
        resource: 'wood',
        cost: { 'wood': 50, 'metal': 20 }
    });

    instance.storageUpgradeSilicon = $.extend({}, baseUpgradeData, {
        desc: '将你的硅存储升级到 ',
        resource: 'silicon',
        cost: { 'silicon': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeLunarite = $.extend({}, baseUpgradeData, {
        desc: '将你的月岩存储升级到 ',
        resource: 'lunarite',
        cost: { 'lunarite': 50, 'metal': 400 }
    });

    instance.storageUpgradeMethane = $.extend({}, baseUpgradeData, {
        desc: '将你的甲烷存储升级到 ',
        resource: 'methane',
        cost: { 'methane': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeTitanium = $.extend({}, baseUpgradeData, {
        desc: '将你的钛存储升级到 ',
        resource: 'titanium',
        cost: { 'titanium': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeGold = $.extend({}, baseUpgradeData, {
        desc: '将你的黄金存储升级到 ',
        resource: 'gold',
        cost: { 'gold': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeSilver = $.extend({}, baseUpgradeData, {
        desc: '将你的白银存储升级到 ',
        resource: 'silver',
        cost: { 'silver': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeHydrogen = $.extend({}, baseUpgradeData, {
        desc: '将你的氢存储升级到 ',
        resource: 'hydrogen',
        cost: { 'hydrogen': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeHelium = $.extend({}, baseUpgradeData, {
        desc: '将你的氦存储升级到 ',
        resource: 'helium',
        cost: { 'helium': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeIce = $.extend({}, baseUpgradeData, {
        desc: '将你的冰存储升级到 ',
        resource: 'ice',
        cost: { 'ice': 50, 'lunarite': 20 }
    });

    instance.storageUpgradeMeteorite = $.extend({}, baseUpgradeData, {
        desc: '将你的陨石存储升级到 ',
        resource: 'meteorite',
        cost: { 'meteorite': 50, 'lunarite': 4 }
    });

    return instance;
}());
