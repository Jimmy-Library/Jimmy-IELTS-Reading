(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-1056", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-1056",
  "meta": {
    "examId": "p1-low-1056",
    "title": "Assessing the risk 风险评估",
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
          "stem": "The title of the debate is not unbiased.",
          "translation": "这场辩论的标题并非不偏不倚。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "As a title for a supposedly unprejudiced debate on scientific progress, \"Panic attack: interrogating our obsession with risk\" did not bode well."
          },
          "synonyms": [
            "“not unbiased”（并非不偏不倚）与原文 “supposedly unprejudiced”（据称是不偏不倚的）构成同义对照：supposedly 意为“据称、号称”，本身即暗示名不副实，而 unprejudiced 与 unbiased 同义，题干的“并非不偏不倚”与原文的怀疑语气方向一致",
            "“the title of the debate”（辩论的标题）在原文中由具体引号内的标题名 “Panic attack: interrogating our obsession with risk” 落实，指同一件事",
            "原文的评价语 “did not bode well”（不是好兆头）对应题干的 “not unbiased”，都表达作者对该标题中立性的否定态度"
          ],
          "locatingTip": "定位：题干关键词是 title 与 unbiased。unbiased 在原文以近义词 unprejudiced 出现，且是全文唯一一处对“公正性”的评价，位于第 1 段首句，扫读文章开头即可锁定。确定答案技巧：这类“态度评价”判断题的判分关键是看作者对该事物是褒是贬。原文用 supposedly（据称）修饰 unprejudiced，本身就带保留口气，紧接的 did not bode well（不是好兆头）又直接给出负面评价，等于承认这个标题并不真正中立；题干的 not unbiased 与之一致，故选 TRUE。",
          "analysis": "第 1 段首句：“As a title for a supposedly unprejudiced debate on scientific progress, \"Panic attack: interrogating our obsession with risk\" did not bode well.”（对一场据称不偏不倚的关于科学进步的辩论来说，“恐慌发作：审视我们对风险的执迷”这个标题可不是什么好兆头）。句中 supposedly unprejudiced 是典型的“号称公正、实则未必”表达：supposedly 一词已表明作者对该辩论（及标题）的中立性持保留态度；后半句 did not bode well 更直接给出负面判断，说明作者自始就认为这个标题带有倾向。题干的 not unbiased（并非不偏不倚）正是对该态度的概括，两者语义一致，所以答案是 TRUE。注意题干用的是双重否定 not unbiased，等于说“有偏见”，刚好与原文的 supposedly（号称）+ did not bode well（预兆不佳）同向，不要被双重否定绕进去而误判为 FALSE。",
          "traps": [
            "为什么不是 FALSE：原文没有任何“标题完全中立、毫无倾向”的表述，反而用 supposedly 与 did not bode well 双重暗示其不中立；题干说它 not unbiased 与原文态度一致，不存在矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对标题是否公正有明确表态——supposedly unprejudiced 加 did not bode well，等于承认它并不真正中立，属于有信息且有明确立场的表述，不是信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "All the scientists invited to the debate were from the field of medicine.",
          "translation": "受邀参加这场辩论的所有科学家都来自医学领域。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "the event brought together scientists from across the world to ask why society is so obsessed with risk"
          },
          "synonyms": [
            "“the debate”（辩论）与原文 “the event”（活动）同义，均指在伦敦皇家研究院举办的那场讨论",
            "“scientists invited to the debate” 与原文 “scientists from across the world” 对应，原文只交代了参会者的地域来源，未涉及邀请流程",
            "“from the field of medicine”（来自医学领域）在原文中没有任何对应表达：原文只给出地域范围 across the world，从未给出学科范围"
          ],
          "locatingTip": "定位：题干的两个落点是 scientists 与 the field of medicine。科学家在第 1 段密集出现，回原文找到介绍参会者身份的那一句即可，即 “the event brought together scientists from across the world”。确定答案技巧：一见 “all … were from …”（全部来自某专业或某地）这类“全称＋身份限定”表述，就要在原文核对是否真的给出了该限定。原文只说明科学家来自世界各地，对他们的学科背景只字未提，既没有“全部来自医学界”的依据，也没有反证，属于信息缺失，故判 NOT GIVEN。",
          "analysis": "第 1 段第 2 句：“Held last week at the Royal Institution in London, the event brought together scientists from across the world to ask why society is so obsessed with risk and to call for a \"more rational\" approach.”（这场活动上周在伦敦皇家研究院举办，汇集了来自世界各地的科学家，他们要追问社会为何如此执迷于风险，并呼吁采取“更理性”的方式）。原文关于参会科学家的唯一交代是 from across the world（来自世界各地），这是地域描述，完全没有涉及专业领域；后文出现抗生素、统计数据、转基因作物等话题，但那都是辩论涉及的内容，不能据此推断参会者的学科门类。题干说“所有受邀科学家都来自医学领域”，这一身份限定在原文中既找不到依据也无法证伪，按判断题规则判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说明科学家来自世界各地，没有给出任何“全部来自医学界”的信息；全称身份判断必须有原文明确支持才可判 TRUE，本题没有这样的支持句。",
            "为什么不是 FALSE：原文并未说科学家中有人来自医学以外的领域，也未提及任何其他专业背景，不存在与题干相冲突的信息；既不确定也不否定，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The message those scientists who conducted the survey were sending was people shouldn't take risks.",
          "translation": "那些开展调查的科学家所传达的信息是：人们不应该冒险。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In short, their message was: no risk, no gain."
          },
          "synonyms": [
            "“the message those scientists were sending” 与原文 “their message was” 同义复现，都指 40 位受调查科学家的结论",
            "“people shouldn't take risks”（人不该冒险）与原文 “no risk, no gain”（不冒险就没有收获）方向相反：原文强调的是必须承担风险才有收益",
            "原文上一句列举的 “no heart surgery or antibiotics … no wheel; no \"discovery\" of America” 说明的是“不冒险会失去什么”，进一步印证 no risk, no gain 是鼓励冒险而非劝阻冒险"
          ],
          "locatingTip": "定位：题干出现 message 一词，回原文搜索 message，全文只出现在第 2 段末句 “In short, their message was: no risk, no gain.”，一步锁定。确定答案技巧：判断这类“观点复述”题，要把原文那句口号式短语读成完整逻辑——no risk, no gain 是 no pain, no gain 的变体，意思是“不冒险就没有收获”，即主张承担风险才有收益；题干却把它转述成 people shouldn't take risks（人们不应冒险），方向恰好相反，所以判 FALSE。",
          "analysis": "第 2 段讲 40 位科学家接受调查，被要求描述“如果预防原则在过去一直盛行会怎样”，他们的回答是一连串“没有心脏手术和抗生素、几乎没有药物、没有飞机和自行车、没有高压电网、没有轮子、没有发现美洲”，最后以 “In short, their message was: no risk, no gain.”（简言之，他们传达的信息是：不冒险，无收获）收束。no risk, no gain 这一格言的核心是“要想有收获就必须冒险”，即认可并接受必要的风险；而题干的 people shouldn't take risks（人们不应冒险）恰恰相反，把“要冒险才有收获”改写成“不要冒险”，是对原文信息的直接否定，因此答案是 FALSE。做题时要特别注意：这一段是作者转述科学家的观点，作者随后在第 3 段用 “They have absolutely missed the point.” 反驳，但本题问的正是“这些科学家传达的信息是什么”，所以只需按原文如实对应。",
          "traps": [
            "为什么不是 TRUE：原文的落点是 no risk, no gain（不冒险就没有收获），含义是鼓励承担必要风险，与题干“人们不应该冒险”正好相反，方向不一致，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对该信息有明确、直接的表述——their message was: no risk, no gain，信息完整且方向鲜明，只是与题干相反，按规则判 FALSE 而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "All the 40 listed technologies are riskier than other technologies.",
          "translation": "这 40 项被列出的技术都比其他技术风险更高。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Clearly, all the technologies listed by the 40 well-chosen savants were innately risky at their inception, as all technologies are."
          },
          "synonyms": [
            "“the 40 listed technologies” 与原文 “all the technologies listed by the 40 well-chosen savants” 对应，指同一批技术",
            "“riskier than other technologies”（比其他技术更危险）与原文 “innately risky at their inception, as all technologies are”（诞生之初就天生有风险，所有技术都如此）不一致：原文只给“有风险”这一属性，并强调这是所有技术的共性，并未做“更危险”的比较",
            "单词 risky（有风险的）只对应题干的 riskier（更冒险的）中的词根，比较级所含的对比关系在原文中找不到依托"
          ],
          "locatingTip": "定位：题干里的数字 40 是全文最有辨识度的定位词——它出现在第 2 段（40 位科学家），也出现在第 4 段 “all the technologies listed by the 40 well-chosen savants”，而“列出技术”这一动作只在第 4 段出现，因此锁定第 4 段首句。确定答案技巧：遇到含比较级的题（riskier than）一定要回原文找“对比对象”。原文说这些技术 innately risky at their inception, as all technologies are，即“像所有技术一样天生带风险”，只给了“有风险”这一属性；题干却凭空加入 riskier than other technologies 的比较，原文既没有危险的量化排序，也没有把名单中的技术与“其他技术”作比，比较关系无据可依，属信息缺失，故判 NOT GIVEN。",
          "analysis": "第 4 段首句：“Clearly, all the technologies listed by the 40 well-chosen savants were innately risky at their inception, as all technologies are.”（显然，这 40 位精心挑选的学者所列出的所有技术在诞生之初都天然带有风险，所有技术都是如此）。这句话只给出两点信息：这些技术确有风险；而这种风险是普遍现象，所有技术都如此。题干却加入比较结构 riskier than other technologies，把“有风险”升级为“比别的技术更危险”。原文用 as all technologies are 恰恰强调风险是共性、并非这些技术独有，谈不上“风险更高”；但原文也从未给出任何量化比较来说明它们“并不更危险”，正反两方面都没有可依据的对比信息，所以属于信息缺失，判 NOT GIVEN。结合第 3 段 “Of course you can make no progress without risk.” 可知，作者本意是“有风险才有收益”，讨论的是要不要冒险，而不是风险的横向排名。",
          "traps": [
            "为什么不是 TRUE：原文只说这些技术 innately risky（天生有风险），并强调所有技术都如此，没有任何“比其他技术更危险”的比较信息，无法支撑题干的比较级结论。",
            "为什么不是 FALSE：原文并没有说它们与其他技术一样危险或更安全，只是没有做比较。缺少相反证据就不能判 FALSE，应按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "It was worth taking the risks to invent antibiotics.",
          "translation": "为了发明抗生素而承担风险是值得的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Of course antibiotics were a priority. Of course, the risks, such as they could be perceived, were worth taking."
          },
          "synonyms": [
            "“It was worth taking the risks” 与原文 “the risks … were worth taking” 几乎原词复现，worth taking 完全一致",
            "“to invent antibiotics” 与原文 “antibiotics were a priority”（抗生素是当务之急）对应，说明当时优先推进的正是抗生素的研制",
            "原文的 “Of course” 双重语气强化了题意中的肯定判断，与题干陈述的“值得”态度一致"
          ],
          "locatingTip": "定位：题干的核心词组是 worth taking the risks，回原文搜索 worth，全文只在第 6 段末句出现：“Of course, the risks, such as they could be perceived, were worth taking.” 一步到位。确定答案技巧：这类“是否值得”的评价类判断题，只要原文出现同向表述即可判 TRUE。原文连用两个 Of course 表达强烈肯定——抗生素是优先事项，风险值得承担；题干只是把 were worth taking 改成 It was worth taking，句式稍变而语义不变，因此判 TRUE。",
          "analysis": "第 6 段整段只有三句：“Penicillin was turned into a practical drug during the Second World War when the many pestilences that result from war threatened to kill more people than the bombs. Of course antibiotics were a priority. Of course, the risks, such as they could be perceived, were worth taking.”（二战期间，战争带来的各类瘟疫有可能比炸弹杀死更多人，青霉素因此被转化为实用药物。抗生素当然是优先事项。当然，就当时所能预见的程度而言，这些风险是值得承担的）。原文与题干高度重合：the risks … were worth taking 与 It was worth taking the risks 语义完全一致，只是由名词短语作主语改为形式主语 It；antibiotics 在原文中直接出现（antibiotics were a priority），说明承担风险的目的是推进抗生素的应用。作者用 Of course 双重强调，态度明确肯定，所以答案是 TRUE。句中 “such as they could be perceived”（就当时所能预见的情形而言）是限定语，说明评价基于当时认知，不影响“值得”的结论。",
          "traps": [
            "为什么不是 FALSE：原文明确写出 the risks … were worth taking，与题干“为了发明抗生素而承担风险是值得的”方向完全一致，不存在相反信息，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对“风险是否值得”给出了直接而肯定的判断，并交代了抗生素的优先地位（antibiotics were a priority），信息充分且有明确立场，不属于未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "All the other inventions on the list were also judged by the precautionary principle.",
          "translation": "名单上所有其他发明也同样被预防原则评判过。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "But this is just plain wrong. If the precautionary principle had been applied properly, all these creations would have passed muster, because all offered incomparable advantages compared to the risks perceived at the time."
          },
          "synonyms": [
            "“All the other inventions on the list” 与原文 “the other items on the scientists' list” 以及下文的 “all these creations” 对应，指电灯泡、输血、CAT 扫描、刀具、麻疹疫苗等",
            "“were judged by the precautionary principle”（被预防原则评判并因此受阻）与原文 “would have passed muster”（本会通过检验）相反：原文说正确适用时它们都会获通过，科学家“会被阻止”的说法被作者判为 “just plain wrong”（完全错误）",
            "“the precautionary principle … had been applied properly” 中的 properly 与题干的“被评判”形成对照：只有错误适用才会拦下这些发明，正确适用则全部通过"
          ],
          "locatingTip": "定位：题干关键词是 the other inventions on the list，回原文找列举“科学家的名单上其他项目”的地方，即第 7 段开头（electric light bulbs, blood transfusions, CAT scans, knives, the measles vaccine），紧随其后的评价句就是本题落点。确定答案技巧：第 7 段先转述科学家的说法（“预防原则会阻止它们”），紧接着用 “But this is just plain wrong.” 一举推翻，并给出正确版本——若原则被正确应用，这些创造都会 passed muster（通过检验）。题干把被作者否定的主张当作既定事实来陈述，因此判 FALSE。",
          "analysis": "第 7 段写道：“And so with the other items on the scientists' list: electric light bulbs, blood transfusions, CAT scans, knives, the measles vaccine – the precautionary principle would have prevented all of them, they tell us. But this is just plain wrong. If the precautionary principle had been applied properly, all these creations would have passed muster, because all offered incomparable advantages compared to the risks perceived at the time.”（名单上的其他项目——电灯泡、输血、CAT 扫描、刀具、麻疹疫苗——科学家们告诉我们，预防原则本会阻止其中每一项。但这完全错了。若预防原则被正确应用，所有这些创造都会通过检验，因为它们带来的好处与当时所能察觉的风险相比不可同日而语）。题干声称“名单上所有其他发明也都被预防原则评判过”，即它们确实被这一原则衡量并因此受阻。原文对这种说法给出明确否定：they tell us 之后紧跟 But this is just plain wrong，并说明正确适用原则时它们都会通过检验。也就是说，题干所依据的说法在原文中是被推翻的错误主张，答案判 FALSE。注意原文的 they tell us 是作者转述他人观点的标记：被转述的是科学家的主张，作者自己的立场在紧随其后的否定句与 “would have passed muster” 里。",
          "traps": [
            "为什么不是 TRUE：原文对“预防原则会阻止这些发明”这一说法给出直接否定（But this is just plain wrong），并指出正确应用时它们都会通过检验；题干却把这一被否定的说法当作事实，方向相反。",
            "为什么不是 NOT GIVEN：原文不仅列举了名单上的其他项目，还明确评判了“它们被预防原则衡量并受阻”这一说法的是非，信息完整且立场鲜明，不是未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 摘要填空题（Summary Completion，NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "When applying the precautionary principle to decide whether to invent a new technology, people should also take into consideration the 7 ________",
          "translation": "在应用预防原则来决定是否研发一项新技术时，人们还应考虑 ________（第 7 空）。",
          "answer": "consumer's right",
          "wordClass": "名词短语（由所有格 consumer's 加名词 right 构成，两个词；作 take into consideration 的宾语；空格前已有定冠词 the，答案本身不带冠词；right 用单数，与原文 the consumer's right to choose 一致）",
          "locating": {
            "paragraph": "8",
            "quote": "In deciding whether to pursue the development of new technology, the consumer's right to choose should be considered alongside considerations of risk and benefit."
          },
          "synonyms": [
            "“take into consideration” 与原文 “should be considered”（应被考虑）同义，只是由被动语态改写为主动短语",
            "“the consumer's right” 对应原文 “the consumer's right to choose”，答案取核心名词短语 consumer's right（两个词，未超三词限制）",
            "“to decide whether to invent a new technology” 与原文 “In deciding whether to pursue the development of new technology” 对应，new technology 原词复现"
          ],
          "locatingTip": "定位：摘要开头的关键词是 precautionary principle 与 consumer，回原文扫读 consumer，只在第 8 段成串出现（A crucial issue is the consumer's choice / the consumer's right to choose），可直接跳到该段。确定答案技巧：摘要句说“除了通常要考虑的 8 之外还应考虑 7”，原文对应句是 “In deciding whether to pursue the development of new technology, the consumer's right to choose should be considered alongside considerations of risk and benefit.”，其中 alongside 后面的 considerations of risk and benefit 正是“通常考虑的 8”，而 alongside 之前被“额外”提出的 the consumer's right to choose 就是第 7 空。作答时取核心名词短语 consumer's right，不必抄 to choose（否则超词），也不要漏掉所有格。",
          "analysis": "第 8 段是全文论点的转折处，核心句为：“In deciding whether to pursue the development of new technology, the consumer's right to choose should be considered alongside considerations of risk and benefit.”（在决定是否推进一项新技术的开发时，消费者的选择权应当与风险和收益的考量一并被考虑）。摘要把这句话重排成“除通常要考虑的 X 之外，还应考虑 Y”的结构：alongside 后面的 considerations of risk and benefit 即摘要中“通常考虑的”那部分（第 8 空），而 alongside 之前的 the consumer's right to choose 正是被额外强调的一项，对应第 7 空。语法上空格是 take into consideration 的宾语，需要名词性成分；原文用 the consumer's right to choose，答案取其核心 consumer's right（consumer's 与 right 两词，符合 NO MORE THAN THREE WORDS 限制）。同段前句 “A crucial issue is the consumer's choice.” 也印证这一层意思：作者认为消费者是否“自愿选择”承担风险，比单纯计算风险与收益更关键，所以在常规考虑之外要补上这一条。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "along with the usual consideration of 8 ________",
          "translation": "以及通常对 ________（第 8 空）的考量。",
          "answer": "risk and benefit",
          "wordClass": "名词（并列名词短语，作介词 of 的宾语，指风险评估中的两个常规维度；保持原文形式，用 and 连接，不加 s、不加冠词）",
          "locating": {
            "paragraph": "8",
            "quote": "the consumer's right to choose should be considered alongside considerations of risk and benefit."
          },
          "synonyms": [
            "“the usual consideration of” 与原文 “considerations of” 同义，usual（惯常的）对应原文 alongside，表示这是原本就在考虑的常规因素",
            "“risk and benefit” 与原文 “risk and benefit” 原词复现，指风险与收益两个并列维度",
            "“along with” 与原文 “alongside” 对应，都表示“与……一并”"
          ],
          "locatingTip": "定位：本题与第 7 题同出一句，仍在第 8 段。确定答案技巧：摘要用 along with 把第 8 空定位成“常规因素”，原文该句句尾的 alongside considerations of risk and benefit 恰好给出两个并列名词 risk and benefit，与空格前的 “the usual consideration of …” 语法吻合（介词 of 后接名词性成分），故填 risk and benefit。三个词正好卡在 NO MORE THAN THREE WORDS 上限：risk、and、benefit，必须两个都写，只写 risk 或 benefit 都不完整；也不要把答案改成复数 risks and benefits（答案表用单数原形）。",
          "analysis": "承第 7 题，原文 “the consumer's right to choose should be considered alongside considerations of risk and benefit” 中 alongside 意为“与……一并、除……之外还要”，其后的 considerations of risk and benefit 即摘要里“通常考虑的”那一部分，因此第 8 空填 risk and benefit。语法上空格前是介词 of，需要名词性成分，risk and benefit 正是一个并列名词短语；词数上 risk（一）+ and（一）+ benefit（一）恰好三词，符合限制。这里的逻辑层次是：作者承认风险与收益的权衡一直是常规做法（the usual consideration），但主张在此之外还要加入“消费者的选择权”。第 7、8 两空出自原文同一句话，答题时要把 alongside 前后的两个成分分别对号入座，避免把 consumer's right 与 risk and benefit 填反——判断依据是 consumer's right 是作者新提出的、被强调的“另加项”，而 risk and benefit 属“历来如此”的常规项。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "For example, though risky and dangerous enough, people still enjoy 9 ________ for the excitement it provides.",
          "translation": "例如，尽管足够冒险和危险，人们仍然享受 ________（第 9 空）所带来的刺激。",
          "answer": "skiing",
          "wordClass": "名词（此处为动名词性质的活动名称，作 enjoy 的宾语；不可数用法，保持不可数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "8",
            "quote": "Clearly, skiing is more dangerous than genetically modified tomatoes. But people who ski choose to do so"
          },
          "synonyms": [
            "“risky and dangerous enough” 与原文 “skiing is more dangerous than genetically modified tomatoes” 对应，原文用 more dangerous 的比较级给出“更危险”的评价",
            "“people still enjoy …” 与原文 “people who ski choose to do so”（滑雪的人是自愿去滑的）对应，说明是人们主动选择并乐于参与",
            "“for the excitement it provides” 与原文 “skiing, I am told, is exhilarating”（据说滑雪令人极度兴奋）同义，exhilarating 与 excitement 词根相同"
          ],
          "locatingTip": "定位：摘要用 for example 引出一个具体例子，并给出“冒险又危险”的评价，回第 8 段找带例证性质的句子，即 “Clearly, skiing is more dangerous than genetically modified tomatoes.”，例子的主角 skiing 就是答案所在。确定答案技巧：确定空格要两条证据合看——一是原文用 more dangerous 承认滑雪的风险，对应摘要的 risky and dangerous enough；二是后文 “Even with skiing, there is the matter of cost-effectiveness to consider: skiing, I am told, is exhilarating.”，说明人们明知危险仍参与，因为滑雪令人兴奋（exhilarating 对应题干的 excitement）。两条线索都指向同一个活动名词 skiing。作答时只写 skiing 一词，不要写 ski、skiing itself 等变形。",
          "analysis": "第 8 段用滑雪作类比论证：“Clearly, skiing is more dangerous than genetically modified tomatoes. But people who ski choose to do so; they do not have skiing thrust upon them by portentous experts of the kind who now feel they have the right to reconstruct our crops. Even with skiing, there is the matter of cost-effectiveness to consider: skiing, I am told, is exhilarating.”（显然，滑雪比转基因番茄更危险。但滑雪的人是自愿去滑的，不是被那些自以为有权改造我们作物的自命不凡的专家强加的。即便是滑雪，也有成本效益要衡量：据说滑雪令人极度兴奋）。摘要的 “though risky and dangerous enough” 对应原文 more dangerous 的评价；“people still enjoy …” 对应 people who ski choose to do so（自愿参与、乐在其中）；“for the excitement it provides” 对应 skiing is exhilarating。因此空格填 skiing。词性上它是表示活动的不可数名词，作 enjoy 的宾语，既不加冠词也不变复数，填一个词 skiing 即可。这一段的论证目的是说明“是否危险”不是唯一标准，消费者的自主选择同样重要，因此作者特意选了滑雪这一“危险但让人自愿去享受”的例子。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "On the other hand, experts believe that future population desperately needs 10 ________ in spite of their undefined risks.",
          "translation": "另一方面，专家们认为未来人口迫切需要 ________（第 10 空），尽管其风险尚未明确。",
          "answer": "GM crops",
          "wordClass": "名词短语（缩写 GM 加复数名词 crops，作 needs 的宾语；保持复数形式 crops，缩写字母大写）",
          "locating": {
            "paragraph": "9",
            "quote": "Promoters of GM crops believe that the future population of the world cannot be fed without them."
          },
          "synonyms": [
            "“experts” 与原文 “Promoters of GM crops”（转基因作物的推动者）对应，指支持这一技术的一方",
            "“desperately needs” 与原文 “cannot be fed without them”（没有它们就养不活）对应，是“极度离不开”的同义改写",
            "“in spite of their undefined risks” 与原文 “Some of the risks can at least be defined.” 呼应：原文说风险“至多也只能部分界定”，正说明其风险尚未明确"
          ],
          "locatingTip": "定位：摘要此句出现“未来人口”与“专家相信”，回第 9 段搜索 future population，命中全篇唯一一句 “Promoters of GM crops believe that the future population of the world cannot be fed without them.” 确定答案技巧：题干用“未来人口迫切需要 X”的正面表述，原文用“没有 X 就养不活未来人口”的否定表述，X 就是句中 them 所指的 GM crops；再看风险线索，上文 “GM crops stand out as an example of a technology whose benefits are far from clear” 与下句 “Some of the risks can at least be defined.” 正对应题干的“风险尚未明确”。答案是两个词 GM crops，须写全、保留复数，不能只写 GM 或 crops。",
          "analysis": "第 9 段集中讨论转基因作物：“Indeed, in contrast to all the other items on Spiked's list, GM crops stand out as an example of a technology whose benefits are far from clear. Some of the risks can at least be defined. But in the present economic climate, the benefits that might accrue from them seem dubious. Promoters of GM crops believe that the future population of the world cannot be fed without them. That is untrue.”（与名单上其他项目不同，转基因作物是一例好处远不明朗的技术。部分风险至少还能界定。但在当前经济环境下，它可能带来的好处显得可疑。转基因作物的推动者认为，没有它们就无法养活世界未来的人口。这是不实的）。摘要句的 experts believe 对应 Promoters of GM crops believe；future population desperately needs 对应 the future population of the world cannot be fed without them，其中 them 回指 GM crops；“in spite of their undefined risks” 则对应上文 Some of the risks can at least be defined（风险至多只能界定一部分）。答案写 GM crops，保留复数与缩写字母大写。注意作者紧接着用 That is untrue 否定了这一说法，但本题只需还原摘要所转述的“专家观点”，因此填 GM crops 而不是因为作者反对就另选他词。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "However, the research conducted so far has not been directed towards increasing the yield of 11 ________",
          "translation": "然而，迄今为止的研究并没有以提高 ________（第 11 空）的产量为目标。",
          "answer": "wheat and rice",
          "wordClass": "名词短语（并列名词 wheat 加 rice，作介词 of 的宾语，指两类主粮作物；均为不可数名词，用 and 连接，不加 s、不加冠词）",
          "locating": {
            "paragraph": "9",
            "quote": "The crops that really matter are wheat and rice, and there is no GM research in the pipeline that will seriously affect the yield of either."
          },
          "synonyms": [
            "“the research conducted so far” 与原文 “there is no GM research in the pipeline”（在研的转基因研究中没有任何一项）对应，in the pipeline 即“在研、尚未落地”",
            "“has not been directed towards increasing the yield” 与原文 “there is no GM research … that will seriously affect the yield” 在“并未以提高产量为目标”这一点上一致，原文用否定句式说明现有研究都不会实质影响其产量",
            "“the yield of” 与原文 “the yield of either” 原词复现，either 回指并列的 wheat and rice 两项"
          ],
          "locatingTip": "定位：题干的关键信息是“研究没有针对提高……的产量”，回第 9 段搜索 yield，全篇只有一句含该词：“The crops that really matter are wheat and rice, and there is no GM research in the pipeline that will seriously affect the yield of either.” 确定答案技巧：先看 either 的指代——它回指前半句并列的 wheat and rice，因此“产量”指的是这两种作物的产量；再看否定信息 there is no GM research in the pipeline that will seriously affect the yield，即现有在研项目都不会真正影响这两种作物的产量，与题干“研究并非以增产为目标”吻合。答案是 wheat and rice，三词正好在词数上限，务必两个都写，且保持不可数形式不加 s。",
          "analysis": "第 9 段中段写道：“Promoters of GM crops believe that the future population of the world cannot be fed without them. That is untrue. The crops that really matter are wheat and rice, and there is no GM research in the pipeline that will seriously affect the yield of either.”（推动者认为没有转基因作物就养不活未来人口，这是不实的。真正重要的作物是小麦和水稻，而在研的转基因研究中没有任何一项会显著影响这两种作物中任何一种的产量）。原文先点明真正重要的作物是 wheat and rice，再用否定句式说明现有研究对它们的产量影响甚微，也就是“研究并没有以提高它们的产量为目标”。摘要的 the yield of 与原文 the yield of either 对应，either 表示“两者中的任何一个”，正好回指 wheat and rice，所以空格必须把两者都写上。语法上 of 后接名词性成分，wheat 与 rice 都是不可数名词，既不加冠词也不变复数；词数恰好三个，符合 NO MORE THAN THREE WORDS 的要求。本题与上一题的 They 指代问题是同一考点：读摘要题时务必回到原文确认代词与数量的指向。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "but to reduce the cost of 12 ________ and to bring more profit out of it.",
          "translation": "而是为了降低 ________（第 12 空）的成本，并从中获取更多利润。",
          "answer": "production",
          "wordClass": "名词（不可数抽象名词，作介词 of 的宾语，指生产环节；保持不可数形式，不加冠词、不变复数）",
          "locating": {
            "paragraph": "9",
            "quote": "GM is used to make production cheaper and hence more profitable, which is an extremely questionable ambition."
          },
          "synonyms": [
            "“to reduce the cost of production” 与原文 “make production cheaper” 对应，cheaper 即“更便宜、花费更低”，题干把它还原为“降低成本”这一动作",
            "“to bring more profit out of it” 与原文 “hence more profitable”（因而更有利可图）对应",
            "“GM” 与原文 “GM is used to” 对应，说明降低成本、追求利润的主体仍是转基因技术"
          ],
          "locatingTip": "定位：题干的关键词是 cost 与 profit，回第 9 段找末句 “GM is used to make production cheaper and hence more profitable, which is an extremely questionable ambition.”，cheaper 与 more profitable 同句并列，正是“降低成本、增加利润”的对应句。确定答案技巧：题干用 reduce the cost of [12] 把原文的形容词比较级 cheaper 还原成“降低成本”，被降成本的对象就是 make 的宾语 production，所以空格填 production。注意 of 后要名词，production 是不可数名词，不加冠词、不变复数；不要填 GM（那是句子主语，不是被降成本的对象），也不要填 profit（那是并列的另一结果）。",
          "analysis": "第 9 段末句：“GM is used to make production cheaper and hence more profitable, which is an extremely questionable ambition.”（转基因被用来让生产更便宜、从而更有利可图，这是一种极其可疑的企图）。摘要句使用 “not … but to” 的对比结构：前半句“并没有以提高小麦和水稻的产量为目标”对应原文 there is no GM research in the pipeline that will seriously affect the yield of either；后半句“而是为了降低……的成本、并获取更多利润”对应 make production cheaper and hence more profitable。make production cheaper 中的宾语 production 就是被降低成本的对象，对应空格；hence more profitable 与 to bring more profit out of it 同义。答案 production 为不可数名词，直接取原形。段末的 questionable ambition 还呼应了摘要隐含的批评语气：作者认为以提高利润为动机的转基因研究方向可疑。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "In the end, such selfish use of the precautionary principle for business and political gain has often led people to 13 ________ science for they believe scientists are not to be trusted.",
          "translation": "最终，这种为商业和政治利益而自私地利用预防原则的做法，常常使人们对科学 ________（第 13 空），因为他们认为科学家不值得信任。",
          "answer": "mistrust",
          "wordClass": "动词（原形；用于 lead sb. to do sth. 结构，作不定式宾补的 do，因此用原形，不加 -s、不加 -ed）",
          "locating": {
            "paragraph": "10",
            "quote": "People at large continue to mistrust science and the high technologies it produces partly because they doubt the wisdom of scientists."
          },
          "synonyms": [
            "“led people to mistrust science” 与原文 “People at large continue to mistrust science” 对应，都表示大众对科学不再信任",
            "“for they believe scientists are not to be trusted” 与原文 “partly because they doubt the wisdom of scientists”（部分原因是他们怀疑科学家的智慧）对应，都是“不信任”的成因说明",
            "“such selfish use of the precautionary principle for business and political gain” 与原文 “misrepresent such a principle for the purposes of commercial and political propaganda”（为商业与政治宣传而曲解该原则）对应"
          ],
          "locatingTip": "定位：题干的信息落点是“人们对科学的态度”以及原因“不信任科学家”，回最后一段（第 10 段）搜索，命中 “People at large continue to mistrust science and the high technologies it produces partly because they doubt the wisdom of scientists.” 确定答案技巧：题干用的是 has led people to [13] 这一 lead sb. to do 结构，空格必须是动词原形，而原文对应的动词正是 mistrust；同段前句 misrepresent such a principle for the purposes of commercial and political propaganda 与题干的 “selfish use of the precautionary principle for business and political gain” 一一对应，因果链完整。注意填原形 mistrust，不能写 mistrusts 或 mistrusted；答案表即为 mistrust。",
          "analysis": "第 10 段（末段）写道：“We have come to a sorry pass when scientists, who should above all be dispassionate scholars, feel they should misrepresent such a principle for the purposes of commercial and political propaganda. People at large continue to mistrust science and the high technologies it produces partly because they doubt the wisdom of scientists. On such evidence as this, these doubts are fully justified.”（当本应首先是冷静学者的科学家们觉得自己可以为商业和政治宣传而曲解这样一个原则时，我们已经落到可悲的地步。大众继续不信任科学及其所产生的高技术，部分原因正是他们怀疑科学家的智慧。就这样的证据而言，这些怀疑完全有道理）。摘要把这套因果压缩成一句：such selfish use of the precautionary principle for business and political gain（为商业和政治利益而曲解该原则）导致 people 对 science 的 mistrust，而 for they believe scientists are not to be trusted 对应 partly because they doubt the wisdom of scientists。由于题干使用 has led people to [13] 的“lead sb. to do”结构，空格处必须用动词原形 mistrust，与主句的完成时 has led 相配，不能写成第三人称单数或过去式。同段末句 these doubts are fully justified 也是第 14 题主旨题的定位依据。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Question 14 单选题（主旨大意）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 14
      },
      "items": [
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "What is the main theme of the passage?",
          "translation": "这篇文章的主题是什么？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "10",
            "quote": "People at large continue to mistrust science and the high technologies it produces partly because they doubt the wisdom of scientists. On such evidence as this, these doubts are fully justified."
          },
          "synonyms": [
            "“People have the right to doubt science and technologies” 中的 have the right to doubt 与原文 “these doubts are fully justified”（这些怀疑完全有道理）对应，justified 即“有正当理由的”",
            "“doubt science and technologies” 与原文 “mistrust science and the high technologies it produces” 对应，doubt 与 mistrust 同义，technologies 对应 the high technologies",
            "“People” 与原文 “People at large”（大众）对应，主语范围一致"
          ],
          "locatingTip": "定位：主旨题应看首尾段的观点句。全文最后一段是作者立场的落点，其中 “People at large continue to mistrust science …” 与 “these doubts are fully justified” 明确表态：公众对科学的不信任是有道理的，这正是选项 A 的内容，也与第 1 段作者质疑辩论标题“名义上公正”的态度首尾呼应。确定答案技巧：主旨题不能只抓个别段落的细节，要先把全文主线梳理清楚，再逐项核对选项是否覆盖全文方向。本文主线为：作者批评科学家把预防原则曲解为“禁止一切风险”，并用抗生素、滑雪、转基因作物等例子说明风险应结合收益与选择权来衡量，最终指出科学家为商业与政治利益曲解原则，反而使公众更有理由不信任科学。只有 A 能收拢所有段落的方向，B、C、D 或只取片段，或恰为原文否定的说法，故答案是 A。",
          "analysis": "全文脉络：开头（第 1 段）作者就质疑 “Panic attack” 这场辩论的标题并不真正公正；第 2 至 7 段驳斥“预防原则会让抗生素、电灯泡、疫苗接种等一切发展停摆”的论调，指出真正按成本效益与收益衡量，这些技术都会通过检验，抗生素的风险也是值得承担的；第 8 段引入“消费者的选择权”，以滑雪为例说明“是否危险”不是唯一标准；第 9 段批评转基因作物“好处不明、为求利润而不实宣传”，指出没有在研项目能提高小麦和水稻的产量；末段（第 10 段）总结立场：科学家为商业与政治宣传曲解预防原则，使大众持续不信任科学，而这种怀疑完全有道理（these doubts are fully justified）。因此文章的主旨落在“公众对科学与技术的怀疑是有正当理由的”，与选项 A “People have the right to doubt science and technologies”（人们有权怀疑科学与技术）完全吻合，故选 A。",
          "traps": [
            "为什么不是 B：选项 B 说预防原则本会阻止科学与技术的发展，这正是第 7 段所转述、并被作者判为 just plain wrong 的说法（原文紧接着给出 “If the precautionary principle had been applied properly, all these creations would have passed muster”），是文章批驳的对象，不可能是主旨。",
            "为什么不是 C：选项 C 说真正理解预防原则的人太少。原文确实批评有人误用该原则（第 3 段 “They have absolutely missed the point.”，第 10 段 misrepresent），但作者的重点不在“理解者数量的多寡”，全文也没有任何关于人数或普及程度的论述，属以偏概全的细节，不能选。",
            "为什么不是 D：选项 D 说预防原则要求我们不惜一切代价冒险。原文第 3 段明确指出该原则包含成本效益观念，强调“若没有明显收益，就不要冒这个险”，与“不惜代价冒险”正好相反，故排除。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
