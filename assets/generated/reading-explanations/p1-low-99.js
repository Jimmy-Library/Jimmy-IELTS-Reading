(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-99", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-99",
  "meta": {
    "examId": "p1-low-99",
    "title": "The history of the bar code 条形码的历史",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–8 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 8
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "1st system: used ultraviolet light and a special type of 1 ________",
          "translation": "第一套系统：利用紫外光，以及一种特殊类型的 ________。",
          "answer": "ink",
          "wordClass": "名词（不可数，指印刷图案所用的特殊油墨；ONE WORD ONLY，填不可数形式即可）",
          "locating": {
            "paragraph": "2",
            "quote": "Their first idea was to use patterns printed with an ink that would glow under ultraviolet light, and they built a device to test the concept."
          },
          "synonyms": [
            "“a special type of ink” 同义替换为原文的 “an ink that would glow under ultraviolet light”，原文用定语从句说明这种墨“特殊”在哪里（在紫外光下会发光）",
            "“used ultraviolet light” 对应原文的 “glow under ultraviolet light”，都是说这套系统与紫外光有关",
            "笔记栏目 “1st system” 对应原文的 “Their first idea”，即两人最先想出的那套方案",
            "“patterns printed” 与题干的 “used” 相呼应：他们是用这种墨来印刷图案（patterns）"
          ],
          "locatingTip": "定位：笔记的时间栏是 1948–1952，正好对应第 2 段开头 “The problem fascinated the two friends”，而 “1st system” 又对应同段的 “Their first idea”。扫读时只要盯住 ultraviolet light 这个独特的物理名词，就能一步锁定第 2 段第 2 句。确定答案技巧：题干的结构是 “a special type of ___”，空格需要填出一个被 special（特殊的）修饰的名词。原文对应句的骨架是 “use patterns printed with an ink that would glow under ultraviolet light”，中心名词是 ink，后面的 that would glow under ultraviolet light 正是“这种墨为什么特殊”的解释，属于典型的“定语从句解释形容词”结构，因此空格填 ink。切忌填 patterns（那是被印刷出来的东西）或 light（那是发光条件）。",
          "analysis": "第 2 段开头先交代两人开始想办法：“The problem fascinated the two friends, and they set about thinking of a solution.”，紧接第 2 句便是本题定位句：“Their first idea was to use patterns printed with an ink that would glow under ultraviolet light, and they built a device to test the concept.”（他们最先想到的办法是用一种在紫外光下会发光的墨来印刷图案，并造了一台装置来验证这一构想）。对照笔记：“1st system”（第一套系统）等于原文的 “Their first idea”（最初的想法）；“used ultraviolet light”（使用紫外光）等于原文的 “glow under ultraviolet light”（在紫外光下发光）；“a special type of ___” 则对应原文中心词 an ink。也就是说，这套系统之所以特别，全在于那种墨遇紫外光会发光——即墨水本身是“特殊的类型”。从词性看，an ink 为不可数名词，空格前已有 a special type of 提供限定成分，故只填单词原形 ink，不加冠词、不加复数。答题时还要注意下一句给出的这条思路的两个问题 “the printing costs were high and the patterns faded over time”（印刷成本高、图案会褪色），正好对应笔记里的 “problems: expensive and not permanent”，可用来反向确认本空的答案句就是第 2 段讲第一套系统的那一句。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "2nd system: based on technology used in Morse code and also for the 2 ________ of films",
          "translation": "第二套系统：基于摩尔斯电码所用的技术，以及用于电影 ________ 的方法。",
          "answer": "soundtracks",
          "wordClass": "名词（复数，指电影声带/音轨；原文 soundtracks 为复数，须保持复数形式）",
          "locating": {
            "paragraph": "2",
            "quote": "After several months of work they came up with the linear bar code, using elements from two established technologies: Morse code, in which letters and numbers are coded into a system of dots and dashes, and the method used to record soundtracks in movies."
          },
          "synonyms": [
            "“the 2 ___ of films” 同义替换为原文的 “record soundtracks in movies”，其中 films 同义替换为 movies",
            "“for the soundtracks of films” 对应原文的 “the method used to record soundtracks in movies”，题干把“录音的方法”压缩成“用于电影声轨的（技术）”",
            "“based on technology used in Morse code” 对应原文的 “using elements from two established technologies: Morse code …”，Morse code 为原词复现"
          ],
          "locatingTip": "定位：笔记第 2 条写 “2nd system”，对应原文的 “came up with the linear bar code”，而同句里 Morse code 与 movies 两个特征词极具辨识度，扫读时看到 Morse code 就直接停在第 2 段中部。确定答案技巧：原文说第二套系统借用了两项成熟技术，即 “Morse code … and the method used to record soundtracks in movies”；题干把第二项技术改写成 “the ___ of films”，把 in movies 换成 of films，把 record soundtracks 里的宾语 soundtracks 挪到空格位置。所以空格要填的是被录制（record）的对象，即 soundtracks。注意本题答案是复数形式，原文就是 soundtracks，不要写成单数 soundtrack，也不要填 movies/films（那是地点状语，题干已经用 of films 给出）。",
          "analysis": "第 2 段第 5 句是本题定位句：“After several months of work they came up with the linear bar code, using elements from two established technologies: Morse code, in which letters and numbers are coded into a system of dots and dashes, and the method used to record soundtracks in movies.”（经过数月研究，他们做出了线形条形码，借用两项成熟技术的元素：一是把字母和数字编码成点和划的摩尔斯电码，二是电影中录制声带所用的方法）。笔记第 2 条 “2nd system”（第二套系统）对应 “the linear bar code”（线形条码），题干前半 “based on technology used in Morse code” 与原文第一项 “Morse code” 完全一致，题干后半 “also for the ___ of films” 对应原文第二项 “the method used to record soundtracks in movies”。改写要点有两处：一是 movies 换成了同义的 films，二是把 “record soundtracks” 这一动宾结构改成名词短语 “the … of films”，空格承担动宾结构里的宾语，故答案为 soundtracks。词性上是可数名词，此处指电影声音的多条音轨、并无单数含义，必须写复数 soundtracks。另外注意本段末句（1952 年专利句之后）才给出第二套系统的两个缺点 “the cost … and … their scanning equipment was rather unreliable”，与笔记中下一空 “problems: 3 ___ and expensive” 正好对应，说明本条与第 3 空同在第 2 段的后半部分，做题时可一并读完整段再落笔。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "2nd system — problems: 3 ________ and expensive",
          "translation": "第二套系统的问题：________ 且昂贵。",
          "answer": "unreliable",
          "wordClass": "形容词（与并列的 expensive 词性一致，说明扫描设备存在的问题）",
          "locating": {
            "paragraph": "2",
            "quote": "But the cost, together with the fact that their scanning equipment was rather unreliable, made the idea a non-starter at that time."
          },
          "synonyms": [
            "“expensive” 同义替换为原文的 “the cost”，即“成本”改写为“昂贵”",
            "笔记的 “problems: unreliable and expensive” 对应原文的 “the cost, together with the fact that their scanning equipment was rather unreliable”，两项并列缺点一一对应",
            "原文的 rather 是程度副词，只加强语气，不改变 unreliable 这个词本身"
          ],
          "locatingTip": "定位：笔记第 3 空紧跟在 “2nd system” 之后，仍在本段，题干的关键词 expensive 与原文的 the cost 是同义替换，而句子结构 “problems: ___ and expensive” 提示原文一定有一个并列两项缺点的句子。在第 2 段末尾找到 “But the cost, together with the fact that their scanning equipment was rather unreliable, made the idea a non-starter at that time.” 即可收网。确定答案技巧：该句用 together with 把两项缺点并列出来，一是成本（the cost，对应 expensive），二是扫描设备不可靠（unreliable），空格在 and 之前、与 expensive 并列，因此填形容词 unreliable。不要误填 non-starter（那是这一想法最终结果的定语，且是名词），也不要写成 reliability（题干要的是“问题”本身的形容词形式）。",
          "analysis": "第 2 段末句为本题定位句：“But the cost, together with the fact that their scanning equipment was rather unreliable, made the idea a non-starter at that time.”（但成本问题，加上他们的扫描设备相当不可靠，使这一想法在当年无法落地）。句子用 together with 引出两项并列的缺点：首先是 the cost（成本），其次是 their scanning equipment was rather unreliable（扫描设备相当不可靠）。笔记把这个结果写成 “problems: 3 ___ and expensive”，与原文严格对应：expensive 对应 the cost（成本高即昂贵），空格则对应 unreliable，且空格与 expensive 并列作 problems 的内容，词性应为形容词，故填 unreliable。答题要点有两条：一是不要把 unreliability 之类的名词形式写进去，题干已用 and expensive 规定了并列项的词性；二是不要被 rather 干扰，rather unreliable 只是“相当不可靠”，核心形容词仍是 unreliable，而 ONE WORD ONLY 的限制也排除了连同修饰词一起填写的可能。此外，原文的 non-starter（行不通的事）是对整套方案的评价，与题干所问的“问题”不属于同一成分，不能填入。",
          "traps": []
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "1970s — Availability of cheaper 4 ________ meant scanning technology spread more widely",
          "translation": "20 世纪 70 年代：更便宜的 ________ 出现，使扫描技术得到更广泛的应用。",
          "answer": "lasers",
          "wordClass": "名词（复数，指激光器；原文 lasers 为复数，受 cheaper 修饰，须保持复数）",
          "locating": {
            "paragraph": "3",
            "quote": "Scanning systems made little progress until the 1970s, when lasers became affordable."
          },
          "synonyms": [
            "“Availability of cheaper lasers” 同义替换为原文的 “when lasers became affordable”，affordable（可负担的）对应 cheaper / availability",
            "“scanning technology spread more widely” 对应原文 “Scanning systems made little progress until the 1970s” 之后情况改变这一层含义，即此前几乎停滞、此后得以推广",
            "笔记时间栏 “1970s” 与原文的 “until the 1970s” 完全对应"
          ],
          "locatingTip": "定位：笔记的时间栏 1970s 是极佳定位词，原文第 3 段首句 “Scanning systems made little progress until the 1970s” 直接给出这一时间，扫读时看到 1970s 立刻停下。确定答案技巧：题干说“更便宜的 ___ 出现（Availability of cheaper ___）”，对应原文 “when lasers became affordable”，其中 became affordable 即“变得便宜/买得起”，主语 lasers 就是那个变便宜的东西，故填 lasers。注意不要填 scanning（那属于后半句 scanning systems），也不要填 equipment（第 5 段出现，属于另一道题的段落），并且要保留原文的复数形式 lasers。",
          "analysis": "第 3 段开篇即本题定位句：“Scanning systems made little progress until the 1970s, when lasers became affordable.”（扫描系统在 1970 年代之前几乎没有进展，直到激光器变得价格可负担）。题干把这句话的时间与因果重新包装：“Availability of cheaper lasers”（更便宜的激光器面世）概括了 when lasers became affordable；“meant scanning technology spread more widely”（扫描技术随之推广）则概括了 made little progress until … 所暗示的转折，即 1970 年代之后各国商店、图书馆、工厂陆续开始使用各类扫描系统（紧随其后的 “Following this, various systems came into use around the world in stores, libraries, factories” 正是“推广”的展开）。因此空格处要填的是“变便宜的东西”，即 lasers。两个易错点：一是不能填 light，原文是“激光器（设备）便宜了”，而不是“激光（光）便宜了”；二是不能写 laser 单数，原文为复数 lasers，且“一大批激光器价格下降”才合理。此外还要注意本题关键词 cheaper 与原文 affordable 的替换关系，雅思常用 affordable / inexpensive / low-cost 与 cheap 互换，认出同义关系即可锁定答案。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Problem: lack of 5 ________ in code systems",
          "translation": "问题：编码系统缺乏 ________。",
          "answer": "standardization",
          "wordClass": "名词（不可数，指标准化；空格前有介词 of，需填名词形式）",
          "locating": {
            "paragraph": "3",
            "quote": "Following this, various systems came into use around the world in stores, libraries, factories, and the like, each with its own proprietary code, but there was no standardization."
          },
          "synonyms": [
            "“lack of standardization” 同义替换为原文的 “there was no standardization”，no 对应 lack of",
            "“in code systems” 对应原文的 “each with its own proprietary code”，即各家自有一套专有编码，正是缺少标准化的表现",
            "原文的 therefore 之后引出成立委员会“to standardize what became known formally as the Universal Product Code”，从 standardize 一词可反向印证前面的问题就是缺乏 standardization"
          ],
          "locatingTip": "定位：笔记中 1970s 之后的第二条是 “Problem: lack of ___ in code systems”，与原文第 3 段第 2 句 “each with its own proprietary code, but there was no standardization” 同处一段，紧跟第 4 空的定位句。确定答案技巧：空格前是 lack of，说明需要填一个名词，原文用 “there was no standardization” 表达同一含义，no 与 lack of 对应，故填名词 standardization。填名词时要注意拼写与词形：原文用了 -ization 结尾的名词，不要写成动词 standardize 或形容词 standard；同时不要填 code（题干已给 code systems）或 proprietary（那是修饰 code 的形容词）。",
          "analysis": "第 3 段第 2 句是本题定位句：“Following this, various systems came into use around the world in stores, libraries, factories, and the like, each with its own proprietary code, but there was no standardization.”（此后，世界各地的商店、图书馆、工厂等场所开始使用各种系统，每套系统都有自己的专有编码，但当时并无标准化可言）。题干 “Problem: lack of 5 ___ in code systems” 是对该句后半部分的同义改写：说“缺乏（lack of）某物”，原文用的是 “there was no standardization”（不存在标准化），no 与 lack of 完全对应；题干说“在编码系统中（in code systems）”，对应原文 “each with its own proprietary code”（各有各的专有编码）。所以空格要填 standardization。这里还体现雅思常见的“名词化”替换：原文用名词 standardization 作主语，题干则用 lack of 加名词的短语结构来问同一个信息点。另外要注意紧接下一句用 therefore 引出结果：“A consortium … set up a committee to look into bar codes, and to standardize what became known formally as the Universal Product Code (UPC).”，委员会的任务正是“去标准化（to standardize）”，从动词 standardize 也可以反向确认第 5 空问的就是标准化这件事。填写时按原文保持名词形式与拼写 standardization（英式拼写即 -isation 亦可，但以原文为准）。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Advantages of bar code system: the 6 ________ of checkouts increased",
          "translation": "条形码系统的优势：结账的 ________ 提高了。",
          "answer": "speed",
          "wordClass": "名词（不可数，指结账速度；空格位于定冠词 the 之后、介词 of 之前，是主语 the 6 ________ of checkouts 的中心语，填不可数形式 speed，不加复数）",
          "locating": {
            "paragraph": "7",
            "quote": "These included checking out items at twice the speed compared to using traditional equipment, which meant shorter lines."
          },
          "synonyms": [
            "“the speed of checkouts increased” 同义替换为原文的 “checking out items at twice the speed”，twice（两倍）是 speed 提高的具体体现",
            "“checkouts” 对应原文的 “checking out items”，动词短语名词化后指结账这一环节",
            "笔记的 “Advantages of bar code system” 对应原文的 “the benefits eventually became apparent” 及其后的并列好处"
          ],
          "locatingTip": "定位：本空位于笔记中 1970s 栏目下的 “Advantages of bar code system”，关键词 checking out 与 speed 出现在第 7 段（checkout 一词虽也在第 1、3 段出现，但只有第 7 段讲结账提速），回到原文找 checking out 即可锁定 “These included checking out items at twice the speed” 一句。确定答案技巧：题干结构是 “the ___ of checkouts increased”，需要一个能被 increased 修饰、又能与 of checkouts 搭配的名词；原文用 “at twice the speed” 表示结账速度翻倍，把“提速”这一含义通过 twice the speed 表达出来，故答案为 speed。注意不要填 twice（那是倍数，不是被提高的属性），也不要填 items 或 lines（都不符合 “the ___ of checkouts” 的语义搭配）。",
          "analysis": "本题定位句在第 7 段：“These included checking out items at twice the speed compared to using traditional equipment, which meant shorter lines.”（这些好处包括结账速度比使用传统设备快一倍，也就意味着排队更短）。该段先铺陈条形码初期不被信任（“The advantages of the system were not clear immediately, as wholesalers, retailers and customers remained suspicious.”），随后用 However 转折：“the benefits eventually became apparent”，并用 Haberman 的话 “It turns out there were massive savings in labor and other areas” 引出具体好处。题干所列的三项优势与段落内容一一对应：“supermarkets needed to spend less on labour” 对应 “massive savings in labor”；“doing inventories was much cheaper” 对应段末 “the bar code could hugely reduce the amount of time spent checking inventory”；而本题的 “the 6 ___ of checkouts increased” 正对应 “checking out items at twice the speed”。原文用倍数 twice 来表达提升，题干则抽象成 “the speed … increased”，两者语义一致，故填 speed。词性上是不可数名词，结构 “the speed of checkouts” 中 speed 作中心名词，of 短语作定语，填写时保持原形 speed，不加复数、不加冠词。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Present day — users of bar codes include: participants in 7 ________",
          "translation": "如今——条形码的使用者包括：参加 ________ 的人。",
          "answer": "marathons",
          "wordClass": "名词（复数，指马拉松赛事；是笔记条目 “participants in 7 ________” 中的介词宾语，须保留复数形式）",
          "locating": {
            "paragraph": "8",
            "quote": "Runners in major marathons set off with bar codes on their vests, and librarians rely on them."
          },
          "synonyms": [
            "“participants in marathons” 同义替换为原文的 “Runners in major marathons”，participants 对应 runners",
            "“Users of bar codes include” 对应原文 “Runners … set off with bar codes on their vests”，即使用者带着条形码出发",
            "笔记的 “Present day” 对应原文段首的 “Now, every day …”"
          ],
          "locatingTip": "定位：笔记最后一块是 “Present day — users of bar codes include …”，原文第 8 段开头的 “Now, every day more than 5 billion bar codes are scanned …” 正是“如今”的时间标志，接下去用四个并列例子列举使用者：航空公司、医院员工、马拉松跑者、研究者。确定答案技巧：题干 “participants in ___” 需要一个表示活动的名词，原文对应句是 “Runners in major marathons set off with bar codes on their vests”，跑者参加的活动就是 marathons，故填 marathons。注意 participants 是 runners 的同义替换，别误填 vests（那是穿戴位置）或 runners（题干已经用 participants 表达了人的身份）；由于是多项赛事，保留复数 marathons。",
          "analysis": "第 8 段列举条形码在当代的广泛使用：“Now, every day more than 5 billion bar codes are scanned in retail outlets throughout the world. Passengers' luggage is tagged with bar codes by airlines. Staff attach them to babies to ensure the right babies go home from hospitals with the right mothers. Runners in major marathons set off with bar codes on their vests, and librarians rely on them. Tiny bar codes have even been mounted on bees by researchers to track their movements.”。题干所列的使用者与原文一一对应：“retail companies” 对应 “retail outlets”；“airlines” 对应 “airlines”；“staff in hospitals” 对应 “Staff attach them to babies … from hospitals”；本题 “participants in 7 ___” 对应 “Runners in major marathons”，其中 runners（跑者）被同义替换为 participants（参与者），空格所需的活动名称即 marathons。最后一项 “scientists studying 8 ___” 则对应段末的 “researchers … to track their movements”。填写注意两点：一是单词拼写为 marathons，注意 -th- 与 -ons；二是必须写复数，原文说多项大型马拉松赛事，且题干 “participants in marathons” 指参加各类马拉松的人。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Present day — users of bar codes include: scientists studying 8 ________",
          "translation": "如今——条形码的使用者包括：研究 ________ 的科学家。",
          "answer": "bees",
          "wordClass": "名词（复数，指蜜蜂；是笔记条目 “scientists studying 8 ________” 中动名词 studying 的宾语，保留原文复数形式）",
          "locating": {
            "paragraph": "8",
            "quote": "Tiny bar codes have even been mounted on bees by researchers to track their movements."
          },
          "synonyms": [
            "“scientists studying bees” 同义替换为原文的 “researchers to track their movements”，研究者的研究对象即被贴上条形码的 bees",
            "“scientists” 同义替换为原文的 “researchers”",
            "“studying” 与原文的 “to track their movements”（追踪其活动）方向一致，都是对研究对象进行观测"
          ],
          "locatingTip": "定位：本空紧接第 7 空，同在第 8 段末尾，关键词 scientists 对应原文的 researchers，一次扫读就能找到末句。确定答案技巧：题干说“研究某种对象的科学家”，原文说 “Tiny bar codes have even been mounted on bees by researchers to track their movements”，被研究者贴上条形码以追踪其活动轨迹的对象就是 bees，故填 bees。题干用 studying（研究）概括原文的 to track their movements（追踪活动），是典型的“目的改写成研究对象”的替换。注意不要填 movements（题干问的是研究对象，而非研究内容），也不要写成单数 bee，原文为复数 bees。",
          "analysis": "第 8 段末句是本题定位句：“Tiny bar codes have even been mounted on bees by researchers to track their movements.”（研究人员甚至把极小的条形码装到蜜蜂身上以追踪它们的活动）。题干 “scientists studying 8 ___” 是对该句的重新包装：原文的主语是 researchers（研究者），正对应题干的 scientists；原文的被动结构 “Tiny bar codes have even been mounted on bees by researchers” 说明条形码被装到蜜蜂身上；原文的目的状语 “to track their movements” 则被题干概括为 studying（研究）。换言之，研究者要研究、追踪的对象就是承载条形码的 bees，所以空格填 bees。词性上是可数名词复数，题干中 studying 后接宾语，且原文提到的是数量众多、需要逐一贴码的蜜蜂群体，故须用复数形式。做题时还要留意本段“列举使用者”的篇章结构：作者用 airlines、hospital staff、runners、researchers 四个例子说明条形码的普及，笔记里的五项内容正是这四类例子加上首句的 retail outlets，逐项对应即可，不必回读全文。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Bernard Silver was invited to develop a system for capturing product information by the president of a food chain.",
          "translation": "伯纳德·西尔弗（Bernard Silver）曾受一家食品连锁企业总裁之邀，开发一套用于采集产品信息的系统。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The president of a food chain was pleading with a professor to undertake research on a method of capturing product information automatically at store checkouts. The professor turned down the request, but Bernard Silver mentioned the conversation to his friend Norman Woodland, a twenty-seven-year-old teacher at Drexel."
          },
          "synonyms": [
            "“the president of a food chain”（食品连锁企业总裁）在原文中原词复现，是本题最强的定位依据",
            "“was invited to develop a system for capturing product information” 对应原文的 “was pleading with a professor to undertake research on a method of capturing product information automatically”，但原文被请求（pleading with）的人是 a professor（一位教授），不是 Bernard Silver",
            "“was invited” 对应原文 “was pleading with … to undertake research”，原文说的是“恳求某人去做研究”，与题干的“受邀请去做开发”方向相同但对象不同",
            "原文中 Silver 的动词是 “overheard a conversation”（无意中听到谈话）和 “mentioned the conversation to his friend”（把谈话告诉朋友），与“被邀请”完全不是一回事"
          ],
          "locatingTip": "定位：题干中的专有名词 Bernard Silver 与职位词 the president of a food chain 都出现在第 1 段，且两个词分别位于第 1 段的首句和第 2 句，扫读时盯住第 1 段即可全部覆盖。确定答案技巧：本题的陷阱在于“谁被邀请”。原文用 pleading with a professor to undertake research 明确指出被请求的对象是一位教授（a professor），而那位教授还拒绝了请求（“The professor turned down the request”）；Bernard Silver 只是偶然听到这场谈话（overheard a conversation），然后把谈话内容告诉了好友 Woodland。题干把“被邀请/被请求”的对象换成了 Silver，把宾语说成 Silver 受邀开发，与原文的施受关系正好错位，属于事实矛盾，判 FALSE。遇到含有人名与被动语态的判断题，务必核对“动作由谁发出、又指向谁”。",
          "analysis": "第 1 段三句话构成完整的事件经过。首句：“The first step toward today's bar codes came in 1948, when Bernard Silver, a graduate student in the USA, overheard a conversation in the halls of Philadelphia's Drexel Institute of Technology.”（走向今天条形码的第一步始于 1948 年，当时美国研究生 Bernard Silver 在费城德雷塞尔理工学院的走廊里偶然听到一段对话）。第二句：“The president of a food chain was pleading with a professor to undertake research on a method of capturing product information automatically at store checkouts.”（一位食品连锁企业的总裁正恳求一位教授开展研究，以便在商店收银处自动获取商品信息）。第三句：“The professor turned down the request, but Bernard Silver mentioned the conversation to his friend Norman Woodland, a twenty-seven-year-old teacher at Drexel.”（那位教授拒绝了这一请求，而 Bernard Silver 把这番谈话告诉了他的朋友 Norman Woodland，一位 27 岁的德雷塞尔教师）。题干说 “Bernard Silver was invited to develop a system for capturing product information by the president of a food chain”，把请求的接收者设成 Silver。但原文的请求对象是 a professor，而且被当场拒绝；Silver 的身份只是 overheard（偷听到）谈话的人，其后又充当了信息传递者。人物角色被替换，构成与原文相反的事实，因此判 FALSE。做题提醒：本题的干扰点在于三个人物（总统、教授、Silver）同时出现在一个句群里，只要用 “was pleading with + 人 + to do” 这一结构确认动作的真正受事者，就能迅速识破偷换。",
          "traps": [
            "为什么不是 TRUE：原文写明总裁是向一位教授（a professor）提出请求并遭拒绝，Bernard Silver 只是无意中听到该谈话的人（overheard a conversation），并未收到任何邀请或委托；题干把请求对象换成 Silver，与原文事实相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“谁被请求做研究”“谁听到了谈话”都有明确交代，信息完整；题干与这些明确信息直接冲突（张冠李戴），属于矛盾而非缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "A committee set up in the 1970s said bar codes should be easy to use and not too expensive.",
          "translation": "20 世纪 70 年代成立的一个委员会表示，条形码应当便于使用，且不能太贵。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "At the heart of the committee's guidelines were a few basic principles. To make life easier for the cashier, bar codes would have to be readable from almost any angle and at a range of distances. Because they would be reproduced by the million, the labels would have to be cheap and easy to print."
          },
          "synonyms": [
            "“A committee set up in the 1970s” 对应原文的 “A consortium of grocery manufacturers and retailers therefore set up a committee”，其成立背景是 “Scanning systems made little progress until the 1970s”，即 1970 年代",
            "“easy to use” 同义替换为原文的 “To make life easier for the cashier … readable from almost any angle and at a range of distances”，能任意角度、各种距离读取即“便于使用”",
            "“not too expensive” 同义替换为原文的 “the labels would have to be cheap and easy to print”，cheap 与 not too expensive 对应",
            "原文的 “would have to”（必须）与题干的 “should”（应当）都是表达要求的情态动词，语气一致"
          ],
          "locatingTip": "定位：题干同时给出两个关键信息——时间 the 1970s 与主体 a committee，第 3 段先以 1970s 开篇，紧接着 “therefore set up a committee”，一段之内即可锁定，随后读到 “At the heart of the committee's guidelines were a few basic principles” 就进入考点句群。确定答案技巧：题干要求核对“委员会对条形码提出的两项要求（便于使用、不太贵）”。原文列举委员会原则时分别写道：为让收银员更省事，条码要能从几乎任意角度、在多种距离下被读取（对应 easy to use）；因为要被印制成千上万份，标签必须便宜且易印（对应 not too expensive）。两项要求与题干完全吻合，方向一致、没有增减，故判 TRUE。判断时要注意题干把两条原则压缩成 “easy to use and not too expensive”，语义与原文等同。",
          "analysis": "第 3 段先讲扫描系统在 1970 年代因激光器变便宜而开始推广，但“各家用各自的专有编码，没有标准”（each with its own proprietary code, but there was no standardization），于是 “A consortium of grocery manufacturers and retailers therefore set up a committee to look into bar codes, and to standardize what became known formally as the Universal Product Code (UPC).”（一批食品制造商与零售商因此成立委员会研究条形码，并标准化后来正式称为通用产品代码的编码）。注意这里的因果链：因为 1970 年代技术条件具备而编码却各自为政，委员会才得以成立，题干所说的 “set up in the 1970s” 与原文的时间背景一致。随后原文写 “At the heart of the committee's guidelines were a few basic principles.”（委员会的准则以几条基本原则为核心），接着逐条展开：一是 “To make life easier for the cashier, bar codes would have to be readable from almost any angle and at a range of distances.”（为了让收银员的工作更轻松，条形码必须能从几乎任何角度、在一定的距离范围内被读取）；二是 “Because they would be reproduced by the million, the labels would have to be cheap and easy to print.”（由于要被大量复制，标签必须廉价且便于印刷）；三是结算系统必须两年半内回本。题干的两项要求 “easy to use”（便于使用）和 “not too expensive”（不太贵）恰好对应第一条（便于任何人从任何角度读取，即使用方便）与第二条（cheap，即不贵）。情态动词方面，原文用 would have to（必须）表示委员会提出的硬性要求，题干用 should（应当）转述，语气相当，并未改变信息性质，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确写出委员会的两条原则——条码要能从几乎任意角度和多种距离读取（易用），标签必须 cheap（便宜）；这与题干“便于使用、不能太贵”方向一致，不存在任何矛盾，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干两项要求在原文中都有直接对应的句子，且出自委员会准则（committee's guidelines）这一明确来源，信息完整，并非未曾提及。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Alan Haberman disagreed with government policies on business matters.",
          "translation": "艾伦·哈伯曼（Alan Haberman）在商业事务上不认同政府的政策。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Alan Haberman, who headed the subcommittee as president of First National Stores, described the bar code as a kind of world language that worked for everyone. He recalls proudly, ‘We showed that it could be done on a massive scale, that cooperation... was possible for the common good, and that business didn't need the government to shove them in the right direction.'"
          },
          "synonyms": [
            "“Alan Haberman” 在原文中原词复现，且身份交代为 “who headed the subcommittee as president of First National Stores”，是极佳的定位词",
            "原文只有 “business didn't need the government to shove them in the right direction”（商业不需要政府来推动），表达的是“不需要政府推动”，并未表达“不认同政府的商业政策”",
            "题干的 “disagreed with government policies”（不认同政府政策）在原文找不到任何对应词，原文既没有提到任何政府政策，也没有评价这些政策"
          ],
          "locatingTip": "定位：人名 Alan Haberman 是本题最强的定位词，其专名在第 4 段出现两处（第 7 段另有一处 “Haberman says”，与本题考点无关），扫读时只要找到 Haberman 并停在第 4 段末两句即可。确定答案技巧：题干的关键动词是 disagreed with（不认同）。回原文核对会发现，Haberman 的确谈到政府，原文是 “We showed that it could be done on a massive scale, that cooperation... was possible for the common good, and that business didn't need the government to shove them in the right direction.”，即在夸耀商业界靠自发合作就能办成大事，不需要政府来推。但“不需要政府推动”与“不认同政府的商业政策”是两个命题：前者是说他相信行业自律足够，后者是关于他对外在政策的态度，原文对此完全没有交代（既没说他认为政策有误，也没说他支持政策）。信息缺失即 NOT GIVEN，切忌用常识把“不希望政府插手”脑补成“反对政府政策”。",
          "analysis": "第 4 段主要讲委员会最终选定 UPC 的过程，末两句才涉及 Haberman：“Alan Haberman, who headed the subcommittee as president of First National Stores, described the bar code as a kind of world language that worked for everyone. He recalls proudly, ‘We showed that it could be done on a massive scale, that cooperation... was possible for the common good, and that business didn't need the government to shove them in the right direction.'”（担任小组委员会主席、时任 First National Stores 总裁的 Alan Haberman 把条形码形容为一种人人可用的世界语言。他自豪地回忆道：“我们证明了这件事可以大规模实现，合作……可以为了共同利益而达成，而且商业并不需要政府把它推往正确的方向。”）。这段话的语义重心是：商业界能够通过合作自行完成标准化这样的大事，政府无需介入。而题干说的是 Haberman “在商业事务上不认同政府政策”。原文中根本没有出现任何“政府政策（government policies）”的具体内容，更没有任何人物对这些政策表示赞同或反对；Haberman 只是就“是否需要政府推动”发表了一句感慨。按雅思判断题的规则，原文未提供相关信息的就是 NOT GIVEN——这里的难点是原文出现了 government 一词，容易让人误以为“提到了就是有信息”，但提到政府的“推动作用”与评价政府的“政策”是两回事。答题时务必把题干的完整命题（disagreed with government policies on business matters）逐词与原文比对，而不是因为看到 government 就选 TRUE。",
          "traps": [
            "为什么不是 TRUE：原文只表达“商业不需要政府把它推向正确方向”，这句话指向的是是否需要政府牵头推动，并未涉及任何具体的政府政策，更没有表达“不认同/反对”的态度。把“不需要政府推动”升级为“不认同政府政策”，属于超出原文的推断，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文有与题干相反的信息，即原文得说他认同、支持政府的商业政策，或对政府的做法表示满意；而原文对他的政策态度毫无交代，仅仅是没说，所以也不能选 FALSE，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Many grocery outlets were unable to afford the necessary scanning equipment.",
          "translation": "许多食品零售店无力负担所需的扫描设备。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The investment involved in the bar-code revolution was huge. Each of the tens of thousands of grocery outlets in the US had to spend at least $200,000 on new scanning equipment."
          },
          "synonyms": [
            "“Many grocery outlets” 同义替换为原文的 “the tens of thousands of grocery outlets in the US”，tens of thousands（数以万计）对应 many",
            "“the necessary scanning equipment” 同义替换为原文的 “new scanning equipment”，necessary（必需的）与 new（新的）功能相近，都指那批待装的设备",
            "“were unable to afford” 在原文找不到任何对应表述：原文只说各店“必须花（had to spend）至少 20 万美元”，并没有交代它们能否负担得起"
          ],
          "locatingTip": "定位：题干的名词短语 grocery outlets 与 scanning equipment 都出现在第 5 段第 2 句，第 5 段开篇讲投资规模，全段围绕成本展开，扫读时看到 grocery outlets 即可停下。确定答案技巧：题干的落点是 “were unable to afford”（负担不起）。原文只说 “Each of the tens of thousands of grocery outlets in the US had to spend at least $200,000 on new scanning equipment.”，即每家店“必须支出”至少 20 万美元，讲的是支出义务与金额，完全没有提及它们是否负担得起、有没有因此放弃。因此关于“负担能力／是否买不起”这一点属于信息缺失，判 NOT GIVEN。这里最典型的陷阱是把 had to spend（必须花）等同于 could not afford（付不起）——义务与能力是两个概念，不能画等号。",
          "analysis": "第 5 段整段讲条形码革命带来的巨额投入：“The investment involved in the bar-code revolution was huge. Each of the tens of thousands of grocery outlets in the US had to spend at least $200,000 on new scanning equipment. Chains had to install new data processing centers and retrain their employees. Printers had to develop the new types of ink, plates, and other technology to reproduce the code with the exact tolerances it requires, and manufacturers had to spend millions of dollars a year on the labels.”（条形码革命涉及的投入极为庞大。美国数以万计的食品零售店每家都必须至少花 20 万美元购置新扫描设备；连锁企业必须建立新的数据处理中心并重新培训员工；印刷商必须开发新型油墨、印版等工艺，以便按所需的精确公差复制该编码；制造商每年还要在标签上花掉数百万美元）。四个分句都用 had to（必须）说明各方需要付出的代价，题干的问题却落在“许多食品零售店无力负担（were unable to afford）”。原文只提供“必须花多少钱”，没有提供“是否花得起、后来是否有人放弃”的任何信息。雅思判断题中，把原文的义务型、金额型信息强行转成能力型判断是很常见的干扰方式：had to spend 说的是“不得不花”，而 unable to afford 说的是“花不起”，两者之间缺少原文的支撑，故判 NOT GIVEN。注意也不要因为同段其他行业也投入巨大就推断零售商买不起，推断不构成原文信息。",
          "traps": [
            "为什么不是 TRUE：原文只说明每家食品零售店“必须（had to）花至少 20 万美元”购买新扫描设备，这是支出义务的描述，并未说明它们买不起或无力承担。由“花得多”推出“付不起”属于原文未支持的推断，不能选 TRUE。",
            "为什么不是 FALSE：原文也没有否认这些店负担得起，更没有说它们都顺利购入了设备；对“负担能力”这一命题原文完全没有交代，既无同意信息也无矛盾信息，因此不是 FALSE，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "The advantages of the new bar code scanner took some time to be accepted by users.",
          "translation": "新型条形码扫描器的优点经过一段时间才被使用者接受。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The advantages of the system were not clear immediately, as wholesalers, retailers and customers remained suspicious. Some customers believed bar codes were a form of surveillance."
          },
          "synonyms": [
            "“took some time” 同义替换为原文的 “were not clear immediately”，即“并非立刻显现”",
            "“be accepted by users” 对应原文 “wholesalers, retailers and customers remained suspicious”，以及后文 “the benefits eventually became apparent”，从怀疑到最终认可正是一个被接受的过程",
            "“users” 概括了原文列举的三类人 “wholesalers, retailers and customers”（批发商、零售商和顾客），他们正是条形码系统的使用者与使用现场的人",
            "“The advantages of the new bar code scanner” 与原文的 “The advantages of the system” 基本同词复现"
          ],
          "locatingTip": "定位：题干的 core 名词 advantages 与 scanner 都出现在第 7 段，其中 advantages 就在该段首句：“The advantages of the system were not clear immediately”，扫读时锁定 advantages 一词即可一步定位（scanner 一词不在首句，若用它定位，第 7 段 Business Week 的标题 “The Supermarket Scanner That Failed” 也能印证）。确定答案技巧：题干说“优点经过一段时间才被接受”，原文用 “were not clear immediately”（并非立刻显现）加 “remained suspicious”（仍然怀疑）交代了初期的抵制氛围，随后用 However 转折：“the benefits eventually became apparent”，最终得到认可。由“一时不被看清、被怀疑”到“最终显而易见”，恰好对应“took some time to be accepted”，方向一致，判 TRUE。注意关键词 immediately 与 took some time 是同一含义的两种说法。",
          "analysis": "第 7 段是全文唯一集中讨论条形码优点的段落：“The advantages of the system were not clear immediately, as wholesalers, retailers and customers remained suspicious. Some customers believed bar codes were a form of surveillance. During the early weeks, Business Week magazine ran the headline 'The Supermarket Scanner That Failed'. However, the benefits eventually became apparent.”（这套系统的优势并没有立刻显现，因为批发商、零售商和顾客都持怀疑态度。一些顾客认为条形码是一种监控手段。在最初几周，《商业周刊》还登出了“失败的超市扫描器”这样的标题。然而，这些好处最终还是变得显而易见了）。题干说 “The advantages of the new bar code scanner took some time to be accepted by users.”，与原文形成三处紧凑对应：一是 “took some time” 对应 “were not clear immediately”（并非马上被看清，说明经过了时间）与 “During the early weeks” 所描述的最初抵触阶段；二是 “be accepted by users” 对应 “wholesalers, retailers and customers remained suspicious” 到 “the benefits eventually became apparent” 的转变——先怀疑、后认可；三是 “users” 概括了原文点名的那三类相关人群。三处改写方向一致，所以答案是 TRUE。答题提示：本段结构是“先抑后扬”，读到 remaining suspicious 与失败的标题时不要急于判 FALSE——原文紧接着用 However 转折给出 “eventually became apparent”，这个 eventually（最终）才是与题干 took some time 真正对应的词，判断题必须读完整段的转折走向。",
          "traps": [
            "为什么不是 FALSE：题干关于“优点最终被接受”的说法与原文一致：原文先用 “were not clear immediately”“remained suspicious” 写初期的怀疑，随后用 However 转折为 “the benefits eventually became apparent”，即优点最终得到认可。原文并不存在“优点始终未被接受”的信息，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对优点的认可过程交代得非常充分——初期的怀疑（wholesalers, retailers and customers remained suspicious）、公众的误解（Some customers believed bar codes were a form of surveillance）、媒体的负面标题（The Supermarket Scanner That Failed）以及最终的反转（the benefits eventually became apparent），信息完整且与题干同向，不属于未提及。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
