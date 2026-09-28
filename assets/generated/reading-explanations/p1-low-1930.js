(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-1930", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-1930",
  "meta": {
    "examId": "p1-low-1930",
    "title": "Wood: a valuable resource in New Zealand's economy 木材：新西兰经济的重要资源",
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
            "quote": "A tradition of wooden houses arose, supported by the recognition that they were less likely to collapse suddenly during earthquakes, a not infrequent event in this part of the world."
          },
          "synonyms": [
            "“realised” 同义替换为原文的 “the recognition”（认识到、基于这样的认识）",
            "“wooden houses” 与原文 “A tradition of wooden houses arose” 中的 “wooden houses” 原词对应",
            "“more dangerous” 与原文 “less likely to collapse suddenly”（更不容易在地震中突然倒塌，即更安全）意思相反，属于反义冲突"
          ],
          "locatingTip": "定位：题干的关键词是 wooden houses 和 earthquakes，第 1 段（A 段）第 3 句同时出现 wooden houses 与 earthquakes，扫读时看到 wooden houses 就可以停下精读。确定答案技巧：本题考“更危险还是更安全”，判分点在于比较方向。原文用 less likely to collapse（更不容易倒塌）说明木屋之所以流行，是因为被认为更安全；题干却写成 more dangerous（更危险），把比较方向整个调转，属于与原文事实相反的表述，因此判 FALSE。做这类题一定要把比较级两边的对象和方向都核对清楚。",
          "analysis": "第 1 段（A 段）共四句，讲欧洲移民定居新西兰时天然木材的作用。第 2 句说木材容易取得而且比较便宜；第 3 句就是本题的定位句：“A tradition of wooden houses arose, supported by the recognition that they were less likely to collapse suddenly during earthquakes, a not infrequent event in this part of the world.”（木制房屋的传统由此形成，其支持依据是人们认识到，在这个地震并不罕见的地区，木屋在地震中突然倒塌的可能性较小）。原文的逻辑是：因为木屋 less likely to collapse（更不容易突然倒塌），所以人们才形成住木屋的传统——这是在说木屋更安全。题干却声称定居者认识到木屋 “more dangerous than other types of structure”（比其他类型的建筑更危险），把原文的 less likely to collapse 直接翻转成 more dangerous，比较方向完全相反。原文既出现了明确的安全评价，又恰好是题干的否定面，属于典型的事实冲突，答案只能是 FALSE。注意题干用的是 Settlers（定居者）和 realised（意识到），分别对应原文的 European immigrants / the settlement 与 the recognition，这两处替换本身没有问题，错只错在比较的方向上。",
          "traps": [
            "为什么不是 TRUE：原文的落脚点是 less likely to collapse suddenly（更不容易突然倒塌），也就是木屋更安全，这正是题干 more dangerous（更危险）的否定面。原文对木屋的抗震安全性给出了明确且相反的结论，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文并没有回避这个问题，而是直接给出了理由——“supported by the recognition that they were less likely to collapse suddenly during earthquakes”，存在明确信息且与题干相反，按规则判 FALSE，而不属于信息缺失的 NOT GIVEN。"
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
            "quote": "Early explorers recognised the suitability of the tall, straight trunks of the kauri for constructing sailing vessels. The kauri is a species of coniferous tree found only in small areas of the southern hemisphere. So from the early 1800s, huge amounts of this type of wood were sold to Australia and the UK for that purpose."
          },
          "synonyms": [
            "“for use in boat-building” 同义替换为原文的 “for constructing sailing vessels”（建造帆船）与 “for that purpose”（为了这个用途）",
            "“New Zealand exported wood” 同义替换为原文的 “huge amounts of this type of wood were sold to Australia and the UK”，原文用被动语态“被卖给澳大利亚和英国”表达出口",
            "“During the 1800s” 与原文的 “from the early 1800s” 时间上一致"
          ],
          "locatingTip": "定位：题干的核心词是 1800s 与 boat-building，第 2 段（B 段）同时出现造船用途（constructing sailing vessels）和年代（from the early 1800s），且 “for that purpose” 回指前文的造船用途。确定答案技巧：题干把“造船”和“19 世纪出口”两件事拼在一句里，只要在原文找到“某类木材因造帆船而被大量卖给国外、时间从 1800 年代初开始”这一组合，即可判 TRUE。注意原文用 sold to Australia and the UK 表示出口方向，用 for that purpose 回指前面的建造帆船，没有任何限定或否定，方向与题干一致。",
          "analysis": "第 2 段（B 段）讲 kauri 木材的早期利用与出口。首句：“Early explorers recognised the suitability of the tall, straight trunks of the kauri for constructing sailing vessels.”（早期探险者发现，kauri 树高大笔直的树干很适合用来建造帆船）；第 3 句：“So from the early 1800s, huge amounts of this type of wood were sold to Australia and the UK for that purpose.”（因此从 19 世纪初开始，这种木材被大量卖给澳大利亚和英国，正是为了这一用途）。两句连起来给出完整的因果关系：因为适合造船，所以从 1800 年代初开始大量出口到澳大利亚和英国。其中 for that purpose 中的 that purpose 指的就是前文 constructing sailing vessels（造船）。题干的三个信息点——时间 During the 1800s、行为 exported wood、目的 boat-building——在原文中一一落实：from the early 1800s 是出口的起点，被 sold to Australia and the UK 就是出口，for that purpose 就是用于造船。信息方向完全一致，因此答案是 TRUE。要注意原文此处的限制条件是后面的 “the rate of harvest was unsustainable”，那是讲采伐不可持续、20 世纪初原木出口下滑，并不影响 19 世纪这段出口事实，不要据此误判为 FALSE。",
          "traps": [
            "为什么不是 FALSE：原文明确说这类木材 “were sold to Australia and the UK for that purpose”，而 that purpose 指的就是 constructing sailing vessels（造船），时间起点是 from the early 1800s。题干的时间、行为、用途三要素与原文完全吻合，没有矛盾点，故不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文既给了用途（建造帆船），又给了年代（从 1800 年代初）和出口对象（澳大利亚与英国），信息完整具体，不是未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Plantation-grown wood is generally better for construction than native-forest wood.",
          "translation": "人工林种植的木材用于建筑一般比天然林（本土林）木材更好。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "By the 1960s, plantation-grown timber was providing most of the country's sawn timber needs, especially for construction."
          },
          "synonyms": [
            "“Plantation-grown wood” 与原文 “plantation-grown timber” 原词对应（wood 与 timber 同义）",
            "“for construction” 与原文 “especially for construction” 完全对应",
            "“better than native-forest wood” 在原文中没有任何对应：原文只说明人工林木材供应了大部分建筑用材，从未比较两种木材的质量优劣"
          ],
          "locatingTip": "定位：题干的两个关键词 plantation-grown 和 construction 都出现在第 3 段（C 段）末句，属于可一步定位的句子。确定答案技巧：本题的陷阱在于“数量多”与“质量好”是两回事。原文说的是 plantation-grown timber “was providing most of the country's sawn timber needs”（供应了全国大部分锯材需求），讲的是供应比例和用途，既没有说它比本土林木材更好，也没有说更差；题干却断言 “better for construction than native-forest wood”，这个比较级是原文完全没有的。原文提及未提及（未比较）即 NOT GIVEN，切忌把“用得最多”当成“质量最好”。",
          "analysis": "第 3 段（C 段）只有两句，讲 1940 年代起引种辐射松（radiata pine）人工林开始大量供应木材：第 1 句说从 1940 年代起，新建立的人工林供应了越来越多的木材与其他木制品；第 2 句是定位句：“By the 1960s, plantation-grown timber was providing most of the country's sawn timber needs, especially for construction.”（到 1960 年代，人工林木材已经满足了全国大部分锯材需求，尤其是建筑用材）。这句话交代的是“人工林木材主要用于建筑、且占比很高”，属于用途与供应量层面的信息。题干却把它改写成一个质量比较——“人工林木材用于建筑一般比天然林木材更好（better for construction than native-forest wood）”。原文通篇没有出现任何对两种木材建筑性能的比较：第 4 段（D 段）只说如今不到 2% 的木材来自本土林，且几乎都用于家具、配件等更高价值的用途，同样没有说本土林木材不适合建筑或质量不如人工林。既然原文既没有肯定也没有否定这一比较，答案只能是 NOT GIVEN。做题时看到 better than 这类比较级，务必回原文确认“比较”这一动作本身是否真的存在。",
          "traps": [
            "为什么不是 TRUE：原文只说明人工林木材被大量用于建筑（providing most of the country's sawn timber needs, especially for construction），这是使用比例和用途的描述，并未把它与本土林木材作质量对比，无法支持“更好”这一结论。",
            "为什么不是 FALSE：原文也没有说人工林木材比本土林木材差，更没有说它不适合建筑；只是完全没有涉及两者的优劣比较。没有相反信息就不算 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Compared to other types of wood, pine has a narrow range of uses.",
          "translation": "与其他种类的木材相比，松木的用途范围很窄。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "As the pine industry developed, it became apparent that this type of wood was also well suited for many uses."
          },
          "synonyms": [
            "“has a narrow range of uses” 与原文的 “was also well suited for many uses”（非常适合多种用途）意思相反",
            "同段末句 “This amazing versatility has encouraged the development of an integrated forest-products industry which is almost unique in the world.” 中的 “versatility”（多用途、多功能）进一步否定题干",
            "“pine” 对应原文的 “this type of wood”（回指 pine）以及后文的 “Pine by-products”"
          ],
          "locatingTip": "定位：题干的关键词是 pine 与 uses，第 4 段（D 段）集中讲松木的多种用途，看到 pine 或 this type of wood 即可停下精读。确定答案技巧：本题考用途范围“宽还是窄”，判分点是原文对松木用途的定性。原文用 well suited for many uses（适合许多用途）、并列举了纸浆、栅栏立柱、家具、板材、胶合板等一长串用途，末句更以 versatility（多用途性）作总结；题干却说 a narrow range of uses（用途范围很窄），与原文的 many / versatility 正面对立，故判 FALSE。当题干出现 narrow、limited、few 这类“缩减性”表述时，要警惕原文往往是相反方向的“扩展性”表述。",
          "analysis": "第 4 段（D 段）先说如今不到 2% 的木材取自本土林且多用于高价值用途，随后用三句集中铺陈松木的用途：“As the pine industry developed, it became apparent that this type of wood was also well suited for many uses.”（随着松木产业发展，人们发现这种木材也非常适合许多用途）；接着具体列举 “It makes excellent pulp*, and is frequently used for posts, poles, furnishings and moldings, particleboard, fiberboard, and for plywood and 'engineered' wood products.”（可制优质纸浆，常用于栅栏立柱、电线杆、家具与装饰线条、刨花板、纤维板，以及胶合板和“工程”木制品）；还补充 “Pine by-products are used in the chemical and pharmaceutical industries and residues are consumed for fuel.”（松木副产品用于化工与制药行业，残余物用作燃料）。最后一句用 “This amazing versatility”（这种惊人的多用途性）作总结。全段的语义重心就是“用途广、适用性强”，而题干说的是 “Compared to other types of wood, pine has a narrow range of uses”（与其他木材相比，松木用途范围很窄），与原文的 many uses 和 versatility 完全相反。原文还强调这种综合性木制品产业 “almost unique in the world”（在世界上几乎是独一无二的），更谈不上用途狭窄。因此答案判 FALSE。（原文的 pulp 后带星号，是本篇末段词汇表的注释标记。）",
          "traps": [
            "为什么不是 TRUE：原文用 well suited for many uses 定性，并列举纸浆、立柱、家具、刨花板、纤维板、胶合板、工程木制品等大量用途，末句更以 versatility 概括，一致指向“用途极广”，与题干的 narrow range of uses 直接冲突，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对松木用途的描述极其具体（列举多种产品）且给出了明确的定性词（many uses、versatility），属于已交代且与题干相反的信息，因此不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Demand for housing in New Zealand is predicted to fall in the next few years.",
          "translation": "预计未来几年新西兰的住房需求会下降。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "In New Zealand itself, the construction industry is the principal user of solid wood products, servicing around 20000 new house starts annually."
          },
          "synonyms": [
            "“Demand for housing” 与原文的 “20000 new house starts annually”（每年约两万套新开工住房）、“local wood consumption” 同属住房与建筑需求的语境",
            "“is predicted to fall” 在原文中没有任何对应：原文只陈述当下的年开工量与近年消费量，没有任何对未来住房需求下降的预测",
            "“in the next few years” 与原文的 “For the last few years”（过去几年）时间方向相反，原文讲的是过去与现状，不是未来预测"
          ],
          "locatingTip": "定位：题干的关键词是 housing 和 New Zealand，第 6 段（F 段）首句即出现 new house starts（新开工住房）与 In New Zealand itself，可直接定位。确定答案技巧：本题的陷阱是“把现状当成预测”。原文讲的全是已经发生或正在发生的事——每年约两万套新开工住房、过去几年本地木材消费量仅约四百万立方米；第 7 段（G 段）虽然提到 “the domestic market already at its peak”（国内市场已达到顶峰），那也是对当前状态与产能的说明，并由此推出“未来的增产木材只能销往海外”，而不是预测住房需求会下降。原文既没有给出任何住房需求的未来预测，更没有“下降”的判断，所以选 NOT GIVEN。看到题干有 is predicted to / will / in future 这类未来表述时，务必核对原文是否真的有对应的预测性内容。",
          "analysis": "第 6 段（F 段）讲新西兰国内的木材需求与行业局限。首句是定位句：“In New Zealand itself, the construction industry is the principal user of solid wood products, servicing around 20000 new house starts annually.”（在新西兰本国，建筑行业是实木产品的主要使用者，每年支撑约两万套新开工住房）。接下来两句说：新西兰人口规模小（刚过四百万），加上制造业与再制造业基础薄弱，限制了林业的国内机会；“For the last few years local wood consumption has been around only four million cubic metres.”（过去几年当地木材消费量仅约四百万立方米）。末句则把结论指向出口：“Accordingly, the development of the export market is the key to the industry's growth and contribution to the national economy in decades to come.”（因此，开拓出口市场是未来数十年该行业增长与贡献国民经济的关键）。全段的信息都是对现状与国内需求规模的描述，没有任何一句预测住房需求会下降。题干说 “Demand for housing in New Zealand is predicted to fall in the next few years.”（预计未来几年新西兰住房需求会下降），其中的 predicted、fall、next few years 三个要素在原文中都找不到依据：原文既没有预测行为，也没有“下降”的判断，时间方向甚至是过去（For the last few years）。因此答案判 NOT GIVEN，而不能因为原文强调国内市场受限就推断住房需求将下跌。",
          "traps": [
            "为什么不是 TRUE：原文只提供了每年约两万套新开工住房的现状数据，以及过去几年本地木材消费量偏低的事实，并由此强调国内机会有限、必须靠出口；全文没有任何关于住房需求未来走势的预测，更没说会下降，所以不能选 TRUE。",
            "为什么不是 FALSE：原文也没有说住房需求会上升或保持稳定，只是没有涉及“未来住房需求”这一话题；既无相反信息，就不是 FALSE，而属于信息缺失的 NOT GIVEN。"
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
            "paragraph": "6",
            "quote": "Accordingly, the development of the export market is the key to the industry's growth and contribution to the national economy in decades to come."
          },
          "synonyms": [
            "“the expansion of New Zealand's wood industry” 同义替换为原文的 “the industry's growth”（该行业的增长）",
            "“will depend on its exports” 同义替换为原文的 “the development of the export market is the key to …”（出口市场的发展是……的关键）",
            "“In future” 同义替换为原文的 “in decades to come”（未来数十年）"
          ],
          "locatingTip": "定位：题干的关键词是 industry、future、exports，第 6 段（F 段）末句同时包含 the export market、the industry's growth 和 in decades to come，一步到位。确定答案技巧：本题考“未来增长靠什么”，判分点是原文是否把出口定为关键。原文用 “the development of the export market is the key to the industry's growth”（出口市场的发展是该行业增长的关键）把因果关系说得非常明确，且在紧接着的第 7 段（G 段）重申 “almost all of the extra wood produced in future will have to be marketed overseas”（未来几乎全部新增木材都必须销往海外），形成双重印证，因此判 TRUE。",
          "analysis": "第 6 段（F 段）在前两句说明新西兰国内市场的局限（人口仅略超四百万、制造与再制造基础薄弱、本地木材消费量仅约四百万立方米）之后，用 Accordingly（因此）引出结论句，也是本题的定位句：“Accordingly, the development of the export market is the key to the industry's growth and contribution to the national economy in decades to come.”（因此，出口市场的发展是该行业未来数十年增长及其对国民经济贡献的关键）。句中 is the key to 明确建立“出口市场发展”与“行业增长”的依赖关系，in decades to come 直接对应题干的 In future。第 7 段（G 段）进一步强化这一判断：林业是新西兰第三大出口部门，但产能利用远低于其能力，而且 “with the domestic market already at its peak, almost all of the extra wood produced in future will have to be marketed overseas”（在国内市场已达顶峰的情况下，未来新增的木材几乎都必须销往海外）。两段合起来说明：国内需求已无扩展空间，未来的增长只能依靠出口。题干的 the expansion of the industry 对应 the industry's growth，will depend on its exports 对应 the development of the export market is the key to，In future 对应 in decades to come，三处改写一一对应、方向一致，答案判 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确写出 “the development of the export market is the key to the industry's growth”，并在下一段用 “almost all of the extra wood produced in future will have to be marketed overseas” 再次确认，与题干“未来扩张取决于出口”完全一致，没有任何矛盾点，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不是含糊提及出口，而是把出口市场的发展直接定位为行业增长的关键（is the key to），因果关系明确、时间范围明确（in decades to come），信息充分且正面回答了题干，所以不能选 NOT GIVEN。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
