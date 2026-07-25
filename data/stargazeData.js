Game.stargazeCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: '通用',
        category: 'general'
    };

    instance.faction = {
        title: '阵营',
        category: 'faction',
    };

    return instance;

}());

Game.stargazeData = (function(){

	var instance = {};

	instance.intro = {
		name: "引言",
		para1: '"就这样，你来到了这里，看似是你旅程的终点，但你没有意识到……这仅仅是开始。仰望星空，你思考着如何用你在太阳系中获得的财富和帝国去做些什么。',
		para2: '突然，主宰者向你伸出手说："你已经走了很远，我觉得你的生命在漫长的帝国建设之后正在慢慢走向终结。然而，你没有达到我期望的标准。"',
		para3: '"尽管让我失望了，也没有取得我期望的伟大成就，但考虑到你的忠诚和奉献，我准备给你一次重生的机会。"',
		para4: '"你将有很多机会打动我，当你觉得时机成熟需要牺牲时，我会给你救赎的能力。每次重生，你的帝国都会比以前更强大，只要你忠于我，我将指引你走向银河霸权。"',
		para5: '"你将重新开始，一段新的人生，但作为你灵魂的交换，我将用你在这一宇宙中获得的知识和多元宇宙这一侧最有价值的物质——暗物质——来奖励你的下一个自己。"',
		category: "general",
		unlocked: true
	};

	instance.darkMatter = {
		name: "暗物质",
		desc: "在这里，你可以看到你获得的暗物质数量以及重置时将获得的收益（括号内）。你可以了解如何获得暗物质，并将其用于暗物质专属升级。",
		current: 0,
		count: 0,
		category: "general",
		unlocked: true
	};

	instance.carnelian = {
		name: "红玉髓抵抗军",
		desc: "一个对当权者怀有强烈愤怒的无情阵营，尤其是普拉斯尼帝国。他们不停地反对，将全部力量集中在攻击敌人上。因此，他们提供的主要是倾向于更主动的游戏玩法的升级。",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.prasnian = {
		name: "普拉斯尼帝国",
		desc: "当前银河系的领导者，最专注于维持现状的阵营。反对变革，他们有一个威权政权，主要提供与戴森或奇迹等结构相关的升级。",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.hyacinite = {
		name: "海蓝宝集合体",
		desc: "海蓝宝集合体是一个热爱科学的社会，为所有技术进步感到自豪，并始终展望未来。他们为真理而战，欢迎任何与他们有共同信仰的人。",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.kitrinos = {
		name: "基特里诺斯公司",
		desc: "这家私人公司已经在银河系中变得强大，以利润为动力，与那些能支持他们目标的人结盟。提供的升级侧重于被动收益，具有大量自动化。",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.moviton = {
		name: "莫维顿辛迪加",
		desc: "莫维顿辛迪加是一个以扩张为中心的阵营，目标是征服银河系。他们经常在冲突的双方中周旋，希望从混乱中获利。他们提供旅行方面的改进，包括火箭建造和星际旅行。",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.overlord = {
		name: "主宰者教团",
		desc: "这个阵营笼罩在神秘之中。虽然知之甚少，但一种强大的力量俯瞰着整个银河系，似乎凌驾于其他五个阵营和他们的'琐碎'争斗之上。你对主宰者的忠诚所带来的升级不受类型限制，变化很大。",
		category: "faction",
		opinion: 0,
		unlocked: true
	};


	return instance;

}());

Game.darkMatter = (function(){

	var instance = {};

	/************
	** DM Gain **
	************/

	instance.wonder = {
		name: "奇迹",
		desc: "你每完成一个奇迹站的楼层就能获得暗物质。你很可能在第一次重置之前就完成了所有这些。每完成一个楼层获得4暗物质，但最后一个楼层获得2暗物质。",
	};

	instance.sphere = {
		name: "球体",
		desc: "在你的主星系建造一个戴森球从而完成它，你将获得15暗物质。在其他星系中建造的每个戴森球将获得5暗物质。"
	};

	instance.research = {
		name: "研究效率",
		desc: "在任何可重复购买的研究中每达到25次研究效率，你将获得2暗物质。",
	};

	instance.rank = {
		name: "成就等级",
		desc: "每达到一个成就等级，你将获得2暗物质。由于前几个成就等级比较容易，这将是你早期运行中暗物质的主要来源。",
	};

	instance.swarm = {
		name: "集群",
		desc: "这是更复杂的系统之一，你从集群获得的暗物质基于一个古老的数学序列：帕斯卡三角。你将每通过一个三角数获得1暗物质。例如：1,3,6,10,15,21...",
	};

	return instance;

}());

Game.prestigeData = (function(){

	var instance = {};

	/************
	** General **
	************/

	instance.rebirth = {
		name: "重生",
		desc: "踏入新生命是一项伟大的事业，不是一时兴起就能做的事。一旦确定，你可以重新开始，保留你在前世获得的知识和经验，实现比以前更大更快的成就。你将保留未使用的暗物质和升级。<br><b>注意：没有球体就无法重生，即使在第二次运行中。<br>注意：你将保留前世购买的所有升级。</b>",
		cost: 0,
		category: "intro",
	};

	instance.respec = {
		name: "重置技能",
		desc: "当你犯了错误或想更改升级时，你可以重置技能并退还每个升级的暗物质。不幸的是，这种巨大的力量只能释放有限的次数。主宰者慷慨地给你3次免费的救赎机会，其余的需要通过重生获得（每3次额外获得1次）。<br><b>注意：你将失去通过这些升级获得的机器，包括所有T5机器。如果你拥有初始存储，存储将除以128。</b>",
		cost: 0,
		category: "intro",
	};

	instance.increaseProd1 = {
		name: "暗物质增益",
		desc: "每有一个未使用的暗物质，所有资源（包括科学）增加1%的加成。",
		cost: 30,
		category: "darkMatter",
		onApply: function(){
	        dmBoost += 0.01;
	    },
	    remove: function(){
	    	dmBoost -= 0.01;
	    },
		achieved: false,
	};

	/**************
	** Carnelian **
	**************/

	instance.empowerManualGains = {
		name: "强化手动获取",
		desc: "将所有获取按钮从每次1个增加到每次20个。",
		cost: 5,
		category: "carnelian",
		opinion: 3,
		onApply: function(){
			gainNum = 20;
			for(var resource in RESOURCE){
				if(RESOURCE[resource] != "science")$('#' + RESOURCE[resource] + 'Gain').text(gainNum);
			}
		},
		remove: function(){
	    	gainNum = 1;
			for(var resource in RESOURCE){
				if(RESOURCE[resource] != "science")$('#' + RESOURCE[resource] + 'Gain').text(gainNum);
			}
	    },
		achieved: false
	};

	instance.startingStorage = {
		name: "初始存储",
		desc: "重生时所有资源初始最大存储量为6,400。（如果已超过6,400则不受影响）",
		cost: 8,
		category: "carnelian",
		opinion: 6,
		onApply: function(){
			var newStorage = 6400;
			for(var i = 0; i < resources.length; i++){
				if(window[resources[i] + "Storage"] <= 6400){
					window[resources[i] + "Storage"] = newStorage;
					window[resources[i] + "NextStorage"] = newStorage * 2;
				}
			}
		},
		remove: function(){
	    	for(var i = 0; i < resources.length; i++){
				if(window[resources[i] + "Storage"] <= 6400){
					window[resources[i] + "Storage"] = 50;
					window[resources[i] + "NextStorage"] = 50 * 2;
				} else {
					window[resources[i] + "Storage"] /= 128;
					window[resources[i] + "NextStorage"] /= 128;
				}
			}
	    },
		achieved: false
	};

	instance.storageDiscount = {
		name: "存储折扣",
		desc: "所有存储不再消耗100%的主要资源，而是75%。",
		cost: 21,
		category: "carnelian",
		opinion: 14,
		onApply: function(){
			storagePrice -= 0.25;
		},
		remove: function(){
	    	storagePrice += 0.25;
	    },
		achieved: false
	};

	/*************
	** Prasnian **
	*************/

	instance.T3Plasma = {
		name: "T3等离子体",
		desc: "解锁电子浴",
		cost: 11,
		category: "prasnian",
		opinion: 4,
		onApply: function(){
			document.getElementById("plasmaTier3").className = "";
		},
		remove: function(){
	    	document.getElementById("plasmaTier3").className = "hidden";
	    	bath = 0;
	    	updateCost();
	    },
		achieved: false
	};

	instance.floor1Discount = {
		name: "第一层折扣",
		desc: "第一层的所有奇迹享受15%的价格减免。",
		cost: 16,
		category: "prasnian",
		opinion: 10,
		onApply: function(){
			floor1Price -= 0.15;
            updateWonderCost();
		},
		remove: function(){
	    	floor1Price += 0.15;
            updateWonderCost();
	    },
		achieved: false
	};

	instance.floor23Discount = {
		name: "第二三层折扣",
		desc: "第二层和第三层的所有奇迹享受20%的价格减免。",
		cost: 19,
		category: "prasnian",
		opinion: 15,
		onApply: function(){
			floor23Price -= 0.2;
			updateWonderCost();
		},
		remove: function(){
	    	floor23Price += 0.2;
            updateWonderCost();
	    },
		achieved: false
	};

	instance.autoEmc = {
		name: "自动EMC",
		desc: "在EMC资源上勾选一个框，让该资源每秒自动转换到最大值。",
		cost: 24,
		category: "prasnian",
		opinion: 17,
		onApply: function(){
			var updateList = document.getElementsByClassName("autoEmcHide");
			for(var i = updateList.length-1; i >= 0; i--){
				updateList[i].className = "autoEmcHide";
			}
		},
		remove: function(){
	    	var updateList = document.getElementsByClassName("autoEmcHide");
			for(var i = updateList.length-1; i >= 0; i--){
				updateList[i].className = "autoEmcHide hidden";
			}
	    },
		achieved: false
	}

	/**************
	** Hyacinite **
	**************/

	instance.startingLabs = {
		name: "初始实验室",
		desc: "重生时初始拥有20个T1实验室。",
		cost: 7,
		category: "hyacinite",
		opinion: 3,
		rebirthStart: {lab:20},
		onApply: function(){
			lab += 20;
		},
		remove: function(){
	    	lab -= 20
	    },
		achieved: false
	};

	instance.labDiscount = {
		name: "实验室折扣",
		desc: "T2+实验室此升级后便宜20%。",
		cost: 16,
		category: "hyacinite",
		opinion: 12,
		onApply: function(){
			labT2PlusMulti -= 0.2;
			updateLabCost();
		},
		remove: function(){
            labT2PlusMulti += 0.2;
			updateLabCost();
	    },
		achieved: false
	};

	instance.T5Labs = {
		name: "T5实验室",
		desc: "解锁太空科学卫星站",
		cost: 24,
		category: "hyacinite",
		opinion: 14,
		onApply: function(){
			document.getElementById("labTier5").className = "";
		},
		remove: function(){
	    	document.getElementById("labTier5").className = "hidden";
	    	labT5 = 0;
	    	updateLabCost();
	    },
		achieved: false
	};

	instance.energyEff = {
		name: "能源效率上限",
		desc: "将能源效率研究上限从25%提高到50%。",
		cost: 36,
		category: "hyacinite",
		opinion: 25,
		onApply: function(){
			Game.tech.entries["energyEfficiencyResearch"].maxLevel += 25;
		},
		remove: function(){
	    	Game.tech.entries["energyEfficiencyResearch"].maxLevel = 25;
	    },
		achieved: false
	};


	/*************
	** Kitrinos **
	*************/

	instance.T1Discount = {
		name: "T1机器折扣",
		desc: "资源标签页中所有T1机器便宜10%。",
		cost: 8,
		category: "kitrinos",
		opinion: 4,
		onApply: function(){
			T1Price -= 0.1;
		},
		remove: function(){
	    	T1Price += 0.1;
	    },
		achieved: false
	};

	instance.T5Batteries = {
		name: "T5电池",
		desc: "解锁第五级电池以满足所有能源存储需求。",
		cost: 14,
		category: "kitrinos",
		opinion: 17,
		onApply: function(){
			document.getElementById("batteriesT5").className = "";
		},
		remove: function(){
	    	document.getElementById("batteriesT5").className = "hidden";
	    	batteryT5 = 0;
	    	updateCost();
	    },
		achieved: false
	};

	instance.T5Machines = {
		name: "T5机器",
		desc: "获得第五级机器的使用权来生产资源。",
		cost: 35,
		category: "kitrinos",
		opinion: 20,
		onApply: function(){
			unlockTier5();
		},
		remove: function(){
	    	removeTier5();
	    },
		achieved: false
	};

	/************
	** Moviton **
	************/

	instance.chemicalBoost = {
		name: "化工厂增益",
		desc: "每个化工厂的火箭燃料产量增加100%。",
		cost: 11,
		category: "moviton",
		opinion: 7,
		onApply: function(){
			chemicalBoost += 1;
		},
		remove: function(){
	    	chemicalBoost -= 1;
	    },
		achieved: false
	};

	instance.rocketDiscount = {
		name: "火箭折扣",
		desc: "火箭零件成本减少35%。",
		cost: 23,
		category: "moviton",
		opinion: 28,
		onApply: function(){
			rocketPrice -= 0.35;
		},
		remove: function(){
	    	rocketPrice += 0.35;
	    },
		achieved: false
	};

	instance.meteoriteTier3 = {
		name: "T3陨石",
		desc: "解锁行星粉碎机建筑。",
		cost: 37,
		category: "moviton",
		opinion: 29,
		onApply: function(){
			document.getElementById("meteoriteTier3").className = "";
		},
		remove: function(){
	    	document.getElementById("meteoriteTier3").className = "hidden";
	    	smasher = 0;
			updateCost();
	    },
		achieved: false
	}

	instance.meteoriteTier4 = {
		name: "T4陨石",
		desc: "解锁星云合成器建筑。",
		cost: 49,
		category: "moviton",
		opinion: 36,
		onApply: function(){
			document.getElementById("meteoriteTier4").className = "";
		},
		remove: function(){
	    	document.getElementById("meteoriteTier4").className = "hidden";
	    	nebulous = 0;
			updateCost();
	    },
		achieved: false
	}

	/*************
	** Overlord **
	*************/

	return instance;

}());
