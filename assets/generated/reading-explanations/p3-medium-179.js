(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-medium-179", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-medium-179",
  "meta": {
    "examId": "p3-medium-179",
    "title": "The Exploration of Mars 火星探索",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–32 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 32
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "Martian evidence found on Earth",
          "translation": "在地球上发现的火星证据。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "A Martian meteorite found on Earth raised fresh doubts about the above analysis. Meteorite ALH 84001 was discovered in December 1984 in Antarctica by members of the ANSMET project."
          },
          "synonyms": [
            "“Martian evidence” 同义替换为原文的 “A Martian meteorite found on Earth”，来自火星的陨石标本就是火星证据",
            "“found on Earth” 与原文 “found on Earth” 完全对应，下句再用 “discovered in December 1984 in Antarctica” 落实“在地球上被发现”这一事实",
            "“evidence” 具体化为原文的 “Meteorite ALH 84001”，即编号明确、可送入实验室研究的实物标本"
          ],
          "locatingTip": "定位：题干是名词性概括短语，没有专有人名可抓，要用“词场扫读”找同时谈火星与地球的段落。八段当中只有第 4 段把 Mars 与 Earth 放在同一句里谈实物标本（meteorite、ALH 84001、Antarctica）。确定答案技巧：核对两个要素是否同时出现——一是“来自火星”（Meteorite ALH 84001 / The sample was ejected from Mars），二是“在地球上被发现”（found on Earth / discovered in December 1984 in Antarctica by members of the ANSMET project），第 4 段首两句齐全，所以答案是 D。要注意第 3 段虽然也讲火星，但证据全部来自人类发射的探测器，不是在地球上找到的东西。",
          "analysis": "第 4 段（D）开篇即写：“A Martian meteorite found on Earth raised fresh doubts about the above analysis. Meteorite ALH 84001 was discovered in December 1984 in Antarctica by members of the ANSMET project.”（一块在地球上发现的火星陨石让人们对上述分析产生了新的疑问。1984 年 12 月，ANSMET 项目的成员在南极洲发现了这块编号为 ALH 84001 的陨石。）题干的三个信息点在此逐一对上：Mars 对应 Martian meteorite，evidence 对应这块有编号、可被实验室分析的实物标本，found on Earth 对应 found on Earth 与 discovered in December 1984 in Antarctica。紧接着的句子又交代 “The sample was ejected from Mars about 17 million years ago”（该样本约在 1700 万年前从火星被抛射出来），说明这块岩石确实源自火星，是“火星证据”而不是地球本土的岩石，故答案为 D。",
          "traps": [
            "为什么不是 C：第 3 段讲的是 Mariner 与 Viking 等探测器的观测，所有证据都来自太空任务，与题干的 found on Earth 相反。",
            "为什么不是 E：第 5 段讨论磁场缺失、辐射限制与气候转变，属于对火星环境本身的分析，没有任何从地球找到的样本。",
            "为什么不是 H：第 8 段虽然也出现 Earth，但讲的是火星与地球生命可能同源的推论，落点在生命起源而非实物证据。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Mars and Earth may share the same origin of life",
          "translation": "火星与地球可能拥有相同的生命起源。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "This would indicate a common origin for Martian and Earth life. Life based on DNA might have appeared first on Mars and then spread to Earth"
          },
          "synonyms": [
            "“share the same origin of life” 同义替换为原文的 “a common origin for Martian and Earth life”，common 即 same",
            "“Mars and Earth” 对应原文的 “Martian and Earth life”，原文用形容词 Martian 修饰 life",
            "“may” 对应原文的情态动词 “would” 与 “might”，以及条件句 “If samples on Mars were found to use DNA”，都表示推测而非定论"
          ],
          "locatingTip": "定位：题干的核心词是 origin of life，全文只有第 8 段讨论火星与地球生命是否同源，该段连续出现 origin、DNA、Martian and Earth life 等词。确定答案技巧：抓住主干句 “This would indicate a common origin for Martian and Earth life.”，其中 common origin 就是题干的 share the same origin，而 This 回指上句“火星样本若使用 DNA”，情态动词 would 与 might 表明作者说的是“可能”，与题干 may 的语气一致，故答案为 H。注意不要被第 7 段的 microbial oasis 干扰，那段讲的是在类似火星的环境中探测微生物的技术，不涉及生命起源。",
          "analysis": "第 8 段（H）写：“If samples on Mars were found to use DNA—as Earthly life does—it would be extremely unlikely that such a specialised, complex molecule could have evolved independently on two planets. This would indicate a common origin for Martian and Earth life. Life based on DNA might have appeared first on Mars and then spread to Earth, where it evolved into the myriad plants and creatures alive today.”（如果在火星样本上发现它们使用 DNA——正如地球生命那样——那么如此专门而复杂的分子几乎不可能在两个星球上各自独立演化。这将意味着火星生命与地球生命有着共同的起源。基于 DNA 的生命也许最早出现在火星上，随后传播到地球，并演化成今天种类繁多的动植物。）题干 “Mars and Earth may share the same origin of life” 与 “This would indicate a common origin for Martian and Earth life” 完全同义：share the same origin 对应 a common origin，may 对应 would 与 might 所表达的推测语气。段末 “we are all Martians”（我们都是火星人）更是把“同源”这一结论推到极致，故答案为 H。",
          "traps": [
            "为什么不是 D：第 4 段虽然讲了火星陨石中与微生物相关的磁铁矿和疑似化石结构，但落点是“这块陨石里是否有生命痕迹”，没有触及火星生命与地球生命是否同源。",
            "为什么不是 G：第 7 段讲在阿塔卡马沙漠发现微生物绿洲、SOLID 可用于类似火星土壤的环境，讨论的是探测手段，不是生命起源。",
            "为什么不是 A：第 1 段是 19 世纪天文学家对火星运河与绿洲的想象，与生命起源问题毫无关系。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Detailed depiction of large-scale agricultural constructions",
          "translation": "对大规模农业设施的详细描绘。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Lowell was convinced a great network of canals had been dug to irrigate crops for the Martian race. He suggested that each canal had fertile vegetation on either side, making them noticeable from Earth."
          },
          "synonyms": [
            "“large-scale agricultural constructions” 同义替换为原文的 “a great network of canals had been dug to irrigate crops”，canals 是开凿出来的灌溉设施，irrigate crops 说明其农业用途，a great network 对应 large-scale",
            "“Detailed depiction” 对应该段末句的 “Drawings and globes he made show a network of canals and oases all over the planet”，即用绘图和地球仪作细致描绘",
            "“agricultural” 对应原文的 “crops” 与 “fertile vegetation”（作物与肥沃植被）"
          ],
          "locatingTip": "定位：题干中的 agricultural constructions 在原文最直接的对应是 canals（运河、灌溉渠）与 irrigate crops（灌溉作物），扫读时盯住 canals、irrigate、crops、vegetation 这一组词，全篇只有第 1 段集中出现。确定答案技巧：三个要素要同时成立——一是“大规模”（a great network of canals … all over the planet），二是“农业”（irrigate crops、fertile vegetation），三是题干要求的“详细描绘”，由该段末句 Drawings and globes he made show … 落实，三者同段，故答案为 A。第 3 段和第 6 段也提到水与地貌，但都出自探测器的观测，不是对农业设施的描绘。",
          "analysis": "第 1 段（A）先写 Schiaparelli 看到 “a network of lines, or canali”，随后集中写 Lowell 的描绘：“Lowell was convinced a great network of canals had been dug to irrigate crops for the Martian race. He suggested that each canal had fertile vegetation on either side, making them noticeable from Earth. Drawings and globes he made show a network of canals and oases all over the planet.”（Lowell 确信火星人开凿了一个庞大的运河网络来灌溉作物。他认为每条运河两岸都有肥沃的植被，因此从地球上就能看到。他绘制的图和制作的地球仪显示整个星球遍布运河与绿洲。）题干 “Detailed depiction of large-scale agricultural constructions” 与此一一对应：detailed depiction 对应 Drawings and globes he made show，large-scale 对应 a great network … all over the planet，agricultural constructions 对应 canals had been dug to irrigate crops。故答案为 A。",
          "traps": [
            "为什么不是 C：第 3 段写探测器传回的图像显示火星是布满陨石坑的荒芜之地（a cratered and barren landscape），恰恰否定了运河与农业的说法。",
            "为什么不是 F：第 6 段虽然谈火星过去是否有液态水，但由 NASA 的探测任务与 hematite 证据支撑，属于科学探测而非对农业设施的描绘。",
            "为什么不是 E：第 5 段讨论磁场消失导致大气流失与气候变迁，与灌溉网络之类的农业设施无关。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "A project that aims to detect life under conditions similar to those on Mars",
          "translation": "一个旨在在与火星相似的环境条件下探测生命的项目。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Researchers from the Center for Astrobiology (Spain) and the Catholic University of the North in Chile have found an oasis of micro-organisms two metres below the surface of the Atacama Desert. SOLID, a life-detection instrument, could be used in environments similar to Martian sub-soil."
          },
          "synonyms": [
            "“A project” 对应原文的 “Researchers from the Center for Astrobiology (Spain) and the Catholic University of the North in Chile have found …”，两家研究机构的联合科考工作即该项目",
            "“detect life” 同义替换为原文的 “a life-detection instrument”，下句 “we could detect them with instruments like SOLID” 中 detect 原词复现",
            "“under conditions similar to those on Mars” 同义替换为原文的 “environments similar to Martian sub-soil”，Martian sub-soil 即火星地表以下的土壤环境"
          ],
          "locatingTip": "定位：题干是抽象概括，但 “conditions similar to those on Mars” 提示去找含火星类比词的段落；SOLID 是全大写专有名词，全篇只出现两次且都在第 7 段，是最强的定位锚点。确定答案技巧：核对三项信息——项目（Center for Astrobiology 与 Catholic University of the North 的联合研究）、在类似火星的条件下（environments similar to Martian sub-soil）、探测生命（a life-detection instrument，以及 Parro 所说的 we could detect them），三项全部落在第 7 段，故答案为 G。",
          "analysis": "第 7 段（G）写：“Researchers from the Center for Astrobiology (Spain) and the Catholic University of the North in Chile have found an oasis of micro-organisms two metres below the surface of the Atacama Desert. SOLID, a life-detection instrument, could be used in environments similar to Martian sub-soil.”（西班牙天体生物学中心与智利北方天主教大学的研究人员在阿塔卡马沙漠地表以下两米处发现了一处微生物绿洲。一台名为 SOLID 的生命探测仪器可用于类似火星地表土壤的环境。）下文 Parro 的话进一步说明：“If similar microbes, or their remains, exist on Mars under comparable conditions, we could detect them with instruments like SOLID”（如果火星上在类似条件下存在类似的微生物或其遗迹，我们就能用 SOLID 这类仪器探测到它们）。题干 “A project that aims to detect life under conditions similar to those on Mars” 的三个要点：project 对应两家研究机构的联合研究，aims to detect life 对应 a life-detection instrument 与 could detect them，conditions similar to those on Mars 对应 environments similar to Martian sub-soil 与 comparable conditions，全部落在第 7 段，故答案为 G。",
          "traps": [
            "为什么不是 F：第 6 段讲的是寻找古代液态水的证据（hematite、水冰），目标是确认火星是否曾经有水，而非探测生命本身的项目。",
            "为什么不是 D：第 4 段分析一块已经落到地球上的火星陨石，属于对现成样本的实验室分析，不是“在类似火星的条件下探测生命”的项目。",
            "为什么不是 H：第 8 段提出火星与地球生命同源的假说，属于理论推论，没有探测项目或仪器出现。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "Mars has undergone drastic climatic transformation",
          "translation": "火星经历了剧烈的气候变化。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The disappearance of the magnetic field may have played a significant role in Martian climate change. According to scientists' evaluation, Mars's climate gradually transitioned from warm and wet to cold and dry after the magnetic field vanished."
          },
          "synonyms": [
            "“drastic climatic transformation” 同义替换为原文的 “gradually transitioned from warm and wet to cold and dry”，从温暖湿润变为寒冷干燥正是剧烈的转变",
            "“has undergone” 对应原文的 “transitioned” 与 “may have played a significant role in Martian climate change”，都表示已经发生的变化",
            "“climate” 与原文的 “Martian climate change”“Mars's climate” 原词对应"
          ],
          "locatingTip": "定位：题干关键词是 Mars 与 climate，扫读时盯住 climate、warm and wet、cold and dry 这一组词，只有第 5 段末尾集中讨论火星气候的转变。确定答案技巧：确认该段结尾两句是否同时给出“变化”与“重大”两层意思——Martian climate change 说明变化本身，gradually transitioned from warm and wet to cold and dry 给出从温暖湿润到寒冷干燥的巨大反差，并且点明与磁场消失的关联，与题干 drastic climatic transformation 吻合，故答案为 E。",
          "analysis": "第 5 段（E）前半段讲火星缺乏全球磁场，太阳风因此带走大量大气，宇宙辐射使地表数米以内无法存在生命；末两句转向气候：“The disappearance of the magnetic field may have played a significant role in Martian climate change. According to scientists' evaluation, Mars's climate gradually transitioned from warm and wet to cold and dry after the magnetic field vanished.”（磁场的消失可能在火星气候变化中起了重要作用。据科学家的评估，磁场消失后，火星的气候逐渐从温暖湿润转变为寒冷干燥。）题干 “Mars has undergone drastic climatic transformation” 与此对应：drastic transformation 对应 transitioned from warm and wet to cold and dry，climate 对应 Martian climate change 与 Mars's climate，故答案为 E。",
          "traps": [
            "为什么不是 C：第 3 段虽有 a cratered and barren landscape，但那是探测器拍摄到的地貌描写，没有涉及气候本身的转变过程。",
            "为什么不是 F：第 6 段谈的是古代液态水与当今低温低压对水的限制，重点在水而不在气候的整体转变。",
            "为什么不是 G：第 7 段讲阿塔卡马沙漠的微生物绿洲与 SOLID 仪器，完全没有气候变化的论述。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Scientific attempts to locate liquid water on Mars",
          "translation": "在火星上寻找液态水的科学尝试。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Thus, the 2004 Mars Exploration Rovers were designed not to look for present or past life, but for evidence of ancient liquid water."
          },
          "synonyms": [
            "“Scientific attempts” 同义替换为原文的 “the 2004 Mars Exploration Rovers were designed”，探测车的设计目标即科学尝试",
            "“to locate liquid water” 同义替换为原文的 “to look for … evidence of ancient liquid water”，look for 即 locate",
            "下文 “NASA announced that its rover Opportunity had discovered evidence that Mars was once a wet planet” 与 “the Mars Express orbiter detected huge reserves of water-ice at Mars's south pole” 进一步落实“寻找水的尝试”"
          ],
          "locatingTip": "定位：题干关键词 liquid water，第 6 段把 liquid water 作为整段主题反复出现（lakes or oceans of liquid water、ancient liquid water、liquid water cannot persist），扫读时可以直接锁定该段。确定答案技巧：先看首句 “whether Mars had lakes or oceans of liquid water on its surface in the ancient past”，再看定位句 “Thus, the 2004 Mars Exploration Rovers were designed not to look for present or past life, but for evidence of ancient liquid water.”，句中明确写出探测车的设计目标是寻找古代液态水的证据，attempts 对应 were designed 与 look for，故答案为 F。",
          "analysis": "第 6 段（F）是全文专门讲“找水”的一段：“NASA's recent missions have focused on another question: whether Mars had lakes or oceans of liquid water on its surface in the ancient past. Scientists have found hematite, a mineral that forms only in the presence of water. Thus, the 2004 Mars Exploration Rovers were designed not to look for present or past life, but for evidence of ancient liquid water. … In March 2004, NASA announced that its rover Opportunity had discovered evidence that Mars was once a wet planet. … Later the Mars Express orbiter detected huge reserves of water-ice at Mars's south pole in January 2004.”（NASA 近期的任务聚焦于另一个问题：火星表面在古代是否存在液态水的湖泊或海洋。科学家发现了赤铁矿，这种矿物只在有水的情况下形成。因此，2004 年的火星探测车设计目标不是寻找现在或过去的生命，而是寻找古代液态水的证据。……2004 年 3 月，NASA 宣布其探测车 Opportunity 发现了火星曾是湿润星球的水证据。……后来火星快车轨道器于 2004 年 1 月在火星南极探测到巨大的水冰储量。）题干 “Scientific attempts to locate liquid water on Mars” 与该段主题句和定位句完全一致，故答案为 F；段中 “liquid water cannot persist at the surface” 一句是在解释找水的困难，仍属同一主题，同样支持选 F。",
          "traps": [
            "为什么不是 D：第 4 段谈火星陨石中的磁铁矿与疑似细菌结构，落点在生命证据而不是水。",
            "为什么不是 E：第 5 段虽然出现 warm and wet，但重点是辐射对生命的限制以及气候转变，不是寻找液态水的科学任务。",
            "为什么不是 G：第 7 段讲的是在阿塔卡马沙漠用 SOLID 探测微生物，任务是探测生命而不是寻找液态水。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 33–36 单项选择题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 33,
        "end": 36
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "How did Percival Lowell describe Mars in this passage?",
          "translation": "在这篇文章中，Percival Lowell 是如何描述火星的？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "In 1894, an American astronomer, Percival Lowell, made a series of observations of Mars from his own observatory at Flagstaff, Arizona, U.S.A. Lowell was convinced a great network of canals had been dug to irrigate crops for the Martian race."
          },
          "synonyms": [
            "“describe Mars” 对应原文第 1 段 Lowell 的两处描述：“a great network of canals had been dug to irrigate crops” 与 “each canal had fertile vegetation on either side”",
            "“clear traces of water and agriculture similar to Earth's” 同义替换为原文的 “canals had been dug to irrigate crops” 与 “fertile vegetation on either side”，灌溉用水与肥沃植被正是地球式的水与农业痕迹",
            "“traces”（可被察觉的痕迹）对应原文的 “making them noticeable from Earth”（从地球上就能看到）"
          ],
          "locatingTip": "定位：题干给出专有人名 Percival Lowell，全文只出现在第 1 段，直接跳到该段后半精读即可。确定答案技巧：把 Lowell 的看法拆成“水”与“农业”两条线索核对——canals（运河，既是水也是灌溉系统）、irrigate crops（灌溉作物，属于农业生产）、fertile vegetation（因水而肥沃的植被），加上 drawings、globes 所显示的遍布全星球，说明他描述的正是明显的、与地球相似的水与农业迹象，与 C 项吻合；A、B、D 的落点（Arizona、运河宽度、移动的生物）在原文中要么只是地点背景，要么从未出现。",
          "analysis": "第 1 段写 Lowell 的描述：“Lowell was convinced a great network of canals had been dug to irrigate crops for the Martian race. He suggested that each canal had fertile vegetation on either side, making them noticeable from Earth. Drawings and globes he made show a network of canals and oases all over the planet.”（Lowell 确信火星人开凿了庞大的运河网络来灌溉作物。他认为每条运河两岸都有肥沃的植被，因此从地球上就能看到。他绘制的图和制作的地球仪显示整个星球遍布运河与绿洲。）这段描述的核心是“水（运河、绿洲）加农业（灌溉作物、肥沃植被）”，而且这些痕迹明显到可从地球观测，正是 C 项 “There are clear traces of water and agriculture similar to Earth's” 的含义。原文还交代 “In 1894, an American astronomer, Percival Lowell, made a series of observations of Mars from his own observatory at Flagstaff, Arizona, U.S.A.”，可见 Arizona 只是他的观测地点，属于背景信息而不是他对火星的描述内容，故答案为 C。",
          "traps": [
            "A 项错：Arizona 在原文只出现一次，即 “from his own observatory at Flagstaff, Arizona, U.S.A.”，说的是 Lowell 在亚利桑那观测火星，原文并未评价亚利桑那是观测火星的“理想地点”，属于把地点背景误当成观点。",
            "B 项错：原文只用 “a great network of canals” 形容运河的规模，并说它们遍布全球，从未比较火星运河与地球运河的宽窄，宽度属于无中生有。",
            "D 项错：原文出现过的生物是 1898 年小说里的火星入侵者和 1917 年小说里的怪异生物与怪兽，都属于文学想象；而原文中自称看到 lines 与 canali（线条、水道）的是 Schiaparelli，Lowell 谈的只是运河与绿洲，文中都没有谁说透过望远镜看到活动着的火星生物。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "How did people change their view of Mars from the 19th century onwards?",
          "translation": "从 19 世纪起，人们对火星的看法是如何改变的？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In 1898, H. G. Wells wrote the science-fiction classic The War of the Worlds about an invading force of Martians who try to conquer Earth."
          },
          "synonyms": [
            "“absorbed new ideas” 同义替换为原文的 “The idea that there was intelligent life on Mars gained strength”，以及下一句的 “gripped the public's imagination”",
            "“through literary works” 同义替换为原文的 “H. G. Wells wrote the science-fiction classic The War of the Worlds” 与 “Edgar Rice Burroughs wrote the first in a series of 11 novels about Mars”，科幻小说与小说系列即文学作品",
            "“from the 19th century onwards” 对应原文的 “gained strength in the late 19th century”，以及其后接连出现的 1898、1917 年等时间线索"
          ],
          "locatingTip": "定位：题干的时间标志 the 19th century 与 view of Mars 直接指向第 2 段，该段首句即 “The idea that there was intelligent life on Mars gained strength in the late 19th century.”。确定答案技巧：判断“人们通过什么途径改变看法”，要区分 1898 年与 1917 年的小说（文学作品）和 1938 年 Orson Welles 的广播（媒体节目）这两条不同渠道；题干问的是从 19 世纪起观念转变的整体趋势，为该段奠定基调的是两部文学作品，故答案为 B。",
          "analysis": "第 2 段写：“The idea that there was intelligent life on Mars gained strength in the late 19th century. In 1898, H. G. Wells wrote the science-fiction classic The War of the Worlds about an invading force of Martians who try to conquer Earth. … In 1917, Edgar Rice Burroughs wrote the first in a series of 11 novels about Mars. Strange beings and rampaging Martian monsters gripped the public's imagination.”（火星上存在智慧生命的观念在 19 世纪后期愈发流行。1898 年，H. G. Wells 写下了科幻经典《世界大战》……1917 年，Edgar Rice Burroughs 写下了 11 部火星系列小说的第一部，怪异的生物与横冲直撞的火星怪物抓住了公众的想象。）可见推动公众改变看法的主力渠道是文学作品：《世界大战》被称为 “the science-fiction classic”，Burroughs 的作品是 “a series of 11 novels”，而 “gripped the public's imagination” 明确点出文学对公众观念的影响，与 B 项 “They absorbed new ideas through literary works” 对应，故答案为 B。",
          "traps": [
            "A 项错：原文说 “millions believed the dramatic reports of a Martian invasion”，但那是对 1938 年广播节目的误信（a radio broadcast caused widespread panic），人们并未真的经历火星人入侵，所谓入侵是虚构事件。",
            "C 项错：1938 年的广播确实存在（a radio broadcast by Orson Welles on Halloween night in 1938），但它引起的是 widespread panic，是一次有明确时间限定的单一事件；题干问的是从 19 世纪起观念转变的主要途径，原文把观念转向的起点和主力放在文学作品上，C 项把整个转变归因于听一档著名广播节目，属于以偏概全。",
            "D 项错：原文中的 Wells 与 Burroughs 都是作家，他们通过写书影响公众，原文没有任何关于 public lectures（公开讲座）的信息。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "According to the probes sent in the 1960s, which statement about Mars is correct?",
          "translation": "根据 20 世纪 60 年代发射的探测器，关于火星的哪一项陈述是正确的？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The first images sent back from Mars came from Mariner 4 in July 1965. They showed a cratered and barren landscape, more like the surface of our Moon than Earth."
          },
          "synonyms": [
            "“far less dynamic than Earth” 同义替换为原文的 “a cratered and barren landscape, more like the surface of our Moon than Earth”，荒芜死寂、更像月球说明其活跃程度远低于地球",
            "“the probes sent in the 1960s” 对应原文的 “The first images sent back from Mars came from Mariner 4 in July 1965” 与 “In 1969, Mariners 6 and 7 were launched”",
            "“It appeared” 对应原文的 “They showed”，即探测器传回的图像所呈现的样子"
          ],
          "locatingTip": "定位：题干的关键限制是 1960s，第 3 段的时间线依次为 1965、1969、1971、1975，其中 1965 与 1969 属于 20 世纪 60 年代，正好是前两句。确定答案技巧：抓住 1965 年 Mariner 4 的图像描述 “They showed a cratered and barren landscape, more like the surface of our Moon than Earth.”，其中比较结构 more like … than Earth 给出两层信息——一是布满陨石坑、荒芜死寂，二是不像地球，合起来正等于“远不如地球有活力”，故选 B；A 项的 rivers、C 项的 same substances、D 项的完全相反都在原文找不到依据。",
          "analysis": "第 3 段写：“The first images sent back from Mars came from Mariner 4 in July 1965. They showed a cratered and barren landscape, more like the surface of our Moon than Earth. In 1969, Mariners 6 and 7 were launched and took 200 photographs of Mars's southern hemisphere and pole on fly-by missions, but these revealed little more information.”（从火星传回的第一批图像来自 1965 年 7 月的 Mariner 4。图像显示了一片布满陨石坑的荒芜地貌，更像是我们月球的表面而不是地球。1969 年发射的 Mariner 6 和 7 在飞掠任务中拍摄了 200 张火星南半球与极区的照片，但并未揭示更多信息。）这两次任务都属于 20 世纪 60 年代，结论是火星布满陨石坑、一片荒芜，而且 more like the surface of our Moon than Earth，与 B 项 “It appeared far less dynamic than Earth”（看起来远不如地球有活力）一致：荒芜死寂、缺乏变化正是不活跃的表现，故答案为 B。",
          "traps": [
            "A 项错：原文说的是 a cratered and barren landscape（布满陨石坑的荒芜地貌），并没有提到 rivers；相反第 6 段说火星表面液态水难以存留，A 项与原文不符。",
            "C 项错：原文只说火星地貌 more like the surface of our Moon than Earth（更像月球表面），这是外观上的相似，并未说它含有的物质与月球完全相同，属于把外观比较偷换成成分相同。",
            "D 项错：原文对 1969 年的 Mariner 6、7 只说 revealed little more information（没有揭示更多信息），并没有说图像与后来的探测器完全不同；1971 年的 Mariner 9 更是成为首个环绕火星运行的航天器，任务目标本身不同，谈不上“图像完全相反”。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "What is the implication of the project using the technology called SOLID in the Atacama Desert?",
          "translation": "在阿塔卡马沙漠使用名为 SOLID 的这项技术的项目，其意义（暗示）是什么？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "SOLID, a life-detection instrument, could be used in environments similar to Martian sub-soil."
          },
          "synonyms": [
            "“could be employed to explore organisms under Martian-like conditions” 同义替换为原文的 “could be used in environments similar to Martian sub-soil”，以及 “we could detect them with instruments like SOLID”，Martian-like 对应 similar to Martian",
            "“organisms” 同义替换为原文的 “micro-organisms” 与 “similar microbes, or their remains”",
            "“in the Atacama Desert” 对应原文的 “two metres below the surface of the Atacama Desert”，说明该技术已在类似火星的地下环境中得到验证"
          ],
          "locatingTip": "定位：SOLID 是全大写仪器名，回原文搜索即可一步锁定第 7 段。确定答案技巧：题干问的是“在阿塔卡马沙漠使用 SOLID 的意义”，要从 Parro 的结论句里找落点——If similar microbes, or their remains, exist on Mars under comparable conditions, we could detect them with instruments like SOLID，即该仪器在地球上类似火星的环境中成功应用，意味着它能被用于火星类环境的生命探测，对应 A 项；B 项与原句方向相反，C 项、D 项都是对沙漠案例的曲解。",
          "analysis": "第 7 段写：“Researchers from the Center for Astrobiology (Spain) and the Catholic University of the North in Chile have found an oasis of micro-organisms two metres below the surface of the Atacama Desert. SOLID, a life-detection instrument, could be used in environments similar to Martian sub-soil.”（西班牙天体生物学中心与智利北方天主教大学的研究人员在阿塔卡马沙漠地表以下两米处发现了一处微生物绿洲。名为 SOLID 的生命探测仪器可用于类似火星地表土壤的环境。）随后 Parro 补充：“If similar microbes, or their remains, exist on Mars under comparable conditions, we could detect them with instruments like SOLID.”（如果火星上在类似条件下存在类似的微生物或其遗迹，我们就能用 SOLID 这类仪器探测到它们。）两句合起来说明：一台在阿塔卡马沙漠这类类似火星地下环境中被使用的仪器，同样可以用于在火星类环境中探测微生物，与 A 项 “It could be employed to explore organisms under Martian-like conditions” 完全吻合，故答案为 A。",
          "traps": [
            "B 项错：该项说这项技术不能用于识别与火星环境相似的环境中的生命，与原文 “could be used in environments similar to Martian sub-soil” 和 “we could detect them with instruments like SOLID” 直接相反，属于否定原文。",
            "C 项错：原文只说研究人员在阿塔卡马沙漠发现了微生物绿洲，并说该沙漠的环境与火星地表土壤相似，从未声称阿塔卡马是地球上唯一适合这类生物的地方，the only place 属于无中生有的绝对化表述。",
            "D 项错：原文明确写着研究人员已在该沙漠地表以下两米处 found an oasis of micro-organisms，即沙漠中已经发现了生命，D 项的说法与原文事实相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "According to The War of the Worlds, Martian technology surpassed that of humans in every field at the time.",
          "translation": "根据《世界大战》，火星人的技术在当时每一个领域都超越了人类的技术。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "They use highly advanced technology (advanced for 1898) to crush human resistance."
          },
          "synonyms": [
            "“Martian technology” 同义替换为原文的 “They use highly advanced technology”，They 指代上句的 an invading force of Martians",
            "“surpassed that of humans” 同义替换为原文的 “to crush human resistance”，能击溃人类抵抗说明技术在对抗中占优",
            "“in every field” 在原文中没有任何对应：原文只用括号限定 “advanced for 1898”，并说明其用途是 crush human resistance，并未逐一说明各领域是否全面超越人类"
          ],
          "locatingTip": "定位：题干含专有名词 The War of the Worlds，第 2 段提到这部作品及其中的火星入侵者，相关句是 “They use highly advanced technology (advanced for 1898) to crush human resistance.”。确定答案技巧：判断题的落点在 every field（每一个领域）这个范围限定词上，回原文逐项核对作者是否给出“全面超越”的判断。原文只说明技术“高度先进”、可用于击溃人类抵抗，并特意用括号限定这是“以 1898 年的标准而言”先进，完全没有涉及医学、通信、能源等其他领域是否同样超越人类，属于未提及的范围，因此判 NOT GIVEN。",
          "analysis": "第 2 段写：“In 1898, H. G. Wells wrote the science-fiction classic The War of the Worlds about an invading force of Martians who try to conquer Earth. They use highly advanced technology (advanced for 1898) to crush human resistance.”（1898 年，H. G. Wells 写下了科幻经典《世界大战》，讲的是火星入侵者试图征服地球。他们使用高度先进的技术——以 1898 年的标准而言——击溃人类的抵抗。）原文对火星技术的全部交代只有两点：程度（highly advanced，并附有 1898 年的时代限定）和用途（crush human resistance）。题干却把这两点升级为 “surpassed that of humans in every field”（在每一个领域都超越人类），其中 in every field 这一全面性断言在原文里没有任何依据——作品只描写了军事对抗层面的优势，没有对农业、医学、交通等领域作任何比较。信息缺失，故判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说技术 highly advanced、advanced for 1898，并限定其用途是击溃人类抵抗，这是军事层面上的优势，并没有说在每一个领域都全面超越人类；把“先进”扩大为“全面超越”属于超出原文的推断。",
            "为什么不是 FALSE：原文并未说火星人在某些领域落后于人类，也没有任何限定词来否定“全面超越”这一说法。既未证实也未否证，属于信息缺失，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "The evidence supplied by the Viking probes has never been challenged.",
          "translation": "Viking 探测器提供的证据从未受到过质疑。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "A Martian meteorite found on Earth raised fresh doubts about the above analysis."
          },
          "synonyms": [
            "“The evidence supplied by the Viking probes” 对应原文的 “the above analysis”，即上一段（第 3 段）中 Viking 探测器寻找生命迹象的实验分析",
            "“has never been challenged” 与原文的 “raised fresh doubts” 相互冲突：fresh doubts 指新的疑问，与 never 相反",
            "“challenged” 同义替换为原文的 “raised fresh doubts about”，即对结论提出质疑"
          ],
          "locatingTip": "定位：题干关键词 Viking probes 出现在第 3 段末尾，紧接其后的第 4 段首句就是本题的判分句 “A Martian meteorite found on Earth raised fresh doubts about the above analysis.”，用 above analysis 这一回指结构衔接。确定答案技巧：先弄清 the above analysis 指什么——它回指上一段由 Viking 探测器实验得出的分析结论；再看态度：raised fresh doubts（带出新的疑问）与题干的 has never been challenged（从未被质疑）构成正面对立，原文有明确的相反信息，故判 FALSE。",
          "analysis": "第 3 段末尾写 Viking 探测器的实验：“The landers had sampler arms to scoop up Martian rocks and carried out experiments to try to find signs of life. Although no life was found, they sent back the first colour pictures of the planet's surface and atmosphere from pivoting cameras.”（着陆器带有取样臂，可以铲取火星岩石，并开展实验以寻找生命迹象。尽管没有发现生命，它们仍用可旋转的相机传回了第一批火星表面与大气层的彩色照片。）紧接着第 4 段开头便是：“A Martian meteorite found on Earth raised fresh doubts about the above analysis.”（一块在地球上发现的火星陨石让人们对上述分析产生了新的疑问。）其中 the above analysis 回指上一段 Viking 任务得出的分析与结论，raised fresh doubts 说明这些结论受到了新的质疑；题干却说 has never been challenged（从未受到过质疑），与原文明确相反，因此答案为 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文用 raised fresh doubts about the above analysis 明确表示存在新的质疑，与 never been challenged 直接冲突，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：质疑既有明确的指代对象（the above analysis 回指 Viking 段的分析），又有明确的载体（a Martian meteorite found on Earth），信息与立场都很清楚，属于“有相反信息”而不是“没有提到”，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "Analysis of a meteorite from Mars discovered a substance associated with certain germs.",
          "translation": "对一块来自火星的陨石所作的分析发现了一种与某些细菌相关的物质。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "NASA's compositional analysis revealed a kind of magnetite that on Earth is only found in association with certain micro-organisms."
          },
          "synonyms": [
            "“Analysis of a meteorite from Mars” 同义替换为原文的 “NASA's compositional analysis”，分析对象即上句提到的 ALH 84001 火星陨石",
            "“discovered a substance” 同义替换为原文的 “revealed a kind of magnetite”，revealed 即发现，a kind of magnetite 就是那种物质（磁铁矿）",
            "“associated with certain germs” 同义替换为原文的 “found in association with certain micro-organisms”，association 原词对应，micro-organisms 即 germs（微生物、细菌）"
          ],
          "locatingTip": "定位：题干关键词是 meteorite from Mars、analysis、substance、germs，第 4 段集中出现 Meteorite ALH 84001、compositional analysis、magnetite、micro-organisms，可直接锁定该段。确定答案技巧：把题干拆成三件事逐一核对——谁做的分析（NASA's compositional analysis）、发现了什么（a kind of magnetite）、与什么相关（on Earth is only found in association with certain micro-organisms）；三项全部对上，且程度、范围都没有出入，因此判 TRUE。",
          "analysis": "第 4 段写：“Meteorite ALH 84001 was discovered in December 1984 in Antarctica by members of the ANSMET project. The sample was ejected from Mars about 17 million years ago … NASA's compositional analysis revealed a kind of magnetite that on Earth is only found in association with certain micro-organisms.”（1984 年 12 月，ANSMET 项目的成员在南极洲发现了编号为 ALH 84001 的陨石。该样本约在 1700 万年前从火星被抛射出来……NASA 的成分分析发现了一种磁铁矿，这种磁铁矿在地球上只与某些微生物相伴出现。）题干所说的“对一块来自火星的陨石的分析发现了一种与某些细菌相关的物质”，在原文中一一对应：来自火星的陨石对应 Meteorite ALH 84001（The sample was ejected from Mars），分析对应 NASA's compositional analysis，物质对应 a kind of magnetite，与细菌相关对应 found in association with certain micro-organisms。信息方向与范围完全一致，故答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文没有任何否定性表述，反而明确写出 “revealed a kind of magnetite that on Earth is only found in association with certain micro-organisms”，与题干完全一致，不存在矛盾信息。",
            "为什么不是 NOT GIVEN：题干的每个信息点在原文都有落实（火星来源、分析主体、发现的物质、与微生物的关联），证据充分，不属于未提及。需要留意的是原文随后说 “the very existence of nanobacteria is still controversial”，那说的是“纳米细菌本身是否存在”尚有争议，并不否定“发现了与微生物相关联的磁铁矿”这一事实。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "According to Víctor Parro, their project will be sent to Mars once DNA-based life has been identified on Earth.",
          "translation": "根据 Víctor Parro 的说法，一旦地球上确认了基于 DNA 的生命，他们的项目就会被送往火星。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "“If similar microbes, or their remains, exist on Mars under comparable conditions, we could detect them with instruments like SOLID,\" Parro added."
          },
          "synonyms": [
            "“Víctor Parro” 在原文中原词出现：“explained Víctor Parro of the Center for Astrobiology” 与 “Parro added”",
            "“will be sent to Mars” 在原文中没有任何对应：原文只说该仪器 “could be used in environments similar to Martian sub-soil”，并在条件句中假设火星上存在类似微生物，从未提到把项目送往火星的计划",
            "“once DNA-based life has been identified on Earth” 在原文中没有任何对应：原文的条件句是 “If similar microbes, or their remains, exist on Mars under comparable conditions”，条件落在“火星上是否存在类似微生物”，而 DNA 与地球生命的话题出现在第 8 段，与 Parro 的话无关"
          ],
          "locatingTip": "定位：题干给出人名 Víctor Parro，全文只在第 7 段出现，直接定位到该段他所讲的两段引语。确定答案技巧：逐一核实 Parro 到底说了什么——一是解释微生物绿洲的成因（a habitat rich in rock salt and other highly hygroscopic compounds that absorb water），二是假设火星上存在类似微生物时可用 SOLID 探测到。原文的条件与结论都围绕“火星上是否存在类似微生物”，完全没有“先在地球上确认 DNA 生命、再把项目送往火星”这一时间顺序与计划安排，因此判 NOT GIVEN。",
          "analysis": "第 7 段中 Parro 的话是：“We have named it a microbial oasis because we found micro-organisms developing in a habitat rich in rock salt and other highly hygroscopic compounds that absorb water,” explained Víctor Parro of the Center for Astrobiology.（西班牙天体生物学中心的 Víctor Parro 解释说：我们把它称为微生物绿洲，因为我们发现微生物生长在一个富含岩盐和其他吸湿性极强的化合物的栖息地中，这些化合物能吸收水分。）以及 “If similar microbes, or their remains, exist on Mars under comparable conditions, we could detect them with instruments like SOLID,” Parro added. 两句话给出的信息是：阿塔卡马沙漠存在微生物绿洲及其成因；若火星上在类似条件下有类似微生物，就可用 SOLID 这类仪器探测到。题干却说“一旦地球上确认了基于 DNA 的生命，他们的项目就会被送往火星”，其中“把项目送往火星”这一计划以及“以地球上确认 DNA 生命为前提”这一条件，原文都没有提及（DNA 与地球生命同源的话题出现在第 8 段，是西班牙科学家提出的另一假设，并非 Parro 所说，也不涉及把项目送往火星）。信息缺失，故判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只提到 SOLID 这类仪器“可用于类似火星地表土壤的环境”，并假设火星上若有类似微生物便可探测到，从未说该项目会被送往火星，也没有把“地球上确认 DNA 生命”设为前提条件，题干的计划与条件都缺乏原文依据。",
            "为什么不是 FALSE：原文并没有否认将来会把项目送往火星，也没有否认 DNA 生命与该项目之间的关联，只是对此毫无交代。既无相反信息，也非事实冲突，因此不能判 FALSE，只能按未提及判 NOT GIVEN。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
