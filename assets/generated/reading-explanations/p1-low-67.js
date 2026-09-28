(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-67", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-67",
  "meta": {
    "examId": "p1-low-67",
    "title": "Scented Plants 植物的味道",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "a list of food plants which need insects to make them productive",
          "translation": "一份需要昆虫才能高产的食用植物清单。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Floral scent has a strong impact on the economic success of many agricultural crops that rely on insect pollinators, including fruit trees such as the bee-pollinated cherry, apple, apricot, and peach, as well as vegetables and tropical plants such as the papaya."
          },
          "synonyms": [
            "“a list of food plants” 对应原文的 “including fruit trees such as the bee-pollinated cherry, apple, apricot, and peach, as well as vegetables and tropical plants such as the papaya”，原文用 including 与 such as 连举了 cherry、apple、apricot、peach、papaya 等一串可食用作物，构成典型清单",
            "“which need insects” 同义替换为原文的 “that rely on insect pollinators”，rely on 即 need，insect pollinators 即 insects",
            "“to make them productive” 同义替换为原文的 “has a strong impact on the economic success”，并可由下一句 “reduces the ability of plants to attract pollinators and may result in considerable losses for growers” 从反面印证：没有昆虫授粉就会减产亏损"
          ],
          "locatingTip": "定位：段落信息匹配题先抓“段落特征”再找词。题干的 a list of（一份清单）提示目标段应有密集的列举结构，扫读各段寻找 including 与 such as 引出的农产品名单即可，只有 F 段一句之内连举 cherry、apple、apricot、peach、papaya。确定答案技巧：锁定列举句后核对限定语，原文用 that rely on insect pollinators（依赖传粉昆虫）说明这些作物离不开昆虫，正是题干 need insects to make them productive；两者方向一致，故答案为 F。",
          "analysis": "题干要的是“需要昆虫才能高产的可食用植物清单”，包含两个信息点：一是清单（列举多种作物），二是这些作物依赖昆虫才能有收成。F 段首句写道：“Floral scent has a strong impact on the economic success of many agricultural crops that rely on insect pollinators, including fruit trees such as the bee-pollinated cherry, apple, apricot, and peach, as well as vegetables and tropical plants such as the papaya.”（花香对许多依赖传粉昆虫的农作物的经济收益影响巨大，其中包括蜂授粉的樱桃、苹果、杏和桃等果树，以及木瓜等蔬菜和热带植物）。句中 agricultural crops 与 fruit trees, vegetables, tropical plants 都是可食用农产品，cherry、apple、apricot、peach、papaya 就是题干所说的“清单”；that rely on insect pollinators 直接说明它们要靠昆虫传粉，bee-pollinated（蜂授粉的）更把昆虫的作用点明。F 段下文进一步说香味排放减少会削弱植物吸引传粉者的能力、给种植者带来重大损失，反证昆虫是这些作物获得收成的关键。信息点与题干完全重合，故选 F。",
          "traps": [
            "为什么不是 B 段：B 段虽然提到食物（the spice clove could be used in baked goods and prepared meats），但谈的是香料用于防腐保鲜，既不是一份“食用植物清单”，也没有提到昆虫授粉与产量，故排除。",
            "为什么不是 H 段：H 段也有列举（cut flowers and potted plants、ornamental flowers），但对象是观赏花卉而非 food plants，且落点是花卉的香味与产值，不涉及“需要昆虫才能高产”，故排除。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "an explanation of why a genetic experiment may assist plant reproduction",
          "translation": "解释为什么一项基因实验可能有助于植物的繁殖。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Clearly, a more refined strategy is needed; genetic manipulation of scents, for example, would allow growers to regulate the types of insect pollinators and the frequency of their visits."
          },
          "synonyms": [
            "“a genetic experiment” 同义替换为原文的 “genetic manipulation of scents”（对气味的基因操作）",
            "“assist plant reproduction” 同义替换为原文的 “would allow growers to regulate the types of insect pollinators and the frequency of their visits”，能调节传粉昆虫的种类与到访频率就等于提高授粉成功率，即帮助植物繁殖",
            "“why ... may” 对应原文的情态动词 “would”，表达的是一种可行的推论；而句首 “Clearly, a more refined strategy is needed” 说明这是为解决授粉问题而提出的更精细办法"
          ],
          "locatingTip": "定位：题干核心词是 genetic，全文只有 G、H 两段出现 genetic manipulation，先按此缩小范围。确定答案技巧：题干问“为什么基因实验能帮助植物繁殖”，落点在授粉这一环。G 段末句说基因操作气味能让种植者调节传粉昆虫的种类与造访频率，指向的是让植物更好地被传粉（plant reproduction）；H 段的基因操作针对的是观赏花卉的香味与花农收益，与繁殖无关，因此答案是 G。",
          "analysis": "G 段先交代背景：植物育种者曾用喷洒香味化合物的办法解决授粉问题，结果代价高昂、效率低下，原因是一般性喷洒无法告诉昆虫花在哪里。接着给出替代思路：“Clearly, a more refined strategy is needed; genetic manipulation of scents, for example, would allow growers to regulate the types of insect pollinators and the frequency of their visits.”（显然需要一个更精细的策略；例如，对气味的基因操作可以让种植者调节传粉昆虫的种类以及它们来访的频率）。题干把 genetic manipulation of scents 概括为 a genetic experiment，把 would allow growers to regulate the types of insect pollinators and the frequency of their visits 概括为 may assist plant reproduction：传粉昆虫来得更准、更勤，植物就被更充分地授粉，从而顺利结实繁殖。G 段还在开头用 this pollination problem 回指 F 段所说的授粉不足问题，说明本段讨论的正是“用基因手段改善授粉、帮助植物繁殖”的原因与机制，故选 G。",
          "traps": [
            "为什么不是 H 段：H 段确实出现 genetic manipulation of flower fragrance，但它针对的是 ornamental flowers（观赏花卉）香味的恢复，目的是切花与盆栽的美学与商业价值，与植物繁殖无关，故排除。",
            "为什么不是 C 段：C 段说明昆虫靠头部极其灵敏的触角感知挥发物并替植物传播花粉，讲的是自然机制，不涉及任何基因实验，也没有“为什么能帮助繁殖”的解释，故排除。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "a description of current research with advantages for the flower industry",
          "translation": "描述一项对花卉产业有利的当前研究。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "The next generation of experiments, already in progress, will include more sophisticated schemes that target the expression of scent specifically to flowers or other organs"
          },
          "synonyms": [
            "“current research” 同义替换为原文的 “The next generation of experiments, already in progress”（已在进行的下一代实验），already in progress 即“当前正在进行”",
            "“the flower industry” 同义替换为原文的 “people who grow flowers commercially” 与 “ornamental flowers, which have a worldwide annual value of more than US$30 billion”",
            "“with advantages for” 对应原文的 “Such manipulation of scent will also benefit people who grow flowers commercially” 以及 “makes them important targets for the genetic manipulation of flower fragrance”"
          ],
          "locatingTip": "定位：题干有三个抓手——flower industry、current research、advantages。全文谈“花卉产业”的只有 H 段（grow flowers commercially、ornamental flowers、US$30 billion），据此先跳到 H 段。确定答案技巧：再分辨时态与阶段。H 段提到两类研究：Some preliminary experiments have already been carried out（已完成的初步实验，属于过去）和 The next generation of experiments, already in progress（正在进行，属于当前）。题干问的是 current research，因此定位句必须落在 already in progress 那一句，而不是初步实验那一句，故选 H。",
          "analysis": "H 段开头就说：“Such manipulation of scent will also benefit people who grow flowers commercially.”（这种气味操控还将惠及以种花为业的人），紧接着指出传统育种在改善瓶插寿命、颜色和形状的同时牺牲了香味，而观赏花卉（ornamental flowers）全球年产值超过 300 亿美元，因此是“香味基因操控”的重要目标，这就是题干 the flower industry 与 advantages 的来源。随后交代研究进度：Some preliminary experiments have already been carried out（已做过一些初步实验，但香味遍布植株各处、强度低于人鼻的感知阈值），而 “The next generation of experiments, already in progress, will include more sophisticated schemes that target the expression of scent specifically to flowers or other organs”（正在进行的下一代实验将采用更精细的方案，把香味的表达专门定位到花朵或其他器官）。其中 already in progress 对应题干的 current，experiments 对应 research，而受益方是花卉产业，三处一一对应，故选 H。",
          "traps": [
            "为什么不是 G 段：G 段的 genetic manipulation of scents 服务的是果树的授粉与 growers 的产量（agricultural crops），属于农业种植，不是 flower industry，且没有“当前研究”的描述，故排除。",
            "为什么不是 F 段：F 段的焦点是依赖昆虫授粉的农业作物（果类、蔬菜、热带植物）与蜜蜂减少带来的经济损失，既不涉及花卉产业，也没有任何研究进展的说明，故排除。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "an explanation of how insects perceive volatile compounds in plants",
          "translation": "解释昆虫如何感知植物中的挥发性化合物。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Insects are the most common animals to interact with plants in this way, and most insects detect volatile compounds through the extremely sensitive antennae on their heads."
          },
          "synonyms": [
            "“insects perceive” 同义替换为原文的 “most insects detect ... through the extremely sensitive antennae on their heads”，perceive 即 detect（感知、觉察）",
            "“volatile compounds in plants” 在原文中直接以 “volatile compounds” 出现，与前文讨论的植物挥发物同指",
            "“an explanation of how” 对应原文对感知机制的说明：一是 through the extremely sensitive antennae on their heads（通过头上极灵敏的触角），二是 “Some antennae can detect an airborne volatile compound at concentrations of just a few parts per billion”（灵敏到能探测十亿分之几的浓度）"
          ],
          "locatingTip": "定位：题干关键词 antennae 是全文独一无二的名词，只在 C 段出现，扫读时盯住这个词即可一步定位。确定答案技巧：题干问“how（如何感知）”，属于机制类信息，必须在原文找到对感知方式的说明。C 段连续两句都在讲昆虫的触角及其灵敏度（the extremely sensitive antennae on their heads；能探测到十亿分之几的浓度），正是 how 的答案所在，故选 C。注意不要被 D 段误导：D 段虽然也反复出现昆虫与虫卵，但讲的是植物如何对付昆虫，不是昆虫如何感知气味。",
          "analysis": "C 段先说明挥发物原本用于驱避食植动物，如今却承担多种功能，其中一项是吸引动物帮植物传播花粉，随后写道：“Insects are the most common animals to interact with plants in this way, and most insects detect volatile compounds through the extremely sensitive antennae on their heads.”（昆虫是以这种方式与植物互动的最常见动物，大多数昆虫靠头上极其灵敏的触角来探测挥发物）。下一句继续补充触角的灵敏度：“Some antennae can detect an airborne volatile compound at concentrations of just a few parts per billion.”（有些触角在浓度仅为十亿分之几时就能探测到空气中的挥发物）。这两句合起来正是题干要求的 explanation of how insects perceive volatile compounds：感知器官是触角（antennae on their heads），感知方式是探测（detect），还给出了灵敏度的量化说明。与题干完全对应，故选 C。",
          "traps": [
            "为什么不是 D 段：D 段讲的是植物散发挥发物毒害入侵昆虫，以及植物在受伤或被产卵时释放化合物以阻止昆虫继续危害，主体是植物的防御与应对，不是昆虫的感知机制，故排除。",
            "为什么不是 E 段：E 段讲蚂蚁被甲基水杨酸吸引并顺带攻击食植昆虫，属于植物与蚂蚁之间的间接防御，虽涉及昆虫行为，但完全没有说明昆虫靠什么器官、以什么方式感知挥发物，故排除。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–9 单选题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 9
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "According to the passage, spices were used in the past to",
          "translation": "根据文章，过去香料被用来……",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Humans have recognized and taken advantage of these plant-derived antibacterials since antiquity, when they were used to slow the spoilage of food."
          },
          "synonyms": [
            "“in the past” 同义替换为原文的 “since antiquity”（自古以来）",
            "“spices” 对应原文的 “the spice clove” 以及 “cloves and other tropical spices”",
            "“prevent the decay of food” 同义替换为原文的 “slow the spoilage of food”，spoilage（腐坏）即 decay，同时原文下一句的 “to slow the growth of mould and bacteria” 进一步说明抑制微生物就是防止食物变质",
            "“were used to” 在原文中直接复现为 “they were used to …”"
          ],
          "locatingTip": "定位：题干关键词 spices 是全文最好用的词，只有 B 段集中出现（the spice clove、cloves and other tropical spices），扫读到 B 段即可停。确定答案技巧：先明确 they 的指代，它回指前文的 these plant-derived antibacterials（这些源自植物的抗菌物质），再找用途 “to slow the spoilage of food” 与 “to slow the growth of mould and bacteria”。把 spoilage 与选项 C 的 decay 对应、把抑制霉菌与细菌的生长理解为防止食物腐坏，即可确定答案为 C。",
          "analysis": "B 段先指出许多植物挥发物被人吃下时是有毒的，这些化合物是植物用来抵御细菌侵害的，接着写道：“Humans have recognized and taken advantage of these plant-derived antibacterials since antiquity, when they were used to slow the spoilage of food.”（人类自古以来就认识并利用这些源自植物的抗菌物质，当时它们被用来延缓食物的腐坏）。下文以丁香为例给出更具体的说明：“the spice clove could be used in baked goods and prepared meats to slow the growth of mould and bacteria, because a small amount was not dangerous to humans.”（丁香这种香料可以用在烘焙食品和熟肉中，以延缓霉菌和细菌的生长，因为少量使用对人体无害）。题干把 spices were used 概括为一个动作目的，原文对应的是 slow the spoilage of food 与 slow the growth of mould and bacteria，两者都是“防止食物变质”，与选项 C 的 prevent the decay of food 同义，故选 C。语气上注意 prevent 与 slow 的细微差别：原文说“延缓”腐坏，考试中这被视为同一目的，不影响答案。",
          "traps": [
            "A 为什么不选：原文的 plant-derived antibacterials 针对的是 bacteria 与 mould（细菌和霉菌），目的是防腐败，而不是驱赶昆虫；文中虽然多次出现 insects，但那是植物挥发物驱避食植昆虫的功能，与保存食物无关。",
            "B 为什么不选：B 段只说了丁香可加入 baked goods 和 prepared meats 以延缓变质，完全没有提到改善食物味道（improve the taste）这一用途。",
            "D 为什么不选：原文从未提到用香料让食物闻起来更吸引人（make food smell more attractive）；B 段讨论香料时关注的是它们的抗菌作用，而非气味对食客的吸引力。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The Leonardoxa africana tree protects itself by",
          "translation": "Leonardoxa africana 这种树通过什么方式保护自己？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "ants of the species Petalomyrmex phylax are attracted to young leaves because they emit high levels of the volatile compound methyl salicylate, a substance that ants need to use as an antiseptic in their nests; coincidentally, the ants attack any herbivorous insects that they encounter."
          },
          "synonyms": [
            "“protects itself” 对应原文的 “a kind of currency in some very indirect defensive systems” 与 “performing their valuable role in deterring herbivores”",
            "“attracting an enemy of herbivorous insects” 同义替换为原文的 “ants of the species Petalomyrmex phylax are attracted to young leaves” 加上 “the ants attack any herbivorous insects that they encounter”",
            "“an enemy of herbivorous insects” 对应原文的 ants，蚂蚁会攻击它们遇到的任何食植昆虫，即食植昆虫的天敌"
          ],
          "locatingTip": "定位：专有名词 Leonardoxa africana（拉丁学名）只在 E 段出现，用这个词一步锁定 E 段，不必读前面段落。确定答案技巧：题干问“如何保护自己”，必须在原文理清因果链条，而不是只看前半句。E 段的链条是：树叶释放 methyl salicylate，蚂蚁被吸引到嫩叶上取食这种它们需要的消毒物质，蚂蚁遇到食植昆虫就攻击它们，于是树木得益。提供保护的执行者是蚂蚁，即食植昆虫的敌人，因此选 D。看到 are attracted 就急着选“树用气味驱虫”会掉进 A 项陷阱。",
          "analysis": "E 段把挥发物比作“某种间接防御体系中的货币”，并以雨林树种 Leonardoxa africana 说明机制：“In the rainforest tree Leonardoxa africana, for example, ants of the species Petalomyrmex phylax are attracted to young leaves because they emit high levels of the volatile compound methyl salicylate, a substance that ants need to use as an antiseptic in their nests; coincidentally, the ants attack any herbivorous insects that they encounter.”（例如在雨林树 Leonardoxa africana 上，Petalomyrmex phylax 这种蚂蚁被嫩叶吸引，因为嫩叶释放大量挥发物甲基水杨酸，而蚂蚁需要用它作为巢中的消毒剂；巧合的是，蚂蚁会攻击它们遇到的任何食植昆虫）。下一句总结：“It appears that methyl salicylate both attracts ants and rewards them for performing their valuable role in deterring herbivores.”（看来甲基水杨酸既吸引蚂蚁，又回报它们驱避食植动物的重要作用）。也就是说，树并不是靠气味直接击退昆虫，而是“雇”来了食植昆虫的天敌蚂蚁，让蚂蚁替自己动手；这与选项 D “吸引食植昆虫的敌人（an enemy of herbivorous insects）”完全对应，故选 D。",
          "traps": [
            "A 为什么不选：原文没有说树散发的挥发物直接驱赶（repel）食植昆虫。被吸引来的是蚂蚁，而 methyl salicylate 之所以吸引蚂蚁，是因为它是蚂蚁巢中需要的消毒剂（a substance that ants need to use as an antiseptic in their nests）；真正实施驱赶的是蚂蚁（the ants attack any herbivorous insects that they encounter），不是气味本身。",
            "B 为什么不选：原文没有 poisoning（毒害）这一环节。D 段确实出现 toxins against invading insects，但那是泛指的“其他植物（Other plants）”，并非 Leonardoxa africana；本题段落里蚂蚁是攻击（attack）食植昆虫，而不是被吸引来毒杀它们。",
            "C 为什么不选：化学破坏虫卵是 D 段的信息（Volatile compounds released by plants in response to herbivore egg-laying ... can attract parasites of the eggs），而且那里说的是植物吸引虫卵的寄生者，并非用化学方式毁掉虫卵，更与 Leonardoxa africana 无关，属于段落与机制双重错位。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Which of the following statements about methyl salicylate is NOT true according to the passage?",
          "translation": "根据文章，下列关于甲基水杨酸（methyl salicylate）的说法哪一项不正确？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "It appears that methyl salicylate both attracts ants and rewards them for performing their valuable role in deterring herbivores."
          },
          "synonyms": [
            "选项 A “It helps ants to protect their nests” 对应原文的 “a substance that ants need to use as an antiseptic in their nests”",
            "选项 C “It helps a rainforest tree to attract ants” 对应原文的 “ants of the species Petalomyrmex phylax are attracted to young leaves because they emit high levels of the volatile compound methyl salicylate”",
            "选项 D “It helps a rainforest tree to avoid being eaten” 对应原文的 “performing their valuable role in deterring herbivores”",
            "选项 B “It helps herbivorous insects to find food” 在原文中找不到任何依据：被 methyl salicylate 吸引的是 ants，而 herbivorous insects 恰恰是被蚂蚁攻击的一方"
          ],
          "locatingTip": "定位：题干关键词 methyl salicylate 只在 E 段出现，直接锁定 E 段。确定答案技巧：这是选“不正确项（NOT true）”的反向选择题，稳妥做法是把四个选项逐一拿到 E 段核对：A、C、D 都能在原文逐字找到支撑，属于真实陈述；只有 B 与原文逻辑相反——甲基水杨酸吸引的是蚂蚁，而蚂蚁会攻击食植昆虫，它非但不会帮食植昆虫找到食物，反而成为食植昆虫的杀机，故 B 为答案。切忌只凭“methyl salicylate 出现在讲昆虫的段落里”就认定它对昆虫有利。",
          "analysis": "E 段关于 methyl salicylate 的信息有两条：一是它由 Leonardoxa africana 的嫩叶大量释放，用来吸引 Petalomyrmex phylax 蚂蚁，因为蚂蚁需要把它当作巢中的消毒剂（a substance that ants need to use as an antiseptic in their nests）；二是蚂蚁因此长期驻守，遇到食植昆虫就攻击（coincidentally, the ants attack any herbivorous insects that they encounter），从而使树木免受啃食。末句总结：“It appears that methyl salicylate both attracts ants and rewards them for performing their valuable role in deterring herbivores.”（看来甲基水杨酸既吸引蚂蚁，也回报它们驱避食植动物的重要作用）。据此核对选项：A（帮助蚂蚁维护巢的卫生）来自 antiseptic in their nests；C（帮助雨林树木吸引蚂蚁）来自 ants ... are attracted to young leaves because they emit ... methyl salicylate；D（帮助雨林树木避免被吃）来自 deterring herbivores。三项均与原文吻合，属于真实陈述。唯有 B 说它“帮助食植昆虫找到食物”，而原文中因它受益的是蚂蚁，食植昆虫是被蚂蚁攻击、被驱离的对象，与 B 完全相反，因此不正确的说法是 B。",
          "traps": [
            "A 为什么不选（A 是原文支持的真实陈述）：原文明确写它是 ants need to use as an antiseptic in their nests，确实帮助蚂蚁维护巢内卫生，故不能选 A 为“不正确”。",
            "C 为什么不选（C 是原文支持的真实陈述）：原文说 ants of the species Petalomyrmex phylax are attracted to young leaves because they emit high levels of the volatile compound methyl salicylate，直接支持“这种物质帮助雨林树木吸引蚂蚁”。",
            "D 为什么不选（D 是原文支持的真实陈述）：原文说蚂蚁 performing their valuable role in deterring herbivores，树木借此避免被食植动物啃食，与 D 一致。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Which factor has made the problems of US fruit growers more serious?",
          "translation": "哪个因素使美国果农的问题变得更加严重？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "This problem has been made worse in the United States by recent epidemics that have infected and killed many honeybees, the major insect pollinator."
          },
          "synonyms": [
            "“made the problems ... more serious” 同义替换为原文的 “has been made worse”",
            "“US fruit growers” 对应原文的 “in the United States” 与上一句的 fruit trees（cherry, apple, apricot, peach）以及 “may result in considerable losses for growers”",
            "“Bees have had their numbers reduced by disease” 同义替换为原文的 “epidemics that have infected and killed many honeybees”，epidemics（疫病流行）即 disease，infected and killed many honeybees 即数量大幅减少"
          ],
          "locatingTip": "定位：题干中的 United States（原文大写）是极佳的大写定位词，全文只在 F 段出现 in the United States。确定答案技巧：定位到 F 段末句后，抓住“谁使问题恶化”的语法信号——句子用被动语态 has been made worse ... by recent epidemics，by 后面的 epidemics 就是使问题恶化的因素，它造成的结果是 infected and killed many honeybees（大量蜜蜂染病死亡）。把这层因果关系读作“疾病使蜜蜂数量减少”，即选项 D。要警惕把蜜蜂之死归因于农药的选项 B，原文的施动者是 epidemics 而非 chemicals。",
          "analysis": "F 段前半部分说明花香对依赖昆虫授粉的农作物（包括蜂授粉的樱桃、苹果、杏、桃等果树）的经济效益至关重要，并指出香味减弱会让植物更难吸引传粉者，可能给种植者带来重大损失。末句紧接着说：“This problem has been made worse in the United States by recent epidemics that have infected and killed many honeybees, the major insect pollinator.”（在美国，这个问题因近来使大量蜜蜂感染死亡的疫病流行而变得更加严重，蜜蜂是最主要的昆虫传粉者）。句中的逻辑链是：本来香味减弱已使授粉不足，如今最关键的传粉者蜜蜂又因疫病大量死亡，问题雪上加霜。题干问“哪个因素使问题更严重”，对应的正是 by recent epidemics that have infected and killed many honeybees，即蜜蜂数量因疾病而减少，故选 D。",
          "traps": [
            "A 为什么不选：原文没有提到蜜蜂找到替代的食物来源（an alternative source of food）；F 段只说蜜蜂是 the major insect pollinator，问题是它们数量减少，而非转移食源。",
            "B 为什么不选：原文明确把蜜蜂大量死亡归因于 epidemics（疫病流行），并没有说是 chemicals（化学药剂）杀死了蜜蜂；B 属于把原因偷换成农药。",
            "C 为什么不选：F 段说的是授粉不足会带来 considerable losses（重大经济损失），并没有说水果质量下降（decreasing in quality）；而且题干问的是“使问题更严重的因素”，C 描述的既非原文内容，也不是原因。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Experiments in genetically manipulating the fragrance of ornamental flowers have",
          "translation": "对观赏花卉香味进行基因操控的实验……",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Some preliminary experiments have already been carried out, but for technical reasons the scent was present in every part of the plant, rather than being localized in the flower, and the level of intensity of fragrance was below the threshold of detection for the human nose."
          },
          "synonyms": [
            "“Experiments in genetically manipulating the fragrance of ornamental flowers” 对应原文前文的 “the genetic manipulation of flower fragrance” 与 “The loss of scent among ornamental flowers”，随后直接落到 “Some preliminary experiments have already been carried out”",
            "“failed to produce a strong enough scent” 同义替换为原文的 “the level of intensity of fragrance was below the threshold of detection for the human nose”（香味强度低于人鼻的感知阈值）",
            "“ornamental flowers” 同义替换为原文的 “ornamental flowers, which have a worldwide annual value of more than US$30 billion”"
          ],
          "locatingTip": "定位：题干关键词 ornamental flowers 只在 H 段出现，而 genetic manipulation 出现在 G 段末尾与 H 段，两者取交集即 H 段，一步锁定。确定答案技巧：选择题要找“实验的结果”。H 段说初步实验已经做过，但香味遍布植株各处、并不集中在花上，而且浓度的强度 below the threshold of detection for the human nose（低于人鼻可闻的阈值），即香味淡到人闻不出来，对应选项 C failed to produce a strong enough scent。A 项的 30 billion 是花卉年产值，属数字错位，务必与实验花费区分开。",
          "analysis": "H 段在说明观赏花卉因传统育种失去香味、因而成为基因操控香味的重点对象后，交代了研究现状：“Some preliminary experiments have already been carried out, but for technical reasons the scent was present in every part of the plant, rather than being localized in the flower, and the level of intensity of fragrance was below the threshold of detection for the human nose.”（一些初步实验已经开展，但由于技术原因，香味出现在植株的每个部位，而不是集中在花上，且香味强度低于人鼻可感知的阈值）。两句合起来构成对题干 Experiments in genetically manipulating the fragrance of ornamental flowers 的完成情况说明：实验做了，结果是香味的分布不对且强度太弱，人根本闻不到，即没能产生足够浓郁的香味，故选 C。紧接的下文说下一代实验将把香味表达专门定位到花朵或其他器官，正是针对前一实验这两个缺陷的改进，也从反面印证 C 的概括成立。",
          "traps": [
            "A 为什么不选：US$30 billion 在原文中是 ornamental flowers 的 worldwide annual value（全世界年产值），并不是实验花掉的钱；选项把行业产值错当成实验成本，属于数字与对象错配。",
            "B 为什么不选：原文没有说实验让花对昆虫更具吸引力；H 段给出的实验结果是香味分布不集中且浓度太低（达不到人鼻的检出阈值），与吸引昆虫无关。",
            "D 为什么不选：原文没有提到花场减产（reduced production on flower farms）；与产量损失有关的表述在 F 段，指的是授粉不足给 growers 造成的损失，与本题的实验结果不是同一件事。"
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
          "stem": "The theory that plants defend themselves with smells is untested.",
          "translation": "植物用气味自我防御这一理论尚未经过检验。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "But it is clear that the system can have a defensive purpose, as many experiments have shown that the deactivation of a plant's volatile emission system makes it more vulnerable to herbivores."
          },
          "synonyms": [
            "“untested” 与原文的 “many experiments have shown” 直接冲突：原文说已有许多实验证明，题干却说“尚未检验”",
            "“plants defend themselves with smells” 同义替换为原文的 “the system can have a defensive purpose” 以及 “makes it more vulnerable to herbivores”（关闭挥发物系统后更易受食植动物侵害，反证气味确有防御作用）",
            "原文的 “volatile emission system” 即题干所说的 smells（气味）的释放机制"
          ],
          "locatingTip": "定位：题干关键词 untested（未经验证）指向“有没有实验证据”，而全文唯一集中讨论实验证据的结论句在 E 段末句，其中 experiments 一词就是判分关键。确定答案技巧：判断题中凡出现 untested、unproven、no evidence 这类绝对否定表述，都要回原文搜索是否存在实验或研究记载。E 段末句说 many experiments have shown（许多实验已经表明），说明该理论不但被检验过，而且得到大量实验支持，与题干“未经检验”正相矛盾，故判 FALSE。",
          "analysis": "E 段讨论挥发物在间接防御体系中的作用，最后给出明确结论：“But it is clear that the system can have a defensive purpose, as many experiments have shown that the deactivation of a plant's volatile emission system makes it more vulnerable to herbivores.”（但可以确定这个系统具有防御目的，因为许多实验已经表明，一旦使植物的挥发物释放系统失效，植物就更容易受到食植动物的侵害）。这里的信息点非常直接：一是 many experiments have shown，说明理论已被反复检验；二是实验方法为“灭活挥发物释放系统”，观察结果是植物更容易被食植动物侵害，正说明气味具有防御功能。题干却断言该理论 is untested（尚未检验），与原文的“已有许多实验证明”形成事实冲突，故判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文用 many experiments have shown 明确交代该理论已经过大量实验验证，并且给出了实验结果与机制（灭活挥发物系统会使植物更易受害），因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“是否经过检验”给出了明确且与题干相反的信息（许多实验已经表明），属于有信息且构成矛盾，不属于信息缺失，故不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The smell from fruit-tree flowers is important to farmers.",
          "translation": "果树花朵的气味对于农民来说很重要。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Floral scent has a strong impact on the economic success of many agricultural crops that rely on insect pollinators, including fruit trees such as the bee-pollinated cherry, apple, apricot, and peach"
          },
          "synonyms": [
            "“the smell from fruit-tree flowers” 同义替换为原文的 “Floral scent” 与 “fruit trees such as the bee-pollinated cherry, apple, apricot, and peach”",
            "“important to farmers” 同义替换为原文的 “has a strong impact on the economic success of many agricultural crops”，并由下一句 “may result in considerable losses for growers” 直接落到种植者头上",
            "“fruit trees” 在原文中由 such as 引出 cherry、apple、apricot、peach 作为具体例证"
          ],
          "locatingTip": "定位：题干关键词 fruit-tree、flowers、farmers 的组合指向 F 段，全文把“花香”与“经济效益、种植者”联系起来的只有 F 段。确定答案技巧：核对两个信息点是否都在原文成立：一是花香影响作物的经济成败（has a strong impact on the economic success），二是这种成败直接表现为种植者的损失（may result in considerable losses for growers）；果树例子正是 cherry、apple、apricot、peach，与题干 fruit-tree flowers 完全对应，两项吻合，故判 TRUE。",
          "analysis": "F 段首句写道：“Floral scent has a strong impact on the economic success of many agricultural crops that rely on insect pollinators, including fruit trees such as the bee-pollinated cherry, apple, apricot, and peach, as well as vegetables and tropical plants such as the papaya.”（花香对许多依赖传粉昆虫的农作物的经济效益影响极大，包括蜂授粉的樱桃、苹果、杏、桃等果树，以及木瓜等蔬菜与热带植物）。随后从反面说明：“A decrease in fragrance emission ... reduces the ability of plants to attract pollinators and may result in considerable losses for growers.”（香味排放减少会削弱植物吸引传粉者的能力，并可能给种植者带来重大损失）。两句一正一反，把果树花香与种植者的经济利益牢牢绑定：花香决定了能否吸引昆虫授粉，进而决定收成与收益，损失最终落在 growers（即题干所说的 farmers）身上。题干说果树花的气味对农民很重要，与原文信息方向完全一致，故判 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文从正面（has a strong impact on the economic success）与反面（may result in considerable losses for growers）两个方向说明香味对果树作物的经济成败极其关键，与题干“对农民很重要”同向，不存在矛盾，故不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干的两个要素——果树的香味与农民的利益——在 F 段都有明文支撑（Floral scent ... fruit trees such as the bee-pollinated cherry ...；considerable losses for growers），信息完整明确，不属于未提及。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "The population of honeybees in Europe has declined.",
          "translation": "欧洲的蜜蜂数量已经减少。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "This problem has been made worse in the United States by recent epidemics that have infected and killed many honeybees, the major insect pollinator."
          },
          "synonyms": [
            "“the population of honeybees ... has declined” 在原文中只有美国版本的说法：“epidemics that have infected and killed many honeybees”（疫病使大量蜜蜂感染死亡）",
            "“in Europe” 在原文中没有任何对应：涉及蜜蜂数量变化的句子明确限定在 “in the United States”，而 Europe 一词只出现在 B 段，谈的是历史上欧洲对香料贸易的依赖"
          ],
          "locatingTip": "定位：honeybees 一词只在 F 段出现，一步定位到 F 段末句，用不着通读全文。确定答案技巧：判断题遇到地点限定词要逐字核对。原文说蜜蜂的暴毙发生在美国（in the United States），题干却限定在欧洲；另一个出现 Europe 的 B 段讲的是欧洲当年依赖丁香等香料来延长食物供应，与蜜蜂数量毫无关系。也就是说，全文没有任何关于欧洲蜜蜂数量变化的记载，属于信息缺失，故判 NOT GIVEN。切忌把“美国蜜蜂减少”直接平移成“欧洲蜜蜂减少”。",
          "analysis": "F 段末尾写的是：“This problem has been made worse in the United States by recent epidemics that have infected and killed many honeybees, the major insect pollinator.”（在美国，近来使大量蜜蜂感染死亡的疫病流行使这一问题雪上加霜，蜜蜂是最主要的昆虫传粉者）。可见原文关于蜜蜂数量减少的唯一记载有两个明确的限定：地点是美国（in the United States），原因是疫病流行（epidemics）。题干把同一现象的地点换成了欧洲（in Europe），而全文只在 B 段提到 Europe，且是讲古代欧洲对丁香等热带香料的依赖以及寻找更短航路的历史，与蜜蜂数量毫无关联。原文既没有说欧洲蜜蜂数量下降，也没有说欧洲蜜蜂数量没有下降，属于对该信息完全未作交代，因此判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文对蜜蜂死亡的记载明确限定在美国（in the United States），并未说明欧洲是否出现同样情况，题干把地理范围换成欧洲后找不到任何对应证据，故不能选 TRUE。",
            "为什么不是 FALSE：原文并没有否认欧洲蜜蜂数量下降，也没有说欧洲蜜蜂数量保持稳定，只是对欧洲这一地区没有任何交代；没有相反信息就不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Applying perfume to orchard trees is accepted as a good method of increasing pollination.",
          "translation": "给果园树木喷洒香水被公认为提高授粉的好方法。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Some plant breeders have tried to solve this pollination problem by spraying scent compounds on orchard trees to enhance honeybee foraging, but this approach was costly and, in the end, proved to be inefficient."
          },
          "synonyms": [
            "“Applying perfume to orchard trees” 同义替换为原文的 “spraying scent compounds on orchard trees”，perfume 对应 scent compounds，applying 对应 spraying",
            "“increasing pollination” 同义替换为原文的 “to enhance honeybee foraging” 与 “to solve this pollination problem”",
            "“is accepted as a good method” 与原文的 “this approach was costly and, in the end, proved to be inefficient” 正相冲突：原文是否定评价，题干却说是公认的好办法"
          ],
          "locatingTip": "定位：题干关键词 spraying、perfume（即 scent compounds）与 orchard trees 只出现在 G 段首句，pollination 也在同一句，一步定位即可。确定答案技巧：本题的判分点在评价性措辞上。题干说这种做法“被公认为好方法（accepted as a good method）”，而原文用 but 转折给出评价：this approach was costly and, in the end, proved to be inefficient（代价高昂，最终被证明效率低下），并随后解释原因是普遍喷洒无法告诉昆虫花究竟在哪里。原文的否定与题干的肯定会正面冲突，故判 FALSE。",
          "analysis": "G 段首句：“Some plant breeders have tried to solve this pollination problem by spraying scent compounds on orchard trees to enhance honeybee foraging, but this approach was costly and, in the end, proved to be inefficient.”（一些植物育种者曾尝试通过在果园树上喷洒香味化合物来增强蜜蜂的觅食行为，以此解决授粉问题，但这种做法代价高昂，最终被证明效率低下）。下一句还给出失败原因：“One of the reasons for its ineffectiveness was that general spraying of the crop could not tell insects exactly where the blossoms were.”（其无效的原因之一是，对整个作物普遍喷洒无法告诉昆虫花朵究竟在哪里）。把题干与原文对比：动作对应（spraying scent compounds on orchard trees 即 applying perfume to orchard trees），目的对应（to enhance honeybee foraging 即 increasing pollination），但评价完全相反——原文用 costly 与 inefficient 以及 ineffectiveness 一路否定，题干却用 accepted as a good method 一路肯定，构成事实冲突，故判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文对这种喷洒法给出了明确的负面评价——costly（代价高昂）与 proved to be inefficient（最终被证明效率低下），还补充了它无效的原因，与题干“被公认为好方法”完全相反，故不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅描述了这种做法，还给出了评价与失败原因（general spraying of the crop could not tell insects exactly where the blossoms were），信息明确且与题干相反，属于有据可查的矛盾，故不属于 NOT GIVEN。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
