(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-low-08", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-low-08",
  "meta": {
    "examId": "p2-low-08",
    "title": "How the Petri dish supports scientific advances 培养皿",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–19 段落信息匹配（Which section contains the following information，A–F）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 19
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "a description of an experiment involving both human and non-human cells of a specific type",
          "translation": "对一项同时涉及人类细胞与非人类细胞、且细胞属于同一特定种类的实验的描述。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "They use between 50 and 150 Petri dishes every day to grow mouse liver and human liver cells, in order to study how the liver can regenerate itself."
          },
          "synonyms": [
            "“both human and non-human cells” 对应原文并列出现的 “mouse liver and human liver cells”：mouse（小鼠）代表非人类来源，human（人类）代表人类来源，两种细胞同属 liver cell（肝细胞）这一特定种类",
            "“a description of an experiment” 同义替换为原文的 “They use between 50 and 150 Petri dishes every day to grow …”，即对实验操作与用量的具体交代",
            "“of a specific type” 同义替换为原文两处并置的 “liver” 一词，说明两种细胞是同一类型而非泛泛的生物细胞",
            "原文 “in order to study how the liver can regenerate itself” 进一步说明该操作是研究性实验，与题干 experiment 对应"
          ],
          "locatingTip": "定位：段落信息匹配题不要从 A 段开始顺读，而要先圈出题干中唯一性最强的核心概念。本题的关键词是 both human and non-human cells of a specific type，其中“human（人类）加另一种生物”的组合非常独特，全文只有一处把人类细胞与动物细胞放在同一句里。确定答案技巧：扫描各段寻找同时出现两种来源细胞的句子，D 段的 mouse liver and human liver cells 恰好满足“一种人类细胞加一种非人类细胞，且都是肝细胞”的全部条件；再回看 D 段首句 “‘Disease in a dish’ is also the focus of Dr Meritxell Huch's team”，可知该段通篇在讲 Huch 团队关于肝细胞再生机制的实验，与题干 a description of an experiment 完全吻合，故答案选 D。",
          "analysis": "D 段由三部分组成：首句点题（Huch 团队的“培养皿中的疾病”研究），第二句说明材料与方法（每天用 50 到 150 个培养皿，培养小鼠肝细胞与人类肝细胞，目的是研究肝脏如何自我再生），后面引述 Huch 对再生三个阶段的划分。题干可拆成三个信息点：①“a description of an experiment”指对某项实验的描述；②“both human and non-human cells”要求同时涉及人类与非人类细胞；③“of a specific type”要求这两类细胞属于同一特定种类。回到原文，只有 D 段第二句 “They use between 50 and 150 Petri dishes every day to grow mouse liver and human liver cells, in order to study how the liver can regenerate itself.” 同时满足三点：mouse liver cells 是 non-human，human liver cells 是 human，并且两者都是 liver cells（同一 specific type）。C 段虽然也讲实验，但它的实验对象（stem cells 与脂肪肝疾病）通篇是人类细胞，缺少非人类来源的细胞；E 段的 mini-brains 只讲神经元与脑结构，B 段与 F 段不涉及具体实验用料。因此本题答案是 D。注意本题的判定不依赖“实验”这个词本身，而依赖 human 与 non-human 两种细胞在同一句中的并置，这是段落匹配题最典型的“找唯一组合”思路。",
          "traps": [
            "为什么不是 C：C 段虽然也描述了实验（学生用培养皿观察抗生素下细菌能否生长、Vallier 团队培养干细胞与肝细胞），但涉及的细胞来源都是人类的干细胞与肝细胞，没有出现与人类细胞相对的非人类细胞，缺少题干 both human and non-human 这一硬条件。",
            "为什么不是 E：E 段讲的是用培养皿培养 mini-brains（微型脑），材料是神经元，且重点在于让细胞在三维而非二维中生长，并未提到同时培养人类与非人类的同种细胞。",
            "为什么不是 F：F 段是研究目标与展望（比较人类与其他物种神经元生成方式的差异），只提到 different species 这一研究问题，并没有描述任何实际的实验用料或实验过程。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "possibilities for improved research into various medical conditions",
          "translation": "多种疾病研究得以改进的可能性（研究前景）。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "One day, says Lancaster, this work could translate into understanding far more about Alzheimer's disease, Parkinson's and schizophrenia."
          },
          "synonyms": [
            "“possibilities” 同义替换为原文的 “One day … could translate into …”，即对未来可能性的展望",
            "“improved research into various medical conditions” 同义替换为原文的 “understanding far more about …”，研究上的“更深入理解”即研究得以改进",
            "“various medical conditions” 同义替换为原文列举的 “Alzheimer's disease, Parkinson's and schizophrenia”，三种疾病即多种病症",
            "“this work” 回指原文的神经元研究，与题干中培养皿所支撑的研究相对应"
          ],
          "locatingTip": "定位：题干的关键是“疾病名称的列举加未来展望”，医学专有名词 Alzheimer's、Parkinson's、schizophrenia 是全文辨识度最高的词，直接扫读大写开头的病名即可一步跳到 F 段第二句。确定答案技巧：题干说“多种疾病研究的改进可能性”，对应原文必须同时具备“多种疾病”和“语气上表示可能性”这两个特征。F 段用 One day（有一天）加 could translate into（有望转化为）表达可能性，后面紧跟三种病名，三个要素齐备，故答案选 F。若某段只提到一种疾病，即使观点再积极也不能选。",
          "analysis": "F 段开头写道：“The aim of this research is to look at exactly how neurons are made and how that differs in humans compared with other species.”（这项研究的目标是弄清神经元究竟是如何生成的，以及人类在这方面与其他物种有何不同），紧接着就是本题定位句：“One day, says Lancaster, this work could translate into understanding far more about Alzheimer's disease, Parkinson's and schizophrenia.”（Lancaster 说，有一天这项工作有望转化为对阿尔茨海默病、帕金森病和精神分裂症更深入的了解）。题干的三层信息在原文中一一落地：possibilities 对应 One day 加 could（将来、可能）；improved research 对应 understanding far more about（研究内容与理解程度的加深）；various medical conditions 对应三种疾病的并列列举。全篇只有 F 段把研究前景与多种具体疾病连在一起，因此答案选 F。做题提示：段落匹配题里“疾病名称、年份、百分比、机构名”这类具体信息是最省时的定位路标，见到具体病名先圈出来，再核对题干其余成分是否吻合。",
          "traps": [
            "为什么不是 C：C 段虽提到疾病，但只涉及 fatty-liver diseases（脂肪肝疾病）一类，且谈的是已经实现的“在培养皿中复制疾病”，语气是陈述现状，不符合题干 possibilities 表示的未来可能性。",
            "为什么不是 D：D 段研究的对象是肝脏再生机制，该段没有列举任何疾病名称，也没有对未来医学研究前景作展望。",
            "为什么不是 E：E 段聚焦微型脑的培育方法（三维培养）与研究脑结构，未提及任何具体疾病，也未谈研究前景。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "contrasting views of the importance of the Petri dish",
          "translation": "关于培养皿重要性的两种对立看法。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "They are simple, utilitarian little things, and it's understandable that some people see them as just shallow dishes with lids. But Petri dishes deserve celebrating; they are still at the forefront of scientific discovery."
          },
          "synonyms": [
            "“contrasting views” 同义替换为原文的 “it's understandable that some people see them as just shallow dishes with lids” 与 “But Petri dishes deserve celebrating” 的对比，其中 But 是转折标记词",
            "“the importance of the Petri dish” 同义替换为原文的 “they are still at the forefront of scientific discovery”，即培养皿的重要意义",
            "原文前半用 just shallow dishes with lids（只是带盖的浅碟）体现轻视一方，后半用 deserve celebrating（值得庆祝）体现重视一方，构成两派对立的评价"
          ],
          "locatingTip": "定位：题干的核心词是 contrasting views（对立的观点），这类题干往往在原文里靠转折连词落脚，因此扫描各段时要优先找 But、however、yet 之类的转折句，再看转折前后的评价是否相反。确定答案技巧：A 段是全文唯一一段对培养皿本身的价值作出“一贬一扬”两种评价的地方——前半句用 just shallow dishes with lids 转述轻视者的看法，转折后的 But Petri dishes deserve celebrating 表明作者与之相反的立场，正对应题干的 contrasting views；后面 B 至 F 段都是从不同机构的研究出发讲培养皿的用途，并未出现两种对立评价，故答案选 A。",
          "analysis": "A 段是全文的引言段，句句围绕“培养皿受不受重视”展开。第一句指出培养皿很少像显微镜那样获得赞赏与关注（rarely receive the appreciation or attention）；第二句站在旁观者立场承认“可以理解有人把它们看成只是带盖的浅碟（just shallow dishes with lids）”，这是轻视一方的看法；第三句用转折词 But 翻转立场：“But Petri dishes deserve celebrating; they are still at the forefront of scientific discovery.”（但培养皿值得庆祝，它们仍处在科学发现的最前沿），这是重视一方的看法。一贬一扬、两种对立评价同段并存，正是题干的 contrasting views of the importance of the Petri dish。相比之下，B 段讲玻璃仪器与科学革命，C、D、E 段分别介绍三个研究团队如何用培养皿做研究，F 段总结研究意义并引述“像园艺一样”的说法，都只呈现单一正面立场，没有形成对比，因此答案锁定 A。做题提示：“contrasting views”“differing opinions”“disagreement”这类题干几乎总与转折词同现，把转折句当作定位锚点可以大幅提速。",
          "traps": [
            "为什么不是 B：B 段落脚点是玻璃这种材料对科学革命的重要性（glass allowed the growth of the experimental method），全段对培养皿本身只作为背景一提，没有出现任何对立评价。",
            "为什么不是 F：F 段的确评价了培养皿的价值（remain a vital weapon in the fight against the world's most serious diseases），但只给了单一正面评价，并借 gardening 的比喻表达研究者的满足感，不存在两种相反的看法。",
            "为什么不是 C：C 段讲培养皿从玻璃改换成塑料以及干细胞研究的具体做法，属于事实陈述，没有对培养皿重要性作出褒贬对立的评价。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "a change remarked on by one scientist in the material used for the Petri dish",
          "translation": "一位科学家提到的培养皿所用材料上发生的变化。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Now, we grow cells in the Petri dish, and we don't use glass any more, but plastic."
          },
          "synonyms": [
            "“a change in the material used for the Petri dish” 同义替换为原文的 “we don't use glass any more, but plastic”，从 glass 换成 plastic 就是材料上的变化",
            "“remarked on by one scientist” 同义替换为原文的引语形式 “Now, we grow cells in the Petri dish …”，由 Professor Ludovic Vallier 本人亲口说出",
            "“the material” 对应原文具体点明的两种材质 “glass” 与 “plastic”",
            "“Now” 与原文 “don't … any more” 共同体现“今昔不同”，与题干的 change 对应"
          ],
          "locatingTip": "定位：题干的关键信息是“材料上的变化”，扫读时专找材质名词 glass、plastic。全文中把这两种材质对举的只有 C 段这一句，位置在 Vallier 教授第一段引语的后半。确定答案技巧：题干包含两个限定——一是变化本身（change in the material），二是由某位科学家提出（remarked on by one scientist）。原文 “we don't use glass any more, but plastic” 用 any more 与 but 明确表达“不再用玻璃、改用塑料”，并且这句话带引号，出自 Vallier 之口，两个限定同时满足，故答案选 C。注意不要把 B 段对 glass 的讨论误当成答案：B 段讲的是玻璃对科学整体的重要性，并未说明培养皿材质发生了更换。",
          "analysis": "C 段先回忆 Vallier 教授第一次接触培养皿的经历，随后进入他的直接引语：“‘It's good to see things grow,’ he says. ‘It is a fascinating experience. Now, we grow cells in the Petri dish, and we don't use glass any more, but plastic.’”（“看着东西生长是件好事，”他说。“这是一种奇妙的体验。现在我们在培养皿里培养细胞，我们用的不再是玻璃，而是塑料。”）。句中 we don't use glass any more, but plastic 明确交代了培养皿材质由玻璃改为塑料的变化，且这一变化是科学家本人在谈话中提到的，与题干 a change remarked on by one scientist in the material used for the Petri dish 完整对应，因此答案是 C。B 段虽然大篇幅讨论 glass，但内容始终围绕“玻璃这种材料对科学革命的重要性”，说的是玻璃带来的实验方法与观测方式的变革，并未涉及培养皿从玻璃换成塑料这一具体事实，属于同词不同义的干扰。做题提示：当同一名词（这里是 glass）在多段出现时，必须回到题干核对限定成分——题干问的是“培养皿材质的变化”，而不是“玻璃的重要性”。",
          "traps": [
            "为什么不是 B：B 段用大量篇幅讨论玻璃（glass allowed the growth of the experimental method），但落点是玻璃材质对整个科学研究方法的重要性，没有提到培养皿材质发生了更换。",
            "为什么不是 E：E 段讲的是培养皿经过特殊处理以防止细胞黏附，属于对培养皿的加工处理，而非器皿本身所用材料的更换。",
            "为什么不是 A：A 段只交代培养皿的发明者、年份以及人们对它的轻视与作者的反驳，完全没有涉及材质话题。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "a claim that the Petri dish enables a scientist to monitor the progress of an experiment on a regular basis",
          "translation": "一种说法，认为培养皿使科学家能够定期观察实验的进展。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "You keep an eye on it and you check it every day. You change the media this day or that day to help it grow better."
          },
          "synonyms": [
            "“monitor the progress of an experiment” 同义替换为原文的 “keep an eye on it” 与 “check it”，都是“照看、观察”之意",
            "“on a regular basis” 同义替换为原文的 “every day” 与 “this day or that day”，都表示按固定频率反复进行",
            "“the progress of an experiment” 对应原文代词 it 所指的培养物（“You're taking care of this thing”），观察对象即实验中的生长物",
            "“a claim” 对应原文的引语 “It's a bit like gardening”，即 Lancaster 的说法"
          ],
          "locatingTip": "定位：题干的关键是频率副词短语 on a regular basis，回原文找表示“每天、定期”的时间表达，落在 F 段 Lancaster 那段园艺比喻的引语里。确定答案技巧：题干要求同时具备三个要素——a claim（某人的说法）、monitor（观察照看）、on a regular basis（定期）。原文这段引语全程是 Lancaster 的第一人称说法，keep an eye on、check 是观察，every day 是定期，三个要素齐备；再加上 “You're taking care of this thing” 说明被照看的正是培养皿中的实验对象，故答案选 F。切忌被 F 段开头的疾病前景句带偏，定位要盯住频率词而不是段落主题词。",
          "analysis": "F 段后半是 Lancaster 的一段长引语：“‘It's a bit like gardening,’ she says. ‘You're taking care of this thing. You keep an eye on it and you check it every day. You change the media this day or that day to help it grow better. It's rewarding to see something grow before your eyes.’”（“这有点像园艺，”她说。“你在照料这个东西。你盯着它，每天检查它。你这一天或那一天更换培养基，帮助它长得更好。亲眼看着某个东西生长是很有回报的。”）。题干把这段话概括为“培养皿使科学家能够定期观察实验进展”：a claim 对应这段以 she says 引出的说法；monitor the progress 对应 keep an eye on it 与 check it；on a regular basis 对应 every day 与 this day or that day；被观察的对象则由 it 与 this thing 指代的培养物承担，正是实验进展本身。因此答案是 F。本题的干扰来源在于 F 段前半句也提到研究前景（第 15 题即落在此处），同一段被两道不同的段落匹配题选中属于正常现象，考场上只要把题干的限定词（此处是频率）逐一核对，就不会混淆。",
          "traps": [
            "为什么不是 C：C 段讲的是在培养皿中培养干细胞并用液体培养基引导细胞分化，重点在“喂食与分化”，没有出现每天或定期查看的表述。",
            "为什么不是 D：D 段讲培养肝细胞以研究肝脏再生的分子机制，落点是细胞增殖的三个阶段，并未描述科学家如何按规定频率观察实验。",
            "为什么不是 E：E 段讲培养皿的特殊处理与三维生长带来的优势，虽然提到看得更清楚（see individual neurons），但那是“看得更细”，而非“定期多次观察”。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "a reference to the importance of a material for different types of laboratory equipment",
          "translation": "对某种材料在不同类型实验室器具中重要性的提及。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "the development of glass scientific instruments, from microscope lenses to laboratory beakers"
          },
          "synonyms": [
            "“a material” 同义替换为原文的 “glass”（玻璃）",
            "“different types of laboratory equipment” 同义替换为原文的 “microscope lenses” 与 “laboratory beakers”，前者是显微镜头，后者是实验室烧杯，属两种不同类型的实验器具",
            "“from … to …” 结构表示范围与举例，正对应题干 different types",
            "“the importance of a material” 对应同段后文的 “without glass, the Renaissance and the scientific revolution would never have happened.”，用假设句强调玻璃的重要性"
          ],
          "locatingTip": "定位：题干的关键词是 material（材料）与 laboratory equipment（实验室器具），回原文搜实验器具名词 microscope、beaker 最快，两者同现于 B 段第一句。确定答案技巧：题干要求同时出现“一种材料”和“多种实验器具”这两项。B 段 “the development of glass scientific instruments, from microscope lenses to laboratory beakers” 用 glass 点明材料，用 from … to … 并列显微镜头与烧杯两类器具，随后又以 without glass … would never have happened 和 Glass allowed the growth of the experimental method 强化玻璃的重要性，两个条件完全吻合，故答案选 B。注意 C 段虽然也提到 glass，但说的是培养皿不再用玻璃，与“材料对多种器具的重要性”无关。",
          "analysis": "B 段在把培养皿放进更大的历史脉络时写道：“The invention of the Petri dish, and the advances it has helped to create, are part of a bigger whole, of course – the development of glass scientific instruments, from microscope lenses to laboratory beakers.”（培养皿的发明以及它所推动的种种进展，当然属于一个更大的整体——即玻璃科学仪器的发展，从显微镜头到实验室烧杯）。这句话用 glass scientific instruments 标明材料（glass），用 from microscope lenses to laboratory beakers 列出两种不同类型的实验室器具，正好对应题干的 a material 加 different types of laboratory equipment。紧接着的一句 “without glass, the Renaissance and the scientific revolution would never have happened.”（没有玻璃，文艺复兴与科学革命就不会发生）以强烈的假设句凸出玻璃的重要性，段末 Macfarlane 又说 “Glass allowed the growth of the experimental method.”（玻璃促成了实验方法的发展），把 importance 这一层意思补足。因此答案是 B。区分要点：本题只问“玻璃材料对多种器具的重要性”，凡是只讲培养皿材质更换（C 段称不再用玻璃而改用塑料）或只讲某种器具本身的段落都不符合。",
          "traps": [
            "为什么不是 C：C 段出现 glass 一词，但表述是 “we don't use glass any more, but plastic”，讲的是培养皿材料被塑料取代，与“某种材料对多类实验器具的重要性”无关。",
            "为什么不是 A：A 段完全没有提到任何材料或实验器具，只谈培养皿的发明者与人们对它的态度。",
            "为什么不是 E：E 段虽提及实验器具的使用方式，但落点是培养皿的特殊处理与三维生长，没有涉及某一种材料对多类器具的意义。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–25 人名观点匹配（Match each statement with the correct person，A–D）",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 25
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "To deal with the injury, cells must go through a series of activities in a particular order.",
          "translation": "为应对损伤，细胞必须按照特定顺序经历一系列活动。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The cells first have to realise that there is damage and activate the response. Once they activate the response, the cells will proliferate to compensate for the loss of cells owing to the damage."
          },
          "synonyms": [
            "“To deal with the injury” 同义替换为原文的 “to compensate for the loss of cells owing to the damage”，即对损伤造成的细胞缺失作出补偿",
            "“a series of activities” 同义替换为原文的 “realise that there is damage and activate the response … proliferate … become functional cells”，即识别损伤、启动反应、增殖、变得有功能这一连串活动",
            "“in a particular order” 同义替换为原文的 “first … Once they activate the response, the cells will proliferate … And once they have proliferated”，用 first、once、and once 明确标出先后顺序",
            "以上引语出自 Dr Meritxell Huch 的 “She says:” 之后，与选项 C 直接对应"
          ],
          "locatingTip": "定位：人名匹配题先看选项人名，Huch（C）在原文只出现在 D 段，Vallier（B）在 C 段，Lancaster（D）在 E、F 段，Macfarlane（A）在 B 段，据此可以按人名锁定候选段落再逐句比对。本题先扫 D 段中 She says 引出的内容。确定答案技巧：题干的两个关键词是 a series of activities 与 in a particular order（顺序）。原文用 first 加两处 Once（一旦……就……）串起“识别损伤、启动反应、增殖、成为功能细胞”四个阶段，是全文唯一强调先后次序的说法；这段说法出自 Huch，故答案选 C。看到题干含 order、sequence、phase、stage 这类词，就要在原文里找表示次序的标记词。",
          "analysis": "D 段后半是 Huch 的原话：“She says: ‘You can divide regeneration into different phases. The cells first have to realise that there is damage and activate the response. Once they activate the response, the cells will proliferate to compensate for the loss of cells owing to the damage. And once they have proliferated, they then become functional cells.’”（她说：“你可以把再生分成不同阶段。细胞首先必须意识到存在损伤并启动反应。一旦启动了反应，细胞就会增殖，以补偿损伤导致的细胞缺失。而一旦完成增殖，它们随后就变成有功能的细胞。”）。题干把它概括为“为应对损伤，细胞必须按特定顺序经历一系列活动”：a series of activities 对应四个阶段（识别损伤、启动反应、增殖、变成功能细胞）；in a particular order 对应 first、Once … Once 这些明示次序的连接词；To deal with the injury 对应 to compensate for the loss of cells owing to the damage 与 realise that there is damage。全篇只有 Huch 讲了损伤修复的阶段性顺序，因此答案是 C。人名匹配题的判分关键不是看谁总在研究细胞，而是看谁的话里出现了题干所强调的那一层信息（本题是“顺序”）；Vallier 也谈细胞生长与分化，但他说的是“喂食培养基后细胞可以变成神经元、心肌细胞等”，并未给出次序，这是本题最主要的干扰点。",
          "traps": [
            "为什么不是 B（Professor Ludovic Vallier）：Vallier 谈的是向细胞喂食液体培养基后，细胞可以长成神经元、心肌细胞、肝细胞等，强调的是可分化成的类型，没有按 first、once 等词交代活动的先后顺序。",
            "为什么不是 D（Dr Madeline Lancaster）：Lancaster 在 E 段谈让细胞在三维而非二维中生长，在 F 段谈研究前景与照看培养物的体验，都没有描述损伤修复的分阶段过程。",
            "为什么不是 A（Alan Macfarlane）：Macfarlane 讲的是玻璃仪器对科学革命与实验方法的作用，与细胞如何应对损伤毫无关系。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "One technological development formed the basis of all modern scientific research.",
          "translation": "某一项技术发展构成了所有现代科学研究的基础。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "without glass, the Renaissance and the scientific revolution would never have happened"
          },
          "synonyms": [
            "“One technological development” 同义替换为原文的 “glass”（玻璃这一材料技术）与 “glass instruments”",
            "“formed the basis of” 同义替换为原文的假设句 “without glass … would never have happened”，即没有它就不可能有后续的一切",
            "“all modern scientific research” 同义替换为原文的 “the Renaissance and the scientific revolution”，科学革命即现代科学研究的起点",
            "同段 Macfarlane 的另一句 “Glass allowed the growth of the experimental method.” 进一步把玻璃与实验方法（现代科研的基础）直接关联"
          ],
          "locatingTip": "定位：题干涉及“某项技术是所有现代科研的基础”这种宏大论断，只可能出现在讲历史脉络的 B 段。B 段中被标出姓名的研究者只有 Alan Macfarlane（选项 A），因此见到该名字即可确定候选答案。确定答案技巧：回到 B 段核对论断强度是否与题干一致。原文用虚拟语气 without glass … would never have happened（没有玻璃，文艺复兴与科学革命就绝不会发生），正是“基础性、不可或缺”的最强表述；随后又引 Macfarlane 的话 “Glass allowed the growth of the experimental method. Don't trust what you are being told: see it for yourself. It was transformational.”，把玻璃与实验方法的兴起直接挂钩。论断内容与说话人同时对上，故答案选 A。",
          "analysis": "B 段是全文唯一的历史背景段，核心人物是 Alan Macfarlane 及其著作《The Glass Bathyscaphe: How Glass Changed the World》。原文写道：“In The Glass Bathyscaphe: How Glass Changed the World, Alan Macfarlane argues that without glass, the Renaissance and the scientific revolution would never have happened.”（在《玻璃深海潜水器：玻璃如何改变世界》一书中，Alan Macfarlane 主张：没有玻璃，文艺复兴与科学革命绝不会发生）。题干的三个信息点在原文中一一对应：One technological development 对应 glass 这一材料及其制成的仪器；formed the basis of 对应 without glass … would never have happened 这一假设性最强表述；all modern scientific research 对应 the Renaissance and the scientific revolution（科学革命是现代科学研究的起点）。段末 Macfarlane 自述的 “Glass allowed the growth of the experimental method … It was transformational.” 又把“玻璃促成实验方法”这一层说得更直白，进一步印证答案。因此选 A。做题提示：题干出现 all modern、the whole of、never 这类总括性词语时，往往对应原文的虚拟语气或绝对化断言，抓住 without … would never have 这类句式即可确认。",
          "traps": [
            "为什么不是 B（Professor Ludovic Vallier）：Vallier 讲的是干细胞培养、培养基喂食以及在培养皿中复制疾病，属于具体的实验技术操作，没有提出任何“某项技术构成所有现代科研基础”的历史论断。",
            "为什么不是 C（Dr Meritxell Huch）：Huch 的表述全部围绕肝脏再生的分子机制与再生阶段，不涉及科学研究方法或历史发展。",
            "为什么不是 D（Dr Madeline Lancaster）：Lancaster 讲三维培养的微型脑与疾病研究前景，虽提到 next-generation 与 classic technologies 的相互作用，但并未把任何一项技术说成所有现代科学研究的基础。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "A modification to the Petri dish allows experiments to provide more accurate information.",
          "translation": "对培养皿的一处改造使实验能够提供更准确的信息。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Here, the dish has been specially treated to stop cells sticking to it and to encourage them to float freely."
          },
          "synonyms": [
            "“a modification to the Petri dish” 同义替换为原文的 “the dish has been specially treated”，即对培养皿作特殊处理这一改造",
            "“more accurate information” 同义替换为原文的 “this new method gives you a structure that looks a lot more like that of an actual developing brain” 以及 “you won't be able to understand the architecture of those cells”，即三维培养让模型更接近真实大脑、信息更接近真相",
            "“experiments … provide … information” 对应原文谈论的神经元在培养皿中的生长方式与由此获得的对细胞排布结构的理解",
            "上述内容出自 E 段的 Dr Madeline Lancaster，与选项 D 对应"
          ],
          "locatingTip": "定位：题干的关键是“对培养皿做了什么改造”，全文讲培养皿被处理过的只有 E 段这一句 the dish has been specially treated，且该段研究者是 Lancaster（选项 D），人名与事实同时指向唯一的段落。确定答案技巧：题干拆成两块——“改造（modification）”与“更准确的信息（more accurate information）”。原文前半句 specially treated to stop cells sticking to it and to encourage them to float freely 是改造；后半段说明这一改造使细胞在三维而非二维中生长，从而能理解细胞的 architecture（相对排布），并得到更像真实发育中大脑的结构，即信息更准确、更接近真实。两块内容都落在 Lancaster 名下，故答案选 D。注意 B（Vallier）也谈到培养细胞的容器，但他讲的是材质由玻璃变塑料，属于材料更换而非“为提升实验精度”的改造。",
          "analysis": "E 段集中介绍 Lancaster 团队如何把培养皿改造成适合三维生长的容器：“In the MRC Laboratory of Molecular Biology, Dr Madeline Lancaster and her team grow ‘mini-brains’ in hundreds of Petri dishes. Here, the dish has been specially treated to stop cells sticking to it and to encourage them to float freely. Dr Lancaster explains that they want the cells to develop in three, rather than two, dimensions as that's the way our brains are. ‘If you can grow neurons in a dish in two dimensions, you can see individual neurons and see what they do, but you won't be able to understand the architecture of those cells – their positioning relative to one another.’ She says that this new method gives you a structure that looks a lot more like that of an actual developing brain.”（在 MRC 分子生物学实验室，Madeline Lancaster 博士和她的团队在数百个培养皿中培育“微型脑”。在这里，培养皿经过特殊处理，以防细胞黏附于其上，并促使它们自由漂浮生长。Lancaster 博士解释说，他们希望细胞在三维而非二维中生长，因为我们的大脑就是这个样子。“如果你让神经元在培养皿中以二维方式生长，你可以看到单个神经元并观察它们的行为，但你无法理解这些细胞的结构——即它们彼此的相对位置。”她说，这种新方法得到的结构看起来要更像真实的发育中的大脑。）。题干的 modification 对应 specially treated，more accurate information 对应“三维生长让我们理解细胞的相对排布、得到更像真实发育中大脑的结构”。因为这一改造及其目的都由 Lancaster 提出，所以答案是 D。做题提示：题干中的 accurate 在原文里往往不是原词，而是用 more like、real、actual、represent 这类“接近真实”的表达来体现，识别出这层等同关系是本题的关键。",
          "traps": [
            "为什么不是 B（Professor Ludovic Vallier）：Vallier 确实提到培养皿的变化（“we don't use glass any more, but plastic”），但那是材质的更换，原文并未说明该更换是为了让实验信息更准确，与题干的 modification 加 more accurate information 不匹配。",
            "为什么不是 C（Dr Meritxell Huch）：Huch 段讲每天使用大量培养皿培养肝细胞并研究再生的分子机制，完全没有提及对培养皿作任何改造。",
            "为什么不是 A（Alan Macfarlane）：Macfarlane 讨论的是玻璃仪器对科学方法的意义，他本人从事的是科学史研究，不涉及对培养皿的改造。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Petri dishes allow observation of medical conditions that are normally impossible to observe.",
          "translation": "培养皿使人们能够观察通常情况下无法观察到的疾病状况。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "We can't look inside a patient's liver to see what's happening. So we are reproducing those diseases in our dishes."
          },
          "synonyms": [
            "“medical conditions that are normally impossible to observe” 同义替换为原文的 “We can't look inside a patient's liver to see what's happening”，即在活体病人身上无法看到的过程",
            "“Petri dishes allow observation” 同义替换为原文的 “we are reproducing those diseases in our dishes”，把疾病复制到培养皿里从而能被看到",
            "“those diseases” 回指同一段前文提到的 fatty-liver diseases（脂肪肝疾病）与 “the liver cell in the dish becomes full of fat, which we can see”",
            "以上引语出自 C 段的 Professor Ludovic Vallier，与选项 B 对应"
          ],
          "locatingTip": "定位：题干的关键是“无法观察”这一否定表述，扫读时留意 can't、cannot、impossible 之类的否定词，全文中与“观察不到”相关的句子只出现在 C 段末尾。确定答案技巧：题干说的是“培养皿让本来无法观察的疾病变得可观察”，这需要原文同时具备“否定”与“转而观察成功”两层。原文 “We can't look inside a patient's liver to see what's happening. So we are reproducing those diseases in our dishes.” 中，前半句是否定（无法看到病人肝脏内部发生的事），后半句用 So 引出替代方案（把疾病在培养皿中复制出来），恰好构成完整的因果链，而这番话出自 Vallier，故答案选 B。注意 D 段同样研究肝细胞，但它研究的是肝脏自我再生的机制，并未涉及“无法观察”的对比。",
          "analysis": "C 段末尾是 Vallier 的一段引语：“‘We work a lot on fatty-liver diseases, and in this case the liver cell in the dish becomes full of fat, which we can see ... We can't look inside a patient's liver to see what's happening. So we are reproducing those diseases in our dishes.’”（“我们在脂肪肝疾病上做了很多工作，在这种情况下，培养皿中的肝细胞会充满脂肪，这是我们能看到的……我们无法看到病人肝脏内部正在发生什么。所以我们把那些疾病在我们培养皿里复制出来。”）。题干的两个信息点在这里精准落地：medical conditions that are normally impossible to observe 对应 We can't look inside a patient's liver to see what's happening（在活体病人体内无法观察）；Petri dishes allow observation 对应 we are reproducing those diseases in our dishes（把疾病复制到培养皿中使其可被观察），并且前半句还给出具体例证——肝细胞在培养皿中充满脂肪，这是“我们能看到的（which we can see）”。发言人是 Vallier，因此答案是 B。做题提示：人名匹配题中，题干常把原文的“人物原话”概括成第三人称陈述，本题把 we can't（第一人称）改写成 medical conditions that are normally impossible to observe（无主语概括），识别出人称转换即可。",
          "traps": [
            "为什么不是 C（Dr Meritxell Huch）：Huch 团队同样培养肝细胞，但她们研究的是肝脏再生的分子机制与细胞增殖的各个阶段，段落中没有出现“无法在人体内观察、只能借助培养皿”的对比表述。",
            "为什么不是 D（Dr Madeline Lancaster）：Lancaster 在 E 段确实谈到二维培养无法理解细胞结构，但那说的是培养方式所造成的认知局限，是技术层面的问题，而非“某种疾病状况无法在病人身上观察”。",
            "为什么不是 A（Alan Macfarlane）：Macfarlane 谈的是玻璃仪器与科学史，与疾病观察毫无关系。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "Visual evidence is a very important requirement for the provision of reliable information.",
          "translation": "视觉证据是提供可靠信息的一项非常重要的条件。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Around 70 per cent of what we know about the world comes in through our eyes, Macfarlane points out, and glass instruments enabled us to see better."
          },
          "synonyms": [
            "“Visual evidence” 同义替换为原文的 “comes in through our eyes” 与 “enabled us to see better”，即通过眼睛获取的信息",
            "“a very important requirement for the provision of reliable information” 同义替换为原文的 “Around 70 per cent of what we know about the world”，用一个具体比例说明视觉信息是知识的主要来源",
            "“reliable information” 对应原文同段引语中的 “Don't trust what you are being told: see it for yourself.”，即亲眼看比听别人说要可靠",
            "以上观点由 “Macfarlane points out” 引出，与选项 A 直接对应"
          ],
          "locatingTip": "定位：题干的核心词是 visual（视觉的）与 reliable information（可靠信息），回原文搜与“看见、眼睛”有关的词：eyes、see。全文中把“眼睛获取信息”与“知识来源”挂钩并点出 Macfarlane 名字的只有 B 段第 3 句。确定答案技巧：题干说“视觉证据是获得可靠信息的重要条件”，原文用 “Around 70 per cent of what we know about the world comes in through our eyes” 给出一个极高比例，说明视觉是知识的主要来源，即“非常重要”；紧接着的引语 “Don't trust what you are being told: see it for yourself.” 又说不要轻信别人所说、要亲眼去看，把“亲眼所见等于可靠”这层意思表达得非常直接。观点归属经 Macfarlane points out 与 he says 明确标注为 A，故答案选 A。",
          "analysis": "B 段第 3 至 5 句是本题的落点：“Around 70 per cent of what we know about the world comes in through our eyes, Macfarlane points out, and glass instruments enabled us to see better. Until about 1400, knowledge was based on what people had been told in the past. ‘Glass allowed the growth of the experimental method. Don't trust what you are being told: see it for yourself. It was transformational,’ he says.”（Macfarlane 指出，我们对世界的认识有大约 70% 是通过眼睛获得的，而玻璃仪器使我们能看得更清楚。直到约 1400 年，知识都建立在别人过去告诉你的内容之上。“玻璃促成了实验方法的发展。不要轻信别人告诉你的事，要亲眼去看。这是具有变革意义的，”他说）。题干的两层信息在此对应完整：visual evidence 对应 through our eyes 与 see it for yourself；a very important requirement for reliable information 对应 70 per cent 这一高比例（视觉是知识的主要来源）以及“不要轻信他人转述”的告诫（亲眼所见才可靠）。发言人是 Alan Macfarlane，故答案选 A。作业提示：当题干出现 requirement、basis、source 等抽象名词时，要学会用原文的量化表述（百分比、比例）来印证“重要性”这一程度，本题的 70 per cent 就是判分锚点。",
          "traps": [
            "为什么不是 D（Dr Madeline Lancaster）：Lancaster 也谈“看”（see individual neurons、see something grow before your eyes），但她说的是在二维或三维培养中能看到什么、亲眼看生长是件有回报的事，落脚点是研究体验，不是“视觉证据是可靠信息的前提条件”这一认识论主张。",
            "为什么不是 B（Professor Ludovic Vallier）：Vallier 提到 “which we can see”（我们能看到的），但他是在描述脂肪肝在培养皿中的可视现象，没有上升到“视觉证据对可靠信息至关重要”的论断。",
            "为什么不是 C（Dr Meritxell Huch）：Huch 的整段引语都在讲肝脏再生的三个阶段，完全没有涉及观察方式或信息的可靠性问题。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Petri dishes can be used to help produce a range of new cells of many different kinds.",
          "translation": "培养皿可用于帮助培育出多种不同类型的新细胞。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "So by feeding them this medium we can allow the cells to become neurons, cardiac cells, liver cells, and so on."
          },
          "synonyms": [
            "“a range of new cells of many different kinds” 同义替换为原文的 “neurons, cardiac cells, liver cells, and so on”，列举多种细胞并以 and so on 表示还有更多",
            "“produce” 同义替换为原文的 “allow the cells to become”，即通过培养让细胞变成所需类型（原文前文亦有 “we want to produce new cells”）",
            "“can be used to help” 同义替换为原文的 “by feeding them this medium we can allow”，说明培养皿是达成该目的的手段",
            "上述内容出自 C 段的 Professor Ludovic Vallier，与选项 B 对应"
          ],
          "locatingTip": "定位：题干的关键是“多种不同类型的新细胞”，回原文搜索细胞类型的列举，最典型的是 C 段引语中 neurons, cardiac cells, liver cells, and so on 这一串。确定答案技巧：题干要求“用培养皿帮助培育出多种新细胞”，原文这句用 by feeding them this medium（借助培养皿中供给的液体培养基）作为手段，用 allow the cells to become 作为动作，用三种细胞加 and so on 表明种类繁多，与题干完全一致；并且该段前文 Vallier 已经说过 “how they can produce more cells”，与题干的 produce 呼应。发言人是 Ludovic Vallier，故答案选 B。注意 E、F 段虽也谈细胞，但只涉及神经元一种。",
          "analysis": "C 段在介绍 Vallier 团队如何用培养皿培养干细胞时有这样一段引语：“We feed them on a liquid medium that is basically food for cells: it tells them to grow and also what to do, as we want to produce new cells. So by feeding them this medium we can allow the cells to become neurons, cardiac cells, liver cells, and so on. We can then model disease in a dish, or produce cells for regenerative-medicine applications.”（我们给它们喂一种液体培养基，那基本上就是细胞的食物：它告诉细胞要生长，也告诉它们该做什么，因为我们想产生新的细胞。所以通过喂食这种培养基，我们可以让这些细胞变成神经元、心肌细胞、肝细胞等等。随后我们就能在培养皿中模拟疾病，或为再生医学应用生产细胞）。题干的三层信息都在此落地：Petri dishes can be used to help 对应 “by feeding them this medium” 用的是培养皿中的培养基；produce new cells 对应 “we want to produce new cells”；a range of … of many different kinds 对应 “neurons, cardiac cells, liver cells, and so on”。这段话出自 Vallier，因此答案是 B。做题提示：题干中的 and so on 类概括语（a range of、various、many kinds）在原文往往以“列举加 and so on”的形式出现，两者是典型的概括与具体关系，本题即为此例；Huch 与 Lancaster 虽然也在培养细胞，但她们的研究对象单一（肝细胞、神经元），不构成“多种类型”。",
          "traps": [
            "为什么不是 D（Dr Madeline Lancaster）：Lancaster 在 E、F 段培养的是 mini-brains 与神经元，虽然谈到了解神经元如何生成，但细胞种类始终是神经元一种，不符合题干 many different kinds。",
            "为什么不是 C（Dr Meritxell Huch）：Huch 团队培养的是小鼠与人类的肝细胞，用于研究肝脏再生机制，细胞类型同样单一，没有列举出多种细胞。",
            "为什么不是 A（Alan Macfarlane）：Macfarlane 讨论的是玻璃材料与科学方法的历史意义，完全不涉及细胞培养。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 26–29 摘要填空（Choose ONE WORD ONLY from the passage）",
      "mode": "per_question",
      "questionRange": {
        "start": 26,
        "end": 29
      },
      "items": [
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "A team led by Dr Madeline Lancaster is using special Petri dishes which prevent brain cells from 26 ________ to them.",
          "translation": "由 Madeline Lancaster 博士领导的一个团队正在使用特制的培养皿，以防止脑细胞 ________ 到培养皿上。",
          "answer": "sticking",
          "wordClass": "动名词（作介词 from 的宾语；来自动词 stick，此处用其动名词形式 sticking，不可写成原形 stick 或名词 stickiness）",
          "locating": {
            "paragraph": "5",
            "quote": "the dish has been specially treated to stop cells sticking to it and to encourage them to float freely"
          },
          "synonyms": [
            "“special Petri dishes” 同义替换为原文的 “the dish has been specially treated”，即经过特殊处理的培养皿",
            "“prevent … from” 同义替换为原文的 “stop”，两者都表示阻止某事发生",
            "“brain cells” 对应同一段的 “neurons” 与 “mini-brains”，即脑细胞",
            "“to them” 中的 them 回指 special Petri dishes，对应原文 “sticking to it” 中的 it（the dish）"
          ],
          "locatingTip": "定位：摘要标题已给出 Research in the MRC Lab of Molecular Biology，且题干有专有名词 Dr Madeline Lancaster，直接跳到 E 段（Lancaster 团队所在的段落），不必从文章开头读起。确定答案技巧：题干的结构是 prevent brain cells from ___ to them，需要在原文中找到与 prevent 同义、且后面接“细胞加介词加培养皿”的结构。原文 “to stop cells sticking to it” 中，stop 对应 prevent … from，cells 对应 brain cells，sticking to it 对应 ___ to them，因此空格填 sticking。语法上这里必须用动名词：介词 from 之后接动名词形式，且原文本身用的就是 sticking，照抄即可；写成 stick 会因语法错误而失分。",
          "analysis": "E 段开头交代 Lancaster 团队的工作：“In the MRC Laboratory of Molecular Biology, Dr Madeline Lancaster and her team grow ‘mini-brains’ in hundreds of Petri dishes. Here, the dish has been specially treated to stop cells sticking to it and to encourage them to float freely.”（在 MRC 分子生物学实验室，Madeline Lancaster 博士和她的团队在数百个培养皿中培育“微型脑”。在这里，培养皿经过特殊处理，以阻止细胞黏附其上，并促使它们自由漂浮）。摘要句 “A team led by Dr Madeline Lancaster is using special Petri dishes which prevent brain cells from 26 ________ to them.” 是原文的改写：special Petri dishes 对应 the dish has been specially treated；prevent brain cells from 对应 stop cells；空格后的 to them 对应原文的 to it（it 指培养皿）。二者叠合可知空格所需就是原文 sticking 一词，含义为“黏附”。从词性看，from 是介词，其后需接名词性成分，原文使用动名词 sticking，故必须原样照抄 sticking，既不能改成动词原形 stick，也不能换成名词 form stickiness；同时遵循 ONE WORD ONLY，只写一个词。这一步也解释了后文“让细胞自由漂浮生长”的原因——只有细胞不贴壁，才能在三维空间中自由发育。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 27,
          "stem": "The aim is to allow the neurons to grow in three 27 ________.",
          "translation": "其目的是让神经元在三维 ________ 中生长。",
          "answer": "dimensions",
          "wordClass": "名词（可数，复数；作介词 in 的宾语，因前面有基数词 three 修饰，可数名词须用复数 dimensions）",
          "locating": {
            "paragraph": "5",
            "quote": "Dr Lancaster explains that they want the cells to develop in three, rather than two, dimensions as that's the way our brains are."
          },
          "synonyms": [
            "“The aim is to allow … to grow” 同义替换为原文的 “they want the cells to develop”，即研究目的",
            "“to grow in” 同义替换为原文的 “to develop in”，都用 in 引出生长的空间维度",
            "“three 27 ________” 与原文的 “three, rather than two, dimensions” 对应，原文用插入语 rather than two 强调对比",
            "“the neurons” 对应原文的 “the cells”（E 段所指的即神经元）"
          ],
          "locatingTip": "定位：承接第 26 题，仍在 E 段。题干的关键词是 three 这一数字，扫描 E 段找数字 three 即可落到 Lancaster 的解释句。确定答案技巧：题干结构为 grow in three ___，需要在原文中找“in three 加名词”的搭配。原文 “they want the cells to develop in three, rather than two, dimensions” 中，develop in 对应题干的 grow in，three 直接照应，插入语 rather than two 只是用来对比二维与三维，随后被修饰的名词就是 dimensions，故答案为 dimensions。注意词数为 ONE WORD ONLY，写 dimensions 一个词即可；同时必须保留复数词尾，因为前面有 three 限定，写单数 dimension 会违反语法一致。",
          "analysis": "E 段接着说明团队做三维培养的理由：“Dr Lancaster explains that they want the cells to develop in three, rather than two, dimensions as that's the way our brains are.”（Lancaster 博士解释说，他们希望细胞在三维而非二维中发育，因为我们的大脑就是这个样子）。摘要句 “The aim is to allow the neurons to grow in three 27 ________.” 与原文逐点对应：The aim 对应 they want（研究目的）；allow the neurons to grow 对应 the cells to develop；in three 与 three 完全相同；剩下的名词由原文的 dimensions 承担，意思是“维度”。原文用 rather than two 作插入语，把二维与三维对照，这既是科学上的关键差别（二维只能看到单个神经元，无法理解细胞的相对排布），也提示答案必须取 dimensions 而非其他量词。语法上，three 之后须接复数可数名词（three dimensions 即三维），故填 dimensions。作答时切勿填 dimension（单数）或 three 之后别的名词如 phases（那是 D 段谈肝脏再生的说法），要紧扣 Lancaster 所在段落。",
          "traps": []
        },
        {
          "questionId": "q15",
          "questionNumber": 28,
          "stem": "This results in a 28 ________ that resembles a developing brain.",
          "translation": "这会形成一种类似发育中大脑的 ________。",
          "answer": "structure",
          "wordClass": "名词（可数，单数；作介词 in 的宾语，空格前有不定冠词 a，其后由 that 引导的定语从句修饰）",
          "locating": {
            "paragraph": "5",
            "quote": "She says that this new method gives you a structure that looks a lot more like that of an actual developing brain."
          },
          "synonyms": [
            "“This results in” 同义替换为原文的 “this new method gives you”，都表示某种方法带来了某种结果",
            "“resembles” 同义替换为原文的 “looks a lot more like”，即看上去像",
            "“a developing brain” 同义替换为原文的 “an actual developing brain”，an actual 只是加强语气",
            "原文 that 之后的 that of 是代词，回指前文的 a structure，故被比较的对象正是该结构"
          ],
          "locatingTip": "定位：继续在 E 段向下读，找与“像发育中的大脑”有关的句子，即该段最后一句 She says that this new method gives you a structure that looks a lot more like that of an actual developing brain。确定答案技巧：题干是可数名词空格（a ___ that …），需要在原文中找出不定冠词 a 加名词加 that 从句的平行结构。原文恰为 “a structure that looks a lot more like …”，与题干 “a 28 ___ that resembles …” 结构完全一致：gives you 对应 results in，looks like 对应 resembles，由 actual developing brain 印证 a developing brain，因此空格填 structure。注意不要误填 brain 或 architecture：brain 是比拟的对象本身，architecture 出现在前一句且指细胞排布，不是“新方法所带来的那个整体结构”。",
          "analysis": "摘要句 “This results in a 28 ________ that resembles a developing brain.” 对应的原文是 E 段末句：“She says that this new method gives you a structure that looks a lot more like that of an actual developing brain.”（她说，这种新方法得到的结构看起来要更像真实的发育中的大脑）。两句话的对应关系十分整齐：This results in 对应 this new method gives you（方法导致结果）；a 加空格加 that 从句对应 a structure that looks a lot more like …（不定冠词加中心名词加定语从句）；resembles 对应 looks a lot more like；a developing brain 对应 that of an actual developing brain，其中 that of 是代词结构，回指前面提到的 structure，也就是说被拿来与发育中大脑作比较的正是这个“结构”。因此空格应填 structure。从词性看，空格前有不定冠词 a，后有 that 引导的定语从句，只能填可数名词单数，故用 structure 原形，不写复数。理解这一空还需串起前文逻辑：培养皿被特殊处理使细胞不贴壁，从而能在三维中发育，这一改变带来的结果是一个在结构上更像真实发育中大脑的“结构”，这就是三维培养的价值所在。",
          "traps": []
        },
        {
          "questionId": "q16",
          "questionNumber": 29,
          "stem": "The technology could help scientists study how neuron production varies in different 29 ________, leading to possibilities for increased medical knowledge.",
          "translation": "这项技术可以帮助科学家研究神经元的生成方式在不同 ________ 之间有何差异，从而带来增加医学知识的可能性。",
          "answer": "species",
          "wordClass": "名词（species 单复数同形；作介词 in 的宾语，此处表示不同物种，含义为复数但没有 s 词尾，照原文拼写 species 即可）",
          "locating": {
            "paragraph": "6",
            "quote": "The aim of this research is to look at exactly how neurons are made and how that differs in humans compared with other species."
          },
          "synonyms": [
            "“how neuron production varies” 同义替换为原文的 “how neurons are made and how that differs”，即神经元的生成方式及其差异",
            "“in different …” 同义替换为原文的 “in humans compared with other species”，即人类与其他物种之间的比较",
            "“could help scientists study” 同义替换为原文的 “The aim of this research is to look at”，都由研究目标引出",
            "“leading to possibilities for increased medical knowledge” 对应同段的 “this work could translate into understanding far more about Alzheimer's disease, Parkinson's and schizophrenia”"
          ],
          "locatingTip": "定位：摘要最后一句提到“不同 ____ 之间的差异”，回原文找比较结构，落在 F 段首句 The aim of this research is to look at exactly how neurons are made and how that differs in humans compared with other species.。确定答案技巧：题干说 neuron production varies in different ___，原文说 how neurons are made … differs in humans compared with other species，两者是同义改写：varies 对应 differs，different 对应 in humans compared with other。被拿来比较的两方是人类与“其他物种”，因此空格要填表示“物种”的名词 species。注意 species 单复数同形，即便在语义上表示“不同物种”，拼写也保持 species 不加 s；同时务必只写一个词，不要写 animals 或 humans and other species 之类超出词数或改变原意的答案。",
          "analysis": "F 段首句是摘要本题的出处：“The aim of this research is to look at exactly how neurons are made and how that differs in humans compared with other species.”（这项研究的目标是弄清神经元究竟是如何生成的，以及人类在这方面与其他物种有何不同）。摘要末句 “The technology could help scientists study how neuron production varies in different 29 ________, leading to possibilities for increased medical knowledge.” 与之对应：how neuron production varies 对应 how neurons are made … differs；in different ___ 对应 in humans compared with other species，其中 different 与 compared with 的语义都由原文的比较结构承载，空格所填即“物种”一词 species。摘要末尾 leading to possibilities for increased medical knowledge 则对应 F 段紧接着的一句 “One day, says Lancaster, this work could translate into understanding far more about Alzheimer's disease, Parkinson's and schizophrenia.”，说明这一比较研究最终指向疾病认识的扩展，与第 15 题恰好共用同一段落的两句，但两题的空格位置与对应句子各不相同。作答时注意 species 虽表示复数概念，但英文中单复数同形，必须原样写 species；不要凭感觉加词尾写成 specieses，也不要换成 types（types 太泛且原文并未使用该词）。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
