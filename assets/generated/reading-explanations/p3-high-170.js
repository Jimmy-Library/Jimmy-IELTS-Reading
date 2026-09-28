(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-170", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-170",
  "meta": {
    "examId": "p3-high-170",
    "title": "Pacific Navigation and Voyaging 太平洋航海",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "The Pacific islands were uninhabited when migrants arrived by sea from Southeast Asia.",
          "translation": "来自东南亚的移民乘船抵达时，太平洋诸岛是无人居住的。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The many tiny islands of the Pacific Ocean had no human population until ancestors of today's islanders sailed from Southeast Asia in ocean-going canoes approximately 2,000 years ago."
          },
          "synonyms": [
            "「uninhabited」（无人居住的）同义替换为原文的「had no human population」（没有人类人口）",
            "「migrants arrived by sea from Southeast Asia」同义替换为原文的「ancestors of today's islanders sailed from Southeast Asia in ocean-going canoes」（今天岛民的祖先乘远洋独木舟从东南亚起航）",
            "「when migrants arrived」的时间关系同义替换为原文的「until ...」结构：原文说这些岛屿「had no human population until ...」，即祖先起航（到达）之前岛上一直没有人，等价于移民抵达时岛上无人居住"
          ],
          "locatingTip": "定位：题干里的两个专有名词 Pacific islands 与 Southeast Asia 同时出现在第 1 段第 1 句，属于全文开篇信息，扫读首段即可锁定，不必读完全文。确定答案技巧：本题的关键是读懂「no ... until ...」这一句型的时间关系。「had no human population until ancestors ... sailed from Southeast Asia」直译为「在这些岛屿的祖先从东南亚起航之前，这些岛屿没有人类人口」，把时间点对齐到「移民抵达之时」，岛上就是没有人的状态。题干用 uninhabited 一词概括 had no human population，方向完全一致，所以判 YES。切忌把 until 误解为「直到那时才有人居住，之前的情况不明」——before 与 until 搭配否定词时，表达的是「在此之前一直没有」，信息是明确的，不能选 NOT GIVEN。",
          "analysis": "第 1 段首句是全文的背景句：「The many tiny islands of the Pacific Ocean had no human population until ancestors of today's islanders sailed from Southeast Asia in ocean-going canoes approximately 2,000 years ago.」（太平洋上众多小岛在约 2000 年前今天岛民的祖先乘远洋独木舟从东南亚起航之前，一直没有任何人类人口）。句中 had no human population 是状态描述，until 引出状态结束的时点，也就是说：在祖先乘独木舟抵达之前的所有时间里，这些岛屿都是无人居住的；人口是由这批来自东南亚的航海者带来的。题干把这一层意思压缩成「太平洋诸岛在移民抵达时无人居住」，其中 uninhabited 对应 had no human population，migrants arrived by sea from Southeast Asia 对应 ancestors of today's islanders sailed from Southeast Asia in ocean-going canoes（by sea 对应 in ocean-going canoes，sailed 对应 arrived）。三处改写同向同义，没有任何矛盾或缺失，故答案为 YES。补充一点：该句还给出时间 2,000 years ago，与题干不冲突，可用来交叉印证定位是否找对。",
          "traps": [
            "为什么不是 NO：原文说这些岛屿在祖先从东南亚起航之前「had no human population」，即空无一人；题干说移民抵达时岛屿无人居住，与原文同向，不存在任何相反信息，所以不能选 NO。",
            "为什么不是 NOT GIVEN：有考生会担心「无人居住」是指抵达前还是抵达时，但原文用 had no human population until 明确界定了状态持续的终点就是祖先起航（抵达）那一刻，起点信息完整、时间关系清楚，并非无从判断，因此不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Andrew Sharp was the first person to write about the migrants to the islands.",
          "translation": "安德鲁·夏普（Andrew Sharp）是第一个就移居这些岛屿的人撰写文章的人。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Although the romantic vision of some early twentieth-century writers of fleets of heroic navigators simultaneously setting sail had come to be considered by later investigators to be exaggerated, no considered assessment of Pacific voyaging was forthcoming until 1956 when the American historian Andrew Sharp published his research."
          },
          "synonyms": [
            "「was the first person to write about」与原文的「no considered assessment of Pacific voyaging was forthcoming until 1956 when ... Andrew Sharp published his research」相互冲突：原文限定为第一个的是「considered assessment」（经过深思的严肃评估），而不是「写作」这件事本身",
            "「some early twentieth-century writers of fleets of heroic navigators simultaneously setting sail」证明在 Sharp 之前已经有人撰写过这一主题（浪漫化的想象），他们同样是写这件事的人",
            "「the American historian Andrew Sharp」与题干人名完全复现，用于定位；「1956」是限定第一个「严肃评估」的时间标志"
          ],
          "locatingTip": "定位：人名 Andrew Sharp 是大写专有名词，在第 2 段集中出现，扫读时直接跳到第 2 段第 1 句。确定答案技巧：本题是「限定语偷换」的典型题。原文的限定结构是 no considered assessment ... until 1956 when Sharp published his research，即「在他之前没有人做出过严肃的评估（assessment）」；题干却把限定语从「严肃评估」换成了「写作（to write about）」，把范围放大成「他是第一个写这个话题的人」。而同一个句子的前半部分已经明说 early twentieth-century writers（二十世纪初的一些作家）早已写过这一主题，只不过被视为夸张的浪漫想象。既有人在他之前写过，题干又被原文直接反驳，因此判 NO。解题时务必盯住名词前的修饰成分：assessment、theory、research 这类词前的限定语（considered、systematic 等）常常是判分点。",
          "analysis": "第 2 段第 1 句：「Although the romantic vision of some early twentieth-century writers of fleets of heroic navigators simultaneously setting sail had come to be considered by later investigators to be exaggerated, no considered assessment of Pacific voyaging was forthcoming until 1956 when the American historian Andrew Sharp published his research.」（尽管二十世纪初一些作家所描绘的「英雄式航海者舰队同时起航」的浪漫想象已被后来的研究者视为夸大之词，但直到 1956 年美国历史学家 Andrew Sharp 发表研究，才出现了对这种太平洋航海的严肃评估）。这个句子的让步部分（although 从句）交代得很清楚：在 Sharp 之前，早已有 early twentieth-century writers 就这一主题写下了「浪漫的想象」，只是不够严谨、被后人认为夸大。主句真正要强调的是：Sharp 之前没有出现过 considered assessment（严肃评估），所以他算得上「第一个给出严肃评估的人」，而不是「第一个写作的人」。题干把 was the first person to write about 这顶帽子扣给 Sharp，与原文的 early twentieth-century writers 已先写过这一事实直接冲突，故为 NO。做题技巧：题干里出现 the first / the only / the most 这类绝对化表述时，回到原文核对这项「第一」到底修饰的是哪个名词，本题的「第一」属于 considered assessment，不属于 writing 行为。",
          "traps": [
            "为什么不是 YES：原文只说 Sharp 之前没有人给出 considered assessment（严肃评估），并没有说他之前没有人写过这一主题；相反，同句的让步部分明确提到二十世纪初的一些作家已经写过「英雄式航海者舰队」的浪漫想象。题干所说的「第一个撰写这一话题的人」被原文否定，因此不能选 YES。",
            "为什么不是 NOT GIVEN：如果原文只交代「Sharp 于 1956 年发表了研究」，那么他是不是第一个写作者确实无从得知；但原文额外给出了 early twentieth-century writers 的存在，这条信息与题干直接对立，属于「有明确相反信息」而非「信息缺失」，所以判 NO 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Andrew Sharp believed migratory voyages were based more on luck than on skill.",
          "translation": "安德鲁·夏普认为，迁徙航行更多依赖运气而非技能。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Sharp challenged the 'heroic vision' by asserting that the expertise of the navigators was limited, and that the settlement of the islands was not systematic, being more dependent on good fortune by drifting canoes."
          },
          "synonyms": [
            "「was based more on luck than on skill」同义替换为原文的「being more dependent on good fortune」与「the expertise of the navigators was limited」两处的组合：good fortune 即 luck，expertise ... was limited 即 skill 不足",
            "「migratory voyages」同义替换为原文的「the settlement of the islands」（岛屿的定居/移民过程）",
            "「Andrew Sharp believed」同义替换为原文的「by asserting that」；原文的 asserting 是「断言、主张」，即表明 Sharp 本人的观点"
          ],
          "locatingTip": "定位：继续用 Andrew Sharp 这一人名锁定第 2 段，本题的答案句紧跟在第 28 题答案句之后，即第 2 段第 2 句。确定答案技巧：题干的核心是比较关系「more on luck than on skill」（靠运气多于靠技能），要在原文中找「技能有限」与「更依赖运气」这两条并列信息。原文用 and that 并列了两点：expertise of the navigators was limited（航海者的专业技能有限）、being more dependent on good fortune（更依赖好运），正好是题干 luck 与 skill 两侧的对应物，比较关系一致，故判 YES。这类「比较关系题」的解题公式是：把题干两侧的 A 和 B 各自在原文找到落点，再确认原文的比较方向（more ... than ...）与题干一致。",
          "analysis": "第 2 段第 2 句：「Sharp challenged the 'heroic vision' by asserting that the expertise of the navigators was limited, and that the settlement of the islands was not systematic, being more dependent on good fortune by drifting canoes.」（Sharp 挑战这一「英雄式想象」，断言航海者的专业技能是有限的，岛屿的定居并非有系统的行为，更多是依赖独木舟漂流带来的好运）。句中包含两个关键信息点，正对应题干的两侧：一侧是 skill——原文用 the expertise of the navigators was limited（航海者的专业技能有限）来压低技术水平；另一侧是 luck——原文用 more dependent on good fortune（更依赖好运）来抬升偶然因素，随后的 by drifting canoes（靠漂流的独木舟）进一步说明这种好运从何而来。题干所说「迁徙航行更多依赖运气而非技能」恰好就是 Sharp 的立场（believed 对应 asserting），方向、对象、比较关系三者一致，因此答案选 YES。注意不要把后文「Sharp's theory was widely challenged, and deservedly so.」理解为作者否认 Sharp 有过这种看法——那是在评价 Sharp 的理论是否正确，与「Sharp 本人持何观点」无关，题干问的是 Sharp believed，不是作者是否同意。",
          "traps": [
            "为什么不是 NO：原文用 asserting 明确把「专业技能有限」「更依赖好运」归为 Sharp 的主张，题干只是在复述他的观点，没有任何与原文相反之处；后文说他的理论受到广泛质疑，属于他人的评价，不构成对「Sharp 相信什么」的否定，所以不能选 NO。",
            "为什么不是 NOT GIVEN：原文既写了 expertise was limited，又写了 more dependent on good fortune，运气与技能这两侧的信息都齐备且比较方向明确，属于信息完整，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "Despite being controversial, Andrew Sharp's research had positive results.",
          "translation": "尽管引发争议，安德鲁·夏普的研究仍产生了积极的结果。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Sharp's theory was widely challenged, and deservedly so. If nothing else, however, it did spark renewed interest in the topic and precipitated valuable new research."
          },
          "synonyms": [
            "「Despite being controversial」同义替换为原文的「was widely challenged, and deservedly so」（受到广泛质疑，而且理应如此）",
            "「had positive results」同义替换为原文的「did spark renewed interest in the topic and precipitated valuable new research」（确实重新激起了对这一话题的兴趣，并促成了有价值的新研究）",
            "「If nothing else, however」是让步转折标志，对应题干 Despite，用来提示「虽然被质疑，但是仍有正面作用」这一层转折关系"
          ],
          "locatingTip": "定位：人名 Sharp 集中出现在第 2 段，本题落在该段最后两句。确定答案技巧：题干是典型的「让步加结果」结构（Despite A, B），原文同样用让步转折结构表达：前句交代 A（theory was widely challenged, and deservedly so，即充满争议、被广泛质疑），后句用 If nothing else, however 引出 B（spark renewed interest、precipitated valuable new research，即带来了积极的结果）。题干两部分的语义与原文的转折结构严丝合缝，valuable new research 就是 positive results 的最佳对应，因此判 YES。注意 deservedly so（理应受质疑）只是作者对争议正当性的判断，并不否定后文所讲的正面推动作用。",
          "analysis": "第 2 段末两句：「Sharp's theory was widely challenged, and deservedly so. If nothing else, however, it did spark renewed interest in the topic and precipitated valuable new research.」（Sharp 的理论受到广泛质疑，而且理应如此。不过，至少它确实重新激起了人们对这一话题的兴趣，并促成了一批有价值的新研究）。原文的逻辑可以拆成两层：第一层讲「争议」——widely challenged（被广泛质疑），完全对应题干的 being controversial；第二层用 If nothing else, however 明确转折，指出即使它的结论站不住脚，也仍有正面贡献——spark renewed interest（重新点燃兴趣）与 precipitated valuable new research（催生有价值的新研究），正对应题干的 had positive results。deservedly so 虽然对 Sharp 的理论带有负面评价，但它修饰的是「被质疑」这件事本身，与「研究带来了积极结果」并不矛盾，两者在同一段里共存恰恰说明作者的态度是「理论不对，但推动力有价值」。因此答案为 YES。",
          "traps": [
            "为什么不是 NO：原文的 however 转折句明确给出了两项正面结果（重新激起兴趣、促成有价值的新研究），为题干提供了直接支持；deservedly so 只是承认质疑有理，并没有否认这些积极影响，所以不能选 NO。",
            "为什么不是 NOT GIVEN：有考生只记住「被广泛质疑」这半句，以为作者只是在批评 Sharp，但原文紧接着用 If nothing else 明确点出正面作用，信息完整且具体（spark renewed interest、precipitated valuable new research），并非没有交代，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "Edwin Doran disagreed with the findings of Lewis's research.",
          "translation": "埃德温·多兰（Edwin Doran）不同意刘易斯（Lewis）研究的结论。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The geographer Edwin Doran followed a quite different approach. He was interested in obtaining exact data on canoe sailing performance, and to that end employed the latest electronic instrumentation."
          },
          "synonyms": [
            "「Edwin Doran」在原文中与人名原词复现，并附有身份 the geographer（地理学家），用于定位到第 5 段",
            "「disagreed with」在原文中找不到对应表达：原文只说「followed a quite different approach」（采用了相当不同的方法），而方法不同并不等于不同意对方的结论",
            "「Lewis's research」在第 4 段已出现，第 5 段开头用 different approach 与之形成对照，但文中没有出现任何表示否定、反驳、质疑 Lewis 的措辞（如 disagreed、rejected、challenged）"
          ],
          "locatingTip": "定位：用大写人名 Edwin Doran 一步锁定第 5 段首句；Lewis 的研究在第 4 段，两段相邻，本题正好考两段之间的关系，所以要从第 5 段首句读起。确定答案技巧：判断题中，由「不同（different）」推断「反对（disagree）」是最常见的思维跳跃。原文用 quite different approach 说明 Doran 换了研究角度（他不是去亲身体验传统航行，而是用电子仪器测量独木舟的性能数据），这属于研究方向或方法上的差异；而「不同意某人的结论」需要原文出现针对 Lewis 结论的否定评价。原文从第 5 段到第 8 段既没有批评 Lewis，也没有表示赞同或反对，只有「方法各异」和「把各家的发现拼接起来」的表述，属于信息缺失，因此判 NOT GIVEN。",
          "analysis": "第 5 段开头两句：「The geographer Edwin Doran followed a quite different approach. He was interested in obtaining exact data on canoe sailing performance, and to that end employed the latest electronic instrumentation.」（地理学家 Edwin Doran 采用了相当不同的方法。他感兴趣的是获取独木舟航行性能的精确数据，为此使用了最新的电子仪器）。首先要分清「different approach」修饰的是什么：它承接着第 4 段对 David Lewis 研究的叙述，说的是 Doran 没有像 Lewis 那样亲自随船体验、靠观察和记星象来求证，而是走了「用仪器精确测量」这条路。方法与路径的不同，与「同意或不同意对方的结论」是两个层面的事。通观第 4 至第 8 段，作者逐段介绍 Lewis、Doran、Horvath、Wall Garrard 的研究，最后在第 8 段说「none of the researchers tried to use their findings to prove one theory or another」（没有一位研究者试图用他们的发现来证明某种理论），也就是说这些研究是互补的、并列的，并未交代彼此之间存在结论上的冲突。原文未提及 Doran 对 Lewis 的看法，既没有表示反对，也没有表示支持，故判 NOT GIVEN。做题提示：凡是题干出现 disagree、criticise、oppose 这类表态动词，回原文时一定要找到明确的表态语言才可判 YES 或 NO；只有「方法不同」「重点不同」这类中性差异时，通常判 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文从未出现 Doran 否定 Lewis 结论的表述，只有「different approach」这一中性的方法差异说明，找不到任何反对意见，所以不能判 YES。",
            "为什么不是 NO：NO 要求原文有相反信息，即原文得说 Doran 认同或沿用了 Lewis 的结论。原文同样没有这样的表述，只是客观介绍 Doran 换了一种研究路径，既没支持也没反对，因此只能按信息缺失判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–36 单选题（A / B / C / D）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 36
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "David Lewis's research was different because",
          "translation": "大卫·刘易斯（David Lewis）的研究与众不同，因为……",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "In 1965, David Lewis, a physician and experienced yachtsman, set to work using his own unique philosophy: he took the yacht he had owned for many years and navigated through the islands in order to contact those men who still find their way at sea using traditional methods. He then accompanied these men, in their traditional canoes, on test voyages from which all modern instruments were banished from sight, though Lewis secretly used them to confirm the navigator's calculations."
          },
          "synonyms": [
            "「observed traditional navigators at work」同义替换为原文的「navigated through the islands in order to contact those men who still find their way at sea using traditional methods」以及「accompanied these men, in their traditional canoes, on test voyages」（随这些仍靠传统方法航海的男子一同出海试航，即实地观察传统航海者作业）",
            "「his research was different」同义替换为原文的「using his own unique philosophy」（采用他独有的理念），并与第 3 段所批评的「armchair」式研究形成对照",
            "「traditional navigators」同义替换为原文的「those men who still find their way at sea using traditional methods」"
          ],
          "locatingTip": "定位：题干核心是大写人名 David Lewis，第 4 段整段专讲他，段落开头即给出 his own unique philosophy，直接锁定答案句群。确定答案技巧：题干问「不同在何处」，而本文评委的写法正是用对照来定义「不同」：第 3 段批评以前的作者只在图书馆里依赖旅行日志和传教士记述（armchair research），第 4 段则突出 Lewis 出海、亲自接触仍用传统方法航海的岛民、并随他们一起试航。选项 A 的 observed traditional navigators at work 正是这种「实地观察真人作业」的改写。要特别注意排除 C：原文说的是 all modern instruments were banished from sight（仪器被藏起来不让看见），而非「没有携带仪器」，句子后半句的 though Lewis secretly used them 直接堵住了 C 这条路。",
          "analysis": "第 4 段：「In 1965, David Lewis, a physician and experienced yachtsman, set to work using his own unique philosophy: he took the yacht he had owned for many years and navigated through the islands in order to contact those men who still find their way at sea using traditional methods. He then accompanied these men, in their traditional canoes, on test voyages from which all modern instruments were banished from sight, though Lewis secretly used them to confirm the navigator's calculations.」（1965 年，身为内科医生也是经验丰富的帆船驾驶者的 David Lewis 开始工作，他运用自己独有的理念：驾着他多年拥有的游艇在群岛间航行，为的是接触那些仍靠传统方法在海上寻路的男子。随后他在他们的传统独木舟上陪同这些男子进行试航，试航中一切现代仪器都被藏起来不让看见，不过 Lewis 私下用这些仪器来核对航海者的推算）。这段文字的重心是「研究方式的变化」——从案头走向海上、从文献走向现场，所以题干所说的「不同」落在研究途径上。选项 A「他观察工作中的传统航海者」正是对这种现场观察的概括（contact those men、accompanied these men on test voyages），因此选 A。B 项把工具张冠李戴：原文中他开自己的游艇只是为了在群岛间穿行、找人接触，真正的 test voyages 是在岛民的传统独木舟上进行的，并非用他的游艇。C 项偷换了「藏起」与「不带」：all modern instruments were banished from sight 指的是不让岛民看见，紧接的 though Lewis secretly used them to confirm the navigator's calculations 明说他本人仍在使用。D 项关于语言的内容在本段乃至全文都没有出现。",
          "traps": [
            "为什么不是 B：原文说 he took the yacht he had owned for many years and navigated through the islands in order to contact those men，他的游艇只是用来在群岛间穿行、寻找并接触岛民的工具；真正进行试航时用的是 these men 的 in their traditional canoes（传统独木舟），而非他自有的游艇，所以 B 与原文不符。",
            "为什么不是 C：原文是 all modern instruments were banished from sight（现代仪器被藏起来不让人看见），紧接着说明 though Lewis secretly used them to confirm the navigator's calculations，即他本人仍在秘密使用这些仪器，属于「藏起来用」而不是「没带」，C 把程度夸大了。",
            "为什么不是 D：第 4 段以及全文都没有提到 Lewis 与岛民使用同一种语言，也没有提到翻译或沟通语言的障碍，属于原文未提及的内容。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "What did David Lewis's research discover about traditional navigators?",
          "translation": "大卫·刘易斯的研究发现了传统航海者的什么情况？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Far from drifting, as proposed by Sharp, Lewis found that ancient navigators would have known which course to steer by memorizing which stars rose and set in certain positions along the horizon, and this gave them fixed directions by which to steer their boats."
          },
          "synonyms": [
            "「They knew which direction they were sailing in」同义替换为原文的「would have known which course to steer」以及「gave them fixed directions by which to steer their boats」（他们知道该走哪条航线、有固定的方向可据以操舵）",
            "「did David Lewis's research discover」同义替换为原文的「Lewis found that」",
            "「traditional navigators」同义替换为原文的「ancient navigators」"
          ],
          "locatingTip": "定位：题干的人名 David Lewis 把范围限定在第 4 段；该段最后一句以 Lewis found that 开头，是专门交代「研究结论」的句子，答案必在此句。确定答案技巧：本题问「发现了什么」，就要抓住 Lewis found that 引出的宾语从句，其核心信息是导航者「知道该走哪条航线（which course to steer）」「有固定方向（fixed directions by which to steer）」，与 C 的「know which direction」对应。其余选项都是对原文细节的错位改造：A 把 stars 换成 sun and moon；B 把「一次著名航程的长度」说成「航行能力的上限」；D 与原文的 Far from drifting 直接相反。",
          "analysis": "第 4 段末句：「Far from drifting, as proposed by Sharp, Lewis found that ancient navigators would have known which course to steer by memorizing which stars rose and set in certain positions along the horizon, and this gave them fixed directions by which to steer their boats.」（与 Sharp 所提出的漂流说相反，Lewis 发现古代航海者能够通过记住哪些星星在地平线某些位置升起和落下，从而知道该走哪条航线，这给了他们固定的方向来操舵行船）。题干问的是「Lewis 的研究发现了传统航海者的什么」，答案落在 Lewis found that 之后的宾语从句：would have known which course to steer（知道该走哪条航线）与 gave them fixed directions（拥有固定方向），两者的共同内核就是「知道航行方向」，与选项 C「They knew which direction they were sailing in」完全对应，故答案为 C。选项 A 把原文的 stars（星星）改成了 the sun and moon（日月），原文的定位依据是恒星升落的位置，而非日月；选项 B 把「his most famous such voyage was a return trip of around 1,000 nautical miles」（他最著名的一次航程是约 1000 海里的往返航行）这条「一次航程的长度」错读成「航行能力的上限」；选项 D 的 able to drift for long distances 与原文开头的 Far from drifting（绝不是漂流）正相反，恰好是 Sharp 的旧观点而非 Lewis 的发现。",
          "traps": [
            "为什么不是 A：原文的定位手段是 memorizing which stars rose and set in certain positions along the horizon，依据的是恒星的升落位置，全文没有提到用太阳和月亮来确定方位，A 属于替换了定位依据。",
            "为什么不是 B：原文只是说 Lewis 最著名的一次试航约 1000 海里，属于单次航程的里程记录，并未给出航海者航行能力的上限，B 把一次航程的长度曲解为能力极限。",
            "为什么不是 D：原文明确写 Far from drifting, as proposed by Sharp，即古代航海者绝非漂流，这恰恰是 Lewis 要推翻的 Sharp 旧说，D 把被否定的观点当成了 Lewis 的发现。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "What are we told about Edwin Doran's research?",
          "translation": "关于埃德温·多兰（Edwin Doran）的研究，文中告诉了我们什么？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "He was interested in obtaining exact data on canoe sailing performance, and to that end employed the latest electronic instrumentation. Doran traveled on board traditional sailing canoes in some of the most remote parts of the Pacific, all the while using his instruments to record canoe speeds in different wind strengths — from gales to calms — and the angle canoes could sail relative to the wind."
          },
          "synonyms": [
            "「Canoe characteristics were recorded using modern instruments」同义替换为原文的「using his instruments to record canoe speeds ... and the angle canoes could sail relative to the wind」，其中 record 直接复现，characteristics 概括了 speed 与 angle 等性能指标",
            "「modern instruments」同义替换为原文的「the latest electronic instrumentation」以及「his instruments」",
            "「Doran traveled on board traditional sailing canoes」与原文完全一致，是定位用的核心动词短语"
          ],
          "locatingTip": "定位：大写人名 Edwin Doran 出现在第 5 段第 1 句，该段整段讲他的研究，答案句是第 3、4 句。确定答案技巧：本题是「细节判断」题，四个选项都在考察对原文细节的准确记忆，逐项回原文核对最稳。原文的链条是：他想获得精确数据（exact data）所以用了最新电子仪器（latest electronic instrumentation），并且全程 on board（在船上）用仪器记录航速与帆角（record canoe speeds、the angle canoes could sail），最后提供了「first really precise attributes of traditional sailing canoes」（首批关于传统帆船的真正精确的特性描述）。选项 B 正是「用现代仪器记录独木舟的特性」的改写，其中 characteristics 对应 attributes。选项 A、C 分别被 all the while（全程在船上）与 most remote（最偏远）两个原文用词否定；选项 D 是把第 4 段 Lewis 试航时「仪器被藏起来」的情节错安到 Doran 身上。",
          "analysis": "第 5 段：「The geographer Edwin Doran followed a quite different approach. He was interested in obtaining exact data on canoe sailing performance, and to that end employed the latest electronic instrumentation. Doran traveled on board traditional sailing canoes in some of the most remote parts of the Pacific, all the while using his instruments to record canoe speeds in different wind strengths — from gales to calms — and the angle canoes could sail relative to the wind. In the process, he provided the first really precise attributes of traditional sailing canoes.」（地理学家 Edwin Doran 采用了一种相当不同的方法。他想获得关于独木舟航行性能的精确数据，为此使用了最新的电子仪器。Doran 乘坐传统帆船航行于太平洋最偏远的地区，全程用他的仪器记录独木舟在不同风力下——从大风到无风——的航速，以及独木舟相对于风能行驶的角度。在此过程中，他首次真正精确地描述了传统帆船的特性）。把这段内容与选项对照：Doran 用 the latest electronic instrumentation 全程记录 canoe speeds 和帆角，末句又把成果概括为 the first really precise attributes of traditional sailing canoes，attribute（特性）与 characteristics 同义，因此选项 B 成立。选项 A 与 all the while（一路全程）矛盾，数据是在航行途中实时采集的，而不是等独木舟回岸后才收集；选项 C 与 in some of the most remote parts of the Pacific 矛盾，原文说的是最偏远、人迹罕至的地方，而不是人口最稠密的地区；选项 D 把第 4 段 Lewis 试航时「所有现代仪器都被藏起来不让看见」的情节移花接木到了 Doran 身上，原文对 Doran 只有「用仪器记录」的正面描述，没有「不让航海者看见」的说法。",
          "traps": [
            "为什么不是 A：原文用 all the while using his instruments to record（全程用仪器记录）说明数据是航行过程中实时采集的，并非等独木舟返回陆地之后才收集，A 的时间关系与原文相反。",
            "为什么不是 C：原文写的是 Doran 乘坐独木舟航行于 some of the most remote parts of the Pacific（太平洋最偏远的地区），研究对象位于人迹罕至之处，与 C 的 the most densely populated regions（人口最稠密的地区）正好相反。",
            "为什么不是 D：原文说 Doran 一路用仪器记录数据，从未提到要隐藏仪器、不让航海者看见；把现代仪器藏起来不让船员看见的是第 4 段 Lewis 的试航（all modern instruments were banished from sight），D 属于张冠李戴。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Which of the following did Steven Horvath discover during his research?",
          "translation": "下列哪一项是史蒂文·霍瓦斯（Steven Horvath）在其研究中发现的？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "By adapting standard physiological techniques, Horvath was able to calculate the energy expenditure required to paddle canoes of this sort at times when there was no wind to fill the sails, or when the wind was contrary. He concluded that paddles, or perhaps long oars, could indeed have propelled for long distances what were primarily sailing vessels."
          },
          "synonyms": [
            "「Human energy may have been used to assist sailing canoes」同义替换为原文的「paddles, or perhaps long oars, could indeed have propelled for long distances what were primarily sailing vessels」（划桨或长橹确实可能驱动过这些原本主要靠帆的船只），human energy 对应 paddle/propel，may have been used 对应 could indeed have",
            "「did ... discover」同义替换为原文的「He concluded that」（他得出结论）",
            "「during his research」对应原文的「By adapting standard physiological techniques, Horvath was able to calculate ...」所述的研究过程"
          ],
          "locatingTip": "定位：大写人名 Steven Horvath 出现在第 6 段第 1 句（A further contribution was made by Steven Horvath），该段专讲他的研究，结论句以 He concluded that 引出，是答题的关键句。确定答案技巧：题干问「他发现了什么」，就要锁定表示结论的动词 concluded，其宾语从句说 paddles 或 long oars「确实可能（could indeed have）推动这些主要靠帆的船只长距离行进」，也就是说人的体力（划桨）可以辅助帆船前进，与选项 D 的 human energy may have been used to assist sailing canoes 对应，语气上 could indeed have 与 may have been used 也同为推测性表达。其余选项：A 涉及设计与人力的比较，原文没有做这种比较；B 说的开发新方法，原文是 adapting standard techniques（改造标准技术），不是「必须开发新方法」；C 说航海者极度疲劳，原文只计算 energy expenditure（能量消耗），并未讨论疲劳程度。",
          "analysis": "第 6 段：「A further contribution was made by Steven Horvath. As a physiologist, Horvath's interest was not in navigation techniques or in canoes, but in the physical capabilities of the men themselves. By adapting standard physiological techniques, Horvath was able to calculate the energy expenditure required to paddle canoes of this sort at times when there was no wind to fill the sails, or when the wind was contrary. He concluded that paddles, or perhaps long oars, could indeed have propelled for long distances what were primarily sailing vessels.」（Steven Horvath 做出了又一项贡献。作为生理学家，Horvath 的兴趣不在航海技术或独木舟本身，而在人自身的体能。通过改造标准的生理学技术，他能够计算出在无风、帆鼓不起来的时候，或逆风时划动这类独木舟所需的能量消耗。他得出结论：划桨，或者也许是长橹，确实可能长距离推动这些原本主要用于航帆的船只）。结论句是本题的落点：could indeed have propelled 是推测性的肯定语气，说明人的体力（划桨、长橹）可能曾用于辅助这些以帆为主要动力的船只行进，因此选项 D 正确。原文的措辞还暗示两点值得注意：一是 what were primarily sailing vessels（原本主要是帆船），说明帆是主要动力，人力是辅助，这与 D 的 assist（辅助）用词精准对应；二是 could indeed have 表明这是基于能量计算得出的可能性判断，与 D 的 may have been used 语气一致。选项 A 属于无中生有，原文没有比较独木舟设计与人的力量哪个更重要；选项 B 偷换概念，原文说 By adapting standard physiological techniques（改造现有标准技术），恰恰说明不必开发新方法；选项 C 把 energy expenditure（能量消耗量）误读成航海者的疲劳感受，原文没有描写疲劳。",
          "traps": [
            "为什么不是 A：原文只提到 Horvath 关心人自身的体能（the physical capabilities of the men themselves），并计算划桨所需的能量消耗，并未把独木舟设计的重要性与人的力量作对比，A 的比较在原文中没有依据。",
            "为什么不是 B：原文说的是 By adapting standard physiological techniques（通过改造标准的生理学技术），即沿用并改造既有方法，而不是必须为独木舟研究开发全新方法，B 与原文的 adapting 不符。",
            "为什么不是 C：原文计算的是一项生理学指标 energy expenditure（能量消耗），从头到尾没有描述航海者在长途航行中感到疲惫，C 是由「消耗能量」过度推断出的疲劳感受。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "What is the writer's opinion of Wall Garrard's research?",
          "translation": "作者对沃尔·加拉德（Wall Garrard）的研究持什么看法？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Clever adaptation of computer simulation techniques pioneered in other disciplines allowed him to produce convincing models suggesting the migrations were indeed systematic, but not simultaneous."
          },
          "synonyms": [
            "「He is impressed by the originality of the techniques used」同义替换为原文的评价性用词「Clever adaptation」（巧妙改造）与「convincing models」（令人信服的模型），以及同段开头的「conducted important research」（进行了重要研究）和「Wall Garrard's unusual method」（不寻常的方法）",
            "「the originality of the techniques」对应原文的「techniques pioneered in other disciplines」（源自其他学科开创的技术，被巧妙改造后用于本研究，即方法上的独创性）",
            "「What is the writer's opinion」需要抓取作者的评价性形容词与副词，原文中密集出现 important、unusual、Clever、convincing 等正面评价词"
          ],
          "locatingTip": "定位：大写人名 Wall Garrard 只出现在第 7 段，该段专讲他的研究，作者的评价集中在开头（conducted important research）与结尾（Clever adaptation ... convincing models）。确定答案技巧：题干问的是「作者的意见」，因此答案不在事实信息里，而在作者使用的评价性词汇中：important research（重要研究）、unusual method（不寻常的方法）、Clever adaptation（巧妙的改造）、convincing models（令人信服的模型）——一连串正面评价指向「作者印象深刻」，而印象的来源正是他把其他学科的计算机模拟技术巧妙移植过来这一独创做法，故选项 B 正确。三个干扰项都属于对中性或正面描述的误读：A 把 safely in the laboratory（安全地在实验室里）读成作者失望；C 把「他借用语言学家的研究成果」倒转成「语言学家得到帮助」；D 把「岛屿相距数千公里」这一事实陈述读成作者担忧。",
          "analysis": "第 7 段：「Finally, a team led by P. Wall Garrard conducted important research, in this case by making investigations while remaining safely in the laboratory. Wall Garrard's unusual method was to use the findings of linguists who had studied the languages of the Pacific islands, many of which are remarkably similar although the islands where they are spoken are sometimes thousands of kilometres apart. Clever adaptation of computer simulation techniques pioneered in other disciplines allowed him to produce convincing models suggesting the migrations were indeed systematic, but not simultaneous.」（最后，由 P. Wall Garrard 领导的团队做了重要的研究，这次的调查是安全地在实验室里进行的。Wall Garrard 不寻常的方法是借用研究太平洋岛屿语言的语言学家的成果——这些语言中有许多极为相似，尽管使用它们的一些岛屿相隔数千公里。他巧妙地改造了其他学科开创的计算机模拟技术，从而得出了令人信服的模型，表明这些迁徙确实是有系统的，但不是同时进行的）。判断作者态度的关键是形容词与副词：important（重要的）、unusual（不寻常的）、Clever adaptation（巧妙的改造）、convincing（令人信服的）全是正面评价，且评价的焦点在于他「跨学科移植并改造计算机模拟技术」这一方法上的独创性，因此选项 B「作者对其所用技术的独创性印象深刻」最贴合。选项 A 与原文的 safely in the laboratory 相悖，作者用 safely（安全地）描述的是研究方式的一种特点，语气中性偏正面，没有流露任何失望；选项 C 把关系搞反了，原文是他 use the findings of linguists（使用语言学家的成果），而不是语言学家的研究得到他的帮助；选项 D 只是事实陈述——有些岛屿相距数千公里，紧随其后的是 remarkably similar（语言极为相似）这一赞叹，作者表达的是惊讶于语言的相似，而非担心岛屿相距遥远。",
          "traps": [
            "为什么不是 A：原文说 Wall Garrard 是 while remaining safely in the laboratory 做研究的，safely 一词是对研究方式的客观描述，作者并未对「在实验室里研究」表示不满；相反，同段最后称赞他得出了 convincing models，可见作者并不失望。",
            "为什么不是 C：原文的表述是 Wall Garrard's unusual method was to use the findings of linguists（他使用语言学家的成果），动作方向是从语言学家借用到本研究，而 C 说他的研究被用来帮助语言学家的研究，主客关系颠倒，原文并无此意。",
            "为什么不是 D：岛屿相距数千公里只是原文交代的事实背景（the islands where they are spoken are sometimes thousands of kilometres apart），作者用 although 引出这一点是为了衬托语言 remarkably similar（极为相似）的意外之处，通篇没有任何表示担忧（concerned）的措辞。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 句子结尾匹配（A–F）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "One limitation in the information produced by all of this research is that it",
          "translation": "所有这些研究产生的信息有一个局限，那就是它……",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Quite correctly, none of the researchers tried to use their findings to prove one theory or another; experiments such as these cannot categorically confirm or negate a hypothesis."
          },
          "synonyms": [
            "「One limitation in the information produced by all of this research」同义替换为原文的「experiments such as these cannot categorically confirm or negate a hypothesis」（这类实验不能确切地证实或否定一个假设），cannot ... 即 limitation 所在",
            "「was not conclusive evidence in support of a single theory」同义替换为原文的「cannot categorically confirm ... a hypothesis」以及「none of the researchers tried to use their findings to prove one theory or another」（没有一位研究者试图用他们的发现去证明某一种理论）",
            "「all of this research」同义替换为原文的「experiments such as these」和「the researchers」"
          ],
          "locatingTip": "定位：句子结尾匹配题要回到末段（第 8 段）找答案，该段开头就是对全部研究的总结性评述，第 2 句以 Quite correctly 起头，用 none of the researchers ... prove one theory or another 与 cannot categorically confirm or negate 两处否定表达点出研究的局限，正是本题的落点。确定答案技巧：题干的关键词是 limitation（局限），要在末段找出表示「做不到、无法」的否定说法。原文连续给出两处：none of the researchers tried to use their findings to prove one theory or another（没有一位研究者用发现去证明某一种理论）和 cannot categorically confirm or negate a hypothesis（无法确切地证实或否定假设）。把这两处信息拼起来，就是「它无法为某一种理论提供决定性的证据」，与 C 完全吻合。填完要读通整句：One limitation in the information produced by all of this research is that it was not conclusive evidence in support of a single theory，语法与逻辑都通顺。",
          "analysis": "第 8 段第 1、2 句：「What do we learn about Pacific navigation and voyaging from this research? Quite correctly, none of the researchers tried to use their findings to prove one theory or another; experiments such as these cannot categorically confirm or negate a hypothesis.」（从这些研究中我们能了解到太平洋航海与航行的什么？相当正确的一点是，没有一位研究者试图用他们的发现去证明某一种理论；这类实验无法确切地证实或否定一个假设）。这两句是作者对 Lewis、Doran、Horvath、Wall Garrard 等人研究的整体评价，其中第二句用分号把两层意思并列：前半句说研究者主观上没有把发现当成证明某种理论的工具，后半句从方法论角度说明这类实验在客观上也无法 categorically confirm or negate（确切地证实或否定）一个假设。也就是说，这些研究提供的信息不能成为支持单一理论的决定性证据（not conclusive evidence in support of a single theory），由此构成了题干所说的「局限性（limitation）」。选项中只有 C 表达了「无法作为单一理论的结论性证据」这一层意思，故答案为 C。作答技巧：这类段落结尾的总结句是句子结尾匹配题的高频出题区，要盯住表示否定、程度限制的副词（cannot、categorically 等），它们往往就是 limitation、problem 这类题干关键词的落点。",
          "traps": [
            "为什么不是 A：A 项（was the variety of experimental techniques used）描述的是这项研究最出色之处，对应原文 The strength of this research lay in the range of methodologies employed，属于第 38 题，与题干 limitation 的否定语义不符。",
            "为什么不是 D：D 项讲的是传统航海者「在最需要时改变做法」的能力，对应原文 this adaptability 与 altered their techniques accordingly，属于第 39 题的成就类表述，与「研究信息的局限」无关。",
            "为什么不是 B 与 F：B 项说这些研究「今天的年轻岛民不感兴趣」，与末段 young people are resurrecting the skills of their ancestors（年轻人正在复兴祖先的技能）直接相反；F 项说局限在于「研究进行的速度」，原文通篇没有对研究速度快慢作任何评论。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "The best thing about this type of research",
          "translation": "这类研究最出色之处……",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "The strength of this research lay in the range of methodologies employed."
          },
          "synonyms": [
            "「The best thing about」同义替换为原文的「The strength ... lay in」（……的优势/长处在于）",
            "「the variety of experimental techniques used」同义替换为原文的「the range of methodologies employed」，其中 variety 对应 range，techniques 对应 methodologies",
            "「this type of research」同义替换为原文的「this research」，指代前文介绍的 Lewis、Doran、Horvath、Wall Garrard 等各家研究"
          ],
          "locatingTip": "定位：题干是正面评价类（the best thing），回到第 8 段的作者总结部分，找到以 The strength of this research lay in ... 开头的句子，strength（长处）与 the best thing 完全对等，答案句一步锁定。确定答案技巧：找到 strength 这个词就等于找到了「最出色之处」，其后的介词宾语 the range of methodologies employed（所采用方法的多样性）就是答案的内容。variety 与 range 同义，experimental techniques 与 methodologies 同义，因此选 A。本题与第 37 题紧邻，两题的答案句几乎是相邻的两句话（cannot ... confirm or negate 讲局限，strength ... range of methodologies 讲长处），做题时务必逐题定位，不要把第 37 题的否定语气带到本题上。",
          "analysis": "第 8 段第 3 句：「The strength of this research lay in the range of methodologies employed.」（这项研究的优势在于所采用方法的多样性）。前一句刚刚指出这类研究无法确切证实或否定某个假设，紧接着用 The strength ... lay in 转折，转入对研究价值的正面评价：它的长处不在结论本身，而在于方法的丰富多样——回顾全文可见，Lewis 采用实地随船体验与星象记忆的验证，Doran 用电子仪器测量独木舟性能数据，Horvath 从生理学角度计算划桨的能量消耗，Wall Garrard 借用语言学成果并改造计算机模拟，四种路径截然不同，正好印证了 the range of methodologies employed。题干 the best thing about 与原文 The strength of 是评价性对应，the variety of experimental techniques used 与 the range of methodologies employed 是内容对应（variety 对应 range，experimental techniques 对应 methodologies），故答案选 A。作答提示：在句子结尾匹配题中，题干与原文之间的「评价性同义」往往是解题关键，best thing、strength、advantage 属于同一类词，认出这组同义就能锁定答案句。",
          "traps": [
            "为什么不是 C：C 项（was not conclusive evidence in support of a single theory）说的是这项研究的局限，对应原文 experiments such as these cannot categorically confirm or negate a hypothesis，属于第 37 题，与本题 the best thing 的正面评价相反。",
            "为什么不是 D：D 项描述的是传统航海者随机应变的能力，对应原文 it was this adaptability which was their greatest accomplishment，属于第 39 题，主语是航海者而不是研究本身，与 the best thing about this type of research 不匹配。",
            "为什么不是 E 与 F：E 项说这是人类首次有意跨越大洋，属于第 40 题关于迁徙意义的表述；F 项说最好的地方在于研究的速度，原文没有任何关于研究进度的评价。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "The most important achievement of traditional navigators",
          "translation": "传统航海者最重要的成就……",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "traditional navigators used a variety of canoe types, sources of information and navigation techniques, and it was this adaptability which was their greatest accomplishment"
          },
          "synonyms": [
            "「The most important achievement」同义替换为原文的「their greatest accomplishment」（他们最伟大的成就）",
            "「was being able to change their practices when necessary」同义替换为原文的「it was this adaptability」以及紧接其后的「These navigators observed the conditions prevailing at sea at the time a voyage was made and altered their techniques accordingly」（他们观察当时海上的情况并相应地改变技术）",
            "「traditional navigators」在原文中与「These navigators」指代同一群人"
          ],
          "locatingTip": "定位：题干主语是 traditional navigators，回第 8 段作者总结部分扫描，可见一句以 we can propose that traditional navigators used a variety of ... 开头、以 their greatest accomplishment 收尾的长句，greatest accomplishment 与题干的 the most important achievement 完全对等，答案即在此句。确定答案技巧：抓形容词最高级是关键——原文的 greatest accomplishment 对应题干的 most important achievement，而它回指的正是前面的 this adaptability（这种适应能力）；下一句立刻用 observed the conditions prevailing at sea ... and altered their techniques accordingly（观察当时的海洋状况并相应调整技术）对 adaptability 作出具体解释，说明「因地制宜、随时改变做法」这一能力才是航海者最了不起的成就，与 D 的 was being able to change their practices when necessary 精确对应。",
          "analysis": "第 8 段的相关部分：「When we splice together these findings we can propose that traditional navigators used a variety of canoe types, sources of information and navigation techniques, and it was this adaptability which was their greatest accomplishment. These navigators observed the conditions prevailing at sea at the time a voyage was made and altered their techniques accordingly.」（当我们把这些发现拼接起来，就可以提出：传统航海者使用了多种类型的独木舟、多种信息来源和多种航海技术，而正是这种适应能力才是他们最伟大的成就。这些航海者会观察航行当时海上的状况，并相应地调整他们的技术）。作者的论证链条非常清楚：先归纳出航海者在船只、信息来源与技术上的多样性，再用 it was this adaptability which was their greatest accomplishment 点明成就之所在，随后一句用 observed ... and altered their techniques accordingly 把 adaptability 具体化为「视当时海况调整做法」。题干的 the most important achievement 对应 greatest accomplishment，was being able to change their practices when necessary 对应 this adaptability 加上 altered their techniques accordingly，两处一一对应，故答案选 D。作答提示：遇到最高级（greatest、most important）时，务必核对它修辞的对象是谁，本题明确是 this adaptability（适应能力），而不是船只数量、航行距离或研究速度。",
          "traps": [
            "为什么不是 A：A 项（the variety of experimental techniques used）说的是研究者的方法多样，对应原文 The strength of this research lay in the range of methodologies employed，主语是研究而非航海者，属于第 38 题。",
            "为什么不是 E：E 项说这是人类首次有意跨越大洋，虽然末段提到 the Pacific peoples were able to view the ocean as an avenue, not a barrier, to communication before any other race on Earth，但那是对整个太平洋族群迁徙意义的评价，属于第 40 题，且原文并未把它称为航海者的 greatest accomplishment。",
            "为什么不是 B 与 F：B 项说与今天的年轻岛民无关，与原文 young people are resurrecting the skills of their ancestors 相反；F 项谈研究的速度，原文没有涉及速度评价，也与 greatest accomplishment 无关。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "The migration of people from Asia to the Pacific",
          "translation": "从亚洲向太平洋的移民迁徙……",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Furthermore, the canoes of the navigators were not drifting helplessly at sea but were most likely part of a systematic migration; as such, the Pacific peoples were able to view the ocean as an avenue, not a barrier, to communication before any other race on Earth."
          },
          "synonyms": [
            "「The migration of people from Asia to the Pacific」对应原文的「part of a systematic migration」，并结合第 1 段的「ancestors of today's islanders sailed from Southeast Asia」（今天岛民的祖先从东南亚起航）",
            "「was the first time humans intentionally crossed an ocean」同义替换为原文的「the Pacific peoples were able to view the ocean as an avenue, not a barrier, to communication before any other race on Earth」（在地球上任何其他族群之前，太平洋各族群就已把海洋视为沟通的通途而非障碍），before any other race 即 first",
            "「intentionally」同义替换为原文的「were not drifting helplessly」（不是无助地漂流），说明跨海是有目的、有系统的行动"
          ],
          "locatingTip": "定位：末段（第 8 段）中的 migration 一词只出现在以 Furthermore 开头的那一句，句中有 part of a systematic migration，与题干 The migration of people from Asia to the Pacific 直接对应，答案句一步锁定。确定答案技巧：题干要补的是「这次迁徙的意义/地位」，需要在原文找带次序或首次含义的表述。原文用 as such 引出结论：the Pacific peoples were able to view the ocean as an avenue, not a barrier, to communication before any other race on Earth——before any other race（在地球上其他任何族群之前）就是「首次」的改写，avenue, not a barrier（通途而非障碍）说明跨海是主动的、有意的沟通行为；再加上同句前半部分的 not drifting helplessly（不是无助漂流）强调其有意为之，正好合成 E 项 was the first time humans intentionally crossed an ocean。",
          "analysis": "第 8 段的相关句子：「Furthermore, the canoes of the navigators were not drifting helplessly at sea but were most likely part of a systematic migration; as such, the Pacific peoples were able to view the ocean as an avenue, not a barrier, to communication before any other race on Earth.」（此外，航海者的独木舟并非在海上无助地漂流，而很可能是一次有系统的迁徙的一部分；正因为如此，太平洋各族群得以在地球上其他任何族群之前把海洋视为沟通的通途而非障碍）。这句话与题干 The migration of people from Asia to the Pacific 直接挂钩：part of a systematic migration 即「有系统的迁徙」，与第 1 段 ancestors of today's islanders sailed from Southeast Asia 中的出发地亚洲、目的地太平洋合起来，构成完整的迁徙事件。再看要填的结尾：原文先说 not drifting helplessly（不是无助地漂流），强调这次跨海是有目标、有意为之的；再说 view the ocean as an avenue, not a barrier, to communication before any other race on Earth，其中 before any other race on Earth 就是「早于地球上任何其他族群」即「第一次」。两处合起来即 E 项 was the first time humans intentionally crossed an ocean，故答案选 E。剩余选项中，B 项说这次迁徙对今天的年轻岛民没有吸引力，与末段 young people are resurrecting the skills of their ancestors 相矛盾；F 项谈研究速度，C 项谈证据不足，A 项谈方法多样，都与「迁徙本身的意义」这一主语不匹配。",
          "traps": [
            "为什么不是 B：原文末段说 In some groups of islands in the Pacific today, young people are resurrecting the skills of their ancestors（今天一些岛屿上的年轻人正在复兴祖先的技能），说明年轻岛民对传统航行技艺很有兴趣，B 项（was not of interest to young islanders today）与原文相反。",
            "为什么不是 F：F 项说这次迁徙的意义在于「它进行得很快」，原文从未对迁徙的速度作任何评价，属于无对应信息。",
            "为什么不是 A 与 C：A 项谈研究方法的多样（对应第 38 题），C 项谈证据不足以支持单一理论（对应第 37 题），两者的主语都是「研究」而不是「迁徙」，填进来后与题干 The migration of people from Asia to the Pacific 的主语不搭。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
