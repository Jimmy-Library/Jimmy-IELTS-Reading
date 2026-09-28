(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1008", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1008",
  "meta": {
    "examId": "p1-high-1008",
    "title": "A Brief Introduction to Pepper 胡椒简介",
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
          "stem": "Carl Linnaeus’s method for categorising plants has been replaced by a better one.",
          "translation": "卡尔·林奈（Carl Linnaeus）给植物分类的方法已被一种更好的方法取代。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "This genus was created in 1753 by Carl Linnaeus, the Swedish botanist whose system for classifying plants is still in use today."
          },
          "synonyms": [
            "“Carl Linnaeus’s method for categorising plants” 同义替换为原文的 “Carl Linnaeus, the Swedish botanist whose system for classifying plants”，其中 method 对应 system，categorising 对应 classifying",
            "“has been replaced by a better one” 与原文的 “is still in use today”（至今仍在使用）方向完全相反，原文说这套系统还在用，题干说它已经被取代",
            "人名 Carl Linnaeus 在原文原词复现，并附有同位语身份说明 the Swedish botanist，可直接锁定第 1 段"
          ],
          "locatingTip": "定位：题干里的专有名词 Carl Linnaeus 是大写人名，全文只出现一次，扫读时盯住第 1 段第二、三句即可锁定，不必读完全文。确定答案技巧：本题的判分点是“是否被替换”。原文用 “whose system for classifying plants is still in use today” 明确说林奈的植物分类系统今天仍在使用，而题干的结论性表述是 “has been replaced by a better one”（已被更好的方法取代）。still in use（仍在使用）与 has been replaced（已被取代）是两种互相排斥的状态，属于事实冲突而不是同义改写，因此判 FALSE。凡是题干出现 still、no longer、replaced、abolished 这类“状态存废”词，都要回原文核对状态的走向。",
          "analysis": "第 1 段共四句，围绕胡椒在植物学中的归属展开：①“A Pepper, the spice, comes from the berries of a plant that is a woody climbing vine.”（调料胡椒来自一种木质攀缘藤本植物的浆果）；②“In the botanical world, pepper belongs to a genus of plants called Piper.”（在植物学界，胡椒属于一个名叫 Piper 的属）；③本题定位句“This genus was created in 1753 by Carl Linnaeus, the Swedish botanist whose system for classifying plants is still in use today.”（这个属由瑞典植物学家卡尔·林奈于 1753 年确立，他的植物分类系统今天仍在使用）；④“He placed seventeen species in the piper genus and probably used the ancient Greek name for black pepper, Peperi, as the basis for the group.”（他在胡椒属中放入十七个物种，很可能把古希腊语中黑胡椒的名称 Peperi 用作该属名的依据）。题干把第③句中的 system for classifying plants 改写成 method for categorising plants，这点替换没有问题；问题出在结论部分：原文说 is still in use today（今天仍在使用），题干却说 has been replaced by a better one（已被更好的方法取代）。原文给出的是“仍在使用”的正面确认，题干给出的是“已被取代”的否定判断，两者直接对立，因此答案是 FALSE。做题时要注意：本题的陷阱在于考生容易被 1753 这个久远的年份带偏，觉得“这么老的系统肯定早被淘汰了”，但雅思判断题只看原文写了什么，原文写的是 still in use，就必须判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确写 “whose system for classifying plants is still in use today.”（他的植物分类系统今天仍在使用），与题干“已被更好的方法取代”完全相反。原文有相反信息时应判 FALSE，而不是 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到林奈，还专门用 still in use today 交代了这套系统的现状，信息已经给出且与题干冲突，不属于“未提及”，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The ancient Greeks originally took the word for pepper from another language.",
          "translation": "古希腊人最初是从另一种语言中借用“胡椒”这个词的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "He placed seventeen species in the piper genus and probably used the ancient Greek name for black pepper, Peperi, as the basis for the group."
          },
          "synonyms": [
            "“the ancient Greeks” 对应原文的 “the ancient Greek name”（古希腊语的名称），原文提到的是这个语言，而不是使用该语言的人做过什么事",
            "“the word for pepper” 对应原文的 “the ancient Greek name for black pepper, Peperi”",
            "“originally took … from another language” 在原文中没有任何对应：原文只说林奈“probably used（很可能使用了）”古希腊语名称来命名属，说的是林奈借用希腊语，方向与题干说的“希腊人从别的语言借词”恰好相反，且希腊语的词源来源原文根本没有讨论"
          ],
          "locatingTip": "定位：题干的关键词是 ancient Greeks 与 pepper，原文中与之对应的只有第 1 段末句的 “the ancient Greek name for black pepper, Peperi”，属名 Piper 也正是由此而来。确定答案技巧：判断题遇到“某词的词源、来源”这类话题时，要分清原文讨论的是“谁借用了谁”。原文的动作发出者是 He（即林奈），内容是“probably used the ancient Greek name … as the basis for the group”，即林奈很可能拿古希腊语的名称当作属名的依据；也就是说，借用方向是林奈借用古希腊语。题干却把动作换成了 “The ancient Greeks originally took the word … from another language”，即古希腊人又从别处借词。原文既没有说古希腊语的这个名称来自其他语言，也没有说希腊人是借入方，相反的证据和正面证据都没有，属于信息缺失，因此判 NOT GIVEN。",
          "analysis": "第 1 段末句：“He placed seventeen species in the piper genus and probably used the ancient Greek name for black pepper, Peperi, as the basis for the group.”（他在胡椒属中列入十七个物种，很可能把古希腊语中黑胡椒的名称 Peperi 用作该属名的依据）。句中 he 指上一句出现的 Carl Linnaeus，动作是“用古希腊语名称给这个属命名”，说明的只是林奈与古希腊语名称之间的关系。而题干说 “The ancient Greeks originally took the word for pepper from another language.”（古希腊人最初从另一种语言借用了胡椒这个词），主语变成了古希腊人，动作变成了“从别的语言借词”。原文对古希腊语中 Peperi 一词自身是否借自其他语言、借自哪一种语言，完全没有任何交代，也没有任何可以推翻题干的表述（原文并未说这个词是希腊语原创）。按判断题规则，原文既不能证实也不能否证的信息即 NOT GIVEN。本题的典型陷阱是同段出现关键字 ancient Greek，让考生误以为“既然提到了古希腊语名称，那题干一定对”。但判断题比对的是信息的实质对应关系：原文讲的是林奈借用希腊语，题干讲的是希腊人借用别的语言，方向相反且原文没说，所以答案是 NOT GIVEN，绝不能因为看到了 ancient Greek 就选 TRUE。",
          "traps": [
            "为什么不是 TRUE：原文只说林奈“probably used the ancient Greek name … as the basis for the group”，即林奈借用了古希腊语的名称，从未提到古希腊人自己从别的语言借入这个词。题干把借词的方向和主体都换了，原文无法支持，故不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文给出与题干相反的信息，例如“这个名称本来就是希腊语固有的”。原文对此一字未提，既没说它来自其他语言，也没说它不来自其他语言，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Machines are used to harvest pepper berries.",
          "translation": "人们使用机器来采收胡椒浆果。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The pepper berries – which grow in clusters and dangle from the vines – are picked by hand when they are ready for harvesting"
          },
          "synonyms": [
            "“harvest pepper berries” 同义替换为原文的 “picked … when they are ready for harvesting”，采摘即采收",
            "“Machines are used to” 与原文的 “are picked by hand”（由人工采摘）直接冲突：by hand 强调用手而非机械，与机器采收相反",
            "宾语 “pepper berries” 在原文原词复现，说明两句讨论的是同一件事"
          ],
          "locatingTip": "定位：题干关键词是 pepper berries 与 harvest，第 2 段开头两句集中讲胡椒藤生长与浆果采收，扫到 harvesting 一词即可停下精读。确定答案技巧：本题考“由谁采收”，判分点是 by hand 这个词组。原文写 “are picked by hand”，明确说浆果是人工手摘；题干把施动者改成 “Machines”，与 by hand 构成正面对立，因此判 FALSE。做题时要把 by hand（人工）、by machine（机械）这类方式状语当作判断题的硬信号，只要题干的方式状语与原文不一致，答案就是 FALSE，而不是 NOT GIVEN。",
          "analysis": "第 2 段开头说胡椒不是快熟作物：“Pepper isn’t a fast-maturing plant. It takes several years for the branching woody vines to mature, and during their growth the vines can reach up to thirty feet.”（胡椒不是速熟植物；分枝的木质藤蔓需要数年才能成熟，生长期间藤蔓可长到三十英尺）。紧接着是本题定位句：“The pepper berries – which grow in clusters and dangle from the vines – are picked by hand when they are ready for harvesting, which usually begins two or three years after the vine is first planted.”（胡椒浆果成串下垂地挂在藤上，成熟待采时由人工采摘，采收通常在藤蔓首次种下两年或三年后开始）。原文用被动语态 “are picked by hand”，动作执行方式是 by hand，即人工手摘，插在中间的破折号结构只是补充说明浆果的生长形态。题干写成 “Machines are used to harvest pepper berries.”，把执行者换成机器，与 by hand 正好相反，属于事实冲突，故判 FALSE。此外，本段后面还提到 “Preparing the berries for sale involves a lengthy process of drying, cleaning and sorting.”（为销售而处理浆果需要漫长的干燥、清洗和分级过程），同样没有出现任何机械采收的表述。注意 by hand 是雅思阅读中与 mechanised、machine-picked 对立的常见表达，看到这类方式状语要立即警觉。",
          "traps": [
            "为什么不是 TRUE：原文明确写 “are picked by hand”（由人工采摘），by hand 表示靠人力而非机械，与题干“使用机器采收”正好相反，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对采收方式已给出明确交代（by hand），信息存在且与题干冲突，不是“未提及机械”那么简单的中立情形，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "White pepper berries are riper than black pepper berries when they are picked.",
          "translation": "白胡椒浆果在采摘时比黑胡椒浆果更成熟。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Black pepper is picked when the berries are still green, while white pepper is picked later, when the berries have turned from green to red."
          },
          "synonyms": [
            "“when they are picked” 在原文复现为 “is picked when …” 与 “is picked later, when …”，两句都限定在采摘时刻",
            "“riper” 同义替换为原文的颜色与时间变化 “later … have turned from green to red”：黑胡椒采时仍是 green（未熟），白胡椒采时已由 green 变 red（更熟）",
            "“White pepper berries … than black pepper berries” 的对比关系对应原文 while 引导的并列对比结构"
          ],
          "locatingTip": "定位：题干的两大关键词是 black pepper 与 white pepper，两者在第 2 段第四句成对出现，用 while 并列对比，一句话就能看全。确定答案技巧：本题考“成熟度对比”，原文用颜色和时间两个线索来表达成熟程度——黑胡椒在浆果仍为绿色（still green）时采摘，白胡椒则 “picked later, when the berries have turned from green to red”（采得更晚，此时浆果已由绿转红）。颜色由绿转红、时间推后，都说明白胡椒采摘时更成熟，与题干 riper 这一比较级同向，因此判 TRUE。做这类比较级判断题，只要原文能给出“时间更晚、状态更熟”的对应链条，就应判 TRUE，不要把颜色描述当成与成熟度无关的细节。",
          "analysis": "第 2 段第四句：“Black pepper is picked when the berries are still green, while white pepper is picked later, when the berries have turned from green to red.”（黑胡椒在浆果仍是绿色时采摘，而白胡椒采得更晚，此时浆果已由绿转红）。这句用 while 把两种胡椒的采收时机并列对比：黑胡椒采于 berries are still green（仍是绿色），白胡椒采于 picked later 且 berries have turned from green to red（更晚，已由绿变红）。在胡椒的生长过程中，绿果是未熟果，由绿转红是继续成熟、变老的过程，因此“采得更晚、颜色已变红”就等于“采摘时更成熟”，与题干的 riper than 完全吻合。另外本段还有一句看似与成熟度有关：“Once the berries have been dried, they are then referred to as peppercorns.”（浆果干燥后即被称为胡椒粒），讲的是加工环节，与成熟度无关，不构成干扰。答案是 TRUE。做题提示：雅思常用颜色、时间、大小、温度等可观察特征来间接表达程度（更熟、更干、更贵），本题是典型的“以时间先后和颜色变化表达成熟度比较”，抓住 picked later 与 turned from green to red 这两处线索即可。",
          "traps": [
            "为什么不是 FALSE：原文说黑胡椒趁 berries are still green 时采摘，白胡椒 picked later、已由绿转红，时间更晚、状态更熟，与题干“白胡椒更成熟”一致，不存在矛盾点，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对两种胡椒的采摘时机（still green 对应 turned from green to red）交代得非常明确，可据此判断成熟度，并非没有提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Pepper vines need a lot of sunlight to produce a large harvest of berries.",
          "translation": "胡椒藤需要大量阳光才能结出大量浆果。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Unshaded plants which are exposed too long to the sun will not yield many berries."
          },
          "synonyms": [
            "“need a lot of sunlight” 与原文的 “exposed too long to the sun”（长时间暴露在阳光下）对应，都是讲光照这一条件，但原文把它写成不利因素",
            "“to produce a large harvest of berries” 与原文的 “will not yield many berries”（不会结出很多浆果）方向相反：原文说日晒过久就少结果，题干说多晒太阳才多结果",
            "“Pepper vines” 对应原文的 “plants”，同段首句已说明所谈对象为胡椒植株"
          ],
          "locatingTip": "定位：题干关键词是 sunlight 与 harvest，第 3 段讲胡椒的生境，其中只有一句提到太阳（the sun），即 “Unshaded plants which are exposed too long to the sun will not yield many berries.”，一步锁定。确定答案技巧：本题的判分点是“阳光与产量的关系方向”。原文说没有遮荫、长时间暴露在阳光下的植株 will not yield many berries（不会结很多浆果），即阳光过多反而不利于结果；题干却说胡椒藤需要大量阳光才能获得大丰收，把“不利因素”说成了“必要条件”，方向相反，故判 FALSE。注意原文用的是否定句 will not yield，题干是肯定句 need … to produce，遇到这种一正一反的句式，先确认主语和条件是否同一，再比对结果方向即可。",
          "analysis": "第 3 段集中讲胡椒的生长环境：“The pepper plant loves the warm, humid, rainy tropics in a narrow band around the equator.”（胡椒喜爱赤道附近一条狭窄地带中温暖、潮湿、多雨的热带环境）；“Pepper also requires well-drained soils, and its preferred habitat is forests.”（胡椒还要求排水良好的土壤，最喜欢的生境是森林）；本题定位句“Unshaded plants which are exposed too long to the sun will not yield many berries.”（没有遮荫、暴露在阳光下太久的植株不会结出很多浆果）。三句连读可见作者的逻辑：胡椒喜欢温暖潮湿多雨，喜欢森林（林中有遮蔽），一旦无遮荫且日照过长，产量就会下降。也就是说，阳光过多是减产的原因，而不是增产的条件。题干写成 “Pepper vines need a lot of sunlight to produce a large harvest of berries.”（需要大量阳光才能结出大量浆果），把原文的负面条件翻转为正面需求，与原文结论相悖，因此答案是 FALSE。此外，本段的另一部分讲整粒胡椒混合物的颜色组成（绿胡椒、黑胡椒、粉红胡椒），与光照和产量无关，不构成干扰。做题提示：涉及因果或条件关系的判断题，要看清原文是把某因素写成“有利”还是“有害”，本题的 the sun 出现在否定语境里，是典型的反向设题。",
          "traps": [
            "为什么不是 TRUE：原文说 “Unshaded plants which are exposed too long to the sun will not yield many berries.”，即日照过长会减少结果，阳光过量是不利因素；题干却说需要大量阳光才能高产，与原文方向相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对阳光与浆果产量的关系有明确表述（exposed too long to the sun 会导致 will not yield many berries），信息已给出且与题干冲突，不属于未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Pink peppercorns are more expensive to buy than other varieties.",
          "translation": "粉红胡椒粒比其他品种买起来更贵。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Although there are pink peppercorns, the ripest berries, these are more fragile and are therefore more costly than other kinds."
          },
          "synonyms": [
            "“Pink peppercorns” 在原文原词复现，并以同位语 “the ripest berries” 补充说明其特点",
            "“more expensive” 同义替换为原文的 “more costly”，二者同义，都是“更贵”",
            "“than other varieties” 同义替换为原文的 “than other kinds”，kinds 与 varieties 同义",
            "原文的因果链 “more fragile and are therefore more costly” 说明了价高的原因，题干只保留价格结论，属合理概括"
          ],
          "locatingTip": "定位：题干关键词 pink peppercorns 是极具识别度的专有搭配，在第 3 段第五句出现，扫读时看到 pink 即可停下。确定答案技巧：本题考“价格对比”。原文写 “these are more fragile and are therefore more costly than other kinds”，其中 more costly than other kinds 与题干的 more expensive … than other varieties 一一对应（costly 即 expensive，kinds 即 varieties），价格更高这一结论有明确的比较结构支撑，因此判 TRUE。做题时要注意 therefore 引出的因果关系只是原文的附加说明（因为更易碎，所以更贵），因果关系不是判分点；判分点是比较级本身，只要比较对象与方向一致，答案即为 TRUE。",
          "analysis": "第 3 段后半部分讲胡椒粒的颜色混合：“The colorful mixes of whole peppercorns seen in many markets today contain green and black peppercorns.”（如今许多市场上见到的彩色整粒胡椒混合物含有绿胡椒粒和黑胡椒粒），接着是本题定位句：“Although there are pink peppercorns, the ripest berries, these are more fragile and are therefore more costly than other kinds. This is why there are few of them in a peppercorn mix.”（虽然存在粉红胡椒粒，也就是最成熟的浆果，但它们更易碎，因此比其他品种更昂贵，这就是为什么胡椒混合物中很少见到它们）。原文的逻辑是“更易碎，所以更贵，所以混装中很少”，其中 more costly than other kinds 正面回答了价格比较问题；题干用 more expensive to buy than other varieties 表达同样的比较关系，costly 与 expensive 同义，other kinds 与 other varieties 同义，比较方向也一致（粉红胡椒更贵），因此答案是 TRUE。注意 Although 引导的让步结构只表示“虽然有这种胡椒，但它更贵、更少”，让步并不改变主句的结论，不能因为看到 Although 就误判为转折冲突。答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用 “are therefore more costly than other kinds” 明确说粉红胡椒粒比其他种类更贵，与题干“比其他品种更贵”完全一致，没有矛盾点，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文既给出了价格比较（more costly than other kinds），也给出了原因（more fragile），价格信息是明确写出的，不是未提及，因此不能选 NOT GIVEN。"
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
          "stem": "the Romans used pepper to reduce 7 ________ caused by many health issues",
          "translation": "罗马人用胡椒来减轻由许多健康问题引起的 ______。",
          "answer": "pain",
          "wordClass": "名词（不可数，指身体上的疼痛；作 reduce 的宾语，不加冠词、不加复数）",
          "locating": {
            "paragraph": "4",
            "quote": "In the Roman Empire, pepper was employed to relieve the pain that was a common consequence of numerous medical conditions and complaints."
          },
          "synonyms": [
            "“used pepper to reduce” 同义替换为原文的 “pepper was employed to relieve”，其中 used 对应 was employed，reduce 对应 relieve",
            "“pain” 在原文中作 relieve 的宾语，即被减轻的对象",
            "“caused by many health issues” 同义替换为原文的 “was a common consequence of numerous medical conditions and complaints”，其中 caused by 对应 was a consequence of，many health issues 对应 numerous medical conditions and complaints"
          ],
          "locatingTip": "定位：笔记小标题是 Ancient Rome，时间地点标签是 the Romans，直接用 Romans 回到原文找罗马与胡椒相关的段落，即第 4 段，其中只有一句讲用胡椒缓解痛苦。确定答案技巧：题干说用胡椒来 reduce（减轻）某种由健康问题引起的东西，原文对应的是 “pepper was employed to relieve the pain that was a common consequence of numerous medical conditions and complaints”，relieve 即 reduce，宾语 the pain 就是被减轻的对象，而 that 从句 “was a common consequence of numerous medical conditions and complaints” 正对应题干的 caused by many health issues，两处线索同时指向 pain，答案唯一确定。填词时注意空间前后已有限定成分，只需写上不可数名词原形 pain，不要写成 pains 或 the pain。",
          "analysis": "第 4 段讲胡椒在西方最初的用途与罗马人的关系：“No one knows when the first human bit into a peppercorn and decided it would taste good on a piece of meat or in a vegetable stew, but in the West, it was the ancient Romans who apparently first made pepper an essential part of their meals.”（没有人知道第一个咬开胡椒粒的人是谁，但在西方，显然是古罗马人最先把胡椒变成餐桌上的必需品）。接着点出胡椒流行的两大原因：“Food was only part of the reason for pepper’s popularity; health played an equally important role.”（食物只是部分原因，健康同样重要）。本题定位句紧随其后：“In the Roman Empire, pepper was employed to relieve the pain that was a common consequence of numerous medical conditions and complaints.”（在罗马帝国，胡椒被用来缓解疼痛，而疼痛是众多疾病与不适的常见结果）。题干把 “was a common consequence of numerous medical conditions and complaints” 改写为 “caused by many health issues”，把 relieve 改为 reduce，只留空格要填宾语。由于空格所在的短语是 “reduce [7] caused by many health issues”，其结构就是一个名词加过去分词后置定语，与原文 the pain that was a common consequence of … 完全对应，答案即 pain。从词性看，pain 在此为不可数名词，表示“疼痛”这一抽象概念，不加冠词也不变复数。下一句 “If you showed signs of a fever, it was common practice to be given a liquid that had some pepper in it.”（如果出现发烧症状，常见的做法是给病人服用含胡椒的液体）则引出第 8 题，注意不要与本空混淆：本空问的是被减轻的对象（pain），第 8 题问的是给药的形式（liquid）。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "8 ________ containing pepper was used as medicine to bring down high temperatures",
          "translation": "含有胡椒的 ______ 被当作药物用来降低高温（退烧）。",
          "answer": "liquid",
          "wordClass": "名词（单数可数，指液体；在题干中作句子的主语，前面可加不定冠词 a）",
          "locating": {
            "paragraph": "4",
            "quote": "If you showed signs of a fever, it was common practice to be given a liquid that had some pepper in it."
          },
          "synonyms": [
            "“liquid” 对应原文 “be given a liquid that had some pepper in it” 中的 a liquid，即所给的形式",
            "“containing pepper” 同义替换为原文的 “that had some pepper in it”，其中 containing 对应 had … in it",
            "“was used as medicine to bring down high temperatures” 同义替换为原文的 “If you showed signs of a fever, it was common practice to be given …”，其中 bring down high temperatures 对应 showed signs of a fever 时的给药做法"
          ],
          "locatingTip": "定位：题干关键词是 pepper 与 high temperatures，第 4 段末句出现的 fever（发烧）就是“高温”的对应表达，锁定该句。确定答案技巧：空格位于句首作主语，后接现在分词短语 containing pepper 作后置定语，这说明要填的是一个“能装胡椒”的东西；原文说发烧时 “it was common practice to be given a liquid that had some pepper in it”，被给的东西是 a liquid，其定语从句 that had some pepper in it 正好对应题干的 containing pepper，因此空格填 liquid。填词提醒：ONE WORD ONLY，只写名词原形 liquid，不要写 a liquid 或 liquids；同时不要误填 pepper（它是定语所修饰的内容，不是被问的主语）。",
          "analysis": "第 4 段末句：“If you showed signs of a fever, it was common practice to be given a liquid that had some pepper in it.”（如果你出现发烧的迹象，通常的做法是让你喝下一种含有胡椒的液体）。这句与上一句（用胡椒缓解疼痛）共同构成罗马人把胡椒当作药物的例证，也与本段 “health played an equally important role” 一句呼应。题干把它改写为笔记形式：“[8] containing pepper was used as medicine to bring down high temperatures”，其中 containing pepper 对应原文定语从句 that had some pepper in it，bring down high temperatures 对应 showed signs of a fever 时的用药做法（发烧即体温升高）；格子所缺的正是被给予、被当作药物的那个东西，即 a liquid，故填 liquid。从词性看，liquid 在此为可数名词单数，题干中作主语且没有其他限定词时前面可加不定冠词 a，符合原文 “to be given a liquid” 的形式。另外要注意与第 7 题区分：第 7 空问的是胡椒减轻的对象（pain），本空问的是含胡椒的药物形式（liquid），两空虽同出一段但落点不同，切勿互换。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "pepper was thought to be able to extract 9 ________ from people, as indicated by its name in Sanskrit.",
          "translation": "胡椒被认为能够从人体中排出 ______，这一点从其梵文名称可以看出。",
          "answer": "poison",
          "wordClass": "名词（不可数，指毒素；作 extract 的宾语，不加冠词、不加复数）",
          "locating": {
            "paragraph": "5",
            "quote": "In Sanskrit (a language of ancient India) black pepper is known as maricha or marica, meaning an ability to get rid of poison, which suggests it was used in patients for this purpose."
          },
          "synonyms": [
            "“extract … from people” 同义替换为原文的 “get rid of poison” 以及 “it was used in patients for this purpose”，即把体内之物排出体外",
            "“its name in Sanskrit” 同义替换为原文的 “In Sanskrit (a language of ancient India) black pepper is known as maricha or marica”，名称来源直接复现",
            "“was thought to be able to” 对应原文的 “meaning an ability to …” 与 “which suggests”，都表示“被认为具有某种能力”"
          ],
          "locatingTip": "定位：笔记小标题变为 India，题干出现专有名词 Sanskrit，全文只在第 5 段出现该词，一步锁定该段第二句。确定答案技巧：题干说胡椒能从人体中排出某物（extract … from people），并说这一含义体现在梵文名称里；原文说 maricha 或 marica 的意思是 “an ability to get rid of poison”（排出毒素的能力），get rid of 对应题干的 extract … from，被排出的对象 poison 就是答案。填词提醒：poison 在此为不可数名词，作 get rid of 与 extract 的宾语，保持原形不加冠词、不加复数；不要误填 ability（那是“能力”，与 from people 的逻辑不符）。",
          "analysis": "第 5 段开篇把话题从罗马转向印度：“The Romans were not the first to embrace pepper as a medicine. Belief in the spice’s considerable usefulness is reflected in India’s ancient Ayurvedic system of medicine, which is more than three thousand years old.”（罗马人并非最早把胡椒当药物的人；对胡椒巨大功效的信仰体现在印度已有三千多年历史的古老阿育吠陀医学体系中）。接着是本题定位句：“In Sanskrit (a language of ancient India) black pepper is known as maricha or marica, meaning an ability to get rid of poison, which suggests it was used in patients for this purpose.”（在梵语——一种古印度语言——中，黑胡椒被称为 maricha 或 marica，意思是“排出毒素的能力”，这说明它被用于病人身上正是为了这个目的）。原文用 meaning an ability to get rid of poison 解释了名称的含义，又用 suggests it was used in patients for this purpose 说明实际用途，两处都指向“把毒素排出体外”。题干把它改写成 “pepper was thought to be able to extract [9] from people, as indicated by its name in Sanskrit”，其中 extract … from people 对应 get rid of … in patients，as indicated by its name in Sanskrit 对应 In Sanskrit … is known as maricha or marica，因此空格要填的就是被排出的物质 poison。从词性看，poison 为不可数名词，在句中作 extract 的宾语，无需冠词也不必变复数。本段下一句 “Pepper was also believed by the Indians to have other qualities as well.” 起承上启下作用，引出第 10 题的牙齿问题，注意两空不要混淆。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "pepper was used to treat problems with people’s 10 ________",
          "translation": "胡椒被用来治疗人们 ______ 方面的问题。",
          "answer": "teeth",
          "wordClass": "名词（复数，指牙齿；位于所有格 people’s 之后，是被 people’s 修饰的中心词；原文为复数 teeth，故用复数形式）",
          "locating": {
            "paragraph": "5",
            "quote": "For example, physicians would frequently apply pepper-based lotions to reduce the effects of decay in teeth, which made it an extremely popular remedy."
          },
          "synonyms": [
            "“was used to treat problems with people’s teeth” 同义替换为原文的 “apply pepper-based lotions to reduce the effects of decay in teeth”，其中 treat problems with 对应 reduce the effects of decay in",
            "“pepper-based lotions” 说明药物由胡椒制成，对应题干所说的“用胡椒治疗”",
            "“people’s teeth” 对应原文的 “decay in teeth”，即牙齿的腐坏问题"
          ],
          "locatingTip": "定位：笔记仍在 India 部分，题干关键词是 people’s 加一个身体部位，第 5 段最后两句讲印度人还把胡椒用于其他病症，其中只有一句提到身体部位 decay in teeth。确定答案技巧：题干说胡椒用于治疗人们的某种身体问题，原文对应句是 “physicians would frequently apply pepper-based lotions to reduce the effects of decay in teeth”，其中 decay in teeth（牙齿腐坏）正是 problems with teeth，介词 in 后的 teeth 就是空格所需的词。填词提醒：teeth 是 tooth 的复数形式，原文用的就是复数 teeth，且题干 people’s 后接复数名词更自然，必须写复数 teeth，写 tooth 会因与原文不符而失分。",
          "analysis": "第 5 段在讲完梵文名称的含义后继续补充：“Pepper was also believed by the Indians to have other qualities as well. For example, physicians would frequently apply pepper-based lotions to reduce the effects of decay in teeth, which made it an extremely popular remedy.”（印度人还相信胡椒具有其他功效，例如医生会经常涂抹以胡椒制成的洗剂，以减轻牙齿腐坏的影响，这使它成为一种极受欢迎的疗法）。本题的题干 “pepper was used to treat problems with people’s [10]” 是对这句的概括：pepper-based lotions 说明药剂以胡椒制成，reduce the effects of decay in teeth 说明所治的是牙齿问题。原文用 decay in teeth 表达“牙齿的腐坏”，题干用 problems with people’s teeth 概括，两者所指相同，因此空格填介词 in 后的名词 teeth。从词性看，此处牙齿为多颗，原文与题干均用复数，故写 teeth 而不是 tooth。本题与第 9 题同在第 5 段，两空分别落在梵文名称句和牙齿治疗句上，做笔记填空时要顺着笔记的行文顺序回到原文逐条核对，避免把两空的答案互换。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "in wealthy households, pepper was stored in 11 ________",
          "translation": "在富裕人家中，胡椒被存放在 ______ 里。",
          "answer": "wardrobes",
          "wordClass": "名词（复数，指衣柜；作介词 in 的宾语，原文为复数 wardrobes，故保持复数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "At the time, pepper was guarded by servants in royal households and kept in the private wardrobes of the rich."
          },
          "synonyms": [
            "“was stored in” 同义替换为原文的 “was … kept in”，kept 与 stored 都表示“存放”",
            "“in wealthy households” 同义替换为原文的 “in royal households” 与 “of the rich”，royal households 与 the rich 都指富贵人家",
            "“wardrobes” 在原文中直接出现，作介词 in 的宾语，与题干空格的位置完全一致"
          ],
          "locatingTip": "定位：笔记小标题换成 Uses in Europe in the Middle Ages，题干关键词是 pepper was stored，回到原文第 6 段（讲中世纪）找表示“存放”的句子，即 “pepper was guarded by servants in royal households and kept in the private wardrobes of the rich.”。确定答案技巧：题干说胡椒存放在某个地方（stored in …），是地点型填空；原文用 kept in 表达存放，介词 in 后的名词短语是 the private wardrobes，因此空格填 wardrobes。填词提醒：原文为复数 the private wardrobes，题干已有 in 这一介词，只缺名词，故写复数 wardrobes，不要写 wardrobe 或 private wardrobes（后者超出一个词，且 private 是原文中的限定形容词，不属于被问信息）。",
          "analysis": "第 6 段讲中世纪欧洲胡椒的珍贵地位：“In the Middle Ages (5th–15th centuries) black pepper’s renown made it a must-have item for the European wealthy, who loved the spice.”（中世纪即 5 至 15 世纪期间，黑胡椒的声望使它成为欧洲富人的必备品，他们钟爱这种香料）。本题定位句紧随其后：“At the time, pepper was guarded by servants in royal households and kept in the private wardrobes of the rich.”（当时，胡椒由王室家中的仆人看守，并被保存在富人的私人衣柜里）。这句用两个并列被动结构说明胡椒的贵重：由仆人看守（guarded by servants）、存放在私人衣柜（kept in the private wardrobes）。题干把 kept in 改写为 stored in，把 royal households 与 the rich 概括为 wealthy households，只把存放地点留空，因此答案就是介词 in 后的 wardrobes。从词性看，wardrobe 是可数名词，此处因富人家中衣柜不止一个而用复数，原文即为 the private wardrobes，故答案写复数 wardrobes。本段随后还用 “It was considered a privilege to cook with pepper” 说明用胡椒烹饪是特权，与本题无关，不构成干扰。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "12 ________ written at the time required large amounts of pepper",
          "translation": "当时写成的 ______ 需要大量的胡椒。",
          "answer": "recipes",
          "wordClass": "名词（复数，指食谱；作 required 的主语，原文为复数 recipes）",
          "locating": {
            "paragraph": "6",
            "quote": "many of the recipes from the period called for substantial quantities of pepper, which might be considered very unappetising today"
          },
          "synonyms": [
            "“recipes” 在原文中作 called for 的主语，即需要胡椒的主体",
            "“written at the time” 同义替换为原文的 “from the period”，period 指前文交代的 the Middle Ages，与 the time 对应",
            "“required large amounts of pepper” 同义替换为原文的 “called for substantial quantities of pepper”，其中 required 对应 called for，large amounts 对应 substantial quantities"
          ],
          "locatingTip": "定位：笔记仍在 Uses in Europe in the Middle Ages 部分，题干关键信息是“某类书面材料需要大量胡椒”，回到第 6 段找与“需要大量胡椒”有关的句子，即 “many of the recipes from the period called for substantial quantities of pepper”。确定答案技巧：call for 是“需要”的地道表达，与题干的 require 同义；主语的 recipes from the period 对应题干的 written at the time；而 substantial quantities of pepper 正对应 large amounts of pepper。三处对应确定答案就是主语 recipes。填词提醒：原文为复数 the recipes，题干谓语是 required（过去式，复数与单数同形，无法据此判断），但原文明确用复数 recipes 表示多份食谱，故写复数 recipes。",
          "analysis": "第 6 段中段写道：“It was considered a privilege to cook with pepper and many of the recipes from the period called for substantial quantities of pepper, which might be considered very unappetising today.”（用胡椒烹饪被视为一种特权，当时许多食谱都需要大量的胡椒，而这在今天看来可能十分难以下咽）。本题的题干 “12 written at the time required large amounts of pepper” 正是把这一句的主语抽走变成空格：recipes from the period 改写为 written at the time，called for substantial quantities of pepper 改写为 required large amounts of pepper。三处词性上的对应十分整齐——require 对应 call for、large amounts 对应 substantial quantities、pepper 原词复现——因此空格只能填 recipes。食谱属于书面材料，题干用过去分词短语 written at the time 作后置定语，语义上也完全成立。从词性看，recipe 是可数名词，原文用复数 the recipes 指多份食谱，填空时保持复数 recipes。本段后半段转向胡椒的价格与支付功能（1439 年一磅胡椒相当于英国两天多的工资、胡椒可换黄金、可作房租与工资），那是第 13 题所在的语域，与本空无关，注意按笔记顺序定位。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "people who worked with pepper had to wear clothes without 13 ________ to discourage theft.",
          "translation": "从事胡椒相关工作的员工必须穿没有 ______ 的衣服，以防盗窃。",
          "answer": "pockets",
          "wordClass": "名词（复数，指衣袋；作介词 without 的宾语；原文为复数 pockets，故用复数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "Employees in the pepper industry were not allowed to have pockets in their jackets or trousers so that this valuable commodity would not be stolen."
          },
          "synonyms": [
            "“Employees in the pepper industry” 同义替换为题干的 “people who worked with pepper”",
            "“were not allowed to have” 与 “had to wear clothes without” 都表示被禁止拥有某物，方向一致",
            "“pockets in their jackets or trousers” 对应题干的 “clothes without pockets”，衣服的部位信息被概括为 clothes，被禁止之物即 pockets",
            "“so that this valuable commodity would not be stolen” 同义替换为 “to discourage theft”"
          ],
          "locatingTip": "定位：笔记最后一条讲防盗措施，关键信息是从事胡椒工作的人的衣服，回到第 6 段末句即可锁定 “Employees in the pepper industry were not allowed to have pockets in their jackets or trousers …”。确定答案技巧：题干用 without 表示“没有某物”，原文用 not allowed to have 表示“不允许有某物”，两者同义；被禁止拥有的东西是 pockets in their jackets or trousers，题干把它概括为 clothes without [13]，空格要填的就是被去掉的那个部位 pockets。填词提醒：原文为复数 pockets，且衣袋通常是复数概念，故写 pockets；同时不要填 jackets、trousers 或 theft，前者是衣服种类而不是被禁止拥有的部件，theft 是题干预设的结果（其对应说法在原文中为 stolen / would not be stolen）。",
          "analysis": "第 6 段末句：“Employees in the pepper industry were not allowed to have pockets in their jackets or trousers so that this valuable commodity would not be stolen.”（胡椒行业的雇员不允许在上衣或裤子上有衣袋，以免这种贵重商品被偷）。这句交代中世纪胡椒珍贵到需要靠“取消衣袋”来防盗的程度，与前文“胡椒可换黄金、可当房租与工资”的叙述一脉相承。题干的笔记 “people who worked with pepper had to wear clothes without [13] to discourage theft” 是这句的同义改写：Employees in the pepper industry 对应 people who worked with pepper；were not allowed to have 对应 had to wear clothes without；pockets in their jackets or trousers 中的部件信息被抽成空格；so that this valuable commodity would not be stolen 对应 to discourage theft。四层对应齐备，空格可以唯一确定填 pockets。从词性看，pocket 是可数名词，此处指上衣与裤子上的多个衣袋，原文即为复数，故写 pockets。本题是三篇笔记填空（Ancient Rome、India、Uses in Europe in the Middle Ages）的最后一空，答题时可在第 6 段内依次核对第 11、12、13 三个空，确保没有跨段乱填。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
