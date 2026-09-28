(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1227", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1227",
  "meta": {
    "examId": "p1-medium-1227",
    "title": "New Zealand Seaweed 新西兰海藻",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 段落标题匹配（List of Headings，A–F 段各配一个小标题）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Paragraph A: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "A 段：从标题列表中选出与该段内容相符的小标题。（正确答案 v. Nutritious value of seaweeds 海藻的营养价值）",
          "answer": "v",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Seaweed is a particularly nutritious food, which absorbs and concentrates traces of a wide variety of minerals necessary to the body's health."
          },
          "synonyms": [
            "标题中的 “nutritious” 与原文首句 “a particularly nutritious food” 原词复现，直接点出本段的话题就是海藻的营养",
            "“value” 对应原文的 “The nutritive value of seaweed has long been recognised.”，其中 nutritive 与 nutritious 同根，两者都是形容词且意义相近",
            "“a particularly nutritious food” 中的 food 与原文的 “absorbs and concentrates traces of a wide variety of minerals”（吸收并富集多种矿物质）和 “rich in vitamins”（富含维生素）构成“营养价值”这一标题的两个具体支撑点",
            "低发病率作为营养价值的证据：原文 “there is a remarkably low incidence of goitre amongst the Japanese … this may well be attributed to the high iodine content of this food” 用“甲状腺肿发病率极低可归因于高碘含量”反证海藻的营养价值"
          ],
          "locatingTip": "定位：小标题匹配题不用找题干里的词，而要找“段落功能”。A 段首句就以 “Seaweed is a particularly nutritious food” 亮出话题，中间紧接着出现 “The nutritive value of seaweed has long been recognised.”，nutritious 与 nutritive 同根词连续出现两次，是全段最醒目的信号。确定答案技巧：抓段落里反复出现的概念（食物、矿物质、维生素、碘），并把它们归到同一个上位概念“营养价值”上，即可锁定标题 v. Nutritious value of seaweeds。当段落以“某物富含某种成分、对健康有益”为叙述主线时，答案往往是 Nutritious value 一类的小标题。另外要警惕段中出现国名 Japan（对应干扰项 iii）与 Maoris 的饮食习俗，它们只是例证，不是段落主旨。",
          "analysis": "A 段共六句，功能是“介绍海藻的营养价值”。第 1 句给出总论：Seaweed is a particularly nutritious food, which absorbs and concentrates traces of a wide variety of minerals necessary to the body's health.（海藻是一种特别有营养的食物，它能吸收并富集人体健康所必需的多种矿物质。）紧接着第 2 句列举铝、钡、钙、氯、铜、碘、铁等元素，并说明这些微量元素由侵蚀作用产生、随河流与海流被带到海藻生长区；第 3 句转到维生素：Seaweeds are also rich in vitamins（海藻还富含维生素），并用爱斯基摩人从海藻中获取大量维生素 C 作为例证；第 4 句是明确的主题句：The nutritive value of seaweed has long been recognised.（海藻的营养价值很早就被认识到了。）第 5 句用日本人以及毛利人甲状腺肿发病率极低这一现象，说明这可以归因于海藻的高碘含量；末句补充毛利人用海藻、鲜果、坚果等制作果冻的旧俗，属于营养利用的延伸。整段的关键词是 nutritious、minerals、vitamins、iodine、nutritive value，全部指向“海藻的营养价值”，因此选 v. Nutritious value of seaweeds。段中虽提到日本和毛利人，但落点不是“某个国家如何使用海藻”，而是“海藻富含什么、对人有什么用”。",
          "traps": [
            "为什么不选 iii. Use of seaweeds in Japan：A 段提到 Japanese 只是作为“甲状腺肿发病率低、可归因于高碘”的例子，全段并没有讲日本如何食用或加工海藻，把国名当成段落主题是典型的局部信息陷阱。",
            "为什么不选 i. Locations and features of different seaweeds：A 段没有讲不同海藻的分布位置或形态特征，讲分类、颜色与生长区域的是 D 段。",
            "为什么不选 iv. Seaweed species around the globe：讲全球物种数量与新西兰所占份额的是 B 段（approximately 700 species、30 species of Gigartina），A 段只有成分与营养价值。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Paragraph B: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "B 段：从标题列表中选出与该段内容相符的小标题。（正确答案 ii. Various products of seaweeds 海藻的各种产品）",
          "answer": "ii",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "The gel-forming substance called agar which can be extracted from this species gives them great commercial application in seameal, from which seameal custard is made, and in cough mixture, confectionery, cosmetics, the canning, paint and leather industries"
          },
          "synonyms": [
            "标题中的 “products” 对应原文列举的一系列成品：seameal、seameal custard、cough mixture、confectionery、cosmetics、toothpaste 等",
            "“Various” 对应原文 “great commercial application in … and in … and in …” 的多项并列结构，表示应用领域众多",
            "“of seaweeds” 对应原文的 “extracted from this species”（从这一物种中提取），this species 指本段反复谈到的 Gigartina",
            "原文的 “duplicating pads”“the canning, paint and leather industries”“the manufacture of duplicating pads” 进一步说明产品与工业用途的多样性"
          ],
          "locatingTip": "定位：B 段前四句讲的是物种数量与别名（700 species、30 species of Gigartina、New Zealand carrageens），容易让人误以为段落主旨是“物种分布”；但段落过半后突然出现一大串并列名词（seameal、custard、cough mixture、confectionery、cosmetics、paint、leather、toothpaste）。确定答案技巧：统计段落的“信息重心”——B 段共六句，前四句都在谈物种数量与别名，只有第 5、6 两句才转入提取物和成品，其中末句用二战期间新西兰 Gigartina 被送往澳大利亚做牙膏的实例收尾，可见段落功能是“说明海藻能做成哪些产品”，故选 ii。小标题题的判断标准是“篇幅比重加段落收尾的落点”，而不是段落开头的第一句。",
          "analysis": "B 段开头确实先交代数量：New Zealand lays claim to approximately 700 species of seaweed（新西兰声称拥有约 700 种海藻），并说其中有 30 种左右是 Gigartina（与 carrageen 或 Irish moss 近缘），常被称为 New Zealand carrageens。但从第 5 句起，段落重心完全转到用途上：The gel-forming substance called agar which can be extracted from this species gives them great commercial application in seameal, from which seameal custard is made, and in cough mixture, confectionery, cosmetics, the canning, paint and leather industries, the manufacture of duplicating pads, and in toothpaste.（从这一物种中可提取的凝胶状物质 agar 使它们具有巨大的商业价值：用于海藻餐 seameal——海藻餐布丁即由此制成——还用于止咳糖浆、糖果、化妆品、罐头、油漆和皮革工业、誊写板的制造以及牙膏。）末句再补一例：In fact, during World War II, New Zealand Gigartina were sent to Australia to be used in toothpaste.（事实上二战期间新西兰的 Gigartina 被运往澳大利亚用于牙膏。）全段列举的都是“从海藻中提取的物质能做出哪些产品”，与标题 ii. Various products of seaweeds 完全吻合。段首的物种数量只是引出话题的背景信息，不足以构成段落主旨。",
          "traps": [
            "为什么不选 iv. Seaweed species around the globe：B 段虽然提到 700 species 与 worldwide，但全球分布只是开头的背景铺垫，段落主体（最后两句）讲的是 agar 与各种产品，篇幅与落点都不在“全球物种分布”上。",
            "为什么不选 vii. Where to find red seaweeds：B 段没有讨论红海藻的生长地点，讲 Gigartina 分布受限的是 C 段（distribution of the Gigartina is confined to certain areas），讲深浅水分布的是 D 段。",
            "为什么不选 ix. Mystery solved：B 段没有任何“谜题被解开”的表述或悬念，全文也没有这类内容，属于纯粹的干扰项。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Paragraph C: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "C 段：从标题列表中选出与该段内容相符的小标题。（正确答案 viii. Underuse of native species 本土物种未被充分利用）",
          "answer": "viii",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Yet although New Zealand has so much of the commercially profitable red seaweeds, several of which are a source of agar (Pterocladia, Gelidium, Chondrus, Gigartina), before 1940 relatively little use was made of them."
          },
          "synonyms": [
            "标题中的 “Underuse” 对应原文的 “relatively little use was made of them”（对它们的利用相当少），little use 即“利用不足”",
            "“native species” 对应原文的 “New Zealand has so much of the commercially profitable red seaweeds” 与后面的 Gigartina、Pterocladia 等本土物种",
            "“Underuse” 的第二重证据是原文 “New Zealand used to import the Northern Hemisphere Irish moss (Chondrus crispus) from England and ready-made agar from Japan.”，即本国明明有原料却要依赖进口成品",
            "转折词 “Yet although … before 1940 relatively little use was made of them” 把“资源丰富”与“利用极少”对照起来，正是标题 underuse（利用不足）的判断依据"
          ],
          "locatingTip": "定位：C 段首句用一个 Although 转折句同时给出“资源多”和“利用少”两个信息，是全段的主旨句；随后两句用“从英国进口 Irish moss、从日本进口现成 agar”把“利用不足”落到实处。确定答案技巧：小标题中的关键抽象词（underuse）往往对应原文的否定或不足类表达，本段就是 relatively little use、used to import 这两处；抓住它们即可排除“资源分布”类标题。注意段中确实出现了 distribution of the Gigartina is confined to certain areas 这样的分布描述，容易误选 vii. Where to find red seaweeds，但那段话只是说明“即便分布最少的东海岸也还有 Pterocladia 可用”，仍在支撑“本土资源充足却没被利用”这一主旨，所以不能把局部句子当段落主旨。",
          "analysis": "C 段的结构是“让步加转折加补救”。首句：Yet although New Zealand has so much of the commercially profitable red seaweeds, several of which are a source of agar (Pterocladia, Gelidium, Chondrus, Gigartina), before 1940 relatively little use was made of them.（然而，尽管新西兰拥有这么多可作商业用途的红海藻，其中好几种还是 agar 的来源，1940 年以前人们对它们的利用却相当少。）第 2 句给出“利用少”的具体表现：New Zealand used to import the Northern Hemisphere Irish moss (Chondrus crispus) from England and ready-made agar from Japan.（新西兰过去要从英格兰进口北半球的 Irish moss，从日本进口现成的 agar。）第 3、4 句解释本土资源的可用性：Gigartina 的分布因物种而异，只有北岛东海岸较为罕见；而即使在东海岸以及 Hokiangna 一带，也还有两种 Pterocladia 供应充足。末句给出转折性结果：Happily, New Zealand-made agar is now obtainable in health food shops.（令人欣慰的是，现在健康食品店已能买到新西兰自产的 agar。）把这段的层次压缩起来就是：本土红海藻资源丰富、可提取 agar，却在 1940 年前几乎没被利用，反而依赖进口，直到后来才实现自产。这正是标题 viii. Underuse of native species（本土物种利用不足）的含义，故选 viii。",
          "traps": [
            "为什么不选 vii. Where to find red seaweeds：C 段虽有 distribution of the Gigartina is confined to certain areas 一句，但它服务于“连分布最少的东海岸也还有充足的 Pterocladia”这一论点，落点仍是“资源够用却没被利用”，并非告诉读者去哪里找红海藻；系统介绍红海藻生长地点的是 D 段。",
            "为什么不选 ii. Various products of seaweeds：列举 agar、牙膏等产品的是 B 段，C 段提到 agar 只是为说明“本土就能产却仍要进口”。",
            "为什么不选 iv. Seaweed species around the globe：C 段谈的是新西兰本土物种的利用状况，不涉及全球物种分布；全球份额的讨论在 B 段。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Paragraph D: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "D 段：从标题列表中选出与该段内容相符的小标题。（正确答案 i. Locations and features of different seaweeds 不同海藻的分布地点与特征）",
          "answer": "i",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Seaweeds are divided into three classes determined by colour - red, brown and green - and each tends to live in a specific location."
          },
          "synonyms": [
            "标题中的 “different seaweeds” 对应原文的 “three classes … red, brown and green”（按颜色划分的三大类海藻）",
            "“Locations” 对应原文的 “each tends to live in a specific location” 以及全段的 “very well-defined zones”“shallow-water”“medium depths”“deeper water”“upper shore”等地点词",
            "“features” 对应原文对颜色变化的描述：“few are totally one colour; and especially when dry, some species can change colour quite significantly - a brown one may turn quite black, or a red one appear black, brown, pink or purple”",
            "段末 “Radiation from the sun, the temperature level, and the length of time immersed all play a part in the zoning of seaweeds.” 进一步说明“分布地点”这一主线"
          ],
          "locatingTip": "定位：D 段开头一句便给出全段框架——按颜色分三类、每类各有特定生长位置；接着用两个层次展开：一是颜色并非固定（干后变色），二是各类海藻的分布地带（浅水、中深、深水）与具体栖息地（中等潮位的平坦岩石面、低潮才露出的深水岩石、上滩）。确定答案技巧：把段落里反复出现的两类信息分别归到标题的 locations 与 features 上即可锁定 i。要注意本段出现了大量具体藻名（sea bombs、Venus' necklace、purple laver、bull kelp、strap weeds、sea cactus），这些正是“不同海藻”的例证，而不是某一种海藻的专题讨论，所以不能选只覆盖一个侧面的 vii. Where to find red seaweeds。",
          "analysis": "D 段是全文篇幅最长的一段，功能是“分类加分布”。首句立框架：Seaweeds are divided into three classes determined by colour - red, brown and green - and each tends to live in a specific location.（海藻按颜色分为红、褐、绿三类，每一类往往生长在特定的位置。）第 2 句谈特征层面的不确定性：除了一眼可辨的 sea lettuce（Ulva）外，很少有一种海藻是纯色的，干燥之后有些物种变色相当明显，褐色的可能变黑，红色的可能呈黑、褐、粉或紫色。第 3 句强调鉴定之所以仍然可行，是因为决定海藻生长位置的因素相当精确，它们倾向于出现在界限分明的区域里。第 4 句给出三类海藻的深度分布：绿藻主要是浅水藻类，褐藻属于中等深度，红藻生活在更深的水中。此后逐一给出栖息地实例：中等潮位附近的平坦岩石面是 sea bombs、Venus' necklace 和大多数褐藻最常见的栖息地，也是 purple laver 即毛利人所说的 karengo 的生长位置；只有在极低潮才露出的开阔海岸深水岩石，通常是 bull kelp、strap weeds 等坚韧种类的地盘；耐得住长时间日晒与空气暴露的物种通常在上滩，耐受力差的则更靠近低水位线或在其下方。末句总结影响因素：日照、温度、浸没时长共同决定海藻的分带。全段信息可归纳为“不同海藻的位置与特征”，故选 i。",
          "traps": [
            "为什么不选 vii. Where to find red seaweeds：红海藻只是本段三类中的一类，原文只用半句话交代 “the reds are plants of the deeper water”，而本段同时用了大量篇幅讲褐藻、绿藻以及各类具体藻种的栖息地，标题范围被这类选项收窄了。",
            "为什么不选 vi. Why it doesn't dry or sink：D 段虽然提到干燥后变色，但讲的是“颜色变化”这一外观特征，并未解释海藻为何不会干枯或下沉；真正讲浮力与防脱水的是 F 段。",
            "为什么不选 x. How seaweeds reproduce and grow：D 段谈的是“长在哪里”，不是“如何繁殖与生长”，繁殖方式是 E 段的内容。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Paragraph E: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "E 段：从标题列表中选出与该段内容相符的小标题。（正确答案 x. How seaweeds reproduce and grow 海藻如何繁殖与生长）",
          "answer": "x",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Propagation of seaweeds occurs by spores, or by fertilisation of egg cells. None have roots in the usual sense; few have leaves, and none have flowers, fruits or seeds."
          },
          "synonyms": [
            "标题中的 “reproduce” 对应原文的 “Propagation … occurs by spores, or by fertilisation of egg cells”（通过孢子或卵细胞受精进行繁殖），propagation 即繁殖",
            "标题中的 “grow” 对应原文的 “The plants absorb their nourishment through their fronds when they are surrounded by water”（植物在水中通过叶状体吸收养分），说明其生长方式",
            "原文的 “None have roots in the usual sense; few have leaves, and none have flowers, fruits or seeds.” 描述的是海藻的生理构造，属于“如何生长”这一层面的信息",
            "“the base or \"holdfast\" of seaweeds is purely an attaching organ, not an absorbing one” 说明固着器只负责附着、不负责吸收，进一步说明其生长机制"
          ],
          "locatingTip": "定位：E 段是全文最短的一段，只有三句，首句以 Propagation of seaweeds occurs by spores（海藻通过孢子繁殖）直接给出主题词，是全篇唯一谈繁殖的段落。确定答案技巧：抓住首句的 Propagation（繁殖）与后两句的构造与吸收方式（roots、leaves、flowers、fronds、holdfast），把两组合起来就是“繁殖与生长”，与标题 x 的两个动词一一对应。注意本段出现 spores、egg cells、fertilisation 等生物学术语，都属于繁殖范畴，不要被 D 段的地理分布或 F 段的生理适应干扰。",
          "analysis": "E 段三句话构成一个完整的功能段。第 1 句讲繁殖方式：Propagation of seaweeds occurs by spores, or by fertilisation of egg cells.（海藻的繁殖通过孢子或卵细胞受精实现。）第 2 句讲构造上的特殊性：None have roots in the usual sense; few have leaves, and none have flowers, fruits or seeds.（它们都没有通常意义上的根，很少有叶，也没有花、果实或种子。）第 3 句讲养分如何进入体内：The plants absorb their nourishment through their fronds when they are surrounded by water: the base or \"holdfast\" of seaweeds is purely an attaching organ, not an absorbing one.（植物被水包围时通过叶状体吸收养分：海藻基部所谓的固着器纯粹是附着器官，而非吸收器官。）三段信息分别回答“怎样繁殖”“有哪些器官”“怎样吸收养分成长”，合起来正是标题 x. How seaweeds reproduce and grow。由于本段的重点在“方式与机制”，与 D 段的“分布地点”、F 段的“防脱水与浮力”形成清晰分工，做题时只需辨认段落功能即可。",
          "traps": [
            "为什么不选 i. Locations and features of different seaweeds：E 段虽然提到 leaves、roots、holdfast 等构造，但出发点是“没有这些器官”以及“靠什么吸收养分”，并非按种类介绍外观特征与所在地点，后者是 D 段。",
            "为什么不选 vi. Why it doesn't dry or sink：E 段完全没有谈浮力或防脱水，讲 air-filled floats 与 mucilage 涂层的是 F 段。",
            "为什么不选 ix. Mystery solved：E 段是纯粹的客观说明，没有任何“悬而未解的问题被揭开”的语气或结构，全文也未出现谜题式叙述。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Paragraph F: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "F 段：从标题列表中选出与该段内容相符的小标题。（正确答案 vi. Why it doesn't dry or sink 它为什么不会干枯或下沉）",
          "answer": "vi",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Some of the large seaweeds maintain buoyancy with air-filled floats; others, such as bull kelp, have large cells filled with air."
          },
          "synonyms": [
            "标题中的 “doesn't sink” 对应原文的 “maintain buoyancy with air-filled floats”（用充气的浮囊保持浮力），浮力即不下沉的原因",
            "标题中的 “doesn't dry” 对应原文的 “often reduce dehydration either by having swollen stems that contain water” 与 “this coating is not only to keep the plant moist”（减少脱水、保持湿润）",
            "“Why” 对应原文反复出现的因果式解释：by having swollen stems、they may have swollen nodules、have coating of mucilage on the surface，即“通过什么方式做到”",
            "段末 “this coating is not only to keep the plant moist but also to protect it from the violent action of waves” 同时覆盖“保湿”与“抗浪”，说明本段解释的是海藻在暴露环境下的生存机制"
          ],
          "locatingTip": "定位：F 段首句就给出“浮力”这条线（maintain buoyancy with air-filled floats、large cells filled with air），第 2、3 句给出“防脱水”这条线（reduce dehydration、swollen stems、swollen nodules、slimy fluid、coating of mucilage），末句补充粘液涂层的双重作用（保湿与抗浪）。确定答案技巧：标题 vi 的两个动词 doesn't dry 与 doesn't sink 正是本段两条线的压缩表达，把 buoyancy 归到“不下沉”、把 dehydration 与 moist 归到“不干枯”即可锁定答案。注意本段出现了大量藻名（bull kelp、Venus' necklace、sea bomb、sea cactus），它们只是说明机制的例证，不要误判为“不同海藻的特征介绍”。",
          "analysis": "F 段逐层解释海藻如何在不利环境中维持生存。第 1 句讲浮力：Some of the large seaweeds maintain buoyancy with air-filled floats; others, such as bull kelp, have large cells filled with air.（一些大型海藻用充有空气的浮囊保持浮力；另一些如 bull kelp，则拥有充满空气的大细胞。）这两类结构回答了“为什么不会下沉”。第 2 句讲防脱水：Some, which spend a good part of their time exposed to the air, often reduce dehydration either by having swollen stems that contain water, or they may (like Venus' necklace) have swollen nodules, or they may have distinctive shape like a sea bomb.（有些海藻有相当长时间暴露在空气中，它们往往通过含有水分的膨大茎来减少脱水，有的（如 Venus' necklace）长有膨大的节，有的（如 sea bomb）则具有独特的形状。）第 3 句另举一法：Others, like the sea cactus, are filled with slimy fluid or have coating of mucilage on the surface.（另一些如 sea cactus，体内充满黏滑液体，或表面覆有黏液涂层。）末句说明这种涂层的双重功能：In some of the larger kelps, this coating is not only to keep the plant moist but also to protect it from the violent action of waves.（在有些大型海带中，这层涂层不仅是为了保持植株湿润，也是为了保护它免受海浪的猛烈冲击。）把“浮力”与“保湿”两条线索合起来，就是标题 vi. Why it doesn't dry or sink，故选 vi。",
          "traps": [
            "为什么不选 i. Locations and features of different seaweeds：F 段虽列举了 bull kelp、Venus' necklace、sea bomb、sea cactus 等，但讲的是它们各自用来应对暴露与风浪的机制，而非按类别介绍其生长地点；分类与地点是 D 段的内容。",
            "为什么不选 x. How seaweeds reproduce and grow：F 段没有涉及孢子、受精或养分吸收，繁殖与生长方式集中在 E 段。",
            "为什么不选 ii. Various products of seaweeds：F 段的 air-filled floats、mucilage 都是海藻自身的生理构造，不是可供商业利用的提取产品，产品列举在 B 段。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–10 流程图填空（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 10
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Gigartina seaweed (other name: 7 ______ )",
          "translation": "Gigartina 海藻（别名：7 ______）",
          "answer": "NZ carageens",
          "wordClass": "名词短语（复数；缩写 NZ 作前置定语修饰名词 carageens，指 Gigartina 的别名，在括号中作 other name 的同位语，不用冠词）",
          "locating": {
            "paragraph": "B",
            "quote": "These are often referred to as the New Zealand carrageens."
          },
          "synonyms": [
            "流程图中的 “other name” 对应原文的 “are often referred to as”（常被称为），二者都是“别名/另一种叫法”的表达",
            "“Gigartina seaweed” 对应原文的 “These”，代词回指前一句的 “some 30 species of Gigartina, a close relative of carrageen or Irish moss”",
            "“NZ” 对应原文的 “New Zealand”（新西兰的缩写形式）",
            "答案表中的 “carageens” 对应原文的 “carrageens”（原文为双 r 拼写 carrageens，答案表简写为 carageens，判定以答案表为准）"
          ],
          "locatingTip": "定位：流程图顶部给出专有名词 Gigartina，回原文扫读只需找 Gigartina，在第 B 段第 3 句即 “it is estimated that New Zealand has some 30 species of Gigartina, a close relative of carrageen or Irish moss” 出现，紧接着一句就是本题的落点。确定答案技巧：流程图问的是“别名（other name）”，原文用 are often referred to as 引出别名，因此只要把 referred to as 后面的名词短语取出即可；再对照流程图左侧的 NZ，可确认原文的 New Zealand 被缩写。注意 NO MORE THAN THREE WORDS 的限制，答案 NZ carageens 为两个词，符合要求；抄写时按答案表照抄，不要自行补全为 New Zealand carrageens，也不要改成原文的双 r 拼写。",
          "analysis": "B 段第 3 句先给出物种信息：For example, it is estimated that New Zealand has some 30 species of Gigartina, a close relative of carrageen or Irish moss.（例如，据估计新西兰拥有约 30 种 Gigartina，它是 carrageen 即 Irish moss 的近缘种。）紧接着第 4 句给出别名：These are often referred to as the New Zealand carrageens.（它们常被称为“新西兰角叉藻”。）流程图的第一个空要填的正是 Gigartina 的另一个名称，对应原文 referred to as 之后的名词短语。题干中的 NZ 是 New Zealand 的缩写，因此填写时按答案表写作 NZ carageens。需要提醒的是，答案表把原文的 carrageens 简写为 carageens（少了字母 r），并且采用了缩写 NZ，这与原文拼写略有出入，但按本套题答案表的既定形式填写即可，切勿自行“纠正”拼写而失分。从词性看，答案是一个由缩写与复数名词组成的名词短语，不加冠词 the。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Gigartina seaweed produces 8 ______ ; it is used to make a type of custard and other products.",
          "translation": "Gigartina 海藻产生 8 ______；它被用来制造一种布丁及其他产品。",
          "answer": "agar",
          "wordClass": "名词（不可数名词，指从 Gigartina 中提取的凝胶状物质；空格作 produces 的宾语，只需填不可数形式 agar，不加冠词）",
          "locating": {
            "paragraph": "B",
            "quote": "The gel-forming substance called agar which can be extracted from this species gives them great commercial application in seameal, from which seameal custard is made"
          },
          "synonyms": [
            "流程图中的 “produces” 对应原文的 “which can be extracted from this species”（可从中提取出来），Gigartina 产出这种物质",
            "“8 ______” 对应原文的 “The gel-forming substance called agar”，即被提取并用于后续产品的物质",
            "流程图下方 “is used to make” 对应原文的 “gives them great commercial application in”（带来巨大的商业应用），即被用于制造其他产品",
            "“a type of custard” 对应原文的 “seameal custard”，seameal 是布丁的原料，custard 即布丁"
          ],
          "locatingTip": "定位：流程图的主线是“Gigartina 产出某物，某物再被用来制造其他产品”，回原文只需找 Gigartina 之后的产物句，即第 B 段的 “The gel-forming substance called agar which can be extracted from this species …”。确定答案技巧：题干中的 produces 是一个抽象动词，原文并未直接出现该词，而是用 can be extracted from this species（可从这一物种中提取）来表达同一意思；被提取出来的物质就是 The gel-forming substance called agar，名称为 agar，即本题答案。要注意 agar 与 seameal 的分工：agar 是被提取的物质（本题），seameal 是 agar 的用途之一（第 9 题），两者在原文同一句中一前一后，切勿互相错填。答案为一个单词 agar，保持原文小写形式。",
          "analysis": "第 B 段第 5 句是第 7 至第 10 题共同的考点句：The gel-forming substance called agar which can be extracted from this species gives them great commercial application in seameal, from which seameal custard is made, and in cough mixture, confectionery, cosmetics, the canning, paint and leather industries, the manufacture of duplicating pads, and in toothpaste.（从这一物种中提取的、被称为 agar 的胶凝物质使它们具有巨大的商业应用价值：用于 seameal，海藻餐布丁即由 seameal 制成；还用于止咳糖浆、糖果、化妆品、罐头、油漆和皮革工业、誊写板的制造以及牙膏。）流程图的逻辑是“Gigartina 产出某物，该物用于制造两种产物链”：agar 是被提取的物质，也是流程图第 8 空的位置；由 agar 向左分出 to make 9（即 seameal），再由 seameal 制成 a type of custard（seameal custard）；由 agar 向右分出 to make medicines such as 10（即 cough mixture）以及 cosmetics、sweets、toothpastes 等。因此第 8 空填 agar。从词性看，agar 是不可数名词，空格前无冠词，作 produces 的宾语，只需填原形；NO MORE THAN THREE WORDS 的限制对单字答案没有影响。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "8 ______ is used to make 9 ______ , which is used to make a type of custard.",
          "translation": "8 ______ 被用来制造 9 ______，后者又被用来制造一种布丁。",
          "answer": "seameal",
          "wordClass": "名词（不可数名词，指由 agar 制成的一种海藻食品；空格作 is used to make 的宾语，填不可数形式 seameal，不加冠词）",
          "locating": {
            "paragraph": "B",
            "quote": "great commercial application in seameal, from which seameal custard is made"
          },
          "synonyms": [
            "流程图中的 “is used to make” 对应原文的 “gives them great commercial application in”（带来商业应用，即用于制造）",
            "“9 ______” 对应原文的 “seameal”，它是 agar 的直接用途",
            "流程图中的 “is used to make a type of custard” 与原文 “from which seameal custard is made” 同义：由 seameal 制成海藻餐布丁",
            "“a type of custard” 对应原文的 “seameal custard”，custard 与“布丁”对应"
          ],
          "locatingTip": "定位：流程图左支的关键线索是 “is used to make a type of custard”（用来做一种布丁），回原文找与布丁相关的词只需要看 custard，在第 B 段同一句中出现，即 seameal custard。确定答案技巧：原文的结构是 in seameal, from which seameal custard is made，介词 from which 回指前面的 seameal，说明“由 seameal 制成 seameal custard”，恰好对应流程图“9 用来做一种布丁”这一环，因此第 9 空填 seameal。注意区分层次：agar 是原料（第 8 空），seameal 是 agar 制成的中间品（第 9 空），seameal custard 才是最终的布丁；答案为一个单词 seameal，不要写成 seameal custard（这是两个词，且是下一级产物）。",
          "analysis": "本题与第 8 题共用同一句原文：The gel-forming substance called agar which can be extracted from this species gives them great commercial application in seameal, from which seameal custard is made, and in cough mixture, …。句中 in seameal 说明 agar 的第一项用途是制成 seameal；随后 from which seameal custard is made 中的 which 回指 seameal，说明 seameal 又被用来做 seameal custard（海藻餐布丁）。流程图把这条链画成分叉结构：顶端 Gigartina 产出 agar，agar 向左 “is used to make” 第 9 空，第 9 空再 “is used to make a type of custard”。把原文与图形逐环对应，第 9 空正是 seameal，其后的 a type of custard 对应 seameal custard。从词性看，空格位于 is used to make 之后作宾语，需要名词，seameal 为不可数名词，填原形即可；若误填 seameal custard，则既超出“最多三个词”的宽松限制所对应的信息层级，也会让下一环“用来做一种布丁”无所依托。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "8 ______ is used to make: medicines, such as 10 ______ ; cosmetics; sweets; toothpastes.",
          "translation": "8 ______ 被用来制造：药品，例如 10 ______；化妆品；糖果；牙膏。",
          "answer": "cough mixtures",
          "wordClass": "名词短语（复数，指药品类中的止咳糖浆；位于题干 such as 之后，作所列举 medicines 的举例项，故用复数 cough mixtures，而不是原文的单数 cough mixture）",
          "locating": {
            "paragraph": "B",
            "quote": "in cough mixture, confectionery, cosmetics, the canning, paint and leather industries, the manufacture of duplicating pads, and in toothpaste"
          },
          "synonyms": [
            "流程图右侧的 “is used to make” 对应原文的 “gives them great commercial application in … and in …”，即用于制造下列各类产品",
            "“medicines” 对应原文的 “cough mixture”（止咳糖浆属于药品），也对应原文列举中位居首位的医药类用途",
            "“cosmetics” 与原文 “cosmetics” 原词复现；流程图中的 “sweets” 对应原文的 “confectionery”（糖果类）；“toothpastes” 对应原文的 “toothpaste”",
            "答案表的 “cough mixtures” 对应原文的 “cough mixture”，原文为单数，答案表作复数，判定以答案表为准"
          ],
          "locatingTip": "定位：流程图右下角的四个并列项目（medicines、cosmetics、sweets、toothpastes）是极好的定位词，回原文第 B 段同一句中找到对应的 cough mixture、cosmetics、confectionery、toothpaste 即可，四个词几乎原样出现，说明该句就是考点句。确定答案技巧：题干 “medicines, such as 10 ______” 要求给出药品类中的具体例子；原文列举中唯一与药品相关的是 cough mixture（止咳糖浆），其余 cosmetics、confectionery、toothpaste 分别对应流程图自己已经给出的 cosmetics、sweets、toothpastes，因此第 10 空填 cough mixtures。注意参考答案表写作复数 cough mixtures，而原文是单数 cough mixture，答题时按答案表形式填写；同时不要填 cosmetics 或 toothpaste（它们是题干中已列出的其他类别，不是 medicines 的例子）。",
          "analysis": "同一句原文的后半部分列出了 agar 的一系列商业用途：… and in cough mixture, confectionery, cosmetics, the canning, paint and leather industries, the manufacture of duplicating pads, and in toothpaste.（……以及止咳糖浆、糖果、化妆品、罐头、油漆和皮革工业、誊写板的制造和牙膏。）流程图把这一长串用途整理成右侧的分支：medicines, such as 第 10 空；cosmetics；sweets；toothpastes。其中 cosmetics 与 toothpastes 在原文中原词出现，sweets 对应原文的 confectionery（糖果糕点），而属于药品范畴的只有 cough mixture（止咳糖浆），故第 10 空填 cough mixtures。这一步的判断关键是“归类”：流程图用 medicines 这一上位词收窄了范围，原文里能落进这一范围的只有止咳糖浆，其他并列项已各自在流程图中单独列出，因此不存在歧义。答案表采用复数形式 cough mixtures，填写时照抄答案表即可（原文为单数 cough mixture）。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 信息匹配（Match each statement with the correct option, A–C）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Can resist exposure to sunlight at high-water mark",
          "translation": "能在高潮线处抵抗阳光的暴晒。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Those species able to resist long periods of exposure to the sun and air are usually found on the upper shore"
          },
          "synonyms": [
            "“Can resist exposure to sunlight” 同义替换为原文的 “able to resist long periods of exposure to the sun and air”（能抵抗长时间暴露于阳光与空气中）",
            "“at high-water mark”（高潮线处）同义替换为原文的 “on the upper shore”（上滩），上滩即靠近高潮线、最容易长时间露出水面的地带",
            "由原文 “the green seaweeds are mainly shallow-water algae”（绿藻主要是浅水藻类）可知，能占据上滩、耐受暴晒的正是浅水生境的绿藻，对应选项 A"
          ],
          "locatingTip": "定位：题干的关键词是 resist exposure 与 high-water mark，回原文第 D 段找“抵抗日晒”的表述，即 “Those species able to resist long periods of exposure to the sun and air are usually found on the upper shore”。确定答案技巧：先确定“潮位与藻类的对应关系”——该句所在段落前面已交代 green seaweeds are mainly shallow-water algae（绿藻主要生活在浅水），而 able to resist exposure 的物种又位于 the upper shore（上滩，即高潮线附近），两处信息指向同一类群，即浅水、耐晒的绿藻，故选 A。做题时不要被同段出现的 brown seaweeds（位于中等深度、中等潮位的平坦岩石面）混淆，那是更靠下、暴露更少的生境。",
          "analysis": "第 D 段先按深度给三类海藻定位：Although there are exceptions, the green seaweeds are mainly shallow-water algae; the browns belong to medium depths, and the reds are plants of the deeper water.（虽有例外，绿藻主要是浅水藻类；褐藻属于中等深度；红藻生活在更深的水中。）随后描述潮位带：Flat rock surfaces near mid-level tides are the most usual habitat of sea bombs, Venus' necklace and most brown seaweeds.（中等潮位附近的平坦岩石表面是 sea bombs、Venus' necklace 和大多数褐藻最常见的栖息地。）而本题的定位句紧随其后出现：Those species able to resist long periods of exposure to the sun and air are usually found on the upper shore, while those less able to stand such exposure occur nearer to or below the low-water mark.（能抵抗长时间暴露于阳光与空气的物种通常出现在上滩，而耐受能力差的则出现在更靠近低水位线或更低的位置。）上滩就是高潮时所淹没、其余时间长时间暴露在日光与空气中的地带，与题干 high-water mark 吻合；而“耐受暴晒”这一特性与“浅水绿藻”的生境一致——浅水处的绿藻本就长期承受日晒与暴露，因此只能选 A Green seaweeds。B 褐藻所处的 medium depths 与 mid-level tides 暴露程度小得多，C 红藻生活在深水中几乎不接触空气。",
          "traps": [
            "为什么不是 B Brown seaweeds：原文给出的褐藻位置是 “the browns belong to medium depths” 与 “Flat rock surfaces near mid-level tides are the most usual habitat of … most brown seaweeds”，中等潮位与中等深度意味着暴露时间远短于上滩，其耐晒需求也远低于与高潮线相伴的浅水藻，与题干 high-water mark 不符。",
            "为什么不是 C Red seaweeds：红藻在原文中的位置是 “the reds are plants of the deeper water” 以及 “Deep-water rocks on open coasts, exposed only at very low tide”，它们生活在深水中、仅在极低潮才露出，根本谈不上抵抗高潮线处的强烈日晒。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Grow in far open sea water",
          "translation": "生长在远离岸边的开放海域中。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Although there are exceptions, the green seaweeds are mainly shallow-water algae; the browns belong to medium depths, and the reds are plants of the deeper water."
          },
          "synonyms": [
            "“Grow in far open sea water” 同义替换为原文的 “the reds are plants of the deeper water”（红藻是更深水域的植物），深水即远离海岸的开放海域",
            "“far open sea” 与原文的 “deeper water” 对应，也对应下文 “Deep-water rocks on open coasts, exposed only at very low tide”（只有在极低潮才露出的开阔海岸深水岩石）中的 open coasts 与 Deep-water",
            "“Grow” 同义替换为原文的 “are plants of”，直译即“是……的植物”，表示生长环境"
          ],
          "locatingTip": "定位：题干的核心是“生长在远海开放水域”，回原文第 D 段找深度分层的句子，即 “the green seaweeds are mainly shallow-water algae; the browns belong to medium depths, and the reds are plants of the deeper water”。确定答案技巧：把题干的三个要素逐一映射——Grow 对应 are plants of / belong to，far open sea water 对应 the deeper water（配合下文的 open coasts、Deep-water rocks），那么对应的类别就是 the reds，即 C Red seaweeds。做题时要注意“远海深水”这一生境的反面：绿藻的 shallow-water（浅水，靠岸、易暴露）与褐藻的 medium depths（中等深度）都更接近陆地，只有红藻与深水、开阔海岸挂钩，因此选 C。",
          "analysis": "第 D 段的核心分类句把三类海藻与水深对应起来：Although there are exceptions, the green seaweeds are mainly shallow-water algae; the browns belong to medium depths, and the reds are plants of the deeper water.（虽有例外，绿藻主要是浅水藻类；褐藻属于中等深度；红藻属于更深的水域。）题干说某种海藻 “Grow in far open sea water”（生长在遥远的开放海水中），其中的 far（远）与 open（开放、无遮挡）正对应 deeper water（更深的水）以及同段后文的 Deep-water rocks on open coasts, exposed only at very low tide（开阔海岸的深水岩石，仅在极低潮露出）。深水开阔海域既是远离岸边之处，也是红藻的典型生境，因此答案是 C Red seaweeds。做本题时可与第 11 题形成对照：上滩（high-water mark）对应浅水耐受暴晒的绿藻，深水开阔海域对应红藻，中间的 medium depths 与中等潮位则属于褐藻，三类藻的分布形成完整的三级梯度，只要抓住这个梯度就不会选错。",
          "traps": [
            "为什么不是 A Green seaweeds：原文明确说绿藻是 “shallow-water algae”（浅水藻类），浅水靠近海岸、暴露频繁，与题干 far open sea water（远离岸边的开放海域）方向相反。",
            "为什么不是 B Brown seaweeds：褐藻在原文中的位置是 “the browns belong to medium depths”（中等深度）以及 “Flat rock surfaces near mid-level tides … most brown seaweeds”（中等潮位的平坦岩石面），既不“远”也不“深”，不符合 far open sea water 的描述。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Share their habitat with karengo",
          "translation": "与 karengo 共享栖息地。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Flat rock surfaces near mid-level tides are the most usual habitat of sea bombs, Venus' necklace and most brown seaweeds. This is also the location of the purple laver or Maori karengo"
          },
          "synonyms": [
            "“Share their habitat with karengo” 同义替换为原文的 “This is also the location of the purple laver or Maori karengo”，其中 This 回指上一句所说的栖息地，also 表示“同一地点还有它”",
            "“habitat” 与原文的 “the most usual habitat”“the location” 同义，均指生长地点",
            "“karengo” 与原文的 “Maori karengo”（即 purple laver）原词对应",
            "与 karengo 同居一处的具体对象由原文给出：“sea bombs, Venus' necklace and most brown seaweeds”，其中明确提到藻类的只有 most brown seaweeds，故对应选项 B"
          ],
          "locatingTip": "定位：题干中的 karengo 是一个独特的毛利语词，全文只出现一次，扫读时极易捕捉，位于第 D 段 “This is also the location of the purple laver or Maori karengo, which looks rather like a reddish-purple lettuce.”。确定答案技巧：先读它前一句，弄清 This 所指的地点与住客——前一句说 “Flat rock surfaces near mid-level tides are the most usual habitat of sea bombs, Venus' necklace and most brown seaweeds.”，即该地点的主体居民是大多数褐藻；再看本题的 also 一词，说明 karengo 与这些褐藻共处同一生境，因此答案是 B Brown seaweeds。注意 purple laver 外观像红紫色的生菜，容易让人误选 C Red seaweeds，但原文只说它的颜色偏红紫，并未把它归入红藻类，真正的判分依据是它与 most brown seaweeds 同处中等潮位的平坦岩石面。",
          "analysis": "第 D 段在描述潮位带时连续两句构成一组对照：Flat rock surfaces near mid-level tides are the most usual habitat of sea bombs, Venus' necklace and most brown seaweeds.（中等潮位附近的平坦岩石表面是 sea bombs、Venus' necklace 以及大多数褐藻最常见的栖息地。）This is also the location of the purple laver or Maori karengo, which looks rather like a reddish-purple lettuce.（这里也是 purple laver 即毛利语所称 karengo 的所在地，它看上去很像一种红紫色的生菜。）第 2 句的 This 回指第 1 句所说的“中等潮位附近的平坦岩石表面”，also 表示“在同一地点还有”，因此 karengo 与上一句列举的物种共享栖息地。上一句所列举的对象中，sea bombs 与 Venus' necklace 都是具体藻名（后文 F 段可见 Venus' necklace 靠膨大的节减少脱水，sea bomb 靠独特形状），而能与选项 A、B、C 三类对应的只有 most brown seaweeds，题干问的是“与 karengo 共享栖息地的是哪一类海藻”，故答案为 B Brown seaweeds。",
          "traps": [
            "为什么不是 A Green seaweeds：原文把绿藻定位在 “shallow-water”（浅水）生境，而 karengo 所在的是 “Flat rock surfaces near mid-level tides”（中等潮位附近的平坦岩石面），位置不同；本段也没有把 karengo 与绿藻并列。",
            "为什么不是 C Red seaweeds：karengo 又名 purple laver，外形是红紫色，是本题最大的干扰点；但原文用颜色描述外形并不等于把它归入红藻类，红藻在原文中的位置是 “the reds are plants of the deeper water”，而 karengo 明确位于中等潮位的地带，与深水红藻生境相反。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
