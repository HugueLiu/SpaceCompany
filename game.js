var Game = (function() {
    'use strict';

    var instance = {
        ui: {},
        lastUpdateTime: 0,
        intervals: {},
        uiComponents: [],
        logoAnimating: true,
        timeSinceAutoSave: 0,
        activeNotifications: {},
        lastFixedUpdate: new Date().getTime()
    };

    instance.update_frame = function(time) {
        Game.update(time - Game.lastUpdateTime);
        Game.lastUpdateTime = time;

        // This ensures that we wait for the browser to "catch up" to drawing and other events
        window.requestAnimationFrame(Game.update_frame);
    };

    instance.update = function(delta) {
        for (var name in this.intervals) {
            var data = this.intervals[name];
            data.e += delta;
            if (data.e > data.d) {
                data.c(this, data.e / 1000);
                data.e = 0;
            }
        }
    };

    instance.createInterval = function(name, callback, delay) {
        this.intervals[name] = {c: callback, d: delay, e: 0}
    };

    instance.deleteInterval = function(name) {
        delete this.intervals[name];
    };

    instance.fixedUpdate = function() {
        var currentTime = new Date().getTime();
        var delta = (currentTime - this.lastFixedUpdate) / 1000;
        this.lastFixedUpdate = currentTime;

        refreshPerSec(delta);
        gainResources(delta);
        fixStorageRounding();
    };

    instance.fastUpdate = function(self, delta) {
        refreshWonderBars();
        checkRedCost();

        updateResourceEfficiencyDisplay();
        updateEnergyEfficiencyDisplay();
        updateScienceEfficiencyDisplay();
        updateBatteryEfficiencyDisplay();

        legacyRefreshUI();

        self.ui.updateBoundElements(delta);

        self.resources.update(delta);
        self.buildings.update(delta);
        self.tech.update(delta);
        self.settings.update(delta);

        self.updateAutoSave(delta);

        if(delta > 1) {
            console.log("你离开了 " + Game.utils.getTimeDisplay(delta));
        }
    };

    instance.slowUpdate = function(self, delta) {
        refreshConversionDisplay();
        refreshTimeUntilLimit();
        gainAutoEmc();

        checkStorages();

        self.updateTime(delta);

        self.achievements.update(delta);
        self.statistics.update(delta);
    };

    instance.uiUpdate = function(self, delta) {
        for(var i = 0; i < self.uiComponents.length; i++) {
            self.uiComponents[i].update(delta);
        }
    };

    instance.updateTime = function(delta) {
        Game.statistics.add('sessionTime', delta);
        Game.statistics.add('timePlayed', delta);
    };

    instance.import = function() {
        var text = $('#impexpField').val();
        if (!text.trim()) return console.warn("未提供可导入的存档。");
        if(text.length % 4 !== 0) {
            console.log("字符串不是有效的 Base64 编码：" + text.length + ' (' + text.length % 4 + ')');
            return;
        }

        var decompressed = LZString.decompressFromBase64(text);
        if(!decompressed) {
            console.log("导入存档失败，无法解压！");
            return;
        }

        localStorage.setItem("save", decompressed);

        console.log("已导入存档");

        window.location.reload();
    };

    instance.export = function() {
        var data = this.save();

        var string = JSON.stringify(data);
        var compressed = LZString.compressToBase64(string);

        console.log('正在压缩存档');
        console.log('已从 ' + string.length + ' to ' + compressed.length + ' 个字符');
        $('#impexpField').val(compressed);
    };

    instance.save = function() {
        var data = {
            lastFixedUpdate: this.lastFixedUpdate
        };

        this.achievements.save(data);
        this.statistics.save(data);
        this.resources.save(data);
        this.buildings.save(data);
        this.tech.save(data);
        this.settings.save(data);
        this.interstellar.save(data);
        this.stargaze.save(data);
        this.updates.save(data);

        data = legacySave(data);

        localStorage.setItem("save",JSON.stringify(data));
        Game.notifyInfo('游戏已保存', '您的存档数据已保存在浏览器本地存储中');
        console.log('游戏已保存');

        return data;
    };

    instance.load = function() {
        var data = JSON.parse(localStorage.getItem("save"));

        if(data && data !== null) {
            this.achievements.load(data);
            this.statistics.load(data);
            this.resources.load(data);
            this.buildings.load(data);
            this.stargaze.load(data);
            this.tech.load(data);
            this.interstellar.load(data); 
            this.updates.load(data);

            legacyLoad(data);

            this.settings.load(data);

            if(data != null && data.lastFixedUpdate && !isNaN(data.lastFixedUpdate)) {
                this.handleOfflineGains((new Date().getTime() - data.lastFixedUpdate) / 1000);
            }
        }

        console.log("加载成功");
    };

    instance.updateUI = function(self){
        Game.settings.updateCompanyName();
        refreshResources();
        refreshResearches();
        refreshTabs();

        updateCost();
        updateDysonCost();
        updateFuelProductionCost();
        updateLabCost();
        updateWonderCost();

        if(Game.constants.enableMachineTab === true){
            $('#machineTopTab').show();
        }

        $('#versionLabel').text(versionNumber);

        self.interstellar.redundantChecking();
    }

    instance.handleOfflineGains = function(offlineTime) {
        if(offlineTime <= 0) {
            return;
        }

        refreshPerSec(1);
        gainResources(offlineTime);
        fixStorageRounding();

        this.notifyOffline(offlineTime);
    };

    instance.deleteSave = function() {
        var deleteSave = prompt('你确定要删除存档吗？此操作不可逆！如果确定，请在框中输入删除。');

        if(deleteSave === "删除") {
            localStorage.removeItem("save");

            alert('存档已删除');
            window.location.reload();
        }
        else {
            alert('删除已取消');
        }
    };

     instance.loadDelay = function (self, delta) {
        document.getElementById("game").className = "container";

        self.deleteInterval("加载中");

        registerLegacyBindings();
        self.ui.updateAutoDataBindings();

        // Patch data objects before initialise
                
        // Initialize first
        self.achievements.initialise();
        self.statistics.initialise();
        self.resources.initialise();
        self.buildings.initialise();
        self.tech.initialise();
        self.interstellar.initialise();
        self.stargaze.initialise();

        // Now load
        self.load();

        self.settings.initialise();

        for(var i = 0; i < self.uiComponents.length; i++) {
            self.uiComponents[i].initialise();
        }

        self.updateUI(self);

        if (typeof refreshResources === 'function') refreshResources();
        if (typeof refreshResearches === 'function') refreshResearches();
        if (typeof refreshTabs === 'function') refreshTabs();
        if (typeof legacyRefreshUI === 'function') legacyRefreshUI();

        // Display what has changed since last time
        self.updates.initialise();

        // Then start the main loops
        self.createInterval("快速更新", self.fastUpdate, 100);
        self.createInterval("慢速更新", self.slowUpdate, 1000);
        self.createInterval("界面更新", self.uiUpdate, 100);

        // Do this in a setInterval so it gets called even when the window is inactive
        window.setInterval(function(){ Game.fixedUpdate(); },100);

        setTimeout(function(){document.getElementById("loadScreen").className = "hidden";}, 100)
        console.debug("加载完成");

    };

    instance.loadAnimation = function(self, delta) {
        if (self.logoAnimating === false) {
            return;
        }

        var logoElement = $('#loadLogo');
        var opacity = logoElement.css('opacity');
        if(opacity >= 0.9) {
            logoElement.fadeTo(1000, .95, function() { Game.logoAnimating = false; });
            self.logoAnimating = true;
        } else if (opacity <= 0.3) {
            logoElement.fadeTo(1000, .95, function() { Game.logoAnimating = false; });
            self.logoAnimating = true;
        }
    };

    instance.noticeStack = {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25};

    instance.notifyInfo = function(title, message) {
        if(title == '游戏已保存' && Game.settings.entries.saveNotifsEnabled == false){
            return;
        }
        if(Game.settings.entries.notificationsEnabled === true){
            this.activeNotifications.info = new PNotify({
                title: title,
                text: message,
                type: 'info',
                animation: 'fade',
                animate_speed: 'fast',
                addclass: "stack-bottomright",
                stack: this.noticeStack
            });
        }
    };

    instance.notifySuccess = function(title, message) {
        if(Game.settings.entries.notificationsEnabled === true){
            this.activeNotifications.success = new PNotify({
                title: title,
                text: message,
                type: 'success',
                animation: 'fade',
                animate_speed: 'fast',
                addclass: "stack-bottomright",
                stack: this.noticeStack
            });
        }
    };

    instance.notifyStorage = function() {
        if(Game.settings.entries.notificationsEnabled === true){
            this.activeNotifications.storage = new PNotify({
                title: '存储已满！',
                text: '资源满后将不再收集。',
                type: 'warning',
                animation: 'fade',
                animate_speed: 'fast',
                addclass: "stack-bottomright",
                stack: this.noticeStack
            });

            this.activeNotifications.storage.get().click(function() {
                Game.activeNotifications.storage.remove();
                Game.activeNotifications.storage = undefined;
            });
        }
    };

    instance.notifyOffline = function(time) {
        this.activeNotifications.success = new PNotify({
            title: '离线收益',
            text: '你已离线 ' + Game.utils.getFullTimeDisplay(time, true),
            type: 'info',
            animation: 'fade',
            animate_speed: 'fast',
            addclass: "stack-bottomright",
            stack: this.noticeStack
        });
    };

    instance.removeExcess = function(array, id){
        var check = false;
        for(var i = array.length; i > 0 ; i--){
            if(array[i] === id){
                if(check === false){
                    check = true;
                }
                else{
                    check = true;
                    array.splice(i, 1);
                }
            }
        }
    }

    instance.updateAutoSave = function(delta) {
        this.timeSinceAutoSave += delta;

        var element = $('#autoSaveTimer');
        var timeSinceSaveInMS = this.timeSinceAutoSave * 1000;
        var timeLeft = Game.settings.entries.autoSaveInterval - timeSinceSaveInMS;

        if (timeLeft <= 15000) {
            element.show();
            if(timeLeft <= 5000){
                element.text('自动保存中，剩余' +  (timeLeft / 1000).toFixed(1) + " " + '秒');
            }
            else{
                element.text('自动保存中，剩余' + " " + (timeLeft / 1000).toFixed(0) + " " + '秒');
            }
        } else {
            element.hide();
        }

        if(timeLeft < 100) {
            this.save();
            this.timeSinceAutoSave = 1;
        }
    };

    instance.start = function() {
        PNotify.prototype.options.styling = "bootstrap3";
        PNotify.prototype.options.delay = 3500;

        $('[data-toggle="tooltip"]').tooltip();

        
        console.debug("加载中 Game");
        
        this.createInterval("加载中 Animation", this.loadAnimation, 10);
        this.createInterval("加载中", this.loadDelay, 1000);

        this.update_frame(0);
    };

    return instance;
}());

window.onload = function(){
    Game.start();
};
