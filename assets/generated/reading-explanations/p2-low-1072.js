(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-low-1072", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-low-1072",
  "meta": {
    "examId": "p2-low-1072",
    "title": "Biology of Bitterness 苦味生物学",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–8 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 8
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Experiment on bitterness conducted",
          "translation": "进行了关于苦味的实验（哪一个段落描述了做苦味实验这件事？）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "I found that out by participating in a test conducted at the Linguagen Corporation, a biotechnology company in Cranbury, New Jersey."
          },
          "synonyms": [
            "“Experiment on bitterness conducted” 同义替换为原文的 “a test conducted”＋“I found that out by participating in”，即“一场在 LinguaGen 公司进行的试验，我亲自参加”",
            "“on bitterness” 对应本段紧接着的味觉体验描述：“Even the smallest sip of 304 had grapefruit's unmistakable bitter bite.”（304 号哪怕最小的一口也有西柚那绝不会认错的苦味），实验内容就是品尝苦味",
            "“conducted” 同义替换为原文的 “were placed before five people seated around a conference table” 与 “Each of us drank from one cup and then the other”，说明试验真的按流程做了"
          ],
          "locatingTip": "定位：题干关键词是 experiment 与 conducted，回原文扫描与“做试验”有关的表达；test 是 experiment 的同义替换，而专有名词 Linguagen Corporation 与 Cranbury, New Jersey 是极好的一次性定位词，直接把范围锁在 B 段。确定答案技巧：B 段用第一人称叙述作者亲历的品鉴试验——两两成对的纸杯（304 与 305）、五名受试者、喝水与苏打饼干清口、依次品尝，这就是题干所说的“进行苦味实验”。A 段只讲西柚为何苦、C 段讲苦味研究的商业价值，都没有实验过程，所以答案是 B。",
          "analysis": "B 段是全文唯一一处描述“实验”的段落，作者以亲历者身份叙述：先交代试验地点和主办方——“I found that out by participating in a test conducted at the Linguagen Corporation, a biotechnology company in Cranbury, New Jersey.”（我是通过参加在新泽西州克兰伯里的生物技术公司 LinguaGen 进行的一场试验才明白这一点的）；接着描写试验的具体做法——“Sets of two miniature white paper cups, labeled 304 and 305, were placed before five people seated around a conference table.”（五个人围坐会议桌，面前各放着标有 304 和 305 的两只微型白纸杯），以及“Each of us drank from one cup and then the other, cleansing our palates between tastes with water and a soda cracker.”（我们每人先喝一杯再喝另一杯，每次品尝之间用水和苏打饼干清口）；最后给出试验结果——304 号有苦味，305 号没有苦味，因为 305 号用 AMP 处理过。题干“Experiment on bitterness conducted”概括的正是这一连串动作，其中 test 与 experiment 同义，conducted 与 were placed before…、drank 等描述动作的词对应。A 段虽然出现了 naringin 和 bitter，但只是陈述事实，没有实验；D 段的“People have varying capacities for tasting bitterness”只是他人研究结论的转述，也不是本文所述的那场实验。所以答案是 B。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Look into the future application",
          "translation": "展望未来的应用（哪一个段落谈到了苦味阻滞剂将来的用途？）",
          "answer": "I",
          "wordClass": "",
          "locating": {
            "paragraph": "I",
            "quote": "In a few years, perhaps, after food companies have taken the bitterness from canned soup and TV dinners, they can set their sights on something more useful"
          },
          "synonyms": [
            "“Look into the future” 同义替换为原文的 “In a few years, perhaps”，都是对未来时间点的展望",
            "“application” 同义替换为原文的 “they can set their sights on something more useful”，即把目光投向更有用的用途",
            "“something more useful” 在原文被具体化为 “a bitter blocker in a bottle that any of us can sprinkle on our brussels sprouts or stir into our grapefruit juice”，即普通消费者可以随手撒在球芽甘蓝上或搅进西柚汁里的苦味阻滞剂"
          ],
          "locatingTip": "定位：题干含 future 这一时间概念，回原文找表示未来时间的短语。全文最直接的未来时间表述是 I 段末尾的 “In a few years, perhaps”，此外本段还出现 foodmakers、Senomyx 等产业信息，与“应用”呼应。确定答案技巧：题干要求找“展望未来应用”的段落，I 段先讲现状（已有食品商在产品中试验 AMP、竞争对手在研发其他苦味阻滞剂），再用 In a few years 把话题推向未来，想象食品公司把罐装汤和电视晚餐的苦味去掉之后，可以更进一步做出“瓶装的苦味阻滞剂”供消费者日常使用，这正是 look into the future application 的所指，因此答案是 I。",
          "analysis": "I 段是全文最后一段，也是唯一的“展望段”。第一句交代现状：“A number of foodmakers have already begun to experiment with AMP in their products, and other bitter blockers are being developed by rival firms such as Senomyx in La Jolla, California.”（已有不少食品制造商开始在产品中试验 AMP，竞争对手如加州拉荷亚的 Senomyx 公司也在研发其他苦味阻滞剂）。第二句转向未来：“In a few years, perhaps, after food companies have taken the bitterness from canned soup and TV dinners, they can set their sights on something more useful: a bitter blocker in a bottle that any of us can sprinkle on our brussels sprouts or stir into our grapefruit juice.”（也许再过几年，当食品公司把罐装汤和电视晚餐里的苦味去除之后，它们就可以把目光投向更有用的东西：一瓶任何普通人都能撒在球芽甘蓝上或搅进西柚汁里的苦味阻滞剂）。题干中的 look into the future 对应 In a few years, perhaps；application 对应 set their sights on something more useful 以及后面具体描述的瓶装苦味阻滞剂用法。H 段虽然也谈用途（用 AMP 消除氯化钾余味、给儿童止咳糖浆去除涩味等），但它的落点是“让加工食品不那么不健康”这一健康效果（即第 6 题的根据），并非题干所要的“未来应用场景”展望；D 段的 Perhaps as a result 也不是时间展望。因此答案是 I。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Bitterness means different information for human and animals",
          "translation": "苦味对人类和动物而言传递着不同的信息（哪一个段落说明了这一点？）",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "\"Humans are the only species that enjoys bitter taste,\" says Charles Zuker, a neuroscientist at the University of California School of Medicine at San Diego. \"Every other species is averse to bitter because it means bad news."
          },
          "synonyms": [
            "“for human” 对应原文的 “Humans are the only species that enjoys bitter taste”，人类是唯一享受苦味的物种",
            "“for animals” 对应原文的 “Every other species is averse to bitter”，其他所有物种都厌恶苦味",
            "“means different information” 同义替换为原文的 “it means bad news” 与前半句的 enjoys bitter taste，即同一个苦味对人类是享受、对其他动物却是“坏消息”，信息含义截然不同"
          ],
          "locatingTip": "定位：题干出现 human 与 animals 这对对比概念，回原文扫描人类与其他物种的对比表达。C 段引用神经科学家 Charles Zuker 的话，直接以 Humans are the only species… / Every other species… 的句式构成对比，标志词非常明显。确定答案技巧：抓住对比句式与 it means bad news 中的 means（传达信息）即可确认。另外本段还有 “They defend plants by warning animals away and protect animals by letting them know when a plant may be poisonous.”，也在讲苦味对植物和动物传递的信息，与题干密合，因此答案是 C。",
          "analysis": "C 段是苦味研究的总述段，其中引用了加州大学圣迭戈分校神经科学家 Charles Zuker 的一段话：“Humans are the only species that enjoys bitter taste,” says Charles Zuker, a neuroscientist at the University of California School of Medicine at San Diego. “Every other species is averse to bitter because it means bad news. But we have learned to enjoy it. We drink coffee, which is bitter, and quinine [in tonic water] too.”（“人类是唯一享受苦味的物种，”……“其他所有物种都厌恶苦味，因为苦味意味着坏消息。但我们已经学会享受它。我们喝苦的咖啡，也喝含奎宁的汤力水。”）。同一段前文还说苦味化合物 “defend plants by warning animals away and protect animals by letting them know when a plant may be poisonous.”（通过警告动物远离来保护植物，也通过让动物知道某种植物可能有毒而保护动物）。可见苦味对动物是“有毒/危险的信号”，对人类却成了可以享受的风味，这正是题干 “Bitterness means different information for human and animals” 的意思，因此答案是 C。A 段只谈西柚的苦味成分，D、E 段讲人对苦味敏感度的个体差异与味觉机制，都不涉及人类与动物的对比。",
          "traps": []
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Spread process of bitterness inside of body",
          "translation": "苦味在体内传递的过程（哪一个段落描述了苦味信号在人体内部的传导流程？）",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Once a bitter signal has been received, it is relayed via proteins known as G proteins."
          },
          "synonyms": [
            "“Spread process … inside of body” 同义替换为原文的 “it is relayed via proteins known as G proteins” 以及后文的 “triggers a cascade of chemical reactions” 与 “delivers a signal to the brain”，描述的正是一个逐级传递的内部流程",
            "“Bitterness” 对应原文的 “a bitter signal”（苦味信号）",
            "“inside of body” 对应原文的 “within the cell” 与 “to the brain”，说明信号在体内细胞之间直至大脑的传导路径"
          ],
          "locatingTip": "定位：题干的关键词是 spread process（传递过程）与 inside of body（体内）。回原文找表示“信号逐级传递”的动词，如 relay、triggers a cascade、delivers a signal，这些表达全部集中在 E 段后半部分。确定答案技巧：E 段先讲味蕾的构造（像洋葱，由 50 至 100 个细长细胞组成，顶端有一簇受体捕获味觉分子），再讲信号传导：收到苦味信号后经 G 蛋白传递，G 蛋白（gustducin）引发一连串化学反应，改变细胞内离子浓度，最终把信号送到大脑。这整条链条就是题干所说的“苦味在体内传递的过程”，因此答案是 E；F 段只讲苦味受体基因的数量，G 段讲如何阻断苦味，都不描述传导过程。",
          "analysis": "E 段按“结构到功能”的顺序介绍味觉信号在体内的传递。先给出味蕾的构成：“Each taste bud, which looks like an onion, consists of 50 to 100 elongated cells running from the top of the bud to the bottom. At the top is a little clump of receptors that capture the taste molecules, known as tastants, in food and drink.”（每个味蕾形状像洋葱，由 50 到 100 个从顶部到底部的细长细胞组成；顶端有一小簇受体，负责捕获食物和饮料中被称为呈味物质的味觉分子）。接着描述信号的传导路径：“Once a bitter signal has been received, it is relayed via proteins known as G proteins.”（苦味信号一旦被接收，就通过称为 G 蛋白的蛋白质传递出去），随后是 “Known as gustducin, the protein triggers a cascade of chemical reactions that lead to changes in ion concentrations within the cell. Ultimately, this delivers a signal to the brain that registers as bitter.”（这种被称为 gustducin 的蛋白质引发一连串化学反应，导致细胞内离子浓度变化；最终把信号送达大脑，被登记为“苦”），最后引 Margolskee 的话把这一机制比作接力传水桶（“The signaling system is like a bucket brigade”）。题干“Spread process of bitterness inside of body”所指就是这个“受体捕获分子—G 蛋白接力—化学反应级联—送达大脑”的体内过程，因此答案是 E。注意不要误选 F 段：F 段出现 bitter-taste receptors 和 tastant，但讲的是受体基因有约 30 种、以及无论哪种呈味物质都同样尝出苦味，属于“编码与感知结果”，不是传导流程。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "How AMP blocks bitterness",
          "translation": "AMP 是如何阻断苦味的（哪一个段落解释了 AMP 起作用的机制？）",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "AMP has no bitterness of its own, but when put in foods, Margolskee and his colleagues discovered, it attaches to bitter-taste receptors."
          },
          "synonyms": [
            "“How AMP blocks bitterness” 同义替换为原文的 “it attaches to bitter-taste receptors”（它附着在苦味受体上），说明阻断的原理",
            "“blocks” 对应本段后文同类表达 “AMP may not be able to dampen every type of bitter taste”，dampen 与 block 同义",
            "“AMP has no bitterness of its own” 补充说明 AMP 本身无味，正因如此它才能在不带来新味道的前提下把苦味挡住"
          ],
          "locatingTip": "定位：题干关键词是 AMP 与 how（机制）。全文出现 AMP 的段落有 B、C、G、H、I，其中只有 G 段解释“为什么能挡苦味”的原理，首句 “Once they figured out the taste mechanism, scientists began to think of ways to interfere with it.” 已经点明本段讲“如何干扰味觉机制”。确定答案技巧：抓 attaches to bitter-taste receptors 这一机制性表述即可确认；B 段只描述 AMP 处理过的果汁喝着不苦（现象），H、I 段讲 AMP 的用途与前景，都不是“如何阻断”的原理，因此答案是 G。",
          "analysis": "G 段是全文唯一解释苦味阻断原理的段落。开头交代思路：“Once they figured out the taste mechanism, scientists began to think of ways to interfere with it.”（科学家搞清楚味觉机制后，就开始琢磨如何干扰它）。随后聚焦 AMP：“They tried AMP, an organic compound found in breast milk and other substances, which is created as cells break down food. AMP has no bitterness of its own, but when put in foods, Margolskee and his colleagues discovered, it attaches to bitter-taste receptors.”（他们试用了 AMP——一种存在于母乳等物质中、由细胞分解食物时产生的有机化合物。AMP 本身没有苦味，但 Margolskee 及其同事发现，把它放进食物里时，它会附着在苦味受体上）。接下来还补充了局限与后续研发：“As effective as it is, AMP may not be able to dampen every type of bitter taste, because it probably doesn't attach to all 30 bitter-taste receptors.”（尽管有效，AMP 未必能压制所有类型的苦味，因为它大概不能附着到全部 30 种苦味受体上），以及用 high-throughput screening 筛选新阻滞剂的流程。题干问 How AMP blocks bitterness，答案依据就是 attaches to bitter-taste receptors（占据受体，使苦味分子无法传递苦味信号）。B 段虽然也出现 AMP，但只写了试验中 305 号果汁不苦、以及 AMP 是“blocks the bitterness in foods without making them less nutritious”的定义式描述，没有展开机制，因此答案是 G。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Some bitterness blocker may help lower unhealthy impact.",
          "translation": "某些苦味阻滞剂可能有助于降低（食品的）不健康影响。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "H",
            "quote": "In time, some taste researchers believe, compounds like AMP will help make processed foods less unhealthy."
          },
          "synonyms": [
            "“Some bitterness blocker” 同义替换为原文的 “compounds like AMP”，AMP 就是文中反复提到的苦味阻滞剂",
            "“help lower unhealthy impact” 同义替换为原文的 “help make processed foods less unhealthy”，less unhealthy 与 lower unhealthy impact 同义",
            "“may” 对应原文的 will 与 some taste researchers believe，表示这是一种预期而非既成事实"
          ],
          "locatingTip": "定位：题干的关键是 unhealthy（不健康）这一评价性词汇，回原文找该词，全文只在 H 段首句出现 “less unhealthy”。确定答案技巧：H 段首句 “In time, some taste researchers believe, compounds like AMP will help make processed foods less unhealthy.” 与题干几乎一一对应（compounds like AMP 即 some bitterness blocker，make processed foods less unhealthy 即 lower unhealthy impact），后面用坎贝尔鸡汤含盐 850 毫克、可用氯化钾替代部分食盐并以 AMP 消除氯化钾余苦等例子展开，都属于“降低不健康影响”的具体做法，因此答案是 H。",
          "analysis": "H 段整段都在讲苦味阻滞剂如何让加工食品更健康。主题句：“In time, some taste researchers believe, compounds like AMP will help make processed foods less unhealthy.”（一些味觉研究人员相信，假以时日，像 AMP 这样的化合物将有助于让加工食品变得不那么不健康）。接下来的例子说明这一点：“Consider, for example, that a single cup of Campbell's chicken noodle soup contains 850 milligrams of sodium chloride, or table salt—more than a third of the recommended daily allowance.”（想想看，一杯坎贝尔鸡肉面条汤含 850 毫克氯化钠即食盐，超过每日建议摄入量的三分之一），盐的作用是掩盖罐装高温加工产生的苦味；解决办法是 “Part of the salt could be replaced by another salt, potassium chloride, which tends to be scarce in some people's diets. Potassium chloride has a bitter aftertaste, but that could be eliminated with a dose of AMP.”（部分食盐可用另一种盐——氯化钾替代，而氯化钾的苦味余味可以用一点 AMP 消除），最后还提到用苦味阻滞剂替代樱桃或葡萄香精来去除儿童止咳糖浆的涩味，并减轻抗组胺药、抗生素、某些 HIV 药物等的苦味。题干“Some bitterness blocker may help lower unhealthy impact”正是主题句中 less unhealthy 的改写，因此答案是 H。G 段讲 AMP 的阻断原理与筛查新阻滞剂的技术，I 段讲产业现状与未来展望，都不涉及“降低不健康影响”，故不选。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Bitterness introduced from a fruit",
          "translation": "苦味来自一种水果（哪一个段落指出苦味来源于某种水果？）",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Naringin, a natural chemical compound found in grapefruit, tastes bitter."
          },
          "synonyms": [
            "“Bitterness introduced from a fruit” 同义替换为原文的 “found in grapefruit”＋“tastes bitter”，即这种苦味来自西柚（葡萄柚）这一水果",
            "“a fruit” 对应原文的 grapefruit（西柚），A 段开篇讨论的正是这种水果的苦味",
            "“introduced from” 对应原文的 a natural chemical compound found in grapefruit，说明苦味由水果中天然存在的化合物带来"
          ],
          "locatingTip": "定位：题干有两个抓手——bitterness 与 a fruit，段首出现的西柚（grapefruit）本身就是水果，回原文扫读水果名，A 段首句即出现 grapefruit，B 段虽也提到西柚汁但重心是试验，C 段把西柚与十字花科蔬菜并列举例，I 段末尾虽又出现 grapefruit juice，但那只是苦味阻滞剂的使用场景。确定答案技巧：题干问“苦味来自某种水果”，要看原文哪一段明确指出水果中的致苦物质。A 段第二句 “Naringin, a natural chemical compound found in grapefruit, tastes bitter.” 直接点明西柚中的柚皮苷尝起来是苦的，答案即为 A。",
          "analysis": "A 段开篇解释西柚汁为何总是用小杯子盛：“There is a reason why grapefruit juice is served in little glasses: most people don't want to drink more than a few ounces at a time.”（西柚汁之所以总用小杯子上，是有原因的：多数人一次不想喝超过几盎司），紧接着给出原因：“Naringin, a natural chemical compound found in grapefruit, tastes bitter.”（柚皮苷，一种存在于西柚中的天然化合物，尝起来是苦的）。这里的 grapefruit 正是题干所说的 a fruit，found in grapefruit 对应 introduced from a fruit，tastes bitter 对应 bitterness。本段还补充了各方对苦味的态度（有人喜欢小剂量的苦味、有人完全想避开，包装商因此挑低柚皮苷的西柚，尽管柚皮苷有抗氧化作用），进一步印证苦味源自这一水果。B 段虽然也出现 grapefruit juice 与 bitter taste，但那是实验材料与现象，且真正的致苦物质在 A 段才被点明；C 段只是把西柚作为“有苦味但营养”的例子之一。因此答案是 A。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Genetic feature determines sensitivity",
          "translation": "遗传特征决定（对苦味的）敏感度。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "People have varying capacities for tasting bitterness, and the differences appear to be genetic."
          },
          "synonyms": [
            "“Genetic feature determines sensitivity” 同义替换为原文的 “the differences appear to be genetic”，即敏感度差异源于遗传",
            "“sensitivity” 对应原文的 “varying capacities for tasting bitterness”（品尝苦味的能力各不相同）与下文 “are especially sensitive to …”",
            "“People” 对应原文同句主语 People have varying capacities，说明这种由基因决定的差异存在于人群之中"
          ],
          "locatingTip": "定位：题干的关键是 genetic（遗传）与 sensitivity（敏感度），回原文找这两个概念同时出现的地方，D 段首句即出现 the differences appear to be genetic。确定答案技巧：D 段通篇讲人对苦味感受力的个体差异：75% 的人对 PTC 与 PROP 敏感、25% 的人不敏感；名为 supertasters 的人味蕾数量异常多、对苦味尤其敏感，并且更少吃十字花科蔬菜、更不喜好带苦味的酒。题干“Genetic feature determines sensitivity”正是首句的概括，因此答案是 D。E 段开头也提到 supertasters，但那是在讲他们饮酒频率的统计结果，基因与敏感度的因果关系在 D 段已经给出了。",
          "analysis": "D 段是“个体差异段”。首句即本题定位句：“People have varying capacities for tasting bitterness, and the differences appear to be genetic.”（人们品尝苦味的能力各不相同，而这些差异看来是遗传造成的）。随后作者给出证据与延伸：约 75% 的人对苯硫脲（phenylthiocarbamide）和 6-正丙基硫尿嘧啶（6-n-propylthiouracil）这两种苦味化合物敏感，25% 的人不敏感；犹他大学遗传学家 Stephen Wooding 指出，对苯硫脲敏感的人似乎更少吃十字花科蔬菜；有些人被称作 supertasters（超级味觉者），因为味蕾数量异常多而对 6-正丙基硫尿嘧啶格外敏感，他们往往回避一切苦味食物（蔬菜、咖啡、黑巧克力），也因此往往偏瘦，并且不太喜欢通常微苦的酒精饮料。题干“Genetic feature determines sensitivity”中的 genetic feature 对应 the differences appear to be genetic，determines sensitivity 对应 varying capacities / are especially sensitive，因此答案是 D。C 段谈苦味研究的意义，E 段谈味觉信号传导与 supertasters 的饮酒统计，均未把“遗传”与“敏感度”建立因果关系。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–12 摘要填空（Choose NO MORE THAN TWO WORDS from the passage）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 12
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "The reason why grapefruit tastes bitter is because a substance called 9 ______ contained in it.",
          "translation": "西柚尝起来苦，是因为其中含有一种叫做 ______ 的物质。",
          "answer": "naringin",
          "wordClass": "名词（不可数，化合物名称；位于 called 之后作宾语，与前面的 a substance 对应，直接用原文的单词形式，不加冠词、不变复数）",
          "locating": {
            "paragraph": "A",
            "quote": "Naringin, a natural chemical compound found in grapefruit, tastes bitter."
          },
          "synonyms": [
            "“a substance called …” 同义替换为原文的 “a natural chemical compound”，即一种天然化合物",
            "“contained in it” 同义替换为原文的 “found in grapefruit”，其中 it 回指 grapefruit（西柚）",
            "“The reason why grapefruit tastes bitter” 同义替换为原文的 “tastes bitter”，原文以 Naringin 作主语直接给出致苦原因"
          ],
          "locatingTip": "定位：摘要的主题句本身就是全文第 1 段的改写，定位词 grapefruit、bitter 直接指向 A 段；A 段第二句用解释性句式给出西柚苦味的来源。确定答案技巧：空格前的 a substance called 提示后面要填“某种物质的名称”，原文中与 substance 对应的词是 a natural chemical compound，其名称 Naringin 就是答案。填写时照抄原文拼写 naringin（专有化合物名，原文首字母大写，答案表为小写形式，按答案表原样写 naringin），且只需一个词。",
          "analysis": "摘要第一句 “The reason why grapefruit tastes bitter is because a substance called 9 ______ contained in it.” 是原文 A 段开头几句的浓缩。A 段写道：“There is a reason why grapefruit juice is served in little glasses: most people don't want to drink more than a few ounces at a time. Naringin, a natural chemical compound found in grapefruit, tastes bitter.”（西柚汁之所以用小杯子盛是有原因的：多数人一次喝不了几盎司。柚皮苷——一种存在于西柚中的天然化合物——尝起来是苦的）。原文用“Naringin, a natural chemical compound found in grapefruit, tastes bitter”交代致苦物质：a substance 对应 a natural chemical compound，contained in it 对应 found in grapefruit，called 提示名词。因此空格填 naringin（柚皮苷）。注意本段还提到 “juice packagers often select grapefruit with low naringin”，说明该物质含量的高低是选果标准，进一步印证它正是苦味来源；不要误填 antioxidant（那是柚皮苷的属性，不是物质名称）。",
          "traps": [
            "为什么不能填 antioxidant：antioxidant properties 是原文对柚皮苷属性的描述（“the compound has antioxidant properties”），它是一种性质而非“一种叫做某名的物质”，题干要求的是物质名称。",
            "为什么不能填 chemical compound：原文的 a natural chemical compound 是对 Naringin 的同位语解释，若把解释语填进空格，会与题干的 a substance 重复，语义不通。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "It gives a signal that certain plant is 10 ______ .",
          "translation": "它（苦味）发出信号，表明某种植物是 ______ 的。",
          "answer": "poisonous",
          "wordClass": "形容词（作系动词 is 的表语，说明植物的性质状态；只能用原文中的形容词原级，不加比较级或副词形式）",
          "locating": {
            "paragraph": "C",
            "quote": "They defend plants by warning animals away and protect animals by letting them know when a plant may be poisonous."
          },
          "synonyms": [
            "“certain plant is …” 同义替换为原文的 “when a plant may be poisonous”，把原文的可能性从句改写为陈述",
            "“It gives a signal” 同义替换为原文的 “letting them know”，都是“发出提示、让动物得知”的意思",
            "“protect animals” 这一动机也对应题干的“给出信号”，原文把苦味视为动植物之间的信息媒介"
          ],
          "locatingTip": "定位：摘要中 plants、signal 与 poisonous 一类概念集中在 C 段：“They defend plants by warning animals away and protect animals by letting them know when a plant may be poisonous.” 确定答案技巧：空格前是 is，说明需要一个形容词或名词性表语；原文对应处是 may be poisonous，表语 poisonous（有毒的）就是答案。填写时只写一个词 poisonous；原文的 may be 表可能性，题干已用 gives a signal that … is 表达同一层不确定的信息，不必把 may 一并写入。",
          "analysis": "摘要第二、三句 “However, bitterness plays a significant role for plants. It gives a signal that certain plant is 10 ______.” 概括的是 C 段的这几句：“There are thousands of bitter-tasting compounds in nature. They defend plants by warning animals away and protect animals by letting them know when a plant may be poisonous.”（自然界有数千种带苦味的化合物。它们通过警告动物远离来保护植物，也通过让动物知道某种植物可能有毒来保护动物）。对应关系清晰：It gives a signal 对应 letting them know，certain plant is 对应 a plant may be poisonous，空格所需的表语就是 poisonous（有毒的）。题干省去了 may，把原文的不确定语气改为断言，这属于摘要题的常规压缩，不影响答案。注意不要填 bitterness 或 bitter-tasting：那描述的是化合物本身的味道，而不是“植物是否有毒”这一被传递的信息。",
          "traps": [
            "为什么不能填 poisonous 以外的同义词（如 toxic）：雅思摘要填空题要求从原文选词，答案只能是原文出现过的 poisonous，此处也不允许照抄别的词的改写形式。",
            "为什么不需要写 may：may be poisonous 中的 may 是情态动词，不是答案词；题干已经用 is 定位到表语位置，只填形容词 poisonous 一个词即可（限两个词，但一个词最稳妥）。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "According to a scientist at the University of Utah, 11 ______ have exceptionally plenty of 12 ______ , which allows them to perceive bitter compounds.",
          "translation": "据犹他大学的一位科学家说，______ 拥有特别多的 ______，这使他们能够感知苦味化合物。",
          "answer": "supertasters",
          "wordClass": "名词（复数，指“超级味觉者”这一类人；作主句的主语，空格后是复数谓语 have，必须用复数形式，照抄原文 supertasters）",
          "locating": {
            "paragraph": "D",
            "quote": "Some people, known as supertasters, are especially sensitive to 6-n-propylthiouracil because they have an unusually high number of taste buds."
          },
          "synonyms": [
            "“11 ______ have exceptionally plenty of 12 ______” 同义替换为原文的 “they have an unusually high number of taste buds”，exceptionally 对应 unusually，plenty of 对应 a high number of",
            "“supertasters” 在原文以 “Some people, known as supertasters” 的形式引出，known as 与题干所填名词构成同一指称",
            "“which allows them to perceive bitter compounds” 同义替换为原文的 “are especially sensitive to 6-n-propylthiouracil”，即味蕾多导致对苦味化合物格外敏感"
          ],
          "locatingTip": "定位：摘要提到 University of Utah 和感知苦味的能力，D 段中同时出现 “according to Stephen Wooding, a geneticist at the University of Utah” 以及关于 supertasters 味蕾数量的句子，定位十分明确。确定答案技巧：空格后是复数谓语 have，主语必须是复数名词，而且要与“味蕾异常多”搭配。原文 “Some people, known as supertasters, are especially sensitive to 6-n-propylthiouracil because they have an unusually high number of taste buds.” 中，they 回指 some people, known as supertasters，因此第 11 空填 supertasters，第 12 空填 taste buds。",
          "analysis": "摘要最后一句 “According to a scientist at the University of Utah, 11 ______ have exceptionally plenty of 12 ______, which allows them to perceive bitter compounds.” 对应 D 段的两处信息。一处是与犹他大学有关的说法：“Those who are sensitive to phenylthiocarbamide seem to be less likely than others to eat cruciferous vegetables, according to Stephen Wooding, a geneticist at the University of Utah.”（犹他大学遗传学家 Stephen Wooding 指出，对苯硫脲敏感的人似乎更少吃十字花科蔬菜）；另一处是本题的落点句：“Some people, known as supertasters, are especially sensitive to 6-n-propylthiouracil because they have an unusually high number of taste buds.”（有些人被称为超级味觉者，由于味蕾数量异常多，他们对 6-正丙基硫尿嘧啶格外敏感）。题干把 have exceptionally plenty of taste buds 改写成拥有“特别多的”味蕾，并用 which allows them to perceive bitter compounds 概括原文的 are especially sensitive to …，主语正是这些 supertasters。需要说明的是：原文中“味蕾异常多”这一特征并未直接挂在犹他大学的 Stephen Wooding 名下，Wooding 谈的是苯硫脲敏感者与饮食的关系，题干把两条信息合并在一个句子并以 a scientist at the University of Utah 作引，属于摘要题的常见压缩，答案仍按原文取 supertasters。填写时注意用复数 supertasters，与复数谓语 have 保持一致。",
          "traps": [
            "为什么不能填 some people：some people 是原文的泛指说法，不是被命名的那一类人；题干空格后是 have，且摘要要填的是“被称为某名的那群人”，原文用 known as 引出的专有称呼 supertasters 才是答案。",
            "为什么不填单数 supertaster：空格后的谓语 have 是复数形式，“have exceptionally plenty of…” 要求主语为复数，因此必须写复数形式 supertasters。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "According to a scientist at the University of Utah, 11 ______ have exceptionally plenty of 12 ______ , which allows them to perceive bitter compounds.",
          "translation": "据犹他大学的一位科学家说，______ 拥有特别多的 ______，这使他们能够感知苦味化合物。",
          "answer": "taste buds",
          "wordClass": "名词短语（复数，指味蕾；位于介词 of 之后作介词宾语，与前面的 plenty of 构成数量短语，原文用复数形式 taste buds，填两个词，符合“不超过两个词”的限制）",
          "locating": {
            "paragraph": "D",
            "quote": "because they have an unusually high number of taste buds"
          },
          "synonyms": [
            "“exceptionally plenty of” 同义替换为原文的 “an unusually high number of”，都表示数量异常多",
            "“taste buds” 在原文中以复数形式直接出现：“they have an unusually high number of taste buds”",
            "“which allows them to perceive bitter compounds” 同义替换为原文的 “are especially sensitive to 6-n-propylthiouracil”，味蕾多导致对苦味化合物敏感"
          ],
          "locatingTip": "定位：与第 11 空同句，定位仍在 D 段 “Some people, known as supertasters, are especially sensitive to 6-n-propylthiouracil because they have an unusually high number of taste buds.” 确定答案技巧：题干说这群人拥有“特别多的”某样东西，原文对应 unusually high number of 后面的名词短语就是 taste buds（味蕾）；E 段开头 “Each taste bud, which looks like an onion, consists of 50 to 100 elongated cells…” 进一步解释味蕾的结构，可用来复核这个词。填写时写全两个词 taste buds，注意是复数并与原文一致。",
          "analysis": "摘要最后一句要求填出 supertasters 所拥有的、数量异常多的东西。D 段原句为：“Some people, known as supertasters, are especially sensitive to 6-n-propylthiouracil because they have an unusually high number of taste buds.”（有些人被称为超级味觉者，因为味蕾数量异常多，他们对 6-正丙基硫尿嘧啶格外敏感）。题干的 exceptionally plenty of 对应原文的 unusually high number of，空格所需的正是其后的名词短语 taste buds（味蕾）。逻辑上，正是味蕾数量多使得 supertasters 对苦味化合物格外敏感（这也解释了本段后文所说他们回避蔬菜、咖啡、黑巧克力、酒类），与题干的 which allows them to perceive bitter compounds 完全吻合。E 段进一步补充了味蕾的构造与数目（“Each taste bud, which looks like an onion, consists of 50 to 100 elongated cells running from the top of the bud to the bottom.”），可作为该词的复核依据。答案写成复数短语 taste buds，两个词，符合“不超过两个词”的要求。",
          "traps": [
            "为什么不能只写 taste bud：原文用的是复数 a high number of taste buds，且所指的是一群味蕾的数量多，单数形式与语义不符。",
            "为什么不能填 taste receptors：receptor（受体）是味蕾顶端的一小簇结构（“a little clump of receptors”），与味蕾不是同一层级的概念，题干问的是“数量异常多”的那个整体结构，即味蕾。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 13–14 单项选择（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 13,
        "end": 14
      },
      "items": [
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "What is the main feature of AMP according to this passage?",
          "translation": "根据本文，AMP 的主要特征是什么？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "This juice had been treated with adenosine monophosphate, or AMP, a compound that blocks the bitterness in foods without making them less nutritious."
          },
          "synonyms": [
            "“offset bitter flavour in food” 同义替换为原文的 “blocks the bitterness in foods”，offset 与 block 同义，bitter flavour 对应 the bitterness",
            "“without making them less nutritious” 补充说明 AMP 只挡苦味、不减营养，说明它作用于风味而非营养",
            "G 段的 “AMP has no bitterness of its own, but when put in foods … it attaches to bitter-taste receptors.” 也印证 AMP 的特征是“附着受体、阻挡苦味”"
          ],
          "locatingTip": "定位：题干关键词是 AMP，全文出现 AMP 的段落有 B、C、G、H、I。要问“主要特征”，最直接的界定句在 B 段末尾：“This juice had been treated with adenosine monophosphate, or AMP, a compound that blocks the bitterness in foods without making them less nutritious.” 确定答案技巧：抓住同位语 a compound that blocks the bitterness in foods 这一界定，即可确认 AMP 的主要特征是“抵消食物中的苦味”，对应 A 项。另外 G 段的 “it attaches to bitter-taste receptors” 从机制上再次支持该特征。",
          "analysis": "B 段在描述作者参加的品鉴试验时，给出 AMP 的界定：“This juice had been treated with adenosine monophosphate, or AMP, a compound that blocks the bitterness in foods without making them less nutritious.”（这杯果汁用腺苷一磷酸即 AMP 处理过，这是一种能阻断食物中的苦味、又不会降低其营养价值的化合物）。由此可见 AMP 的主要特征就是阻断/抵消食物中的苦味——它本身没有苦味（G 段 “AMP has no bitterness of its own”），却能让带苦味的食物尝起来不苦，并且不影响营养价值。四个选项中只有 A 项 “offset bitter flavour in food” 与之对应，故答案为 A。",
          "traps": [
            "B 项（only exist in 304 cup）错：304 号杯恰恰是未经 AMP 处理、尝得出苦味的那杯，原文说 “Even the smallest sip of 304 had grapefruit's unmistakable bitter bite. But 305 was smoother”，AMP 处理的是 305 号那杯，且 AMP 存在于母乳等物质中（G 段 “an organic compound found in breast milk and other substances”），根本不存在“只存在于 304 杯中”的说法。",
            "C 项（tastes like citrus）错：柑橘般的酸味是果汁本身的味道，原文写 “there was the sour taste of citrus but none of the bitterness of naringin”，即 305 号有柑橘的酸味却没有柚皮苷的苦味；而 AMP 自身在 G 段被明确描述为 “AMP has no bitterness of its own”，它不提供柑橘味，只说“像柑橘”属张冠李戴。",
            "D 项（chemical reaction when meets biscuit）错：苏打饼干（a soda cracker）在试验中只是清口用的工具——“cleansing our palates between tastes with water and a soda cracker”，原文从未提到 AMP 与饼干发生化学反应，属于无中生有。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "What is the main function of G protein?",
          "translation": "G 蛋白的主要功能是什么？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Known as gustducin, the protein triggers a cascade of chemical reactions that lead to changes in ion concentrations within the cell. Ultimately, this delivers a signal to the brain that registers as bitter."
          },
          "synonyms": [
            "“transmitting bitter signals to the brain” 同义替换为原文的 “delivers a signal to the brain that registers as bitter”，transmit 对应 deliver，bitter signals 对应 a signal … that registers as bitter",
            "“main function” 对应原文 “Once a bitter signal has been received, it is relayed via proteins known as G proteins.”，relay 即“传递”，说明 G 蛋白的职责是接力传导信号",
            "“G protein” 在原文即 gustducin（“Known as gustducin, the protein triggers a cascade of chemical reactions”），其作用链条一直延伸到大脑"
          ],
          "locatingTip": "定位：题干关键词是 G protein，回原文找这一术语，集中在 E 段：“Once a bitter signal has been received, it is relayed via proteins known as G proteins.”、“The G protein involved in the perception of bitterness, sweetness, and umami was identified in the early 1990s”、“Known as gustducin, the protein triggers a cascade of chemical reactions…”以及 “Ultimately, this delivers a signal to the brain that registers as bitter.” 确定答案技巧：追问“G 蛋白做什么”，原文给出了完整链条：接收苦味信号并接力传递，引发化学反应改变细胞内离子浓度，最终把信号送达大脑并登记为“苦”。这一链条的落点正是把苦味信号传给大脑，对应 D 项。",
          "analysis": "E 段详细描述了苦味信号的体内传导过程。原文先说明味蕾顶端有一簇受体捕获味觉分子，随后写道：“Once a bitter signal has been received, it is relayed via proteins known as G proteins.”（苦味信号一旦被接收，就经由称为 G 蛋白的蛋白质传递出去）；接着指出这种参与苦味、甜味和鲜味感知的 G 蛋白即 gustducin：“Known as gustducin, the protein triggers a cascade of chemical reactions that lead to changes in ion concentrations within the cell. Ultimately, this delivers a signal to the brain that registers as bitter.”（这种被称为 gustducin 的蛋白质引发一连串化学反应，导致细胞内离子浓度变化；最终把信号送达大脑，被登记为“苦”）。可见 G 蛋白的主要功能是充当信号传递的中继：把受体接收到的苦味信号接力传下去，直到送达大脑。四个选项中只有 D 项 “transmitting bitter signals to the brain” 与这一描述吻合，故答案为 D。",
          "traps": [
            "A 项（collecting taste molecule）错：收集味觉分子（tastants）的是味蕾顶端的受体，原文写 “At the top is a little clump of receptors that capture the taste molecules, known as tastants, in food and drink.”，执行 capture 动作的是 receptors（受体），不是 G 蛋白，选项把两个结构的功能对调了。",
            "B 项（identifying different flavors elements）错：原文没有说 G 蛋白负责辨别不同风味成分；恰恰相反，F 段强调 “no matter which tastant enters the mouth or which receptor it attaches to, bitter always tastes the same to us”（无论哪种呈味物质进入口中、附着到哪个受体上，苦味对我们来说尝起来都一样），苦味的区分并不依赖 G 蛋白的“识别”，本选项属于无中生有。",
            "C 项（resolving large molecules）错：原文只提到 G 蛋白引发一连串化学反应并改变细胞内的离子浓度（“triggers a cascade of chemical reactions that lead to changes in ion concentrations within the cell”），完全没有“分解大分子”的说法，属于无中生有。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
