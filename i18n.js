Game.i18n = (function() {

    var instance = {
        currentLanguage: 'en',
        strings: {},
        fallbackStrings: {},
        locales: {},
        dataReady: false
    };

    instance.register = function(lang, strings) {
        this.locales[lang] = strings;
    };

    instance.t = function(key, params) {
        var str = this.strings[key];
        if (str === undefined) {
            str = this.fallbackStrings[key];
        }
        if (str === undefined) {
            return key;
        }
        if (params) {
            for (var i = 0; i < params.length; i++) {
                str = str.replace(new RegExp('\\{' + i + '\\}', 'g'), params[i]);
            }
        }
        return str;
    };

    instance.setLanguage = function(lang) {
        if (!this.locales[lang]) {
            console.warn('Locale not found: ' + lang + ', falling back to en');
            lang = 'en';
        }
        this.currentLanguage = lang;
        this.strings = this.locales[lang] || {};
        this.fallbackStrings = this.locales['en'] || {};

        localStorage.setItem('spacecompany_language', lang);

        if (this.dataReady) {
            this.patchDataObjects();
        }
        this.applyDOM();
        this.applyHandlebarsHelpers();

        if (typeof refreshResources === 'function') refreshResources();
        if (typeof refreshResearches === 'function') refreshResearches();
        if (typeof refreshTabs === 'function') refreshTabs();
        if (typeof legacyRefreshUI === 'function') legacyRefreshUI();
        if (typeof Game.settings !== 'undefined' && typeof Game.settings.updateCompanyName === 'function') {
            Game.settings.updateCompanyName();
        }

        var langToggle = $('#langToggle');
        if (langToggle.length > 0) {
            langToggle.text(this.t('ui.header.langToggle'));
        }
    };

    instance.applyDOM = function() {
        var self = this;
        $('[data-i18n]').each(function() {
            var el = $(this);
            var key = el.data('i18n');
            var text = self.t(key);
            if (text !== key) {
                if (el.children().length === 0) {
                    el.text(text);
                } else {
                    var childHtml = '';
                    el.children().each(function() { childHtml += this.outerHTML; });
                    el.html(text + ' ' + childHtml);
                }
            }
        });
        $('[data-i18n-html]').each(function() {
            var el = $(this);
            var key = el.data('i18n-html');
            var text = self.t(key);
            if (text !== key) {
                el.html(text);
            }
        });
        self.translateTextNodes();
    };

    instance.translateTextNodes = function() {
        var self = this;
        if (this.currentLanguage === 'en') return;
        var replacements = {
            'Storage Upgrade': self.t('common.storageUpgrade'),
            'Upgrade Storage': self.t('common.upgradeStorageBtn'),
            'Upgrade your': self.t('common.upgradeStoragePrefix'),
            'storage size to': self.t('common.storageSizeTo'),
            'Time remaining until full storage:': self.t('common.timeRemainingFull'),
            'Time remaining until empty storage:': self.t('common.timeRemainingEmpty'),
            'full storage:': self.t('common.fullStorageSuffix'),
            'empty storage:': self.t('common.emptyStorageSuffix'),
            ' storage:': self.t('common.storageSuffix'),
            'Hydrogen with': self.t('common.hydrogenWith'),
            ' Energy.': self.t('common.energyDot'),
            'Each engine produces': self.t('common.eachEngineProduces'),
            'Each Solar Panel produces': self.t('common.eachSolarPanelProduces'),
            'Each Power Station produces': self.t('common.eachPowerStationProduces'),
            'per second.': self.t('common.perSecondDot'),
            'per second': self.t('common.perSecond'),
            'Produces': self.t('common.produces'),
            'Uses': self.t('common.uses'),
            'Costs': self.t('common.costs'),
            'Costs:': self.t('common.costsColon'),
            'Build an': self.t('common.buildAn'),
            'Build a': self.t('common.buildA'),
            'Build Laboratory T2': self.t('common.buildLabT2'),
            'Build Laboratory T3': self.t('common.buildLabT3'),
            'Build Laboratory T4': self.t('common.buildLabT4'),
            'Build Laboratory T5': self.t('common.buildLabT5'),
            'Get PSU': self.t('common.getPsu'),
            'Get Battery': self.t('common.getBattery'),
            'Get Battery T2': self.t('common.getBatteryT2'),
            'Get Battery T3': self.t('common.getBatteryT3'),
            'Get Battery T4': self.t('common.getBatteryT4'),
            'Get Battery T5': self.t('common.getBatteryT5'),
            'Turn Super-Heater': self.t('common.turnSuperHeater'),
            'Off': self.t('common.off'),
            'Destroy Super-Heater': self.t('common.destroySuperHeater'),
            'Turn Plasmatic Pit': self.t('common.turnPlasmaticPit'),
            'Destroy Plasmatic Pit': self.t('common.destroyPlasmaticPit'),
            'Turn Electron Bath': self.t('common.turnElectronBath'),
            'Destroy Electron Bath': self.t('common.destroyElectronBath'),
            'Gain': self.t('common.gain'),
            'Convert': self.t('common.convert'),
            'Dormant': self.t('common.dormant'),
            'Donate Resources': self.t('common.donateResources'),
            'Activate Wonder': self.t('common.activateWonder'),
            'Activate': self.t('common.activate'),
            'Built': self.t('common.built'),
            'Not Built': self.t('common.notBuilt'),
            'Explored': self.t('common.explored'),
            'Explore': self.t('common.explore'),
            'Rocket Fuel': self.t('common.rocketFuel'),
            'Space Rocket': self.t('common.spaceRocket'),
            'Build Rocket': self.t('common.buildRocket'),
            'Launch Rocket': self.t('common.launchRocket'),
            // Resource names
            'Lunarite': self.t('resource.lunarite.name'),
            'Methane': self.t('resource.methane.name'),
            'Titanium': self.t('resource.titanium.name'),
            'Gold': self.t('resource.gold.name'),
            'Silver': self.t('resource.silver.name'),
            'Hydrogen': self.t('resource.hydrogen.name'),
            'Helium': self.t('resource.helium.name'),
            'Uranium': self.t('resource.uranium.name'),
            'Lava': self.t('resource.lava.name'),
            'Oil': self.t('resource.oil.name'),
            'Metal': self.t('resource.metal.name'),
            'Gems': self.t('resource.gem.name'),
            'Gem': self.t('resource.gem.name'),
            'Charcoal': self.t('resource.charcoal.name'),
            'Wood': self.t('resource.wood.name'),
            'Silicon': self.t('resource.silicon.name'),
            'Ice': self.t('resource.ice.name'),
            'Meteorite': self.t('resource.meteorite.name'),
            'Science': self.t('resource.science.name'),
            'Energy': self.t('resource.energy.name'),
            'Plasma': self.t('resource.plasma.name'),
        };
        var walker = document.createTreeWalker(document.getElementById('game'), NodeFilter.SHOW_TEXT, null, false);
        var textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        for (var node of textNodes) {
            var text = node.textContent;
            var changed = false;
            for (var eng in replacements) {
                if (text.indexOf(eng) !== -1 && replacements[eng]) {
                    text = text.split(eng).join(replacements[eng]);
                    changed = true;
                }
            }
            if (changed) node.textContent = text;
        }
    };

    instance.patchDataObjects = function() {
        if (typeof Game.buildingData !== 'undefined') {
            for (var id in Game.buildingData) {
                var bKey = 'building.' + id;
                var bName = this.t(bKey + '.name');
                var bDesc = this.t(bKey + '.desc');
                if (bName !== bKey + '.name') Game.buildingData[id].name = bName;
                if (bDesc !== bKey + '.desc') Game.buildingData[id].desc = bDesc;
            }
        }

        if (typeof Game.techData !== 'undefined') {
            for (var id in Game.techData) {
                var tKey = 'tech.' + id;
                var tName = this.t(tKey + '.name');
                var tDesc = this.t(tKey + '.desc');
                var tBtn = this.t(tKey + '.buttonText');
                if (tName !== tKey + '.name') Game.techData[id].name = tName;
                if (tDesc !== tKey + '.desc') Game.techData[id].desc = tDesc;
                if (tBtn !== tKey + '.buttonText') Game.techData[id].buttonText = tBtn;
            }
        }

        if (typeof Game.resourceData !== 'undefined') {
            for (var id in Game.resourceData) {
                var rKey = 'resource.' + id;
                var rName = this.t(rKey + '.name');
                var rDesc = this.t(rKey + '.desc');
                if (rName !== rKey + '.name') Game.resourceData[id].name = rName;
                if (rDesc !== rKey + '.desc') Game.resourceData[id].desc = rDesc;
            }
        }

        if (typeof Game.storageData !== 'undefined') {
            for (var id in Game.storageData) {
                var sKey = 'storage.' + id;
                var sName = this.t(sKey + '.name');
                var sDesc = this.t(sKey + '.desc');
                if (sName !== sKey + '.name') Game.storageData[id].name = sName;
                if (sDesc !== sKey + '.desc') Game.storageData[id].desc = sDesc;
            }
        }

        if (typeof Game.interstellarData !== 'undefined') {
            for (var id in Game.interstellarData) {
                var iKey = 'interstellar.' + id;
                var iName = this.t(iKey + '.name');
                var iDesc = this.t(iKey + '.desc');
                if (iName !== iKey + '.name') Game.interstellarData[id].name = iName;
                if (iDesc !== iKey + '.desc') Game.interstellarData[id].desc = iDesc;
            }
        }

        if (typeof Game.stargazeData !== 'undefined') {
            for (var id in Game.stargazeData) {
                var sKey = 'stargaze.' + id;
                var sName = this.t(sKey + '.name');
                var sDesc = this.t(sKey + '.desc');
                if (sName !== sKey + '.name') Game.stargazeData[id].name = sName;
                if (sDesc !== sKey + '.desc') Game.stargazeData[id].desc = sDesc;
            }
        }

        if (typeof Game.starData !== 'undefined') {
            for (var id in Game.starData) {
                var stKey = 'star.' + id;
                var stName = this.t(stKey + '.name');
                var stFaction = this.t(stKey + '.faction');
                var stRes1 = this.t(stKey + '.resource1');
                var stRes2 = this.t(stKey + '.resource2');
                if (stName !== stKey + '.name') Game.starData[id].name = stName;
                if (stFaction !== stKey + '.faction') Game.starData[id].faction = stFaction;
                if (stRes1 !== stKey + '.resource1') Game.starData[id].resource1 = stRes1;
                if (stRes2 !== stKey + '.resource2') Game.starData[id].resource2 = stRes2;
            }
        }

        if (typeof Game.achievementsData !== 'undefined') {
            for (var id in Game.achievementsData) {
                var aKey = 'ach.' + id;
                var aTitle = this.t(aKey + '.title');
                if (aTitle !== aKey + '.title') Game.achievementsData[id].title = aTitle;
            }
        }

        if (typeof Game.splashTextArray !== 'undefined') {
            var splashArr = this.t('splash.array');
            if (splashArr !== 'splash.array' && Array.isArray(splashArr)) {
                Game.splashTextArray = splashArr;
            }
        }

        if (typeof Game.resourceCategories !== 'undefined') {
            for (var i = 0; i < Game.resourceCategories.length; i++) {
                var cat = Game.resourceCategories[i];
                var catKey = 'resourceCategory.' + cat.name;
                var catTitle = this.t(catKey + '.title');
                if (catTitle !== catKey + '.title') {
                    cat.display = catTitle;
                }
            }
        }
    };

    instance.applyHandlebarsHelpers = function() {
        var self = this;
        if (typeof Handlebars !== 'undefined') {
            Handlebars.registerHelper('t', function(key) {
                return new Handlebars.SafeString(self.t(key));
            });
            Handlebars.registerHelper('tp', function(key, context) {
                var params = [];
                if (context && context.hash) {
                    for (var k in context.hash) {
                        params.push(context.hash[k]);
                    }
                }
                return new Handlebars.SafeString(self.t(key, params));
            });
        }
    };

    instance.init = function() {
        var savedLang = localStorage.getItem('spacecompany_language') || 'en';
        this.setLanguage(savedLang);

        var selector = $('#languageSelector');
        if (selector.length > 0) {
            selector.val(this.currentLanguage);
        }
    };

    instance.markDataReady = function() {
        this.dataReady = true;
        this.patchDataObjects();
        this.applyDOM();
        if (typeof refreshResources === 'function') refreshResources();
        if (typeof refreshResearches === 'function') refreshResearches();
        if (typeof refreshTabs === 'function') refreshTabs();
        if (typeof legacyRefreshUI === 'function') legacyRefreshUI();
    };

    instance.toggleLanguage = function() {
        var newLang = (this.currentLanguage === 'en') ? 'zh-CN' : 'en';
        this.setLanguage(newLang);
        var selector = $('#languageSelector');
        if (selector.length > 0) {
            selector.val(newLang);
        }
    };

    return instance;

}());
