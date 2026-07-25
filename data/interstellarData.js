Game.interstellarCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: '星际',
        category: 'general'
    };

    instance.faction = {
        title: '阵营星系',
        category: 'faction',
    };

    return instance;

}());

Game.interstellarData = (function(){

	var instance = {};

	instance.comms = {
		name: '通讯',
		desc: '在这里你可以了解其他可前往的星系。<br><b>注意：第一颗星——半人马座α星距离4.3光年。1个IRS无法到达那里。</b>',
		category: 'general',
		unlocked: false
	};

	instance.rocket = {
		name: '火箭',
		desc: '在这里你可以建造前往恒星的运输工具。',
		category: 'general',
		built: '未建造',
		unlocked: false
	};

	instance.antimatter = {
		name: '反物质',
		desc: '你的星际旅行燃料在这里生产。不幸的是，由于其极度不稳定，每个恒星系统只能处理100k反物质。<br><br><button class="btn btn-default" onclick="toggleAntimatter()">切换反物质 <span id="antimatterToggled">开</span></button>',
		category: 'general',
		unlocked: false
	};

	instance.travel = {
		name: '旅行',
		desc: '在这里，你可以随心所欲地穿越宇宙。当你探索一个星系时，它将出现在对应的阵营标签页中，你可以在那里获得控制权以获得相应资源的生产加成。距离后面的数字是到达那里所需的反物质。',
		category: 'general',
		unlocked: false
	};

	instance.military = {
		name: '军事',
		desc: '在这里你可以建立舰队来入侵其他星系。你的舰队总属性取决于你拥有的飞船。',
		category: 'general',
		unlocked: false
	};

	instance.carnelian = {
		name: "红玉髓抵抗军",
		desc: "一个对当权者怀有强烈愤怒的无情阵营，尤其是普拉斯尼帝国。他们不停地反对，将全部力量集中在攻击敌人上。因此，他们提供的主要是倾向于更主动的游戏玩法的升级。",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.prasnian = {
		name: "普拉斯尼帝国",
		desc: "当前银河系的领导者，最专注于维持现状的阵营。反对变革，他们有一个威权政权，主要提供与戴森或奇迹等结构相关的升级。",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.hyacinite = {
		name: "海蓝宝集合体",
		desc: "海蓝宝集合体是一个热爱科学的社会，为所有技术进步感到自豪，并始终展望未来。他们为真理而战，欢迎任何与他们有共同信仰的人。",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.kitrinos = {
		name: "基特里诺斯公司",
		desc: "这家私人公司已经在银河系中变得强大，以利润为动力，与那些能支持他们目标的人结盟。提供的升级侧重于被动收益，具有大量自动化。",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.moviton = {
		name: "莫维顿辛迪加",
		desc: "莫维顿辛迪加是一个以扩张为中心的阵营，目标是征服银河系。他们经常在冲突的双方中周旋，希望从混乱中获利。他们提供旅行方面的改进，包括火箭建造和星际旅行。",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.overlord = {
		name: "主宰者教团",
		desc: "这个阵营笼罩在神秘之中。虽然知之甚少，但一种强大的力量俯瞰着整个银河系，似乎凌驾于其他五个阵营和他们的'琐碎'争斗之上。你对主宰者的忠诚所带来的升级不受类型限制，变化很大。",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	return instance;

}());

Game.commsData = (function(){

	var instance = {};

	instance.astroBreakthrough = {
		entryName: 'astroBreakthrough',
		name: '天文学突破',
		desc: '星际旅行理论的巨大问题即将被突破。用这个升级来实现它。这是一次性升级，将你的探索范围增加5光年。',
		category: 'comms',
		unlocked: true,
		displayNeedsUpdate: true,
		max: 1,
		completed: false,
		cost: {
			'metal': 60000000000,
			'ice': 6000000000,
			'meteorite': 60000000
		},
		defaultCost: {
			'metal': 60000000000,
			'ice': 6000000000,
			'meteorite': 60000000
		}
	};

	instance.IRS = {
		entryName: 'IRS',
		name: '星际雷达扫描仪',
		desc: '主宰者赐予你使用IRS发现外太空恒星的技术。每一个将探索范围增加1光年。',
		category: 'comms',
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'metal': 38600000000,
			'ice': 4320000000,
			'meteorite': 15800000
		},
		defaultCost: {
			'metal': 38600000000,
			'ice': 4320000000,
			'meteorite': 15800000
		}
	};

	return instance;

}());

Game.rocketData = (function(){

	var instance = {};

	instance.tier1Rocket = {
		name: '火箭飞船',
		desc: '火箭飞船可以前往银河系中的恒星，但无法降落在系统内的天体上。',
		category: 'rocket',
		max: 1,
		unlocked: true,
		built: false,
		displayNeedsUpdate: true,
		cost: {
			'shield': 50,
			'engine': 25,
			'aero': 15
		}
	};

	return instance;

}());

Game.rocketPartsData = (function(){

	var instance = {};

	instance.shield = {
		name: '护盾装甲',
		entryName: 'shield',
		desc: '这种装甲抵御太阳辐射，并可以保护里面的任何人免受太空的严寒。',
		category: 'rocketParts',
		max: 50,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'lunarite': 100000,
			'titanium': 100000,
			'metal': 100000
		},
		defaultCost: {
			'lunarite': 100000,
			'titanium': 100000,
			'metal': 100000
		}
	};

	instance.engine = {
		name: '引擎单元',
		entryName: 'engine',
		desc: '这些在受控反应中将反物质与物质结合，产生将你带到恒星的推进力。',
		category: 'rocketParts',
		max: 25,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'silicon': 500000,
			'meteorite': 10000,
			'hydrogen': 250000
		},
		defaultCost: {
			'silicon': 500000,
			'meteorite': 10000,
			'hydrogen': 250000
		}
	};

	instance.aero = {
		name: '空气动力学部件',
		entryName: 'aero',
		desc: '这些允许在大气层外轻松起飞和降落，这样你就不用担心空气阻力了。',
		category: 'rocketParts',
		max: 15,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'silver': 200000,
			'ice': 300000,
			'gem': 250000
		},
		defaultCost: {
			'silver': 200000,
			'ice': 300000,
			'gem': 250000
		}
	};

	return instance;

}());

Game.antimatterData = (function(){

	var instance = {};

	instance.drive = {
		entryName: 'drive',
		name: 'Alcubierre曲速引擎',
		desc: '这个强大的反应堆可以将高能等离子体转化为我们能想象到的最高效燃料。',
		category: 'antimatter',
		unlocked: true,
		displayNeedsUpdate: true,
		resourcePerSecond: {
            'antimatter': 0.5,
            'plasma': -100,
            'ice': -12000
        },
		cost: {
			'silver': 163000000,
			'oil': 712000000,
			'meteorite': 12300000
		},
		defaultCost: {
			'silver': 163000000,
			'oil': 712000000,
			'meteorite': 12300000
		}
	};

	return instance;

}());

Game.militaryData = (function(){

	var instance = {};

	instance.scout = {
		entryName: 'scout',
		name: '侦察舰',
		desc: '侦察舰是最小最快的舰船，成本最低。尽管看似价值不大，但它们在战斗中很重要，数量多时可能致命。',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 3,
			'defense': 2,
			'speed': 15
		},
		cost: {
			'metal': 870000000,
			'gem': 420000000,
			'silver': 390000000
		},
		defaultCost: {
			'metal': 870000000,
			'gem': 420000000,
			'silver': 390000000
		}
	};

	instance.frigate = {
		entryName: 'frigate',
		name: '护卫舰',
		desc: '比侦察舰大，护卫舰是小型舰船战争的一类。它们比侦察舰有更强的火力，但明显更慢。',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 5,
			'defense': 6,
			'speed': 12
		},
		cost: {
			'gold': 930000000,
			'lunarite': 6100000000,
			'meteorite': 13000000
		},
		defaultCost: {
			'gold': 930000000,
			'lunarite': 6100000000,
			'meteorite': 13000000
		}
	};

	instance.corvette = {
		entryName: 'corvette',
		name: '驱逐舰',
		desc: '驱逐舰是一种中型舰船，速度相当不错。虽然防御力不足，但在火力和速度方面弥补了这一缺陷，是填充舰队的好选择。',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 8,
			'defense': 4,
			'speed': 10
		},
		cost: {
			'titanium': 1620000000,
			'ice': 1020000000,
			'silicon': 1140000000
		},
		defaultCost: {
			'titanium': 1620000000,
			'ice': 1020000000,
			'silicon': 1140000000
		}
	};

	instance.battlecruiser = {
		entryName: 'battlecruiser',
		name: '战列巡洋舰',
		desc: '战列巡洋舰是一项昂贵的投资，但在火力、防御和速度方面都有平衡的表现。它是一种高端舰船。',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 15,
			'defense': 13,
			'speed': 9
		},
		cost: {
			'metal': 4900000000,
			'uranium': 2300000000,
			'hydrogen': 3100000000
		},
		defaultCost: {
			'metal': 4900000000,
			'uranium': 2300000000,
			'hydrogen': 3100000000
		}
	};

	instance.capitalship = {
		entryName: 'capitalship',
		name: '旗舰',
		desc: '旗舰是一艘防御力很重的舰船，但凭借其强大的攻击力量仍然可以造成重创。主要缺点是速度慢，拖累舰队的机动性。',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 57,
			'defense': 62,
			'speed': 5
		},
		cost: {
			'lunarite': 5300000000,
			'helium': 4600000000,
			'meteorite': 1700000000
		},
		defaultCost: {
			'lunarite': 5300000000,
			'helium': 4600000000,
			'meteorite': 1700000000
		}
	};

	return instance;

}());
