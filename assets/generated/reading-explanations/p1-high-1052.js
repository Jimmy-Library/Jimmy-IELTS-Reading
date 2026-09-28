(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1052", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1052",
  "meta": {
    "examId": "p1-high-1052",
    "title": "Art in Iron and Steel 钢铁艺术",
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
          "stem": "Art connected with architecture for the first time.",
          "translation": "艺术第一次与建筑（桥梁建筑）建立起联系。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Long before Sheeler, other artists, too, had seen the beauty and humanity in works of engineering and technology. This is perhaps no more evident than in Coalbrookdale, England, where iron, which was so important to the industrial revolution, was worked for centuries."
          },
          "synonyms": [
            "“Art connected with architecture” 对应原文的 “other artists, too, had seen the beauty and humanity in works of engineering and technology”，即艺术家把桥梁这类建筑工程当作审美对象",
            "“for the first time” 对应原文的 “the world's first iron bridge”（世界上第一座铁桥）以及 “Long before Sheeler”（远在 Sheeler 之前）这一时间副词短语",
            "“architecture” 对应原文的 the works of engineering 所指的桥梁建筑，该句后文用 classic stone and timber bridges 进一步说明这类「建筑」"
          ],
          "locatingTip": "定位：本题题干没有任何专有名词，只能抓「the first time」这个表示「首次」的信息点。全文表示「第一次／首次」的表述只有第 3 段的 the world's first iron bridge，所以扫读每段段首句、盯住 first 这类词即可锁定 C 段。确定答案技巧：C 段先用 Long before Sheeler, other artists, too, had seen the beauty and humanity in works of engineering and technology 把「艺术与工程发生关联」的时间推到全文最早；紧接着用 the world's first iron bridge 给出这种关联的起点。两条信息合起来正是题干的 Art connected with architecture for the first time，因此选 C。要注意本题属于段落信息匹配中最难的一类：题干是抽象概括，原文没有字面对应的句子，必须靠 the world's first iron bridge 这个唯一表「首次」的信息点来定段。",
          "analysis": "第 3 段（C）的功能是全文的时间起点。首句 “Long before Sheeler, other artists, too, had seen the beauty and humanity in works of engineering and technology.”（远在 Sheeler 之前，其他艺术家也已经在工程与技术的作品中看到了美与人文性）明确表示：艺术与工程（建筑）的结合并不是 20 世纪才开始的，而是更早。第二句接着说这种结合 “is perhaps no more evident than in Coalbrookdale, England”（在英国 Coalbrookdale 表现得最为明显），随后给出具体对象：late eighteenth century 由 Abraham Darby III 铸造的 the world's first iron bridge，并说它是对 “the classic stone and timber bridges that dotted the countryside” 的 “a dramatic departure”（一次彻底背离）。也就是说，人类第一次把这种建筑（桥梁）从石料木材改成铸铁结构，而艺术家们恰恰从这类工程作品中看到了美，两者合在一起构成「艺术第一次与建筑联系起来」。对照其余段落：第 2 段（B）讲 1927 年的汽车厂，第 5 段（E）讲 19 世纪的铁路、车站与教堂题材，第 6 段（F）讲 20 世纪的运河与钢结构桥，时间上都晚于 C 段，且都不含「首次」的表达；第 1 段（A）只是讨论艺术与工程的总体张力，顺带类比两座大桥，没有谈谁先谁后。因此本题的落点在 C 段。需要提醒的是：原文并没有出现 art connected with architecture 这样的字面表述，本段强调的是「艺术家最早在工程（桥梁建筑）中看到美」，解题时必须把 had seen the beauty in works of engineering 与 the world's first iron bridge 合并理解，才能推出题干所说的「第一次」。",
          "traps": [
            "为什么不是 B（第 2 段）：该段讲的是 1927 年 River Rouge 汽车厂与 Sheeler 的摄影、油画，属于 20 世纪的工业题材，时间不早，也没有 first 之类的表达。",
            "为什么不是 E（第 5 段）：该段说 19 世纪铁路与蒸汽机进入画面，并总结到 20 世纪工程已成为公认题材，讲的是「确立为题材」而非「第一次与建筑发生联系」。",
            "为什么不是 A（第 1 段）：该段讨论艺术与工程关系的紧张感，只是类比提到 Brooklyn 与 Golden Gate 两座桥，没有谈二者建立联系的先后。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Small artistic object and constructions built are put together.",
          "translation": "小型的艺术物件与建造起来的建筑被放在一起（纳入同一取材范围）。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The Impressionist Claude Monet painted man-made structures like railway stations and cathedrals as well as water lilies."
          },
          "synonyms": [
            "“constructions built” 对应原文的 “man-made structures like railway stations and cathedrals”（人造建筑）",
            "“small artistic object” 对应同段下一句的 “engineers and inventors – and their inventions”（工程师与发明家的发明物，即小型人造物件）以及本句的 “water lilies”（小型具体题材）",
            "“are put together” 对应原文的 “as well as” 并列结构：大型人造建筑与小型题材被列在同一位艺术家的取材范围内"
          ],
          "locatingTip": "定位：题干没有专有名词，靠两个并列信息点「small object」和「constructions built」去找同时出现「小物件」与「人造建筑」的段落。第 5 段（E）在相邻两句里做了两次这样的并列，是最集中的一处。确定答案技巧：Monet 一句用 man-made structures like railway stations and cathedrals as well as water lilies，把大型人造建筑（车站、大教堂）与小型题材（睡莲）用 as well as 并列；紧接着 Schussele 一句又把 engineers and inventors – and their inventions（发明物，小型人造物件）与 the American founding fathers 并列。原文用同一句式把「建筑」和「小物件」放在一起，正对应题干的 are put together，因此选 E。",
          "analysis": "第 5 段（E）讲 19 世纪艺术家取材范围的扩展，两句是本题的落点。第一句：“The Impressionist Claude Monet painted man-made structures like railway stations and cathedrals as well as water lilies.”（印象派画家莫奈既画车站、大教堂这类人造建筑，也画睡莲）——句中的 as well as 把「建造起来的建筑」与「小型题材」并置在同一画家的作品清单里。第二句：“Portrait painters such as Christian Schussele found subjects in engineers and inventors – and their inventions – as well as in the American founding fathers.”（像 Christian Schussele 这样的肖像画家从工程师和发明家——以及他们的发明物——还有美国开国元勋身上寻找题材）——这里再次用 as well as 把「人」「他们的发明物」与「历史人物」并列，其中 their inventions 就是典型的小型人造物件。两句话合起来说明：在这一时期，艺术家把大型建筑与小型物件（发明物、静物题材）同等地纳入了艺术表现对象的范围，即题干所说的 small artistic object and constructions built are put together。对照其他段落：第 2 段（B）只围绕一座汽车厂展开，没有小物件；第 4 段（D）画的是同一处铁桥景观中的行人、骡子、小船，属于同一场景内的细节，不是「小物件与建筑并列」这一取材现象；第 7 段（G）是 Pennell 对工程与艺术关系的议论，讨论的是 scale 与 The Wonder of Work，完全没有具体物件与建筑的并列。因此答案是 E 段。",
          "traps": [
            "为什么不是 B（第 2 段）：该段只讲 River Rouge 汽车厂与 Sheeler 的工厂题材作品，没有把小型物件与建筑并列。",
            "为什么不是 D（第 4 段）：该段描绘的是铁桥画作里的桥上人物与河上小船，全部属于同一处景观，不是「小物件与大型建筑并列」的取材现象。",
            "为什么不是 G（第 7 段）：该段是 Pennell 关于「伟大的工程就是伟大的艺术」的评论，谈的是规模与感受，不涉及具体物件与建筑的并列。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The working conditions were recorded by the artist as an exciting subject.",
          "translation": "工作场景（工作状况）被艺术家记录下来，并被视为一个激动人心的题材。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The world's largest car factory captured the imagination of Sheeler, who described it as the most thrilling subject he ever had to work with."
          },
          "synonyms": [
            "“exciting subject” 同义替换为原文的 “the most thrilling subject”",
            "“The working conditions were recorded by the artist” 对应原文的 “the painter/photographer Charles Sheeler was chosen to photograph it”，以及首句 “photographers could reveal the beauty of line and composition in a worker doing something as common as using a wrench to turn a bolt”",
            "“recorded” 对应原文的 photograph 与 composed oil paintings（用摄影和油画两种方式记录）"
          ],
          "locatingTip": "定位：题干的核心是「工作场景被艺术家记录」与「激动人心的题材」两点，其中 exciting 的同义表达 thrilling 是全文唯一的最高级评价词，一出现即可停住。它位于第 2 段（B）第三句。确定答案技巧：第 2 段首句说摄影师能在工人用扳手拧螺栓这样平凡的动作中发现线条与构图之美（working conditions 被记录），第三句说这座世界最大的汽车厂是 Sheeler 有生以来最具震撼力的题材（described it as the most thrilling subject），thrilling 与题干的 exciting 精确对应，记录者就是被选中去拍摄工厂的 Charles Sheeler，因此选 B。",
          "analysis": "第 2 段（B）从「工人」和「工厂」两个层面说明工程与工业场景如何成为艺术题材。首句：“The human worker may have appeared to be but a cog in the wheel of industry, yet photographers could reveal the beauty of line and composition in a worker doing something as common as using a wrench to turn a bolt.”（工人也许看上去只是工业巨轮上的一个齿轮，但摄影师却能在一个工人用扳手拧螺栓这样寻常的动作里揭示线条与构图之美）——这句正是题干 the working conditions were recorded by the artist 的对应：工作动作（working conditions）被摄影师记录下来并成为审美对象。第二句交代 Henry Ford 的 River Rouge 工厂 1927 年投产 Model A，画家兼摄影师 Charles Sheeler 被选中去拍摄它，说明记录者是谁。第三句是本题定位句：“The world's largest car factory captured the imagination of Sheeler, who described it as the most thrilling subject he ever had to work with.”（这座世界最大的汽车厂激发了 Sheeler 的想象，他称这是他处理过的最激动人心的题材）。这里的 the most thrilling subject 与题干的 an exciting subject 是同义改写（thrilling 即 exciting，subject 原词复现）；末句补充他自己也为工厂创作了油画，题为 American Landscape 与 Classic Landscape，进一步证明「工作／工业场景被他记录并当作激动人心的题材」。因此答案是 B 段。",
          "traps": [
            "为什么不是 D（第 4 段）：该段记录的是桥上的观景者、赶骡人和划小船的人，属于风景中的日常生活，不是「工作条件」，也没有 thrilling 这类评价。",
            "为什么不是 H（第 8 段）：该段确实拍了工地上高空作业的工人，但原文强调的是危险、缺少安全带和安全帽，以及唤起对勇气和技术的敬佩，并没有把这种工作称为 exciting／thrilling 的题材。",
            "为什么不是 F（第 6 段）：该段只是列举 Pennell 画过的运河与桥梁，没有涉及工作场景的记录。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Mention of one engineers' artistic work on an unfinished engineering project.",
          "translation": "提到了某位（在工程师中最知名的）艺术家针对一项未完成的工程项目所创作的艺术作品。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "He is perhaps best known among engineers for his depiction of the Panama Canal as it neared completion and his etchings of the partially completed Hell Gate and Delaware River bridges."
          },
          "synonyms": [
            "“an unfinished engineering project” 同义替换为原文的 “the Panama Canal as it neared completion” 与 “the partially completed Hell Gate and Delaware River bridges”",
            "“one engineers' artistic work” 对应原文的 “He is perhaps best known among engineers for his depiction … and his etchings …”，即工程师圈子里最知名的那位艺术家的绘画与蚀刻作品",
            "“Mention of” 对应本段以列举方式提及的具体作品（depiction、etchings）"
          ],
          "locatingTip": "定位：题干的两个信息点是「未完成的工程」与「艺术家的作品」。表示「未完成」的说法有 neared completion 和 partially completed，两处都集中在第 6 段（F）。确定答案技巧：F 段说 Pennell 在工程师当中最有名的一件事，是他画的即将完工的巴拿马运河，以及尚未建成的 Hell Gate 桥与 Delaware River 桥的蚀刻画；as it neared completion 与 partially completed 都落在「工程尚未完成」这一层意思上，而这些画正是艺术家针对这些工程创作的作品，因此选 F。",
          "analysis": "第 6 段（F）介绍美国出生的画家 Joseph Pennell。首句说他为许多欧洲游记和书籍绘制插图；第二句说他早年画过施工中、被脚手架遮盖的建筑，晚年回到美国记录第一次世界大战期间的工业活动；第三句是本题定位句：“He is perhaps best known among engineers for his depiction of the Panama Canal as it neared completion and his etchings of the partially completed Hell Gate and Delaware River bridges.”（在工程师当中他最出名的也许是对即将完工的巴拿马运河的描绘，以及尚未建成的 Hell Gate 桥和 Delaware River 桥的蚀刻画）。句中两处关键信息与题干严丝合缝：一是 as it neared completion（即将完工）与 the partially completed（部分完成）都表示工程尚未建成，对应题干的 an unfinished engineering project；二是 depiction（描绘）与 etchings（蚀刻画）都是这位艺术家对工程所做的艺术创作，对应题干的 one engineers' artistic work——among engineers 这一限定还暗示了他在工程师群体中格外受认可。因此答案是 F 段。",
          "traps": [
            "为什么不是 G（第 7 段）：该段是 Pennell 关于「伟大的工程就是伟大的艺术」的言论与感想，属于观点，不是对某项未完成工程的作品描述。",
            "为什么不是 H（第 8 段）：Hine 拍摄的帝国大厦确实在施工中，但原文没有用 neared completion、partially completed 之类的「未完工」表述，重点在工人个人的风险与勇气，而不是「某位艺术家对未完成工程的艺术作品」。",
            "为什么不是 C（第 3 段）：该段的铁桥是已经建成、至今仍横跨河流的工程（still spans the river），并非未完成的工程。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Two examples of famous bridges which became the iconic symbols of those cities.",
          "translation": "两个著名的桥梁实例，它们成为了所在城市的标志性象征。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "At the same time, landmark megastructures such as the Brooklyn and Golden Gate bridges are almost universally hailed as majestic human achievements as well as great engineering monuments that have come to embody the spirits of their respective cities."
          },
          "synonyms": [
            "“Two examples of famous bridges” 对应原文的 “landmark megastructures such as the Brooklyn and Golden Gate bridges”，landmark 即「地标性的、著名的」",
            "“became the iconic symbols of those cities” 同义替换为原文的 “great engineering monuments that have come to embody the spirits of their respective cities”，embody the spirits 即成为象征",
            "“those cities” 对应原文的 “their respective cities”（各自的城市），与两座桥一一对应"
          ],
          "locatingTip": "定位：题干的关键信息是「两座桥」加「代表各自城市」，先扫读找桥名。Brooklyn 与 Golden Gate 同时出现在第 1 段（A）同一句中，数量上正好是两个，且该句立刻说它们 embody the spirits of their respective cities。确定答案技巧：把原文与题干逐项对照：landmark megastructures such as the Brooklyn and Golden Gate bridges 对应 two examples of famous bridges；come to embody the spirits of their respective cities 对应 became the iconic symbols of those cities；majestic human achievements 与 universally hailed 则落实了「著名」这一层。三项都能对上，故选 A。",
          "analysis": "第 1 段（A）先论述艺术与工程关系的紧张（assembly lines、robots、computers 带来的负面联想），随后用转折给出反例。定位句：“At the same time, landmark megastructures such as the Brooklyn and Golden Gate bridges are almost universally hailed as majestic human achievements as well as great engineering monuments that have come to embody the spirits of their respective cities.”（与此同时，像布鲁克林大桥和金门大桥这样的地标性巨型结构，几乎被普遍赞颂为人类的宏伟成就，以及已经融入各自城市精神的伟大工程纪念碑）。句中三项信息与题干一一对应：第一，such as the Brooklyn and Golden Gate bridges 给出两座桥的具体例子，对应 two examples of famous bridges；第二，landmark（地标）与 almost universally hailed（几乎被普遍赞誉）说明它们「著名」；第三，come to embody the spirits of their respective cities（已经开始体现各自城市的精神）正是「成为所在城市的标志性象征」的改写，respective cities 也与题干的 those cities 对应。段末一句 The relationship between art and engineering has seldom been easy or consistent 只是收束主题，不含新信息。因此答案是 A 段。",
          "traps": [
            "为什么不是 C（第 3 段）：该段虽然出现 Iron Bridge，但只写了一座桥，而且完全没有提到它代表某座城市。",
            "为什么不是 F（第 6 段）：该段确实提到 Hell Gate 桥与 Delaware River 桥两座桥，但它们一处仍在施工中、一处只是蚀刻对象，原文从未说它们成为城市象征。",
            "为什么不是 D（第 4 段）：该段通篇只描绘 Iron Bridge 一座桥在画中的样子，既不是两座，也没有城市象征的含义。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–10 人名观点匹配（Match each statement with the correct person）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 10
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Who made a comment that concrete constructions have a beauty just as artistic processes created by engineers the architects?",
          "translation": "谁评论说，具体的工程建造同样具有美，正如身为建筑师的工程师们所创造出的艺术过程一样？",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Pennell has often been quoted as saying, “Great engineering is great art,” a sentiment that he expressed repeatedly."
          },
          "synonyms": [
            "“made a comment” 同义替换为原文的 “has often been quoted as saying” 与 “a sentiment that he expressed repeatedly”",
            "“engineers the architects” 对应原文引语 “engineers are the greatest architects and the most pictorial builders since the Greeks”",
            "“concrete constructions have a beauty” 对应原文的 “Where some observers saw only utility, Pennell saw also beauty”",
            "人名 Joseph Pennell 与选项 E 直接对应"
          ],
          "locatingTip": "定位：题干里有 made a comment 这类引述性动词，说明原文必然出现引语。全文带引号的人物言论集中在第 7 段（G），段首即两次点名 Pennell，扫读时看到引号加人名就可以停下来精读。确定答案技巧：Pennell 的名言 “Great engineering is great art”（伟大的工程就是伟大的艺术）以及 “I know that engineers are the greatest architects and the most pictorial builders since the Greeks”（我知道工程师是自希腊人以来最伟大的建筑师和最具绘画性的建造者），正是题干所说的「工程建造具有美，工程师就是建筑师」这一评论的原话来源；同段还有 Where some observers saw only utility, Pennell saw also beauty 作补充。因此答案是选项 E（Joseph Pennell），对应第 7 段（G）。",
          "analysis": "第 7 段（G）整段围绕 Pennell 对工程与艺术关系的看法展开。首句：“Pennell has often been quoted as saying, “Great engineering is great art,” a sentiment that he expressed repeatedly.”（Pennell 常被引用说「伟大的工程就是伟大的艺术」，这是他反复表达的观点）。第二句紧接着给出更具体的一句引语：“He wrote of his contemporaries, “I understand nothing of engineering, but I know that engineers are the greatest architects and the most pictorial builders since the Greeks.””（他这样写他的同代人：「我对工程一无所知，但我知道工程师是自希腊人以来最伟大的建筑师、最具绘画性的建造者。」）这两句合起来完全覆盖题干：made a comment 对应 has often been quoted as saying 与 he expressed repeatedly；concrete constructions have a beauty 对应段中 Where some observers saw only utility, Pennell saw also beauty 以及引语中的 great art；artistic processes created by engineers the architects 对应 engineers are the greatest architects and the most pictorial builders。文中明确给出说话人是 Pennell，故选项为 E。本题属于人名的同义改写匹配，解题时只要把人名与「发表评论」这一行为绑定即可，不必逐词翻译整句引语。",
          "traps": [
            "为什么不是 A（Charles Sheeler）：第 2 段只说他觉得汽车厂是最 thrilling 的题材并给作品起了名字，从未发表关于「工程师即建筑师」的看法。",
            "为什么不是 D（Christian Schussele）：第 5 段只说他从工程师、发明家和美国开国元勋身上取材，没有留下任何言论。",
            "为什么不是 C（Claude Monet）：第 5 段仅提到他画过车站、大教堂与睡莲，不涉及任何评论。",
            "为什么不是 B（Michael Rooker）：第 4 段只提到他 1792 年的一幅铁桥画作，没有任何引语或评论。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Who made a romantic depiction of an old bridge in one painting?",
          "translation": "谁在一幅画作中对一座古老的桥作了浪漫（田园式）的描绘？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "This is how Michael Rooker was Iron Bridge in his 1792 painting."
          },
          "synonyms": [
            "人名 Michael Rooker 在原文中直接出现，对应选项 B",
            "“romantic depiction” 同义替换为原文的 “One artist's bucolic depiction”（bucolic 意为田园诗般的、浪漫化的）",
            "“an old bridge” 对应原文的 “Iron Bridge” 及 “in his 1792 painting”，1792 年也说明这是一幅描绘历史旧桥的旧作"
          ],
          "locatingTip": "定位：本题是人名匹配，题干给出的线索是「画了一座老桥的画家」。全文唯一把画家姓名、铁桥与具体创作年份放在一句里的只有第 4 段（D）：“This is how Michael Rooker was Iron Bridge in his 1792 painting.” 只要扫读 D 段中的人名和大写桥名 Iron Bridge，即可一步定位。确定答案技巧：the old bridge 即 Iron Bridge（第 3 段已说明它建于 18 世纪末），romantic 对应本段前面的 bucolic depiction（画中行人、骑手像走在林间小径上，船夫悠然而行），画风明显抒情田园；两句指向同一人和同一幅画，故答案是 Michael Rooker，选 B。",
          "analysis": "第 4 段（D）用一整段描述一幅描绘铁桥的画作。前半段先写景：“One artist's bucolic depiction shows pedestrians and horsemen on the bridge, as if on a woodland trail.”（一位艺术家的田园式描绘展示了桥上的行人和骑手，仿佛走在林间小径上），接着写岸边的观景者、牵着两匹骡子的男子以及划着小船的船夫，末了还补了一句 He is in no rush because there is no towline to carry from one side of the bridge to the other（他并不着急，因为没有纤绳需要从桥的一侧送到另一侧），整体氛围闲适宁静，正是题干 romantic depiction 所指的浪漫化、田园化的画法。随后一句点出作者与年份：“This is how Michael Rooker was Iron Bridge in his 1792 painting.”（Michael Rooker 在他 1792 年的画作中就是这样描绘铁桥的）。句中 Iron Bridge 就是题干的 an old bridge，1792 年说明这是一幅描绘既有旧桥的画；原文此句的语序略显不畅（动词位置不自然），但人名 Michael Rooker 与画作年份 1792 十分明确。段末还提到这幅画的彩色雕版挂在 nearby Coalbrookdale museum，与第 14 题同源。综合画家姓名、桥与被浪漫化的画风三项信息，答案是选项 B（Michael Rooker）。",
          "traps": [
            "为什么不是 A（Charles Sheeler）：他画的是汽车厂，与老桥无关。",
            "为什么不是 E（Joseph Pennell）：他画的是巴拿马运河以及 Hell Gate 桥、Delaware River 桥（20 世纪的钢结构桥，且多为蚀刻画），不是这座 18 世纪的铁桥。",
            "为什么不是 C（Claude Monet）：第 5 段只说他画过车站、大教堂和睡莲，没有画铁桥。",
            "为什么不是 D（Christian Schussele）：第 5 段说他的题材是工程师、发明家和开国元勋，属于人物肖像，不是桥梁风景。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Who produced art pieces demonstrating the courage of workers in the site?",
          "translation": "谁创作了展现工地上工人勇气的艺术作品？",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "He put his own life at risk to capture workers suspended on cables hundreds of feet in the air and sitting on a high girder eating lunch."
          },
          "synonyms": [
            "“the courage of workers” 同义替换为原文的 “images of daring and insouciance” 以及 “inspire admiration for the bravery and skill”",
            "“in the site” 对应原文的 “the construction of the Empire State Building”（帝国大厦工地）与 “suspended on cables hundreds of feet in the air”",
            "“produced art pieces” 对应原文的 “the striking photographs” 与 “these photos, published in 1932 in Men at Work”"
          ],
          "locatingTip": "定位：题干抓两点——「工人的勇气」和「工地」。全文只有在第 8 段（H）同时出现施工现场、高空作业与 courage 一类评价（daring、bravery），而段首第一句就点出 Lewis Hine，人名定位一步到位。确定答案技巧：H 段说他在帝国大厦工地上拍摄悬在数百英尺高空缆索上的工人、坐在高空钢梁上吃午饭的工人，并称这些照片是 daring and insouciance（胆量与从容）的影像、唤起对 bravery and skill（勇气与技能）的钦佩；daring 与 bravery 就是题干 courage 的同义替换，据此锁定选项 F（Lewis Hine）。",
          "analysis": "第 8 段（H）介绍摄影师 Lewis Hine。段首先把他与 Pennell 对照：Pennell 从总体上感受「工作之奇观」，而 Hine 聚焦于参与工作的个体。中间交代他的早期经历（社会学训练、揭露童工剥削、记录 Ellis Island 的移民与纽约廉租公寓、血汗工厂），这些都不是本题落点。本题落点在后面两句：“Upon returning to New York, he was given the opportunity to record the construction of the Empire State Building, which resulted in the striking photographs that have become such familiar images of daring and insouciance. He put his own life at risk to capture workers suspended on cables hundreds of feet in the air and sitting on a high girder eating lunch.”（回到纽约后，他获得记录帝国大厦建造过程的机会，由此产生的震撼照片已成为人们熟悉的胆量与从容的影像。他冒着生命危险，拍下悬在数百英尺高空缆索上的工人，以及坐在高空钢梁上吃午饭的工人）。这两句完整对应题干：the site 即 the construction of the Empire State Building 这个工地；workers 即 suspended on cables … sitting on a high girder 的工人；the courage of workers 即 daring 与 bravery 的改写（段末还明确说 inspire admiration for the bravery and skill）。创作这些作品的人在本段开头已点名为 Lewis Hine，故选项为 F。",
          "traps": [
            "为什么不是 A（Charles Sheeler）：第 2 段他拍的是汽车厂与工厂建筑，强调线条与构图之美，没有呈现工人勇气。",
            "为什么不是 E（Joseph Pennell）：第 7 段谈的是他对工程过程的感受（The Wonder of Work），属于画家本人的观感，不是工地工人的勇气。",
            "为什么不是 B（Michael Rooker）：第 4 段画面里是悠闲漫步的行人、赶骡人和船夫，与危险和勇气完全无关。",
            "为什么不是 C（Claude Monet）：第 5 段是风景与建筑的题材，不涉及工人。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Who produced portraits involving subjects in engineers and inventions and historical human heroes?",
          "translation": "谁创作的肖像画把工程师、发明物以及历史上的英雄人物作为表现对象？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Portrait painters such as Christian Schussele found subjects in engineers and inventors – and their inventions – as well as in the American founding fathers."
          },
          "synonyms": [
            "“portraits” 同义替换为原文的 “Portrait painters”（肖像画家），题干用名词 portraits，原文用画家身份名词",
            "“engineers and inventions” 对应原文的 “engineers and inventors – and their inventions”",
            "“historical human heroes” 对应原文的 “the American founding fathers”（美国开国元勋，即历史英雄人物）",
            "人名 Christian Schussele 在原文中直接出现，对应选项 D"
          ],
          "locatingTip": "定位：题干有三个并列信息点——工程师、发明物、历史英雄人物。把 founding fathers 理解为「历史英雄人物」是关键一步。全文唯一把这三点放进同一句的只有第 5 段（E），句首便点名 Portrait painters such as Christian Schussele。确定答案技巧：题干 produced portraits 对应原文的 Portrait painters found subjects in，逐项核对 engineers and inventors 对应 engineers、their inventions 对应 inventions、the American founding fathers 对应 historical human heroes，三项全部吻合，因此人名是 Christian Schussele，选 D。注意本题的落点在 E 段，但答案是选项 D，切勿把段落字母与选项字母混淆。",
          "analysis": "第 5 段（E）讲 19 世纪艺术题材的扩展，本题定位句是其中的第二句：“Portrait painters such as Christian Schussele found subjects in engineers and inventors – and their inventions – as well as in the American founding fathers.”（像 Christian Schussele 这样的肖像画家从工程师和发明家——以及他们的发明物——还有美国开国元勋身上寻找题材）。句中三个并列成分与题干一一对应：engineers and inventors 对应题干的 engineers；插入语 and their inventions 对应题干的 inventions（原文用破折号把它单独强调出来）；the American founding fathers 对应题干的 historical human heroes，开国元勋属于历史上的领袖人物，是典型的同义概括。题干说 who produced portraits，原文用 Portrait painters 这一身份名词来表达，二者同源同义。原文句子明确给出这类肖像画家的代表人物是 Christian Schussele，对应选项 D。同段第一句讲的是莫奈（画车站、大教堂与睡莲），与本句是两拨不同的艺术家，做题时要盯住 Portrait painters such as 后面的人名，不要被同段的莫奈干扰。",
          "traps": [
            "为什么不是 A（Charles Sheeler）：第 2 段他画的是工厂（American Landscape、Classic Landscape），属于工业景观而非人物肖像，也没有发明家和开国元勋。",
            "为什么不是 C（Claude Monet）：同在第 5 段，但他是印象派风景画家，画的是车站、大教堂和睡莲，与肖像、发明物无关。",
            "为什么不是 F（Lewis Hine）：第 8 段他是摄影师，拍的是童工、移民与高空作业的工人，既不是肖像画家，也没有涉及发明家与开国元勋。",
            "为什么不是 B（Michael Rooker）：第 4 段是桥梁风景画，不涉及人物肖像题材。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Who produced a painting of factories and named them ambitiously?",
          "translation": "谁以工厂为题材作画，并给这些作品起了颇具抱负（宏大）的名字？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The artist also composed oil paintings of the plant, giving them titles such as American Landscape and Classic Landscape."
          },
          "synonyms": [
            "“produced a painting of factories” 同义替换为原文的 “composed oil paintings of the plant”（the plant 指前文的汽车厂）",
            "“named them” 同义替换为原文的 “giving them titles such as …”",
            "“ambitiously” 对应原文的 “titles such as American Landscape and Classic Landscape”，用「美洲风景」「古典风景」这样宏大的名称来命名一座工厂，正是「有抱负的命名」"
          ],
          "locatingTip": "定位：题干的两个信息点是「画工厂」与「起大名字」，其中作品标题 American Landscape 与 Classic Landscape 是大写专有名词，在原文中极其醒目，只出现在第 2 段（B）末尾。确定答案技巧：第 2 段先交代 Charles Sheeler 被选中去拍摄 River Rouge 汽车厂，末句说他 composed oil paintings of the plant（为这家工厂创作油画），并给它们起了 American Landscape、Classic Landscape 这样的题目。把「美洲风景」「古典风景」这种宏大题目套在一座汽车厂上，正对应题干的 named them ambitiously，故人是 Charles Sheeler，选 A。",
          "analysis": "第 2 段（B）集中介绍画家／摄影师 Charles Sheeler 与汽车厂。定位句：“The artist also composed oil paintings of the plant, giving them titles such as American Landscape and Classic Landscape.”（这位艺术家还为这家工厂创作了油画，并给它们起了诸如《美洲风景》《古典风景》这样的题目）。句中 the plant 回指前一句的 Henry Ford's enormous River Rouge plant（福特庞大的 River Rouge 汽车厂），所以 composed oil paintings of the plant 就是题干所说的 produced a painting of factories；giving them titles such as 对应 named them；而 American Landscape 与 Classic Landscape 这两个把「一国之风景」「古典」这类大词安在一座工厂上的标题，恰好体现题干中 ambitiously 的意味——用宏大的名号来提升工业题材的地位。本段另一位主角是摄影师身份，Sheeler 是 painter/photographer 双重身份，题干只问绘画，所以答案仍是同一人。综合人名与作品信息，答案为选项 A（Charles Sheeler），对应第 2 段。",
          "traps": [
            "为什么不是 E（Joseph Pennell）：他画的是巴拿马运河与两座桥，原文没有记载他给作品起的题目。",
            "为什么不是 B（Michael Rooker）：第 4 段只提到他 1792 年的铁桥画作，既不是工厂题材，也没有给出标题，只有年份。",
            "为什么不是 C（Claude Monet）：第 5 段未提他画过工厂，更没有提到给作品命名。",
            "为什么不是 D（Christian Schussele）：第 5 段他是肖像画家，取材于工程师、发明家与开国元勋，不是工厂风景。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–14 摘要填空（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 14
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "For example, the engineer named 11 ________ designed the world's first iron bridge",
          "translation": "例如，名为 11 ________ 的工程师设计了世界上第一座铁桥。",
          "answer": "Abraham Darby III",
          "wordClass": "专有名词（人名；作过去分词 named 的宾语，构成 the engineer named Abraham Darby III，其后是主句谓语 designed）。必须写完整姓名并保留罗马数字 III，共三个词，符合 NO MORE THAN THREE WORDS，切不可只写 Darby 或漏掉 III",
          "locating": {
            "paragraph": "3",
            "quote": "Here, in the late eighteenth century, Abraham Darby III cast on the banks of the Severn River the large ribs that formed the world's first iron bridge"
          },
          "synonyms": [
            "“designed” 与原文的 “cast … the large ribs that formed” 对应，原文用铸造铁肋造桥的方式表达「设计并建造」",
            "“the world's first iron bridge” 在原文中原词复现",
            "“In the late eighteenth century” 与原文的 “in the late eighteenth century” 完全一致"
          ],
          "locatingTip": "定位：摘要首句已经把范围锁在「18 世纪末、世界上第一座铁桥」，全文只有第 3 段（C）同时出现 the world's first iron bridge 与 in the late eighteenth century。确定答案技巧：空格前是 the engineer named，说明要填一个姓名；该句主语正是 Abraham Darby III。作答时注意三点：一是词数限制为不超过三个词，Abraham Darby III 恰好三个词；二是罗马数字 III 属于姓名的一部分，不能省略；三是不要写成 Darby 或 Darby III，姓名不完整会失分。",
          "analysis": "摘要第一句把时间与背景定为 late eighteenth century 与 serene landscape paintings，紧接着举例：世界上第一座铁桥由某位工程师设计。回原文第 3 段（C）：“Here, in the late eighteenth century, Abraham Darby III cast on the banks of the Severn River the large ribs that formed the world's first iron bridge, a dramatic departure from the classic stone and timber bridges that dotted the countryside and were captured in numerous serene landscape paintings.”（就在这里，18 世纪末，Abraham Darby III 在 Severn 河岸边铸造了构成世界上第一座铁桥的巨大铁肋，这是对点缀乡间、被无数宁静风景画记录的经典石桥与木桥的一次彻底背离）。题干把原文的主动句改写成被动意味的 the engineer named … designed，并把 cast the large ribs that formed 概括为 designed，指称的对象完全一致：the world's first iron bridge 原词复现，in the late eighteenth century 也原样对应，因此空格要填的人名就是 Abraham Darby III。注意原文中他是以铸造者身份出现，摘要用 designed（设计）概括，属于同义改写而非改变事实。答案按原文写全名，保留罗马数字 III。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "marking a dramatic departure from earlier rural bridges constructed from materials such as 12 ________",
          "translation": "这标志着与早期用诸如 12 ________ 之类材料建造的乡村桥梁的彻底不同。",
          "answer": "stone and timber",
          "wordClass": "名词词组（两种材料的并列）；空格前是 materials such as，该词组是 such as 引出的例证、说明桥所用材料，并非直接跟在介词 from 之后。原文用 and 连接 stone 与 timber，两个实词都要写，共三个词，在 NO MORE THAN THREE WORDS 之内",
          "locating": {
            "paragraph": "3",
            "quote": "a dramatic departure from the classic stone and timber bridges that dotted the countryside and were captured in numerous serene landscape paintings"
          },
          "synonyms": [
            "“earlier rural bridges” 同义替换为原文的 “the classic … bridges that dotted the countryside”（点缀乡间、样式经典的老桥）",
            "“constructed from materials such as” 对应原文中作前置定语的材料名 “stone and timber”，题干把定语改写成 from materials such as 加空格",
            "“a dramatic departure from” 在原文中原样出现"
          ],
          "locatingTip": "定位：摘要这段说铁桥与「早期乡村桥梁所用的材料」不同，回原文第 3 段（C）找讲旧桥材料的那句，即 the classic stone and timber bridges that dotted the countryside。确定答案技巧：题干用 materials such as 引出材料，原文用 stone and timber 两个名词并列修饰 bridges，是典型的「原文定语变题干介词短语」的改写方式；空格填 stone and timber，两个词用 and 连接都要写，不能只填 stone 或 timber，也不要抄成 stone bridges（那不是材料）。词数限制为不超过三个词，stone and timber 正好三个词。",
          "analysis": "定位句同在第 3 段（C）：“… a dramatic departure from the classic stone and timber bridges that dotted the countryside and were captured in numerous serene landscape paintings.”（……与那些点缀乡间、被无数宁静风景画所记录的经典石桥和木桥形成一次彻底背离）。原文的信息层次是：新出现的铁桥是对既有石桥、木桥的彻底背离，而石与木正是旧桥的建造材料。题干把这一层改写为 earlier rural bridges constructed from materials such as [12]，其中 earlier 对应 classic（更早的、传统的），rural 对应 dotted the countryside（散布在乡间的），constructed from materials 对应原文把 stone and timber 直接作 bridges 的前置定语。因此答案是 stone and timber 这一并列名词词组，两个词都要写、顺序保持原文、用 and 连接。特别提醒：原文的这类老桥还被说成 were captured in numerous serene landscape paintings（被大量宁静风景画记录），正好与摘要首句提到的 serene landscape paintings 呼应，可作为验证答案位置的旁证。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Spanning the 13 ________, this first iron bridge played a significant role in the Industrial Revolution.",
          "translation": "这座第一座铁桥横跨 13 ________，在工业革命中发挥了重要作用。",
          "answer": "Severn River",
          "wordClass": "专有名词（河流名称，作分词 Spanning 的宾语；两个词的首字母均大写，按原文写作 Severn River）",
          "locating": {
            "paragraph": "3",
            "quote": "Abraham Darby III cast on the banks of the Severn River the large ribs that formed the world's first iron bridge"
          },
          "synonyms": [
            "“Spanning the …” 对应原文的 “cast on the banks of the Severn River” 以及后一句的 “still spans the river”（仍然横跨该河）：桥建在河的两岸并跨过这条河",
            "“played a significant role in the Industrial Revolution” 对应原文的 “where iron, which was so important to the industrial revolution, was worked for centuries”",
            "“Severn River” 在原文中原词复现"
          ],
          "locatingTip": "定位：题干问的是这条铁桥横跨哪条水体，直接回第 3 段（C）找河流名，该段出现的河名是 Severn River（全篇另一处河名 Delaware River 在第 6 段，与铁桥无关）。确定答案技巧：原文说 Abraham Darby III cast on the banks of the Severn River the large ribs，紧接着又说 The metal structure … still spans the river，用 the river 回指前句的 Severn River，可见桥正是跨在这条河上，故空格填 Severn River。作答时写两个词、首字母大写，不要加 the，也不要写成 Severn（河名不完整）。",
          "analysis": "第 3 段（C）是本摘要的全部信息来源。定位句写的是 Abraham Darby III 在 Severn 河岸边铸造了构成世界第一座铁桥的巨大铁肋（cast on the banks of the Severn River the large ribs that formed the world's first iron bridge）；随后一句用 The metal structure, simply but appropriately called Iron Bridge, still spans the river 回指同一水体，说明这座铁结构至今仍横跨 Severn 河。题干用分词短语 Spanning the [13] 作状语，把原文的地点状语 on the banks of the Severn River 与 still spans the river 合并成「横跨某河」这一信息，空格正是河名 Severn River。题干后半句 played a significant role in the Industrial Revolution 也有原文依据：同段说 Coalbrookdale 一带的 iron, which was so important to the industrial revolution, was worked for centuries（这里加工了数百年的铁对工业革命至关重要），铁与铁桥正是工业革命的标志性成就，与「发挥重要作用」相呼应。因此答案为 Severn River。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "Numerous paintings of the bridge are preserved and exhibited locally in the 14 ________, displaying the iron structure as a central feature of the landscape.",
          "translation": "这座桥的大量画作被保存在当地（就在附近）的 14 ________ 中展出，把这座铁结构呈现为景观的中心。",
          "answer": "Coalbrookdale Museum",
          "wordClass": "专有名词（场所名称，位于介词 in 之后作地点宾语；原文写作小写 museum，答案表写作 Coalbrookdale Museum，按答案表抄写、首字母大写即可）",
          "locating": {
            "paragraph": "4",
            "quote": "A colored engraving of the scene hangs in the nearby Coalbrookdale museum, along with countless other contemporary renderings of the bridge in its full glory and in its context, showing the iron structure not as a blight on the landscape but at the center of it."
          },
          "synonyms": [
            "“preserved and exhibited” 同义替换为原文的 “hangs in”（悬挂展出）",
            "“Numerous paintings of the bridge” 对应原文的 “countless other contemporary renderings of the bridge in its full glory and in its context”",
            "“locally” 同义替换为原文的 “nearby”（就在附近的 Coalbrookdale）",
            "“displaying the iron structure as a central feature of the landscape” 对应原文的 “showing the iron structure not as a blight on the landscape but at the center of it”"
          ],
          "locatingTip": "定位：摘要最后一句问桥的画作在「当地的什么地方」展出，直接在第 4 段（D）末尾找与画作展出有关的句子，句中出现 the nearby Coalbrookdale museum 与 countless other contemporary renderings of the bridge。确定答案技巧：nearby 对应题干的 locally（就在当地、附近），hangs in 对应 preserved and exhibited，显示场所为 Coalbrookdale museum，故空格填 Coalbrookdale Museum。两点提醒：一是词数限制为三个词以内，Coalbrookdale Museum 恰好两个词；二是答案表的 museum 首字母大写，而原文写作小写 museum，雅思阅卷对专有名词大小写通常不作苛刻要求，作答时按答案表写 Coalbrookdale Museum 即可，不必因大小写修改答案。",
          "analysis": "摘要最后一句说这座桥的大量画作被保存在当地某个机构展出，并把铁结构呈现为景观的中心。原文第 4 段（D）末两句正好对应：“A colored engraving of the scene hangs in the nearby Coalbrookdale museum, along with countless other contemporary renderings of the bridge in its full glory and in its context, showing the iron structure not as a blight on the landscape but at the center of it. The surrounding area at the same time radiates out from the bridge and pales behind it.”（这幅场景的彩色雕版悬挂在附近 Coalbrookdale 博物馆里，此外还有无数同时代描绘这座桥的盛况与环境的作品，它们把这一铁结构呈现得不是风景中的一处污点，而是风景的中心。周边区域同时以桥为中心向外辐射，并在它身后黯然失色）。逐项对应如下：hangs in 对应 preserved and exhibited；the nearby Coalbrookdale museum 对应 locally in the …；countless other contemporary renderings of the bridge 对应 Numerous paintings of the bridge；not as a blight on the landscape but at the center of it 对应 displaying the iron structure as a central feature of the landscape。因此答案是 Coalbrookdale Museum。需要说明一点：答案表把 museum 首字母大写，而原文写作小写的 Coalbrookdale museum，两者指同一处机构，本题按答案表原样填写 Coalbrookdale Museum（不擅自改动答案表）。另外，第 3 段已交代 Coalbrookdale 在 England，与这里的 nearby（就在铁桥附近）相互印证，可用来确认定位无误。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
