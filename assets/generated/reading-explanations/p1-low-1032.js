(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-1032", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-1032",
  "meta": {
    "examId": "p1-low-1032",
    "title": "Agriculture and Tourism 农业与旅游",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 段落信息匹配（Which paragraph contains the following information? A–F）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "About half of all the tourists would spend several days in Monroe.",
          "translation": "约有一半的游客会在门罗（Monroe）停留数天。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "More than 40 percent of the visitors came to Monroe for two- or three-day visits."
          },
          "synonyms": [
            "“About half of all the tourists” 同义替换为原文的 “More than 40 percent of the visitors”：40% 出头与“大约一半”同属“接近半数”的约数表述",
            "“would spend several days in Monroe” 同义替换为原文的 “came to Monroe for two- or three-day visits”：两到三天即“数天”",
            "地名 “Monroe” 在原文中为原词复现，可直接作为定位词"
          ],
          "locatingTip": "定位：题干的两个信息点是“比例（about half）”与“停留时长（several days）”，抽象名词无法直接扫读，应先把 several days 折算成“两三天”再到原文里找“天数 + 比例”同现的句子。B 段首句 “More than 40 percent of the visitors came to Monroe for two- or three-day visits.” 同时给出比例与停留天数，一步锁定。确定答案技巧：数字改写题的关键是把题干的模糊约数对应到原文的精确百分比——雅思常把 40% 多一点的统计说成“大约一半”，只要“比例接近半数 + 停留两三天”两个点都吻合，段落即为 B。注意 A 段也出现比例数字（more than one-half of those surveyed），但那是受访者对旅游线路的接受度，不是停留天数，属于典型的比例数字干扰项。",
          "analysis": "B 段（第 2 段）首句：“More than 40 percent of the visitors came to Monroe for two- or three-day visits.”（超过 40% 的游客到门罗是为了两到三天的行程）。题干说“约有一半的游客会在门罗停留数天”，其中 about half 与原文的 more than 40 percent 属同一数量级的约数改写（40% 出头接近半数），spend several days 与原文的 two- or three-day visits 一一对应（两三天即“数天”）。该段紧接着补充说这些游客顺路走访其他社区、愿意在食品和手工艺品上消费、希望体验乡村生活，全部围绕“停留数天的游客”展开，进一步确认本段即题干所在段落。切勿被 A 段的 “more than one-half of those surveyed” 误导：那句的主语是“受访者中愿意参加农业旅游线路的人数比例”，与行程时长无关，段落信息匹配题必须按信息内容而非数字本身选段。",
          "traps": [
            "为什么不是 A 段：A 段中的 “More than one-half of those surveyed” 同样是在讲比例，但指的是受访者中愿意参加拟议农业旅游线路的人数，与“在门罗停留数天”的行程时长毫无关系。",
            "为什么不是 C、D、E、F 段：C 段列举三类目标游客群，D 段讨论农场旅游的教育意义与行业推广缺乏协调，E 段讲研究团队、工作坊与委员会，F 段介绍 Sinsinawa 农场与收入补充，均未出现游客在门罗停留天数的信息。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Most visitors responded positively to a survey project on farm tour.",
          "translation": "大多数游客对一项农场旅游调查项目作出了积极回应。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "More than one-half of those surveyed responded favorably to a proposed tour, saying they would be interested in participating in some type of agricultural tour in southwestern Wisconsin."
          },
          "synonyms": [
            "“Most visitors” 同义替换为原文的 “More than one-half of those surveyed”：超过半数的受访者即“大多数”",
            "“responded positively” 同义替换为原文的 “responded favorably”：favorably 意为“赞同地、支持地”",
            "“a survey project on farm tour” 同义替换为原文的 “a proposed tour … some type of agricultural tour”，且原文该句主语 those surveyed 直接点明这是问卷调查的结果"
          ],
          "locatingTip": "定位：题干的核心要素是“调查（survey）＋积极回应（positively）＋农场旅游”。A 段一开始就交代 1990 年农业旅游项目做的两份问卷调查（290 名奶酪节游客、164 名农场野餐会游客），紧接着给出结果句，survey 与 positively 的对应词出现在同一句里，扫读到 surveyed 即可停下精读。确定答案技巧：把题干的评价性形容词与原文的副词对应起来——positively 对应 favorably，most 对应 more than one-half；同时要认定原文的 a proposed tour 与题干的 a survey project on farm tour 是同一件事：被调查的正是拟议中的农业旅游线路。三个要素全部落在 A 段，故选 A。",
          "analysis": "A 段（第 1 段）先交代调查的规模与对象：“In 1990, agricultural tourism project members surveyed 290 visitors to the annual Monroe Cheese Festival and 164 visitors to the Picnic on the Farm, a one-time event held in Platteville in conjunction with the Chicago Bears summer training camp.”（1990 年，农业旅游项目成员调查了门罗奶酪节的 290 名游客和农场野餐会的 164 名游客）。紧接着给出调查结论：“More than one-half of those surveyed responded favorably to a proposed tour, saying they would be interested in participating in some type of agricultural tour in southwestern Wisconsin.”（超过半数的受访者对拟议的旅游线路反应积极，表示有兴趣参加威斯康星州西南部的某种农业旅游）。题干把“超过半数的受访者”概括为 most visitors，把 responded favorably 改写成 responded positively，把被调查的对象说成 a survey project on farm tour，三处改写逐一对应，信息完整落在 A 段，答案是 A。B 段开头虽有 “More than 40 percent”，但那讲的是游客停留天数，与本题的“对调查项目作出回应”无关，不要因为比例数字相近而误选。",
          "traps": [
            "为什么不是 B 段：B 段里的 “Visitors at both events indicated that they were there to enjoy themselves and were willing to spend money on food and arts and crafts.” 讲的是游客的游玩动机与消费意愿，与“对农场旅游调查项目的回应”不是同一件事；本题的题眼词 surveyed 与 responded favorably 只出现在 A 段。",
            "为什么不是 C、D、E、F 段：C 段起不再出现针对游客态度百分比的统计描述（C 段讲目标人群、D 段讲教育与推广、E 段讲合作研究、F 段讲具体农场），均无对应信息。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Cooperation across organisations in research for agriculture tours has been carried out.",
          "translation": "在农业旅游研究方面，跨机构的合作已经展开。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Lewis is conducting the study with Jean Murphy, assistant community development agent. Other participants include UW-Platteville Agricultural Economist Bob Acton, the Center for Integrated Agricultural Systems, UW-Extension Recreation Resources Center, the Wisconsin Rural Development Center, and Hidden Valleys, a Southwestern Wisconsin regional tourism organization."
          },
          "synonyms": [
            "“Cooperation across organisations” 同义替换为原文的 “Lewis is conducting the study with Jean Murphy … Other participants include …” 所罗列的一长串机构名单",
            "“in research for agriculture tours” 对应原文的 “the study”，全段正是围绕农业旅游研究展开",
            "“has been carried out” 对应原文的现在进行时 “is conducting”，表示这项合作研究已经在推进中"
          ],
          "locatingTip": "定位：题干的关键词是“跨机构合作（cooperation across organisations）”与“研究（research）”。全文只有 E 段集中罗列机构名称（UW-Platteville、Center for Integrated Agricultural Systems、UW-Extension Recreation Resources Center、Wisconsin Rural Development Center、Hidden Valleys），这正是“多机构共同参与”的标志，扫读时看到成串的机构专有名词就该在此段落查证。确定答案技巧：段落匹配里，“多方参与”类题干必落在人名、机构名密集的段落。本段首句 “Lewis is conducting the study with Jean Murphy” 先点明“与伙伴共同开展研究”，第二句用 Other participants include 补充更多参与机构，与题干的 cooperation across organisations 完全吻合，故选 E。",
          "analysis": "E 段（第 5 段）开头两句把研究的协作结构写得很清楚：“Lewis is conducting the study with Jean Murphy, assistant community development agent. Other participants include UW-Platteville Agricultural Economist Bob Acton, the Center for Integrated Agricultural Systems, UW-Extension Recreation Resources Center, the Wisconsin Rural Development Center, and Hidden Valleys, a Southwestern Wisconsin regional tourism organization.”（Lewis 正与助理社区发展专员 Jean Murphy 共同开展这项研究，其他参与者包括威斯康星大学普拉特维尔分校的农业经济学家 Bob Acton、综合农业系统中心、威斯康星大学推广部游憩资源中心、威斯康星农村发展中心以及西南威斯康星地区旅游组织 Hidden Valleys）。题干中的 cooperation across organisations 对应这一长串并列的机构名，in research 对应 the study，has been carried out 对应 is conducting（正在进行即“已经开展”）。该段后续讲 Murphy 组织若干工作坊、成立四个委员会、Green County 农民准备推出正式农场旅游，都是合作研究落地的具体动作，同样支持该段。故选 E。",
          "traps": [
            "为什么不是 C 段：C 段虽然引用了 Grant county community development agent Andy Lewis 的观点，但落点是对农业旅游教育功能的说明，只提到他一个人的身份，没有多机构共同研究的信息。",
            "为什么不是 D 段：D 段说 “most agricultural tourism enterprises currently market their businesses independently, leading to a lack of a concerted effort”，讲的恰恰是各家各自为政、缺乏协同，与题干“跨机构合作已经开展”方向相反。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Agriculture tours assist tourists in understanding more issues concerning animals and the environment.",
          "translation": "农业旅游有助于游客更好地了解与动物和环境相关的更多问题。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Animal rights and the environment are examples of two issues that concern both urban consumers and farmers. Farm tours could help consumers get the farmer's perspective on these issues, Lewis notes."
          },
          "synonyms": [
            "“Agriculture tours” 同义替换为原文的 “Farm tours”",
            "“assist tourists in understanding” 同义替换为原文的 “could help consumers get the farmer's perspective on”（帮助消费者理解农民的看法）",
            "“issues concerning animals and the environment” 对应原文的 “Animal rights and the environment are examples of two issues that concern both urban consumers and farmers”",
            "“tourists” 对应原文的 “consumers”，两词在本段交替使用指同一群人"
          ],
          "locatingTip": "定位：题干里有 animals 与 environment 两个具体名词，属于最容易扫读的实词，全文只在 D 段同现，即 “Animal rights and the environment are examples of two issues that concern both urban consumers and farmers.”。确定答案技巧：找到关键词所在句后，还要确认它与“农场旅游帮助游客理解”这一层意思是否挂钩。D 段的结构是先引 Lewis 的话（如果游客能在与农民相关的问题上受到教育，这些参观可能带来更有利于农业的政策），紧接着举例 Animal rights and the environment，再补一句 “Farm tours could help consumers get the farmer's perspective on these issues”，形成“教育游客 — 举例议题 — 农场旅游帮助理解”的完整链条，与题干一一对应，故选 D。",
          "analysis": "D 段（第 4 段）的句子顺序是本题的解题依据。第一句引 Lewis 的话：“If tourists can be educated on issues that concern farmers, those visits could lead to policies more favorable to agriculture.”（如果游客能在关乎农民的问题上受到教育，这些参观可能促成更有利于农业的政策）。第二句举例：“Animal rights and the environment are examples of two issues that concern both urban consumers and farmers.”（动物权利和环境就是同时关涉城市消费者与农民的两个议题）。第三句点明农场旅游的作用：“Farm tours could help consumers get the farmer's perspective on these issues, Lewis notes.”（Lewis 指出，农场旅游能帮助消费者了解农民在这些问题上的看法）。题干把这三句压缩成一句：Agriculture tours 对应 Farm tours，assist tourists in understanding 对应 help consumers get the farmer's perspective on，issues concerning animals and the environment 对应 Animal rights and the environment，对应关系完整且方向一致，因此答案是 D。注意原文用 animal rights（动物权利）替换题干较笼统的 animals（动物），用 consumers 替换 tourists，属于雅思常见的上位词与近义替换，不影响判断。",
          "traps": [
            "为什么不是 C 段：C 段说的是 “Agricultural tourism can serve to educate urban tourists about the problems and challenges facing farmers.”，讲的是让城市游客了解农民面临的困难与挑战，属于概括性表述，并没有点出动物与环境这两个具体议题。",
            "为什么不是其他段：E、F 段讲研究协作与具体农场的经营，A、B 段讲调查数据与游客偏好，均未把动物与环境作为农场旅游要帮助游客理解的议题提出。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–9 观点匹配（Match each statement with the correct option, A–C）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 9
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Have a focused destination.",
          "translation": "（这类游客）有明确而专一的目的地。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Picnic visitors came specifically to see the Chicago Bears practice."
          },
          "synonyms": [
            "“a focused destination” 同义替换为原文的 “came specifically to see the Chicago Bears practice”：specifically 意为“专门地、特意地”，说明目的地唯一而明确",
            "题干省略的主语对应原文的 “Picnic visitors”，即选项 B（Picnic visitors）"
          ],
          "locatingTip": "定位：本题的 statement 省略了主语，只给谓语部分，须先在原文里找到讲“某类游客有明确目的”的句子。搜索球队名 Chicago Bears：该队名在 A 段只作为活动背景出现一次（Chicago Bears summer training camp），真正讲两类游客目的性差异的是 B 段末两句。确定答案技巧：原文用对照结构来区分两类游客——先说 Cheese Days 的游客 “appeared to be more open to various tour proposals”（度假心态、对线路提议开放），再说 “Picnic visitors came specifically to see the Chicago Bears practice.”（野餐会游客专程来看芝加哥熊队训练）。specifically（专门地）与题干的 focused（聚焦的、专一的）同义，主语是 Picnic visitors，因此选 B。",
          "analysis": "B 段（第 2 段）末三句是本题的落点：“For example, visitors to Cheese Days said they were on a holiday and appeared to be more open to various tour proposals. Picnic visitors came specifically to see the Chicago Bears practice. They showed less interest in a proposed agricultural tour than Cheese Day visitors, but more interest in a picnic dinner.” 作者把两类游客放在一起对比：奶酪节游客在度假，对各类线路提议都更开放；而野餐会（Picnic on the Farm）的游客来此就是为了看芝加哥熊队的训练，目的单一、指向明确。题干 a focused destination（目的地专一明确）正是 came specifically to see … 的同义概括，主语又是 Picnic visitors，所以答案是 B。做题时要注意题干的主语被省略（只保留了 Have a focused destination），判断前必须先把原文句子的主语认准，避免把两类游客张冠李戴。",
          "traps": [
            "为什么不是 A（Cheese Festival visitors）：原文说奶酪节的游客 “appeared to be more open to various tour proposals”，属于心态开放、什么都愿意看看，与“目的地聚焦明确”恰好相反。",
            "为什么不是 C（Both of them）：本题问的是一个能区分两类游客的特征，原文用 “Picnic visitors came specifically …” 与奶酪节游客形成鲜明对照，若选“两者皆是”就把原文刻意做出的对比抹平了，与原文不符。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The majority prepare well before going.",
          "translation": "（这类游客中）大多数人出行前会做充分准备。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "More than 75 percent of the Cheese Day visitors planned ahead for the trip, with 37 percent planning at least two months in advance."
          },
          "synonyms": [
            "“The majority” 同义替换为原文的 “More than 75 percent”：超过四分之三即“大多数”",
            "“prepare well before going” 同义替换为原文的 “planned ahead for the trip, with 37 percent planning at least two months in advance”",
            "题干省略的主语对应原文的 “the Cheese Day visitors”，即选项 A（Cheese Festival visitors）"
          ],
          "locatingTip": "定位：题干的关键词是比例（the majority）与时间（before going），扫读时必须盯住数字与百分比。A 段末句同时出现 75% 与 两个月提前规划，一步锁定 “More than 75 percent of the Cheese Day visitors planned ahead for the trip, with 37 percent planning at least two months in advance.”。确定答案技巧：比例改写型匹配题要把 the majority 对应到原文的百分比区间（75% 以上毫无疑问是“大多数”），再把 prepare well before going 对应到 planned ahead 与 “planning at least two months in advance”（提前两个月即“充分准备”），最后认准主语是 the Cheese Day visitors，故答案为 A。",
          "analysis": "A 段（第 1 段）末句：“More than 75 percent of the Cheese Day visitors planned ahead for the trip, with 37 percent planning at least two months in advance.”（超过 75% 的奶酪节游客提前为行程做了计划，其中 37% 至少提前两个月规划）。题干 the majority prepare well before going 中，the majority 对应 more than 75 percent，prepare well 对应 planned ahead 以及“至少提前两个月”这一具体程度，before going 对应 for the trip。原文把这组数据明确限定在 the Cheese Day visitors 身上，故答案为 A（Cheese Festival visitors）。B 段的野餐会游客在原文中只被描述为“专程来看球队训练”“对农业旅游线路兴趣较低”，没有任何关于他们提前准备的描述，因此不能选 B，也不能选 C。",
          "traps": [
            "为什么不是 B（Picnic visitors）：原文的提前规划数据主语就是 the Cheese Day visitors，对野餐会游客的行程准备只字未提；野餐会游客在原文中的特征只有“目的明确”与“对野餐晚餐更感兴趣”。",
            "为什么不是 C（Both of them）：题干说 the majority（大多数人），而原文只在奶酪节游客身上给出 75% 这样的比例数据，没有任何证据说明野餐会游客也有类似比例的提前准备行为，无从扩大到两类人。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Are comparably less keen on a picnic meal.",
          "translation": "（这类游客）相比之下对野餐餐食没那么热衷。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Picnic visitors came specifically to see the Chicago Bears practice. They showed less interest in a proposed agricultural tour than Cheese Day visitors, but more interest in a picnic dinner."
          },
          "synonyms": [
            "“less keen on a picnic meal” 对应原文 “but more interest in a picnic dinner” 的反向关系：原文说野餐会游客对野餐晚餐兴趣更高，比较的另一端奶酪节游客自然就相对没那么热衷",
            "“a picnic meal” 同义替换为原文的 “a picnic dinner”",
            "题干省略的主语对应原文比较句中的 “Cheese Day visitors”，即选项 A（Cheese Festival visitors）"
          ],
          "locatingTip": "定位：题干含比较意味（comparably less keen），全文只有 B 段末句出现两类游客的直接比较，且句中正好有 picnic dinner，可直接锁定 “They showed less interest in a proposed agricultural tour than Cheese Day visitors, but more interest in a picnic dinner.”。确定答案技巧：这类“反向比较”题必须先把比较双方理清——句中的 They 回指上一句的 Picnic visitors，比较的另一端是 Cheese Day visitors；原文说野餐会游客在农业旅游线路上兴趣更低、在野餐晚餐上兴趣更高，那么换个角度看，奶酪节游客就是对野餐餐食相对没那么热衷的一方，与题干 comparably less keen on a picnic meal 吻合，故选 A。",
          "analysis": "B 段（第 2 段）末两句：“Picnic visitors came specifically to see the Chicago Bears practice. They showed less interest in a proposed agricultural tour than Cheese Day visitors, but more interest in a picnic dinner.” 第二句的 They 承接上一句，指野餐会游客；比较方向有两层，一是他们对农业旅游线路的兴趣不如奶酪节游客，二是他们对野餐晚餐的兴趣高于奶酪节游客。题干问的是“谁对野餐餐食相对不那么热衷”，对应第二层比较的反面，即奶酪节游客，因此答案是 A（Cheese Festival visitors）。本题的陷阱在于原文用“more interest”来表述，而题干用“less keen”发问，方向相反但指向同一事实，做题时要把比较的两个对象和比较的方向都写下来核对。另外注意 a picnic meal 与 a picnic dinner 属同义替换，而 A 段提到的 “enjoy an old-fashioned picnic dinner” 是受访者希望参加的调查活动，并非本题的比较点。",
          "traps": [
            "为什么不是 B（Picnic visitors）：原文明确说野餐会游客 “more interest in a picnic dinner”，他们对野餐餐食的兴趣比奶酪节游客更高，与题干“对野餐餐食没那么热衷”正好相反。",
            "为什么不是 C（Both of them）：题干描述的是一个相对关系（comparably less keen），原文把两类游客在 picnic dinner 这一项上做了方向相反的比较，不可能两类游客同时“相对较少”热衷。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Show interest in activities such as visiting factories and fruit farms.",
          "translation": "（这类游客）对参观工厂、果园农场之类的活动表现出兴趣。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Survey respondents reported that they would prefer to visit cheese factories, sausage processing plants, dairy farms, and historical farm sites, as well as enjoy an old-fashioned picnic dinner. The study also found strong interest in visiting specialty farms (strawberries, cranberries, poultry, etc.)."
          },
          "synonyms": [
            "“visiting factories” 同义替换为原文的 “visit cheese factories, sausage processing plants”（奶酪工厂、香肠加工厂）",
            "“fruit farms” 同义替换为原文的 “specialty farms (strawberries, cranberries, poultry, etc.)”：草莓、蔓越莓正是果类作物的种植农场",
            "“show interest in” 同义替换为原文的 “would prefer to visit” 与 “found strong interest in visiting”",
            "题干的隐含主语对应调查的受访者，即原文的 “Survey respondents”（本项调查的主体是奶酪节游客）"
          ],
          "locatingTip": "定位：题干的关键实词是 factories 与 fruit farms，原文 A 段集中出现与“参观工厂和农场”有关的名词清单（cheese factories、sausage processing plants、dairy farms、specialty farms 及括号里的 strawberries、cranberries），是全文集中列出这类参观偏好的位置。确定答案技巧：本题考“兴趣指向”，先按同义替换把 cheese factories 认成 factories、把 strawberries 与 cranberries 认成 fruit farms，再看这些偏好的主体是谁——原文用 Survey respondents 概括，而调查对象以奶酪节游客为大宗（290 人，是 164 人的农场野餐会样本之外的主要来源），且在 B 段对野餐会游客的描写中完全没有涉及工厂与果园的兴趣，只提到他们“对农业旅游线路兴趣较低”，因此候选只能落在 A（Cheese Festival visitors）上。",
          "analysis": "A 段（第 1 段）连续两句给出受访者的兴趣偏好：“Survey respondents reported that they would prefer to visit cheese factories, sausage processing plants, dairy farms, and historical farm sites, as well as enjoy an old-fashioned picnic dinner. The study also found strong interest in visiting specialty farms (strawberries, cranberries, poultry, etc.).”（受访者表示更愿意参观奶酪工厂、香肠加工厂、奶牛场和历史农庄，并享用一顿老式野餐晚餐；研究还发现他们对参观特色农场——草莓、蔓越莓、家禽等——有强烈兴趣）。题干把 cheese factories 与 sausage processing plants 概括为 visiting factories，把以草莓、蔓越莓为代表的 specialty farms 概括为 fruit farms，把 would prefer to visit 与 strong interest in visiting 改写成 show interest in；这些偏好属于调查受访者，而本题三个选项中能对应的是 A（Cheese Festival visitors）——奶酪节游客是此次调查的主要对象（290 人），且原文 B 段对野餐会游客的描述中只提到他们对农业旅游线路兴趣较低、对野餐晚餐更感兴趣，没有参观工厂与果园农场的偏好。因此答案是 A。做题时须注意原文用的是统称 Survey respondents，凡是统称的偏好，要按选项中哪一类游客的画像更吻合来判断，本题排除 B 的依据正是 B 段对野餐会游客的相反描述。",
          "traps": [
            "为什么不是 B（Picnic visitors）：原文对野餐会游客的描写集中在 “came specifically to see the Chicago Bears practice” 与 “showed less interest in a proposed agricultural tour”，完全没有参观工厂或果园农场一类的偏好，与题干方向相反（兴趣更低）。",
            "为什么不是 C（Both of them）：题干描述的是调查中体现出的具体参观偏好，原文用 Survey respondents 概括，并未把野餐会游客一并纳入这一偏好；既然 B 段明确说野餐会游客对农业旅游线路兴趣较低，就不能选“两者皆是”。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Are willing to accept a variety of tour recommendations.",
          "translation": "（这类游客）愿意接受各种各样的旅游线路建议。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "For example, visitors to Cheese Days said they were on a holiday and appeared to be more open to various tour proposals."
          },
          "synonyms": [
            "“a variety of tour recommendations” 同义替换为原文的 “various tour proposals”",
            "“are willing to accept” 同义替换为原文的 “appeared to be more open to”（态度开放即愿意接受）",
            "主语 “visitors to Cheese Days” 对应选项 A（Cheese Festival visitors）"
          ],
          "locatingTip": "定位：题干的关键词是“多种线路建议（a variety of tour recommendations）”，原文对应 various tour proposals，全篇仅出现在 B 段 “For example, visitors to Cheese Days said they were on a holiday and appeared to be more open to various tour proposals.”，用 various 或 proposals 任一实词扫读都能命中。确定答案技巧：把题干与原文做同义对应——a variety of 对应 various，are willing to accept 对应 more open to，tour recommendations 对应 tour proposals，主语 visitors to Cheese Days 即选项 A 的 Cheese Festival visitors。同时要用下一句做反向验证：野餐会游客 came specifically to see the Chicago Bears practice，目的单一，且 showed less interest in a proposed agricultural tour，对各类线路提议并不开放，因此排除 B 与 C。",
          "analysis": "B 段（第 2 段）倒数第三句：“For example, visitors to Cheese Days said they were on a holiday and appeared to be more open to various tour proposals.”（例如，奶酪节的游客说他们在度假，对各种旅游线路提议显得更为开放）。题干 are willing to accept a variety of tour recommendations 与原文形成逐字对应：a variety of 对应 various，willing to accept 对应 more open to，tour recommendations 对应 tour proposals，主语 visitors to Cheese Days 就是 A 项 Cheese Festival visitors，故答案为 A。原文还给出原因状语 said they were on a holiday（在度假），解释了为什么这类游客对多种线路都持开放态度，可作为佐证。紧接的下一句是鲜明的对照：“Picnic visitors came specifically to see the Chicago Bears practice.”（野餐会游客专程来看芝加哥熊队训练），目的单一，且后文说明他们对农业旅游线路兴趣较低，与“愿意接受多种线路建议”不符，因此不能选 B，更不能选 C。",
          "traps": [
            "为什么不是 B（Picnic visitors）：原文说野餐会游客是为了看球队训练专程而来，且 “showed less interest in a proposed agricultural tour than Cheese Day visitors”，对线路提议的态度是更封闭而非更开放。",
            "为什么不是 C（Both of them）：原文把“对各种线路提议更开放”这一特征单独安在奶酪节游客身上，同时用 Picnic visitors came specifically … 做对照，两类游客态度明显不同，不能选“两者皆是”。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–14 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 14
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Through farm tours, visitors can better understand significant issues such as 10 ________",
          "translation": "通过农场旅游，游客能够更好地理解诸如 ________ 这样的重要议题。",
          "answer": [
            "animal rights",
            "the environment"
          ],
          "wordClass": "名词短语（两个词以内；作 such as 之后的例举宾语，对前面的 significant issues 作具体举例；答案表给出 animal rights 与 the environment 两个并列可接受答案，抄写时保持原文措辞，the environment 需带定冠词）",
          "locating": {
            "paragraph": "4",
            "quote": "Animal rights and the environment are examples of two issues that concern both urban consumers and farmers."
          },
          "synonyms": [
            "“significant issues” 同义替换为原文的 “two issues that concern both urban consumers and farmers”",
            "“visitors can better understand” 对应原文的 “Farm tours could help consumers get the farmer's perspective on these issues”（visitors 对应 consumers，understand 对应 get the perspective）",
            "空格所填名词短语对应原文并列的 “Animal rights” 与 “the environment”"
          ],
          "locatingTip": "定位：先分析空格前后的语法环境——such as 后面必须接名词或名词短语，与前面的 significant issues 构成举例关系；再回原文找“农场旅游 + 帮助理解 + 举例”的句子，落在 D 段：“Animal rights and the environment are examples of two issues that concern both urban consumers and farmers.”。确定答案技巧：题干用 such as 引出例子，原文用 are examples of 引出例子，两个结构完全对应，被列举的两项就是空格内容。受“不超过两个单词”限制，animal rights 与 the environment 各自成词，答案表同时接受这两者；抄写时严格照原文，animal rights 全小写，若填 the environment 不要漏掉定冠词 the。",
          "analysis": "D 段（第 4 段）先引 Lewis 的话：“If tourists can be educated on issues that concern farmers, those visits could lead to policies more favorable to agriculture.”（如果游客能在关乎农民的问题上受到教育，这些参观可能促成更有利于农业的政策）。紧接着给出具体议题：“Animal rights and the environment are examples of two issues that concern both urban consumers and farmers.”（动物权利和环境就是同时关涉城市消费者与农民的两个议题）。第三句进一步说明农场旅游的作用：“Farm tours could help consumers get the farmer's perspective on these issues, Lewis notes.”（Lewis 指出，农场旅游能帮助消费者了解农民在这些问题上的看法）。题干 “Through farm tours, visitors can better understand significant issues such as 10 ____” 正是对这三句的概括：through farm tours 对应 Farm tours，visitors 对应 consumers，better understand 对应 get the farmer's perspective on，significant issues such as 对应 are examples of two issues。因此空格要填的是被列举的议题，答案是 animal rights 或 the environment（答案表两者皆收，均为两个词，符合字数限制）。填写时注意两点：一是照抄原文措辞，不要把 animal rights 改写成 animal welfare；二是若选择后者要带上定冠词 the，因为原文就是 “the environment”。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "In autumn, Murphy organised 11 ________ to bring other participants together to develop the local tour market.",
          "translation": "秋天，Murphy 组织了 ________，把其他参与方聚到一起，以开拓当地的旅游市场。",
          "answer": "workshops",
          "wordClass": "名词（复数；作 organised 的宾语，原文用 several 加复数名词，必须写复数形式 workshops）",
          "locating": {
            "paragraph": "5",
            "quote": "This past fall, Murphy organized several workshops with some Green and Grant County farmers, local business leaders, and motor coach tour operators to discuss how best to organize and put on farm tours."
          },
          "synonyms": [
            "“In autumn” 同义替换为原文的 “This past fall”：fall 是美式英语的“秋天”",
            "“organised” 与原文 “organized” 为同一词的英式与美式拼写",
            "“to bring other participants together” 对应原文的 “with some Green and Grant County farmers, local business leaders, and motor coach tour operators”",
            "“to develop the local tour market” 对应原文的 “to discuss how best to organize and put on farm tours”"
          ],
          "locatingTip": "定位：题干给了时间状语 In autumn 与人名 Murphy 两条线索。原文用的是美式说法 This past fall，与 autumn 同义，人名 Murphy 在 E 段反复出现，两者叠加可一步锁定 “This past fall, Murphy organized several workshops with …”。确定答案技巧：空格位于动词 organised 之后作宾语，原文对应位置的 “organized several workshops with …” 中 several 只是限定词，作宾语中心词的是复数名词 workshops；题干把原文 with 引导的参与方列举概括为 bring other participants together、把讨论目的概括为 develop the local tour market，语义完全一致，故答案为 workshops。注意原文用了 several，填空必须写复数，写 workshop 会与总量不符。",
          "analysis": "E 段（第 5 段）第三句：“This past fall, Murphy organized several workshops with some Green and Grant County farmers, local business leaders, and motor coach tour operators to discuss how best to organize and put on farm tours.”（去年秋天，Murphy 与 Green 县、Grant 县的一些农民、当地商界领袖以及旅游大巴运营者一起组织了若干工作坊，讨论如何最好地组织和开展农场旅游）。题干把 This past fall 改写成 In autumn，把 with 引导的长串参与方概括为 to bring other participants together，把 “to discuss how best to organize and put on farm tours” 概括为 to develop the local tour market，剩下的空间正好落在 organized 的宾语上，即 workshops。词性分析：several 后必须接可数名词复数，因此答案写 workshops，不能写 workshop；同时这是一个词，满足“不超过两个单词”的限制。紧随其后的 “Committees were formed to look at the following: tour site evaluations, inventory of the area's resources, tour marketing, and familiarization of tours.” 讲的是工作坊之后成立的各个委员会，属于另一层信息，不要误填 committees——题干问的是 Murphy 组织了什么东西把大家聚到一起，即工作坊本身。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Larry Lindgren said the farmers already had experience of farm tours with factory visits and a 12 ________.",
          "translation": "Larry Lindgren 说，这些农民已经有了农场旅游的经验，行程包含参观工厂和一顿 ________。",
          "answer": "picnic lunch",
          "wordClass": "名词短语（两个词，中心词为 lunch，受不定冠词 a 修饰；与前面的 factory visits 并列，一起作介词 with 的宾语，指农场旅游行程中的一个环节）",
          "locating": {
            "paragraph": "5",
            "quote": "Green county Tourism Director Larry Lindgren says these farmers are set to go ahead with more formal agricultural tours next year. The tours will combine a farm visit with a visit to a local cheese factory and a picnic lunch."
          },
          "synonyms": [
            "“Larry Lindgren said” 对应原文的 “Green county Tourism Director Larry Lindgren says”，人名原词复现，是本题最强定位词",
            "“farm tours with factory visits and a ____” 同义替换为原文的 “The tours will combine a farm visit with a visit to a local cheese factory and a picnic lunch”",
            "“factory visits” 同义替换为原文的 “a visit to a local cheese factory”",
            "空格对应原文并列结构中的 “a picnic lunch”，附带的冠词 a 也与题干空格前的 a 完全一致"
          ],
          "locatingTip": "定位：人名 Larry Lindgren 含两个大写首字母，全文只出现一次，在 E 段倒数第二句附近，扫读时可一步锁定。确定答案技巧：题干说行程包含 factory visits 和另一个项目，原文用 combine … with … and … 并列三件事（a farm visit、a visit to a local cheese factory、a picnic lunch），其中 a visit to a local cheese factory 已被题干写成 factory visits，那么尚未被提及的并列项就是 a picnic lunch；而且题干空格前有冠词 a，与原文 “and a picnic lunch” 的冠词结构严丝合缝，进一步验证答案。填写时写两个词 picnic lunch，不加冠词（题干已给出 a），也不要写成 picnic dinner（那是 A 段受访者的愿望，不是此处行程内容）。",
          "analysis": "E 段（第 5 段）末尾两句：“Green county Tourism Director Larry Lindgren says these farmers are set to go ahead with more formal agricultural tours next year. The tours will combine a farm visit with a visit to a local cheese factory and a picnic lunch.”（Green 县旅游局长 Larry Lindgren 说，这些农民准备明年推出更正式的农业旅游；线路将把参观农场与参观当地奶酪工厂以及一顿野餐午餐结合起来）。题干把它压缩成一句：Larry Lindgren said 对应 Larry Lindgren says，the farmers already had experience of farm tours 对应上一句提到的 “Green County farmers already have experience hosting visitors during the annual Monroe Cheese Days”（Green 县农民在一年一度的门罗奶酪节接待游客已有经验），factory visits 对应 a visit to a local cheese factory，空格则对应并列结构末尾的 a picnic lunch。答案由两个词构成，符合“不超过两个单词”的要求；冠词 a 已在题干中给出，因此只填 picnic lunch 两个词即可。注意区分本段这里的 picnic lunch 与 A 段提到的 “an old-fashioned picnic dinner” 以及 B 段的 “a picnic dinner”：前者是正式旅游线路的一个环节（午餐），后者是受访者或野餐会游客偏好的餐食（晚餐），本题问的是 Larry Lindgren 描述的行程安排，故为 picnic lunch。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "In Sinsinawa, a large area of farmland containing an orchard and cows is managed and operated by 13 ________.",
          "translation": "在 Sinsinawa，一片包含果园和牛的大型农场由 ________ 管理和经营。",
          "answer": "Dominican Sisters",
          "wordClass": "专有名词（机构名称；位于介词 by 之后作被动结构的施动者，两个词，首字母大写）",
          "locating": {
            "paragraph": "6",
            "quote": "Another farm interested in hosting an organized tour is Sinsinawa, a 200-acre Grant County farm devoted to sustainable agriculture and run by the Dominican Sisters."
          },
          "synonyms": [
            "“managed and operated by” 同义替换为原文的 “run by”（run 即经营、管理）",
            "“a large area of farmland containing an orchard and cows” 同义替换为原文的 “a 200-acre Grant County farm … which has an orchard, dairy and beef cows, and hogs”",
            "“Sinsinawa” 为地名专有名词，原文原词复现，可作定位词"
          ],
          "locatingTip": "定位：地名 Sinsinawa 拼写独特、通篇只出现一次，在 F 段首句，扫描专有名词即可一步到位。确定答案技巧：题干用了被动结构 is managed and operated by，要在原文里找对应的被动表达 run by，其后的名词短语即为施动者；同时用题干给出的农场特征做交叉验证——a large area of farmland 对应 200-acre farm，an orchard and cows 对应下一句的 “which has an orchard, dairy and beef cows, and hogs”，特征完全吻合，说明定位无误。答案由两个词组成（Dominican Sisters），注意机构名首字母大写、Sisters 用复数，不能只写 Sisters 或 Dominican。",
          "analysis": "F 段（第 6 段）首两句：“Another farm interested in hosting an organized tour is Sinsinawa, a 200-acre Grant County farm devoted to sustainable agriculture and run by the Dominican Sisters. Education plays a major role at the farm, which has an orchard, dairy and beef cows, and hogs.”（另一个有意承办组织化旅游的农场是 Sinsinawa，这是 Grant 县一座占地 200 英亩、致力于可持续农业的农场，由多明我会修女会（Dominican Sisters）经营。教育在这座农场占重要地位，农场有果园、奶牛与肉牛以及猪）。题干把 a 200-acre Grant County farm 概括为 a large area of farmland，把 “has an orchard, dairy and beef cows, and hogs” 概括为 containing an orchard and cows，把 run by 改写成 is managed and operated by，因此空格处应填 run by 之后的施动者，即 Dominican Sisters。答案由两个词构成，符合“不超过两个单词”的限制；抄写时保持首字母大写与复数形式，且不要把它与前面提到的农场名 Sinsinawa（那是地点，不是经营者）混淆。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "Lewis said the project will probably bring extra 14 ________ for local farmers.",
          "translation": "Lewis 说，这个项目可能会给当地农民带来额外的 ________。",
          "answer": "incomes",
          "wordClass": "名词（复数；作 bring 的宾语，受形容词 extra 修饰，与原文 supplement incomes 的复数形式一致）",
          "locating": {
            "paragraph": "6",
            "quote": "The project will help expose farmers to the tourism industry and farm vacations as a way to possibly supplement incomes, he adds."
          },
          "synonyms": [
            "“the project will probably bring extra …” 同义替换为原文的 “The project will help … as a way to possibly supplement …”（probably 对应 possibly）",
            "“extra” 同义替换为原文的 “supplement”：supplement 即“补充、增补”，也就是额外增加的部分",
            "“for local farmers” 对应原文的 “farmers”，原文用 “he adds” 表明这是 Lewis 的话"
          ],
          "locatingTip": "定位：题干出现了人名 Lewis 与项目（the project），F 段中直接以 “The project will help …” 开头的句子就是本题所在处，句末的 he adds 表明说话人正是 Lewis。确定答案技巧：把题干与原文逐词对应——probably 对应 possibly，bring extra 对应 supplement（补充即带来额外收入），for local farmers 对应 farmers，于是空格填 incomes；同时可用同段末句交叉印证：“Farmers could earn additional income through the sale of farm products, crafts, and recreational activities.”（农民可以通过销售农产品、手工艺品和休闲活动赚取额外收入），additional income 与题干的 extra 同义。答案表取的是 supplement incomes 中的复数形式，因此填 incomes。",
          "analysis": "F 段（第 6 段）倒数第三句：“The project will help expose farmers to the tourism industry and farm vacations as a way to possibly supplement incomes, he adds.”（他补充说，这个项目将有助于让农民接触旅游业，把农场度假作为一种可能补充收入的方式）。题干 “Lewis said the project will probably bring extra 14 ____ for local farmers” 中，the project 与原文同形对应，probably 对应 possibly，bring extra 对应 supplement，for local farmers 对应 farmers，因此空格应为 incomes。本段最后一句给出了同一意思的另一种说法：“While farm families probably wouldn't make a lot of money through farm tours, they would be compensated for their time, says Lewis. Farmers could earn additional income through the sale of farm products, crafts, and recreational activities.”（Lewis 说，虽然农家通过农场旅游大概赚不到很多钱，但他们的时间会得到补偿；农民还可以通过销售农产品、手工艺品以及休闲活动赚取额外收入），其中 additional income 与题干 extra 同义，可作互证。词性上 incomes 在此为复数名词，与原文 supplement incomes 的形式一致，抄写时保持复数、首字母小写即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
