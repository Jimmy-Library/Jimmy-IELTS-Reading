(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-medium-243", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-medium-243",
  "meta": {
    "examId": "p2-medium-243",
    "title": "The internal body clock 人体内部生物钟",
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
          "stem": "support for an earlier finding from experiments on insects",
          "translation": "对早先一项基于昆虫实验的发现的支持。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Fruit flies appeared to have genes affecting the daily rhythm of their behavior – suggesting that there are ‘clocks’ inside each of their cells. Further evidence for this emerged in 1995, when researchers at Massachusetts General Hospital isolated nerve cells from the SCN, and found they kept up a circadian cycle without help from daylight."
          },
          "synonyms": [
            "“experiments on insects” 同义替换为原文的 “working with fruit flies”，果蝇属于昆虫，题干用上位词 insects 概括原文的具体实验对象",
            "“an earlier finding” 同义替换为原文的 “Fruit flies appeared to have genes affecting the daily rhythm of their behavior”，指 1971 年加州理工学院用果蝇得出的“每个细胞里都有钟”的早期发现",
            "“support for …” 同义替换为原文的 “Further evidence for this emerged in 1995”，其中 Further evidence 即对先前发现的支持，emerge 即“出现、得到”"
          ],
          "locatingTip": "定位：题干里没有 insect 这个词，需要用“同义上位词”思路，先在全文里找代表昆虫的名词，果蝇 fruit flies 是全文唯一出现的昆虫，且只出现在第 7 段。确定答案技巧：锁定第 7 段后看信息结构：先有 1971 年果蝇实验的发现（基因影响行为节律），紧接着用 “Further evidence for this emerged in 1995” 给出进一步证据，前面是 earlier finding，后面是 support，两者一一对应，所以选 F。注意不要被同段 1997 年的 CLOCK 基因研究干扰，那是对果蝇发现的延续，但题干强调的是“对先前发现的支持”，1995 年的 Further evidence 才是直接对应。",
          "analysis": "本题的信息落在第 7 段（对应字母 F）。第 7 段先回顾几十年来对“钟”的寻找过程：上世纪 60 年代末，时间生物学家以为找到了钟，即大脑下丘脑中的视交叉上核（SCN）；但 1971 年加州理工学院的科学家用果蝇做实验，发现果蝇似乎带有影响日常行为节律的基因，暗示“每个细胞内部都有钟（‘clocks’ inside each of their cells）”。紧接着原文写道：“Further evidence for this emerged in 1995, when researchers at Massachusetts General Hospital isolated nerve cells from the SCN, and found they kept up a circadian cycle without help from daylight.”（1995 年出现了进一步证据：马萨诸塞综合医院的研究者把 SCN 中的神经细胞分离出来，发现它们在得不到日光帮助的情况下仍能维持昼夜节律）。这里的 this 回指 1971 年果蝇实验的那项发现，Further evidence 正是题干 support 的同义表达；而 fruit flies（果蝇）就是题干 experiments on insects 中的 insects。两者合并即“对早先一项基于昆虫实验的发现的支持”，因此答案段落是 F。题干用的是概括性措辞（support、an earlier finding、insects），原文用的是具体措辞（Further evidence、this、fruit flies），这是段落信息匹配题最典型的“上义词替换下义词”考法。",
          "traps": [
            "为什么不选 G（第 8 段）：该段谈的是 CLOCK 基因的作用细节、Takahashi 教授对未来治疗策略的展望，以及“细胞内的钟如何保持同步、生物为何要与阳光建立联系”这些尚无答案的问题，属于遗留问题，不是“对先前发现的支持”。",
            "为什么不选 H（第 9 段）：该段以蓝细菌为研究对象，讲的是细胞钟已有三十多亿年历史的推论，实验对象是微生物而不是昆虫，与题干的 insects 不符。",
            "为什么不选 B（第 3 段）：该段虽然也提到“内部时钟”，但讲的是时钟被打乱带来的痛苦以及两个交通事故高峰，属于影响而非实验证据。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "criticism of the way some research data was analysed",
          "translation": "对某些研究数据分析方式的批评。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Most of the remainder contained blunders ranging from faulty mathematics to basic errors in statistics, while the handful of positive studies were explicable as flukes."
          },
          "synonyms": [
            "“criticism” 同义替换为原文的 “blunders”（重大错误）与 “explicable as flukes”（只能解释为偶然），都是对研究质量的否定性评价",
            "“the way some research data was analysed” 同义替换为原文的 “faulty mathematics” 和 “basic errors in statistics”，数学出错、统计出错正是数据处理与分析方法上的问题",
            "“some research data” 同义替换为原文的 “the remainder” 与 “over 130 investigations”，指 Hines 复查的那批研究"
          ],
          "locatingTip": "定位：题干的关键词 criticism 与 analysed 在原文里都不存在原词，要找“否定性评价”加“数学、统计”这类分析层面的词。全文出现 mathematics 的只有第 5 段，该段还用了 statistics 与 blunders（错误）这类批评性用词（第 3 段的 traffic accident statistics 属于另一语境），一步锁定 D 段。确定答案技巧：段落信息匹配题遇到“批评、质疑”这类抽象名词时，先找评价性形容词或名词（failed、blunders、errors、flukes），再看被批评的对象是不是题干所说的“研究数据的分析方式”。第 5 段先说四分之三的研究不支持生物节律说，接着说剩下的大部分“包含从错误数学到基础统计错误的重大失误”，这正是对分析方式的批评，故选 D。",
          "analysis": "第 5 段（对应字母 D）整体是对 biorhythms（生物节律说）的否定，本题问的是其中“对研究数据分析方式的批评”。原文先交代背景：科学家早已把 biorhythms 斥为伪科学；随后写 1998 年纽约州 Pace 大学的 Terence Hines 博士发表了关于生物节律说法的最全面研究，复查了 130 多项调查的结果，“He found that three-quarters of them failed to provide any support for biorhythms.”（他发现其中四分之三根本不能为生物节律说提供任何支持）；接着就是本题定位句：“Most of the remainder contained blunders ranging from faulty mathematics to basic errors in statistics, while the handful of positive studies were explicable as flukes.”（其余研究大多数都含有重大失误，从数学运算错误到基础统计学错误都有；而少数得出正面结论的研究也只能解释为偶然）。其中 faulty mathematics（有问题的数学）与 basic errors in statistics（统计学的基础性错误）说的正是“研究数据被如何处理、分析”的层面，blunders 与 flukes 则是对结果可靠性的批评，与题干 criticism of the way some research data was analysed 完全吻合，所以答案是 D 段。注意题干中的 some research data 泛指“某些研究的数据”，与原文 the remainder（其余那些研究）范围一致，不需要在此处死抠数量。",
          "traps": [
            "为什么不选 C（第 4 段）：该段只客观介绍生物节律说的内容（三种周期、23/28/33 天、关键日），尚未出现任何批评，批评是从第 5 段才开始的。",
            "为什么不选 E（第 6 段）：该段讲的是 24 小时生物周期确实存在、自由运行周期约为 24 小时、人类的周期约 24.5 小时，属于正面陈述，没有对研究方法的批评。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "reference to a basic test on a plant",
          "translation": "提及对一株植物所做的一次简单实验。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Intrigued by the way some flowers open and close their leaves each day, Jean-Jacques de Mairan put a heliotrope in a darkened room and observed the effect."
          },
          "synonyms": [
            "“a basic test” 同义替换为原文的 “a simple experiment”，并由 “put a heliotrope in a darkened room and observed the effect” 这一操作过程具体说明",
            "“on a plant” 同义替换为原文的 “a heliotrope”（天芥菜，一种植物），原文前文也用 “some flowers” 泛指植物",
            "“reference to” 对应原文对这次实验的完整叙述（法国科学家、暗室、观察叶子开合）"
          ],
          "locatingTip": "定位：plant 一词在原文第 2 段其实也以 “the plant” 的形式出现过，但更精准的抓手仍是具体的植物或花卉名词，heliotrope 与 flowers 都出现在第 2 段，而且同段还有 “a simple experiment” 这一与 basic test 高度对应的表达，可以直接锁定 A 段。确定答案技巧：题干说“一次简单实验”，原文说 “a simple experiment”；题干说“on a plant”，原文说 “put a heliotrope in a darkened room”，把一株天芥菜放进暗房观察叶子开合，正是对植物做的简单实验。三个信息点（simple、plant、test）全部命中，故选 A。注意第 2 段篇幅较长，前半段讲日月驱动的普遍看法，只有后半段才是这次实验，定位到段后还要在段内找准句子。",
          "analysis": "第 2 段（对应字母 A）的主题是 250 多年前法国科学家 Jean-Jacques de Mairan 的实验推翻了“一切生命都听命于太阳”的观念。原文先铺垫：从水牛到细菌、从橡树到藻类，所有生命都遵循同一个 24 小时周期，而这个周期由太阳的升落驱动，接着用 “Or is it?” 反问转折，并说 “Over 250 years ago, a French scientist performed a simple experiment that blew apart the idea that all life on Earth does the bidding of the Sun.”（250 多年前，一位法国科学家做了一个简单实验，彻底击碎了地球上一切生命都听命于太阳的观点）。随后交代实验细节：“Intrigued by the way some flowers open and close their leaves each day, Jean-Jacques de Mairan put a heliotrope in a darkened room and observed the effect.”（被某些花每天开合叶子的现象所吸引，de Mairan 把一株天芥菜放进一间暗室，观察结果）。题干中的 a basic test 对应原文的 a simple experiment，on a plant 对应 a heliotrope（天芥菜），因此这一段正是“提及对一株植物所做的简单实验”的段落，答案是 A。题干把实验主语（法国科学家的名字）隐去，只留“basic test on a plant”这一抽象概括，这是段落匹配题的常规出题方式：用抽象名词替换具体的人、物和动词。",
          "traps": [
            "为什么不选 E（第 6 段）：该段虽然提到 “Following de Mairan’s pioneering work”，但只是引用他的开创性工作作为研究脉络的起点，讲的是后续研究者发现的自由运行周期，并没有重复描述那次植物实验。",
            "为什么不选 H（第 9 段）：该段的实验对象是微生物蓝细菌（cyanobacterium），而且是用化学方法研究三种蛋白质之间的反应，既不是植物也不是“简单实验”。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "a statement that the length of natural cycles varies slightly between living things",
          "translation": "陈述自然周期的长度在不同生物之间略有差异。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "organisms settle down to ‘free-running’ cycles that are close to, but rarely exactly, 24 hours long. In the case of humans, the cycle is typically around 24.5 hours long."
          },
          "synonyms": [
            "“natural cycles” 同义替换为原文的 “‘free-running’ cycles”，即不受日光提示时生物自身运行的周期",
            "“varies slightly” 同义替换为原文的 “close to, but rarely exactly, 24 hours long”，接近但并不恰好是 24 小时，即略有出入",
            "“between living things” 对应原文的 “organisms”（生物）并举例 “In the case of humans, the cycle is typically around 24.5 hours long”，用人类与一般生物的比较说明差异"
          ],
          "locatingTip": "定位：题干的关键词是数字概念“周期长度”与“差异”，回原文找年代、小时数等数字密集处。第 6 段集中出现 24 hours、24.5 hours 与 rarely exactly 等表述，一步锁定 E 段。确定答案技巧：判断“略有差异”的依据是原文的两处措辞，一是 “close to, but rarely exactly, 24 hours long”（接近 24 小时，但很少恰好在 24 小时），二是 “In the case of humans, the cycle is typically around 24.5 hours long”（就人类而言，周期通常约为 24.5 小时）。前者说明各类生物都接近 24 小时却不见得正好一致，后者用人类 24.5 小时给出具体例证，两者合起来就是“不同生物之间略有差异”，故选 E。",
          "analysis": "第 6 段（对应字母 E）的核心是确认 24 小时生物周期的存在，并交代其长度特征。原文开头：“But there is no doubting the existence of 24-hour biological cycles – or, rather, ones roughly 24 hours long.”（24 小时生物周期确实存在，更准确地说，是长度大致为 24 小时的周期）。接着写：“Following de Mairan’s pioneering work, other researchers found that when deprived of the cues provided by sunlight, organisms settle down to ‘free-running’ cycles that are close to, but rarely exactly, 24 hours long. In the case of humans, the cycle is typically around 24.5 hours long.”（继 de Mairan 的开创性工作之后，其他研究者发现，被剥夺日光的提示后，生物会进入“自由运行”周期，这种周期接近但很少恰好在 24 小时；就人类而言，周期通常约为 24.5 小时）。题干说“自然周期的长度在不同生物之间略有差异（varies slightly between living things）”，正对应原文 close to, but rarely exactly, 24 hours long（接近但很少恰好 24 小时）加上人类 24.5 小时这一差异实例。注意题干用的是 varies slightly（略有不同），与原文 rarely exactly（很少恰好）方向一致、程度也相当，不是“差异巨大”，因此该陈述与原文完全吻合，段落为 E。",
          "traps": [
            "为什么不选 A（第 2 段）：该段只说生命普遍遵循同一个 24 小时周期并介绍 de Mairan 的实验，没有讨论周期长度在不同生物间的差异。",
            "为什么不选 G（第 8 段）：该段讨论的是细胞内生物钟如何保持同步以及日光、时差等问题，没有对周期长度做跨物种的比较。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "reference to a theory that became popular with the public",
          "translation": "提及一种受到公众欢迎的理论。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "During the 1970s, best-selling books began to emerge claiming such phenomena were manifestations of so-called biorhythms, a set of three cycles governing physical, emotional and intellectual traits."
          },
          "synonyms": [
            "“a theory” 同义替换为原文的 “so-called biorhythms”，即所谓生物节律说（三种周期的理论）",
            "“became popular with the public” 同义替换为原文的 “best-selling books began to emerge”，畅销书大量出现正是公众追捧的直接证据",
            "“reference to” 对应原文对这套说法内容的具体介绍（三种周期分别管身体、情绪与智力，从出生起按 23、28、33 天循环）"
          ],
          "locatingTip": "定位：题干的关键信息是“理论”加“受公众欢迎”。“受公众欢迎”在原文没有原词，最接近的是畅销书 best-selling books，这个词组只出现在第 4 段开头，据此锁定 C 段。确定答案技巧：找到 best-selling books 后，看它后面的动词 began to emerge 与 claiming，两个动作都表明这套说法被大量传播、有市场，而紧随其后的 so-called biorhythms 就是题干所指的 theory。注意不要被第 5 段误导：第 5 段确实再次提到 biorhythms，但那是科学家把它斥为伪科学的批评段，题干问的是“受欢迎”这一层面，所以落在第 4 段。",
          "analysis": "第 4 段（对应字母 C）介绍的是 20 世纪 70 年代兴起并被大众追捧的生物节律说（biorhythms）。原文写道：“During the 1970s, best-selling books began to emerge claiming such phenomena were manifestations of so-called biorhythms, a set of three cycles governing physical, emotional and intellectual traits.”（20 世纪 70 年代，畅销书开始大量出现，声称这类现象是所谓生物节律的表现，即支配身体、情绪与智力三个方面的一套三种周期）。紧接着一句补充：这三种周期从出生那一刻开始，分别每 23 天、28 天和 33 天重复一次，据说会在某个周期或多个周期导致状态不佳时产生“关键日（critical days）”，带来不幸后果。题干中的 a theory 对应 so-called biorhythms（一套三种周期的说法），became popular with the public 则对应 best-selling books began to emerge，书能成为畅销书，正说明公众接受并追捧这套理论。因此答案是 C 段。这里也提示一个匹配题技巧：题干用抽象动词短语（became popular）替换原文的具体事实（畅销书涌现），需要把“事实与结果”翻译成“抽象概括”才能对应上。",
          "traps": [
            "为什么不选 D（第 5 段）：第 5 段提到 biorhythms 是为了驳斥它，科学家斥之为伪科学、Hines 博士复查 130 多项研究后指出大多数研究存在错误，属于“对该理论的批评”，不是“受公众欢迎”。",
            "为什么不选 E（第 6 段）：该段讨论的是确凿存在的 24 小时昼夜节律，并说明其特征，与“受公众欢迎的理论”无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–22 摘要填空（Choose NO MORE THAN TWO WORDS from the passage）",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 22
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "The SCN is able to perceive 19 ________ as a result of connections to the eye.",
          "translation": "由于与眼睛相连，SCN 能够感知 ________。",
          "answer": "daylight",
          "wordClass": "名词（不可数，作 perceive 的宾语，指日光；不加冠词、不变复数）",
          "locating": {
            "paragraph": "7",
            "quote": "Linked to photosensitive cells in the eye, the SCN senses daylight and triggers the release of hormones like melatonin, which keep body functions in synchronization with the time of day."
          },
          "synonyms": [
            "“is able to perceive” 同义替换为原文的 “senses”，原文用感官动词 sense 表示 SCN 能感知光",
            "“as a result of connections to the eye” 同义替换为原文的 “Linked to photosensitive cells in the eye”，Linked to 即“与……相连”，photosensitive cells 即“感光细胞”",
            "“the SCN” 在原文原词复现，为同一个专有名词 suprachiasmatic nucleus 的缩写"
          ],
          "locatingTip": "定位：题干的两个大写专有名词 SCN 与 eye 是极好的定位词，而摘要首句已经给出了 SCN 位于 hypothalamus（下丘脑）这一与第 7 段首句完全一致的信息，据此可以直接跳到第 7 段。确定答案技巧：题干说 SCN 因“与眼睛相连”而能感知某物，回原文找到表达“相连”的说法 Linked to photosensitive cells in the eye，其后的谓语 senses 就是题干的 is able to perceive，则 senses 的宾语 daylight 就是空格答案。填词时注意 NO MORE THAN TWO WORDS 且答案是原文原词 daylight 一个单词，不要写成 sunlight（sunlight 虽在第 6 段出现，但本题依据的句子用的是 daylight，需按原文照填）。",
          "analysis": "摘要第一段是围绕 SCN 展开的概述，对应原文第 7 段。第 7 段开头写：“During the late 1960s, chronobiologists believed they had found the ‘clock’, in the form of the suprachiasmatic nucleus (SCN), a collection of nerves in a region of the brain known as the hypothalamus.”（20 世纪 60 年代末，时间生物学家以为找到了“钟”，即视交叉上核 SCN，也就是大脑中被称为下丘脑的区域里的一组神经）。这与摘要 “Towards the end of the 1960s, research into the SCN, which is located in the hypothalamus, led chronobiologists to believe they had found the internal ‘clock’ at last.” 一一对应。紧接着原文第二句就是本题落点：“Linked to photosensitive cells in the eye, the SCN senses daylight and triggers the release of hormones like melatonin, which keep body functions in synchronization with the time of day.”（SCN 与眼中的感光细胞相连，感知日光，并促使褪黑素等激素释放，从而让身体机能与一天中的时间保持同步）。这句话同时支撑摘要中的两处信息：激素控制身体机能（对应 triggers the release of hormones like melatonin, which keep body functions in synchronization with the time of day），以及本题的“感知”与“与眼睛相连”。因此空格处填 daylight：主语 SCN 由于与眼睛的感光细胞相连，能够感知的是日光。词性上 daylight 为不可数名词，作 perceive 的宾语，不加冠词也不变复数。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Several years later, research involving 20 ________ showed that the timing of their normal actions was regulated by certain 21 ________, or ‘clocks’, in their cells.",
          "translation": "几年之后，涉及 ________ 的研究表明，它们日常行为的时机由细胞内某些 ________（即“钟”）所调控。",
          "answer": "fruit flies",
          "wordClass": "名词短语（复数，昆虫名，作现在分词 involving 的宾语；共两个单词，符合 NO MORE THAN TWO WORDS 限制）",
          "locating": {
            "paragraph": "7",
            "quote": "But in 1971, scientists at the California Institute of Technology working with fruit flies found evidence for something truly amazing."
          },
          "synonyms": [
            "“research involving …” 同义替换为原文的 “scientists … working with fruit flies”，working with 即研究涉及的实验对象",
            "“Several years later” 同义替换为原文的 “in 1971”，相对于上下文交代的 20 世纪 60 年代末，是几年之后",
            "“their normal actions” 同义替换为原文的 “the daily rhythm of their behavior”（日常行为节律），their 指代的正是这些实验对象"
          ],
          "locatingTip": "定位：摘要第二段的抓手是时间与机构。原文第 7 段按 1960 年代末（SCN）、1971 年（果蝇）、1995 年（分离 SCN 神经细胞）、1997 年（CLOCK 基因）的顺序排列，摘要中的 Several years later 对应的正是 1971 年那件事。确定答案技巧：题干说“涉及某对象的研究表明……”，回原文找 1971 年的句子，看到 “scientists at the California Institute of Technology working with fruit flies”，其中 working with 与 research involving 对应，其后的名词 fruit flies 就是空格答案。填写时必须是原文的两个词 fruit flies，写成 fly 则与原文不符；同时注意不要填 California Institute of Technology（那是机构名，且超过两词）。",
          "analysis": "摘要第二段概括的是原文第 7 段后半部分关于“每个细胞里都有钟”的发现链。原文在讲完 SCN 被当作终极起搏器之后写道：“But in 1971, scientists at the California Institute of Technology working with fruit flies found evidence for something truly amazing. Fruit flies appeared to have genes affecting the daily rhythm of their behavior – suggesting that there are ‘clocks’ inside each of their cells.”（但 1971 年，加州理工学院与果蝇打交道的研究者发现了真正令人惊叹的证据：果蝇似乎带有影响其日常行为节律的基因，暗示它们的每个细胞里都有“钟”）。摘要把这一发现拆成两句：第一句“涉及某对象的研究表明，它们日常行为的时机受细胞内某些东西调控”，其中 research involving [20] 对应原文的 scientists … working with [fruit flies]；the timing of their normal actions 对应原文的 the daily rhythm of their behavior。因此第 20 题填 fruit flies。判断时注意两点：一是时间线索 Several years later 与 1971 年必须对齐，摘要上一句讲的是 20 世纪 60 年代末的 SCN 研究；二是单复数与指代，摘要后面用 their 回指这些实验对象，说明答案是可数复数名词短语，而原文 fruit flies 正好是复数形式，语法与语义都吻合。答案由两个词组成，符合 NO MORE THAN TWO WORDS 的字数限制。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Several years later, research involving 20 ________ showed that the timing of their normal actions was regulated by certain 21 ________, or ‘clocks’, in their cells.",
          "translation": "几年之后，涉及 ________ 的研究表明，它们日常行为的时机由细胞内某些 ________（即“钟”）所调控。",
          "answer": "genes",
          "wordClass": "名词（复数，作介词 by 的宾语，与 or ‘clocks’ 构成同位；受 certain 修饰，须与原文复数形式一致）",
          "locating": {
            "paragraph": "7",
            "quote": "Fruit flies appeared to have genes affecting the daily rhythm of their behavior – suggesting that there are ‘clocks’ inside each of their cells."
          },
          "synonyms": [
            "“the timing of their normal actions” 同义替换为原文的 “the daily rhythm of their behavior”，timing 对应 rhythm，normal actions 对应 behavior",
            "“was regulated by …” 同义替换为原文的 “genes affecting …”，affect 即“影响、调控”",
            "“certain …, or ‘clocks’” 同义替换为原文的 “‘clocks’ inside each of their cells”，原文用破折号给出说明，摘要用 or ‘clocks’ 作同位语提示"
          ],
          "locatingTip": "定位：本题与第 20 题共用一个长句，仍锁定第 7 段 1971 年果蝇实验那两句话。确定答案技巧：题干说某物“被细胞内的某种东西（即钟）调控”，而原文说果蝇 “appeared to have genes affecting the daily rhythm of their behavior”（似乎有影响其日常行为节律的基因），并在破折号后补充 “suggesting that there are ‘clocks’ inside each of their cells”。可见承担调控作用、并与“钟”画等号的就是 genes，所以填 genes。注意三点：一是词形必须用原文的复数 genes（原文为复数，且摘要中 certain 后接复数更自然）；二是不要填 gene（单数形式与原文不符）；三是不受 or ‘clocks’ 影响去填 clocks，题干已用 or ‘clocks’ 作解释，空格要填的是被解释的那个本体名词。",
          "analysis": "第 21 题的落点仍是第 7 段 1971 年果蝇实验的结论句：“Fruit flies appeared to have genes affecting the daily rhythm of their behavior – suggesting that there are ‘clocks’ inside each of their cells.”（果蝇似乎带有影响其日常行为节律的基因，这暗示它们的每个细胞里都有“钟”）。摘要写成 “the timing of their normal actions was regulated by certain [21], or ‘clocks’, in their cells”，做了三层改写：把 the daily rhythm of their behavior 概括为 the timing of their normal actions；把 have genes affecting 改写成 was regulated by certain …（被动语态加“被调控”）；把破折号后的 ‘clocks’ inside each of their cells 保留为 or ‘clocks’, in their cells 作同位语解释。三层改写指向同一个名词 genes。从语法上看，空格前是介词 by、后有 or ‘clocks’ 作同位语，需要一个名词（短语）与“钟”等价，而原文明确说“钟”存在于每个细胞内部、由基因体现，故填 genes。回答时必须沿用原文的复数形式 genes，因为原文用的就是复数，且摘要句中 certain 修饰可数名词复数最自然；写成单数 gene 属于词形不符，容易失分。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "Other scientists went on to conduct experiments in the dark that proved that a 22 ________ was maintained by individual SCN cells.",
          "translation": "其他科学家随后在黑暗中所做的实验证明，一种 ________ 由单个 SCN 细胞维持着。",
          "answer": "circadian cycle",
          "wordClass": "名词短语（单数，作 that 从句中被动结构 was maintained 的主语，前有不定冠词 a 限定，由形容词 circadian 修饰名词 cycle；共两个单词，符合 NO MORE THAN TWO WORDS 限制）",
          "locating": {
            "paragraph": "7",
            "quote": "Further evidence for this emerged in 1995, when researchers at Massachusetts General Hospital isolated nerve cells from the SCN, and found they kept up a circadian cycle without help from daylight."
          },
          "synonyms": [
            "“experiments in the dark” 同义替换为原文的 “isolated nerve cells from the SCN … without help from daylight”，即在没有日光（黑暗）条件下进行的实验",
            "“individual SCN cells” 同义替换为原文的 “nerve cells from the SCN”，单个的含义由原文的 they（被分离出来的这些细胞）体现",
            "“was maintained” 同义替换为原文的 “kept up”，两者都表示“维持、持续下去”"
          ],
          "locatingTip": "定位：题干的关键词 experiments in the dark 与 SCN cells，回原文找同时含 SCN 和“黑暗、无日光”的句子，落在第 7 段 1995 年马萨诸塞综合医院那次研究。确定答案技巧：题干说“证明某种东西被单个 SCN 细胞维持着”，原文对应句是 “researchers … isolated nerve cells from the SCN, and found they kept up a circadian cycle without help from daylight”，其中 kept up 即 was maintained，without help from daylight 即 in the dark；被维持的对象是 kept up 的宾语 a circadian cycle，因此空格填 circadian cycle。注意词数上限是两个词，circadian cycle 恰好两个词，不要写成 circadian rhythm（原文用的是 cycle）或多加冠词。",
          "analysis": "摘要最后一句讲的是第 7 段中 1995 年的实验：“Further evidence for this emerged in 1995, when researchers at Massachusetts General Hospital isolated nerve cells from the SCN, and found they kept up a circadian cycle without help from daylight.”（1995 年出现了进一步证据：马萨诸塞综合医院的研究者把 SCN 中的神经细胞分离出来，发现它们在得不到日光帮助的情况下仍能维持昼夜周期）。摘要的三处改写分别是：Other scientists went on to conduct experiments in the dark 对应 isolated nerve cells … without help from daylight（在脱离日光的条件下进行实验）；proved that 对应 and found；a [22] was maintained by individual SCN cells 对应 they kept up a circadian cycle，其中 they 指代被单独分离出来的那些神经细胞，对应题干 individual SCN cells，kept up 对应 was maintained。三者合起来说明被单个 SCN 细胞维持的是 circadian cycle，故第 22 题填 circadian cycle。字数上是两个单词，恰好满足 NO MORE THAN TWO WORDS；拼写上 circadian 由 c-i-r-c-a-d-i-a-n 构成，考场上一旦记不清拼法，也可回到原文照抄，切勿凭发音写成 circardian 之类。另外，这一题再一次说明摘要填空允许把原文主动句改成被动句（they kept up 改成 was maintained by），答题时应以语义对应为准，不要被语态变化困住。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 23–24 多选（Choose TWO letters, A–E）",
      "mode": "per_question",
      "questionRange": {
        "start": 23,
        "end": 24
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Which TWO of the following problems are stated as being linked with the internal ‘clock’? — B: a failure among workers on night-shifts to perform tasks",
          "translation": "（选项 B）夜班工人无力完成本职工作。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "When an individual’s ‘clock’ is knocked out of synchronization through having to work at night or go on long-haul flights, that person can be left utterly unable to think or act."
          },
          "synonyms": [
            "“workers on night-shifts” 同义替换为原文的 “having to work at night”，夜班即夜间工作",
            "“a failure … to perform tasks” 同义替换为原文的 “can be left utterly unable to think or act”，完全无法思考或行动即无力完成任务",
            "“problems … linked with the internal ‘clock’” 同义替换为原文的 “Internal ‘clocks’ clearly cause a lot of hardship” 以及 “‘clock’ is knocked out of synchronization”，明确把问题归因于内部时钟"
          ],
          "locatingTip": "定位：本题题干是全段概括性的设问，需要先找到原文中集中谈“内部时钟带来麻烦”的段落。全文只有第 3 段用 “Internal ‘clocks’ clearly cause a lot of hardship.” 直接点明时钟造成困难，选项中与该段表述对应的才有答案。确定答案技巧：逐项回原文核对，选项 B 的“夜班加无法完成任务”正对应 “having to work at night … that person can be left utterly unable to think or act”，两句都落在第 3 段这一段之内，属于原文明确陈述的问题；另一答案见第 24 题（选项 C，交通事故高峰同样在本段）。多选题的作答策略是先在原文锁定“问题清单”，再把每个选项与清单逐条比对，凡清单中没有出现的信息一律不选。",
          "analysis": "原文第 3 段在解释内部时钟的重要性时，明确列出时钟带来的两类麻烦。第一类是时钟被打乱：“Internal ‘clocks’ clearly cause a lot of hardship. When an individual’s ‘clock’ is knocked out of synchronization through having to work at night or go on long-haul flights, that person can be left utterly unable to think or act.”（内部时钟显然会造成许多困扰。当一个人的“钟”因为必须上夜班或乘坐长途航班而被打乱同步时，这个人可能完全无法思考或行动）。这里 having to work at night 对应选项 B 的 workers on night-shifts，can be left utterly unable to think or act 对应 a failure to perform tasks，所以 B 是原文陈述的、与内部时钟相关的问题。第二类见下一句（对应第 24 题的选项 C）：即使时钟运作正常，它所产生的警觉性自然节律本身也很危险，交通事故统计显示出两个致命高峰。而选项 A（无窗工作场所产出下降）、D（固定周期里某些日子效率下降）、E（情绪波动取决于太阳出现）在文中均无对应：A 与 D 都更接近被否定的生物节律说或从未提及，E 则完全无中生有，因此本题两个答案是 B 和 C。",
          "traps": [
            "为什么不选 A：原文从未提到“没有窗户、进不了自然光的工作场所”，也没说这类场所的产出下降；文中出现的只是 sunlight 作为生物钟的提示线索（第 6、8 段），与工作场所的窗户无关，属于无中生有。",
            "为什么不选 D：以固定周期（23、28、33 天）导致某些日子效率下降的说法，是第 4 段介绍的生物节律说中的“关键日（critical days）”，而第 5 段已明确科学家把生物节律说斥为伪科学，它不属于原文认可的、由内部时钟导致的问题，与题干 stated as being linked with the internal ‘clock’ 不符。",
            "为什么不选 E：原文没有提到情绪波动，也没有把情绪与太阳的出现联系起来；第 3 段列举的问题只有时钟被打乱后的思维行动障碍与交通事故高峰两类。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "Which TWO of the following problems are stated as being linked with the internal ‘clock’? — C: an increase in casualties on the roads at specific times of day",
          "translation": "（选项 C）一天中特定时段的道路交通伤亡增加。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Yet even when these ‘clocks’ work correctly, the natural rhythms of alertness they generate prove dangerous: traffic accident statistics show two deadly peaks, at 4 a.m. and again twelve hours later when people are at their least alert."
          },
          "synonyms": [
            "“an increase in casualties on the roads” 同义替换为原文的 “traffic accident statistics show two deadly peaks”，统计上出现的致命高峰即伤亡增加",
            "“at specific times of day” 同义替换为原文的 “at 4 a.m. and again twelve hours later”，一天中的两个具体时刻",
            "“problems … linked with the internal ‘clock’” 同义替换为原文的 “the natural rhythms of alertness they generate prove dangerous”，they 指内部时钟"
          ],
          "locatingTip": "定位：选项 C 的核心词是 casualties、roads 与 specific times，回原文找交通与时间的信息，第 3 段末句出现 traffic accident statistics 与两个具体时刻 4 a.m. 和十二小时之后，是全文唯一相关处。确定答案技巧：题干问“与内部时钟相关的问题”，原文用 even when these ‘clocks’ work correctly 强调即使时钟正常，其产生的警觉节律本身也很危险（prove dangerous），随即用交通事故统计给出证据，因果关系明确，因此 C 是陈述过的问题。另一答案是第 23 题的 B（夜班工人无力完成任务），同在第 3 段，两题共用同一段落，务必分别核对各自对应的句子。",
          "analysis": "第 3 段末句是本题依据：“Yet even when these ‘clocks’ work correctly, the natural rhythms of alertness they generate prove dangerous: traffic accident statistics show two deadly peaks, at 4 a.m. and again twelve hours later when people are at their least alert.”（然而即使这些“钟”运作正常，它们所产生的警觉性自然节律也被证明是危险的：交通事故统计显示出两个致命高峰，一个在凌晨 4 点，另一个在十二小时之后，那时人们的警觉度最低）。句中 these ‘clocks’ 与前文的内部时钟同指，冒号后的数据正是对 prove dangerous 的说明。选项 C 的 an increase in casualties on the roads 对应 traffic accident statistics show two deadly peaks（deadly peaks 即伤亡高峰），at specific times of day 对应 at 4 a.m. and again twelve hours later，改写关系清晰。与前一句“时钟被打乱导致无法思考或行动”合起来看，原文给出的是两类与内部时钟相关的问题，因此本题两个答案是 B（夜班工作无法完成任务）和 C（特定时段道路伤亡上升）。作答时要注意：选项若只与原文的“现象描述”有关却没有“问题”这层因果关系，就不符合题干 stated as being linked with the internal ‘clock’ 的要求，这也是排除干扰项的关键。",
          "traps": [
            "为什么不选 A：原文没有任何关于“没有自然采光的无窗工作场所产出下降”的表述，该项属于原文未提及。",
            "为什么不选 D：固定周期导致某些日子效率下降属于第 4 段的生物节律说（critical days），第 5 段已指出该理论被科学家斥为伪科学、缺乏事实依据，因此它不是原文所述的内部时钟造成的问题。",
            "为什么不选 E：原文既未讨论情绪波动，也未把情绪同太阳的出现挂钩，属于无中生有。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 25–26 多选（Choose TWO letters, A–E）",
      "mode": "per_question",
      "questionRange": {
        "start": 25,
        "end": 26
      },
      "items": [
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Which TWO of the following issues relating to internal ‘clocks’ remain to be solved, according to information in the passage? — C: the reason for living beings forming a connection with the Sun’s rhythms",
          "translation": "（选项 C）生物与太阳节律建立联系的原因。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "But how do all the biochemical ‘clocks’ inside their cells stay in synchronization and why did organisms bother to acquire a link with sunlight? So far, no-one knows, though there are several theories."
          },
          "synonyms": [
            "“the reason for …” 同义替换为原文的疑问词 “why”，原文直接用 why 提问原因",
            "“living beings” 同义替换为原文的 “organisms”，生物；题干用更书面的说法替换",
            "“forming a connection with the Sun’s rhythms” 同义替换为原文的 “acquire a link with sunlight”，acquire a link 即“建立联系”",
            "“remain to be solved” 同义替换为原文的 “So far, no-one knows”，至今无人知晓即仍未解决"
          ],
          "locatingTip": "定位：题干问“哪些问题仍未解决”，回原文找表示“无人知道、有待研究”的句子。第 8 段中部用 “So far, no-one knows, though there are several theories.” 明确表态，并且它前面的两个问句就是两个悬而未决的问题。确定答案技巧：题干选项 C 讲“生物为何要与太阳节律建立联系”，正对应第一个问句中的 why did organisms bother to acquire a link with sunlight，而 So far, no-one knows 即为“仍未解决”的直接依据，所以选 C。另一答案见第 26 题（选项 D，同一句中的同步机制问题）。作答顺序上，先找 no-one knows 与 several theories 这类“悬置”标记，再倒推它管住了哪几个问题，可以避免被别的段落中已经解决的问题误导。",
          "analysis": "第 8 段在讲完 CLOCK 基因的作用细节后，作者抛出一连串尚未解决的问题，本题的依据句是：“But how do all the biochemical ‘clocks’ inside their cells stay in synchronization and why did organisms bother to acquire a link with sunlight? So far, no-one knows, though there are several theories.”（但这些细胞内的生化“钟”究竟如何保持同步？生物当初又为何要与日光建立联系？到目前为止无人知晓，尽管已有若干理论）。两个问句在 So far, no-one knows 的统辖之下，都属于“仍未解决”的问题。选项 C 的 the reason for living beings forming a connection with the Sun’s rhythms 与第二个问句 “why did organisms bother to acquire a link with sunlight” 完全对应：why 即 the reason for，organisms 即 living beings，acquire a link with sunlight 即 forming a connection with the Sun’s rhythms。紧接着原文说 “For example, sunlight might be useful in keeping the myriad cellular ‘clocks’ in lockstep.”（例如，阳光可能有助于让无数细胞钟步调一致），这只是若干理论之一（several theories 中的一个），进一步印证该问题尚无定论，因此 C 成立。",
          "traps": [
            "为什么不选 A：自由运行周期的精确长度在原文已有交代，第 6 段说自由运行周期“接近但很少恰好 24 小时”，并给出人类“通常约 24.5 小时”，属于已有答案的信息，不是待解决问题。",
            "为什么不选 B：时钟被暂时打乱同步的原因在原文也已说明，第 3 段指出是由于上夜班或长途飞行，原文把它当作已知现象来描述，并未列为未知问题。",
            "为什么不选 E：各种生物体内“钟”的位置在原文已经明确，第 7 段说它们存在于每个细胞内部，第 8 段也说 circadian clocks exist throughout our bodies，第 9 段更指出蓝细菌等各类生物都有时钟系统，因此不属于未解决的问题。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Which TWO of the following issues relating to internal ‘clocks’ remain to be solved, according to information in the passage? — D: the way in which all ‘clocks’ in a single organism are able to stay in step with one another",
          "translation": "（选项 D）同一生物体内所有“钟”彼此保持同步的方式。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "But how do all the biochemical ‘clocks’ inside their cells stay in synchronization and why did organisms bother to acquire a link with sunlight? So far, no-one knows, though there are several theories."
          },
          "synonyms": [
            "“all ‘clocks’ in a single organism” 同义替换为原文的 “all the biochemical ‘clocks’ inside their cells”，指同一生物体内无数的细胞钟",
            "“are able to stay in step with one another” 同义替换为原文的 “stay in synchronization”，in step with one another 即彼此同步",
            "“the way in which” 同义替换为原文的疑问词 “how”，说明题干问的是机制或方式",
            "“remain to be solved” 同义替换为原文的 “So far, no-one knows”，即目前尚无答案"
          ],
          "locatingTip": "定位：与第 25 题同源，都在第 8 段那个双问句加 So far, no-one knows 的结构里。确定答案技巧：题干选项 D 说的是“体内所有钟如何彼此保持一致”，对应第一个问句 how do all the biochemical ‘clocks’ inside their cells stay in synchronization；由于该问句与后一个问句同被 So far, no-one knows 覆盖，所以它属于仍未解决的问题。另一答案是第 25 题的 C（生物为何与阳光建立联系），两题共用同一句，作答时要分别确认对应关系，而不是看到关键词就机械选两个相邻的位置。",
          "analysis": "本题与第 25 题共用第 8 段的同一处依据：“But how do all the biochemical ‘clocks’ inside their cells stay in synchronization and why did organisms bother to acquire a link with sunlight? So far, no-one knows, though there are several theories.”（这些细胞内部的生化“钟”是如何全部保持同步的？生物又为何要与日光建立联系？到目前为止无人知晓，尽管已有若干理论）。第一个问句正是选项 D 的对应：how 对应 the way in which，all the biochemical ‘clocks’ inside their cells 对应 all ‘clocks’ in a single organism，stay in synchronization 对应 stay in step with one another。其后紧随的 So far, no-one knows 与 several theories 表明该机制尚未阐明，故 D 是待解决问题之一。结合第 25 题可知本题答案组合为 C 与 D：一个问“为什么”，一个问“怎么做”，两句合在一个 and 连接的并列问句中，被同一句 no-one knows 一并覆盖，这正是命题者设置“双选同一句”的常见手法。",
          "traps": [
            "为什么不选 A：周期的精确长度在原文已有说明（自由运行周期接近但不恰好 24 小时，人类约 24.5 小时），属于已解决信息。",
            "为什么不选 B：同步被打乱的原因已经在第 3 段给出（夜间工作、长途飞行），原文陈述明确，不属于未解决问题。",
            "为什么不选 E：时钟的位置在原文已经清楚（每个细胞内部、遍布全身、各类生物都有），因此“各类生物中钟的位置”并非悬而未决的问题。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
