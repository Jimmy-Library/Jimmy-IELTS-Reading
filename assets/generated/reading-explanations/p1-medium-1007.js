(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1007", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1007",
  "meta": {
    "examId": "p1-medium-1007",
    "title": "A Brief History of Poetry 诗歌简史",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 表格填空（NO MORE THAN TWO WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Iliad and Odyssey in 1 ________（表格第一行 Ancient Epic 的 Key Features or Examples）",
          "translation": "《伊利亚特》与《奥德赛》以 ________ 写成。",
          "answer": "dactylic hexameter",
          "wordClass": "名词短语（诗体格律名称，作介词 in 的宾语；原文中即为两个单词，恰好符合 NO MORE THAN TWO WORDS 的限制）",
          "locating": {
            "paragraph": "3",
            "quote": "In the Western world, the most renowned epics are Homer's Iliad and Odyssey, written in dactylic hexameter."
          },
          "synonyms": [
            "表格的 “Iliad and Odyssey in 1 ________” 对应原文的 “Homer's Iliad and Odyssey, written in dactylic hexameter”，原文的过去分词 written 在改写成表格时被省略，只留下介词 in 加格律名",
            "表格 Notable Writers 栏的 “Homer” 与原文 “Homer's Iliad and Odyssey” 中的专有名词 Homer 直接对应",
            "表格 Period / Form 栏的 “Ancient Epic” 与原文 “the most renowned epics” 中的 epics 对应"
          ],
          "locatingTip": "定位：表格第一行给出了专有名词 Homer，扫读全文只有第 3 段出现 “Homer's Iliad and Odyssey”，一步锁定第 3 段首句。确定答案技巧：空格紧跟介词 in，说明要填的是“以某种格律写成”，原文 “written in dactylic hexameter” 正是“in 加格律”的结构；短语共两个词，符合 NO MORE THAN TWO WORDS 的词数限制。注意区分同表第二行的 iambic pentameter（那是十四行诗的格律，见第 4 段）。",
          "analysis": "表格第一行讲古代史诗（Ancient Epic），例子栏已列出《吉尔伽美什史诗》，并把《伊利亚特》与《奥德赛》的成诗方式留空。原文第 3 段首句：“In the Western world, the most renowned epics are Homer's Iliad and Odyssey, written in dactylic hexameter.”（在西方世界，最著名的史诗是荷马的《伊利亚特》和《奥德赛》，它们以扬抑抑格六音步写成）。原文的 written in dactylic hexameter 与表格里 “Iliad and Odyssey in 1 ________” 完全吻合，把过去分词 written 去掉后，空格承担的正是格律名称，故填 dactylic hexameter。本题最常见的错误是把第 4 段十四行诗的 iambic pentameter 填进来——两者分别属于史诗与十四行诗两行，切勿混用。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Emerged in 2 ________ century（表格第二行 Sonnet 的 Key Features or Examples）",
          "translation": "（十四行诗）出现在 ________ 世纪。",
          "answer": "13th",
          "wordClass": "序数词（作 century 的定语，说明“第几世纪”；属题目允许填写的 NUMBER，保留原文的阿拉伯数字加序数后缀写法 13th）",
          "locating": {
            "paragraph": "1",
            "quote": "Centuries later, the sonnet emerged in the 13th century, while the Restoration poetry of the 17th century introduced a new wave of satire"
          },
          "synonyms": [
            "表格的 “Emerged in 2 ________ century” 同义替换为原文的 “the sonnet emerged in the 13th century”，动词 emerged 在原文与题干中都是 emerge",
            "表格 Period / Form 栏的 “Sonnet” 在原文中直接出现（“the sonnet emerged”），属栏目词原词复现",
            "表格同行的 “iambic pentameter; Shakespearean style” 与第 4 段 “Written in iambic pentameter, its rhyme scheme varies between the Petrarchan and the Shakespearean styles.” 对应，可用来确认本行讲的正是十四行诗"
          ],
          "locatingTip": "定位：本行栏目词是 Sonnet，原文第 1 段与第 4 段都出现 sonnet；但题干问的是“出现于哪一世纪”，只有第 1 段的 “the sonnet emerged in the 13th century” 交代了出现时间，第 4 段讲的是格律、代表人物与兴衰，因此锁定第 1 段。确定答案技巧：抓住 emerged 与 century 两个信号词，空格就落在 century 之前的世纪数上，填 13th。",
          "analysis": "原文第 1 段按时间线列举诗歌形式：“Centuries later, the sonnet emerged in the 13th century, while the Restoration poetry of the 17th century introduced a new wave of satire through writers such as John Dryden and Alexander Pope.”（几百年后，十四行诗于 13 世纪出现，而 17 世纪的复辟时期诗歌借助约翰·德莱顿、亚历山大·蒲柏等作家带来了新的讽刺浪潮）。表格第二行 “Emerged in 2 ________ century” 正是把 “emerged in the 13th century” 中的世纪数挖空，故答案是 13th。填写时保留序数词形式 13th（空格后已有名词 century，不能写成 thirteen 或 13）；同段还出现 the 17th century，那是复辟时期诗歌的时间，不可误填。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Petrarch, 3 ________（表格第二行 Sonnet 的 Notable Writers）",
          "translation": "彼特拉克、________（十四行诗的代表作家）。",
          "answer": "Shakespeare",
          "wordClass": "专有名词（人名，与前面的 Petrarch 并列，指英国诗人威廉·莎士比亚；只填姓氏，首字母大写）",
          "locating": {
            "paragraph": "4",
            "quote": "The Italian poet Petrarch popularized the form in the 14th century, inspiring later writers. In England, William Shakespeare transformed the sonnet"
          },
          "synonyms": [
            "表格的 “Petrarch, 3 ________” 与原文 “The Italian poet Petrarch popularized the form in the 14th century, inspiring later writers. In England, William Shakespeare transformed the sonnet” 中两位诗人的并列顺序对应",
            "原文先提 Petrarch 再提 William Shakespeare，与表格“Petrarch, ____”的并列关系一致",
            "第 4 段后面的 “the Petrarchan and the Shakespearean styles” 把两人名字并列出形容词形式，进一步印证本行答案"
          ],
          "locatingTip": "定位：Petrarch 是专有名词，全文只在第 4 段出现，扫读时一眼可认，直接跳到第 4 段前两句。确定答案技巧：表格用逗号把两位作家并列，原文第 4 段同样先后列出这两位诗人——先是意大利诗人彼特拉克，再是在英国改造十四行诗的威廉·莎士比亚，与 Petrarch 并列的另一位就是答案。只写姓氏 Shakespeare（表格里已给出的 Petrarch 也是姓氏，答案与之一致，无需写成全名）。",
          "analysis": "第 4 段集中讲十四行诗：“The Italian poet Petrarch popularized the form in the 14th century, inspiring later writers. In England, William Shakespeare transformed the sonnet, making it a vessel for themes of love, time, and beauty in his 154 sonnet sequence.”（意大利诗人彼特拉克在 14 世纪使这一诗体流行起来，启发了后来的作家；在英国，威廉·莎士比亚改造了十四行诗，使他的 154 首十四行诗序列成为承载爱情、时间与美等主题的容器）。原文把彼特拉克与莎士比亚作为十四行诗史上的两位关键人物先后列出，表格的 “Petrarch, 3 ________” 正是要求补出与他并列的另一位作家，答案即 Shakespeare。同段后半句 “the Petrarchan and the Shakespearean styles” 把两人名字并列为两种韵式风格，也可用于交叉验证答案。",
          "traps": []
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "works like 4 ________ Mac Flecknoe（表格第三行 Restoration Poetry 的 Key Features or Examples）",
          "translation": "（复辟时期诗歌的）代表作，如 ________ 的《马克·弗莱克诺》。",
          "answer": "mock-heroic",
          "wordClass": "复合形容词（在原文中作定语修饰 works，改写进表格后修饰作品名 Mac Flecknoe；需连字符与词尾照写，一个词计）",
          "locating": {
            "paragraph": "5",
            "quote": "John Dryden, the era's leading poet, became famous for his mock-heroic works, such as Mac Flecknoe, a satirical attack on the poet Thomas Shadwell"
          },
          "synonyms": [
            "表格的 “works like 4 ________ Mac Flecknoe” 同义替换为原文的 “became famous for his mock-heroic works, such as Mac Flecknoe”，表格的 like 对应原文的 such as",
            "表格 Period / Form 栏的 “Restoration Poetry” 与原文 “the Restoration period (1660–1689)” 对应",
            "表格同行的 “Emphasized wit, reason, satire” 与第 4 段末句 “Restoration poetry, which emphasized wit, reason, and social critique” 对应"
          ],
          "locatingTip": "定位：作品名 Mac Flecknoe 只在第 5 段出现，同段还有人名 John Dryden，两者都是极佳的定位词，扫读时锁定第 5 段第 2 句即可。确定答案技巧：表格说复辟时期诗歌有“……的作品，如《马克·弗莱克诺》”，原文对应句为 “became famous for his mock-heroic works, such as Mac Flecknoe”，其中 such as 与表格的 like 同义，被 such as 引出例子的类别名就落在空格上，即 mock-heroic（戏仿英雄体）。注意它是带连字符的复合形容词，必须完整照写，不能只写 heroic。",
          "analysis": "第 5 段写复辟时期诗歌：“John Dryden, the era's leading poet, became famous for his mock-heroic works, such as Mac Flecknoe, a satirical attack on the poet Thomas Shadwell, and Absalom and Achitophel (1681).”（约翰·德莱顿是这一时期的代表诗人，以《马克·弗莱克诺》等戏仿英雄体作品闻名，该作是对诗人托马斯·沙德韦尔的讽刺攻击……）。表格把原文的类别标签挪到作品名之前，写成 “works like 4 ________ Mac Flecknoe”，空格要填的正是原文中修饰 works 的 mock-heroic。紧接着的下一句 “These poems used the grand language of epic poetry to critique contemporary politics and literary rivals.”（这些诗借用史诗的宏阔语言来批判当时的政治与文坛对手）解释了“戏仿英雄体”这一命名的由来，可与答案互相印证。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "reaction against 5 ________ age（表格第四行 Romantic Poetry 的 Key Features or Examples）",
          "translation": "（浪漫主义诗歌）是对 ________ 时代的反拨；age 为其所修饰的名词。",
          "answer": "neoclassical",
          "wordClass": "形容词（作定语修饰后面的 age，指浪漫主义之前的新古典主义时期；保持原文拼写，按原文小写形式填写）",
          "locating": {
            "paragraph": "6",
            "quote": "which valued emotion, nature, and individualism over the reason and order of the neoclassical age"
          },
          "synonyms": [
            "表格的 “Focus on emotion, nature, individualism” 同义替换为原文的 “valued emotion, nature, and individualism”",
            "表格的 “reaction against 5 ________ age” 同义替换为原文的 “over the reason and order of the neoclassical age”，介词 over 表示“胜过、抛开”，译为“反拨、背离”",
            "表格 Period / Form 栏的 “Romantic Poetry” 与原文 “the rise of Romantic poetry” 直接对应"
          ],
          "locatingTip": "定位：题干关键词 Romantic 只出现在第 6 段（“the rise of Romantic poetry”），据此锁定第 6 段首句。确定答案技巧：空格后面是名词 age，说明要填形容词；表格说浪漫主义是对这一时代的反拨，对应原文介词 over 引出的对立对象 “the reason and order of the neoclassical age”，取其中修饰 age 的形容词 neoclassical。不要填 reason 或 order（那是被浪漫主义抛弃的“特征”，不是修饰 age 的词），也不要填 Romantic 自身。",
          "analysis": "第 6 段首句：“The 18th and 19th centuries saw further evolution with the rise of Romantic poetry, which valued emotion, nature, and individualism over the reason and order of the neoclassical age.”（18 与 19 世纪迎来了新的演变，浪漫主义诗歌兴起，它看重情感、自然与个人主义，而非新古典主义时代的理性与秩序）。表格把这一句压缩为 “Focus on emotion, nature, individualism; reaction against 5 ________ age”，原文的 valued … over … 被改写成 reaction against（对……的反拨），被反拨的对象就是 the neoclassical age，故空格填 neoclassical。第 5 段也曾提到复辟时期 “a turn toward neoclassical ideals”（转向新古典主义理想），可见 neoclassical 是本文指称浪漫主义之前那个时代的标准说法，信息可以互相印证。答案只填一个形容词，age 已在表格中给出，不必重复。",
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
          "stem": "Poetry is easier to trace to a specific origin than other literary forms.",
          "translation": "诗歌比其它文学形式更容易追溯到某个具体的起源。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Unlike other literary forms that can be traced to specific texts and eras, poetry's beginnings are difficult to pinpoint."
          },
          "synonyms": [
            "题干的 “other literary forms” 在原文中原词复现：“Unlike other literary forms that can be traced to specific texts and eras”",
            "题干的 “a specific origin” 对应原文的 “poetry's beginnings”，但原文给出的评语是 “difficult to pinpoint”（难以精确定位）",
            "题干的 “easier to trace” 与原文的 “are difficult to pinpoint” 方向完全相反，属于反义改写而不是同义替换"
          ],
          "locatingTip": "定位：题干关键词 poetry 与 other literary forms 同时出现在第 1 段首句，而且 unlike 是典型的对比信号词，扫读第一句话即可定位，无需读完全文。确定答案技巧：原文用 Unlike 结构对比两类对象——其它文学形式 “can be traced to specific texts and eras”（可以追溯到具体的文本与时代），诗歌却 “beginnings are difficult to pinpoint”（起源难以确定）。题干把“难”改成“更容易（easier）”，比较方向被颠倒，故判 FALSE。",
          "analysis": "第 1 段首句：“Unlike other literary forms that can be traced to specific texts and eras, poetry's beginnings are difficult to pinpoint.”（与那些可以追溯到具体文本与时代的其它文学形式不同，诗歌的起源很难精确定位）。原文的比较关系十分明确：别的文学形式有清晰源头，诗歌则没有，difficult to pinpoint 就是“难以确定”。题干写成 “Poetry is easier to trace to a specific origin than other literary forms.”，把诗歌说成比其它文学形式更“容易追溯”，与原文的比较方向正好相反，属于典型的反义改写，因此答案是 FALSE。做判断题时要特别盯住比较级与 unlike、more than、rather than 这类对比结构。",
          "traps": [
            "为什么不是 TRUE：原文明确说诗歌的起源 difficult to pinpoint（难以确定），而把“可以追溯到具体文本与时代”这一点给了其它文学形式；题干把两者的难易关系倒过来，与原文直接冲突，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文第一句就把诗歌与其它文学形式的可追溯性作了明确对比，信息完整且方向清晰，并非没有提及，因此不能因为“感觉没有讲得很细”而选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The Epic of Gilgamesh was originally written on Babylonian tablets.",
          "translation": "《吉尔伽美什史诗》最初是写在巴比伦泥板上的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The Epic of Gilgamesh, dating back to the 18th century B.C., is widely regarded as one of the oldest examples. Fragments from Sumerian poems discovered on Babylonian tablets"
          },
          "synonyms": [
            "题干的 “The Epic of Gilgamesh” 与原文原词复现，是本题最稳的定位词",
            "题干的 “on Babylonian tablets” 与原文的 “discovered on Babylonian tablets” 中 “on Babylonian tablets” 完全一致",
            "原文的 “dating back to the 18th century B.C., is widely regarded as one of the oldest examples” 与题干“最初（originally）”的时间层含义相呼应，说明该史诗的年代极早"
          ],
          "locatingTip": "定位：专有名词 The Epic of Gilgamesh 与 Babylonian tablets 都集中在第 2 段前两句，扫到作品名后精读该段即可，不必读完全文。确定答案技巧：原文把该史诗与 Babylonian tablets 直接关联（“Fragments from Sumerian poems discovered on Babylonian tablets”），题干的 on Babylonian tablets 与之吻合，因此判 TRUE。注意措辞差异：原文用 discovered on（在泥板上被发现），题干写成 originally written on（最初写在泥板上）；题库答案是把巴比伦泥板视为该史诗早期文字载体的正面证据，故此处照答案表作 TRUE。",
          "analysis": "第 2 段开头写道：“Who composed the first poem? The Epic of Gilgamesh, dating back to the 18th century B.C., is widely regarded as one of the oldest examples. Fragments from Sumerian poems discovered on Babylonian tablets, it tells heroic tales that reveal ancient views of life and death.”（谁写下了第一首诗？《吉尔伽美什史诗》可追溯到公元前 18 世纪，被普遍视为最古老的例子之一；它来自在巴比伦泥板上发现的苏美尔诗歌残片，讲述揭示古人对生死看法的英雄故事）。题干所说的 Babylonian tablets 在原文中有明确对应，作品与巴比伦泥板的关联是原文亲自写出的，所以答案是 TRUE。需要提醒的是，原文的动词是 discovered（发现），题干用的是 originally written（最初书写）；题库答案取的是“该史诗的文字见于巴比伦泥板”这一层对应关系，这里照答案表判 TRUE。做题时遇到这类细微措辞差异，理解上抓“作品与巴比伦泥板直接相关”这一核心即可。",
          "traps": [
            "为什么不是 FALSE：原文并未否认该史诗与巴比伦泥板的关联，反而把两者写在同一句里（Fragments … discovered on Babylonian tablets），不存在与题干相矛盾的信息，故不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干的两个关键信息——作品名 The Epic of Gilgamesh 与载体 Babylonian tablets——在原文同一段出现，信息已经给出，不属于未提及。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Shakespeare wrote more than 150 sonnets.",
          "translation": "莎士比亚创作的十四行诗超过 150 首。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "In England, William Shakespeare transformed the sonnet, making it a vessel for themes of love, time, and beauty in his 154 sonnet sequence."
          },
          "synonyms": [
            "题干的 “wrote … sonnets” 对应原文的 “his 154 sonnet sequence”，原文的 154 即他所写十四行诗的数量",
            "题干的 “more than 150” 与原文数字 “154” 构成同向的信息换算：154 大于 150",
            "题干的 “Shakespeare” 对应原文的 “William Shakespeare”，同段还出现 “the Shakespearean styles” 作为旁证"
          ],
          "locatingTip": "定位：人名 Shakespeare 是专有名词，第 4 段连续出现（William Shakespeare、the Shakespearean styles），可一步锁定第 4 段。确定答案技巧：题干的关键是数量 “more than 150”，回原文找数字，原文给出 “his 154 sonnet sequence”，即他创作了由 154 首诗组成的十四行诗序列；154 大于 150，与题干同向，故判 TRUE。雅思常把具体数字改写成区间或比较级，看到数字就要敏感。",
          "analysis": "第 4 段写莎士比亚对十四行诗的改造：“In England, William Shakespeare transformed the sonnet, making it a vessel for themes of love, time, and beauty in his 154 sonnet sequence.”（在英国，威廉·莎士比亚改造了十四行诗，使他的 154 首十四行诗序列成为承载爱情、时间与美等主题的容器）。题干 “Shakespeare wrote more than 150 sonnets.” 的依据正是这个 154 sonnet sequence：154 首确实多于 150 首，数字层面完全吻合，故答案是 TRUE。注意不要把 154 误读成“第 154 首”或“1540 首”，sonnet sequence 指一整组十四行诗，154 就是数量；也应与同段出现的时间 “the 14th century”（彼特拉克的时代）区分开。",
          "traps": [
            "为什么不是 FALSE：原文给出的数量是 154，明确大于 150，与题干“超过 150 首”同向一致，不存在任何矛盾。",
            "为什么不是 NOT GIVEN：原文用具体数字 154 交代了莎士比亚十四行诗的数量，信息已经给出且与题干同向，因此不属于未提及。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Restoration poetry immediately followed the Romantic period.",
          "translation": "复辟时期诗歌紧接着浪漫主义时期出现。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The 18th and 19th centuries saw further evolution with the rise of Romantic poetry, which valued emotion, nature, and individualism over the reason and order of the neoclassical age."
          },
          "synonyms": [
            "原文把浪漫主义诗歌的时间写作 “The 18th and 19th centuries”，而第 5 段交代复辟时期为 “the Restoration period (1660–1689)”，即 17 世纪",
            "题干的 “immediately followed” 要求复辟时期晚于浪漫主义时期；原文的时间顺序恰好相反，先复辟（17 世纪）后浪漫主义（18 与 19 世纪）",
            "原文的 “the reason and order of the neoclassical age” 还说明浪漫主义出现于新古典主义（含复辟时期）之后"
          ],
          "locatingTip": "定位：题干出现两个时代专名 Restoration 与 Romantic。Restoration 在第 5 段（并注明 1660–1689），Romantic 在第 6 段首句（18 与 19 世纪），把两段的年份一比即可判定。确定答案技巧：判断题里的时间与顺序词（immediately followed、before、after）最容易设错。原文顺序是：17 世纪复辟时期诗歌在前，18、19 世纪的浪漫主义诗歌在后；题干却说复辟时期“紧接浪漫主义时期之后”，把先后关系颠倒了，故判 FALSE。",
          "analysis": "第 6 段首句：“The 18th and 19th centuries saw further evolution with the rise of Romantic poetry, which valued emotion, nature, and individualism over the reason and order of the neoclassical age.”（18 与 19 世纪迎来了新的演变，浪漫主义诗歌兴起，它看重情感、自然与个人主义，而非新古典主义时代的理性与秩序）。把三处时间串起来看：第 1 段写 “Restoration poetry of the 17th century”，第 5 段写 “England entered the Restoration period (1660–1689)”，第 6 段写浪漫主义兴起于 18 与 19 世纪。可见复辟时期（17 世纪）在前，浪漫主义（18 至 19 世纪）在后。题干却写成 “Restoration poetry immediately followed the Romantic period.”（复辟时期诗歌紧接着浪漫主义时期出现），把顺序完全说反，与原文时间线直接冲突，故判 FALSE。做这类时代顺序题必须回原文分别找到两个时期的时间表述并对齐，不能只凭历史常识作答。",
          "traps": [
            "为什么不是 TRUE：原文的时间线是复辟时期（17 世纪，1660–1689）在前、浪漫主义（18 与 19 世纪）在后；第 4 段还说十四行诗衰落之后 “giving way to Restoration poetry”，可见复辟时期承接的是更早的时期，绝非紧接浪漫主义时期。",
            "为什么不是 NOT GIVEN：原文对两个时期都给出了明确时间（复辟 1660–1689；浪漫主义 18 与 19 世纪），先后关系清楚可判，只是与题干相反，所以是 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Modernist poets generally preferred traditional verse forms.",
          "translation": "现代主义诗人通常偏好传统的诗歌形式。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "In the 20th century, modernist poets like T.S. Eliot, Ezra Pound, and W.B. Yeats broke from traditional forms, experimenting with free verse, fragmentation, and complex symbolism."
          },
          "synonyms": [
            "题干的 “preferred traditional verse forms” 与原文的 “broke from traditional forms”（脱离了传统形式）方向完全相反",
            "原文的 “experimenting with free verse, fragmentation, and complex symbolism”（尝试自由诗、碎片化与复杂象征）正是取代传统形式的做法",
            "题干的 “Modernist poets” 在原文中原词复现：“modernist poets like T.S. Eliot, Ezra Pound, and W.B. Yeats”"
          ],
          "locatingTip": "定位：题干关键词 modernist 只出现在第 7 段（末段）首句，扫读全篇后直接锁定末段。确定答案技巧：题干说现代主义者“偏爱传统形式”，回原文核对他们的实际做法——原文的动词是 broke from traditional forms（摆脱了传统形式），并列出自由诗、碎片化与复杂象征三项新尝试，与“偏好传统”正好相反，故判 FALSE。注意 broke from 意为“脱离、背离”，不要误解为“从传统中汲取养分”。",
          "analysis": "第 7 段首句：“In the 20th century, modernist poets like T.S. Eliot, Ezra Pound, and W.B. Yeats broke from traditional forms, experimenting with free verse, fragmentation, and complex symbolism.”（20 世纪，T.S. 艾略特、埃兹拉·庞德、W.B. 叶芝等现代主义诗人摆脱了传统形式，尝试自由诗、碎片化和复杂的象征手法）。broke from traditional forms 与后半句列出的三种全新实验，都指向现代主义诗人对传统的背离；题干却写成 “generally preferred traditional verse forms”（通常偏好传统诗歌形式），把背离说成偏爱，与原文直接对立，故判 FALSE。判分点就是动词短语 break from（脱离）与题干 prefer（偏好）之间的语义反向。",
          "traps": [
            "为什么不是 TRUE：原文明确说现代主义诗人 broke from traditional forms（脱离传统形式），并尝试自由诗与复杂象征，与题干“偏好传统形式”相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文既点明现代主义诗人对传统的态度，又列举了他们的具体做法，信息完整且与题干冲突，因此是 FALSE 而非 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 单选题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "What is a defining feature of the sonnet form?",
          "translation": "十四行诗这一形式的决定性特征是什么？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Written in iambic pentameter, its rhyme scheme varies between the Petrarchan and the Shakespearean styles."
          },
          "synonyms": [
            "选项 B “Written in iambic pentameter” 与原文 “Written in iambic pentameter” 原词复现",
            "题干的 “a defining feature of the sonnet form” 对应原文的 “Written in iambic pentameter, its rhyme scheme varies …”，原文用分词短语把格律与韵式作为十四行诗最先交代的形式特征"
          ],
          "locatingTip": "定位：题干核心词是 sonnet，第 4 段以 “It would be impossible to discuss poetry history without mentioning the sonnet.” 开头，整段都在讲十四行诗（格律、韵式、代表人物、兴衰），定位到该段第 2 句。确定答案技巧：题目问“决定性特征”，原文第 2 句开门见山给出 “Written in iambic pentameter”，与选项 B 逐字一致，故选 B；随后再快速核对其它三个选项以确保没有更贴合原文的表述。",
          "analysis": "第 4 段第 2 句：“Written in iambic pentameter, its rhyme scheme varies between the Petrarchan and the Shakespearean styles.”（十四行诗以抑扬格五音步写成，其韵式在彼特拉克式与莎士比亚式之间变化）。句子用分词短语 Written in iambic pentameter 作状语，把格律作为十四行诗最先被提到的形式特征，正对应题干所说的 “a defining feature”，与选项 B 完全一致，故答案为 B。其余选项：A 的 dactylic hexameter 是史诗的格律（第 3 段 “written in dactylic hexameter”）；C 的 20 行原文从未提及（原文只出现 154 sonnet sequence，那是莎士比亚十四行诗序列的篇数，不是行数）；D 与原文冲突——十四行诗 13 世纪就已出现（第 1 段 “the sonnet emerged in the 13th century”），最先使其流行的是意大利诗人彼特拉克（第 4 段 “The Italian poet Petrarch popularized the form”），并非起源于英格兰。",
          "traps": [
            "A（Use of dactylic hexameter）错误：扬抑抑格六音步是史诗的特征，原文第 3 段说《伊利亚特》与《奥德赛》“written in dactylic hexameter”，与十四行诗无关。",
            "C（Always contains 20 lines）错误：原文从未提到十四行诗的行数，只出现过 154 sonnet sequence（莎士比亚十四行诗序列的篇数）与 14th century（彼特拉克的时代）等数字，属于无据编造。",
            "D（Originated in England）错误：原文说十四行诗 13 世纪出现，意大利诗人彼特拉克使其流行，英国只是后来由莎士比亚加以改造（“In England, William Shakespeare transformed the sonnet”），因此并非起源于英格兰。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "John Dryden's Mac Flecknoe is an example of what kind of work?",
          "translation": "约翰·德莱顿的《马克·弗莱克诺》是哪一类作品的例子？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "became famous for his mock-heroic works, such as Mac Flecknoe, a satirical attack on the poet Thomas Shadwell"
          },
          "synonyms": [
            "选项 C “Mock-heroic satire” 由原文的 “mock-heroic works” 与 “a satirical attack” 合成，mock-heroic 与 satirical 都是原文用词",
            "题干的 “John Dryden's” 对应原文的 “John Dryden, the era's leading poet”",
            "题干的 “Mac Flecknoe” 原词复现于原文 such as 引出的例子中"
          ],
          "locatingTip": "定位：作品名 Mac Flecknoe 只在第 5 段出现；John Dryden 在第 1 段虽被顺带提及，但只列其名，与该作品同现的只有第 5 段，据此一步定位到该段第 2 句。确定答案技巧：题干问作品类型，原句提供了两个类别线索——mock-heroic（戏仿英雄体）与 a satirical attack（讽刺攻击），合起来就是选项 C 的 mock-heroic satire。特别要排除同段出现的 epic poetry：原文说的是这些诗“借用史诗的宏阔语言”，并非它们本身就是史诗。",
          "analysis": "第 5 段第 2 句：“John Dryden, the era's leading poet, became famous for his mock-heroic works, such as Mac Flecknoe, a satirical attack on the poet Thomas Shadwell, and Absalom and Achitophel (1681).”（约翰·德莱顿是这一时期的代表诗人，以《马克·弗莱克诺》等戏仿英雄体作品闻名，其中《马克·弗莱克诺》是对诗人托马斯·沙德韦尔的讽刺攻击……）。原文对 Mac Flecknoe 的定性有两处：所属类别 mock-heroic works 与同位语 a satirical attack，两者合并正是选项 C “Mock-heroic satire”，故答案为 C。A 的错误在于原文下一句只说这些诗 “used the grand language of epic poetry”（借用史诗语言）而非史诗本身；B 的 sonnet sequence 是第 4 段对莎士比亚十四行诗序列的表述，且该段说十四行诗衰落之后才让位于复辟时期诗歌；D 的浪漫主义抒情诗属 18 与 19 世纪（第 6 段），与 17 世纪复辟时期的德莱顿无关。",
          "traps": [
            "A（Epic poem）错误：原文说德莱顿的这些作品 “used the grand language of epic poetry to critique contemporary politics”，即只是借用史诗的宏阔语言进行讽刺，并未说它们本身是史诗；史诗对应的是《吉尔伽美什》与荷马的两部作品。",
            "B（Sonnet sequence）错误：十四行诗序列是第 4 段讲莎士比亚时提到的（“his 154 sonnet sequence”），而且第 4 段明确说十四行诗衰落之后 “giving way to Restoration poetry”，德莱顿时期的作品不是十四行诗。",
            "D（Romantic lyric）错误：浪漫主义诗歌兴起于 18 与 19 世纪（第 6 段 “the rise of Romantic poetry”），时间上晚于 17 世纪的德莱顿，且原文用 mock-heroic 与 satirical 描述其作品，与“浪漫抒情”风格相反。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "According to the passage, what characterizes 20th-century modernist poetry?",
          "translation": "根据文章，20 世纪的现代主义诗歌有什么特点？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "modernist poets like T.S. Eliot, Ezra Pound, and W.B. Yeats broke from traditional forms, experimenting with free verse, fragmentation, and complex symbolism"
          },
          "synonyms": [
            "选项 C “Experimentation with free verse and symbolism” 同义替换为原文的 “experimenting with free verse, fragmentation, and complex symbolism”",
            "题干的 “20th-century” 对应原文的 “In the 20th century”",
            "题干的 “modernist poetry” 对应原文的 “modernist poets”"
          ],
          "locatingTip": "定位：题干同时给出 20th century 与 modernist 两个信号词，原文只在第 7 段（末段）首句同时出现，扫读时可直接跳到末段。确定答案技巧：题目问“以什么为特征”，原文用并列结构列出三项——free verse（自由诗）、fragmentation（碎片化）与 complex symbolism（复杂象征），选项 C 把其中两项（free verse 与 symbolism）浓缩为答案，故为正确项；其余选项或与原文相反，或出自别的时段。",
          "analysis": "第 7 段首句：“In the 20th century, modernist poets like T.S. Eliot, Ezra Pound, and W.B. Yeats broke from traditional forms, experimenting with free verse, fragmentation, and complex symbolism.”（20 世纪，T.S. 艾略特、埃兹拉·庞德、W.B. 叶芝等现代主义诗人脱离传统形式，尝试自由诗、碎片化与复杂的象征手法）。experimenting with 后的三项正是现代主义诗歌的特征，其中 free verse 与 symbolism 与选项 C 对应，故答案为 C。A 与原文相反——现代主义诗人 broke from traditional forms（脱离传统形式），并非严格遵守韵式；B 的理性与社会秩序属于新古典主义与复辟时期（第 6 段 “the reason and order of the neoclassical age”）；D 的古代英雄主题属于史诗（第 2、3 段的《吉尔伽美什》与荷马的两部史诗）。",
          "traps": [
            "A（Strict adherence to rhyme schemes）错误：原文说现代主义诗人 “broke from traditional forms”，并尝试自由诗（free verse），与“严格遵守韵律”正好相反。",
            "B（Emphasis on reason and social order）错误：理性与秩序是浪漫主义所反对的新古典主义时代的特征（第 6 段 “the reason and order of the neoclassical age”），不属于 20 世纪现代主义诗风。",
            "D（Focus on ancient heroic themes）错误：古代英雄主题对应史诗，例如《吉尔伽美什》（第 2 段）与荷马的《伊利亚特》《奥德赛》（第 3 段），而现代主义诗人恰恰以背离传统为特征。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
