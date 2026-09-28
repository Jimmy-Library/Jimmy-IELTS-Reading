(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-160", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-160",
  "meta": {
    "examId": "p1-low-160",
    "title": "Chili peppers 辣椒的历史",
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
          "stem": "Archaeological evidence from pots has helped determine when people first began to grow chilies for food.",
          "translation": "来自陶罐的考古证据帮助确定了人们最早开始把辣椒当作食物种植的时间。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Based on her examination of ancient pieces of pottery, Ms Perry concludes that people in the Americas began cultivating chilies more than 6,000 years ago."
          },
          "synonyms": [
            "“Archaeological evidence” 同义替换为原文的 “her examination of ancient pieces of pottery”（对古代陶器残片的考察）",
            "“from pots” 同义替换为原文的 “ancient pieces of pottery”，陶器残片与陶罐属同类器物",
            "“when people first began to grow chilies” 同义替换为原文的 “people in the Americas began cultivating chilies more than 6,000 years ago”",
            "“for food” 对应原文的 “cultivating”（栽培），且第 1 段已说明人们把野辣椒加进土豆、谷物和玉米里食用"
          ],
          "locatingTip": "定位：题干关键词是 pots 与 grow chilies，回原文找“陶器”和“栽培”二词即可；题干中的考古证据在原文紧跟在人名 Ms Perry 之后，而 Ms Perry 只在第 2 段出现，因此扫读时只要盯住第 2 段首句即可锁定。确定答案技巧：本题考“证据类型与结论”的对应关系，原文用 Based on her examination of ancient pieces of pottery 引出结论，正是题干 Archaeological evidence from pots has helped determine 的改写；结论部分 began cultivating chilies more than 6,000 years ago 给出了“人们最早开始种植辣椒”的时间，与题干的 when people first began to grow chilies 完全同向，三个层面都一致，故选 TRUE。",
          "analysis": "第 2 段首句是本题的落点：“Based on her examination of ancient pieces of pottery, Ms Perry concludes that people in the Americas began cultivating chilies more than 6,000 years ago.”（基于对古代陶器残片的研究，佩里女士得出结论：美洲人早在 6000 多年前就开始栽培辣椒）。句子是“证据加结论”的结构：Based on her examination of ancient pieces of pottery 是证据来源，对应题干的 archaeological evidence from pots；concludes that 后面的宾语从句是结论，其中 began cultivating chilies 对应 began to grow chilies，more than 6,000 years ago 对应题干所问的时间 when people first began to grow。此外第 1 段已交代人们把野辣椒“adding them to potatoes, grain and corn”，说明辣椒是作为食物来使用的，题干 for food 也就有了原文支撑。证据类型（陶器）、结论内容（开始种植）与时间（6000 多年前）三处逐一吻合，故答案 TRUE。提醒：真正的考点是“陶器是研究栽培时间的证据”，不要因为原文说的是 examining pottery 而题干说的是 pots 就犹豫，二者同指一类器物。",
          "traps": [
            "为什么不是 FALSE：原文明确用陶器研究得出结论“6000 多年前开始栽培辣椒”，证据与结论俱全且方向一致，不存在任何与题干相反的表述，因此不能判 FALSE。",
            "为什么不是 NOT GIVEN：题干的两个要素——陶制器物的考古证据、开始种植辣椒的时间——都在第 2 段首句直接出现，属于已给出且与题干一致的信息，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Linda Perry thinks mankind began using chilies in cooking largely because they kept food from spoiling.",
          "translation": "琳达·佩里（Linda Perry）认为人类开始在烹饪中使用辣椒，主要是因为辣椒能防止食物变质。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "'Chilies were domesticated early and spread very quickly, just because people liked them,\" she says. The chilies, it would seem, made otherwise quite bland food more enjoyable to eat."
          },
          "synonyms": [
            "“largely because they kept food from spoiling” 与原文佩里的理由 “just because people liked them” 相互冲突：佩里把原因归于口味喜好，而不是防腐",
            "“kept food from spoiling” 在原文中属于另一组研究者的观点：“Other researchers, such as Jennifer Billing and Paul Sherman … argue that people learned early on that chilies could reduce food spoilage.”，观点主体被题干错置",
            "“using chilies in cooking” 对应原文 “made otherwise quite bland food more enjoyable to eat”，原文强调好吃而非保鲜"
          ],
          "locatingTip": "定位：题干出现专有名词 Linda Perry，这是最好用的“钓鱼词”，这个人名只出现在第 1、2 段，本题落点在第 2 段她的一段引语。确定答案技巧：先分清“谁说了什么”——佩里本人的理由是 “just because people liked them”，而“reduce food spoilage（减少食物变质）”被原文明确挂在 Other researchers，即 Jennifer Billing 和 Paul Sherman 名下。题干把后者（防腐）当成前者（佩里）的理由，属于主体张冠李戴且与原文直接冲突，故判 FALSE。遇到人名加观点的判断题，务必核对观点归属，不要只看观点本身是否在文中出现过。",
          "analysis": "第 2 段写佩里对辣椒传播原因的解释：“‘Chilies were domesticated early and spread very quickly, just because people liked them,’ she says. The chilies, it would seem, made otherwise quite bland food more enjoyable to eat.”（她说：“辣椒很早就被驯化并迅速传播，仅仅是因为人们喜欢它们。”看来辣椒让本来相当寡淡的食物变得更好吃）。也就是说，佩里给出的原因是“人们喜欢辣椒的味道、它让寡淡的食物更好吃”，落脚点在口味。紧随其后的一句交代了另一种解释：“Other researchers, such as Jennifer Billing and Paul Sherman of Cornell University in the US, argue that people learned early on that chilies could reduce food spoilage.”（美国康奈尔大学的詹妮弗·比林和保罗·谢尔曼等其他研究者则认为，人们很早就知道辣椒能减少食物变质）。可见“防止食物变质”是别人（Billing 与 Sherman）的观点，题干却把它安到 Linda Perry 头上，并说这是她认为的主要原因，与原文中她本人的 just because people liked them 正面冲突，因此判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文把“reduce food spoilage”归给 Other researchers（Jennifer Billing 与 Paul Sherman），佩里本人给出的理由是 just because people liked them，题干把他人观点移植到佩里名下，与原文相悖。",
            "为什么不是 NOT GIVEN：原文既写了佩里的解释（因为人们喜欢辣椒），也写了其他人的防腐解释，两种观点都明确出现，只是题干把说话人配错，属于信息矛盾而非信息缺失，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Christopher Columbus is said to have enjoyed the new experience of eating food spiced with chilies.",
          "translation": "据说克里斯托弗·哥伦布很喜欢吃加了辣椒的食物这一新体验。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Whatever the benefits, chilies spread around the world at astonishing speed, thanks in part to Christopher Columbus, who is credited with being the first European to reach America in 1492, and claiming the new land for Spain."
          },
          "synonyms": [
            "“Christopher Columbus” 在原文中为原词复现：“Christopher Columbus, who is credited with being the first European to reach America in 1492”",
            "“enjoyed the new experience of eating food spiced with chilies” 在原文中找不到任何对应表述：原文只交代了他的航海功绩与把辣椒带回西班牙这一行为，没有写他本人吃过或喜欢辣椒",
            "“is said to have” 只对应原文的 “is credited with being the first European to reach America”，说的是“他被认为是最早到达美洲的欧洲人”，而非“据说他爱吃什么”"
          ],
          "locatingTip": "定位：题干专有名词 Christopher Columbus 非常显眼，扫读第 3 段即可在首句找到。确定答案技巧：判断题遇到 enjoyed、liked、preferred 这类主观评价或体验类动词时要特别警惕，它们是 NOT GIVEN 的高发点。回到原文核对会发现，原文对哥伦布只有两点交代——被认为是 1492 年第一个到达美洲的欧洲人、把辣椒带回西班牙；下一句说的 “When Columbus took chilies back to Spain, they were initially not popular” 也是讲欧洲市场的反应，而非他本人的口味。原文既没说他吃过辣椒，也没说他喜欢，属于纯信息缺失，故判 NOT GIVEN。切忌由“他把辣椒带回欧洲”脑补出“他一定爱吃辣”。",
          "analysis": "第 3 段关于哥伦布的句子是：“Whatever the benefits, chilies spread around the world at astonishing speed, thanks in part to Christopher Columbus, who is credited with being the first European to reach America in 1492, and claiming the new land for Spain.”（无论辣椒有何好处，它以惊人的速度传遍世界，部分要归功于哥伦布——他被认为是 1492 年第一个到达美洲的欧洲人，并为西班牙占有了这片新大陆）。紧接着的一句：“When Columbus took chilies back to Spain, they were initially not popular, but soon became widely accepted throughout Europe.”（哥伦布把辣椒带回西班牙后，辣椒起初并不受欢迎，但很快在整个欧洲被广泛接受）。两句话里关于哥伦布的所有信息只有：他是第一个到达美洲的欧洲人、他为西班牙占有新大陆、他把辣椒带回西班牙。题干的核心却是 is said to have enjoyed the new experience of eating food spiced with chilies（据说他很享受吃辣这一新体验），这层“个人口味与体验”原文完全没有涉及。按判断题规则，原文未提及即 NOT GIVEN——不是 TRUE，因为找不到支持；也不是 FALSE，因为原文并没有说他讨厌吃辣。",
          "traps": [
            "为什么不是 TRUE：原文只说哥伦布是首个到达美洲的欧洲人并把辣椒带回西班牙，从未提到他吃过辣椒、更没提到他享受这种新体验，缺乏支持题干的信息。",
            "为什么不是 FALSE：原文没有任何否定其食辣体验的表述，“辣椒起初不受欢迎”讲的是欧洲市场的接受度，不能反推哥伦布本人不喜欢，因此既非矛盾也非支持，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Explorers from Portugal were introduced to chilies in Africa.",
          "translation": "来自葡萄牙的探险者是在非洲接触到辣椒的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The Portuguese first encountered chilies in Brazil and carried them, along with tobacco and cotton, to Africa."
          },
          "synonyms": [
            "“Explorers from Portugal” 同义替换为原文的 “The Portuguese”",
            "“were introduced to chilies” 同义替换为原文的 “first encountered chilies”",
            "“in Africa” 与原文的 “in Brazil” 相互冲突：初遇地是巴西，非洲只是他们把辣椒带去的地方",
            "“carried them … to Africa” 中的 to 表示目的地，而题干的 in 表示接触地点，介词所指方向相反"
          ],
          "locatingTip": "定位：题干关键词是 Portugal（Portugal 在原文以 The Portuguese 形式出现）与 Africa，两者同现于第 3 段的第三句，扫读时盯住这两个词即可一步锁定。确定答案技巧：本题的判分点在“地点与方向”。原文说 The Portuguese first encountered chilies in Brazil（葡萄牙人最早在巴西遇到辣椒），随后 carried them … to Africa（把它们带到非洲）。巴西是接触地，非洲是输出目的地；题干却说他们是在非洲（in Africa）接触到辣椒的，把起点和终点对调，属于事实矛盾，故判 FALSE。做地理位移类题目时，务必分清 in、from、to 三个介词各自指哪一端。",
          "analysis": "第 3 段第三句写道：“The Portuguese first encountered chilies in Brazil and carried them, along with tobacco and cotton, to Africa.”（葡萄牙人最早是在巴西遇到辣椒的，随后把它和烟草、棉花一起带到了非洲）。句中 first encountered chilies in Brazil 明确给出初遇地点为巴西；carried them … to Africa 中的 to 表示携带的目的地，即非洲是辣椒被输入的地方，葡萄牙人扮演的是“携带者”而非“在非洲被引见者”。题干改写为 Explorers from Portugal were introduced to chilies in Africa，把接触地点写成非洲，与原文的巴西完全颠倒。可见题干在“人在哪里遇到辣椒”这一环节出错，属事实矛盾，因此判 FALSE。注意原文的 along with tobacco and cotton 只是补充说明同行的货物，不影响地点判断。",
          "traps": [
            "为什么不是 TRUE：原文明确说葡萄牙人最早在巴西（in Brazil）遇到辣椒，非洲是他们把辣椒带去的地方，题干把接触地点换成非洲，与原文事实相反。",
            "为什么不是 NOT GIVEN：原文对葡萄牙人与辣椒的接触地点、以及辣椒被带到非洲的过程都写得很清楚，信息完整且与题干冲突，不属于没有提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The feeling of heat while eating chilies is a purely psychological effect rather than a physical one.",
          "translation": "吃辣椒时感到“辣”纯粹是一种心理作用，而不是生理反应。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "When people call chilies hot, they are not just speaking metaphorically. Capsaicin stimulates the neural sensors in the tongue and skin that also detect rising temperatures."
          },
          "synonyms": [
            "“a purely psychological effect” 与原文的 “not just speaking metaphorically” 以及 “Capsaicin stimulates the neural sensors” 相互冲突：原文强调这是真实的神经与生理机制，不只是比喻或心理感受",
            "“the feeling of heat” 同义替换为原文的 “the neural sensors … that also detect rising temperatures”，并对应下文 “the effect is the same as exposure to fire”",
            "“rather than a physical one” 与原文的 “adrenaline flows and the heart pumps faster” 直接对立，后者都是明确的生理反应"
          ],
          "locatingTip": "定位：题干关键词 heat、psychological、physical，回原文找讲“辣感”机制的段落，即第 4 段（小标题 The heat of chili peppers 之下）。确定答案技巧：本题的判分点是“心理还是生理”。原文第一句先否定比喻说法（not just speaking metaphorically），第二句给出神经学机制（Capsaicin stimulates the neural sensors in the tongue and skin），第三句进一步说吃辣椒的效果与接触火焰相同，第四句还提到肾上腺素分泌与心跳加快。这些都是典型的生理（physical）反应，而题干说 purely psychological effect rather than a physical one，把生理机制完全排除，与原文正面对立，故判 FALSE。读懂 not just A（不仅仅是 A，还包含 B）这种结构很关键，它并不否定 A，而是强调不止于 A。",
          "analysis": "第 4 段开头两句话就否定了题干的说法：“When people call chilies hot, they are not just speaking metaphorically. Capsaicin stimulates the neural sensors in the tongue and skin that also detect rising temperatures.”（人们说辣椒辣时，并不只是在打比方。辣椒素会刺激舌头和皮肤中同样负责感知温度升高的神经感受器）。第一句的 not just speaking metaphorically 表示“不仅仅是比喻”，即辣感有真实的生理基础；第二句紧接着给出机制：辣椒素刺激的是真正的神经感受器。下文继续加码：“As far as these neurons and the brain are concerned, when someone eats a hot chili, the effect is the same as exposure to fire. With enough heat, adrenaline flows and the heart pumps faster.”（就这些神经元和大脑而言，吃下一颗辣辣椒的效果等同于接触火焰。辣度足够时，肾上腺素分泌，心跳加快）。可见原文通篇把辣感解释为物理、生理层面的反应，题干却说它是 purely psychological effect rather than a physical one，与原文的神经机制和身体反应完全相反，因此判 FALSE。做题提示：purely、only、merely 这类绝对化的限定词是 FALSE 的高发标志，只要原文出现与之相反的机制描述，即可判错。",
          "traps": [
            "为什么不是 TRUE：原文明确指出辣感有真实的神经与生理基础（刺激舌与皮肤的神经感受器、效果如同接触火焰、导致肾上腺素分泌与心跳加快），并非单纯的心理作用，故不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到了辣感，还用整整一段解释其发生机制，信息明确且与题干冲突，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "A chemist called Scoville created a heat scale based on the collective judgement of a group of individuals.",
          "translation": "一位名叫斯科维尔（Scoville）的化学家基于一组人的集体判断制定了辣度量表。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The scale that scientists use to describe a chili's heat was developed in 1912 by Wilbur Scoville, a chemist from Detroit in the US. He diluted a chili extract in sugar water until the heat was no longer detectable to a panel of trained tasters; that threshold is the basis of the Scoville rating."
          },
          "synonyms": [
            "“created a heat scale” 同义替换为原文的 “The scale that scientists use to describe a chili's heat was developed”，created 与 developed 同义",
            "“a chemist called Scoville” 同义替换为原文的 “Wilbur Scoville, a chemist from Detroit in the US”",
            "“the collective judgement of a group of individuals” 同义替换为原文的 “detectable to a panel of trained tasters”（一组受过训练的品尝者的共同判断）",
            "“based on” 同义替换为原文的 “is the basis of”，阈值由这组品尝者确定，正是量表的依据"
          ],
          "locatingTip": "定位：题干关键词 Scoville 与 heat scale，原文第 5 段首句同时出现两者，人名 Scoville 属于专有名词，扫读时可一步定位。确定答案技巧：本题考“量表依据什么”。原文说斯科维尔把辣椒提取物用糖水稀释，直到一组受过训练的品尝者（a panel of trained tasters）再也尝不出辣味，那个阈值就成为 Scoville rating 的基础（is the basis of）。panel 表示“一组、一个小组”，trained tasters 是“受过训练的品尝者”，合起来正是题干 the collective judgement of a group of individuals；developed in 1912 by Wilbur Scoville 又对应 created by a chemist called Scoville。各处改写严丝合缝，故判 TRUE。注意不要因为原文出现 “detectable”（可察觉的）就以为它是客观仪器测量，原文的依据确实是人（tasters）的集体判断。",
          "analysis": "第 5 段是本题的唯一依据：“The scale that scientists use to describe a chili's heat was developed in 1912 by Wilbur Scoville, a chemist from Detroit in the US. He diluted a chili extract in sugar water until the heat was no longer detectable to a panel of trained tasters; that threshold is the basis of the Scoville rating.”（科学家用来描述辣椒辣度的量表，由美国底特律的化学家威尔伯·斯科维尔于 1912 年创立。他把辣椒提取物用糖水稀释，直到一组受过训练的品尝者再也尝不出辣味为止；这个阈值就是斯科维尔等级的基础）。逐一对照题干：a chemist called Scoville 对应 a chemist … Wilbur Scoville；created a heat scale 对应 The scale … was developed；based on the collective judgement of a group of individuals 对应 that threshold is the basis of the Scoville rating，而该阈值源于 a panel of trained tasters，panel 即“一组人”，tasters 即评判者。题干的每个信息点在原文都有对应且方向一致，因此判 TRUE。这也说明判断题里的“集体判断”这类抽象概括并不难，只要能在原文找到 collect（一组人）的具体承载词即可。",
          "traps": [
            "为什么不是 FALSE：原文写的正是化学家斯科维尔在 1912 年建立辣度量表，并且该量表的依据是一组受过训练的品尝者尝不出辣味的临界值，与题干“基于一组人的集体判断”完全一致，没有矛盾点。",
            "为什么不是 NOT GIVEN：原文对量表的创立者、创立时间与判定依据都做了明确交代，panel of trained tasters 就是题干 the collective judgement of a group of individuals 的原文依据，并非未提及。"
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
          "stem": "some animals destroy the seeds, preventing 7 ________",
          "translation": "一些动物会毁坏种子，使 ________ 无法进行。",
          "answer": "germination",
          "wordClass": "名词（不可数，指种子发芽这一过程；空格位于动名词 preventing 之后作其宾语；原文用不可数名词 germination，不加冠词、不加复数）",
          "locating": {
            "paragraph": "6",
            "quote": "But chilies also attract predators, largely rodents like packrats and cactus mice, that crush seeds and make germination impossible."
          },
          "synonyms": [
            "“some animals destroy the seeds” 同义替换为原文的 “predators, largely rodents like packrats and cactus mice, that crush seeds”，destroy 对应 crush",
            "“preventing …” 同义替换为原文的 “make germination impossible”，prevent 与 make … impossible 同义"
          ],
          "locatingTip": "定位：笔记小标题是 Chili seeds and capsaicin，对应原文第 6 段讲“种子与辣椒素”的部分；题干关键词 animals、destroy the seeds 回原文找“动物毁坏种子”的表述，即 predators … that crush seeds 一句。确定答案技巧：题干用 preventing 加空格，说明要填一个被“阻止”的名词，而原文同义处是 make germination impossible，被弄得不可能的就是 germination，因此答案是 germination。填写时注意 ONE WORD ONLY，且用原文的名词形式，不要写成 germinate（动词），也不要搭配 into / from 等介词。",
          "analysis": "原文第 6 段第 3 句：“But chilies also attract predators, largely rodents like packrats and cactus mice, that crush seeds and make germination impossible.”（但辣椒也会招来掠食者，主要是像林鼠和仙人掌鼠这样的啮齿动物，它们会把种子压碎，使发芽无从发生）。题干把它压缩成 “some animals destroy the seeds, preventing 7 ________”，其中 some animals 对应 predators 与具体的 rodents like packrats and cactus mice；destroy the seeds 对应 crush seeds（压碎即毁坏）；preventing 对应 make … impossible，因此空格里就是 germination（发芽）。从语法上看，空格后的位置是 preventing 的宾语，必须是名词或动名词，而原文给的是名词 germination，二者一致。注意 germination 为不可数名词，填入时不加冠词、不加复数，也不改写词形。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "unlike many other plants, chilies contain an unpleasant chemical only in their 8 ________",
          "translation": "与许多其他植物不同，辣椒只在它们的 ________ 里含有这种难闻的化学物质。",
          "answer": "fruit",
          "wordClass": "名词（单数形式，指植物的果实；空格前是介词 in 和物主代词 their，作 in 的宾语，其后为条目末尾；原文用 in the fruit，故填单数形式 fruit，不加 s、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "In order to deter animals from eating their seeds, many plants produce toxic or foul-tasting chemicals, but these are usually found in the plant's leaves and roots as well as its fruit. In chilies, however, capsaicin is found just in the fruit"
          },
          "synonyms": [
            "“unpleasant chemical” 同义替换为原文的 “toxic or foul-tasting chemicals”，下文更具体地指出该化学物质是 capsaicin",
            "“only in their …” 同义替换为原文的 “found just in the fruit”，only 与 just 同义",
            "“unlike many other plants” 对应原文 “many plants … but these are usually found in the plant's leaves and roots” 与 “In chilies, however” 构成的对比结构"
          ],
          "locatingTip": "定位：题干关键词 chemical、plants，回原文第 6 段寻找“植物产生化学物质”的句子，即 many plants produce toxic or foul-tasting chemicals 一句；紧随其后的 In chilies, however 正是题干 unlike many other plants 的对应表达。确定答案技巧：原文先讲一般植物把这类化学物质分布在叶、根和果实中（the plant's leaves and roots as well as its fruit），再用 however 转折，说辣椒的辣椒素只存在于果实里（found just in the fruit）。题干问“辣椒只把难闻的化学物质放在哪里”，按转折句给出的范围只有一个，即 fruit。填写时用原文的单数形式 fruit，不要写 fruits 或 seed。",
          "analysis": "第 6 段第 4、5 句：“In order to deter animals from eating their seeds, many plants produce toxic or foul-tasting chemicals, but these are usually found in the plant's leaves and roots as well as its fruit. In chilies, however, capsaicin is found just in the fruit, and becomes much stronger with ripening.”（为了阻止动物吃自己的种子，许多植物会产生有毒或味道难闻的化学物质，但这些物质通常存在于植物的叶、根以及果实中。然而在辣椒里，辣椒素只存在于果实中，并且随着成熟变得更强烈）。题干把这两句合成一条笔记：unlike many other plants 对应前半句“许多植物把化学物质分布在叶、根、果”；chilies contain an unpleasant chemical only in their 8 对应后半句的转折结论 capsaicin is found just in the fruit。既然原文用 just（仅仅）限定了唯一位置，答案就是 fruit。词性上 their 之后需要名词，fruit 在此按原文保持单数形式，符合 ONE WORD ONLY。注意不要误填 fruit 前面的 capsaicin，因为题干说的是“含有这种难闻的化学物质”的位置，而不是该物质的名称。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "the 9 ________ of the chili causes an increase in capsaicin",
          "translation": "辣椒的 ________ 会导致辣椒素增加。",
          "answer": "ripening",
          "wordClass": "名词（不可数，指果实成熟的过程；与 of the chili 构成名词短语并作 causes 的主语）",
          "locating": {
            "paragraph": "6",
            "quote": "In chilies, however, capsaicin is found just in the fruit, and becomes much stronger with ripening."
          },
          "synonyms": [
            "“causes an increase in capsaicin” 同义替换为原文的 “becomes much stronger”，辣椒素变强即含量增加",
            "“the 9 … of the chili” 对应原文的 “with ripening”，ripening 指辣椒果实的成熟过程"
          ],
          "locatingTip": "定位：本题紧接第 8 题，同在第 6 段第 5 句（该段倒数第二句），题干关键词是“辣椒素增加”，回原文找表示辣椒素变强的表达，即 becomes much stronger with ripening。确定答案技巧：题干说“辣椒的某个过程导致辣椒素增加”，原文对应的短语是 with ripening（随着成熟）；with 在此表示伴随原因，ripening 就是引起辣椒素增强的那个过程。空格位于 the … of the chili 结构中，需要名词，ripening 由动词 ripen 加 -ing 构成名词，正好合适。填词时保持原文拼写 ripening，不能写成 ripe、ripeness 或 maturity。",
          "analysis": "第 6 段第 5 句（该段倒数第二句）：“In chilies, however, capsaicin is found just in the fruit, and becomes much stronger with ripening.”（然而在辣椒里，辣椒素只存在于果实中，并且随着成熟而变得更强烈）。题干的笔记是“the 9 [ripening] of the chili causes an increase in capsaicin”，与原句的对应关系为：of the chili 对应 in chilies 所说的辣椒果实；causes an increase 对应 becomes much stronger（变得更强烈等同于含量增加）；而 with ripening 中的 ripening 就是导致这种变化的过程，即“成熟”。从语法看，空格处于 the … of the chili 这一名词短语的核心位置，因此必须填名词形式，ripening 是 ripen 的动名词化名词，符合要求且为单个词。注意不要把 of the chili 后的 causes 当作动词原形去理解成“辣椒导致”，本题的主语是前面整个名词短语。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "rodents avoided chilies with a high 10 ________ of capsaicin",
          "translation": "啮齿动物会避开辣椒素 ________ 高的辣椒。",
          "answer": "concentration",
          "wordClass": "名词（单数可数，指浓度；空格前有不定冠词 a 和形容词 high，构成 a high concentration of capsaicin，整体作介词 with 的宾语；原文用单数形式 concentration）",
          "locating": {
            "paragraph": "7",
            "quote": "When he offered the fruits of those plants to laboratory rats and mice, they ate the mild chilies but avoided the ones with a strong concentration of capsaicin."
          },
          "synonyms": [
            "“rodents” 同义替换为原文的 “laboratory rats and mice”（实验室大鼠与小鼠）",
            "“a high …” 同义替换为原文的 “a strong …”，high 与 strong 在此都与 concentration 搭配表示含量大",
            "“avoided chilies with … capsaicin” 与原文 “avoided the ones with a strong concentration of capsaicin” 完全对应"
          ],
          "locatingTip": "定位：笔记下一级小标题是 Tewksbury's experiments to test the effects of capsaicin，对应原文第 7 段首句的实验描述；题干关键词 rodents、avoided 回原文找实验对象的反应，即 they ate the mild chilies but avoided the ones with a strong concentration of capsaicin。确定答案技巧：空格位于 a high … of capsaicin 结构中，与原文 a strong concentration of capsaicin 相比只把 strong 换成同义的 high，其余不变，因此答案是被 high 修饰的名词 concentration。填词时注意 ONE WORD ONLY，写名词 concentration，不要写成 concentrate 或 concentrated。",
          "analysis": "第 7 段第 2 句：“When he offered the fruits of those plants to laboratory rats and mice, they ate the mild chilies but avoided the ones with a strong concentration of capsaicin.”（当他把这些植物的果实给实验室的大鼠和小鼠吃时，它们吃了温和的辣椒，却避开了辣椒素浓度高的那些）。题干把实验动物概括为 rodents（啮齿动物），正好对应原文的大鼠与小鼠；把 a strong 换成同义的 a high；核心名词 concentration（浓度）保持不变，因此空格填 concentration。此句是 Tewksbury 验证“辣椒素防啮齿动物”假说的关键证据：动物对辣椒素的回避与浓度有关。注意区分同段中表示“辣椒素浓度高”的 strong concentration 和后面表示病菌感染减少的 less fungal infection，后者属于第 12 题的落点，不要混用。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "this may make the 11 ________ of the seed softer",
          "translation": "这可能使种子的 ________ 变得更软。",
          "answer": "coat",
          "wordClass": "名词（单数，指种子外层即种皮；空格前是定冠词 the，其后有 of the seed 作后置定语；该名词短语在句中作 make 的宾语，softer 是宾语补足语，故填可数名词单数 coat）",
          "locating": {
            "paragraph": "7",
            "quote": "He later found that birds do not seem to mind eating even the hottest chilies and, in fact, that the capsaicin had the strange effect of retarding birds' digestion, which helps some seeds germinate, possibly by softening the seed coat."
          },
          "synonyms": [
            "“capsaicin slows digestion in birds” 同义替换为原文的 “the capsaicin had the strange effect of retarding birds' digestion”，retard 与 slow 同义",
            "“this may make the … of the seed softer” 同义替换为原文的 “possibly by softening the seed coat”，make … softer 与 soften 同义，possibly 对应 may"
          ],
          "locatingTip": "定位：笔记这部分在 birds do not mind eating capsaicin 之下，属于第 7 段讲鸟类实验的内容；题干关键词 seed、softer 回原文找表示“变软”的动词，即 possibly by softening the seed coat。确定答案技巧：软化的对象由 softening 后的名词短语给出，即 the seed coat；题干把它改写为 make the … of the seed softer，结构变了但指的还是同一部件，故填 coat。注意不要填 seed（空格后已经出现 of the seed），也不要填 germination，那说的是种子发芽的结果而非变软的部位。",
          "analysis": "第 7 段第 3 句：“He later found that birds do not seem to mind eating even the hottest chilies and, in fact, that the capsaicin had the strange effect of retarding birds' digestion, which helps some seeds germinate, possibly by softening the seed coat.”（他后来发现，鸟类似乎连最辣的辣椒也不介意吃；事实上辣椒素还有一种奇怪的效果——减缓鸟类的消化，这有助于某些种子发芽，可能是通过软化种皮实现的）。题干把这一长句拆成三条笔记：birds do not mind eating capsaicin 对应 birds do not seem to mind eating even the hottest chilies；capsaicin slows digestion in birds 对应 retarding birds' digestion；this may make the 11 … of the seed softer 对应 possibly by softening the seed coat。其中 soften（软化）的宾语是 the seed coat，改写后成为 the … of the seed softer，因此空格是 coat（种皮）。从语法看，空格处在 the 与 of the seed 之间，需要一个可数名词单数，coat 正好满足，且符合 ONE WORD ONLY。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "another role of capsaicin is in reducing infection caused by a 12 ________",
          "translation": "辣椒素的另一个作用是减少由 ________ 引起的感染。",
          "answer": "fungus",
          "wordClass": "名词（单数，指真菌；空格前有不定冠词 a，作介词 by 的宾语（infection caused by a fungus），故填可数名词单数 fungus）",
          "locating": {
            "paragraph": "7",
            "quote": "Instead, he thinks that a chili's heat protects it from disease that a certain fungus can trigger, the primary reason chili seeds die prior to being dispersed."
          },
          "synonyms": [
            "“reducing infection” 同义替换为原文的 “protects it from disease”，reduce 与 protect from 在此表达同一保护作用",
            "“caused by” 同义替换为原文的 “that a certain fungus can trigger”，trigger 即引起、引发",
            "“another role of capsaicin” 对应原文的 “Instead, he thinks that a chili's heat protects it from disease”，这是 Tewksbury 提出的又一解释"
          ],
          "locatingTip": "定位：笔记最后两行讲辣椒素的“另一作用”，对应原文第 7 段后半部分；题干关键词 infection 与 caused by 回原文找与“疾病、引发”有关的句子，即 a chili's heat protects it from disease that a certain fungus can trigger。确定答案技巧：原文用定语从句 structure that a certain fungus can trigger 修饰 disease，等于说这种疾病是由某种真菌引起的；题干把它改写成 infection caused by a …，空格要填的正是触发疾病的那个病原体，即 fungus。填词时用原文的单数形式 fungus（不可写成 fungi 或 funguses），且注意只有一个词。",
          "analysis": "第 7 段第 4、5 句：“Even so, Tewksbury didn't believe that deterring rodents and slowing bird digestion were enough to explain why the spicy heat of chilies evolved. Instead, he thinks that a chili's heat protects it from disease that a certain fungus can trigger, the primary reason chili seeds die prior to being dispersed.”（即便如此，图克斯伯里认为“驱避啮齿动物”加上“减缓鸟类消化”还不足以解释辣椒为何进化出辣味。他转而认为，辣椒的辣味能保护它免受某种真菌引发的疾病侵害，而这种疾病正是辣椒种子在传播前死亡的首要原因）。题干写成 “another role of capsaicin is in reducing infection caused by a 12 …”，其中 another role 对应 Instead, he thinks …（另一个解释）；reducing infection 对应 protects it from disease；caused by 对应 that a certain fungus can trigger。可见引发这种疾病的是 a certain fungus，空格填 fungus。第 6 句 “the more capsaicin, the less fungal infection” 也印证了辣椒素与真菌感染之间的反向关系，进一步支持该答案。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Tewksbury considers the role of capsaicin in chilies to be an example in nature of the beauty of 13 ________",
          "translation": "图克斯伯里（Tewksbury）认为辣椒素在辣椒中的作用是大自然中 ________ 之美的一个例证。",
          "answer": "evolution",
          "wordClass": "名词（不可数，指进化；作 of 的宾语，构成 the beauty of evolution 这一短语）",
          "locating": {
            "paragraph": "7",
            "quote": "'Capsaicin demonstrates the incredible elegance of evolution,' says Tewksbury."
          },
          "synonyms": [
            "“considers … to be an example in nature of the beauty of …” 同义替换为原文的 “Capsaicin demonstrates the incredible elegance of evolution”，demonstrate 与 be an example of 同义，elegance 与 beauty 同义",
            "“Tewksbury considers” 对应原文的 “says Tewksbury”，说话人姓名原词复现"
          ],
          "locatingTip": "定位：题干出现专有名词 Tewksbury，其引语集中在第 7 段末尾，扫读引号内容即可找到 Capsaicin demonstrates the incredible elegance of evolution 一句。确定答案技巧：题干把 elegance 同义改写成 beauty，把 demonstrates 改写成 an example in nature of，剩下的宾语核心词 evolution 就是要填的词。从语法看，空格位于 of 之后，需要名词，evolution 正好是名词，且为单个词，符合 ONE WORD ONLY。注意不要填 elegance 或 incredible，那些是题干已经改写过的修饰成分，空格要的是“美”的对象，即进化。",
          "analysis": "第 7 段末尾图克斯伯里总结道：“‘Capsaicin demonstrates the incredible elegance of evolution,’ says Tewksbury.”（图克斯伯里说：“辣椒素体现了进化的惊人优雅。”）他随后补充，辣椒素既能驱避啮齿动物、抑制微生物，又不妨碍鸟类吃果实并传播种子，人类还利用这一特性来保存食物，说明自然对复杂性状提出的那些常常互相冲突的要求，偶尔会造就真正优雅的解决方案。题干用 Tewksbury considers the role of capsaicin in chilies to be an example in nature of the beauty of 13 … 来复述这句引语：the role of capsaicin 对应引语谈论的辣椒素功能；an example in nature of the beauty of 对应 demonstrates the incredible elegance of（elegance 同义为 beauty）；空格之后紧随句意要求的对象，即 evolution（进化），故答案填 evolution。这个词是不可数名词，填入时保持原形，不加冠词、不加复数。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
