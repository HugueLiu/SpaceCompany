Game.buildingData = (function () {

    var instance = {};

    var baseProducerBuilding = {
        type: BUILDING_TYPE.PRODUCER,
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        costType: COST_TYPE.FIXED
    };

    // 能源
    instance.energyT1 = $.extend({}, baseProducerBuilding, {
        name: '木炭引擎',
        desc: '燃烧木炭以产生稳定的能源。',
        resource: 'energy',
        resourcePerSecond: { 'energy': 2, 'charcoal': -1 },
        cost: { 'metal': 50, 'gem': 25 }
    });

    instance.energyT2 = $.extend({}, baseProducerBuilding, {
        name: '太阳能板',
        desc: '从太阳缓慢获取能源，无需消耗任何资源。',
        resource: 'energy',
        resourcePerSecond: { 'energy': 1.5 },
        cost: { 'metal': 30, 'gem': 35 }
    });

    instance.energyT3 = $.extend({}, baseProducerBuilding, {
        name: '甲烷发电站',
        desc: '燃烧来自金星的强力甲烷来满足所有电力需求。',
        resource: 'energy',
        resourcePerSecond: { 'energy': 23, 'methane': -6 },
        cost: { 'lunarite': 110, 'titanium': 90 }
    });

    instance.energyT4 = $.extend({}, baseProducerBuilding, {
        name: '核电站',
        desc: '利用核裂变产生大量能源。',
        resource: 'energy',
        resourcePerSecond: { 'energy': 153, 'uranium': -7 },
        cost: { 'lunarite': 20000, 'titanium': 10000 }
    });

    instance.energyT5 = $.extend({}, baseProducerBuilding, {
        name: '磁流体发电机',
        desc: '磁流体发电机利用熔岩作为燃料发电。由于熔岩的极端温度，可以一次性产生大量能源。',
        resource: 'energy',
        resourcePerSecond: { 'energy': 191, 'lava': -11 },
        cost: { 'lunarite': 25000, 'gem': 30000, 'silver': 20000 }
    });

    instance.energyT6 = $.extend({}, baseProducerBuilding, {
        name: '聚变反应堆',
        desc: '在聚变反应中，两个轻原子核融合形成一个更重的原子时会释放能量。这与恒星中发生的反应相同，能产生大量能源。',
        resource: 'energy',
        resourcePerSecond: { 'energy': 273, 'hydrogen': -10, 'helium': -10 },
        cost: { 'lunarite': 30000, 'titanium': 20000, 'silicon': 15000 }
    });

    // 等离子体
    instance.plasmaT1 = $.extend({}, baseProducerBuilding, {
        name: '超级加热器',
        desc: '超级加热器向氢发射电流，将其转化为等离子体物质。',
        resource: 'plasma',
        resourcePerSecond: { 'energy': -1000, 'hydrogen': -10, 'plasma': 1 },
        cost: { 'lunarite': 75000, 'gem': 68000, 'silicon': 59000 }
    });

    instance.plasmaT2 = $.extend({}, baseProducerBuilding, {
        name: '等离子坑',
        desc: '这个装置通过向气体云发射强能量束将氦转化为等离子体。',
        resource: 'plasma',
        resourcePerSecond: { 'energy': -8500, 'helium': -80, 'plasma': 10 },
        cost: { 'lunarite': 810000, 'silicon': 720000, 'meteorite': 970 }
    });

    instance.plasmaT3 = $.extend({}, baseProducerBuilding, {
        name: '电子浴',
        desc: '在电子中沐浴。能出什么问题呢？',
        resource: 'plasma',
        resourcePerSecond: { 'energy': -15000, 'helium': -100, 'hydrogen': -100, 'plasma': 140 },
        cost: { 'lunarite': 6200000, 'silicon': 5900000, 'meteorite': 12100 }
    });

    // 铀
    instance.uraniumT1 = $.extend({}, baseProducerBuilding, {
        name: '研磨机',
        desc: '粉碎铀以便从深矿井中轻松运输。',
        resource: 'uranium',
        resourcePerSecond: { 'uranium': 1 },
        cost: { 'lunarite': 4000, 'titanium': 2000, 'gold': 2000 }
    });

    instance.uraniumT2 = $.extend({}, baseProducerBuilding, {
        name: '立方传送器',
        desc: '将深处的岩块传送到地表，使铀更容易开采。',
        resource: 'uranium',
        resourcePerSecond: { 'energy': -40, 'uranium': 9 },
        cost: { 'lunarite': 10000, 'uranium': 80, 'oil': 10000 }
    });

    instance.uraniumT3 = $.extend({}, baseProducerBuilding, {
        name: '铀浓缩器',
        desc: '浓缩器提高开采铀的质量，使岩石中更多的铀可以被利用。',
        resource: 'uranium',
        resourcePerSecond: { 'energy': -180, 'uranium': 61 },
        cost: { 'lunarite': 21700, 'titanium': 23000, 'silicon': 13500 }
    });

    instance.uraniumT4 = $.extend({}, baseProducerBuilding, {
        name: '黄饼回收器',
        desc: '回收用过的铀以二次利用。这大大增加了每秒可用的铀量。',
        resource: 'uranium',
        resourcePerSecond: { 'energy': -436, 'uranium': 235 },
        cost: { 'lunarite': 93100, 'methane': 47000, 'meteorite': 830 }
    });

    // 熔岩
    instance.lavaT1 = $.extend({}, baseProducerBuilding, {
        name: '耐热坩埚',
        desc: '你可以使用改良的坩埚来收集熔岩并储存以备后用。',
        resource: 'lava',
        resourcePerSecond: { 'lava': 1 },
        cost: { 'lunarite': 4000, 'gem': 7000 }
    });

    instance.lavaT2 = $.extend({}, baseProducerBuilding, {
        name: '熔岩提取器',
        desc: '自动快速地从火山中提取熔岩。',
        resource: 'lava',
        resourcePerSecond: { 'energy': -58, 'lava': 7 },
        cost: { 'lunarite': 16000, 'titanium': 14000, 'silicon': 6000 }
    });

    instance.lavaT3 = $.extend({}, baseProducerBuilding, {
        name: '火成挤压机',
        desc: '与其出去寻找熔岩，不如用热量和压力自己制造更加方便。',
        resource: 'lava',
        resourcePerSecond: { 'energy': -237, 'lava': 43 },
        cost: { 'lunarite': 69000, 'titanium': 57000, 'silicon': 39000 }
    });

    instance.lavaT4 = $.extend({}, baseProducerBuilding, {
        name: '火山造熔机',
        desc: '痛苦的熔炉，从矿石中倾泻出熔岩。',
        resource: 'lava',
        resourcePerSecond: { 'energy': -689, 'lava': 187 },
        cost: { 'lunarite': 298000, 'gold': 121000, 'meteorite': 750 }
    });

    // 石油
    instance.oilT1 = $.extend({}, baseProducerBuilding, {
        name: '小型泵',
        desc: '建造一个小型泵从地下提取石油。',
        resource: 'oil',
        resourcePerSecond: { 'oil': 1 },
        cost: { 'metal': 60, 'gem': 20 }
    });

    instance.oilT2 = $.extend({}, baseProducerBuilding, {
        name: '抽油机',
        desc: '抽油机比小型泵大得多，可以工业化生产石油，但需要大量能源。',
        resource: 'oil',
        resourcePerSecond: { 'energy': -4, 'oil': 10 },
        cost: { 'metal': 250, 'gem': 80, 'oil': 50 }
    });

    instance.oilT3 = $.extend({}, baseProducerBuilding, {
        name: '油田',
        desc: '油田是通常在沙漠中发现的大型开阔地，地下蕴藏着丰富的石油。',
        resource: 'oil',
        resourcePerSecond: { 'energy': -12, 'oil': 63 },
        cost: { 'lunarite': 2400, 'titanium': 2700, 'silicon': 3900 }
    });

    instance.oilT4 = $.extend({}, baseProducerBuilding, {
        name: '海上钻井平台',
        desc: '海上钻井平台是漂浮在海洋中的巨型结构，从海底提取石油。',
        resource: 'oil',
        resourcePerSecond: { 'energy': -44, 'oil': 246 },
        cost: { 'lunarite': 19400, 'titanium': 16800, 'meteorite': 760 }
    });

    // 金属
    instance.metalT1 = $.extend({}, baseProducerBuilding, {
        name: '矿工',
        desc: '为你的矿工建造一把镐。',
        resource: 'metal',
        unlocked: true,
        resourcePerSecond: { 'metal': 1 },
        cost: { 'metal': 10, 'wood': 5 }
    });

    instance.metalT2 = $.extend({}, baseProducerBuilding, {
        name: '重型钻机',
        desc: '重型钻机大量开采金属。',
        resource: 'metal',
        resourcePerSecond: { 'energy': -2, 'metal': 8 },
        cost: { 'metal': 160, 'gem': 60, 'oil': 50 }
    });

    instance.metalT3 = $.extend({}, baseProducerBuilding, {
        name: '巨型钻机',
        desc: '巨型钻机以巨大速度开采金属。',
        resource: 'metal',
        resourcePerSecond: { 'energy': -9, 'metal': 108 },
        cost: { 'lunarite': 2800, 'gem': 3400, 'silicon': 4100 }
    });

    instance.metalT4 = $.extend({}, baseProducerBuilding, {
        name: '量子钻机',
        desc: '量子钻机弯曲时空连续体，以超越物理极限的速度获取金属。',
        resource: 'metal',
        resourcePerSecond: { 'energy': -24, 'metal': 427 },
        cost: { 'lunarite': 29000, 'gold': 18700, 'meteorite': 900 }
    });

    // 宝石
    instance.gemT1 = $.extend({}, baseProducerBuilding, {
        name: '宝石矿工',
        desc: '建造一把改良的镐来开采宝石。',
        resource: 'gem',
        unlocked: true,
        resourcePerSecond: { 'gem': 1 },
        cost: { 'metal': 15, 'gem': 10 }
    });

    instance.gemT2 = $.extend({}, baseProducerBuilding, {
        name: '高级钻机',
        desc: '高级钻机大量开采宝石。由于所需钻头的强度，它比重型钻机慢。',
        resource: 'gem',
        resourcePerSecond: { 'energy': -2, 'gem': 4 },
        cost: { 'metal': 120, 'gem': 200, 'oil': 60 }
    });

    instance.gemT3 = $.extend({}, baseProducerBuilding, {
        name: '钻石钻机',
        desc: '钻石钻机是太阳系中最强的钻机之一，可以比以往任何设备更快地收集宝石。',
        resource: 'gem',
        resourcePerSecond: { 'energy': -15, 'gem': 89 },
        cost: { 'lunarite': 3400, 'gem': 8000, 'silicon': 4500 }
    });

    instance.gemT4 = $.extend({}, baseProducerBuilding, {
        name: '碳炔钻机',
        desc: '碳炔钻机是太阳系中最强的钻机之一，可以比以往任何设备更快地收集宝石。',
        resource: 'gem',
        resourcePerSecond: { 'energy': -40, 'gem': 358 },
        cost: { 'lunarite': 21000, 'gem': 27000, 'meteorite': 800 }
    });

    // 木炭
    instance.charcoalT1 = $.extend({}, baseProducerBuilding, {
        name: '燃木炉',
        desc: '为你的燃木炉建造一把铲子。',
        resource: 'charcoal',
        resourcePerSecond: { 'wood': -2, 'charcoal': 1 },
        cost: { 'metal': 10, 'wood': 5 }
    });

    instance.charcoalT2 = $.extend({}, baseProducerBuilding, {
        name: '熔炉',
        desc: '熔炉使用电加热器产生热量将木材转化为木炭。由于热量增加，过程更加高效。',
        resource: 'charcoal',
        resourcePerSecond: { 'energy': -3, 'wood': -6, 'charcoal': 4 },
        cost: { 'metal': 80, 'wood': 40, 'oil': 100 }
    });

    instance.charcoalT3 = $.extend({}, baseProducerBuilding, {
        name: '工业窑',
        desc: '这些大型窑比以前的方法更有效，用更少的木材制造与熔炉相同数量的木炭。',
        resource: 'charcoal',
        resourcePerSecond: { 'energy': -13, 'wood': -56, 'charcoal': 53 },
        cost: { 'lunarite': 3500, 'gem': 6200, 'silicon': 3800 }
    });

    instance.charcoalT4 = $.extend({}, baseProducerBuilding, {
        name: '森林焚烧机',
        desc: '森林？什么森林？',
        resource: 'charcoal',
        resourcePerSecond: { 'energy': -34, 'wood': -148, 'charcoal': 210 },
        cost: { 'lunarite': 15800, 'lava': 12500, 'meteorite': 560 }
    });

    // 木材
    instance.woodT1 = $.extend({}, baseProducerBuilding, {
        name: '伐木工',
        desc: '为你的伐木工建造一把斧头。',
        resource: 'wood',
        unlocked: true,
        resourcePerSecond: { 'wood': 1 },
        cost: { 'metal': 10, 'wood': 5 }
    });

    instance.woodT2 = $.extend({}, baseProducerBuilding, {
        name: '激光切割机',
        desc: '激光切割机比斧头更快地切割树木（和手指），并且产出更多木材。',
        resource: 'wood',
        resourcePerSecond: { 'energy': -4, 'wood': 6 },
        cost: { 'metal': 50, 'gem': 90, 'oil': 40 }
    });

    instance.woodT3 = $.extend({}, baseProducerBuilding, {
        name: '大规模砍伐机',
        desc: '这台机器是我们失去雨林的原因。至少我们得到了很多木材！',
        resource: 'wood',
        resourcePerSecond: { 'energy': -16, 'wood': 74 },
        cost: { 'lunarite': 3000, 'titanium': 2700, 'silicon': 2500 }
    });

    instance.woodT4 = $.extend({}, baseProducerBuilding, {
        name: '生物质注入器',
        desc: '使用地球上随处可见的废旧材料，将其粉碎并尽可能紧密地压制成可用的木材。',
        resource: 'wood',
        resourcePerSecond: { 'energy': -43, 'wood': 297 },
        cost: { 'lunarite': 16000, 'oil': 31200, 'meteorite': 490 }
    });

    // 硅
    instance.siliconT1 = $.extend({}, baseProducerBuilding, {
        name: '强化喷灯',
        desc: '这种喷灯可以立即将沙子转化为硅，但只能小规模操作。制造它需要外星资源。',
        resource: 'silicon',
        resourcePerSecond: { 'silicon': 1 },
        cost: { 'lunarite': 150, 'titanium': 30 }
    });

    instance.siliconT2 = $.extend({}, baseProducerBuilding, {
        name: '海滨炙烤器',
        desc: '这个工具几乎融化海滩的一部分来大规模获取硅。',
        resource: 'silicon',
        resourcePerSecond: { 'energy': -18, 'silicon': 9 },
        cost: { 'lunarite': 500, 'gem': 1200, 'oil': 1600 }
    });

    instance.siliconT3 = $.extend({}, baseProducerBuilding, {
        name: '海滩毁灭者',
        desc: '这种大规模杀伤性武器已被重新命名，现在悬停在海岸线上方，或者说是它们的残骸上方。',
        resource: 'silicon',
        resourcePerSecond: { 'energy': -53, 'silicon': 40 },
        cost: { 'lunarite': 3000, 'gem': 8300, 'silver': 2400 }
    });

    instance.siliconT4 = $.extend({}, baseProducerBuilding, {
        name: '沙漠毁灭者',
        desc: '这艘大型飞船围绕行星运行，聚焦于撒哈拉沙漠，从地球上撕取沙子并在高温下将其转化为硅。',
        resource: 'silicon',
        resourcePerSecond: { 'energy': -138, 'silicon': 157 },
        cost: { 'lunarite': 20000, 'silicon': 17700, 'meteorite': 400 }
    });

    // 月岩
    instance.lunariteT1 = $.extend({}, baseProducerBuilding, {
        name: '月球工人',
        desc: '贿赂当地工人来开采你的月岩。',
        resource: 'lunarite',
        resourcePerSecond: { 'lunarite': 1 },
        cost: { 'gem': 500 }
    });

    instance.lunariteT2 = $.extend({}, baseProducerBuilding, {
        name: '低重力钻机',
        desc: '这些钻机几乎漂浮着！',
        resource: 'lunarite',
        resourcePerSecond: { 'energy': -20, 'lunarite': 10 },
        cost: { 'metal': 1000, 'gem': 600, 'oil': 400 }
    });

    instance.lunariteT3 = $.extend({}, baseProducerBuilding, {
        name: '月球采石场',
        desc: '这个采石场对月球表面的破坏程度之大，从地球上都能看到。',
        resource: 'lunarite',
        resourcePerSecond: { 'energy': -70, 'lunarite': 53 },
        cost: { 'lunarite': 8000, 'gem': 5000, 'silicon': 3500 }
    });

    instance.lunariteT4 = $.extend({}, baseProducerBuilding, {
        name: '行星挖掘机',
        desc: '这台大型机器深入地球内部寻找地核附近的月岩矿池。这就是月球上金属的原始来源。',
        resource: 'lunarite',
        resourcePerSecond: { 'energy': -182, 'lunarite': 207 },
        cost: { 'titanium': 45000, 'ice': 37000, 'meteorite': 500 }
    });

    // 甲烷
    instance.methaneT1 = $.extend({}, baseProducerBuilding, {
        name: '吸尘器',
        desc: '吸入甲烷的同时清洁行星！',
        resource: 'methane',
        resourcePerSecond: { 'methane': 1 },
        cost: { 'lunarite': 50 }
    });

    instance.methaneT2 = $.extend({}, baseProducerBuilding, {
        name: '吸力挖掘机',
        desc: '比任何东西吸力都大！',
        resource: 'methane',
        resourcePerSecond: { 'energy': -16, 'methane': 8 },
        cost: { 'lunarite': 10000, 'gem': 800, 'oil': 600 }
    });

    instance.methaneT3 = $.extend({}, baseProducerBuilding, {
        name: '太空奶牛场',
        desc: '这里饲养着经过基因改造持续产生甲烷的奶牛。',
        resource: 'methane',
        resourcePerSecond: { 'energy': -49, 'methane': 37 },
        cost: { 'lunarite': 10000, 'titanium': 9000, 'silicon': 4100 }
    });

    instance.methaneT4 = $.extend({}, baseProducerBuilding, {
        name: '热液喷口',
        desc: '从土卫六海底深处的热液喷口收集气体。',
        resource: 'methane',
        resourcePerSecond: { 'energy': -132, 'methane': 149 },
        cost: { 'lunarite': 52000, 'helium': 47000, 'meteorite': 390 }
    });

    // 钛
    instance.titaniumT1 = $.extend({}, baseProducerBuilding, {
        name: '探险家',
        desc: '雇佣探险家在火星表面寻找被风露出的钛。',
        resource: 'titanium',
        resourcePerSecond: { 'titanium': 1 },
        cost: { 'gem': 1000 }
    });

    instance.titaniumT2 = $.extend({}, baseProducerBuilding, {
        name: '月岩钻机',
        desc: '这些月岩钻机极其强大，用于从火星地壳中开采钛。',
        resource: 'titanium',
        resourcePerSecond: { 'energy': -13, 'titanium': 9 },
        cost: { 'lunarite': 200, 'gem': 800, 'oil': 1000 }
    });

    instance.titaniumT3 = $.extend({}, baseProducerBuilding, {
        name: '五重钻机',
        desc: '这是一台改装为拥有5个钻头的采矿机，大大增加了每秒获取的资源量。',
        resource: 'titanium',
        resourcePerSecond: { 'energy': -46, 'titanium': 49 },
        cost: { 'lunarite': 14000, 'gem': 11000, 'silicon': 5600 }
    });

    instance.titaniumT4 = $.extend({}, baseProducerBuilding, {
        name: '泰坦钻机',
        desc: '据说这台强大的钻机是千年前由泰坦族亲手使用的。',
        resource: 'titanium',
        resourcePerSecond: { 'energy': -123, 'titanium': 197 },
        cost: { 'lunarite': 63000, 'gold': 27000, 'meteorite': 600 }
    });

    // 黄金
    instance.goldT1 = $.extend({}, baseProducerBuilding, {
        name: '火箭机器人',
        desc: '由甲烷驱动，这个机器人在小行星中侦察黄金矿脉。',
        resource: 'gold',
        resourcePerSecond: { 'gold': 1 },
        cost: { 'gem': 200, 'methane': 50 }
    });

    instance.goldT2 = $.extend({}, baseProducerBuilding, {
        name: '小行星毁灭者',
        desc: '穿越小行星开采黄金。比简单的机器人效率高得多。',
        resource: 'gold',
        resourcePerSecond: { 'energy': -19, 'gold': 8 },
        cost: { 'lunarite': 500, 'gem': 1500, 'oil': 1000 }
    });

    instance.goldT3 = $.extend({}, baseProducerBuilding, {
        name: '死星Jr',
        desc: '那不是月亮！那是太空站！这台机器切开小行星，露出中心的所有黄金。',
        resource: 'gold',
        resourcePerSecond: { 'energy': -81, 'gold': 51 },
        cost: { 'lunarite': 17000, 'silver': 11500, 'silicon': 8200 }
    });

    instance.goldT4 = $.extend({}, baseProducerBuilding, {
        name: '时间调节器',
        desc: '通过量子物理学加速时间，以生产更多的黄金。',
        resource: 'gold',
        resourcePerSecond: { 'energy': -223, 'gold': 211 },
        cost: { 'lunarite': 61000, 'helium': 15700, 'meteorite': 600 }
    });

    // 白银
    instance.silverT1 = $.extend({}, baseProducerBuilding, {
        name: '侦察飞船',
        desc: '侦察飞船在小行星带中搜索嵌入小行星中的白银碎片。',
        resource: 'silver',
        resourcePerSecond: { 'silver': 1 },
        cost: { 'lunarite': 100, 'titanium': 20 }
    });

    instance.silverT2 = $.extend({}, baseProducerBuilding, {
        name: '星际激光',
        desc: '切穿小行星以找到其中心的白银矿脉。',
        resource: 'silver',
        resourcePerSecond: { 'energy': -24, 'silver': 13 },
        cost: { 'lunarite': 350, 'gem': 900, 'oil': 1200 }
    });

    instance.silverT3 = $.extend({}, baseProducerBuilding, {
        name: '大贝莎',
        desc: '这台大型太空钻机以一战时期的榴弹炮命名，是专门设计用于开采小行星白银的机器。',
        resource: 'silver',
        resourcePerSecond: { 'energy': -65, 'silver': 53 },
        cost: { 'lunarite': 19500, 'silver': 18200, 'silicon': 11000 }
    });

    instance.silverT4 = $.extend({}, baseProducerBuilding, {
        name: '原子炮',
        desc: '这门强大的大炮环绕海王星运行，可以将小行星表面原子化，揭示其中的白银。',
        resource: 'silver',
        resourcePerSecond: { 'energy': -170, 'silver': 208 },
        cost: { 'lunarite': 85100, 'oil': 93800, 'meteorite': 520 }
    });

    // 氢
    instance.hydrogenT1 = $.extend({}, baseProducerBuilding, {
        name: '氢收集器',
        desc: '这个收集器围绕木星运行，寻找可以带回地球储存的氢。',
        resource: 'hydrogen',
        resourcePerSecond: { 'hydrogen': 1 },
        cost: { 'lunarite': 6000, 'titanium': 4800 }
    });

    instance.hydrogenT2 = $.extend({}, baseProducerBuilding, {
        name: '气体磁铁',
        desc: '磁铁吸引氢气，增加每秒收集量。',
        resource: 'hydrogen',
        resourcePerSecond: { 'energy': -63, 'hydrogen': 5 },
        cost: { 'lunarite': 10800, 'titanium': 9600, 'silicon': 6600 }
    });

    instance.hydrogenT3 = $.extend({}, baseProducerBuilding, {
        name: '电解池',
        desc: '这些在地球上制造，可以在持续供应能源的情况下将水转化为氢。',
        resource: 'hydrogen',
        resourcePerSecond: { 'energy': -234, 'hydrogen': 28 },
        cost: { 'silver': 37200, 'gold': 34200, 'silicon': 25800 }
    });

    instance.hydrogenT4 = $.extend({}, baseProducerBuilding, {
        name: '兴登堡开挖',
        desc: '不知怎么的，它竟然能用。',
        resource: 'hydrogen',
        resourcePerSecond: { 'energy': -613, 'hydrogen': 113 },
        cost: { 'lunarite': 172000, 'methane': 134000, 'meteorite': 710 }
    });

    // 氦
    instance.heliumT1 = $.extend({}, baseProducerBuilding, {
        name: '氦无人机',
        desc: '氦无人机侦察土星区域，找出富含氦的区域并缓慢开采。',
        resource: 'helium',
        resourcePerSecond: { 'helium': 1 },
        cost: { 'lunarite': 8400, 'titanium': 6000 }
    });

    instance.heliumT2 = $.extend({}, baseProducerBuilding, {
        name: '氦运输船',
        desc: '这艘巨型运输船装载大量氦，通过太空真空将它从土星运送到地球。',
        resource: 'helium',
        resourcePerSecond: { 'energy': -72, 'helium': 11 },
        cost: { 'lunarite': 12600, 'titanium': 10200, 'silicon': 8400 }
    });

    instance.heliumT3 = $.extend({}, baseProducerBuilding, {
        name: '形态压缩机',
        desc: '压缩机将氦密集地压缩到一个小空间中，以便轻松运回地球。',
        resource: 'helium',
        resourcePerSecond: { 'energy': -248, 'helium': 57 },
        cost: { 'lunarite': 63000, 'titanium': 43800, 'silicon': 35400 }
    });

    instance.heliumT4 = $.extend({}, baseProducerBuilding, {
        name: '气态巨行星掠取器',
        desc: '带着大桶飞入气态巨行星的大气层，这是我们目前最好的计划！',
        resource: 'helium',
        resourcePerSecond: { 'energy': -670, 'helium': 232 },
        cost: { 'lunarite': 255000, 'titanium': 173000, 'meteorite': 770 }
    });

    // 冰
    instance.iceT1 = $.extend({}, baseProducerBuilding, {
        name: '冰镐',
        desc: '冰镐是开采冰冻水最简单的方法，虽然最便宜，但也最慢。',
        resource: 'ice',
        resourcePerSecond: { 'ice': 1 },
        cost: { 'lunarite': 17800, 'gem': 19300 }
    });

    instance.iceT2 = $.extend({}, baseProducerBuilding, {
        name: '冰钻',
        desc: '冰钻比冰镐更有效，每秒获得更多的冰。但它使用电力。',
        resource: 'ice',
        resourcePerSecond: { 'energy': -83, 'ice': 9 },
        cost: { 'lunarite': 23900, 'titanium': 21200, 'silicon': 19600 }
    });

    instance.iceT3 = $.extend({}, baseProducerBuilding, {
        name: '海洋冷冻机',
        desc: '借助先进技术，你现在可以将地球上的水转化为以前只在冥王星上才能找到的高质量冰。',
        resource: 'ice',
        resourcePerSecond: { 'energy': -397, 'ice': 65 },
        cost: { 'lunarite': 117000, 'titanium': 86000, 'silicon': 73000 }
    });

    instance.iceT4 = $.extend({}, baseProducerBuilding, {
        name: '冰冻先生',
        desc: '这个机器人是太阳系中最酷的家伙。',
        resource: 'ice',
        resourcePerSecond: { 'energy': -1135, 'ice': 278 },
        cost: { 'wood': 379000, 'helium': 14000, 'meteorite': 1500 }
    });

    // 陨石
    instance.meteoriteT1 = $.extend({}, baseProducerBuilding, {
        name: '陨石打印机',
        desc: '建造一种自动生产陨石的方式，无需你做任何事情。',
        resource: 'meteorite',
        resourcePerSecond: { 'plasma': -3, 'meteorite': 1 },
        cost: { 'lunarite': 100000, 'silicon': 60000 }
    });

    instance.meteoriteT2 = $.extend({}, baseProducerBuilding, {
        name: '陨石网',
        desc: '陨石网使用浸泡在高放射性液体中的纳米纤维制成，强度足以物理捕捉小行星带中的陨石。需要等离子体将小行星精炼为可用的陨石矿。',
        resource: 'meteorite',
        resourcePerSecond: { 'plasma': -21, 'meteorite': 8 },
        cost: { 'lunarite': 940000, 'uranium': 490000, 'silicon': 510000 }
    });

    // 科学
    instance.scienceT1 = $.extend({}, baseProducerBuilding, {
        name: '家庭科学套件',
        desc: '建造属于你的小型实验室来开始生产科学。每个每秒产生0.1科学点。',
        resource: 'science',
        resourcePerSecond: { 'science': 0.1 },
        cost: { 'metal': 20, 'gem': 15, 'wood': 10 }
    });

    instance.scienceT2 = $.extend({}, baseProducerBuilding, {
        name: '高中科学',
        desc: '建造一个更有效的实验室，以显著更快的速度继续你的科学探索。每个每秒产生1科学点。',
        resource: 'science',
        resourcePerSecond: { 'science': 1 },
        cost: { 'metal': 1000, 'gem': 200, 'wood': 500 }
    });

    instance.scienceT3 = $.extend({}, baseProducerBuilding, {
        name: '大学实验室',
        desc: '建造一个更好的实验室来进一步探索科学领域。每个每秒产生10科学点。',
        resource: 'science',
        resourcePerSecond: { 'science': 10 },
        cost: { 'metal': 17000, 'gem': 4700, 'wood': 9600 }
    });

    // 太阳系
    instance.rocketFuelT1 = $.extend({}, baseProducerBuilding, {
        name: '化工厂',
        desc: '化工厂用于自动制造火箭燃料。',
        resource: 'rocketFuel',
        resourcePerSecond: { 'rocketFuel': 0.2 },
        cost: { 'metal': 1000, 'gem': 750, 'wood': 500 }
    });

    instance.rocketFuelT2 = $.extend({}, baseProducerBuilding, {
        name: '氧化室',
        desc: '氧化室比化工厂更快更高效地制造火箭燃料。',
        resource: 'rocketFuel',
        resourcePerSecond: { 'rocketFuel': 1.5 },
        cost: { 'metal': 12000, 'gem': 8300, 'wood': 6800 }
    });

    instance.rocketFuelT3 = $.extend({}, baseProducerBuilding, {
        name: '联氨催化剂',
        desc: '这些利用甲烷等温室气体加速制造火箭燃料所需的化学反应。',
        resource: 'rocketFuel',
        resourcePerSecond: { 'rocketFuel': 20 },
        cost: { 'titanium': 140000, 'silicon': 96300, 'gold': 78600 }
    });
    
    return instance;
}());
