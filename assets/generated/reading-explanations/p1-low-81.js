(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-81", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-81",
  "meta": {
    "examId": "p1-low-81",
    "title": "Salt  盐的历史",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "The chemical industry makes use of the majority of salt produced globally.",
          "translation": "化学工业使用了全球所产盐的大部分。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "About 70% is utilized by the chemical industry, mostly as a source of chlorine."
          },
          "synonyms": [
            "“makes use of” 同义替换为原文的 “is utilized by”，原文用被动语态、题干改用主动语态，意思都是“使用、利用”",
            "“the majority of salt produced globally” 同义替换为原文的 “About 70%”，七成产量即“大部分、多数”，produced globally 对应上文 “the salt produced worldwide”",
            "“the chemical industry” 在原文中原词复现，且是全文唯一出现的行业专有名词，属于最佳定位词"
          ],
          "locatingTip": "定位：题干的核心是 chemical industry（化学工业），这个复合名词在第 1 段只用了一次，扫读第 1 段时盯住 chemical 一词即可一步锁定第 3 句，不必读完全文。确定答案技巧：本题考“数量占比是否多数”，判分点就在百分数上。原文给出 “About 70% is utilized by the chemical industry”，70% 无疑属于 the majority（多数）；同时第 2 句的 “less than 5% of the salt produced worldwide is used for that purpose” 从反面强化了这一点——食用只占不到 5%，剩下的大头自然归工业。数字型判断题要盯住百分号和小数，本题是典型的“百分比改写成 majority／most”的送分题。",
          "analysis": "原文第 1 段先给盐下定义（氯化钠 NaCl，透明立方晶体），随后用三个句子说明用途分布：①“Although salt is most familiar as a food supplement, less than 5% of the salt produced worldwide is used for that purpose.”（尽管人们最熟悉的是作为食品添加剂的盐，但全球所产盐中用于此目的不到 5%）；②本题定位句 “About 70% is utilized by the chemical industry, mostly as a source of chlorine.”（约 70% 被化学工业使用，主要用作氯的来源）；③“Salt is also used for countless other purposes, such as removing snow and ice from roads, softening water, preserving food, and stabilizing soils for construction.”（盐还用于无数其他用途，如清除道路冰雪、软化水、保存食物、稳定建筑用土）。题干称“化学工业使用了全球产盐的大部分”，正对应②句中 “About 70% is utilized by the chemical industry”。70% 显然是 majority（多数），且 utilize（利用）与题干 make use of（使用）同义，只是语态由被动转为主动；此外②句的 70% 与①句的 less than 5% 构成互补，进一步证明化学工业才是用盐大户。信息一致且明确，因此答案是 TRUE。做本题要留心题干用 majority 代替具体数字，这是雅思判断题最常见的“概括化改写”，看到百分数只要判断它是否过半即可。",
          "traps": [
            "为什么不是 FALSE：原文明确写出 “About 70% is utilized by the chemical industry”，七成是过半数，与题干 “makes use of the majority of salt produced globally” 完全同向；原文中不存在任何“化学工业用盐不多”的相反表述，因此不构成矛盾。",
            "为什么不是 NOT GIVEN：原文不仅提到化学工业，还给出了确切占比（约 70%）和用途（氯的来源），信息完整且具体，并非“没有提及”；若原文只提化学工业用盐、却不说用量多少，才可能是 NOT GIVEN，但这里数字是明摆着的。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "In ancient times, people were only able to get salt from a single source.",
          "translation": "在古代，人们只能从一种来源获取盐。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The earliest humans obtained their salt from natural salt concentrations, as well as from meat."
          },
          "synonyms": [
            "“In ancient times” 同义替换为原文的 “The earliest humans”（最早的人类），都指远古时期的人",
            "“were only able to get salt from a single source”（只能来自单一来源）与原文的并列结构 “from natural salt concentrations, as well as from meat”（既来自天然盐矿，也来自肉类）相互冲突：原文给的是多种来源",
            "“obtained” 同义替换为 “get”，都是“获得”的意思"
          ],
          "locatingTip": "定位：题干关键词 ancient times 是时间信号词，全文讲盐的历史本就按时间推进，第 2 段开头即讲最早的人类，读第 2 段第 1 句即可命中。确定答案技巧：本题考“来源数量是单一还是多样”，判分关键是原文有没有并列多个来源。第 2 段第 1 句用 “from natural salt concentrations, as well as from meat” 一口气给出至少两个来源，紧接着第 2、3 句又补上“咀嚼海藻”“海水自然蒸发”“驯养动物后获得奶”等更多渠道，甚至末句说某些民族至今“use no other forms of salt”。原文处处是“多来源”，题干的 single source（单一来源）与之正面对立，故判 FALSE。遇到 only、single、sole 这类唯一性限定词要格外警觉，它们几乎总与原文的并列结构冲突。",
          "analysis": "第 2 段讲最早人类获取盐的途径：“The earliest humans obtained their salt from natural salt concentrations, as well as from meat.”（最早的人类从天然盐矿中取得盐，也从肉类中获得）。随后继续扩充来源清单：“Those people who lived near the ocean may also have obtained it by chewing seaweed or from the natural evaporation of small pools of seawater.”（住在海边的人还可能通过咀嚼海藻、或从小片海水的自然蒸发中获得盐）；“Meat became a more important source of salt as hunting was developed, as did milk when sheep, goats, horses, camels, reindeer, and cattle were domesticated.”（随着狩猎发展，肉类成为更重要的盐来源；当羊、山羊、马、骆驼、驯鹿和牛被驯化后，奶也是如此）。可见原文的逻辑是“来源不断增加、多渠道并存”。题干却断言古人 “were only able to get salt from a single source”（只能从单一来源获取盐），把“至少两种起步、后续更多”的事实压缩成“唯一一种”，与原文的并列结构（as well as）和后续举例直接矛盾，因此答案是 FALSE。要注意本题的陷阱在于题干把 multiple sources 改写成 a single source，属于数量上的正面对立，而不是信息缺失；只要抓住原文的 as well as 和 also 这些并列信号词，就能确定这是 FALSE 而不是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文第一句就用 “from natural salt concentrations, as well as from meat” 给出两种来源，后文又补充海藻、海水蒸发、动物奶等，来源数量明显多于一种，与题干的 “a single source” 直接冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“盐从哪里来”这一问题交代得非常具体，属于有明确信息且与题干相反的情形。NOT GIVEN 适用于原文没提，而本题原文提得很充分，只是方向相反，因此只能判 FALSE。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Salt production through quarrying rock salt was common before the solar evaporation method of producing salt.",
          "translation": "开采岩盐来制盐的做法在太阳能蒸发制盐法之前就已很普遍。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Solar evaporation was soon followed by the quarrying of exposed masses of rock salt, which quickly developed into the mining of underground deposits of salt."
          },
          "synonyms": [
            "“the solar evaporation method of producing salt” 对应原文的 “Solar evaporation”，即上文的 “the evaporation of seawater using the heat of the sun”",
            "“quarrying rock salt” 在原文中原词复现：“the quarrying of exposed masses of rock salt”",
            "“was common before” 与原文的 “was soon followed by” 在时间先后上相互冲突：原文说采石制盐出现在太阳能蒸发之后，题干却说它在之前"
          ],
          "locatingTip": "定位：题干有两个专有工序名 solar evaporation 与 quarrying，二者在第 3 段中间同一句里前后相邻，扫读第 3 段找到 Solar evaporation 开头的那句即可。确定答案技巧：本题考“时间先后顺序”，判分点是表示顺序的连接词。原文写 “Solar evaporation was soon followed by the quarrying of exposed masses of rock salt”，followed by 明确表示“A 之后紧接着 B”，即先太阳能蒸发、后采石，题干却把顺序倒过来说 quarrying 在 solar evaporation 之前，方向完全相反，故判 FALSE。做顺序类判断题时，要把 be followed by、follow、precede、come before、date back 这些词的含义背牢：X was followed by Y 等同于 Y 在 X 之后发生。",
          "analysis": "第 3 段的论证线索是“制盐技术的演进史”：①“The earliest method of salt production employed by humankind was the evaporation of seawater using the heat of the sun.”（人类最早使用的制盐方法是利用太阳的热量蒸发海水）；②“This method was particularly suited to hot, arid regions near the ocean or near salty lakes, and is still used in those areas.”（此法特别适合靠近海洋或盐湖的炎热干旱地区，至今仍在使用）；③本题定位句：“Solar evaporation was soon followed by the quarrying of exposed masses of rock salt, which quickly developed into the mining of underground deposits of salt.”（太阳能蒸发之后很快出现了对裸露岩盐体的开采，这又迅速发展为对地下盐矿的采掘）。原文用 was soon followed by 把太阳能蒸发排在前面、采石排在后面，并进一步说采石后来演变为地下采矿。题干却说 “Salt production through quarrying rock salt was common before the solar evaporation method”，把二者的先后完全颠倒，与原文的时间链直接冲突，因此答案是 FALSE。定位时还要注意题干把“制盐方法”说成 common（普遍），而原文强调的是“最早出现”的顺序问题，无论从顺序还是从“普遍性”的措辞看，题干都无法成立。",
          "traps": [
            "为什么不是 TRUE：原文的 was soon followed by 是典型的先后关系标记，明确表示采石制盐在太阳能蒸发之后才出现，与题干“在之前就已普遍”的说法正好相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对两种方法的先后顺序有明确交代（earliest method 是太阳能蒸发，随后是 quarrying），信息并不缺失，只是与题干相悖，因此按规则判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Two thousand years ago, the Chinese were quick to develop the equipment needed to mine underground.",
          "translation": "两千年前，中国人很快就开发出了地下开采所需的设备。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Two thousand years ago, the Chinese began using wells to reach underground pools of salt water, some of which were more than one kilometer deep."
          },
          "synonyms": [
            "“Two thousand years ago” 在原文中原词复现，是最强的定位信号",
            "“the Chinese” 在原文中原词复现",
            "“were quick to develop the equipment needed to mine underground” 在原文中找不到对应表达：原文只交代他们 “began using wells to reach underground pools of salt water”（开始用井去到达地下盐水层），既没有评价他们动作“快”（quick），也没有提到研发“设备”（equipment）这一过程"
          ],
          "locatingTip": "定位：题干开头的时间词 Two thousand years ago 加主语 the Chinese 都是大写或数字型的硬定位词，在第 3 段最后一句原词复现，一步到位。确定答案技巧：判断题遇到评价性形容词（quick、eager、slow、reluctant）和过程性名词（equipment、technology、method of research）时要格外小心，这类词是 NOT GIVEN 的高发区。原文只客观陈述两件事：中国人两千年前开始使用井，以及某些井深超过一公里。至于他们是不是“很快就开发出”了设备、以及他们是否“开发了设备”这一过程，原文只字未提，属于信息缺失，因此判 NOT GIVEN。切勿因为“他们能用深井取盐”就自行推断“他们一定迅速研发了设备”。",
          "analysis": "第 3 段末句：“Two thousand years ago, the Chinese began using wells to reach underground pools of salt water, some of which were more than one kilometer deep.”（两千年前，中国人开始使用井来获取地下盐水，其中一些井深逾一公里）。句中关于中国人的信息只有两点：时间（两千年前）与做法（开始使用井去到达地下盐水层），外加一个补充细节（井的深度超过一公里）。题干却在时间状语之外加了两层原文没有的信息：一是“quick to develop”（很快就开发出），原文只说 they began using，没有对速度作任何评价；二是“the equipment needed to mine underground”（地下开采所需的设备），原文用的是 wells（井），并未把它称为“为地下开采研发的设备”，更没有描述研发过程。按判断题规则，题干把原文未提供的“速度评价”和“研发过程”当作事实陈述，而原文对此毫无交代，既不能证实也不能证伪，因此答案是 NOT GIVEN。本题与第 3 题同在第 3 段，属于同段两题，做题时要为每道题分别回到原文找对应的那一句，不要把第 3 题“顺序颠倒”的印象带到第 4 题上。",
          "traps": [
            "为什么不是 TRUE：原文没有 quick、rapidly、soon 之类的速度词，也没有 equipment、device、machinery 之类的“设备”表述，只用 began using wells 描述做法。把“会用井”等同于“迅速研发出设备”属于超出原文的推断，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文有相反信息，例如“他们动作很慢”或“他们并未研发设备”。原文对此完全没有提及，既没说快也没说慢，因此不是 FALSE，只能是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "At the time of the Roman Empire, salt was removed from salt water by heating the water in a type of pan.",
          "translation": "在罗马帝国时期，人们通过把盐水放在一种平底锅里加热来提取盐。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "During the time of the Roman Empire, shallow lead pans were used to boil salt water over open fires to extract the salt."
          },
          "synonyms": [
            "“At the time of the Roman Empire” 同义替换为原文的 “During the time of the Roman Empire”，时间状语几乎原词照搬",
            "“a type of pan” 同义替换为原文的 “shallow lead pans”（浅的铅制平底锅），题干只说“一种锅”，原文给出了材质与形状",
            "“salt was removed from salt water by heating the water” 同义替换为原文的 “were used to boil salt water over open fires to extract the salt”，boil 对应 heating，extract the salt 对应 salt was removed"
          ],
          "locatingTip": "定位：题干中的专有名词 the Roman Empire 是全篇唯一的帝国名，只在第 4 段出现，扫读时找到 Roman Empire 即可锁定该句。确定答案技巧：本题考“用什么方法从水里取盐”，判分点是动词和器物名词。原文句结构为“时间状语加 shallow lead pans were used to boil salt water over open fires to extract the salt”，即用浅铅锅在明火上煮盐水以提取盐：器物 pans 对应题干的 a type of pan，动作 boil（煮沸）对应 heating（加热），目的 to extract the salt 对应 salt was removed from salt water。三处一一对应，方向一致，因此判 TRUE。注意题干把原文的被动 “pans were used to boil” 改写成 “salt was removed by heating”，主被动转换与动词替换同时发生，是雅思 TRUE 题的典型出题方式，不要因为句子结构变化就误以为信息不同。",
          "analysis": "第 4 段讲的是“缺乏日照蒸发条件的地区如何制盐”，时间线清晰：先讲原始做法 “In areas where the climate did not allow solar evaporation, salt water was poured on burning wood or heated rocks to boil it. The salt left behind was then scraped off.”（在气候不允许太阳能蒸发的地区，人们把盐水浇在燃烧的木头上或灼热的石头上煮沸，然后把留下的盐刮下来）；接着是本题定位句 “During the time of the Roman Empire, shallow lead pans were used to boil salt water over open fires to extract the salt.”（罗马帝国时期，人们使用浅的铅制平底锅在明火上煮沸盐水以提取盐）；再往后写中世纪改用铁锅加煤加热、1860 年代发明 Michigan process。定位句与题干逐点对应：时间上 During the time of the Roman Empire 对应 At the time of the Roman Empire；器物上 shallow lead pans 对应 a type of pan；方式上 were used to boil salt water over open fires 对应 by heating the water；结果上 to extract the salt 对应 salt was removed from salt water。题干只是把原文的细节（铅制、浅、明火）概括为“一种锅”“加热”，并未添加或改变事实，因此答案是 TRUE。本题的干扰点在于同段后面还出现了 iron pans（铁锅）和 Middle Ages，若定位不准容易误判，但只要抓住 Roman Empire 这一时间锚点，就不会混到中世纪那句上去。",
          "traps": [
            "为什么不是 FALSE：原文明确说罗马帝国时期 “shallow lead pans were used to boil salt water”，锅（pans）与加热（boil）两个要素都与题干吻合，且加热的目的就是 to extract the salt（提取盐），与题干 “salt was removed from salt water” 一致，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不仅点出罗马帝国这一时间，还写明了器物（shallow lead pans）、加热方式（over open fires）和目的（to extract the salt），信息非常完整，并非未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–9 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 9
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "during a process called 6 ________, a machine is used to break into the salt",
          "translation": "在一个称为 ______ 的工序中，机器被用来切入盐体。",
          "answer": "undercutting",
          "wordClass": "名词（动名词形式，指采矿工序名称；位于过去分词 called 之后作宾语，用 -ing 形式 undercutting，不加冠词、不变复数）",
          "locating": {
            "paragraph": "5",
            "quote": "Then a machine resembling a gigantic chain saw is used to cut a long horizontal slot through the salt, in a procedure known as undercutting."
          },
          "synonyms": [
            "“a machine” 在原文中原词复现：“a machine resembling a gigantic chain saw”",
            "“is used to break into the salt” 同义替换为原文的 “is used to cut a long horizontal slot through the salt”，cut a slot through 即“切进盐体”",
            "“a process called …” 同义替换为原文的 “in a procedure known as …”，process 与 procedure 同义，called 与 known as 同义"
          ],
          "locatingTip": "定位：笔记按制盐工序顺序排列，前三条（取样、化验、打竖井）分别对应第 5 段的 core samples、analyzed、vertical tunnels，第 6 空紧接 “vertical tunnels are sunk into the center of the salt deposit”，因此直接在第 5 段“打竖井”之后的句子里找。确定答案技巧：看到笔记写 “during a process called [6]” 就要在原文寻找 “known as …”“called …”“termed …” 这类命名句。原文紧跟竖井之后写道 “Then a machine resembling a gigantic chain saw is used to cut a long horizontal slot through the salt, in a procedure known as undercutting”，procedure known as 与题干的 process called 完全对应，其后紧跟的专有工序名就是答案 undercutting。填写时注意事项：ONE WORD ONLY，只写 undercutting 一个词，保持原文小写拼法，不要写成 undercutting process 或写成动词形式 undercut。",
          "analysis": "第 5 段讲岩盐的开采流程，句子顺序与笔记条目几乎一一对应：先是 “Underground salt deposits are usually discovered by prospectors searching for water or oil.”（地下盐矿通常由寻找水或石油的勘探者发现）；接着 “When salt is detected, a diamond-tipped, hollow drill is used to take several regularly spaced core samples throughout the area. These are analyzed to determine if salt mining would be profitable.”（发现盐后，用带金刚石钻头的空心钻在整个区域取若干等距岩芯样本，再化验以判断采盐是否有利可图）——“drill 取样、analysed 判断是否开采”对应笔记前两条；随后 “If the site is thought to be suitable, vertical tunnels are sunk into the center of the salt deposit.”（若认为场地合适，就在盐矿中心打下竖井）——对应笔记第三条；紧接的定位句 “Then a machine resembling a gigantic chain saw is used to cut a long horizontal slot through the salt, in a procedure known as undercutting.”（随后用一种形似巨型链锯的机器在盐体上切出一条长长的水平槽，这一工序称为 undercutting）——正是笔记第四条 “during a process called [6], a machine is used to break into the salt”。原文用 in a procedure known as 引出工序名 undercutting，与题干的 a process called 结构对称，故答案是 undercutting。要注意区分本段后面出现的 room-and-pillar method（房柱法）——那是“切割与爆破反复进行后留下盐柱”的整套方法名，与“机器切槽”这一步的 name 不是同一个概念，不要误填。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "after blasting, 7 ________ of salt are left behind to hold the roof up",
          "translation": "爆破之后，留下盐的 ______ 来支撑矿顶。",
          "answer": "pillars",
          "wordClass": "名词（复数形式；作主语，与复数谓语 are 及后置定语 of salt 呼应，原文写作 salt pillars，故填复数 pillars）",
          "locating": {
            "paragraph": "5",
            "quote": "Cutting and blasting are repeated in a pattern that leaves salt pillars standing to support the roof of the mining area."
          },
          "synonyms": [
            "“after blasting” 同义替换为原文的 “Cutting and blasting are repeated”，爆破是留下盐柱的原因动作",
            "“are left behind” 同义替换为原文的 “leaves … standing”，leave … standing 即“使某物留存、矗立”",
            "“to hold the roof up” 同义替换为原文的 “to support the roof of the mining area”，hold up 与 support 同义"
          ],
          "locatingTip": "定位：笔记条目按顺序推进，第 7 空在 “explosives are placed in the holes in the salt” 之后，对应第 5 段中 “the holes are filled with explosives such as dynamite” 之后的那一句，即 “Cutting and blasting are repeated …”。确定答案技巧：要抓两个语法提示。其一，空格后是 “of salt are left behind”，of 前的空必须是名词，且谓语 are 是复数，说明答案取复数形式；其二，题干说这些盐“被留下来支撑矿顶（hold the roof up）”，原文对应表达是 leaves salt pillars standing to support the roof。把 “salt pillars” 带入题干结构即 “pillars of salt are left behind”，与原文完全一致，故填 pillars。注意原文房间柱法的名称 room-and-pillar 里也含 pillar，可作为交叉验证，但空格只填 pillar 的复数形式 pillars 一个词。",
          "analysis": "第 5 段描述采盐的关键工艺：“A series of holes are then drilled into the salt with an electric drill, and the holes are filled with explosives such as dynamite. Cutting and blasting are repeated in a pattern that leaves salt pillars standing to support the roof of the mining area. This is known as the room-and-pillar method and is also used in coal mines.”（随后用电动钻在盐体上钻出一系列孔洞，孔中填入炸药，如甘油炸药。切割与爆破按一定模式反复进行，从而留下盐柱矗立以支撑采矿区顶部。这一方法称为房柱法，也用于煤矿）。笔记的两条 “explosives are placed in the holes in the salt” 与 “after blasting, [7] of salt are left behind to hold the roof up” 正好对应上面第二句：holes are filled with explosives 对应 explosives are placed in the holes；leaves salt pillars standing to support the roof 对应 are left behind to hold the roof up，其中 the roof of the mining area 被笔记简化为 the roof。核心名词 salt pillars 中的 pillars 就是答案，且必须写复数，因为题干谓语是 are 且原文用的是复数 pillars（房柱法 room-and-pillar 一词也印证 pillar 是这里的核心概念）。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "in an underground crushing area, small pieces of rock salt are gathered using a 8 ________",
          "translation": "在地下破碎区，小块岩盐用一个 ______ 来收集。",
          "answer": "grill",
          "wordClass": "名词（可数名词单数，受不定冠词 a 修饰，指“金属格栅、筛网”；作 using 的宾语，保持单数形式 grill，不加复数）",
          "locating": {
            "paragraph": "5",
            "quote": "Once blasted, chunks of the rock salt are transported to an underground crushing area where smaller pieces are collected via a metal grill and larger pieces are crushed in a rotating cylinder."
          },
          "synonyms": [
            "“in an underground crushing area” 在原文中原词复现：“to an underground crushing area”",
            "“small pieces of rock salt are gathered” 同义替换为原文的 “smaller pieces are collected”，gathered 与 collected 同义，small pieces 对应 smaller pieces",
            "“using a …” 同义替换为原文的 “via a metal grill”，via 即“通过、借助”，与 using 同义"
          ],
          "locatingTip": "定位：笔记最后两条讲“地下破碎区”与“去除杂质”，对应第 5 段末两句，题干关键词 underground crushing area 在原文中几乎原词复现，是最省力的定位锚。确定答案技巧：难点在于原文用的是 via（通过）而不是 using，要认得 via 与 using 同义；同时要注意原文把大小两种碎块的处理方式并列对比——smaller pieces are collected via a metal grill（小碎块通过金属格栅收集）、larger pieces are crushed in a rotating cylinder（大块在旋转滚筒中压碎），题干只问“小块用什么收集”，对应的是前者，故答案是 grill。填写时只写一个名词 grill，不要把 metal 一起写进去（ONE WORD ONLY），也不要填 cylinder（那是处理大块碎块的设备）。",
          "analysis": "第 5 段末句：“Once blasted, chunks of the rock salt are transported to an underground crushing area where smaller pieces are collected via a metal grill and larger pieces are crushed in a rotating cylinder.”（爆破之后，大块岩盐被运到地下破碎区，较小的碎块通过金属格栅收集，较大的碎块则在旋转滚筒中压碎）。笔记条目 “in an underground crushing area, small pieces of rock salt are gathered using a [8]” 与该句前半完全对应：underground crushing area 原词复现；small pieces 对应 smaller pieces；are gathered 对应 are collected；using a 对应 via a。via 之后的中心名词是 grill（格栅），metal 只是修饰它的材料形容词，因此空格只填 grill。从词性看，空格前有不定冠词 a，后面无其他名词成分，需要一个可数名词单数，grill 恰好符合；若误填 metal，则说明把修饰语当成了中心词，这正是本题的主要陷阱。另外注意不要填 cylinder，它对应的是 larger pieces 的处理方式，属于同一句里的干扰信息。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "the process of 9 ________ removes any unwanted material from the rock salt",
          "translation": "______ 这一工序去除岩盐中不需要的物质。",
          "answer": "picking",
          "wordClass": "名词（动名词形式，指工序名称；位于介词 of 之后作宾语，用 -ing 形式 picking，不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "Finally, redundant matter is extracted from the rock salt, in what is known as picking."
          },
          "synonyms": [
            "“removes any unwanted material” 同义替换为原文的 “redundant matter is extracted”，remove 对应 extract，unwanted material 对应 redundant matter（多余物质）",
            "“the process of …” 同义替换为原文的 “in what is known as …”，都是引出工序名的表达",
            "“from the rock salt” 在原文中原词复现"
          ],
          "locatingTip": "定位：题干是笔记最后一条，原文用 Finally 引出的末句正对应“最后一步”，因此直接读第 5 段最后一句即可。确定答案技巧：本题与第 6 空同属“工序命名型填空”，都要盯住 naming expressions。原文 “in what is known as picking” 与题干的 “the process of [9]” 结构对应，what is known as 后面引出的 picking 就是工序名。另一条线索是动词同义：题干 removes any unwanted material 对应原文 redundant matter is extracted（redundant 即多余的、不必需的，与 unwanted 同义；extract 与 remove 同义），说明定位句没错。填写时只写 picking 一个词，保持动名词形式，不要写成动词 pick 或名词 picks。",
          "analysis": "第 5 段末句：“Finally, redundant matter is extracted from the rock salt, in what is known as picking.”（最后，多余的物质被从岩盐中提取出来，这一过程被称为 picking）。笔记最后一条 “the process of [9] removes any unwanted material from the rock salt” 正是对该句的改写：原文的被动 “redundant matter is extracted from the rock salt” 在笔记中变成主动 “the process … removes any unwanted material from the rock salt”，其中 redundant matter 被同义替换为 any unwanted material，extract 被替换为 remove；原文的命名标记 in what is known as 被改写为 the process of。因此 of 之后的 picking 就是答案。词性上，picking 在这里是动名词，作介词 of 的宾语，须保持 -ing 形式且用单数：写 pick（动词）或 pickings 都不符合原文。定位方面，注意该句以 Finally 开头，与笔记把它排在末尾（“最后一步”）的顺序一致，遇到 Finally、Lastly、The last step 这类词可以直接锁定段落收尾句，这是笔记填空题常用的顺序对应技巧。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 流程图填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "cylinders made of 10 ________ are filled with brine",
          "translation": "由 ______ 制成的圆柱容器中注满盐水。",
          "answer": "metal",
          "wordClass": "名词（材料名词，作 made of 的宾语；metal 在此不可数，保持不可数形式，不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "This device consists of three or more closed metal cylinders."
          },
          "synonyms": [
            "“cylinders” 在原文中原词复现：“closed metal cylinders”",
            "“made of metal” 同义替换为原文的 “metal cylinders”，原文用名词作前置定语，题干改写为 made of 后置结构",
            "“are filled with brine” 对应原文下一层信息 “It then fills the bottom of the cylinders”，即盐水注入圆柱容器"
          ],
          "locatingTip": "定位：流程图主题 “Obtaining salt from brine: the multi-effect vacuum evaporator” 直接给出专有名词 multi-effect vacuum evaporator，这一词组只在第 6 段出现，整组题都在第 6 段范围内作答，因此读第 6 段第 4 句即可找到 device 的构成描述。确定答案技巧：题干 “cylinders made of [10]” 问的是圆柱容器的材质，回原文找修饰 cylinders 的形容词或名词定语：原文写 “three or more closed metal cylinders”，metal 正是说明材质的定语。要注意雅思常见的结构改写——原文用名词前置定语（metal cylinders），题干改成 made of 加空格的后置结构，信息点（材料）没变，所以空格填 metal。别误填 closed（那是状态，且不是材料），也别因为 “three or more” 而写 three。",
          "analysis": "第 6 段讲从盐水中制盐：先说明盐水（brine）的来源与定义，接着 “Most brine is processed by a multi-effect vacuum evaporator. This device consists of three or more closed metal cylinders.”（大部分盐水由多效真空蒸发器处理。该装置由三个或更多密闭的金属圆柱容器组成）。流程图的第一个框 “cylinders made of [10] are filled with brine” 就从这句派生：原文的 metal cylinders（金属圆柱容器）被改写成 cylinders made of [10]，空格承担的正是“材料”这一信息，因此答案是 metal。词性上，空格之前是介词 of，其后需要名词；metal 作材料名词时不可数，不加冠词、不用复数。逻辑上也能自我验证：紧接的一句 “Brine is first treated to remove chemical compounds. It then fills the bottom of the cylinders.”（盐水先经处理以去除化合物，然后注入圆柱容器底部）与流程图第一个框的 “are filled with brine” 相互呼应，说明第 10 空确实在讲容器的构成，而非容器的状态。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "11 ________ heats the tube in the first cylinder",
          "translation": "______ 加热第一个圆柱容器中的管道。",
          "answer": "steam",
          "wordClass": "名词（不可数物质名词，在句中作主语；保持不可数形式 steam，不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "The brine in the first cylinder passes through tubes heated by steam."
          },
          "synonyms": [
            "“heats the tube” 同义替换为原文的 “tubes heated by steam”，原文用过去分词短语表示“被加热”，题干改用主动动词 heats",
            "“in the first cylinder” 在原文中原词复现：“in the first cylinder”",
            "“the tube” 对应原文的 “tubes”，单复数形式略有差异但指同一对象"
          ],
          "locatingTip": "定位：流程图第二个框的关键词是 the first cylinder，回原文找 first cylinder，只有第 6 段第 7 句出现，非常精准。确定答案技巧：题干是主动句 “[11] heats the tube”，原文是被动分词短语 “tubes heated by steam”，要把被动还原成主动：被加热的是 tubes，加热的施动者就是 by 后面的 steam。这类“被动转主动”的空格题，答案往往藏在 by 后面。填完后可把词回填检验——“steam heats the tube in the first cylinder”与原文 “tubes heated by steam” 意思一致，说明答案成立。注意 ONE WORD ONLY，只写 steam，不要写成 steam heat 或 hot steam。",
          "analysis": "第 6 段描述蒸发器的工作过程：“The brine in the first cylinder passes through tubes heated by steam. The brine boils and its steam enters the next cylinder. In each cylinder, the condensation of steam causes the pressure inside to drop.”（第一个圆柱容器中的盐水通过被蒸汽加热的管道。盐水沸腾，其蒸汽进入下一个圆柱容器。在每个容器中，蒸汽冷凝使内部压力下降）。流程图第二个框 “the [11] heats the tube in the first cylinder” 正从第一句改写而来：原文是 tubes heated by steam（被蒸汽加热的管道），题干改成主动表达 “[11] heats the tube”，把 by 后面的施动者提为主语，因此答案是 steam。要小心的干扰点是紧接的 “The brine boils and its steam enters the next cylinder”，句中再次出现 steam，容易让人分心，但那一句讲的是“蒸汽进入下一个容器”，与“加热第一个容器中的管道”不是同一信息点；本题的判分依据只有 heated by steam 这一处。词性上 steam 是不可数物质名词，作主语时零冠词、不加复数，直接填原形即可。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "the 12 ________ in the cylinders falls due to condensation",
          "translation": "由于冷凝，圆柱容器内的 ______ 下降。",
          "answer": "pressure",
          "wordClass": "名词（不可数名词；位于定冠词 the 之后作主语，与单数谓语 falls 一致；填不可数形式 pressure，不加复数）",
          "locating": {
            "paragraph": "6",
            "quote": "In each cylinder, the condensation of steam causes the pressure inside to drop."
          },
          "synonyms": [
            "“due to condensation” 同义替换为原文的 “the condensation of steam causes …”，原文用 causes 表示因果，题干用 due to 表示原因",
            "“falls” 同义替换为原文的 “to drop”，drop 与 fall 同义（下降）",
            "“in the cylinders” 对应原文的 “In each cylinder … inside”，in each cylinder 即“在每个圆柱容器内”"
          ],
          "locatingTip": "定位：流程图第三个框的关键信息是 condensation（冷凝）与“下降”这一结果，回原文搜索 condensation，只在第 6 段第 9 句出现，命中率极高。确定答案技巧：原文句为 “the condensation of steam causes the pressure inside to drop”，其中 causes … to drop 表示“导致某物下降”，被下降的对象就是 pressure；题干把因果关系改写成原因状语 “due to condensation”，谓语换成同义的 falls，于是主语位置留下的正是 pressure。遇到 falls、drops、declines、decreases 这类“下降”动词，要立刻回原文找宾语或主语里那个会下降的量，本题就是压力。填写时写不可数名词原形 pressure，不要写成 pressures，也不要填 steam（steam 是冷凝的对象，不是下降的东西）。",
          "analysis": "第 6 段的蒸发器流程是连环推进的：盐水经处理后注入容器底部，通过被蒸汽加热的管道，沸腾后蒸汽进入下一个容器，“In each cylinder, the condensation of steam causes the pressure inside to drop.”（在每个容器中，蒸汽的冷凝使内部压力下降）。这一压力递减正是“多效（multi-effect）”蒸发器能连续工作的原理——压力降低则沸点降低，盐水可在较低温度下继续蒸发。流程图第三个框 “the [12] in the cylinders falls due to condensation” 与该句一一对应：In each cylinder 对应 in the cylinders，the condensation of steam causes … to drop 对应 falls due to condensation，被下降的对象 the pressure inside 中的 pressure 就是答案。语法上，题干谓语 falls 是第三人称单数，说明主语为单数或不可数名词，pressure 正好符合；若填 steam 或 slurry，既不符句意也不符“下降”这一动作的搭配。做这类流程图题要顺着“处理步骤加物理量变化”的思路读原文，把每个框对应到原文的具体句子上，避免跨句串位。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "13 ________ are used to separate salt particles by size",
          "translation": "______ 被用来按大小分选盐粒。",
          "answer": "screens",
          "wordClass": "名词（复数形式；作主语，与复数谓语 are used 一致，原文用复数 screens，故填复数）",
          "locating": {
            "paragraph": "6",
            "quote": "The slurry is then filtered to remove excess brine, dried, and passed through screens to sort the salt particles according to how large they are."
          },
          "synonyms": [
            "“separate salt particles by size” 同义替换为原文的 “sort the salt particles according to how large they are”，sort 对应 separate，according to how large 对应 by size",
            "“are used to …” 同义替换为原文的 “passed through screens to …”，都用被动式表达“借助某物完成某动作”",
            "“slurry collects in the cylinders and passes to a tank” 这一前序框对应原文的 “A material called slurry forms at the bottom of the cylinders and goes into a tank”"
          ],
          "locatingTip": "定位：流程图最后一个框讲“按大小分选盐粒”，对应原文第 6 段末句，句中的 slurry、tank 与流程图倒数第二个框高度重合，可先靠 slurry 从上一框往下顺读定位。确定答案技巧：注意语法信号——空格后的谓语是 are used，复数形式要求主语为复数名词，这就排除了单数可数名词的选项。原文句为 “passed through screens to sort the salt particles according to how large they are”，screens（筛网）用于 to sort the salt particles，正是“用来按大小分选盐粒”的工具，且原文用的就是复数 screens，与 are 一致，因此答案是 screens。别误填 slurry（那是被筛的对象）、filter（原文的 filtered 是动词，指过滤去除多余盐水）或 tank（盐水槽是上一框的内容）。",
          "analysis": "第 6 段末两句描述盐水处理的收尾环节：“A material called slurry forms at the bottom of the cylinders and goes into a tank. The slurry is then filtered to remove excess brine, dried, and passed through screens to sort the salt particles according to how large they are.”（一种称为 slurry 的物质在容器底部形成并进入一个槽。随后对该 slurry 进行过滤以去除多余盐水、干燥，并通过筛网，以便按颗粒大小对盐粒进行分选）。流程图最后两个框分别对应这两句：前一框“slurry collects in the cylinders and passes to a tank”对应第一句；最后一框 “[13] are used to separate salt particles by size” 对应第二句的 “passed through screens to sort the salt particles according to how large they are”，其中 sort … according to how large they are 被同义替换为 separate … by size，工具名词又是复数，故答案取 screens。词性上，screens 是复数可数名词，与复数谓语 are used 保持数的一致；若写 screen 会因语法不符而失分，这是本题最容易丢分的地方，看到空格后的 are 就应先在心里标记“答案须为复数”。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
