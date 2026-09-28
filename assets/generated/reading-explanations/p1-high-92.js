(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-92", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-92",
  "meta": {
    "examId": "p1-high-92",
    "title": "Dust and the American West 美国西部尘埃",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–7 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 7
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Jason Neff discovered there had been a dramatic rise in dust levels in the second half of the nineteenth century.",
          "translation": "贾森·内夫（Jason Neff）发现，19 世纪后半叶尘埃水平曾急剧上升。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Atmospheric dust was minimal throughout those five millennia until the mid-19th century, he says, but then, 'from about 1860 to 1900, dust deposition rates shot up.'"
          },
          "synonyms": [
            "“a dramatic rise” 同义替换为原文的 “shot up”（骤增、猛涨），两者都表示上升幅度很大",
            "“in the second half of the nineteenth century” 同义替换为原文的具体年份 “from about 1860 to 1900”，1860 至 1900 年正属 19 世纪后半叶",
            "“dust levels” 同义替换为原文的 “dust deposition rates”（尘埃的沉降速率），指同一个测量对象",
            "“discovered” 对应原文的 “has been analyzing sediments” 与引语前的 “he says”，即内夫研究得出的结论"
          ],
          "locatingTip": "定位：题干含大写人名 Jason Neff，全文只在第 2 段出现，扫读时盯住这个专有名词即可一步定位，再在本段内找与时间和尘埃数量有关的表述，即句末引语 “from about 1860 to 1900, dust deposition rates shot up.”。确定答案技巧：本题的判分点是把题干的时间表述换算成具体年份——the second half of the nineteenth century 就是 19 世纪后半叶，对应原文 1860–1900；同时 dramatic rise 对应 shot up。注意该段前半句先说 “Atmospheric dust was minimal … until the mid-19th century”（19 世纪中叶之前尘埃极少），随后用 but then 转折引出“之后激增”，转折词之后才是本题信息的落点，因此判 TRUE。",
          "analysis": "第 2 段介绍科罗拉多大学地球化学家 Jason Neff 的研究。他用圣胡安山脉的沉积物（sediments）回溯了过去 5000 年的情况，段落末句是本题的定位句：“Atmospheric dust was minimal throughout those five millennia until the mid-19th century, he says, but then, 'from about 1860 to 1900, dust deposition rates shot up.'”（他说，在那五千年里大气尘埃一直极少，直到 19 世纪中叶；但随后“大约从 1860 年到 1900 年，尘埃沉降速率猛增”）。题干说“内夫发现 19 世纪后半叶尘埃水平曾急剧上升”，与原文逐项对得上：①主体人物 Jason Neff 与原文一致；②时间 the second half of the nineteenth century 就是原文给出的 1860 至 1900 年（19 世纪后半叶）；③dust levels 对应 dust deposition rates（尘埃沉降速率）；④a dramatic rise 对应 shot up（猛增）。原文唯一需要留意的细节是 shot up 是口语化的引语表达，语气强烈，与 dramatic（剧烈的）程度相当，没有夸大或缩小。所有信息方向一致，故选 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确说 1860 至 1900 年尘埃沉降速率猛增，题干所述与该信息方向一致，不存在任何矛盾点，因此不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅给出了“尘埃极少”的长期背景，还用 but then 明确交代了 19 世纪后半叶的激增，时间和程度都写得非常具体，属于已交代的信息，不是信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The Anasazi civilization disappeared due to the impact of dust in the atmosphere.",
          "translation": "阿纳萨齐（Anasazi）文明是因大气中尘埃的影响而消失的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "There was a near-permanent drought between 900 and 1300 which was so intense that it destroyed a series of Native American civilizations, including the Anasazi"
          },
          "synonyms": [
            "“disappeared” 同义替换为原文的 “destroyed”（摧毁、毁灭），指同一件事，即文明的消亡",
            "“The Anasazi civilization” 在原文中以 “including the Anasazi” 的形式作为例证出现，指同一对象",
            "“due to the impact of dust in the atmosphere” 与原文的 “a near-permanent drought”（近乎持续的干旱）相互冲突：原文把消亡原因归为干旱",
            "同段另有 “Yet the evidence from the San Juan lakes is that it was not dusty.”，明确否定当时存在多尘天气，与题干的因果链直接对立"
          ],
          "locatingTip": "定位：Anasazi 是大写专有名词，全文只出现在第 3 段，扫读时可以快速锁定；找到后重点看与该文明消亡原因有关的句子。确定答案技巧：因果类判断题要盯住“原因”这一环，看原文把消亡归因于什么。原文写的是 “There was a near-permanent drought between 900 and 1300 which was so intense that it destroyed a series of Native American civilizations, including the Anasazi”，原因链条是“长期干旱”导致一系列美洲原住民文明毁灭，题干却把原因换成“大气中的尘埃”，属于原因偷换；而下一句 “Yet the evidence from the San Juan lakes is that it was not dusty.” 更从数据上直接否定“当时尘土飞扬”，所以判 FALSE。",
          "analysis": "第 3 段先指出一个反常现象：通常干旱就意味着多尘，而美国西部几乎一直干旱，却并不一定多尘。随后给出证据链：“There was a near-permanent drought between 900 and 1300 which was so intense that it destroyed a series of Native American civilizations, including the Anasazi, whose cliff homes are now US national treasures.”（公元 900 至 1300 年间存在一场近乎持续的干旱，其强度之大摧毁了一系列美洲原住民文明，其中包括阿纳萨齐人，他们的崖居如今是美国的国宝）。紧接着一句：“Yet the evidence from the San Juan lakes is that it was not dusty. Even as their civilization was collapsing, the Anasazi seem to have protected their soils from erosion.”（然而圣胡安湖泊的证据却表明当时并不尘土飞扬。即使在自己的文明崩塌之际，阿纳萨齐人似乎仍保护了他们的土壤免遭侵蚀）。原文的因果是“干旱造成文明毁灭”，并且用 it was not dusty 明确排除尘埃；题干却写成“阿纳萨齐文明是因大气中尘埃的影响而消失（disappeared due to the impact of dust in the atmosphere）”，把原因换成了原文明确否认的尘埃，属于典型的原因偷换，故答案为 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确说毁灭该文明的是近乎持续的干旱（a near-permanent drought），并且同段直接说明当时并不尘土飞扬（it was not dusty），题干把原因写成尘埃，与原文事实相反。",
            "为什么不是 NOT GIVEN：原文对该文明的毁灭原因交代得非常清楚（干旱），并且对“是否多尘”也作了明确回答，属于有明确且相反信息的题目，不是未提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Before cattle were introduced to the American Southwest, large numbers of bison occupied the area.",
          "translation": "在牛被引入美国西南部之前，该地区曾有大量野牛栖息。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Unlike most other parts of the US, there were few grazers in the American Southwest until the Europeans came. No bison and few antelope or deer."
          },
          "synonyms": [
            "“large numbers of bison occupied the area” 与原文的 “No bison and few antelope or deer” 直接冲突：原文说西南部根本没有野牛",
            "“Before cattle were introduced to the American Southwest” 对应原文的 “until the Europeans came” 与 “once they brought their cows”（欧洲人带来牛之前）",
            "“few grazers in the American Southwest” 中的 few（几乎没有）与题干的 large numbers（大量）在数量上正好相反"
          ],
          "locatingTip": "定位：题干关键词是 American Southwest 与 bison，两者同现在第 4 段内夫的引语里，扫读大写地名 American Southwest 即可锁定段落。确定答案技巧：本题考“数量多少”，只要回到原文核对数量词即可——原文说 “there were few grazers in the American Southwest until the Europeans came. No bison and few antelope or deer.”，No bison 意为“没有野牛”，few antelope or deer 意为“羚羊和鹿都很少”，而题干却说 large numbers of bison（大量野牛），数量上正好相反，故判 FALSE。切勿与第 5 段“大平原上野牛成群（bison roamed in vast herds）”混淆，那是另一个地区。",
          "analysis": "第 4 段讲欧洲移民把牛带进西南部后的情况，内夫指出这里的景观“极不适应食草动物”：“Unlike most other parts of the US, there were few grazers in the American Southwest until the Europeans came. No bison and few antelope or deer.”（与美国其他大部分地区不同，在欧洲人到来之前，美国西南部的食草动物很少。没有野牛，羚羊和鹿也寥寥无几）。这句话明确指出：移民带来牛之前，西南部几乎没有大型食草动物，尤其“没有野牛（No bison）”。题干却说“在牛被引入西南部之前，那里有大量野牛（large numbers of bison occupied the area）”，与原文的数量判断完全相反，属事实矛盾，因此答案是 FALSE。这里最容易出错的地方是把第 5 段“In the Great Plains to the east and north, bison roamed in vast herds.”（在东部和北部的大平原，野牛成群结队地游荡）张冠李戴到西南部——bison 成群是第 5 段谈大平原时的内容，而第 4 段谈的正是西南部“没有野牛”，两个地区的对比正是本篇的核心逻辑。",
          "traps": [
            "为什么不是 TRUE：原文对内夫原话的记录是 “No bison and few antelope or deer”，即西南部根本没有野牛；题干说 large numbers of bison，与原文直接冲突。大平原上的野牛群属于另一地区（第 5 段），不能移植到西南部。",
            "为什么不是 NOT GIVEN：原文对西南部野牛的有无交代得非常明确（No bison），属于已给出且与题干相反的信息，不是信息缺失。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The bison population in the Great Plains diminished because European settlers found it easy to hunt them.",
          "translation": "大平原上的野牛数量减少，是因为欧洲定居者发现猎杀它们很容易。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In the Great Plains to the east and north, bison roamed in vast herds. Their regular grazing had created tough grass, while the herds manured the soil."
          },
          "synonyms": [
            "“The bison population in the Great Plains” 对应原文的 “bison roamed in vast herds”，指大平原上的野牛群",
            "“diminished” 在原文中完全找不到对应：原文只说野牛成群游荡，没有提数量减少",
            "“European settlers found it easy to hunt them” 在原文中没有任何对应表述，全文未提及捕猎野牛一事"
          ],
          "locatingTip": "定位：题干关键词是 Great Plains 与 bison，两者同现在第 5 段首句，定位很快。确定答案技巧：本题有两层信息要核对——第一层“野牛数量是否减少”，原文只说 bison roamed in vast herds（野牛成群游荡），强调的是数量庞大，完全没有说它们后来减少了；第二层“是否因为定居者容易猎杀”，原文谈大平原时讲的是野牛的定期啃食造就了坚韧的草、牛群给土壤施肥，全文任何地方都没有出现 hunting、hunted 之类的捕猎描写。两层信息原文都未提及，所以答案是 NOT GIVEN，而不是 FALSE（原文没有说“数量没有减少”，只是没说这件事）。",
          "analysis": "第 5 段转入对比：大平原（Great Plains）与西南部不同，“In the Great Plains to the east and north, bison roamed in vast herds. Their regular grazing had created tough grass, while the herds manured the soil.”（在东部和北部的大平原，野牛成群结队地游荡。它们有规律的啃食造就了坚韧的草，而牛群则为土壤施了肥）。全段之后的篇幅都在讲西南部如何缺乏抵御大量牲畜的能力、投机资本如何涌入、到 1900 年西部有多少牛羊，再没有提到大平原野牛。也就是说，原文只告诉我们大平原上野牛很多、以及它们对草原的正面作用（形成坚韧的草、给土壤施肥），既没有交代野牛数量后来下降（diminished），也没有解释原因，更没有提欧洲定居者猎杀野牛是否容易（found it easy to hunt them）。按判断题规则：原文未提及的信息判 NOT GIVEN；这里既不能说题干与原文相符（TRUE），也不能说与原文矛盾（FALSE，因为原文并未声称野牛数量没有下降），故答案为 NOT GIVEN。这类题要注意“看似常识”的干扰——美洲野牛确曾因捕猎锐减，但解题只能依据本篇文章，不能带入外部知识。",
          "traps": [
            "为什么不是 TRUE：原文只描述大平原野牛成群（bison roamed in vast herds）以及它们对草原的正面作用，从未提及野牛数量减少，更未把减少与捕猎容易联系起来，题干的两层信息在原文都找不到支撑。",
            "为什么不是 FALSE：FALSE 要求原文给出与题干相反的信息，例如“野牛数量并未减少”或“野牛并非因被捕猎而减少”，而原文对野牛数量变化和捕猎一事完全沉默，属于信息缺失而非信息矛盾。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The development of railroads across the US was more expensive than originally expected.",
          "translation": "美国各地铁路的发展比最初预期的更为昂贵。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The money went into railroads and herds of cattle and sheep that rode the rails to the wide open pastures."
          },
          "synonyms": [
            "“railroads” 在原文中原词复现：“The money went into railroads”",
            "“was more expensive than originally expected” 在原文中没有任何对应：原文只说资金投向了铁路，没有谈造价，也没有谈到预期",
            "原文另给的 “funded by a bubble of speculative investment, much of it from Britain”（由投机投资泡沫提供资金）只说明资金来源，与铁路造价高低无关"
          ],
          "locatingTip": "定位：题干关键词 railroads 在本篇只出现一次，位于第 5 段 “The money went into railroads and herds of cattle and sheep that rode the rails to the wide open pastures.”，一搜即得。确定答案技巧：本题考“成本高低”这一比较判断，回到原文要问三个问题——有没有提到造价？有没有提到开支超出预期？有没有任何表示成本变化的词（expensive、cost、over budget）？原文只交代资金流向了铁路和牛羊群，以及这笔钱来自英国为主的投机投资泡沫，全篇没有任何关于铁路造价或预算的比较，属于信息缺失，故判 NOT GIVEN；不能因为看到 “a bubble of speculative investment” 就自行推断“投机必然导致成本超支”。",
          "analysis": "第 5 段解释西南部牲畜激增的原因：这场“入侵”来得很突然，靠的是投机投资泡沫的资金，其中大部分来自英国。“The money went into railroads and herds of cattle and sheep that rode the rails to the wide open pastures. By 1900, when sedimentation rates peaked, there were 20 million cattle and 25 million sheep in the West.”（这笔钱投向了铁路，以及成群的牛和羊，它们乘火车前往开阔的牧场。到 1900 年，沉积速率达到顶峰时，西部有两千万头牛和两千五百万只羊）。题目问的是“美国铁路的发展比最初预期的更昂贵”，而原文提到铁路时只说资金投向了铁路、牛羊乘火车前往牧场，属于交通与资金流向的描述，既没有给出铁路造价，也没有任何“预期（originally expected）”的对照，更没有 expensive 之类的评价，因此题干所给信息在原文中无从查证，判 NOT GIVEN。此外要注意原文的 “a bubble of speculative investment” 只是说明资金来源与投机性质，不等于铁路建设成本超出预期，不能跨越一步做因果推断。",
          "traps": [
            "为什么不是 TRUE：原文关于铁路只有两处信息——资金投向铁路、牛羊乘火车前往牧场，都没有涉及造价或预算是否超出预期，题干所说的“更贵”在原文找不到依据。",
            "为什么不是 FALSE：原文并没有否认铁路造价高昂，也没有说造价低于预期，只是对造价与预期没有任何交代；无相反信息时不能判 FALSE，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The Aztec Land and Cattle Company worked hard to take care of the grazing land it owned.",
          "translation": "阿兹特克土地与牧牛公司（The Aztec Land and Cattle Company）曾努力照料自己拥有的放牧地。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Each acre had cost the company a mere 50 cents, and like many other speculators, it was only interested in quick profits and had little incentive to protect the soils from overgrazing."
          },
          "synonyms": [
            "“worked hard to take care of” 与原文的 “had little incentive to protect the soils”（几乎没有保护土壤的动力）形成正反对立",
            "“the grazing land it owned” 对应原文的 “the soils”“overgrazing” 与 “which owned a million acres of land by 1884”",
            "“like many other speculators, it was only interested in quick profits” 进一步点明公司只图快钱，而非悉心经营土地"
          ],
          "locatingTip": "定位：The Aztec Land and Cattle Company 是全文最长的大写专有名词，只出现在第 6 段，扫读时一眼可辨。确定答案技巧：本题考“态度与行为是否相符”，要在原文找对该公司经营态度的评价。原文写 “like many other speculators, it was only interested in quick profits and had little incentive to protect the soils from overgrazing”，其中 little incentive to protect（几乎没有保护的动机）与题干的 worked hard to take care of（努力照料）语义完全相反；后文 “By the time Aztec sold the ranch in 1901, it was barren, with cattle carcasses scattered across the exhausted land.”（到 1901 年公司卖掉牧场时，那里已是一片荒芜）更从结果上印证其疏于保护，故判 FALSE。",
          "analysis": "第 6 段以 Aztec Land and Cattle Company 为例说明投机性牧场经营的破坏性。先说它到 1884 年拥有百万英亩土地，每英亩仅花 50 美分，然后是本题定位句：“Each acre had cost the company a mere 50 cents, and like many other speculators, it was only interested in quick profits and had little incentive to protect the soils from overgrazing.”（每英亩只花掉公司区区 50 美分；与许多其他投机者一样，它只对快速获利感兴趣，几乎没有保护土壤免遭过度放牧的动力）。紧接着的结果句是：“By the time Aztec sold the ranch in 1901, it was barren, with cattle carcasses scattered across the exhausted land.”（到 1901 年阿兹特克公司卖掉牧场时，土地已变得荒芜，牛尸散落在被榨干的地面上）。原文用 little incentive to protect（缺乏保护动机）与 only interested in quick profits（只图快钱）明确刻画公司不负责的态度，题干却说它 “worked hard to take care of the grazing land（努力照料放牧地）”，语义正好相反；牧场最终荒芜的结果也与“努力照料”相悖，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确说它像其他投机者一样只关心快速获利，几乎没有保护土壤免于过度放牧的动力（had little incentive to protect the soils from overgrazing），并且最终牧场变得荒芜，与“努力照料”完全相反。",
            "为什么不是 NOT GIVEN：原文对公司的经营态度和土地的最终状况都有明确交代，且与题干冲突，属于有相反信息的题目，不是信息缺失。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Most of the land once owned by the Aztec Land and Cattle Company remains infertile today.",
          "translation": "阿兹特克土地与牧牛公司曾经拥有的土地，如今大部分依然贫瘠。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "By the time Aztec sold the ranch in 1901, it was barren, with cattle carcasses scattered across the exhausted land. Such was the damage to the grasslands that even now few of the pastures have recovered."
          },
          "synonyms": [
            "“Most of the land … remains infertile today” 同义替换为原文的 “even now few of the pastures have recovered”，few 意为“几乎没有”，即多数牧场至今仍未恢复",
            "“infertile” 同义替换为原文的 “barren”（荒芜不毛）与 “the exhausted land”（被榨干的土地）",
            "“once owned by the Aztec Land and Cattle Company” 对应原文的 “the ranch” 与 “which owned a million acres of land by 1884”"
          ],
          "locatingTip": "定位：仍用专有名词 Aztec 锁定第 6 段，题目问的是“今天”的状况，因此要找到含 even now / today 一类时间词的句子，即 “Such was the damage to the grasslands that even now few of the pastures have recovered.”。确定答案技巧：本题的判分点在对 few 的理解上的“同义转换”——few of the pastures have recovered 意为“几乎没有几块牧场恢复过来”，换句话说绝大多数牧场至今仍未恢复；题干用 Most of the land … remains infertile today 表达同一意思，两者方向一致。同时原文用 barren、exhausted land 等词反复强化土地贫瘠，与 infertile 对应，因此判 TRUE。",
          "analysis": "第 6 段在讲完 Aztec 公司只图快钱、牧场荒芜之后写道：“By the time Aztec sold the ranch in 1901, it was barren, with cattle carcasses scattered across the exhausted land. Such was the damage to the grasslands that even now few of the pastures have recovered. The parched and exposed soil simply blew away.”（到 1901 年公司卖出牧场时，土地已荒芜，牛尸散落在被榨干的地面上。对草原的破坏如此之大，以至于直到今天都几乎没有几块牧场恢复过来。干裂裸露的土壤就这样被风吹走了）。第一句用 barren（荒芜）和 exhausted land（被榨干的土地）交代历史的破坏；第二句用 even now（直到今天）把时间拉到现在，并用 few of the pastures have recovered（几乎没有牧场恢复）说明破坏的持久性。题干说“公司曾拥有的土地如今大部分依然贫瘠”，与原文的“至今几乎没有牧场恢复”完全一致：few 是否定含义的数量词，意为“很少、几乎为零”，因此“大部分依然未恢复”就是原文之意；infertile（贫瘠）又对应 barren 与 exhausted。信息方向一致，答案是 TRUE。做本题时务必正确解读 few——它不等于“有几个”，而是强调数量极少，“几乎没有恢复”等价于“大部分仍然贫瘠”。",
          "traps": [
            "为什么不是 FALSE：原文说 “even now few of the pastures have recovered”，即至今几乎没有牧场恢复，且前文用 barren、the exhausted land 描述土地状况，与题干“大部分依然贫瘠”完全一致，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不仅交代了 1901 年时的荒芜状态，还用 even now 明确延伸到今天，对题干询问的“如今状况”给出了正面回答，属于已交代的信息。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 笔记填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "1930s — Laws were passed to control the size of 8 ________",
          "translation": "1930 年代——通过了法律，以控制 ________ 的数量。",
          "answer": "cattle herds",
          "wordClass": "名词短语（cattle 为集合名词、本身呈复数含义，不加 -s；herds 为复数形式。作介词 of 的宾语，表示被限制规模的对象）",
          "locating": {
            "paragraph": "6",
            "quote": "It was only in the 1930s, with the passage of the Taylor Grazing Act, that federal authorities finally sought to limit cattle herds."
          },
          "synonyms": [
            "“Laws were passed” 同义替换为原文的 “with the passage of the Taylor Grazing Act”，即以《泰勒放牧法》的通过为代表",
            "“to control the size of …” 同义替换为原文的 “sought to limit …”，limit 即“限制规模”",
            "“1930s” 与原文的时间状语 “in the 1930s” 完全一致",
            "“federal authorities” 在题干中被省略，只保留动作与对象，答案落在 limit 的宾语 cattle herds 上"
          ],
          "locatingTip": "定位：笔记已给出时间标签 1930s，直接回原文找 1930s 这一年份，全篇只出现在第 6 段末尾，一步锁定。确定答案技巧：题干说“通过法律来控制某物的规模（control the size of）”，对应原文 “federal authorities finally sought to limit cattle herds”，其中 limit 与 control 是近义动作，被限制的对象就是空格答案 cattle herds（牛群数量）。填写时注意：①必须照抄原文原词，不要改成 cows 或 cattle herd；②NO MORE THAN TWO WORDS，cattle herds 恰好两个词；③不要误填 Taylor Grazing Act——那是法律的名称，占据的是题干中 Laws 的位置，不是被控制的对象。",
          "analysis": "本题是笔记填空的第一空，笔记的时间标签是 1930s，题干写“通过了法律来控制某物的规模”。原文第 6 段末尾：“It was only in the 1930s, with the passage of the Taylor Grazing Act, that federal authorities finally sought to limit cattle herds.”（直到 1930 年代，随着《泰勒放牧法》的通过，联邦当局才终于试图限制牛群的数量）。句子结构为强调句 It was … that …，强调时间是 1930s；with the passage of the Taylor Grazing Act 对应题干的 Laws were passed；sought to limit 对应 to control the size of：限制的对象即 limit 的宾语 cattle herds，故填 cattle herds。这一空也承接前文语境——第 5 段已交代 1900 年西部有两千万头牛、两千五百万只羊，牲畜过多正是过度放牧与扬尘的根源，所以联邦立法要限制的自然是牛群规模。填写要求是从原文选词（NO MORE THAN TWO WORDS），答案须与原文拼写一致：cattle herds，两个词，均用小写。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Today Jayne Belnap believes: soil was not affected by high 9 ________",
          "translation": "如今杰恩·贝尔纳普（Jayne Belnap）认为：土壤未受强劲 ________ 的影响。",
          "answer": "winds",
          "wordClass": "名词（复数，指强风；受形容词 high 修饰，位于介词 by 之后作介词宾语，原文对应 “winds of up to a hundred miles an hour”）",
          "locating": {
            "paragraph": "7",
            "quote": "These crusts can survive winds of up to a hundred miles an hour, but cattle hooves break the crust"
          },
          "synonyms": [
            "“high” 同义替换为原文的 “of up to a hundred miles an hour”，即风速高达每小时一百英里，正是“强劲”的具体化",
            "“soil was not affected by …” 同义替换为原文的 “These crusts can survive …”，crusts 指土壤表面结成的硬壳，survive 即“不为其所破坏”",
            "“soil was seriously affected by cattle hooves” 与原文 “but cattle hooves break the crust” 一一对应，帮助确认对比关系"
          ],
          "locatingTip": "定位：笔记给出的信息源是 Jayne Belnap，这一大写人名只出现在第 7 段，找到她的引语即可。确定答案技巧：本题要用好笔记上下的对比结构——上一行说“土壤未受 high 9 影响”，下一行说“土壤受到牛蹄的严重影响”，两者正好对应引语中的 but 前后两半：“These crusts can survive winds of up to a hundred miles an hour, but cattle hooves break the crust.”。but 之前是土壤硬壳能承受的东西，即 winds（风）；but 之后是被牛蹄破坏，与下一行笔记对应。因此空格填 winds，且原文用复数、又有 high winds 的搭配（强风），写单数 wind 会与原文形式不符。",
          "analysis": "第 7 段引出土壤学家 Jayne Belnap 的观点：“'These crusts can survive winds of up to a hundred miles an hour, but cattle hooves break the crust,' says Jayne Belnap, a soil ecologist at the US Geological Survey, Utah.”（“这些硬壳能经受时速高达一百英里的大风，但牛蹄会破坏这层硬壳，”美国地质调查局犹他州的土壤生态学家杰恩·贝尔纳普说）。笔记把这段话拆成两行：上一行“土壤未受 high [9] 的影响”对应 but 之前的 These crusts can survive winds of up to a hundred miles an hour；下一行“土壤受到牛蹄的严重影响”对应 but 之后的 cattle hooves break the crust。题干用 high（强劲的）概括原文 a hundred miles an hour 这一风速信息，因此空格要填的是 wind 的复数形式 winds。作答提示：①原文为复数 winds，且 high winds 是固定搭配，须保留复数；②不要填 crusts，那是承受风的对象而不是施加影响的事物；③不要填 hooves，那是下一行笔记的信息。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Jason Neff: found that 10 ________ in the Colorado region contained dust.",
          "translation": "贾森·内夫：发现科罗拉多地区的 ________ 中含有尘埃。",
          "answer": "lake sediments",
          "wordClass": "名词短语（sediments 为可数名词复数，lake 作前置定语修饰；作 contained 的主语核心，故用复数形式）",
          "locating": {
            "paragraph": "7",
            "quote": "When Neff first discovered dust in Colorado lake sediments laid down in the 19th century, he was initially unsure where it came from."
          },
          "synonyms": [
            "“found” 同义替换为原文的 “discovered”",
            "“in the Colorado region” 同义替换为原文的 “in Colorado”",
            "“contained dust” 同义替换为原文的 “dust in Colorado lake sediments”，原文用 dust in … 的介词结构，题干改写为 contain 的动宾结构",
            "“Jason Neff” 在原文中原词复现，是本题的第一定位词"
          ],
          "locatingTip": "定位：笔记的主语标签已给出 Jason Neff，回原文找 Neff 与 dust 相关的发现句，落在第 7 段 “When Neff first discovered dust in Colorado lake sediments laid down in the 19th century” 一句。确定答案技巧：题干说“科罗拉多地区的某物含有尘埃（contained dust）”，原文说 dust in Colorado lake sediments（科罗拉多湖相沉积物中的尘埃），把原文 “in” 结构改写为 “contain” 结构后，尘埃所在的载体就落在空格上，即 lake sediments（湖泊沉积物）。填写时注意两点：一是 lake sediments 是两个词，符合 NO MORE THAN TWO WORDS；二是不要只写 sediments（原文的组合形式是 Colorado lake sediments，去掉 Colorado 后要保留 lake 才能体现限定关系），也不要误填 Colorado（那是题目已给的地区信息）。",
          "analysis": "第 7 段末三句讲内夫发现尘埃来源的过程：“The scale of the dust clouds created by the livestock invasion has until now been largely unknown. When Neff first discovered dust in Colorado lake sediments laid down in the 19th century, he was initially unsure where it came from. Maybe it had crossed the Pacific from China's Gobi Desert.”（牲畜入侵所造成尘云的规模此前基本不为人知。当内夫最初在 19 世纪沉积形成的科罗拉多湖泊沉积物中发现尘埃时，他起初并不确定它来自哪里，还猜想也许是从中国戈壁沙漠越过太平洋飘来的）。笔记句式“found that … in the Colorado region contained dust”是把原文的 “discovered dust in Colorado lake sediments” 做了一个结构倒装：原文是“在科罗拉多湖相沉积物中发现了尘埃”，题干是“科罗拉多地区的某物含有尘埃”，尘埃的载体由介词宾语变为主语，因此空格应为 lake sediments（湖泊沉积物）。注意本题与第 11 题同属内夫的发现：第 10 题问“在哪里发现尘埃”，第 11 题问“对尘埃还检查了它的什么”，两空分别落在第 7 段与第 8 段，作答时不要串段。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Jason Neff: examined the dust for its chemical content as well as its 11 ________.",
          "translation": "贾森·内夫：不仅检测了尘埃的化学成分，还检测了它的 ________。",
          "answer": "size",
          "wordClass": "名词（不可数，指尘埃颗粒的大小；与前面的 its chemical content 并列，一同作介词 for 的宾语）",
          "locating": {
            "paragraph": "8",
            "quote": "But after investigating the size and chemical composition of the dust, Neff was clear that it mostly came from the American Southwest, mainly Arizona and New Mexico."
          },
          "synonyms": [
            "“examined … for” 同义替换为原文的 “investigating”，两者都表示“为查明某项目而对样本进行检验”",
            "“chemical content” 同义替换为原文的 “chemical composition”（化学成分）",
            "“its 11 …” 对应原文并列结构 “the size and chemical composition of the dust” 中的 size",
            "“as well as” 与原文的 “and” 同为并列连接，提示空格与 chemical content 是并列的两个检测项"
          ],
          "locatingTip": "定位：承接上一空，仍在讲 Jason Neff 的研究，第 8 段首句出现 “after investigating the size and chemical composition of the dust”，其中 chemical composition 与题干化学成分类信息直接对应，可立刻确认段落。确定答案技巧：题干用 “chemical content as well as its [11]” 列出两个检测项，原文用 “the size and chemical composition of the dust” 列出两个检测项，把并列的两端对号入座——chemical composition 对应 chemical content，剩下的 size 就是答案。注意原文语序是先 size 后 chemical composition，题干语序相反（先化学成分后空格），判断时不要被顺序迷惑；答案只写一个词 size，不能写 the size，也不能写成 chemical content 的重复。",
          "analysis": "第 8 段首句：“But after investigating the size and chemical composition of the dust, Neff was clear that it mostly came from the American Southwest, mainly Arizona and New Mexico.”（但在调查了尘埃的颗粒大小与化学成分之后，内夫明确认定它主要来自美国西南部，特别是亚利桑那州和新墨西哥州）。笔记把这一句概括成两条：一条是“检测了尘埃的化学成分”，另一条即本题“还检测了它的 [11]”；原文 investigating 的宾语是并列短语 the size and chemical composition of the dust，两个检测项分别为 size（颗粒大小）与 chemical composition（化学成分），后者已被题干写为 chemical content，因此空格填 size。这也是破解本题的关键思路：题干与原文各自出现一个并列结构，把已知的一端对应起来，剩下的一端就是答案。答案为一个词 size，属不可数名词，与 for 搭配作介词宾语，不加冠词、不用复数。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Jason Neff: found that dust affects mountain environments by bringing in 12 ________ that are not normally found there, causing faster seasonal snowmelt.",
          "translation": "贾森·内夫：发现尘埃会带入当地通常没有的 ________，从而影响山地环境，导致季节性融雪加快。",
          "answer": "nutrients",
          "wordClass": "名词（复数形式；作 bringing in 的宾语，其后 that are not normally found there 用复数谓语 are，提示答案必须用复数）",
          "locating": {
            "paragraph": "8",
            "quote": "They carry nutrients with them into areas which previously evolved and survived without them."
          },
          "synonyms": [
            "“bringing in” 同义替换为原文的 “carry … with them into”，均表示把某物带入某地",
            "“that are not normally found there” 同义替换为原文的 “which previously evolved and survived without them”，即这些地区原本没有它们",
            "“mountain environments” 对应原文的 “in the Colorado mountains” 与下一句的 “snowfields in the Rocky Mountain Range”",
            "“causing faster seasonal snowmelt” 对应原文的 “snowmelt occurs far more rapidly during springtime”"
          ],
          "locatingTip": "定位：本题信息集中在第 8 段中后部，先用关键词 snowmelt（融雪）与 Colorado mountains 锁定句子，再往前一格找“带入什么”。确定答案技巧：题干说尘埃“带入当地通常没有的东西（bringing in … that are not normally found there）”，原文对应表述是 “They carry nutrients with them into areas which previously evolved and survived without them.”，其中 carry … with them into 即 bringing in，areas which previously evolved and survived without them 即“原本没有它们的地区”，因此被带入的东西就是 nutrients（养分）。语法上还有一条重要提示：原文不定代词 them 回指前面的 nutrients，题干用 that are not normally found there 的复数谓语 are 与之呼应，说明答案必须是复数名词 nutrients。不要误填 dust（尘埃本身是带入者）或 radiation（那是雪吸收太阳辐射的后果）。",
          "analysis": "第 8 段讲内夫确认尘埃来自西南部之后的影响链：“Now, with the soil crusts gone, dust clouds still head north and are having significant ecological effects in the Colorado mountains. They carry nutrients with them into areas which previously evolved and survived without them.”（如今土壤硬壳不复存在，尘云仍向北推进，并对科罗拉多山区产生显著的生态影响。它们把养分带入那些此前在没有养分的情况下演化与存活的地区）。随后段落继续交代对落基山脉雪原的影响：深色物质使雪吸收更多太阳辐射，春季融雪因此大大加快，进而冲击滑雪旅游业。笔记把这一串因果关系压缩成一句“found that dust affects mountain environments by bringing in [12] that are not normally found there, causing faster seasonal snowmelt”，其中 bringing in 对应 carry … into，that are not normally found there 对应 which previously evolved and survived without them，causing faster seasonal snowmelt 对应 snowmelt occurs far more rapidly during springtime。由此确定空格填 nutrients（养分）。注意答案须为复数形式，与定语从句中的 are 一致；写 nutrient 会因语法不符而失分。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Jason Neff: argues that dust is partly to blame for the gradual disappearance of some 13 ________ and snow.",
          "translation": "贾森·内夫：认为尘埃是某些 ________ 与雪逐渐消失的部分原因。",
          "answer": "glaciers",
          "wordClass": "名词（复数，与并列成分 snow 一同作介词 of 的宾语，指正在消融退缩的冰川）",
          "locating": {
            "paragraph": "9",
            "quote": "The loss of snow and the shrinking of glaciers across the American West in the past century have been dramatic."
          },
          "synonyms": [
            "“the gradual disappearance of some … and snow” 同义替换为原文的 “The loss of snow and the shrinking of glaciers”，gradual disappearance 概括了 loss 与 shrinking（持续退缩）",
            "“dust is partly to blame for” 同义替换为原文的 “dust may also contribute”，即尘埃也起了部分作用",
            "“some …” 对应原文具体的 “glaciers across the American West”，并以下一句的 Glacier National Park 为实例"
          ],
          "locatingTip": "定位：题目问的是“某些什么和雪一起逐渐消失”，全文同时提到雪与另一类消失对象的地方是第 9 段首句，其中 snow 与 glaciers 并列出现，是极好的定位组合。确定答案技巧：题干用 “the gradual disappearance of some [13] and snow” 的并列结构，原文用 “The loss of snow and the shrinking of glaciers” 的并列结构，把已知的一端 snow 对号入座，另一端 glaciers 即答案。文中还对 glaciers 作了具体例证：“Glacier National Park in Montana … has lost three-quarters of its snow cover since 1910.”，可反向验证；段末 “Neff's findings suggest that dust may also contribute.” 对应题干的 “dust is partly to blame”。填写时按原文用复数 glaciers，一个词即可。",
          "analysis": "第 9 段是全篇的收束：“The loss of snow and the shrinking of glaciers across the American West in the past century have been dramatic. Glacier National Park in Montana, for example, has lost three-quarters of its snow cover since 1910. All this is frequently attributed to global warming. While this almost certainly plays a role, Neff's findings suggest that dust may also contribute.”（过去一百年间，美国西部雪的减少与冰川的退缩十分惊人。例如蒙大拿州的冰川国家公园自 1910 年以来已失去四分之三的积雪覆盖。这一切常被归因于全球变暖。虽然全球变暖几乎肯定起了作用，但内夫的发现表明尘埃也可能是原因之一）。笔记句 “argues that dust is partly to blame for the gradual disappearance of some [13] and snow” 正是对这一段末句的改写：dust is partly to blame 对应 dust may also contribute（尘埃也可能有贡献）；the gradual disappearance 对应 The loss of snow and the shrinking of glaciers 中的 loss 与 shrinking；并列结构中 snow 已在题干给出，剩下的就是 glaciers，故填 glaciers。答案用复数形式，与原文保持一致。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
