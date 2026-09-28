(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-1900", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-1900",
  "meta": {
    "examId": "p3-high-1900",
    "title": "What Are the 1,000 Foods to Eat Before You Die? 死前必吃的1000种食物是什么？",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q27",
          "questionNumber": 27,
          "stem": "Mimi Sheraton is currently working as a restaurant critic for the New York Times.",
          "translation": "米米·谢拉顿（Mimi Sheraton）目前正为《纽约时报》担任餐厅评论员。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "However, thanks to former New York Times restaurant critic, Smithsonian contribution and author Mimi Sheraton's latest book, 1,000 Foods to Eat Before You Die, your foodie life is about to get a whole lot more interesting."
          },
          "synonyms": [
            "“a restaurant critic for the New York Times” 对应原文的 “New York Times restaurant critic”，机构与职位完全一致，但时态被题干改成“现任”",
            "“currently working as” 与原文的 “former”（前任的、以前的）直接冲突：原文用 former 修饰这一职位，说明她已经离职",
            "“Mimi Sheraton” 在原文中身份与姓名同时出现：“former New York Times restaurant critic, Smithsonian contribution and author Mimi Sheraton”，人名零障碍定位"
          ],
          "locatingTip": "定位：题干的大写人名 Mimi Sheraton 与机构名 New York Times 都是显眼的专有名词，第 1 段末句同时出现，扫到 New York Times 即可停下精读，不必读完全文。确定答案技巧：本题的判分点是一个形容词 former。原文写 former New York Times restaurant critic，说明“《纽约时报》餐厅评论员”是她过去的身份；题干用 currently working as 强调“目前在职”，把前职说成现职，属于事实冲突，故判 FALSE。凡题干出现 currently、now、still，都要回原文核对有没有 former、ex-、retired 之类的限定词。",
          "analysis": "第 1 段先用两个设问举例（埃及菜单上的 harnam meshwi 烤鸽子、挪威奥斯陆刚捕捞的鲜虾早餐）勾起读者的美食好奇心，最后一句才点出这段的真正落点：“However, thanks to former New York Times restaurant critic, Smithsonian contribution and author Mimi Sheraton's latest book, 1,000 Foods to Eat Before You Die, your foodie life is about to get a whole lot more interesting.”（不过，多亏曾任《纽约时报》餐厅评论员、史密森尼撰稿人及作家 Mimi Sheraton 的最新著作《死前必吃的 1000 种食物》，你的美食人生即将变得有趣得多）。句中 Sheraton 的身份用同位语并列给出，其中 restaurant critic 前明确有 former 一词，意思是“（现已不在职的）前餐厅评论员”，另外两个身份（撰稿人、作家）也都是在交代她的既有资历。题干却写成 Mimi Sheraton is currently working as a restaurant critic for the New York Times（她目前正为《纽约时报》担任餐厅评论员），把原文的“前任”读成“现任”，与原文事实相反，因此答案是 FALSE。做题提示：题目常在人名前后的头衔限定词上设错，former 与 currently 是一对天然的矛盾词，看到其中之一就要主动去原文找另一个。",
          "traps": [
            "为什么不是 TRUE：原文用 former 限定 New York Times restaurant critic，说明她已不再担任该职位；题干却说 currently working as，与原文直接对立，忽略 former 就会误判为 TRUE。",
            "为什么不是 NOT GIVEN：原文对 Sheraton 与该报的关系交代得很明确（曾经是餐厅评论员、现在不是），属于既有信息且与题干相反，按规则判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q28",
          "questionNumber": 28,
          "stem": "The book 1,000 Foods to Eat Before You Die was directly inspired by a popular travel guide.",
          "translation": "《死前必吃的 1000 种食物》这本书直接受到一本畅销旅行指南的启发。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Inspired by Patricia Schultz's best-selling 1,000 Places to See Before You Die (also published by Workman Publishing), Sheraton has rounded up 1,000 must-try dishes, restaurants, markets, cultural feasts, and even some relatively universal foods"
          },
          "synonyms": [
            "“was directly inspired by” 同义替换为原文的 “Inspired by”，原文用过去分词短语置于段首交代创作缘起",
            "“a popular travel guide” 同义替换为原文的 “best-selling 1,000 Places to See Before You Die”，best-selling 对应 popular",
            "“1,000 Foods to Eat Before You Die” 对应原文的书名（受启发的一方），“1,000 Places to See Before You Die”（书名讲“必看的地方”，属于旅行指南）是启发来源"
          ],
          "locatingTip": "定位：题干的关键词是书名 1,000 Foods to Eat Before You Die 与 travel guide，第 2 段首句就是 Inspired by …，且用括号补出出版社信息，属于典型的“段首出考点”。确定答案技巧：本题考“是否受到某本书的启发”，只要找到 Inspired by 这个被动结构即可：inspired 与题干 was directly inspired by 对应，best-selling 与 popular 对应，1,000 Places to See Before You Die 是一本旅行指南，三处改写全部同向，故判 TRUE。",
          "analysis": "第 2 段首句：“Inspired by Patricia Schultz's best-selling 1,000 Places to See Before You Die (also published by Workman Publishing), Sheraton has rounded up 1,000 must-try dishes, restaurants, markets, cultural feasts, and even some relatively universal foods (such as bananas, olive oil, and whipped cream) that transcend regional categorization.”（受 Patricia Schultz 畅销书《死前必看的 1000 个地方》——同样由 Workman 出版社出版——的启发，Sheraton 汇集了 1000 种必尝的菜肴、餐厅、市场、文化盛宴，甚至还有一些超越地域分类的、相对普世的食物，如香蕉、橄榄油和打发的奶油）。句首的 Inspired by 是过去分词短语，逻辑主语即后面提到的 Sheraton 及其新书《死前必吃的 1000 种食物》，作者开门见山交代了这本书的灵感来源。题干三处信息与原文一一对应：directly inspired by 对应 Inspired by；a popular travel guide 对应 best-selling 1,000 Places to See Before You Die（畅销、写“必看的地方”，属旅行指南）；书名本身原词复现。因此答案为 TRUE。注意别因为原文没有出现 directly 一词就判 NOT GIVEN：directly 只是在强调启发关系的直接性，原文并未给出任何“间接受到启发”之类的交代，不存在相反信息。",
          "traps": [
            "为什么不是 FALSE：原文用 Inspired by 明确交代了灵感来源是 Patricia Schultz 的畅销书，与题干“直接受一本畅销旅行指南启发”完全同向，没有任何矛盾点。",
            "为什么不是 NOT GIVEN：题干问的“是否受到启发”在原文首句已有明确答案，信息完整；题干的 directly 只是程度描述，原文没有与之相反的表述，因此不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q29",
          "questionNumber": 29,
          "stem": "Sheraton's book includes recipes for every one of the 1,000 foods mentioned.",
          "translation": "谢拉顿的书中为所提到的 1000 种食物中的每一种都配有食谱。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Curated from cuisines around the globe, Sheraton has put them together in one large volume, along with details on historic and cultural context, tips on how to prepare or where to try a particular dish, and even several dozen recipes."
          },
          "synonyms": [
            "“recipes for every one of the 1,000 foods” 与原文的 “even several dozen recipes”（甚至只有几十份食谱）相互冲突，数量范围被题干无限放大",
            "“includes recipes” 同义替换为原文的 “and even several dozen recipes”，书里确实收了食谱，但原文限定为“几十份”",
            "“every one of the 1,000 foods mentioned” 对应原文的 “them”（指前文 1,000 must-try dishes、restaurants、markets 等 1000 个条目），原文并未称食谱覆盖全部条目"
          ],
          "locatingTip": "定位：题干的核心是 recipes 与 1,000 这两个信息点，回到原文第 2 段找与食谱数量有关的表述，即 “and even several dozen recipes”。确定答案技巧：本题考“数量范围”。several dozen 大约是二三十到几十份，相对于 1000 个条目只是极小一部分；题干用 every one of the 1,000 foods 要求“全覆盖”，与原文的量级直接冲突，故判 FALSE。凡题干出现 every、all、each 等全体性数量词，都必须回原文核对是否真有“全覆盖”的表述。",
          "analysis": "第 2 段在说明书中收录的内容时用了一个并列结构：“Curated from cuisines around the globe, Sheraton has put them together in one large volume, along with details on historic and cultural context, tips on how to prepare or where to try a particular dish, and even several dozen recipes.”（Sheraton 把来自全球各地的美食汇集在一本大书里，并附有关于历史与文化背景的细节、如何烹制或在何处品尝某道菜的提示，甚至还有几十份食谱）。其中 several dozen recipes 用 even 强调这是“额外奉送”的部分，同时也把食谱数量限定在几十份，与 1000 相去甚远。题干却写成 “includes recipes for every one of the 1,000 foods mentioned”（为提到的 1000 种食物每一种都附食谱），把“几十份”夸大成“1000 份全覆盖”，与原文的数量信息正相矛盾，因此答案是 FALSE。本题还可以从另一处得到旁证：同段说这 1000 个条目不仅包含菜肴，还包括 restaurants（餐厅）、markets（市场）、cultural feasts（文化盛宴）等场所与活动，这些对象本身也无法一一配上食谱，题干“为每一种食物都附食谱”的说法在原文中无处支撑。",
          "traps": [
            "为什么不是 TRUE：原文只说书里有 even several dozen recipes（几十份食谱），数量远少于 1000 项；题干用 every one of the 1,000 foods 要求全覆盖，与原文明确的数量相反。",
            "为什么不是 NOT GIVEN：原文对食谱数量有明确交代（several dozen recipes），属于已给出且与题干冲突的信息，不是没有提及，所以只能判 FALSE。"
          ]
        },
        {
          "questionId": "q30",
          "questionNumber": 30,
          "stem": "The book is organized according to the geographic origin of the foods.",
          "translation": "这本书按照食物的地理来源来编排。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The book is organized not by country or type of food, but rather by the experience of eating itself."
          },
          "synonyms": [
            "“according to the geographic origin of the foods” 与原文的 “not by country” 直接冲突：country（国家）正是地理来源，而原文用 not 明确排除",
            "“is organized” 与原文的 “is organized” 原词复现，题干正是在改写这句组织原则",
            "原文真正的编排依据 “by the experience of eating itself” 与题干的 geographic origin 是两套完全不同的标准"
          ],
          "locatingTip": "定位：题干的关键词是 organized 与 geographic origin，第 4 段首句以 The book is organized not by … 起头，属于主题句直接出答案的送分点。确定答案技巧：抓住 not … but rather … 这一否定强调结构，原文先说“不是按国家、也不是按食物类型”，再说“而是按进食体验本身”；题干说的“按食物的地理来源”正是原文被否定的那一条（country 即 geographic origin），故判 FALSE。",
          "analysis": "第 4 段首句直接交代全书结构：“The book is organized not by country or type of food, but rather by the experience of eating itself.”（这本书不是按国家或食物类型来编排，而是按进食体验本身来组织）。not … but rather … 是关键句式：前半句否定了“按国家（即地理来源）”与“按食物种类”两种分类法，后半句提出真正的依据是“进食体验”。题干的 the book is organized according to the geographic origin of the foods 恰好落在被否定的那一项上，与原文相反，因此答案是 FALSE。紧接着的一句从正面印证了编排方式：“Sections guide the reader through 'Street Food & Snacks,' 'Comfort Food,' and 'Sweets & Treats,' among others.”——章节名是“街头小吃”“慰藉食物”“甜点零食”这类按进食体验划分的类别，而不是“埃及篇”“法国篇”这样的国家篇目。注意本题与第 34 题考的是同一句原文，只是题型分别为判断题和选择题，两题可以一起锁定，但结论要分别写清。",
          "traps": [
            "为什么不是 TRUE：原文用 not by country 明确否定了“按国家（地理来源）”的编排方式，并把真正的依据给了 the experience of eating itself，题干说法与原文正好相反。",
            "为什么不是 NOT GIVEN：原文对编排原则交代得非常明确（既有被否定的方式，也有被肯定的方式），属于既有信息且与题干冲突，不是信息缺失，因此判 FALSE。"
          ]
        },
        {
          "questionId": "q31",
          "questionNumber": 31,
          "stem": "Sheraton has been a food writer for six decades.",
          "translation": "谢拉顿已经从事美食写作六十年。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "one that's as much a wonderful display of Sheraton's vast food knowledge (she's been writing about food for 60 years) as it is an ode to the world's sheer culinary diversity."
          },
          "synonyms": [
            "“six decades” 同义替换为原文的 “60 years”，一个 decade 即十年，六个十年就是六十年",
            "“a food writer” 同义替换为原文的 “she's been writing about food”，题干把它概括为职业身份",
            "“has been … for six decades” 同义替换为原文的 “she's been writing … for 60 years”，题干用现在完成时、原文用现在完成进行时，都表示“持续至今已六十年”"
          ],
          "locatingTip": "定位：题干没有大写专有名词，抓手是数字 six decades 与关键词 food writer。原文第 2 段末尾用括号补充 “she's been writing about food for 60 years”，括号里的补注在雅思里同样是有效考点，不要习惯性跳过。确定答案技巧：把 six decades 换算成 60 years，与原文数值一一对应；has been a food writer 对应 she's been writing about food，时态与含义一致，故判 TRUE。",
          "analysis": "第 2 段末句在评价这本书时说：“It's a project that's been 10 years in the making—one that's as much a wonderful display of Sheraton's vast food knowledge (she's been writing about food for 60 years) as it is an ode to the world's sheer culinary diversity.”（这个项目历时十年才完成，它既是对 Sheraton 渊博美食知识的精彩展现——她已经写了 60 年的美食——也是对世界饮食多样性的礼赞）。括号内的 she's been writing about food for 60 years 明确交代了她写美食的时间长度为 60 年。题干把 60 years 换算成 six decades（六个十年），把 she's been writing about food 概括为 a food writer，两处改写完全等价，且时态都表示“一直持续到现在”，因此答案是 TRUE。本题有两个易错点：一是 decade 的含义，six decades 等于 60 年，若不熟悉这个词就会无从对应，建议记住 decade、fortnight、century 这类常见时间单位；二是同句出现的 10 years in the making 指的是“这本书写了十年”，与写作生涯长度无关，不要张冠李戴。",
          "traps": [
            "为什么不是 FALSE：原文括号中清楚写明 she's been writing about food for 60 years，与题干的 six decades（六十年）数值一致、职业表述一致，没有任何矛盾。",
            "为什么不是 NOT GIVEN：原文并非没有交代写作年限，而是用括号补出了具体的 60 years；数字一旦明确就不属于信息缺失，题干与之一致时只能判 TRUE。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–35 选择题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 35
      },
      "items": [
        {
          "questionId": "q32",
          "questionNumber": 32,
          "stem": "The main purpose of the first paragraph is to",
          "translation": "第一段的主要目的是",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Chances are probably never. However, thanks to former New York Times restaurant critic, Smithsonian contribution and author Mimi Sheraton's latest book, 1,000 Foods to Eat Before You Die, your foodie life is about to get a whole lot more interesting."
          },
          "synonyms": [
            "“introduce the book” 对应原文的 “thanks to … Mimi Sheraton's latest book, 1,000 Foods to Eat Before You Die”，段落落点就是引出这本书",
            "“highlighting its adventurous nature” 同义替换为原文的 “your foodie life is about to get a whole lot more interesting”，并呼应前文异国美食的设问",
            "“adventurous” 的信息来自原文举例的 “harnam meshwi, a.k.a. grilled pigeon … in Egypt” 与挪威奥斯陆的 “freshly caught shrimp”，都是常人少有机会尝到的冒险型食物"
          ],
          "locatingTip": "定位：本题问段落主旨，必须以整段为单位阅读。第 1 段的结构是“举例设问（埃及烤鸽子、奥斯陆鲜虾早餐）—承认多数人无缘体验—转折引出 Sheraton 的新书”。确定答案技巧：主旨题看段落落点，前两句只是铺垫，However 之后的末句才是段落归属——“your foodie life is about to get a whole lot more interesting”，并直接点出书名，所以段落目的是引出这本书，选 D。",
          "analysis": "第 1 段共四句：①“When was the last time you sat down to a meal of harnam meshwi, a.k.a. grilled pigeon, which is most likely found on a menu in Egypt?”（你上一次坐下来吃一顿 harnam meshwi——也就是烤鸽子，多半只能在埃及的菜单上找到——是什么时候？）；②“Or traveled to Oslo, Norway, for a breakfast of freshly caught shrimp?”（或者跑到挪威奥斯陆去吃一顿刚捕捞上来的鲜虾早餐？）；③“Chances are probably never.”（大概从来没有过。）；④“However, thanks to former New York Times restaurant critic, Smithsonian contribution and author Mimi Sheraton's latest book, 1,000 Foods to Eat Before You Die, your foodie life is about to get a whole lot more interesting.”（不过，多亏了 Mimi Sheraton 的新书，你的美食人生即将变得有趣得多）。前两句的异国美食只是引入话题的引子，第三句承认多数人无缘体验，转折词 However 之后才是作者真正要讲的事——这本书能替读者打开这些体验的大门。这种“铺垫加引出作品”的段落功能，正是选项 D 的 introduce the book by highlighting its adventurous nature 所要表达的，故答 D。A 说批评读者无聊的饮食习惯，原文无任何批评意味；B 说提供异国食物的具体例子，只描述了前两句举例这一手段，忽略了末句真正的主旨；C 说解释全球饮食的健康益处，全段根本没有涉及健康或营养。",
          "traps": [
            "A 错误：原文确实说多数人没吃过这些异国食物（Chances are probably never），但作者只是陈述事实，没有任何 criticize 或 boring 的表述，属无中生有。",
            "B 错误：provide specific examples of exotic foods 只覆盖了前两句的举例手法，而段落的手法是为末句引出新书服务的，把“手段”当成“主要目的”属于以偏概全。",
            "C 错误：explain the health benefits of a global diet 在原文找不到任何依据，全段未出现健康、营养相关字眼，属无中生有。"
          ]
        },
        {
          "questionId": "q33",
          "questionNumber": 33,
          "stem": "According to the passage, the book includes all of the following EXCEPT",
          "translation": "根据文章，这本书包含以下所有内容，除了",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Curated from cuisines around the globe, Sheraton has put them together in one large volume, along with details on historic and cultural context, tips on how to prepare or where to try a particular dish, and even several dozen recipes."
          },
          "synonyms": [
            "A “historical background for certain dishes” 同义替换为原文的 “details on historic and cultural context”",
            "B “recommendations on where to find specific foods” 同义替换为原文的 “tips on how to prepare or where to try a particular dish”",
            "D “a small number of full recipes” 同义替换为原文的 “even several dozen recipes”，a small number 对应 several dozen 这一有限数量",
            "C “nutritional information for each food item” 在原文中没有任何对应表达，全文未出现营养或成分信息"
          ],
          "locatingTip": "定位：题干的关键词是 the book includes，对应第 2 段介绍书中收录内容的那一个长并列句，一句即可核对全部四个选项。确定答案技巧：EXCEPT 题的解法是逐个比对、选中原文没有的那一项。原文该句用 along with … and even … 并列列出三项内容：历史与文化背景细节（A）、烹制或在何处品尝的提示（B）、几十份食谱（D）；只有 C 的 nutritional information 在原文找不到出处，故答 C。",
          "analysis": "第 2 段是介绍收录内容的段落：“Curated from cuisines around the globe, Sheraton has put them together in one large volume, along with details on historic and cultural context, tips on how to prepare or where to try a particular dish, and even several dozen recipes.”（这些来自世界各地的美食被汇集在一本大书里，并附有历史与文化背景的细节、如何烹制或在何处品尝某道菜的提示，甚至还有几十份食谱）。逐项核对：A 的“某些菜的历史背景”对应 details on historic and cultural context，historic 即 historical；B 的“去哪里找某种食物的建议”对应 where to try a particular dish；D 的“少量完整食谱”对应 even several dozen recipes，several dozen 大约是二三十到几十份，相对于 1000 个条目而言确实只是 a small number，因此 B、D 均在原文有据。C 说书中包含每样食物的营养信息（nutritional information for each food item），而全文自始至终没有出现 nutrition、calorie、vitamin 之类的字眼，属于无据选项，正是本题要选的答案。做 EXCEPT 题的稳妥办法是把四个选项逐个回原文找对应句，能对应上的立即排除，剩下那一项就是答案；同时要警惕“讲到食物就想到营养”这类常识性脑补。",
          "traps": [
            "A 不选，原文有据：“details on historic and cultural context” 直接对应 historical background for certain dishes。",
            "B 不选，原文有据：“tips on how to prepare or where to try a particular dish” 直接对应 recommendations on where to find specific foods。",
            "D 不选，原文有据：“even several dozen recipes” 对应 a small number of full recipes，several dozen 正是数量不多的意思。",
            "C 为正确选项：nutritional information 在原文中没有任何对应内容，全文从未提及营养成分或营养分析。"
          ]
        },
        {
          "questionId": "q34",
          "questionNumber": 34,
          "stem": "How is the book's structure described?",
          "translation": "文章如何描述这本书的结构？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The book is organized not by country or type of food, but rather by the experience of eating itself."
          },
          "synonyms": [
            "C “It groups foods by the type of eating experience” 同义替换为原文的 “by the experience of eating itself”，group 对应 organize，experience 原词复现",
            "A “organized by country” 与原文的 “not by country” 正相反，恰恰是被否定的方式",
            "B “categorizes foods by their main ingredient” 与原文的 “not by … type of food” 对应，同属被否定的方式"
          ],
          "locatingTip": "定位：题干关键词是 the book's structure 与 organized，第 4 段首句 “The book is organized not by country or type of food, but rather by the experience of eating itself.” 就是直接答案句。确定答案技巧：not … but rather … 结构里，作者强调的是 but rather 之后的内容——by the experience of eating itself（按进食体验本身），与选项 C 的 groups foods by the type of eating experience 完全对应，故答 C。A、B 恰好是原文否定的两种方式，属于“反向选项”陷阱。",
          "analysis": "第 4 段首句：“The book is organized not by country or type of food, but rather by the experience of eating itself.”（这本书不是按国家或食物类型来编排，而是按进食体验本身来组织）。紧随其后的句子给出例证：“Sections guide the reader through 'Street Food & Snacks,' 'Comfort Food,' and 'Sweets & Treats,' among others.”（各章节引导读者依次走进“街头小吃与零嘴”“慰藉食物”“甜点与零食”等板块）。这些章节名都是按“进食场景与体验”划分的类别，而不是国家或食材分类，与首句的 by the experience of eating itself 相互印证。选项 C 把 experience 说成 the type of eating experience、把 organize 说成 group，措辞有改动而含义一致，属于正确的同义改写。A 说按国家编排以方便旅行者，而 by country 正是原文用 not 否定的内容；B 说按主要食材分类，对应原文被否定的 type of food；D 说按字母顺序列出，原文完全未提及这种编排方式。",
          "traps": [
            "A 错误：与原文相反，原文明确说 not by country，A 却说按国家编排，正好落在被否定的那一项上。",
            "B 错误：与原文相反，原文说 not by country or type of food，按食物类型（即主要食材）分类正是被排除的方式。",
            "D 错误：无中生有，全书结构围绕“进食体验”分章，字母表式排列在原文毫无依据。"
          ]
        },
        {
          "questionId": "q35",
          "questionNumber": 35,
          "stem": "What is the author's stated goal for the book?",
          "translation": "作者所说的这本书的目标是什么？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "She emphasizes that the book is a personal, albeit expert, guide rather than a definitive, objective ranking. The goal, she states, is to inspire curiosity and appreciation, not to end debate."
          },
          "synonyms": [
            "C “To inspire curiosity and appreciation for diverse foods” 与原文的 “to inspire curiosity and appreciation” 原词对应，for diverse foods 呼应前文的 culinary diversity",
            "A “an objective and definitive ranking” 与原文的 “rather than a definitive, objective ranking” 正相反，是被否定的说法",
            "B “To settle debates about the best cuisines” 与原文的 “not to end debate” 正相反，也是被否定的说法"
          ],
          "locatingTip": "定位：题干关键词 goal 在原文原词复现，直接搜索 The goal 即落在第 5 段末句 “The goal, she states, is to inspire curiosity and appreciation, not to end debate.”。确定答案技巧：goal 句中 not to end debate 只是附带否定，肯定部分是 to inspire curiosity and appreciation，与选项 C 完全对应，故答 C。选项 A、B 都是把原文被否定的说法拿来当答案（definitive, objective ranking；end debate），属于典型的“否定项冒充正解”陷阱。",
          "analysis": "第 5 段讨论这本书引发的争议，末两句是本题落点：“She emphasizes that the book is a personal, albeit expert, guide rather than a definitive, objective ranking. The goal, she states, is to inspire curiosity and appreciation, not to end debate.”（她强调，这本书是一份个人化的、但称得上专业的指南，而不是一份确定无疑的客观排名。她说，这本书的目标是激发好奇与欣赏，而非终结争论）。句中的 The goal 与题干 stated goal 完全对应，其后的不定式 to inspire curiosity and appreciation 就是作者申明的目标，与选项 C 的 To inspire curiosity and appreciation for diverse foods 一致（for diverse foods 可由前文 culinary diversity 得到支撑）。原文同时用 not to end debate 排除了“终结争论”，用 rather than a definitive, objective ranking 排除了“客观权威排名”，正好对应选项 B 和 A 的错误方向。D 说“为欧洲和北美餐厅做宣传”，是把第 5 段中批评者的指责 bias towards European and North American cuisines 误当作者的目标，属于立场偷换。",
          "traps": [
            "A 错误：与原文相反，原文说这本书是 personal, albeit expert, guide rather than a definitive, objective ranking，明确否认了“客观权威排名”的定位。",
            "B 错误：与原文相反，目标句以 not to end debate 结尾，即作者并不以“终结关于最佳菜系的争论”为目标。",
            "D 错误：把批评者的指责当成了作者的目标，bias towards European and North American cuisines 是他人质疑，Sheraton 只是用 extensive research and personal travels 回应，宣传欧美餐厅从不是她的目标。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 36–40 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 36,
        "end": 40
      },
      "items": [
        {
          "questionId": "q36",
          "questionNumber": 36,
          "stem": "Mimi Sheraton's book has been described as a 36 ________ for anyone who loves food.",
          "translation": "米米·谢拉顿的这本书被形容为给任何热爱美食之人的一张 ________。",
          "answer": "passport",
          "wordClass": "名词（单数，作介词 as 的宾语；空格前有不定冠词 a，其后接介词短语 for anyone who loves food，故填可数名词单数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "Ultimately, 1,000 Foods to Eat Before You Die serves as a passport to gastronomic adventure."
          },
          "synonyms": [
            "“has been described as” 同义替换为原文的 “serves as”，都是“作为、被形容为”的表达",
            "“for anyone who loves food” 与原文的 “to gastronomic adventure” 都说明这张“通行证”面向美食爱好者、通向美食世界",
            "“passport” 在原文中作 serves as 的表语，被题干提取为空格所填的中心名词"
          ],
          "locatingTip": "定位：摘要句的关键词是 described as 与 for anyone who loves food，回原文找对这本书的比喻性定性，落在第 6 段首句 “serves as a passport to gastronomic adventure”。确定答案技巧：serves as 与 described as 同义，其后作表语的名词就是空格所需，即 passport。注意词数限制 NO MORE THAN TWO WORDS，passport 一个词即可，不要填 gastronomic（那是修饰 adventure 的形容词）。",
          "analysis": "摘要以 “Mimi Sheraton's book has been described as a 36 ________ for anyone who loves food.” 开头，其中 has been described as 提示原文应有“把书比作某物”的表语结构。第 6 段首句：“Ultimately, 1,000 Foods to Eat Before You Die serves as a passport to gastronomic adventure.”（归根结底，《死前必吃的 1000 种食物》是一张通往美食冒险的通行证）。serves as 与 described as 同义，a passport 就是空格要填的词；to gastronomic adventure 与摘要后半句的 and embark on a gastronomic adventure 遥相呼应——embark on 意为“踏上（旅程）”，正与 passport（通行证）的隐喻配套，两处线索互相印证。从词性看，空格前有不定冠词 a，后面是介词短语 for anyone who loves food，结构为“a 加名词单数”，故填可数名词单数 passport。另需注意第 3 段出现过 “The ultimate gift for the food lover.”（给美食爱好者的终极礼物），gift 虽然也能与 for the food lover 搭配，但摘要的结构是“被形容为一张 ____ for anyone who loves food”，且第 6 段有 embark on a gastronomic adventure 的呼应，因此应填 passport 而非 gift。",
          "traps": []
        },
        {
          "questionId": "q37",
          "questionNumber": 37,
          "stem": "It is noted for its narrative approach, where each entry is like a mini 37 ________, explaining the cultural significance of a dish.",
          "translation": "它以叙事手法著称，其中每一条目就像一个小小的 ________，解释某道菜的文化意义。",
          "answer": "stories",
          "wordClass": "名词（复数，作介词 like 的宾语、名词短语 a mini 的中心词；答案沿用原文的复数形式 stories，须保留词尾 s，表示每一条目都是一个微型故事）",
          "locating": {
            "paragraph": "4",
            "quote": "Sheraton's entries are more than just lists; they are miniature stories."
          },
          "synonyms": [
            "“each entry is like a mini 37 ________” 同义替换为原文的 “Sheraton's entries are more than just lists; they are miniature stories”，entry 复现，mini 对应 miniature",
            "“is like” 与原文的 “they are” 对应，都是把条目比作某种事物",
            "“narrative approach” 同义替换为原文的 “This narrative approach transforms the book …”，narrative 原词复现"
          ],
          "locatingTip": "定位：摘要句里的 narrative approach 与 entry 提示这句来自讲条目写法的段落，回原文找 entries 及其比喻物，落在第 4 段 “they are miniature stories”。确定答案技巧：题干说 each entry is like a mini ____，原文说 entries … are miniature stories，两句结构完全平行，mini 即 miniature，因此空格填 stories。注意原文用复数（they are miniature stories，主语为复数 entries），故填复数 stories，一个词即在两词限制内。",
          "analysis": "第 4 段在说明书的体例时写道：“Sheraton's entries are more than just lists; they are miniature stories. She explains why a specific cheese from a remote village in Greece is worth seeking out, or how a particular noodle dish embodies the history of trade routes in Southeast Asia. This narrative approach transforms the book from a mere checklist into a compelling read about culture, history, and human connection through food.”（Sheraton 的条目远不只是清单，它们是微型的叙事作品。她会解释为什么希腊偏远村庄的某种奶酪值得专程寻找，或者某道面条如何承载了东南亚贸易路线的历史。这种叙事手法把书从单纯的清单变成了一本关于文化、历史以及通过食物建立的人际连接的引人入胜之作）。摘要句 “each entry is like a mini 37 ________” 是对 “Sheraton's entries are more than just lists; they are miniature stories” 的改写：entry 对应 entries，mini 对应 miniature，空格应填 stories。其后摘要写 explaining the cultural significance of a dish，正对应原文 She explains why … / how … 的举例说明；而 narrative approach 在原文中也是原词出现，多处线索相互印证。从词性看，miniature 在此作形容词修饰名词 stories，且原文主语为复数 entries，故答案写复数 stories。",
          "traps": []
        },
        {
          "questionId": "q38",
          "questionNumber": 38,
          "stem": "While the book has faced some 38 ________, particularly over the inclusion of common items and a potential regional bias",
          "translation": "虽然这本书遭遇了一些 ________，尤其是在收录常见食材与可能存在的地域偏见方面",
          "answer": "controversies",
          "wordClass": "名词（复数，作及物动词 faced 的宾语；受 some 修饰，须用可数名词复数形式 controversies）",
          "locating": {
            "paragraph": "5",
            "quote": "Of course, a list of 1,000 items is bound to include some controversies."
          },
          "synonyms": [
            "“has faced some 38 ________” 同义替换为原文的 “is bound to include some controversies”，face 对应 include，some 原词复现",
            "“the inclusion of common items” 同义替换为原文的 “the inclusion of ubiquitous items like the banana”，common 对应 ubiquitous",
            "“a potential regional bias” 同义替换为原文的 “a possible bias towards European and North American cuisines”，potential 对应 possible"
          ],
          "locatingTip": "定位：摘要句的两个线索 inclusion of common items 与 regional bias 都出现在第 5 段，回原文找表示“争议”的名词即可，即首句的 some controversies。确定答案技巧：空格前有 some，后面用 particularly over … 补充说明争议的内容，与原文 “is bound to include some controversies” 结构一致，故填 controversies（复数）。不要填 critics（批评者），因为题干的动词是 has faced some（遭遇了某些……），宾语应是“争议”本身而不是“人”。",
          "analysis": "第 5 段首句：“Of course, a list of 1,000 items is bound to include some controversies.”（当然，一份 1000 项的清单难免会引起一些争议）。随后两句具体说明争议内容：有人质疑把香蕉这类随处可见的食物收进书里（Some critics question the inclusion of ubiquitous items like the banana, arguing that it diminishes the exclusivity of the list），也有人指出可能存在偏向欧美菜系的倾向（Others have noted a possible bias towards European and North American cuisines）。摘要句 “While the book has faced some 38 ________, particularly over the inclusion of common items and a potential regional bias” 正是这一段的高度概括：has faced 对应 is bound to include，some 原词保留，inclusion of common items 对应 inclusion of ubiquitous items，a potential regional bias 对应 a possible bias towards European and North American cuisines。故空格填 controversies，词性为可数名词复数，与 some 搭配。作答时注意与下一题分工：38 问“这本书遭遇了什么”，39 问“她的依据是什么”，两空各取本段不同部分的信息。",
          "traps": []
        },
        {
          "questionId": "q39",
          "questionNumber": 39,
          "stem": "Sheraton clarifies that the selections are based on her own 39 ________ and expert opinion.",
          "translation": "谢拉顿澄清说，这些选择依据的是她本人的 ________ 与专业意见。",
          "answer": "personal travels",
          "wordClass": "名词短语（两个词，作介词 on 的宾语；personal 为形容词修饰名词 travels，受 her own 限定，不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "though Sheraton defends her selections by pointing to the extensive research and personal travels that informed her choices"
          },
          "synonyms": [
            "“the selections are based on her own 39 ________” 同义替换为原文的 “defends her selections by pointing to … personal travels that informed her choices”，based on 对应 informed",
            "“her own” 同义替换为原文的 “personal”，两者都强调“她个人的”",
            "“expert opinion” 对应原文的 “a personal, albeit expert, guide”，expert 原词复现"
          ],
          "locatingTip": "定位：题干用了 her own 与 expert opinion 两个提示词，回第 5 段找 Sheraton 为自己选择辩护的那一句，即 “though Sheraton defends her selections by pointing to the extensive research and personal travels that informed her choices”。确定答案技巧：该句给出两条依据——extensive research（广泛研究）与 personal travels（亲身旅行）。摘要里 expert opinion 对应原文的 extensive research 与 expert, guide，剩下的 her own 加空格就落在 personal travels 上，故填 personal travels（两个词，正好符合 NO MORE THAN TWO WORDS）。注意必须带上 personal，因为原文的限定语就是它，且与题干的 her own 形成对照；travels 为复数，不要写成 travel。",
          "analysis": "第 5 段讲争议与作者回应：“Others have noted a possible bias towards European and North American cuisines, though Sheraton defends her selections by pointing to the extensive research and personal travels that informed her choices. She emphasizes that the book is a personal, albeit expert, guide rather than a definitive, objective ranking.”（也有人指出可能存在偏向欧洲和北美菜系的倾向，不过 Sheraton 为自己所做的选择辩护，指出她的选择得益于广泛的研究与亲身旅行。她强调，这本书是一份个人化的、但称得上专业的指南，而不是一份确定的客观排名）。摘要句 “Sheraton clarifies that the selections are based on her own 39 ________ and expert opinion” 是对这两句的合并改写：clarifies 对应 She emphasizes，expert opinion 对应 expert（以及专家的 extensive research），而空格部分对应 personal travels——题干的 her own 正是原文 personal 的替换。所以答案填 personal travels，两词正好在 NO MORE THAN TWO WORDS 的范围内。填答要点：一是必须带上 personal 一词，它与题干的 her own 呼应，只写 travels 会丢失限定信息；二是 travels 用复数，与原文一致。",
          "traps": []
        },
        {
          "questionId": "q40",
          "questionNumber": 40,
          "stem": "The ultimate aim of the book is to encourage readers to expand their 40 ________ and embark on a gastronomic adventure.",
          "translation": "这本书的终极目标是鼓励读者拓展自己的 ________，并踏上美食冒险之旅。",
          "answer": "comfort zone",
          "wordClass": "名词短语（两个词，作动词 expand 的宾语；comfort 作名词修饰 zone，构成复合名词，受 their 限定，不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "It challenges the reader to look beyond their culinary comfort zone"
          },
          "synonyms": [
            "“expand their 40 ________” 同义替换为原文的 “look beyond their culinary comfort zone”，expand 对应 look beyond",
            "“embark on a gastronomic adventure” 同义替换为原文首句的 “serves as a passport to gastronomic adventure”，embark on 正是 passport 隐喻的延伸",
            "“The ultimate aim of the book” 同义替换为原文的 “Ultimately, 1,000 Foods to Eat Before You Die …”，ultimate aim 与 Ultimately 同源"
          ],
          "locatingTip": "定位：摘要句里的 gastronomic adventure 是第 6 段的标志性表达，回该段即可找到 “look beyond their culinary comfort zone”，即答案句。确定答案技巧：题干 expand their 与原文 look beyond their culinary comfort zone 对应，expand 就是“向外扩展、越过”，宾语即 culinary comfort zone；由于空格前已有 their 提供限定，答案写 comfort zone 两个词即符合 NO MORE THAN TWO WORDS。",
          "analysis": "第 6 段开头两句：“Ultimately, 1,000 Foods to Eat Before You Die serves as a passport to gastronomic adventure. It challenges the reader to look beyond their culinary comfort zone, whether that means seeking out a rare ingredient, attempting a complex recipe at home, or simply ordering something unfamiliar at a local restaurant.”（归根结底，《死前必吃的 1000 种食物》是一张通往美食冒险的通行证。它促使读者走出自己的饮食舒适区，无论是寻找稀有食材、在家尝试复杂食谱，还是在本地餐馆点一道不熟悉的菜）。摘要句 “The ultimate aim of the book is to encourage readers to expand their 40 ________ and embark on a gastronomic adventure” 是对这两句的合并改写：ultimate aim 对应首词 Ultimately，embark on a gastronomic adventure 取自首句的 gastronomic adventure（embark on 意为“踏上”，与 passport 的隐喻配套），而 expand their 对应 look beyond their culinary comfort zone，因此空格填 comfort zone。从词性看，their 是形容词性物主代词，其后需接名词短语；comfort zone 由名词 comfort 作定语修饰 zone 构成，保持原形。注意答案写两个词 comfort zone，不要写 culinary comfort zone（三个词，超出字数限制）。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
