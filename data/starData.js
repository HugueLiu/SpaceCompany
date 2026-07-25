Game.starData = (function(){

	var instance = {};

	instance._201 = {
		name: "Alpha Centauri",
		distance: 4.3,
		planets: 1,
		faction: "海蓝宝集合体",
		factionId: "hyacinite",
		resource1: "冰",
		resource2: "氢",
		stats: {
			"power": 30,
			"defense": 20,
			"speed": 5,
		},
	};

	instance._301 = {
		name: "Barnard's Star",
		distance: 5.94,
		planets: 0,
		faction: "红玉髓抵抗军",
		factionId: "carnelian",
		resource1: "氢",
		resource2: "氦",
		stats: {
			"power": 52,
			"defense": 49,
			"speed": 6,
		},
	};

	instance._401 = {
		name: "CN Leonis",
		distance: 7.8,
		planets: 1,
		faction: "普拉斯尼帝国",
		factionId: "prasnian",
		resource1: "月岩",
		resource2: "宝石",
		stats: {
			"power": 86,
			"defense": 71,
			"speed": 8,
		},
	};

	instance._501 = {
		name: "Lalande 21185",
		distance: 8.31,
		planets: 1,
		faction: "基特里诺斯公司",
		factionId: "kitrinos",
		resource1: "钛",
		resource2: "硅",
		stats: {
			"power": 132,
			"defense": 117,
			"speed": 8,
		},
	};

	instance._701 = {
		name: "Gliese 65",
		distance: 8.55,
		planets: 1,
		faction: "莫维顿辛迪加",
		factionId: "moviton",
		resource1: "木炭",
		resource2: "甲烷",
		stats: {
			"power": 146,
			"defense": 131,
			"speed": 10,
		},
	};

	instance._601 = {
		name: "Sirius",
		distance: 8.6,
		planets: 5,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "硅",
		resource2: "甲烷",
		stats: {
			"power": 110,
			"defense": 129,
			"speed": 8,
		},
	};

	instance._130601 = {
		name: "V1216 Sagittarii",
		distance: 9.69,
		planets: 2,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "黄金",
		resource2: "熔岩",
		stats: {
			"power": 144,
			"defense": 229,
			"speed": 12,
		},
	};

	instance._163901 = {
		name: "Ross 248",
		distance: 10.33,
		planets: 2,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "铀",
		resource2: "甲烷",
		stats: {
			"power": 273,
			"defense": 226,
			"speed": 15,
		},
	};

	instance._25101 = {
		name: "Epsilon Eridani",
		distance: 10.5,
		planets: 5,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "氢",
		resource2: "金属",
		stats: {
			"power": 293,
			"defense": 112,
			"speed": 13,
		},
	};

	instance._158101 = {
		name: "Lacaille 9352",
		distance: 10.73,
		planets: 5,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "石油",
		resource2: "熔岩",
		stats: {
			"power": 443,
			"defense": 147,
			"speed": 7,
		},
	};

	instance._80101 = {
		name: "FI Virginis",
		distance: 10.89,
		planets: 4,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "氢",
		resource2: "氦",
		stats: {
			"power": 125,
			"defense": 198,
			"speed": 11,
		},
	};

	instance._217101 = {
		name: "EZ Aquarii",
		distance: 11.08,
		planets: 1,
		factionId: "hyacinite",
		faction: "海蓝宝集合体",
		resource1: "白银",
		resource2: "金属",
		stats: {
			"power": 420,
			"defense": 143,
			"speed": 12,
		},
	};

	instance._181901 = {
		name: "Procyon",
		distance: 11.41,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "宝石",
		resource2: "木炭",
		stats: {
			"power": 397,
			"defense": 381,
			"speed": 5,
		},
	};

	instance._213301 = {
		name: "61 Cygni",
		distance: 11.43,
		planets: 5,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "铀",
		resource2: "冰",
		stats: {
			"power": 289,
			"defense": 177,
			"speed": 11,
		},
	};

	instance._207601 = {
		name: "Struve 2398",
		distance: 11.64,
		planets: 1,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "氦",
		resource2: "月岩",
		stats: {
			"power": 203,
			"defense": 238,
			"speed": 7,
		},
	};

	instance._166701 = {
		name: "Groombridge 34",
		distance: 11.64,
		planets: 5,
		factionId: "hyacinite",
		faction: "海蓝宝集合体",
		resource1: "陨石",
		resource2: "白银",
		stats: {
			"power": 331,
			"defense": 286,
			"speed": 6,
		},
	};

	instance._224601 = {
		name: "SIPS 1259-4336",
		distance: 11.8,
		planets: 1,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "甲烷",
		resource2: "黄金",
		stats: {
			"power": 513,
			"defense": 164,
			"speed": 9,
		},
	};

	instance._58601 = {
		name: "DX Cancri",
		distance: 11.83,
		planets: 4,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "氦",
		resource2: "甲烷",
		stats: {
			"power": 427,
			"defense": 184,
			"speed": 11,
		},
	};

	instance._151801 = {
		name: "Epsilon Indi",
		distance: 11.83,
		planets: 5,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "宝石",
		resource2: "石油",
		stats: {
			"power": 317,
			"defense": 202,
			"speed": 8,
		},
	};

	instance._13601 = {
		name: "Tau Ceti",
		distance: 11.9,
		planets: 4,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "硅",
		resource2: "硅",
		stats: {
			"power": 491,
			"defense": 413,
			"speed": 6,
		},
	};

	instance._25401 = {
		name: "Gliese 1061",
		distance: 11.94,
		planets: 4,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "铀",
		resource2: "宝石",
		stats: {
			"power": 207,
			"defense": 372,
			"speed": 11,
		},
	};

	instance._10101 = {
		name: "YZ Ceti",
		distance: 12.2,
		planets: 1,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "黄金",
		resource2: "氢",
		stats: {
			"power": 506,
			"defense": 334,
			"speed": 15,
		},
	};

	instance._51801 = {
		name: "Luyten's Star",
		distance: 12.39,
		planets: 1,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "铀",
		resource2: "钛",
		stats: {
			"power": 320,
			"defense": 355,
			"speed": 7,
		},
	};

	instance._223901 = {
		name: "Teegarden's Star",
		distance: 12.4,
		planets: 4,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "白银",
		resource2: "陨石",
		stats: {
			"power": 530,
			"defense": 337,
			"speed": 14,
		},
	};

	instance._35801 = {
		name: "Kapteyn's Star",
		distance: 12.78,
		planets: 1,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "熔岩",
		resource2: "白银",
		stats: {
			"power": 468,
			"defense": 285,
			"speed": 10,
		},
	};

	instance._146301 = {
		name: "AX Microscopii",
		distance: 12.87,
		planets: 5,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "陨石",
		resource2: "白银",
		stats: {
			"power": 311,
			"defense": 466,
			"speed": 6,
		},
	};

	instance._216801 = {
		name: "DO Cephei",
		distance: 13.07,
		planets: 4,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "月岩",
		resource2: "冰",
		stats: {
			"power": 526,
			"defense": 490,
			"speed": 9,
		},
	};

	instance._224101 = {
		name: "DENIS 1048-3956",
		distance: 13.16,
		planets: 1,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "木材",
		resource2: "金属",
		stats: {
			"power": 587,
			"defense": 285,
			"speed": 12,
		},
	};

	instance._179501 = {
		name: "V577 Monocerotis",
		distance: 13.47,
		planets: 1,
		factionId: "hyacinite",
		faction: "海蓝宝集合体",
		resource1: "木炭",
		resource2: "熔岩",
		stats: {
			"power": 430,
			"defense": 411,
			"speed": 7,
		},
	};

	instance._114001 = {
		name: "Wolf 1061",
		distance: 13.91,
		planets: 5,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "金属",
		resource2: "陨石",
		stats: {
			"power": 705,
			"defense": 479,
			"speed": 11,
		},
	};

	instance._194201 = {
		name: "Gliese 473",
		distance: 14.05,
		planets: 1,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "白银",
		resource2: "熔岩",
		stats: {
			"power": 460,
			"defense": 465,
			"speed": 10,
		},
	};

	instance._6501 = {
		name: "van Maanen's Star",
		distance: 14.13,
		planets: 1,
		factionId: "hyacinite",
		faction: "海蓝宝集合体",
		resource1: "黄金",
		resource2: "硅",
		stats: {
			"power": 588,
			"defense": 522,
			"speed": 8,
		},
	};

	instance._1101 = {
		name: "Gliese 1",
		distance: 14.22,
		planets: 3,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "硅",
		resource2: "甲烷",
		stats: {
			"power": 779,
			"defense": 410,
			"speed": 10,
		},
	};

	instance._15301 = {
		name: "WISE 1639-6847",
		distance: 14.57,
		planets: 2,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "金属",
		resource2: "氢",
		stats: {
			"power": 568,
			"defense": 229,
			"speed": 15,
		},
	};

	instance._222401 = {
		name: "Luyten 143-23",
		distance: 14.65,
		planets: 1,
		factionId: "hyacinite",
		faction: "海蓝宝集合体",
		resource1: "熔岩",
		resource2: "甲烷",
		stats: {
			"power": 527,
			"defense": 239,
			"speed": 6,
		},
	};

	instance._72501 = {
		name: "LP 731-58",
		distance: 14.76,
		planets: 4,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "铀",
		resource2: "熔岩",
		stats: {
			"power": 620,
			"defense": 612,
			"speed": 15,
		},
	};

	instance._122601 = {
		name: "Gliese 687",
		distance: 14.77,
		planets: 2,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "月岩",
		resource2: "月岩",
		stats: {
			"power": 426,
			"defense": 317,
			"speed": 12,
		},
	};

	instance._121101 = {
		name: "Gliese 674",
		distance: 14.8,
		planets: 1,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "甲烷",
		resource2: "氢",
		stats: {
			"power": 750,
			"defense": 567,
			"speed": 14,
		},
	};

	instance._79501 = {
		name: "CC 658",
		distance: 15.07,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "月岩",
		resource2: "白银",
		stats: {
			"power": 675,
			"defense": 565,
			"speed": 8,
		},
	};

	instance._1501 = {
		name: "Gliese 1002",
		distance: 15.33,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "黄金",
		resource2: "黄金",
		stats: {
			"power": 410,
			"defense": 321,
			"speed": 6,
		},
	};

	instance._210501 = {
		name: "V1581 Cygni",
		distance: 15.39,
		planets: 1,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "陨石",
		resource2: "陨石",
		stats: {
			"power": 479,
			"defense": 563,
			"speed": 14,
		},
	};

	instance._189701 = {
		name: "Gliese 1245",
		distance: 15.76,
		planets: 1,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "氦",
		resource2: "黄金",
		stats: {
			"power": 708,
			"defense": 278,
			"speed": 10,
		},
	};

	instance._69601 = {
		name: "AD Leonis",
		distance: 16,
		planets: 2,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "宝石",
		resource2: "钛",
		stats: {
			"power": 657,
			"defense": 767,
			"speed": 10,
		},
	};

	instance._148501 = {
		name: "Gliese 832",
		distance: 16.1,
		planets: 2,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "石油",
		resource2: "甲烷",
		stats: {
			"power": 443,
			"defense": 384,
			"speed": 15,
		},
	};

	instance._175601 = {
		name: "Keid",
		distance: 16.45,
		planets: 4,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "木材",
		resource2: "陨石",
		stats: {
			"power": 411,
			"defense": 544,
			"speed": 15,
		},
	};

	instance._155801 = {
		name: "EV Lacertae",
		distance: 16.47,
		planets: 3,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "冰",
		resource2: "陨石",
		stats: {
			"power": 633,
			"defense": 589,
			"speed": 5,
		},
	};

	instance._206902 = {
		name: "70 Ophiuchi",
		distance: 16.59,
		planets: 5,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "氢",
		resource2: "木炭",
		stats: {
			"power": 602,
			"defense": 555,
			"speed": 11,
		},
	};

	instance._136701 = {
		name: "Altair",
		distance: 16.77,
		planets: 1,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "甲烷",
		resource2: "金属",
		stats: {
			"power": 559,
			"defense": 388,
			"speed": 6,
		},
	};

	instance._166402 = {
		name: "Gliese 1005",
		distance: 17,
		planets: 3,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "氦",
		resource2: "甲烷",
		stats: {
			"power": 539,
			"defense": 511,
			"speed": 10,
		},
	};

	instance._185101 = {
		name: "Gliese 1116",
		distance: 17.05,
		planets: 1,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "黄金",
		resource2: "黄金",
		stats: {
			"power": 802,
			"defense": 792,
			"speed": 10,
		},
	};

	instance._79901 = {
		name: "Gliese 445",
		distance: 17.58,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "木炭",
		resource2: "黄金",
		stats: {
			"power": 956,
			"defense": 615,
			"speed": 6,
		},
	};

	instance._95001 = {
		name: "BD +15°262",
		distance: 17.71,
		planets: 1,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "钛",
		resource2: "陨石",
		stats: {
			"power": 595,
			"defense": 664,
			"speed": 8,
		},
	};

	instance._175901 = {
		name: "LP 816-60",
		distance: 17.98,
		planets: 1,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "氦",
		resource2: "陨石",
		stats: {
			"power": 540,
			"defense": 332,
			"speed": 12,
		},
	};

	instance._175902 = {
		name: "Stein 2051",
		distance: 17.98,
		planets: 1,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "氢",
		resource2: "木材",
		stats: {
			"power": 1247,
			"defense": 589,
			"speed": 9,
		},
	};

	instance._37601 = {
		name: "Gliese 205",
		distance: 18.56,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "冰",
		resource2: "陨石",
		stats: {
			"power": 706,
			"defense": 729,
			"speed": 14,
		},
	};

	instance._133601 = {
		name: "Luyten 347-14",
		distance: 18.56,
		planets: 3,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "钛",
		resource2: "甲烷",
		stats: {
			"power": 471,
			"defense": 749,
			"speed": 8,
		},
	};

	instance._203902 = {
		name: "V1054 Ophiuchi",
		distance: 18.72,
		planets: 5,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "木材",
		resource2: "铀",
		stats: {
			"power": 873,
			"defense": 1048,
			"speed": 11,
		},
	};

	instance._135801 = {
		name: "Sigma Draconis",
		distance: 18.81,
		planets: 1,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "铀",
		resource2: "陨石",
		stats: {
			"power": 635,
			"defense": 664,
			"speed": 12,
		},
	};

	instance._39101 = {
		name: "Ross 47",
		distance: 18.88,
		planets: 1,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "冰",
		resource2: "月岩",
		stats: {
			"power": 1396,
			"defense": 698,
			"speed": 14,
		},
	};

	instance._123401 = {
		name: "Luyten 205-128",
		distance: 18.95,
		planets: 5,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "木炭",
		resource2: "硅",
		stats: {
			"power": 1415,
			"defense": 525,
			"speed": 13,
		},
	};

	instance._56501 = {
		name: "Luyten 674-15",
		distance: 19.19,
		planets: 1,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "石油",
		resource2: "宝石",
		stats: {
			"power": 370,
			"defense": 507,
			"speed": 14,
		},
	};

	instance._200001 = {
		name: "Gliese 570",
		distance: 19.26,
		planets: 4,
		factionId: "hyacinite",
		faction: "海蓝宝集合体",
		resource1: "黄金",
		resource2: "陨石",
		stats: {
			"power": 1176,
			"defense": 612,
			"speed": 10,
		},
	};

	instance._107001 = {
		name: "CD -40°971",
		distance: 19.35,
		planets: 2,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "黄金",
		resource2: "氢",
		stats: {
			"power": 805,
			"defense": 587,
			"speed": 11,
		},
	};

	instance._167801 = {
		name: "Eta Cassiopeiae",
		distance: 19.42,
		planets: 1,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "石油",
		resource2: "金属",
		stats: {
			"power": 762,
			"defense": 511,
			"speed": 15,
		},
	};

	instance._204801 = {
		name: "36 Ophiuchi",
		distance: 19.47,
		planets: 2,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "硅",
		resource2: "宝石",
		stats: {
			"power": 1496,
			"defense": 1070,
			"speed": 13,
		},
	};

	instance._164301 = {
		name: "BD +1°4774",
		distance: 19.47,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "宝石",
		resource2: "白银",
		stats: {
			"power": 497,
			"defense": 424,
			"speed": 7,
		},
	};

	instance._211202 = {
		name: "HR 7703",
		distance: 19.74,
		planets: 3,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "甲烷",
		resource2: "白银",
		stats: {
			"power": 1331,
			"defense": 554,
			"speed": 14,
		},
	};

	instance._24201 = {
		name: "82 Eridani",
		distance: 19.77,
		planets: 5,
		factionId: "hyacinite",
		faction: "海蓝宝集合体",
		resource1: "黄金",
		resource2: "月岩",
		stats: {
			"power": 595,
			"defense": 956,
			"speed": 14,
		},
	};

	instance._100801 = {
		name: "BD -11°375",
		distance: 19.95,
		planets: 1,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "金属",
		resource2: "钛",
		stats: {
			"power": 1095,
			"defense": 685,
			"speed": 8,
		},
	};

	instance._124101 = {
		name: "EG 372",
		distance: 20.03,
		planets: 4,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "氢",
		resource2: "冰",
		stats: {
			"power": 863,
			"defense": 583,
			"speed": 6,
		},
	};

	instance._139701 = {
		name: "Gliese 784",
		distance: 20.24,
		planets: 1,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "甲烷",
		resource2: "硅",
		stats: {
			"power": 1624,
			"defense": 1208,
			"speed": 12,
		},
	};

	instance._103201 = {
		name: "Gliese 581",
		distance: 20.26,
		planets: 1,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "氢",
		resource2: "甲烷",
		stats: {
			"power": 857,
			"defense": 927,
			"speed": 5,
		},
	};

	instance._219102 = {
		name: "EQ Pegasi",
		distance: 20.38,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "木材",
		resource2: "陨石",
		stats: {
			"power": 1232,
			"defense": 921,
			"speed": 11,
		},
	};

	instance._105801 = {
		name: "HN Librae",
		distance: 20.45,
		planets: 3,
		factionId: "kitrinos",
		faction: "基特里诺斯公司",
		resource1: "月岩",
		resource2: "氢",
		stats: {
			"power": 1478,
			"defense": 1182,
			"speed": 7,
		},
	};

	instance._204702 = {
		name: "Gliese 3877",
		distance: 20.62,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "冰",
		resource2: "氦",
		stats: {
			"power": 550,
			"defense": 863,
			"speed": 15,
		},
	};

	instance._50401 = {
		name: "QY Aurigae",
		distance: 20.74,
		planets: 1,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "熔岩",
		resource2: "宝石",
		stats: {
			"power": 1439,
			"defense": 863,
			"speed": 12,
		},
	};

	instance._116901 = {
		name: "Wolf 629",
		distance: 21.18,
		planets: 1,
		factionId: "carnelian",
		faction: "红玉髓抵抗军",
		resource1: "石油",
		resource2: "月岩",
		stats: {
			"power": 1570,
			"defense": 577,
			"speed": 10,
		},
	};

	instance._159101 = {
		name: "Gliese 1128",
		distance: 21.28,
		planets: 4,
		factionId: "moviton",
		faction: "莫维顿辛迪加",
		resource1: "氦",
		resource2: "月岩",
		stats: {
			"power": 830,
			"defense": 652,
			"speed": 6,
		},
	};

	instance._113301 = {
		name: "Gliese 625",
		distance: 21.47,
		planets: 2,
		factionId: "prasnian",
		faction: "普拉斯尼帝国",
		resource1: "氢",
		resource2: "金属",
		stats: {
			"power": 1769,
			"defense": 631,
			"speed": 14,
		},
	};

	return instance;

}());


