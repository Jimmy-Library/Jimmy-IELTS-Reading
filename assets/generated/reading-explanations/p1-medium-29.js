(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-29", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-29",
  "meta": {
    "examId": "p1-medium-29",
    "title": "The extinction of the cave bear 洞熊的灭绝",
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
          "stem": "Bocherens' findings on cave bears involve measuring the length of complete bones.",
          "translation": "Bocherens 关于洞熊的研究发现包含测量完整骨骼的长度。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "He dissolves 30,000-year-old animal bones in hydrochloric acid, which is strong enough to burn through metal, soaks the bone solution in lye, cooks it at about 200 degrees Fahrenheit and freeze-dries it, until what's left is a speck of powder weighing less than one one-hundredth of an ounce."
          },
          "synonyms": [
            "“Bocherens' findings on cave bears” 对应原文第 1 段对他研究洞熊方法的整段描写，后文还有 “the biography of a cave bear as told through its chemical components” 点明研究对象就是洞熊",
            "“involve measuring the length of complete bones” 在原文中没有任何对应：原文的实验流程是 dissolves（用盐酸溶解）、soaks（碱液浸泡）、cooks（加热到约 200 华氏度）、freeze-dries（冷冻干燥），最后只剩 “a speck of powder weighing less than one one-hundredth of an ounce”（不到百分之一盎司的一小撮粉末）",
            "“measuring the length of complete bones” 与原文的 “dissolves 30,000-year-old animal bones”，“until what's left is a speck of powder” 方向相反：原文要把整块骨头分解成粉末，题干却说要在完整的骨头上量长度"
          ],
          "locatingTip": "定位：题干主语是人名 Bocherens，这个姓氏在第 1 段里反复出现，而第 1 段整段都在介绍他的研究方法，扫读时见到 Bocherens 就停在第 1 段第 2 句精读即可。确定答案技巧：题干出现具体动作描述（measuring the length of complete bones）时，必须把原文的实验步骤逐项对照。原文的四步操作全部是化学与物理的分解处理，最终产物是粉末，全程没有任何“测量长度”的动作，也没有要求骨头保持完整，题干的动作描述与原文事实相反，因此判 FALSE。看到 involve（包含、涉及）这类笼统动词时不要想当然地把整段研究都算进去，要核对具体动词是否吻合。",
          "analysis": "第 1 段是人物段，核心是介绍 Bocherens 用来研究洞熊的“残忍”方法。第 2 句写得很具体：“He dissolves 30,000-year-old animal bones in hydrochloric acid, which is strong enough to burn through metal, soaks the bone solution in lye, cooks it at about 200 degrees Fahrenheit and freeze-dries it, until what's left is a speck of powder weighing less than one one-hundredth of an ounce.”（他把三万年前的动物骨骼放进足以腐蚀金属的盐酸里溶解，把骨液浸泡在碱液中，加热到约 200 华氏度并冷冻干燥，最后只剩不到百分之一盎司的一小撮粉末）。紧接着一句 “The method may be harsh, but the yield is precious – the biography of a cave bear as told through its chemical components.”（方法虽粗暴，收获却宝贵——一部通过化学成分讲述的洞熊传记）交代了研究目的：靠化学成分同位素溯源，而不是看骨头的外形尺寸。题干却说他的研究发现 “involve measuring the length of complete bones”（涉及测量完整骨骼的长度），这句话在原文里找不到任何落脚点：原文的整个思路是把骨头“化掉”去读化学成分，完整骨头的长度恰恰是这套方法不关心的信息。动作性质完全不同，属于事实冲突，故答案是 FALSE。做题提醒：本题的干扰点在于原文确实提到 “animal bones” 与一些数字（30,000-year-old、200 degrees Fahrenheit、one one-hundredth of an ounce），容易让人误以为在讲测量，但那些数字修饰的是处理条件与最终重量，不是骨骼长度。",
          "traps": [
            "为什么不是 TRUE：原文交代的实验动作是溶解、浸泡、加热、冷冻干燥，最终得到的是粉末（a speck of powder），没有一处提到测量骨骼长度，也没有出现 measure、length 之类的词。题干的动作描述在原文中无据可循，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对 Bocherens 的研究方法交代得非常完整，属于“已给出明确且相反信息”的情况——他把骨头分解成粉末做化学分析，与“在完整骨骼上量长度”是两种互相排斥的做法。存在明确矛盾时按规则判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Bocherens was the first person to conduct analytical research on cave bears in a laboratory.",
          "translation": "Bocherens 是第一个在实验室里对洞熊进行分析性研究的人。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Bocherens is at the forefront of research on the bear, a European species that died out 25,000 years ago."
          },
          "synonyms": [
            "“research on cave bears” 同义替换为原文的 “research on the bear”，其中 the bear 回指同段上文刚刚提到的 cave bear",
            "“was the first person to conduct” 在原文中找不到对应：原文只说他是 “is at the forefront of research”（处于研究最前沿），讲的是领先地位与当下的研究水平，而不是时间上的“第一人”",
            "“in a laboratory” 在原文中没有明确对应：原文只提到 test tubes、hydrochloric acid、freeze-dries 等实验手段，从未说明他是第一个在实验室做这类分析的人，也没有交代此前有没有别人做过"
          ],
          "locatingTip": "定位：人名 Bocherens 是最好用的定位词，全文第 1 段密集出现；本句 “Bocherens is at the forefront of research on the bear” 是全文唯一一句对他学术地位的评价，读到这里就可以停下判断。确定答案技巧：题干里的 first person（第一人）属于“唯一性 + 最高级”表述，是 NOT GIVEN 的高发点。原文用的是 at the forefront of research（处在前沿），强调领先程度和当下地位，完全没有涉及“谁最早开始做实验室分析”“他之前是否有人做过”这类首创性问题。原文给出的是一个维度的信息（领先），题干问的是另一个维度（首创），二者不能互换，属于信息缺失，因此判 NOT GIVEN。",
          "analysis": "第 1 段第 4 句：“Bocherens is at the forefront of research on the bear, a European species that died out 25,000 years ago.”（Bocherens 处于洞熊研究的最前沿；洞熊是一种欧洲物种，已于两万五千年前灭绝）。句中关于他的信息有两层：一是他的研究领域（洞熊），二是他的地位（at the forefront，处于最前沿）。at the forefront 描述的是一种领先状态，可以指最领先、最活跃、最有代表性，但它并不等于“史上第一个做这件事的人”，题干却把它读成 “the first person to conduct analytical research on cave bears in a laboratory”（第一个在实验室做洞熊分析研究的人）。原文既没有比较“他之前有没有人做过”，也没有出现 first、pioneer、the earliest 之类的措辞，第 1 段其余部分（盐酸溶解、碱液浸泡、冷冻干燥）只说明他做了什么，不说明他是第一人。按判断题规则，原文未提供某项信息即 NOT GIVEN：既没有肯定他是第一人，也没有否认别人更早，因此不能选 TRUE 也不能选 FALSE。本题的设计意图就是利用“最前沿”与“第一名”的语义差制造 TRUE 的错觉。",
          "traps": [
            "为什么不是 TRUE：原文的 at the forefront of research 讲的是他处在研究的最前沿（领先地位），而不是“第一个（the first person）”。原文没有出现任何首创性表述，也没有说明他是实验室分析洞熊的开创者，把“领先”读成“第一”属于超出原文的推理。",
            "为什么不是 FALSE：FALSE 要求原文给出相反信息，即必须说“他不是第一个”或“在他之前已经有人做过实验室分析”，而原文对此毫无交代，只是没说。没有相反信息时不能判 FALSE。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Cave bears have been extinct for 25,000 years.",
          "translation": "洞熊已经灭绝两万五千年了。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "a European species that died out 25,000 years ago"
          },
          "synonyms": [
            "“have been extinct for 25,000 years” 同义替换为原文的 “died out 25,000 years ago”：extinct 对应 died out，现在完成时加时间段的表述与一般过去时加时间点的表述在时间上完全等价",
            "“Cave bears” 对应原文的 “a European species”，其先行词就是同句前面的 the bear，即 cave bear"
          ],
          "locatingTip": "定位：数字 25,000 是全文最醒目的定位词之一，只出现在第 1 段 “died out 25,000 years ago”，扫读时盯住数字即可一步命中。确定答案技巧：本题考的是时间表达式的转换。题干用现在完成时 “have been extinct for 25,000 years”（已经灭绝两万五千年），原文用一般过去时 “died out 25,000 years ago”（两万五千年前灭绝），一个从“距今多久”切入，一个从“发生在何时”切入，但指向同一时间点，灭绝时长也同为两万五千年，信息方向一致，故判 TRUE。做题时要把正文里所有年代画出来对比：25,000（洞熊灭绝）、100,000 年以上（与尼安德特人共处）、40,000（现代人到达欧洲）、32,000（肖维洞壁画）、29,000（猎熊证据）、30,000（冰期开始）、28,000（新DNA型熊群到来）、50,000（种群开始衰退），避免张冠李戴。",
          "analysis": "第 1 段第 4 句：“Bocherens is at the forefront of research on the bear, a European species that died out 25,000 years ago.”（Bocherens 处于洞熊研究的最前沿；洞熊是一种欧洲物种，已于两万五千年前灭绝）。这里 “died out 25,000 years ago” 直接给出两个关键信息：灭绝（died out）与时间（25,000 年前）。题干写成 “Cave bears have been extinct for 25,000 years”，把原文的事件时间点改写为持续时长，用现在完成时表示“灭绝的状态已持续两万五千年”。这两种说法在逻辑上等价：如果灭绝发生在两万五千年前，那么至今确已灭绝两万五千年。同义替换链条是：cave bears 对应 a European species（the bear 的同位语），extinct 对应 died out，25,000 years 完全一致。原文没有出现任何与 25,000 年相冲突的年代，因此答案是 TRUE。注意本篇其他段落给出的 50,000 年是“种群开始缓慢衰退”的时间，不是灭绝时间，做题时不要因为看到另一个更大的年代就误判 FALSE。",
          "traps": [
            "为什么不是 FALSE：原文明确写 “died out 25,000 years ago”，与题干“已灭绝两万五千年”完全一致，不存在任何冲突信息。全文其他年代分别对应共处、到达、作画、狩猎、冰期、基因变化与种群衰退，都不是洞熊的灭绝时间。",
            "为什么不是 NOT GIVEN：原文给出了明确的灭绝时间（25,000 years ago），信息完整且与题干吻合，不属于未提及，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "At one time, people thought the excavated remains of bears were those of dragons.",
          "translation": "曾经，人们以为发掘出来的熊的遗骸是龙的遗骸。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "People have been excavating cave bear remains for hundreds of years— in the Middle Ages, the massive skulls were attributed to dragons"
          },
          "synonyms": [
            "“At one time” 同义替换为原文的 “in the Middle Ages”（中世纪那一时期）",
            "“the excavated remains of bears” 同义替换为原文的 “the massive skulls”，并与同句前面的 “excavating cave bear remains” 直接呼应",
            "“people thought ... were those of dragons” 同义替换为原文的 “were attributed to dragons”，attributed to 即“被归因于、被认为是……的”",
            "“excavated” 对应原文的 “have been excavating cave bear remains for hundreds of years”，提供挖掘这一动作背景"
          ],
          "locatingTip": "定位：dragons 是全文的独特词，只出现在第 1 段，看到 dragons 就可以直接锁定答案句。确定答案技巧：本题是同义改写题，关键是把三个改写点一一对上——At one time 对应 in the Middle Ages，the excavated remains of bears 对应 excavating cave bear remains 与 the massive skulls，people thought 对应 were attributed to（be attributed to 是“被认为是……的作品或归属”的固定表达，在这里就是当时人的误认）。三处改写全部吻合，原文说中世纪的巨大熊头骨“被归给了龙”，与题干“人们曾以为熊的遗骸是龙的”意思一致，故判 TRUE。注意 attributed to 这个被动结构容易被漏看，它正是“人们以为是”的同义表达。",
          "analysis": "第 1 段第 5 句：“People have been excavating cave bear remains for hundreds of years— in the Middle Ages, the massive skulls were attributed to dragons — but the past decade has seen a burst of discoveries about how the bears lived and why they became extinct.”（人们挖掘洞熊遗骸已有数百年之久——中世纪时，那些巨大的头骨被归给了龙——但过去十年间，关于这些熊如何生活、为何灭绝的发现层出不穷）。破折号中间插入的部分正是本题依据：in the Middle Ages（特定历史时期，对应题干的 At one time），the massive skulls（前面已说明是 cave bear remains，对应 the excavated remains of bears），were attributed to dragons（被归因于龙，对应 people thought ... were those of dragons）。三处对应完整，原文清楚记载了古人把洞熊头骨误认成龙的遗骸这一史实，题干只是把被动结构改成主动叙述，信息方向完全一致，所以答案是 TRUE。做题提示：be attributed to 与 be thought to be 属于同一类“认为、归因”表达，雅思常在这类动词上做同义替换，平时要把 attribute to、be credited with、be regarded as 等词组一起记牢。",
          "traps": [
            "为什么不是 FALSE：原文明确说中世纪的巨大头骨被归给了龙（were attributed to dragons），也就是当时的人把它们当成了龙的遗骸，与题干叙述完全一致，没有任何矛盾点。",
            "为什么不是 NOT GIVEN：原文不仅提到 dragon 这个词，还给出了时间（in the Middle Ages）、对象（the massive skulls）和动作（were attributed to），信息非常完整，不是未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Modern grizzly bears are similar in size to cave bears.",
          "translation": "现代灰熊的体型与洞熊相近。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Males weighed up to 1,500 pounds, 50 per cent more than the largest modern grizzly bears."
          },
          "synonyms": [
            "“Modern grizzly bears” 与原文的 “the largest modern grizzly bears” 对应，原文还特意用最高级 the largest 来限定比较对象",
            "“similar in size” 与原文的 “50 per cent more than” 相互冲突：原文给出的是“多出 50%”的明确差距，而不是“相近”",
            "“cave bears” 在原文中以 “Males” 的形式出现，回指同段首句列举的 cave bears (Ursus spelaeus)"
          ],
          "locatingTip": "定位：grizzly 是全篇独一无二的词，配合数字 1,500 pounds 与 50 per cent，可直接跳到第 2 段第 2 句。确定答案技巧：判断题里出现 similar（相似）、the same as（相同）这类比较词时，必须回原文核对比较结果到底是“相等”还是“有差距”。原文说雄性洞熊体重最多达 1,500 磅，“比最大的现代灰熊还重 50%”，即两者体重存在显著差距；题干却写成 “similar in size”（体型相近），与 “50 per cent more” 直接对立，因此判 FALSE。还要注意原文比较的基准是“最大的现代灰熊（the largest modern grizzly bears）”，连最大的灰熊都轻 50%，说明差距只会更大，绝不会“相近”。",
          "analysis": "第 2 段讲洞熊的体型与地位：“Along with mammoths, lions and woolly rhinos, cave bears (Ursus spelaeus) were once among Europe's most impressive creatures. Males weighed up to 1,500 pounds, 50 per cent more than the largest modern grizzly bears.”（洞熊与猛犸象、狮子、披毛犀一样，曾是欧洲最令人瞩目的动物之一。雄性体重可达 1,500 磅，比最大的现代灰熊还重 50%）。句中的 50 per cent more than 是一个明确的比较级结构，表示两者体重相差一半，而不是“差不多”。题干把这一关系改写成 “Modern grizzly bears are similar in size to cave bears”（现代灰熊体型与洞熊相近），similar 表示接近甚至相当，与“多出 50%”的事实冲突，因此答案是 FALSE。本题还埋了一个方向性陷阱：原文主语是洞熊（比灰熊重），题干把主语换成现代灰熊（与洞熊相近），表面看是换了比较对象，实质仍是在问两者的体型关系；只要抓住 50 per cent more 这个量化差距，就能确认不是“相近”。另外，同段下一句还说洞熊头更宽、肩和前肢更强壮，都是在强调洞熊比现代熊更壮硕，与“相近”的结论进一步相悖。",
          "traps": [
            "为什么不是 TRUE：原文用 “50 per cent more than the largest modern grizzly bears” 明确给出两种动物之间的体重差距（洞熊体重多出一半），说明两者体型差别很大；题干说 “similar in size”，与原文的量化差距相冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不但比较了两者的体重，还给出了具体数字（1,500 pounds 与 50 per cent），属于已经明确交代且与题干相反的信息，不是没有提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Neanderthals understood cave bear behaviour better than modern humans did.",
          "translation": "尼安德特人对洞熊行为的了解胜过现代人。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Initially cave bears shared the continent of Europe, more than 100,000 years ago, with Neanderthals, a primitive species of humans."
          },
          "synonyms": [
            "“Neanderthals” 在原文中原词复现，并带有同位语解释 “a primitive species of humans”",
            "“understood cave bear behaviour better than modern humans did” 在原文中没有任何对应：原文只交代了尼安德特人与洞熊共处的时间（more than 100,000 years ago），以及现代人到达欧洲的时间（about 40,000 years ago），从未比较过两者对洞熊行为的了解程度",
            "“cave bear behaviour” 在原文中没有任何描述：原文提到的是 “Were humans prey for the bears, or predators? Were bears the object of worship or fear?”（人熊关系是谜），属于研究者至今未解的疑问，而不是任何一族人对洞熊的了解"
          ],
          "locatingTip": "定位：专有名词 Neanderthals 出现在第 3 段首句（第 9 段再次出现），本句是它与洞熊同处欧洲的关键信息点，扫到该词即可停读。确定答案技巧：题干是典型的比较级判断题——A 比 B 更了解 X。原文只给出时间关系：洞熊十多万年前就与尼安德特人共享欧洲大陆，现代人约四万年前才到达并很快注意到这些熊。至于双方对洞熊行为了解多少、谁了解得更多，原文一个字都没提，甚至第 2 段末尾还在说人熊关系至今是谜（has been mysterious）。比较性结论必须有原文的比较句支撑，否则一律判 NOT GIVEN。",
          "analysis": "第 3 段首句：“Initially cave bears shared the continent of Europe, more than 100,000 years ago, with Neanderthals, a primitive species of humans. Modern humans arrived in Europe about 40,000 years ago, and were soon aware of the bears.”（最初，在十多万年前，洞熊与尼安德特人——一种原始人类——共同生活在欧洲大陆上。现代人约在四万年前到达欧洲，并很快注意到了这些熊）。这两句提供的只是时间顺序与共处事实：尼安德特人在场更早，现代人到得更晚。题干却把它总结成 “Neanderthals understood cave bear behaviour better than modern humans did”（尼安德特人对洞熊行为的了解胜过现代人）。“了解得更多”是一个关于认知与知识程度的比较，原文既没有出现 understand、knowledge、know 这类词，也没有任何比较两族人对洞熊熟悉程度的句子。文中对人的描写集中在艺术表现（画洞熊、雕洞熊）、宗教信仰猜测（头骨被刻意摆放）与狩猎证据上，都与人“了解洞熊行为”无关。既然原文对该比较毫无交代，既不能证实也不能证伪，只能判 NOT GIVEN。做题提醒：遇到 “A ... better than B” 这种比较级题干，第一步不是找 A 或 B，而是先找原文有没有比较结构；没有比较结构，答案基本落在 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说尼安德特人比现代人更早与洞熊共处（100,000 多年前对 40,000 年前），从未评价过他们对洞熊行为的了解程度。共处时间更早不等于更了解，把时间关系推成认知程度属于超出原文的推理。",
            "为什么不是 FALSE：FALSE 要求原文有相反信息，例如“现代人更了解洞熊”或“尼安德特人并不了解洞熊”。原文对此完全没有交代，仅仅是没说，所以也不能判 FALSE。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Over a hundred 7 ________ of cave bears, together with paw prints, were found on the floor of the cave.",
          "translation": "洞窟地面上发现了上百具洞熊的 ________，此外还有爪印。",
          "answer": "skeletons",
          "wordClass": "名词（复数；空格前有数量短语 Over a hundred，谓语为复数 were found，故必须填复数形式 skeletons）",
          "locating": {
            "paragraph": "3",
            "quote": "The painters weren't the cave's only occupants: the floor is covered with 150 cave bear skeletons, and its soft clay still holds paw prints."
          },
          "synonyms": [
            "“Over a hundred” 同义替换为原文的具体数字 “150”",
            "“found on the floor of the cave” 同义替换为原文的 “the floor is covered with”",
            "“together with paw prints” 同义替换为原文的 “and its soft clay still holds paw prints”，把爪印与骨架并列表述"
          ],
          "locatingTip": "定位：先看笔记的小标题 “Evidence from the Chauvet cave in France”，这是段落级定位词；围绕它的内容集中在第 3 段后半部分，找与洞窟地面、爪印有关的句子即可。确定答案技巧：空格要求的是“上百个某物”，原文对应处写 “the floor is covered with 150 cave bear skeletons”（地面上覆盖着 150 具洞熊骨架），150 即 over a hundred，skeletons 就是被覆盖在洞窟地面上的东西；紧接着的 “and its soft clay still holds paw prints” 正好对应笔记里的 together with paw prints，两处并列确认答案位置。填空时注意语法：空格前的 Over a hundred 是复数数量短语，谓语又是复数 were found，因此必须写复数 skeletons，不能写 skeleton。词数限制为 ONE WORD ONLY。",
          "analysis": "第 3 段讲肖维洞（Chauvet cave）的壁画与洞中遗存：“The painters weren't the cave's only occupants: the floor is covered with 150 cave bear skeletons, and its soft clay still holds paw prints.”（作画者并不是这个洞穴唯一的住户：地面上覆盖着 150 具洞熊骨架，柔软的黏土上至今留有爪印）。笔记条目 “Over a hundred 7 ________ of cave bears, together with paw prints, were found on the floor of the cave” 用 Over a hundred 概括数字 150，用 on the floor of the cave 概括 the floor is covered with，用 together with paw prints 概括 and its soft clay still holds paw prints。逐项对应之后，被“发现于洞窟地面”的东西就是 skeletons（骨架），答案是 skeletons。词性上，skeletons 是可数名词的复数形式，既与 Over a hundred 的数量一致，也与后面 were found 的复数谓语一致；其中 of cave bears 是后置定语，说明骨架属于洞熊。若填 skeleton，则数量与谓语都无法解释，会因语法不符失分。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "The 8 ________ of a cave bear was found in a prominent position in the cave.",
          "translation": "一个洞熊的 ________ 被发现在洞中一个显眼的位置。",
          "answer": "skull",
          "wordClass": "名词（单数；空格前有定冠词 The、后有 of a cave bear 限定，谓语 was found 为单数，故填单数名词）",
          "locating": {
            "paragraph": "3",
            "quote": "Most dramatically, a cave bear skull was perched on a stone slab in the center of one chamber, placed deliberately by some long-gone cave inhabitant."
          },
          "synonyms": [
            "“The ... of a cave bear” 与原文的 “a cave bear skull” 结构互换：原文用名词前置修饰，笔记改成 of 结构",
            "“in a prominent position” 同义替换为原文的 “Most dramatically”、“in the center of one chamber” 以及 “placed deliberately”（被刻意摆放，可见位置醒目）",
            "“was found” 同义替换为原文的 “was perched on a stone slab”（被安放在一块石板上）"
          ],
          "locatingTip": "定位：承接上一题，仍在第 3 段末尾，寻找与“显眼位置的洞熊部位”有关的内容，提示词是 Most dramatically（最引人注目的）。确定答案技巧：笔记说“洞熊的某个部位被放在洞中显眼位置”，对应原文 “Most dramatically, a cave bear skull was perched on a stone slab in the center of one chamber, placed deliberately by some long-gone cave inhabitant.”（最引人注目的是，一个洞熊头骨被安放在一个洞室中央的石板上，是某个早已逝去的洞穴居民刻意摆上去的）。其中 Most dramatically 与 placed deliberately 共同对应题干的 in a prominent position，perched on a stone slab 对应 was found，被摆放的物件就是 a cave bear skull，故答案填 skull。语法上，题干用了 The ... of a cave bear ... was found 的单数结构，必须填单数名词 skull，不能写复数。",
          "analysis": "紧接 q7 的同一段落末句：“Most dramatically, a cave bear skull was perched on a stone slab in the center of one chamber, placed deliberately by some long-gone cave inhabitant.”（最引人注目的是，一个洞熊头骨被安放在一个洞室中央的石板上，是某个早已消逝的洞穴居民刻意摆放的）。笔记条目 “The 8 ________ of a cave bear was found in a prominent position in the cave” 与这句话逐点对应：The ... of a cave bear 对应 a cave bear skull 的所属关系，in a prominent position 对应 Most dramatically 与 in the center of one chamber（居中、被刻意摆放，自然是显眼位置），was found 对应 was perched on a stone slab。因此空格所填为 skull（头骨）。定位时有一个容易混的干扰句：“the massive skulls were attributed to dragons” 出自第 1 段，讲的是中世纪的误认；本段的 skull 则是被刻意摆放在洞室中央的那一个。两处虽然都是 skull，但所属位置不同，笔记明确写了“在洞中显眼位置”，因此依据必须落在第 3 段末句。词形上，skull 在此为单数可数名词，符合 The ... of a cave bear 与 was found 的单数搭配。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Bones and tools found in the cave indicate it provided 9 ________ for both bears and humans.",
          "translation": "洞中发现的骨骼和工具表明，它曾为熊和人类都提供了 ________。",
          "answer": "shelter",
          "wordClass": "名词（不可数；作 provided 的宾语，其后由 for both bears and humans 补充受益对象，保持不可数形式 shelter，不加复数、不加冠词）",
          "locating": {
            "paragraph": "4",
            "quote": "Long ago, as shown by the bones and tools that archaeologists have found, cave bears and human beings sought shelter here from winter weather."
          },
          "synonyms": [
            "“Bones and tools found in the cave indicate” 同义替换为原文的 “as shown by the bones and tools that archaeologists have found”",
            "“it provided shelter” 同义替换为原文的 “sought shelter here”，主语与宾语的角色互换，落脚点仍是同一个名词 shelter",
            "“for both bears and humans” 同义替换为原文的 “cave bears and human beings”，强调两类使用者共享这一功能"
          ],
          "locatingTip": "定位：笔记小标题 “Evidence from the Hohle Fels cave in the Swabian Jura, Germany” 指向第 4 段，该段讲 Swabian Jura 高原与 Hohle Fels 洞；段末的 “the bones and tools” 与题干开头完全对应，一步锁定。确定答案技巧：题干说洞中的骨骼和工具“表明”（indicate）了某种功能，原文的对应结构是 as shown by the bones and tools that archaeologists have found（正如考古学家发现的骨骼和工具所显示的），两者同义；接着看这两类遗存显示了什么——cave bears and human beings sought shelter here from winter weather，即熊和人类都在此躲避冬日天气，“seeking shelter”所对应的名词 shelter 就是要填的词。语法上，provided 后接宾语，shelter 在此为不可数名词，不加 the、不变复数，符合 ONE WORD ONLY。",
          "analysis": "第 4 段交代德国西南部 Swabian Jura 高原上的 Hohle Fels 洞，段末句是本题依据：“Long ago, as shown by the bones and tools that archaeologists have found, cave bears and human beings sought shelter here from winter weather.”（很久以前，正如考古学家所发现的骨骼和工具所显示的那样，洞熊和人类都曾在此躲避冬天的恶劣天气）。笔记条目 “Bones and tools found in the cave indicate it provided 9 ________ for both bears and humans” 与之对应：Bones and tools found in the cave 对应 the bones and tools that archaeologists have found，indicate 对应 as shown by（由……表明），for both bears and humans 对应 cave bears and human beings 两者并列，被“提供”的东西则是 sought shelter 中的 shelter（庇护所、躲避处）。原文说的是“寻找庇护以期避冬”，笔记用 provided shelter（提供了庇护）从洞穴的角度重新表述，语义等价。词性上，shelter 作“庇护、藏身之处”解时通常不可数，因此只写 shelter 一个词，不加冠词或复数；同段出现的 winter weather 是躲避的对象，不是被提供的东西，不要误填 weather。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Isotopes from the bones indicate that 10 ________ were the cave bears' preferred food.",
          "translation": "来自骨骼的同位素表明，________ 是洞熊偏爱的食物。",
          "answer": "plants",
          "wordClass": "名词（复数；从句谓语为 were，且与 the cave bears' preferred food 构成主系表关系，主语须为复数名词）",
          "locating": {
            "paragraph": "7",
            "quote": "After studying hundreds of bones from dozens of sites in Europe, Bocherens has found that cave bears ate mainly plants."
          },
          "synonyms": [
            "“Isotopes from the bones indicate” 同义替换为原文的 “Running his white powder through a mass spectrometer, he identifies different isotopes ... that reflect what the bears were eating”",
            "“preferred food” 同义替换为原文的 “ate mainly”（主要吃……），主要食物即偏爱的食物",
            "“were the cave bears' ... food” 与原文的 “cave bears ate” 主宾结构互换，原文的宾语在笔记中升为主语"
          ],
          "locatingTip": "定位：笔记小标题 “Hervé Bocherens' findings” 把人名 Bocherens 作为段落级定位词，他的同位素研究集中在第 7 段；再用关键词 isotopes 缩小到 “he identifies different isotopes ... that reflect what the bears were eating”。确定答案技巧：题干问“同位素表明洞熊偏爱的食物是什么”，原文用宾语从句给出结论 “Bocherens has found that cave bears ate mainly plants”（Bocherens 发现洞熊主要以植物为食）。ate mainly 是“主要以……为食”，对应题干的 preferred food（偏爱的食物）；原文宾语 plants 在笔记里成为主语，位置变了但指的仍是同一样东西，故填 plants。语法提示非常关键：空格后的谓语是 were，因此必须写复数 plants；写成单数 plant 会与 were 冲突。此外，文中同一段还提到碳、氮等同位素以及 what the bears were eating，都指向食物，不要误填 carbon 或 nitrogen（那是同位素所属的元素，不是食物）。",
          "analysis": "第 7 段讲 Bocherens 的同位素研究：“Running his white powder through a mass spectrometer, he identifies different isotopes, or chemical forms, of elements such as carbon and nitrogen that reflect what the bears were eating and how quickly they grew. After studying hundreds of bones from dozens of sites in Europe, Bocherens has found that cave bears ate mainly plants.”（他把那些白色粉末送入质谱仪，辨别出碳、氮等元素的不同同位素——即化学形态——这些同位素能反映这些熊吃什么、生长多快。在研究了来自欧洲数十个地点的数百块骨头后，Bocherens 发现洞熊主要以植物为食）。笔记条目 “Isotopes from the bones indicate that 10 ________ were the cave bears' preferred food” 正是对这一结论的转述：来源是 isotopes from the bones（对应 identifies different isotopes 与 reflect what the bears were eating），结论是洞熊偏爱的食物。原文用动词短语 ate mainly plants，笔记改写为名词短语 the cave bears' preferred food，两者的共同信息点是 plants（植物），故答案为 plants。这一步的判分点在主宾关系转换：原文中 plants 是 ate 的宾语，笔记中它成了从句主语；同时注意 were 这个复数谓语，填 plants 才符合主谓一致。语篇上，这一句还与第 8 段开头的 “This would have made bears particularly vulnerable to the last Ice Age”（食性使熊在冰期特别脆弱）构成因果链，可见“以植物为主食”是理解后文灭绝原因的关键事实。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The Ice Age changed vegetation growth in 11 ________.",
          "translation": "冰期改变了 ________ 的植被生长。",
          "answer": "seasons",
          "wordClass": "名词（复数；作介词 in 的宾语，指被缩短或消除的对象，须用复数形式 seasons）",
          "locating": {
            "paragraph": "8",
            "quote": "This Ice Age shortened or eliminated growing seasons, and altered the distributions of plant species across Europe."
          },
          "synonyms": [
            "“changed” 同义替换为原文的 “shortened or eliminated”（缩短或消除），二者都是对生长周期的改变",
            "“vegetation growth” 同义替换为原文的 “growing seasons”（生长季）",
            "“The Ice Age” 与原文的 “This Ice Age” 对应，回指同段首句的 “the last Ice Age, which began around 30,000 years ago”"
          ],
          "locatingTip": "定位：笔记小标题写的是 “Climate change” 与 “The Ice Age”，第 8 段整段都在讲这次冰期的影响，段首连续两句以 This Ice Age 开头，扫读时看到 Ice Age 就停在该段前两句。确定答案技巧：题干等于“冰期改变了什么东西的生长”，原文对应句是 “This Ice Age shortened or eliminated growing seasons”，其中 shortened or eliminated（缩短或消除）比题干的 changed 更具体，属于同义改写；被缩短的对象是 growing seasons，growing 对应题干的 vegetation（植被生长），因此空格要填的是 seasons。词形上，原文用的是复数 growing seasons，介词 in 之后也应保持复数 seasons，只填一个词则省去 growing。注意同段后半的 plant species 与 DNA 属于其他信息点（分别对应植被分布与 q12），不要误填 plants 或 DNA。",
          "analysis": "第 8 段首两句：“This would have made bears particularly vulnerable to the last Ice Age, which began around 30,000 years ago. This Ice Age shortened or eliminated growing seasons, and altered the distributions of plant species across Europe.”（这使得熊在面对约三万年前开始的上一次冰期时格外脆弱。这次冰期缩短甚至消除了生长季，并改变了欧洲各地植物物种的分布）。笔记条目 “The Ice Age changed vegetation growth in 11 ________” 把第二句的前半部分改写过来：changed 概括 shortened or eliminated（缩短或消除同样是“改变”），vegetation growth 概括 growing seasons（生长季就是植被生长的时段），被改变的正是 seasons 这一对象，只填一个词时写 seasons。词性上，seasons 是可数名词复数，与原文 growing seasons 的复数形式一致，也符合介词 in 后接名词短语的结构（in seasons = 在生长季这一层面）。这里容易踩的坑是把空格当成地点：in 后接的既可能是地点也可能是时间或抽象名词，判断依据是原文的 directly corresponding 成分——原文没有出现任何地点状语，被 shorten/eliminate 的宾语就是 growing seasons，所以填 seasons 而非 Europe。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Support for the above explanation comes from a study of changes in the DNA in the 12 ________ of the population of cave bears near the Danube River at this time.",
          "translation": "对上述解释的支持来自一项研究，该研究考察了当时多瑙河附近洞熊种群的 ________ 中 DNA 的变化。",
          "answer": "teeth",
          "wordClass": "名词（复数；位于介词 in the 之后、of the population 之前，表示 DNA 的取样来源，用复数形式 teeth）",
          "locating": {
            "paragraph": "8",
            "quote": "Cave bears began to move from their old territories, according to a DNA analysis of teeth found near the Danube River."
          },
          "synonyms": [
            "“Support for the above explanation comes from a study” 同义替换为原文的 “according to a DNA analysis”，analysis 即 study，DNA 一词直接复现",
            "“changes in the DNA in the ...” 与原文的 “a DNA analysis of teeth” 对应：牙齿是获取 DNA 的来源",
            "“near the Danube River” 与原文原词复现，是本题最直接的定位依据",
            "“changes in the DNA” 对应原文下文的 “the same genetic patterns showing up generation after generation” 与 “newcomers with different DNA patterns”，即基因模式发生了变化"
          ],
          "locatingTip": "定位：专有名词 Danube River（多瑙河）是全文少数几个地名之一，且只出现在第 8 段，一步命中；配合 DNA 一词双保险。确定答案技巧：题干问“研究的是种群哪个部位中的 DNA 变化”，原文写 “according to a DNA analysis of teeth found near the Danube River”（依据对多瑙河附近所发现牙齿的 DNA 分析），DNA 分析的对象是 teeth，因此空格填 teeth。语法上要注意题干已经给出 in the [12] of the population（该种群……中的 DNA 变化），空格位于 in the 与 of 之间，被分析的实物（牙齿）放在这个位置表来源，填复数 teeth 符合 ONE WORD ONLY。干扰项提醒：原文提到的 population、genetic patterns、newcomers 都是分析结果或对象群体，不是取样部位；不要填 DNA（题干已出现该词）。",
          "analysis": "第 8 段后半讲洞熊迁徙与基因证据：“Cave bears began to move from their old territories, according to a DNA analysis of teeth found near the Danube River. The cave bear population there was relatively stable, with the same genetic patterns showing up generation after generation. But about 28,000 years ago, newcomers with different DNA patterns arrived — a possible sign of hungry bears suddenly on the move.”（根据对多瑙河附近所发现牙齿的 DNA 分析，洞熊开始离开原有领地。那里的洞熊种群相对稳定，同样的基因模式一代代重复出现。但约两万八千年前，带着不同 DNA 模式的新来者出现了——这可能是饥饿的熊群突然迁徙的迹象）。笔记条目 “Support for the above explanation comes from a study of changes in the DNA in the 12 ________ of the population of cave bears near the Danube River at this time” 与之对应：a study 对应 a DNA analysis，changes in the DNA 对应 the same genetic patterns 与 different DNA patterns 的对比，near the Danube River 原词复现。剩下的信息点就是 DNA 的来源——原文用 a DNA analysis of teeth 明确交代，被分析的是 teeth（牙齿），所以答案为 teeth。词形上牙齿的不规则复数 teeth 必须写对（不能写 tooths），且原文与题干都以复数形式出现，符合 ONE WORD ONLY 限制。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Competition from Neanderthals and modern humans for caves may have reduced opportunities for cave bears to 13 ________.",
          "translation": "来自尼安德特人和现代人对洞穴的争夺，可能减少了洞熊 ________ 的机会。",
          "answer": "hibernate",
          "wordClass": "动词（原形；位于不定式符号 to 之后，与原文 had fewer safe places to ... 的结构对应，须用动词原形）",
          "locating": {
            "paragraph": "9",
            "quote": "As Neanderthals, and then a growing population of modern humans moved into the caves of Europe, cave bears had fewer safe places to hibernate."
          },
          "synonyms": [
            "“Competition ... for caves” 同义替换为原文的 “moved into the caves of Europe”（人类迁入洞穴，构成对洞穴的争夺）",
            "“reduced opportunities” 同义替换为原文的 “had fewer safe places”（安全的去处变少，机会随之减少）",
            "“Neanderthals and modern humans” 与原文的 “Neanderthals, and then a growing population of modern humans” 对应，两族人类并列",
            "“may have” 对应原文的推测语气 “may have been the final blow for these magnificent beasts”"
          ],
          "locatingTip": "定位：笔记小标题 “Human population expansion” 指向最后一段（第 9 段）后半部分，关键字是 Neanderthals、modern humans 与 caves；本段最后两句同时出现这三者，直接锁定。确定答案技巧：题干说人类争夺洞穴导致洞熊“做某件事的机会减少”，原文对应句是 “As Neanderthals, and then a growing population of modern humans moved into the caves of Europe, cave bears had fewer safe places to hibernate.”（随着尼安德特人以及随后不断增长的现代人迁入欧洲的洞穴，洞熊可供冬眠的安全地点越来越少）。fewer safe places 对应 reduced opportunities，而安全地点是用来做什么的——to hibernate（冬眠），因此空格填动词原形 hibernate。语法上，空格前是不定式符号 to，必须填动词原形，不能写 hibernating 或 hibernation；同时注意 ONE WORD ONLY，只写 hibernate。",
          "analysis": "第 9 段是全篇的结论段：“But changes in the climate can't be solely to blame for the bears' extinction. According to the latest study, by Erik Trinkaus and his colleagues at the Max Planck Institute, cave bear populations began a long, slow decline 50,000 years ago — well before the climate began to change. The new study supports a different explanation for the cave bears' demise. As Neanderthals, and then a growing population of modern humans moved into the caves of Europe, cave bears had fewer safe places to hibernate. An acute housing shortage may have been the final blow for these magnificent beasts.”（但气候变化不能独自为洞熊的灭绝负责。根据 Max Planck 研究所 Erik Trinkaus 及其同事的最新研究，洞熊种群在五万年前就已开始漫长而缓慢的衰退——远早于气候开始变化。这项新研究支持另一种解释。随着尼安德特人以及随后不断增长的现代人迁入欧洲的洞穴，洞熊可供冬眠的安全地点越来越少。严重的“住房短缺”可能给了这些壮丽动物最后的一击）。笔记条目落到最后两句：Competition from Neanderthals and modern humans for caves 概括人类“迁入欧洲洞穴”所形成的竞争，may have reduced opportunities 概括 had fewer safe places，最后剩下的信息点就是洞熊需要安全地点去做的事——hibernate（冬眠），故答案为 hibernate。这里的 to 是不定式符号，后接动词原形。篇章逻辑上还可回看第 1 段 “in caves where the animals once hibernated”（在它们曾经冬眠的洞穴中）与第 6 段 “perhaps caught while hibernating”，可见冬眠是洞熊在洞穴中的核心活动，人类占洞即等于剥夺其冬眠条件，答案与全文线索一致。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
