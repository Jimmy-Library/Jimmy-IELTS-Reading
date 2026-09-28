(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1031", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1031",
  "meta": {
    "examId": "p1-high-1031",
    "title": "Advertising Needs Attention 广告需要关注",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–7 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 7
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Jane Raymond states that Chillz mineral water is packaged in a way that is unattractive to consumers.",
          "translation": "简·雷蒙德（Jane Raymond）称，Chillz 矿泉水的包装方式对消费者没有吸引力。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Despite being made of clear plastic, it looks as if it has been carved from ice. This simple feature means shoppers are drawn to this bottle over the others on the shelf and cannot resist picking it up, Raymond says."
          },
          "synonyms": [
            "“packaged in a way” 对应原文的 “made of clear plastic” 与 “looks as if it has been carved from ice”，都是对瓶身包装外观的描述",
            "“unattractive to consumers” 与原文的 “shoppers are drawn to this bottle” “cannot resist picking it up” 相互冲突：原文强调这个包装很吸引人，顾客还会忍不住拿起来",
            "“Chillz mineral water” 与原文原词复现：“a bottle of Chillz mineral water”"
          ],
          "locatingTip": "定位：题干含两个大写专有词 Chillz mineral water 和 Jane Raymond，两者都集中在第 1 段，扫读大写词即可一步锁定，不必通读全文。确定答案技巧：判断题的落点是评价性形容词 unattractive（没有吸引力），必须回到原文找作者对这款包装的正面或负面评价。原文先用 “Despite being made of clear plastic, it looks as if it has been carved from ice”（虽为透明塑料，却像用冰雕成）渲染外观，再直接给出结果 “shoppers are drawn to this bottle over the others on the shelf and cannot resist picking it up”（顾客被这瓶水吸引，胜过货架上其他瓶装水，还忍不住拿起来）。被吸引、忍不住拿，与“没有吸引力”完全相反，属明确冲突，因此判 FALSE。",
          "analysis": "第 1 段先提出全文总论点“广告越努力抓注意力，大脑越忽略它”，随后用 Jane Raymond 手中的 Chillz 矿泉水作例子。定位句为：“Despite being made of clear plastic, it looks as if it has been carved from ice. This simple feature means shoppers are drawn to this bottle over the others on the shelf and cannot resist picking it up, Raymond says.”（尽管它只是透明塑料做的，看上去却像用冰雕成的。雷蒙德说，正是这个简单的特征让顾客被这瓶水吸引，胜过货架上其他瓶装水，还忍不住把它拿起来）。原文对该包装给出的是清一色的正面效果：看起来像冰雕（looks as if it has been carved from ice）、吸引顾客（are drawn to）、让人忍不住拿起来（cannot resist picking it up）。题干却把 packaged in a way 说成 unattractive to consumers（对消费者没有吸引力），与原文的评价方向完全相反，属于直接冲突的信息，所以答案是 FALSE。做题提示：本题的关键词是 unattractive 这类带否定前缀的评价形容词，见到它就要在原文中检索同一事物被如何评价，只要原文是正面评价，题干即判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文对 Chillz 矿泉水的包装只有正面描述——看上去像冰雕、让顾客被吸引、让人忍不住拿起来（cannot resist picking it up），没有任何“不吸引人”的表述，题干与原文相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对这款包装的效果交代得非常具体明确（are drawn to this bottle、cannot resist picking it up），不是信息缺失；只是信息方向与题干相反，所以按规则判 FALSE 而非 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Consumers are still exposed to more advertising through television commercials than through the medium of the internet.",
          "translation": "与互联网这一媒介相比，消费者通过电视广告接触到的广告仍然更多。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Whether we are taking our time shopping in a mall, surfing the Internet for information, or just watching television as a form of passive entertainment, consumers are surrounded by messages every 15 seconds of our waking lives, according to some estimates."
          },
          "synonyms": [
            "“through television commercials” 对应原文的 “watching television as a form of passive entertainment”",
            "“through the medium of the internet” 对应原文的 “surfing the Internet for information”",
            "“are still exposed to” 对应原文的 “are surrounded by messages every 15 seconds of our waking lives”（无时无刻不被信息包围）",
            "“more … than …” 这一比较关系在原文中找不到对应：原文把购物、上网、看电视三种场景并列，并未比较哪一种媒介的广告更多"
          ],
          "locatingTip": "定位：题干的关键词是 television 与 the internet，两词同时出现的地方只有第 2 段，因为该段把购物、上网、看电视三种情境并列陈述；扫读 Internet 即可锁定。确定答案技巧：本题考的是“电视广告比网络广告多”这一比较结论。回原文核对会发现，原文用的句式是 “Whether … or … or …”（无论是逛商场、上网还是看电视），把三种媒介放在完全平等的并列位置上，只说消费者在醒着的时间里每 15 秒就被信息包围一次，从头到尾没有对电视与网络的广告数量作任何比较。比较关系在原文中不存在（既没说电视更多，也没说网络更多），属于信息缺失，因此判 NOT GIVEN。做题时务必警惕原文只并列、题干却比较的情况。",
          "analysis": "第 2 段讲“注意力是稀缺资源”：定位句 “Whether we are taking our time shopping in a mall, surfing the Internet for information, or just watching television as a form of passive entertainment, consumers are surrounded by messages every 15 seconds of our waking lives, according to some estimates.”（无论是悠闲逛商场、上网找信息，还是仅把看电视当作被动娱乐，据一些估算，消费者在醒着的每 15 秒里都被信息包围一次）。原文的思路是“处处都是广告、信息量巨大”，因此用 Whether A, B, or C 的三项并列表示覆盖面广，并不区分渠道强弱；紧接着又给出全球广告花费 4010 亿美元的数据，同样没有细分到电视或网络。题干却把这层并列改写成比较结构 “more advertising through television commercials than through the medium of the internet”（电视广告比网络广告更多），加进了原文没有的数量比较。判断题中，只要题干出现比较级而原文只作并列描述，就应先怀疑是 NOT GIVEN；此处原文确实未提哪个渠道更多，故答案为 NOT GIVEN。注意不要因为日常常识（电视广告似乎更密集）而替原文下结论。",
          "traps": [
            "为什么不是 TRUE：原文只把看电视与其他场景并列，说明消费者无论在哪都处在广告包围中，并没有说电视渠道的广告量高于网络；要判 TRUE 必须有“电视多于网络”的原文依据，而文中没有。",
            "为什么不是 FALSE：原文既没说电视广告更少，也没说网络广告更多，不存在与题干相反的信息，仅仅是缺一个数量对比，所以属于信息缺失的 NOT GIVEN，而不是 FALSE。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Jamie Rayner says that people are no longer influenced by traditional advertisements.",
          "translation": "杰米·雷纳（Jamie Rayner）说，人们已不再受传统广告的影响。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "And the reason, he explains, is simple: conventional advertising has ceased to work."
          },
          "synonyms": [
            "“traditional advertisements” 同义替换为原文的 “conventional advertising”（conventional 即传统的、惯常的）",
            "“people are no longer influenced by” 同义替换为原文的 “has ceased to work”（已不再起作用，即不再影响受众）",
            "“Jamie Rayner says” 对应原文的 “he explains”，其中 he 回指前一句出现的 Jamie Rayner"
          ],
          "locatingTip": "定位：题干里的人名 Jamie Rayner 在第 3 段第 1 句就出现，紧跟着的 he explains 就是他本人的观点句，专有名词一步定位。确定答案技巧：本题的关键在两处同义改写——traditional 对应 conventional，no longer influenced 对应 has ceased to work（不再起作用）。原文用 has ceased to work 明确表示传统/常规广告已经失效，与题干“人们不再受其影响”是同一意思的两种说法，方向一致且明确，故判 TRUE。注意代词指代：先确认 he 指的是 Jamie Rayner，再判答案，避免张冠李戴（第 4 段起换成了 Jane Raymond 的观点）。",
          "analysis": "第 3 段第 2 句是本题定位句：“And the reason, he explains, is simple: conventional advertising has ceased to work.”（他解释说，原因很简单：传统广告已经不再起作用了）。句中 he 承前指第 1 句的 Jamie Rayner（ID Magasin 的研究总监），因此这句话正是题目所问的“Jamie Rayner 的观点”。对应关系十分整齐：conventional 与题干的 traditional 都是“传统的、常规的”；has ceased to work（已停止起作用）与 people are no longer influenced（人们不再受影响）在语义上等价——“广告不再起作用”就是对受众而言“不再产生影响”。方向一致、无冲突、无缺失，答案是 TRUE。做题提示：人物观点题要先分清是谁说的，本篇第 3 段属于 Jamie Rayner，第 4 段之后转入 Jane Raymond，两人名字相近（Rayner / Raymond）是本题最大的干扰点，定位时必须核对姓氏的拼写与全名。",
          "traps": [
            "为什么不是 FALSE：原文用 “conventional advertising has ceased to work” 明确表达“传统广告已失效”，与题干“人们不再受传统广告影响”是同一方向的表述，找不到任何相反信息，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对这个观点交代得非常直接，并且用 he explains 指明说话人正是题干提到的 Jamie Rayner，观点与人物都对得上，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "According to Jamie Rayner, the reason that most products are discontinued is that advertising fails to attract consumers.",
          "translation": "根据杰米·雷纳（Jamie Rayner）的说法，大多数产品停产的原因是广告未能吸引消费者。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Nine out of 10 new products meet an early death, says Jamie Rayner, director of research at ID Magasin, a UK consultancy specializing in consumer behavior. And the reason, he explains, is simple: conventional advertising has ceased to work."
          },
          "synonyms": [
            "“most products are discontinued” 同义替换为原文的 “Nine out of 10 new products meet an early death”（十款新品有九款早早夭折，即绝大多数产品被淘汰停产）",
            "“the reason … is that” 对应原文的 “And the reason, he explains, is simple”",
            "“advertising fails to attract consumers” 与原文的 “conventional advertising has ceased to work” 只是表面相近：原文说的失效机制是消费者整天都在看广告却没吸收信息，而不是“广告吸引不到消费者”"
          ],
          "locatingTip": "定位：题干的人名 Jamie Rayner 与主题词 products、advertising 都集中在第 3 段第 1 至 2 句，读到大写人名即可停下精读这两句。确定答案技巧：先看表象——Nine out of 10 new products meet an early death 确实等于“大多数产品被淘汰”，这一步没问题；真正的判分点在于题干给出的“原因”。原文给出的原因是 conventional advertising has ceased to work（传统广告不再起作用），而全篇对“为何不起作用”的解释是注意力超载、大脑忽略信息（第 3 段末句：although we may be looking at brands and advertisements all day long, most of the time we're not taking anything in；第 1 段首句也强调大脑会忽略广告）。也就是说，原文从未把失败归因于“广告吸引不到消费者”，题干把原因替换成了另一种机制，与原文冲突，故判 FALSE。",
          "analysis": "第 3 段开头两句是本题定位句：“Nine out of 10 new products meet an early death, says Jamie Rayner, director of research at ID Magasin, a UK consultancy specializing in consumer behavior. And the reason, he explains, is simple: conventional advertising has ceased to work.”（ID Magasin 研究总监杰米·雷纳说，十款新产品中有九款会早早夭折。他解释说，原因很简单：传统广告已经不再起作用）。题干的前半部分与原文吻合：most products are discontinued 与 Nine out of 10 new products meet an early death 对应，都是说绝大多数产品被淘汰。问题出在题干后半段给出的“原因”：题干写成 advertising fails to attract consumers（广告吸引不到消费者），把因果链解释为“广告抓不住消费者”。而原文的原因表述是 conventional advertising has ceased to work（传统广告不再有效），其失效机制在文中另有明确解释：第 1 段首句说 “The harder advertisers try to get your attention, the more your brain ignores them.”（广告越努力抓你的注意力，你的大脑越会忽略它们），第 3 段末句又说 “It seems that although we may be looking at brands and advertisements all day long, most of the time we're not taking anything in.”（似乎我们整天都在看品牌与广告，可大多数时候什么也没吸收）。可见原文的归因是“消费者看到了却吸收不了（注意力超载）”，而不是“广告无法吸引消费者”。题干把原因替换掉，属于事实层面的冲突，因此答案是 FALSE。做题提示：因果关系题必须同时核对“因”和“果”，本题的“果”对得上、陷阱全在“因”上。",
          "traps": [
            "为什么不是 TRUE：题干只有前半句（大多数产品被淘汰）与原文一致，后半句的原因被改成了“广告吸引不到消费者”，而原文的原因表述是 “conventional advertising has ceased to work”，且全篇的机制解释是消费者注意力超载、看了也吸收不了（第 3 段末句：most of the time we're not taking anything in），两处归因不同，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“产品为何失败”给了明确的原因（And the reason, he explains, is simple），不是没提；只是题干给出的原因与原文的原因不一致。存在明确但相反的信息时应判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Jane Raymond believes that commercials should be simpler in their content.",
          "translation": "简·雷蒙德（Jane Raymond）认为广告的内容应当更简单。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "But advertisers respond by cramming in even more complex information. Raymond is opposed to this and her advice is simple: deliver your message in a straightforward manner and do so slowly, gently, and concisely."
          },
          "synonyms": [
            "“commercials” 对应原文的 “a typical television advertisement” 与 “magazine advertisements”，即各类广告",
            "“should be simpler in their content” 同义替换为原文的 “Raymond is opposed to this”（反对堆进更多复杂信息）加上 “deliver your message in a straightforward manner and do so slowly, gently, and concisely”（以直白方式、缓慢温和简洁地传达信息）",
            "“Jane Raymond believes” 对应原文的 “Raymond is opposed to this and her advice is simple: …”，表明这是她本人的主张"
          ],
          "locatingTip": "定位：题干关键词是 Jane Raymond 的观点加上 simpler，第 5 段（E 段）整段都在讲“这对广告商意味着什么”，段末集中给出雷蒙德的建议，读到 her advice is simple 即可锁定。确定答案技巧：本题的判分点是“内容更简单”这一主张。原文先指出广告商的做法是 “cramming in even more complex information”（塞进更多更复杂的信息），紧接着说 “Raymond is opposed to this”，明确表达她反对信息复杂化；她开出的方子是 “deliver your message in a straightforward manner and do so slowly, gently, and concisely”（直白、缓慢、温和、简洁）。反对复杂、主张直白简洁，与题干“内容应当更简单”完全同向，故判 TRUE。",
          "analysis": "第 5 段（E 段）从“这对广告商意味着什么”谈起，先讲电视广告只有照顾到注意力瞬盲（attentional blink）才能被大脑接收，再讲杂志广告也有同样问题，最后落到雷蒙德的主张。定位句为：“But advertisers respond by cramming in even more complex information. Raymond is opposed to this and her advice is simple: deliver your message in a straightforward manner and do so slowly, gently, and concisely.”（但广告商的应对方式是塞进更多更复杂的信息。雷蒙德反对这种做法，她的建议很简单：以直截了当的方式传达信息，并且要缓慢、温和、简洁）。原文用 opposed to this 中的 this 回指“塞进更多复杂信息”这一行为，表明她的立场是反对复杂化；随后 advice 的内容（straightforward、slowly、gently、concisely）进一步强化“简单直接”这一主张。题干把 commercials should be simpler in their content 与之一一对应：simpler 对应 opposed to … more complex information 与 straightforward/concisely。方向一致，因此答案是 TRUE。做题提示：抽象主张题要找动词性表达（opposed to、advice is）来确认态度，而不是只找形容词，本题的判分依据正是 opposed to 这一态度动词。",
          "traps": [
            "为什么不是 FALSE：原文的 “Raymond is opposed to this” 明确反对广告塞进更多复杂信息，段末又主张直白、缓慢、简洁（straightforward、slowly、gently、concisely），与题干“内容应更简单”方向一致，不存在相反信息。",
            "为什么不是 NOT GIVEN：原文不仅复述了广告商的做法，还直接给出雷蒙德的评价（opposed to this）与建议全文（her advice is simple: …），对“她认为广告该不该更简单”这一问题有正面回答，不属于未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Advertisements showing unfamiliar brands affect a person's concentration more than ones with familiar brands.",
          "translation": "展示陌生品牌的广告对一个人注意力的影响比展示熟悉品牌的广告更大。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "But Raymond's further research also demonstrates that if people are distracted by an image or a brand when performing an intellectually demanding task, they tend to instantly dislike the brands, regardless of its emotional value."
          },
          "synonyms": [
            "“affect a person's concentration” 同义替换为原文的 “if people are distracted by an image or a brand when performing an intellectually demanding task”（在做需要智力投入的任务时被打扰，即干扰了注意力）",
            "“Advertisements showing … brands” 对应原文的 “distracted by an image or a brand”",
            "“unfamiliar brands” 与 “familiar brands” 在原文中均无对应：原文只说 “a brand”“the brands”，从未按消费者是否熟悉来给品牌分类，更没比较两者对注意力的影响"
          ],
          "locatingTip": "定位：题干关键词是 brands 与 concentration（原文用 distracted 表达），第 6 段（F 段）集中讨论“注意力与情绪、品牌偏好”的关系，读到 Raymond's further research 即可锁定定位句。确定答案技巧：本题表面上是比较题——陌生品牌的广告比熟悉品牌的广告更影响注意力，判分点在于原文有没有做这个分类和比较。回原文一看，原文只说人若在做需要智力的任务时被 image 或 a brand 打扰，就会立刻讨厌该品牌，讨论的是“被打扰会不会导致讨厌品牌”以及“与情绪价值无关（regardless of its emotional value）”，从头到尾没有出现 familiar / unfamiliar 之类的品牌熟悉度概念，也没有任何两类品牌之间的程度比较。比较的双方在原文中都不存在，属于信息缺失，因此判 NOT GIVEN。",
          "analysis": "第 6 段（F 段）讲注意力与情绪、品牌态度的关联：雷蒙德在注意力瞬盲研究之后，追问注意力是否与情绪挂钩（whether attention would be linked to other processes in the brain, particularly emotion），随后给出结论句：“But Raymond's further research also demonstrates that if people are distracted by an image or a brand when performing an intellectually demanding task, they tend to instantly dislike the brands, regardless of its emotional value.”（但雷蒙德的进一步研究还表明，如果人们在做需要智力投入的任务时被某张图片或某个品牌打扰，无论其情绪价值如何，他们往往会立刻讨厌这个品牌）。原文涉及三件事：被打扰（distracted）、任务需要智力投入（intellectually demanding task）、结果是讨厌品牌（instantly dislike），并特别强调与品牌的情绪价值无关。题干却引入了一个全新的维度——品牌是否为消费者所熟悉，并断言陌生品牌的广告对注意力的影响大于熟悉品牌。原文既没有“熟悉 / 陌生”这一分类，也没有两类品牌影响程度的比较，题干的比较关系在文中没有落脚点，因此答案是 NOT GIVEN。做题提示：判断题凡涉及“A 比 B 更如何”，都必须在原文中找到两类对象同时出现并作比较的句子；只找到一类对象（brands）时，答案通常就是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说明“被打扰会让人立刻讨厌该品牌”，没有区分品牌陌生或熟悉，也没有说明哪一类更影响注意力，缺少支撑题干的比较信息，不能选 TRUE。",
            "为什么不是 FALSE：原文既没否定“陌生品牌影响更大”，也没说熟悉品牌影响更大（反而强调 regardless of its emotional value，即品牌本身属性与结果无关），不存在相反信息，只是完全没有提及这一比较，因此判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Jane Raymond suggests that a product should be advertised in as many ways as possible.",
          "translation": "简·雷蒙德（Jane Raymond）建议一种产品应当尽可能通过多种方式做广告。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "This contradicts the more-exposure-the-better rule most of the industry follows, says Raymond, and means that advertising can backfire horribly. Advertisers tend to buy as much exposure for a product as they can, through television and radio commercials, billboards, whatever they think will attract their target audiences."
          },
          "synonyms": [
            "“advertised in as many ways as possible” 同义替换为原文的 “buy as much exposure for a product as they can, through television and radio commercials, billboards, whatever they think will attract their target audiences”",
            "“Jane Raymond suggests” 与原文的 “This contradicts … says Raymond” 相互冲突：原文说的是雷蒙德否定这一做法（contradicts），而不是她建议这么做",
            "“the more-exposure-the-better rule most of the industry follows” 表明“曝光越多越好”是行业通行的规则，作者用 contradicts 说明雷蒙德持相反立场"
          ],
          "locatingTip": "定位：题干关键词是 advertised in as many ways as possible，与之对应的是第 7 段（G 段）关于“曝光越多越好（more-exposure-the-better）”的论述，读到 more-exposure-the-better 即可锁定。确定答案技巧：本题的陷阱在于“谁主张什么”。原文里“尽可能多地曝光”明明是广告商的做法与整个行业的规则（Advertisers tend to buy as much exposure for a product as they can；the more-exposure-the-better rule most of the industry follows），而雷蒙德的态度被 contradicts 一词点明——她否定这条规则，并指出广告可能适得其反（advertising can backfire horribly），紧接着还用“吃饱了再喂就会恶心”的比喻说明信息过量会引发反感。题干却把行业规则包装成“雷蒙德的建议”，主体被调换，故判 FALSE。",
          "analysis": "第 7 段（G 段）开篇就是本题定位句：“This contradicts the more-exposure-the-better rule most of the industry follows, says Raymond, and means that advertising can backfire horribly. Advertisers tend to buy as much exposure for a product as they can, through television and radio commercials, billboards, whatever they think will attract their target audiences.”（雷蒙德说，这与业内多数人奉行的“曝光越多越好”规则相矛盾，也意味着广告可能糟糕地适得其反。广告商倾向于尽可能多地为产品购买曝光，通过电视和广播广告、广告牌，任何他们认为能吸引目标受众的方式）。原文的信息结构十分清楚：把曝光堆到极致（as much exposure … as they can）是广告商的行为与行业规则，而雷蒙德用 contradicts 明确站在它的对立面，段末还用比喻重申 “Marketers don't realize that humans digest information like they do food. Once they are full, if they are shown any more food, they're disgusted.”（营销者没意识到人消化信息就像消化食物，一旦吃饱了，再给食物只会觉得恶心）。既然原文明说雷蒙德反对“越多越好”，题干却称她建议“尽可能以多种方式做广告”，把行业规则安到她头上，属于主体与态度双重错位，因此答案是 FALSE。做题提示：观点题必须逐字核对“谁说的”，本篇仅第 3 段归 Jamie Rayner，第 1 段与第 4 段起归 Jane Raymond，而 7 段的这条规则属于 industry，不是 Raymond。",
          "traps": [
            "为什么不是 TRUE：原文中“尽可能多地购买曝光”是 advertisers 的做法和 the more-exposure-the-better rule most of the industry follows 这条行业规则，并非雷蒙德的建议；她本人以 contradicts 表明反对，还指出广告会 backfire horribly，与题干主张相反。",
            "为什么不是 NOT GIVEN：原文对雷蒙德的态度有明确交代（contradicts、can backfire horribly，末尾还有吃饱即恶心的比喻），信息不仅存在而且与题干对立，属于冲突而非缺失，不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 简答题（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "What group of consumers were specifically targeted in Jamie Rayner's research?",
          "translation": "杰米·雷纳（Jamie Rayner）的研究专门针对的是哪一类消费者群体？",
          "answer": "commuters",
          "wordClass": "名词（复数，指通勤者这一群体；原文为 particularly regular commuters，答案取核心名词 commuters，符合 NO MORE THAN THREE WORDS 限制）",
          "locating": {
            "paragraph": "3",
            "quote": "Rayner and his colleagues have measured how consumers, particularly regular commuters, react to advertising, and their conclusion should alarm many executives."
          },
          "synonyms": [
            "“specifically targeted” 同义替换为原文的 “particularly regular commuters”，particularly 表示“特别是、专门”的那一类",
            "“a group of consumers” 与原文的 “how consumers, particularly regular commuters, react to advertising” 对应，commuters 是 consumers 中被单独点出的一类",
            "“Jamie Rayner's research” 对应原文的 “Rayner and his colleagues have measured …”"
          ],
          "locatingTip": "定位：题干有专有人名 Jamie Rayner，第 3 段第 3 句直接出现 Rayner and his colleagues have measured，紧接着就点出研究对象。确定答案技巧：简答题要在原文中找“谁被测量、被研究”。原文 “particularly regular commuters” 中的 particularly（尤其是）正好对应题干的 specifically targeted（专门针对），说明被特别圈出的研究对象就是 commuters，故答案填 commuters。作答要点：答案表取的是核心名词 commuters 一个词，而 regular 只是修饰成分；不要填 consumers（那是被涵盖的更大范围，不是“专门针对”的群体），也不要抄成 commuters are regular 之类的句子。",
          "analysis": "第 3 段介绍 ID Magasin 研究总监 Jamie Rayner 的研究方法与结论，定位句为：“Rayner and his colleagues have measured how consumers, particularly regular commuters, react to advertising, and their conclusion should alarm many executives.”（雷纳和同事测量了消费者——尤其是经常通勤的人——对广告的反应，他们的结论会让许多高管感到不安）。题干问的是“研究专门针对哪一类消费者”，原文用 particularly（尤其是）把 regular commuters 从广大 consumers 中单独拎出来，恰好对应题干的 specifically targeted；逗号之间的 particularly regular commuters 是插入语，语法上是对 consumers 的进一步限定，正是命题人要考生填的那一类人。答案取核心名词 commuters（复数形式），既符合 NO MORE THAN THREE WORDS 的限制，也与原文名词形态一致。做题提示：简答题的答案必须来自原文、保持原词，不要臆造“commuters”之外的说法（如 travellers），也不要把修饰词 regular 混进答案造成冗余。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "What subject did Jane Raymond study before focusing on the behavior of consumers?",
          "translation": "简·雷蒙德（Jane Raymond）在转向研究消费者行为之前，研究的是什么学科？",
          "answer": "visual processing",
          "wordClass": "名词性短语（指一门研究领域／学科方向；由形容词 visual 加动名词 processing 构成，与原文词形一致，不可改写成动词短语）",
          "locating": {
            "paragraph": "4",
            "quote": "Her move from research in visual processing into consumer psychology began in the early 1990s when she discovered some strange behaviors in the brain's attentional system."
          },
          "synonyms": [
            "“study before focusing on the behavior of consumers” 同义替换为原文的 “Her move from research in visual processing into consumer psychology”，from … into … 表示从旧领域转入消费者心理学",
            "“the behavior of consumers” 与原文的 “consumer psychology”（消费者心理学）对应",
            "“visual processing” 在原文中作 in 的宾语，是句中“转出”的那个研究领域"
          ],
          "locatingTip": "定位：题干含专有人名 Jane Raymond 与关键词 consumers，第 4 段（D 段）开头 “Raymond thinks she knows why” 之后第 2 句讲她的学术转向，句中 from … into … 的结构就是定位标志。确定答案技巧：题干问“转向消费者研究之前研究什么”，对应原文的 move from research in visual processing into consumer psychology，from 后面是原来的领域、into 后面是转去的新领域，因此要填 from 后面的 visual processing（视觉加工）。作答要点：答案必须逐字照抄两个词 visual processing，不要写成 visual processing research、the brain 或 consumer psychology（那是她后来转入的领域，正好与题干问的相反）。",
          "analysis": "第 4 段（D 段）说明雷蒙德的学术背景与注意力瞬盲（attentional blink）的来历，定位句为：“Her move from research in visual processing into consumer psychology began in the early 1990s when she discovered some strange behaviors in the brain's attentional system.”（她在 20 世纪 90 年代初从视觉加工研究转入消费者心理学，当时她发现了大脑注意力系统中的一些奇怪现象）。句中 move from A into B 的结构把两个阶段交代得一清二楚：A 是 visual processing（她原来研究的领域），B 是 consumer psychology（她后来转入的领域，即题干所说的 the behavior of consumers）。题干问的是“之前研究什么”，答案自然落在 from 之后的 visual processing。这一步的陷阱在于：consumer psychology 与题干的 consumers 形近，容易让人误填，但它是“转去”的方向而不是“转出”的方向，方向必须看清。另外第 1 段虽已提到她是 consumer psychologist（消费者心理学家），但真正交代“此前的专业背景”的只有本段这一句。作答时保持原文两个单词的形态 visual processing 即可。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "According to the writer, what important aspect of an advertisement in print do many people fail to notice?",
          "translation": "根据作者的说法，纸质广告中哪个重要部分有很多人注意不到？",
          "answer": "secondary images",
          "wordClass": "名词短语（复数，指印刷广告中主图之外的次要图片；受形容词 secondary 修饰，保持原文复数形式 images）",
          "locating": {
            "paragraph": "5",
            "quote": "The same applies to magazine advertisements, where viewers often register the main image but fail to pick up on the secondary images—the bits advertisers often desperately want us to see."
          },
          "synonyms": [
            "“an advertisement in print” 同义替换为原文的 “magazine advertisements”（杂志广告，即纸质印刷广告）",
            "“many people fail to notice” 同义替换为原文的 “viewers often register the main image but fail to pick up on the secondary images”，fail to pick up on 与 fail to notice 同义",
            "“what important aspect” 与原文的 “the bits advertisers often desperately want us to see”（广告商拼命想让观众看到的部分）对应，说明这正是一个“重要”要素"
          ],
          "locatingTip": "定位：题干关键词 advertisement in print 与 fail to notice，落点在讨论电视广告之后转向杂志广告的那一句，标志词是 The same applies to magazine advertisements。确定答案技巧：原文先讲电视广告，再说“杂志广告也一样（The same applies to）”，随后用一个转折结构对比两种结果：viewers often register the main image（主图往往能记住）but fail to pick up on the secondary images（却注意不到次要图片）。but 之后的 fail to pick up on 正是题干的 fail to notice，其宾语 secondary images 就是答案。作答要点：必须写 secondary images 两个词，不能只写 images（丢失关键限定），也不要写 the bits（那是同位语解释，不是名词性答案）；同时注意破折号之后那句 “the bits advertisers often desperately want us to see” 起到强调“重要”的作用，印证题干中的 important。",
          "analysis": "第 5 段（E 段）讨论注意力瞬盲对广告设计的影响，先讲电视广告（the scenes in the advertisement are cut to take account of attentional blinks），再用 “The same applies to magazine advertisements”（杂志广告也一样）把话题转向纸质广告，定位句随即给出：“The same applies to magazine advertisements, where viewers often register the main image but fail to pick up on the secondary images—the bits advertisers often desperately want us to see.”（杂志广告也是如此：读者往往记住了主图，却没有注意到次要图片，而那些恰恰是广告商拼命想让我们看到的）。题干问“纸质广告中许多人注意不到的重要部分”，三个信息点都能对上：magazine advertisements 对应 an advertisement in print，fail to pick up on 对应 fail to notice，破折号后的同位语 the bits advertisers often desperately want us to see 说明这部分对广告商很重要，对应题干的 important。因此答案是被忽略的宾语 secondary images。词性上，images 为复数可数名词，被形容词 secondary 修饰，必须整体照抄，不能改成单数或省略限定词。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "According to the writer, what do companies today want their products to have in order to make consumers feel positive about themselves?",
          "translation": "根据作者的说法，如今的公司希望自己的产品具备什么，以便让消费者对自己感觉良好？",
          "answer": "emotional value",
          "wordClass": "名词短语（不可数，指品牌的情感价值；由形容词 emotional 加名词 value 构成，与原文词形一致，不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "Today, companies are hugely interested in the emotional value of their brands as they want their products to make us feel good."
          },
          "synonyms": [
            "“want their products to have” 同义替换为原文的 “are hugely interested in the emotional value of their brands”，公司对某物“极其感兴趣”即希望产品拥有它",
            "“make consumers feel positive about themselves” 同义替换为原文的 “make us feel good”（让我们感觉良好）",
            "“companies today” 直接对应原文的 “Today, companies are hugely interested …”"
          ],
          "locatingTip": "定位：题干含 Today、companies、products 三个高频实词，第 6 段（F 段）正有一句以 Today, companies 开头，定位极快。确定答案技巧：题干说公司希望产品“具备”某物，以便让消费者自我感觉良好；原文说的是公司对 “the emotional value of their brands”（其品牌的情感价值）极其感兴趣，目的是 make us feel good（让我们感觉良好）。interested in 与 want to have 在语义上对接，feel good 与 feel positive 同义，因此 the emotional value 中的 emotional value 就是答案。作答要点：注意词组为两个词 emotional value，不要写成 emotion（词性不符，空格需要被形容词修饰的名词中心语），也不要误填 good 或 brands（前者是补语、后者是载体而非所拥有的属性）。",
          "analysis": "第 6 段（F 段）探讨注意力与情绪、品牌态度的关系，定位句为：“Today, companies are hugely interested in the emotional value of their brands as they want their products to make us feel good.”（如今，公司对自家品牌的情感价值极为看重，因为他们希望产品能让我们感觉良好）。题干把原文的 are hugely interested in 改写成 want their products to have（想要产品具备），把 make us feel good 改写成 make consumers feel positive about themselves，主语 companies today 与原文的 Today, companies 完全对应，因此空格所问的“产品希望具备的东西”就是 the emotional value 这一名词短语中的 emotional value（情感价值）。词性上，value 在此为不可数名词，与形容词 emotional 构成固定搭配，答案照抄原文两词、首字母小写即可。做题提示：简答题常把原文的“对某物感兴趣／看重”改写成“希望拥有”，遇到这类态度动词改写，要找的不是动词本身，而是被看重或被拥有的那个名词短语。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "What does Jane Raymond say will annoy someone watching a film?",
          "translation": "简·雷蒙德（Jane Raymond）说，什么会让正在看电影的人感到恼火？",
          "answer": "intrusive product placement",
          "wordClass": "名词短语（三个词，指影视中强行植入的产品广告；由形容词 intrusive 加名词 product placement 构成，必须整体照抄）",
          "locating": {
            "paragraph": "6",
            "quote": "So for example, if you are reading a web page when a banner advertisement starts flashing, or are watching a film with intrusive product placement, it is probable you will come to dislike the brand, whatever it is."
          },
          "synonyms": [
            "“watching a film” 与原文的 “are watching a film with intrusive product placement” 完全对应",
            "“will annoy someone” 同义替换为原文的 “it is probable you will come to dislike the brand”（会让你渐渐讨厌这个品牌，即令人生厌、恼火）",
            "“intrusive product placement” 在原文中作 with 的宾语，是让人产生反感的那件事；intrusive（侵入性的、强加的）与题干的 annoy 在语义上呼应"
          ],
          "locatingTip": "定位：题干关键词是 watching a film，全文只出现在第 6 段（F 段）末尾的举例句中，读到 So for example 之后看到 watching a film 即可锁定。确定答案技巧：本题问“什么会让看电影的人恼火”，原文的举例把它与“看网页时弹出闪动横幅”并列，两者共同的结果是 “it is probable you will come to dislike the brand”（你很可能会开始讨厌这个品牌），这就是“恼火”的出处。再看与 watching a film 直接搭配的成分是 with intrusive product placement，即随电影而来的“强行植入式产品广告”，答案由此确定为 intrusive product placement 三个词。作答要点：必须写满三个词，不能简写成 product placement（漏掉 intrusive 会丢失“令人反感”这一关键含义，且与答案不符），也不能填 a banner advertisement（那是上网场景，不是看电影场景）。",
          "analysis": "第 6 段（F 段）的核心结论是：人在做需要智力投入的事情时被品牌或图片打扰，会立刻讨厌该品牌，与品牌的情感价值无关。末尾用两个具体场景加以说明，定位句为：“So for example, if you are reading a web page when a banner advertisement starts flashing, or are watching a film with intrusive product placement, it is probable you will come to dislike the brand, whatever it is.”（比如，如果你在看网页时横幅广告开始闪动，或者在观看一部带有强行植入产品的电影，你很可能就会开始讨厌那个品牌，不管它是什么）。题干问“什么会让看电影的人恼火”，对应结构是 watching a film with intrusive product placement：with 引导的介词短语说明电影附带的东西，即 intrusive product placement（侵入式产品植入）。原文用 come to dislike the brand 表达反感的结果，与题干的 annoy 语义相合；intrusive 一词本身也带有“令人不适、强行闯入”的贬义，与“恼火”的指向一致。词性上这是由形容词 intrusive 修饰的复合名词短语，属于 NO MORE THAN THREE WORDS 正好三词的情形，作答时三词全写、逐字照抄。注意区分并列的另一个场景 a banner advertisement（看网页时闪动的横幅广告），它不对应题干中的 watching a film。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "According to Jane Raymond, when do advertisers promote their products most fiercely?",
          "translation": "根据简·雷蒙德（Jane Raymond）的说法，广告商在什么时候最猛烈地推销产品？",
          "answer": "the holiday season",
          "wordClass": "名词短语（三个词，含定冠词 the，指节日季这一时间段；作时间状语，必须连同 the 一起照抄）",
          "locating": {
            "paragraph": "7",
            "quote": "Perhaps the most dangerous time, says Raymond, is the holiday season when advertisers are madly competing to grab people's attention."
          },
          "synonyms": [
            "“advertisers promote their products most fiercely” 同义替换为原文的 “advertisers are madly competing to grab people's attention”，madly 对应 most fiercely（最猛烈地），competing to grab attention 即激烈地推销争夺",
            "“when” 由原文的 “Perhaps the most dangerous time … is the holiday season” 给出，直接回答时间问题",
            "“According to Jane Raymond” 对应原文的 “says Raymond”，表明这是她本人的判断"
          ],
          "locatingTip": "定位：题干问时间（when），且与广告商争夺注意力有关，第 7 段（G 段）中表态句 “says Raymond, is the holiday season” 一步到位，段内其他句子都是围绕曝光量的论述。确定答案技巧：题干的关键词 most fiercely（最猛烈）要在原文里找最高级或程度副词——原文用的是 “Perhaps the most dangerous time, says Raymond, is the holiday season”（或许是广告最危险的时段，就是节日季），把最激烈的争夺放在 holiday season；随后 “when advertisers are madly competing to grab people's attention” 用 madly competing 呼应题干的 most fiercely，两处合起来锁定答案 the holiday season。作答要点：答案含定冠词 the（共三词），必须完整照抄 the holiday season，不要写成 holidays、Christmas 或 the most dangerous time（后者是题干式中对同一时间段的另一种描述，不是答案所问的时间名称）。",
          "analysis": "第 7 段（G 段）讨论“曝光越多越好”这条行业规则的危害，定位句在段落后半部分：“Perhaps the most dangerous time, says Raymond, is the holiday season when advertisers are madly competing to grab people's attention.”（雷蒙德说，或许最危险的时段是节日季，那时广告商疯狂地竞争以抓住人们的注意力）。题干问“广告商什么时候最猛烈地推销产品”，对应关系很整齐：says Raymond 对应 According to Jane Raymond；madly competing 对应 promote … most fiercely；promote their products 对应 competing to grab people's attention（争夺注意力就是为了推销产品）。句子的主干是 the most dangerous time is the holiday season，即把“最激烈的时段”指定给了节日季，因此答案是 the holiday season。作答要点有两处：一是答案包含定冠词 the，共三个词，必须完整写出 the holiday season（缺 the 会被判错）；二是不要答 the holiday season 之后的比喻内容（humans digest information like they do food）或前文的 buy as much exposure，那些都不是时间。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
