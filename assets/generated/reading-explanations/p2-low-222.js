(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-low-222", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-low-222",
  "meta": {
    "examId": "p2-low-222",
    "title": "Ideal Homes 理想居所",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–18 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 18
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "reasons why a particular construction material is advantageous",
          "translation": "某种建筑材料具有优势的原因。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "As the Dutch housing contractor R van der Ley has argued in promoting a series of clay housing projects in developing countries, clay has many benefits over its industrialized version, brick. Clay blocks cost only half as much as ordinary bricks."
          },
          "synonyms": [
            "「a particular construction material」同义替换为原文的「Clay」，即该段集中讨论的建筑材料",
            "「reasons why … is advantageous」同义替换为原文的「clay has many benefits over its industrialized version, brick」，好处即优势所在",
            "原文用四条并列表述给出具体理由：「cost only half as much as ordinary bricks」（便宜一半）、「generates work because people can find it, mould it, bake it and work it themselves」（创造就业）、「Two hundred clay bricks can be made with the fuel oil that makes just one ordinary brick」（省燃料）、「an excellent insulator … and can easily be recycled」（隔热且可回收）"
          ],
          "locatingTip": "定位：题干关键词 a particular construction material（某种建筑材料）指向全文唯一集中讨论一种材料的段落。扫读每段首句即可发现，只有 G 段由「Traditional building materials, like traditional building designs, are being rediscovered …」起头，随后反复出现 Clay，因此直接锁定 G 段。确定答案技巧：段落信息匹配考的是「题干所述信息在哪一段」，关键看该段有没有密集的「理由罗列」。G 段先用「clay has many benefits over its industrialized version, brick」总起，再连续四句说明便宜、能创造就业、省燃油、隔热可回收，整段就是「某种材料为何有优势」的原因清单，与题干完全对应。",
          "analysis": "G 段先说「Traditional building materials, like traditional building designs, are being rediscovered by those looking for low-energy solutions to the current construction needs.」（传统建筑材料正像传统设计一样被重新发现，以满足当前建筑的低碳需求），点明落点。接着引出 clay：「Clay is one such material: As the Dutch housing contractor R van der Ley has argued in promoting a series of clay housing projects in developing countries, clay has many benefits over its industrialized version, brick.」（黏土就是这样一种材料：正如荷兰住宅承包商 van der Ley 在推广发展中国家黏土住房项目时所主张的，黏土相比其工业化版本——砖，有许多优点）。随后四句逐一展开这些「benefits」：一、价格优势「Clay blocks cost only half as much as ordinary bricks.」；二、就业优势「Clay also generates work because people can find it, mould it, bake it and work it themselves.」；三、能耗优势「Two hundred clay bricks can be made with the fuel oil that makes just one ordinary brick.」；四、物理性能与环保「Moreover, clay is an excellent insulator against both cold and heat outside, and can easily be recycled.」。题干中的 a particular construction material 即 Clay，is advantageous 即 has many benefits，而 reasons why 正是这四句所列的具体理由，段落对应关系非常直接。",
          "traps": [
            "为什么不是 A：A 段虽然出现了「concrete boxes」（混凝土建筑）、「floorboards」（木地板）等建材字眼，但那只是描述现代建筑与传统 kampung 房屋的构造差异及过热问题（heat traps），并没有就某一种材料优于另一种材料罗列理由。",
            "为什么不是 H：H 段确实提到保温（thermal insulation），但那是瑞典 1983 年国家标准的执行结果（双层玻璃、墙体屋顶保温），属于建筑技术与立法，不是某种材料相对另一种的优势对比。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "an example of a construction design which benefits domestic interaction",
          "translation": "一个有利于家庭互动的建筑设计实例。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "The buildings were inward‑looking, which served the dual function of focusing attention on the courtyard, where family members spend time together, and protecting living areas from the rays of the sun."
          },
          "synonyms": [
            "「an example of a construction design」同义替换为原文以 wind-tower buildings 为例的说明句「Typically, these wind-tower buildings were made of local materials … The buildings were inward-looking」，内向型布局正是该设计手法",
            "「benefits domestic interaction」同义替换为原文的「focusing attention on the courtyard, where family members spend time together」，家人共同活动即家庭互动",
            "「the dual function」中的第一项功能对应题干，第二项「protecting living areas from the rays of the sun」是干扰信息，与家庭互动无关"
          ],
          "locatingTip": "定位：题干中的 domestic interaction（家庭互动）在全文只以「where family members spend time together」（家人在此共处）的形式出现，位于 E 段末句，扫读 family、courtyard 这类生活化词汇即可停住。确定答案技巧：段落信息匹配遇到「功能/作用」类题干，要在原文找明确交代设计用途的句子。E 段说建筑是「inward-looking（内向型）」的，并给出双重功能，其中一项是「focusing attention on the courtyard, where family members spend time together」，即把活动与注意力引向家人共处的庭院，这正是「有利于家庭互动的设计实例」。",
          "analysis": "E 段讲空调出现之前阿拉伯世界靠建筑设计降温：先介绍风塔的原理「a tall structure with vertical vents at the top that open in all directions to catch any passing breeze」，再讲建材「made of local materials such as stone, mud brick, wood and palm-tree fronds」，最后一句是本段的功能落点：「The buildings were inward-looking, which served the dual function of focusing attention on the courtyard, where family members spend time together, and protecting living areas from the rays of the sun.」（这些建筑是内向型的，这起到双重作用：把注意力集中于家人共处的庭院，同时保护起居区免受阳光直射）。题干 an example of a construction design 对应「inward-looking」这一布局设计，benefits domestic interaction 对应「focusing attention on the courtyard, where family members spend time together」，因此答案是 E 段。注意句中 dual function 提示有两项作用，题干只对应第一项。",
          "traps": [
            "为什么不是 K：K 段虽然提到房子是「social and psychological spaces」（社会与心理空间），但那是全文结尾的概括议论，全段没有任何具体的建筑实例，而题干明确要求 an example。",
            "为什么不是 F：F 段虽有具体实例（约旦红海边的获奖村庄），但讲的是节能（conserve energy）、夏季通风降温与冬季保暖，没有涉及家庭成员的共同活动。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "a description of a house that is ventilated from below",
          "translation": "一栋从下方通风的房屋的描述。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "The raised structure ensures a cooling breeze comes up through the floorboards, while the high roof acts as a chimney to release hot air."
          },
          "synonyms": [
            "「ventilated from below」同义替换为原文的「a cooling breeze comes up through the floorboards」，「from below」对应「up through the floorboards」",
            "「ventilated」同义替换为原文的「cooling breeze」，并呼应段首的「year-round ventilation」",
            "「a house」对应原文的「The traditional kampung houses of Malaysia」与「The raised structure」（架高的结构）"
          ],
          "locatingTip": "定位：题干「从下方通风」是很具体的空间描述，回原文找「风从下面上来」的表述即可，A 段「a cooling breeze comes up through the floorboards」与之精确对应。确定答案技巧：A 段同时写了两条通风路径——地板缝进风（from below）与高屋顶排热（acts as a chimney to release hot air），题干只取前者，因此不存在歧义，答案是 A 段。",
          "analysis": "A 段以 kampung 房屋为例说明传统设计不需要空调：「The traditional kampung houses of Malaysia do not need air-conditioning. Built on stilts and with steep roofs, they have year-round ventilation.」（马来西亚传统 kampung 房屋无需空调。它们建在支柱上、屋顶陡峭，全年都有自然通风）。紧接着给出本题定位句：「The raised structure ensures a cooling breeze comes up through the floorboards, while the high roof acts as a chimney to release hot air.」（架高的结构使凉风从地板缝隙向上吹入，而高屋顶则像烟囱一样排出热气）。其中 the raised structure（架高的结构）即题干 a house 的构造特征，comes up through the floorboards（从地板下向上）即 ventilated from below，因此判为 A 段。",
          "traps": [
            "为什么不是 E：E 段的风塔同样用于通风降温，但其构造是「vertical vents at the top that open in all directions to catch any passing breeze」，风从顶部四面进入，与「从下方通风」方向相反。",
            "为什么不是 F：F 段提到约旦村庄「combines the ventilation system of the wind towers for summer coolness」，仍属风塔式顶部通风，且该段重点在节能与冬夏两季的舒适，没有地板下送风的描述。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "an example of self-sufficient energy supply",
          "translation": "一个自给自足的能源供应实例。",
          "answer": "J",
          "wordClass": "",
          "locating": {
            "paragraph": "J",
            "quote": "Such projects are demonstrating that countries, whether developing or developed, no longer need huge national grids to supply electricity. Every home can do its own thing with the help of a solar panel and a storage battery."
          },
          "synonyms": [
            "「self-sufficient energy supply」同义替换为原文的「Every home can do its own thing with the help of a solar panel and a storage battery」，每家自行发电储电即能源自给",
            "同段前一句「no longer need huge national grids to supply electricity」与「self-sufficient」对应，说明不再依赖外部电网",
            "「an example」对应原文菲律宾项目这一具体案例：「a project commenced to install solar panels for 400,000 people in 150 villages」"
          ],
          "locatingTip": "定位：题干关键词 self-sufficient energy supply 提示要找「不用外接电网、自己发电」的内容，识别词是 solar panel 与 storage battery，二者只出现在 J 段末句。确定答案技巧：判断「自给自足」要看原文有没有「不再需要外部供电」的表述。J 段先说这些项目证明国家「no longer need huge national grids to supply electricity」，再说「Every home can do its own thing with the help of a solar panel and a storage battery」，即每户家庭靠太阳能板加蓄电池自行解决用电，正是题干所说的实例。",
          "analysis": "J 段承接 I 段的节能话题，转入可再生能源：「As well as more efficient use of energy, the world also needs new sources of renewable power.」（除了更高效地使用能源，世界还需要新的可再生电力来源）。随后举菲律宾为例：「The world's biggest solar power installation got underway in the Philippines, in 2001, where a project commenced to install solar panels for 400,000 people in 150 villages.」（2001 年，全球最大的太阳能发电装置在菲律宾开工，为 150 个村庄的 40 万人安装太阳能板）。最后给出本题定位句：「Such projects are demonstrating that countries, whether developing or developed, no longer need huge national grids to supply electricity. Every home can do its own thing with the help of a solar panel and a storage battery.」（这类项目表明，无论发展中国家还是发达国家，都不再需要庞大的国家电网供电；每个家庭靠自己的一块太阳能板和一块蓄电池就能自给自足）。题干 an example of self-sufficient energy supply 与「Every home can do its own thing」「no longer need huge national grids」完全对应。",
          "traps": [
            "为什么不是 I：I 段讲的是 super-windows 这类节能技术，作用在「少用电」（降低制冷与供暖需求），题干要求的是能源「供应（supply）」，I 段没有提到任何自主发电装置。",
            "为什么不是 C：C 段提出的白色屋顶、树荫、浅色铺装同样只是降低城市温度、减少空调需求，属于节省能源，并非提供新的能源来源。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "suggested methods of reducing temperatures in a city",
          "translation": "降低城市温度的建议做法。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "If Los Angeles painted its roofs white, planted trees to shade buildings, and chose lighter‑colored paving, it could reduce city temperatures by 3°C and cut the annual air‑conditioning bill by US$170 million a year."
          },
          "synonyms": [
            "「suggested methods」同义替换为原文 If 引导的虚拟条件句所列举的三种做法：「painted its roofs white」「planted trees to shade buildings」「chose lighter-colored paving」",
            "「reducing temperatures」同义替换为原文的「reduce city temperatures by 3°C」",
            "「in a city」同义替换为原文的具体城市名「Los Angeles」，并呼应前文「if Los Angeles painted its roofs white」的假设"
          ],
          "locatingTip": "定位：题干 reducing temperatures in a city 直接对应原文「reduce city temperatures by 3°C」，数字与温度符号 3°C 是极醒目的定位标记，只出现在 C 段末句。确定答案技巧：题干中的 suggested methods（建议的做法）提示原文应出现「提议做某事」的列举结构。C 段用 If 引导的虚拟条件句一口气列出三招——把屋顶刷白、种树为建筑遮阴、铺浅色路面，随后说明效果是把城市温度降低 3°C，与题干严丝合缝，故选 C 段。",
          "analysis": "C 段讲现代主义者观念的转变：过去想让建筑隔绝自然、用空调取代自然，如今「Slowly, they are seeing the benefit of working with nature, rather than against it.」（他们正逐渐认识到顺应自然而非对抗自然的好处）。随后以加州为例：那里空调用电可能是全球最多，而「According to Arthur Rosenfeld from the University of California, what California needs is white paint.」（加州需要的只是白漆）。紧接着是定位句：「If Los Angeles painted its roofs white, planted trees to shade buildings, and chose lighter-colored paving, it could reduce city temperatures by 3°C and cut the annual air-conditioning bill by US$170 million a year.」（如果洛杉矶把屋顶刷白、种树为建筑遮阴、并选用浅色路面，城市温度可降低 3°C，每年空调开支可减少 1.7 亿美元）。题干 suggested methods 对应这一 If 条件句里的三项措施，reducing temperatures in a city 对应 reduce city temperatures，段落归属明确。",
          "traps": [
            "为什么不是 A：A 段虽然也涉及降温（靠建筑自身构造保持凉爽），但对象是单栋房屋的固有设计特征，不是针对整座城市提出的多条建议，也没有列举多种做法。",
            "为什么不是 H：H 段的保温与双层玻璃窗是瑞典国家标准的执行结果，目的是在寒冷气候中保暖（a fortress against the cold air outside），与降低城市温度无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–22 人名观点匹配（Match each person with the correct idea, A–G）",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 22
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "Muhammad Peter Davis",
          "translation": "穆罕默德·彼得·戴维斯（Muhammad Peter Davis）。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "The builders of kampung houses \"had no knowledge of modern science or engineering but they came up with the perfect design,\" says Davis."
          },
          "synonyms": [
            "人名原词复现：「Muhammad Peter Davis of University Putra Malaysia」在 A 段出现，随后又以「says Davis」回指同一人",
            "「Traditional knowledge can be superior to modern knowledge」同义替换为原文的「had no knowledge of modern science or engineering but they came up with the perfect design」（没有现代科学知识却造出完美设计，等于说传统经验胜于现代知识）",
            "「modern knowledge」在原文有直接反面映衬：现代城市建筑被称为「heat traps」，且「typical modern Malaysian houses are 5°C hotter than the air outside」，可见现代做法反而不如传统"
          ],
          "locatingTip": "定位：人名 Muhammad Peter Davis 是大写专有名词，全文只在 A 段出现，扫读大写词即可一步锁定。确定答案技巧：观点匹配要先还原被采访者言论的实质判断，再回选项里找最贴合的一条。Davis 的评价有两层：赞誉 kampung 房屋的建造者「had no knowledge of modern science or engineering but they came up with the perfect design」，同时把现代混凝土建筑贬为「heat traps」（热陷阱），褒传统、贬现代，正是 D「传统知识可能优于现代知识」。",
          "analysis": "A 段先客观描述 kampung 房屋的降温原理，随后引入 Davis 的评价：「The airtight, concrete boxes of modern city construction, in contrast, are heat traps, says Muhammad Peter Davis of University Putra Malaysia.」（马来西亚博特拉大学的 Muhammad Peter Davis 说，相比之下，现代城市建筑中那些密不透风的混凝土盒子就是热陷阱）。接着给出数据「He has calculated that typical modern Malaysian houses are 5°C hotter than the air outside.」（他计算出典型的现代马来西亚房屋比室外空气热 5°C），最后是本题的定位句：「The builders of kampung houses \"had no knowledge of modern science or engineering but they came up with the perfect design,\" says Davis.」（Davis 说，kampung 房屋的建造者「并不懂现代科学或工程，却设计出了完美的方案」）。前后对比的落脚点就是：传统建造者缺乏现代科学知识，成果却胜于依赖现代技术建造的混凝土房屋，故对应 D。",
          "traps": [
            "为什么不是 B：B 选项说人们为了显得现代而抛弃传统住宅设计，这确实是原文 B 段的内容（In the name of modernism, people have thrown away architecture …），但那是全文作者的概述，Davis 从未表达这一观点，观点匹配必须落到人名所在的段落。",
            "为什么不是 G：G 选项是「有一个非常简单、能省空调费用的办法」，对应的是 C 段 Rosenfeld 的白色屋顶建议，与 Davis 讨论的传统建筑通风设计无关。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Arthur Rosenfeld",
          "translation": "阿瑟·罗森费尔德（Arthur Rosenfeld）。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "According to Arthur Rosenfeld from the University of California, what California needs is white paint."
          },
          "synonyms": [
            "人名原词复现：「Arthur Rosenfeld from the University of California」在 C 段出现",
            "「a very simple solution」同义替换为原文的「what California needs is white paint」（只需把屋顶刷白，方案极简）",
            "「save on the cost of air-conditioning」同义替换为原文的「cut the annual air-conditioning bill by US$170 million a year」（削减年度空调账单 1.7 亿美元）"
          ],
          "locatingTip": "定位：人名 Arthur Rosenfeld 只出现在 C 段，扫大写词即可定位。确定答案技巧：先把人物的话还原成「措施加效果」的公式。Rosenfeld 的方案是「what California needs is white paint」（刷白漆）——极简；效果是「cut the annual air-conditioning bill by US$170 million a year」——省空调费。方案简单加省空调开支，与 G 完全吻合，故选 G。",
          "analysis": "C 段中 Rosenfeld 出场时原文写道：「According to Arthur Rosenfeld from the University of California, what California needs is white paint.」（加州大学的 Arthur Rosenfeld 认为，加州需要的只是白漆）。随后一句用假设句展开具体做法与收益：「If Los Angeles painted its roofs white, planted trees to shade buildings, and chose lighter-colored paving, it could reduce city temperatures by 3°C and cut the annual air-conditioning bill by US$170 million a year.」（如果洛杉矶把屋顶刷白、种树遮阴、铺浅色路面，城市温度可降 3°C，每年空调开支可省 1.7 亿美元）。Rosenfeld 的核心主张因此可以概括为「一个极其简单的办法（白漆）能大幅削减空调费用」，与选项 G「There is a very simple solution that can save on the cost of air-conditioning」一一对应。",
          "traps": [
            "为什么不是 A：A 选项讲某种建筑材料带来社会经济影响，那是 G 段 R van der Ley 的主张（黏土砖便宜且能创造就业），与 Rosenfeld 的刷白漆方案无关。",
            "为什么不是 E：E 选项要求「冷暖两项开销都能省」，而 Rosenfeld 的方案只针对高温与空调（reduce city temperatures、air-conditioning bill），全段未提及取暖费用。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "R van der Ley",
          "translation": "R·范德雷（R van der Ley）。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "Clay blocks cost only half as much as ordinary bricks. Clay also generates work because people can find it, mould it, bake it and work it themselves."
          },
          "synonyms": [
            "人名原词复现：「the Dutch housing contractor R van der Ley」出现在 G 段",
            "「a certain construction material」在原文的具体所指为「Clay」，即该段集中讨论的建筑材料",
            "「socio-economic impact」对应原文两条并列益处：经济层面的「Clay blocks cost only half as much as ordinary bricks」（价格只有普通砖的一半）与社会层面的「Clay also generates work because people can find it, mould it, bake it and work it themselves」（让人自食其力、创造就业）"
          ],
          "locatingTip": "定位：人名 R van der Ley 只出现在 G 段，且紧跟在人物身份 the Dutch housing contractor 之后，很容易扫到。确定答案技巧：选项 A 的关键词 socio-economic 可拆成「社会」与「经济」两头，回到 G 段逐一对应：黏土砖价格只有普通砖一半（经济），又能带动人们自己采集、成型、烧制（社会就业），正好双向吻合，故选 A。",
          "analysis": "G 段在推出黏土这种材料时写道：「Clay is one such material: As the Dutch housing contractor R van der Ley has argued in promoting a series of clay housing projects in developing countries, clay has many benefits over its industrialized version, brick.」（黏土就是这样一种材料：正如荷兰住宅承包商 R van der Ley 在发展中国家推广一系列黏土住房项目时所主张的那样，黏土相比它的工业化版本——砖，有诸多优点）。该主张随后被具体化：「Clay blocks cost only half as much as ordinary bricks.」（黏土砖成本只有普通砖的一半）——对应经济影响；「Clay also generates work because people can find it, mould it, bake it and work it themselves.」（黏土还能创造就业，因为人们可以自己找到、塑形、烧制并加工它）——对应社会影响。两项合起来正是 A 选项所说的「材料选择可以带来社会经济影响」。",
          "traps": [
            "为什么不是 G：G 选项只强调「简单办法省空调费」，而 van der Ley 讨论的是建材价格与就业，完全没有涉及空调或降温。",
            "为什么不是 E：E 选项要求同时节省制冷与取暖费用，G 段虽提到「clay is an excellent insulator against both cold and heat outside」，但那是材料的隔热性能，并未提及由此节省冷暖设备开支，且选项 E 的核心是「创新装置」而非建材选择。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "Amory Lovins",
          "translation": "阿莫里·洛文斯（Amory Lovins）。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "I",
            "quote": "In the United States, Amory Lovins has promoted a range of low‑energy technologies: \"super‑windows\", for example, which let in invisible light but can be \"tuned\" to either allow in, or reflect away, infrared solar radiation — the stuff that heats. Buildings with large expanses of window (and big energy bills) can be designed to achieve optimum temperatures."
          },
          "synonyms": [
            "人名原词复现：「Amory Lovins has promoted a range of low-energy technologies」出现在 I 段",
            "「an innovation」同义替换为原文的「\"super-windows\"」，即该段推广的核心技术",
            "「can save costs on both air-conditioning and heating」对应原文「can be \"tuned\" to either allow in, or reflect away, infrared solar radiation — the stuff that heats」与「achieve optimum temperatures」：既能放进红外辐射取暖，也能反射掉以降温，冷暖两端都受益"
          ],
          "locatingTip": "定位：人名 Amory Lovins 只出现在 I 段，一词锁定。确定答案技巧：选项 E 的关键词是 both … and（冷暖兼顾），要在原文找同时涉及「让热量进来」和「把热量挡出去」的技术。I 段的 super-windows 能透过不可见光，并可「调」为放进或反射红外太阳辐射（原文特意注明这正是造成热量的东西），从而使大面积用窗的建筑达到「optimum temperatures」，即冷、暖两种需求都能降低成本，故选 E。",
          "analysis": "I 段写：「In the United States, Amory Lovins has promoted a range of low-energy technologies: \"super-windows\", for example, which let in invisible light but can be \"tuned\" to either allow in, or reflect away, infrared solar radiation — the stuff that heats. Buildings with large expanses of window (and big energy bills) can be designed to achieve optimum temperatures.」（在美国，Amory Lovins 推广了一系列低能耗技术，例如「超级窗户」：它能让不可见光进入，同时可被「调节」至放进或反射掉红外太阳辐射——也就是产生热量的那种辐射。使用大面积窗户的建筑（以及随之而来的高额能源账单）可以借此达到最适宜的温度）。可见设计要点是「可调」：需要取暖时放进热量，需要降温时把热量反射出去，因而能同时压低制冷与供暖开销，与选项 E 完全对应。",
          "traps": [
            "为什么不是 F：F 选项说太阳能可满足发展中国家村庄的能源需求，那对应的是 J 段（400,000 people in 150 villages），Lovins 在 I 段谈的是美国，也从未提及村庄。",
            "为什么不是 G：G 选项强调「非常简单」且只省空调费，而 super-windows 属于高技术发明，且原文强调的是冷暖两端的调节能力，范围大于单纯的空调降温。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 23–26 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 23,
        "end": 26
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "The air temperature in modern Malaysian houses is lower than the air temperature outside.",
          "translation": "现代马来西亚房屋内的空气温度低于室外的空气温度。",
          "answer": "False",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "He has calculated that typical modern Malaysian houses are 5°C hotter than the air outside."
          },
          "synonyms": [
            "「modern Malaysian houses」与原文「typical modern Malaysian houses」原词对应",
            "「lower than the air temperature outside」与原文「5°C hotter than the air outside」直接冲突：原文是高 5°C，题干说更低",
            "原文的「He has calculated」提供确切数据，说明这是一条已被测量的明确事实，而非模糊印象"
          ],
          "locatingTip": "定位：题干关键词 Malaysian houses 与 outside 同时出现在 A 段，看到人名 Muhammad Peter Davis 后紧跟的 He has calculated 一句即为落点。确定答案技巧：此类比较判断题只需核对比较方向。原文写「are 5°C hotter than the air outside」（比室外热 5°C），题干写「is lower than the air temperature outside」（低于室外），一高一低方向相反，属事实矛盾，判 FALSE。",
          "analysis": "A 段在把 kampung 房屋与现代建筑对比时写道：「The airtight, concrete boxes of modern city construction, in contrast, are heat traps, says Muhammad Peter Davis of University Putra Malaysia. He has calculated that typical modern Malaysian houses are 5°C hotter than the air outside.」（密不透风的现代城市混凝土建筑反而是热陷阱；他计算出典型的现代马来西亚房屋比室外空气热 5°C）。原文的结论是室内比室外更热（hotter），并把这类建筑称作 heat traps（热陷阱）；题干却说室内温度 lower than（低于）室外，把原文的「更高」改成了「更低」，属于直接翻转原文数据，因此答案是 FALSE。做题时要特别小心比较级的方向：hotter than 与 lower than 是反义关系，不要因为两个句子都在讲 Malaysian houses 与 outside 就误判为同义。",
          "traps": [
            "为什么不是 TRUE：原文明确指出典型现代马来西亚房屋比室外热 5°C，并把这类建筑称为 heat traps，题干却称室内温度低于室外，与原文数据方向相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文通过 Davis 的计算给出了确切温差（室内比室外高 5°C），信息明确存在且与题干冲突；有明确相反信息时按规则判 FALSE，而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "The construction industry is more to blame than transport for global warming.",
          "translation": "在全球变暖问题上，建筑业的罪责大于运输业。",
          "answer": "True",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "But, globally, transportation is responsible for just 22 per cent of carbon dioxide emissions. The building sector is responsible for 31 per cent, mostly the result of heating and air‑conditioning systems."
          },
          "synonyms": [
            "「The construction industry」同义替换为原文的「The building sector」",
            "「transport」与原文「transportation」对应，指同一部门",
            "「more to blame than」同义替换为原文两个百分比的对比：「transportation is responsible for just 22 per cent of carbon dioxide emissions. The building sector is responsible for 31 per cent」，31 大于 22 即「责任更重」"
          ],
          "locatingTip": "定位：题干关键词 transport 与 building 的排放占比集中在 D 段，扫读百分数 22 per cent 与 31 per cent 即可锁定。确定答案技巧：比较两个部门谁责任更大，只需看原文给出的两组数字。原文先承认运输的贡献「Much is made of the contribution of transportation to global warming」，但随即用数据纠正：运输仅占 22%，而「The building sector is responsible for 31 per cent」，并加用 just 强调运输占比之小。31% 高于 22%，题干所述「建筑业比运输业更该受责备」成立，选 TRUE。",
          "analysis": "D 段主题是「Modern buildings are greedy in their use of energy.」（现代建筑在能耗上极为贪婪）。作者先承认舆论常批评交通：「Much is made of the contribution of transportation to global warming, through its emissions of greenhouse gases.」（人们很重视交通通过温室气体排放对全球变暖的「贡献」）。但转折词 But 引出数据对比，这两句也是本题定位句：「But, globally, transportation is responsible for just 22 per cent of carbon dioxide emissions. The building sector is responsible for 31 per cent, mostly the result of heating and air-conditioning systems.」（但从全球看，交通只占二氧化碳排放的 22%，而建筑部门占 31%，主要来自供暖与空调系统）。句中 just 22 per cent 的 just 表示「仅仅」，与建筑业的 31% 形成鲜明落差，明确说明建筑业的责任份量更大，故题干表述与原文一致，判 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文的数字关系是建筑 31% 高于交通 22%，题干所说「建筑业过失更大」的方向与之相同，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不仅给出两个具体百分比，还用 just 一词强调交通占比之小，比较关系证据充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "The use of wind towers for cooling is widespread in the Middle East today.",
          "translation": "如今在中东地区，使用风塔降温的做法十分普遍。",
          "answer": "False",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Throughout the Middle East today, wind towers are often little more than museum pieces."
          },
          "synonyms": [
            "「wind towers」与「the Middle East」「today」在原文原词复现，见 F 段首句",
            "「is widespread」与原文「are often little more than museum pieces」相互冲突：风塔往往不过是博物馆展品，即已不再实际使用",
            "原文的「But there are exceptions」进一步说明现状只是个别例外，与「普遍」正相反"
          ],
          "locatingTip": "定位：题干三个关键词 wind towers、the Middle East、today 在 F 段首句一次集齐，属最好用的定位句。确定答案技巧：判断「是否普遍（widespread）」，要看原文对该做法现状的定性。原文说风塔「are often little more than museum pieces」（往往不过是博物馆展品），随后用「But there are exceptions」引出约旦一个获奖村庄作为少数例外——少数例外恰恰否定了「普遍」，故判 FALSE。",
          "analysis": "F 段开头即写：「Throughout the Middle East today, wind towers are often little more than museum pieces.」（今天在整个中东地区，风塔往往不过是博物馆里的展品），说明这种传统降温方式已基本退出日常使用，只剩展示价值。接着作者用转折补充：「But there are exceptions. Jordan has won awards for the architecture of a village on the shores of the Red Sea, which is designed to conserve energy.」（但也有例外。约旦因红海之滨一座以节能为目标的村庄建筑而获奖）。可见现状是「普遍不再使用、仅有少数例外」，而题干称其使用「is widespread（十分普遍）」，与原文定性相反，因此答案是 FALSE。注意不要被 E 段的「Before air-conditioning, much of the Arab world kept cool through thoughtful building design」误导——那讲的是空调出现之前的历史情况，题干限定的是 today。",
          "traps": [
            "为什么不是 TRUE：原文明确表示风塔如今多半只是博物馆展品，并用 exceptions（例外）指称仍在使用的少数案例，说明使用并不普遍。",
            "为什么不是 NOT GIVEN：原文对风塔今天的现状有明确表述（little more than museum pieces 与 exceptions），且与题干的 widespread 相冲突，属于已交代且相反的信息。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "The 'super-windows' promoted by Amory Lovins can be installed at low cost.",
          "translation": "阿莫里·洛文斯推广的「超级窗户」可以低成本安装。",
          "answer": "Not Given",
          "wordClass": "",
          "locating": {
            "paragraph": "I",
            "quote": "In the United States, Amory Lovins has promoted a range of low‑energy technologies: \"super‑windows\", for example, which let in invisible light but can be \"tuned\" to either allow in, or reflect away, infrared solar radiation — the stuff that heats."
          },
          "synonyms": [
            "「super-windows」与原文带引号的「\"super-windows\"」原词复现",
            "「promoted by Amory Lovins」对应原文「Amory Lovins has promoted a range of low-energy technologies」",
            "「can be installed at low cost」在原文没有任何对应：I 段只说明它透光、可调红外辐射的功能以及「achieve optimum temperatures」的效果，括号中的「big energy bills」说的是大面积用窗建筑的电费高，并非 super-windows 的安装造价"
          ],
          "locatingTip": "定位：专有名词 super-windows 带引号且是复合词，在全文只出现在 I 段，一步锁定。确定答案技巧：题干问的是「安装成本低不低」，而 I 段只交代了它的原理与功效（透过不可见光、可调红外辐射、达到最适宜温度），全句没有出现 cheap、low-cost、affordable 等价格评价。括号里的 big energy bills 容易被误读，它修饰的是「Buildings with large expanses of window（窗户面积大的建筑）」的能源账单，与窗户本身的安装费用无关，因此该信息属于原文未提及，判 NOT GIVEN。",
          "analysis": "I 段全文围绕低能耗技术的功能展开：「In the United States, Amory Lovins has promoted a range of low-energy technologies: \"super-windows\", for example, which let in invisible light but can be \"tuned\" to either allow in, or reflect away, infrared solar radiation — the stuff that heats.」（在美国，Amory Lovins 推广了一系列低能耗技术，例如「超级窗户」：它让不可见光进入，同时可以被「调节」为放进或反射掉红外太阳辐射——也就是导致热量的那种辐射）。下一句「Buildings with large expanses of window (and big energy bills) can be designed to achieve optimum temperatures.」（使用大面积窗户的建筑（以及随之而来的高额能源账单）可以借此达到最适宜的温度）。两句话提供的信息是：技术名称、功能原理、使用效果，以及大面积用窗建筑能源开销大这一现状；至于 super-windows 本身的售价或安装费用，原文完全没有交代。题干断言「can be installed at low cost」，属于原文没有的信息，因此判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：I 段没有出现任何关于价格、成本、廉价或可负担的表述；把「(and big energy bills)」理解成安装便宜是对句子成分的误读，该短语实际是修饰大面积窗户建筑的能源账单。",
            "为什么不是 FALSE：原文同样没有说 super-windows 昂贵或安装困难，因此也不存在与题干相反的信息。既未证实也未否证，按规则只能判 NOT GIVEN。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
