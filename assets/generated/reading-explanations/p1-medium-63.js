(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-63", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-63",
  "meta": {
    "examId": "p1-medium-63",
    "title": "A Brief History of Humans and Food 人类食物的历史",
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
          "stem": "According to Darwin, cooking was the most significant development in human history.",
          "translation": "根据达尔文的观点，烹饪是人类历史上最重要的发展。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The 19th-century scientist Charles Darwin thought that cooking, after language, was the greatest discovery made by man."
          },
          "synonyms": [
            "“the most significant development” 与原文的 “the greatest discovery” 属于同义替换，都表示“最伟大的发现／最重要的发展”",
            "“in human history” 与原文的 “made by man” 对应，都指“人类所做出的”",
            "关键差别在于原文多出的限定语 “after language”（仅次于语言），这一状语在题干中被删掉，而它恰恰决定了烹饪并不是达尔文心中的第一位"
          ],
          "locatingTip": "定位：题干里的专有名词 Darwin 是大写人名，全文只出现一次，扫读时只要找 Charles Darwin 就能一步锁定第 2 段第 1 句，无需通读全文。确定答案技巧：句中出现 the greatest / the most 这类最高级时，必须核对原文有没有“限定条件”。原文写的是 “cooking, after language, was the greatest discovery made by man”，after language 明确把语言排在烹饪之前，也就是说在达尔文的排序里语言才是最伟大的发现，烹饪只能排第二。题干把 after language 这个限定删掉，直接声称烹饪是“最重要的”，属于偷换程度、与原文相矛盾，因此判 FALSE。",
          "analysis": "原文第 2 段第 1 句：“The 19th-century scientist Charles Darwin thought that cooking, after language, was the greatest discovery made by man.”（19 世纪的科学家查尔斯·达尔文认为，烹饪是仅次于语言的、人类最伟大的发现）。这句话包含一个重要限定：after language（在语言之后／仅次于语言）。既然是“仅次于语言”，那么在达尔文的评价体系里，排第一的是语言，烹饪是第二位，因此烹饪并不能被称为人类历史上“最重要”的发展。题干写成 “cooking was the most significant development in human history”，把 the greatest discovery 保留了，却把 after language 这一决定性的限定删除，使原本“第二伟大”的发现被抬高为“最伟大”，与原文形成直接冲突。这类题目的判分点通常就落在被删掉的状语或限定语上：读原文时要格外留意 after / except / only / apart from 等词，它们经常是判断题设下的陷阱。本题答案为 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文的 the greatest discovery 确实与题干的 the most significant development 同义，但原文附有 “after language” 这一限定，意为“仅次于语言”。语言的排序在烹饪之前，因此烹饪不是“最重要”的那一项。题干删掉限定语后扩大了程度，与原文相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对达尔文的观点交代得很清楚——“cooking, after language, was the greatest discovery made by man”，既有排序也有评价，信息完整且与题干冲突。存在明确而相反的信息时应判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The process of cooking gets rid of some plant poisons.",
          "translation": "烹饪过程会去除某些植物毒素。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Cooking can turn plants that are inedible into edible food by destroying toxic chemicals that plants often manufacture to protect themselves against attack by insects or other herbivorous animals."
          },
          "synonyms": [
            "“gets rid of” 同义替换为原文的 “destroying”，都是“消除、破坏掉”的意思",
            "“plant poisons” 同义替换为原文的 “toxic chemicals” 以及后文点名的 “plant secondary compounds”，原文明确指出这些化学物质是植物制造的“化学防御”",
            "“The process of cooking” 与原文作主语的 “Cooking” 对应，都指烹饪这一过程",
            "“some” 对应原文 that plants often manufacture 所表达的“植物常常制造（因而普遍存在）的”这一类化学物质"
          ],
          "locatingTip": "定位：题干的核心名词是 cooking 与 plant poisons，回到原文找同时谈“烹饪”和“植物中的有毒物质”的句子，落在第 2 段第 3 句。确定答案技巧：题干用的是 poisons 这一日常说法，原文用的是学术表达 toxic chemicals（有毒化学物质），并在紧接着的两句里给出专门名称 “plant secondary compounds”，还说明它们“purely as chemical defenses”（纯粹作为化学防御）。destroying toxic chemicals 与 gets rid of some plant poisons 方向完全一致，属同义改写，故判 TRUE。注意不要因为原文用的是 toxic chemicals 而非 poisons 就犹豫——雅思阅读大量采用这种通俗词与学术词的对应。",
          "analysis": "原文第 2 段第 3 句：“Cooking can turn plants that are inedible into edible food by destroying toxic chemicals that plants often manufacture to protect themselves against attack by insects or other herbivorous animals.”（烹饪可以通过破坏植物常常制造的有毒化学物质，把不可食用的植物变成可食用的食物，这些化学物质是植物用来保护自己免受昆虫或其他食草动物攻击的）。紧随其后的两句进一步说明：这些有毒化学物质被称为 “plant secondary compounds”（植物次生化合物），因为它们并不直接参与植物正常的生长、发育和繁殖，纯粹是作为化学防御而被生产出来，它们还让咖啡、球芽甘蓝等植物带有苦味。由此可知，原文明确指出烹饪能“破坏（destroying）”植物体内的这类有毒化学物质，而题干把它简化为 “gets rid of some plant poisons”（去除某些植物毒素），destroying 与 gets rid of 同义，toxic chemicals 与 plant poisons 同义，两者信息完全对应且方向一致，因此答案是 TRUE。作答时抓住一个要点：原文的 by destroying 是烹饪把不可食转为可食的“手段”，说明这些毒素确实被去除了，题干只是把手段改写成了结果陈述。",
          "traps": [
            "为什么不是 FALSE：原文清楚写着烹饪通过 “destroying toxic chemicals” 把不可食用的植物变成可食用，即这些有毒物质确实被破坏掉了，与题干“去除植物毒素”方向一致，不存在任何矛盾，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到 toxic chemicals，还进一步用 “plant secondary compounds” 给出名称和功能说明，证据充分，属于已给出信息，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Eating cooked food is more energy efficient than eating raw food.",
          "translation": "吃熟食比吃生食更节能（能量利用效率更高）。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The energy expended in chewing to break down the tough material is replaced by energy from the fuel used in cooking the food, so the ratio of energy gained to energy expended by the body is greater when food is cooked."
          },
          "synonyms": [
            "“more energy efficient” 同义替换为原文的 “the ratio of energy gained to energy expended by the body is greater”，即“摄入能量与消耗能量的比值更大”",
            "“Eating cooked food” 与原文的 “when food is cooked” 对应，都指进食经烹煮的食物",
            "“eating raw food” 对应原文前半句所描述的咀嚼生食情形（Chewing raw turnip, a plate of uncooked rice, or a raw leg of lamb），即未烹煮状态下的进食",
            "“energy expended in chewing” 与 “energy from the fuel used in cooking” 的替换关系，说明能量消耗从口腔咀嚼转移到了烹煮环节"
          ],
          "locatingTip": "定位：题干关键词是 energy 与 cooked / raw 的对比，回到原文找同时出现 energy 和 cook 的段落，落在第 3 段。确定答案技巧：原文用 “the ratio of energy gained to energy expended by the body is greater when food is cooked” 这一数学化表达说明熟食的能量效率更高；题干把它译成日常表达 more energy efficient。判断时不要纠缠具体数字或单位，只要确认“熟食让能量收支比更大”这一方向与题干一致即可。另外，原文用 Chewing raw turnip, a plate of uncooked rice, or a raw leg of lamb 举例说明生食要花更多力气咀嚼，正是题干“生食不如熟食高效”的另一半证据。",
          "analysis": "第 3 段整段都在比较生食与熟食的能量成本。首句给出原因：“Cooked food is often more digestible because heat breaks down tough cellulose cell walls in plants or tough connective tissue in animals.”（熟食通常更易消化，因为热量分解了植物中坚韧的纤维素细胞壁或动物中坚韧的结缔组织）。接着举例说，嚼生萝卜、吃一盘生米或一条生羊腿比吃同等的熟食要费力得多。最后一句给出结论：“The energy expended in chewing to break down the tough material is replaced by energy from the fuel used in cooking the food, so the ratio of energy gained to energy expended by the body is greater when food is cooked.”（原本用于咀嚼、分解坚硬材料所消耗的能量，被烹煮食物所耗燃料提供的能量所取代，因此食物被烹煮后，身体获得的能量与消耗的能量的比值更大）。题干 “Eating cooked food is more energy efficient than eating raw food” 正是对这一结论的概括：ratio of energy gained to energy expended 更大，就是 energy efficiency 更高；is greater when food is cooked 就是“熟食优于生食”。因此答案是 TRUE。本题的关键在于识别学术表达与通俗表达的对应：ratio of energy gained to energy expended（能量收支比）等于题干的 energy efficient（能量效率）。",
          "traps": [
            "为什么不是 FALSE：题干说熟食比生食更节能，而原文明确说熟食时 “the ratio of energy gained to energy expended by the body is greater”，即能量效率更高，方向完全一致，没有相反信息，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到咀嚼生食费力，还专门用一句给出能量收支比的结论，等于对“熟食更高效”作出了直接判断，信息充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Clarence Birdseye had previously worked in the Australian food industry.",
          "translation": "克拉伦斯·伯兹艾此前曾在澳大利亚食品行业工作过。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Several centuries later, frozen fish and other goods were transported by ship from Australia to England. However, the modern frozen food industry was started in the 1920s by an American, Clarence Birdseye."
          },
          "synonyms": [
            "“Clarence Birdseye” 在原文中为原词复现：“Clarence Birdseye”",
            "“the Australian food industry” 与原文的 “frozen fish and other goods were transported by ship from Australia to England” 并不是一回事：原文的 Australia 只是货物运输的出发地，与伯兹艾本人的工作经历无关",
            "“had previously worked in” 在原文中找不到任何对应表达：原文只交代他是美国人（an American），并在 20 世纪 20 年代开创了现代冷冻食品业"
          ],
          "locatingTip": "定位：题干的主语是专有名词 Clarence Birdseye，全文只出现在第 7 段，直接锁定该段即可；同时段内也出现了 Australia，两个词都在同一段，非常适合快速定位。确定答案技巧：这类题要在原文里核对“人”与“地方”之间的关系性质。原文说 “frozen fish and other goods were transported by ship from Australia to England”，Australia 是那一批冷冻货物运输的起点，讲的是货物而非从业人员；紧接着一句才说 “the modern frozen food industry was started in the 1920s by an American, Clarence Birdseye”，只交代了他的国籍与创业年份。至于他是否曾在澳大利亚食品行业工作过，原文完全没有交代，属于信息缺失，故判 NOT GIVEN。切忌看到 Australia 和 Birdseye 同段出现就自行建立联系。",
          "analysis": "第 7 段按时间顺序梳理冷冻保存的历史：最早是公元前 1700 年伊朗西北部的冰窖（icehouses），16 世纪初意大利人用化学品把水的冰点降到零下 18 度，几个世纪后 “frozen fish and other goods were transported by ship from Australia to England”（冷冻的鱼和其他货物由船从澳大利亚运到英国），再往后 “the modern frozen food industry was started in the 1920s by an American, Clarence Birdseye”（现代冷冻食品业由美国人克拉伦斯·伯兹艾在 20 世纪 20 年代开创）。题干问的是伯兹艾“此前曾在澳大利亚食品行业工作过（had previously worked in the Australian food industry）”。原文中 Australia 出现的语境是货物运输路线，只有“货”没有“人”，与伯兹艾本人的职业经历之间没有任何联系；关于伯兹艾，原文只给出国籍（American）、年份（1920s）和他的一次捕鱼经历，从未提及他的从职经历。原文既没有肯定也没有否定“他曾供职于澳大利亚食品行业”，属于信息完全缺失，因此答案是 NOT GIVEN。做题提醒：两个关键词同段出现并不等于它们之间有关系，一定要读完整句，看清每个名词在句中承担的角色。",
          "traps": [
            "为什么不是 TRUE：原文本段虽然同时出现 Australia 和 Clarence Birdseye，但 Australia 只出现在“货物从澳大利亚船运至英格兰”这一句中，谈的是货物流向；关于伯兹艾本人此前的工作经历原文没有任何交代，无法支持题干。",
            "为什么不是 FALSE：FALSE 需要原文提供相反信息，例如说明他从未在澳大利亚工作、或他的经历与澳大利亚食品业无关。原文对此保持沉默，只是没有提到，因此不能判 FALSE，只能判信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Birdseye's trip with the Inuit confirmed what he already believed about rapid freezing.",
          "translation": "伯兹艾与因纽特人的那次出行证实了他此前关于快速冷冻的看法。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "While on a fishing trip with the Inuit in the Canadian Arctic, Birdseye observed that rapid freezing creates smaller ice crystals and therefore causes less damage to food—a discovery he had not expected."
          },
          "synonyms": [
            "“Birdseye's trip with the Inuit” 为原词复现：“a fishing trip with the Inuit in the Canadian Arctic”",
            "“rapid freezing” 在原文中为原词复现：“rapid freezing creates smaller ice crystals”",
            "“confirmed what he already believed” 与原文的 “a discovery he had not expected” 直接冲突：题干说他早已相信并得到证实，原文却强调这是他事先没有预料到的发现"
          ],
          "locatingTip": "定位：利用专有名词 Inuit（因纽特人）和人名 Birdseye 一步定位到第 7 段倒数第三句，该句同时含 trip、rapid freezing 等题干关键词。确定答案技巧：判断题遇到 already believed、had known、expected 这类表示“事先已有认知”的词语，要立刻回原文找有没有对应的“预期／惊讶”表述。原文句尾的 “a discovery he had not expected”（一个他未曾预料到的发现）与题干“证实了他原本就相信的看法”正好相反：前者说明这是新知，后者说明这是旧知的验证，方向对立，故判 FALSE。破折号后的补充说明往往是出题人埋伏答案的地方，读句时不要省略。",
          "analysis": "原文第 7 段写道：“While on a fishing trip with the Inuit in the Canadian Arctic, Birdseye observed that rapid freezing creates smaller ice crystals and therefore causes less damage to food—a discovery he had not expected.”（在加拿大北极地区与因纽特人一同出航捕鱼时，伯兹艾观察到快速冷冻会形成更小的冰晶，因此对食物的破坏更小——一个他没有预料到的发现）。句子的前半部分与题干的前半部分完全对应：trip with the Inuit、rapid freezing 都是原词；出题点落在破折号后的同位语 “a discovery he had not expected”。题干说这次出行 “confirmed what he already believed”（证实了他此前的看法），暗含“他出发前就已持此观点”；而原文强调这是他事先并未预料到的发现，意味着他此前并不知情。一个说“事先已知、得到验证”，一个说“事先未知、意外发现”，两者相互矛盾，因此答案是 FALSE。解题要点：判断这类题只需抓住 expect / anticipate / surprise 之类的语义标记，本题的 had not expected 就是最直接的判分依据。",
          "traps": [
            "为什么不是 TRUE：题干的关键在于“他此前已经相信（already believed）”，而原文明确写着这是一次 “a discovery he had not expected”（未曾预料到的发现），说明观察之前他并没有这样的认知，题干与原文事实相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对这次捕鱼经历、观察内容以及他事前是否有预期都作了明确交代，信息完整且与题干冲突；存在相反信息时按规则判 FALSE，而不是信息缺失。"
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
          "stem": "the development of equipment and larger 6 ________",
          "translation": "工具的发展以及更庞大的 ________。",
          "answer": "populations",
          "wordClass": "名词（复数，指人口；受比较级 larger 修饰，与原文 populations 的复数形式一致）",
          "locating": {
            "paragraph": "4",
            "quote": "People began to create a variety of new tools to aid survival, and in turn, populations increased in size."
          },
          "synonyms": [
            "“the development of equipment” 同义替换为原文的 “began to create a variety of new tools”，都是“工具／装备得到发展”的意思",
            "“larger …” 同义替换为原文的 “increased in size”，形容词比较级改写为动词短语“规模增大”",
            "“the changes agriculture brought about” 概括原文的 “the advent of farming, which led to dramatic changes in human societies”"
          ],
          "locatingTip": "定位：笔记小标题限定在“农业带来的变化”，对应原文第 4 段（该段第二句即 “This all began to change around 10,500 years ago with the advent of farming”）。题干关键词是 tools / equipment，回段内找谈工具的那句，即 “People began to create a variety of new tools to aid survival, and in turn, populations increased in size.”。确定答案技巧：题干用 and 把两件事并列——工具的发展和更大的某个东西；原文同样用 and 并列两件事——new tools 和 populations increased in size。把并列项一一对应，剩下的 increased in size 就对应题干的 larger，被“变大”的那个主体就是 populations。填空时注意题干中的 larger 是比较级修饰语，要填的是名词本身而不是 bigger 之类的形容词；同时原文用的是复数 populations（人口总量），照抄原词即可，不要改写成单数 population。",
          "analysis": "原文第 4 段先交代狩猎采集者过去每天要花多达七小时采集食物，接着说大约 10500 年前农业的出现带来了巨变，随后列举具体变化：“People began to create a variety of new tools to aid survival, and in turn, populations increased in size.”（人们开始制造各种各样的新工具以助生存，人口规模也随之增大）。笔记小标题 “The changes agriculture brought about were” 下第一条即 “the development of equipment and larger [6]”，对应关系是：began to create a variety of new tools（新工具的出现、发展）对应 the development of equipment；in turn 表结果，其后的 populations increased in size 对应 larger populations。因此空格应填 populations。词性上，large 与它的比较级 larger 通常修饰可数复数名词，原文也正是用复数 populations，故答案保持复数形式。此处容易误填 size（原文 increased in size 里的 size），但 size 是“规模”的度量词，题干 larger 后面需要一个“规模变大”的主体名词，即人口，填 size 会变成“更大的规模”，与原文“人口的规模变大”这一逻辑不对应。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "the ability to keep 7 ________ as writing developed",
          "translation": "随着文字的发展，拥有了保存 ________ 的能力。",
          "answer": "records",
          "wordClass": "名词（复数，指记录；与动词 keep 搭配，原文用 records 复数形式）",
          "locating": {
            "paragraph": "4",
            "quote": "Around this time, writing became more sophisticated and allowed people to maintain records of the harvest and taxes."
          },
          "synonyms": [
            "“as writing developed” 同义替换为原文的 “writing became more sophisticated”，都是“文字变得更发达／更高级”的意思",
            "“the ability to keep” 同义替换为原文的 “allowed people to maintain”，即“使人们能够保存／维护”",
            "“records” 在原文中为原词：maintain records of the harvest and taxes"
          ],
          "locatingTip": "定位：题干关键词 writing 是抽象名词但在本段很醒目，回第 4 段搜索 writing，只有一句 “Around this time, writing became more sophisticated and allowed people to maintain records of the harvest and taxes.”，直接锁定。确定答案技巧：题干结构是 “the ability to keep [7] as writing developed”，原文结构是 “writing became more sophisticated and allowed people to maintain records of …”，两者的因果关系和主谓关系一一对应：as writing developed 对应 writing became more sophisticated，the ability to keep 对应 allowed people to maintain，因此 maintain 的宾语 records 就是要填的词。注意 maintain 在此意为“保存、留有（记录）”，是 keep 的同义替换；空格后紧跟 as writing developed，说明该词是 keep 的宾语而非状语，因此填名词 records，且原文为复数。",
          "analysis": "第 4 段在讲农业带来的社会变化时列出了若干连锁反应，其中一句是：“Around this time, writing became more sophisticated and allowed people to maintain records of the harvest and taxes.”（大约在这一时期，文字变得更加精密，使人们能够保存关于收成和税收的记录）。笔记第二条 “the ability to keep [7] as writing developed” 正是这句话的改写：as writing developed 对应 writing became more sophisticated；the ability to keep 对应 allowed people to maintain；介词 keep 后要接的名词就是 maintain 的宾语 records（收成和税收的记录）。词性上 records 是可数名词复数，本句用 “records of the harvest and taxes” 表示多类、多条记录，因此必须写复数形式 records，不要写成单数 record。另外提醒不要误填 harvest 或 taxes：题干只说“保存某物”，而原文中 harvest 与 taxes 是 records of 后面说明记录内容的成分，题干并没有要求填“记录什么”，因此答案只能是 records。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "early methods of food preservation included: smoking, drying and combining food with acid or 8 ________",
          "translation": "早期的食物保存方法包括：烟熏、干燥以及把食物与酸或 ________ 结合。",
          "answer": "salt",
          "wordClass": "名词（不可数，指盐；位于介词 with 之后，与前面的 acid 并列同作 with 的宾语，用不可数形式 salt，不加冠词、不变复数）",
          "locating": {
            "paragraph": "5",
            "quote": "This, combined with the seasonality of production, led them to discover methods of preserving food: smoking, drying, adding acid by fermentation, or adding salt."
          },
          "synonyms": [
            "“combining food with acid” 同义替换为原文的 “adding acid by fermentation”，都是“加入酸”的做法",
            "“or” 与原文的 “or adding salt” 中的 or 完全对应，说明 acid 与 salt 是并列的两个选项",
            "“early methods of food preservation” 对应原文列举的 smoking, drying, adding acid, adding salt 这四种古老方法"
          ],
          "locatingTip": "定位：题干用冒号列举保存食物的方法（smoking、drying、acid），这是很强的定位标志，回原文第 5 段找同一组并列名词，即 “smoking, drying, adding acid by fermentation, or adding salt”。确定答案技巧：题干把 “acid or [8]” 写成二选一结构，原文也恰恰是 “adding acid by fermentation, or adding salt”，or 前后各一个方法，酸已经出现在题干里，剩下的那一项就是 salt。填空时注意 ONE WORD ONLY，只需写 salt 一个词，不要写 adding salt 或 salting；salt 在此作不可数名词，与前面的不可数名词 acid 并列，用原形即可。",
          "analysis": "第 5 段说明农业出现后祖先第一次有了吃不完的食物，加之生产具有季节性，“This, combined with the seasonality of production, led them to discover methods of preserving food: smoking, drying, adding acid by fermentation, or adding salt.”（这与生产的季节性一起，促使他们发现了保存食物的方法：烟熏、干燥、通过发酵加酸，或者加盐）。紧接着的两句解释这四种方法为何有效：它们都让食物成为对导致腐败的细菌更加不友好的环境，并减缓食物中会引起腐烂的天然化学反应。题干把四种方法改写成 “smoking, drying and combining food with acid or [8]”，其中 combine food with 对应原文的 adding acid 或 adding salt，acid 对应 adding acid by fermentation，那么与 acid 并列的另一种添加物就是 salt（盐）。答案写 salt 即可，一词符合 ONE WORD ONLY 的要求；不要因为原文写的是 adding salt 而多填 adding，也不要写成复数 salts（此处 salt 指食盐这一物质，不可数）。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Nicolas Appert put food into containers made of 9 ________",
          "translation": "尼古拉·阿佩尔把食物装入由 ________ 制成的容器中。",
          "answer": "glass",
          "wordClass": "名词（不可数，材料名；作介词 of 的宾语，说明容器的制作材料，用不可数形式 glass）",
          "locating": {
            "paragraph": "6",
            "quote": "He sealed food in bottles fabricated from glass and then heated them in boiling water to cook the contents."
          },
          "synonyms": [
            "“containers” 同义替换为原文的 “bottles”，即装食物用的瓶子",
            "“put food into” 同义替换为原文的 “sealed food in”，都是“把食物装入”的意思",
            "“made of” 同义替换为原文的 “fabricated from”，都表示“用某种材料制成”"
          ],
          "locatingTip": "定位：题干给出专有名词 Nicolas Appert，这是极好的定位词，回原文第 6 段找到 “Canning was invented by a Frenchman, Nicolas Appert, in the early 19th century.” 后接着读下一句即可。确定答案技巧：题干问容器的材料，句型是 made of，原文对应的是 “bottles fabricated from glass”，fabricated from 与 made of 同义，其后紧跟的 glass 就是材料。填空时注意介词 of 后需要名词，且 glass 在此表示“玻璃”这一材料、不可数，用原形即可，不要写成 glasses（那是“眼镜”或“玻璃杯”的复数）；也不要误填 bottles，那是容器本身而非材料。",
          "analysis": "第 6 段介绍近代两种新的保存方法——罐装与冷冻，其中罐装部分写道：“Canning was invented by a Frenchman, Nicolas Appert, in the early 19th century. He sealed food in bottles fabricated from glass and then heated them in boiling water to cook the contents.”（罐装由法国人尼古拉·阿佩尔在 19 世纪初发明。他把食物密封在用玻璃制成的瓶子里，然后在沸水中加热以煮熟里面的食物）。笔记中 “Nicolas Appert put food into containers made of [9]” 对应的是第二句：put food into 对应 sealed food in，containers 对应 bottles，made of 对应 fabricated from，因此空格填材料名 glass。从词性看，of 是介词，其后需要名词或名词性成分，glass 在此为不可数名词，表示容器的材质，保持原形即可。要注意区分“容器”和“材料”两个信息点：题干已经用 containers 表达了容器，空格只承担材料信息，因此不能填 bottles 或 bottle。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Appert's method resulted in preserved food that had the same taste and 10 ________ as fresh food",
          "translation": "阿佩尔的方法使保存后的食物具有与新鲜食物相同的味道和 ________。",
          "answer": "texture",
          "wordClass": "名词（可数，指口感／质地；与 taste 并列作 had 的宾语，用单数形式 texture）",
          "locating": {
            "paragraph": "6",
            "quote": "Appert's method had great advantages over older methods of food preservation: it could be applied to a wide range of foods, and the flavor and texture were similar to freshly cooked products."
          },
          "synonyms": [
            "“the same taste” 同义替换为原文的 “the flavor … were similar to”，都是“味道相同／相似”的意思",
            "“resulted in … that had” 同义替换为原文的 “had great advantages … ”，即该方法带来的结果／优点",
            "“fresh food” 同义替换为原文的 “freshly cooked products”，指刚煮好的新鲜食物"
          ],
          "locatingTip": "定位：题干出现专有名词 Appert's method，且与第 9 题同属罐装小节，仍在第 6 段。回段内找提到该方法优点的句子，即 “Appert's method had great advantages over older methods of food preservation: it could be applied to a wide range of foods, and the flavor and texture were similar to freshly cooked products.”。确定答案技巧：题干用 and 并列两个属性——same taste 和 [10]；原文也用 and 并列两个属性——the flavor 和 the texture。把并列项对齐：flavor 对应题干已给出的 taste，剩下未出现的那个名词就是答案 texture（口感、质地）。填空时注意空格前有 and，后接 as fresh food，说明该词与 taste 一样是名词，用单数原形即可；不要误填 flavor（题干已用 taste 表达，位置已被占用），也不要填 consistency（那是第 7 段描述冷冻食品时用的词，属于另一段的信息）。",
          "analysis": "第 6 段在介绍阿佩尔的方法时写道：“Appert's method had great advantages over older methods of food preservation: it could be applied to a wide range of foods, and the flavor and texture were similar to freshly cooked products.”（阿佩尔的这一方法相比更古老的保存方式有巨大优势：它适用于多种多样的食物，而且风味和口感与刚煮好的食品相似）。笔记中 “Appert's method resulted in preserved food that had the same taste and [10] as fresh food” 正是这句话的改写：resulted in … had 对应 had great advantages；the same … as 对应 were similar to（same 与 similar 在“一致性”这一语义上同等级）；taste 对应 flavor；fresh food 对应 freshly cooked products。剩下的并列名词 the texture 就是空格答案，即“口感、质地”。从词性看，texture 与 flavor 并列为可数名词的单数形式，作 were 的主语，用原形 texture 即可。这里容易混淆的是 flavors（复数）与单数形式的选择，以及是否把它写成 consistency——考生须注意同义替换是词对词的，原文本句并没有出现 consistency。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Peter Durand introduced cans which had the advantage of being 11 ________ and hard to break",
          "translation": "彼得·杜兰德推出了具有 ________ 且不易破损这一优点的罐头。",
          "answer": "lightweight",
          "wordClass": "形容词（作 being 的表语，与后面的 hard to break 并列，保持原级 lightweight）",
          "locating": {
            "paragraph": "6",
            "quote": "Until this point, containers had been too heavy to be widely used, but Durand produced the first ones which were lightweight and resistant to damage."
          },
          "synonyms": [
            "“Peter Durand introduced cans” 同义替换为原文的 “Durand produced the first ones”，ones 指代前文的 containers（罐）",
            "“hard to break” 同义替换为原文的 “resistant to damage”，即“不易损坏”",
            "“had the advantage of being …” 对应原文的对比结构 “had been too heavy …, but … were lightweight”，说明轻便是相对旧容器的优势"
          ],
          "locatingTip": "定位：题干给出人名 Peter Durand，回第 6 段找到 “His idea was soon copied by an Englishman, Peter Durand.”，紧接着的下一句就是答案句。确定答案技巧：题干用 “being [11] and hard to break” 并列表述两个优点；原文同样用 and 并列 “were lightweight and resistant to damage”。对齐并列项：resistant to damage 对应 hard to break，剩下的 lightweight 就对应空格。填空时注意空格前面的 being 是系动词形式，其后应填形容词；同时要把握原文的对比逻辑——此前的容器 “too heavy to be widely used”（太重而无法普及），杜兰德的第一批轻便容器才成为优势所在，因此填 lightweight 而不是 heavy。",
          "analysis": "第 6 段在讲完阿佩尔之后写道：“His idea was soon copied by an Englishman, Peter Durand. Until this point, containers had been too heavy to be widely used, but Durand produced the first ones which were lightweight and resistant to damage.”（他的想法很快被英国人彼得·杜兰德采用。在此之前，容器一直过重而无法广泛使用，但杜兰德制造出了第一批轻便且不易损坏的容器）。笔记 “Peter Durand introduced cans which had the advantage of being [11] and hard to break” 与第二句一一对应：introduced cans 对应 produced the first ones（ones 指代前句的 containers）；had the advantage of being 对应原文 “too heavy …, but … lightweight” 这一由劣势到优势的转折；hard to break 对应 resistant to damage；因此空格填 lightweight。原文的 “too heavy” 是旧容器的缺陷，不是杜兰德罐头的优势，填 heavy 会把优劣颠倒。词性上，being 后需形容词作表语，lightweight 是一个单词的形容词，符合 ONE WORD ONLY 的要求。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "In 1855, the metal can opener replaced the 12 ________ which had been used with a hammer to open cans",
          "translation": "1855 年，金属开罐器取代了此前与锤子一起用来开罐的 ________。",
          "answer": "chisel",
          "wordClass": "名词（单数，工具名；位于动词 replaced 之后作其宾语，后接 which 引导的定语从句修饰，用单数形式 chisel）",
          "locating": {
            "paragraph": "6",
            "quote": "Until then, cans were opened with a chisel and hammer."
          },
          "synonyms": [
            "“replaced” 对应原文的 “the invention of the can opener in 1855 … Until then, cans were opened with a chisel and hammer”，即开罐器出现后改写了旧的开罐方式",
            "“In 1855” 在原文中为原词复现：“the invention of the can opener in 1855”",
            "“used with a hammer to open cans” 对应原文的 “cans were opened with a chisel and hammer”，题干保留了 hammer，另一件工具留空"
          ],
          "locatingTip": "定位：题干给出精确年份 1855 和事件 can opener，回第 6 段找 1855，落在 “the real rise in popularity of canning had to wait until the invention of the can opener in 1855. Until then, cans were opened with a chisel and hammer.”。确定答案技巧：题干说 1855 年开罐器取代了某样工具，并且那样工具是“与锤子一起”用来开罐的。原文正是 “cans were opened with a chisel and hammer”，即用凿子和锤子开罐；题干已经保留了 hammer，与它并列的另一件工具就是 chisel。填空时注意答案只写 chisel 一个词，不要写 chisel and hammer；另外 chisel 是单数可数名词，与 hammer 并列为开罐的两件工具，用原形即可。",
          "analysis": "第 6 段叙说罐装普及的过程：“Two years later, in 1812, two Englishmen, Bryan Donkin and John Hall, started the commercial canning of food, although the real rise in popularity of canning had to wait until the invention of the can opener in 1855. Until then, cans were opened with a chisel and hammer.”（两年后，即 1812 年，两位英国人布赖恩·唐金和约翰·霍尔开始了食物的商业化罐装，不过罐装真正流行起来还要等到 1855 年开罐器被发明。在那之前，罐头是用凿子和锤子打开的）。笔记 “In 1855, the metal can opener replaced the [12] which had been used with a hammer to open cans” 中，In 1855 与原文年份一致，can opener 与原文 the can opener 一致，used with a hammer 对应原文的 with a chisel and hammer，因此被开罐器取代的那件旧工具就是 chisel（凿子）。词性上，chisel 为可数名词单数，与 hammer 并列作 with 的宾语，填原形即可。注意不要误填 hammer（题干已经把它写出来了，说明空格要的是另一样东西），也不要写 knife 之类的联想词——原文只提到 chisel 和 hammer 两件工具。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "some food was still found to be edible after more than a hundred years, e.g. an old can of 13 ________",
          "translation": "有些食物在一百多年后仍被发现可以食用，例如一罐陈放的 ________。",
          "answer": "meat",
          "wordClass": "名词（不可数，指肉类；作介词 of 的宾语，说明罐中食物，用不可数形式 meat）",
          "locating": {
            "paragraph": "6",
            "quote": "one can containing meat, dating back to 1824, was opened in 1939, and the contents were still in good condition."
          },
          "synonyms": [
            "“was still found to be edible” 同义替换为原文的 “the contents were still in good condition”，都表示“内容物仍然可以正常食用”",
            "“more than a hundred years” 对应原文的时间跨度：dating back to 1824 … opened in 1939，相隔 115 年",
            "“an old can of …” 对应原文的 “one can containing meat, dating back to 1824”"
          ],
          "locatingTip": "定位：题干的关键信息是“一百多年后仍可食用”，回第 6 段末尾找与年份跨度有关的句子，即 “Canning is an extremely effective way of preserving food: one can containing meat, dating back to 1824, was opened in 1939, and the contents were still in good condition.”。确定答案技巧：题干用 e.g. an old can of [13] 举例说明罐中装的是什么，原文的 “one can containing meat” 正好给出容器内容物：containing 后接的名词 meat 就是答案。可以顺手做一次时间验算：1824 年封装的罐头 1939 年才被打开，相隔 115 年，与题干的 more than a hundred years 吻合，说明定位无误。填空时注意 of 后应接名词，meat 在此不可数、用原形即可，不要写成 meats 或 food。",
          "analysis": "第 6 段最后一句总结了罐装保存的效果：“Canning is an extremely effective way of preserving food: one can containing meat, dating back to 1824, was opened in 1939, and the contents were still in good condition.”（罐装是一种极其有效的食物保存方式：一罐装于 1824 年的肉罐头在 1939 年被打开，里面的内容物仍然状况良好）。笔记最后一条 “some food was still found to be edible after more than a hundred years, e.g. an old can of [13]” 正是这句话的概括与改写：was still found to be edible 对应 the contents were still in good condition；more than a hundred years 对应 1824 年至 1939 年之间的 115 年；an old can of 对应 one can containing …，因此罐中食物即 meat。词性上，of 是介词，其后需名词，meat 在此作不可数名词，表示“肉”这一类食物，保持原形即可。容易出错的是把 good condition 中的 condition 或 contents 当作答案，但题干问的是“一罐什么东西”，只有表示内容的 meat 符合语义。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
