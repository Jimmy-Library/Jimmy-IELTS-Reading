(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1005", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1005",
  "meta": {
    "examId": "p1-medium-1005",
    "title": "A Brief History of Ballet 芭蕾舞简史",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "a description of how ballet changed from an amateur activity to a professional discipline",
          "translation": "对芭蕾如何从业余爱好转变为专业技能的描述。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "His love of ballet raised it from a hobby for amateurs to a skill requiring professional training."
          },
          "synonyms": [
            "“an amateur activity” 同义替换为原文的 “a hobby for amateurs”（业余者的爱好）",
            "“a professional discipline” 同义替换为原文的 “a skill requiring professional training”（需要专业训练的技艺）",
            "“changed from … to …” 同义替换为原文的 “raised it from … to …”（把芭蕾从某状态提升到另一状态）"
          ],
          "locatingTip": "定位：题干是抽象概括，只能用其中最有特征的概念词切入。amateur 与 professional 是一对反义词，回到原文扫读“业余”“专业”这类语义场，正好在第 1 段（A 段）末尾看到 “from a hobby for amateurs to a skill requiring professional training”，一步锁定 A 段。确定答案技巧：段落信息匹配题的判分点是“该段是否包含这一信息”，而不是“该段是否以它为主题”。A 段末句用 raised it from … to … 明确交代了芭蕾身份的转变——从业余者的爱好变成需要专业训练的技艺，与题干 amateur activity 与 professional discipline 的转换结构完全对应，故答案为 A。",
          "analysis": "第 1 段（A 段）按时间线梳理芭蕾的早期发展：意大利文艺复兴时期起源，法国宫廷由 Catherine de Medici 资助，一个世纪后 Louis XIV 使它普及化和规范化，最后一句收尾：“His love of ballet raised it from a hobby for amateurs to a skill requiring professional training.”（他对芭蕾的热爱把它从业余者的爱好提升为一项需要专业训练的技艺）。题干 “a description of how ballet changed from an amateur activity to a professional discipline”（对芭蕾如何从业余活动变为专业行当的描述），其核心信息点有三处：一是“有变化”，二是变化的起点是“业余”，三是变化的终点是“专业”。原文的 raised it from a hobby for amateurs（从业余爱好提升）与 to a skill requiring professional training（到需要专业训练的技艺）恰好把这三个信息点逐一对上：hobby 即业余活动，professional training 即专业训练，raised from … to … 即变化过程。因此在 A 段可以找到题干所需的信息，答案为 A。注意这类匹配题不必找“与题干逐字相同”的句子，而要判断“信息是否在该段被陈述”，A 段末句正是这一转变的直接陈述句。",
          "traps": [
            "为什么不是 B 段：B 段讲的是 1661 年巴黎成立舞蹈学院、1681 年芭蕾登上舞台，以及 Noverre 反对歌剧芭蕾、创立 ballet d'action，谈的是机构化与艺术观念的转变，没有出现“从业余到专业”的表述。",
            "为什么不是 D 段：D 段讲俄国古典芭蕾的技术精湛、场面宏大与叙事复杂，虽然提到专业水准很高，但没有任何“从事何种状态转变为专业”的过程描述，属于只讲结果不讲转变。",
            "为什么不是 E、F 两段：E 段讲 20 世纪初 Ballets Russes 的革新，F 段讲 20 世纪芭蕾的继续演变与当代芭蕾，都是现代阶段的艺术发展，与题干所指的“业余转专业”这一身份转变无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "the name of a style of ballet that focused on narrative rather than spectacle",
          "translation": "一种注重叙事而非视觉奇观的芭蕾风格的名称。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "introduced the ballet d'action, a dramatic style of ballet that features a narrative"
          },
          "synonyms": [
            "“the name of a style of ballet” 在原文中就是给出的专有名称 “the ballet d'action”",
            "“focused on narrative” 同义替换为原文的 “features a narrative”（以叙事为特征）",
            "“rather than spectacle” 对应原文对歌剧芭蕾 artifice（浮华造作）的否定，以及 “believing that ballet could stand on its own as an art form”（认为芭蕾可以独立成为艺术形式）"
          ],
          "locatingTip": "定位：题干的核心是“一种芭蕾风格的名称”，回到原文找被引出的新术语，第 2 段（B 段）中整篇只出现一次的名词短语 ballet d'action 就是这条信息。确定答案技巧：题干有两层要求——一是给出“名称”，二是这种风格“注重叙事而非奇观”。原文 “introduced the ballet d'action, a dramatic style of ballet that features a narrative” 同时满足两层：ballet d'action 是名称，features a narrative 说明它以叙事为特征；而 “rebelled against the artifice of opera-ballet” 则说明它是对“奇观式”歌剧芭蕾的反对，对应题干的 rather than spectacle。故答案为 B。",
          "analysis": "第 2 段（B 段）的中间部分写道：“In the mid-18th century, however, French ballet master Jean Georges Noverre rebelled against the artifice of opera-ballet, believing that ballet could stand on its own as an art form. His idea that ballet should contain expressive dramatic movement, and this should reveal relationships between characters, introduced the ballet d'action, a dramatic style of ballet that features a narrative.”（18 世纪中叶，法国芭蕾大师 Noverre 反对歌剧芭蕾的浮华造作，认为芭蕾可以独立成为一种艺术形式。他认为芭蕾应当包含富于表现力的戏剧动作，并借此揭示人物之间的关系，这一主张引出了 ballet d'action 这一以叙事为特征的戏剧性芭蕾风格）。题干要的是“一种注重叙事而非视觉奇观的芭蕾风格的名称”。原始名称就是 ballet d'action，原文紧随其后用同位语 a dramatic style of ballet that features a narrative 做出了解释，features a narrative 与题干的 focused on narrative 完全对应。“rather than spectacle” 这一层则由前一句 “rebelled against the artifice of opera-ballet” 提供：artifice 指歌剧芭蕾的浮华铺张，正是题干所说的 spectacle。名称与特征都对得上，所以答案落在 B 段。",
          "traps": [
            "为什么不是 A 段：A 段出现了芭蕾 de cour 这一名称（宫廷芭蕾），但它被描写为 “a programme that included dance, costume, song, music and poetry”，恰恰是以场面、服饰等奇观元素为特色，与题干“以叙事为主”相反。",
            "为什么不是 C 段：C 段确实给出了 romantic ballets 这一名称，但它的特征被描述为 “evoked the world of spirits and magic, and often showed women as passive and fragile”（表现精灵与魔法世界、女性柔弱被动），是主题与气质层面的描述，不是“以叙事为特征”。",
            "为什么不是 D、E、F 三段：D 段讲的 Swan Lake、The Sleeping Beauty、The Nutcracker 属于具体作品而非一种风格的名称；E 段讲 Ballets Russes 的革新，F 段讲 neoclassical ballet 与 contemporary ballet，其中 neoclassical 恰恰是去叙事化（stripped away elaborate narratives），与题干要求相反。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "an example of a ballet that combined opera and dance",
          "translation": "一个把歌剧与舞蹈结合起来的芭蕾（作品）的例子。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The French opera Le Triomphe de l'Amour incorporated ballet elements in its performance, creating a long-standing opera-ballet tradition in France."
          },
          "synonyms": [
            "“an example” 具体化为原文给出的作品名 “Le Triomphe de l'Amour”",
            "“combined opera and dance” 同义替换为原文的 “incorporated ballet elements in its performance”，且主语是 French opera",
            "原文的 “opera-ballet tradition” 进一步印证歌剧与芭蕾两种艺术形式的结合"
          ],
          "locatingTip": "定位：题干要求“一个把歌剧与舞蹈结合的例子”，关键词是 opera，回到原文找 opera 一词，全篇只在第 2 段（B 段）出现，出现处以 Le Triomphe de l'Amour 作具体例子。确定答案技巧：看到题干里的 an example，就知道原文一定会出现具名的具体作品。原文写 “The French opera Le Triomphe de l'Amour incorporated ballet elements in its performance”（法国歌剧《爱的胜利》在演出中融入了芭蕾元素），句中 French opera 提供“opera”这一面，incorporated ballet elements 提供“dance”这一面，中间还直接出现连字符复合词 opera-ballet，三重印证题干，故答案为 B。",
          "analysis": "第 2 段（B 段）开头两句交代：1681 年芭蕾登上舞台，随后 “The French opera Le Triomphe de l'Amour incorporated ballet elements in its performance, creating a long-standing opera-ballet tradition in France.”（法国歌剧《爱的胜利》在演出中融入了芭蕾元素，由此在法国形成了长盛不衰的“歌剧芭蕾”传统）。题干要找的是“一个把歌剧与舞蹈结合起来的舞蹈作品的例子”。原文的 Le Triomphe de l'Amour 正是这样一件作品：它的体裁是 French opera（歌剧），却在 performance 中 incorporated ballet elements（融入了芭蕾元素），一物兼具歌剧与舞蹈两种成分，因此它就是题干所说的 example。原文后面还把这个结合体命名为 opera-ballet tradition，把“歌剧加芭蕾”这层意思写得更明确。所以该信息位于 B 段，答案 B。",
          "traps": [
            "为什么不是 A 段：A 段提到芭蕾 de cour “included dance, costume, song, music and poetry”，虽然元素繁多，但它是宫廷节庆式的节目，不是歌剧，且没有出现任何具体作品名与 opera 字样。",
            "为什么不是 C 段：C 段以 Giselle 为例，但 Giselle 被描述为表现精灵与魔法世界的浪漫芭蕾，与歌剧结合无关。",
            "为什么不是 D、E、F 三段：D 段的 Swan Lake、The Sleeping Beauty、The Nutcracker，E 段的 The Rite of Spring 都是独立芭蕾作品，原文没有说它们与歌剧结合；F 段也完全没有 opera 一词。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "the century in which ballet first began",
          "translation": "芭蕾最早开始的世纪。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Ballet originated in the Italian Renaissance of the 15th century."
          },
          "synonyms": [
            "“first began” 同义替换为原文的 “originated in”（起源于）",
            "“the century” 在原文中落实为具体的 “the 15th century”（15 世纪）"
          ],
          "locatingTip": "定位：题干问“芭蕾最早开始的世纪”，全文按时间线推进，第一句就是起点，直接定位第 1 段（A 段）首句。确定答案技巧：段首第一句通常交代文章的起源信息，原文 “Ballet originated in the Italian Renaissance of the 15th century” 中 originated 即题干的 first began，the 15th century 即题干所问的世纪，两条信息齐备，因此答案落在 A 段。做这类题要养成“先看首段首句”的习惯，起源类信息不在文本中间而在开头。",
          "analysis": "第 1 段（A 段）第一句：“Ballet originated in the Italian Renaissance of the 15th century.”（芭蕾起源于 15 世纪的意大利文艺复兴时期）。这正是本文的起点句，交代了芭蕾的诞生时间与地点。题干 “the century in which ballet first began”（芭蕾最早开始的世纪）就是从这句里取信息：originated in 与 first began 是同义替换，the 15th century 就是题干所问的那个世纪。原文后面提到的 16 世纪（Catherine de Medici）、一个世纪之后的 Louis XIV、1661 年、1681 年、18 世纪中叶、19 世纪、20 世纪都是芭蕾此后各个阶段的年份，唯独首句的 15 世纪是最早的时间点，因此本题答案为 A。",
          "traps": [
            "为什么不是 B 段：B 段给出的最早时间是 “By 1661”，即 17 世纪，是舞蹈学院成立与芭蕾登台的年代，晚于芭蕾的起源，不符合“最早开始”。",
            "为什么不是 C 段：C 段讲浪漫芭蕾时期，涉及足尖舞与浪漫纱裙的引入，属于芭蕾发展中期，不是起点。",
            "为什么不是 D、E、F 三段：D 段是 19 世纪末的俄国古典芭蕾，E 段是 20 世纪初的 Ballets Russes，F 段是 20 世纪的后续演变，全部晚于 15 世纪。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "reference to a ballet that caused strong reactions from its first audiences",
          "translation": "提到一部引起首演观众强烈反应的芭蕾作品。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Their works, such as The Rite of Spring, shocked audiences with bold movements and modern themes."
          },
          "synonyms": [
            "“caused strong reactions” 同义替换为原文的 “shocked audiences”（震动了观众）",
            "“its first audiences” 对应原文的 “audiences”，即该作品首演时在场的观众",
            "“a ballet” 具体化为原文的作品名 “The Rite of Spring”（《春之祭》）"
          ],
          "locatingTip": "定位：题干的关键概念是“观众反应强烈”，属于情绪与后果类信息。回原文扫读表示反应的动词，第 5 段（E 段）中只出现一次 shocked audiences，作为 The Rite of Spring 的说明，一步命中 E 段。确定答案技巧：题干说的是“引起首演观众强烈反应”，判分点有两个，一是有具体作品名，二是有观众的强烈反应。原文 “Their works, such as The Rite of Spring, shocked audiences with bold movements and modern themes” 两点齐备：作品名 The Rite of Spring 与反应动词 shocked audiences；紧接着一句 “This period broke many traditional rules and expanded ballet's artistic boundaries” 也进一步说明这种震惊源于对传统的突破，与题干语义方向一致，故答案为 E。",
          "analysis": "第 5 段（E 段）写 20 世纪初 Sergei Diaghilev 的 Ballets Russes 带来革命：“In the early 20th century, Sergei Diaghilev's Ballets Russes revolutionised ballet by bringing together avant-garde composers, artists, and choreographers. Collaborators included Igor Stravinsky, Pablo Picasso, and Vaslav Nijinsky. Their works, such as The Rite of Spring, shocked audiences with bold movements and modern themes.”（20 世纪初，佳吉列夫的俄罗斯芭蕾舞团通过汇聚先锋派作曲家、艺术家和编舞家而彻底革新了芭蕾。合作者包括斯特拉文斯基、毕加索和尼金斯基。他们的作品，例如《春之祭》，以大胆的动作和现代的主题震动了观众）。题干要求“提到一部引起首演观众强烈反应的芭蕾作品”：The Rite of Spring 就是这部作品，shocked audiences 就是“强烈反应”，bold movements and modern themes 交代了反应剧烈的原因。句中的 audiences 指的就是该作品面世时的观众，与题干的 first audiences 一致。信息完整落在 E 段，故答案为 E。",
          "traps": [
            "为什么不是 A、B、C 三段：A 段讲宫廷芭蕾的演出与资助，B 段讲舞蹈学院、歌剧芭蕾与芭蕾 d'action，C 段讲浪漫芭蕾的主题与服装，三处都没有任何关于观众产生强烈反应的描写。",
            "为什么不是 D 段：D 段列举了 Swan Lake、The Sleeping Beauty、The Nutcracker 等名作，但只说它们 “featured precise technique, elaborate sets, and complex storytelling”，没有任何观众反应的描述，容易因为“出现了著名的芭蕾作品名”而误选。",
            "为什么不是 F 段：F 段讲 20 世纪芭蕾的演变与今日的普及，提到当代芭蕾 “performed by companies around the world and enjoyed by audiences of all ages”，观众是“欣赏（enjoyed）”，与题干的“强烈反应”方向相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–9 句子填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 9
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Catherine de Medici was known as a great 6 ________ of the arts.",
          "translation": "凯瑟琳·德·美第奇以艺术界的伟大 ________ 而闻名。",
          "answer": "patron",
          "wordClass": "名词（单数，指人；作 was known as 的表语（主语补足语），空格前有不定冠词 a 和形容词 great，后有介词短语 of the arts 作修饰，故填可数名词单数 patron，不加冠词、不加复数）",
          "locating": {
            "paragraph": "1",
            "quote": "In the 16th century Catherine de Medici, an Italian noblewoman, wife of the king of France and a great patron of the arts, began to fund ballet in the French court."
          },
          "synonyms": [
            "“was known as” 对应原文的同位语结构，原文用逗号把一个身份直接附加在 Catherine de Medici 之后，即 “a great patron of the arts”",
            "“a great … of the arts” 与原文 “a great patron of the arts” 原词复现",
            "“began to fund ballet” 是原文对该身份的具体说明，资助（fund）文化艺术正是 patron（赞助人）的行为"
          ],
          "locatingTip": "定位：题干的人名 Catherine de Medici 是全文唯一出现的大写专有名词之一，扫读即可落到第 1 段（A 段）第 4 句。确定答案技巧：空格所在部分是 “a great ________ of the arts”，原文中完全相同的结构只出现一次——同位语 “a great patron of the arts”。填空时还要用词数限制 self-check：NO MORE THAN TWO WORDS，patron 是一个词，符合要求；注意不要把 of the arts 也抄进空格，因为题干已经给出了 of the arts。答案为 patron。",
          "analysis": "原文第 1 段（A 段）写道：“In the 16th century Catherine de Medici, an Italian noblewoman, wife of the king of France and a great patron of the arts, began to fund ballet in the French court.”（16 世纪，意大利贵族女子、法国国王之妻、艺术的大赞助人凯瑟琳·德·美第奇开始出资支持法国宫廷的芭蕾）。句中 Catherine de Medici 后面跟着三个并列的同位语：an Italian noblewoman（意大利贵族女子）、wife of the king of France（法国国王之妻）、a great patron of the arts（艺术的大赞助人）。题干把其中的第三个同位语改写为谓语结构 “Catherine de Medici was known as a great ________ of the arts”，空格正是该同位语的中心词 patron。原文接下来的 began to fund ballet 进一步印证这一身份——赞助人的行为就是出资支持艺术。词性上，空格前为 a great，后为 of the arts，需要可数名词单数，且指人，故填 patron。注意不要太长：本题词数上限为两个词，写出 patron 一词即可。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "King Louis XIV famously performed the role of the 7 ________ in Ballet de la Nuit.",
          "translation": "路易十四国王曾在《夜芭蕾》中饰演 ________ 这一角色而闻名。",
          "answer": "Sun King",
          "wordClass": "专有名词（称号，两个单词；位于定冠词 the 之后，作介词 of 的宾语，指一个角色名，首字母大写，写作 Sun King）",
          "locating": {
            "paragraph": "1",
            "quote": "A passionate dancer, he performed many roles himself, including that of the Sun King in Ballet de la Nuit."
          },
          "synonyms": [
            "“performed the role of the …” 同义替换为原文的 “performed many roles himself, including that of the …”",
            "“famously” 对应原文的 “A passionate dancer”（热爱舞蹈、亲自登台，是这种“著名”的依据）",
            "“Ballet de la Nuit” 在原文中原词复现，是本题最可靠的定位锚点"
          ],
          "locatingTip": "定位：题干里的作品名 Ballet de la Nuit 在全文只出现一次，扫读这个词即可落到第 1 段（A 段）关于 Louis XIV 的句子。确定答案技巧：既然作品名已经给出，答案必然是紧跟其前、由 of 引出的那个角色名。原文写 “including that of the Sun King in Ballet de la Nuit”，that 回指 roles，即“角色”，of 后面的 the Sun King 就是角色名，填入后 “performed the role of the Sun King in Ballet de la Nuit” 与原文完全对应。注意 Sun King 是两个单词，恰好符合 NO MORE THAN TWO WORDS；首字母必须大写，因为它是一个固定的称号。",
          "analysis": "原文第 1 段（A 段）在讲 Louis XIV 时写道：“A passionate dancer, he performed many roles himself, including that of the Sun King in Ballet de la Nuit.”（他本人是一名热爱舞蹈的舞者，亲自扮演过许多角色，其中包括在《夜芭蕾》中饰演太阳王）。句中的 he 指代前一句的 King Louis XIV；that of 是 roles 的指代形式，即“众多角色之一”；空格所需的正是该角色的名称 the Sun King。题干把原文的主动列举 “performed many roles himself, including that of the Sun King” 改写成聚焦单一角色的 “famously performed the role of the …”，只保留一个空。填空时注意：（1）Sun King 是固定称号，首字母大写；（2）共两个单词，符合 NO MORE THAN TWO WORDS 的限制，不要写成 the Sun King（会多出一个词），因为题干已经给出 the。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Jean Georges Noverre introduced the ballet d'action, a dramatic style that features a 8 ________.",
          "translation": "让-乔治·诺维尔引入了 ballet d'action（情节芭蕾），这是一种以 ________ 为特征的戏剧性风格。",
          "answer": "narrative",
          "wordClass": "名词（单数，可数；位于不定冠词 a 之后，作动词 features 的宾语，指这种芭蕾风格所具备的叙事内容，故填名词单数形式 narrative）",
          "locating": {
            "paragraph": "2",
            "quote": "introduced the ballet d'action, a dramatic style of ballet that features a narrative"
          },
          "synonyms": [
            "“a dramatic style that features a …” 与原文 “a dramatic style of ballet that features a …” 原词复现，仅少一个 of ballet 的修饰语",
            "“introduced” 在原文中原词复现，主语同为 Jean Georges Noverre",
            "“the ballet d'action” 在原文中原词复现，是本题的直接锚点"
          ],
          "locatingTip": "定位：题干里保留了术语 ballet d'action 和人名 Jean Georges Noverre，二者都出现在第 2 段（B 段），直接跳到该段找 introduced 一句即可。确定答案技巧：题干几乎是原文句子的缩小版，空格前是 “features a”，原文对应处是 “features a narrative”，答案即为空格后的第一个词 narrative。填空时注意：（1）features 是第三人称单数，其后宾语用单数名词，不要写 narratives；（2）本题限制为两个词以内，narrative 一词即答案。",
          "analysis": "原文第 2 段（B 段）：“His idea that ballet should contain expressive dramatic movement, and this should reveal relationships between characters, introduced the ballet d'action, a dramatic style of ballet that features a narrative. Noverre's work is considered the forerunner to the narrative ballets of the 19th century.”（他认为芭蕾应当包含富于表现力的戏剧动作，并借此揭示人物之间的关系，这一主张引出了芭蕾 d'action——一种以叙事为特征的戏剧性芭蕾风格。诺维尔的作品被认为是 19 世纪叙事芭蕾的先声）。题干把这一句压缩为 “Jean Georges Noverre introduced the ballet d'action, a dramatic style that features a ________”，与原文的同位语结构 “a dramatic style of ballet that features a narrative” 一一对应，空格正是 features 的宾语 narrative。后一句 “the narrative ballets of the 19th century” 中 narrative 再次出现，可作为交叉验证。词性上，空格前是冠词 a，需要一个单数可数名词，写 narrative 即可。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "In romantic ballets, women were often portrayed as passive and 9 ________.",
          "translation": "在浪漫芭蕾中，女性常被刻画成被动而 ________ 的形象。",
          "answer": "fragile",
          "wordClass": "形容词（与前面的 passive 并列，作 women were portrayed as 的表语（主语补足语），描述女性形象，填原级形容词 fragile）",
          "locating": {
            "paragraph": "3",
            "quote": "Early classical ballets such as Giselle evoked the world of spirits and magic, and often showed women as passive and fragile."
          },
          "synonyms": [
            "“were often portrayed as” 同义替换为原文的 “often showed women as”（把女性表现为）",
            "“passive and …” 与原文 “passive and fragile” 原词复现，passive 是文中给出的现成定位锚点",
            "“In romantic ballets” 对应原文下一句的 “romantic ballets”，本题所在句讲的是这些芭蕾的共同主题"
          ],
          "locatingTip": "定位：题干里被动语态的表语 passive 是一个特征鲜明的形容词，全篇只出现一次，在第 3 段（C 段）。确定答案技巧：空格与 passive 由 and 并列，词性必然与 passive 相同，即另一个形容词。原文对应处写 “often showed women as passive and fragile”，and 后紧接的 fragile 就是答案。注意题干把原文的 “showed women as” 改写成被动结构 “women were portrayed as”，主语与宾语的位置互换，但并列的形容词顺序未变，因此答案是 fragile（脆弱的），而不是 passive 的同义词。",
          "analysis": "原文第 3 段（C 段）首句：“Early classical ballets such as Giselle evoked the world of spirits and magic, and often showed women as passive and fragile. These themes are reflected in the ballets of the time which are called romantic ballets.”（Giselle 等早期古典芭蕾唤起的是精灵与魔法的世界，常常把女性表现为被动而脆弱的形象。这些主题反映在当时被称为浪漫芭蕾的作品中）。第二句说明这些主题正是浪漫芭蕾的特征，因此题干用 In romantic ballets 作状语，指向的仍是第一句所讲的内容。对应关系为：showed women as 对应 were portrayed as（都是“被呈现为”的意思），passive and fragile 原词保留，空格取并列结构中的第二个形容词 fragile。词性上，and 连接的两个成分必须同类，passive 是形容词，故空格也必须是形容词；本题限制为不超过两个词，填 fragile 一个词即可，不要写成 weak（虽同义但不是原文用词）。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "The first dance academy opened in Italy during the 15th century.",
          "translation": "第一所舞蹈学院于 15 世纪在意大利开办。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "By 1661, a dance academy had opened in Paris, and in 1681 ballet moved to the stage."
          },
          "synonyms": [
            "“a dance academy opened” 与原文 “a dance academy had opened” 原词对应，指同一件事",
            "“in Italy” 与原文的 “in Paris” 相互冲突：原文明确说学院开在巴黎，而不是意大利",
            "“during the 15th century” 与原文的 “By 1661” 相互冲突：学院开办于 17 世纪，而不是 15 世纪"
          ],
          "locatingTip": "定位：题干的关键名词是 dance academy（舞蹈学院），这个短语在全文只出现一次，位于第 2 段（B 段）首句。确定答案技巧：本题有两处可判错的点，做题时要逐一比对——地点与时间。原文 “By 1661, a dance academy had opened in Paris”，地点是 Paris，时间是 By 1661（即 17 世纪），而题干说的是 in Italy 与 during the 15th century，地点和时间双双与原文相反。只要发现任一矛盾即可判 FALSE，本题有两处，属于典型的“数字与地点被偷换”型题目，因此答案是 FALSE。",
          "analysis": "第 2 段（B 段）第一句：“By 1661, a dance academy had opened in Paris, and in 1681 ballet moved to the stage.”（到 1661 年时，一所舞蹈学院已在巴黎开办；1681 年芭蕾登上舞台）。题干 “The first dance academy opened in Italy during the 15th century” 包含三个信息点：学院（dance academy）、地点（Italy）、时间（the 15th century）。原文的三处对应信息是：学院（a dance academy）、地点（Paris）、时间（By 1661，属 17 世纪）。学院这一项吻合，但地点与时间均与原文对立——原文是巴黎而非意大利，是 17 世纪而非 15 世纪。更要注意的是，15 世纪在本文中是芭蕾的起源时间（“Ballet originated in the Italian Renaissance of the 15th century”），题干把“芭蕾起源于意大利的 15 世纪”这一信息挪用到“第一所舞蹈学院”上，属于张冠李戴，考生若只凭印象作答极易误判为 TRUE。原文存在明确且相反的信息，故判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文两个关键细节都与题干相反——学院在 Paris 而非 Italy，时间是 By 1661（17 世纪）而非 15 世纪。题干的说法是把第 1 段的“芭蕾起源于 15 世纪的意大利”错误地安到了舞蹈学院头上，与原文事实不符。",
            "为什么不是 NOT GIVEN：原文对舞蹈学院的地点与时间都做了明确交代（“By 1661, a dance academy had opened in Paris”），信息不但存在，而且与题干直接矛盾。存在相反信息时按规则判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Jean Georges Noverre believed that ballet should be part of opera.",
          "translation": "让-乔治·诺维尔认为芭蕾应当成为歌剧的一部分。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In the mid-18th century, however, French ballet master Jean Georges Noverre rebelled against the artifice of opera-ballet, believing that ballet could stand on its own as an art form."
          },
          "synonyms": [
            "“Jean Georges Noverre believed” 与原文 “French ballet master Jean Georges Noverre … believing” 原词对应，人名与“认为”这一动作都在",
            "“ballet should be part of opera” 与原文 “ballet could stand on its own as an art form”（芭蕾可以独立成为一种艺术形式）语义相反：一个是依附歌剧，一个是独立于歌剧",
            "“rebelled against the artifice of opera-ballet”（反对歌剧芭蕾的浮华造作）从态度上进一步否定题干所说“依附歌剧”的立场"
          ],
          "locatingTip": "定位：题干的人名 Jean Georges Noverre 全篇只出现一次，位于第 2 段（B 段）中部，人名加 believing 是本题的双重锚点。确定答案技巧：判断这类“某人认为某观点”的题，必须找到原文中刻画其人立场的词。原文用 rebelled against（反对）与 “believing that ballet could stand on its own as an art form”（认为芭蕾可以独立成为艺术形式）两处，方向都是“要脱离歌剧、独立成体”，而题干说他认为芭蕾应当 part of opera（成为歌剧的一部分），方向正好相反，故判 FALSE。",
          "analysis": "第 2 段（B 段）中段写道：“In the mid-18th century, however, French ballet master Jean Georges Noverre rebelled against the artifice of opera-ballet, believing that ballet could stand on its own as an art form.”（然而在 18 世纪中叶，法国芭蕾大师诺维尔起来反对歌剧芭蕾的浮华造作，他相信芭蕾可以独立成为一种艺术形式）。题干说 Noverre 认为芭蕾应当成为歌剧的一部分。原文给出的却是相反立场：一是 rebelled against the artifice of opera-ballet，对歌剧芭蕾这种混合形式持否定态度；二是 believing that ballet could stand on its own（可独立存在），强调脱离歌剧而自立。两处信息一并指向“不依附歌剧”，与题干的 part of opera 正面对立，因此答案是 FALSE。注意原文该句中也确实用了 opera-ballet 这个复合词，但它出现在“反对”的语境里，不能据此认为他支持歌剧与芭蕾结合。",
          "traps": [
            "为什么不是 TRUE：原文对 Noverre 立场的表达是反方向的——他反对 opera-ballet，并认为芭蕾应当独立（stand on its own）。若题干说“他认为芭蕾应独立于歌剧”才是 TRUE；题干却说他主张依附歌剧，与原文矛盾。",
            "为什么不是 NOT GIVEN：原文用 rebelled against 与 believing that … 明确写出了他的主张，信息完整且态度清晰，不属于未提及；这是“有信息但与题干相反”的情形，因此判 FALSE。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Tchaikovsky composed music for several famous Russian ballets.",
          "translation": "柴可夫斯基为好几部著名的俄罗斯芭蕾舞剧谱写了音乐。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The late 19th century saw the rise of classical ballet in Russia, where composers such as Tchaikovsky collaborated with choreographers like Marius Petipa. Their partnership produced timeless masterpieces including Swan Lake, The Sleeping Beauty, and The Nutcracker."
          },
          "synonyms": [
            "“composed music for” 对应原文把 Tchaikovsky 列为 “composers such as Tchaikovsky”，并以 “Their partnership produced” 说明作品由作曲家与编舞家共同产出",
            "“several famous Russian ballets” 同义替换为原文的 “timeless masterpieces including Swan Lake, The Sleeping Beauty, and The Nutcracker”（三部不朽名作，且都出现在讲俄国芭蕾的段落里）",
            "“Russian” 对应原文的 “in Russia” 与 “classical ballet in Russia”"
          ],
          "locatingTip": "定位：题干的人名 Tchaikovsky 是高辨识度的专有名词，全篇只出现在第 4 段（D 段）。确定答案技巧：题干包含两层信息——他是作曲家、为多部著名俄罗斯芭蕾谱曲。原文先说 “composers such as Tchaikovsky collaborated with choreographers like Marius Petipa”（像柴可夫斯基这样的作曲家与彼季帕这样的编舞家合作），点明其作曲家身份；紧接着列举 “Swan Lake, The Sleeping Beauty, and The Nutcracker” 三部作品，称其为 timeless masterpieces，且它们都产生于俄罗斯古典芭蕾的语境之中，与题干的 several famous Russian ballets 完全对应。信息方向一致、数量吻合，故判 TRUE。",
          "analysis": "第 4 段（D 段）写 19 世纪末俄国古典芭蕾兴起：“The late 19th century saw the rise of classical ballet in Russia, where composers such as Tchaikovsky collaborated with choreographers like Marius Petipa. Their partnership produced timeless masterpieces including Swan Lake, The Sleeping Beauty, and The Nutcracker.”（19 世纪末，古典芭蕾在俄国兴起，像柴可夫斯基这样的作曲家与彼季帕这样的编舞家合作。他们的合作产出了包括《天鹅湖》《睡美人》和《胡桃夹子》在内的不朽杰作）。把原文信息逐项对照题干：身份上，Tchaikovsky 属于 composers（作曲家），谱曲正是他的本职；作品上，原文用 including 明确列出三部作品，均为芭蕾名作（timeless masterpieces），数量上符合 several（数部）；地域上，这一段通篇讲 classical ballet in Russia，作品自然属于 Russian ballets。三项信息与题干一一吻合，且没有矛盾成分，因此答案是 TRUE。需要注意的是原文的“合作”并没有削弱“柴可夫斯基谱曲”这一层——作曲家与编舞家分工协作本就是芭蕾创作的常态，合作意味着他参与了这些作品音乐的创作。",
          "traps": [
            "为什么不是 FALSE：题干的两层信息（作曲家身份、为多部著名俄罗斯芭蕾谱曲）在原文中都有正面支持，没有可构成矛盾的表述，例如原文并未说这些作品出自他人之手。",
            "为什么不是 NOT GIVEN：原文不仅出现了 Tchaikovsky 的名字，还给出了他所属的类别（composers）、与他合作的编舞家以及三部具名作品，信息充分且具体，不存在信息缺失。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "George Balanchine's neoclassical ballets focused on elaborate storytelling.",
          "translation": "乔治·巴兰钦的新古典主义芭蕾专注于繁复的叙事。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "In America, George Balanchine co-founded the New York City Ballet and developed neoclassical ballet, which stripped away elaborate narratives and costumes to focus on pure movement and musicality."
          },
          "synonyms": [
            "“George Balanchine's neoclassical ballets” 与原文 “George Balanchine … developed neoclassical ballet” 原词对应",
            "“focused on elaborate storytelling” 与原文 “stripped away elaborate narratives and costumes to focus on pure movement and musicality” 相互冲突：原文是“去除繁复叙事”，题干却说是“专注于繁复叙事”",
            "“focused on” 在原文中原词复现，但 focus 的宾语被偷换成了 elaborate storytelling"
          ],
          "locatingTip": "定位：题干的人名 George Balanchine 与术语 neoclassical ballet 都只在第 6 段（F 段）出现，一步定位。确定答案技巧：本题的关键动词是 stripped away（剥除），它是“去掉”而非“强调”。原文说新古典主义芭蕾 “stripped away elaborate narratives and costumes to focus on pure movement and musicality”（剥除了繁复的叙事与服装，专注于纯粹的动作与音乐性），也就是说 elaborate 修饰的对象 narratives 是被 strip away（去除）的，而 focus on 的对象是 pure movement and musicality。题干却把 elaborateness 直接嫁接到 focus on 的对象上，写出了 focused on elaborate storytelling，与原文恰好相反，故判 FALSE。",
          "analysis": "第 6 段（F 段）写：“In America, George Balanchine co-founded the New York City Ballet and developed neoclassical ballet, which stripped away elaborate narratives and costumes to focus on pure movement and musicality.”（在美国，巴兰钦与人共同创办了纽约城市芭蕾舞团，并发展出新古典主义芭蕾；这种芭蕾剥除了繁复的叙事与服装，专注于纯粹的动作与音乐性）。题干说巴兰钦的新古典主义芭蕾“专注于繁复的叙事（focused on elaborate storytelling）”。原文用了同样的动词 focus on，但 focus 的宾语是 pure movement and musicality（纯粹的动作与音乐性），而 elaborate 只是用来修饰被 stripped away（剥除）的 narratives 和 costumes。题干把本该被剥除的“繁复叙事”变成了关注的焦点，等于把原文的主次关系完全颠倒，属于事实矛盾，因此答案是 FALSE。做题提醒：在这类题中，遇到与原文相同的动词（focused on）时不要急于判 TRUE，必须核对动词的宾语以及修饰语所依附的对象，本题正是在宾语位置做了手脚。",
          "traps": [
            "为什么不是 TRUE：原文对新古典主义芭蕾的性质描述是去掉 elaborate narratives（繁复叙事）和 costumes，转而关注 pure movement and musicality。也就是说“繁复叙事”是被剥离的对象，而题干把它说成关注的核心，与原文直接矛盾。",
            "为什么不是 NOT GIVEN：原文对巴兰钦的新古典主义芭蕾的性质有完整交代（创办纽约城市芭蕾舞团、剥离繁复叙事与服装、专注动作与音乐性），信息明确且与题干相反，不属于未提及，因此判 FALSE。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
