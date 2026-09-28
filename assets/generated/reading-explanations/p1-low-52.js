(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-52", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-52",
  "meta": {
    "examId": "p1-low-52",
    "title": "Caral an ancient South American city 卡拉尔古城",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Caral was built at the same time as the construction of the Egyptian pyramids.",
          "translation": "卡拉尔（Caral）的建造与埃及金字塔的建造在同一时期进行。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Research undertaken by Peruvian archaeologist Ruth Shady suggests that the 150-acre complex of pyramids, plazas and residential buildings was a thriving metropolis when Egypt's great pyramids were still being built."
          },
          "synonyms": [
            "“the Egyptian pyramids” 原词复现为原文的 “Egypt's great pyramids”（埃及的大金字塔）",
            "“was built” 在原文对应的表述是 “was a thriving metropolis”（已是一座繁荣的大都市），原文强调的是“建成之后处于繁荣状态”，而非“正在建造”",
            "“at the same time as the construction of …” 与原文的 “when Egypt's great pyramids were still being built” 方向相反：原文说的是埃及金字塔“仍在建造时”卡拉尔“已经”繁荣，两件事在时间上是前后关系，题干却把它们说成同时开始"
          ],
          "locatingTip": "定位：题干的两个专有名词 Caral 与 Egyptian pyramids 都是极佳的定位词——Caral 在第 1 段已出现，Egypt's great pyramids 则只在第 2 段第 1 句出现，扫读时看到 Egypt 就可以停下来。确定答案技巧：本题考时间关系，判分点在原文明示的先后顺序。原文说卡拉尔在埃及大金字塔“仍在建造（were still being built）”时已经“是一座繁荣的大都市（was a thriving metropolis）”，“繁荣”是建成之后的状态；第 1 段又说它 “flourished nearly 5,000 years ago”，第 3 段用放射性碳定年证明建筑中的芦苇已有 4,600 年历史。两条证据都指向卡拉尔建成并兴盛在先，而题干把时间关系写成“两者同时建造”，属于时间上的矛盾，因此判 FALSE。做这类题要抓 when / while / before / after 等时间连接词，并留意动作是“正在建造（进行）”还是“已经建成（状态）”。",
          "analysis": "第 2 段首句：“Research undertaken by Peruvian archaeologist Ruth Shady suggests that the 150-acre complex of pyramids, plazas and residential buildings was a thriving metropolis when Egypt's great pyramids were still being built.”（秘鲁考古学家 Ruth Shady 的研究表明，这片占地 150 英亩、由金字塔、广场和住宅建筑组成的建筑群，在埃及的大金字塔仍在建造时就已经是一座繁荣的大都市）。这句话的时间框架非常清楚： Egyptians 的大金字塔处于“仍在建造（were still being built）”这一进行状态时，卡拉尔已经是一座“繁荣的大都市（was a thriving metropolis）”。也就是说，卡拉尔的建成与繁荣先于或至少早于埃及金字塔建造的阶段，二者并不是“同时开始建造”。题干却写成 “Caral was built at the same time as the construction of the Egyptian pyramids”，把两个不同性质的阶段（一方已建成并繁荣，一方尚在施工）硬说成同期建造。再结合全文另外两条时间线索——第 1 段 “a city known as Caral that flourished nearly 5,000 years ago”（近五千年前兴盛），第 3 段 “found that the reeds were 4,600 years old”（芦苇定年为 4600 年前）——原文给出的是一条卡拉尔更早的时间线，而题干的表述正好相反，所以答案是 FALSE。本题官方答案键即为 FALSE：考场上遇到“两者同时”这类表述，一定要核对原文到底是“同时存在”还是“同时建造”，本题原文只说了“卡拉尔已繁荣时金字塔仍在建”，并未支持“同时建造”。",
          "traps": [
            "为什么不是 TRUE：原文并没有说两道工程同时开工，只说卡拉尔在埃及大金字塔“still being built”（仍在建造）时已经“was a thriving metropolis”（已是繁荣的大都市），即卡拉尔早一步建成；加上第 1 段的 flourished nearly 5,000 years ago 与第 3 段 4,600 年前的芦苇证据，原文的时间线是卡拉尔在先。题干把“已建成并繁荣”改成“同时建造”，与原文不符，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对卡拉尔的年代（近五千年前兴盛、芦苇 4600 年）和埃及大金字塔的建造状态（仍在建造）都给了明确信息，而且由此构成了先后顺序，并非“没有提及”。有信息且与题干结论冲突时按规则判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The absence of pottery at the archaeological dig gave Shady a significant clue to the age of the site.",
          "translation": "考古发掘现场没有陶器这一情况，为 Shady 判断遗址年代提供了重要线索。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Not finding any only made her more excited; it meant Caral could be what archaeologists term pre-ceramic, that is, existing before the advent in the area of pot-firing techniques."
          },
          "synonyms": [
            "“The absence of pottery” 同义替换为原文的 “Not finding any”，其中 any 回指前一句的 “broken remains of the pots and containers”（罐子和容器的残片）",
            "“gave Shady a significant clue” 同义替换为原文的 “only made her more excited; it meant Caral could be …”，即让她兴奋并由此推断出结论",
            "“the age of the site” 同义替换为原文的 “pre-ceramic, that is, existing before the advent in the area of pot-firing techniques”，即把遗址年代界定在烧陶技术传入之前"
          ],
          "locatingTip": "定位：用 pottery / pots 与 Shady 这两个词锁段——第 3 段开头 “Shady and her crew searched for broken remains of the pots and containers that most such sites contain.”。确定答案技巧：抓住句间的因果与指代——前一句说要找陶器残片，紧接的下一句说“没找到（Not finding any）”反而让她更兴奋，“因为它意味着（it meant）卡拉尔可能是考古学上所说的前陶时代（pre-ceramic）”。pre-ceramic 本身就界定了遗址的年代（烧陶技术出现之前），正是题干所说的 “clue to the age of the site”；而没找到陶器就是 absence of pottery。两处改写方向一致、无任何矛盾，故选 TRUE。注意本题的 “significant” 对应原文 made her more excited 与 it meant 所传达的重要性，属于合理概括，不要因为原文没有出现 significant 一词就误判 NOT GIVEN。",
          "analysis": "第 3 段前两句：“Shady and her crew searched for broken remains of the pots and containers that most such sites contain. Not finding any only made her more excited; it meant Caral could be what archaeologists term pre-ceramic, that is, existing before the advent in the area of pot-firing techniques.”（Shady 和她的队员寻找这类遗址通常都会有的罐子和容器残片。没找到任何陶器残片反而让她更加兴奋，因为这意味着卡拉尔可能属于考古学上所说的“前陶时代”，也就是在该地区出现烧陶技术之前就已存在）。题干中的 The absence of pottery 对应 Not finding any（没找到陶器残片），gave Shady a significant clue 对应 only made her more excited; it meant …，the age of the site 对应 pre-ceramic（前陶时代）这一年代界定。原文的逻辑是“没有陶器”这一负面证据反而成为判断年代的关键正面线索：既然没有陶器，说明遗址早于烧陶技术传入的时期，年代因此被推得更早。题干把这条逻辑完整复述，信息完全一致，所以答案是 TRUE。提醒：题干用 absence 抽象概括原文的 Not finding any，又用 clue 概括 it meant … 的推断过程，这是判断题常见的改写手法，只要逻辑方向不变就应判 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确说 “Not finding any only made her more excited; it meant Caral could be … pre-ceramic”，即没有陶器正是推断年代的关键正面线索，与题干 “gave Shady a significant clue to the age of the site” 完全同向，没有任何反驳信息，因此不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不但提到了“找不到陶器残片”这一事实，还紧接着交代了它对断代的作用（it meant Caral could be … pre-ceramic），题干所问的“是否给了重要线索”在原文中有直接答案，不属于未提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The stones used to build Piramide Mayor came from a location far away.",
          "translation": "用于建造皮拉米德·马约尔（Piramide Mayor）的石料来自很远的地方。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The original workers, she surmised, must have filled these bags with stones from a nearby quarry and laid them atop one another inside retaining walls, gradually giving rise to the pyramid's immense structure."
          },
          "synonyms": [
            "“came from” 同义替换为原文的 “must have filled these bags with stones from …”，即“石料来自某处”",
            "“a location far away” 与原文的 “a nearby quarry”（附近的采石场）直接冲突：nearby 表示“就在近处”，far away 表示“很远”，语义相反",
            "“The stones used to build Piramide Mayor” 对应原文 “stones from a nearby quarry”，而本段前文已点明正在发掘的正是 “Piramide Mayor, the largest of the pyramids”"
          ],
          "locatingTip": "定位：专有名词 Piramide Mayor 在第 3 段第 3 句 “Shady's team undertook the task of excavating Piramide Mayor, the largest of the pyramids.” 出现，紧接着第 5、6 句就在讲石料与填料的做法，全篇提到 stones 来源只有这一处。确定答案技巧：本题的判分点是表示距离的程度词。原文写 “stones from a nearby quarry”，nearby（附近的）与题干 a location far away（很远的地方）语义相反，属于与原文矛盾，判 FALSE。这类题切忌用常识替代原文——古代大工程常被想成“石料远距离运输”，但只要原文写了 nearby，判断就只能以 nearby 为准。",
          "analysis": "第 3 段第 5、6 句：“In the foundations, they found the remains of grass-like reeds woven into bags. The original workers, she surmised, must have filled these bags with stones from a nearby quarry and laid them atop one another inside retaining walls, gradually giving rise to the pyramid's immense structure.”（在地基中，他们发现了编织成袋的、类似草的芦苇残迹。她推测，当年的工人一定是把这些袋子装满来自附近采石场的石头，再在挡土墙内一层层叠起来，逐渐堆成这座金字塔庞大的结构）。题干问石料的来源地，原文给出的答案是 a nearby quarry（附近的采石场）——注意 nearby 这一形容词明确限定了距离近；题干却写成 “came from a location far away”（来自很远的地方），把“附近”换成“很远”，两个词在语义上完全对立。因此该陈述与原文信息相矛盾，答案是 FALSE。这类以地点距离为考点的判断题，正确率的关键在于逐字比对形容词：nearby / local / on-site 与 far away / distant 是典型的一组对立词，看到就应立即警觉。",
          "traps": [
            "为什么不是 TRUE：原文用 “a nearby quarry” 明确说明石料来自附近的采石场，与题干 “a location far away” 的“很远”正相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对石料来源交代得非常明确（nearby quarry），既有信息又与题干冲突，属于已有信息被否定，而不是信息缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The huge and complicated structures of Piramide Mayor suggest that its construction required an organised team of builders.",
          "translation": "皮拉米德·马约尔（Piramide Mayor）庞大而复杂的建筑结构表明，其建造需要一支有组织的施工队伍。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Thousands of manual laborers would have been needed to build such a project, not counting the many architects, craftsmen, and managers."
          },
          "synonyms": [
            "“required” 同义替换为原文的 “would have been needed”（一定需要）",
            "“an organised team of builders” 同义替换为原文的 “Thousands of manual laborers … not counting the many architects, craftsmen, and managers”，即包含体力工人、建筑师、工匠和管理者等分工明确的有组织团队",
            "“The huge and complicated structures of Piramide Mayor” 同义替换为原文的 “not just the age, but the complexity and scope of Caral” 以及 “Piramide Mayor alone covers an area nearly the size of four football fields and is 18 meters tall”（庞大对应 nearly the size of four football fields，复杂对应 complexity）"
          ],
          "locatingTip": "定位：本题与第 5、6 题同在第 4 段。题干关键词 Piramide Mayor 与 construction（原文用 build）落在第 4 段第 4 句 “Thousands of manual laborers would have been needed to build such a project, not counting the many architects, craftsmen, and managers.”。确定答案技巧：题干是“规模复杂，说明需要组织化团队”的推断型表述。原文先用 complexity and scope、four football fields、18 meters tall、three terraced levels 铺垫“庞大复杂”，随后用 would have been needed（肯定需要）作出与题干相同的推断；再把 not counting 之后的 architects、craftsmen、managers 与 thousands of manual laborers 合起来看，就能读出“分工协作的有组织团队”，而不只是人数众多。信息方向完全一致，故判 TRUE。",
          "analysis": "第 4 段先总起：“What amazed archaeologists was not just the age, but the complexity and scope of Caral.”（让考古学家惊叹的不只是年代，还有卡拉尔的复杂程度与规模），接着用 “Piramide Mayor alone covers an area nearly the size of four football fields and is 18 meters tall.”（仅皮拉米德·马约尔就占地近四个足球场、高 18 米）、九米宽的阶梯越过三层台地直通顶端等细节把“庞大复杂”落实，最后给出本题定位句：“Thousands of manual laborers would have been needed to build such a project, not counting the many architects, craftsmen, and managers.”（建造这样一个工程需要数千名体力劳动者，这还不算众多建筑师、工匠和管理者）。题干把这一句浓缩为“庞大而复杂的结构说明建造需要一支有组织的施工队伍”：huge and complicated 对应 complexity and scope 与 football fields、18 meters 这些规模数据；required 对应 would have been needed；an organised team of builders 对应由 manual laborers、architects、craftsmen、managers 组成的分工团队。原文以“这样一批人一定需要（would have been needed）”表达推断，与题干的 suggest 语气吻合，信息完全同向，因此答案是 TRUE。注意 would have been needed 是对过去的合理推断，不等于“不确定”，不要因为语气而误判 NOT GIVEN。",
          "traps": [
            "为什么不是 FALSE：原文既给出了规模的量化描写，也明确列出所需人员（体力劳动者、建筑师、工匠、管理者），与题干所说的“需要一支有组织的建造团队”完全同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文对“需要什么样的人、需要多少人”有非常具体的交代（thousands of manual laborers、many architects, craftsmen, and managers），并把这一需求直接与工程规模挂钩，因此不是未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Archaeological evidence shows that the residents of Caral were highly skilled musicians.",
          "translation": "考古证据表明，卡拉尔的居民是技艺高超的音乐家。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Shady's team found the remains of a large amphitheater, containing almost 70 musical instruments made of bird and deer bones. Clearly, music played an important role in Caral's society."
          },
          "synonyms": [
            "“Archaeological evidence” 同义替换为原文的 “Shady's team found the remains of a large amphitheater, containing almost 70 musical instruments made of bird and deer bones”，即发掘出土的实物证据",
            "“the residents of Caral” 对应原文的 “Caral's society”（卡拉尔的社会）",
            "“were highly skilled musicians” 在原文中找不到任何对应：原文只交代了乐器的数量与材质、并说音乐在社会中很重要，从未评价居民演奏水平的高低"
          ],
          "locatingTip": "定位：题干关键词 musical instruments / music 是很好用的实词定位词，第 4 段中部 “containing almost 70 musical instruments made of bird and deer bones” 与下一句 “Clearly, music played an important role in Caral's society.” 即为考点所在。确定答案技巧：判断题里的评价性形容词（highly skilled、excellent、talented、popular）是 NOT GIVEN 的高发区。回原文逐字核对会发现，原文只给出两条事实——发现近 70 件用鸟骨和鹿骨制成的乐器、音乐在卡拉尔社会中很重要——既没说居民演奏得好，也没说他们不擅长，属于信息缺失，因此判 NOT GIVEN。切忌由“乐器多、音乐重要”自行脑补出“居民演奏水平高”。",
          "analysis": "第 4 段中部的两句话是本题的全部相关信息：“Shady's team found the remains of a large amphitheater, containing almost 70 musical instruments made of bird and deer bones. Clearly, music played an important role in Caral's society.”（Shady 的团队发现了一座大型圆形剧场的遗迹，里面有近 70 件用鸟骨和鹿骨制成的乐器。显然，音乐在卡拉尔的社会中扮演了重要角色）。原文可以确认的两点是：乐器数量多、材质为动物骨；音乐在社会生活中地位重要。但题干要判断的是 “the residents of Caral were highly skilled musicians”（居民是技艺高超的音乐家），这是一个关于人的演奏能力的评价，原文从头到尾没有出现任何与演奏水平、音乐才能有关的词。既然原文既没有支持也没有否认这一评价，按判断题三选一的规则，“有信息但未提及该点”即为 NOT GIVEN。做题提示：把题干拆成两层——“有乐器与音乐活动”（原文有）与“演奏者水平高超”（原文无）——多出来的那一层评价就是本题判 NOT GIVEN 的依据。",
          "traps": [
            "为什么不是 TRUE：原文只证明存在大量乐器且音乐地位重要，没有出现 skilled、talented、accomplished 之类关于演奏水平的评价；由“乐器多、音乐重要”推出“居民技艺高超”属于超出原文的推理，不能选 TRUE。",
            "为什么不是 FALSE：要判 FALSE，原文必须说居民“演奏水平不高”或“并非音乐家”，而原文对此毫无交代，只是没有提及这一层信息，因此也不能选 FALSE。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The remains of housing areas at Caral suggest that there were no class distinctions in residential areas.",
          "translation": "卡拉尔居住区的遗迹表明，住宅区不存在阶级差别。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "These indicate a hierarchy of living arrangements: large, well-kept rooms atop pyramids for the elite, ground-level quarters for craftsmen, and shabbier outlying dwellings for workers."
          },
          "synonyms": [
            "“The remains of housing areas” 同义替换为原文上一句的 “a series of smaller mounds and various buildings”，并由代词 These 回指",
            "“suggest” 同义替换为原文的 “indicate”",
            "“there were no class distinctions” 与原文的 “a hierarchy of living arrangements” 直接冲突：hierarchy（等级体系）恰恰说明居住安排存在明显的身份分层，且原文按 elite、craftsmen、workers 三类人分配了规格不同的住所"
          ],
          "locatingTip": "定位：题干关键词 housing / residential 对应第 4 段倒数第二句 “Around the perimeter of Caral are a series of smaller mounds and various buildings.”，紧接的末句 “These indicate a hierarchy of living arrangements: …” 就是判分句。确定答案技巧：本题的落点是“有没有阶级差别”。原文用 hierarchy（等级、层级）一词直接给出结论，随后按 elite（精英）、craftsmen（工匠）、workers（工人）三种身份分别对应“金字塔顶宽敞整洁的房间”“地面层的工匠住所”“外围更简陋的住处”，规格由高到低排列，等级差异一目了然。题干却断言 no class distinctions（没有阶级区分），与原文正相反，故判 FALSE。识别信号：原文出现 hierarchy、rank、class、elite 这类词时，判断方向必然是“有区分”。",
          "analysis": "第 4 段最后两句：“Around the perimeter of Caral are a series of smaller mounds and various buildings. These indicate a hierarchy of living arrangements: large, well-kept rooms atop pyramids for the elite, ground-level quarters for craftsmen, and shabbier outlying dwellings for workers.”（卡拉尔的外围分布着一系列较小的土丘和各种建筑。这些表明居住安排存在等级体系：金字塔顶宽敞、维护良好的房间给精英阶层，地面层的住所给工匠，而外围更简陋的住处给普通劳动者）。原文的逻辑是“各式建筑与土丘表明居住安排是分等级的（hierarchy）”，并进一步用三组人与三种住处一一对应，把等级落实为具体差异：位置（金字塔顶、地面、外围）、规格（宽敞整洁、普通、更简陋）全都不同。题干却说 “there were no class distinctions in residential areas”（住宅区不存在阶级差别），正好否定了原文的核心信息——hierarchy 与“no distinctions”互为反义。所以该陈述与原文矛盾，答案是 FALSE。做题提示：题目常把原文的总括词（如 hierarchy）当作判分核心，只要把这个词的含义抓准，再核对后面的例证是否支持，就能迅速定案。",
          "traps": [
            "为什么不是 TRUE：原文用 “a hierarchy of living arrangements” 明确说明居住安排分等级，并按精英、工匠、劳动者给出三种规格不同的住所，题干“没有阶级差别”与原文直接对立，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对居住差异的描写非常具体（房间的位置、大小与维护状况、居住者的身份），属于已经交代且与题干冲突的信息，不是没有提及，因此不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "the 7 ________ of a certain plant",
          "translation": "某种植物的 7 ________",
          "answer": "seeds",
          "wordClass": "名词（复数形式；作 the … of a certain plant 这一名词短语的中心词，原文以复数 seeds 出现，填 seeds，不加冠词、不改单数）",
          "locating": {
            "paragraph": "5",
            "quote": "Shady found evidence of a rich trading environment, including seeds of the cocoa bush and necklaces of shells, neither of which was native to the immediate Caral area."
          },
          "synonyms": [
            "“a certain plant” 同义替换为原文的 “the cocoa bush”（可可灌木）",
            "小标题 “Items discovered at Caral but not naturally occurring in the area” 同义替换为原文的 “neither of which was native to the immediate Caral area”（两者都不是卡拉尔周边本地出产）",
            "“the … of a certain plant” 的结构对应原文 “seeds of the cocoa bush”，空格要填的是该短语的中心词 seeds"
          ],
          "locatingTip": "定位：先用小标题的语义找段——题干要求“在卡拉尔发现但不产于当地的东西”，第 5 段 “Shady found evidence of a rich trading environment …” 句末正是 “neither of which was native to the immediate Caral area”，语义完全对应，锁定第 5 段。确定答案技巧：题干 “the 7 ___ of a certain plant” 是“the 加名词 加 of 加植物”的结构，原文中唯一符合 “of a certain plant（某种植物）”的只有 seeds of the cocoa bush（可可灌木的种子），因此空格填 seeds。注意 ONE WORD ONLY：不要写 cocoa（可可本身与“of a certain plant”的结构不符，且题干已用 a certain plant 指代植物），也不要写 seeds of cocoa 这样的多词答案。",
          "analysis": "第 5 段第 3 句：“Shady found evidence of a rich trading environment, including seeds of the cocoa bush and necklaces of shells, neither of which was native to the immediate Caral area.”（Shady 找到了繁荣贸易环境的证据，其中包括可可灌木的种子和贝壳项链，这两样都不是卡拉尔附近本地出产的）。笔记小标题 “Items discovered at Caral but not naturally occurring in the area”（在卡拉尔发现但并非当地自然出产的东西）正对应句末的 neither of which was native to the immediate Caral area；本行 “the 7 ___ of a certain plant” 则对应句中的 seeds of the cocoa bush：a certain plant 是命题者对 the cocoa bush 的概括，空格要的是植物身上被发现的“东西”，即 seeds。从词性看，空格前有定冠词 the、后面紧跟 of a certain plant 作后置定语，需要一个名词中心词，原文的 seeds 正合此结构，且必须保持复数形式。答案只写 seeds 一个词，符合 ONE WORD ONLY 的要求。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "8 ________ used to make jewellery",
          "translation": "用于制作首饰的 8 ________",
          "answer": "shells",
          "wordClass": "名词（复数形式；作 used to make jewellery 所修饰的中心词，原文以复数 shells 出现于 necklaces of shells，填 shells，不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "including seeds of the cocoa bush and necklaces of shells, neither of which was native to the immediate Caral area."
          },
          "synonyms": [
            "“used to make jewellery” 同义替换为原文的 “necklaces”（项链）：贝壳被做成项链，即“用于制作首饰”",
            "“8 ________” 对应原文 “necklaces of shells” 中的 shells，即制作项链所用的材料",
            "小标题 “Items discovered at Caral but not naturally occurring in the area” 对应原文的 “neither of which was native to the immediate Caral area”"
          ],
          "locatingTip": "定位：与第 7 题同句，仍落在第 5 段 “Shady found evidence of a rich trading environment, including seeds of the cocoa bush and necklaces of shells …”。题干关键词 jewellery 在原文没有原词，需要用“首饰”这一语义去对应原文的 necklaces（项链）。确定答案技巧：句中并列两样来自外地的物品——seeds of the cocoa bush 与 necklaces of shells；第 7 题已经用掉前一项（某植物的种子），因此本行 “used to make jewellery” 只能对应后一项 necklaces of shells。题干把“贝壳做的项链”改写成“用来做首饰的东西”，空格前的 used to make jewellery 说明空格是被使用的材料，所以填 shells 而不是 necklaces（项链是成品，不是“用来做首饰”的东西）。",
          "analysis": "定位句仍是第 5 段第 3 句：“Shady found evidence of a rich trading environment, including seeds of the cocoa bush and necklaces of shells, neither of which was native to the immediate Caral area.”（包括可可灌木的种子和贝壳项链，这两样都不是卡拉尔附近本地出产的）。笔记第一类“在卡拉尔发现但并非当地出产的东西”下有三条：第 7 条是“某种植物的 ___”，对应 seeds of the cocoa bush；本条是“___ 用于制作首饰”，对应 necklaces of shells——项链正是首饰，贝壳就是做项链的材料，因此空格填 shells。判定词性时注意：空格后的 used to make jewellery 是过去分词短语作后置定语（被用来制作首饰的某物），说明空格是一个复数名词材料名，与原文的 shells 完全一致（ONE WORD ONLY，保持复数，不加冠词）。易错点是把 material 写成 necklaces：把答案填回题干读一遍 “necklaces used to make jewellery” 就会读成“用来做首饰的项链”，逻辑不通，可见必须填被使用的材料 shells。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "the remains of certain food such as 9 ________",
          "translation": "某些食物的遗存，例如 9 ________",
          "answer": "fish",
          "wordClass": "名词（单复数同形，此处与原文词形一致，用 fish，指作为食物的鱼；作 such as 后列举的名词，不加冠词、不加复数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "Shady and her team found the bones of small edible fish, which must have come from the Pacific coast to the west, in the excavations."
          },
          "synonyms": [
            "“the remains of certain food” 同义替换为原文的 “the bones of small edible fish”，bones 对应 remains，edible 对应 food",
            "“such as” 与原文的例举关系一致：鱼（fish）就是那类食物中的一个例子",
            "“not naturally occurring in the area” 由原文的 “which must have come from the Pacific coast to the west” 支撑：鱼来自西边的太平洋沿岸，而非卡拉尔本地"
          ],
          "locatingTip": "定位：题干关键词 food 与 remains，回第 6 段找“吃的东西的遗存”，即 “Shady and her team found the bones of small edible fish … in the excavations”。确定答案技巧：原文说在发掘中找到 small edible fish（可食用的小鱼）的骨头，并特别指出这些鱼“一定来自西边的太平洋沿岸（must have come from the Pacific coast to the west）”，正好符合小标题“在卡拉尔发现但非当地出产”的条件；题干用 “the remains of certain food such as ___” 概括，空格便是被食用的食物名 fish。同段后文还提到 squash、sweet potatoes 与 beans，但那三样原文明确说是 “having been grown locally”（当地种植），与“非当地出产”矛盾，不能填。注意 ONE WORD ONLY 与词形：只写 fish，不要写 fish bones，也不要因语境是复数而改写成 fishes。",
          "analysis": "第 6 段开头三句：“But what sustained such a trading center and drew travelers to it? Was it food? Shady and her team found the bones of small edible fish, which must have come from the Pacific coast to the west, in the excavations.”（但什么支撑了这样一个贸易中心、并把旅人吸引过来？是食物吗？Shady 和她的团队在发掘中找到了小型食用鱼的骨头，这些鱼一定来自西边的太平洋沿岸）。笔记本行 “the remains of certain food such as 9 ___” 与这句一一对应：remains 对应 bones（遗骨），certain food 对应 edible（可食用的），such as 后要填的就是这种食物的名称 fish；而它“非当地出产”的属性由 must have come from the Pacific coast to the west 提供。填 fish 而不是同段出现的 squash、sweet potatoes、beans，原因很清楚：原文说那三种是 “having been grown locally”（当地种植），属于“本地产出”，不符合本类小标题的筛选条件。从词性看，fish 是可数名词但单复数同形，此处按原文保持 fish 原形即可，且 ONE WORD ONLY 只能写一个词。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "10 ________ still in existence today indicate water diverted from rivers",
          "translation": "至今仍存在的 10 ________ 说明河水曾被改道",
          "answer": "canals",
          "wordClass": "名词（复数形式；在句中作主语，与复数谓语 indicate 保持数的一致，故填 canals，不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "Shady theorized that Caral's early farmers diverted the area's rivers into canals, which still cross the Supe Valley today, to irrigate their fields."
          },
          "synonyms": [
            "“still in existence today” 同义替换为原文的 “which still cross the Supe Valley today”（今天仍横穿苏佩河谷）",
            "“water diverted from rivers” 同义替换为原文的 “diverted the area's rivers into canals”（把当地的河水改道引入某物）",
            "“10 ________” 对应原文的 canals：它既是水被引入的对象，也是至今犹存的实体"
          ],
          "locatingTip": "定位：题干关键词 diverted from rivers 与 today 都是好定位词，第 6 段中段 “Shady theorized that Caral's early farmers diverted the area's rivers into canals, which still cross the Supe Valley today, to irrigate their fields.” 一句同时包含这两条信息。确定答案技巧：原文的句法线索是 diverted the area's rivers into canals（把河水改道引入运河），后面用 which 引导的定语从句补充“它们至今仍横穿苏佩河谷”，which 的先行词就是 canals。题干把它改写成“至今仍存在的 ___ 说明河水被改道”，空格正是那个至今犹存、承载改道之水的实体，即 canals。注意两个形式要求：ONE WORD ONLY，且必须写复数 canals——题干谓语 indicate 是复数形式，写单数 canal 会因主谓不一致而失分。",
          "analysis": "第 6 段第 4 句：“Shady theorized that Caral's early farmers diverted the area's rivers into canals, which still cross the Supe Valley today, to irrigate their fields.”（Shady 推测，卡拉尔早期的农民把当地的河流改道引入运河，用以灌溉田地，这些运河至今仍横穿苏佩河谷）。题干 “10 ___ still in existence today indicate water diverted from rivers” 与原文的对应关系为：still in existence today 对应 which still cross the Supe Valley today；water diverted from rivers 对应 diverted the area's rivers into …；而空格就是被改道之水所流入、并且今天依然存在的东西——canals（运河）。语法上，空格后紧跟复数谓语 indicate，说明主语必须是复数，原文的 canals 正合要求（ONE WORD ONLY，复数形式，不加冠词）。易错点是误填 quarries、fields 之类的其他名词：fields 是灌溉的对象，原文说的是水流“into canals”，只有 canals 兼具“接受改道之水”和“至今仍存在”两个特征。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "no evidence that 11 ________ was grown",
          "translation": "没有证据表明曾种植过 11 ________",
          "answer": "maize",
          "wordClass": "名词（不可数名词，农作物名；在从句中作主语，与单数谓语 was grown 一致，保持不可数形式 maize，不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "But because she found no traces of maize, which can be traded or stored and used in times of crop failure, she concluded that Caral's trade leverage was not based on stockpiling food supplies."
          },
          "synonyms": [
            "“no evidence that … was grown” 同义替换为原文的 “she found no traces of maize”，no traces 对应 no evidence，was grown 对应“种植”这层含义",
            "“maize” 在原文原词复现",
            "原文同段前句的 “evidence of squash, sweet potatoes and beans having been grown locally” 与本题形成对照：那三种是当地种过的，而 maize 恰恰没有发现"
          ],
          "locatingTip": "定位：题干关键词 no evidence 与 was grown，第 6 段最后一句 “But because she found no traces of maize … she concluded that …” 正是“没有发现玉米的痕迹”，与“没有证据表明种过”语义直接对应。确定答案技巧：先分清原文的证据方向——前一句说找到了 squash、sweet potatoes、beans “having been grown locally”（当地种植）的证据，本句转而说“没有找到玉米的痕迹（no traces of maize）”。题干说的是“no evidence（没有证据）”，与之匹配的只有 maize，所以空格填 maize。反面答案很有诱惑力：不要填 squash、sweet potatoes 或 beans（那三种是原文明确说“种过”的），也不要因 maize 不可数而改写词形，保留原文原形即可。",
          "analysis": "第 6 段最后三句：“But they also found evidence of squash, sweet potatoes and beans having been grown locally. Shady theorized that Caral's early farmers diverted the area's rivers into canals … But because she found no traces of maize, which can be traded or stored and used in times of crop failure, she concluded that Caral's trade leverage was not based on stockpiling food supplies.”（但他们也找到了南瓜、红薯和豆类在当地种植的证据。Shady 推测……但由于没有发现玉米的痕迹——玉米可以交易、储存并在歉收时使用——她得出结论：卡拉尔的贸易优势并非建立在囤积粮食之上）。笔记 “Clues to farming around Caral” 一类中，“no evidence that 11 ___ was grown” 正是对 “she found no traces of maize” 的改写：no traces 即 no evidence，was grown 即“种植”这一动作，空格要填的就是没有种过的作物 maize。判定时注意两点：一是原文明确说过 squash、sweet potatoes、beans 是当地种植的，不能填；二是 maize 在此为不可数名词，题干从句谓语是单数 was grown，写原形 maize 即可（ONE WORD ONLY）。本题也顺带说明了为什么“没有玉米”这一负面证据会影响结论——玉米可储存、可交易，若有玉米，卡拉尔更可能靠囤粮而非靠棉花贸易。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "the excavation findings and fishing nets found on the coast suggest Caral farmers traded 12 ________",
          "translation": "发掘所得与海岸上发现的渔网表明，卡拉尔的农民交易 12 ________",
          "answer": "cotton",
          "wordClass": "名词（不可数名词，作物与纤维名；作 traded 的宾语，保持不可数形式 cotton，不加冠词、不变复数）",
          "locating": {
            "paragraph": "7",
            "quote": "In nearly every excavated building, her team discovered evidence of cotton—seeds, fibers and textiles."
          },
          "synonyms": [
            "“the excavation findings” 同义替换为原文的 “In nearly every excavated building, her team discovered evidence of …”",
            "“fishing nets found on the coast” 同义替换为原文的 “a large fishing net made of those fibers, unearthed in an unrelated dig on Peru's coast”",
            "“Caral farmers traded cotton” 同义替换为原文的 “The farmers of Caral grew the cotton that the fishermen needed to make their nets. And the fishermen gave them shellfish and dried fish in exchange for these nets.”，即农民拿棉花（制成的渔网）与渔民换鱼贝"
          ],
          "locatingTip": "定位：题干关键词 fishing nets found on the coast 是强定位词，对应第 7 段 “Her theory fell into place when a large fishing net made of those fibers, unearthed in an unrelated dig on Peru's coast, turned out to be as old as Caral.”；紧挨着的上一句就是 “her team discovered evidence of cotton—seeds, fibers and textiles”。确定答案技巧：把两条证据连起来读——发掘中几乎每座建筑都有棉花的证据（种子、纤维、织物），而海岸上出土的古代渔网正是用这些纤维做的，于是 Shady 的推断成形：卡拉尔的农民种棉花、做成渔网，再与渔民交换鱼贝。题干把“挖出的东西 加 海岸上的渔网 加 揭示农民交易了什么”串成一条线索，空格要填农民兜售出去的商品，即原文 “The farmers of Caral grew the cotton that the fishermen needed to make their nets” 中的 cotton。注意方向：不要填 fish 或 shellfish，那是渔民换给农民的、农民换回来的东西，与空格要求的方向相反。",
          "analysis": "第 7 段前三句：“It was evidence of another crop in the excavations that gave Shady the best clue to Caral's success. In nearly every excavated building, her team discovered evidence of cotton—seeds, fibers and textiles. Her theory fell into place when a large fishing net made of those fibers, unearthed in an unrelated dig on Peru's coast, turned out to be as old as Caral.”（正是发掘中另一种作物的证据给了 Shady 破解卡拉尔成功之谜的最佳线索。在几乎每一座被发掘的建筑里，她的团队都发现了棉花的证据——种子、纤维和织物。当一张用那些纤维制成的大渔网在秘鲁海岸一处无关的发掘地点出土，并被证明与卡拉尔同龄时，她的理论终于成形）。笔记 “Evidence of relationship with fishing communities” 一类的第一条 “the excavation findings and fishing nets found on the coast suggest Caral farmers traded 12 ___” 正是对上述两条证据的概括：the excavation findings 对应 excavated building 里的棉花证据，fishing nets found on the coast 对应 Peru's coast 出土的渔网，而农民交易出去的东西就是 cotton——原文紧接着的引语说 “The farmers of Caral grew the cotton that the fishermen needed to make their nets … the fishermen gave them shellfish and dried fish in exchange for these nets.”（卡拉尔的农民种植渔民做网所需的棉花……渔民则拿贝类和干鱼来换这些网），交换的标的就是棉花（制成的网）。因此答案是 cotton，不可数名词，保持原形（ONE WORD ONLY）。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "dried squash may have been used to aid 13 ________ of fishing nets",
          "translation": "干南瓜可能被用来帮助渔网的 13 ________",
          "answer": "flotation",
          "wordClass": "名词（不可数，指“浮力”；作动词 aid 的宾语，与其后的 of fishing nets 共同构成名词短语，故只填 flotation 一词，不加冠词、不变复数）",
          "locating": {
            "paragraph": "7",
            "quote": "and the fishermen probably used dried squash grown by the Caral people as flotation devices for their nets."
          },
          "synonyms": [
            "“may have been used to aid” 同义替换为原文的 “probably used … as”（推测性地把某物用作某种用途）",
            "“of fishing nets” 同义替换为原文的 “for their nets”，their 回指 fishermen 的渔网",
            "“dried squash” 在原文原词复现；“13 ________” 对应原文 flotation devices 中的 flotation，即被用作渔网辅助浮力的那项功能"
          ],
          "locatingTip": "定位：题干关键词 dried squash 极为独特，全文只出现在第 7 段末句 “and the fishermen probably used dried squash grown by the Caral people as flotation devices for their nets.”，一步即可锁定。确定答案技巧：原文的句法框架是 used 加某物 加 as 加 flotation devices for their nets，题干改写为 used to aid ___ of fishing nets，其中 aid 对应 as（起某种辅助作用），of fishing nets 对应 for their nets，因此空格要填的是 devices 前面的功能限定词 flotation（浮力）。注意 ONE WORD ONLY：只写 flotation，不要写成 flotation devices 两个词；也不要把 devices 填进去，因为 “aid devices of fishing nets” 与原文结构不符。填好后通读一遍：“dried squash may have been used to aid flotation of fishing nets”，与原文 “as flotation devices for their nets” 意思吻合，答案成立。",
          "analysis": "第 7 段末句：“In essence, the people of Caral enabled fishermen to work with larger and more effective nets, which made the resources of the sea more readily available, and the fishermen probably used dried squash grown by the Caral people as flotation devices for their nets.”（本质上，卡拉尔人让渔民能够使用更大、更有效的渔网，从而让海洋资源更容易获取；而渔民很可能把卡拉尔人种植的干南瓜用作渔网的浮力装置）。笔记本行 “dried squash may have been used to aid 13 ___ of fishing nets” 与后半句精确对应：dried squash 原词复现，may have been used to aid 对应 probably used … as（把某物当作某种用途），of fishing nets 对应 for their nets，空格的答案就是原文 flotation（浮力）——它在此作名词修饰语，与 devices 一起构成 “浮力装置”。词性上，flotation 为不可数名词，题干中 aid 后直接接它作宾语、再接 of fishing nets，结构和原文 “as flotation devices for their nets” 一致，故填 flotation 一个词即可（ONE WORD ONLY，不加冠词、不变复数）。易错点是把 devices 当答案：题干已经用 “of fishing nets” 交代了装置的对象，空格前的 aid 需要的是“起什么作用”，即浮力这一功能。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
