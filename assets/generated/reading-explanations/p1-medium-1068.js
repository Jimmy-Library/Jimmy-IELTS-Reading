(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1068", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1068",
  "meta": {
    "examId": "p1-medium-1068",
    "title": "Becoming an Expert 成为专家",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 流程图填空（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Novice: needs to study 1 ________ under the guidance of a 2 ________.",
          "translation": "新手（Novice）：需要在一位 ________ 的指导下学习 ________。",
          "answer": "principles and rules",
          "wordClass": "名词短语（并列的可数名词复数，作 study 的宾语；空前为动词 study，需要名词性成分，不填动词形式）",
          "locating": {
            "paragraph": "2",
            "quote": "The novice needs to learn the guiding principles and rules of a given task in order to perform that task."
          },
          "synonyms": [
            "“study” 同义替换为原文的 “learn”（都是“学习”）",
            "“needs to” 与原文的 “needs to” 原词复现，提示同一层逻辑（新手必须做的事）",
            "“principles and rules” 与原文的 “the guiding principles and rules” 对应，原文多出的定语 guiding 只是修饰成分，不含新信息"
          ],
          "locatingTip": "定位：流程图第一格的关键词是 Novice（新手），题干里没有其他专有名词，只能靠“新手要学什么”这一内容定位。全文第一个讲新手学习内容的段落是第 2 段，其第 2 句 “The novice needs to learn the guiding principles and rules of a given task…” 与题干 needs to study… 几乎一一对应。确定答案技巧：题干把原文的动词 learn 换成同义词 study，空格正是 learn 的宾语；原文宾语是 “the guiding principles and rules”，去掉定语 guiding 就是答案 principles and rules。注意 NO MORE THAN THREE WORDS 的限制，恰好是三个词，不要多写 the guiding；也不要只写一半（rules 或 principles），因为题干与原文都是并列结构，两个名词都在答案里。",
          "analysis": "第 2 段先给出新手（novice）的任务：“An individual enters a field of study as a novice. The novice needs to learn the guiding principles and rules of a given task in order to perform that task.”（一个人以新手的身份进入某个学习领域。新手需要学习某项任务的基本指导原则和规则，才能完成该任务）。流程图第一格的文字是 “Needs to study 1 ___ under the guidance of a 2 ___”，把原文的 learn 改写成 study，把 “the guiding principles and rules” 压缩进空格 1，答案即 principles and rules。原文紧接一句 “Concurrently, the novice needs to be exposed to specific cases, or instances, that test the boundaries of such principles.”（同时，新手需要接触那些能够检验这些原则边界的具体案例）讲的是“接触案例”，属于新手学习的另一个方面，不能用来填本空。填词时注意：题干空前没有冠词，原文宾语前也只有定冠词加形容词 guiding，因此答案只取名词部分，写成小写的 principles and rules。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Novice: needs to study 1 ________ under the guidance of a 2 ________.",
          "translation": "新手（Novice）：需要在一位 ________ 的指导下学习 ________。",
          "answer": "mentor",
          "wordClass": "名词（单数，指人）；空格前有不定冠词 a，故用名词单数形式，不加复数；空格与 a 一起作介词 of 的宾语，同 under the guidance of 搭配",
          "locating": {
            "paragraph": "2",
            "quote": "Generally, a novice will find a mentor to guide her through the process of acquiring new knowledge."
          },
          "synonyms": [
            "“under the guidance of” 同义替换为原文的 “to guide her through …”（名词 guidance 与动词 guide 同源），即“在某人的引导之下”",
            "“a 2 ___” 前的冠词 a 与原文的 “a mentor” 一致，提示空格要填一个单数指人名词",
            "“acquiring new knowledge” 与第 2 段 “the process of acquiring new knowledge” 原词复现，说明这位引导者的作用是帮新手获取新知识"
          ],
          "locatingTip": "定位：本题与第 1 题同在流程图第一格，讲“在新手整个学习过程中起作用的那个人”，回到第 2 段找与“指导、引导”有关的句子，即 “Generally, a novice will find a mentor to guide her through the process of acquiring new knowledge.”。确定答案技巧：题干用介词短语 under the guidance of a [2] 表达“在某人的指导下”，原文对应结构是动词不定式 to guide her through the process，动作的发出者就是 mentor；题干把动词 guide 名词化为 guidance，把施动者放到 of 之后，答案即 mentor。判断时可以用词性反推：空格前有不定冠词 a，说明必须填可数名词单数，而文中表示“引导新手的人”的只有 mentor 一词（第 2 段末尾 the novice chess player seeks a mentor 再次复现）。注意不要误填 chess player（那是新手的例子），也不要写 mentors。",
          "analysis": "第 2 段围绕新手的成长展开，第 4 句是本题定位句：“Generally, a novice will find a mentor to guide her through the process of acquiring new knowledge.”（一般来说，新手会找一位导师来引导自己完成获取新知识的过程）。流程图把这句话压缩成 “under the guidance of a 2 ___”，其中 guidance（指导）对应原文的 to guide（引导），of 后面的施动者对应原文不定式的施动者，也就是 a mentor。第 2 段最后两句用学下棋的例子进一步说明：“A fairly simple example would be someone learning to play chess. The novice chess player seeks a mentor to teach her the object of the game…”（一个很简单的例子就是学下棋的人。新手棋手会找一位导师来教她棋的目标、棋盘格数、棋子的名称……），两处都指向同一个角色 mentor，说明新手的学习自始至终离不开导师的引导。填词时保留原文单数小写形式 mentor。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Journeyman: 3 ________ starts to identify 4 ________ within and between cases.",
          "translation": "熟练工（Journeyman）：________ 开始识别案例内部以及案例之间的 ________。",
          "answer": "journeyman",
          "wordClass": "名词（单数，指处于新手与专家之间的中级学习者；在句中作主语）",
          "locating": {
            "paragraph": "3",
            "quote": "In time, and with much practice, the novice begins to recognize patterns of behavior within cases and, thus, becomes a journeyman."
          },
          "synonyms": [
            "“starts to identify” 同义替换为原文的 “begins to recognize”（开始识别）",
            "“in time, and with much practice” 对应流程图所暗示的“经过一段时间练习之后”的过渡关系",
            "“journeyman” 在原文中作 becomes 的表语，题干把它提到主语位置，指称的是同一个人"
          ],
          "locatingTip": "定位：流程图第二格的关键词是 Journeyman，这是一个较为独特的名词，首次出现即在第 3 段（第 4 段开头的 When a journeyman starts to… 只是承接上文的过渡句），扫读到它就锁定第 3 段。确定答案技巧：空格 3 后面紧跟谓语 starts to identify，说明空格要填的是“做识别动作的人”，而且这个人是由上一阶段的新手（novice）转变而来的。原文第 3 段首句先描述新手开始识别案例内部的模式，然后用 thus, becomes a journeyman 说明由此获得的新身份，这个身份就是空格 3 的答案 journeyman。语法上也可验证：becomes 是系动词，其后的 journeyman 指人，与题干“___ starts to…”的主语位置吻合。注意必须照抄原文拼写（小写单数 journeyman），不要填 novice（那还是上一阶段），也不要填 expert（那是流程图的最终阶段）。",
          "analysis": "第 3 段首句是过渡句：“In time, and with much practice, the novice begins to recognize patterns of behavior within cases and, thus, becomes a journeyman.”（随着时间推移和大量练习，新手开始识别案例内部的行为模式，从而成为一名熟练工）。这句话交代了流程图里“新手到熟练工”的转变：动因是时间与练习，标志是开始识别案例内部的模式，结果是一个新身份 journeyman。题干把这一身份提到了主语位置，写成 “[3] ___ starts to identify [4] ___ within and between cases”，因此空格 3 就是这个由转变获得的名称。第 3 段接下来继续讲熟练工的进步：“With more practice and exposure to increasingly complex cases, the journeyman finds patterns not only within cases but also between cases.”（随着更多练习和接触越来越复杂的案例，熟练工不仅能发现案例内部的模式，还能发现案例之间的模式），其中 the journeyman 正是空格 3 在文中的第二次出现，可用来交叉验证答案。填词时按原文保持单数小写。",
          "traps": []
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Journeyman: 3 ________ starts to identify 4 ________ within and between cases.",
          "translation": "熟练工（Journeyman）：________ 开始识别案例内部以及案例之间的 ________。",
          "answer": "patterns of behavior",
          "wordClass": "名词短语（复数名词短语，作 identify 的宾语；题干中 identify 后需要名词性宾语，故照抄原文名词短语，不作变形）",
          "locating": {
            "paragraph": "3",
            "quote": "the novice begins to recognize patterns of behavior within cases and, thus, becomes a journeyman. With more practice and exposure to increasingly complex cases, the journeyman finds patterns not only within cases but also between cases."
          },
          "synonyms": [
            "“identify” 同义替换为原文的 “recognize” 与 “finds”（都是“识别、发现”）",
            "“within and between cases” 同义替换为原文的 “not only within cases but also between cases”（案内与案间），题干用 and 把两个介词短语合并",
            "“patterns of behavior” 在原文中原词复现（recognize patterns of behavior within cases），是同一个被识别的对象"
          ],
          "locatingTip": "定位：第 4 题与第 3 题同一句，流程图给出的线索是 “identify … within and between cases”，回到第 3 段首两句即可。确定答案技巧：题干的关键是动词 identify 的宾语，而“案例内部（within cases）”与“案例之间（between cases）”这两个状语正是原文两句的标志性措辞——第 1 句说 “begins to recognize patterns of behavior within cases”，第 2 句说 “finds patterns not only within cases but also between cases”。两句共同的宾语都是 patterns（模式），第 1 句给出了完整形式 patterns of behavior，因此答案取其完整形式。注意 NO MORE THAN THREE WORDS 的限制，恰好三个词；不要写成 patterns of behaviors（原文没有复数 behavior），也不要只填 patterns（漏掉限定成分会失去区分度）。",
          "analysis": "第 3 段前两句连起来就是本题的依据。第一句：“the novice begins to recognize patterns of behavior within cases and, thus, becomes a journeyman.”（新手开始识别案例内部的行为模式，从而成为熟练工）；第二句：“With more practice and exposure to increasingly complex cases, the journeyman finds patterns not only within cases but also between cases.”（随着更多练习和接触越来越复杂的案例，熟练工不仅能发现案例内部的模式，还能发现案例之间的模式）。题干把这两句合并成 “starts to identify [4] ___ within and between cases”，用 identify 替换 recognize 与 finds，用 within and between cases 概括 not only within cases but also between cases，被识别的对象始终是 patterns（of behavior 是对 patterns 的具体说明）。因此答案取原文中形式最完整的那一处 patterns of behavior。这也是流程图题常见的出法：用一个概括性空格考查同段内两句话重复的信息点，做题时把两句的公共宾语找出来即可。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Advanced learner: studies more 5 ________ ways of doing things.",
          "translation": "进阶学习者（Advanced learner）：学习更多 ________ 的做事方式。",
          "answer": "complex",
          "wordClass": "形容词（位于比较级 more 之后，修饰后面的名词 ways of doing things，故填形容词原级，不加 -er、不改为名词）",
          "locating": {
            "paragraph": "3",
            "quote": "The journeyman still maintains regular contact with a mentor to solve specific problems and learn more complex strategies."
          },
          "synonyms": [
            "“studies” 同义替换为原文的 “learn”（学习）",
            "“ways of doing things” 同义替换为原文的 “strategies”（做事的方式、策略）",
            "“more …” 与原文的 “more complex” 结构完全一致，more 是比较级标记，其后必须接形容词，提示空格填形容词",
            "“Advanced learner” 对应原文的 the journeyman（已经进阶、但仍需导师帮助的阶段）"
          ],
          "locatingTip": "定位：流程图的第三个方框是 Advanced learner（进阶学习者），其上一格是 Journeyman，说明这一格仍在讲熟练工阶段的学习内容，回第 3 段找“继续学习更高难度内容”的句子，即 “The journeyman still maintains regular contact with a mentor to solve specific problems and learn more complex strategies.”。确定答案技巧：题干用比较级 more [5] ways of doing things，原文对应 more complex strategies，两者结构逐字对应：more 对应 more，ways of doing things 对应 strategies，剩下的形容词就是答案 complex。同时可用词性核对：more 是比较级标记词，后面只能接形容词或副词，而此处修饰名词 ways，因此必须填形容词 complex，不能填名词 complexity。",
          "analysis": "第 3 段第 4 句是本题定位句：“The journeyman still maintains regular contact with a mentor to solve specific problems and learn more complex strategies.”（熟练工仍然与导师保持定期联系，以解决具体问题并学习更复杂的策略）。流程图把 advanced learner 阶段描述为 “studies more [5] ___ ways of doing things”，其中 studies 对应 learn，ways of doing things 对应 strategies，比较级 more 与原文的 more 完全一致，剩下的信息点就是形容词 complex。可见流程图把原文的“向导师请教、学习更复杂的策略”概括为“学习更复杂的做事方式”，属于同义改写，答案只需照抄原文的 complex 一词。注意第 3 段第 2 句也出现过 “increasingly complex cases”（越来越复杂的案例），那是讲熟练工接触的案例难度提高，与“学习更复杂的策略”不是同一信息点，但同样印证了 complex 是这一阶段的标志词；题干限定 NO MORE THAN THREE WORDS，这里只填一个词 complex 即可，不要写成 more complex。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–10 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 10
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Novices and experts use the same system of knowledge to comprehend and classify objects.",
          "translation": "新手与专家使用相同的知识体系来理解和归类物体。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "A novice, for example, might group objects together by color or size, whereas an expert would group the same objects according to their function or utility."
          },
          "synonyms": [
            "“classify objects” 同义替换为原文的 “group objects together”（归类物体）",
            "“the same system of knowledge” 与原文的 “the organization of knowledge after exposure to and experience with thousands of cases” 相对立，原文强调知识组织方式因经验不同而不同",
            "“comprehend” 对应同段的 “Experts have a deeper understanding of their domains than novices do” 与 “comprehend the meaning of data”，即理解层面的差异"
          ],
          "locatingTip": "定位：题干的关键词是 novices、experts、objects 以及 classify，全文同时讨论“新手与专家如何给物体归类”的只有第 7 段，其中 A novice, for example, might group objects… whereas an expert would group the same objects… 一句把两者直接对比，是最佳定位句。确定答案技巧：判断题看到 the same（相同）这类表示“一致、无差别”的表述，就要回原文找有没有“不同、差别”的证据。原文用 whereas（而、却）把新手与专家并列对比：新手按颜色或大小归类，专家按功能或用途归类，两者的归类依据不同，也就是说他们依据的知识组织方式并不相同，与题干的 the same system of knowledge 直接矛盾，故判 FALSE。",
          "analysis": "第 7 段的核心论点是“专家在本领域内比非专家更能察觉有意义的模式”。原文先说 “An expert perceives meaningful patterns in her domain better than non-experts. Where a novice perceives random or disconnected data points, an expert connects regular patterns within and between cases.”（专家在本领域内比非专家更能识别有意义的模式。新手看到的是随机或彼此孤立的数据点，专家则能连接案例内部与案例之间的规律），接着指出这种能力并非天生：“This ability to identify patterns is not an innate perceptual skill; rather it reflects the organization of knowledge after exposure to and experience with thousands of cases.”（这种识别模式的能力不是先天的知觉技能，而是接触并经历成千上万个案例之后形成的知识组织方式）。所谓 organization of knowledge 就是题干所说的 system of knowledge，原文强调它随经验而变、因人而异。随后作者用最具体的例子说明差异：“A novice, for example, might group objects together by color or size, whereas an expert would group the same objects according to their function or utility.”（例如，新手可能按颜色或大小把物体归为一类，而专家会按功能或用途把同样的物体归类）。同一批物体，新手和专家采用的归类标准截然不同，说明他们动用的知识体系并不同一，因此题干所说的 use the same system of knowledge 与原文相反，答案判 FALSE。做本题要抓住两个信号：一是 whereas 这一对比连词，二是原文明确说识别模式的能力“不是先天的（not an innate perceptual skill）”，而是后天知识组织的结果，两句都指向“新手与专家的知识体系不同”。",
          "traps": [
            "为什么不是 TRUE：原文用 whereas 把两种归类方式对立起来——新手按颜色或大小（by color or size），专家按功能或用途（according to their function or utility），归类依据不同即知识组织方式不同；原文还说这种能力 “is not an innate perceptual skill; rather it reflects the organization of knowledge”，即知识体系是后天差异化的产物，与题干 the same system of knowledge 相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对新手与专家如何理解和归类物体交代得非常具体（既有概括句 Experts have a deeper understanding of their domains than novices do，也有归类的具体例子），信息充分且与题干冲突，属于“有相反信息”的 FALSE，而不是“未提及”的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The focus of novices' training is necessarily on long term memory.",
          "translation": "新手训练的重点必然是长期记忆。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The novice needs to learn the guiding principles and rules of a given task in order to perform that task."
          },
          "synonyms": [
            "“novices' training” 对应原文的 “The novice needs to learn …”，即新手学习与训练的内容",
            "“the focus … is on” 在原文中没有任何对应表达：原文只列出新手要学的项目（原则、规则、案例、由导师引导），从未指出哪一项是训练重点",
            "“long term memory” 只在第 8 段以 “better domain-specific short-term and long-term memory than novices do” 的形式出现，那是专家与新手记忆水平的比较，不是新手训练的内容"
          ],
          "locatingTip": "定位：题干主体是 novices 与 training，全文系统描述新手训练内容的段落是第 2 段（学原则与规则、接触案例、由导师引导）；memory 一词则出现在第 8 段，那里谈的是专家在短期与长期记忆上优于新手。确定答案技巧：判断题遇到 necessarily、always、only 这类绝对化词，以及 focus、aim、purpose 这类“目的／重点”类名词，都要格外警惕，它们往往是 NOT GIVEN 的高发点。回原文核对：第 2 段列出的新手学习内容是 guiding principles and rules、specific cases、导师的引导，通篇没有提到长期记忆是训练重点；第 8 段的 long-term memory 讲的是专家与新手在记忆能力上的差异（experts have better … memory than novices do），属于“比较结果”，不是“训练重点”。原文既没说新手训练以长期记忆为重点，也没说不是，属于信息缺失，故判 NOT GIVEN。",
          "analysis": "第 2 段完整交代了新手阶段要做的事情：“An individual enters a field of study as a novice. The novice needs to learn the guiding principles and rules of a given task in order to perform that task. Concurrently, the novice needs to be exposed to specific cases, or instances, that test the boundaries of such principles. Generally, a novice will find a mentor to guide her through the process of acquiring new knowledge.”（一个人以新手身份进入某个学习领域。新手需要学习某项任务的基本指导原则和规则才能完成该任务。同时，新手需要接触能检验这些原则边界的案例或实例。一般来说，新手会找一位导师来引导自己获取新知识）。这段话说清了新手训练的三项内容——原则与规则、具体案例、导师引导，但没有一项涉及记忆，更没有说训练重点放在长期记忆上。全文提到 memory 的只有第 8 段首句：“Experts have better domain-specific short-term and long-term memory than novices do.”（专家在特定领域的短期和长期记忆都优于新手）。该句的比较对象是专家与新手，比较内容是记忆的好坏，与“新手训练的重点是不是长期记忆”完全不是一回事——原文只是说专家记性更好，并未交代新手的训练聚焦在什么上，也没说新手不训练记忆。题干用 necessarily（必然）作绝对化断言，而原文对此毫无交代，因此答案为 NOT GIVEN。做题提示：本题的干扰在于 long term memory 确有其词，但词语出现不等于信息对应，必须核对语义角色——原文里的 long-term memory 是“比较结果”，题干里的是“训练重点”，两者不能画等号。",
          "traps": [
            "为什么不是 TRUE：原文虽在第 8 段提到 long-term memory，但只是说 “Experts have better domain-specific short-term and long-term memory than novices do”，讲的是专家记忆优于新手这一比较结果；第 2 段列举的新手训练内容（原则规则、案例、导师引导）中并不包含长期记忆，无法证明训练重点在长期记忆，因此不选 TRUE。",
            "为什么不是 FALSE：原文没有出现任何“新手训练不以长期记忆为重点”或“记忆训练不重要”之类的表述，既没有肯定也没有否定；缺少相反信息时不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "When working out the problems, novices want to solve them straight away.",
          "translation": "在解决问题时，新手希望马上把问题解决掉。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Experts spend more time thinking about a problem to fully understand it at the beginning of a task than do novices, who immediately seek to find a solution."
          },
          "synonyms": [
            "“straight away” 同义替换为原文的 “immediately”（立刻、马上）",
            "“want to solve them” 同义替换为原文的 “seek to find a solution”（想要找到解决办法）",
            "“when working out the problems” 对应原文的 “at the beginning of a task” 与 “thinking about a problem”，指处理问题、任务的情境",
            "“novices” 在原文中以 “than do novices, who immediately seek …” 的形式作比较对象并直接复现"
          ],
          "locatingTip": "定位：题干关键词是 novices 和“马上解决问题”这一行为，回原文找新手如何对待问题的句子，落在第 8 段第 3 至 4 句，其中 who immediately seek to find a solution 明确修饰 novices，是最直接的定位点。确定答案技巧：原文把专家与新手在“面对问题的最初阶段”做对比——专家花更多时间把问题彻底想清楚，而新手则立刻寻求解决方案。immediately 与题干 straight away 完全同义，seek to find a solution 与 want to solve them 同义，信息方向一致，没有程度或范围的偏差，因此判 TRUE。注意这类对比句的核心在于“双方行为相反”：专家慢想、新手快找，题干只取了新手的这一半，正好与原文吻合。",
          "analysis": "第 8 段讲专家在处理问题方面的特征，其中第 3 至 4 句是本题依据：“Interestingly, experts go about solving problems differently than novices. Experts spend more time thinking about a problem to fully understand it at the beginning of a task than do novices, who immediately seek to find a solution.”（有趣的是，专家解决问题的方式与新手不同。在任务开始时，专家会花更多时间思考问题以求彻底理解，而新手则马上就想找到解决办法）。句中 who immediately seek to find a solution 是非限制性定语从句，直接修饰 novices，把新手的典型行为说得很清楚：一开始就想得到答案。题干把这一行为写成 “novices want to solve them straight away”，其中 straight away 对应 immediately（立刻、马上），want to solve 对应 seek to find a solution（寻求解决办法），when working out the problems 对应句中“面对问题”的情境，三处改写一一对应，信息完全一致，故选 TRUE。做题提示：本题属于“对比句只取一方”的格式，读完对比句要确认题干问的是哪一方——题干问 novices，原文对应的正是 who 从句所描述的一方；若题干问 experts，则应回到主句“专家花更多时间思考”这一半。",
          "traps": [
            "为什么不是 FALSE：原文明确说新手 “immediately seek to find a solution”，与题干“希望马上解决问题”方向一致，没有任何矛盾点（原文并没有说新手愿意反复琢磨或喜欢拖延），所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到新手，还直接描述了新手在任务开始阶段的行为特征是“立刻寻求解决方案”，信息明确且具体，并非未提及，因此不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "When handling problems, experts are always more efficient than novices in their fields.",
          "translation": "在处理问题时，专家在自己的领域内总是比新手更高效。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Moreover, experts perform tasks in their domains faster than novices and commit fewer errors while problem solving. Interestingly, experts go about solving problems differently than novices."
          },
          "synonyms": [
            "“in their fields” 同义替换为原文的 “in their domains”（在自己的领域内）",
            "“more efficient” 部分对应原文的 “faster than novices and commit fewer errors”（更快、错误更少），但原文并未给出“总是更快、总是错误更少”的绝对结论",
            "“always” 在原文中找不到对应：原文紧接着说明专家 “go about solving problems differently”，并指出他们在任务开始时花的时间比新手更多"
          ],
          "locatingTip": "定位：题干关键词是 experts、novices、efficient，以及领域限定 in their fields，对应原文第 8 段第 2 句的 “experts perform tasks in their domains faster than novices and commit fewer errors while problem solving”。确定答案技巧：含 always、completely、all 等绝对化词的判断题，正确做法是先找到原文给出的正面信息，再检查是否有削弱它的句子。原文确实承认专家更快、错误更少，但紧接的下一句就说专家解决问题的路径与新手不同，而且更具体地说 “Experts spend more time thinking about a problem to fully understand it at the beginning of a task than do novices, who immediately seek to find a solution.”——在任务开始时，专家花的时间反而比新手多，属于效率上的“慢起步”。既然存在专家更慢的情形，题干“总是（always）比新手更高效”的绝对化表述就与原文冲突，故判 FALSE。",
          "analysis": "第 8 段的前几句给出专家的多项优势：“Experts have better domain-specific short-term and long-term memory than novices do. Moreover, experts perform tasks in their domains faster than novices and commit fewer errors while problem solving.”（专家的领域性短期与长期记忆都优于新手。此外，专家在自己的领域内完成任务比新手更快，解决问题时出错更少）。如果只读到此处，容易误选 TRUE；但原文随即补上关键的两句：“Interestingly, experts go about solving problems differently than novices. Experts spend more time thinking about a problem to fully understand it at the beginning of a task than do novices, who immediately seek to find a solution.”（有趣的是，专家解决问题的方式与新手不同。任务开始时，专家会花更多时间思考问题以求彻底理解，而新手则马上就想找到答案）。可见专家的效率是有条件的：他们在整体任务上更快、错误更少，但在任务最开始的思考阶段反而比新手更慢。此外第 10 段还专门论述专家的弱点：“The strengths of expertise can also be weaknesses.”（专业能力的强项也可能成为弱项），进一步反驳“专家做任何事都更高效”。题干的落点是 experts are always more efficient than novices，其中的 always 是绝对量化词，把原文有条件的比较（faster、fewer errors，但开始时更慢）扩大成无条件结论，与原文不符，因此判 FALSE。做题提示：一旦题干出现 always、all、never、only 这类绝对词，先假设它可能错，再回原文找反例，本题的反例就是“专家在任务开始时花更多时间思考”。",
          "traps": [
            "为什么不是 TRUE：原文只承认专家在自己的领域内 “faster than novices and commit fewer errors while problem solving”，同时明确指出专家在任务开始时 “spend more time thinking about a problem … than do novices”，即在起始阶段反而更慢；题干用 always 把“有条件的更快”升级为“总是更高效”，与原文的例外相冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对专家处理问题的速度、错误率以及思考耗时都有具体交代（faster、fewer errors、more time thinking at the beginning），信息充分且部分与题干相反；“原文已有相关信息但结论被绝对化词推翻”属于 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Experts tend to review more than novices on cases when flaws or limits on understanding took place.",
          "translation": "当出现错误或理解上的局限时，专家往往比新手做更多的复查。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "Better at self-monitoring than novices, experts are more aware of instances where they have committed errors or failed to understand a problem. Experts check their solutions more often than novices and recognize when they are missing information necessary for solving a problem."
          },
          "synonyms": [
            "“review more” 同义替换为原文的 “check their solutions more often”（更频繁地检查自己的解法）",
            "“flaws” 同义替换为原文的 “errors”（错误）",
            "“limits on understanding” 同义替换为原文的 “failed to understand a problem” 以及 “missing information necessary for solving a problem”（理解失败、信息不足）",
            "“tend to” 与原文的 “more aware of”、“better at self-monitoring” 这类倾向性描述对应，都不是绝对化表述"
          ],
          "locatingTip": "定位：题干关键词是 experts、review、more than novices 以及 errors／understand，第 9 段首句就直接用了 “Better at self-monitoring than novices, experts are more aware of instances where they have committed errors or failed to understand a problem.”，一句话内含全部关键词，是最佳定位点。确定答案技巧：题干把两个信息点合并——①“专家比新手更常复查（review more）”，对应原文 “Experts check their solutions more often than novices”；②“出现错误或理解上出问题时”，对应原文 “instances where they have committed errors or failed to understand a problem”。同时原文首句的 Better at self-monitoring（更善于自我监控）为“复查更多”提供了概括性支撑。三个信息点方向一致、无程度偏差（tend to 对应 more often，不是 always），因此判 TRUE。",
          "analysis": "第 9 段整段讲专家的自我监控能力：“Better at self-monitoring than novices, experts are more aware of instances where they have committed errors or failed to understand a problem. Experts check their solutions more often than novices and recognize when they are missing information necessary for solving a problem. Experts are aware of the limits of their domain knowledge and apply their domain's heuristics to solve problems that fall outside of their experience base.”（专家比新手更善于自我监控，更能察觉自己犯错或未能理解问题的情形。专家比新手更频繁地检查自己的解答，并能意识到自己缺少解决问题所必需的信息。专家清楚自身领域知识的边界，会运用本领域的启发式方法去解决超出其经验范围的问题）。题干 “Experts tend to review more than novices on cases when flaws or limits on understanding took place” 可以逐块对应：review more 对应 check their solutions more often；flaws 对应 committed errors；limits on understanding 对应 failed to understand a problem 与 missing information necessary for solving a problem；tend to 对应段首的 Better at self-monitoring 这一倾向性描述。全段信息同向，且没有 always 之类的绝对化扩写，故答案判 TRUE。做题提示：本题的改写方式是“把原文的两三个点打包进一个句子”，考场上一旦发现题干与原文有多处一一对应的词，且方向一致，即可确定 TRUE，不必要求逐字相同。",
          "traps": [
            "为什么不是 FALSE：原文明确说专家 “check their solutions more often than novices”，并且 “better at self-monitoring”，在犯错或理解失败的情形上更敏感（more aware of instances where they have committed errors or failed to understand a problem），这些都与题干“发现错误或理解局限时复查更多”一致，不存在矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干所需的三项信息在原文中都有明确交代——复查频率（check their solutions more often than novices）、错误情形（committed errors）、理解局限（failed to understand a problem／missing information），信息完整，不属于未提及，故不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Some have tried to explain that experts differ when using cognitive 11 ________ to forecast.",
          "translation": "有人试图解释，专家在预测时使用认知 ________ 的方式有所不同。",
          "answer": "models",
          "wordClass": "名词（复数，受前面形容词 cognitive 修饰，作 using（-ing 分词）的宾语；原文形式即为复数 models，不得改为单数 model）",
          "locating": {
            "paragraph": "11",
            "quote": "Some have argued that experts, like all humans, are inconsistent when using mental models to make predictions."
          },
          "synonyms": [
            "“Some have tried to explain” 同义替换为原文的 “Some have argued”（有人主张、试图解释）",
            "“differ” 同义替换为原文的 “are inconsistent”（不一致、表现有差别）",
            "“to forecast” 同义替换为原文的 “to make predictions”（做预测）",
            "“cognitive” 同义替换为原文的 “mental”（认知的、心智的），两者在雅思中常作同义替换"
          ],
          "locatingTip": "定位：本题出现在 summary 的第一句，题干保留了 Some have… 这一句式，且含 forecast 与 cognitive 两个关键词，回原文第 11 段（末段）第 2 句，即 “Some have argued that experts, like all humans, are inconsistent when using mental models to make predictions.”，句式与词汇高度一致。确定答案技巧：题干用 using cognitive [11] to forecast，原文对应 using mental models to make predictions，其中 mental 换成了 cognitive（同义），to make predictions 换成 to forecast（同义），剩下未被改写的核心名词就是答案 models。填词时注意：cognitive 是形容词，后面必须有名词，而原文正是 mental models，故填复数名词 models；不要填 mental（那是被替换掉的形容词），也不要写成单数 model（原文用复数）。",
          "analysis": "文章末段（第 11 段）解释为什么专家的预测不如统计模型准确：“Theorists and researchers differ when trying to explain why experts are less accurate forecasters than statistical models. Some have argued that experts, like all humans, are inconsistent when using mental models to make predictions. A number of researchers point to human biases to explain unreliable expert predictions.”（理论家和研究者在解释为什么专家是比统计模型更差的预测者时意见不一。有些人主张，专家和所有人一样，在运用心智模型做预测时表现不一致。许多研究者把专家预测不可靠归因于人的偏见）。summary 第 11 空所在的句子 “Some have tried to explain that experts differ when using cognitive [11] to forecast” 正是第 2 句的改写：主语 Some 保留，动词 have argued 换成 have tried to explain，be inconsistent 换成 differ，mental 换成同义形容词 cognitive，to make predictions 换成 to forecast，被保留原词的核心名词 models 就是空格答案。从搭配上也能验证：形容词 cognitive 后接复数名词 models 是原文的固定搭配，summary 只替换了修饰语，没有改变中心词。此外还可与第 10 段呼应：第 10 段说专家的预测并不优于简单统计模型（simple statistical models），第 11 段则解释原因，其中 mental models 指专家头脑中的心智模型，与 statistical models 形成对照，填入时保持复数小写 models。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Researchers believe it is due to 12 ________.",
          "translation": "研究者认为这是由于 ________。",
          "answer": "human biases",
          "wordClass": "名词短语（由形容词 human 修饰的复数名词 biases，作介词 to 的宾语；保持原文复数形式 human biases）",
          "locating": {
            "paragraph": "11",
            "quote": "A number of researchers point to human biases to explain unreliable expert predictions."
          },
          "synonyms": [
            "“Researchers believe” 同义替换为原文的 “A number of researchers point to”（许多研究者指出、归因于）",
            "“it is due to” 同义替换为原文的 “to explain …”（解释某现象的成因），题干的 due to 表示归因",
            "“human biases” 在原文中原词复现，是研究者给出的原因",
            "“unreliable expert predictions” 与 summary 上文提到的“专家预测不如统计表准确”对应，说明归因对象一致"
          ],
          "locatingTip": "定位：题干承接 summary 上一句“为什么专家的预测不准”，关键词是 Researchers，回原文第 11 段找以研究者为主语的归因句，即 “A number of researchers point to human biases to explain unreliable expert predictions.”。确定答案技巧：原文结构为 point to X to explain Y——“把 Y 归因于 X”，题干把它改写成 “it is due to [12]”，其中 it 指代前面讨论的“专家预测不准”这一现象，due to 即 point to 的归因含义，因此 X 就是答案。X 由形容词加复数名词构成：human biases（人的偏见）。注意 NO MORE THAN TWO WORDS 的限制，答案恰好两个词；不要只写 biases，也不要误填下一句的 forecasting 或 cognitive aspects（那是后文研究内容，不是归因对象）。",
          "analysis": "第 11 段从两个角度解释专家的预测为何不准。第一种解释是不一致性：“Some have argued that experts, like all humans, are inconsistent when using mental models to make predictions.”（有些人主张，专家和所有人一样，运用心智模型预测时并不稳定）。第二种解释就是本题定位句：“A number of researchers point to human biases to explain unreliable expert predictions.”（许多研究者把专家预测不可靠归因于人的偏见）。summary 把该句压缩成 “Researchers believe it is due to [12] ___”，主语 A number of researchers 概括为 Researchers，point to … to explain 改写为 it is due to（把某现象归因于某事），空格承担的正是被归因的对象 human biases。这里要特别区分句中两个名词短语：human biases 是被归咎的原因，unreliable expert predictions 是待解释的现象，题干用 it 指代现象、用空格承担原因，因此答案只能是 human biases。词性上，due to 是介词短语，后接名词性成分；human biases 为“形容词加复数名词”，保持不变。段末又提到 the causes or manifestations of human bias，可见 human bias 是贯穿整段的因果核心词，可交叉验证答案。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "However attempting endeavor of finding answers did not yet produce 13 ________.",
          "translation": "然而，为寻找答案所做的种种努力至今仍未产生 ________。",
          "answer": "consensus",
          "wordClass": "名词（不可数名词，指共识；作动词 produce 的宾语，用单数形式，不加冠词、不改复数）",
          "locating": {
            "paragraph": "11",
            "quote": "During the last 30 years, researchers have categorized, experimented, and theorized about the cognitive aspects of forecasting. Despite such efforts, the literature shows little consensus regarding the causes or manifestations of human bias."
          },
          "synonyms": [
            "“attempting endeavor of finding answers” 同义替换为原文的 “researchers have categorized, experimented, and theorized about the cognitive aspects of forecasting” 以及 “such efforts”（各种研究努力）",
            "“did not yet produce” 同义替换为原文的 “shows little consensus”（几乎没有形成共识）",
            "“consensus” 在原文中原词复现（little consensus），是这些努力尚未达成的结果",
            "“however” 对应原文的 “Despite such efforts”（尽管有这些努力），都表示转折"
          ],
          "locatingTip": "定位：本题是 summary 的最后一句，关键词是“努力”与“没有产生某结果”。回原文第 11 段末两句，第 4 句用 During the last 30 years 列举研究者 30 年来做的分类、实验与理论化工作（即题干所说的“为寻找答案所做的努力”），第 5 句用 Despite such efforts 转折，指出文献几乎没有形成某种东西。确定答案技巧：题干 did not yet produce 与原文 shows little consensus 对应（都是“没能形成”），因此 produce 的宾语就是原文 little 所修饰的名词 consensus。词性上，produce 后接名词性宾语，consensus 是不可数名词，题干空后没有任何限定成分，故直接填 consensus，不加冠词、不变复数。切勿把 such efforts 一类内容误答进去——那是“努力”，不是“缺失的结果”。",
          "analysis": "第 11 段末两句总结了学界的研究现状：“During the last 30 years, researchers have categorized, experimented, and theorized about the cognitive aspects of forecasting. Despite such efforts, the literature shows little consensus regarding the causes or manifestations of human bias.”（在过去 30 年里，研究者对预测的认知层面做了分类、实验和理论建构。尽管付出了这些努力，文献在人类偏见的成因或表现形式方面仍几乎没有共识）。summary 的最后一句 “However attempting endeavor of finding answers did not yet produce [13] ___” 正是这两句的概括：attempting endeavor of finding answers 对应 researchers have categorized, experimented, and theorized 以及 such efforts；did not yet produce 对应 shows little consensus；空格所需的宾语就是被 little 修饰的名词 consensus（共识）。从语义上看，文章的逻辑链条是：专家预测不准，研究者提出了各种解释（心智模型不一致、人的偏见），然而 30 年的研究仍未能就偏见的成因与表现取得共识——所以缺少的东西只能是 consensus。词性方面，produce 后应接名词，consensus 作不可数名词时用原形即可；改写成复数或加冠词都不符合原文用词。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
