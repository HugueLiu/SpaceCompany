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
                    el.contents().filter(function() {
                        return this.nodeType === 3;
                    }).first().text(text);
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
