(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-25", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-25",
  "meta": {
    "examId": "p2-high-25",
    "title": "Will Eating Less Make You Live Longer 节食与长寿",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–19 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 19
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "a reference to studies based on the same level of calorie reduction with different animals",
          "translation": "提到了以相同的热量削减幅度、却分别以不同动物为研究对象的研究",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In mice, many experiments had come to the same finding: feed them a diet with 30% fewer calories and see a lifespan extension of 40%. The monkey trials were set up in a similar way: researchers took the calorie content of a standard monkey diet, cut it by 30%"
          },
          "synonyms": [
            "“the same level of calorie reduction” 对应原文两处相同的削减幅度：小鼠实验 “feed them a diet with 30% fewer calories”，猴子实验 “cut it by 30%”",
            "“with different animals” 对应原文先后出现的小鼠 “mice” 与恒河猴 “rhesus monkeys / The monkey trials”，即同一削减幅度被用在两种动物身上",
            "“a reference to studies” 对应原文 “many experiments had come to the same finding” 与 “The monkey trials were set up in a similar way”，两句都在介绍研究的设置"
          ],
          "locatingTip": "定位：本题最快的定位词是数字 30%。全文只有 B 段把“小鼠”和“猴子”两种动物放在一起讲研究方法，并且两次给出 30% 这一削减幅度；扫读时盯住百分数加动物名，命中率极高。确定答案技巧：题干要求两条信息同时成立——“削减幅度相同”和“动物不同”。B 段先说小鼠实验中把热量减少 30%，再说猴子试验用同样办法（The monkey trials were set up in a similar way）把标准猴粮的热量砍掉 30%，两个条件在同一段内齐备，故选 B。注意不要被 C 段误导：C 段只报告结果，完全没有提到 30% 这个数字。",
          "analysis": "B 段是全文交代“两组试验怎么做的”段落。前两句先讲小鼠：“In mice, many experiments had come to the same finding: feed them a diet with 30% fewer calories and see a lifespan extension of 40%.”（在小鼠身上，许多实验都得出同一结论：喂给它们热量少 30% 的食物，寿命就延长 40%）。第三句转向猴子：“The monkey trials were set up in a similar way: researchers took the calorie content of a standard monkey diet, cut it by 30% (while continuing to supply all essential nutrients) and monitored whether those monkeys lived longer, healthier lives than those on the standard diet.”（猴子试验的设置方式类似：研究者取标准猴粮的热量，砍掉 30%，同时继续供应全部必需营养素，然后观察这些猴子是否比吃标准食物的猴子活得更久、更健康）。题干拆成两个信息点：一是 same level of calorie reduction，对应两处 30%；二是 different animals，对应 mice 与 rhesus monkeys。B 段首句还写到两组试验的起点时间（late 1980s），进一步坐实这一段就是在讲研究设置本身，因此答案选 B。",
          "traps": [
            "为什么不是 C：C 段报告的是 2009 年和 2012 年两组试验各自的结果（威斯康星的猴子活得更久、NIA 的猴子没有更长寿），通篇没有交代研究所用的热量削减幅度，更没有把小鼠与猴子并列比较。",
            "为什么不是 D：D 段讲的是威斯康星研究如何把猴子分成对照组与限食组（先让所有猴子随便吃，几个月后再分组），讨论的是同一物种内部的对照处理，不涉及“不同动物使用相同削减幅度”。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a comment that some control monkeys in one study reached an older age than normal for animals of their kind",
          "translation": "有一段评论指出，某项研究中的一些对照组猴子活到了比同类动物正常寿命更大的年龄",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Indeed, Anderson points out that several of the NIA control monkeys have lived past the age of 40, far exceeding the 27-year average lifespan for captive rhesus monkeys."
          },
          "synonyms": [
            "“some control monkeys in one study” 对应原文 “several of the NIA control monkeys”（NIA 研究中几只对照组猴子）",
            "“reached an older age” 对应原文 “have lived past the age of 40”（活过了 40 岁）",
            "“than normal for animals of their kind” 对应原文 “far exceeding the 27-year average lifespan for captive rhesus monkeys”（远超圈养恒河猴 27 岁的平均寿命）",
            "“a comment” 对应原文的引出方式 “Anderson points out”，说明这是研究者的一句评论而不是研究数据本身"
          ],
          "locatingTip": "定位：题干里的核心是“对照组猴子的年龄超过同类正常水平”，年龄与寿命是关键字，回原文找数字 40、27 所在的句子（G 段倒数第二句）即可一步锁定。确定答案技巧：这类题一定要分清“对照组（control）”。G 段说的是 NIA 的对照组猴子（the NIA control monkeys）活过 40 岁，远超圈养恒河猴 27 岁的平均寿命，正好对应题干两个要素：some control monkeys 与 one study（NIA）。注意别掉进 D 段：D 段虽然也出现 control，但讲的是分组方法而不是年龄。",
          "analysis": "G 段是 Anderson 对 NIA 研究设计的反驳。段中先引数据：“Their older female control monkeys, for example, weighed nearly 20% less than the national average.”（例如，他们那些年长的雌性对照组猴子体重比全国平均值低了近 20%），紧接着就是本题定位句：“Indeed, Anderson points out that several of the NIA control monkeys have lived past the age of 40, far exceeding the 27-year average lifespan for captive rhesus monkeys.”（事实上，Anderson 指出 NIA 的几只对照组猴子已经活过了 40 岁，远超圈养恒河猴 27 岁的平均寿命）。题干中的 some 对应 several，control monkeys 原词复现，reached an older age than normal for animals of their kind 则完整对应 far exceeding the 27-year average lifespan for captive rhesus monkeys（远超同类平均寿命）。本句还是 Anderson 的口头评论（Anderson points out），与题干的 a comment 严丝合缝，因此答案是 G。",
          "traps": [
            "为什么不是 D：D 段确实提到猴子，但说的是试验开始时猴子的生命阶段（monkeys in early adulthood）和之后的分组，讲的是研究起点与分组方式，没有涉及任何猴子活到了多大年龄。",
            "为什么不是 H：H 段由 Heilbronn 评论两组对照猴，但她谈的是体重与胖瘦（leaner、a little bigger），属于体况评价，与年龄、寿命无关。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "distinctions between the types of food in each study that may have led to a contrast in findings",
          "translation": "两项研究在食物种类上的差异，而这种差异可能造成了两者研究结果的差异",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Second, whereas the Wisconsin monkeys were given highly processed food high in sucrose, making it easy to standardise, the NIA diet was based on whole grains, fish oils, and was very low in sugar. These different settings for the normal control diet may provide an explanation of why the two groups showed different results."
          },
          "synonyms": [
            "“distinctions between the types of food in each study” 对应原文对两种饲料的对比：威斯康星用 “highly processed food high in sucrose”，NIA 用 “whole grains, fish oils, and was very low in sugar”",
            "“may have led to a contrast in findings” 对应原文 “may provide an explanation of why the two groups showed different results”",
            "“the types of food” 对应原文的 “the NIA diet / the normal control diet”，即研究中所喂饲料的类型"
          ],
          "locatingTip": "定位：题干的关键信息是 food 与 findings 之间的因果关系。E 段末尾一句直接写 “These different settings for the normal control diet may provide an explanation of why the two groups showed different results.”，其中 explanation 与 results 就是题干 may have led to 与 findings 的对应，扫读时盯住 diet、sugar 这类食物词即可。确定答案技巧：段落信息匹配题中，出现 may / possibly 等推测语气的句子往往就是“可能造成某结果”类题干的出处；本段用 whereas 把两种食物并列对照，再用 These different settings 收束，正好扣住 distinctions 与 may have led to。",
          "analysis": "E 段讲 NIA 研究与威斯康星研究的两点不同，第一点是食量（对照组是否被限食），第二点就是本题的食物种类：“Second, whereas the Wisconsin monkeys were given highly processed food high in sucrose, making it easy to standardise, the NIA diet was based on whole grains, fish oils, and was very low in sugar.”（第二点，威斯康星的猴子吃的是蔗糖含量很高的高度加工食品，便于标准化，而 NIA 的饲料以全谷物和鱼油为主，糖分很低）。紧接着作者总结：“These different settings for the normal control diet may provide an explanation of why the two groups showed different results.”（这些对正常对照饲料的不同设置，或许能解释两组为何得出不同结果）。题干的两层信息由此完整落地：distinctions between the types of food 对应 processed food high in sucrose 与 whole grains, fish oils, low sugar 的对照；may have led to a contrast in findings 对应 may provide an explanation of why the two groups showed different results。注意本题的“差异”是“吃什么”，不是“吃多少”，这正是它与 G 段的区分点。",
          "traps": [
            "为什么不是 G：G 段讨论的是 NIA 对照组猴子“吃得太少”（were not fed enough），争的是食量问题，而不是食物种类；段中没有任何关于饲料成分的对比。",
            "为什么不是 F：F 段谈的是威斯康星对照组体重超标（weighed up to 10% more than average），这是食量造成的体况结果，同样不涉及两组食物种类的差异，也没有解释研究结果分歧。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "examples of health problems which monkeys on calorie-restricted diets were less likely to get",
          "translation": "限食饮食的猴子更不易患上的健康问题的例子",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Compared to well-fed control animals, the lean monkeys were living longer and suffering less from the diseases of ageing: diabetes, heart disease and brain diseases."
          },
          "synonyms": [
            "“examples of health problems” 对应原文冒号后列出的三项具体疾病 “diabetes, heart disease and brain diseases”",
            "“monkeys on calorie-restricted diets” 对应原文的 “the lean monkeys”，即被限食而体形清瘦的猴子",
            "“were less likely to get” 对应原文的 “suffering less from the diseases of ageing”"
          ],
          "locatingTip": "定位：题干要的是“具体疾病的例子”，这类题一定出现在列举处。全文用冒号列举病名的只有 C 段（diabetes, heart disease and brain diseases），扫读时盯住冒号与逗号并列的医学名词即可。确定答案技巧：题干里的 examples 是关键限定词——A 段只笼统说 age-related disease 和疾病易感性，没有举例子，所以不能选；C 段既说 suffering less（更少患病），又给出三种具体病名，两个条件同时满足，故选 C。",
          "analysis": "C 段交代两项试验的初步结果，其中威斯康星的结果对限食有利：“Compared to well-fed control animals, the lean monkeys were living longer and suffering less from the diseases of ageing: diabetes, heart disease and brain diseases.”（与吃得饱的对照组动物相比，这些清瘦的猴子活得更久，患老年病的几率也更低：糖尿病、心脏病和脑部疾病）。题干拆成三个信息点：monkeys on calorie-restricted diets 对应 the lean monkeys；were less likely to get 对应 suffering less from；examples of health problems 则要靠冒号后的 diabetes, heart disease and brain diseases 三项具体病名来满足。全文唯一给出疾病实例的地方就是这里，因此答案选 C。做题时还要注意题干只问“限食猴子更少得哪些病”，不涉及“两项研究是否结论一致”，不要因为 C 段末尾提到 NIA 的相反结论而转移视线。",
          "traps": [
            "为什么不是 A：A 段只抽象地说限食能 “delaying ageing and the onset of age-related disease”，以及 “increased disease vulnerability”，全是概括性说法，没有列举任何一种具体疾病，无法满足题干的 examples。",
            "为什么不是 F：F 段虽然也说限食动物 “suffered fewer diseases”，但同样没有给出任何病名，而且该段的落点是体重超标问题，重点不在疾病种类。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "a researcher's negative opinion of a calorie-restricted diet",
          "translation": "某位研究者对限食饮食的负面看法",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Rozalyn Anderson, of the Wisconsin team, says the research is not intended as a recommendation of calorie restriction. 'I find the idea monumentally unattractive!' she says."
          },
          "synonyms": [
            "“a researcher's negative opinion” 对应原文的直接引语 “I find the idea monumentally unattractive!”，monumentally unattractive 是极强烈的否定评价",
            "“a researcher” 对应原文点明的说话人 “Rozalyn Anderson, of the Wisconsin team”",
            "“a calorie-restricted diet” 对应原文的 “calorie restriction”，即同一概念的两种表述"
          ],
          "locatingTip": "定位：题干的关键词是 negative opinion，段落信息匹配题遇到“观点/态度”类题干，最快的方法是扫读各段中的引号与评价性形容词。全文态度词最强烈的就是 A 段的 monumentally unattractive。确定答案技巧：看清评价的对象是不是限食本身——Anderson 明确说研究“不是要推荐限食”（not intended as a recommendation），紧接着用 I find the idea monumentally unattractive 表达个人厌恶，正是对限食饮食的负面看法，故选 A。",
          "analysis": "A 段先介绍限食能延长寿命的既有证据，再引用威斯康星团队 Rozalyn Anderson 的话：“Rozalyn Anderson, of the Wisconsin team, says the research is not intended as a recommendation of calorie restriction. 'I find the idea monumentally unattractive!' she says.”（威斯康星团队的 Rozalyn Anderson 说，这项研究并不是要推荐限食。她说：“我觉得这个想法极其没有吸引力！”）。题干的两个要件在这里同时满足：一是 a researcher（Anderson 被明确点名），二是 negative opinion（monumentally unattractive 是带有强烈感情色彩的贬义评价，且句中的 she says 说明这是她个人的负面看法）。判断时要留意，Anderson 虽然研究限食，但她的负面意见针对的是“让人去限食”这件事本身，而不是针对研究数据，这与题干 a calorie-restricted diet 完全对应，因此答案是 A。",
          "traps": [
            "为什么不是 H：H 段里 Heilbronn 的态度是正面的，她最后说 “I think these studies suggest calorie restriction definitely will increase lifespan”，与题干的 negative opinion 相反。",
            "为什么不是 F：F 段中 Mattison 的话虽然在讨论限食，但说的是超重者减少热量“will obviously benefit”，是对限食效果的肯定，不含任何否定态度。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "a reference to the stage in the monkeys' lives at which research commenced in one study",
          "translation": "提到了某项研究中研究开始时猴子所处的生命阶段",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The Wisconsin study began with monkeys in early adulthood."
          },
          "synonyms": [
            "“the stage in the monkeys' lives” 对应原文的 “in early adulthood”（处于成年早期）",
            "“research commenced” 对应原文的 “The Wisconsin study began”（研究开始）",
            "“in one study” 对应原文明确限定的 “The Wisconsin study”"
          ],
          "locatingTip": "定位：题干关键词是 began / commenced（开始）与 stage of life（生命阶段），回原文找“研究起点加生命阶段”的句子，落在 D 段第三句。确定答案技巧：把题干的 commenced 与原文的 began 直接对应，再看 began with 后面跟的是猴子处于什么阶段——原文写 in early adulthood，正是“生命阶段”；同时原文用 The Wisconsin study 限定了“某项研究”（one study），两个限定都吻合，故选 D。注意区分“时间点”与“生命阶段”：B 段给的是 late 1980s 这个年代，不是猴子自身的生命阶段。",
          "analysis": "D 段解释威斯康星与 NIA 结论分歧的原因，先交代威斯康星研究的设计：“The Wisconsin study began with monkeys in early adulthood. Initially, all the monkeys were allowed to eat as much as they liked.”（威斯康星研究开始时用的是处于成年早期的猴子。起初所有猴子都可以随便吃）。题干中的 research commenced 对应 began，in one study 对应 The Wisconsin study（原文只提到威斯康星这一项研究此时开始），the stage in the monkeys' lives 对应 in early adulthood，三处一一对应，因此答案是 D。这里要特别小心两个干扰：一是 B 段首句的 “Both groups started long-term trials ... in the late 1980s” 讲的是研究开始的年份而不是猴子的人生阶段；二是 G 段出现的 “older female control monkeys” 虽然涉及年龄，但那是研究过程中的结果数据，不是研究起点的阶段。",
          "traps": [
            "为什么不是 B：B 段首句确实说两组试验开始于 “the late 1980s”，但那是日历年份（时间点），题干问的是猴子当时处于生命的哪个阶段，两者不是一回事。",
            "为什么不是 G：G 段出现了 “older female control monkeys” 与 40 岁、27 岁寿命等年龄信息，但这些是实验结果与寿命对比，与“研究开始时猴子处于什么阶段”无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–23 人物观点匹配（Match each statement with the correct researcher）",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 23
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "It is good that the two studies took dissimilar approaches.",
          "translation": "两项研究采用了不同的方法，这是件好事。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "The fact the two studies were set up differently, asking the same question in different ways — I think we will gain maximally from that."
          },
          "synonyms": [
            "“took dissimilar approaches” 对应原文 “were set up differently, asking the same question in different ways”",
            "“It is good that …” 对应原文 “I think we will gain maximally from that”，即 Anderson 认为这种差异能带来最大收益",
            "说话人由原文 “Anderson predicts” 点明，即 List of Researchers 中的 A Rozalyn Anderson"
          ],
          "locatingTip": "定位：先在题干里锁定两个抽象点——“方法不同”和“这样很好”。原文末段 I 的最后一句同时具备：the two studies were set up differently（方法不同）与 we will gain maximally（收获最大、即好处）。确定答案技巧：人物匹配题的关键是找到句子的归属人。该句由 Anderson 说出口，而选项中 A 就是 Rozalyn Anderson，故选 A。注意本题用了 NB You may use any letter more than once，同一字母可以重复使用，不要因为前面某题用过 A 就排除它。",
          "analysis": "I 段末尾是 Anderson 的总结性发言：“‘The fact the two studies were set up differently, asking the same question in different ways — I think we will gain maximally from that.'”（“两项研究设置方式不同，用不同方式追问同一个问题——我认为我们恰恰能从中获得最大收获。”）。这句话表达对研究设计差异的正面评价：set up differently 对应题干的 took dissimilar approaches，gain maximally from that 对应题干的 It is good（能获得最大收益当然是好事）。发言人由原文 Anderson predicts 点明，对应列表中的 A Rozalyn Anderson。本段前半句也提供了背景支持：“the two studies were set up differently”，说明两条研究路线并存并非坏事，做题时可据此确认态度方向。",
          "traps": [
            "为什么不是 B（Julie Mattison）：她的观点出现在 F 段，谈的是“每天去快餐店的超重者如果热量减少 30% 显然会受益”，针对的是某类人群的限食效果，与两项研究方法是否不同毫无关系。",
            "为什么不是 C（Leonie Heilbronn）：H 段中她虽然也认可威斯康星一方的结论，但她发言的重点是两组研究的对照饲料“都不标准”（neither group had the right notion of a standard diet），评价的是饲料设计本身，没有对“两个研究采用不同方法”表示赞赏。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Neither study used diets that are typical for monkeys.",
          "translation": "两项研究所用的饮食都不是猴子典型的饮食。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "However, neither group had the right notion of a standard diet according to Leonie Heilbronn, who researches calorie restriction and healthy ageing at the University of Adelaide in Australia."
          },
          "synonyms": [
            "“Neither study” 对应原文 “neither group”，即两个研究组都没有例外",
            "“used diets that are typical for monkeys” 对应原文 “had the right notion of a standard diet”，即两组对“标准饮食”的理解都不正确",
            "观点持有者由原文直接点名 “according to Leonie Heilbronn”，即选项 C"
          ],
          "locatingTip": "定位：题干里的 neither 是极显眼的否定限定词，回原文搜 neither，只有 H 段首句出现。确定答案技巧：人物匹配题看到 “according to 某人” 就等于答案写在脸上——本句的 according to Leonie Heilbronn 直接对应选项 C Leonie Heilbronn，题干中“两项研究都不标准”正对应原文 neither group had the right notion of a standard diet。",
          "analysis": "H 段首句是本题的定位与判分句：“However, neither group had the right notion of a standard diet according to Leonie Heilbronn, who researches calorie restriction and healthy ageing at the University of Adelaide in Australia.”（不过，据澳大利亚阿德莱德大学研究限食与健康老龄化的 Leonie Heilbronn 说，两组对什么才算标准饮食都没有正确的认识）。题干说“两项研究都没有用猴子典型的饮食”，正好是 neither group had the right notion of a standard diet 的概括：neither group 对应 Neither study，had the right notion of a standard diet 的否定则对应 used diets that are typical for monkeys 的否定。紧接着的两句还具体解释了她为什么这么说：NIA 的对照猴“leaner than a control monkey should be”（比应有的对照组更瘦），而威斯康星的对照猴“a little bigger than they had to be”（比应该的更胖），说明两组饲料确实都不典型。原文用 according to 明确指出说话人，对应选项 C。",
          "traps": [
            "为什么不是 A（Rozalyn Anderson）：G 段中她批评的是 NIA 把对照组猴子喂得太少（were not fed enough），属于食量问题，她并没有说两组研究的饮食“都不是猴子典型饮食”。",
            "为什么不是 B（Julie Mattison）：作为 NIA 研究的负责人，她只在 F 段出现过一次发言，讲的是超重者减少热量会受益，完全没有评价两组研究的饮食是否典型。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "Calorie restriction is a method of finding out about health issues connected with ageing.",
          "translation": "限食是一种用来探究与衰老相关的健康问题的方法。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "We study it because it is so effective at delaying ageing and the onset of age-related disease. It's a way to tease out what it is that creates increased disease vulnerability as a function of age."
          },
          "synonyms": [
            "“a method of finding out about” 对应原文 “a way to tease out”（一种探究、梳理出某事物的途径）",
            "“health issues connected with ageing” 对应原文 “increased disease vulnerability as a function of age” 与 “ageing and the onset of age-related disease”",
            "说话人由原文 “Rozalyn Anderson, of the Wisconsin team” 指明，即选项 A"
          ],
          "locatingTip": "定位：题干的关键词组是 method（方法）与 health issues connected with ageing（与衰老有关的健康问题）。回原文找“把限食当作一种研究手段”的表述，只有 A 段末尾那句 “It's a way to tease out …”。确定答案技巧：tease out 意为“梳理出、探究出”，正是题干的 finding out about；a function of age 意为“随年龄变化的”，对应题干的 connected with ageing。这句话出自 Rozalyn Anderson，故选 A。",
          "analysis": "A 段末尾是 Anderson 解释为什么要研究限食：“‘We study it because it is so effective at delaying ageing and the onset of age-related disease. It's a way to tease out what it is that creates increased disease vulnerability as a function of age.'”（“我们研究它，是因为它在延缓衰老和推迟老年病发作方面极为有效。它是一种途径，可以梳清究竟是什么让随年龄增长而出现的疾病易感性升高。”）。题干把这段话概括为：限食是一种探究与衰老相关健康问题的方法。对应关系很清晰：a way to tease out 对应 a method of finding out about；increased disease vulnerability as a function of age 对应 health issues connected with ageing。这句的主语是 Anderson 本人（We study it），原文在段中已明确她是威斯康星团队的 Rozalyn Anderson，对应选项 A，因此答案是 A。",
          "traps": [
            "为什么不是 B（Julie Mattison）：她在 F 段的发言只谈超重者减少热量的好处，没有把限食描述为研究衰老相关疾病的手段；文中对她的介绍是 NIA 研究负责人（head of the NIA study），与本题所述方法无关。",
            "为什么不是 C（Leonie Heilbronn）：H 段中她评价的是两组研究的标准饮食不准确，并给出限食能延长寿命的判断，属于对研究结果的态度，而不是把限食当作探究衰老疾病的“方法”。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Calorie reduction will have a positive effect on people who have unhealthy diets.",
          "translation": "减少热量会对饮食不健康的人产生积极影响。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Julie Mattison, head of the NIA study, observes that an overweight person who goes to a fast food restaurant every day will obviously benefit if their calories are cut back by 30%."
          },
          "synonyms": [
            "“people who have unhealthy diets” 对应原文 “an overweight person who goes to a fast food restaurant every day”（每天去快餐店的超重者）",
            "“will have a positive effect on” 对应原文 “will obviously benefit”（显然会受益）",
            "“Calorie reduction” 对应原文 “their calories are cut back by 30%”",
            "说话人由原文直接点名 “Julie Mattison, head of the NIA study”，即选项 B"
          ],
          "locatingTip": "定位：题干的落点是“对饮食不健康的人有好处”，回原文找人+群体+受益的组合，只有 F 段末句同时出现人物（Julie Mattison）与特定人群（每天去快餐店的超重者）。确定答案技巧：人物匹配题里，人名一旦出现在定位句中，答案基本就锁定了——本句主语就是 Julie Mattison，对应选项 B。再核对态度方向：obviously benefit 是明确的正面评价，与题干 positive effect 一致，双重确认选 B。",
          "analysis": "F 段末句是本题的定位与判分句：“Julie Mattison, head of the NIA study, observes that an overweight person who goes to a fast food restaurant every day will obviously benefit if their calories are cut back by 30%.”（NIA 研究负责人 Julie Mattison 指出，一个每天去快餐店的超重者如果热量被减少 30%，显然会受益）。题干的两层含义都能对上：people who have unhealthy diets 对应 an overweight person who goes to a fast food restaurant every day，这是典型的饮食不健康人群；will have a positive effect 对应 will obviously benefit。原文行文是主动句且直接给出人名 Julie Mattison，对应 List of Researchers 中的 B，因此答案是 B。注意不要与 q9 混淆：q9 是“用限食当作研究手段”，q10 是“限食对特定人群的益处”，两题都出自限食的正面评价，但说话人不同。",
          "traps": [
            "为什么不是 A（Rozalyn Anderson）：A 段中她对让人限食这件事持强烈否定态度（monumentally unattractive），不可能说限食对某类人有益，态度方向正好相反。",
            "为什么不是 C（Leonie Heilbronn）：H 段中她的判断是“限食肯定能延长寿命”，针对的是研究结论与整体人群，并没有专门针对“饮食不健康的人”这一群体作出评价。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 摘要填空（Choose ONE WORD ONLY from the passage）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "Monkeys whose calories were restricted suffered fewer diseases that are associated with the 24 ________ process.",
          "translation": "热量受到限制的猴子更少患上与第 24 空（衰老）过程相关的疾病。",
          "answer": "ageing",
          "wordClass": "动名词（-ing 形式；此处不作名词性成分而作前置定语修饰其后的 process，构成复合名词 ageing process；原文以 related to ageing 的形式出现，答案照抄原文词形 ageing，不加冠词、不改写）",
          "locating": {
            "paragraph": "9",
            "quote": "Both studies agree that cutting calories is beneficial to health — in both cases the calorie-restricted monkeys had fewer diseases related to ageing."
          },
          "synonyms": [
            "“Both studies agree that it is beneficial to cut calories, in terms of health” 对应原文 “Both studies agree that cutting calories is beneficial to health”",
            "“diseases that are associated with the … process” 对应原文 “diseases related to ageing”，其中 associated with 同义替换 related to",
            "“suffered fewer diseases” 对应原文 “had fewer diseases”，题干的过去式表述与原文的限食猴子状态一一对应"
          ],
          "locatingTip": "定位：摘要的标题 Agreement between the two studies 是绝佳路标，直接指向原文末段 I。该段首句以 Both studies agree 开头，与摘要首句“两项研究一致认为”完全对应，说明第 24 空就在这一句里。确定答案技巧：空格前后的结构是 “associated with the ______ process”，需要一个能修饰 process 的词。原文写 “diseases related to ageing”，把 ageing 移到 process 之前正好构成 ageing process（衰老过程），语义与语法都通顺，且符合 ONE WORD ONLY 的字数限制，因此填 ageing。注意抄写时保留英式拼写 ageing，不要写成 aging。",
          "analysis": "I 段首句是摘要第一段的来源：“Both studies agree that cutting calories is beneficial to health — in both cases the calorie-restricted monkeys had fewer diseases related to ageing.”（两项研究都同意减少热量对健康有益——在两种情况下，限食的猴子患与衰老有关的疾病都更少）。摘要把它拆成两句：前一句复述“cutting calories is beneficial to health”，后一句把 “had fewer diseases related to ageing” 改写成 “suffered fewer diseases that are associated with the 24 ______ process”，于是原本作后置定语的 related to ageing 变成了前置修饰语，空格需要补的词就是 ageing。从词性看，ageing 在此为动名词，可作定语修饰 process；从词数看，ONE WORD ONLY 要求只填一个词，ageing 一个词即满足；从拼写看，原文用的是英式 ageing，答案照抄即可。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Anderson and Mattison have undertaken research to determine if a calorie-restricted diet increases primates' 25 ________.",
          "translation": "Anderson 与 Mattison 已开展研究，以确定限食饮食是否会增加灵长类动物的第 25 空（寿命）。",
          "answer": "lifespan",
          "wordClass": "名词（单数，指“寿命”，在句中作 increases 的宾语，被所有格 primates' 修饰；答案照抄原文词形 lifespan，不变复数、不加冠词）",
          "locating": {
            "paragraph": "9",
            "quote": "As to the question of whether calorie restriction extends lifespan in primates, Anderson and Mattison are currently working together to compare the two studies' raw data."
          },
          "synonyms": [
            "“have undertaken research” 对应原文 “are currently working together to compare the two studies' raw data”（正在合作研究比对原始数据）",
            "“to determine if” 对应原文 “As to the question of whether”，即两人要弄清的问题",
            "“a calorie-restricted diet increases primates' …” 对应原文 “calorie restriction extends lifespan in primates”，increases 同义替换 extends"
          ],
          "locatingTip": "定位：题干出现了两个大写人名 Anderson 与 Mattison，这两个名字在全文中只同时出现在末段 I，扫读到 “Anderson and Mattison are currently working together” 即可停下。确定答案技巧：空格处于所有格 primates' 之后、句末句号之前，与原文 “extends lifespan in primates” 中的宾语 lifespan 相对应；题干把原文的 in primates 提前改写成 primates' 作前置定语，被移动的成分是 primates，而空格要填的是被 extends 作用的对象 lifespan。全篇讨论的核心话题就是限食能否延长寿命，lifespan 也符合摘要主题，故填 lifespan（一个词）。",
          "analysis": "I 段第二、三句是本题的来源：“As to the question of whether calorie restriction extends lifespan in primates, Anderson and Mattison are currently working together to compare the two studies' raw data. They plan to co-publish a joint analysis.”（至于限食能否延长灵长类寿命这一问题，Anderson 和 Mattison 目前正合作比对两项研究的原始数据，并计划联合发表分析结果）。题干的改写逻辑是：have undertaken research 对应 are currently working together to compare … raw data；to determine if 对应 As to the question of whether；increases primates' ______ 对应 extends lifespan in primates。原文的 extends 与题干的 increases 属同义替换，被“延长”的对象就是 lifespan，因此答案是 lifespan。词性上 lifespans 虽可数，但此处为泛指灵长类的寿命、且原文用单数，故不加复数；空格前已有所有格 primates'，不需要再补冠词或介词。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Although there is a 26 ________ between the two sets of data, Anderson believes they will help researchers reach a better understanding.",
          "translation": "尽管两组数据之间存在第 26 空（矛盾），Anderson 相信它们能帮助研究者获得更好的理解。",
          "answer": "conflict",
          "wordClass": "名词（可数，单数，表示两组数据之间的“矛盾、冲突”；本空在 there is 结构中作主语，空格前有不定冠词 a，故用单数形式，答案照抄原文词形 conflict）",
          "locating": {
            "paragraph": "9",
            "quote": "The current data conflict will ultimately provide deeper insights into ageing, Anderson predicts."
          },
          "synonyms": [
            "“between the two sets of data” 对应原文 “The current data conflict”，conflict 本身就表示数据之间的矛盾关系",
            "“reach a better understanding” 对应原文 “provide deeper insights into ageing”（带来更深入的认识）",
            "“Anderson believes” 对应原文 “Anderson predicts”，都是引出 Anderson 的判断"
          ],
          "locatingTip": "定位：摘要末句出现了 Anderson 这个名字，回原文末段找 Anderson 对数据的判断句，即 “The current data conflict will ultimately provide deeper insights into ageing, Anderson predicts.”。确定答案技巧：空格前是 a、后是 between the two sets of data，需要一个可数名词单数并含“不一致”之意。原文的 conflict 恰好是单数可数名词，其定语 current data 正对应 the two sets of data，因此填 conflict。抄写时注意不要改写成 contradicts、disagreement 之类的词，答案必须原样取自原文，故只能写 conflict。",
          "analysis": "I 段倒数第二句是本题的来源：“The current data conflict will ultimately provide deeper insights into ageing, Anderson predicts.”（Anderson 预测，目前的数据矛盾最终会带来对衰老更深入的认识）。摘要把它改写为：“Although there is a 26 ______ between the two sets of data, Anderson believes they will help researchers reach a better understanding.” 两句话的对应关系是：current data conflict 对应 there is a [26] between the two sets of data；will ultimately provide deeper insights 对应 will help researchers reach a better understanding；Anderson predicts 对应 Anderson believes。因此空格需要填就是 conflict。语法上，conflict 在此作可数名词单数，与不定冠词 a 搭配；若填 conflicting 之类的形容词或动词形式，既不符合 a 加名词的结构，也违反“从原文选词”的要求。回顾全文，文章开头就说两项研究的结论相冲突（those findings disagree），结尾再次落到 data conflict，说明冲突是全文的线索词，也有助于确认答案。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
