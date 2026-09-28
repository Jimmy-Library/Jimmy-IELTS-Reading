(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-1011", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-1011",
  "meta": {
    "examId": "p1-low-1011",
    "title": "A Decibel Hell (The Effects of Living in a Noisy World) 分贝地狱（嘈杂世界的影响）",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Noise is the sound beyond the average of 1 ________ referring to the agency's definition.",
          "translation": "参照该机构的定义，噪声是指音量超过平均值 1 ________ 的声音。",
          "answer": "85 dBA",
          "wordClass": "数词加单位（数字 85 加声压级单位 dBA），作介词 of 的宾语，说明平均值的大小；按答案表原样书写，数字与 dBA 之间保留一个空格",
          "locating": {
            "paragraph": "2",
            "quote": "definition of hazardous noise is sound that exceeds the time-weighted average of 85 dBA, meaning the average noise exposure measured over a typical eight-hour workday."
          },
          "synonyms": [
            "「the sound beyond the average of …」同义替换为原文的 「sound that exceeds the time-weighted average of …」：beyond 与 exceeds 都表示“超过”",
            "「the agency's definition」对应原文的 「his agency's definition of hazardous noise」：his agency 指前文提到的 NIOSH（美国国家职业安全卫生研究所）",
            "「the average … measured over a typical eight-hour workday」在原文中逐字对应 「the average noise exposure measured over a typical eight-hour workday」"
          ],
          "locatingTip": "定位：题干里的 agency、definition、average 都是抽象词，真正好用的是第 2 段首句的大写缩写 NIOSH 与机构名 National Institute for Occupational Safety and Health，扫读大写字母即可一步锁定第 2 段。确定答案技巧：题干问“噪声是超过平均值多少的声音”，原文用 definition of hazardous noise 引出定义，紧接着给出具体数值 the time-weighted average of 85 dBA，被挖空的位置正是这个数值，所以答案是 85 dBA。注意抄写时保持原样：数字 85 与单位 dBA 之间有一个空格，dBA 的 A 大写，不要写成 85dB 或 85 分贝。",
          "analysis": "题干是对原文第 2 段的摘要改写。原文第 2 段写道：Mark Stephenson, a Cincinnati, Ohio-based senior research audiologist at the National Institute for Occupational Safety and Health (NIOSH), says his agency's definition of hazardous noise is sound that exceeds the time-weighted average of 85 dBA, meaning the average noise exposure measured over a typical eight-hour workday.（美国国家职业安全卫生研究所的资深研究听力学家 Mark Stephenson 说，该机构对“危险噪声”的定义是超过 85 dBA 时间加权平均值的声响，即在典型八小时工作日中测得的平均噪声暴露值）。题干把 definition 的主语 his agency 抽出来写成 the agency's definition，把 sound that exceeds the time-weighted average of 85 dBA 压缩成 the sound beyond the average of 1 ________，被删掉的正是阈值本身，因此答案就是原文给出的 85 dBA。要留意原文的限定语 time-weighted average（时间加权平均值）与 over a typical eight-hour workday（典型八小时工作日），它们说明这个 85 dBA 是“八小时工作日内的平均暴露值”，而不是瞬时峰值，这正是题干 the average 所对应的信息。答案照抄原文的书写形式 85 dBA，正好是两个词以内，符合 NO MORE THAN TWO WORDS 的要求。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Scientific studies over the years from the mid to late 1990s have confirmed that exposure to certain levels of sound can cause damage 2 ________ on certain senior age.",
          "translation": "从 20 世纪 90 年代中后期以来多年的科学研究证实，暴露于一定强度的声音会对一定年龄以上的人群造成 ________ 损伤。",
          "answer": "hearing",
          "wordClass": "名词（不可数，表示“听力、听觉”）。空格紧跟在名词 damage 之后，与之连用表示“听力受损”：此处 damage 是动词 cause 的名词宾语，空格并不是动词的宾语。照原文用不可数形式 hearing，不加冠词、不加复数",
          "locating": {
            "paragraph": "5",
            "quote": "Numerous scientific studies over the years have confirmed that exposure to certain levels of sound can damage hearing."
          },
          "synonyms": [
            "「Scientific studies over the years」同义替换为原文的 「Numerous scientific studies over the years」，只省掉了 Numerous",
            "「can cause damage …」同义替换为原文的 「can damage …」：题干用名词短语 cause damage 加空格的写法，替代原文直接使用的动词 damage",
            "「exposure to certain levels of sound」在原文中逐字复现：exposure to certain levels of sound",
            "「from the mid to late 1990s … on certain senior age」对应原文第 6 段的 「NIOSH studies from the mid to late 1990s … have hearing impairment by age 52」，即题干的年代与年龄限定取自同段后续对高龄人群的统计"
          ],
          "locatingTip": "定位：题干保留了专有信息 from the mid to late 1990s（20 世纪 90 年代中后期），这是全文独有的年代表述，只出现在第 5 至 6 段一带；再加上关键词 exposure to certain levels of sound，可直接落到第 5 段首句。确定答案技巧：空格前是 cause damage，后面的宾语被挖空，而原文对应的句子是 exposure to certain levels of sound can damage hearing，其中 damage 的宾语就是 hearing，因此空格填 hearing。注意原文此处 damage 作动词，题干改成了名词短语 cause damage，但被损害的对象没变。另外不要在答案里写 impairment（原文第 6 段才出现这个词，且它不属于本题空格所对应的成分），也不要写成复数 hearings。",
          "analysis": "原文第 5 段首句：Numerous scientific studies over the years have confirmed that exposure to certain levels of sound can damage hearing.（多年来大量科学研究已经证实，暴露于一定强度的声音会损害听力）。这是全段的总起句，后面两句分别说明机制（Prolonged exposure can actually change the structure of the hair cells in the inner ear, resulting in hearing loss.）和后果（It can also cause tinnitus …）。题干几乎原样搬运了首句：Scientific studies over the years 对应 Numerous scientific studies over the years，exposure to certain levels of sound 逐字复现，can cause damage 对应 can damage，唯一被挖掉的就是 damage 的对象 hearing（听力）。题干后半的 on certain senior age 是把同一主题延伸到高龄人群：原文第 6 段紧接着给出数据 NIOSH studies from the mid to late 1990s show that 90% of coal miners have hearing impairment by age 52 – compared to 9% of the general population，说明年龄越大、受损比例越高，这也解释了题干为何把 studies 的年代写成 from the mid to late 1990s。答案 hearing 是抽象不可数名词，填入时保持原形，既不加 -s 也不加 the。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "From the testing of 5,249 children, those who are constantly exposed to excessive noise may have trouble in 3 ________ sound discrimination.",
          "translation": "对 5,249 名儿童的测试显示，长期暴露在过度噪声中的儿童可能在 ________ 声音辨别方面存在困难。",
          "answer": "high-frequency",
          "wordClass": "复合形容词（high-frequency，带连字符，作名词短语 sound discrimination 的前置定语，说明“高频的”；照答案表保留连字符，不可拆成 high frequency 两个词）",
          "locating": {
            "paragraph": "8",
            "quote": "Most children with noise-induced hearing threshold shifts have only limited hearing damage, but continued exposure to excessive noise can lead to difficulties with high-frequency sound discrimination."
          },
          "synonyms": [
            "「those who are constantly exposed to excessive noise」同义替换为原文的 「continued exposure to excessive noise」：constantly 与 continued 都表示“持续、长期”地暴露",
            "「From the testing of 5,249 children」对应原文的 「based on audiometric testing of 5,249 children」：5,249 这一数字逐字复现，audiometric testing 即听力测试",
            "「may have trouble in … sound discrimination」同义替换为原文的 「can lead to difficulties with high-frequency sound discrimination」：have trouble in 对应 lead to difficulties with，sound discrimination 逐字复现"
          ],
          "locatingTip": "定位：题干保留了独有数字 5,249 children（5,249 名儿童），全文只在第 8 段出现（based on audiometric testing of 5,249 children），据此可一步锁定该段。确定答案技巧：题干说长期暴露于过度噪声的孩子在「3 ________ sound discrimination」上有困难，原文对应句为 Most children with noise-induced hearing threshold shifts have only limited hearing damage, but continued exposure to excessive noise can lead to difficulties with high-frequency sound discrimination，被挖空的位置正是 sound discrimination 前面的限定语，而原文给的限定语是 high-frequency（高频），故答案填 high-frequency。书写时保留连字符，不要写成 high frequency 两个词。",
          "analysis": "原文第 8 段引入美国疾病控制与预防中心（CDC）的儿童听力调查：Research is catching up with this anecdotal evidence. In the July 2001 issue of Pediatrics, researchers from the Centers for Disease Control and Prevention reported that, based on audiometric testing of 5,249 children as part of the Third National Health and Nutrition, Examination Survey, an estimated 12.5% of American children have noise-induced hearing threshold shifts – or dulled hearing – in one or both ears. Most children with noise-induced hearing threshold shifts have only limited hearing damage, but continued exposure to excessive noise can lead to difficulties with high-frequency sound discrimination.（研究正逐渐跟上此前的零星观察。2001 年 7 月《儿科学》上，美国疾病控制与预防中心的研究者报告称，基于第三届全国健康与营养调查中对 5,249 名儿童所作的听力测试，估计 12.5% 的美国儿童一只或两只耳朵存在噪声性听阈位移，即听力变钝。多数有听阈位移的儿童只有有限的听力损害，但持续暴露于过度噪声会导致对高频声音辨别的困难）。题干几乎原样复述了这段：From the testing of 5,249 children 对应 based on audiometric testing of 5,249 children，those who are constantly exposed to excessive noise 对应 continued exposure to excessive noise，may have trouble in 3 ________ sound discrimination 对应 can lead to difficulties with … sound discrimination。原句给 sound discrimination 加的前置限定正是 high-frequency，被删掉的也就是这个词，所以答案填 high-frequency（带连字符的复合形容词）。注意不要误填 noise-induced 或 dulled：这两个词修饰的是 hearing threshold shifts（听阈位移），并不是本空格所修饰的 sound discrimination。",
          "traps": [
            "不要填 noise-induced / dulled（听力变钝）：原文这两个词修饰的是 hearing threshold shifts（听阈位移），而空格修饰的是 sound discrimination（声音辨别），修饰对象不同，只有 high-frequency 才与 sound discrimination 搭配。",
            "不要填 12.5%：那是原文给出的受影响的美国儿童比例，题干问的是“哪一种声音辨别困难”，问的是性质而不是比例。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "exposure to noise may lead to the unease of 4 ________ in healthy people",
          "translation": "接触噪声可能会使健康人出现 ________ 不适。",
          "answer": "stomach",
          "wordClass": "名词（单数，身体部位名词），位于介词 of 之后作宾语，说明不适的部位；原文用的是 stomach contractions，题干只保留部位名词，不加 -s",
          "locating": {
            "paragraph": "10",
            "quote": "The results showed that exposure to noise caused stomach contractions in healthy human beings."
          },
          "synonyms": [
            "「exposure to noise」在原文中逐字复现：exposure to noise",
            "「may lead to the unease of …」同义替换为原文的 「caused stomach contractions」：胃部收缩即身体上的不适反应，caused 对应 lead to",
            "「in healthy people」同义替换为原文的 「in healthy human beings」"
          ],
          "locatingTip": "定位：题干中最好用的信息是 in healthy people（在健康人身上）与 exposure to noise 这一组合，全文只有第 10 段出现“在健康人身上（in healthy human beings）”这一说法，直接锁定该段。确定答案技巧：找到因果动词 —— 原文 The results showed that exposure to noise caused stomach contractions in healthy human beings 中，caused 的宾语是 stomach contractions（胃部收缩），被挖空的位置正是这个名词短语里表示身体部位的核心词，因此填 stomach。注意题干里的 unease（不适）是 summary 作者对 contractions（收缩、痉挛）的概括，两处说的是同一种生理反应，不能因为用词不同就舍弃这条对应；也不要填 contractions，因为空格前已有 the unease of，要的是具体的部位名，且答案表给的是单数 stomach。",
          "analysis": "原文第 10 段介绍最早关于噪声非听觉效应的研究：The nonauditory effects of noise were noted as early as 1930 in a study published by E.L. Smith and D.L. Laird in volume 2 of the Journal of the Acoustical Society of America. The results showed that exposure to noise caused stomach contractions in healthy human beings.（关于噪声非听觉效应，早在 1930 年 E.L. Smith 与 D.L. Laird 发表在《美国声学学会杂志》第 2 卷上的研究中就有记载。结果表明，暴露于噪声会使健康人出现胃部收缩）。摘要句 exposure to noise may lead to the unease of 4 ________ in healthy people 就是把 the results showed … caused stomach contractions in healthy human beings 压缩改写：exposure to noise 原文照搬，may lead to 对应 caused（研究结论写成推测语气 may），the unease of … 对应 stomach contractions（把具体的“收缩”概括为“不适”），in healthy people 对应 in healthy human beings。因此空格要填的是表示身体部位的名词 stomach。注意题干和原文都强调“健康人”，说明这种反应是噪声直接引起的生理性反应，而非既有疾病导致的。答案 stomach 为单数名词，填入后读作 the unease of stomach，语法与语义都成立。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "big cities of over 250,000 people are creating 5 ________ to help to create noise pollution policies",
          "translation": "人口超过 25 万的大城市正在制作 ________，以帮助制定噪声污染政策。",
          "answer": "noise map",
          "wordClass": "名词（可数名词单数，noise map 由名词 noise 作前置定语加名词 map 构成），作 creating 的宾语；答案表给的是单数形式，两个词，符合 NO MORE THAN TWO WORDS",
          "locating": {
            "paragraph": "12",
            "quote": "In the European Union, countries with cities of at least 250,000 people are creating noise maps of those cities to help leaders determine noise pollution policies."
          },
          "synonyms": [
            "「big cities of over 250,000 people」同义替换为原文的 「cities of at least 250,000 people」：over 与 at least 都表示“不少于”",
            "「are creating …」在原文中逐字复现：are creating",
            "「to help to create noise pollution policies」同义替换为原文的 「to help leaders determine noise pollution policies」：目的是帮助决策者制定噪声污染政策",
            "「Europe」同义替换为原文的 「the European Union」（欧盟）"
          ],
          "locatingTip": "定位：题干保留了数字 250,000 这一独特信息，全文只在第 12 段出现（cities of at least 250,000 people），可一步锁定。确定答案技巧：题干问这些大城市“正在制作什么”，原文对应的动词是 are creating，其宾语是 noise maps of those cities，被挖空的就是这个宾语，所以答案填 noise map；其后的目的状语 to help leaders determine noise pollution policies 与题干的 to help to create noise pollution policies 一一对应，可反向印证句子找对了。书写时注意两点：一是答案表给的是单数形式 noise map（原文为复数 noise maps），按答案表原样抄写；二是 NO MORE THAN TWO WORDS，noise map 正好两个词，不可写成 noise maps of those cities。",
          "analysis": "原文第 12 段讲欧洲在噪声治理上的进展：In the European Union, countries with cities of at least 250,000 people are creating noise maps of those cities to help leaders determine noise pollution policies. Paris has already prepared its first noise maps.（在欧盟，拥有 25 万人口以上城市的国家正在为这些城市制作噪声地图，以帮助决策者制定噪声污染政策。巴黎已经完成了第一批噪声地图）。摘要句把主谓宾整体保留：big cities of over 250,000 people 对应 cities of at least 250,000 people（数量表述由 at least 换成 over，语义不变），are creating 原文照搬，宾语 noise maps 被挖空，后面用 to help to create noise pollution policies 复述原文的目的状语 to help leaders determine noise pollution policies。由此可见，被制作的对象就是噪声地图，答案填 noise map（按答案表写作单数）。这一空还要与第 12 题区分开：第 12 题问的是欧洲大城市噪声研究的“落点或目的”（帮助当局决策），本题问的是“制作出的东西是什么”（噪声地图），两题同在第 12 段，但问的成分不同，答题时不要混用。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–10 观点匹配（Match each statement with A–E）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 10
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "People can change the environment to improve hearing health.",
          "translation": "人们可以通过改变环境来改善听力健康。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "So a change in environment can improve a person's hearing health."
          },
          "synonyms": [
            "「People can change the environment」同义替换为原文的 「a change in environment」，即“环境的改变可以带来……”",
            "「improve hearing health」同义替换为原文的 「improve a person's hearing health」，核心动词 improve 与宾语搭配完全一致",
            "说话人 William Luxford（House Ear Clinic 医学主任）与选项 B 直接对应"
          ],
          "locatingTip": "定位：题干的关键词是 environment 与 hearing health，两个词同现的句子在全文只有第 7 段 Luxford 的引语末尾：So a change in environment can improve a person's hearing health. 只要扫到 change in environment 就能锁定。确定答案技巧：匹配题要同时确认“说话人”和“观点”。第 7 段开头先交代说话人的身份 —— William Luxford, medical director of the House Ear Clinic of St. Vincent Medical Center in Los Angeles, points out one piece of good news，紧接着的引语给出本题观点：连续暴露会导致听力持续下降，但一旦停止暴露，听力下降就会停止，因此“环境的改变可以改善一个人的听力健康”。观点与题干完全一致，说话人对应选项 B。作答时注意把选项中的括号说明一起读：B 项写作 William Luxford (the House Ear Clinic)，正是原文中的医院名称。",
          "analysis": "第 7 段全文只讲一件事，就是 Luxford 给出的“好消息”：It's true that continuous noise exposure will lead to the continuation of hearing loss, but as soon as the exposure is stopped, the hearing loss stops. So a change in environment can improve a person's hearing health.（确实，持续的噪声暴露会导致听力持续下降，但一旦停止暴露，听力下降就会停止。因此，环境的改变可以改善一个人的听力健康）。题干的 People can change the environment to improve hearing health 就是最后一句的近义复述：原文用名词化表达 a change in environment，题干改写成动词短语 change the environment；原文 improve a person's hearing health，题干保留 improve hearing health。句中 So 承上说明因果：因为停止暴露后听力不再继续受损，所以改变环境能改善听力健康。观点提出者是 William Luxford（洛杉矶圣文森特医疗中心 House Ear Clinic 的医学主任），对应选项 B。做匹配题时务必“人 + 话”一起核对，只凭关键词猜选项最容易失分，本题中 hearing health 这一搭配在文中仅此一处，属于很强的确认信号。",
          "traps": [
            "为什么不是 A（WHO）：WHO 出现在第 1 段，它给出的是全世界噪声性听力损伤的规模数据（120 million people worldwide have disabling hearing difficulties），属于危害陈述，并未提出“改变环境能改善听力”这一主张。",
            "为什么不是 C（Craig Moulton, OSHA）：C 的主张在第 4 段，讲的是雇主必须为过度暴露于噪声的工人提供保护、并实施有效的听力保护计划，谈的是企业的义务，与“改变环境改善听力健康”无关。",
            "为什么不是 D（Arline Bronzaft）：D 的核心主张出现在第 13 段，即各国政府应增加噪声研究经费、更好地协调治理工作，属于政府层面的政策诉求，与本题的“环境改变带来的个人听力改善”不对应。",
            "为什么不是 E（Centers for Disease Control and Prevention）：E 的说法见于第 8 段，即 CDC 基于对 5,249 名儿童的听力测试得出“12.5% 的美国儿童有噪声性听阈位移”的普查结论，属于噪声危害的事实陈述，并未提出“改变环境可以改善听力健康”这一主张。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The government should continue the research on anti-noise researches with the fund.",
          "translation": "政府应当用资金持续支持反噪声（噪声治理）方面的研究。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "13",
            "quote": "Bronzaft stresses that governments worldwide need to increase funding for noise research and do a better job coordinating their noise pollution efforts"
          },
          "synonyms": [
            "「The government should …」同义替换为原文的 「governments worldwide need to …」，都是对政府提出的要求",
            "「continue the research on anti-noise researches with the fund」同义替换为原文的 「increase funding for noise research」，即“为噪声研究增加经费”",
            "「anti-noise researches」对应原文的 「noise research」与同句的 「coordinating their noise pollution efforts」（协调噪声治理工作）",
            "主张提出者 Arline Bronzaft 与选项 D 直接对应"
          ],
          "locatingTip": "定位：题干的关键词是 government、research、fund（经费），三个概念同现的句子在全文只有第 13 段后半：Bronzaft stresses that governments worldwide need to increase funding for noise research …，扫读 funding 或 research 即可锁定。确定答案技巧：先确定“谁在要求政府出钱做研究”——原文用 Bronzaft stresses（Bronzaft 强调）引出这一主张，提出人是 Arline Bronzaft，对应选项 D。再把题干的三个要点逐一核对：government 对应 governments worldwide，the research on anti-noise researches 对应 noise research（及 coordinating their noise pollution efforts），with the fund 对应 increase funding（增加经费，与题干 continued … with the fund 的“用资金持续支持”方向一致）。",
          "analysis": "第 13 段先转述活动人士希望美国在噪声问题上发挥更大作用，随后借专家之口强调仅有权力更大的政府机构并不够，最后落在 Bronzaft 的主张上：Bronzaft stresses that governments worldwide need to increase funding for noise research and do a better job coordinating their noise pollution efforts so they can establish health and environmental policies based on solid scientific research.（Bronzaft 强调，世界各国政府需要增加噪声研究经费，并更好地协调各自的噪声治理工作，从而在坚实的科学研究基础上制定健康与环境政策）。题干把这一主张压缩为政府的两个动作：继续支持噪声研究（continue the research on anti-noise researches）、增加资金投入（with the fund），与 increase funding for noise research 完全对应。原文句中还出现 Governments have a responsibility to protect their citizens by curbing noise pollution（政府有责任通过遏制噪声污染保护公民），进一步确认这番话的主体就是政府，说话人是 Arline Bronzaft，故选 D。此题与第 6 题容易混淆：第 6 题是个人层面的环境改变，第 7 题是政府层面的经费与政策，做题时先按主体（个人／政府／企业）分流，再核对具体动作。",
          "traps": [
            "为什么不是 A（WHO）：WHO 在第 1 段给出的是噪声性听力损伤的全球数据，并未提出政府应增加噪声研究经费的主张。",
            "为什么不是 B（William Luxford）：B 的观点在第 7 段，讲改变环境可以改善听力健康，是医学与个人层面的结论，不涉及政府经费。",
            "为什么不是 C（Craig Moulton, OSHA）：C 的主张在第 4 段，讲 OSHA 要求雇主为过度暴露于噪声的工人提供保护、实施听力保护计划，责任主体是企业雇主而非政府经费投入。",
            "为什么不是 E（Centers for Disease Control and Prevention）：E 的说法见于第 8 段，即 CDC 关于美国儿童噪声性听阈位移的普查数据，属于噪声危害的事实性陈述，并未涉及政府是否增加噪声研究经费。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "companies should be required to protect the employees to avoid noise",
          "translation": "应当要求公司保护员工，使其免受噪声的影响。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "OSHA does require that any employer with workers overexposed to noise provide protection for those employees against the harmful effects of noise."
          },
          "synonyms": [
            "「companies should be required」同义替换为原文的 「OSHA does require that any employer …」：require（要求）原文复现，companies 对应 employer（雇主／公司）",
            "「to protect the employees」同义替换为原文的 「provide protection for those employees」，动词 protect 与名词 protection 互换",
            "「to avoid noise」同义替换为原文的 「against the harmful effects of noise」，即保护员工免受噪声危害",
            "「workers overexposed to noise」对应题干的 employees 所处境况"
          ],
          "locatingTip": "定位：题干的核心是“公司／雇主被要求保护员工免受噪声”，回原文搜索 require、employer、protection 这一组词，落在第 4 段 Craig Moulton 的引语中：OSHA does require that any employer with workers overexposed to noise provide protection for those employees。确定答案技巧：匹配题要找出“要求”的发出者与说话人。原文用 acknowledges Craig Moulton, a senior industrial hygienist for the Occupational Safety and Health Administration (OSHA) 交代说话人身份，再由他引用 OSHA 的规定，因此“公司须保护员工”这一主张的归属是 Craig Moulton（OSHA），对应选项 C。核对时注意题干的 companies 对应原文的 employer 与 employees 两部分信息，题干把两者合并成“公司保护员工”，方向完全一致。",
          "analysis": "第 4 段讨论美国工业噪声监管难的问题，其中 Craig Moulton 转述了 OSHA 的强制要求：Noise in U.S. industry is an extremely difficult problem to monitor, acknowledges Craig Moulton, a senior industrial hygienist for the Occupational Safety and Health Administration (OSHA). \"Still,\" he says, \"OSHA does require that any employer with workers overexposed to noise provide protection for those employees against the harmful effects of noise. Additionally, employers must implement a continuing, effective hearing conservation program as outlined in OSHA's Noise Standard.\"（“不过，”他说，“OSHA 确实要求任何有工人过度暴露于噪声的雇主，都要为这些员工提供保护，使他们免受噪声的有害影响。此外，雇主还必须按照 OSHA 的噪声标准实施持续而有效的听力保护计划。”）。题干 companies should be required to protect the employees to avoid noise 正是这句话的概括：require 原文复现，employer 换成 companies，provide protection for those employees 换成 protect the employees，against the harmful effects of noise 换成 to avoid noise。此外句中 Additionally 引出的 hearing conservation program（听力保护计划）也属于企业义务的一部分，进一步确认主张归属。说话人 Craig Moulton 的机构是 OSHA，选项 C 的括号说明正好给出这一对应关系。",
          "traps": [
            "为什么不是 A（WHO）：WHO 只在第 1 段给出噪声性听力损伤的全球统计，未涉及雇主对员工的保护义务。",
            "为什么不是 B（William Luxford）：B 的主张在第 7 段，是临床医生关于“改变环境可改善听力健康”的判断，不涉及企业责任。",
            "为什么不是 D（Arline Bronzaft）：D 的主张在第 13 段，指向政府的经费与政策责任，与题干的企业须保护员工不同。",
            "为什么不是 E（Centers for Disease Control and Prevention）：E 的说法在第 8 段，讲的是美国儿童的听力普查数据，与雇主义务无关，也没有要求企业保护员工的表述。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Noise has posed an effect on American children's hearing ability",
          "translation": "噪声已经对美国儿童的听力造成了影响。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "In the July 2001 issue of Pediatrics, researchers from the Centers for Disease Control and Prevention reported that, based on audiometric testing of 5,249 children as part of the Third National Health and Nutrition, Examination Survey, an estimated 12.5% of American children have noise-induced hearing threshold shifts – or dulled hearing – in one or both ears."
          },
          "synonyms": [
            "「Noise has posed an effect on …」同义替换为原文的 「noise-induced hearing threshold shifts – or dulled hearing」：噪声导致的听阈位移（听力变钝）就是噪声对听力造成的影响",
            "「American children's hearing ability」对应原文的 「12.5% of American children … in one or both ears」：受影响的对象正是美国儿童的听力",
            "「hearing ability」对应原文的 「audiometric testing of 5,249 children」（听力测试）与 「dulled hearing」（听力变钝），两处都直接指向听力",
            "主张的发布机构 「researchers from the Centers for Disease Control and Prevention reported」与选项 E 直接对应"
          ],
          "locatingTip": "定位：题干的关键词 American children 与 hearing ability，全文只有第 8 段把“美国儿童”与“听力受损”直接放在一起：CDC 在 2001 年 7 月《儿科学》上的报告称，基于对 5,249 名儿童的听力测试，估计 12.5% 的美国儿童存在噪声性听阈位移（听力变钝）。确定答案技巧：题干“噪声已经对美国儿童的听力造成影响”对应原文的 12.5% of American children have noise-induced hearing threshold shifts – or dulled hearing – in one or both ears，而这项研究的发布机构是 researchers from the Centers for Disease Control and Prevention（美国疾病控制与预防中心），对应选项 E。核对时用排除法：A（WHO）在第 1 段讲全球数据，B（William Luxford）在第 7 段谈个体听力健康，C（Craig Moulton, OSHA）在第 4 段讲雇主对成年工人的保护义务，D（Arline Bronzaft）的主张在第 13 段谈政府经费与政策，四者都不针对美国儿童的听力。",
          "analysis": "第 8 段写道：Research is catching up with this anecdotal evidence. In the July 2001 issue of Pediatrics, researchers from the Centers for Disease Control and Prevention reported that, based on audiometric testing of 5,249 children as part of the Third National Health and Nutrition, Examination Survey, an estimated 12.5% of American children have noise-induced hearing threshold shifts – or dulled hearing – in one or both ears. Most children with noise-induced hearing threshold shifts have only limited hearing damage, but continued exposure to excessive noise can lead to difficulties with high-frequency sound discrimination.（研究正逐渐跟上此前的零星观察。2001 年 7 月《儿科学》上，美国疾病控制与预防中心的研究者报告称，基于第三届全国健康与营养调查中对 5,249 名儿童所作的听力测试，估计 12.5% 的美国儿童一只或两只耳朵存在噪声性听阈位移，即听力变钝；多数有听阈位移的儿童只有有限的听力损害，但持续暴露于过度噪声会导致对高频声音辨别的困难）。题干 Noise has posed an effect on American children's hearing ability 概括的正是这一段：noise-induced hearing threshold shifts – or dulled hearing 就是噪声已对美国儿童听力造成的可测量损伤，研究对象是 American children，检测手段是 audiometric testing（听力测试），都直接落在“听力”上。该研究的发布机构是 Centers for Disease Control and Prevention，答案表把本题归给选项 E，与原文的发布机构完全对应。区分要点：第 11 段 Bronzaft 参与的追踪研究讲的是铁轨噪声与 children's reading scores（阅读成绩），落点在学业表现；第 8 段的 CDC 报告才是直接针对听力的普查证据，因此本题归 E 而不是 D。",
          "traps": [
            "为什么不是 D（Arline Bronzaft）：Bronzaft 参与的是第 11 段铁轨旁学校加装隔音砖的干预，其追踪研究的结论是 children's reading scores improved（阅读成绩提高），关注点在学习表现而非听力；她的政策主张在第 13 段，讲的是政府增加噪声研究经费。答案表给出的发布机构是 CDC，故不选 D。",
            "为什么不是 A（WHO）：WHO 在第 1 段给出的是全球噪声性听力损伤的规模（120 million people worldwide have disabling hearing difficulties），并非专门针对美国儿童。",
            "为什么不是 B（William Luxford）：B 在第 7 段谈的是停止暴露后听力不再继续受损、改变环境能改善听力健康，属于个体层面的临床判断，不含儿童数据。",
            "为什么不是 C（Craig Moulton, OSHA）：C 在第 4 段谈的是雇主为过度暴露于噪声的工人提供保护，对象是成年工人（workers），与儿童无关。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "noise has seriously affected human being where they live worldwide",
          "translation": "噪声已经严重影响到全世界各地人们的生活。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Worldwide, noise-induced hearing impairment is the most prevalent irreversible occupational hazard, and it is estimated that 120 million people worldwide have disabling hearing difficulties."
          },
          "synonyms": [
            "「worldwide」同义替换为原文的 「Worldwide」与 「worldwide」两次复现，指全球范围",
            "「has seriously affected human being」同义替换为原文的 「noise-induced hearing impairment is the most prevalent irreversible occupational hazard」，即噪声造成的听力损伤是最普遍且不可逆的职业危害",
            "「human being where they live」对应原文的 「120 million people worldwide have disabling hearing difficulties」，用具体人数说明受影响的人群规模"
          ],
          "locatingTip": "定位：题干的关键词 worldwide 与 noise 指向第 1 段引用的世界卫生组织文件：In its 1999 Guidelines for Community Noise, the World Health Organization (WHO) declared …，句中 Worldwide 与 worldwide 各出现一次，是本篇唯一给出全球范围数据的表述（第 13 段另有 governments worldwide，但那只是修饰“各国政府”，不含全球统计数据），据此可一步锁定。确定答案技巧：题干说的是“噪声在全球范围内严重影响人们”，与原文那句全世界噪声性听力损伤“最常见、不可逆”以及“1.2 亿人存在致残性听力困难”的表述同义，而这句话的出处正是世界卫生组织（WHO）的 1999 年《社区噪声指南》，因此答案选 A（WHO）。核对时抓住两点：全球范围（worldwide）与受影响的对象是普通人群（people／human being），二者只在 WHO 这句话中同时具备。",
          "analysis": "第 1 段结尾引用了世界卫生组织的官方文件：In its 1999 Guidelines for Community Noise, the World Health Organization (WHO) declared, \"Worldwide, noise-induced hearing impairment is the most prevalent irreversible occupational hazard, and it is estimated that 120 million people worldwide have disabling hearing difficulties.\"（在其 1999 年《社区噪声指南》中，世界卫生组织宣布：“在世界范围内，噪声引起的听力损伤是最普遍且不可逆的职业危害，据估计全球有 1.2 亿人存在致残性的听力障碍。”）。紧接着一句 Growing evidence also points to many other health effects of too much volume（越来越多证据表明音量过大还会带来许多其他健康影响）进一步扩大危害面。题干 noise has seriously affected human being where they live worldwide 概括的正是这一全球性判断：worldwide 与原文两个 worldwide 对应，has seriously affected 对应 the most prevalent irreversible（最普遍、不可逆）与 disabling（致残的），human being 对应 people。这句话的发布者是世界卫生组织，故选 A。区分要点：第 1 段是本篇唯一给出全球范围数据的段落，其余段落分别讲美国工人（第 3 段）、美国工业监管（第 4 段）、个体机制（第 5 段）、医生结论（第 7 段）与欧洲做法（第 12 段），都不具备 worldwide 这一范围特征。",
          "traps": [
            "为什么不是 B（William Luxford）：B 在第 7 段谈的是个体层面“改变环境可改善听力健康”，属于局部、个人化的结论，没有全球范围的表述。",
            "为什么不是 C（Craig Moulton, OSHA）：C 在第 4 段谈的是美国雇主对工人的保护义务，范围限定为美国企业，与 worldwide 不符。",
            "为什么不是 D（Arline Bronzaft）：D 在第 13 段的说法是政府应增加噪声研究经费并协调治理，属于政策诉求，不是在描述噪声已造成的全球影响。",
            "为什么不是 E（Centers for Disease Control and Prevention）：E 的说法在第 8 段，讲的是美国儿童的听力普查（12.5% 的美国儿童有噪声性听阈位移），范围限于美国儿童，不具备题干 worldwide 所要求的全球范围。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 单项选择题（A / B / C / D）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The board of schools built close to the tracks are convinced to",
          "translation": "建在铁轨附近的学校的校董会（管理方）被说服去……",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "11",
            "quote": "Bronzaft and the school principal persuaded the school board to have acoustical tile installed in the classrooms adjacent to the tracks."
          },
          "synonyms": [
            "「The board of schools … are convinced to」同义替换为原文的 「persuaded the school board to」，被说服的一方就是 school board（校董会）",
            "「utilise a special material in classroom buildings」同义替换为原文的 「have acoustical tile installed in the classrooms」，acoustical tile（隔音砖）就是一种特殊的建筑材料",
            "「to lessen the effect of outside noise」同义替换为原文的 「the classrooms adjacent to the tracks」与 「treated the tracks near the school to make them less noisy」，即降低来自铁轨的外部噪声影响"
          ],
          "locatingTip": "定位：题干的关键词是 schools、tracks、convinced（被说服）与 board，第 11 段首句同时出现 persuade、school board、classrooms、tracks，可一步锁定。确定答案技巧：抓住原文 persuaded the school board to have acoustical tile installed（说服校董会安装隔音砖）这一动词结构，被说服后采取的动作是“安装隔音砖”，隔音砖是用于吸收噪声的特殊材料，与选项 C 的 utilise a special material in classroom buildings to lessen the effect of outside noise 完全对应。注意原文的第二个动作属于交通局而不是校董会：The Transit Authority also treated the tracks near the school to make them less noisy（交通局还对学校附近轨道做了降噪处理），不要把这两件主体不同的事混为一谈。",
          "analysis": "第 11 段记录了针对铁轨噪声的具体干预：Bronzaft and the school principal persuaded the school board to have acoustical tile installed in the classrooms adjacent to the tracks. The Transit Authority also treated the tracks near the school to make them less noisy. A follow-up study … found that children's reading scores improved after these interventions were put in place. 题干问校董会被说服去做什么，对应首句 persuaded the school board to have acoustical tile installed in the classrooms adjacent to the tracks。acoustical tile 即具有吸声性能的隔音砖，是一种专门用于降低外部噪声干扰的特殊材料，安装在紧邻铁轨的教室里；后续追踪研究显示儿童阅读成绩提高，正说明这一措施的目的与效果是减弱外部噪声的影响，与选项 C 的表述一致。答题时要注意主体区分：校董会负责的是“教室装隔音砖”，交通局负责的是“处理轨道降噪”，题目问的是前者。",
          "traps": [
            "A 项（把教室搬离嘈杂的铁轨）错误：原文的做法是就地给教室安装隔音砖（have acoustical tile installed in the classrooms adjacent to the tracks），全文没有任何搬迁教室或将教室挪离铁轨的信息，A 属于把“就近降噪”误解成“搬走”。",
            "B 项（限制轨道的使用程度）错误：原文中与铁轨有关的第二项措施是交通局对轨道本身做了降噪处理（treated the tracks near the school to make them less noisy），处理的是轨道的噪声特性，而不是削减或管制轨道的使用量，B 加上了原文没有的“限制使用”含义。",
            "D 项（组织团队做追踪研究）错误：追踪研究（A follow-up study published in the September 1981 issue of the Journal of Environmental Psychology）是后续由研究者在干预措施落实后发表的成果，不是校董会被说服去做的事情；校董会被说服去做的只有安装隔音砖这一件，D 把研究结果误当成校方采取的行动。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "In European countries, the big cities' research on noise focuses on",
          "translation": "在欧洲国家，大城市的噪声研究关注的是……",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "12",
            "quote": "In the European Union, countries with cities of at least 250,000 people are creating noise maps of those cities to help leaders determine noise pollution policies."
          },
          "synonyms": [
            "「In European countries」同义替换为原文的 「In the European Union」",
            "「the big cities' …」同义替换为原文的 「cities of at least 250,000 people」",
            "「research on noise focuses on」同义替换为原文的 「are creating noise maps of those cities … to help leaders determine noise pollution policies」，其中目的状语即研究的落点",
            "「helping the authorities better make a decision on management of the city」同义替换为原文的 「to help leaders determine noise pollution policies」"
          ],
          "locatingTip": "定位：题干的关键词 European countries 与 250,000 只出现在第 12 段，扫到 European Union 即可锁定；数字 250,000 更是全文唯一，非常可靠。确定答案技巧：题干问研究的“落点／目的”，要盯住原文的目的状语 to help leaders determine noise pollution policies（帮助决策者制定噪声污染政策），它与选项 D 的 helping the authorities better make a decision on management of the city（帮助当局更好地对城市管理作出决策）方向一致。注意区分手段与目的：噪声地图（noise maps）是达成目的的手段，帮助决策者制定政策才是研究的落点，选项 A 把手段当成了目的。",
          "analysis": "第 12 段讲欧洲在噪声治理上比美国更超前：Anti-noise activists say that Europe and several countries in Asia are more advanced than the United States in terms of combating noise. \"Population pressure has prompted Europe to move more quickly on the noise issue that the United States has,\" Hume says. In the European Union, countries with cities of at least 250,000 people are creating noise maps of those cities to help leaders determine noise pollution policies. Paris has already prepared its first noise maps. The map data, which must be finished by 2007, will be fed into computer models that will help test the sound impact of street designs or new buildings before construction begins. 题干问欧洲大城市的噪声研究“关注的是什么”，原文给出的句子结构是：主体（拥有 25 万人口以上城市的国家）加动作（制作噪声地图）加目的（帮助决策者制定噪声污染政策）。可见研究不是以“把污染细节记到地图上”为终点，而是把地图数据用于计算机模型，事先评估街道设计或新建建筑的声学影响，最终服务于城市管理决策 —— 这正是选项 D 所说的帮助当局更好地决策。选项 D 与原文目的状语 to help leaders determine noise pollution policies 中的 determine（决定、确定）与 policies（政策）精确呼应。",
          "traps": [
            "A 项（如何在城市地图上记录污染细节）错误：noise maps 在原文中只是手段（are creating noise maps of those cities），真正的研究落点写在目的状语 to help leaders determine noise pollution policies 里；A 把手段本身当成了研究目的，且原文并未讨论“如何记录”的方法问题。",
            "B 项（噪声对欧洲城市人口迁移的影响）错误：原文出现的 Population pressure（人口压力）只是促使欧洲更快处理噪声问题的原因（Population pressure has prompted Europe to move more quickly），并未研究噪声与人口迁移之间的关系，B 属于把因果背景偷换成研究主题。",
            "C 项（城市可以有多宽才能避免噪声污染）错误：原文只提到以 250,000 人口为门槛的城市规模标准，全文没有任何关于城市“宽度”或避免噪声污染的空间尺度的讨论，C 属于原文无据的选项。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "What is the best title in paragraph 1?",
          "translation": "第 1 段最合适的标题是什么？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "During a single day, people living in a typical urban environment can experience a wide range of sounds in many locations, even once-quiet locales have become polluted with noise."
          },
          "synonyms": [
            "「Living in a Noisy World」同义替换为原文的 「once-quiet locales have become polluted with noise」与 「people living in a typical urban environment can experience a wide range of sounds」",
            "「The Effects of …」同义替换为原文的 「can cause adverse health effects」与 「Growing evidence also points to many other health effects of too much volume」",
            "第 1 段与全文标题 A Decibel Hell (The Effects of Living in a Noisy World) 的主题句一致，本题答案与该标题重合"
          ],
          "locatingTip": "定位：题干限定“第 1 段”，因此只需读第 1 段五句话，不需要看全文。确定答案技巧：标题题要抓段落的主旨而不是个别细节。第 1 段的推进脉络是：噪声在生活中无处不在（encounter sound at levels that can cause adverse health effects；once-quiet locales have become polluted with noise；difficult today to escape sound completely）然后是危害（WHO 的噪声性听力损伤数据）再到“还有其他健康影响”（Growing evidence also points to many other health effects of too much volume），全段围绕“生活在嘈杂世界中的影响”展开，与选项 C 完全吻合；而且本段属于全文标题 A Decibel Hell (The Effects of Living in a Noisy World) 的开篇，选项 C 正是标题后半部分，属于主旨原句的复现。",
          "analysis": "第 1 段共五句：①It's not difficult for a person to encounter sound at levels that can cause adverse health effects.（人们很容易遇到可能危害健康的声级）；②During a single day, people living in a typical urban environment can experience a wide range of sounds in many locations, even once-quiet locales have become polluted with noise.（在典型城市环境中生活的人一天之内就会在许多场所经历各种声音，连曾经安静的角落也被噪声污染）；③In fact, it's difficult today to escape sound completely.（事实上，如今很难完全避开声音）；④引用 WHO 的 1999 年《社区噪声指南》，指出噪声性听力损伤是全球最普遍且不可逆的职业危害，约 1.2 亿人存在致残性听力困难；⑤Growing evidence also points to many other health effects of too much volume.（越来越多证据还指向音量过大带来的其他健康影响）。五句合起来讲两件事：人们生活在噪声无处不在的环境里（noisy world），以及噪声对健康造成的影响（adverse health effects、health effects）。选项 C 的 The Effects of Living in a Noisy World 恰好覆盖这两层信息，且与文章标题的后半部分一致，故为最佳标题。做标题题时一定要用“能否覆盖全段”来筛选，只覆盖某一句或引入原文没有的话题的选项都要排除。",
          "traps": [
            "A 项（人们如何应对噪声污染）错误：第 1 段只描述噪声无处不在以及它对健康的影响（can cause adverse health effects、many other health effects），没有提出任何应对或解决噪声的办法，cope with（应对）属于原文未涉及的内容。",
            "B 项（用强大技术对抗噪声）错误：第 1 段完全没有涉及技术手段，B 属于凭想象添加的话题。",
            "D 项（噪声对儿童学习的影响）错误：儿童学习的内容出现在第 11 段（铁轨旁学校加装隔音砖后 children's reading scores improved），第 8 段另有 CDC 关于美国儿童噪声性听阈位移的普查数据，两处都在后文；第 1 段从头到尾没有提到儿童，D 是把后段细节错当成第 1 段的标题。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
