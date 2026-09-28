(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-45", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-45",
  "meta": {
    "examId": "p1-low-45",
    "title": "Sleep Study on Modern-Day Hunter-Gatherers Dispels Popular Notions 部落睡眠研究",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Scientists studied hunter-gatherer societies because their sleep patterns are assumed to be similar to those of humans more than 10,000 years ago.",
          "translation": "科学家研究狩猎采集社会，是因为据假定他们的睡眠模式与一万多年前的人类相似。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In a recent study, researchers traveled all over the world to examine sleep in some of the world's last remaining hunter-gatherer societies – the Hadza of Tanzania, the San of Namibia, and the Tsimane of Bolivia. Cut off from media, electricity and other distractions, these pre-industrial societies are thought to sleep the way humans did more than 10,000 years ago."
          },
          "synonyms": [
            "“Scientists studied hunter-gatherer societies” 同义替换为原文的 “researchers traveled all over the world to examine sleep in some of the world's last remaining hunter-gatherer societies”，studied 对应 examine sleep，studies 的主体由 Scientists 对应 researchers",
            "“their sleep patterns are assumed to be similar to those of humans” 同义替换为原文的 “these pre-industrial societies are thought to sleep the way humans did”，are assumed to 对应 are thought to，sleep patterns are similar 对应 themselves sleep the way",
            "“more than 10,000 years ago” 为原文原词复现（“more than 10,000 years ago”）",
            "“because” 这层因果关系由原文两句的先后顺序体现：先说研究者去考察这些社会的睡眠，紧接着给出原因“它们被假定按一万多年前人类的方式睡觉”"
          ],
          "locatingTip": "定位：题干的专有名词 hunter-gatherer societies 加上数字 10,000 years 都是极醒目的线索，扫读第 2 段开头两句话即可同时命中 “the world's last remaining hunter-gatherer societies” 与 “more than 10,000 years ago”。确定答案技巧：本题考查因果，判分点是“原文有没有交代研究者选择这些社会作为样本的理由”。原文第一句说研究者走遍世界去考察这些狩猎采集社会的睡眠，第二句立刻解释原因——由于与媒体、电力等干扰隔绝（Cut off from media, electricity and other distractions），这些前工业社会被认为（are thought to）像一万多年前的人类那样睡觉。被研究的对象、假定的内容、时间跨度三项与题干完全对应，cause 关系有原文支撑，故判 TRUE。",
          "analysis": "第 2 段前两句构成本题的全部依据。第一句：“In a recent study, researchers traveled all over the world to examine sleep in some of the world's last remaining hunter-gatherer societies – the Hadza of Tanzania, the San of Namibia, and the Tsimane of Bolivia.”（在最近一项研究中，研究者走遍世界各地去考察现存最后的狩猎采集社会——坦桑尼亚的哈扎人、纳米比亚的桑人和玻利维亚的齐马内人——的睡眠情况）。第二句：“Cut off from media, electricity and other distractions, these pre-industrial societies are thought to sleep the way humans did more than 10,000 years ago.”（由于与媒体、电力和其他干扰隔绝，这些前工业社会被认为仍按一万多年前人类的方式睡觉）。题干用 because 把“研究行为”和“被假定的相似性”串成因果关系：科学家之所以研究这些社会，是因为据说它们的睡眠方式与一万多年前的人类相似。原文的 are thought to sleep the way humans did 正是“被假定（are assumed to）”的对应说法，而文中“与媒体、电力隔绝”这一背景说明，恰好解释了研究者为何选择它们当样本——因为这些社会被看作远古人类睡眠方式的活标本。题干只是把原文的陈述语序（先讲研究、随后给出该社会被赋予的性质）改写成显式的因果句，信息一致，因此答案是 TRUE。要注意本题的陷阱在于“原文没有用 because 这个词”，但判断题考的是信息内容而非连接词本身，句中隐含的因果已经由 Cut off from … 与 are thought to 的衔接明确表达出来。",
          "traps": [
            "为什么不是 FALSE：原文两句话把“研究者去考察这些社会的睡眠”和“它们被认为按一万多年前人类的方式睡觉”直接连在一起，被研究对象的属性与题干 because 之后的理由完全吻合，不存在任何抗拒性信息，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干所需的两个信息点——研究者确实研究了这些狩猎采集社会、以及它们被认为与一万多年前人类的睡眠方式相似——原文都白纸黑字写了出来（“examine sleep in some of the world's last remaining hunter-gatherer societies” 与 “are thought to sleep the way humans did more than 10,000 years ago”），并非缺信息，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The medical devices used in the research were specially designed for humid conditions.",
          "translation": "研究中使用的医疗设备是专为潮湿环境设计的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Traveling to where they lived, often in humid, remote locations, researchers used medical devices to record the sleeping habits of 94 of these tribespeople and ended up collecting data representing 1,165 days."
          },
          "synonyms": [
            "“The medical devices used in the research” 对应原文的 “researchers used medical devices”，指同一批设备",
            "“humid conditions” 对应原文的 “humid, remote locations”（潮湿偏远的地点），环境词 humid 原词复现",
            "“were specially designed for” 在原文中找不到任何对应：原文只说设备被用来记录（used medical devices to record），完全没有提设备的研制目的、是否针对潮湿环境做过特殊设计"
          ],
          "locatingTip": "定位：题干的两个关键词 medical devices 与 humid 都集中在第 2 段最后一句，扫读到 humid 即可停下精读；整段只有此处同时出现“潮湿”和“医疗设备”。确定答案技巧：这类题要分清“环境特征”和“设备设计目的”是两件事。原文说研究者前往的地点往往潮湿偏远（often in humid, remote locations），随后只是用医疗设备记录睡眠习惯；潮湿是研究现场的客观条件，并不等于设备是为潮湿环境专门设计的（specially designed for）。原文既没提设备的设计，也没提设备在潮湿环境中遇到任何问题，属于信息缺失，因此判 NOT GIVEN。做题时切忌用常识脑补“去潮湿的地方当然要用防潮设备”。",
          "analysis": "第 2 段最后一句：“Traveling to where they lived, often in humid, remote locations, researchers used medical devices to record the sleeping habits of 94 of these tribespeople and ended up collecting data representing 1,165 days.”（研究者前往他们居住的地方——往往位于潮湿偏远地区——使用医疗设备记录这 94 名部落成员的睡眠习惯，最终收集到相当于 1165 天的数据）。句中出现的信息有三层：研究地点的环境（humid, remote locations）、使用的工具（medical devices）、工具的作用（record the sleeping habits）。题干却把 humid 这一环境信息与 medical devices 绑在一起，声称这些设备“是专为潮湿环境设计的（were specially designed for humid conditions）”。原文对设备只有“被用来记录”这一功能描述，对其设计初衷、适用环境、是否防水防潮没有任何交代。按判断题规则，原文对这层信息既未肯定也未否定，属于 NOT GIVEN。区分要点：题干里的 specially designed 是一个关于“设计目的”的新命题，不是对 humid locations 的重述；两个词在原文同一句里出现，并不等于它们之间存在题干所说的关系。",
          "traps": [
            "为什么不是 TRUE：原文只用 humid 描述研究者前往地点的气候，用 medical devices 描述研究工具，两者在同句中只是并列出现，原文从未说设备是为潮湿环境专门设计的。把同句出现的两个信息点自行建立因果或适配关系属于超出原文的推断，不能选 TRUE。",
            "为什么不是 FALSE：原文并没有说设备不适合潮湿环境，也没有说设备是通用型号、未作特殊处理，即不存在与题干相反的信息。没有相反信息时不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Researchers found that tribespeople stayed longer in bed than inhabitants of industrialised regions.",
          "translation": "研究者发现，部落成员在床上停留的时间比工业化地区的居民更长。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Like many of us, the Hadza, San, and Tsimane spend more time in bed - from 6.9 to 8.5 hours – than they do actually sleeping. This adds up to a sleep efficiency that is very similar to today's industrial populations."
          },
          "synonyms": [
            "“tribespeople” 对应原文的 “the Hadza, San, and Tsimane”（三个受研究的部落群体）",
            "“stayed longer in bed” 对应原文的 “spend more time in bed - from 6.9 to 8.5 hours”，但原文的比较对象是“实际睡着的时间（than they do actually sleeping）”，不是别的地区的人",
            "“inhabitants of industrialised regions” 对应原文的 “today's industrial populations”，不过原文提到它的目的是比较“睡眠效率（sleep efficiency）”，而非“在床上的时间”"
          ],
          "locatingTip": "定位：题干关键词 in bed 与 industrialised 都落在第 3 段：先出现 “spend more time in bed - from 6.9 to 8.5 hours”，随后一句出现 “today's industrial populations”。确定答案技巧：解题关键是看清两个比较句各自的比较对象。原文第一处比较的是“本族群在床上的时间”与“本族群实际睡着的时间”，第二处比较的是“这群人的睡眠效率”与“今天工业人口的睡眠效率”——睡眠效率非常相似（very similar）。也就是说，原文从未把“部落成员在床上的时间”与“工业化地区居民在床上的时间”作比较。题干擅自把比较对象替换成“工业化地区的居民”，这一比较原文没有，故判 NOT GIVEN。做题时务必核对比较级后面的 than 到底接了什么。",
          "analysis": "第 3 段第三、四句：“Like many of us, the Hadza, San, and Tsimane spend more time in bed - from 6.9 to 8.5 hours – than they do actually sleeping. This adds up to a sleep efficiency that is very similar to today's industrial populations.”（和我们许多人一样，哈扎人、桑人和齐马内人在床上度过的时间——从 6.9 到 8.5 小时——比他们真正睡着的时间更长。这算下来的睡眠效率与今天的工业人口非常相似）。原文的比较共有两处，方向要注意：其一，部落成员“在床上的时间”长于“他们实际睡着的时间”，比较对象是同一群人的两种时间；其二，部落成员的“睡眠效率”与“今天工业人口”的睡眠效率“非常相似”，比较对象是效率而非卧床时长。题干的比较对象却是“部落成员在床上的时间”与“工业化地区居民（在床上的时间）”，这个跨群体的卧床时长对比原文完全没有出现（原文反而用 Like many of us 暗示与我们有相似之处）。既然原文既没有支持也没有否定这一比较，只能判 NOT GIVEN。这类题的通用技巧是：看到 more … than 或比较级，先圈出 than 后面的成分，再与题干比较对象逐一核对，对象错位就是 NOT GIVEN 的典型信号。",
          "traps": [
            "为什么不是 TRUE：原文的比较是“卧床时间”对比“实际睡着时间”，以及与工业人口对比“睡眠效率”，从未拿两地的卧床时长作比较；题干所断言的比较关系在原文中没有依据，不能选 TRUE。",
            "为什么不是 FALSE：原文没有说部落成员在床上的时间比工业化地区居民更短或相同。由于原文根本未涉及这一比较，既不能证明题干成立，也不能证明题干被推翻，因此不属于 FALSE（事实冲突），只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Jerome Siegel believes that environment and culture have little effect on sleep patterns.",
          "translation": "杰罗姆·西格尔认为环境和文化对睡眠模式几乎没有影响。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "According to Jerome Siegel, director of the University of California's Center for Sleep Research, evidence suggests sleep habits may not be environmental or cultural, but central to the physical makeup of humans."
          },
          "synonyms": [
            "“Jerome Siegel believes” 同义替换为原文的 “According to Jerome Siegel, director of the University of California's Center for Sleep Research, evidence suggests”，according to 表示其观点，evidence suggests 表述其对证据的判断",
            "“environment and culture” 原词复现为原文的 “environmental or cultural”",
            "“have little effect on sleep patterns” 同义替换为原文的 “may not be environmental or cultural, but central to the physical makeup of humans”，即睡眠习惯并非由环境与文化决定，而是人类生理构造的固有部分"
          ],
          "locatingTip": "定位：题干的专有名词 Jerome Siegel 是全文最醒目的定位词之一，第 4 段首句即出现，扫读时只要找大写人名就能一步锁定。确定答案技巧：本题考观点归属，判分点是“Siegel 本人对 sleep habits 成因的判断”。原文用 not … but … 的对比结构说：睡眠习惯可能不是环境或文化造成的（may not be environmental or cultural），而是人类生理构造的核心部分（but central to the physical makeup of humans）。把 not environmental or cultural 转述为“环境与文化影响很小”，正与题干的 little effect 一致，因此判 TRUE。注意 may not 表示的是原作者笔下的审慎语气，不影响“影响很小”这层意思的方向。",
          "analysis": "第 4 段首句：“According to Jerome Siegel, director of the University of California's Center for Sleep Research, evidence suggests sleep habits may not be environmental or cultural, but central to the physical makeup of humans.”（据加州大学睡眠研究中心主任杰罗姆·西格尔称，证据表明睡眠习惯可能并非源于环境或文化，而是人类生理构造的核心部分）。句中的 not … but … 结构是本句的判断核心：前半句用 may not be environmental or cultural 否定环境与文化对睡眠习惯的决定作用，后半句用 but central to the physical makeup of humans 把原因归结为生理构造。题干的落点有三处与原文严丝合缝：观点持有者是同一位 Jerome Siegel，被否定的因素同为 environment and culture（原文 environmental or cultural），结论同为“影响很小”（have little effect 对应 may not be environmental or cultural）。考生需要注意：原文用 may not 这种带有保留的语气，而题干用 little effect 这种程度性表达，两者在雅思里被视为同一等级的说法——have little effect 本就表示“影响很小/几乎没有”，并不等于 absolutely no effect，所以不存在程度夸大的问题。综合判断答案为 TRUE。本段接下来的句子还进一步质疑了“睡眠不足导致肥胖、情绪障碍等疾病”的流行看法，以及“午后精力下降是因为压抑了午睡本能”的说法，整体思路都在削弱环境与文化因素的解释力，与本题的 TRUE 一致。",
          "traps": [
            "为什么不是 FALSE：原文用 not … but … 明确把睡眠习惯归因于人类的生理构造而否定环境与文化因素，与题干“环境影响很小”的表述方向完全一致；若选 FALSE，需要原文出现“环境与文化影响很大”之类的相反信息，而原文恰恰没有。",
            "为什么不是 NOT GIVEN：原文直接借 Siegel 之口对睡眠习惯的成因下了判断（may not be environmental or cultural），题干所问的正是这一判断内容，信息明确存在，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 13
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "scientists have recorded an afternoon drop in 5 ________",
          "translation": "科学家记录到午后 ________（精力）的下降。",
          "answer": "energy",
          "wordClass": "名词（不可数，指人的精力；作介词 in 的宾语，与 drop 搭配表示“下降的对象”）",
          "locating": {
            "paragraph": "4",
            "quote": "Scientists have documented that people's energy often falls in the mid-afternoon."
          },
          "synonyms": [
            "“scientists have recorded” 同义替换为原文的 “Scientists have documented”，recorded 对应 documented（记录、证实）",
            "“an afternoon drop in …” 同义替换为原文的 “often falls in the mid-afternoon”，drop 对应 falls，afternoon 对应 mid-afternoon",
            "“energy” 为原文原词，在原文中作 falls 的主语（people's energy），在题干中作介词 in 的宾语"
          ],
          "locatingTip": "定位：笔记标题是 New ideas about napping（关于午睡的新看法），第一条讲“午后下降”，回原文找 afternoon 与科学家记录类动词，落在第 4 段后半句 “Scientists have documented that people's energy often falls in the mid-afternoon.”。确定答案技巧：题干把“某物在午后下降”表述为 an afternoon drop in [5]，空格需要的是下降的那个对象。原文主语是 people's energy（人的精力），谓语 falls（下降），所以被下降的就是 energy。注意空格前有介词 in，填名词 energy 即可，不要填 afternoon（时间已由题干给出）、也不要填 fall。同时要留意第 4 段马上说“有人提出这正是因为我们压抑了午睡本能（suppress a natural desire for a nap）”，那一句是下文第 6、7 题所在逻辑的引子，与本空无关。",
          "analysis": "第 4 段第四句：“Scientists have documented that people's energy often falls in the mid-afternoon.”（科学家已经证实，人的精力常在下午中段下降）。笔记第一条“scientists have recorded an afternoon drop in 5 …”把原文的“主谓结构”（people's energy often falls）改写成“名词短语”（an afternoon drop in energy），动作 falls 变成名词 drop，主语 energy 变成介词 in 的宾语，时间 in the mid-afternoon 变成前置定语 afternoon，三处改写一一对应。词性上，in 是介词，其后需名词或名词性成分，energy 在此为不可数名词，直接用原形、不加冠词也不变复数（ONE WORD ONLY）。容易误填的选项是 fatigue 或 sleepiness，但原文只用了 energy 一词，且词数限制为一词，必须照抄原文用词。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "studies of hunter-gatherer societies show that napping was rare and occurred more often during the 6 ________",
          "translation": "对狩猎采集社会的研究表明，午睡很少见，且在 ________ 期间发生得更频繁。",
          "answer": "summer",
          "wordClass": "名词（季节名，作介词 during 的宾语；原文以单数形式出现，直接照抄 summer）",
          "locating": {
            "paragraph": "5",
            "quote": "The researchers estimated that naps may have occurred on up to 7 percent of winter days and 22 percent of summer days."
          },
          "synonyms": [
            "“studies of hunter-gatherer societies show that napping was rare” 同义替换为原文上一句的 “the new study provides evidence that this is unlikely, and that napping was actually rare in hunter-gatherer societies”",
            "“occurred more often during the …” 同义替换为原文的 “occurred on up to … 22 percent of … days”，百分比更高即“更频繁”",
            "“during the …” 对应原文的 “of … days”，指同一段时间范围（季节）"
          ],
          "locatingTip": "定位：题干关键词 napping 与 rare 在第 5 段首句原词出现（napping was actually rare in hunter-gatherer societies），紧接的下一句给出冬夏两个百分比，即答案所在句。确定答案技巧：题目问“午睡在什么时候更频繁”，原文给了两个季节的数据——冬季最多 7% 的日子、夏季最多 22% 的日子。22% 明显高于 7%，因此“更频繁”对应的是 summer（夏季）。填词时注意空格在介词 during 之后，只需季节名词 summer 一个词，不要写成 summer days（超过词数），也不要因为 7 percent 的 winter 先出现就照抄 winter——判断依据是“more often（更频繁）”，必须选数值更大的那个。",
          "analysis": "第 5 段首句与第二句：“However, the new study provides evidence that this is unlikely, and that napping was actually rare in hunter-gatherer societies. The researchers estimated that naps may have occurred on up to 7 percent of winter days and 22 percent of summer days.”（然而这项新研究提供的证据表明这不太可能，午睡在狩猎采集社会中其实很少见。研究者估计，午睡可能最多发生在 7% 的冬季日子和 22% 的夏季日子里）。笔记第二条把两句合写为“研究表明午睡很少见，且在某个时段发生得更频繁”，其中“很少见”来自首句 napping was actually rare，“更频繁”需要比较第二句给出的两个百分比：冬季 7% 对夏季 22%，夏季明显更高。因此空格填 summer。词性上，空格位于介词 during 之后，需要名词性成分，summer 作为季节名词此处用单数形式，直接照抄原文小写形式即可。本题的另一处提示是：第 5 段第三句紧接着说设备只擅长探测较长的午睡，那正是第 7 题的出处，说明第 5 段是多题共用的段落，做题时要按题号顺序逐条回到原文找各自的句子。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "the devices may not have detected 7 ________ naps",
          "translation": "这些设备可能没有探测到 ________（短时间的）午睡。",
          "answer": "short",
          "wordClass": "形容词（修饰名词 naps，表示“短的”；原文以表语形式出现（naps that were short），此处作前置定语，词形不变）",
          "locating": {
            "paragraph": "5",
            "quote": "They noted that their devices were only good at detecting longer naps, so it is possible that some of the study subjects took naps that were short, perhaps 15 minutes or less."
          },
          "synonyms": [
            "“the devices may not have detected” 同义替换为原文的 “their devices were only good at detecting longer naps”，只擅长探测长午睡意味着可能漏掉另一类午睡",
            "“may not have detected” 对应原文的 “it is possible that …”（表示不确定、可能存在遗漏）",
            "“short naps” 与原文 “naps that were short, perhaps 15 minutes or less” 对应，原文用定语从句后置修饰，题干改写为前置形容词"
          ],
          "locatingTip": "定位：题干关键词 devices 与 naps 都在第 5 段末句，紧接在“百分比”那句之后，扫读第 5 段末尾即可命中。确定答案技巧：题目说“设备可能没有探测到某种午睡”，原文的逻辑是先给出设备的能力上限——只擅长探测较长的午睡（only good at detecting longer naps），再由此推出可能存在遗漏，即某些被试的午睡很短（naps that were short, perhaps 15 minutes or less），甚至短到 15 分钟以内。既然设备擅长的是 longer，那么被漏掉的自然是 short。注意不要把 longer 填进去（那是设备擅长探测的，与空格意思相反），也不要把 15 minutes 填进去（超过词数、且是举例的时长）。语法提示：空格在名词 naps 之前，需要一个形容词，原文的表语形式 short 在题干中直接充当前置定语。",
          "analysis": "第 5 段末句：“They noted that their devices were only good at detecting longer naps, so it is possible that some of the study subjects took naps that were short, perhaps 15 minutes or less.”（他们指出，他们的设备只擅长探测较长的午睡，因此有些研究对象可能打过很短的午睡，也许只有 15 分钟甚至更短）。笔记第三条“the devices may not have detected 7 … naps”是对这句话的条件式概括：原文用 so 引导结果——设备只能可靠捕捉 longer naps，于是短午睡就可能被漏记；题干用 may not have detected 表达同一种“可能遗漏”的语气，空格修饰 naps，需填的正是与 longer 相对的形容词 short。答案的判定路径非常清晰：既然设备擅长的是“长”，被漏掉的必然是“短”。另外要注意原文的 short 出现在定语从句 “naps that were short” 中作表语，题干把它改写成前置定语，词形 short 不变，也不需变比较级或最高级。ONE WORD ONLY 的限制也排除了 15 minutes 这类原文举例。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "even with 8 ________ there was little light",
          "translation": "即使有 ________（火堆），光线也很微弱。",
          "answer": "fires",
          "wordClass": "名词（复数，指部落燃起的火堆；作介词 with 的宾语，原文以复数形式 fires 出现，需照抄复数）",
          "locating": {
            "paragraph": "6",
            "quote": "All three tribes had fires going, but the light itself was much lower than you might get from a light bulb."
          },
          "synonyms": [
            "“even with … there was little light” 同义替换为原文的 “had fires going, but the light itself was much lower”，转折连词 but 对应题干的 even with 结构",
            "“there was little light” 同义替换为原文的 “the light itself was much lower than you might get from a light bulb”",
            "“fires” 原词复现，在原文中作 had 的宾语（had fires going），在题干中作介词 with 的宾语"
          ],
          "locatingTip": "定位：笔记小节 Daily activity cycles 的第二条讲“即使有某种东西，光线也很弱”，对应原文第 6 段讲火堆与光线的句子，关键词 light 在第 6 段出现两次，扫读即可锁定。确定答案技巧：题干的结构是 even with [8]（即使有……），后半句 there was little light（光线很弱）与原文 but the light itself was much lower 对应，那么 even with 后面的东西就是原文 had … going 的宾语。原文说三个部落都燃着火（All three tribes had fires going），但亮度很低，所以答案是 fires。填词要点：原文用的是复数 fires（火堆），且题干介词 with 后接名词性成分，须写复数形式 fires，不要写单数 fire 或 firewood、flame 等原文没有的词。",
          "analysis": "第 6 段第三句：“All three tribes had fires going, but the light itself was much lower than you might get from a light bulb.”（三个部落都燃着火，但火光本身远比你从灯泡得到的光要弱）。笔记第二条“even with 8 … there was little light”正是对这一让步关系的概括：原文用 had fires going 与 but the light itself was much lower 形成对比，题干用 even with … 加 there was little light 表达“即便有火，光仍很弱”，两处要点一一对应，因此空格填 fires。本题的解题钥匙是抓住 but 与 even with 的对应关系——转折前的信息就是空格需要的内容。词性上，with 是介词，其后接名词，fires 在此为复数可数名词（三个部落各有火堆，故原文用复数），照抄即可；若写 fire 会与原文形式不符，若写 firewood、light 则不是原文用词，均不符合 ONE WORD ONLY 且取自原文的要求。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "tribespeople usually woke up around 9 ________",
          "translation": "部落成员通常在 ________（日出）前后醒来。",
          "answer": "sunrise",
          "wordClass": "名词（单数，表示一天中的时间节点；作介词 around 的宾语）",
          "locating": {
            "paragraph": "6",
            "quote": "They did, however, have a tendency to wake up anywhere between an hour before and an hour after sunrise."
          },
          "synonyms": [
            "“tribespeople usually woke up” 同义替换为原文的 “have a tendency to wake up”（倾向于醒来，即通常如此）",
            "“around” 同义替换为原文的 “anywhere between an hour before and an hour after”，把“某一时间点前后一小时”概括为“大约、前后”",
            "“sunrise” 原词复现，原文中它是 before 与 after 共同修饰的时间参照点"
          ],
          "locatingTip": "定位：笔记 Daily activity cycles 的第三条讲醒来的时间，回原文第 6 段找 wake up，落在末句 “have a tendency to wake up anywhere between an hour before and an hour after sunrise”。确定答案技巧：题干说“通常在（around）某个时间醒来”，原文给出的区间是“日出前一小时到日出后一小时之间（an hour before and an hour after sunrise）”，这个区间的中心点就是 sunrise，因此 around 对应的正是 sunrise。注意不要被 before / after 迷惑去填 hour，那不是时间节点；也不要把 sunset（日落）填进来——日落出现在同段前文，与本题的“醒来”无关，是典型的同段干扰。",
          "analysis": "第 6 段末句：“They did, however, have a tendency to wake up anywhere between an hour before and an hour after sunrise.”（不过，他们倾向于在日出前一小时到日出后一小时之间的任意时间醒来）。笔记第三条“tribespeople usually woke up around 9 …”把原文的区间表述压缩为一个时间中心点：原文说醒来时间落在“日出前 1 小时到日出后 1 小时”这个窗口内，用 around 一词概括，其中心参照点恰是 sunrise（日出）。词性上，空格位于介词 around 之后，需名词性成分，sunrise 为单数名词，照抄原文形式。要特别提防同段干扰：本段前面出现过 sunset（“staying awake an average of between 2.5 and 4.4 hours after sunset”），那句讲的是入睡时间而非醒来时间；如果误把 sunset 填入，整句意思会变成“通常在日落前后醒来”，与原文逻辑相悖。答完可回读检查：填 sunrise 后“通常在日出前后醒来”与原文的“日出前后一小时范围内醒来”完全吻合。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "scientists found that 10 ________ had almost as much influence on sleep patterns as light",
          "translation": "科学家发现 ________（温度）对睡眠模式的影响几乎与光一样大。",
          "answer": "temperature",
          "wordClass": "名词（不可数，指温度这一物理因素；作从句主语，被 had 支配）",
          "locating": {
            "paragraph": "7",
            "quote": "Siegel and his co-authors investigated this further by looking into the significance of temperature. They found that it also played a big role, though it was somewhat less important than light in influencing sleep patterns."
          },
          "synonyms": [
            "“scientists found” 同义替换为原文的 “They found”，主语 They 指 Siegel 与合著者（即科学家团队）",
            "“had almost as much influence on sleep patterns as light” 同义替换为原文的 “played a big role, though it was somewhat less important than light in influencing sleep patterns”，somewhat less than 对应 almost as much as",
            "“10 …” 对应原文的 “temperature”，原文先用名词 significance of temperature 引出，再用代词 it 回指"
          ],
          "locatingTip": "定位：笔记第四条讲与 light 对比的另一个因素，回原文找 light 与比较级 less important 同现的句子，落在第 7 段 “They found that it also played a big role, though it was somewhat less important than light in influencing sleep patterns.”。确定答案技巧：该句主语是代词 it，必须往前一句（同一段首句）找到指代对象——Siegel 和合著者研究的是 temperature 的重要性（the significance of temperature），可见 it 指的就是 temperature，因此空格填 temperature。比较关系的换算也要看清：原文说它“比光的重要性略低（somewhat less important than light）”，题干写成“几乎和光一样大（almost as much … as light）”，二者程度相当，方向一致。填词时只写 temperature 一个词，不要写 significance、heat 或 light（light 已在题干中出现）。",
          "analysis": "第 7 段：“Siegel and his co-authors investigated this further by looking into the significance of temperature. They found that it also played a big role, though it was somewhat less important than light in influencing sleep patterns.”（西格尔及其合著者通过研究温度的重要性对此作了进一步调查。他们发现温度同样起了很大作用，尽管在影响睡眠模式方面，它的重要性略低于光）。本题的关键是代词指代：第二句的主语 it 承接首句的 the significance of temperature，因此 it 指 temperature。把这个指代还原后，原句意思就是“温度也起了很大作用，虽然它对睡眠模式的影响略低于光”，而笔记写的是“科学家发现 [10] 对睡眠模式的影响几乎与光一样大（had almost as much influence on sleep patterns as light）”。原文的 somewhat less important than light 与题干的 almost as much as light 属于同一等级的描述，都表示“略逊于光但差距不大”，因此答案是 temperature。词性上，空格是 that 从句的主语，需名词性成分，temperature 为不可数名词，不加冠词、不变复数，直接照抄。这里还要留意段落分工：第 6 段已经用 light（火光）作过对比，第 7 段专门引入 temperature，两段因素不同，答题时不要把第 6 段的 light 误当成答案。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "11 ________ is something that very few of the tribespeople suffered from",
          "translation": "________（失眠）是极少数部落成员才会遭遇的问题。",
          "answer": "sleeplessness",
          "wordClass": "名词（不可数，指失眠这一症状；位于句首作主语，与系动词 is 构成主系表结构，其后 that 引导的定语从句说明很少有人受此困扰）",
          "locating": {
            "paragraph": "8",
            "quote": "Importantly, almost none of them were troubled by sleeplessness."
          },
          "synonyms": [
            "“very few of the tribespeople suffered from” 同义替换为原文的 “almost none of them were troubled by”，almost none 对应 very few，were troubled by 对应 suffered from",
            "“something” 对应原文的抽象名词 “sleeplessness”",
            "“tribespeople” 对应原文的代词 them，回指第 8 段首句提到的 the tribespeople that were studied"
          ],
          "locatingTip": "定位：笔记小节 Differences between tribespeople and people in industrialised regions 第一条讲部落成员极少遭遇的某种问题，回原文第 8 段找“几乎没有人被某种问题困扰”的句子，即 “Importantly, almost none of them were troubled by sleeplessness.”。确定答案技巧：题干结构是“[11] is something that very few of the tribespeople suffered from”，空格作主语，需要的是被“极少遭遇”的那个问题的名称。原文用被动结构 were troubled by sleeplessness，其宾语 sleeplessness（失眠）在题干中转换成主语，almost none（几乎没有）对应 very few（极少），逻辑完全一致。填词要点：写名词 sleeplessness 一个词，不要写 sleepless（形容词）、insomnia（原文未用此词），也不要写 difficulties sleeping（原文后文虽有此意，但超过词数且不是空格所需的名词形式）。",
          "analysis": "第 8 段前两句：“The tribespeople that were studied are different from people living in modern conditions in a number of respects. Importantly, almost none of them were troubled by sleeplessness.”（受研究的部落成员在许多方面与现代条件下生活的人不同。重要的是，他们中几乎没有人受到失眠困扰）。笔记的第三条小节标题正是 Differences between tribespeople and people in industrialised regions（部落成员与工业化地区居民的差异），与原文首句呼应；其下第一条“11 … is something that very few of the tribespeople suffered from”则把第二句的被动表达 were troubled by sleeplessness 改写为主动式的 suffered from，并保留 almost none 这一“几乎为零”的数量信息，对应题干的 very few。两处改写：数量词 almost none 对 very few，动词短语 were troubled by 对 suffered from，被遭遇的对象都是 sleeplessness。因此空格填 sleeplessness（名词，不可数），原文用词唯一，勿作同义替换。这一段的后续数据（只有 1.5% 到 2.5% 的人一年中不止一次严重睡眠困难，远低于工业化国家的 10% 到 30%）进一步证实了“极少”这一判断，可以当作复核答案的旁证。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "tribespeople had better fitness than industrialised populations and were not 12 ________",
          "translation": "部落成员的身体素质优于工业化地区的人群，并且不 ________（超重）。",
          "answer": "overweight",
          "wordClass": "形容词（作表语，与 were not 构成否定谓语，表示“超重的”；原文同为形容词作表语）",
          "locating": {
            "paragraph": "9",
            "quote": "Not a single one is overweight, indicating their overall higher levels of physical fitness."
          },
          "synonyms": [
            "“tribespeople had better fitness than industrialised populations” 同义替换为原文的 “indicating their overall higher levels of physical fitness”，higher 对应 better",
            "“were not …” 同义替换为原文的 “Not a single one is …”，即全体成员都不属于该状态，与 were not 的否定含义一致",
            "“overweight” 原词复现，原文作 be 动词的表语（is overweight），题干作 were not 的表语"
          ],
          "locatingTip": "定位：笔记第三条讲身体素质与体重，回原文第 9 段（末段）找 fitness 与体重相关词，落在 “Not a single one is overweight, indicating their overall higher levels of physical fitness.”。确定答案技巧：题干用 and 连接两个并列信息，前一个是“身体素质更好（better fitness）”，后一个是“并且不（were not）……”，原文同一句里既有 higher levels of physical fitness，又有 Not a single one is overweight，把“没有一个人超重”等价改写为“都不超重（were not overweight）”，故空格填 overweight。填词注意：原文是 “Not a single one is overweight”，否定在主语一侧；题干把否定移到 were not 上，形容词本身仍写 overweight 一个词，不要写 fat（原文未用）、也不要写成 over weight 两个词。",
          "analysis": "第 9 段前两句：“The tribespeople are also much healthier. Not a single one is overweight, indicating their overall higher levels of physical fitness.”（部落成员也健康得多。他们中没有一个人超重，这表明他们整体的身体素质更高）。笔记第三条“tribespeople had better fitness than industrialised populations and were not 12 …”把原文这一句拆成两个并列信息：higher levels of physical fitness 对应 better fitness than industrialised populations（该比较对象由本节标题与全段语境给出，原句本身并未作此比较），Not a single one is overweight 对应 were not overweight。逻辑上原文是“不超重”作为“身体素质更高”的佐证，题干则把两者并列为事实，信息方向一致。词性上，空格位于 were not 之后，需要形容词作表语，overweight 是形容词，直接照抄原文形式、保持小写、不作变形。本题的干扰点在于第 8 段出现过 sleeplessness、第 9 段后面还有 hearts，做题时要严格按题号顺序落位，不要混段。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "tribespeople also had stronger 13 ________",
          "translation": "部落成员还拥有更强健的 ________（心脏）。",
          "answer": "hearts",
          "wordClass": "名词（复数，指这些人的心脏；受比较级 stronger 修饰，作动词 had 的宾语，原文即用复数，须照抄复数形式 hearts）",
          "locating": {
            "paragraph": "9",
            "quote": "They also tended to have healthier hearts."
          },
          "synonyms": [
            "“tribespeople also had stronger …” 同义替换为原文的 “They also tended to have healthier …”，tended to have 对应 had，healthier 与 stronger 在此均表示身体器官状况更好",
            "“hearts” 原词复现，原文中作 had 的宾语（复数 hearts）"
          ],
          "locatingTip": "定位：笔记最后一条“tribespeople also had stronger [13]”紧接在“超重”那条之后，回原文第 9 段顺读第三句即可命中 “They also tended to have healthier hearts.”。确定答案技巧：题干中的 also 与原文的 also 位置完全一致（均在讲完体重、体质之后），主语都是部落成员，因此空格就是 have 的宾语 hearts（心脏）。注意两项对比：原文用 healthier（更健康），题干用 stronger（更强健），两者都形容身体器官状态良好，属于同向改写；词形上原文已经是复数 hearts，题干中 stronger 修饰复数名词，仍需写复数 hearts，不可写成单数 heart。另外要注意不要误填 physical fitness（那是第 12 题所在句的内容），也不要填 diseases、health 等原文没有用于此处的词。",
          "analysis": "第 9 段第三句：“They also tended to have healthier hearts.”（他们往往也有更健康的心脏）。笔记最后一条“tribespeople also had stronger 13 …”与这句一一对应：主语 They 对应 tribespeople，also 原样保留，tended to have 与 had 对应，healthier 与 stronger 在语境中同指器官状况良好，宾语 hearts 即答案。前两条笔记分别覆盖了“不超重（overweight）与更高的身体素质”和“极少失眠（sleeplessness）”，本条覆盖“心脏更健康”，三条笔记合起来正好对应第 9 段与第 8 段的调查结论。词性方面，hearts 是复数可数名词，因为原文使用的是复数形式（指这些部落成员各自的心脏），且受比较级 stronger 修饰；ONE WORD ONLY 要求只写 hearts 一词，不加 the、不加 own 等修饰。答完可回读整条笔记“tribespeople also had stronger hearts”，与原文 “They also tended to have healthier hearts” 在语义与结构上完全吻合。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
