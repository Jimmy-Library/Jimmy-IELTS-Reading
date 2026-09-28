(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1067", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1067",
  "meta": {
    "examId": "p1-high-1067",
    "title": "Back to Wild 重返荒野",
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
          "stem": "The Przewalski horse was the only species Colonel Nikolai Przewalski discovered on his expedition.",
          "translation": "普氏野马是普热瓦尔斯基上校（Colonel Nikolai Przewalski）在此次探险中发现的唯一物种。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "He was the explorer and naturalist who first described the horse in 1881, after having gone on an expedition to find it, based on rumors of its existence."
          },
          "synonyms": [
            "“Colonel Nikolai Przewalski” 与原文第 1 段的 “the Russian colonel Nikolai Przewalski” 指同一人，只是原文多给了一个身份词 Russian",
            "“on his expedition” 同义替换为原文的 “after having gone on an expedition to find it”（他为此专门出行探险）",
            "“discovered” 与原文的 “first described the horse in 1881” 方向一致，都指他这次出行的成果",
            "“the only species …” 中的 only（唯一）在原文找不到任何对应表达：原文只交代了这次探险的对象是这一种马，从未说明他还发现了别的物种或没有发现别的物种"
          ],
          "locatingTip": "定位：题干出现两个人名性质的专有名词——Colonel Nikolai Przewalski 与 expedition，人名在第 1 段第 2 句就以重述形式复现（the Russian colonel Nikolai Przewalski），扫读时盯住大写专有名词即可一步落到第 1 段。确定答案技巧：本题的判分点不是“探险”本身，而是题干里那个绝对化的限定词 the only（唯一）。回原文逐字核对会发现，原文只说了三件事：他是俄国上校、他在 1881 年首次描述了这种马、他是为了找这种马而外出探险。这三件事都成立，但“这次探险只发现了这一种物种”这一层限定原文完全没有交代，既没说“只有一种”，也没说“还有其他发现”，属于纯粹的信息缺失，按判断题规则判 NOT GIVEN。做题时一旦看到 only、the first、the most、all 这类绝对化词，就要立刻检查原文有没有给出同样力度的限定，本题就是典型的“说法成立但限定过头”。",
          "analysis": "第 1 段开头两句：“The Przewalski Horse is the last wild horse. The horse is named after the Russian colonel Nikolai Przewalski (the name is of Polish origin and \"Przewalski\" is the Polish spelling).”（普氏野马是最后的野马。这种马以俄国上校 Nikolai Przewalski 命名），紧接着第三句就是本题定位句：“He was the explorer and naturalist who first described the horse in 1881, after having gone on an expedition to find it, based on rumors of its existence.”（他是一位探险家兼博物学家，1881 年首次描述了这种马；在此之前，他从有关这种马存在的传闻出发，专门外出探险寻找它）。原文给 Przewalski 定位的信息非常明确：身份（探险家兼博物学家）、成果（1881 年首次描述该马）、行动（为此出行探险）。但题干把这层信息加工成了“他是这次探险中发现的唯一物种（the only species … discovered on his expedition）”。原文从头到尾没有出现 only 之类表示“唯一”的限定，也没有交代他是否发现了其它动植物，更没有把“发现物种”作为他探险成果的概括表述（原文用的是 described“描述”）。既然原文既无法证实“只有一种”，也无法证伪，就属于判断题中的信息缺失，答案为 NOT GIVEN。提醒一点：第 3 段（C 段）还说他“Colonel Nikolay Przewalski identified different kind of the horse by using the bones and skins”，那里也只讲了鉴定这一种马，同样没有“唯一物种”的说法。",
          "traps": [
            "为什么不是 TRUE：TRUE 要求原文明确支持“唯一物种”这一限定，但原文只说他为寻找这种马而探险、并在 1881 年首次描述了它，既没有 only 这类词，也没有任何“他还发现了／没有发现其它物种”的说明，无从确认为唯一。",
            "为什么不是 FALSE：FALSE 要求原文有与之相反的信息，即原文得说他发现了不止一种物种，或说他这次探险的成果并不是发现物种；原文对此完全没有涉及，仅仅是没说，因此只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Carl Hagenbeck's capture of the horses around 1900 directly contributed to the founding of the modern zoo population.",
          "translation": "卡尔·哈根贝克（Carl Hagenbeck）在 1900 年前后捕获这些马，直接促成了现代动物园种群的建立。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Many of these horses were captured around 1900 by Carl Hagenbeck and placed in zoos. Many of these horses were captured and reproduced; about twelve to fifteen of them formed the foundation of today's population."
          },
          "synonyms": [
            "“Carl Hagenbeck's capture of the horses” 同义替换为原文的 “Many of these horses were captured … by Carl Hagenbeck”，主动语态的捕获者在题干中变成了所有格定语",
            "“around 1900” 与原文的 “around 1900” 原词复现，时间点一致",
            "“directly contributed to” 同义替换为原文的 “formed the foundation of”（构成了……的基础）",
            "“the founding of the modern zoo population” 同义替换为原文的 “formed the foundation of today's population”，其中 today's population 对应 modern（现代）的种群"
          ],
          "locatingTip": "定位：题干里的 Carl Hagenbeck 是含两个大写词的人名，在第 1 段第 4 句出现，是全文唯一的定位锚点；紧接的 1900 又是显眼数字，两者叠加稳定落位。确定答案技巧：题干把因果关系压缩成“捕获促成了播种群的建立”，做题时要在原文里找出“捕获”与“种群基础”之间的链条。原文连用两句：第一句说这些马在 1900 年前后被 Carl Hagenbeck 捕获并送入动物园（placed in zoos）；第二句先说同一批马被捕获并繁殖（captured and reproduced），再说其中约十二到十五匹“形成了今日种群的基础”（formed the foundation of today's population）。两级信息连起来正好回答了题干的两点要求：捕获确实发生在 1900 年前后（around 1900 是原文原词），而 today's population 的基础正是由这批被捕获、被繁殖的马构成（因果关系成立），因此判 TRUE。注意 contributed to 在雅思里属于“中性因果”，不需要原文出现完全相同的原因词，只要原文明确给出“由此形成”的表述即可。",
          "analysis": "原文第 1 段第 4、5 两句：“Many of these horses were captured around 1900 by Carl Hagenbeck and placed in zoos. Many of these horses were captured and reproduced; about twelve to fifteen of them formed the foundation of today's population.”（这些马中有许多在 1900 年前后被卡尔·哈根贝克捕获并放入动物园；这些被捕获的马中有许多得以繁殖，其中大约十二到十五匹构成了今日种群的基础）。题干的三个信息点都能在原文一一对上：①捕获者 Carl Hagenbeck 与时间 around 1900 是同词复现；②capture 与原文的 were captured 完全对应；③“促成了现代动物园种群的建立”对应原文的 formed the foundation of today's population，其中 formed the foundation of 就是 contributed to the founding of 的等价表述，today's population 与 modern zoo population 指的是同一批以动物园个体为种源的种群。原文还交代了这批马的来源背景：这些马大多是 1900 年前后被捕获并送进动物园的（placed in zoos）。因此题干所述“捕获直接促成现代种群建立”与原文信息方向完全一致，判 TRUE。做题提示：本条的关键是别把“捕获”和“繁殖”割裂看——原文明确写了 captured and reproduced，也就是说播种群既来自捕获，也来自圈养繁殖，题干没有把繁殖这一环排除在外，只说捕获“contributed to”（起了促成作用），力度不过分。",
          "traps": [
            "为什么不是 FALSE：原文直接写了 about twelve to fifteen of them formed the foundation of today's population，即“今日种群的基础”正是由这批 1900 年前后被 Hagenbeck 捕获的马构成，与题干“直接促成现代种群建立”完全同向，没有任何反证，不能选 FALSE。",
            "为什么不是 NOT GIVEN：因果链条在原文中已经明写（captured … placed in zoos，随后 reproduced 并 formed the foundation of today's population），不是只提捕获而未交代其对种群的意义，因此不属于信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The primary reason for the species' decline in the 20th century was a series of severe winters.",
          "translation": "该物种在 20 世纪数量下降的主要原因是接连出现的严冬。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Competitions with livestock, hunting, capture of foals for zoological collections, military activities and harsh winters recorded in 1946, 1948 and 1956 are considered to be the main cause of the decline in the Przewalski's horse population."
          },
          "synonyms": [
            "“the species' decline” 同义替换为原文的 “the decline in the Przewalski's horse population”",
            "“severe winters” 同义替换为原文的 “harsh winters”（harsh 与 severe 同义，指气候严酷）",
            "“a series of” 对应原文列举的年份 “recorded in 1946, 1948 and 1956”（多次有记录的严冬）",
            "“the primary reason … was” 与原文的 “are considered to be the main cause” 结构相同，但原文把这一头衔给的是整串并列因素，而不是其中的 harsh winters 一项"
          ],
          "locatingTip": "定位：题干的核心词是 decline 与 severe winters，第 8 段（H 段）出现一串并列的下降原因，末尾紧跟年份数字 1946, 1948 and 1956，与题干 a series of 高度呼应，是唯一对口段落；第 7 段（G 段）虽也讲 decline，但落点是“组合因素”与灭绝时间。确定答案技巧：本题考“主因唯一性”，判分关键看原文的主因是一个因素还是一组因素。原文用 and 把 competitions with livestock、hunting、capture of foals for zoological collections、military activities 与 harsh winters 五项并列，然后说这整串因素“are considered to be the main cause of the decline”——主因是整个并列结构，严冬只是其中之一。题干却用 was a series of severe winters 把主因收缩为“严冬”单项，与原文的并列关系冲突，故判 FALSE。看到原文出现 A, B, C and D are the main cause 这类长并列，就要意识到“单点＝偏”是常见的 FALSE 设置。",
          "analysis": "第 8 段（H 段）先交代圈养种群几乎损失殆尽（Munich、Prague 以外所剩无几，Ukraine 的群体被枪杀，美国的群体灭绝），随后一句就是本题定位句：“Competitions with livestock, hunting, capture of foals for zoological collections, military activities and harsh winters recorded in 1946, 1948 and 1956 are considered to be the main cause of the decline in the Przewalski's horse population.”（与家畜争夺草场、狩猎、为动物园收藏而捕捉幼驹、军事活动，以及 1946、1948、1956 年有记录的严冬，被认为是普氏野马数量下降的主要原因）。这句的结构是“五项并列 + are considered to be the main cause”：严冬（harsh winters）确实出现在列表中，题干的前半部分“20 世纪下降、严冬多次出现”并不错，错在题干用 was a series of severe winters 把“主要原因”这项身份单独安到严冬头上。再看第 7 段（G 段）的表述：“The native population declined in the 20th century due to a combination of factors”（原生种群在 20 世纪因多种因素组合而下降），也强调是“多因素组合”，而不是单一的气候原因。原文的立场是“多个因素共同作用（主因是一组因素）”，题干说“主因是严冬（单项）”，属于把并列关系改成排他关系，与原文事实冲突，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文的主语是一长串并列因素（与家畜争食、狩猎、捕捉幼驹、军事活动以及严冬），harsh winters 只是其中最后一项，题干把它提升为唯一主因，与原文“多项因素共同构成主因”的表述不符，不能选 TRUE。",
            "为什么不是 NOT GIVEN：严冬在原文中确实被提到，而且被列入“main cause”这一因果论述里，信息是存在的，只是与题干“唯一主因”的结论相冲突，属于事实矛盾而非信息缺失，所以判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The project led by scientist Feh initially aimed to reduce the horses' aggressive behavior towards humans.",
          "translation": "由科学家 Feh 主导的项目最初的目的是减少这些马对人类的攻击性。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "He spent 6000 hours to do the experiment, to change the nature of the Przewalski horse to attack and fight other horse species."
          },
          "synonyms": [
            "“the project led by scientist Feh” 同义替换为原文的 “A scientist named Feh …” 以及后文 “Feh's project”",
            "“aimed to” 同义替换为原文的 “to do the experiment, to change the nature of …”（实验目的在于改变其天性）",
            "“aggressive behavior” 对应原文的 “to attack and fight”（攻击与斗争），方向一致",
            "题干的对象是 “towards humans”（针对人类），而原文的对象是 “other horse species”（其它马种），两者不一致：原文根本未提马对人的攻击性"
          ],
          "locatingTip": "定位：人名 Feh 是短小、唯一、易扫读的专有名词，第 4 段（D 段）三处提到他（A scientist named Feh、Then Feh、Feh's project 等），一眼即可锁定整段。确定答案技巧：本题是“目的对象错位”型陷阱，判分点落在两个宾语上——攻击的对象究竟是谁。原文写得很明确：“to change the nature of the Przewalski horse to attack and fight other horse species”，Feh 的实验是要改变马的天性，让它们去攻击、斗争其它马种（马对马），而不是减少马对人的攻击（马对人）。题干把攻击对象换成 towards humans，还把动词从“改变天性去攻击”换成“reduce aggressive behavior（降低攻击性）”，方向上整体反转，因此判 FALSE。做题时要把题干里的对象名词（humans）和原文里的对象名词（other horse species）逐字对齐，越具体的宾语越容易设错。",
          "analysis": "第 4 段（D 段）第 1 句先给大背景：“A scientist named Feh first put the horse in a zoo, and then sent them back to the wild.”（一位名叫 Feh 的科学家先把马放进动物园，随后又把它们送回野外），第 3 句是本题定位句：“He spent 6000 hours to do the experiment, to change the nature of the Przewalski horse to attack and fight other horse species.”（他花了 6000 小时做这项实验，目的是改变普氏野马的天性，使它们能够攻击和斗争其它马种）。从语法上看，句中 to attack and fight other horse species 是 to change the nature … 的结果或目的说明，攻击对象被明确写成 other horse species（其它马种）。题干的落点是“减少这些马对人类的攻击性（reduce the horses' aggressive behavior towards humans）”，包含两处改写走偏：一是对象由“其它马种”换成“人类”，二是动作由“改变天性使其更具攻击性”换成“减少攻击性”。原文中没有任何一句谈马与人类之间的冲突，也没有“reduce”“less aggressive”之类的表述，因此题干与原文形成正面对立，答案为 FALSE。补充一个背景：Feh 的实验前期是在法国 Causse Méjean 进行的，因为那里的地貌与蒙古相似（“The Causse Méjean landscape in France is quite similar from that in Mongolia where the horse used to live.”），随后才把马带回蒙古放归，整个项目的方向是“让野马重返自然、恢复野性”，这与“驯化并降低攻击性”正好相反。",
          "traps": [
            "为什么不是 TRUE：原文的实验目的是 change the nature … to attack and fight other horse species（让马去攻击、斗争其它马种），与题干“减少马对人的攻击性”在对象（其它马种 与 人类）和方向（增强攻击 与 降低攻击）上都相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对 Feh 的实验目的有明确交代（用 6000 小时做实验、改变马的攻击天性），而且说法恰好与题干冲突；这是“已提及且相反”的情况，按规则判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The ultimate aim of the reintroduction project is to create a population that can survive independently.",
          "translation": "野放（再引入）项目的最终目标是建立一个能够独立存活的种群。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "The long-term goal is to establish a self-sustaining population that no longer requires human intervention to survive."
          },
          "synonyms": [
            "“The ultimate aim” 同义替换为原文的 “The long-term goal”（最终目标 与 长期目标）",
            "“to create a population” 同义替换为原文的 “to establish a … population”（建立种群）",
            "“reintroduction project” 对应原文的 “the reintroduction”，第 9 段开头即交代 “The species is being introduced into their original habitats”",
            "“can survive independently” 同义替换为原文的 “a self-sustaining population that no longer requires human intervention to survive”，即“自我维持、不再需要人类干预”"
          ],
          "locatingTip": "定位：题干的关键词是 reintroduction 与 ultimate aim，第 9 段（I 段）连续出现 reintroduction、long-term goal 等词，其中 “The long-term goal” 是全文唯一与“最终目标”对应的表述，直接锁定该句。确定答案技巧：本题是“目标复述题”，只需要把题干的抽象说法与原文的目标句逐词对齐。原文说 long-term goal 是 establish a self-sustaining population that no longer requires human intervention to survive，self-sustaining（自我维持）与 does not require human intervention（无需人类干预）就是对 survive independently（独立存活）的完整解释，而 establish … population 与 create a population 同义，因此题干与原文完全一致，判 TRUE。注意第 9 段后面紧跟的 balanced sex ratio、genetic diversity、prevent inbreeding 都是实现这一目标的手段，不要误把这些手段当成目标本身。",
          "analysis": "第 9 段（I 段）开头：“The species is being introduced into their original habitats after 20 years of extinction in the wild as the result of hunting, capture and habitat loss.”（由于狩猎、捕获和栖息地丧失，该物种在野外灭绝 20 年后，如今正被重新引入其原生栖息地），句中 the species is being introduced into their original habitats 就是题干 the reintroduction project 的来源。接下来该段给出本题定位句：“The long-term goal is to establish a self-sustaining population that no longer requires human intervention to survive.”（长期目标是建立一个自我维持、不再需要人类干预即可存活的种群）。随后两句继续补充实现途径：“This involves ensuring a balanced sex ratio and enough genetic diversity within the wild herds to prevent inbreeding.”（这包括确保合理的性别比例和足够的遗传多样性以防止近亲繁殖），以及 “Conservationists are hopeful that with continued protection and community support, the Przewalski's horse will once again become a permanent feature of the Mongolian steppe.”（环保人士希望，在持续保护和社区支持下，普氏野马将再次成为蒙古草原的永久组成部分）。题干把 long-term goal 改写成 ultimate aim，把 self-sustaining / no longer requires human intervention 概括为 can survive independently，语义层级完全对应：项目的终点不是继续依赖圈养管理，而是让野外种群自己活下去。信息同向且无夸大，答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文的长期目标是 self-sustaining population（自我维持的种群）、no longer requires human intervention（不再需要人类干预），与题干“能够独立存活的种群”在语义上完全一致，不存在任何矛盾点，选 FALSE 没有依据。",
            "为什么不是 NOT GIVEN：题干所说的“最终目标”在原文中用 The long-term goal 明确点出，且对“独立存活”给出了具体解释（self-sustaining、no longer requires human intervention），属于已明确交代的信息，不是信息缺失。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–10 摘要填空（NO MORE THAN TWO WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 10
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "By the mid-20th century, the wild population in Mongolia had vanished, with the last confirmed herd sighting in 6 ________.",
          "translation": "到 20 世纪中叶，蒙古的野生种群已经消失，最后一次得到确认的野马群目击记录是在 ________。",
          "answer": "1967",
          "wordClass": "数字（年份；摘要中与介词 in 连用作时间状语，直接照抄原文年份 1967，不要写 the 1960s 之类的范围表述）",
          "locating": {
            "paragraph": "7",
            "quote": "The last herd was sighted in 1967 and the last individual horse in 1969."
          },
          "synonyms": [
            "“the last confirmed herd sighting” 同义替换为原文的 “The last herd was sighted”，sighting 与 was sighted 同源，confirmed 对应原文对目击事实的直述",
            "“the wild population in Mongolia had vanished” 同义替换为原文的 “with the wild population in Mongolia dying out in the 1960s”",
            "“By the mid-20th century” 对应原文的 “The native population declined in the 20th century … dying out in the 1960s”",
            "“herd” 与原文的 “herd”（野马群）为原词复现"
          ],
          "locatingTip": "定位：摘要句给出两条硬线索——地点 Mongolia 与事件 the last confirmed herd sighting，回原文搜 sighted / last herd，只在第 7 段（G 段）出现，且该句同时给出两个年份（1967 与 1969），定位极稳。确定答案技巧：本题的陷阱在于原文给了两个年份，必须分清哪一个对应 herd（野马群）、哪一个对应 individual horse（单匹马）。原文是 “The last herd was sighted in 1967 and the last individual horse in 1969.”，题干写的是 the last confirmed herd sighting，对应的是 herd，所以答案是 1967，而不是 1969（那是最后一匹个体的目击年份）。填空时按题目要求直接写数字 1967 即可，符合 NO MORE THAN TWO WORDS AND/OR A NUMBER 的限制。",
          "analysis": "第 7 段（G 段）通篇讲原生种群的衰减：“The native population declined in the 20th century due to a combination of factors, with the wild population in Mongolia dying out in the 1960s. The last herd was sighted in 1967 and the last individual horse in 1969. Expeditions after this failed to locate any horses, and the species had been designated \"extinct in the wild\" for over 30 years.”（原生种群在 20 世纪因多种因素组合而衰减，蒙古的野生种群于 1960 年代消失。最后一次见到野马群是在 1967 年，最后一次见到单独的野马是在 1969 年。此后的考察都未能找到任何野马，该物种被列为“野外灭绝”超过 30 年）。摘要句 “the wild population in Mongolia had vanished, with the last confirmed herd sighting in 6 ________” 中的 vanished 对应 dying out in the 1960s，last confirmed herd sighting 对应 The last herd was sighted，剩下的空缺正是时间 1967。这里必须区分 herd（群）与 individual horse（个体）：1969 年是最后一次看到单匹马的时间，与摘要的 herd sighting 不匹配，所以不能填 1969；同理 1960s 只是“野生种群消失的十年区间”，并非“最后一次确认目击”的具体年份，也不是本题答案。从词性看，空格需要的是时间信息（数字形式的年份），与介词 in 搭配，填 1967 后在句中读作 “with the last confirmed herd sighting in 1967”，语法与语义均通顺。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Tragically, a valuable group in Ukraine was destroyed by 7 ________.",
          "translation": "不幸的是，乌克兰一个珍贵的野马群体被 ________ 摧毁。",
          "answer": "German soldiers",
          "wordClass": "名词短语（复数，指实施破坏的行为主体；位于介词 by 之后，作被动语态 was destroyed by 的施动者）。按原文写作 German soldiers，German 首字母大写、soldiers 小写，共两个词，在 NO MORE THAN TWO WORDS 之内",
          "locating": {
            "paragraph": "8",
            "quote": "The most valuable groups, in Askania Nova, Ukraine, were shot by German soldiers during world war two occupation, and the group in the United States had died out."
          },
          "synonyms": [
            "“a valuable group in Ukraine” 同义替换为原文的 “The most valuable groups, in Askania Nova, Ukraine”，原文用最高级 the most valuable 说明其珍贵程度",
            "“was destroyed” 同义替换为原文的 “were shot”（被枪杀，属于被摧毁的具体方式）",
            "“by …” 与原文的 “by German soldiers” 结构一致，都是被动语态的施动者",
            "“Tragically” 对应原文此处所述战争期间的惨重损失背景"
          ],
          "locatingTip": "定位：题干的两个锚点是专有地名 Ukraine 与被动结构 was destroyed by，第 8 段（H 段）出现 “in Askania Nova, Ukraine” 并紧跟被动结构 were shot by …，一句锁定。确定答案技巧：本题只需还原被动句的施动者——原文 was shot by 前面的 by 宾语就是答案。注意区分两个易混点：①破坏方式是“被枪杀（were shot）”，但题干问的是“被谁（by 谁）摧毁”，所以不能填 shot；②同段后面还有 “harsh winters recorded in 1946, 1948 and 1956” 与 “military activities”，但它们从属于另一句讲总体原因的长句，与“乌克兰的珍贵群体被摧毁”这一具体事件无关，不要误填 military activities。答案 German soldiers 为两个词，符合 NO MORE THAN TWO WORDS 的要求，且须保持原文的首字母大写。",
          "analysis": "第 8 段（H 段）开头两句：“After 1945 only two captive populations in zoos remained, in Munich and in Prague. The most valuable groups, in Askania Nova, Ukraine, were shot by German soldiers during world war two occupation, and the group in the United States had died out.”（1945 年后，动物园里只剩下慕尼黑和布拉格两个圈养种群。位于乌克兰 Askania Nova 的那些最珍贵的群体，在二战占领期间被德国士兵枪杀，而美国的群体也已灭绝）。摘要句把这段史实压缩为 “a valuable group in Ukraine was destroyed by 7 ________”，其中 a valuable group 对应 The most valuable groups，in Ukraine 就是地名原词 Askania Nova, Ukraine 的一部分，was destroyed by 对应 were shot by（destroyed 是对被枪杀这一事实的概括），因此介词 by 之后应填施动者 German soldiers。填空时注意两点：一是答案必须写成两个词 German soldiers（可数名词复数，与原文一致）；二是别把同段另一条线索当真——harsh winters recorded in 1946, 1948 and 1956 是随后那句“总体下降原因”长句中的并列项，讲的是气候因素，与“乌克兰群体被摧毁”这一具体历史事件不是一回事。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "By the late 1950s, the global population had plummeted to just 8 ________ individuals, all in captivity.",
          "translation": "到 20 世纪 50 年代末，全球种群数量已跌至仅 ________ 个个体，且全部处于圈养状态。",
          "answer": "12",
          "wordClass": "数字（基数词；在摘要中作 individuals 的定语表示数量，直接照抄原文数字 12，不要写成 twelve 或加单位词）",
          "locating": {
            "paragraph": "8",
            "quote": "By the end of 1950s, only 12 individuals Przewalski's horses were left in the world."
          },
          "synonyms": [
            "“By the late 1950s” 同义替换为原文的 “By the end of 1950s”（50 年代末 与 50 年代末）",
            "“the global population had plummeted to” 同义替换为原文的 “only 12 individuals Przewalski's horses were left in the world”，only 与 plummeted to just 都表达“少得触目惊心”",
            "“individuals” 与原文的 “individuals” 为原词复现",
            "“all in captivity” 对应原文前文所交代的此时只剩动物园圈养种群（After 1945 only two captive populations in zoos remained）"
          ],
          "locatingTip": "定位：本题是纯数字题，时间线索 By the late 1950s 一眼可辨，回原文找 1950s，第 8 段（H 段）末句即 “By the end of 1950s, only 12 individuals …”，句子末尾的数字就是答案。确定答案技巧：数字类填空最怕“数字扎堆”——第 8 段还出现 1945、1946、1948、1956 以及第 7 段的 1967、1969，必须用句首的时间状语筛出目标句。原文 “By the end of 1950s, only 12 individuals Przewalski's horses were left in the world.” 与题干 “By the late 1950s, the global population had plummeted to just 8 ________ individuals” 在时间（1950s 末）、数量表述（only 12 与 plummeted to just）、主语（individuals … left in the world 与 global population … individuals）上三重对应，因此空格填 12。填数字时保持阿拉伯数字形式，不要写成 twelve。",
          "analysis": "第 8 段（H 段）先说战后的惨状：“After 1945 only two captive populations in zoos remained, in Munich and in Prague.”（1945 年后动物园中只剩下两个圈养种群），接着说乌克兰的珍贵群体被德国士兵枪杀、美国的群体灭绝，随后列举与家畜争食、狩猎、捕捉幼驹、军事活动和严冬等多重原因，最后以本题定位句收束全段：“By the end of 1950s, only 12 individuals Przewalski's horses were left in the world.”（到 20 世纪 50 年代末，全世界只剩下 12 匹普氏野马个体）。题干与之对应的三处改写是：By the late 1950s 对应 By the end of 1950s；had plummeted to just 对应 only … were left（两者都表达“锐减到极少”）；individuals 一词直接沿用原文。因此答案是 12。另外，摘要中 “all in captivity” 这一补充信息也由本段支撑——此时剩余个体全部在慕尼黑、布拉格等动物园中，野外种群已在 1960 年代前后消失（见第 7 段）。词性上，空格承担的是“数量”，填阿拉伯数字 12 即可，无需单位词、不要写成 twelve，也不要误填同段出现的年份 1946/1948/1956（那是严冬发生的年份，不是剩余个体数）。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Current reintroduction efforts face challenges, including the risk of the horses breeding with domestic horses to produce 9 ________, which could dilute the pure gene pool.",
          "translation": "目前的野放工作面临挑战，其中包括野马与家马交配后产下 ________ 的风险，这会稀释纯正的基因库。",
          "answer": "fertile hybrids",
          "wordClass": "名词短语（复数，作 produce 的宾语，指杂交后代；两个词均照抄原文，不加冠词、不改单复数）",
          "locating": {
            "paragraph": "6",
            "quote": "If Przewalski's horses breed with domestic horses, they produce fertile hybrids, which has the potential to quickly adulterate the species and undo the work of the project."
          },
          "synonyms": [
            "“the horses breeding with domestic horses” 同义替换为原文的 “If Przewalski's horses breed with domestic horses”",
            "“to produce …” 与原文的 “they produce …” 为原词对应",
            "“could dilute the pure gene pool” 同义替换为原文的 “has the potential to quickly adulterate the species and undo the work of the project”，adulterate（使混杂不纯）对应 dilute（稀释），gene pool 与 the species 的遗传基础对应",
            "“face challenges” 对应原文后句所述的风险（fend off the risk of losing their gene pool）"
          ],
          "locatingTip": "定位：题干的关键词是 domestic horses 与 gene pool，第 6 段（F 段）首句写 “breed with domestic horses”，末句写 “the risk of losing their gene pool”，两个关键词在同一段首尾呼应，定位非常直接。确定答案技巧：本题的落点是“杂交后产下什么”，原文用 if 条件句给出完整因果链：“If Przewalski's horses breed with domestic horses, they produce fertile hybrids, which has the potential to quickly adulterate the species …”，条件部分（与家马杂交）与题干完全一致，那么 produce 的宾语 fertile hybrids 就是空格答案；下一句的 adulterate the species（使物种混杂不纯）又正好对应题干的 dilute the pure gene pool，形成二次验证。注意不要误填 gene pool（那是被稀释的对象，不是被产下的东西），也不要误填 hybrids 前面的 fertile 单独一词——答案须连写两个词 fertile hybrids 才算完整，且符合 NO MORE THAN TWO WORDS 的限制。",
          "analysis": "第 6 段（F 段）：“If Przewalski's horses breed with domestic horses, they produce fertile hybrids, which has the potential to quickly adulterate the species and undo the work of the project. So, organisers have decided first to place the horses in a fenced-off area to stabilise the population and fend off the risk of losing their gene pool.”（如果普氏野马与家马交配，会产下可育的杂交后代，这有可能迅速使该物种混杂、毁掉项目的成果。因此组织者决定先把马安置在围栏区域内，以稳定种群并避免基因库丧失的风险）。摘要句 “the risk of the horses breeding with domestic horses to produce 9 ________, which could dilute the pure gene pool” 与原文首句逐点对应：breeding with domestic horses 对应 breed with domestic horses；produce 对应 produce；dilute the pure gene pool 对应 quickly adulterate the species and … losing their gene pool。因此空格即 produce 的宾语 fertile hybrids（可育杂交后代）。从词性看，hybrids 为可数名词复数（因为指多只后代），fertile 为形容词作定语修饰它，两者合起来两个词，符合题目词数上限；填写时保持原文小写形式，不加冠词、不改单复数，也不要只写 hybrids 或 fertile 而丢词。本题同时提示了第 10 题的因果关系：正因为有杂交风险，才有 “place the horses in a fenced-off area” 这一对策（见第 10 题）。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "To mitigate this, initial populations are kept in 10 ________ areas.",
          "translation": "为减轻这一问题，最初的种群被安置在 ________ 区域内。",
          "answer": "fenced-off",
          "wordClass": "复合形容词（由动词短语 fence off 加连字符构成，在摘要中作 areas 的前置定语；须保留原文的连字符与 -ed 形式）",
          "locating": {
            "paragraph": "6",
            "quote": "So, organisers have decided first to place the horses in a fenced-off area to stabilise the population and fend off the risk of losing their gene pool."
          },
          "synonyms": [
            "“To mitigate this” 同义替换为原文的 “So, organisers have decided first … to fend off the risk of losing their gene pool”，都是“为应对上述风险而采取对策”",
            "“initial populations are kept in …” 同义替换为原文的 “place the horses in … first”，first 对应 initial（最初、最先）",
            "“kept in” 与原文的 “place … in” 同义，都表示“把马安置在某区域内”",
            "“a fenced-off area” 与题干的 “________ areas” 对应，同一形容词修饰 area（区域）"
          ],
          "locatingTip": "定位：题干句紧承第 9 题的杂交风险，只要顺着第 6 段（F 段）找“对策句”即可——原文以 So 开头的第二句就是组织者的决定，且句中同时出现 area，与题干 areas 一词直接呼应。确定答案技巧：题干 “To mitigate this … are kept in 10 ________ areas” 是对原文 “place the horses in a fenced-off area to stabilise the population” 的改写：mitigate 对应 fend off the risk，initial 对应 first，kept in … area 对应 place … in a … area，因此修饰 area 的那个词就是答案 fenced-off。这是一个带连字符的复合形容词（由动词短语 fence off 加 -ed 构成），必须原样抄写连字符，不能写成 fenced off、fence-off 或 fenced；同时注意它只有“一个词”的身份来自连字符，符合词数限制。切勿误填同段的 gene pool（那是被保护的对象）或 population（那是被稳定的对象）。",
          "analysis": "第 6 段（F 段）末句：“So, organisers have decided first to place the horses in a fenced-off area to stabilise the population and fend off the risk of losing their gene pool.”（因此，组织者决定先把马安置在一个围栏区域内，以稳定种群、避免基因库丧失的风险）。摘要句 “To mitigate this, initial populations are kept in 10 ________ areas” 把该句改写为一般现在时的被动结构：So 与 fend off the risk 压缩为题干的 To mitigate this（针对上一句所述的杂交风险采取对策）；first 改写成 initial；place … in 改写成 are kept in；被修饰的名词 area 保留。于是空格要填的正是原文中修饰 area 的复合形容词 fenced-off。词性分析：fenced-off 由动词短语 fence off 的过去分词形式加连字符构成，在此作前置定语，功能上等同于 “which has been fenced off”（已被围起来的），说明这些马是被放在“有围栏隔离”的区域，目的在于阻断与家马的接触。填写时务必保留连字符写成 fenced-off（原文即如此），不要拆成两个词 fenced off，也不要写成 fencing-off；若只填 fenced 会丢失“隔开”这一核心义。另外，前一句提到的 fertile hybrids（可育杂交后代）是风险本身，不是本题答案，注意区分“风险”与“对策”两类信息。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
