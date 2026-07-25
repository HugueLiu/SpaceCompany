Game.updates = (function(){
	
	var instance = {};
	instance.entries = [];

	instance.versionNumber = 1;
	instance.updateRead = false;

	instance.updateTitleTemplate = Handlebars.compile(['<div id="updateAlert" class="alert alert-info alert-dismissible fade in">',
	    '<button href="#" class="close btn.btn-info" data-dismiss="alert" aria-label="close">关闭</button>',
	    '<strong>新版本更新！</strong> 以下是你上次游玩后新增的内容：<br>',
	    '<ul id="updateLog"></ul>',
	'</div>'].join('\n'));
	instance.updateTemplate = Handlebars.compile('<li><span>{{desc}}</span></li>');

	instance.initialise = function(){
		if(metal != 0){
			var extra = 0;
			var target = $('#updateBox');
			var html = this.updateTitleTemplate();
			target.append($(html));
			for(var id in Game.updatesData) {
				if(this.entries.length < 5){
					this.createDisplay(Game.updatesData[id]);
				}
				else{
					extra += 1;
				}
	            
	        }
	        if(extra > 0){
	        	var extraUpdates = {
	        		desc: '+' + extra + ' 项更多内容。点击版本号可查看完整更新日志。',
	        		read: false
	        	}
	        	this.createDisplay(extraUpdates);
	        }
	    	if(this.updateRead === false){
	    		document.getElementById("updateAlert").className = "hidden";
	    	}
	    } else {
	    	for(var id in Game.updatesData) {
				Game.updatesData[id].read = true;
	            
	        }
	    }
	}

	instance.createDisplay = function(self){
		if(self.read == false){
			this.entries.push(self);
			var target = $('#updateLog');
	        var html = this.updateTemplate(self);
	        target.append($(html));
	        self.read = true;
	        this.updateRead = true;
		}
	}

	instance.save = function(data){
		data.updates = {versionNumber: 1, entries: {}};
		for(var id in Game.updatesData){
			data.updates.entries[id] = Game.updatesData[id];
		}
	}

	instance.load = function(data){
		if(data.updates) {
			if(data.updates.versionNumber && data.updates.versionNumber == 1){
				Game.updates.versionNumber = data.versionNumber;
				for(var id in data.updates.entries){
					Game.updatesData[id] = data.updates.entries[id];
				}
			}
		}
	}

	instance.getUpdateData = function(id) {
        return Game.updatesData[id];
    };

	return instance;

}());

Game.updatesData = (function(){

	var instance = {};

	instance.nerfEnergyEff = {
		desc: '降低了能源效率研究成本，变为原来的 1/100，但上限调整为 25%',
		read: false
	};

	instance.batteryEff = {
		desc: '电池效率升级现在每级提高 1% 电池容量（最多 50 级）',
		read: false
	};

	instance.effResearchLevel = {
		desc: '效率研究现在显示当前等级，而不是下一级',
		read: false
	};

	instance.buffBattEff = {
		desc: '强化了电池效率升级，上限从 50 级提升到 200 级',
		read: false
	};

	instance.redDestroy = {
		desc: '“更多 -> 图形选项”中新增了将销毁按钮显示为红色的选项',
		read: false
	};

	instance.nerfRocketFuelResearch = {
		desc: '提高了火箭燃料研究的科学点消耗',
		read: false
	};

	instance.rocketFuelT3 = {
		desc: '新增联氨催化剂：T3 火箭燃料',
		read: false
	};

	instance.achievFormat = {
		desc: '新增成就数字格式选项',
		read: false
	};

	instance.splash = {
		desc: '现在已有 100 条加载提示语！',
		read: false
	};

	instance.stargazeIntro = {
		desc: '为观星标签页加入了基础内容与开场介绍',
		read: false
	};

	instance.irs = {
		desc: '新增星际雷达扫描仪（星际 -> 通讯）',
		read: false
	};

	instance.ranks = {
		desc: '新增成就等级',
		read: false
	};

	instance.lunarite = {
		desc: '将“太空金属”更名为“月岩”',
		read: false
	};

	instance.hideWonder = {
		desc: '奇迹标签页在完成后会自动隐藏，为其他标签页腾出空间',
		read: false
	};

	instance.dmCounter = {
		desc: '现在会计算并显示暗物质收益',
		read: false
	};

	instance.hideButton = {
		desc: '现在可以取消隐藏已完成的标签页，位置在“更多 -> 图形选项”',
		read: false
	};

	instance.achivementsReset = {
		desc: '成就已重置；若你当前已经达到对应条件，会重新获得这些成就',
		read: false
	};

	instance.relationUpgrades = {
		desc: '重生升级现在会提供对应阵营关系值',
		read: false
	};

	instance.fixSecondRebirth = {
		desc: '修复了多次重生问题，现在可以安全进行多次重生而不会损坏存档',
		read: false
	};

	instance.T5Batteries = {
		desc: '新增 T5 电池：观星 -> 基特里诺斯公司',
		read: false
	};

	instance.memoryLeak = {
		desc: '修复了严重的内存泄漏问题，游戏现在会更流畅且占用更少 CPU' ,
		read: false
	};

	instance.multiSpheres = {
		desc: '每征服一个恒星系，就允许你建造一个戴森球',
		read: false
	};

	instance.autoEmc = {
		desc: '新增自动 EMC：观星 -> 普拉斯尼帝国',
		read: false
	};

	instance.respec = {
		desc: '现在可以保留暗物质升级，并获得重置升级的能力',
		read: false
	};

	instance.segmentAndSphere = {
		desc: '新增建造 250 个结构段与戴森球按钮',
		read: false
	};

	instance.meteoriteTier34 = {
		desc: '新增陨石 T3 与 T4：观星 -> 莫维顿辛迪加',
		read: false
	};

	instance.buffCapitalShip = {
		desc: '强化了主力舰的攻击力与防御力。',
		read: false
	};

	instance.dmStats = {
		desc: '新增实时计数器，显示各部分将提供多少暗物质',
		read: false
	};

	instance.energyEffBug = {
		desc: '修复了能源效率研究 25/50 上限的错误',
		read: false
	};

	instance.buffOilT3 = {
		desc: '降低了石油 T3 的能耗',
		read: false
	};

	instance.dmBoostMultiplicative = {
		desc: '科学效率与资源效率现在会与暗物质加成进行乘算',
		read: false
	};

	instance.antimatterDMBoost = {
		desc: '修复了反物质不受暗物质加成影响的问题',
		read: false
	};

	instance.starListExpansion = {
		desc: '大幅扩展了星际标签页中可旅行和可征服的恒星系列表',
		read: false
	};

	instance["0511"] = {
		desc: '修复了重生后星际标签页中的若干界面问题',
		read: false
	};
	
	instance.loadScreenInvert = {
		desc: 'Inverted the loading screen colours to help night-time players retain their eyesight',
		read: false
	}


	return instance;

}());
