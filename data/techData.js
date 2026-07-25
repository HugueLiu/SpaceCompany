Game.techData = (function () {

    var instance = {};

    var techBase = {
        id: null,
        htmlId: null,
        htmlIdCost: null,
        htmlIdTitle: null,
        htmlIdButton: null,
        displayNeedsUpdate: true,

        name: '研究',
        desc: '购买以解锁某些功能。',
        notifyTitle: null,
        notifyText: null,
        buttonText: '解锁',

        current: 0,
        maxLevel: 1,
        unlocked: false,

        newResources: [],
        newTechs: [],
        newTabs: [],
        tabAlerts: [],

        setId: function(id) {
            this.id = id;
            this.htmlId = id;
            this.htmlIdCost = id + 'Cost';
            this.htmlIdTitle = id + 'Title';
            this.htmlIdButton = id + 'Button';
        },

        getBodyElement: function() {
            return $('#' + this.htmlId);
        },
        getTitleElement: function() {
            return $('#' + this.htmlIdTitle);
        },
        getCostElement: function() {
            return $('#' + this.htmlIdCost);
        },
        getButtonElement: function() {
            return $('#' + this.htmlIdButton);
        },

        apply: function(self) {
            for (var i = 0; i < this.newResources.length; i++) {
                if (resourcesUnlocked.indexOf(this.newResources[i]) === INDEX_NONE) {
                    resourcesUnlocked.push(this.newResources[i]);
                }
            }
            for (i = 0; i < this.newTabs.length; i++) {
                if (tabsUnlocked.indexOf(this.newTabs[i]) === INDEX_NONE) {
                    tabsUnlocked.push(this.newTabs[i]);
                }
            }
            for (i = 0; i < this.newTechs.length; i++) {
                Game.tech.unlockTech(this.newTechs[i]);
            }
            if (this.onApply !== null) {
                this.onApply();
            }
        },
        onApply: null
    };

    // 研究
    instance.unlockStorage = $.extend({}, techBase, {
        name: '存储升级',
        desc: '这将允许你建造存储升级来增加资源的最大存储量。',
        buttonText: '解锁存储',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 5 },
        newTechs: ['unlockOil'],
        tabAlerts: ['resources']
    });
    
    instance.unlockBasicEnergy = $.extend({}, techBase, {
        name: '基础能源生产',
        desc: '你将能够使用用木材在熔炉中制成的木炭的蒸汽机来发电。',
        buttonText: '解锁基础能源生产',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 20 },
        newResources: ['energyNav', 'charcoalNav'],
        newTechs: ['unlockSolar', 'unlockMachines', 'upgradeEngineTech'],
        tabAlerts: ['resources']
    });

    instance.unlockOil = $.extend({}, techBase, {
        name: '石油加工',
        desc: '石油用于为更高级的机器提供燃料以收集资源，也用于比基础方式产生更多电力。解锁石油加工允许你从地下提取它。',
        buttonText: '解锁石油',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 30 },
        newResources: ['oilNav'],
        tabAlerts: ['resources']
    });

    instance.unlockSolar = $.extend({}, techBase, {
        name: '太阳能板',
        desc: '太阳能板无需燃料即可产生能源，但速度比其他能源生产方式慢。',
        buttonText: '解锁太阳能板',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 50 },
        newTechs: ['upgradeSolarTech'],
        tabAlerts: ['resources']
    });

    instance.unlockMachines = $.extend({}, techBase, {
        name: '资源机器',
        desc: '资源机器比简单方法生产更多资源，但需要持续的电力供应才能工作。',
        buttonText: '解锁资源机器',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 100 },
        newTechs: ['unlockSolarSystem', 'upgradeResourceTech', 'unlockDestruction'],
        tabAlerts: ['resources']
    });

    instance.unlockDestruction = $.extend({}, techBase, {
        name: '机器销毁',
        desc: '这允许你销毁已经创建的机器。当有更高效的资源获取方式，或者你没有足够的能源支持机器时，这会很有用。',
        buttonText: '解锁销毁',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 500 },
        tabAlerts: ['resources']
    });

    instance.unlockSolarSystem = $.extend({}, techBase, {
        name: '太空',
        desc: '解锁太空旅行可以发射火箭，并开辟一个全新的研究领域。',
        buttonText: '解锁太空旅行',
        notifyTitle: '新标签页！',
        notifyText: '你已解锁太阳系标签页！',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 500 },
        newTabs: ['solarSystemTab'],
        newTechs: ['unlockLabT2', 'unlockRocketFuelT2'],
        tabAlerts: ['solarSystem']
    });

    instance.unlockRocketFuelT2 = $.extend({}, techBase, {
        name: '氧化',
        desc: '氧化是制造火箭燃料的更高效工艺。',
        buttonText: '解锁氧化',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 450000 },
        newResources: ['rocketFuelT2'],
        newTechs: ['unlockRocketFuelT3'],
        tabAlerts: ['solarSystem']
    });

    instance.unlockRocketFuelT3 = $.extend({}, techBase, {
        name: '联氨',
        desc: '联氨是由甲烷产生的化合物，可以提高联氨催化剂机器中火箭燃料的生产速度。',
        buttonText: '解锁联氨',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 3200000 },
        newResources: ['rocketFuelT3'],
        tabAlerts: ['solarSystem']
    });

    instance.unlockLabT2 = $.extend({}, techBase, {
        name: 'T2科学',
        desc: '研究这个将允许你大幅提高科学产量。',
        buttonText: '解锁T2科学',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 500 },
        newTechs: ['unlockLabT3']
    });

    instance.unlockLabT3 = $.extend({}, techBase, {
        name: 'T3科学',
        desc: '研究这个将允许你使用第三级科学生产，比前几级产生更多的科学。',
        buttonText: '解锁T3科学',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 3000 },
        newTechs: ['unlockLabT4']
    });

    instance.unlockLabT4 = $.extend({}, techBase, {
        name: 'T4科学',
        desc: '研究这个将允许你使用第四级科学生产，产生比上一级多10倍的科学。',
        buttonText: '解锁T4科学',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 50000000 }
    });

    instance.unlockBatteries = $.extend({}, techBase, {
        name: 'T1电池',
        desc: 'T1电池提高你可以一次性存储的能量量。',
        buttonText: '解锁电池',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 15000 },
        newResources: ['batteries', 'energyStorageBox'],
        newTechs: ['unlockBatteriesT2'],
        tabAlerts: ['resources']
    });

    instance.unlockBatteriesT2 = $.extend({}, techBase, {
        name: 'T2电池',
        desc: 'T2电池提高你可以一次性存储的能量量。',
        buttonText: '解锁T2电池',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 300000 },
        newResources: ['batteriesT2'],
        newTechs: ['unlockBatteriesT3'],
        tabAlerts: ['resources']
    });

    instance.unlockBatteriesT3 = $.extend({}, techBase, {
        name: 'T3电池',
        desc: 'T3电池提高你可以一次性存储的能量量。',
        buttonText: '解锁T3电池',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 3000000 },
        newResources: ['batteriesT3'],
        newTechs: ['unlockBatteriesT4'],
        tabAlerts: ['resources']
    });

    instance.unlockBatteriesT4 = $.extend({}, techBase, {
        name: 'T4电池',
        desc: 'T4电池提高你可以一次性存储的能量量。',
        buttonText: '解锁T4电池',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 30000000 },
        newResources: ['batteriesT4'],
        tabAlerts: ['resources']
    });

    instance.unlockPlasma = $.extend({}, techBase, {
        name: '等离子体T1技术',
        desc: '这允许你将能源和氢转化为等离子体。',
        buttonText: '解锁等离子体',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 40000 },
        newResources: ['plasmaNav'],
        newTechs: ['unlockPlasmaTier2'],
        tabAlerts: ['resources'],
        onApply: function() {
            if (noBorder.indexOf('energyNav') === INDEX_NONE) {
                noBorder.push('energyNav');
            }
        }
    });

    instance.unlockPlasmaTier2 = $.extend({}, techBase, {
        name: '等离子体T2技术',
        desc: '这项研究解锁第二级等离子体生产——等离子坑。',
        buttonText: '解锁等离子体T2',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 60000 },
        newResources: ['plasmaTier2'],
        tabAlerts: ['resources']
    });

    instance.unlockPSU = $.extend({}, techBase, {
        name: '等离子体存储单元',
        desc: '等离子体存储单元增加你可以一次性存储的等离子体上限。',
        buttonText: '解锁PSU',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 9500000 },
        newResources: ['plasmaStorageUnits', 'plasmaStorageBox'],
        newTechs: ['unlockPSUT2'],
        tabAlerts: ['resources']
    });

    instance.unlockPSUT2 = $.extend({}, techBase, {
        name: 'T2等离子体存储单元',
        desc: 'T2等离子体存储单元更高效地存储等离子体，但体积更大，需要更多资源来制造。',
        buttonText: '解锁T2 PSU',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 37000000 },
        newResources: ['plasmaStorageUnitsT2'],
        tabAlerts: ['resources']
    });

    instance.unlockEmc = $.extend({}, techBase, {
        name: '质能转换',
        desc: '这项能源技术不仅让你创造现有资源，还允许你制造新的、只能通过这种方式创造的元素，如陨石。',
        buttonText: '解锁EMC',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 60000 },
        newResources: ['emcPage'],
        newTechs: ['unlockMeteorite'],
        tabAlerts: ['solCenter']
    });

    instance.unlockMeteorite = $.extend({}, techBase, {
        name: '陨石',
        desc: '陨石是银河系中最稀有的资源之一，因为它是人造的。柯伊伯带和其他太阳系中类似小行星带中曾经存在的所有陨石都已被开采殆尽。现在唯一的方法是用能源在机器中制造。',
        buttonText: '解锁陨石',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 100000 },
        newResources: ['meteoriteNav', 'meteoriteEMC'],
        newTechs: ['unlockMeteoriteTier1'],
        tabAlerts: ['resources', 'wonder']
    });

    instance.unlockMeteoriteTier1 = $.extend({}, techBase, {
        name: '陨石T1',
        desc: '研究自动收集陨石的方法，这样你在不在的时候也不用担心错过。',
        buttonText: '解锁陨石T1',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 75000 },
        newResources: ['meteoriteTier1'],
        newTechs: ['unlockMeteoriteTier2'],
        tabAlerts: ['resources']
    });

    instance.unlockMeteoriteTier2 = $.extend({}, techBase, {
        name: '陨石T2',
        desc: '研究比人工制造陨石更高效的方法。',
        buttonText: '解锁陨石T2',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 100000 },
        newResources: ['meteoriteTier2'],
        tabAlerts: ['resources']
    });

    instance.unlockDyson = $.extend({}, techBase, {
        name: '戴森环',
        desc: '戴森环通过围绕太阳部署太阳能站来产生大量能源。',
        buttonText: '解锁戴森环',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 100000 },
        newResources: ['dysonPage'],
        newTechs: ['unlockDysonSphere'],
        tabAlerts: ['solCenter']
    });

    instance.unlockDysonSphere = $.extend({}, techBase, {
        name: '戴森群与球体',
        desc: '戴森群用太阳能站环包围太阳，而球体则完全包围它，使你能够获取足够的能源进行星际旅行。',
        buttonText: '解锁戴森群/球体',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 500000 },
        newResources: ['dysonSphere'],
        tabAlerts: ['solCenter']
    });

    // 升级

    instance.upgradeResourceTech = $.extend({}, techBase, {
        name: '升级资源技术',
        desc: '让你的资源机器生产比以前更多的资源。此升级使它们每单位能源的产量翻倍。',
        buttonText: '升级资源技术',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 300 },
        tabAlerts: ['resources'],
        onApply: function() {
            pumpjackOutput *= 2;
            heavyDrillOutput *= 2;
            advancedDrillOutput *= 2;
            furnaceWoodInput *= 2;
            furnaceOutput *= 2;
            laserCutterOutput *= 2;
        }
    });

    instance.upgradeEngineTech = $.extend({}, techBase, {
        name: '升级引擎技术',
        desc: '升级引擎技术将使木炭引擎每秒产生4能源而不是2。',
        buttonText: '升级木炭引擎',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 1000 },
        tabAlerts: ['resources'],
        onApply: function() {
            charcoalEngineOutput = 4;
        }
    });

    instance.upgradeSolarTech = $.extend({}, techBase, {
        name: '升级太阳能技术',
        desc: '升级太阳能技术将使太阳能板每秒产生3能源而不是1.5。',
        buttonText: '升级太阳能板',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: { 'science': 5000 },
        newTechs: ['unlockBatteries'],
        tabAlerts: ['resources'],
        onApply: function() {
            solarPanelOutput = 3;
        }
    });

    instance.efficiencyResearch = $.extend({}, techBase, {
        name: '资源效率',
        desc: '资源效率每购买一次增加资源收入1%/秒。',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: -1,
        cost: { 'science': 100000 }
    });

    instance.scienceEfficiencyResearch = $.extend({}, techBase, {
        name: '科学效率',
        desc: '科学效率每购买一次增加科学产量2%。',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: -1,
        cost: { 'science': 10000000 }
    });

    instance.energyEfficiencyResearch = $.extend({}, techBase, {
        name: '能源效率',
        desc: '能源效率每购买一次减少所有机器的能源消耗1%/秒。',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: 25,
        cost: { 'science': 10000000 }
    });

    instance.batteryEfficiencyResearch = $.extend({}, techBase, {
        name: '电池效率',
        desc: '电池效率每次升级将电池的存储能力提高1%。',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: 200,
        cost: { 'science': 100000000 }
    });

    return instance;
}());
