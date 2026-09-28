(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-medium-244", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-medium-244",
  "meta": {
    "examId": "p3-medium-244",
    "title": "Look who was talking",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–32 匹配题（人物匹配：A Chomsky / B Condillac / C neither Chomsky nor Condillac）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 32
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "The development of human speech can be traced back to apes.",
          "translation": "人类言语的发展可以追溯到猿类。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The theory sees gesture language as arising originally among apes as sounds accompanying gestures, with these sounds gradually becoming coded into 'words' as the new skill drove its own evolution."
          },
          "synonyms": [
            "“The development of human speech” 对应原文的 “spoken language” 与 “language”，指人类言语（语言）的由来",
            "“can be traced back to apes” 同义替换为原文的 “arising originally among apes”，即最早起源于猿类",
            "“gesture language … as sounds accompanying gestures” 说明言语的前身（手势语言与伴随手势发出的声音）本就出现在猿类身上"
          ],
          "locatingTip": "定位：题干关键词 apes（猿类）在全文只出现在第 3 段，且与 Condillac 的学说连在一起，扫读时盯住 apes 即可锁定。确定答案技巧：题干说“人类言语可追溯到猿类”，回原文逐字核对 “The theory sees gesture language as arising originally among apes as sounds accompanying gestures”，句首的 The theory 直接回指上一句 “This was first suggested by the 18th-century philosopher Etienne Bonnot de Condillac.”，说明这一理论出自 Condillac，故选 B。反向验证：Chomsky 一派的主张恰恰相反——语言是 35,000 至 50,000 年前突然出现的，与“起源于猿类”无关。注意本题问的是“观点归属于谁”，而不是问观点本身对不对。",
          "analysis": "第 3 段是 Condillac 学说的介绍段。原文先写 “This was first suggested by the 18th-century philosopher Etienne Bonnot de Condillac.”（这一观点最早由 18 世纪哲学家 Etienne Bonnot de Condillac 提出），接着给出他的核心主张：“He argued that spoken language had developed out of gesture language (langage d'action) …”（他认为言语由手势语言发展而来），紧接着的一句即本题定位句：“The theory sees gesture language as arising originally among apes as sounds accompanying gestures, with these sounds gradually becoming coded into 'words' as the new skill drove its own evolution.”（这一理论认为，手势语言最初在猿类中出现，是伴随手势发出的声音，随着这项新技能推动自身演化，这些声音逐步被编码成“词语”）。句中 arising originally among apes 表示言语的源头就在猿类，与题干 can be traced back to apes 完全同义；而 The theory 明确承接前文的 Condillac，归属清楚。对照第 2 段，Chomsky 一派的观点是语言晚近突然出现并被基因硬连线进大脑（genetically hard-wired into our brains），其中并无“追溯到猿类”的说法，因此答案是 B（Condillac）。",
          "traps": [
            "为什么不是 A（Chomsky）：Chomsky 一派认为语言 “appeared suddenly among modern humans a mere 35,000 to 50,000 years ago”（在 35,000 至 50,000 年前突然出现），并与头脑中的语言器官硬连线，强调出现得晚、突然，与“可追溯到猿类”正相反。",
            "为什么不是 C（neither Chomsky nor Condillac）：定位句有明确的归属标记 The theory，回指上一句提出的 Condillac 学说，说明该观点确实属于两位学者之一，故不能选“两者都不是”。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Animal research is essential for understanding the development of human speech.",
          "translation": "动物研究对于理解人类言语的发展必不可少。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "However, the abstract thought demonstrated in 20th-century experiments with chimpanzees and bonobos put this theory in doubt."
          },
          "synonyms": [
            "“Animal research” 同义替换为原文的 “20th-century experiments with chimpanzees and bonobos”（20 世纪用黑猩猩与倭黑猩猩做的实验）",
            "“is essential for understanding the development of human speech” 在原文中没有对应：原文只说这些实验 “put this theory in doubt”（使这一理论受到质疑），并未说动物研究是理解言语发展的必要条件",
            "句首 “However” 表明这是作者本人的评述，承接的是对 Chomsky 式理论的质疑，并非 Chomsky 或 Condillac 的主张"
          ],
          "locatingTip": "定位：题干的关键词 animal research 在原文唯一的落点是第 2 段末句的 chimpanzees and bonobos（两种猿类实验对象），抓住这两个动物名即可跳到该句。确定答案技巧：先问“这句话是谁说的”。原文用 However 引出的是作者自己的评论：动物实验中所展现的抽象思维使“思维依赖词语”的旧观念受到质疑。这一评论既不属于 Chomsky（他的理论正是被这一实验质疑的对象），也不属于 Condillac（第 3 段只谈手势语言如何演化为言语），归属对不上；而且措辞也对不上——原文只说实验使理论 “put this theory in doubt”，并没有说动物研究是“essential（必不可少）”。归属与措辞两头都不成立，所以选 C。",
          "analysis": "第 2 段先陈述 Chomsky、Klein 一派的语言观（语言晚近突然出现、语法能力被基因硬连线），随后写 “This view of language is associated with the old idea that logical thought is dependent on words … that is, animals do not speak because they do not think.”（这一语言观与“逻辑思维依赖于词语”的旧观念相联系，即动物不说话是因为它们不思考），末句即定位句：“However, the abstract thought demonstrated in 20th-century experiments with chimpanzees and bonobos put this theory in doubt.”（然而，20 世纪用黑猩猩和倭黑猩猩所做的实验所展示的抽象思维能力，使这一理论受到质疑）。可见动物实验在原文中的角色是作者用来反驳“动物不会思考”的证据，作者所要表达的是“动物实验对旧观点构成了挑战”，而不是“动物研究是理解言语发展的必需条件”；同时这属于作者本人的论证，作者本人并不等于选项中的 Chomsky 或 Condillac。题干把作者的质疑性评论提升为“动物研究必不可少”，既不属两位学者的观点，也超出了原文表述，因此答案是 C（neither Chomsky nor Condillac）。",
          "traps": [
            "为什么不是 A（Chomsky）：Chomsky 的主张是语言 35,000 至 50,000 年前突然出现、言语与语法能力被基因硬连线；第 2 段末句的动物实验正是作者用来 “put this theory in doubt”（质疑这一理论）的，也就是说这是反驳 Chomsky 的证据，而非 Chomsky 的观点。",
            "为什么不是 B（Condillac）：第 3 段 Condillac 的理论只讨论手势语言与伴随声音如何逐步编码为词语，全文从未把动物实验与言语研究联系起来，题干观点无法归到他名下。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Language emerged relatively late in human evolution.",
          "translation": "语言在人类进化中出现得相对较晚。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "One view of language development, held by linguists such as Noam Chomsky and anthropologists such as Richard Klein, is that language, specifically the spoken word, appeared suddenly among modern humans a mere 35,000 to 50,000 years ago"
          },
          "synonyms": [
            "“emerged relatively late” 同义替换为原文的 “appeared suddenly … a mere 35,000 to 50,000 years ago”，a mere（仅仅）与 relatively late 都在强调时间出现得晚、距今很近",
            "“Language” 对应原文的 “language, specifically the spoken word”",
            "“in human evolution” 对应原文的 “among modern humans”"
          ],
          "locatingTip": "定位：题干的关键信息是“出现得晚”，回原文找年代表述，第 2 段出现 “35,000 to 50,000 years ago”，且紧跟在 Noam Chomsky 的名字之后，一步定位。确定答案技巧：找到句子后先看归属词 held by —— “One view of language development, held by linguists such as Noam Chomsky and anthropologists such as Richard Klein, is that language … appeared suddenly among modern humans a mere 35,000 to 50,000 years ago”，held by 直接点明观点持有人是 Chomsky（及 Klein）一派，故选 A。同时要警惕反向干扰：第 3 段 Condillac 的理论与第 5 段提到的二百万年渐进过程都说语言开始得早，与题干的“较晚”不符。",
          "analysis": "第 2 段开门见山给出两种对立的时间表之一：“One view of language development, held by linguists such as Noam Chomsky and anthropologists such as Richard Klein, is that language, specifically the spoken word, appeared suddenly among modern humans a mere 35,000 to 50,000 years ago and that the ability to speak words and use syntax was recently genetically hard-wired into our brains in a kind of language organ.”（关于语言发展的一种观点——由 Noam Chomsky 等语言学家和 Richard Klein 等人类学家持有——认为语言，尤其是口头语言，在仅仅 35,000 至 50,000 年前的现代人当中突然出现，说话与使用句法的能力是晚近才被基因硬连线进我们大脑、形成一种“语言器官”的）。仅仅（a mere）35,000 至 50,000 年放在人类数百万年的演化史中极为短促，正是题干 relatively late（相对较晚）的同义改写；而 held by 明确把这一时间表记在 Chomsky 名下。第 3 段 Condillac 的说法则是言语由手势语言逐步演化而来，属于渐进的、更早的过程，与之相反。因此答案是 A（Chomsky）。",
          "traps": [
            "为什么不是 B（Condillac）：Condillac 认为语言是手势语言一步步演化、编码而成的渐进发明，与第 5 段所说的二百万年演化过程相呼应，属于“开始得早”，不支持“出现得晚”。",
            "为什么不是 C（neither Chomsky nor Condillac）：原文有明确的归属词 held by linguists such as Noam Chomsky，这一时间观点确实属于 Chomsky 一派，并非无人主张。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "Non-verbal language was essential in the development of verbal language.",
          "translation": "非语言（手势）沟通在言语的发展中不可或缺。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "He argued that spoken language had developed out of gesture language (langage d'action) and that both were inventions arising initially from the simple association between action and object."
          },
          "synonyms": [
            "“Non-verbal language” 同义替换为原文的 “gesture language (langage d'action)”（手势语言，即非语言的沟通手段）",
            "“was essential in the development of verbal language” 同义替换为原文的 “spoken language had developed out of gesture language”，developed out of 表示言语由手势语言发展而来，前提关系对应 essential",
            "“He argued” 中的 He 回指上一句的 “the 18th-century philosopher Etienne Bonnot de Condillac”"
          ],
          "locatingTip": "定位：题干关键词 non-verbal language 在原文的对应词是 gesture language，只出现在第 3 段 Condillac 的论述里，扫读时找 gesture 即锁定。确定答案技巧：把题干拆成两层核对——第一层“非语言手段是否在场”：原文明确出现 gesture language（langage d'action）；第二层“关系是否为言语由它发展而来”：句中 developed out of gesture language 与题干 was essential in the development of verbal language 方向一致。归属看句首的 He，它承接 “This was first suggested by the 18th-century philosopher Etienne Bonnot de Condillac.”，故答案为 B（Condillac）。",
          "analysis": "第 3 段第 3 句即定位句：“He argued that spoken language had developed out of gesture language (langage d'action) and that both were inventions arising initially from the simple association between action and object.”（他认为言语是从手势语言发展而来的，而二者最初都是因动作与物体之间的简单联想而产生的发明）。句中 spoken language（言语）对应题干的 verbal language，gesture language（langage d'action，手势语言）对应题干的 non-verbal language，had developed out of 表示前者以前者为来源，也就是题干的 was essential in the development of。第 3 段后续继续强化这一链条：手势语言起于猿类伴随手势的声音，声音逐步编码成词语，词语再发展为有意的复杂交流（Subsequently, coded words developed into deliberate, complex communication.），可见非语言手段在言语形成过程中确实是必经的环节。句首 He 回指前一句点名的 Condillac，因此答案是 B。",
          "traps": [
            "为什么不是 A（Chomsky）：Chomsky 一派认为言语能力突然出现并被基因硬连线（appeared suddenly … genetically hard-wired），语言并非由手势演化而来，第 2 段没有任何“手势先于言语”的表述。",
            "为什么不是 C（neither Chomsky nor Condillac）：原文用 He argued 明确把“言语由手势语言发展而来”记在 Condillac 名下，归属清楚，不能选“两者都不是”。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "The development of different languages is related more to environmental than biological factors.",
          "translation": "不同语言的发展与生物因素相比更与环境（文化）因素相关。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The unique features of a language such as French clearly do not result from any physiological aspect of being French but are the cultural possessions of the French-speaking community."
          },
          "synonyms": [
            "“different languages” 对应原文举出的 “a language such as French” 以及其后的 “the French-speaking community” 所代表的各种语言",
            "“related more to environmental than biological factors” 同义替换为原文的 “do not result from any physiological aspect … but are the cultural possessions”，physiological（生理的）对应 biological，cultural（文化的）对应 environmental",
            "该句在原文中没有 held by、argued that 之类的归属标记，属于作者本人在第 4 段的论述"
          ],
          "locatingTip": "定位：题干关键词 different languages 与 biological factors 对应第 4 段的 French 与 physiological aspect，同段首句还有 cultural invention 这一同义说法，定位非常直接。确定答案技巧：找到句子后必须追问“这句话是谁说的”。第 4 段是作者的论证段：“The view that spoken language was ultimately a cultural invention … seems obvious when you think of the development of different languages.”，紧接着用 French 举例，全段没有出现 Chomsky 或 Condillac 的名字，也没有 held by、argued 之类归属词，因此该观点既不能算在 Chomsky 名下，也不能算在 Condillac 名下，只能选 C。另外要留意 Chomsky 一派的立场恰恰相反——语言能力是基因硬连线进大脑的，属于生物决定论，与题干正好对立。",
          "analysis": "第 4 段讨论的是“语言究竟是文化发明还是生理本能”。首句写 “The view that spoken language was ultimately a cultural invention like tool-making, which then drove the biological evolution of the brain and vocal apparatus, seems obvious when you think of the development of different languages.”（只要想想不同语言的发展，就会觉得言语归根结底像制工具一样是一种文化发明、随后又推动了大脑与发声器官的生物演化这一观点显而易见），随后给出本题定位句：“The unique features of a language such as French clearly do not result from any physiological aspect of being French but are the cultural possessions of the French-speaking community.”（像法语这样的语言，其独有特征显然并非源于身为法国人的任何生理层面，而是法语社群的文化财产）。physiological（生理的）即题干的 biological，cultural（文化的）即题干的 environmental，题干用 more … than 的比较结构重申了原文 do not … but are … 的排除与肯定关系，方向完全一致；但需要判断归属：这段是作者自己用来支持“文化发明说”的论证，文中没有把它归于 Chomsky 或 Condillac，Chomsky 的立场还与之相反（基因硬连线），因此本题只能选 C（neither Chomsky nor Condillac）。",
          "traps": [
            "为什么不是 A（Chomsky）：Chomsky 认为说话与使用句法的能力是晚近被基因硬连线进大脑的（genetically hard-wired into our brains），属于生物（基因）决定论，与题干“更多取决于环境/文化而非生物因素”正好相反，因此不能说 Chomsky 持此观点。",
            "为什么不是 B（Condillac）：Condillac 讨论的是言语如何从手势语言演化而来，全文没有涉及“不同语言之间的差异源于文化还是生理”这一议题。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "The ability to think rationally is linked to the ability to speak.",
          "translation": "理性思考的能力与说话的能力相关联。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "This view of language is associated with the old idea that logical thought is dependent on words, a concept originating with Plato and much in vogue in the 19th century"
          },
          "synonyms": [
            "“the ability to think rationally” 同义替换为原文的 “logical thought”（逻辑思维即理性思考）",
            "“the ability to speak” 同义替换为原文的 “words”（说话所依赖的词语）",
            "“is linked to” 同义替换为原文的 “is dependent on”，依赖关系即关联关系",
            "“This view of language” 回指上一句由 Chomsky 等人主张的那种语言观，给出观点归属"
          ],
          "locatingTip": "定位：题干关键词 rationally 与 speak 在原文对应 logical thought 与 words，落在第 2 段第 3 句，扫读时抓住 logical 一词即可。确定答案技巧：判断归属要看句首的 This view of language ——它回指的是上一句 “One view of language development, held by linguists such as Noam Chomsky …” 所讲的那种语言观（语言晚近突然出现、被基因硬连线的一派），说明“思维依赖词语”这一观念与该派语言观挂钩。题干“理性思考的能力与说话的能力相关联”正是 logical thought is dependent on words 的同义改写，因此归属 A（Chomsky）。要注意句中虽然提到这一观念源自 Plato，题目问的是它与哪种语言理论相联系，链接的对象仍是 Chomsky 一派。",
          "analysis": "第 2 段第 3 句即定位句：“This view of language is associated with the old idea that logical thought is dependent on words, a concept originating with Plato and much in vogue in the 19th century”（这一语言观与“逻辑思维依赖于词语”的旧观念相联系，该观念源自 Plato，在 19 世纪非常流行），末句进一步点出这种观念的后果：“that is, animals do not speak because they do not think”（也就是说，动物之所以不说话，是因为它们不思考）。题干的 the ability to think rationally 对应 logical thought，the ability to speak 对应 words，is linked to 对应 is dependent on，三处改写一一对应，句子关系完全相同。归属上，句首的 This view of language 是回指性表达，指的就是上一句由 Noam Chomsky 等语言学家持有的那种语言观；作者用 is associated with 把这一观念与该派理论绑定，因此答案是 A（Chomsky）。虽然该观念的最初提出者是 Plato，但题目考的是它与哪位学者的语言理论相关，链接点仍在 Chomsky。",
          "traps": [
            "为什么不是 B（Condillac）：Condillac 的论述集中在手势语言到言语的演化（langage d'action、声音编码为词语），完全没有涉及思维与语言孰先孰后的关系。",
            "为什么不是 C（neither Chomsky nor Condillac）：原文用 “This view of language is associated with …” 把“逻辑思维依赖词语”这一观念与上一句 Chomsky 一派的语言观明确挂钩，归属关系成立，不能选“两者都不是”。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 33–37 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 33,
        "end": 37
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "Anthropologists now agree on the point in time when speech began.",
          "translation": "人类学家现在对言语起源的时间点持一致意见。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Those anthropologists and fossil experts who accept that speech started early still tend to think of language evolution as a gradual 2-million-year process, with our own modern human species (Homo sapiens) way out at the top."
          },
          "synonyms": [
            "“Anthropologists” 原词复现，见原文 “Those anthropologists and fossil experts”",
            "“the point in time when speech began” 对应原文的 “speech started early” 与 “a gradual 2-million-year process”，同时与第 2 段的 “a mere 35,000 to 50,000 years ago” 形成对照",
            "“now agree” 与原文相互冲突：原文用 “still tend to think” 表明只是一部分人坚持，另一派主张的时间相差悬殊"
          ],
          "locatingTip": "定位：题干关键词 anthropologists 与 speech began，对应第 5 段首句的 anthropologists … speech started early，先跳到该段。确定答案技巧：本题考“是否已达成共识”，判分点在于原文是否给出互不相容的多种时间主张。第 2 段给出一种时间（a mere 35,000 to 50,000 years ago 突然出现），第 5 段又给出另一种时间（a gradual 2-million-year process 的渐进过程），两个数字相差几十倍，而且第 5 段用的仍是 still tend to think（仍然倾向于认为），说明分歧一直存在。既然时间点有不止一种说法，题干所说“如今已达成一致（now agree）”就与原文相矛盾，判 NO。",
          "analysis": "第 5 段首句即定位句：“Those anthropologists and fossil experts who accept that speech started early still tend to think of language evolution as a gradual 2-million-year process, with our own modern human species (Homo sapiens) way out at the top.”（那些接受言语很早就开始的人类学家与化石专家仍然倾向于把语言演化看成持续两百万年的渐进过程，并把我们自己的现代人种 Homo sapiens 放在最顶端）。句中的 Those … who accept … 表示这只是学界的一部分人，still tend to think 更说明这是一种延续的倾向而非共识；而第 2 段明确记载另一派（Chomsky、Klein）主张语言在仅仅 35,000 至 50,000 年前突然出现。一个说二百万年前就开始、渐进发展，一个说五万年前才突然冒出，时间点截然不同，学界显然没有取得一致意见。题干断言“人类学家现在已就言语开始的时间点达成一致”，与原文呈现的分歧状态直接对立，故判 NO。",
          "traps": [
            "为什么不是 YES：原文呈现两种互不相容的时间主张（35,000 至 50,000 年前突然出现；二百万年的渐进过程），并说“那些接受言语很早就开始的”人类学家与化石专家“仍然倾向于”渐进说，说明分歧依旧存在，与“如今一致”相反。",
            "为什么不是 NOT GIVEN：原文不仅提到人类学家（anthropologists and fossil experts），还给出了两派彼此冲突的具体时间数据，属于有明确信息且与题干相反，按规则判 NO 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "The rate of human technological development in ancient times was directly related to brain size.",
          "translation": "古代人类技术发展的速度与大脑大小直接相关。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "So, we have the paradox that over the period when our brain was growing most rapidly, our material cultural development, as measured by stone tools, advanced only marginally"
          },
          "synonyms": [
            "“human technological development” 同义替换为原文的 “material cultural development, as measured by stone tools”（以石器来衡量的物质文化发展，即技术发展）",
            "“the rate … in ancient times” 对应原文的 “advanced only marginally”（仅略有推进）与 “over a million years later”",
            "“directly related to brain size” 与原文相反：原文把大脑增长最快的阶段与技术进步极缓并列，并称之为 “paradox”（悖论）"
          ],
          "locatingTip": "定位：题干关键词 technological development 在原文对应 stone tools 与 material cultural development，出现在第 7 段；brain growing most rapidly 也在同一句中，一步定位。确定答案技巧：本题考“两者是否成正比、同步”。原文用 paradox（悖论）一词点明关系反常：大脑增长最快的时期，以石器衡量的文化发展只 “advanced only marginally”（仅略有进步）；而一百万年之后，当解剖学意义上的现代人开始在艺术和技术上加速发展时，大脑反而在变小（our brains were actually getting smaller）。一个“脑快技术慢”，一个“技术快脑缩”，与题干的 directly related 正好相反，故判 NO。做本题时抓住 paradox 这个词，它就是作者对“相关”说法的否定。",
          "analysis": "第 7 段即定位段：“So, we have the paradox that over the period when our brain was growing most rapidly, our material cultural development, as measured by stone tools, advanced only marginally; then, over a million years later, when the development of anatomically modern humans finally started to accelerate, artistically and technologically, our brains were actually getting smaller.”（于是我们面对这样一个悖论：在我们大脑增长最快的时期，以石器衡量的物质文化发展只推进了极微小的一步；而一百万年之后，解剖学上的现代人终于在艺术与技术方面开始加速发展时，我们的大脑实际上在变小）。题干说古代技术发展的速度与大脑大小“直接相关（directly related）”，暗示两者同向同步增长；原文给出的却是反向或错位的关系：脑量猛增期技术几乎停滞，技术加速期脑量反而下降，作者还专门称之为悖论。这一事实与题干的因果关系直接冲突，因此判 NO。另外注意第 6 段的重新测年说明脑量增长在一百二十万年前就基本结束，也与“脑越大、技术越快”的直觉不符。",
          "traps": [
            "为什么不是 YES：原文明确说两者并不同步——大脑增长最快的时期技术只 advanced only marginally，一百万年后的技术加速期又伴随着大脑缩小，作者还称之为 paradox，因此“直接相关”不成立。",
            "为什么不是 NOT GIVEN：原文用整整一段直接讨论大脑大小与石器技术发展速度的对应关系，信息充分且与题干相悖，属于有明确相反信息，应判 NO。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "The period when the brain was growing most quickly has now been identified.",
          "translation": "大脑生长最快的时期如今已被确定。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Over the period from 2.5 to 1.5 million years ago, brains were growing more rapidly than at any time since, within all the different human species."
          },
          "synonyms": [
            "“The period when the brain was growing most quickly” 同义替换为原文的 “the period from 2.5 to 1.5 million years ago, brains were growing more rapidly than at any time since”",
            "“has now been identified” 对应原文第 6 段的 “the revised dates” 与 “the result is startling: the bulk of increases in brain size was over by around 1.2 million years ago”，以及第 8 段的结论句 “The logical conclusion is that …”，都表明时段已被确认",
            "“within all the different human species” 说明该时期在各个人种中普遍成立，进一步支持结论的确定性"
          ],
          "locatingTip": "定位：题干关键词 growing most quickly 与原文 “brains were growing more rapidly than at any time since” 完全对应，落在第 8 段第 2 句。确定答案技巧：题干要验证的是“最快的时期是否已被找出”，因此要确认原文有没有给出具体时段与依据。第 6 段先讲对 Olduvai Gorge 地层的重新测年（a re-dating of soil layers … the revised dates），据此得出脑容量增长的大部分在约一百二十万年前就已结束；第 8 段再明确说在 250 万至 150 万年前这段时间，脑量增长比此后任何时候都快。时段清楚、依据是化石与脑容量数据，随后一句还用 “The logical conclusion is that …” 给出推论，说明作者认为该时期已被识别，故判 YES。",
          "analysis": "第 8 段紧随其后的两句是本题的依据：“Over the period from 2.5 to 1.5 million years ago, brains were growing more rapidly than at any time since, within all the different human species.”（在 250 万年前到 150 万年前这段时间里，所有不同人种的大脑增长速度都比此后任何时候都快），以及 “The logical conclusion is that there must have been a unique new behaviour driving brain growth, shared between all species of humans.”（合乎逻辑的结论是：一定存在一种独特的新行为在推动大脑增长，且为所有人类物种所共有）。原文既给出了明确的时间区间（2.5 至 1.5 百万年前），又用 the logical conclusion 表明这是作者认定的确定结论，前面第 6 段的重测年证据（the revised dates）还给出了脑增长完成于约 120 万年前的量化支撑。题干说“大脑生长最快的时期如今已被确定”，与原文提供的具体时段和确定语气一致，故判 YES。答题时要区分“时期是何时”与“驱动因素是什么”：原文对前者明确给出，对后者用 must have been 表示推测，本题只问前者。",
          "traps": [
            "为什么不是 NO：原文没有否认该时期可以被确定，反而直接给出答案——第 8 段指出 250 万至 150 万年前是所有人类物种大脑增长最快的时期。",
            "为什么不是 NOT GIVEN：第 6 段的重新测年（the revised dates）与第 8 段的结论句已经把最快增长期的时间区间交代清楚，信息完整，不属于未提及。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "The development of agriculture influenced language development.",
          "translation": "农业的发展影响了语言的发展。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "The search for food became more taxing, and there would have been a real need to communicate more effectively and cope with the worsening environment in a co-operative way."
          },
          "synonyms": [
            "“The development of agriculture” 在原文中没有对应：原文只提到 “The search for food became more taxing”（觅食变得更艰难）与天气变坏，全文没有出现农业（agriculture、farming、cultivation 等词）",
            "“influenced language development” 与原文的 “there would have been a real need to communicate more effectively” 只构成“环境压力促使沟通需求增加”的说法，并未牵涉农业这一变量",
            "原文的外部因素是气候（the weather），不是农业"
          ],
          "locatingTip": "定位：题干关键词 agriculture 在原文中根本没有出现，只能退一步找与“食物获取影响沟通”最接近的句子，即第 9 段的 “The search for food became more taxing, and there would have been a real need to communicate more effectively…”，并同时看前一句关于气候的描述。确定答案技巧：原文谈的是气候变坏（the weather took a decided turn for the worse, becoming more variable and colder and drier）与觅食困难促使早期人类更有效地沟通，属于环境与生存压力对沟通需求的影响；全文没有任何一处提到农业的出现或农业对语言的作用，所以“农业影响语言发展”这一命题在原文无从判断，判 NOT GIVEN。切勿因为看到“食物（food）”就把觅食困难当作农耕的影响——原文说的原因始终是天气与觅食难度，而非耕种。",
          "analysis": "第 9 段讨论 250 万年前大脑为何快速增长，原文给出的解释是环境压力带来的沟通需求：“Around 2.5 million years ago, the weather took a decided turn for the worse, becoming more variable and colder and drier. The search for food became more taxing, and there would have been a real need to communicate more effectively and cope with the worsening environment in a co-operative way.”（约 250 万年前，天气明显变坏，变得更不稳定、更冷更干燥。寻找食物变得更费力，于是确实需要更有效地沟通、以合作的方式应对日益恶化的环境）。这里涉及的因素只有气候与觅食难度，通篇没有 agriculture（农业）或任何耕作、驯化的字眼。题干把 agriculture 的发展说成影响语言发展的因素，属于原文完全未提及的信息：既没有说农业影响了语言，也没有说农业与语言无关，因此既不能判 YES 也不能判 NO，只能判 NOT GIVEN。这也是雅思常见陷阱——题干使用了与原文相邻话题（食物、环境）相近的词，诱使考生把“觅食困难”等同于“农业发展”。",
          "traps": [
            "为什么不是 YES：原文只把沟通需求与气候变坏、觅食困难联系起来，从未提到农业（agriculture）这一因素，题干的关键变量在原文缺失，无法判断作者是否同意。",
            "为什么不是 NO：原文并没有否认农业对语言有影响，只是完全没有涉及这一话题；没有相反信息就不能判 NO，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Cultural development has been seen to follow a particular pattern throughout human history.",
          "translation": "在整个历史进程中，文化发展被认为遵循某种特定模式。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "10",
            "quote": "If each new generation invented just one new skill or idea and passed it on with the rest to their children and cousins, you could predict exactly the same curve of cultural advance as we see from the archaeological and historical record"
          },
          "synonyms": [
            "“a particular pattern” 同义替换为原文的 “the same curve of cultural advance”（同一条文化进步的曲线）",
            "“throughout human history” 同义替换为原文的 “as we see from the archaeological and historical record”，以及句末的 “first very slow, then faster and faster” 所描述的长期走势",
            "“has been seen to follow” 同义替换为原文的 “you could predict exactly the same curve … as we see”，表示可以从记录中观察到这一走势"
          ],
          "locatingTip": "定位：题干关键词 pattern 与 cultural development 对应末段的 the same curve of cultural advance，第 10 段通篇讲文化累积，扫到 curve 即可锁定。确定答案技巧：题干说“文化发展被认为遵循某种特定模式”，需要确认原文有没有给出模式本身。末段先提出“文化演化是由沟通与教学推动的累积互动过程（a cumulative interactive process）”，再用假设句式说明：只要每一代新增一项技能或想法并连同其余内容传给子女与表亲，就能推出与考古学和历史记录中完全一致的进步曲线，并点出这条曲线的形状——开始极其缓慢，然后越来越快（first very slow, then faster and faster）。曲线就是题干所说的 particular pattern，而且与考古与历史记录相符，属于作者明确主张的观点，故判 YES。",
          "analysis": "末段是本题的依据段：“Cultural evolution aided by communication and teaching is a cumulative interactive process. If each new generation invented just one new skill or idea and passed it on with the rest to their children and cousins, you could predict exactly the same curve of cultural advance as we see from the archaeological and historical record – first very slow, then faster and faster.”（由沟通与教学推动的文化演化是一个累积性的互动过程。如果每一代只发明一项新技能或新想法，并连同其余内容一起传给子女与表亲，你就能预测出一条与我们从考古和历史记录中看到的完全相同的文化进步曲线——先是极其缓慢，然后越来越快）。题干的 cultural development 对应原文的 cultural advance / cultural evolution，a particular pattern 对应 the same curve（同一条曲线），throughout human history 对应 we see from the archaeological and historical record；原文还对这条曲线的形状作了具体描述，并用 predict exactly the same curve 表明模式是可以确认、可以复现的，与题干一致，故判 YES。",
          "traps": [
            "为什么不是 NO：原文并没有否认存在规律，反而说预测曲线与考古学、历史记录中的文化进步曲线完全一致（exactly the same curve），信息方向与题干相同。",
            "为什么不是 NOT GIVEN：原文不仅提到模式的存在，还给出了它的具体形状（先极慢、后越来越快）与成因（cumulative interactive process），信息完整而非缺失。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 38–40 匹配题（日期匹配：A 2.5 million years ago / B 1.5 million years ago / C 1.2 million years ago / D 0.5 million years ago）",
      "mode": "per_question",
      "questionRange": {
        "start": 38,
        "end": 40
      },
      "items": [
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Revised fossil evidence indicates most brain growth was complete.",
          "translation": "修改后的化石证据表明大脑增长的大部分已经完成。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "When brain sizes for all available skulls are plotted against time using the revised dates, the result is startling: the bulk of increases in brain size was over by around 1.2 million years ago, with some African human species having brain volumes easily within the modern human range by that time."
          },
          "synonyms": [
            "“Revised fossil evidence” 同义替换为原文的 “the revised dates” 以及上一句的 “a re-dating of soil layers from the famous Olduvai Gorge”（对东非 Olduvai Gorge 地层的重新测年）",
            "“most brain growth was complete” 同义替换为原文的 “the bulk of increases in brain size was over”（脑容量增长的大部分已经结束）",
            "时间点由原文的 “by around 1.2 million years ago” 给出，对应选项 C（1.2 million years ago）"
          ],
          "locatingTip": "定位：题干关键词 revised fossil evidence 对应第 6 段的 re-dating 与 the revised dates，most brain growth 对应 the bulk of increases in brain size，两处都在第 6 段后半部分。确定答案技巧：先找“重新测年”的句子，再看它得出的结论——把全部头骨的脑容量按修改后的年代作图后会看到，脑容量增长的主体（the bulk of increases）在约一百二十万年前就已结束，与题干“大部分脑增长已完成”对应，因此时间是选项 C。要注意区分本组选项的性质：A（2.5 million years ago）是快速增长刚起步的时间，B（1.5 million years ago）是增长区间的下端，都与“完成”无关；D 在原文根本没有对应内容。",
          "analysis": "第 6 段先讲证据来源：“The first of these is a re-dating of soil layers from the famous Olduvai Gorge in East Africa, where many key fossil remains have been found.”（第一项是对东非著名的 Olduvai Gorge 土壤层的重新测年，许多关键化石遗存都发现于此），随后给出本题定位句：“When brain sizes for all available skulls are plotted against time using the revised dates, the result is startling: the bulk of increases in brain size was over by around 1.2 million years ago, with some African human species having brain volumes easily within the modern human range by that time.”（当把所有可获得的头骨脑容量按修改后的年代作图时，结果令人吃惊：脑容量增长的主体在约一百二十万年前就已结束，一些非洲人种到那时脑容量已轻松落入现代人的区间）。the revised dates 对应题干的 Revised fossil evidence，the bulk of increases in brain size was over 对应 most brain growth was complete，时间点 by around 1.2 million years ago 直接对应选项 C。因此答案是 C（1.2 million years ago）。做题时务必按“完成/结束”这一含义找时间，而不是按“增长”找时间。",
          "traps": [
            "为什么不是 A（2.5 million years ago）：250 万年前是第 9 段所说的快速增长刚刚开始的时间点（right at the beginning），是增长的起点而非完成时点。",
            "为什么不是 B（1.5 million years ago）：150 万年前只是第 8 段给出的快速增长区间（from 2.5 to 1.5 million years ago）的末端，原文并未说脑增长在该时间结束。",
            "为什么不是 D（0.5 million years ago）：全文没有出现 50 万年前，更没有与该年份相关的脑增长描述，属于无对应内容的干扰项。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "The writer suggests that language development was complete.",
          "translation": "作者暗示语言的发展已经完成（成熟）。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "The near maximum in brain size achieved by 1.2 million years ago indicates that those early ancestors could already have been talking perfectly well."
          },
          "synonyms": [
            "“language development was complete” 同义替换为原文的 “could already have been talking perfectly well”（已经完全能说得很好）以及 “The near maximum in brain size”（接近最大值的脑容量）",
            "“The writer suggests” 同义替换为原文的 “indicates”",
            "时间点由原文的 “by 1.2 million years ago” 给出，对应选项 C（1.2 million years ago）"
          ],
          "locatingTip": "定位：题干谈的是语言发展的完成程度，原文第 9 段末两句专门讲早期祖先的说话能力，其中出现 by 1.2 million years ago，可直接对应本组的时间选项。确定答案技巧：题干的关键词 complete 在原文对应的不是同一个词，而是 “could already have been talking perfectly well”（早就能说得很好）这一近义表达，以及 “The near maximum in brain size … achieved by 1.2 million years ago” 这一前提；作者由脑量接近上限推断语言能力在 120 万年前就已成熟，因此时间选 C。注意与上题区分：上题讲的是“脑量增长”的完成，本题讲的是“语言能力”的成熟，两者都指向同一时间点，但依据的句子不同。",
          "analysis": "第 9 段在提出“早期人类及其祖先已开始言语交流”的推论后写道：“The near maximum in brain size achieved by 1.2 million years ago indicates that those early ancestors could already have been talking perfectly well. Our brain, which had developed to manipulate and organise complex symbolic aspects of speech internally, could now be turned to a variety of other tasks.”（到一百二十万年前达到的接近最大值的脑容量表明，那些早期祖先早就能把话说得很好了。我们的大脑原本已发展出在内部处理和组织言语的复杂符号层面的能力，此后可以转而用于其他各种任务）。题干说“作者暗示语言的发展已经完成”，对应 could already have been talking perfectly well（已经能说得很好）这一完成态表达，并结合 the near maximum in brain size achieved by 1.2 million years ago 这一时间前提：脑量既已接近上限，语言能力也被认为已经成熟，随后大脑还转向别的工作。前后的时间点都是 120 万年前，故答案为 C（1.2 million years ago）。",
          "traps": [
            "为什么不是 A（2.5 million years ago）：250 万年前是作者所说的沟通需求出现（气候变坏、觅食困难）进而推动脑量快速增长的起点，语言能力此时尚未成熟。",
            "为什么不是 B（1.5 million years ago）：150 万年前只是脑量快速增长区间的另一个端点，原文并未把语言发展的完成定在该年份。",
            "为什么不是 D（0.5 million years ago）：全文没有出现 50 万年前，更没有与之相关的语言或大脑成熟度的论述。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "An external change may have influenced language development.",
          "translation": "一种外部变化可能影响了语言的发展。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "Around 2.5 million years ago, the weather took a decided turn for the worse, becoming more variable and colder and drier."
          },
          "synonyms": [
            "“An external change” 同义替换为原文的 “the weather took a decided turn for the worse, becoming more variable and colder and drier”（天气明显变坏，变得更不稳定、更冷更干燥）",
            "“may have influenced language development” 同义替换为原文的 “The search for food became more taxing, and there would have been a real need to communicate more effectively”，环境恶化带来更有效沟通的现实需求，即影响了语言（沟通）的发展",
            "时间点由原文的 “Around 2.5 million years ago” 给出，对应选项 A（2.5 million years ago）"
          ],
          "locatingTip": "定位：题干的落点是“外部变化”，回原文找不以人类意志为转移的外部因素，第 9 段只有气候符合：the weather took a decided turn for the worse，而且紧接明确年代 Around 2.5 million years ago。确定答案技巧：题干的 may have influenced 是推测语气，与原文 would have been 的推测语气一致——天气变糟、觅食变难，于是产生了更有效沟通与协作应对环境的现实需求，作者据此推论早期祖先已经开始言语交流。外部变化与语言需求的因果链出现在 250 万年前，故选 A。注意区分本组的其他年份：B 与 C 都出自脑量/语言成熟度的讨论，与外部环境变化无关。",
          "analysis": "第 9 段先自问“是什么在最初驱动了大脑的快速增长”，随后给出答案并交代外部背景：“Around 2.5 million years ago, the weather took a decided turn for the worse, becoming more variable and colder and drier. The search for food became more taxing, and there would have been a real need to communicate more effectively and cope with the worsening environment in a co-operative way.”（约 250 万年前，天气明显变坏，变得更不稳定、更冷、更干燥。寻找食物变得更费力，于是确实需要更有效地沟通、以合作的方式应对日益恶化的环境）。天气变坏是典型的外部（自然）变化，其后果是沟通需求上升、语言得到推动，正好对应题干 an external change may have influenced language development；而这一变化发生的时间在原文中明确写作 Around 2.5 million years ago，故时间答案为 A（2.5 million years ago）。第 10 段讲的文化累积与此题无关，不要误选其他年份。",
          "traps": [
            "为什么不是 B（1.5 million years ago）：150 万年前出现在第 8 段，仅作为脑量快速增长区间的下端点，该处没有谈到任何外部环境变化。",
            "为什么不是 C（1.2 million years ago）：120 万年前讲的是脑量已达近乎最大值、语言能力已经成熟，属于结果而非外部诱因。",
            "为什么不是 D（0.5 million years ago）：全文没有出现 50 万年前这一时间点，也没有与之相关的外部变化描述。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
