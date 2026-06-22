// 大同旅游景点解说词数据库
const SPOTS_DATA = [
  {
    "id": 1,
    "name": "云冈石窟",
    "nameEn": "Yungang Grottoes",
    "cover": "🏔️",
    "brief": "世界文化遗产，北魏皇家石窟，距今1500余年。一窟一段北魏史，一佛一位帝王",
    "briefEn": "UNESCO World Heritage Site. Each cave tells a chapter of Northern Wei history, each Buddha represents an emperor",
    "steps": [
      {
        "title": "景区入口观景台·入园第一站",
        "titleEn": "Entrance Viewing Platform · First Stop",
        "content": "大家先别着急往里走，咱们在观景台先整体捋清楚游览路线，避免走回头路浪费体力。整片石窟分为东、中、西三段，我们全程从东向西单向参观。最东边的昙曜五窟是开凿最早的，带着浓郁西域游牧风格，一佛对应一位北魏皇帝；中间的五华洞是皇家鼎盛时期打造，汉化风格最明显，浮雕细节最丰富；西边的四、十四、十五窟是孝文帝迁都洛阳后，当地百姓自发雕刻的洞窟。全程步道都是单向通行，台阶较多，大家放慢脚步，咱们一站一站慢慢看。",
        "contentEn": "Please stay at the viewing platform for a moment to get a full view of the cliff. The grottoes are divided into three sections, and we will visit them from east to west without backtracking. The eastern Tanyao Five Caves were built first, featuring Western Regions artistic styles, each giant Buddha representing an emperor of Northern Wei. The middle caves are the imperial masterpieces with fully Sinicized statues. The western caves were carved by local civilians after the capital moved to Luoyang. The route is one-way, please take your time."
      },
      {
        "title": "第一、二窟·双子塔洞窟",
        "titleEn": "Caves 1 & 2 · Twin Pagoda Caves",
        "content": "现在我们来到一、二双子洞窟，这是冯太后主持汉化改革时期修建的。洞窟中间都立着连通地面和窟顶的仿木石塔，也是石窟从单独供奉大佛，转向拜佛塔的过渡样式。重点看一号洞窟石塔背面，刻着维摩诘和文殊菩萨辩论的场景。右边维摩诘一身汉族文人长袍，身体前倾，像是正在侃侃而谈；左边文殊手持如意，神态从容冷静，千年前高僧辩经的画面完整定格在石头上。这里佛像衣纹已经摆脱西域厚重质感，像流水一样柔和，能清晰看见汉文化慢慢融入佛教造像。",
        "contentEn": "Caves 1 and 2 were constructed under Empress Dowager Feng during the Sinicization reforms. A stone pagoda stands in the center of each cave, marking a transition of Buddhist worship. The highlight is the relief of Vimalakirti debating with Manjusri on the back of the pagoda in Cave 1. Vimalakirti wears Han-style scholar robes, while Manjusri holds a ruyi scepter. The soft, rippling drapery shows the influence of traditional Chinese art."
      },
      {
        "title": "第三窟·云冈最大未完工洞窟",
        "titleEn": "Cave 3 · The Largest Unfinished Grotto",
        "content": "眼前这座三窟是云冈占地面积、开凿深度最大的洞窟，也是一座北魏皇家烂尾工程。当年孝文帝决定迁都洛阳，工匠全部调走，前室大面积区域直接停工荒废。不过后室的三尊大佛是北魏晚期到隋唐年间补刻完成，佛像脸型圆润饱满，肩膀宽厚，已经有后世隋唐佛像丰腴慈祥的气质。大家仔细看主佛右手边的胁侍菩萨，璎珞、披帛线条流畅细腻，是云冈汉化造像里保存最完整的巨型菩萨，千万不要错过。",
        "contentEn": "Cave 3 is the largest unfinished grotto at Yungang. Construction stopped abruptly when Emperor Xiaowen moved the capital to Luoyang. The three giant statues on the rear platform were finished between late Northern Wei and Sui-Tang dynasties. The attendant Bodhisattva on Amitabha's right side boasts delicate carved pearls and silky scarves, one of the best-preserved mature Sinicized sculptures here."
      },
      {
        "title": "第四窟·迁都后民间造像窟",
        "titleEn": "Cave 4 · Civilian Cave After Capital Relocation",
        "content": "494年都城迁往洛阳后，平城不再是皇城，没有国库资金支撑，本地百姓自发凑钱开凿了这座小窟。这里造像有一个很鲜明的特点，叫做\"秀骨清像\"。佛像脸型清瘦、脖颈修长、肩膀削窄，衣摆层层散开如同飞鸟展翅，带着魏晋文人清冷飘逸的气质。虽然长年风化磨损严重，但修长柔和的身形，依旧能看出当年百姓在动荡年代，借雕刻佛像寄托内心安宁。",
        "contentEn": "After the capital moved to Luoyang, ordinary local believers built Cave 4 with private donations. Its statues represent the classic \"slender bones and elegant features\" style popular in late Northern Wei. The thin faces, sloped shoulders and layered robe hems reflect the aesthetic of Wei-Jin scholars, carved to pray for peace in turbulent times."
      },
      {
        "title": "第五、六窟·太和皇家双窟",
        "titleEn": "Caves 5 & 6 · Taihe Imperial Twin Caves",
        "content": "五、六两窟是冯太后和孝文帝倾尽国库打造的皇家双窟，也是当年推行汉化政策的宣传展板。五窟拥有云冈最高十七米大佛，一身宽大汉服，胸口系中式布带。大佛右手边这尊拱手菩萨最有灵气，身形修长，衣带仿佛被微风向后吹起，把中式美学\"气韵生动\"刻在了石头上。隔壁六窟整座洞窟没有一处留白，十五米双层石塔柱上，全是佛祖生平浮雕。大家看塔柱背面的逾城出家故事，明明是印度佛教传说，画面里所有人都穿着北魏汉族官员的宽袖官服，这就是古人借佛教故事推行汉化的巧妙手段。",
        "contentEn": "Caves 5 and 6 were fully funded by the imperial treasury to promote the Sinicization reforms. Cave 5 holds the tallest Buddha (17m) in Yungang, dressed in wide Han robes. The standing Bodhisattva beside its right knee shows vivid flowing ribbons blown by wind. Every wall and pillar in Cave 6 is covered with Buddhist life stories. Even the Indian tale of Prince Siddhartha leaving the palace features Northern Wei official costumes, a typical example of cultural localization in ancient Chinese art."
      },
      {
        "title": "第七、八窟·丝绸之路多元融合窟",
        "titleEn": "Caves 7 & 8 · Silk Road Fusion Caves",
        "content": "咱们现在到七、八窟，这两窟是实打实的丝路文化\"混血展厅\"。北魏中期和西域、波斯、古印度商贸往来鼎盛，世界各地的纹样、神像全都融合刻进岩壁。大家停在八窟门口，看向拱门左手内侧，是三头八臂的摩醯首罗天，也就是古印度的湿婆，托着日月，身下卧着一头写实大牛；拱门右手是五头六臂的鸠摩罗天，骑孔雀。国内皇家石窟里直接完整复刻印度教主神，仅此一处。岩壁还能找到希腊忍冬花纹、罗马式石柱，一洞就能看完亚欧古代多元文明交融的痕迹。",
        "contentEn": "Caves 7 and 8 perfectly reflect cultural exchanges along the Silk Road. Stop at the entrance of Cave 8 to see two Hindu deities carved on the arch wall. On the left is Mahesvara (Shiva) with three heads and eight arms riding an ox; on the right stands Kumara with five heads and six arms on a peacock. Greek honeysuckle patterns and Roman-style columns can also be found here, showing the integration of Eurasian ancient civilizations."
      },
      {
        "title": "第九、十窟·天宫伎乐石雕殿堂",
        "titleEn": "Caves 9 & 10 · Celestial Music Stone Palace",
        "content": "九、十窟外立面直接雕成了中式皇家大殿的样子，粗壮八角石柱刻满飞龙，氛围感拉满。重点看九窟通往后室的门楣上方，一整排飞天乐伎。手里乐器分两类：中原传统排箫、横笛，还有西域传来的曲项琵琶、竖箜篌。工匠把坚硬石头雕出丝绸飘带的轻盈感，完整还原北魏宫廷宴乐的场景，特别有画面感。",
        "contentEn": "The facades of Caves 9 and 10 are carved like traditional Chinese imperial palaces with dragon-decorated octagonal stone pillars. Above the inner doorway of Cave 9 lies a group of flying apsaras and celestial musicians. They hold both traditional Chinese flutes and Western Region pipas and konghous. The silky ribbons carved on stone perfectly restore the banquet music scene of Northern Wei court."
      },
      {
        "title": "第十一、十二、十三窟·石头音乐厅",
        "titleEn": "Caves 11, 12 & 13 · Stone Concert Hall",
        "content": "三连窟各有看点，分开跟大家说。十一窟藏着著名的太和七年造像题记，是研究北魏民间佛教社团最珍贵的文字实物；十二窟外号\"音乐窟\"，上层北壁整整十四尊天宫乐伎，一人一件专属乐器，吹弹敲击的手指动态都清晰刻出，业内都称它是立体版中国古代音乐教科书；十三窟主尊是十三米高交脚弥勒大佛，有个绝妙力学巧思。大佛右臂横向延伸重量极大，工匠特意雕刻一尊四臂肌肉力士死死托住手臂，把建筑承重结构和雕刻艺术结合在了一起。",
        "contentEn": "The three connected caves each have unique highlights. Cave 11 preserves an important inscription recording Buddhist folk groups in Northern Wei. Cave 12 is known as the Music Cave. Fourteen celestial musicians line the upper wall, each holding a different instrument, vividly recording ancient Chinese music culture. The 13-meter Maitreya Buddha in Cave 13 has a four-armed supporting giant under its right arm, an ingenious combination of structural engineering and sculpture art."
      },
      {
        "title": "第十四、十五窟·万佛静穆窟",
        "titleEn": "Caves 14 & 15 · Cave of Ten Thousand Buddhas",
        "content": "孝文帝迁都洛阳之后，平城彻底失去皇家扶持，百姓生活困苦，没钱雕刻大型佛像，就开凿了十四、十五窟。十四窟岩层风化严重，大部分造像已经损毁，简单路过即可；十五窟是标准万佛窟，三面墙壁密密麻麻排布上万尊十几厘米高的小坐佛，排列规整有序。光线照进来时，层层浮雕形成深浅光影，整片洞窟安静肃穆，是当年百姓祈福寄托心愿的地方。",
        "contentEn": "After the capital moved to Luoyang, local civilians built Caves 14 and 15 without imperial funding. Most sculptures in Cave 14 have been destroyed by weathering. Cave 15, the Cave of Ten Thousand Buddhas, is covered with thousands of tiny uniform seated Buddhas. The layered relief creates a solemn, tranquil atmosphere for ancient people's prayers."
      },
      {
        "title": "昙曜五窟入口·石窟灵魂",
        "titleEn": "Tanyao Five Caves Entrance · Soul of Yungang",
        "content": "咱们现在来到云冈最核心的昙曜五窟，也是整座石窟开凿的起点。公元460年，高僧昙曜奉文成帝旨意开凿，这里有一个核心知识点大家一定要记住：五尊巨型大佛，分别对应北魏五位开国帝王，在当时的理念里，皇帝就是现世佛陀，把皇权和神权牢牢结合在了一起。从十六窟到二十窟依次对应：道武帝、太武帝、景穆太子、文成帝、明元帝，咱们按顺序逐个参观。",
        "contentEn": "We have arrived at the Tanyao Five Caves, the origin and soul of Yungang Grottoes. Carved in 460 AD under Monk Tanyao, each giant Buddha represents one emperor of Northern Wei. At that time, people believed emperors were living Buddhas, combining imperial power with religious authority. We will visit Cave 16 to Cave 20 in order."
      },
      {
        "title": "第十六窟·道武帝拓跋珪立佛",
        "titleEn": "Cave 16 · Emperor Daowu Standing Buddha",
        "content": "十六窟主尊是十三点五米释迦立佛，对应北魏开国皇帝拓跋珪。佛像高鼻梁、宽额头，双眼睁大直视前方，神情坚毅，完美还原游牧开国君主的霸气。服饰已经出现早期汉化特征，胸口系着巨大布结，长袍垂直下垂，远看造型很像现代西裤，很多游客第一眼都会觉得新奇。",
        "contentEn": "The 13.5-meter standing Buddha in Cave 16 stands for Tuoba Gui, the founding emperor of Northern Wei. With wide forehead and wide-open eyes, it shows the powerful bearing of a nomadic conqueror. The robe with a big chest knot reveals early Sinicized costume features."
      },
      {
        "title": "第十七窟·太武帝拓跋焘交脚弥勒",
        "titleEn": "Cave 17 · Emperor Taiwu Cross-legged Maitreya",
        "content": "这尊十五点六米交脚弥勒对应太武帝拓跋焘，他统一北方，却发起了全国灭佛运动。工匠特意把整尊佛像开凿在低于地面的基坑里，视觉上下沉压抑，用来隐喻他一生功过对立的矛盾。大佛底座还能看见硬朗石雕石狮，可惜东侧墙壁的礼佛浮雕风化严重，只剩残缺痕迹，大家可以仔细辨认一下。",
        "contentEn": "The 15.6-meter cross-legged Maitreya in Cave 17 represents Emperor Taiwu, who unified northern China but suppressed Buddhism. The Buddha is carved in a sunken pit to symbolize his contradictory life of merit and fault. Stone lions under the statue are still visible, though the worship relief on the east wall is severely weathered."
      },
      {
        "title": "第十八窟·景穆太子万佛袈裟大佛",
        "titleEn": "Cave 18 · Crown Prince Ten-Thousand-Buddha Robe",
        "content": "十八窟对应未登基就病逝的太子拓跋晃，当年灭佛期间，他暗中保护无数僧人，保全佛法火种。最震撼的就是大佛身上的万佛袈裟，整件衣身密密麻麻刻满微型坐佛，全世界仅此一例，寓意佛法因太子得以延续。大佛头顶左侧还有写实西域弟子浮雕，深眼高鼻，写实程度堪比真人肖像，一定要凑近细看。",
        "contentEn": "Cave 18 is dedicated to Crown Prince Tuoba Huang, who secretly protected monks during the anti-Buddhist movement. The Buddha's kasaya robe is fully covered with thousands of tiny Buddha reliefs, a unique carving masterpiece worldwide. The Western Regions disciple sculptures above the Buddha's head are extremely lifelike."
      },
      {
        "title": "第十九窟·文成帝主窟",
        "titleEn": "Cave 19 · Emperor Wencheng Main Cave",
        "content": "十九窟主佛高十六点八米，是云冈体量最大的佛像，对应下令恢复佛教的文成帝，也是云冈石窟真正的总策划。这里布局设计非常巧妙，主尊坐于洞窟内部，大门左右两个独立耳洞各一尊大佛，构成三世佛格局，把整面山体打造成完整佛国空间，进门之前先拍外景全景，气势特别宏大。",
        "contentEn": "The 16.8-meter Buddha in Cave 19 is the largest statue in Yungang, representing Emperor Wencheng who restored Buddhism. Two huge Buddha statues sit in the side alcoves outside the main cave, forming a grand layout of Three Buddhas of Past, Present and Future."
      },
      {
        "title": "第二十窟·露天大佛",
        "titleEn": "Cave 20 · The Open-Air Grand Buddha",
        "content": "终于来到云冈的门面——露天大佛，高十三点七米。原本它藏在洞窟内部，北宋辽代崖壁前墙坍塌，才意外展露在天光下，成为全世界游客必打卡的地标。大家注意区分：大佛左侧菩萨已经全部损毁，右手边这尊胁侍立佛完整保留，波浪卷发、紧贴身体的西域袈裟，是纯正早期犍陀罗风格，没有经过汉化改造。身后锋利硬朗的火焰背光，藏着鲜卑游牧民族雄浑原始的气质，也是整趟游览的收尾重头戏。",
        "contentEn": "The 13.7-meter open-air Buddha in Cave 20 is the symbol of Yungang. The front cliff wall collapsed in ancient times, exposing the statue to open air. The attendant Buddha on its right side is fully preserved with original Western Regions carving style, while the left Bodhisattva was destroyed in the collapse. The sharp flame mandorla behind the main Buddha retains the primitive, powerful aesthetic of early Xianbei art."
      },
      {
        "title": "游览总结·石上的北魏史书",
        "titleEn": "Tour Summary · Northern Wei History in Stone",
        "content": "咱们整趟云冈石窟游览就结束了，简单帮大家梳理记忆：最早昙曜五窟西域雄浑，中期五华洞汉化华美，晚期民间洞窟清冷简约。一窟一段北魏历史，一佛一位帝王，整块武州山崖，就是刻在石头上的北魏王朝史书。",
        "contentEn": "Our tour of Yungang Grottoes comes to an end. To sum up: the early Tanyao Five Caves feature bold Western Regions art, the middle caves show gorgeous Sinicized carvings, and the late civilian caves carry quiet, simple aesthetics. The whole cliff records the complete history of Northern Wei Dynasty in stone."
      }
    ]
  },
  {
    "id": 2,
    "name": "大同古城墙",
    "nameEn": "Datong Ancient City Wall",
    "cover": "🏯",
    "brief": "七公里明城环古邑，日落登墙赏灯华。保存最完整的北方府城城墙",
    "briefEn": "7.24km Ming Dynasty city wall, best visited at sunset for lantern views. The most complete northern city wall in China.",
    "steps": [
      {
        "title": "永泰南门登城口·明代遗存",
        "titleEn": "Yongtai South Gate · Ming Dynasty Relic",
        "content": "大同古城墙周长7.24公里，依托明代原有城墙修复，是保存最完整的北方府城城墙。推荐下午四点以后登城，既能看落日，又能等天黑灯笼点亮，全程可以步行，也能租单车绕城一圈。城墙砖内还留存北魏时期夯土遗迹，一墙藏两朝历史。",
        "contentEn": "The 7.24-kilometer city wall is built on original Ming foundations with Northern Wei rammed earth inside. Visit late afternoon for sunset and ancient lantern views; bicycles are available for rent.",
        "photoSpot": "城楼正面、城门门洞",
        "photoSpotEn": "City tower front view, gate archway"
      },
      {
        "title": "西段城墙·华严寺观景位",
        "titleEn": "West Wall · Huayan Temple Viewpoint",
        "content": "往西走，城墙外侧正对华严寺，站在这里能平视华严宝塔，古城高低古建层层错落，适合拍摄古风全景照，没有现代高楼入镜，氛围感极强。",
        "contentEn": "The west section overlooks Huayan Temple and its wooden pagoda, perfect for ancient-style panoramic photos without modern buildings in sight.",
        "photoSpot": "远眺华严寺木塔",
        "photoSpotEn": "Distant view of Huayan Temple wooden pagoda"
      },
      {
        "title": "四牌楼观景台·古城中心",
        "titleEn": "Four Archways Platform · Ancient City Center",
        "content": "此处是城墙最高点位，低头能看清古城中心四牌楼，四条明清古街交汇，鼓楼、纯阳宫、凤临阁尽收眼底，白天市井烟火、夜晚灯火连片，两种完全不同风景。",
        "contentEn": "This highest platform overlooks the central Four Archways and four ancient streets, offering both lively daytime street views and brilliant night lantern scenery.",
        "photoSpot": "下方四牌楼十字古街",
        "photoSpotEn": "Four Archways cross street view below"
      },
      {
        "title": "北段城墙·边塞雄风",
        "titleEn": "North Wall · Northern Frontier Fortress",
        "content": "北段城墙视野开阔，天气好能远眺恒山山脉，墙体马面、敌楼完整复刻明代边防设计，古代大同作为九边重镇，防御工事的气势在这里最直观。",
        "contentEn": "The north wall offers distant views of Heng Mountain. The complete ancient ramparts and watchtowers show Datongs history as a key northern border fortress.",
        "photoSpot": "城北远山远景",
        "photoSpotEn": "Distant mountain view from north wall"
      },
      {
        "title": "东城墙日落打卡点·暖金光影",
        "titleEn": "East Wall Sunset Spot · Golden Glow",
        "content": "全城最佳日落机位，夕阳斜打青砖，整面城墙呈暖金色，傍晚灯笼逐一点亮，古风大片都在这里拍摄，拍完顺着台阶下城逛古城夜市。",
        "contentEn": "The east wall is the best spot for sunset. Golden sunlight covers the bricks, and ancient lanterns light up one by one after dusk.",
        "photoSpot": "夕阳落在城楼剪影",
        "photoSpotEn": "Sunset silhouette on the city tower"
      },
      {
        "title": "下城总结·游玩建议",
        "titleEn": "Exit Summary · Visiting Tips",
        "content": "古城墙游玩建议：日落前一小时登城，先看白日古建全景，再等夜景灯火；步行体力不足就租单车，全程平缓不累，免费外围拍照，登城票价亲民。",
        "contentEn": "Visit one hour before sunset for both daylight and night lantern views. Bicycles are available for easy touring; you can also take free photos outside the wall without climbing up.",
        "photoSpot": "",
        "photoSpotEn": ""
      }
    ]
  },
  {
    "id": 3,
    "name": "华严寺",
    "nameEn": "Huayan Temple",
    "cover": "🏯",
    "brief": "辽金双殿藏国宝，露齿菩萨冠华夏。国内唯一向东而开的皇家寺院",
    "briefEn": "Only east-facing imperial temple in China. Houses the Oriental Venus Bodhisattva and largest Liao-Jin Buddha hall.",
    "steps": [
      {
        "title": "山门广场·东向奇观",
        "titleEn": "Gate Square · East-Facing Wonder",
        "content": "大家站门口先留意一个特殊细节，国内绝大多数寺庙都是坐北朝南，唯独华严寺大门朝东。辽代皇室是契丹族，有以东为尊的习俗，当年这里还是辽国皇家宗庙，规格远超普通寺院。整座寺院分上下两院，下院大雄宝殿、上院薄伽教藏殿是两大国宝，咱们按顺序慢慢走。",
        "contentEn": "Unlike most Chinese temples facing south, Huayan Temple opens to the east, following the Khitan royal custom of respecting the east. It used to be the imperial temple of the Liao Dynasty. We will visit the Great Buddha Hall and the Buddha Scripture Hall, two national treasures in sequence.",
        "photoSpot": "大门全景，拍辽代东向布局",
        "photoSpotEn": "Full view of the east-facing gate, capturing the unique Liao-Dynasty layout"
      },
      {
        "title": "普光明殿·过渡空间",
        "titleEn": "Puguangming Hall · Transition Hall",
        "content": "眼前普光明殿是后世重修的过渡殿，殿内三尊佛像为明代原塑。很多游客直接快步穿过，其实殿两侧壁画复刻辽代佛传故事，能提前了解整座寺院的佛教主题，简单停留两分钟再进主殿。",
        "contentEn": "This hall serves as a transition space with three Ming Buddha statues. The wall murals reproduce Buddhist tales of the Liao Dynasty, helping you understand the temples core culture.",
        "photoSpot": "殿内明代三世佛泥塑",
        "photoSpotEn": "Ming Dynasty three Buddha clay sculptures inside the hall"
      },
      {
        "title": "大雄宝殿·四朝合一国宝",
        "titleEn": "Main Hall · National Treasure of Four Dynasties",
        "content": "这是国内现存最大辽金佛殿，号称四朝合一：辽代地基、金代大殿、明代佛像、清代壁画。殿顶两端琉璃鸱吻高达4.5米，比故宫太和殿的还要高大，左边是金代原物，右边明代复刻，对比就能看出工艺差别。殿内五方金代泥塑面容雄浑，壁画铺满整面后墙，阳光斜照光影绝美。",
        "contentEn": "This is Chinas largest Buddha hall of Liao and Jin dynasties, combining relics from four dynasties. The 4.5-meter glazed roof ornaments are taller than those in the Forbidden City. Five golden Buddha statues and grand wall murals are preserved inside.",
        "photoSpot": "殿顶一对巨型鸱吻、殿内金代五方佛",
        "photoSpotEn": "Giant roof ornaments and Five-Direction Buddha statues inside"
      },
      {
        "title": "薄伽教藏殿·辽代原构灵魂",
        "titleEn": "Sutra Hall · Soul of Liao Architecture",
        "content": "整座华严寺的灵魂就在这间辽代原构殿堂，梁思成先生称殿内藏经小木阁为海内孤品。佛坛29尊辽代彩塑全部保存完整，最出名就是这尊合掌露齿胁侍菩萨，眉眼温柔、浅笑含蓄，被学者称作东方维纳斯。古人造像特意让塑像身体微微前倾，既方便清理落灰，视觉上也像向游人俯身行礼，细节满是巧思。殿内靠墙双层小木阁复刻天宫楼阁，千万不要错过细看。",
        "contentEn": "This intact Liao hall houses 29 original painted sculptures. The smiling Bodhisattva with folded hands is praised as Oriental Venus. The multi-story wooden scripture cabinets along the walls are a unique national treasure rarely seen elsewhere.",
        "photoSpot": "正中合掌露齿萨萨特写（禁止闪光灯）",
        "photoSpotEn": "Close-up of the smiling Bodhisattva (no flash allowed)"
      },
      {
        "title": "华严宝塔·纯木登高",
        "titleEn": "Huayan Wooden Pagoda · Climb for Panorama",
        "content": "这座木塔是国内第二大纯楯卭木塔，仅次于应县木塔，不用一颗铁钉。地宫由上百吨黄铜打造，登顶可以360度俯瞄大同老城，四牌楼、九龙壁、古城墙尽收眼底。风大的时候塔身会轻微晃动，楯卭结构的韧性展现得淋漓尽致。",
        "contentEn": "This pure wooden pagoda is second only to the Yingxian Wooden Pagoda, built entirely with mortise and tenon joints without any nails. Climb to the top for a full panoramic view of Datong Ancient City.",
        "photoSpot": "塔顶俯瞄大同古城全景",
        "photoSpotEn": "Panoramic view of Datong Ancient City from pagoda top"
      },
      {
        "title": "出口总结四代精华",
        "titleEn": "Exit Summary · Four-Dynasty Essence",
        "content": "华严寺走完，咱们总结重点：东向山门记奚丹习俗，大雄宝殿看巨型鸱吕，薄伽教藏殿打卡露齿萨萨，木塔登高俯瞄全城，一院集齐辽、金、明、清四代古建艺术。",
        "contentEn": "To sum up, Huayan Temple preserves architectural treasures from four dynasties. Dont miss the east gate, giant roof ornaments, smiling Bodhisattva and the wooden pagoda for city views.",
        "photoSpot": "",
        "photoSpotEn": ""
      }
    ]
  },
  {
    "id": 4,
    "name": "善化寺",
    "nameEn": "Shanhua Temple",
    "cover": "🏜",
    "brief": "唐基金殿塑金身，南寺清幽藏辽珍。全国布局最完整的辽金寺院",
    "briefEn": "Most complete Liao-Jin temple layout in China. Tang foundations, Jin Hall, quiet and peaceful.",
    "steps": [
      {
        "title": "山门广场·唐基辽韵",
        "titleEn": "Gate Square · Tang Foundation",
        "content": "善化寺始建唐代开元年间，金代大规模重修，是全国布局最完整的辽金寺院。和华严寺热闹不同，这里游客偏少，安静适合静心看古建。寺院中轴线对称工整，从前到后层层抬高，唐代高台地基清晰可见。",
        "contentEn": "Built in Tang Dynasty and reconstructed in Jin Dynasty, Shanhua Temple boasts the most complete layout of Liao-Jin monasteries in China. Its symmetrical central axis and Tang stone foundations are clearly visible.",
        "photoSpot": "中轴线完整对称全景",
        "photoSpotEn": "Full symmetrical view of the central axis"
      },
      {
        "title": "天王殿·金代原建",
        "titleEn": "Heavenly Kings Hall · Original Jin Structure",
        "content": "天王殿是金代原生建筑，四根木柱历经近千年不腐，殿内四大天王塑像神态威严，衣纹线条保留宋代绘画风格，游客大多匆匆路过，不妨细看铠甲褶皱的雕刻细节。",
        "contentEn": "This hall retains original Jin wood structures. The Four Heavenly Kings statues feature delicate robe lines following Song painting aesthetics.",
        "photoSpot": "四大天王泥塑",
        "photoSpotEn": "Four Heavenly Kings clay sculptures"
      },
      {
        "title": "三圣殿·金代彩塑",
        "titleEn": "Three Saints Hall · Jin Painted Sculptures",
        "content": "三圣殿供奉阿弥陀佛与两位胁侍，整组金代彩塑身形舒展，墙面留存大幅金代壁画，题材为佛祖讲法。大殿横梁跨度极大，古代木构承重技术肉眼可见。",
        "contentEn": "The hall preserves intact Jin Dynasty sculptures of three Western Buddhas and grand ancient murals. Its huge wooden beams show superb ancient structural technology.",
        "photoSpot": "殿内金代西方三圣彩塑",
        "photoSpotEn": "Jin Dynasty Three Saints painted sculptures inside"
      },
      {
        "title": "大雄宝殿·辽代主殿",
        "titleEn": "Main Hall · Liao Dynasty Structure",
        "content": "寺院最高处这座大殿是纯正辽代遗构，殿内五方佛金塑是全寺精华，两侧二十四诸天塑像神态无一重复，武将、文官、天神形象区分鲜明。殿顶坡度平缓，是典型辽代建筑特征，和明清陡屋顶差别很大。",
        "contentEn": "The rear hall is a genuine Liao building with five golden Buddha statues and twenty-four heavenly guardians. Its gentle roof slope is a typical feature of Liao architecture.",
        "photoSpot": "五方佛、两侧二十四诸天",
        "photoSpotEn": "Five-Direction Buddhas and Twenty-four Heavenly Guardians"
      },
      {
        "title": "普贤阁·辽金配楼",
        "titleEn": "Samantabhadra Pavilion · Liao-Jin Side Pavilion",
        "content": "右侧双层普贤阁与左侧文殊阁遗址对称，纯木楼阁轻盈精巧，登阁可平视大雄宝殿屋顶，近距离欣赏辽代斗拱层层叠加的结构美感。",
        "contentEn": "This two-story wooden pavilion stands symmetrically with the ruins of Manjushri Pavilion. Climb up to closely observe the elaborate Liao bracket sets.",
        "photoSpot": "双层木阁侧面古建特写",
        "photoSpotEn": "Side view of the two-story wooden pavilion"
      },
      {
        "title": "出口总结·两寺对比",
        "titleEn": "Exit Summary · Two-Temple Comparison",
        "content": "善化寺核心看点：完整辽金中轴线、金代彩塑、辽代大雄宝殿。喜欢古建的朋友一定要对比华严寺，一座皇家华丽、一座清幽古朴，两种辽金寺院风格一次看全。",
        "contentEn": "Shanhua Temple features intact Liao-Jin layout and exquisite golden sculptures. Compare it with Huayan Temple to experience two different styles of ancient imperial monasteries.",
        "photoSpot": "",
        "photoSpotEn": ""
      }
    ]
  },
  {
    "id": 5,
    "name": "大同九龙壁",
    "nameEn": "Datong Nine-Dragon Wall",
    "cover": "🐉",
    "brief": "三龙壁中大同最大最早，明初琉璃冠天下。24色釉料烧制，600年不褪色",
    "briefEn": "Oldest and largest Nine-Dragon Wall in China, built in Ming Dynasty with 24-color glaze, unchanged for 600 years.",
    "steps": [
      {
        "title": "入口观景围栏·明代王府照壁",
        "titleEn": "Entrance · Ming Dynasty Prince Mansion Screen Wall",
        "content": "全国现存三座九龙壁，大同这座年代最早、尺寸最大，比北京北海、故宫九龙壁早三百年，是明代代王朱桂府邸门前照壁。站在外围围栏就能完整看清九条巨龙，买票进院内可以近距离看琉璃釉色细节。",
        "contentEn": "Among Chinas three famous Nine-Dragon Walls, Datongs is the oldest and largest, built 300 years earlier than the ones in Beijing, as the screen wall of Prince Dais mansion in Ming Dynasty.",
        "photoSpot": "九龙壁完整横向全景",
        "photoSpotEn": "Full horizontal panoramic view of the Nine-Dragon Wall"
      },
      {
        "title": "壁身九龙主画面·24色琉璃",
        "titleEn": "Main Wall · 24-Color Glazed Dragons",
        "content": "整面壁长45.5米，24种天然琉璃釉料烧制，九条龙腾跃在云海波涛之间，正中黄龙居中，两侧八龙左右对称。雨天水汽折射，壁面会浮现淡淡彩虹，是独有的奇观。龙爪、鳞片全部单独烧制拼接，六百多年釉色依旧鲜亮。",
        "contentEn": "The 45.5-meter wall uses 24 kinds of colored glaze. Nine dragons fly amid clouds and waves. A faint rainbow reflection can be seen on rainy days due to light refraction.",
        "photoSpot": "正中黄龙特写、九条龙连贯全景",
        "photoSpotEn": "Close-up of central yellow dragon, full view of all nine dragons"
      },
      {
        "title": "须弥底座浮雕·刚柔对比",
        "titleEn": "Sumero Base · Delicate Reliefs",
        "content": "大家低头看底座须弥座，布满小鹿、飞马、牡丹、莲花浮雕，线条细腻柔和，和上方威严巨龙形成刚柔对比，很多游客只看大龙，忽略底座精美纹样。",
        "contentEn": "The stone base is carved with deer, flying horses and flowers, forming a soft contrast with the powerful dragons above. Do not miss these delicate reliefs.",
        "photoSpot": "底座异兽、花卉浮雕",
        "photoSpotEn": "Animal and flower reliefs on the stone base"
      },
      {
        "title": "墙壁背面纹饰·双面琉璃",
        "titleEn": "Back Wall · Rare Double-Sided Glaze",
        "content": "很多人逛完正面直接离开，其实墙壁背面完整烧制山水、花鸟琉璃图案，工艺和正面完全一致，双面琉璃照壁国内极其少见。",
        "contentEn": "Few visitors walk around to the back, which is fully decorated with glazed mountains, rivers and flowers. Double-sided glazed screen walls are extremely rare in China.",
        "photoSpot": "背面山水琉璃",
        "photoSpotEn": "Back-side landscape glaze decoration"
      },
      {
        "title": "出口总结·三宝口诀",
        "titleEn": "Exit Summary · Three Key Highlights",
        "content": "记住三个关键点：大同九龙壁全国最大最早、24色琉璃、雨天有彩虹光影，二十分钟打卡一座明代国宝，性价比很高。",
        "contentEn": "Three key highlights: the oldest and largest nine-dragon wall, 24-color glaze, and rainbow reflection on rainy days.",
        "photoSpot": "",
        "photoSpotEn": ""
      }
    ]
  },
  {
    "id": 6,
    "name": "悬空寺",
    "nameEn": "Hanging Temple",
    "cover": "🧱",
    "brief": "北岳恒山绝壁之上，儒释道三教合一的千年奇寺",
    "briefEn": "Built into the cliff of Mount Heng, a millennium-old temple uniting Confucianism, Buddhism and Taoism",
    "steps": [
      {
        "title": "山脚摩崖 \"壮观\" 石刻",
        "titleEn": "Cliff Inscription · Magnificent Calligraphy",
        "content": "准备登楼之前，咱们先看岩壁上这两个大字 \"壮观\"，是唐代诗仙李白亲笔题写。传说李白亲眼见到悬空寺悬在绝壁上，觉得普通的 \"壮观\" 二字不足以形容震撼，特意在 \"壮\" 字右边多加一个点，意思是比壮观还要再胜一分。后来明代旅行家徐霞客到访，直接在游记称这里是 \"天下巨观\"，诗仙和古代第一驴友双双盖章，这里也是拍摄寺庙全景最好的机位。",
        "contentEn": "Before climbing up, look at the giant cliff inscription \"Magnificent\", written by Li Bai, the great poet of Tang Dynasty. Legend says he added an extra dot on the character \"Zhuang\" to express that the temple is even more spectacular than the word itself. Xu Xiake, the famous Ming traveler, also praised it as the grandest wonder under heaven. This is the best spot to take full-view photos of the temple.",
        "photoSpot": "仰拍石刻 + 整座悬空寺同框全景",
        "photoSpotEn": "Upward shot of inscription + full temple panorama"
      },
      {
        "title": "石阶上行·佛堂院",
        "titleEn": "Stone Steps · Buddha Hall Courtyard",
        "content": "顺着石阶上来，我们抵达南端的佛堂院，是明清时期扩建出来的规整院落。正中大雄宝殿供奉三身佛，明代泥塑造型饱满柔和。大家留意两侧钟鼓楼，传统平地寺庙都是左右对称修建，但这里崖壁空间狭窄，工匠顺着高低地势错开搭建，不追求对称，靠层次平衡视觉，小细节就能看出古人空间规划的巧思。",
        "contentEn": "Climb the stone steps to reach the Buddha Hall Courtyard expanded in Ming and Qing dynasties. The Grand Hall houses three Buddha statues with smooth, full Ming-style clay sculpture. Different from traditional symmetric bell and drum towers, here they are built at different heights due to limited cliff space, showing the ingenious layout design of ancient craftsmen.",
        "photoSpot": "大雄宝殿三身佛泥塑、错落钟鼓楼",
        "photoSpotEn": "Three-Buddha clay sculpture, staggered bell and drum towers"
      },
      {
        "title": "凌空栈桥·千年建筑核心解密",
        "titleEn": "Sky Bridge · Engineering Secrets Revealed",
        "content": "走到栈桥大家低头仔细看，很多游客都会有一个误区：以为底下这些细细的木柱子撑起整座寺庙，其实完全不是。这些立木大多轻轻一推就能晃动，只起到安抚游客心理、辅助缓冲的作用。真正承重的核心是深埋岩壁的铁飞梁。工匠把桐油浸泡防腐的铁杉木打入崖壁石槽，木梁尾部塞木楔，打入深处自动撑开，原理和现在的膨胀螺丝一模一样，全靠山体岩石承载整座寺庙重量。最高处离地面 58 米，差不多 20 层楼高度，恐高的朋友靠内侧慢行。",
        "contentEn": "Many visitors mistakenly believe the thin wooden stilts under the walkway support the whole temple, but they only serve as psychological comfort. The real load-bearing structure is iron-hemlock beams buried deep in the cliff. Wedges at the end of beams expand to lock them tightly in rock sockets, just like modern expansion bolts. The highest point of the temple is 58 meters above ground, please walk close to the inner cliff if you fear heights.",
        "photoSpot": "栈道外侧崖壁、下方支撑木柱远景",
        "photoSpotEn": "Outer cliff face from walkway, distant view of support stilts"
      },
      {
        "title": "南楼三层：纯阳宫、三官殿、雷音殿",
        "titleEn": "South Pavilion · Three Sacred Halls",
        "content": "现在进入南楼，三层楼阁佛道神像混合供奉。一层三官殿供奉天地水三官，神像飘带融合魏晋仙气与明清世俗彩绘；顶层雷音殿取名源自佛祖讲法声震如雷，空间虽然狭小，但层层堆叠的斗拱、藻井，在极小空间里营造出厚重的仪式感，适合拍古风特写。",
        "contentEn": "The South Pavilion enshrines both Daoist and Buddhist gods. The Hall of Three Officials has delicate painted statues with flowing ribbons. The top Leiyin Hall features elaborate layered brackets and caisson ceilings, creating strong ritual atmosphere within a tiny space.",
        "photoSpot": "三官殿彩塑飘带、雷音殿藻井斗拱特写",
        "photoSpotEn": "Painted ribbon details in Three Officials Hall, caisson brackets in Leiyin Hall"
      },
      {
        "title": "空中飞栈北楼·核心三教殿",
        "titleEn": "North Pavilion · Hall of Three Religions",
        "content": "穿过窄窄的空中飞栈，我们来到整座悬空寺最核心的三教殿，这也是国内极其罕见的三圣同殿景观。正中间是佛教佛祖释迦牟尼，左侧儒家圣人孔子，右侧道祖老子。古时候儒释道三派经常互相争论地位，但是大同自古胡汉交融、文化包容，工匠直接把三位精神始祖并排安放，完美诠释中华文化 \"和而不同\" 的包容内核。古代百姓来这里，求学拜孔子、求平安拜佛祖、祈顺遂拜老子，一座寺庙就能满足所有人的精神寄托。",
        "contentEn": "The top Three Religions Hall on the North Pavilion is the cultural core of the temple. Three founders are enshrined side by side: Sakyamuni in the center, Confucius on the left, Laozi on the right. In ancient times, Confucianism, Buddhism and Daoism often competed with each other, yet this temple embodies the inclusive Chinese philosophy of \"harmony without uniformity\". Ancient locals came here to pray for study, peace and fortune all in one place.",
        "photoSpot": "三教殿释迦、孔子、老子三圣同框特写",
        "photoSpotEn": "Close-up of three sages side by side in the hall"
      },
      {
        "title": "下山出口·游览总结",
        "titleEn": "Exit · Tour Summary",
        "content": "咱们整趟悬空寺游览就结束了。云冈石窟是往石头里 \"做减法\" 开凿而成，悬空寺是在悬崖上 \"做加法\" 搭建木构，一减一加，构成大同两大世界级古迹。这座寺庙没有宏大的规模，却把古代顶尖力学、木构建筑、三教合一哲学全部浓缩在绝壁之上，一千五百年屹立不倒，也是它能入选全球十大奇险建筑的根本原因。最后提醒大家，栈道狭窄单向通行，保管好随身物品，拍照不赶路，赶路不拍照。",
        "contentEn": "Our visit to the Hanging Monastery is finished. Unlike Yungang Grottoes carved out of stone, this temple is built on the cliff with wooden structures. It combines ancient engineering, architecture and inclusive religious philosophy, ranking it among the world's top ten most precarious buildings. Please take care of your belongings on the narrow one-way walkways."
      }
    ]
  },
  {
    "id": 7,
    "name": "北岳恒山",
    "nameEn": "Mount Heng (Northern Sacred Peak)",
    "cover": "⚔️",
    "brief": "五岳之北岳，道教全真派圣地，主峰天峰岭海拔2017米",
    "briefEn": "One of Chinas Five Great Mountains, sacred Taoist site, main peak 2017m above sea level.",
    "steps": [
      {
        "title": "恒山山门·五岳北岳",
        "titleEn": "Mountain Gate · Northern Sacred Peak",
        "content": "五岳之中北岳恒山，主峰天峰岭海拔2017米，道教全真派圣地，山间遍布三寺四祠九亭阁。大家可以先游悬空寺，再来恒山，两条线路挨在一起；体力弱推荐单程缆车直达半山腰，再步行登顶。山间温差大，盛夏也要备薄外套。",
        "contentEn": "Northern Heng Mountain is one of Chinas Five Great Mountains, a sacred Taoist site with the main peak at 2017m. A one-way cable car saves energy for hiking to the summit; bring a light jacket as the mountain top is windy and cool.",
        "photoSpot": "恒山主峰全景",
        "photoSpotEn": "Full panoramic view of Heng Mountain main peak"
      },
      {
        "title": "金龙峡谷步道·悬空寺远眺",
        "titleEn": "Golden Dragon Gorge · Hanging Monastery View",
        "content": "进山步道沿金龙峡谷而行，两侧崖壁陡峭，远处就能看见悬空寺嵌在翠屏峰崖壁上，这条视角是不登临悬空寺也能拍全景的绝佳机位，溪水常年流淌，夏季格外清凉。",
        "contentEn": "The valley path offers a distant full view of the Hanging Monastery embedded in the cliff, a great shooting spot without climbing the temple. The stream keeps the valley cool in summer.",
        "photoSpot": "峡谷峭壁远景、悬空寺远眺",
        "photoSpotEn": "Valley cliff distant view, Hanging Monastery from afar"
      },
      {
        "title": "果老岭·张果老传说",
        "titleEn": "Guolao Ridge · Zhang Guolao Legend",
        "content": "传说张果老骑毛驴修道恒山，石板上深浅坑洼是毛驴踩出的蹄印，天然岩石形成千年传说，山路平缓，适合中途休息拍照。",
        "contentEn": "This stone path has natural indentations said to be hoof prints left by Zhang Guolaos donkey. It is a gentle resting spot halfway up the mountain.",
        "photoSpot": "石板上天然驴蹄印",
        "photoSpotEn": "Natural donkey hoof prints on stone slabs"
      },
      {
        "title": "真武庙·道教中心",
        "titleEn": "Zhenwu Temple · Taoist Center",
        "content": "恒山规模最大的道观，供奉玄武真武大帝，院落古柏成荫，明清碑刻遍布院墙，道教壁画完整保存，香火气温和，是山中宗教建筑群中心。",
        "contentEn": "The largest Taoist temple on Heng Mountain enshrines God Zhenwu, surrounded by ancient cypresses and well-preserved Ming-Qing stone steles and murals.",
        "photoSpot": "真武大帝正殿、山间古柏",
        "photoSpotEn": "Zhenwu Hall, ancient cypress trees"
      },
      {
        "title": "恒宗大殿·半山核心",
        "titleEn": "Hengzong Hall · Mid-Mountain Core",
        "content": "恒宗大殿是恒山标志性建筑，殿内供奉北岳山神，站殿前平台360度环视连绵太行余脉，春秋两季漫山红叶或野花，景色层次分明。",
        "contentEn": "This landmark hall worships the God of Northern Heng Mountain. Its front platform provides full views of the rolling Taihang mountain range, especially beautiful in spring flowers and autumn red leaves.",
        "photoSpot": "大殿匾额、群山俯瞰",
        "photoSpotEn": "Hall plaque, mountain range overlook"
      },
      {
        "title": "天峰岭山顶·北岳之巅",
        "titleEn": "Tianfeng Summit · Peak of Northern Sacred Peak",
        "content": "登顶天峰岭就是恒山最高点，石碑打卡留念，风很大视野开阔，能看清恒山完整山脉走向，体力不足游客走到恒宗大殿即可折返，不用强行登顶。",
        "contentEn": "The summit stele marks the highest point of Northern Heng Mountain with wide open mountain views. Visitors with limited stamina may turn back at the main hall without climbing all the way up.",
        "photoSpot": "五岳北岳石碑、天际群山",
        "photoSpotEn": "Five Sacred Mountains stele, mountain panorama"
      },
      {
        "title": "下山总结·道佛双山",
        "titleEn": "Descent Summary · Taoist & Buddhist Twin Peaks",
        "content": "恒山游玩路线搭配：上午悬空寺，下午恒山；缆车省力，步行赏峡谷与道观；主打道教文化与北方山岳自然风光，和云冈石窟、古城人文景观形成互补。",
        "contentEn": "Arrange your trip: Hanging Monastery in the morning, Heng Mountain in the afternoon. It combines Taoist culture and northern mountain scenery, different from Datongs grottoes and ancient city humanistic spots.",
        "photoSpot": "",
        "photoSpotEn": ""
      }
    ]
  },
  {
    "id": 8,
    "name": "大同土林",
    "nameEn": "Datong Earth Forest",
    "cover": "🌲",
    "brief": "风蚀黄土造秘境，黄昏光影出大片。华北罕见黄土风蚀地貌",
    "briefEn": "Rare loess wind-eroded landform in North China. Best visited at dusk for stunning photography light.",
    "steps": [
      {
        "title": "入口总观景台·黄土风蚀秘境",
        "titleEn": "Entrance Overlook · Wind-Eroded Wonderland",
        "content": "大同土林是华北罕见黄土风蚀地貌，千万年雨水、风力冲刷切割，形成土柱、沟壑、洞穴，不用去西北就能拍出荒漠秘境大片，全天光线差别巨大，下午四点到日落是最佳拍摄时段。",
        "contentEn": "Datong Earth Forest is a rare loess wind-eroded landform in North China, shaped by thousands of years of wind and rain. The golden hour before sunset creates the best photography light.",
        "photoSpot": "整片土林全景纵览",
        "photoSpotEn": "Full panoramic view of the earth forest"
      },
      {
        "title": "一号浅沟壑·分层黄土纹理",
        "titleEn": "No.1 Gully · Layered Loess Texture",
        "content": "近处土柱层次分明，一层黄土一层泥沙，能清晰看到不同年代沉积痕迹，风蚀出天然孔洞，近距离拍摄纹理质感极强，适合人像古风拍摄。",
        "contentEn": "The nearby earth pillars show clear layered sediment formed over millennia, with natural wind-carved caves perfect for texture and portrait photos.",
        "photoSpot": "分层黄土纹理特写",
        "photoSpotEn": "Layered loess texture close-up"
      },
      {
        "title": "湖心独立土柱·水面倒影",
        "titleEn": "Lake-Center Pillar · Water Reflection",
        "content": "整片土林标志性打卡点，石柱矗立浅水中，无风时完整倒影复刻土柱轮廓，日落暖黄光打在黄土上，橙红色氛围感拉满，游客必拍机位。",
        "contentEn": "The iconic pillar stands in shallow water with perfect reflections on windless days. Sunset warm orange light turns the loess into stunning golden scenery, the most popular shooting spot.",
        "photoSpot": "石柱水面倒影",
        "photoSpotEn": "Pillar water reflection"
      },
      {
        "title": "纵深峡谷步道·奇幻异世界",
        "titleEn": "Deep Canyon Trail · Fantasy World",
        "content": "走进峡谷两侧土崖高耸，步道曲折迂回，光影在沟壑间明暗交错，行走如同闯入奇幻异世界，注意脚下土路松软，穿防滑平底鞋。",
        "contentEn": "Deep narrow valleys with tall loess cliffs create dramatic light and shadow. The dirt path is soft, please wear non-slip flat shoes.",
        "photoSpot": "两侧高耸土崖夹缝",
        "photoSpotEn": "Tall loess cliffs on both sides"
      },
      {
        "title": "日落高地观景台·黄昏剪影",
        "titleEn": "Sunset Hill Platform · Dusk Silhouette",
        "content": "全天最佳点位，夕阳斜照整片沟壑，黄土由黄变橙再转深红，轮廓线条锐利，拍完日落再返程，白天土林偏灰白，只有黄昏才有浓烈色彩。",
        "contentEn": "The west high platform offers full sunset silhouettes of all gullies. The loess turns golden orange and deep red at dusk, far more vivid than pale daytime scenery.",
        "photoSpot": "整片土林日落剪影",
        "photoSpotEn": "Full earth forest sunset silhouette"
      },
      {
        "title": "出口总结·地质奇观",
        "titleEn": "Exit Summary · Geological Wonder",
        "content": "土林游玩核心：避开正午强光，优先黄昏游览；土路易沾灰，做好防护；人文古迹逛累了，来这里欣赏大自然千万年雕刻的地质奇观，风格完全不同。",
        "contentEn": "Avoid harsh midday sunlight and visit at dusk for best colors. Wear dust-proof shoes and clothes. It provides a natural geological contrast to Datongs ancient cultural relics.",
        "photoSpot": "",
        "photoSpotEn": ""
      }
    ]
  },
  {
    "id": 9,
    "name": "应县木塔",
    "nameEn": "Yingxian Wooden Pagoda",
    "cover": "🏜",
    "brief": "千年木塔无铁钉，九层凌云天下惊。世界最高最古老纯榫卯木塔",
    "briefEn": "Worlds tallest and oldest pure wooden pagoda, built without nails. A thousand-year engineering miracle.",
    "steps": [
      {
        "title": "佛宫寺山门·千年木塔远观",
        "titleEn": "Fogong Temple Gate · Millennia-Old Wooden Pagoda",
        "content": "应县木塔是全世界现存最高最古老纯榫卯木塔，辽代建造，距今近千年，整座塔没用一颗铁钉，靠榫卯咬合历经多次地震不倒。全塔九层，明五层暗四层，每层向外挑出飞檐，远近看造型完全不同。",
        "contentEn": "The Yingxian Wooden Pagoda is the worlds tallest and oldest pure wooden pagoda built in Liao Dynasty without any nails. It survived dozens of earthquakes relying only on mortise and tenon joints, with 9 layers total (5 visible, 4 hidden).",
        "photoSpot": "木塔远观全景",
        "photoSpotEn": "Distant full view of the wooden pagoda"
      },
      {
        "title": "前院历代碑刻·建塔史记",
        "titleEn": "Front Yard Steles · Pagoda History",
        "content": "广场两侧石碑记录建塔由来、历代修缮历史，碑文清晰，能读懂辽代契丹王朝修建木塔的初衷，是研究古建的一手文字资料。",
        "contentEn": "Stone steles in the front yard record the pagodas construction and restoration history from Liao to Qing dynasties, precious written records of ancient wooden architecture.",
        "photoSpot": "辽代建塔记事碑",
        "photoSpotEn": "Liao Dynasty pagoda construction stele"
      },
      {
        "title": "木塔一层·11米释迦大佛",
        "titleEn": "Ground Floor · 11-Meter Sakyamuni Buddha",
        "content": "现在为保护文物不再允许游客登高层，首层可以完整参观。正中11米高释迦泥塑辽代原物，墙面环绕飞天、金刚壁画，色彩温润柔和。抬头看巨大斗拱层层堆叠，支撑整座百米高塔，古人力学智慧一目了然。",
        "contentEn": "Visitors cannot climb upper floors for cultural protection, only the ground floor is open. The 11-meter original Liao Buddha statue and surrounding murals are well-preserved. Giant bracket sets bear the weight of the whole tower.",
        "photoSpot": "11米释迦大佛、墙面辽代壁画",
        "photoSpotEn": "11-meter Sakyamuni Buddha, Liao Dynasty wall murals"
      },
      {
        "title": "塔外分层飞檐观赏·榫卯抗震",
        "titleEn": "Outside View · Bracket Sets & Earthquake Resistance",
        "content": "绕塔一圈分层观赏飞檐，每层檐角悬挂铜铃，微风响动清脆悦耳。从侧面看塔身微微向内收分，上窄下宽，这种锥形结构大大提升抗震能力，是千年不倒的关键设计。",
        "contentEn": "Walk around the tower to view layered flying eaves with bronze bells ringing in wind. The tower tapers slightly upward, a tapered design that greatly improves earthquake resistance.",
        "photoSpot": "五层飞檐错落特写",
        "photoSpotEn": "Layered flying eaves close-up"
      },
      {
        "title": "出口总结·三大奇迹",
        "titleEn": "Exit Summary · Three Miracles",
        "content": "应县木塔三大奇迹：千年纯木无钉、抗震榫卯结构、辽代佛像壁画完整；大同行程可以搭配古城、华严寺安排一日古建专线。",
        "contentEn": "Three miracles of the wooden pagoda: thousand-year wood structure without nails, earthquake-resistant joints, intact Liao Buddha statues and murals. It can be visited together with Huayan Temple and Datong Ancient City in one day.",
        "photoSpot": "",
        "photoSpotEn": ""
      }
    ]
  },
  {
    "id": 10,
    "name": "觉山寺",
    "nameEn": "Jueshan Temple",
    "cover": "🌿",
    "brief": "北魏古刹，辽代砖塔，藏于山野间的千年幽境",
    "briefEn": "Northern Wei ancient temple with a Liao Dynasty brick pagoda, a millennium-old sanctuary hidden in the mountains",
    "steps": [
      {
        "title": "山野入口·世外幽境",
        "titleEn": "Mountain Entrance · Hidden Sanctuary",
        "content": "觉山寺位于大同市灵丘县境内，隐藏于觉山峪的深处，四周峰峦环绕，与外界的喧嚣隔绝。寺院始建于北魏孝文帝时期（约公元471年），距今已有1500余年历史。沿山路步行而入，两侧古木参天，清泉潺潺。",
        "contentEn": "Jueshan Temple is located deep in Jueshan Valley in Lingqiu County, enclosed by surrounding peaks. The temple was founded around 471 AD during the Northern Wei Dynasty, over 1,500 years ago."
      },
      {
        "title": "辽代砖塔·千年孤标",
        "titleEn": "Liao Dynasty Pagoda · Millennium Sentinel",
        "content": "觉山寺最具代表性的建筑是一座建于辽代的砖塔，高约20米，七级密檐式结构，造型优美挺拔。砖塔历经千年风雨，至今保存完好。塔身各层密布砖雕花纹，内容包括佛像、飞天、莲花等佛教题材。",
        "contentEn": "The most emblematic structure is a Liao Dynasty brick pagoda standing about 20 meters tall with seven densely bracketed tiers. Dense brick carvings decorate each tier with Buddhas, flying celestials, and lotus flowers."
      },
      {
        "title": "主殿·古朴禅境",
        "titleEn": "Main Hall · Simple Zen Atmosphere",
        "content": "觉山寺主殿规模适中，古朴简约。殿内陈设简单而庄严，供奉着历代香火传承下来的佛像。这里没有商业化的喧闹，只有清晨的鸟鸣、诵经声和山风，是真正意义上的修行之所。",
        "contentEn": "The main hall is modest in scale and refreshingly unpretentious. Wisps of incense drift through the hall in peaceful quiet. Here there is no commercial noise — only birdsong at dawn, the chanting of sutras, and mountain wind."
      },
      {
        "title": "山景步道·自然禅行",
        "titleEn": "Mountain Trail · Nature Walk",
        "content": "觉山寺周边设有供游客散步的山间步道，蜿蜒穿行于松林之间。沿途可以观察到华北地区典型的山地植被——油松、白桦、山杨交织生长。步道尽头有一处观景台，可以将整个觉山峪的峰林地貌一览无余。",
        "contentEn": "Winding mountain trails near the temple meander through the pine forest. At the trail's end, an overlook commands the entire valley landscape of Jueshan Gorge."
      }
    ]
  }
];
