(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-106", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-106",
  "meta": {
    "examId": "p1-low-106",
    "title": "The Importance of Business Cards 名片的重要性",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Children's business cards have been banned in some kindergartens.",
          "translation": "儿童的名片在一些幼儿园里已被禁止。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "there are kindergarten children who have cards with not only their own contact details, but also with the job descriptions of their parents and even grandparents. This practice has become so common in parts of New York, for example, that the use of such cards is now prohibited by some of these institutions."
          },
          "synonyms": [
            "“Children's business cards” 同义替换为原文的 “kindergarten children who have cards”，即把“儿童的名片”还原成“幼儿园孩子持有的名片”",
            "“have been banned” 同义替换为原文的 “is now prohibited by”，prohibited 与 banned 同义，都是“被禁止”",
            "“in some kindergartens” 对应原文的 “by some of these institutions”，these institutions 回指上文说到的幼儿园等机构，some 与 some 对应"
          ],
          "locatingTip": "定位：题干关键词 kindergarten 是全文唯一出现幼儿园的地方，扫读第 2 段中部的举例句即可锁定，不必读完全文。确定答案技巧：本题考“禁止”这一动作是否存在。原文先用 there are kindergarten children who have cards 确认“幼儿园孩子确实有名片”，紧接着说这种做法在纽约部分地区太普遍，以至于 “the use of such cards is now prohibited by some of these institutions”，prohibited 与题干的 banned 完全同义，such cards 回指前文的儿童名片，some of these institutions 对应 some kindergartens。两条信息合起来正是题干的被动表达，故判 TRUE。注意题干用现在完成时 have been banned，对应原文的 is now prohibited（现已禁止），时态方向一致。",
          "analysis": "第 2 段列举名片的各种形态，从美国人随手抛名片、日本人郑重交换，到 24K 金名片，接着说：“Some businesspeople hand out 24-carat gold cards, and there are kindergarten children who have cards with not only their own contact details, but also with the job descriptions of their parents and even grandparents.”（有些商人发放 24K 金名片；还有幼儿园孩子拥有的名片上不仅有他们自己的联系方式，甚至还有父母乃至祖父母的职位描述）。随后一句是本题的落点：“This practice has become so common in parts of New York, for example, that the use of such cards is now prohibited by some of these institutions.”（这种做法在纽约部分地区已如此普遍，以至于这类卡片的使用如今已被当地一些机构禁止）。信息链是完整的：前半句以事实确认幼儿园孩子持有名片，后半句用 such cards 回指这种儿童名片并说明它已被 some of these institutions 禁止。题干把原文的主动禁止改写为被动语态 Children's business cards have been banned in some kindergartens，banned 对应 prohibited，in some kindergartens 对应 by some of these institutions，信息方向完全一致，因此答案是 TRUE。做题提示：“儿童名片被禁”在原文是由两句话拼合而成，判断题中这类“前半句给事实、后半句给结论”的组合一定要连着读，不能只看其中一句就下判断。",
          "traps": [
            "为什么不是 FALSE：原文明确说这类卡片的使用 “is now prohibited by some of these institutions”，与题干的 have been banned 是同义表述，不存在任何相反信息，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文既给出 kindergarten children who have cards（儿童名片存在），又给出 is now prohibited（已被禁止），两项信息齐备，禁止的对象正是这种儿童名片，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "It was the Chinese who first began the practice of using business cards.",
          "translation": "是中国人最先开始了使用名片的做法。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The Chinese invented calling cards in the 15th century to give people notice that they intended to pay them a visit, but these were for social purposes only. Then, in the 17th century, European businesspeople invented a new type of card to act as miniature advertisements, signalling the advent of the business card."
          },
          "synonyms": [
            "“calling cards” 与题干的 “business cards” 并不等同：原文用 but these were for social purposes only 明确限定中国人发明的拜访名片只用于社交，不是商业名片",
            "“first began the practice of using business cards” 与原文的 “signalling the advent of the business card” 相互冲突：商业名片的出现被归给 17 世纪的欧洲商人",
            "“the Chinese” 在原文中确实最早使用卡片类物品（invented calling cards in the 15th century），但原文把时间（15 世纪）与性质（社交用途）一并限定，与题干所指的“商业名片”错位"
          ],
          "locatingTip": "定位：题干两个关键词 Chinese 与 business cards 都集中在第 3 段第 2、3 句，扫到 Chinese 即可停下精读。确定答案技巧：本题考“谁最先使用商业名片”，关键是把原文对两类卡片的划分读清楚。原文先说中国人 15 世纪发明了 calling cards（拜访名片），但立刻用 but 转折限定 “these were for social purposes only”（仅供社交）；随后说 17 世纪欧洲商人发明了用于“迷你广告”的新式卡片，并称之为 “the advent of the business card”（商业名片的开端）。也就是说，原文把商业名片的“开端”明确给了欧洲商人，中国人只是更早使用社交性质的名片。题干把社交名片混同为商业名片，与原文的事实划分直接矛盾，故判 FALSE。",
          "analysis": "第 3 段是名片史的时间轴，第 1 句总起：“Cards have been around a long time in one form or another.”（各种形式的卡片已经存在很久了）。第 2 句：“The Chinese invented calling cards in the 15th century to give people notice that they intended to pay them a visit, but these were for social purposes only.”（中国人在 15 世纪发明了拜访名片，用来事先通知对方自己打算登门拜访，但这些卡片只用于社交目的）。第 3 句：“Then, in the 17th century, European businesspeople invented a new type of card to act as miniature advertisements, signalling the advent of the business card.”（随后在 17 世纪，欧洲商人发明了一种充当迷你广告的新型卡片，标志着商业名片的出现）。原文对两类卡片做了严格区分：15 世纪中国的 calling cards 属于社交礼仪，17 世纪欧洲人的新式卡片才是 business card 的起点。题干 “It was the Chinese who first began the practice of using business cards” 把 business card 的发明权移交给中国人，属于偷换对象与时间（把 15 世纪的社交名片当成了商业名片），与原文明确交代的事实相反，所以答案是 FALSE。做题提示：FALSE 与 NOT GIVEN 的分界线在于原文有没有交代——本题原文对“谁先发明何种卡片、用于什么目的”交代得非常明确，属于事实冲突，绝不是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文虽然承认中国人最早使用卡片类物品，但随即限定 “these were for social purposes only”，并把商业名片的开端归于 “in the 17th century, European businesspeople invented a new type of card … signalling the advent of the business card”。题干把社交名片当成了商业名片，与原文的划分相冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对中国人名片的用途、年代，以及商业名片的开创者都有明确表述，是“有信息且相反”的情形，按规则判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Designing business cards can be a controversial process for some companies.",
          "translation": "对某些公司来说，设计名片可能是一个有争议的过程。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In today's world, business cards can cause people to have strong emotional reactions. According to one experienced company director, very few things can provoke more heated discussion at a board meeting than the composition of the company's business cards."
          },
          "synonyms": [
            "“a controversial process” 同义替换为原文的 “provoke more heated discussion”，heated discussion（激烈争论）即 controversial（有争议的）",
            "“Designing business cards” 同义替换为原文的 “the composition of the company's business cards”，composition 指名片的构成与设计",
            "“for some companies” 对应原文的 “at a board meeting”（董事会层面）与 “one experienced company director”，说明这种争议发生在公司内部"
          ],
          "locatingTip": "定位：题干关键词 business cards 加上 controversial 的语义场（争论、分歧），第 3 段末尾两句正好给出情感反应与董事会争论，扫读 “board meeting” 即可锁定。确定答案技巧：题目问“设计名片是否可能是公司内部有争议的过程”，原文用比较结构 “very few things can provoke more heated discussion at a board meeting than the composition of the company's business cards” 强调几乎没有什么比公司名片的构成更能引起董事会的激烈讨论。provoke more heated discussion 与 controversial process 同义，composition 对应 designing，board meeting 说明主体是公司，三处对应齐全，故判 TRUE。注意原文先给一句概括 “business cards can cause people to have strong emotional reactions”，再用公司董事的话作具体例证，两句一虚一实互相印证。",
          "analysis": "第 3 段末尾写道：“In today's world, business cards can cause people to have strong emotional reactions.”（在当今世界，名片能让人产生强烈的情绪反应）。紧接一句引用公司董事的话：“According to one experienced company director, very few things can provoke more heated discussion at a board meeting than the composition of the company's business cards.”（据一位经验丰富的公司董事说，在董事会上，很少有什么话题能比公司名片的构成引起更激烈的争论）。这句话用 very few things … more … than … 的比较结构表达最高级含义：公司名片的构成是最容易引发激烈争论的话题之一。题干说 “Designing business cards can be a controversial process for some companies”，核心是两个词：controversial（有争议的）与 for some companies（在公司内部）。原文的 heated discussion 正是“争议”，the composition of the company's business cards 正是“设计名片”，at a board meeting 表明这种争议发生在公司决策层面，各处一一对应，因此答案是 TRUE。做题提示：判断题里这类“模糊概括加具体例证”的段落，答案往往落在例证句上，抓住比较结构 very few … more … than … 就能确定作者的态度是“有争议且争议很大”。",
          "traps": [
            "为什么不是 FALSE：原文明确说公司名片的构成能在董事会引起最激烈的争论，即这一过程确有争议，与题干方向一致，没有任何相反信息，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不只是提到名片设计，还直接给出了公司董事的评价与董事会争论这一场景，信息明确到“有争议”的程度，不属于未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "A famous toy company has boosted its sales by using one type of unusual business card.",
          "translation": "一家著名的玩具公司通过使用一种不寻常的名片提高了销量。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Lots of companies try to promote themselves by altering the form of the card. Employees at one famous toy company give out little plastic figures with their contact details stamped on them."
          },
          "synonyms": [
            "“a famous toy company” 原词复现于原文的 “one famous toy company”",
            "“one type of unusual business card” 同义替换为原文的 “little plastic figures with their contact details stamped on them”，即把小塑料人偶当作名片发放",
            "“has boosted its sales” 在原文中没有对应表达：原文只写 “try to promote themselves”（试图宣传自己），是目的与尝试，既未提销量，也未说宣传是否奏效"
          ],
          "locatingTip": "定位：题干中的 toy company 是识别度极高的关键词，第 4 段第 2 句即出现 “one famous toy company”，一步定位。确定答案技巧：先确认“那份奇特名片”在原文确实存在（印着联系方式的小塑料人偶），再核对题干多出来的结果信息。原文用的是 try to promote themselves by altering the form of the card——try to 表示“试图、目的是”，后面并没有给出任何成效数据，全文也从未出现 sales 或销售增长的说法。题干把它写成 has boosted its sales（已提升销量），属于把“目的”当成“已实现的结果”，并额外加入了原文没有的经营数据，信息缺失，故判 NOT GIVEN。凡是题干出现具体成效（提高销量、增加利润、获得奖项），而原文只有目的或努力的，一律按 NOT GIVEN 处理。",
          "analysis": "第 4 段开头：“Lots of companies try to promote themselves by altering the form of the card. Employees at one famous toy company give out little plastic figures with their contact details stamped on them.”（很多公司试图通过改变卡片的形式来宣传自己。一家著名玩具公司的员工发放印有他们联系方式的小塑料人偶）。原文的信息只有两层：一是公司改变卡片形式的目的是宣传自己（try to promote themselves），二是玩具公司具体发了什么（小塑料人偶）。接下来的一句换成了快餐公司的薯条形名片和加拿大离婚律师的可撕成两半的名片，同样只讲形式，不谈效果。题干 “A famous toy company has boosted its sales by using one type of unusual business card” 中，前两半都能对应上原文（famous toy company、不寻常的名片形式），但 has boosted its sales 这一结果性信息在原文中毫无依据：try to promote 是动机层面的表达，与“销量已经提升”之间存在未经验证的跳跃。按判断题规则，原文未提供该信息即为 NOT GIVEN，不能因为“营销目的合理”就自行补全结论。",
          "traps": [
            "为什么不是 TRUE：原文只说这些公司 “try to promote themselves”（试图宣传自己），try to 表示尝试与目的，不含“已经成功”；全文没有任何关于玩具公司销量或销售额变化的描述，缺少 boosting sales 的依据，不能选 TRUE。",
            "为什么不是 FALSE：原文并没有说这家公司的销量没有上升，也没有否定营销取得了效果，只是对此完全未作交代。没有相反信息就不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Some business commentators predict a decline in the use of paper business cards.",
          "translation": "一些商业评论员预测纸质名片的使用将会减少。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "For many business commentators, such gimmicky business cards prove that the use of a physical business card is nearly at an end."
          },
          "synonyms": [
            "“a decline in the use” 同义替换为原文的 “is nearly at an end”，即使用量即将走到尽头、趋于终结",
            "“paper business cards” 同义替换为原文的 “a physical business card”（实体名片），下一句的 “bits of thick paper” 进一步印证它指的是纸质名片",
            "“Some business commentators predict” 对应原文的 “For many business commentators, such gimmicky business cards prove that”，评论员由这些花哨名片得出该判断"
          ],
          "locatingTip": "定位：题干关键词 business commentators 是复数专有表述，第 4 段倒数第二句开头即出现 “For many business commentators”，一步锁定，无需通读全文。确定答案技巧：题目问评论员是否预测纸质名片使用会减少，判分点就是找评论员的结论。原文说 such gimmicky business cards prove that the use of a physical business card is nearly at an end（这些花哨的名片证明实体名片的使用几近终结），nearly at an end 与 a decline 方向一致，都是“走向衰落”；physical business card 就是纸质名片，下文的 bits of thick paper 与 swap electronic versions by smartphone（改用手机交换电子名片）构成纸与电子的对照，进一步确认 physical 指纸质。三处对应齐全，故判 TRUE。",
          "analysis": "第 4 段先举了三个“花样名片”的例子（塑料人偶、薯条形名片、可撕成两半的名片），随后给出评论界的看法：“For many business commentators, such gimmicky business cards prove that the use of a physical business card is nearly at an end.”（在许多商业评论员看来，这类噱头十足的名片恰恰证明实体名片的使用即将终结）。接着作者用反问加强这一趋势：“After all, why bother exchanging bits of thick paper at all when you can simply swap electronic versions by smartphone?”（毕竟，既然用智能手机就能交换电子版名片，何必再费事交换这些厚纸片呢？）。题干把评论员的结论概括为 “predict a decline in the use of paper business cards”：a decline 对应 is nearly at an end，paper business cards 对应 a physical business card（并由 bits of thick paper 佐证），主体 some business commentators 对应 for many business commentators，信息方向完全一致，因此答案是 TRUE。注意“评论员认为纸质名片将衰落”说的是评论员的观点，作者本人在下一段用 However 提出相反立场，这两层观点不冲突，本题只考评论员这一层。",
          "traps": [
            "为什么不是 FALSE：原文的 nearly at an end 与题干的 a decline 同向，都是“使用量减少、趋于消失”，评论员的判断被原文如实转述，不存在矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文用 For many business commentators 明确点出评论员的立场，并给出具体结论（nearly at an end），信息既明确又集中，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 13
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The most important aspect of business is having 6 ________ in others.",
          "translation": "商业中最重要的方面是对他人怀有 ________。",
          "answer": "trust",
          "wordClass": "名词（不可数抽象名词；位于 having 之后作宾语，原文直接使用不可数形式 trust，不加冠词也不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "Her 2006 study of more than 200 business executives in North America found that trust was the key element for running a successful business."
          },
          "synonyms": [
            "“The most important aspect” 同义替换为原文的 “the key element”（最关键的因素）",
            "“having trust in others” 与原文的 “trust was the key element for running a successful business” 对应，原文的结论就是答案本身",
            "“Kate Jones's research” 对应原文的 “Her 2006 study of more than 200 business executives in North America”，Her 回指上文的 Kate Jones"
          ],
          "locatingTip": "定位：笔记小标题 Kate Jones's research 给出专有名词 Kate Jones，全文只在第 6 段出现，直接锁定该段；再往下找她的研究结论句 “Her 2006 study … found that …”。确定答案技巧：题干 having ________ in others 的空格需要一个名词作 having 的宾语，而原文结论句的主语恰是 trust，与 key element for running a successful business 一起构成“信任是经营成功的关键要素”，把题干的 the most important aspect 与原文的 the key element 对接，空格只能填 trust。填写时保持原文的小写单词形式 trust，不加冠词、不写 trusting。",
          "analysis": "第 6 段先提出“要理解名片就必须理解商业如何运作”，随后引出 Kate Jones 的观点与研究：“According to Kate Jones, a business lecturer, there is one eternal and inescapable issue. Her 2006 study of more than 200 business executives in North America found that trust was the key element for running a successful business.”（据商业讲师 Kate Jones 说，存在一个永恒且无法回避的问题。她在 2006 年对北美 200 多名企业高管的研究发现，信任是经营一家成功企业的关键要素）。题干 “The most important aspect of business is having 6 ________ in others” 把 the key element 改写成 the most important aspect，把 running a successful business 概括为 of business，把信任的对象表达为 in others（对他人的信任）——原文的 trust 就是这一“最重要的方面”。紧接着的 “It is vital to be able to look someone in the eye and decide what sort of person they are” 进一步说明信任建立在人与人对视判断的基础之上，可见其对象确实是人，in others 的表述合理。从词性看，having 后面需要名词（短语）作宾语，trust 在此为不可数抽象名词，保持原形即可。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "7 ________ do not have the ability to establish the good relationships essential to business.",
          "translation": "________ 没有能力建立商业所必需的良好人际关系。",
          "answer": "computers",
          "wordClass": "名词（复数；在题干中作主语，与复数谓语 do not have 保持一致，原文使用复数形式 computers）",
          "locating": {
            "paragraph": "6",
            "quote": "while computers can deal with administrative tasks, it is still human beings that have to focus on the emotional."
          },
          "synonyms": [
            "“establish the good relationships essential to business” 同义替换为原文的 “building social connections”（建立社会联系），其中 “having dinner or playing sport with clients and colleagues” 是其具体化",
            "“do not have the ability to” 与原文的对照关系相对应：“while computers can deal with administrative tasks, it is still human beings that have to focus on the emotional”，即电脑只能处理行政事务，情感与人际关系要靠人",
            "“7 ________” 在原文中以复数主语形式出现：“computers can deal with administrative tasks”"
          ],
          "locatingTip": "定位：题干关键词 good relationships 与原文第 6 段末的 building social connections 同义，该段最后一句用 while 构成对比，直接读这一句即可。确定答案技巧：分两步。第一，语法预判——题干谓语是 do not have（复数），空格必须是复数名词；第二，读原文对比结构 while computers can deal with administrative tasks, it is still human beings that have to focus on the emotional，原文把“处理行政事务”交给电脑，把“关注情感（即人际关系）”留给人，反过来就是电脑不具备建立良好关系的能力。这句对比中能作复数主语的候选只有 computers 与 human beings，而 human beings 恰是“有能力”的一方，故答案锁定 computers。",
          "analysis": "第 6 段讲商业中永恒不变的一面：先由 Kate Jones 的研究指出信任是关键，再用 “It is vital to be able to look someone in the eye and decide what sort of person they are. In this way, you can transform acquaintanceships into relationships.”（能够直视对方并判断这是怎样一个人至关重要，这样你才能把泛泛之交变成真正的关系）说明关系的建立靠面对面的人际判断。随后是本题的定位句：“A good proportion of business life will always be about building social connections – having dinner or playing sport with clients and colleagues – and while computers can deal with administrative tasks, it is still human beings that have to focus on the emotional.”（商业生活中很大一部分永远是关于建立社会联系的——与客户和同事共进晚餐或一起运动——电脑可以处理行政事务，但必须关注情感层面的仍然是人）。原文用 while 形成鲜明对照：电脑负责的是行政事务，情感与关系层面归人负责。因此“没有能力建立商业所必需的良好关系”的一方就是 computers。题干用 do not have the ability to establish the good relationships essential to business 反向表述这一对比，空格前的复数谓语 do not have 也要求填复数名词，与原文的复数 computers 一致。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Managers must work harder when they don't share the same 8 ________ with their contacts.",
          "translation": "当管理者与他们的对接人没有共同的 ________ 时，他们必须付出更多努力。",
          "answer": "language",
          "wordClass": "名词（单数；位于及物动词 share 之后作宾语，受 the same 限定，与后面的 with their contacts 搭配，原文形式为 language，不加复数）",
          "locating": {
            "paragraph": "7",
            "quote": "Managers have to put more effort in when dealing with international counterparts, especially when there is not a common language, which is so often the case these days."
          },
          "synonyms": [
            "“must work harder” 同义替换为原文的 “have to put more effort in”（必须投入更多努力）",
            "“their contacts” 同义替换为原文的 “international counterparts”（国际对手方、对接人）",
            "“don't share the same language” 同义替换为原文的 “there is not a common language”，common 与 the same 对应，not 与 don't 对应"
          ],
          "locatingTip": "定位：题干关键词 Managers 与 contacts 在第 7 段一开头谈全球化的两句里都有对应（Managers have to put more effort in … international counterparts），直接锁定第 7 段前两句。确定答案技巧：题干的条件句 when they don't share the same ________ with their contacts 对应原文 especially when there is not a common language，not a common language 与 don't share the same 同义，因此空格填 language。原文的 a common language 已由题干的 the same 承担了 common 这一限定，空格只需名词本体 language；填写时用单数原形，不写 languages，也不要写成 a language（会超出 ONE WORD ONLY）。",
          "analysis": "第 7 段开头：“The rapid advance of globalisation means that this relationship-building process is becoming ever more demanding. Managers have to put more effort in when dealing with international counterparts, especially when there is not a common language, which is so often the case these days.”（全球化的快速推进意味着这种建立关系的过程变得愈发费力。管理者在与国际对接方打交道时必须投入更多努力，尤其是在没有共同语言的情况下——而这种情况如今非常常见）。题干把这两句压缩成 “Managers must work harder when they don't share the same 8 ________ with their contacts”：must work harder 对应 have to put more effort in，their contacts 对应 international counterparts，don't share the same 对应 there is not a common，空格所需的名词正是 language。词性上，language 在此为抽象名词单数，前面在原文受 a common 修饰，在题干中由 the same 代替了 common，因此只需填原形 language。本段接下来的英国调查（首席执行官的出行时间）与名片的两点用处，也是围绕“跨越语言与距离建立联系”展开，可见 language 这一障碍正是名片发挥作用的场景。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "A UK survey indicates that 9 ________ takes up the largest part of business leaders' time.",
          "translation": "一项英国调查显示，________ 占据了企业领导者最多的时间。",
          "answer": "travel",
          "wordClass": "名词（不可数抽象名词；在 that 引导的宾语从句中作主语，与单数谓语 takes up 一致，原文形式为 travel，不加冠词、不变复数）",
          "locating": {
            "paragraph": "7",
            "quote": "A recent UK survey showed that chief executives of global organisations now routinely spend three out of every four weeks on international travel."
          },
          "synonyms": [
            "“A UK survey indicates” 同义替换为原文的 “A recent UK survey showed”（show 即 indicate）",
            "“business leaders” 同义替换为原文的 “chief executives of global organisations”（全球性组织的首席执行官）",
            "“takes up the largest part of … time” 同义替换为原文的 “spend three out of every four weeks”（每四周中花掉三周，即四分之三的时间）"
          ],
          "locatingTip": "定位：题干关键词 UK survey 是极好的定位词，第 7 段第 3 句开头即 “A recent UK survey showed that …”，一步定位。确定答案技巧：先看时间的表述——原文说这些高管 “spend three out of every four weeks on international travel”，每四周中有三周花在某件事上，正是“占据最大部分时间”；再看花在什么上面，介词 on 之后的宾语 international travel 中的核心名词 travel 就是答案。注意题干已用 takes up the largest part of business leaders' time 概括 spend … weeks … time 这一时间分配，空格只要名词本体 travel，不要写 international travel（ONE WORD ONLY），也不要因原文的 international 而填 international。",
          "analysis": "第 7 段中段：“A recent UK survey showed that chief executives of global organisations now routinely spend three out of every four weeks on international travel.”（英国最近的一项调查显示，全球性组织的首席执行官们如今通常每四周就有三周花在国际差旅上）。题干 “A UK survey indicates that 9 ________ takes up the largest part of business leaders' time” 把原文的 spend three out of every four weeks 这一时间比例，改写为 takes up the largest part of … time（占据时间最大部分），把 chief executives of global organisations 概括为 business leaders，只保留了“时间由谁花、花在什么上”的框架，其中“花在什么上”就是介词 on 的宾语 international travel，答案是核心名词 travel。词性上 travel 在这里是不可数抽象名词（表示“出行、差旅”这一活动），不加冠词、不用复数。紧跟其后的 “It is in these situations that business cards are doubly useful, as they are a quick way of establishing connections.” 说明频繁差旅正是名片大显身手的场景，可用来复核本题所在句的语境。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "A business person's 10 ________ of a meeting can be improved by looking at business cards.",
          "translation": "通过翻看名片，商务人士对某次会议的 ________ 可以得到改善。",
          "answer": "memory",
          "wordClass": "名词（抽象名词，此处为单数；受所有格 business person's 限定，作句子主语的中心词，后接 of a meeting，原文形式为 memory）",
          "locating": {
            "paragraph": "7",
            "quote": "Looking through piles of different cards can enhance your memory in ways that simply looking through uniform electronic lists would never do."
          },
          "synonyms": [
            "“can be improved” 同义替换为原文的 “can enhance”（提升、增强）",
            "“by looking at business cards” 同义替换为原文的 “Looking through piles of different cards”（翻看一叠叠不同的名片）",
            "“A business person's … of a meeting” 对应原文上文的 “you have actually met someone in a face-to-face meeting”，memory 的内容正是“见过谁”这件事"
          ],
          "locatingTip": "定位：题干关键词 business cards 与 improved，在第 7 段末尾两句以 “Cards can also remind you that …” 和 “Looking through piles of different cards can enhance your memory …” 呈现，扫到 Looking through piles of different cards 即锁定。确定答案技巧：题干把原文的动宾结构 enhance your memory 改写为名词结构 “A business person's [10] … can be improved”，其中 can be improved 对应 can enhance，被增强的对象仍是 memory，因此空格填 memory。题干的 of a meeting 来自上一句 “you have actually met someone in a face-to-face meeting”，说明这里说的记忆是“见过谁、在哪次会面见过”的记忆。填写时保持原形 memory，不写 memories。",
          "analysis": "第 7 段末尾两句：“Cards can also remind you that you have actually met someone in a face-to-face meeting rather than just searched for them on the Internet. Looking through piles of different cards can enhance your memory in ways that simply looking through uniform electronic lists would never do.”（名片还能提醒你：你是真的在某次当面的会面中见过某人，而不只是在网上搜索过他。翻看一叠叠不同的名片能增强你的记忆，而翻看整齐划一的电子列表绝做不到这一点）。题干 “A business person's 10 ________ of a meeting can be improved by looking at business cards” 把 enhance your memory 改写成名词化的 “某人的记忆得到改善”，把 Looking through piles of different cards 概化为 by looking at business cards，两处一一对应，因此答案是 memory。原文用 in ways that … would never do 的比较结构强调纸质名片对记忆的帮助优于电子列表，这正是“翻看名片改善记忆”的依据；of a meeting 则来自上一句的 face-to-face meeting。词性上 memory 在原文为不可数用法（此处喻指“记忆能力”），填原形即可。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Business cards clearly show the 11 ________ of each person in a large company.",
          "translation": "名片能清楚地显示大公司里每个人的 ________。",
          "answer": "status",
          "wordClass": "名词（单数抽象名词；受定冠词 the 修饰，位于及物动词 show 之后作宾语，后接 of each person，原文形式为 status，不加复数）",
          "locating": {
            "paragraph": "8",
            "quote": "She maintains that as companies become more complex, cards are essential in determining the exact status of every contact you meet in multinational corporations."
          },
          "synonyms": [
            "“clearly show” 同义替换为原文的 “are essential in determining”（在确定……方面必不可少）",
            "“each person” 同义替换为原文的 “every contact”（每一位联系人）",
            "“in a large company” 同义替换为原文的 “in multinational corporations”（跨国公司）与 “as companies become more complex”（公司变得越复杂）"
          ],
          "locatingTip": "定位：笔记小标题 Janet McIntyre 给出专有名词，第 8 段首句即出现，随后 “She maintains that …” 是她的观点句，直接精读。确定答案技巧：题干 Business cards clearly show the [11] of each person 是把原文的 cards are essential in determining the exact status of every contact 改写而来——clearly show 对应 determining（确定、辨明），each person 对应 every contact，被确定的对象就是 the exact status，因此空格填 status。题干中的 in a large company 来自原文的 in multinational corporations 与 as companies become more complex。填写时保持单数原形 status，不写 statuses。",
          "analysis": "第 8 段：“Janet McIntyre is a leading expert on business cards in today's world. She maintains that as companies become more complex, cards are essential in determining the exact status of every contact you meet in multinational corporations.”（Janet McIntyre 是当今世界研究名片的权威专家。她认为，随着公司变得愈发复杂，在确定你在跨国公司里遇到的每一位联系人的确切地位时，名片是不可或缺的）。题干把它简化为 “Business cards clearly show the 11 ________ of each person in a large company”：business cards 原词复现，clearly show 对应 are essential in determining，each person 对应 every contact，a large company 对应 multinational corporations（跨国公司即大型公司）。原文强调的关键信息点是“确切地位（the exact status）”，因为在层级复杂的跨国公司里，仅凭一面之缘很难判断对方的职位高低，而名片上印有头衔与职务，正好起到标明身份的作用。故答案为 status。词性上 status 为抽象名词单数，受 the exact 修饰，填入原形即可。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "The ritual of swapping business cards is a good way of starting a 12 ________ at the beginning of a business relationship.",
          "translation": "交换名片的仪式是在商务关系之初开启一段 ________ 的好方法。",
          "answer": "conversation",
          "wordClass": "名词（单数可数名词；受不定冠词 a 修饰，作动名词 starting 的宾语，原文形式为 conversation）",
          "locating": {
            "paragraph": "8",
            "quote": "Janet also explains how exchanging business cards can be an effective way of initiating a conversation, because it gives people a ritual to follow when they first meet a new business contact."
          },
          "synonyms": [
            "“The ritual of swapping business cards” 同义替换为原文的 “exchanging business cards … it gives people a ritual to follow”，swapping 即 exchanging",
            "“a good way of starting” 同义替换为原文的 “an effective way of initiating”（有效开启）",
            "“at the beginning of a business relationship” 同义替换为原文的 “when they first meet a new business contact”"
          ],
          "locatingTip": "定位：本题承接第 11 题，仍在第 8 段，Janet 的第二句话即答案所在，扫读关键词 ritual 就能锁定 “because it gives people a ritual to follow”。确定答案技巧：题干说交换名片的仪式是“开启某事物（starting a [12]）”的好方法，原文对应表达是 an effective way of initiating a conversation，initiating 对应 starting，a conversation 就是被开启的对象，故填 conversation。题干后半句 at the beginning of a business relationship 正是原文 when they first meet a new business contact 的概括，用来印证 initiating 发生在关系之初。填写时保持单数原形 conversation，不写 conversations；也不要填 ritual（ritual 是交换名片这一动作本身，不是被开启的对象）。",
          "analysis": "第 8 段后半：“Janet also explains how exchanging business cards can be an effective way of initiating a conversation, because it gives people a ritual to follow when they first meet a new business contact.”（Janet 还解释说，交换名片可以是开启交谈的有效方式，因为当人们初次见到新的商务联系人时，它提供了一个可以遵循的仪式）。题干把这一句压缩为 “The ritual of swapping business cards is a good way of starting a 12 ________ at the beginning of a business relationship”：exchanging 对应 swapping，an effective way 对应 a good way，initiating 对应 starting，when they first meet a new business contact 对应 at the beginning of a business relationship，唯一被留下的名词就是 conversation。原文用 because 从句解释了其中的道理——初次见面双方往往不知如何开口，交换名片这一固定仪式正好给出一个自然的破冰步骤，因此它“有助于开启交谈”。注意题干中的 ritual 一词来自原文的 a ritual to follow，只是句中的附属信息，不能当作答案填入空格。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Janet feels that in the business world, 13 ________ is just as important as innovation.",
          "translation": "Janet 认为，在商业世界里，________ 与创新同样重要。",
          "answer": "tradition",
          "wordClass": "名词（不可数抽象名词；在题干中作主语，与单数谓语 is 一致，原文使用不可数形式 tradition）",
          "locating": {
            "paragraph": "9",
            "quote": "The business world is obsessed with the idea of creating and inventing new things that will change the way we do everything, and this does lead to progress. But there are lots of things that do not need to be changed and, in Janet McIntyre's view, tradition also has an equally valuable role to play."
          },
          "synonyms": [
            "“innovation” 同义替换为原文的 “the idea of creating and inventing new things”，即“创新、发明新事物”",
            "“is just as important as” 同义替换为原文的 “also has an equally valuable role to play”（同样具有同等宝贵的价值）",
            "“Janet feels” 同义替换为原文的 “in Janet McIntyre's view”（在 Janet McIntyre 看来）"
          ],
          "locatingTip": "定位：题干人名 Janet 在末段以 in Janet McIntyre's view 的形式再次出现，第 9 段最后两句同时出现观点与结论，直接锁定末段。确定答案技巧：题干是“A 与 innovation 同等重要”的比较结构，先在原文找到“创新”的对应表达——“The business world is obsessed with the idea of creating and inventing new things”，再找与它并列、被给予同等地位的另一方：“tradition also has an equally valuable role to play”。equally valuable 对应 just as important as，also 表明 tradition 是继创新之后被提起的另一要素，故空格填 tradition。填写时用小写原形 tradition，不需加冠词或复数。",
          "analysis": "第 9 段是全文收束段：“The business world is obsessed with the idea of creating and inventing new things that will change the way we do everything, and this does lead to progress. But there are lots of things that do not need to be changed and, in Janet McIntyre's view, tradition also has an equally valuable role to play. Therefore the practice of exchanging business cards is likely to continue in the business world.”（商业世界痴迷于创造和发明将改变一切做事方式的新事物，这确实带来进步。但有很多东西并不需要改变，而在 Janet McIntyre 看来，传统同样具有同等宝贵的价值。因此交换名片的做法在商业世界很可能会延续下去）。题干 “Janet feels that in the business world, 13 ________ is just as important as innovation” 把这种“双重要素”的对比抽出来：innovation 对应 the idea of creating and inventing new things，is just as important as 对应 also has an equally valuable role to play，Janet feels 对应 in Janet McIntyre's view，与创新平起平坐的那一方正是 tradition。作者用 But 一转，把论证重心从“创新带来进步”移到“传统同样不可替代”，最后顺势推出“交换名片的做法会延续下去”这一结论——这也正是全文（名片的重要性）的落点。词性上 tradition 为不可数抽象名词，在题干中作主语，与单数谓语 is 一致，填原形即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
