(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1045", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1045",
  "meta": {
    "examId": "p1-medium-1045",
    "title": "Burying greenhouse gases to slow global warming 掩埋温室气体以减缓全球变暖",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 人名/机构观点匹配（Match each statement with the correct option, A–F）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "The cost implications of fitting plants with the necessary equipment.",
          "translation": "为工厂配备必要设备所带来的成本影响（成本问题）。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Lackner argues that it is too expensive to adapt existing plants to capture carbon dioxide."
          },
          "synonyms": [
            "原文 “too expensive” 同义替换为题干 “the cost implications”（成本影响、成本代价）",
            "原文 “adapt existing plants to capture carbon dioxide” 同义替换为题干 “fitting plants with the necessary equipment”（给工厂加装捕捉二氧化碳的设备）",
            "原文接下来一句 “he recommends that carbon-capturing capacity be built into future plants” 也属于题干 “fitting plants” 的做法，即把捕集能力装进电厂"
          ],
          "locatingTip": "定位：选项表格中 A–F 全是人名或机构名，属于大写专有名词这类“硬定位词”。先扫读全文圈出它们出现的段落：Klaus Lackner 出现在 E 段和 F 段。再看题干关键词 cost（成本）与 equipment（设备）：F 段开头列举封存要解决的两个问题，第一个就是 “the cost of capturing carbon dioxide”，随后直接给出 Lackner 关于“改造成本太高”的观点，因此把定位收缩到 F 段。确定答案技巧：1–6 题问的是“谁说了这句话”，所以在 F 段找到说话人 Klaus Lackner，对应选项 D；“成本高”只能对应“改造/加装设备”这件事，语义唯一。",
          "analysis": "F 段的语境是：封存要想在低碳未来中扮演关键角色，还有几个问题必须解决。原文先列出 “One is the cost of capturing carbon dioxide. A second is storing the gas safely once it's been captured.”，随即给出成本数据 “Today, it costs about $US50 to extract and store a tonne of carbon dioxide from a power plant, which raises the cost of producing electricity by 30-80%.”，然后用 Lackner 的观点把成本问题落到“为工厂装设备”上：Lackner argues that it is too expensive to adapt existing plants to capture carbon dioxide. Instead, he recommends that carbon-capturing capacity be built into future plants. 题干 “The cost implications of fitting plants with the necessary equipment” 中的 fitting plants with the necessary equipment，正对应原文的 adapt existing plants to capture carbon dioxide（改造现有电厂加装捕集设备）以及 built into future plants（在新电厂中预留捕集能力）；cost implications 对应 too expensive 与 30-80% 的成本上升。信息一一对应，因此答案是 D（Klaus Lackner）。",
          "traps": [
            "为什么不是 E（David Hawkins）：Hawkins 的观点在 G 段（海洋化学平衡危害海洋生物）和 J 段（发达国家援助发展中国家），全文没有谈过设备改造的成本问题。",
            "为什么不是 A（Scott Klara）：Klara 在 C 段只提供二氧化碳浓度上升的统计数据，未涉及成本。",
            "为什么不是 C（International Energy Agency）：国际能源署在 D 段给出的是未来发电装机容量的预测，与“给工厂装设备的成本”无关。",
            "为什么不是 B、F（IPCC、World Wide Fund for Nature Australia）：IPCC 在 C 段预测浓度将翻倍，WWF Australia 在 I 段谈地下封存导致人员窒息的风险，都不是成本讨论。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The effects of sequestration could have on sea creatures.",
          "translation": "封存（碳）可能对海洋生物造成的影响。（题干原文语法略有歧义，意思是 the effects that sequestration could have on sea creatures）",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "David Hawkins, from the Natural Resources Defense Council in Washington, warns that the carbon dioxide could radically alter the chemical balance in the ocean, with potentially harmful consequences for marine life."
          },
          "synonyms": [
            "原文 “marine life” 同义替换为题干 “sea creatures”（海洋生物）",
            "原文 “potentially harmful consequences” 同义替换为题干 “The effects”（影响，且原文强调的是“潜在有害”的影响）",
            "原文 “the carbon dioxide could radically alter the chemical balance in the ocean” 说明影响的具体机制，同义替换题干中 “sequestration ... on sea creatures”（把二氧化碳排入海洋改变其化学环境，从而影响海洋生物）"
          ],
          "locatingTip": "定位：题干核心是“海洋 + 生物”，圈出 sea creatures 的对应语义场（ocean、marine）。G 段讲捕获后的碳如何储存，先提到可以把二氧化碳泵到海底 “pumped to the bottom of the ocean”，紧接着就出现 Hawkins 的警告，段内的海洋词最密集，因此锁定 G 段。确定答案技巧：找到定位段后必须回答“这句话是谁说的”，因为选项是人名/机构。G 段唯一出现的人名是 David Hawkins，对应选项 E。",
          "analysis": "G 段的论证链条是：碳被捕获后必须储存；森林、湿地等天然碳汇（natural carbon sinks）能吸收一部分二氧化碳但远远不够；于是考虑把二氧化碳泵到海底，靠压力使其以液态固定在海底数十年，但这有严重的长期环境风险；接着 David Hawkins 警告 “the carbon dioxide could radically alter the chemical balance in the ocean, with potentially harmful consequences for marine life”；最后补充“另有一些人担心二氧化碳会逸回大气”。题干 “The effects of sequestration could have on sea creatures” 就是把 Hawkins 那句中的 marine life（海洋生物）与 potentially harmful consequences（潜在有害影响）抽出来提问，两者完全对应，故选 E。",
          "traps": [
            "为什么不是 F（World Wide Fund for Nature Australia）：WWF 在 I 段谈的风险是地下储存的二氧化碳泄漏使人窒息（people become asphyxiated），受害者是“人”，不是海洋生物。",
            "为什么不是 D（Klaus Lackner）：Lackner 在 E 段谈化石燃料依然主导的原因，在 F 段谈改造成本，不涉及海洋生物。",
            "为什么不是 A、B、C：Klara（C 段）、IPCC（C 段）、国际能源署（D 段）分别只谈浓度数据、浓度预测、发电装机容量预测，都不谈海洋生物。",
            "易错提醒：G 段末尾 “Others worry that the carbon dioxide could escape back into the atmosphere” 是“另一些人”的担忧，原文没有署名，不能算作 A–F 中任一具名选项的观点。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The reasons why products such as oil and gas continue to be popular energy sources.",
          "translation": "石油、天然气等产品继续成为热门能源的原因。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Geophysicist Klaus Lackner points out that around 85% of the world's energy is derived from fossil fuels, the cheapest and most plentiful energy source available, and the developing world in particular is unlikely to give them up."
          },
          "synonyms": [
            "原文 “fossil fuels” 同义替换为题干 “products such as oil and gas”（化石燃料即石油、天然气等产品）",
            "原文 “the cheapest and most plentiful energy source available” 同义替换为题干 “the reasons why ... continue to be popular”（最便宜、最丰富，正是受欢迎的原因）",
            "原文 “the developing world in particular is unlikely to give them up” 同义替换为题干 “continue to be popular energy sources”（不会放弃，即继续被广泛使用）"
          ],
          "locatingTip": "定位：题干关键词是 oil and gas、energy sources、reasons。原文不会直接说 oil and gas，而是用上位词 fossil fuels；E 段同时出现 fossil fuels、energy、give them up，是全文唯一解释“为什么还在用化石燃料”的段落。确定答案技巧：找到段落后再判断说话人，E 段给出该解释的是 Geophysicist Klaus Lackner，对应选项 D。此外，全文讲“替代能源难以短期顶上来”的也只有 E 段，可反向确认。",
          "analysis": "E 段先承认人们在寻找解决方案，风能、太阳能等化石燃料替代品正在研发，但这些替代能源要承担世界能源需求的主要份额还需很长时间。接着 Klaus Lackner 指出：全球约 85% 的能源来自化石燃料，而化石燃料是现有可得的最便宜、最丰富的能源；发展中国家尤其不太可能放弃它们；这正是许多科学家支持碳封存的原因。题干问“石油天然气等继续成为热门能源的原因”，原文的 cheapest and most plentiful（便宜且丰富）就是原因，unlikely to give them up（不会放弃）就是“继续受欢迎”的具体表现，因此答案是 D（Klaus Lackner）。",
          "traps": [
            "为什么不是 C（International Energy Agency）：国际能源署在 D 段给出的是“到 2030 年将投运的发电能力中有三分之二尚未建成”以及中国、印度的煤炭使用预测，用来证明减排之难，并没有解释化石燃料为何受欢迎。",
            "为什么不是 A（Scott Klara）：只提供过去一个世纪二氧化碳浓度上升的数据。",
            "为什么不是 E（David Hawkins）：Hawkins 谈的是海洋风险（G 段）与发达国家出资援助（J 段），没有解释化石燃料的吸引力。",
            "为什么不是 B、F：IPCC 谈浓度翻倍预测（C 段），WWF Australia 谈地下储存风险（I 段）。",
            "注意：本题与第 1 题同为 D，因为题目注明 “NB You may use any letter more than once”，选项可重复使用。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The need for industrialised countries to give aid to less wealthy countries.",
          "translation": "工业化国家需要向较不富裕国家提供援助的必要性。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "J",
            "quote": "Hawkins argues that, to encourage developing nations to use sequestration, developed nations will have to provide assistance."
          },
          "synonyms": [
            "原文 “developed nations” 同义替换为题干 “industrialised countries”（发达国家即工业化国家）",
            "原文 “developing nations / poorer countries” 同义替换为题干 “less wealthy countries”（发展中国家、较贫穷的国家）",
            "原文 “will have to provide assistance” 与后一句 “finance the difference” 同义替换为题干 “give aid”（提供援助、出钱补贴）"
          ],
          "locatingTip": "定位：题干出现一组对立概念——industrialised countries（富国）与 less wealthy countries（穷国），并带有“给援助”的动作。全文只有 J 段同时出现 developed nations 与 developing nations / poorer countries，并明确写了发达国家出钱补贴的关系。确定答案技巧：1–6 题填的是人名/机构而不是段落，所以找到“谁提出这个主张”最为关键——J 段的主张出自 Hawkins，对应选项 E。",
          "analysis": "J 段开头说，如果不把发展中国家纳入其中，削减全球温室气体很难有进展；但目前碳封存不是发展中国家的优先事项，因为这会增加能源生产成本。接着 Hawkins 提出解决方案：为鼓励发展中国家使用封存技术，发达国家必须提供援助；他建议采取多边机制，发达国家通过向更贫穷的国家购买碳排放额度等方式，补贴“普通燃煤电厂”与“带碳捕集的电厂”之间的成本差；也就是说，未来若干年仍是最大排放国的富国向穷国购买排放权，穷国再拿这笔收入去建更好的电厂。题干 “The need for industrialised countries to give aid to less wealthy countries” 与 “developed nations will have to provide assistance” 逐词对应（发达国家、必须、提供援助），故选 E。",
          "traps": [
            "为什么不是 C（International Energy Agency）：国际能源署只在 D 段出现，提供的是装机容量预测，没有任何援助主张。",
            "为什么不是 B（Intergovernmental Panel on Climate Change）：IPCC 在 C 段做浓度翻倍预测，不涉及国家间的资金支援。",
            "为什么不是 F（World Wide Fund for Nature Australia）：WWF 关注的是地下储存的安全风险（I 段），没有谈发达国家援助发展中国家。",
            "为什么不是 D（Klaus Lackner）：Lackner 关注技术成本与化石燃料依赖（E、F 段），未涉及国际援助。",
            "注意：本题与第 2 题同为 E，属选项重复使用（题目已注明可以重复）。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The significant increase in carbon dioxide concentrations in the air over the last 100 years.",
          "translation": "过去 100 年间空气中二氧化碳浓度的显著上升。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Over the past century, airborne carbon dioxide concentrations have risen by nearly a third, according to Scott Klara, sequestration manager at the US National Energy Technology Laboratory."
          },
          "synonyms": [
            "原文 “Over the past century” 同义替换为题干 “over the last 100 years”（过去一个世纪即过去 100 年）",
            "原文 “airborne” 同义替换为题干 “in the air”（空气中的、悬浮于空气中的）",
            "原文 “risen by nearly a third” 同义替换为题干 “significant increase”（上升近三分之一，即显著增长）"
          ],
          "locatingTip": "定位：题干带有明确时间词 over the last 100 years，用时间表达定位最快——C 段 “Over the past century” 是它的同义改写。确定答案技巧：1–6 题填的是信息来源，该数据在句末署明出处 “according to Scott Klara, sequestration manager at the US National Energy Technology Laboratory”，所以答案是 A，而不是“C 段”或同段出现的 IPCC。",
          "analysis": "C 段先给出封存的目标（稳定会滞留热量的温室气体排放），紧接着用数据说明形势：过去一个世纪，空气中的二氧化碳浓度上升了近三分之一，这一数据来自美国国家能源技术实验室的封存项目主管 Scott Klara；随后 IPCC 预测，如果全球排放不削减三分之二，浓度将升至工业革命前（18 世纪初）水平的两倍；最后指出大气中含碳化合物的增加被认为是全球气温与海平面上升的原因。题干三要素——时间（over the last 100 years）、地点（in the air）、变化（significant increase）——与 C 段那句完全对应，而该数据出自 Scott Klara，故选 A。",
          "traps": [
            "为什么不是 B（Intergovernmental Panel on Climate Change）：IPCC 确实也在 C 段出现，但它讲的是对未来的预测（浓度将升至 18 世纪初的两倍），与题干“过去 100 年的上升”时间方向相反，是本题最强的干扰项。",
            "为什么不是 C（International Energy Agency）：国际能源署在 D 段讲未来发电能力建设，与二氧化碳浓度无关。",
            "为什么不是 D、E、F：Lackner、Hawkins、WWF Australia 都没有给出浓度上升的数据。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The potential for sequestration to harm human life.",
          "translation": "封存（碳）有可能危害人类生命。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "I",
            "quote": "The World Wide Fund for Nature Australia has argued that the primary risk of underground storage is that dangerously large volumes of carbon dioxide might escape and people become asphyxiated."
          },
          "synonyms": [
            "原文 “people become asphyxiated” 同义替换为题干 “harm human life”（人窒息致死，即危害人的生命）",
            "原文 “the primary risk of underground storage” 同义替换为题干 “The potential for sequestration to ...”（封存的潜在风险）",
            "原文 “dangerously large volumes of carbon dioxide might escape” 说明危害的成因，同义替换题干中封存危害人类生命的机制（大量二氧化碳泄漏）"
          ],
          "locatingTip": "定位：题干 harm human life 是抽象后果词，原文不会照抄，要换成人身伤害的具体表达（窒息、死亡、人身安全）。I 段首句就说地下储存大量气体引发环境担忧，段内又出现 “people become asphyxiated”，所以定位到 I 段。确定答案技巧：I 段里有两类担忧主体——泛指的环境主义者（Environmentalists）和具名的 The World Wide Fund for Nature Australia。选项只给了具名机构，因此必须把“危害人的生命”这一具体风险归到 WWF Australia 名下，选 F。",
          "analysis": "I 段先说地下储存大量气体明显会引发环境担忧；环境主义者主张必须对潜在储存地点（如油气储层、不宜开采的煤层）做更多研究，以确保它们能提供长期方案；随后 WWF Australia 指出，地下储存的首要风险是危险的大量二氧化碳可能泄漏，导致 people become asphyxiated（人窒息）。题干 “The potential for sequestration to harm human life” 与该句一一对应：potential 对应 primary risk，sequestration 对应 underground storage，harm human life 对应 people become asphyxiated，而给出这一判断的机构是 World Wide Fund for Nature Australia，故选 F。",
          "traps": [
            "为什么不是 E（David Hawkins）：Hawkins 在 G 段的警告针对的是 marine life（海洋生物），不是人的生命。",
            "为什么不是 D（Klaus Lackner）：Lackner 只谈成本与能源结构，未涉及人身安全。",
            "为什么不是 A、B、C：Klara、IPCC、国际能源署都不谈人员安全风险。",
            "易错提醒：I 段首句的 “raises environmental fears” 是笼统表述，真正指明“危害人的生命”这一风险主体的是 WWF Australia，所以不能选其他人名/机构。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–9 段落信息匹配（Which paragraph contains the following information? A–J）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 9
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Examples of sequestration already in use in several parts of the world",
          "translation": "世界多个地区已经在使用的碳封存实例。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "H",
            "quote": "A few promising attempts at underground carbon sequestration are currently under way. In western Canada, an oil company is pumping liquefied carbon dioxide into oil wells to force more oil to the surface and boost recovery by 10-15%."
          },
          "synonyms": [
            "原文 “currently under way / is pumping / is injecting” 同义替换为题干 “already in use”（已经在使用、正在进行）",
            "原文 “In western Canada ... In another instance in the North Sea” 同义替换为题干 “in several parts of the world”（在世界的多个地区）",
            "原文 “underground carbon sequestration” 同义替换为题干 “sequestration”（碳封存）"
          ],
          "locatingTip": "定位：段落信息匹配要把题干抽象词拆成可扫描的具体线索。题干 “Examples ... already in use” 意味着要找“正在运行的真实项目”，而项目最容易由地点名和进行时动词暴露。全文只有 H 段以“地点加公司行动”的方式列举实例：In western Canada, an oil company is pumping ...；In another instance in the North Sea, a Norwegian energy firm is injecting ...。确定答案技巧：抓 “In another instance” 这个并列标志，说明同一段里出现了第二个例子，双例并置才满足题干 several parts of the world，因此答案是 H。",
          "analysis": "题干 “Examples of sequestration already in use in several parts of the world” 包含两个必要条件：一是“已经在使用”（不是设想、不是研究计划），二是“不止一个地区”。H 段首句总起：“A few promising attempts at underground carbon sequestration are currently under way.”（一些有前景的地下碳封存尝试目前正在进行），随后给出两个实例：加拿大西部某石油公司把液化二氧化碳泵入油井，把更多石油推向地表，使采收率提高 10–15%，该气体通过管道来自美国北达科他州一家合成燃料厂；另一例是北海某挪威能源公司把天然气生产中产生的二氧化碳注入海底 1000 米深处的咸水层。地点横跨北美与欧洲，动词都是现在进行时，与题干“already in use in several parts of the world”完全对应，故选 H。",
          "traps": [
            "为什么不选 B：B 段说的是石油公司早就把这项技术用于提高油井效率，并提到十四国代表同意开展合作研究，属于“概念早已在用”加上“研究计划”，既没有具体地区实例，也谈不上多个地区的实例列举。",
            "为什么不选 E：E 段只说 “many scientists support sequestration”（许多科学家支持封存），是态度支持而不是实际案例。",
            "为什么不选 F：F 段明确写 “there are no power plants ready for full carbon capture”，恰恰说明尚未真正投入使用，是本题的反向干扰段。",
            "为什么不选 G：G 段讨论的是储存方式与风险（海洋储存、天然碳汇、泄漏担忧），不是已在运行的实例。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "An example of putting carbon dioxide emissions to use in the food and beverage industry",
          "translation": "把二氧化碳排放物用于食品饮料行业的一个例子。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "A government-supported program in the US has enabled some factories to partially capture carbon emissions, which they then sell for various uses, including carbonating soft drinks."
          },
          "synonyms": [
            "原文 “including carbonating soft drinks” 同义替换为题干 “the food and beverage industry”（给软饮料充碳酸气的软饮属于食品饮料行业）",
            "原文 “sell for various uses” 同义替换为题干 “putting carbon dioxide emissions to use”（把二氧化碳排放物加以利用）",
            "原文 “factories to partially capture carbon emissions” 同义替换为题干 “carbon dioxide emissions”（工厂捕获的碳排放）"
          ],
          "locatingTip": "定位：题干中的 food and beverage industry 是行业类别词，原文不会原样出现，要靠下义词转换——饮料行业最典型的具体产品就是 soft drinks。全文只有 F 段出现 “carbonating soft drinks”，因此直接锁定 F 段。确定答案技巧：段落信息匹配常考“类别词对具体词”（industry 对 drinks、beverage 对 soft drinks），扫读时要把精力放在这类可替换的名词上，而不是死找原词。",
          "analysis": "F 段在列举封存必须解决的几个问题（捕集成本、储存安全、需要经济激励）之后，介绍了一个美国案例：“A government-supported program in the US has enabled some factories to partially capture carbon emissions, which they then sell for various uses, including carbonating soft drinks.”（美国政府支持的一个项目使一些工厂能够部分捕集碳排放，然后把这些二氧化碳卖给各种用途，其中包括给软饮料充气。）题干 “An example of putting carbon dioxide emissions to use in the food and beverage industry” 正对应 “sell for various uses, including carbonating soft drinks”：put ... to use 对应 sell for various uses，food and beverage industry 对应 carbonating soft drinks，故选 F。",
          "traps": [
            "为什么不选 B：B 段提到石油公司用二氧化碳提高油井效率，属于采油用途，不是食品饮料行业。",
            "为什么不选 H：H 段两个实例分别用于驱油增产和天然气开采，也与食品饮料无关。",
            "为什么不选 E、G、I、J：E 段谈能源结构与化石燃料依赖，G 段谈储存方式与风险，I 段谈地下储存风险，J 段谈国际援助机制，均未涉及食品饮料用途。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Current examples of the environmental harm attributed to carbon dioxide in the air",
          "translation": "当前归因于空气中二氧化碳的环境危害实例。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "These increased levels of carbon-based compounds in the atmosphere are believed to be the cause of rising temperatures and sea levels around the world."
          },
          "synonyms": [
            "原文 “in the atmosphere” 同义替换为题干 “in the air”（大气中即空气中）",
            "原文 “rising temperatures and sea levels” 同义替换为题干 “environmental harm”（气温上升与海平面上升属于环境危害）",
            "原文 “are believed to be the cause of” 同义替换为题干 “attributed to”（被认为是……的原因，即归因于）"
          ],
          "locatingTip": "定位：题干包含“危害后果”和“归因”两个动作，要找一句“把某个坏结果归因于二氧化碳”的话。C 段末尾 “These increased levels of carbon-based compounds in the atmosphere are believed to be the cause of rising temperatures and sea levels around the world.” 正好完成这个归因，故选 C。确定答案技巧：题干有 current（当前）作限定，说明要找已经发生的危害，而不是预测；C 段这句用的是现在的因果关系，而同段 IPCC 那句是未来预测，需要区分。",
          "analysis": "C 段的推进顺序是：目标（稳定温室气体排放）；过去一个世纪二氧化碳浓度上升近三分之一；若排放不削减三分之二，IPCC 预测浓度会翻倍到 18 世纪初的两倍；随后给出归因句——“大气中这些增多的含碳化合物被认为是全球气温与海平面上升的原因”；最后强调“无视这个问题不是一个选项”。题干 “Current examples of the environmental harm attributed to carbon dioxide in the air” 与该归因句逐点吻合：in the air 对应 in the atmosphere，attributed to 对应 are believed to be the cause of，environmental harm 对应 rising temperatures and sea levels（现实中正在发生的升温与海平面上升），故选 C。",
          "traps": [
            "为什么不选 G：G 段也讲环境风险（二氧化碳可能彻底改变海洋化学平衡、危害海洋生物、可能逸回大气），但那些都是“可能的、潜在的”风险（potentially harmful consequences），并非题干所说的 current 已发生的危害实例。",
            "为什么不选 I：I 段讲地下储存可能带来的风险以及需要更多研究，同样是未来担忧。",
            "为什么不选 A、B、D、E、H、J：这些段落分别讲封存构想、合作研究、减排之难、能源结构、成本问题、实际项目和国际援助，都不涉及“已发生的环境危害”。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Both developing and developed nations have decided to investigate carbon dioxide sequestration.",
          "translation": "发展中国家和发达国家都已决定研究二氧化碳封存。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "At a recent conference, delegates from fourteen industrialised and developing countries agreed to engage in cooperative research into capturing and storing carbon dioxide."
          },
          "synonyms": [
            "原文 “industrialised and developing countries” 同义替换为题干 “Both developing and developed nations”（工业化国家即发达国家，与“发展中国家”并列，题干两者都包含）",
            "原文 “agreed to engage in cooperative research into” 同义替换为题干 “have decided to investigate”（同意开展合作研究即决定去研究）",
            "原文 “capturing and storing carbon dioxide” 同义替换为题干 “carbon dioxide sequestration”（碳捕集与封存就是 carbon sequestration）"
          ],
          "locatingTip": "定位：题干核心动作是“决定去研究”（decided to investigate），这类“同意、决定、计划”的语义在原文通常以 agreed to、plans、research 出现，全文只有 B 段末句出现十四国代表同意合作研究碳捕集与封存，因此定位到 B 段最后一句。确定答案技巧：注意题干主语是 Both developing and developed nations（两类国家都要有），原文 “delegates from fourteen industrialised and developing countries” 正好同时包含这两类国家，谓语 agreed to 与 decided to 同义，所以判 TRUE。",
          "analysis": "B 段先说碳封存这一概念已被石油公司用于提高油井效率，如今工程师已开始探索从电厂捕集二氧化碳排放以减少其对环境的影响；末句写到：在最近一次会议上，来自十四个工业化国家和发展中国家的代表同意就捕集与储存二氧化碳开展合作研究。题干 “Both developing and developed nations have decided to investigate carbon dioxide sequestration” 与该句语义等价：Both developing and developed nations 对应 industrialised and developing countries，have decided to investigate 对应 agreed to engage in cooperative research into，carbon dioxide sequestration 对应 capturing and storing carbon dioxide。信息完全一致，故答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文没有任何一方拒绝或反对研究的表述，双方是“同意合作研究”，与题干同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文对“哪些国家、做了什么决定”有明确的事实记载（fourteen industrialised and developing countries agreed to ...），题干的所有核心信息都能在原文直接找到，不属未提及，也不需要推断。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "A growing economy will use more power.",
          "translation": "经济增长会消耗更多电力（能源）。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Limiting emissions, however, is not an easy undertaking since increased energy consumption is a key to economic growth."
          },
          "synonyms": [
            "原文 “economic growth” 同义替换为题干 “A growing economy”（经济增长）",
            "原文 “increased energy consumption” 同义替换为题干 “use more power”（消耗更多能源、电力）",
            "原文 “is a key to” 建立两者的正相关关系，同义替换为题干主语与谓语之间的因果逻辑（经济要增长，能耗就必须增加）"
          ],
          "locatingTip": "定位：题干只有几个实词（growing economy、use more power），要用它们的同义表达扫读：economic growth、increased energy consumption、energy。D 段首句同时出现 economic growth 和 increased energy consumption，因此锁定 D 段开头。确定答案技巧：题干是中性的事实陈述，原文用 “increased energy consumption is a key to economic growth” 表达同一组概念的正相关关系，方向一致（经济增长与更多能源消耗相伴），故判 TRUE。",
          "analysis": "D 段首句说：限制排放并非易事，因为能源消耗的增加是经济增长的关键。随后原文用两组预测强化这一判断：据国际能源署，到 2030 年将投入使用的世界发电能力中有三分之二尚未建成；仅中国和印度就预计占未来十五年全球煤炭使用增量的三分之二。这都说明经济发展必然带来更多能源/电力需求。题干 “A growing economy will use more power” 与首句 “increased energy consumption is a key to economic growth” 表达同一因果关系（经济增长伴随更多能源使用），语意一致，故答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文没有相反表述；相反，全段都在强调经济发展与能源消耗同步增长，题干与原文方向一致，不构成矛盾。",
            "为什么不是 NOT GIVEN：题干的两个核心概念（经济增长、更多能耗）在 D 段首句都有直接对应的表达，属于原文明确给出的信息，不是未提及，也不需要额外推断。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Capturing carbon dioxide has become financially attractive.",
          "translation": "捕集二氧化碳在经济上已变得有吸引力。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Today, it costs about $US50 to extract and store a tonne of carbon dioxide from a power plant, which raises the cost of producing electricity by 30-80%."
          },
          "synonyms": [
            "原文 “raises the cost of producing electricity by 30-80%” 与题干 “financially attractive” 构成反义对立（成本大幅上升，而题干说经济上有吸引力）",
            "原文 “it is too expensive to adapt existing plants to capture carbon dioxide” 同义替换并强化题干 “financially attractive” 的反面（改造太贵，谈不上划算）",
            "原文 “Economic incentives are needed to encourage companies to identify low-cost carbon-sequestration solutions” 反义对应题干 “financially attractive”（需要政府激励才有人做，说明当前不具经济吸引力）"
          ],
          "locatingTip": "定位：题干关键词 financially、attractive 在原文不会原样出现，要转换成成本类表达：cost、expensive、incentives、low-cost。F 段集中讨论封存的成本问题（One is the cost of capturing carbon dioxide；it costs about $US50 ...；too expensive；Economic incentives are needed），因此定位到 F 段。确定答案技巧：判断题遇到 “become financially attractive / profitable” 这类“情况变好了”的描述，要回原文看成本的走向；原文的走向是发电成本上升 30–80%、改造太贵、需要经济激励，与题干方向相反，故判 FALSE。",
          "analysis": "F 段开篇说封存要真正发挥关键作用还有几个问题要解决，第一个就是捕集二氧化碳的成本（另一个是安全储存）。原文给出具体数字：目前从电厂提取并储存一吨二氧化碳约需 50 美元，这会使发电成本上升 30% 至 80%；Lackner 认为改造现有电厂来捕集二氧化碳太昂贵，建议把捕集能力直接建在未来的新电厂里；原文还强调 “Economic incentives are needed”（需要经济激励）才能推动企业去寻找低成本的封存方案，并指出目前还没有电厂具备完整碳捕集能力。所有信息都指向同一个结论：捕集二氧化碳在经济上并不划算、不具吸引力，题干却说 has become financially attractive，与原文直接矛盾，故答案为 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文的成本数据（每吨约 50 美元、发电成本上升 30–80%）以及 “too expensive”“Economic incentives are needed” 都与 “financially attractive”（经济上有吸引力）方向相反。",
            "为什么不是 NOT GIVEN：文章对捕集的财务成本给出了具体数字和明确判断（成本、电价涨幅、需要激励、尚无电厂具备完整捕集能力），信息充分存在；这不是“未提及”，而是与题干直接矛盾，属于典型的 FALSE。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "More forests need to be planted to improve the atmosphere.",
          "translation": "为了改善大气（状况），需要种植更多森林。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "Natural carbon sinks*, such as forests and wetlands, can remove some carbon dioxide from the atmosphere, but not nearly enough."
          },
          "synonyms": [
            "原文 “forests and wetlands” 提到了题干中的 “forests”，但只是作为天然碳汇（natural carbon sinks）的例子",
            "原文 “can remove some carbon dioxide from the atmosphere, but not nearly enough” 只说森林有吸收作用但远远不够，与题干 “improve the atmosphere” 的“多种树”主张之间没有原文依据",
            "原文全文没有出现与题干 “need to be planted / more” 相对应的建议、义务或数量表述"
          ],
          "locatingTip": "定位：题干关键词 forests 在全文只出现在 G 段（Natural carbon sinks, such as forests and wetlands ...），所以定位句就是这一句。确定答案技巧：定位到之后不能因为看到了 forests 就选 TRUE，必须逐字核对题干的动作和主张——题干说 “need to be planted”（需要种更多），而原文只是客观陈述森林等天然碳汇能吸收一部分二氧化碳但远远不够，既没有提到要种植更多森林，也没有任何“靠造林改善大气”的建议，因此判 NOT GIVEN。",
          "analysis": "G 段在讲“碳被捕获后必须储存”时提到：森林、湿地这类天然碳汇能从大气中吸收一部分二氧化碳，但远远不够（but not nearly enough）；随后文章话题转向海洋储存和地下储存，继续讨论封存的其他方式与风险。原文提供的信息只有“森林能吸收一部分、但远远不够”这一客观事实；题干 “More forests need to be planted to improve the atmosphere” 却是一个“应该种更多树”的建议性主张。原文从未表述或暗示该主张，因此既不能判断题干与原文一致（TRUE），也难以说它被原文否定（FALSE），只能判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说森林等天然碳汇“能吸收一部分但远远不够”，并没有说“需要种植更多森林”或“种树能改善大气”；题干把原文的“森林有作用”扩展成了“必须种更多”，属于原文没有的主张。",
            "为什么不是 FALSE：原文也没有否定种树的价值，更没有说“不需要种植森林”，不存在与题干的直接矛盾；判断题不能因为原文没提就判 FALSE。",
            "易错提醒：只因为原文出现 forests 一词就选 TRUE，是本题最常见的失分点。判断题必须核对题干的核心动词与主张（plant more forests）在原文是否有依据，此处没有。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
