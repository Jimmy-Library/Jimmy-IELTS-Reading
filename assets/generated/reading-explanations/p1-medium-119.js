(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-119", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-119",
  "meta": {
    "examId": "p1-medium-119",
    "title": "Wood 新西兰木材产业",
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
          "stem": "Settlers realised that wooden houses were more dangerous than other types of structure.",
          "translation": "定居者意识到，木制房屋比其他类型的建筑更危险。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "A tradition of wooden houses arose, supported by the recognition that they were less likely to collapse suddenly during earthquakes, a not-infrequent event in this part of the world."
          },
          "synonyms": [
            "“Settlers” 对应原文的 “European immigrants” 与 “During the settlement of New Zealand”（新西兰被欧洲移民定居的时期），指的就是这批定居者",
            "“realised” 同义替换为原文的 “the recognition”（认识、认知），即他们认识到这一点",
            "“wooden houses” 在原文中原词复现：“A tradition of wooden houses arose”",
            "“more dangerous than other types of structure” 与原文的 “less likely to collapse suddenly during earthquakes” 方向完全相反：原文说的是木屋在地震中更不容易突然倒塌，即更安全，而不是更危险"
          ],
          "locatingTip": "定位：题干中的 wooden houses 是全文最先出现的话题词，Settlers 对应第 1 段开头的 European immigrants 与 settlement，因此本题落在第 1 段第 3 句。确定答案技巧：判断题里出现比较级（more dangerous than）时，一定要回原文找同类比较。原文用的是 less likely to collapse（更不容易倒塌），说明木屋在抗震上反而是优势，与题干“更危险”正好相反，属于事实冲突，故判 FALSE。",
          "analysis": "第 1 段交代新西兰木材产业兴起的背景：木材易得、相对便宜，于是形成了木屋传统。题干的落点在第 3 句：“A tradition of wooden houses arose, supported by the recognition that they were less likely to collapse suddenly during earthquakes, a not-infrequent event in this part of the world.”（木屋传统之所以形成，是因为人们认识到木屋在地震中不太会突然倒塌，而地震在世界这一带并不罕见）。句中 recognition 后面的同位语从句说清了两件事：一是木屋在抗震上的优势（less likely to collapse），二是这种优势之所以重要，是因为当地地震频发（a not-infrequent event）。题干把原文的 less likely to collapse（更不容易倒塌）改写成 more dangerous（更危险），把“相对安全”偷换成“相对危险”，正好把原文的因果逻辑反转了：原文说人们正是因为觉得木屋更安全才形成木屋传统，题干却说人们意识到木屋更危险。这与原文直接矛盾，所以答案是 FALSE。做题提醒：less likely / more likely、less dangerous / more dangerous 这类比较方向词是判断题最常见的陷阱，看到比较级务必回到原文核对比较的方向和对象。",
          "traps": [
            "为什么不是 TRUE：原文明确说木屋 “were less likely to collapse suddenly during earthquakes”（不太会在地震中突然倒塌），是相对安全的选项；题干却称木屋 “more dangerous than other types of structure”，与原文的比较方向完全相反，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文既说明了定居者选择木屋的原因（认识到木屋抗震更好、不易突然倒塌），又交代了当地地震频发的背景，关于“木屋是否更危险”这个问题信息是明确且相反的，不属于没有提及，所以只能是 FALSE。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "During the 1800s, New Zealand exported wood for use in boat-building.",
          "translation": "在 19 世纪，新西兰出口木材用于造船。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "So, from the early 1800s, huge amounts of this type of wood were sold to Australia and the UK for that purpose."
          },
          "synonyms": [
            "“During the 1800s” 同义替换为原文的 “from the early 1800s”（从 19 世纪初开始，属于 1800 年代）",
            "“New Zealand exported wood” 同义替换为原文的 “huge amounts of this type of wood were sold to Australia and the UK”，原文用被动语态说这种木材被大量卖到澳大利亚和英国，从新西兰的角度看就是出口",
            "“boat-building” 同义替换为原文上一句的 “constructing sailing vessels”（建造帆船），帆船即船，建造帆船即造船",
            "“for that purpose” 是回指表达，指代上一句的 “the suitability of the tall, straight trunks of the kauri for constructing sailing vessels”，即把木材用于造船这一用途"
          ],
          "locatingTip": "定位：题干关键词是时间 1800s 和用途 boat-building，二者都集中在第 2 段。扫读时先看到 “Early explorers recognised the suitability of the tall, straight trunks of the kauri for constructing sailing vessels.”（早期探险者发现 kauri 高大笔直的树干适合造帆船），随后第 3 句给出时间 “from the early 1800s”。确定答案技巧：本题考“时间加用途”的信息对拼，关键是读懂 that purpose 这个回指代词——它把“卖到澳大利亚和英国”与上一句的“建造帆船”连成一条因果链，说明出口的木材确实用在了造船业上，时间（early 1800s）也对得上（1800s），两处都吻合，故选 TRUE。",
          "analysis": "第 2 段讲早期木材出口。第 1 句：“Early explorers recognised the suitability of the tall, straight trunks of the kauri for constructing sailing vessels.”（早期探险者发现 kauri 高大笔直的树干适合建造帆船）。第 2 句补充 kauri 是只分布在南半球小片区域的针叶树种。第 3 句就是本题定位句：“So, from the early 1800s, huge amounts of this type of wood were sold to Australia and the UK for that purpose.”（因此，从 19 世纪初起，这种木材被大量卖往澳大利亚和英国，正是为了这个用途）。句首的 So 表明这句是前一句的结果，句尾的 that purpose 则直接回指“建造帆船”。因此原文的信息链条是：新西兰把 kauri 大量卖到海外（出口），用途是造帆船（boat-building），时间从 19 世纪初开始（During the 1800s）。题干的三项要素 During the 1800s、exported wood、for use in boat-building 分别对应 from the early 1800s、were sold to Australia and the UK、for that purpose（即 constructing sailing vessels），信息方向完全一致，所以答案是 TRUE。注意题干把具体的 “sailing vessels”（帆船）概括为 “boat-building”（造船），这是常见的上下义替换，不算曲解；判断时要抓住“卖到海外用于造船”这条主线，而不是纠结船的种类。",
          "traps": [
            "为什么不是 FALSE：原文说 19 世纪初起这种木材被大量卖往澳大利亚和英国，且明确交代用途是建造帆船（for that purpose 回指 constructing sailing vessels），与新西兰出口木材用于造船的说法完全一致，没有矛盾，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：时间（from the early 1800s）、出口对象（sold to Australia and the UK）和用途（that purpose，即 constructing sailing vessels）三项信息在原文中都有明确交代，信息完整，不属于未提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Plantation-grown wood is generally better for construction than native forest wood.",
          "translation": "人工林种植的木材在建筑方面总体上优于天然林（原生林）木材。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "By the 1960s, plantation-grown timber was providing most of the country's sawn-timber needs, especially for construction."
          },
          "synonyms": [
            "“Plantation-grown wood” 同义替换为原文的 “plantation-grown timber”，几乎原词复现",
            "“for construction” 同义替换为原文的 “especially for construction”，原词复现",
            "“generally better … than native forest wood” 在原文中没有任何对应：原文只讲人工林木材在数量上满足了大部分建筑用材需求，从未比较两种木材的质量或性能优劣",
            "原文的 “most of the country's sawn-timber needs” 讲的是“数量上占多数”（份额），题干的 better 讲的是“质量更好”（优劣），二者根本不是同一维度的信息"
          ],
          "locatingTip": "定位：题干关键词 Plantation-grown wood 与 construction 都在第 3 段，且第 3 段前两句正好讲人工林（radiata pine plantation）与建筑用材的关系，锁定第 3 段即可。确定答案技巧：判断题看到比较级加评价词（generally better than）要格外警觉，回原文核对是否存在“比较质量”的表述。原文只说 plantation-grown timber 满足了大部分锯材需求、尤其用于建筑，即“用的多”；至于它是不是比原生林木材更好，原文只字未提（第 3 段后半段只提到原生林木材如今多用于家具等更高附加值用途，这是用途分工，不是质量比较）。原文没有的信息就是 NOT GIVEN，切忌把“用量大”自行推断成“质量更好”。",
          "analysis": "第 3 段的主线是人工林兴起。第 1 句说从 1940 年代起，引进树种 radiata pine 的新建林场以越来越大的数量供应木材及木制品；第 2 句（本题定位句）说：“By the 1960s, plantation-grown timber was providing most of the country's sawn-timber needs, especially for construction.”（到 1960 年代，人工林木材满足了全国大部分锯材需求，尤其用于建筑）。第 3 句接着讲：“Today, less than two percent of timber is cut from indigenous forests, and almost all of that is used for higher-value end uses such as furniture and fittings.”（如今只有不到百分之二的木材取自原生林，而且几乎全部用于家具、装修配件等更高附加值的最终用途）。通读这三句可以发现，原文比较的是“份额”和“用途分工”：人工林木材供给量大、主要用于建筑；原生林木材产量极小、主要用于家具。原文从未做过“哪种木材对建筑更好”的性能或质量对比。题干却写成 “Plantation-grown wood is generally better for construction than native forest wood”，加入了 better 这一质量评价，并把它作为两种木材之间的比较。这类“把数量关系偷换成质量评价”的题目，在原文找不到对应表述，只能是 NOT GIVEN。注意区分三种情形：原文说“A 更多”不等于说“A 更好”；原文说“A 用于某领域”不等于说“A 在该领域更优秀”。",
          "traps": [
            "为什么不是 TRUE：原文只提供了“人工林木材满足大部分锯材需求、尤其用于建筑”这一数量与用途层面的信息，没有任何一句评价其建筑性能优于原生林木材，题干中的 generally better 属于无据推断，不能选 TRUE。",
            "为什么不是 FALSE：原文也没有说人工林木材比不上原生林木材。第 3 段提到原生林木材多用于家具等更高附加值用途，这只能说明二者用途不同（分工差异），并不能反证原生林木材在建筑上更优，因此不存在与题干相反的信息，不构成 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Compared with other types of wood, pine has a narrow range of uses.",
          "translation": "与其他种类的木材相比，松木的用途范围很窄。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "As the pine industry developed, it became apparent that this type of wood was also well suited for many uses."
          },
          "synonyms": [
            "“pine” 在原文中以 “this type of wood” 回指，前文已说明这类树是 “an imported species of tree called radiata pine”（引进树种辐射松）",
            "“has a narrow range of uses” 与原文的 “was also well suited for many uses”（也很适合许多用途）直接冲突，narrow 与 many 相反",
            "紧接着的下一句 “This amazing versatility has encouraged the development of an integrated forest-products industry which is almost unique in the world.” 中的 versatility（多用途性）进一步印证“用途广”，与 narrow 正好对立",
            "“Compared with other types of wood” 对应原文的 also（也），原文用 also 说明松木除了满足建筑需求外，同样适合其他多种用途，暗示用途并不少于其他木材"
          ],
          "locatingTip": "定位：题干的关键词 pine 在第 3 段反复出现（radiata pine、pine industry、Pine by-products），第 3 段就是专讲松木用途的段落。确定答案技巧：判断题遇到表示范围大小的词（narrow、wide、limited、versatile）时，要看原文对同类概念用的是扩大还是缩小口径。原文写 “well suited for many uses”（适合许多用途），并用 versatility（多才多艺、多用途）收尾，方向与 narrow range 完全相反，因此判 FALSE。此外，定位句后面还连举了七八种具体用途，等于把“用途广”这条信息做成了清单式证据。",
          "analysis": "第 3 段后半是本题的证据区。定位句：“As the pine industry developed, it became apparent that this type of wood was also well suited for many uses.”（随着松木产业发展，人们发现这种木材也很适合许多用途）。随后原文用两个密集的句子展开：一句说 “It makes excellent pulp*, and is frequently used for posts, poles, furnishings and mouldings, particleboard, fibreboard, and for plywood and ‘engineered' wood products.”（它能制优质纸浆，常用于柱子、杆子、家具与线脚、刨花板、纤维板以及胶合板和“工程化”木制品），从纸浆到各类板材逐一列举；另一句说 “Pine by-products are used in the chemical and pharmaceutical industries and residues are consumed for fuel.”（松木副产品用于化工与制药，残余物被用作燃料），把用途扩展到化工、制药和能源。最后以 “This amazing versatility has encouraged the development of an integrated forest-products industry which is almost unique in the world.”（这种惊人的多用途性催生了在世界上几乎独一无二的一体化林产品工业）作结。通篇都在说松木用途广、样样都行，题干却断言其 “has a narrow range of uses”（用途范围窄），与原文的 many uses、versatility 以及一长串具体用途清单正面对立，因此答案是 FALSE。做题提示：列举型句子（并列多个名词）本身就是在证明“范围广”，看到连续并列的用途清单，就能迅速否定 narrow / limited 之类的说法。",
          "traps": [
            "为什么不是 TRUE：原文用 “well suited for many uses” 和 “This amazing versatility” 明确强调松木用途广泛，后面还列举了纸浆、柱子、家具、刨花板、纤维板、胶合板、工程木制品以及化工、制药、燃料等大量用途，与“用途范围窄”完全相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对松木的用途范围给出了非常明确且充分的描述（many uses、versatility 加具体列举），并不是没有提及；信息存在且与题干冲突，只能判 FALSE。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Demand for housing in New Zealand is predicted to fall in the next few years.",
          "translation": "预计未来几年新西兰的住房需求将会下降。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "But it is generally agreed that it is operating well below its capacity and, with the domestic market already at its peak, almost all of the extra wood produced in future will have to be marketed overseas."
          },
          "synonyms": [
            "“the domestic market already at its peak” 的意思是国内市场已经到顶、不再增长，与题干的 “predicted to fall”（预计会下降）并不是一回事：到顶是停止增长，下降是减少",
            "“Demand for housing” 对应第 5 段的 “the construction industry is the principal user of solid wood products, servicing around 20,000 new-house starts annually”，原文只给出了每年约两万套新开工住房这一现状数字",
            "“in the next few years” 对应原文的 “in future” 与 “in decades to come”，但原文对这一时间范围内的说法是“额外的木材只能销往海外”，并未给出住房需求的升降预测",
            "原文中完全没有出现 predict / expected / forecast 之类的预测词，也没有任何关于住房需求下降的表述"
          ],
          "locatingTip": "定位：题干关键词是 housing（住房）与 demand（需求），第 5 段开头讲建筑业是实木产品的主要使用者，每年约有 20,000 套新开工住房（new-house starts），这是唯一涉及住房需求的段落；第 6 段接着讲国内市场已经到顶（domestic market already at its peak）。确定答案技巧：本题考“有没有预测”，判断关键是原文有没有给出“未来需求会下降”这个判断。原文只陈述现状（每年约两万套新开工）和国内市场的饱和状态（已到顶峰，即不再增长），并由此推出新增木材必须销往海外；既没有说需求会上升，也没有说会下降。缺少这一预测就是 NOT GIVEN，不要因为“市场到顶”就自行脑补成“需求要下降”。",
          "analysis": "第 5 段：“In New Zealand itself, the construction industry is the principal user of solid wood products, servicing around 20,000 new-house starts annually.”（在新西兰本土，建筑业是实木产品的主要使用者，每年服务约两万套新开工住房）。随后指出人口规模小（略超四百万）以及制造与再制造基础薄弱限制了国内机会，“For the last few years local wood consumption has been around only four million cubic metres.”（近几年本地木材消费仅约四百万立方米），最后说 “Accordingly, the development of the export market is the key to the industry's growth … in decades to come.”（因此开拓出口市场是该行业未来几十年增长的关键）。第 6 段定位句进一步指出国内市场 “already at its peak”（已经到顶），未来多出来的木材几乎都要销往海外。把这些句子放在一起看：原文讲的是“国内用材量少且已饱和、增长空间在海外”，这是一个关于市场容量的陈述；题干问的是 “Demand for housing … is predicted to fall”（住房需求预计会下降），属于对未来需求走向的预测。原文既没有给出任何需求下降（fall / decline）的预测，也没有否证这种预测，属于纯粹的信息缺失，因此答案是 NOT GIVEN。做题提醒：不要把 “at its peak”（到顶、停止增长）等同于 “will fall”（会下降），两者是不同性质、不同方向的判断；雅思判断题正是用这种近义但不等价的表述制造干扰。",
          "traps": [
            "为什么不是 TRUE：原文只说明建筑业是实木产品的主要用户、每年约有两万套新开工住房，并指出国内市场已经到顶；全篇没有出现任何“住房需求会下降”的预测或表述，题干的 predicted to fall 在原文找不到支撑，不能选 TRUE。",
            "为什么不是 FALSE：原文也没有说住房需求不会下降或将会上升，即不存在与题干对立的信息。“市场到顶”意味着停止增长，与“需求下降”在逻辑上并不等价，所以不能据此判 FALSE；信息缺失只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "In future, the expansion of New Zealand's wood industry will depend on its exports.",
          "translation": "未来，新西兰木材产业的扩张将取决于其出口。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Accordingly, the development of the export market is the key to the industry's growth and contribution to the national economy in decades to come."
          },
          "synonyms": [
            "“the expansion of New Zealand's wood industry” 同义替换为原文的 “the industry's growth”（行业的增长），growth 即扩张",
            "“will depend on its exports” 同义替换为原文的 “the development of the export market is the key to”，be the key to 即取决于、是关键",
            "“In future” 同义替换为原文的 “in decades to come”（未来几十年）",
            "第 6 段的 “almost all of the extra wood produced in future will have to be marketed overseas” 也印证同一逻辑：今后新增木材只能依靠海外市场"
          ],
          "locatingTip": "定位：题干关键词是 future 与 depend on exports，第 5 段末句用 Accordingly 引出结论，句中出现 export market、growth、in decades to come，三处关键词一次命中。确定答案技巧：判断“未来增长靠什么”这类因果题，要找准原文的结论句。原文写 “the development of the export market is the key to the industry's growth”，把出口市场的开发直接定为行业增长的关键，等于“未来扩张取决于出口”；第 6 段又用 “almost all of the extra wood produced in future will have to be marketed overseas” 做二次印证，因此答案是 TRUE。",
          "analysis": "第 5 段先分析国内市场的局限：建筑业虽是实木产品的主要用户，但新西兰人口只有四百多万，制造与再制造基础也小，近几年本地木材消费仅约四百万立方米。紧接着给出结论句（定位句）：“Accordingly, the development of the export market is the key to the industry's growth and contribution to the national economy in decades to come.”（因此，开发出口市场是该行业未来几十年实现增长、并为国民经济作贡献的关键）。Accordingly 一词表明这是由前面局限推出的结论；be the key to 表示“是……的关键、取决于”，与题干的 depend on 完全对应；in decades to come 与 In future 对应；the industry's growth 与 the expansion of New Zealand's wood industry 对应。第 6 段进一步强化：“almost all of the extra wood produced in future will have to be marketed overseas”（今后多生产的木材几乎都必须销往海外），说明国内已无增长空间，新增部分只能靠出口消化。两条信息互相印证，题干的说法正是原文之意，因此答案是 TRUE。做题提示：段落末尾由 Therefore / Accordingly / So 引出的句子往往是该段结论，判断题中涉及“某事的决定因素”的题目，答案常在结论句中。",
          "traps": [
            "为什么不是 FALSE：原文用 Accordingly 明确得出结论——“出口市场的开发是行业增长的关键”，并用 will have to be marketed overseas 再次强调新增木材只能依靠海外市场，与题干“未来扩张取决于出口”方向一致，没有任何矛盾，故选 TRUE 而非 FALSE。",
            "为什么不是 NOT GIVEN：原文对“未来增长靠什么”给出了明确而直接的答案（出口市场是关键），并且第 6 段还有同向补充，信息完整，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 简答题（NO MORE THAN TWO WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Apart from exchange rates, which factor has had a negative impact on New Zealand's forestry exports?",
          "translation": "除了汇率之外，还有哪个因素对新西兰的林业出口产生了负面影响？",
          "answer": "shipping costs",
          "wordClass": "名词短语（复数名词 costs 前有动名词 shipping 作前置定语，指运费；答案两个词 shipping costs，注意写复数）",
          "locating": {
            "paragraph": "6",
            "quote": "their value having increased steadily for ten years, until affected by the exchange fluctuations and shipping costs of recent years"
          },
          "synonyms": [
            "“exchange rates” 同义替换为原文的 “exchange fluctuations”（汇率波动），题干用 Apart from 把它处理成已知信息",
            "“which factor” 对应原文并列结构中的另一项 “shipping costs”（运输成本），即所缺答案",
            "“has had a negative impact” 同义替换为原文的 “until affected by”（直到受到……的影响），affected by 在此含不利影响之意",
            "“forestry exports” 对应原文的 “forestry export receipts”（林业出口收入），即出口的业绩指标"
          ],
          "locatingTip": "定位：题干关键词 exchange rates 与 forestry exports 共同把范围锁定在第 6 段首句——该句是全文唯一同时出现 export receipts 与 exchange fluctuations 的地方。确定答案技巧：句子用 until affected by 引出两个并列的负面影响因素，一个是 exchange fluctuations（汇率波动，题干已给出），另一个就是 shipping costs（运输成本），缺的那一项正是答案。注意词数限制 NO MORE THAN TWO WORDS，shipping costs 恰好两词，且要保留复数形式 costs；不要只写 shipping（那是动名词定语，意思不完整），也不要把 ten years 之类的干扰信息填进去。",
          "analysis": "第 6 段首句：“In 2004, forestry export receipts were about 11 percent of the country's total export income, their value having increased steadily for ten years, until affected by the exchange fluctuations and shipping costs of recent years.”（2004 年，林业出口收入约占全国出口总收入的 11%，其价值连续十年稳步增长，直到近年受到汇率波动和运输成本的影响）。句子的时间线很清楚：先连续增长十年（正面），随后被两个因素拖累（负面）。题干用 Apart from exchange rates 把其中一个因素（exchange fluctuations，汇率波动）作为已给条件排除掉，问的是另一个因素，即 shipping costs（运输成本）。从语法上看，until affected by 是被动结构作时间状语修饰 increased，被影响的主体是 their value（出口收入的价值），因此这两个因素确实都是对出口产生负面作用的因素；从词数上看，shipping costs 为两词短语，符合 NO MORE THAN TWO WORDS AND/OR A NUMBER 的要求。作答应注意：答案必须来自原文原词，不要改写成 freight rates 或 transport costs 之类的同义表达。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Which part of New Zealand's economy does the forestry industry rank third in?",
          "translation": "林业在新西兰经济的哪个板块中排名第三？",
          "answer": "export sector",
          "wordClass": "名词短语（单数名词 sector 前有名词 export 作前置定语，指出口部门；答案两个词 export sector，不加复数）",
          "locating": {
            "paragraph": "6",
            "quote": "The forestry industry is New Zealand's third-largest export sector, generating around $3.3 billion annually from logs and processed wood products."
          },
          "synonyms": [
            "“rank third in” 同义替换为原文的 “third-largest … sector”，third-largest 即“第三大的、排第三的”",
            "“Which part of New Zealand's economy” 同义替换为原文的 “sector”（经济部门、行业板块）",
            "“New Zealand's” 与 “the forestry industry” 在原文中原词复现"
          ],
          "locatingTip": "定位：题干关键词 forestry industry 与 third 组合非常独特，第 6 段第 2 句出现 third-largest，一步命中。确定答案技巧：题目问的是“在哪个板块中排第三”，看到 third-largest 后要紧跟其后的名词中心语 export sector（出口部门），因为形容词 third-largest 修饰的正是这个名词短语。填写时保持原文语序 export sector（不要把形容词 export 挪到后面写成 sector of export），也不要漏掉 export 只写 sector，因为“哪个板块”正是本题的信息点所在。",
          "analysis": "第 6 段第 2 句：“The forestry industry is New Zealand's third-largest export sector, generating around $3.3 billion annually from logs and processed wood products.”（林业是新西兰第三大出口部门，每年通过原木和加工木制品创造约 33 亿新元的收入）。题干把这个名词短语改写成一个疑问句：“Which part of New Zealand's economy does the forestry industry rank third in?”其中 rank third in 对应 third-largest … sector，which part of New Zealand's economy 对应 sector。可见题干问的就是 third-largest 所修饰的那个板块名称，即 export sector。这里要注意两点：一是答案必须包含 export 这个限定词，只写 sector 会丢失“哪一类部门”的关键信息，通常不能得分；二是原文说的是 third-largest（以规模论排第三），题干说 rank third（排名第三），属于同义转换，不改变信息。词数上 export sector 为两词，符合 NO MORE THAN TWO WORDS 的限制，且不需要加冠词或复数。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "According to the New Zealand forestry industry, what could be the size of its workforce by 2025?",
          "translation": "据新西兰林业界称，到 2025 年其从业人员规模可能达到多少？",
          "answer": "60,000",
          "wordClass": "数词（人数，原文写作 60,000；答案表同时接受 60000 与 60 000 两种写法，按原文形式填 60,000 最稳妥）",
          "locating": {
            "paragraph": "7",
            "quote": "The industry claims that, given the right conditions, by 2025 the forestry sector could be the country's biggest export earner, generating $20 billion a year and employing 60,000 people."
          },
          "synonyms": [
            "“According to the New Zealand forestry industry” 同义替换为原文的 “The industry claims”（行业声称），即这是林业界自己的说法",
            "“the size of its workforce” 同义替换为原文的 “employing 60,000 people”（雇用 6 万人），从业人员规模即雇员人数",
            "“could be” 在原文中原词复现：“the forestry sector could be the country's biggest export earner”，表示一种可能而非事实",
            "“by 2025” 在原文中原词复现"
          ],
          "locatingTip": "定位：题干年份 2025 在全文只出现一次，落在第 7 段末句，属于一眼可见的数字定位词。确定答案技巧：找到 by 2025 后，句中出现两个数字——$20 billion（年产值）与 60,000 people（雇员人数）；题干问的是“从业人员规模（the size of its workforce）”，对应 employing 60,000 people 中的 60,000，而不是 20 billion。还要注意题干 According to … industry 对应原文的 The industry claims，说明这是行业自己的预期，填数字本身即可，不要添加 people 之外的词（NO MORE THAN TWO WORDS AND/OR A NUMBER，且 people 属于句中既有成分，答案只需数字）。",
          "analysis": "第 7 段先讲产业转向附加值产品的必要性，随后列出未来发展所需的条件（更好的国际营销、产品创新、有国际竞争力的加工、更好的基础设施以及适宜的政治、监管和投资环境），末句就是定位句：“The industry claims that, given the right conditions, by 2025 the forestry sector could be the country's biggest export earner, generating $20 billion a year and employing 60,000 people.”（林业界声称，若条件合适，到 2025 年林业部门可能成为该国最大的出口创汇部门，每年创收 200 亿新元，雇用 6 万人）。题干问的是人员规模，对应句尾 employing 60,000 people，因此答案是 60,000。这题的干扰点有两个：一是句中出现两个数字，$20 billion 讲的是产值而非人数，不能混填；二是题干用 “According to the New Zealand forestry industry” 对应原文的 The industry claims，提示这是行业自己的预测，属于填空题常见的“来源限定”，不影响答案内容。作答时数字写法建议照抄原文 60,000；答案表也接受 60000、60 000，但不要写成 6 万或 sixty thousand。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "What kind of timber product is available in large amounts from renewable forests in New Zealand?",
          "translation": "新西兰的再生林（可持续经营林）能够大量提供的是哪一种木材产品？",
          "answer": "softwood",
          "wordClass": "名词（不可数，木材类别名称；回答题干 What kind of… 的提问，作答语名词，用不可数形式 softwood，不加复数、不加冠词）",
          "locating": {
            "paragraph": "8",
            "quote": "One competitive advantage that New Zealand has is its ability to source large quantities of softwood from renewable forests."
          },
          "synonyms": [
            "“is available in large amounts” 同义替换为原文的 “its ability to source large quantities”（有能力大量获取），large amounts 与 large quantities 对应",
            "“renewable forests” 在原文中原词复现",
            "“What kind of timber product” 对应原文的具体类别名词 “softwood”（软木、针叶材），与下文括号中并列的 hardwood（硬木）相对，同属木材类别"
          ],
          "locatingTip": "定位：题干关键词 renewable forests 在全文只出现一次，位于第 8 段首句，直接锁定。确定答案技巧：句子结构是 its ability to source large quantities of [名词] from renewable forests，空格要填的是被大量获取的那种木材，即介词 of 后的名词 softwood（软木）。注意不要填 renewable 或 forests 之类的现有词，也不要误填入括号里的 hardwood——原文括号中把 hardwood and softwood 一并列为“速生树种”的两个类别，但“新西兰能大量提供的”只是其中的 softwood。",
          "analysis": "第 8 段首句（定位句）：“One competitive advantage that New Zealand has is its ability to source large quantities of softwood from renewable forests.”（新西兰拥有一项竞争优势，就是它能够从可再生林（可持续经营的林场）中大量获取软木）。题干把这句话改写成疑问句：“What kind of timber product is available in large amounts from renewable forests in New Zealand?”其中 is available in large amounts 对应 its ability to source large quantities，renewable forests 原词保留，问的正是被大量获取的木材种类，即 softwood。从词性看，large quantities of 后接不可数名词或复数名词，softwood 作为木材类别在此为不可数用法，保持原形、不加 s、不加冠词即可。干扰信息在下一句：原文说到其他同样拥有林场式林业的国家时，用括号列出 “fast-growing species (hardwood and softwood)”（速生树种，包括硬木和软木），hardwood 在此出现容易让考生误选，但它泛指他国的树种，与“新西兰能大量提供”这一限定不符。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Which aspect of timber production are New Zealand's main customers increasingly concerned about?",
          "translation": "新西兰的主要客户越来越担心木材生产的哪个方面？",
          "answer": "sustainability",
          "wordClass": "名词（不可数抽象名词，作介词 about 的宾语，指可持续性；用不可数形式 sustainability，不加复数、不加冠词）",
          "locating": {
            "paragraph": "8",
            "quote": "Consumers in several key wood markets are becoming more worried about sustainability"
          },
          "synonyms": [
            "“New Zealand's main customers” 同义替换为原文的 “Consumers in several key wood markets”（几个主要木材市场的消费者）",
            "“increasingly concerned about” 同义替换为原文的 “becoming more worried about”（越来越担心），increasingly 对应 more，concerned about 对应 worried about",
            "“Which aspect of timber production” 对应原文的抽象名词 “sustainability”（可持续性）"
          ],
          "locatingTip": "定位：题干关键词 customers、concerned 在第 8 段第 2 句有对应表达 Consumers … worried about，且句中 main customers 对应 several key wood markets（几个主要木材市场），一步锁定。确定答案技巧：题干问的是“担心哪个方面”，原文结构是 becoming more worried about [名词]，介词 about 后的 sustainability 就是所问的方面。这是一个抽象名词题，答案必须照抄原文 sustainability，不要改写成 sustainable、sustainable development 或 environment；词数限制为不超过两词，sustainability 一个词即可。",
          "analysis": "第 8 段第 2 句（定位句）：“Consumers in several key wood markets are becoming more worried about sustainability, and the industry is supporting the development of national standards as well as the recognition of these internationally.”（几个主要木材市场的消费者越来越担心可持续性问题，行业正在支持制定国家标准并推动这些标准获得国际认可）。题干把这个信息点转成疑问句：New Zealand's main customers 对应 Consumers in several key wood markets（新西兰的木材出口市场即其主要客户），increasingly concerned about 对应 becoming more worried about，被担心的方面就是 about 后面的 sustainability（可持续性）。原文随后的 “the industry is supporting the development of national standards … internationally” 也印证这一担心与“可持续经营的标准”有关，属于同一话题的延伸，可用于反向验证答案。词性上 sustainability 是不可数抽象名词，作介词宾语，保持原形即可，不要写成 sustainable（形容词）或 sustainability standards（超出词数且改变了提问对象）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Outside the Southern Hemisphere, who are New Zealand forestry's main competitors?",
          "translation": "在南半球之外，新西兰林业的主要竞争者是谁？",
          "answer": "Scandinavian countries",
          "wordClass": "名词短语（复数，专有名词 Scandinavian 作前置定语修饰 countries；答案两个词，首字母大写，不加冠词）",
          "locating": {
            "paragraph": "8",
            "quote": "in the northern hemisphere, Scandinavian countries have all expanded their forests or controlled their use in the interests of future production"
          },
          "synonyms": [
            "“Outside the Southern Hemisphere” 同义替换为原文的 “in the northern hemisphere”（在北半球），南半球之外即北半球",
            "“main competitors” 对应原文的竞争语境：上文用 “New Zealand is not the only country with a plantation-style forestry industry” 引出智利、巴西、阿根廷、南非、澳大利亚等同类国家，随后转向北半球的 “Scandinavian countries”（斯堪的纳维亚国家），说明它们同属竞争对手一方",
            "“who are New Zealand forestry's main competitors” 与原文的 “New Zealand is not the only country with a plantation-style forestry industry” 构成问答对应，问的对象就是这些同样经营林场式林业的国家"
          ],
          "locatingTip": "定位：题干关键词 Outside the Southern Hemisphere 在原文的对应说法是 in the northern hemisphere，出现在第 8 段末句，扫读时盯住 northern hemisphere 即可。确定答案技巧：末句是一个并列句，前半列举南半球的智利、巴西、阿根廷、南非和澳大利亚（这些都在南半球范围内，不属于本题答案），后半用 and 转折到北半球，主语就是 Scandinavian countries。还要理解上文的铺垫：“New Zealand is not the only country with a plantation-style forestry industry” 明确点出“同类国家即竞争对手”，因此答案必须是一个国家群体而非某项产品。",
          "analysis": "第 8 段先讲新西兰的竞争优势（可再生林大量供应软木），随后承认竞争存在：“However, New Zealand is not the only country with a plantation-style forestry industry; Chile, Brazil, Argentina, South Africa and Australia all have extensive plantings of fast-growing species (hardwood and softwood), and in the northern hemisphere, Scandinavian countries have all expanded their forests or controlled their use in the interests of future production.”（然而，新西兰并不是唯一拥有林场式林业的国家；智利、巴西、阿根廷、南非和澳大利亚都种植了大片速生树种（硬木和软木），而在北半球，斯堪的纳维亚国家也都为未来的生产扩大了自己的森林或控制了森林的利用）。题干问“南半球之外的主要竞争者是谁”，对应原文的 in the northern hemisphere（北半球即南半球之外），该分句的主语就是 Scandinavian countries，即答案。注意两点：一是答案要写复数形式的 countries，与原文一致；二是不能误填智利、巴西、南非、澳大利亚等，因为它们都属于南半球那一组，正被题干的 Outside the Southern Hemisphere 排除在外；也不能填 hardwood 或 softwood，它们是树种而非竞争者。这是典型的“用半球划分信息组”的定位题，读到 and in the northern hemisphere 就要立刻把注意力切换到后半分句。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Which group of products is New Zealand's forestry industry now having to compete with?",
          "translation": "新西兰林业现在不得不与哪一类产品竞争？",
          "answer": "wood substitutes",
          "wordClass": "名词短语（复数，名词 wood 作前置定语修饰 substitutes，指木材替代品；答案两个词 wood substitutes）",
          "locating": {
            "paragraph": "9",
            "quote": "New Zealand faces competition from goods such as wood substitutes."
          },
          "synonyms": [
            "“is now having to compete with” 同义替换为原文的 “faces competition from”（面临来自……的竞争）",
            "“Which group of products” 同义替换为原文的 “goods such as …”（诸如……之类的商品），group 对应 such as 引出的类别",
            "“wood substitutes” 在原文中原词复现，下一句还给出具体实例 “These include steel framing for houses.”（其中包括房屋用的钢结构框架）"
          ],
          "locatingTip": "定位：题干关键词 compete with 对应原文的 competition，第 9 段首句同时出现 competition、goods、wood substitutes，是最直接的定位点。确定答案技巧：句子结构是 New Zealand faces competition from goods such as [名词短语]，问“与哪一类产品竞争”时，答案就是 such as 后面那个类别词 wood substitutes（木材替代品）。要区分“类别”与“实例”：下一句给出的 steel framing for houses 只是 substitutes 的一个例子，若问的是“具体例子”才填它；本题问的是“哪一类产品（Which group of products）”，所以填类别名称 wood substitutes。",
          "analysis": "第 9 段（末段）：“Finally, in addition to competition from other wood producers, New Zealand faces competition from goods such as wood substitutes. These include steel framing for houses. This further underlines the necessity for globally competitive production and marketing strategies.”（最后，除了来自其他木材生产国的竞争之外，新西兰还面临来自木材替代品之类商品的竞争，其中包括房屋用的钢结构框架。这进一步凸显了制定具备全球竞争力的生产与营销策略的必要性）。题干问的是“现在不得不与之竞争的哪一类产品”，原文先排除“其他木材生产国（other wood producers，即第 12 题所问的竞争国家）”，再给出另一类竞争对手，即 goods such as wood substitutes，因此答案是 wood substitutes（木材替代品）。作答要点：一是答案写复数形式 substitutes，与原文一致；二是不要填 steel framing（房屋钢结构框架）——它是下一句给出的具体例子，而题干问的是“哪一类产品”，类别优先；三是 wood substitutes 为两词，符合 NO MORE THAN TWO WORDS 的限制，照抄原文即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
