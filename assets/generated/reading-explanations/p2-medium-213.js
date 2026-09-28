(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-medium-213", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-medium-213",
  "meta": {
    "examId": "p2-medium-213",
    "title": "Growing more for less 卫星农业",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–20 段落信息配对（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 20
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "an example of how farmers in one country are now using satellite data to determine fertiliser use",
          "translation": "一个实例，说明某个国家的农民目前如何利用卫星数据来确定肥料的使用。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Five times a year, for example, a French cereals growers' co-operative called Sevepi purchases satellite data and makes it available to its members in the form of maps of their fields, divided into three or four colour-coded zones per hectare. For each zone, one of about 50 fertiliser formulas is recommended."
          },
          "synonyms": [
            "“an example” 对应原文的举例标志 “for example”",
            "“farmers in one country” 同义替换为原文的 “a French cereals growers' co-operative called Sevepi”，即法国谷物种植者合作社及其社员",
            "“are now using satellite data” 同义替换为原文的 “purchases satellite data and makes it available to its members”，现在进行时与一般现在时都表示当前正在采用的常规做法",
            "“to determine fertiliser use” 同义替换为原文的 “For each zone, one of about 50 fertiliser formulas is recommended”（为每个分区推荐约 50 种肥料配方中的一种）"
          ],
          "locatingTip": "定位：题干的关键实词是 example、farmers、fertiliser use。段落信息配对题要把题干的抽象描述还原成原文里的具体事例，因此先在全文扫读 fertiliser 一词——肥料配方只出现在 C 段，加上具体机构名 Sevepi，一步锁定 C 段。确定答案技巧：题干用现在的时态（are now using）问“正在做的事”，C 段正是一般现在时的叙述（每年五次购买卫星数据、按分区推荐肥料配方），时态与内容双重吻合；核对“一个国家（法国）＋ 农民（合作社社员）＋ 卫星数据 ＋ 施肥决定”四个要素齐备后即可确认答案 C。",
          "analysis": "第 4 段（C）先用两句话总起——用卫星情报做精准农业是较新的技术，但正在迅速流行，紧接着用 “for example” 引出实例：“Five times a year, for example, a French cereals growers' co-operative called Sevepi purchases satellite data and makes it available to its members in the form of maps of their fields, divided into three or four colour-coded zones per hectare. For each zone, one of about 50 fertiliser formulas is recommended.”（例如，一家名为 Sevepi 的法国谷物种植者合作社每年五次购买卫星数据，并以自家田地地图的形式提供给社员，每公顷划分为三到四个用颜色标记的区；针对每个区，从约 50 种肥料配方中推荐一种。）题干四个信息点全部落实：example 对应 for example；farmers in one country 对应法国的合作社及其社员；using satellite data 对应 purchases satellite data；to determine fertiliser use 对应 one of about 50 fertiliser formulas is recommended。这是全文唯一把“卫星数据”与“具体施肥配方”直接挂钩的实例（段末的生长调节剂建议、装 GPS 的农机都只是同一案例的延伸细节），因此答案是 C。",
          "traps": [
            "为什么不是 B：B 段讲该服务的原理与成本收益（用反射辐射的波长判断土壤与作物状况、每公顷不到 15 美元、可增产 10%），全段没有出现任何国家、任何农民或任何具体施肥决定。",
            "为什么不是 D：D 段落点在“法国是这类监测的先驱”“被监测农田面积将增加”，讲的是领先地位与未来趋势，没有合作社依据卫星数据施肥的实例。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a reference to climate change and its effects",
          "translation": "提及气候变化及其影响。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Moreover, Henri Douche, head of Infoterra's agriculture sales in Toulouse, reckons the amount of monitored farmland will increase as weather patterns change and farmers can no longer rely on the past as a guide to the future. When confounded by the yield variations that these new weather patterns will bring, even farmers who are afraid of new technology will sign up, he says."
          },
          "synonyms": [
            "“climate change” 同义替换为原文的 “weather patterns change” 以及 “these new weather patterns”（天气模式发生变化、新的天气模式）",
            "“its effects” 同义替换为原文的 “farmers can no longer rely on the past as a guide to the future”（农民再也无法凭过去经验预判未来）和 “the yield variations that these new weather patterns will bring”（新天气模式带来的产量波动）",
            "“a reference to” 对应原文借 Infoterra 农业销售负责人之口所作的预测性陈述"
          ],
          "locatingTip": "定位：题干关键词是 climate change 与 effects。原文没有直接写 climate change，写作 weather patterns change，属于典型的同义改写，因此要按“天气”这一语义线索扫读全文，锁定 D 段中部。确定答案技巧：找到 weather patterns 后必须再确认“影响”也落在同一段——D 段紧跟着说农民再也不能以过去为参照、会被这些新天气模式带来的产量波动弄得不知所措（confounded by the yield variations），原因与后果同时出现，才构成题干所要求的“提及气候变化及其影响”，故答案为 D。",
          "analysis": "第 5 段（D）在讲完法国的领先地位后，借 Infoterra 农业销售负责人 Henri Douche 之口作出预测：“Moreover, Henri Douche, head of Infoterra's agriculture sales in Toulouse, reckons the amount of monitored farmland will increase as weather patterns change and farmers can no longer rely on the past as a guide to the future. When confounded by the yield variations that these new weather patterns will bring, even farmers who are afraid of new technology will sign up, he says.”（此外，Infoterra 图卢兹农业销售负责人 Henri Douche 估计，随着天气模式发生变化、农民再也无法以过去为参照来预判未来，受监测的农田面积将会增加；他还说，当农民被这些新天气模式带来的产量波动搞得不知所措时，连害怕新技术的农民也会加入。）这里的 weather patterns change 与 these new weather patterns 就是题干的 climate change，而 can no longer rely on the past、confounded by the yield variations 就是它带来的影响（经验失效、产量波动），两层信息都在 D 段，答案 D。注意不要把 B 段的 “recent and forecast weather data” 误当成气候变化：那只是该服务可以纳入的天气数据类型；C 段提到的 heavy showers（暴雨）也只是区分施肥量的天气细节，都没有把“天气模式变化”与“由此产生的影响”作为独立信息来陈述。",
          "traps": [
            "为什么不是 B：B 段 “If recent and forecast weather data is added to the mix, detailed maps can be produced” 讲的是服务可以结合近期与预报天气数据生成种植地图，属于技术功能描述，没有涉及气候的变化趋势及其影响。",
            "为什么不是 E：E 段谈过量施用硝酸盐肥料时用括号补了一句 “which are also a source of greenhouse gases”，虽与气候沾边，但只是顺带一提，全段重心是政府监管、土壤生产力下降与农业保险，并未展开气候变化及其影响。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "a reference to the effect on the soil of using too much fertiliser",
          "translation": "提及过量使用肥料对土壤造成的影响。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Guy Lafond, an agronomist with Agriculture and Agri-Food Canada, a government agency, says the satellite data it purchases is proving useful for the study of fields with declining productivity in the province of Saskatchewan. Overkill with nitrate fertilisers (which are also a source of greenhouse gases) appears partly responsible."
          },
          "synonyms": [
            "“using too much fertiliser” 同义替换为原文的 “Overkill with nitrate fertilisers”（硝酸盐肥料施用过量）",
            "“the effect on the soil” 同义替换为原文的 “fields with declining productivity”（生产力下降的田地），即土壤状况变差的直接后果",
            "“appears partly responsible” 与 “declining productivity” 共同构成因果关系，正是题干所说的 effect"
          ],
          "locatingTip": "定位：题干的两个实词是 fertiliser 与 soil/effect。原文段落里集中谈肥料滥用的有两处——E 段开头的 “Areas where fertilisers and pesticides are being applied excessively” 与 E 段中部的 “Overkill with nitrate fertilisers”，而只有后者同时交代了后果（生产力下降），故锁定 E 段。确定答案技巧：判断“影响”类信息时，必须找到因果链条，而不能只看到 fertiliser 一词。E 段先说卫星数据可用于研究生产力下降的田地，紧接着用 Overkill with nitrate fertilisers … appears partly responsible 点明过量施肥是原因之一，“原因＋结果”同现，符合题干，答案 E。",
          "analysis": "第 6 段（E）讲卫星数据对政府的价值：可以定位、研究和监管过量施用化肥与农药的区域，随后以加拿大为例：“Guy Lafond, an agronomist with Agriculture and Agri-Food Canada, a government agency, says the satellite data it purchases is proving useful for the study of fields with declining productivity in the province of Saskatchewan. Overkill with nitrate fertilisers (which are also a source of greenhouse gases) appears partly responsible.”（政府机构加拿大农业与农业食品部的农学家 Guy Lafond 说，该部门购买的卫星数据对研究萨斯喀彻温省生产力下降的田地很有用；硝酸盐肥料的过量施用似乎是部分原因。）题干问“过量施肥对土壤的影响”，原文给出的后果是 fields with declining productivity（田地生产力下降，即土壤退化），原因是 Overkill with nitrate fertilisers（施肥过量），appears partly responsible 明确把两者连成因果，故答案 E。括号里的 “which are also a source of greenhouse gases” 只是补充说明，不要被它牵走而误选别段。",
          "traps": [
            "为什么不是 G：G 段写 “In Africa, where many soils have become badly depleted of nutrients”，讲的是非洲土壤养分严重流失，但归因于土壤本身的贫瘠现状，并未与“施肥过量”建立因果，落脚点是更好的肥料管理与“数字土壤地图”。",
            "为什么不是 B：B 段说可以揭示 “the properties of the soil”，那只是卫星能够测出的土壤属性，属于技术能力的罗列，没有谈过量施肥给土壤带来的负面后果。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "an example of information that will be shared between different countries",
          "translation": "一个将在不同国家之间共享的信息的实例。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "Once passed on to the International Centre for Tropical Agriculture, based in Colombia, South America, it is intended that the information be used to build a database called the 'Digital Soil Map'."
          },
          "synonyms": [
            "“shared between different countries” 同义替换为原文的 “passed on to the International Centre for Tropical Agriculture, based in Colombia, South America”，信息由肯尼亚的机构转交给南美哥伦比亚的机构，即跨国传递",
            "“will be” 同义替换为原文的 “it is intended that … be used to build”（打算用于建立）以及后文的 “When ready, this will provide farmers with free forecasts”",
            "“an example of information” 对应原文的 “the information”，指从约 10 万个非洲土壤样本中得到的辐射图谱"
          ],
          "locatingTip": "定位：题干关键词是 information、shared、different countries。全文写“信息流转到另一个国家”的段落只有 G 段——世界农林业中心（肯尼亚内罗毕）把土壤信息转交给哥伦比亚的国际热带农业中心。确定答案技巧：注意题干用的是将来时 will be shared，说明这不是已完成的跨国分享，而是计划中的。G 段用 “it is intended that the information be used to build a database” 和 “When ready, this will provide farmers with free forecasts” 表示尚未完成、将要进行，时态和内容都对应，故答案 G。",
          "analysis": "第 8 段（G）讲卫星技术在非洲的应用：非洲很多土壤养分流失严重，更好的肥料管理能改善局面，因此肯尼亚内罗毕的慈善信托机构世界农林业中心开始汇编来自约 10 万个非洲土壤样本的辐射图谱，而“Once passed on to the International Centre for Tropical Agriculture, based in Colombia, South America, it is intended that the information be used to build a database called the 'Digital Soil Map'.”（这些信息一旦转交给位于南美洲哥伦比亚的国际热带农业中心，就打算用来建立一个名为“数字土壤地图”的数据库。）“一批土壤信息”从非洲机构转交给南美洲机构，正是“信息在不同国家之间共享”的具体例子；而 be used to build、When ready, this will provide 又表明这一共享与建库属于将来的安排，与题干的 will be shared 一致。段末“across farmland in a number of countries in Africa”（覆盖非洲多个国家的农田）进一步说明这批信息将跨国使用，答案 G。",
          "traps": [
            "为什么不是 C：C 段的 Sevepi 是把卫星数据做成地图分发给本国社员，信息在法国一国之内流转，不涉及国家之间。",
            "为什么不是 D：D 段讲法国最大的卫星信息提供商 Infoterra 向 Sevepi 等公司供货，同样是一国（法国）内部的商业供应关系，没有跨国共享。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "a mention of the country which is the leader in agricultural technology",
          "translation": "提及在农业技术方面处于领先地位的那个国家。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "France is the pioneer in this sort of surveillance. More farmland is analysed by satellite there than in any other country, according to Infoterra (a subsidiary of EADS Astrium), the firm that is France's largest provider of such information, supplying data to companies such as Sevepi."
          },
          "synonyms": [
            "“the leader” 同义替换为原文的 “the pioneer”（先驱、开创者）",
            "“in agricultural technology” 同义替换为原文的 “in this sort of surveillance” 以及 “analysed by satellite”，即用卫星监测农田这一农业技术",
            "“More farmland is analysed by satellite there than in any other country” 是对“领先”的量化支撑"
          ],
          "locatingTip": "定位：题干唯一的关键词是 leader 与 country，最好用的定位方法是在全文找国家名。原文提及国家有多处（法国、加拿大、德国、肯尼亚等），但“领先”这一概念只与法国相连，且 D 段首句就是 France is the pioneer。确定答案技巧：pioneer 是 leader 的常见同义替换，题干说的是“在农业技术方面领先的国家”，原文说的则是“在这类（卫星）监测方面是先行者”，两者都指国家层面的技术领先；D 段接着用“被卫星分析的农田比任何其他国家都多”来佐证这一地位，答案 D。",
          "analysis": "第 5 段（D）首句直接给出答案：“France is the pioneer in this sort of surveillance.”（法国是这类监测的先驱。）随后补足证据：“More farmland is analysed by satellite there than in any other country, according to Infoterra (a subsidiary of EADS Astrium), the firm that is France's largest provider of such information, supplying data to companies such as Sevepi.”（据 Infoterra——EADS Astrium 的子公司——称，那里用卫星分析的农田比任何其他国家都多，该公司是法国最大的这类信息提供商，向 Sevepi 等公司供应数据。）题干 the country which is the leader in agricultural technology 中的 leader 对应 pioneer，in agricultural technology 对应 in this sort of surveillance 与 analysed by satellite 所指的农业卫星监测技术，因此答案 D。提醒两点：其一，本题与第 15 题同落在 D 段，属同段两题，做题时各自定位互不影响；其二，F 段虽出现德国的卫星运营商 RapidEye 并强调其技术“首次”，但原文从未说德国或哪家公司是国家层面的领先者，不要用“技术先进”替换“国家领先”。",
          "traps": [
            "为什么不是 F：F 段主角是德国卫星运营商 RapidEye 及其 Red-Edge 波段，说的是某家公司在技术上“首批包含”某波段，原文并未说德国或该公司是国家层面的领先者。",
            "为什么不是 B：B 段介绍服务原理、每公顷费用与增产效果，全段没有提到任何国家的领先地位。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "a description of an innovation in satellite imaging which requires further study",
          "translation": "对一项尚需进一步研究的卫星成像创新的描述。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Our satellites are the first commercial satellites to include the Red-Edge band of the light spectrum, which is sensitive to changes in chlorophyll content. More research will be necessary to realise the full potential of the Red-Edge band."
          },
          "synonyms": [
            "“an innovation in satellite imaging” 同义替换为原文的 “the first commercial satellites to include the Red-Edge band of the light spectrum”（首批包含光谱红边波段的商业卫星）",
            "“requires further study” 同义替换为原文的 “More research will be necessary to realise the full potential”（要充分发挥其潜力还需要更多研究）",
            "“a description of” 对应原文对红边波段功能的说明（对叶绿素含量变化敏感）"
          ],
          "locatingTip": "定位：题干关键词是 innovation、satellite imaging、requires further study。原文中出现 “the first”（首批）说法的只有 F 段（the first commercial satellites to include the Red-Edge band），且同段紧接着出现 More research will be necessary，正好对应“需要进一步研究”。确定答案技巧：题干要求两个条件同时满足——既是成像方面的新发明，又尚未研究充分。F 段两句连读恰好同时命中：前句给出创新（商业卫星首次搭载红边波段），后句承认研究不足（需更多研究才能发挥潜力），答案 F。只看“创新”容易误跳到 D 段或 E 段，务必再用“需要进一步研究”这一条件复核。",
          "analysis": "第 7 段（F）借 RapidEye 产品开发负责人 Fredrick Jung-Rothenhausler 之口介绍一项新成像技术：“Our satellites are the first commercial satellites to include the Red-Edge band of the light spectrum, which is sensitive to changes in chlorophyll content. More research will be necessary to realise the full potential of the Red-Edge band.”（我们的卫星是首批包含光谱红边波段的商业卫星，该波段对叶绿素含量的变化很敏感。要充分发挥红边波段的潜力还需要更多研究。）题干一个要求是“卫星成像方面的创新”，对应 the first commercial satellites to include the Red-Edge band of the light spectrum——首次把某一波段用于商业卫星成像，属于成像技术上的突破；另一个要求是“需要进一步研究”，对应 More research will be necessary to realise the full potential。两个条件在同一段、相邻两句中同时出现，因此答案 F。段末提到的五米见方的生产力分区只是该公司数据的精度说明，与“需要进一步研究”无关，不要混淆。",
          "traps": [
            "为什么不是 B：B 段讲用反射辐射的波长推断土壤性质与作物状况，这是贯穿全文的基本原理，既不是新发明，也没有“需要继续研究”的说法。",
            "为什么不是 D：D 段讲法国在卫星监测方面领先、被监测农田面积将随天气模式变化而增加，属于现状与展望，不涉及需要继续研究的新成像技术。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "evidence of the cost effectiveness of using satellite technology in agriculture",
          "translation": "使用卫星技术有助于农业的高成本效益证据。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "The service usually costs less than US$15 per hectare for a handful of readings a year, and can increase yields by as much as 10%."
          },
          "synonyms": [
            "“cost effectiveness” 由原文的两组数据共同体现：“costs less than US$15 per hectare”（成本低）与 “can increase yields by as much as 10%”（收益高）",
            "“the service” 指代原文上文所述的卫星分析服务，即题干的 using satellite technology in agriculture",
            "同段前文 “a new and cheaper method” 与 “quickly, and less expensively” 也呼应题干的 cost effectiveness"
          ],
          "locatingTip": "定位：题干关键词是 cost effectiveness，即“花费少收益大”，因此要在原文找价格、费用或增产的数字。全文唯一出现价格的地方是 B 段末句（less than US$15 per hectare），一步锁定 B 段。确定答案技巧：判断“成本效益”不能只看“便宜”一词，必须有投入与产出两方面。B 段末句同时给出每公顷不到 15 美元的成本与最多增产 10% 的收益，二者相加才构成 evidence of cost effectiveness，答案 B。E 段开头的 Inexpensive 只是笼统说法，没有量化数据，是本题的干扰点。",
          "analysis": "第 3 段（B）在讲完卫星数据能揭示土壤与作物的多项指标后，末句给出成本效益的直接证据：“The service usually costs less than US$15 per hectare for a handful of readings a year, and can increase yields by as much as 10%.”（这项服务一年做几次读数，每公顷通常花费不到 15 美元，却可以把产量提高多达 10%。）其中 costs less than US$15 per hectare 与 a handful of readings a year 说明投入很低，can increase yields by as much as 10% 说明回报可观，两者构成题干 cost effectiveness 的完整证据链；B 段前面的 “a new and cheaper method”“less expensively” 也在呼应同一点。对比之下，E 段首句仅笼统地说数据便宜对政府有利，没有给出任何成本与收益的数字，因此答案 B。",
          "traps": [
            "为什么不是 E：E 段首句写 “Inexpensive data on the productivity of land is advantageous to governments, too.”，只说数据便宜、对政府有利，没有具体说明便宜到什么程度、能带来多少收益。",
            "为什么不是 C：C 段以 Sevepi 为例讲数据如何被使用（分区、肥料配方、生长调节剂、GPS 农机），全段没有出现价格、费用或增产比例。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 21–22 多选题（Choose TWO letters, A-E）",
      "mode": "per_question",
      "questionRange": {
        "start": 21,
        "end": 22
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Which TWO companies obtain information directly from satellites?（第 21 空，选 B）",
          "translation": "哪两家公司直接从卫星获取信息？（本题的两个空为第 21、22 空，此处对应第 21 空）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "More farmland is analysed by satellite there than in any other country, according to Infoterra (a subsidiary of EADS Astrium), the firm that is France's largest provider of such information, supplying data to companies such as Sevepi."
          },
          "synonyms": [
            "“obtain information directly from satellites” 同义替换为原文的 “More farmland is analysed by satellite” 与 “the firm that is France's largest provider of such information”，Infoterra 是卫星分析信息的提供者与信息源，而非数据的购买方",
            "“companies” 对应原文对 Infoterra 的公司定性（a subsidiary of EADS Astrium）",
            "原文的 “supplying data to companies such as Sevepi” 表明 Infoterra 处于供应链上游，向外供货，故其信息直接来自卫星分析"
          ],
          "locatingTip": "定位：本题为选两项的多选题，选项全是专有名词，做法是逐个回原文核对各选项的“身份”。Sevepi 在 C、D 两段出现，Infoterra 在 D 段出现，RapidEye 在 E、F 段出现，Agriculture and Agri-Food Canada 与 World Agroforestry Centre 分别在 E 段与 G 段出现。确定答案技巧：判分关键是区分“直接从卫星拿数据的一方”和“购买数据的一方”。D 段说 Infoterra 是法国最大的这类信息提供商、向 Sevepi 等公司供应数据，可见它本身是数据的产出方（据其说法法国被卫星分析的农田最多，它正是做卫星分析的公司），因此把 B（Infoterra）选入，填在第 21 空。",
          "analysis": "题干问哪两家公司“直接从卫星获取信息”，本质是区分数据源头与数据买家。Infoterra 见于 D 段：“More farmland is analysed by satellite there than in any other country, according to Infoterra (a subsidiary of EADS Astrium), the firm that is France's largest provider of such information, supplying data to companies such as Sevepi.”（据 Infoterra——EADS Astrium 的子公司——称，法国用卫星分析的农田比任何其他国家都多，该公司是法国最大的这类信息提供商，向 Sevepi 等公司供应数据。）句中 Infoterra 处于供应链的上游：它做卫星分析、自己掌握这类信息，再向 Sevepi 等下家供货，数据来源是卫星分析而不是向别人购买，并且 D 段还专门介绍其农业销售负责人，说明它是这一行业的经营主体。可见 B（Infoterra）正是“直接从卫星获取信息”的公司之一，对应第 21 空填 B。做题时可用“谁在卖、谁在买”这条线快速筛选：凡是原文说 purchases / it purchases 的一方都是买家，应排除。",
          "traps": [
            "为什么不是 A（Sevepi）：C 段明写 “a French cereals growers' co-operative called Sevepi purchases satellite data”，Sevepi 是购买卫星数据的合作社，属于数据使用者，不是直接从卫星获取信息的公司。",
            "为什么不是 C（Agriculture and Agri-Food Canada）：E 段写 “the satellite data it purchases is proving useful”，该政府机构同样是“购买”卫星数据的一方。",
            "为什么不是 E（World Agroforestry Centre）：G 段说它汇编的是 “a catalogue of the radiation patterns derived from around 100,000 samples of African soils”，数据来自土壤样本的分析，不是直接从卫星获取的。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "Which TWO companies obtain information directly from satellites?（第 22 空，选 D）",
          "translation": "哪两家公司直接从卫星获取信息？（本题的两个空为第 21、22 空，此处对应第 22 空）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "In March, RapidEye began selling data that helps forecast harvests."
          },
          "synonyms": [
            "“obtain information directly from satellites” 由原文 “Our satellites are the first commercial satellites to include the Red-Edge band of the light spectrum” 直接支撑：RapidEye 拥有并运营自己的卫星",
            "“companies” 对应原文的定性 “according to RapidEye, a German satellite operator”（德国卫星运营商）",
            "“obtain information” 对应原文的 “began selling data that helps forecast harvests”，能直接出售数据说明数据由自己的卫星产出"
          ],
          "locatingTip": "定位：选项中的 RapidEye 只在 E、F 两段出现，先看 E 段可知它是 “a German satellite operator”（德国卫星运营商），再回 F 段看它的经营行为：“In March, RapidEye began selling data that helps forecast harvests.”确定答案技巧：题干的关键限定是 directly from satellites（直接从卫星获取）。RapidEye 既是卫星运营商，又在自己出售数据，段内该公司的负责人还用第一人称说 “Our satellites …”，明确表示卫星归其所有，数据自然由自己的卫星产出。与此形成对照的是 Sevepi 与 Agriculture and Agri-Food Canada（都写明 purchases 数据），因此 RapidEye 是第二家答案，填在第 22 空选 D。",
          "analysis": "第二家“直接从卫星获取信息”的公司是 RapidEye。E 段先给它定性：“And according to RapidEye, a German satellite operator …”（据德国卫星运营商 RapidEye 称……），operator 一词表明它拥有并运营卫星。F 段开头讲它的业务：“In March, RapidEye began selling data that helps forecast harvests.”（RapidEye 于 3 月开始出售有助于预测收成的数据。）段内其产品开发负责人 Fredrick Jung-Rothenhausler 更直言：“Our satellites are the first commercial satellites to include the Red-Edge band of the light spectrum, which is sensitive to changes in chlorophyll content.”（我们的卫星是首批包含光谱红边波段的商业卫星，该波段对叶绿素含量变化很敏感。）既有自有卫星，又能直接出售由这些卫星产出的数据，RapidEye 显然属于“直接从卫星获取信息”的公司，因此第 22 空选 D。核对时可把题干直接代回原文读一遍：RapidEye obtains information directly from satellites——与 “Our satellites …” 和 “began selling data” 完全对上。",
          "traps": [
            "为什么不是 A（Sevepi）：C 段写明 Sevepi “purchases satellite data”（购买卫星数据），是数据买家，信息并非直接得自卫星。",
            "为什么不是 C（Agriculture and Agri-Food Canada）：E 段写 “the satellite data it purchases is proving useful for the study of fields”，说明它是购买并使用数据的一方。",
            "为什么不是 E（World Agroforestry Centre）：G 段说它建立的是 “a catalogue of the radiation patterns derived from around 100,000 samples of African soils”，信息来自土壤样本的化验分析，不是卫星直接测得。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 23–26 句子填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 23,
        "end": 26
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Initially, orbiting satellites are used to measure ________ coming from farmland.",
          "translation": "起初，轨道卫星被用来测量来自农田的 ________。",
          "answer": "electromagnetic radiation",
          "wordClass": "名词短语（不可数，作不定式 to measure 的宾语，指来自农田的电磁辐射；原文为两个单词，符合 NO MORE THAN TWO WORDS）",
          "locating": {
            "paragraph": "A",
            "quote": "Precise prescriptions for growing crops can be obtained quickly, and less expensively, by calculating the amount of electromagnetic radiation reflected from agricultural land. The data is collected by orbiting satellites."
          },
          "synonyms": [
            "“orbiting satellites are used to measure” 同义替换为原文的 “The data is collected by orbiting satellites”（数据由轨道卫星收集）",
            "“coming from farmland” 同义替换为原文的 “reflected from agricultural land”（从农田反射回来的）",
            "“Initially” 对应原文 “The data is collected by orbiting satellites.” 在段末作为对该方法初始环节的说明"
          ],
          "locatingTip": "定位：题干中的 orbiting satellites 是极佳的定位词（复合词、只出现一次），回到原文即可落到 A 段最后一句 “The data is collected by orbiting satellites.”。确定答案技巧：题干说“卫星测量来自农田的某物”，需把“谁收集数据”与“测量什么”接起来读。A 段倒数第二句说：只要计算从农田反射的 electromagnetic radiation 的数量（the amount of electromagnetic radiation reflected from agricultural land），就能又快又省地得到种植方案；末句补充这些数据由轨道卫星收集。可见卫星所测量、收集的对象就是 electromagnetic radiation，答案取两个词 electromagnetic radiation；题干 coming from 对应原文 reflected from，不要误填 agricultural land（那是“来自哪里”而非被测量对象），也不要填 the data（那是数据的统称，且超出两词限制）。",
          "analysis": "原文第 2 段（A）先讲农民很难判断种子、肥料、农药与水的投放量，实验室分析虽然可行但昂贵且常无法获得，随后引出新方法：“Precise prescriptions for growing crops can be obtained quickly, and less expensively, by calculating the amount of electromagnetic radiation reflected from agricultural land. The data is collected by orbiting satellites.”（只要计算从农田反射的电磁辐射的量，就能迅速且更经济地得到农作物种植的精确方案。这些数据由轨道卫星收集。）两句合起来构成“卫星测什么、怎么测”的完整链条：卫星收集的 the data 指的是上一句中的 electromagnetic radiation，即被测量的是农田反射出来的电磁辐射。因此空格填 electromagnetic radiation（两个词，符合 NO MORE THAN TWO WORDS）。词性上，the amount of 之后接不可数名词短语，题干空格紧跟动词 measure，作其宾语，语法上也要求名词性成分，electromagnetic radiation 完全符合。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "________ believes that confusion about irregular weather will cause more farmers to use satellite technology.",
          "translation": "________ 认为，对异常天气的困惑将使更多农民使用卫星技术。",
          "answer": "Henri Douche",
          "wordClass": "专有名词（人名，作 believes 的主语，两个单词，首字母大写，按原文拼写）",
          "locating": {
            "paragraph": "D",
            "quote": "Moreover, Henri Douche, head of Infoterra's agriculture sales in Toulouse, reckons the amount of monitored farmland will increase as weather patterns change and farmers can no longer rely on the past as a guide to the future. When confounded by the yield variations that these new weather patterns will bring, even farmers who are afraid of new technology will sign up, he says."
          },
          "synonyms": [
            "“believes” 同义替换为原文的 “reckons”（认为、估计）",
            "“confusion about irregular weather” 同义替换为原文的 “confounded by the yield variations that these new weather patterns will bring”，confounded 即“被弄糊涂”，new weather patterns 即“异常多变的天气”",
            "“cause more farmers to use satellite technology” 同义替换为原文的 “even farmers who are afraid of new technology will sign up”（连害怕新技术的农民也会加入）与 “the amount of monitored farmland will increase”（受监测农田面积将增加）"
          ],
          "locatingTip": "定位：句子空格在句首且后接 believes，说明要填的是表达观点的人，属“谁认为”类主语句。回原文找“认为”的同义动词与人名搭配：D 段的 reckons 前正好是 Henri Douche（人名＋职位），段末又有 he says 收尾，指向唯一。确定答案技巧：把题干与原文逐点比对——confusion about irregular weather 对应 confounded by the yield variations that these new weather patterns will bring；cause more farmers to use satellite technology 对应 even farmers who are afraid of new technology will sign up 以及 the amount of monitored farmland will increase。观点持有者即 Henri Douche，注意不要误填他所在的公司 Infoterra，也不要填地名 Toulouse。",
          "analysis": "原文第 5 段（D）在讲完法国在卫星监测方面领先之后，引用 Infoterra 农业销售负责人 Henri Douche 的预测：“Moreover, Henri Douche, head of Infoterra's agriculture sales in Toulouse, reckons the amount of monitored farmland will increase as weather patterns change and farmers can no longer rely on the past as a guide to the future. When confounded by the yield variations that these new weather patterns will bring, even farmers who are afraid of new technology will sign up, he says.”（此外，Infoterra 图卢兹农业销售负责人 Henri Douche 估计，随着天气模式变化、农民再也无法以过去为参照预判未来，受监测的农田面积将会增加；他说，当农民被这些新天气模式带来的产量波动搞得不知所措时，连害怕新技术的农民也会加入。）题干三处信息一一对应：believes 对应 reckons；confusion about irregular weather 对应 confounded by the yield variations that these new weather patterns will bring；cause more farmers to use satellite technology 对应 even farmers who are afraid of new technology will sign up（连害怕新技术的农民也会注册使用）。因此空格填观点持有者 Henri Douche（两个词，专有名词首字母大写）。干扰项是同一句中出现的 Infoterra（公司名）与 Toulouse（地名），前者的角色是“信息的提供者”，后者只是他的任职地点，都不能作 believes 的主语。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "As a result of satellite technology, it may become possible to insure against the risk of ________.",
          "translation": "由于卫星技术，未来或许可以为 ________ 的风险投保。",
          "answer": "crop failure",
          "wordClass": "名词短语（不可数，作介词 of 的宾语，指作物歉收这一风险；原文为两个单词，符合 NO MORE THAN TWO WORDS）",
          "locating": {
            "paragraph": "E",
            "quote": "And according to RapidEye, a German satellite operator, insurance companies are also studying satellite data with a view to selling insurance policies to governments of famine-prone countries that might be threatened by crop failure."
          },
          "synonyms": [
            "“it may become possible to insure against the risk of …” 同义替换为原文的 “insurance companies are also studying satellite data with a view to selling insurance policies”（保险公司正研究卫星数据，打算出售保险），with a view to 表示尚未实现的目的，对应题干的 may become possible",
            "“the risk of …” 同义替换为原文的 “might be threatened by …”（可能受到……威胁）",
            "“As a result of satellite technology” 对应原文的 “studying satellite data”，即保险业务建立在卫星数据之上"
          ],
          "locatingTip": "定位：题干关键词 insure（投保）在全文只出现于 E 段，原文用的是 insurance 的同根词（insurance companies、insurance policies），属于词形转换式定位，一步锁定 E 段末句。确定答案技巧：题干结构是“由于卫星技术，也许可以就某种风险投保”，所以要找“谁怕什么”。原文说保险公司想把保险卖给易闹饥荒国家的政府，这些政府“might be threatened by crop failure”，by 之后就是投保所针对的风险，故空格填 crop failure。注意区分 famine-prone countries（易闹饥荒的国家，指投保客户的特征）与 crop failure（作物歉收，指真正的风险标的），不要误填 famine 或 satellite data。",
          "analysis": "原文第 6 段（E）末句写道：“And according to RapidEye, a German satellite operator, insurance companies are also studying satellite data with a view to selling insurance policies to governments of famine-prone countries that might be threatened by crop failure.”（据德国卫星运营商 RapidEye 称，保险公司也在研究卫星数据，打算向可能遭受作物歉收威胁的易闹饥荒国家政府出售保险。）题干“由于卫星技术，将来或许可以为某种风险投保”正是这句话的改写：studying satellite data 对应 As a result of satellite technology；with a view to selling insurance policies 对应 it may become possible to insure（打算出售，即尚未实现、将来可能实现）；might be threatened by crop failure 中的 by 后内容就是风险本身，因此空格填 crop failure（两个词）。词性上 of 是介词，其后需名词性成分作宾语，crop failure 是名词短语，语法成立。易错点有两个：一是把 famine 当成答案，但原文的 famine-prone 修饰 countries，是国家的特征；二是填 satellite data，而那是保险公司使用的工具，不是被投保的风险。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "In Africa, much of the soil suffers from the loss of ________.",
          "translation": "在非洲，许多土壤因 ________ 的流失而受损。",
          "answer": "nutrients",
          "wordClass": "名词（复数，作介词 of 的宾语，指土壤中流失的养分；原文用复数形式 nutrients，填写时保留复数）",
          "locating": {
            "paragraph": "G",
            "quote": "In Africa, where many soils have become badly depleted of nutrients, better fertiliser management would greatly improve the situation."
          },
          "synonyms": [
            "“much of the soil suffers from the loss of …” 同义替换为原文的 “many soils have become badly depleted of nutrients”，depleted of 即“被严重耗尽”，badly 对应题干 suffers from 所指的受损程度",
            "“the loss of nutrients” 同义替换为原文的 “depleted of nutrients”（养分被耗尽）",
            "“In Africa” 在原文中逐词复现，构成最直接的定位线索"
          ],
          "locatingTip": "定位：题干的 In Africa 与 soil 分工明确——In Africa 是醒目的洲名定位词，G 段首句之后即出现 “In Africa, where many soils have become badly depleted of nutrients”，一步锁定。确定答案技巧：题干说非洲土壤“因某物流失而受损”，原文对应说法是 become badly depleted of nutrients（养分被严重耗竭），depleted of 后接的就是被耗尽的东西，即 nutrients；同时 better fertiliser management would greatly improve the situation 说明改善的对象正是这些流失的养分，进一步印证。填复数 nutrients，不要误填 fertiliser（它是要改善的手段而非流失物）。",
          "analysis": "原文第 8 段（G）第二句写道：“In Africa, where many soils have become badly depleted of nutrients, better fertiliser management would greatly improve the situation.”（在非洲，许多土壤的养分已被严重耗尽，更好的肥料管理会大大改善这一状况。）题干的 In Africa 与原文逐词一致；后半句 much of the soil suffers from the loss of … 则是 many soils have become badly depleted of nutrients 的同义改写——depleted of nutrients 即“养分被耗尽”，与“因……流失而受损”意思相同，因此 of 后的 nutrients 就是答案。词性上，of 是介词，其后需名词性成分，nutrients 为复数名词，与原文一致；不要写成单数 nutrient，也不要把下一句中作为对策出现的 fertiliser 误填进来，因为肥料是改善局面的手段，而不是土壤流失的东西。全段接着说世界农林业中心汇编非洲土壤样本的辐射图谱、并计划建立“数字土壤地图”，正是围绕“恢复土壤养分、提高农业生产潜力”展开的。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
