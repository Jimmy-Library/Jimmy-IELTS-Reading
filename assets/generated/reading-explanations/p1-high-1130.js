(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1130", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1130",
  "meta": {
    "examId": "p1-high-1130",
    "title": "Coral Reefs 珊瑚礁",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 匹配题（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Geographical Location of the world's coral reef",
          "translation": "世界珊瑚礁的地理位置（分布）",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Coral reefs are estimated to cover 284,300 km2 just under 0.1% of the oceans' surface area, about half the area of France. The Indo-Pacific region accounts for 91.9% of this total area."
          },
          "synonyms": [
            "“Geographical Location” 对应原文对面积与海域分布的交代：“Coral reefs are estimated to cover 284,300 km2 …” 与 “The Indo-Pacific region accounts for 91.9% of this total area.”",
            "“the world's coral reef” 对应原文按全球各海域逐一分配占比：Indo-Pacific 91.9%、Pacific including Australia 40.8%、Atlantic and Caribbean 7.6%"
          ],
          "locatingTip": "定位：题干的关键词是 Geographical Location，要找的是集中交代“分布在哪里、占多大面积”的段落。第 2 段（A）开篇即给出总面积与占海洋表面积的百分比，随后按 Indo-Pacific、Southeast Asia、Pacific、Atlantic and Caribbean 逐一分配比例，是全文唯一集中处理地理分布的一段。确定答案技巧：段落信息匹配题先给段落贴“话题标签”，一旦发现某段开头连续出现地理名词与百分比，就能判定该段承担“地理位置/分布”这一功能，不必读完全文。",
          "analysis": "第 2 段（A）是全文唯一集中交代珊瑚礁地理分布的一段。它先给出总量：“Coral reefs are estimated to cover 284,300 km2 just under 0.1% of the oceans' surface area, about half the area of France.”（珊瑚礁估计覆盖 284 300 平方公里，略低于海洋表面积的 0.1%，约相当于法国面积的一半。）随后按海域拆分：“The Indo-Pacific region accounts for 91.9% of this total area. Southeast Asia accounts for 32.3% of that figure, while the Pacific including Australia accounts for 40.8%. Atlantic and Caribbean coral reefs account for 7.6%.”（印度-太平洋地区占这一总面积的 91.9%；东南亚占其中 32.3%，包括澳大利亚在内的太平洋占 40.8%；大西洋与加勒比海珊瑚礁占 7.6%。）段内还有一句交代纬度与海域限制：“Although corals exist both in temperate and tropical waters, shallow-water reefs form only in a zone extending from 30°N to 30°S of the equator.”（浅水礁只形成于赤道南北纬 30 度之间的地带。）这些内容共同构成题干所说的 Geographical Location，故选 A。",
          "traps": [
            "为什么不选 B（第 3 段）：B 段讲的是珊瑚礁提供的生态系统服务与全球经济价值（tourism, fisheries and coastline protection；$US375 billion per year），落点在“价值”而不是“位置”。",
            "为什么不选 C（第 4 段）：C 段比较的是生物多样性高的海域中珊瑚礁的单位价值（US$1 million per square kilometer、AU$4.3 billion 等），同属经济价值范畴，虽然提到地点，但那是为了说明收益规模。",
            "为什么不选 E（第 6 段）：E 段讨论的是污水、船只与游客行为对珊瑚礁的破坏，属于威胁与保护话题。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "How does coral reef benefit economy locally",
          "translation": "珊瑚礁如何在当地带来经济利益",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "In parts of Indonesia and the Caribbean where tourism is the main use, reefs are estimated to be worth US$1 million per square kilometer, based on the cost of maintaining sandy beaches and the value of attracting snorkelers and scuba divers."
          },
          "synonyms": [
            "“benefit economy locally” 对应原文的 “reefs are estimated to be worth US$1 million per square kilometer”，直接给出当地单位面积的经济价值",
            "“locally” 对应原文限定在具体地区的状语 “In parts of Indonesia and the Caribbean”",
            "“How” 对应原文给出的估值依据 “based on the cost of maintaining sandy beaches and the value of attracting snorkelers and scuba divers”"
          ],
          "locatingTip": "定位：题干的关键是 locally（在当地），要求把范围锁定到具体地区，而不是全球总量。第 3 段（B）给的是全球尺度数字 $US375 billion per year；只有第 4 段（C）开篇把范围收窄到 “In parts of Indonesia and the Caribbean”，并给出每平方公里 US$1 million 的当地估值。确定答案技巧：遇到 locally 这类范围副词，要与段落里的地点状语（In parts of Indonesia and the Caribbean）与计量单位（per square kilometer）相互印证，避免错选只给全球数字的段落。",
          "analysis": "第 4 段（C）第 1、2 句：“The value of reefs in biodiverse regions can be even higher. In parts of Indonesia and the Caribbean where tourism is the main use, reefs are estimated to be worth US$1 million per square kilometer, based on the cost of maintaining sandy beaches and the value of attracting snorkelers and scuba divers.”（生物多样性丰富地区珊瑚礁的价值可能更高。在印度尼西亚和加勒比海的部分地区，旅游业是主要用途，据估计珊瑚礁每平方公里价值 100 万美元，这一估值依据的是维护沙滩的成本以及吸引浮潜与深潜游客所带来的价值。）题干问的是“珊瑚礁如何在当地带来经济利益”，原文给出的正是两个具体地区（Indonesia、Caribbean）中按每平方公里计算的经济价值，以及这一价值的来源（维护沙滩、吸引潜水游客），与题干完全对应。注意不要被第 3 段（B）的 “The global economic value of coral reefs has been estimated at as much as $US375 billion per year.” 误导——那是全球总量，与 locally 的范围不符，故选 C。",
          "traps": [
            "为什么不选 B（第 3 段）：该段给出的是全球层面的经济价值（$US375 billion per year），属于 world 尺度而非 local 尺度，与题干的 locally 不符。",
            "为什么不选 A（第 2 段）：A 段处理的是珊瑚礁的地理分布与面积占比，虽然也有数字，但主题是“位置”而非“当地经济收益”。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The statistics of coral reef's economic significance",
          "translation": "珊瑚礁经济重要性的统计数据",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The report estimates that reef fisheries were worth between $15,000 and $150,000 per square kilometer a year, while fish caught for aquariums were worth $500 a kilogram against $6 for fish caught as food."
          },
          "synonyms": [
            "“statistics” 对应原文密集出现的数据与单位：$15,000、$150,000 per square kilometer a year、$500 a kilogram、$6",
            "“coral reef's economic significance” 对应原文对珊瑚礁渔获产值（reef fisheries were worth …）与观赏鱼价格（fish caught for aquariums were worth …）的经济学描述"
          ],
          "locatingTip": "定位：题干的关键词 statistics 指向“数字密集区”。第 4 段（C）连续出现 US$1 million per square kilometer、AU$4.3 billion、US$2 billion、US$625 million、$15,000–$150,000 per square kilometer a year、$500 a kilogram、US$5.5 million 等一连串统计数据，是全文数据最集中的一段。确定答案技巧：统计类题干优先在数字密集处确认，再用该段主题句复核——第 4 段首句 “The value of reefs in biodiverse regions can be even higher.” 正说明本段讨论的是珊瑚礁的经济价值，故选 C。",
          "analysis": "第 4 段（C）通篇以数字支撑珊瑚礁的经济意义，例如：“In the Caribbean, says UNEP, the net annual benefits from diver tourism were US$2 billion in 2000 with US$625 million spent directly on diving on reefs.”（联合国环境规划署称，2000 年加勒比海潜水旅游的年度净收益为 20 亿美元，其中 6.25 亿美元直接花在珊瑚礁潜水活动上。）题干所问的“统计数字”在原文中还有这样一个集中体现：“The report estimates that reef fisheries were worth between $15,000 and $150,000 per square kilometer a year, while fish caught for aquariums were worth $500 a kilogram against $6 for fish caught as food. The aquarium fish export industry supports around 50,000 people and generates some US$5.5 million a year in Sri Lanka alone.”（报告估计珊瑚礁渔业每平方公里年产值在 1.5 万至 15 万美元之间，而供水族箱之用的鱼每公斤值 500 美元，作为食物的鱼每公斤仅 6 美元。观赏鱼出口业养活了约 5 万人，仅在斯里兰卡每年就带来约 550 万美元收入。）这些具体到单位与年份的数字，正是题干中 statistics 与 economic significance 的落点，故选 C。注意本题与第 2 题同落第 4 段，答案表允许同一段被重复选用，作答时要分别确认各自的落点句。",
          "traps": [
            "为什么不选 B（第 3 段）：该段只给出一个全球总量数字（$US375 billion per year），并非统计数据集中的段落，主题是生态系统服务而非统计分析。",
            "为什么不选 F（第 7 段）：该段虽然有 10%、60%、80% 等比例，但讨论的是珊瑚礁死亡与濒危程度（生态威胁），属于生态统计，不是经济统计。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The listed reasons for the declining number of coral reef",
          "translation": "珊瑚礁数量下降的各种原因列举",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In particular, coral mining, agricultural and urban runoff, pollution (organic and inorganic), disease, and the digging of canals and access into islands and bays are localized threats to coral ecosystems. Broader threats are sea temperature rise, sea-level rise and pH changes from ocean acidification, all associated with greenhouse gas emissions."
          },
          "synonyms": [
            "“the listed reasons” 对应原文以清单形式列出的 threats（coral mining、agricultural and urban runoff、pollution, disease、the digging of canals and access into islands and bays）",
            "“the declining number of coral reef” 对应原文的 “coral reefs are dying around the world” 以及对 localized threats 与 Broader threats 的分层列举"
          ],
          "locatingTip": "定位：题干要的是“原因清单”。第 5 段（D）以 “Unfortunately, coral reefs are dying around the world.” 开篇，紧接一句就把造成局部威胁的因素一口气列全，再用 Broader threats are … 给出更大尺度的原因，是全文唯一以清单形式罗列原因的段落。确定答案技巧：注意原文用 In particular 引出清单、用 Broader 作层次划分，这两个信号词说明该段不是讲某一种原因，而是系统性列举。",
          "analysis": "第 5 段（D）第 1、2 句：“Unfortunately, coral reefs are dying around the world. In particular, coral mining, agricultural and urban runoff, pollution (organic and inorganic), disease, and the digging of canals and access into islands and bays are localized threats to coral ecosystems.”（不幸的是，世界各地的珊瑚礁正在死亡。具体而言，珊瑚开采、农业与城市径流、污染（有机与无机）、疾病，以及开挖运河和通往岛屿、海湾的通道，都是对珊瑚生态系统的局部威胁。）紧接着第 3 句给出另一层次：“Broader threats are sea temperature rise, sea-level rise and pH changes from ocean acidification, all associated with greenhouse gas emissions.”（更大尺度的威胁包括海水升温、海平面上升以及海洋酸化带来的 pH 变化，这些都与温室气体排放有关。）两句话合起来构成题干所说的“原因清单”：既有 localized threats，也有 Broader threats，层次分明，因此选 D。第 6 段（E）虽然也讲破坏，但只聚焦污水、泄漏与游客行为，属于具体案例，不是清单式列举。",
          "traps": [
            "为什么不选 E（第 6 段）：E 段只列举 Tourist resorts 排污水、化粪池渗漏、船只与游客的摩擦这几类具体行为，范围偏窄，不是“原因的整体清单”。",
            "为什么不选 F（第 7 段）：F 段谈的是科学家为寻找解决办法而研究的影响因素（ocean's role as a carbon dioxide sink、atmospheric changes、ultraviolet light 等）以及珊瑚礁的濒危比例，落点在“研究与现状”，而非“数量下降的原因列举”。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Physical approach to the coral reef by people",
          "translation": "人们对珊瑚礁的（身体上的）接触行为",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Whenever people grab, kick, and walk on, or stir up sediment in the reefs, they contribute to coral reef destruction."
          },
          "synonyms": [
            "“Physical approach … by people” 对应原文一连串身体动作：“grab, kick, and walk on, or stir up sediment”",
            "“contribute to coral reef destruction” 与题干所指的“人对珊瑚礁的物理接触”在语义上呼应，原文说的正是这些动作造成破坏",
            "同一段末句 “Corals are also harmed or killed when people drop anchors on them” 中的 drop anchors 也是典型的物理接触行为"
          ],
          "locatingTip": "定位：题干的关键词是 physical approach，即身体上的直接接触。第 6 段（E）末两句写的全是身体动作：“Careless boating, diving, snorkeling and fishing can also damage coral reefs.” 与 “Whenever people grab, kick, and walk on, or stir up sediment in the reefs …”。确定答案技巧：把 physical 理解成“动手动脚”，与 grab、kick、walk on、drop anchors 这些具体动词对照，就能排除只讲化学或气候因素的段落。",
          "analysis": "第 6 段（E）依次写了三类破坏方式：“Tourist resorts that empty their sewage directly into the water surrounding coral reefs contribute to coral reef degradation. Wastes kept in poorly maintained septic tanks can also leak into surrounding groundwater, eventually seeping out to the reefs.”（把污水直接排入珊瑚礁周围水域的旅游度假村造成了珊瑚礁退化；维护不善的化粪池中的废物也会渗入周围地下水，最终渗出到珊瑚礁。）接着是本段真正对应题干的落点句：“Whenever people grab, kick, and walk on, or stir up sediment in the reefs, they contribute to coral reef destruction. Corals are also harmed or killed when people drop anchors on them or when people collect coral.”（只要人们抓、踢、踩踏珊瑚礁，或搅动礁区沉积物，就会造成珊瑚礁破坏；人们把锚抛在珊瑚礁上或采集珊瑚时，珊瑚也会受到伤害或死亡。）grab、kick、walk on、stir up sediment、drop anchors、collect coral 全部是身体层面的直接接触动作，正对应题干所说的 physical approach，故选 E。",
          "traps": [
            "为什么不选 D（第 5 段）：D 段列举的是珊瑚采矿、径流、污染、疾病、酸化等致因，属于化学、生物与气候层面的威胁，不是人的身体接触行为。",
            "为什么不选 G（第 8 段）：G 段讲的是保护措施与社区传统（Great Barrier Reef Marine Park Authority、Ahus Island 限制捕鱼的做法），落点在保护而非破坏行为。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Unsustainable fishing methods are applied in regions of the world",
          "translation": "世界各地使用不可持续的捕鱼方式",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Some current fishing practices are destructive and unsustainable. These include cyanide fishing, overfishing and blast fishing."
          },
          "synonyms": [
            "“Unsustainable fishing methods” 同义替换为原文的 “fishing practices are destructive and unsustainable”",
            "“are applied in regions of the world” 对应原文对具体捕鱼方式的展开描述，例如毒鱼后 “most fish caught using this method are sold in restaurants, primarily in Asia”，说明这些做法在特定地区被实际使用"
          ],
          "locatingTip": "定位：题干的核心词 unsustainable fishing 在第 5 段（D）有逐字对应：“Some current fishing practices are destructive and unsustainable.”，其后紧接 “These include cyanide fishing, overfishing and blast fishing.”。确定答案技巧：本题与第 4 题同落第 5 段，但两题抓的是不同信息点——第 4 题抓“原因清单的总体列举”，本题抓“捕鱼方式”这一子类。作答时仍要回到原文分别确认落点句，不要因为答案同为 D 段就跳过定位；也不要错选第 8 段（G），那里讲的是 Ahus Island 居民限制捕鱼以保护珊瑚礁，与“不可持续的捕鱼方式”正好相反。",
          "analysis": "第 5 段（D）第 4、5 句：“Some current fishing practices are destructive and unsustainable. These include cyanide fishing, overfishing and blast fishing.”（当前一些捕鱼方式具有破坏性且不可持续，包括毒鱼、过度捕捞和炸鱼。）随后原文分别展开：“Although cyanide fishing supplies live reef fish for the tropical aquarium market, most fish caught using this method are sold in restaurants, primarily in Asia, where live fish are prized for their freshness.”（虽然毒鱼为热带水族市场提供活礁鱼，但用这种方法捕到的鱼大多销往餐厅，主要是在亚洲，那里人们看重活鱼的新鲜。）“Overfishing is another leading cause for coral reef degradation. Often, too many fish are taken from one reef to sustain a population in that area.”（过度捕捞是珊瑚礁退化的另一个主因：从一处珊瑚礁捕走的鱼常常多到无法维持该海域的种群。）“In some instances, people fish with explosives (blast fishing), which blast apart the surrounding coral.”（有些情况下人们用炸药捕鱼，炸开周围的珊瑚。）题干中的 unsustainable 与原文的 destructive and unsustainable 逐字对应，列举的三类做法也与题干所指完全一致，故选 D。",
          "traps": [
            "为什么不选 E（第 6 段）：E 段提到 careless fishing 会造成破坏，但只用一次带过，重点在污水、船只与游客行为，并未展开不可持续的捕鱼方式。",
            "为什么不选 G（第 8 段）：G 段讲的是巴布亚新几内亚 Ahus Island 居民世代沿袭的限制捕鱼做法，是可持续的保护实践，与题干相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–12 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 12
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Coral reef distributes around the ocean disproportionally.",
          "translation": "珊瑚礁在海洋中的分布是不均衡的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The Indo-Pacific region accounts for 91.9% of this total area. Southeast Asia accounts for 32.3% of that figure, while the Pacific including Australia accounts for 40.8%. Atlantic and Caribbean coral reefs account for 7.6%."
          },
          "synonyms": [
            "“disproportionally” 同义替换为原文悬殊的占比数据：Indo-Pacific 91.9% 对比 Atlantic and Caribbean 7.6%",
            "“distributes around the ocean” 对应原文各地区 accounts for（占比）的表述，即用占比刻画分布",
            "“Coral reef” 对应原文的 this total area 与 coral reefs account for 的具体主语"
          ],
          "locatingTip": "定位：题干的 distributes 与 ocean 指向“分布”。第 2 段（A）第二句起就是一连串占比数字，是全文唯一用比例描述分布的地方。确定答案技巧：判断题遇到 disproportionally（不成比例地）这类程度副词，要在原文找“悬殊、不均衡”的证据。原文中印度-太平洋地区占 91.9%，而大西洋与加勒比海珊瑚礁只占 7.6%，两者相差十倍以上，正是“不成比例”的具体体现，因此判 TRUE。",
          "analysis": "第 2 段（A）在给出总面积后立刻按海域分配：“The Indo-Pacific region accounts for 91.9% of this total area. Southeast Asia accounts for 32.3% of that figure, while the Pacific including Australia accounts for 40.8%. Atlantic and Caribbean coral reefs account for 7.6%.”（印度-太平洋地区占这一总面积的 91.9%；东南亚占其中 32.3%，包括澳大利亚在内的太平洋占 40.8%；大西洋与加勒比海珊瑚礁占 7.6%。）这些数字清楚地显示珊瑚礁高度集中于印度-太平洋一带，而大西洋、加勒比海的份额极小，分布极不均衡。题干用 disproportionally（不成比例地）概括这一现象，与原文的数据方向完全一致，因此答案是 TRUE。此外原文还提到 “Coral reefs are rare along the American and African west coasts.”（美洲和非洲西海岸珊瑚礁罕见）以及 “Corals are seldom found along the coastline of South Asia …”（南亚海岸线一带也很少见到珊瑚），从“有无”的角度进一步印证分布的不均衡。",
          "traps": [
            "为什么不是 FALSE：原文用悬殊的占比数字（91.9% 对 7.6%）表明分布极不均匀，并强调美洲、非洲西海岸与南亚部分海岸珊瑚礁罕见，与题干的 disproportionally 同向。",
            "为什么不是 NOT GIVEN：原文对分布的量化数据与区域差异交代得非常具体，证据充分。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Coral reefs provide habitat to a variety of marine life.",
          "translation": "珊瑚礁为多种海洋生物提供栖息地。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "They provide a home for 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates and other cnidarians."
          },
          "synonyms": [
            "“provide habitat to” 同义替换为原文的 “provide a home for”，都表示“为……提供栖息地”",
            "“a variety of marine life” 同义替换为原文的 “25% of all marine species”，后面还列举了 fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates and other cnidarians 作为具体物种"
          ],
          "locatingTip": "定位：题干中的 marine life 与原文的 marine species 是同义域词汇，第 2 段（A）中 “They provide a home for 25% of all marine species …” 是本句的唯一落点，前面一句还用 “rainforests of the sea” 形容珊瑚礁物种之丰富。确定答案技巧：看到 provide habitat 立刻在原文搜 provide a home，二者是同义替换；再核对后面是否真的给出多种海洋生物，原文列举了从鱼、软体动物、蠕虫到海绵、被囊动物等一大串，足以支持“多种海洋生物”，因此判 TRUE。",
          "analysis": "第 2 段（A）先给珊瑚礁一个著名比喻：“Yet often called \"rainforests of the sea\", coral reefs form some of the most diverse ecosystems on Earth.”（珊瑚礁常被称为“海中雨林”，是地球上生物多样性最丰富的生态系统之一。）紧接着就是本题的依据句：“They provide a home for 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates and other cnidarians.”（它们为全部海洋物种中的 25% 提供栖息之所，包括鱼类、软体动物、蠕虫、甲壳类、棘皮动物、海绵、被囊动物以及其他刺胞动物。）题干把 provide a home for 改写为 provide habitat to，把 a list of species 概括为 a variety of marine life，信息方向完全一致，且原文给出的数据（25%）与八类物种名单都远超“多种”这一程度，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用 “They provide a home for 25% of all marine species” 明确肯定珊瑚礁是大量海洋生物的家，并列举了 fish、mollusks、worms 等八类生物，与题干同向，没有矛盾点。",
            "为什么不是 NOT GIVEN：原文不仅提到这一点，还给出具体比例与物种名单作为证据，信息非常充分。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Reef tourism is of economic essence generally for some poor people.",
          "translation": "珊瑚礁旅游业对某些贫困人群而言具有重要的经济意义。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Further, reef tourism is an important source of employment, especially for some of the world's poorest people."
          },
          "synonyms": [
            "“of economic essence” 同义替换为原文的 “an important source of employment”，都指重要的经济来源",
            "“for some poor people” 同义替换为原文的 “especially for some of the world's poorest people”",
            "“Reef tourism” 在原文中逐字复现"
          ],
          "locatingTip": "定位：题干中的 Reef tourism 是原文用词，第 4 段（C）中间一句 “Further, reef tourism is an important source of employment, especially for some of the world's poorest people.” 是唯一落点。确定答案技巧：找到该句后做三处核对——reef tourism 原词复现；of economic essence 对应 an important source of employment；for some poor people 对应 especially for some of the world's poorest people。三处全部同向，因此判 TRUE。注意 especially 说明这种经济意义对最贫困的一部分人尤为突出，与题干 for some poor people 的限定相合。",
          "analysis": "第 4 段（C）中部：“Further, reef tourism is an important source of employment, especially for some of the world's poorest people. UNEP says that of the estimated 30 million small-scale fishers in the developing world, most are dependent to a greater or lesser extent on coral reefs.”（此外，珊瑚礁旅游业是重要的就业来源，对世界上最贫困的一部分人尤其如此。联合国环境规划署称，发展中国家约 3000 万小规模渔民中，大多数都在不同程度上依赖珊瑚礁。）题干用 of economic essence 概括“重要的经济来源”，对应原文 an important source of employment；用 some poor people 概括“某些贫困人群”，对应 especially for some of the world's poorest people。前后两处改写都同向，后文用 3000 万渔民依赖珊瑚礁的数据进一步佐证经济意义，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确说珊瑚礁旅游业是重要的就业来源，并特别指出它惠及世界上最贫困的一部分人，与题干“对某些贫困人群具有经济意义”一致。",
            "为什么不是 NOT GIVEN：原文不仅提到，还用 especially 强调了对贫困人群的意义，并给出 3000 万小规模渔民的数据支撑，证据充分。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "As with other fishing business, coral fishery is not suitable to women and children.",
          "translation": "与其他渔业一样，珊瑚礁渔业不适合妇女和儿童。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "UNEP says that of the estimated 30 million small-scale fishers in the developing world, most are dependent to a greater or lesser extent on coral reefs."
          },
          "synonyms": [
            "“coral fishery” 对应原文的 “small-scale fishers … dependent … on coral reefs”，说的是依赖珊瑚礁的小规模渔业",
            "“not suitable to women and children” 在原文中没有任何对应：原文提到渔民（fishers）时完全没有区分性别与年龄，也从未评价谁适合从事这份工作"
          ],
          "locatingTip": "定位：题干的关键词是 coral fishery 与 women and children，第 4 段（C）中唯一涉及渔民群体的句子是 “UNEP says that of the estimated 30 million small-scale fishers in the developing world, most are dependent to a greater or lesser extent on coral reefs.”，据此定位。确定答案技巧：找到该句后核对题干的两个要点——“与其他渔业一样”的比较，以及“不适合妇女和儿童”的判断。原文只统计了发展中国家约 3000 万小规模渔民对珊瑚礁的依赖程度，既没有与其他渔业作比较，也没有提到妇女、儿童或任何人群的适格性，属于信息缺失，因此判 NOT GIVEN。",
          "analysis": "第 4 段（C）写道：“Further, reef tourism is an important source of employment, especially for some of the world's poorest people. UNEP says that of the estimated 30 million small-scale fishers in the developing world, most are dependent to a greater or lesser extent on coral reefs. In the Philippines, for example, more than one million small-scale fishers depend directly on coral reefs for their livelihoods.”（此外，珊瑚礁旅游业是重要的就业来源……联合国环境规划署称，发展中国家约 3000 万小规模渔民中，大多数都在不同程度上依赖珊瑚礁。例如在菲律宾，超过一百万小规模渔民直接依靠珊瑚礁谋生。）这段文字关心的只有“有多少人依赖珊瑚礁”，完全没有涉及性别、年龄，也没有出现 women、children 一类的词，更没有说这份工作不适合谁。题干中“与其他渔业一样”这一比较和“不适合妇女和儿童”这一判断都缺乏原文依据，因此答案是 NOT GIVEN。做题时要特别警惕：原文谈渔民生计，不等于谈论了“谁适合/不适合当渔民”。",
          "traps": [
            "为什么不是 TRUE：原文只统计了发展中国家约 3000 万小规模渔民对珊瑚礁的依赖程度，从未提到妇女或儿童，也没有出现任何表示“不适合”某群体的表述。",
            "为什么不是 FALSE：原文没有给出相反的信息（例如“妇女和儿童也能从事珊瑚礁渔业”），只是完全没有涉及这一话题，因此按规则判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Coral reefs are greatly exchanged among and exported to other countries.",
          "translation": "珊瑚礁在各国之间大量交易并出口到他国。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The aquarium fish export industry supports around 50,000 people and generates some US$5.5 million a year in Sri Lanka alone."
          },
          "synonyms": [
            "“exported” 对应原文的 “export industry” 一词，但出口的对象是 aquarium fish（水族观赏鱼），不是珊瑚礁本身",
            "“greatly exchanged among and exported to other countries” 中“珊瑚礁在国家间被交易”这一层意思在原文完全没有对应，原文也没有出现 corals 被买卖的任何表述"
          ],
          "locatingTip": "定位：题干的关键词是 exported，全文只有第 4 段（C）末尾出现 export 一词：“The aquarium fish export industry supports around 50,000 people and generates some US$5.5 million a year in Sri Lanka alone.”，据此定位。确定答案技巧：找到该句后要辨清出口的对象——原文出口的是 aquarium fish（水族观赏鱼），是珊瑚礁水域的生物，不是珊瑚礁本身；关于珊瑚礁是否被跨国交易、出口，原文全篇没有任何交代，因此判 NOT GIVEN，不要因为看到 export 就草率判 TRUE。",
          "analysis": "第 4 段（C）末尾：“The report estimates that reef fisheries were worth between $15,000 and $150,000 per square kilometer a year, while fish caught for aquariums were worth $500 a kilogram against $6 for fish caught as food. The aquarium fish export industry supports around 50,000 people and generates some US$5.5 million a year in Sri Lanka alone.”（报告估计珊瑚礁渔业每平方公里年产值在 1.5 万至 15 万美元之间，而供水族箱之用的鱼每公斤值 500 美元，作为食物的鱼每公斤仅 6 美元。观赏鱼出口业养活了约 5 万人，仅在斯里兰卡每年就带来约 550 万美元收入。）原文确实提到出口（export），但出口的是 aquarium fish，属于珊瑚礁生态系统的产出物；题干说的是 Coral reefs are greatly exchanged among and exported（珊瑚礁本身在各国间被大量交易并出口），主体被偷换了，而原文对此全无交代。相关信息（如 “As well as an immediate resource, these can also act as a medium of exchange” 出自第 3 段）指的是 reef resources 可作为交换媒介，也不是“珊瑚礁在各国间交易出口”。因此答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文提到的出口对象是 aquarium fish（观赏鱼），不是珊瑚礁；题干把出口主体换成了珊瑚礁本身，且宣称“大量交易”，这些在原文都没有依据。",
            "为什么不是 FALSE：原文从未出现“珊瑚礁不被交易或不出口”这类否定表述，只是完全没有涉及该话题，因此不能判 FALSE，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Coral reef is increasingly important for scientific purpose.",
          "translation": "珊瑚礁在科研方面的作用日益重要。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "To find answers for these problems, scientists and researchers study the various factors that impact reefs."
          },
          "synonyms": [
            "“scientific purpose” 对应原文的 “scientists and researchers study the various factors that impact reefs”，确实是科研行为",
            "“increasingly important” 在原文中没有任何对应：原文只说科学家和研究者研究这些因素，从未比较过去与现在，也没有评价其重要性是否在上升"
          ],
          "locatingTip": "定位：题干的关键词是 scientific purpose，全文提到科研的只有第 7 段（F）首句 “To find answers for these problems, scientists and researchers study the various factors that impact reefs.”，据此定位到该段。确定答案技巧：找到对应句后要盯住题干多出来的副词 increasingly（日益）。原文只陈述科学家研究珊瑚礁及其影响因素，既没有时间上的比较，也没有“越来越重要”的评价，多出来的这层信息属于无据推断，因此判 NOT GIVEN。",
          "analysis": "第 7 段（F）首句：“To find answers for these problems, scientists and researchers study the various factors that impact reefs. The list includes the ocean's role as a carbon dioxide sink, atmospheric changes, ultraviolet light, ocean acidification, viruses, impacts of dust storms carrying agents to far-flung reefs, pollutants, algal blooms and others.”（为了寻找这些问题的答案，科学家和研究者研究影响珊瑚礁的各种因素，包括海洋作为二氧化碳汇的作用、大气变化、紫外线、海洋酸化、病毒、沙尘暴把物质带到遥远礁区的影响、污染物、藻华等等。）原文确实交代了科学研究活动，但没有出现任何表示趋势上升的词（increasingly、growing、more and more），也没有把科研列为珊瑚礁日益重要的用途。题干加入的这一层“日益重要”的判断在原文找不到依据，因此答案是 NOT GIVEN。做本题要特别注意：原文提到某件事（科学家的研究）不等于支持题干对该事的评价（其重要性日益上升）。",
          "traps": [
            "为什么不是 TRUE：原文只说 “scientists and researchers study the various factors that impact reefs”，没有出现 increasingly、growing importance 之类表示趋势上升的表述，无法证明“日益重要”。",
            "为什么不是 FALSE：原文并未否认科研的重要性，也没有说珊瑚礁与科研无关，只是缺少“重要性不断上升”这层信息，属于信息缺失而非矛盾。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Question 13 单选题（Choose A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 13,
        "end": 13
      },
      "items": [
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "What is the main purpose of this passage?",
          "translation": "这篇文章的主要目的是什么？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "General estimates show approximately 10% of the world's coral reefs are dead. About 60% of the world's reefs are at risk due to destructive, human-related activities."
          },
          "synonyms": [
            "选项 C 的 “general benefits” 对应原文第 3、4 段对珊瑚礁生态系统服务与经济价值的论述：ecosystem services to tourism, fisheries and coastline protection； reefs are estimated to be worth US$1 million per square kilometer",
            "选项 C 的 “an alarming situation” 同义替换为原文的 “approximately 10% of the world's coral reefs are dead” 与 “About 60% of the world's reefs are at risk due to destructive, human-related activities”",
            "“main purpose” 要求概括全文，而原文的结构正是“先讲价值（B、C 段）再讲危机（D、E、F 段）”，与选项 C 的两部分完全吻合"
          ],
          "locatingTip": "定位：主旨题要通读全文结构。第 2 段（A）交代分布，第 3 段（B）与第 4 段（C）讲珊瑚礁的生态系统服务与经济价值，第 5、6 段（D、E）讲各种破坏因素，第 7 段（F）给出死亡与濒危的统计数据，第 8 段（G）举例说明保护实践。确定答案技巧：把后半部分概括成一句，就是第 7 段的 “General estimates show approximately 10% of the world's coral reefs are dead. About 60% of the world's reefs are at risk due to destructive, human-related activities.”，即“令人警觉的现状”；把前半部分概括成一句，就是第 3、4 段的生态系统服务与经济价值，即“总体效益”。两者合起来正是选项 C。",
          "analysis": "全文结构可以清楚地分为两大板块。前半部分讲效益：第 2 段（A）交代分布与多样性，第 3 段（B）写 “Coral reefs deliver ecosystem services to tourism, fisheries and coastline protection. The global economic value of coral reefs has been estimated at as much as $US375 billion per year.”（珊瑚礁为旅游业、渔业和海岸保护提供生态系统服务，其全球经济价值估计每年高达 3750 亿美元。）第 4 段（C）进一步给出各地单位面积的价值与就业数据。后半部分讲危机：第 5 段（D）以 “Unfortunately, coral reefs are dying around the world.” 开头并列举致因，第 6 段（E）补充污水与游客行为的影响，第 7 段（F）给出关键数据：“General estimates show approximately 10% of the world's coral reefs are dead. About 60% of the world's reefs are at risk due to destructive, human-related activities. The threat to the health of reefs is particularly strong in Southeast Asia, where 80% of reefs are endangered.”（大致估计显示，全球约 10% 的珊瑚礁已经死亡，约 60% 的珊瑚礁因破坏性的人类活动而面临风险；东南亚珊瑚礁的健康威胁尤为严重，80% 的珊瑚礁濒临危险。）把这两大板块合起来看，正是“先讲总体效益、再讲令人警惕的现状”，与选项 C 完全对应，故选 C。",
          "traps": [
            "A 错：全文只在第 1 段用一句交代珊瑚礁由珊瑚虫分泌的碳酸钙构成（underwater structures made from calcium carbonate secreted by corals），随后并没有展开“珊瑚礁如何在海洋中生长”，这不是文章主旨。",
            "B 错：科研用途只是第 7 段一句带过的内容（scientists and researchers study the various factors），既不是全文重心，原文也没有说它被“广泛”用作科研项目。",
            "D 错：澳大利亚大堡礁的保护只在最后一段作为个案提到（protected by the Great Barrier Reef Marine Park Authority），是全文的局部例证，不能概括全文主旨。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
