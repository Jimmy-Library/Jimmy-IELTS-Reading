(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-low-104", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-low-104",
  "meta": {
    "examId": "p2-low-104",
    "title": "1115纸笔Should we stop eating meat 是否应该吃素",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–17 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 17
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "the suggestion that people may need to adapt to a different quality of meat",
          "translation": "有人提出，人们可能需要适应品质不同的肉类。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Garnett admits, though, that if this kind of approach were generally adopted, it would require a major adjustment in food preferences; people would have to get used to chicken, for example, with less fat."
          },
          "synonyms": [
            "「people may need to adapt」同义替换为「it would require a major adjustment in food preferences; people would have to get used to」，都表示人们必须调整、习惯新的吃法",
            "「a different quality of meat」同义替换为「chicken, for example, with less fat」，脂肪更少的鸡肉就是品质不同的肉",
            "「the suggestion」对应原文由 Garnett admits 引出的建议性说法，说明这是某位研究者提出的看法而非事实"
          ],
          "locatingTip": "定位：题干关键词 quality of meat（肉的品质）在原文不会原词出现，要按同义方向找“改变饮食偏好、习惯吃某种肉”的表达，锁定第 5 段（E）末句 “…if this kind of approach were generally adopted, it would require a major adjustment in food preferences; people would have to get used to chicken, for example, with less fat.”。确定答案技巧：段落信息匹配题只问“这条信息出现在哪一段”，不要求该段主题完全一致；less fat 属于 quality（品质）范畴，food preferences、get used to 对应 adapt，两个信息点同时命中的只有 E 段，因此选 E。",
          "analysis": "第 5 段（E）讲的是牲畜的“剩余价值”：先以鸡为例说明它们可以靠剩饭和能找到的东西活着（subsist on leftovers and whatever they find），再引用 Tara Garnett 说明这些动物的用处，最后一句是本条的落点：“Garnett admits, though, that if this kind of approach were generally adopted, it would require a major adjustment in food preferences; people would have to get used to chicken, for example, with less fat.”（不过 Garnett 承认，如果这种做法被普遍采用，就需要在食物偏好上做出重大调整；例如人们得习惯吃脂肪更少的鸡肉。）题干把这个条件句概括为“人们可能需要适应品质不同的肉”：require a major adjustment 与 people would have to get used to 一起对应 may need to adapt，food preferences 对应饮食习惯，而 chicken … with less fat（脂肪更少的鸡肉）正是一种 a different quality of meat。注意本段前半句的 leftovers 是第 26 题的落点，两条信息同段出现并不冲突，但本题只取“需要适应不同品质的肉”这一句。",
          "traps": [
            "为什么不选 G 段：G 段讨论的是“只不吃肉却仍喝奶”的素食方式为什么难以成立，重点在 dairy cows 与 no practical reason to waste so much meat，与消费者要适应不同品质的肉无关。",
            "为什么不选 F 段：F 段讲的是肉类副产品（皮革、羊毛）会消失以及贫穷国家仍需要动物蛋白，虽然也提到肉，但没有涉及人们必须改变口味或接受更瘦的肉。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a description of the way animals were fed in the past",
          "translation": "对过去动物喂养方式的描述。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "For most of human history, livestock grazed on land that wasn't suitable for ploughing, and in doing so they converted inedible grass into edible meat and milk."
          },
          "synonyms": [
            "「in the past」同义替换为「For most of human history」，都指向久远的过去",
            "「the way animals were fed」同义替换为「livestock grazed on land that wasn't suitable for ploughing」（牲畜在不适合耕作的土地上吃草）",
            "「they converted inedible grass into edible meat and milk」进一步说明它们的食物来源是草，即喂养方式的具体内容"
          ],
          "locatingTip": "定位：题干的时间提示 in the past 是本题钥匙，回原文找表示过去、历史的表达，第 4 段（D）的 For most of human history（人类历史的大部分时期）直接对应。确定答案技巧：找到时间标志后还要确认该句是否在描述“动物吃什么、怎么被喂养”——grazed on land 与 converted inedible grass into edible meat and milk 正是典型的“吃草为生”的描写（把不可食用的草转化为可食用的肉和奶），因此答案是 D 段；注意不要被 E 段的 leftovers 带偏，E 段开头是 In some parts of the world today，说的是今天的情况。",
          "analysis": "第 4 段（D）先承认无肉世界在很多方面更环保，随后转折指出代价，其中第三句是本条定位句：“For most of human history, livestock grazed on land that wasn't suitable for ploughing, and in doing so they converted inedible grass into edible meat and milk.”（在人类历史的大部分时期，牲畜在不适合耕作的土地上吃草，并因此把人类不能吃的草转化为可以吃的肉和奶。）整句讲的就是“过去牲畜靠什么吃饭”：它们在无法耕种的边际土地上放牧，以草为食。题干的对象是 the way animals were fed（动物被喂养的方式），时间限定是 in the past，与 For most of human history 完全吻合，因此答案是 D 段。做题提醒：段落匹配题中“过去、现在、将来”这类时间词往往是唯一的区分依据，本题 A 段有 Last year、E 段有 today、H 段有 by 2050，只有 D 段的 For most of human history 指向遥远的过去。",
          "traps": [
            "为什么不选 E 段：E 段开头是 In some parts of the world today，讲的是当下鸡等牲畜吃剩饭的情况（subsist on leftovers），时间与题干的 in the past 不符。",
            "为什么不选 B 段：B 段虽然提到 most livestock eat grain，但谈的是“用本可给人吃的谷物喂养牲畜”所造成的资源浪费，属于当下的批评，并非对过去喂养方式的描述。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "a prediction in regard to human demand for meat",
          "translation": "关于人类对肉类需求的预测。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "The United Nations' best guess is that by 2050, the world will need to more than double its production of meat, an increase that would be environmentally disastrous."
          },
          "synonyms": [
            "「prediction」同义替换为「best guess」（最佳推测），都表示对未来的预估",
            "「human demand for meat」同义替换为「the world will need to more than double its production of meat」，并把上一句的 the world will continue to want evermore meat 作为铺垫",
            "「by 2050」是明确的未来时间标志，说明这是预测而非既成事实"
          ],
          "locatingTip": "定位：题干的两个关键词是 prediction（预测）与 demand for meat（对肉的需求），回原文找带未来时间和推测口吻的句子，如 by 2050 与 best guess，落在第 8 段（H）末句。确定答案技巧：段落匹配题要先判断“信息类型”，本题要找的是“预测”；H 段连续两句都在说未来的肉类需求（the world will continue to want evermore meat 与 The United Nations' best guess is that by 2050 … more than double its production of meat），因此答案是 H。与 A 段去年的消费数据（Last year the world consumed …）形成对照，后者只是已发生的事实。",
          "analysis": "第 8 段（H）承担全文的收束功能：先说即便无肉世界纸上听起来很好，乌托邦式的未来仍会保留一些动物产品，然后提出真正的问题——我们想要多少肉、又该如何生产。接着连出两句与未来需求有关的表述：“The most straightforward approach is to assume that the world will continue to want evermore meat.”（最直接的做法是假设世界会持续想要越来越多的肉。）“The United Nations' best guess is that by 2050, the world will need to more than double its production of meat, an increase that would be environmentally disastrous.”（联合国的最佳推测是，到 2050 年世界的肉类产量需要翻一倍以上，这样的增长对环境将是灾难性的。）题干的 a prediction 对应 best guess 与 will need，human demand for meat 对应 the world will need to more than double its production of meat 以及 continue to want evermore meat，因此答案是 H 段。注意 A 段虽然也谈肉类消费，但用的是 Last year（去年）与一般现在时，属于对现状的陈述，不能用来回答“预测”。",
          "traps": [
            "为什么不选 A 段：A 段引用的是去年的数据（Last year the world consumed 289 million tonnes of meat, 700 million tonnes of milk and 1.2 billion eggs），描述过去已发生的消费事实，不含对未来的预测。",
            "为什么不选 I 段：I 段谈的是在肉需求持续增长的情景下，如何以最低环境成本生产最多肉（favours intensive farming），落脚点在“生产方式”，而不是对肉类需求的预测。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "the potential consequences of a meat-free world for textile industries",
          "translation": "无肉世界对纺织业的潜在影响。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Such a world would have to replace the 11 million tonnes of leather and 2 million tonnes of wool that come annually from livestock farming and which are turned into clothing."
          },
          "synonyms": [
            "「a meat-free world」同义替换为「Such a world」，Such 回指前一句的 a meat-free world",
            "「the potential consequences」同义替换为「would have to replace」，以一种被动的“不得不寻找替代品”的方式表达后果",
            "「textile industries」同义替换为「leather … wool … turned into clothing」，皮革和羊毛被制成衣物，正是纺织业的原料与产品"
          ],
          "locatingTip": "定位：题干关键词 textile industries（纺织业）在原文不会原词出现，改按相关材料词 leather、wool、clothing 搜索，全篇只有第 6 段（F）同时出现这三个词，可一步锁定。确定答案技巧：F 段首句说无肉世界的另一个坏处是动物副产品消失（the disappearance of animal by-products），紧接着指出这个世界必须补上来自畜牧业的 1100 万吨皮革和 200 万吨羊毛，而这些原料被制成衣物；leather、wool、clothing 与 textile industries 直接相关，would have to replace 则是“不得不应对的后果”，故答案为 F。",
          "analysis": "第 6 段（F）集中讲无肉世界的经济损失：第一句点题“Another downside to a meat-free world would be the disappearance of animal by-products.”（无肉世界的另一个坏处是动物副产品将消失），第二句即定位句“Such a world would have to replace the 11 million tonnes of leather and 2 million tonnes of wool that come annually from livestock farming and which are turned into clothing.”（这样的世界将不得不找到替代品，来补上畜牧业每年提供的 1100 万吨皮革和 200 万吨羊毛——这些原料会被制成衣物。）这里的 leather（皮革）与 wool（羊毛）是纺织工业的基础原料，turned into clothing（被制成衣服）则点明了产业链的落点，题干中的 textile industries 正是对这一产业环节的概括；potential consequences 对应 would have to replace 所表达的压力，因此答案是 F 段。本段后半还有 Annette Pinner 关于贫困国家与动物蛋白的引语，那是第 23 题的落点，本题只需第二句这一条信息。",
          "traps": [
            "为什么不选 D 段：D 段讲的是无肉世界会加剧粮食不安全（contribute to food insecurity），涉及的是土地用途与食物供给，不是皮革、羊毛等纺织原料。",
            "为什么不选 B 段：B 段虽然出现 forests 之类的词，但讲的是砍伐森林与灌溉系统对环境的破坏，属于农业对自然的影响，与纺织业毫无关系。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 18–22 摘要填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 18,
        "end": 22
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "Agriculture causes significant harm to the environment in a number of ways, including the frequent use of 18 ________ in modern farming and the cutting down of trees.",
          "translation": "农业以多种方式对环境造成严重破坏，包括现代农业中 ________ 的频繁使用和砍伐树木。",
          "answer": "irrigation",
          "wordClass": "名词（不可数，指农业灌溉；位于介词 of 之后作介词宾语，与前面的名词 use 构成 use of irrigation，填名词不可数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "2",
            "quote": "Take for example the felled forests and the common use of irrigation systems."
          },
          "synonyms": [
            "「the frequent use」同义替换为「the common use」，都表示使用非常普遍",
            "「irrigation」与原文的「irrigation systems」指同一事物，题干只保留核心名词，故填 irrigation",
            "「modern farming」同义替换为原段首句的「All agriculture」，整段讨论的都是农业活动"
          ],
          "locatingTip": "定位：摘要的标题是 How does agriculture damage the environment?，与原文第 2 段（B）首句 All agriculture damages the environment 完全对应；空格与“砍伐树木”并列，回原文找该段给出的两个例子，即 felled forests 与 irrigation systems。确定答案技巧：题干中的 the cutting down of trees 对应原文的 felled forests，那么 the frequent use of … 就对应 the common use of irrigation systems，空格填 irrigation；注意题干要求 ONE WORD ONLY，不写 systems。",
          "analysis": "原文第 2 段（B）开头两句：“All agriculture damages the environment. Take for example the felled forests and the common use of irrigation systems.”（所有农业都会破坏环境。例如被砍伐的森林，以及灌溉系统的普遍使用。）摘要题干把这两个例子改写为 including the frequent use of 18 … and the cutting down of trees，其中 the cutting down of trees 对应 felled forests（砍伐森林），frequent use 对应 common use，the use of 后面被使用的对象就是 irrigation systems，取核心名词得 irrigation。词性上，空格位于介词 of 之后、名词 use 的所有格结构中，必须填名词；irrigation 是不可数名词，需保持单数原形、不加冠词，也不能写成 irrigation systems（超过 One Word Only 的词数限制）。",
          "traps": [
            "不要填 systems：题干限定 One Word Only，且 systems 是复数可数名词，与空格所需的单数名词性成分不符；原文的核心信息词是 irrigation。",
            "不要填 forests：felled forests 已经对应题干后半句的 the cutting down of trees，两者信息重复，不能再次出现在空格里。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "It is also responsible for the production of many greenhouse gases, more so than 19 ________ is.",
          "translation": "它还造成大量温室气体的产生，其程度超过 ________。",
          "answer": "transport",
          "wordClass": "名词（不可数，指交通运输；位于比较结构 than 之后作主语，空格后已有谓语 is，填名词不可数形式）",
          "locating": {
            "paragraph": "2",
            "quote": "And it may surprise you to know that agriculture creates more greenhouse gases than all methods of transport put together."
          },
          "synonyms": [
            "「more so than … is」同义替换为「creates more greenhouse gases than … put together」，都是比较结构",
            "「transport」同义替换为「all methods of transport put together」（所有交通方式的总和），题干把整组词压缩为一个名词",
            "「It is also responsible for the production of many greenhouse gases」同义替换为「agriculture creates more greenhouse gases」，It 回指 agriculture"
          ],
          "locatingTip": "定位：题干的核心是比较结构 more so than 19 … is，回原文找“农业产生的温室气体比什么更多”的句子，即第 2 段（B）的 “agriculture creates more greenhouse gases than all methods of transport put together”。确定答案技巧：比较结构 more … than 中，than 后面的比较对象就是本题答案；原文的比较对象是 all methods of transport put together，题干要求填入一个词，因此取其核心名词 transport，而不是 methods 或 gases。",
          "analysis": "原文第 2 段（B）第三句：“And it may surprise you to know that agriculture creates more greenhouse gases than all methods of transport put together.”（可能让你吃惊的是，农业产生的温室气体比所有交通方式加起来还要多。）摘要题干把它改写为 It is also responsible for the production of many greenhouse gases, more so than 19 … is，其中 It 回指摘要首句的 agriculture，more so than 对应 more greenhouse gases than，空格后的 is 与原文 put together 一样，都是在比较结构中作谓语部分。被比较的对象在原文中是 all methods of transport，压缩为一个名词就是 transport。词性上，transport 在这里是不可数名词，作比较从句的主语，不加冠词、不变复数；不要因为原文有 methods 就填 methods（那只是“方式”的泛称，单独一个 methods 无法表达“交通”这一概念）。",
          "traps": [
            "不要填 methods：methods 单独出现含义空泛，原文的关键概念是 transport（交通），题干与原文比较的都是“农业对交通”的温室气体排放量。",
            "不要填 gases：gases 已经出现在题干前半句 the production of many greenhouse gases 中，是“被排放的东西”，而不是“被比较的对象”。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "A meat-free diet would mean that actually less 20 ________ could be used for crops.",
          "translation": "无肉饮食将意味着实际上可有更少的 ________ 用于种植作物。",
          "answer": "land",
          "wordClass": "名词（不可数，指土地；受比较级 less 修饰，作 could be used for crops 的主语，填名词不可数形式）",
          "locating": {
            "paragraph": "2",
            "quote": "Altogether, if we switched to a vegan diet, meaning no meat, dairy or eggs, the land currently required for crops would drop by an estimated 21 per cent, about 3.4 million hectares, roughly the size of India."
          },
          "synonyms": [
            "「a meat-free diet」同义替换为「a vegan diet, meaning no meat, dairy or eggs」",
            "「less 20 … could be used for crops」同义替换为「the land currently required for crops would drop」，原文用 would drop 表示减少，题干改写成比较级 less",
            "「required for crops」同义替换为「used for crops」，都是“用于种植作物”"
          ],
          "locatingTip": "定位：题干关键词是 crops 与 less，回原文找“用于种植作物的土地会减少”的句子，第 2 段（B）末句的 the land currently required for crops would drop 精确对应。确定答案技巧：原文的主语是 the land，谓语 would drop 表示下降，题干把动作换成形容词比较级 less 20 … could be used，主语位置不变，因此答案是被减少的那个事物——land；注意 hectares 与 per cent 只是下降的幅度单位，不是被减少的对象。",
          "analysis": "原文第 2 段（B）末句：“Altogether, if we switched to a vegan diet, meaning no meat, dairy or eggs, the land currently required for crops would drop by an estimated 21 per cent, about 3.4 million hectares, roughly the size of India.”（总的来说，如果我们改为纯素饮食，即不吃肉、奶制品和鸡蛋，目前用于种植作物的土地将减少约 21%，也就是约 340 万公顷，大致相当于印度的面积。）摘要题干用 A meat-free diet would mean that actually less 20 … could be used for crops 来概括这句：a meat-free diet 对应 a vegan diet, meaning no meat, dairy or eggs，actually 对应 Altogether 所表示的总体估计，less … could be used for crops 对应 the land … required for crops would drop（“下降”与“更少”是同一意思的不同词性表达），空格承担的主语概念就是 land。词性上，less 是形容词比较级，只能修饰不可数名词，land 正符合；不要填 hectares 或 per cent，它们描述的是减少的数量而非减少的事物。",
          "traps": [
            "不要填 hectares：about 3.4 million hectares 是减少的幅度，用来说明规模大小，不是被用于种植作物的对象。",
            "不要填 crops：crops 已出现在空格后的 for crops 中，是被种植的东西，而不是“用来种作物的资源”。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Far less chemical pollution, specifically in the form of 21 ________, would also be released into the environment, especially if consumers cut out dairy and egg products as well as meat.",
          "translation": "同样会释放到环境中的化学污染也少得多，具体形式为 ________，尤其是当消费者在戒肉之外还戒掉奶制品和鸡蛋时。",
          "answer": "nitrogen",
          "wordClass": "名词（不可数，指氮；位于介词 of 之后作介词宾语，与前面的 in the form of 构成介词短语，填名词不可数形式）",
          "locating": {
            "paragraph": "3",
            "quote": "One environmental impact that would also lessen through a reduction in animal farming would be that of the nitrogen emitted from agricultural processes, which spreads into both waterways and land."
          },
          "synonyms": [
            "「chemical pollution」同义替换为「the nitrogen emitted from agricultural processes」，被排放的氮就是化学污染的具体形式",
            "「far less … would also be released」同义替换为「would also lessen」（同样会减轻、变少）",
            "「especially if consumers cut out dairy and egg products as well as meat」对应同段的「if everyone eliminated dairy products and eggs」，题干把条件扩展到还包括肉"
          ],
          "locatingTip": "定位：题干的关键点是 chemical pollution 与 in the form of，说明答案是一种被命名的化学物质；回原文找与污染相关的化学名词，第 3 段（C）首句的 the nitrogen emitted from agricultural processes 就是目标，且同段稍后的 this kind of pollution would fall by 60% 进一步印证。确定答案技巧：in the form of 后面要填物质名称（不可数名词），原文明确把这种物质描述为“随减少畜牧业而减少”（would also lessen through a reduction in animal farming），与题干 far less … would also be released 一一对应，因此填 nitrogen。",
          "analysis": "原文第 3 段（C）首句：“One environmental impact that would also lessen through a reduction in animal farming would be that of the nitrogen emitted from agricultural processes, which spreads into both waterways and land.”（另一种会因减少畜牧业而减轻的环境影响，是农业过程排放的氮——它会扩散到水道和土地中。）摘要题干把它改写为 Far less chemical pollution, specifically in the form of 21 …, would also be released into the environment, especially if consumers cut out dairy and egg products as well as meat：would also lessen 对应 far less … would also be released（“减轻”与“释放得更少”同义），One environmental impact 对应 chemical pollution，in the form of 引导出被排放物质的名称，即 nitrogen。词性上，of 是介词，其后必须跟名词性成分，nitrogen 为不可数名词，保持原形、不加冠词。另可交叉验证：同段引述 Allison Leach 的话说，若所有人都戒掉奶制品和鸡蛋，这种污染会下降 60%，题干中 especially if consumers cut out dairy and egg products as well as meat 与之一致，说明答案所在句正是这一信息的来源。",
          "traps": [
            "不要填 pollution：题干的 chemical pollution 已经出现，in the form of 后面要填的是这种污染的具体化学物质名称，而非 pollution 本身。",
            "不要填 antibiotics：抗生素在第 3 段末尾出现，但它讲的是“一半抗生素被喂给牲畜、导致耐药菌”这一单独问题，与题干所说的“释放到环境中的化学污染”不对应。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "In the US, there is clear evidence that considerable 22 ________ is caused by the demand for grazing land, although there is no information on this from other countries.",
          "translation": "在美国有明确证据表明，大量的 ________ 是由对放牧用地的需求造成的，尽管没有来自其他国家的相关信息。",
          "answer": "erosion",
          "wordClass": "名词（不可数，指水土流失；位于被动结构 is caused by 之前作主语，填名词不可数形式）",
          "locating": {
            "paragraph": "3",
            "quote": "Global statistics are hard to come by, but in the US at least, livestock account for 55% of erosion, mostly from forests being cut down to make way for grazing land."
          },
          "synonyms": [
            "「there is no information on this from other countries」同义替换为「Global statistics are hard to come by」（全球统计数据难以获得）",
            "「considerable 22 …」同义替换为「55% of erosion」，用比例数据表达“相当大的量”",
            "「is caused by the demand for grazing land」同义替换为「mostly from forests being cut down to make way for grazing land」，为了放牧而砍伐森林正是对放牧用地的需求"
          ],
          "locatingTip": "定位：题干的两个信息点最好用——in the US 与“其他国家没有相关数据”，对应原文的 Global statistics are hard to come by, but in the US at least，一步锁定第 3 段（C）后半部分。确定答案技巧：确定范围后找“在美国由畜牧/放牧造成的后果”，原文说 livestock account for 55% of erosion（牲畜占水土流失的 55%），account for 加百分比的结构说明被统计的对象就是空格所需的名词，且后面 mostly from forests being cut down to make way for grazing land 与题干 the demand for grazing land 对应，交叉验证后答案为 erosion（不可数名词）。",
          "analysis": "原文第 3 段（C）第四句：“Global statistics are hard to come by, but in the US at least, livestock account for 55% of erosion, mostly from forests being cut down to make way for grazing land.”（全球统计数据很难获得，但至少在美国，牲畜造成了 55% 的水土流失，主要原因是砍伐森林以腾出放牧用地。）摘要题干用 In the US, there is clear evidence that considerable 22 … is caused by the demand for grazing land, although there is no information on this from other countries 来对应：in the US 与原文原样一致，there is no information on this from other countries 对应 Global statistics are hard to come by，clear evidence 与 considerable 对应 55% 这一具体比例，is caused by the demand for grazing land 对应 mostly from forests being cut down to make way for grazing land（为放牧腾地而砍树）。原文中被 55% 统计的对象是 erosion，也就是空格所需的名词。词性上，erosion 为不可数名词，作被动句 is caused by 的主语，保持原形即可。",
          "traps": [
            "不要填 forests：forests 只是造成水土流失的原因（砍伐森林），题干已经用 the demand for grazing land 表达了这一层，空格要的是“被造成的东西”。",
            "不要填 livestock：livestock 是施动方（牲畜造成了流失），而题干空格处于 is caused by 之前，是被动句的主语，须填结果性名词 erosion。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 23–26 研究人员观点匹配（Matching）",
      "mode": "per_question",
      "questionRange": {
        "start": 23,
        "end": 26
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "It is not possible to say that a vegetarian diet is right for everyone.",
          "translation": "不能断言素食适合每一个人。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Whilst there's no doubt that considerable reduction of meat consumption would have an environmental benefit, we do have to be careful about saying it would be the best solution if the whole world went vegetarian,' says Annette Pinner, chief executive of the UK Vegetarian Society."
          },
          "synonyms": [
            "「It is not possible to say … is right for everyone」同义替换为「we do have to be careful about saying it would be the best solution if the whole world went vegetarian」，都以谨慎口吻表示不能一概而论",
            "「a vegetarian diet」同义替换为「if the whole world went vegetarian」",
            "「says Annette Pinner, chief executive of the UK Vegetarian Society」给出观点归属，确认答案为 C"
          ],
          "locatingTip": "定位：题干是一句态度保留的观点句，扫读全文找“不敢轻易下结论”的表达，如 be careful about saying，再配合人名 Annette Pinner，锁定第 6 段（F）后半的引语。确定答案技巧：观点匹配题先在题干划出态度关键词（not possible to say、right for everyone），再逐条核对人物主张；Pinner 先承认大幅减少肉食消费对环境有益，随即强调“我们必须谨慎地说它是让全世界吃素的最佳方案”，正是“不能断言素食适合所有人”的委婉说法，所以选 C。",
          "analysis": "第 6 段（F）后半引用英国素食协会负责人 Annette Pinner 的话：“Whilst there's no doubt that considerable reduction of meat consumption would have an environmental benefit, we do have to be careful about saying it would be the best solution if the whole world went vegetarian.”（虽然毫无疑问，大幅减少肉类消费会对环境有好处，但我们确实必须谨慎地断定：如果全世界都改吃素，那就是最佳的解决方案。）这句话的结构是“先肯定、后保留”：Whilst … no doubt 部分承认素食的环保价值，we do have to be careful about saying … 部分则明确反对把它当成放之四海而皆准的答案，题干 It is not possible to say that a vegetarian diet is right for everyone 正是这一保留态度的转述。观点归属也很清晰：句末直接标注 says Annette Pinner, chief executive of the UK Vegetarian Society，对应选项 C。本段紧随其后还提到对世界上最贫困的农村居民来说，动物可能代表获得额外收入的唯一现实希望，进一步说明 Pinner 认为素食并非对所有人都合适。",
          "traps": [
            "为什么不是 A（Allison Leach）：Leach 的观点在第 3 段，只说如果所有人都戒掉奶制品和鸡蛋，这类污染会下降 60%，属于量化陈述，不涉及“素食是否适合所有人”的判断。",
            "为什么不是 D（Helmut Haberl）：Haberl 的发言在第 7 段，讨论的是“不吃肉却仍喝奶”这种饮食方式难以实现，落点在实践可行性，而不是素食适合谁。",
            "为什么不是 B（Tara Garnett）与 E（Walter Falcon）：Garnett 谈的是鸡能吃剩饭以及人们需要适应更瘦的鸡肉，Falcon 谈的是集约化养殖，两人都没有对“素食适合所有人”表态。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "It may be economically preferable to farm animals in limited space.",
          "translation": "在有限空间内饲养动物可能在经济上更可取。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "Under this scenario the goal will have to be producing the most meat at the lowest environmental cost. According to Walter Falcon, an agricultural economist, this means fewer free range cattle and sheep in green fields."
          },
          "synonyms": [
            "「economically preferable」同义替换为「producing the most meat at the lowest environmental cost」，即用最低代价产出最多肉，经济上更划算",
            "「farm animals in limited space」同义替换为「the intensive ones」（集约化养殖，在有限空间内高密度饲养），并与 fewer free range cattle and sheep in green fields 形成对比",
            "「According to Walter Falcon, an agricultural economist」给出观点归属，确认答案为 E"
          ],
          "locatingTip": "定位：题干关键词 economically preferable 与 limited space，回原文找与成本、集约化有关的表述，第 9 段（I）的 the lowest environmental cost 与 intensive ones 正对应，而该段只出现一位研究者 Walter Falcon。确定答案技巧：先看 Falcon 的主张——要保留的牲畜系统是集约化的（the intensive ones），目标是 producing the most meat at the lowest environmental cost；intensive 意味着在有限空间内集中饲养，与 free range（散养）相反，因此题干所说的“在有限空间养殖更经济”正是 Falcon 的观点，选 E。",
          "analysis": "第 9 段（I）开篇给出了讨论的前提：“Under this scenario the goal will have to be producing the most meat at the lowest environmental cost.”（在这一情景下，目标将是在最低的环境成本下生产最多的肉。）紧接着引入农业经济学家 Walter Falcon 并转述其主张：“According to Walter Falcon, an agricultural economist, this means fewer free range cattle and sheep in green fields.”（据农业经济学家 Walter Falcon 所说，这意味着绿色田野上自由放养的牛羊会更少。）下一句以直接引语补充：“If you're going to keep some livestock systems, I think the ones you'll want to keep are the intensive ones.”（如果你要保留一些牲畜养殖体系，我认为你会想保留的是集约化的那些。）把这几句连起来看：the lowest … cost 对应 economically preferable，the intensive ones 对应 farm animals in limited space（集约化养殖就是在有限空间内高密度饲养），fewer free range cattle and sheep in green fields 则从反面强化了“不在开阔草地上散养”这一点，因此题干观点属于 Walter Falcon，选 E。",
          "traps": [
            "为什么不是 D（Helmut Haberl）：Haberl 在第 7 段讨论的是“不吃肉但喝奶”的饮食方式为何难以成立，完全没有涉及在有限空间内饲养动物的经济性。",
            "为什么不是 C（Annette Pinner）：Pinner 关注的是素食是否适合全世界，以及贫困地区居民的收入与蛋白质摄入，与集约化养殖的成本优势无关。",
            "为什么不是 A（Allison Leach）与 B（Tara Garnett）：Leach 提供的是污染下降的比例数据，Garnett 讲的是用剩饭喂鸡、让垃圾得到处理，都不涉及“在有限空间养殖更划算”的判断。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "It does not make sense to give up meat without giving up dairy products too.",
          "translation": "只戒肉而不戒奶制品是说不通的。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "It's difficult to switch to a no-meat-but-milk diet,' says Helmut Haberl, a social ecologist. 'Dairy cows must calve every year to keep producing milk, and only half their offspring will be female. While many vegetarians see moral reasons not to kill and eat the males, there is surely no practical reason to waste so much meat."
          },
          "synonyms": [
            "「It does not make sense」同义替换为「there is surely no practical reason」（没有实际道理、说不通）",
            "「give up meat without giving up dairy products too」同义替换为「a no-meat-but-milk diet」，即只戒肉、仍喝奶的饮食方式",
            "「says Helmut Haberl, a social ecologist」给出观点归属，确认答案为 D"
          ],
          "locatingTip": "定位：题干的关键概念是“只戒肉却不戒奶”，回原文搜索独特表达 no-meat-but-milk，第 7 段（G）开头出现，并紧跟 Helmut Haberl 的引语，可直接锁定。确定答案技巧：读 Haberl 的论证——乳牛必须每年产犊才能持续产奶，而只有一半的后代是雌性；许多素食者出于道德理由不吃这些雄性，但从实际角度看“没有理由浪费这么多肉”。言下之意是：要喝奶就必然产生公牛肉，所以只戒肉不戒奶说不通，与题干 It does not make sense 对应，故选 D。",
          "analysis": "第 7 段（G）讨论“不吃肉的素食”与“纯素”的差别，开头问：如果选择的是不吃肉的素食而非纯素呢？并指出奶和蛋是生产动物热量的高效方式。接着引用社会生态学家 Helmut Haberl：“It's difficult to switch to a no-meat-but-milk diet,' says Helmut Haberl, a social ecologist. 'Dairy cows must calve every year to keep producing milk, and only half their offspring will be female. While many vegetarians see moral reasons not to kill and eat the males, there is surely no practical reason to waste so much meat.”（Helmut Haberl 说，要转向“不吃肉但喝奶”的饮食是很困难的。奶牛必须每年产犊才能持续产奶，而它们的后代只有一半会是雌性。许多素食者出于道德理由不愿宰杀并食用这些雄性，但从实际角度看，实在没有理由浪费这么多肉。）段末还补一句“Similar arguments apply to chickens kept for eggs.”（养蛋鸡也有类似的问题。）整段的核心论证是：保留奶制品就意味着保留肉类生产，只戒一半在实践上讲不通，正是题干的意思，因此答案为 D（Helmut Haberl）。",
          "traps": [
            "为什么不是 B（Tara Garnett）：Garnett 讲的是牲畜能吃剩饭、替人处理垃圾而人还能得到肉，讨论的是废物利用，不涉及“只戒肉不戒奶”是否说得通。",
            "为什么不是 C（Annette Pinner）：Pinner 的落点是贫困国家需要动物蛋白，以及不能断言全球素食是最佳方案，讨论对象是贫困地区，而非奶与肉的连带关系。",
            "为什么不是 A（Allison Leach）与 E（Walter Falcon）：Leach 只给出污染下降的比例数据，Falcon 谈集约化养殖的成本优势，两人都没有讨论奶制品与肉是否应一并戒掉。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Some animals can be fed in a way that allows waste to be recycled.",
          "translation": "有些动物可以以某种方式饲养，从而让垃圾得到回收利用。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "By giving them your leftovers, she says, they deal with your rubbish, and you get meat."
          },
          "synonyms": [
            "「can be fed in a way that allows waste to be recycled」同义替换为「By giving them your leftovers … they deal with your rubbish」，把剩饭给它们，它们就替你处理垃圾",
            "「Some animals」对应原文的 them，回指上一句的 livestock like chickens",
            "「she says」回指 Tara Garnett，句子的观点归属由此确认，答案为 B"
          ],
          "locatingTip": "定位：题干关键词是 animals 与 waste to be recycled，回原文找“用剩饭喂动物、垃圾被处理掉”的内容，第 5 段（E）的 leftovers、rubbish 是极强的信号词。确定答案技巧：该段先由 Tara Garnett 指出这些动物的用处（points out the usefulness of these animals），紧接着用引语说明机制——把剩饭给它们，它们处理掉垃圾，而你得到肉；题干所说的“以某种方式饲养即可让废物被回收利用”正是这一机制的概括，引语中的 she 就是 Garnett，故选 B。",
          "analysis": "第 5 段（E）先讲牲畜的“吃剩饭”本领：“In some parts of the world today, livestock like chickens, for instance, can subsist on leftovers and whatever they find.”（在今天世界的一些地方，例如鸡这样的牲畜，可以靠剩饭和它们能找到的任何东西活着。）随后引出人物：“Tara Garnett, who heads the Food Climate Research Network at the University of Surrey, points out the usefulness of these animals.”（萨里大学食物气候研究网络的负责人 Tara Garnett 指出了这些动物的用处。）接着是本题定位句：“By giving them your leftovers, she says, they deal with your rubbish, and you get meat.”（她说，把剩饭给它们，它们就替你处理掉垃圾，而你还能得到肉。）题干 Some animals can be fed in a way that allows waste to be recycled 完整概括了这一机制：feed 对应 giving them your leftovers，waste to be recycled 对应 they deal with your rubbish，主语 Some animals 对应原文的 them（即 chickens 等牲畜）。句中的 she 明确指向前文出现的 Tara Garnett，因此答案为 B。本段最后一句讲若普遍采用这种方式，人们得适应脂肪更少的鸡肉，那是第 14 题的落点，不必混淆。",
          "traps": [
            "为什么不是 A（Allison Leach）：Leach 出现在第 3 段，谈的是氮污染会因戒掉奶制品和鸡蛋而下降 60%，与用废物喂动物无关。",
            "为什么不是 E（Walter Falcon）：Falcon 在第 9 段主张保留集约化养殖以降低成本，不涉及剩饭与垃圾处理。",
            "为什么不是 C（Annette Pinner）与 D（Helmut Haberl）：Pinner 讲素食的适用范围与贫困地区收入，Haberl 讲奶与肉的连带关系，两人都没有提到动物处理废物这一功能。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
