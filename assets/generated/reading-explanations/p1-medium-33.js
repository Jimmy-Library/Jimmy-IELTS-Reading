(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-33", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-33",
  "meta": {
    "examId": "p1-medium-33",
    "title": "The Pyramid of Cestius 罗马金字塔",
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
          "stem": "The Pyramid of Cestius has always been one of Rome's most popular tourist attractions.",
          "translation": "切斯提乌斯金字塔（the Pyramid of Cestius）一直是罗马最受欢迎的旅游景点之一。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "one notable monument there has never attracted nearly as much interest: the Pyramid of Cestius"
          },
          "synonyms": [
            "“has always been one of Rome's most popular tourist attractions” 与原文 “has never attracted nearly as much interest” 直接冲突：原文说这座纪念碑从来没能吸引到多少兴趣",
            "“one of Rome's most popular tourist attractions” 中的 popular（广受欢迎）在原文中没有任何对应，原文给出的恰恰是反向判断 never attracted nearly as much interest",
            "“The Pyramid of Cestius” 在原文原词复现，冒号后的 the Pyramid of Cestius 就是对前面 one notable monument 的解释说明",
            "同段 “Rome draws tourists from around the world to its many impressive sites” 只说明罗马整座城市游客众多，其主语是 Rome，不能替换成金字塔本身受欢迎"
          ],
          "locatingTip": "定位：题干的专有名词 The Pyramid of Cestius 在全文多次出现，用它定位范围太大，应结合话题词 tourist attractions（旅游景点）缩小范围，扫读第 2 段开头，读到 “one notable monument there has never attracted nearly as much interest” 即可锁定。确定答案技巧：判断题里出现 always（一直）、most popular（最）这类绝对化表述时，要立刻把“原文有没有反向证据”作为检查点。原文用 never（从来）+ nearly as much interest（几乎没那么多兴趣）明确否认了它受欢迎，题干却说它一直是最热门的景点之一，一正一反，属于事实矛盾，判 FALSE。切忌受同段 “Rome draws tourists from around the world” 影响——那句话夸的是罗马城整体的旅游资源，不是这座金字塔。",
          "analysis": "第 2 段第 1 句是本题唯一相关句：“Though Rome draws tourists from around the world to its many impressive sites, one notable monument there has never attracted nearly as much interest: the Pyramid of Cestius.”（虽然罗马凭借众多令人印象深刻的名胜吸引着全世界的游客，但那里有一处著名的古迹却从来没能吸引到如此多的兴趣：切斯提乌斯金字塔）。句中用的是让步结构 Though …（虽然……但是……），重点落在主句：罗马整体游客如潮，而金字塔却是例外，从来没有获得与之相称的关注。题干的落点是 “has always been one of Rome's most popular tourist attractions”（一直是罗马最热门的景点之一），与原文的 has never attracted nearly as much interest 在方向上完全相反：原文是“从来没受追捧”，题干是“一直是顶级热门”。时间副词 always 对应原文的 never，程度词 most popular 对应原文的 nearly as much interest，两处都被原文否定。此外，题干把 the Pyramid of Cestius 的“景点身份”当成已知事实来断言其热度，而原文对它的热度给出的判断是负面的。信息存在且相反，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确把“从未获得应有兴趣”这一判断给了切斯提乌斯金字塔（“one notable monument there has never attracted nearly as much interest: the Pyramid of Cestius”），与题干说的“一直是最受欢迎的景点之一”正好相反，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文既提到了这座金字塔的地位（one notable monument），也明确交代了它的受关注程度（has never attracted nearly as much interest），属于“有信息且与题干冲突”，不是信息缺失，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The construction of the Pyramid was completed before Cestius' death.",
          "translation": "金字塔的建造在切斯提乌斯去世之前就已完工。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "who ordered that the building work be completed within a period of 330 days. Construction took place at some point between 18 B.C. and 12 B.C."
          },
          "synonyms": [
            "“The construction of the Pyramid was completed” 与原文 “the building work be completed” 对应，谈的是同一件事，即工程完工",
            "“within a period of 330 days” 是原文交代的唯一时间限制，它是“施工期限”，不是切斯提乌斯的寿命或死亡时间",
            "“before Cestius' death” 在原文中没有任何对应信息：原文只给出建造年代区间 “between 18 B.C. and 12 B.C.”，全篇从未提到切斯提乌斯何时去世",
            "“Cestius” 人名在原文原样出现（Caius Cestius），但围绕他的信息只有身份（Roman politician）与下令（ordered），没有生卒信息"
          ],
          "locatingTip": "定位：题干的核心是人与工程的时间关系，最好的定位词是专有名词 Caius Cestius（全名，仅在第 3 段出现一次），读到该人名后紧跟的从句就是“330 天内完工”的期限规定。确定答案技巧：判断题问“完工是否早于某人的死亡”，必须同时拿到两个时间点才能判断，即“完工时间”和“去世时间”。原文只提供了前者（330 天的施工期限，以及公元前 18 到 12 年之间的建造年代），对 Cestius 何时去世只字未提，两个时间点缺一，无法比较先后，属于信息缺失，判 NOT GIVEN。这里最容易犯的错是把 “within a period of 330 days”（330 天建完）误读成“他在生前看到完工”，原文对齐的是工程期限，不是人的寿命。",
          "analysis": "第 3 段第 2 句写道：“The only one left standing, the Pyramid of Cestius, was designed as the burial pyramid for a Roman politician named Caius Cestius, who ordered that the building work be completed within a period of 330 days.”（唯一留存至今的是切斯提乌斯金字塔，它被设计为罗马政治家盖乌斯·切斯提乌斯的墓葬金字塔，他下令工程必须在 330 天内完成）；紧接着一句：“Construction took place at some point between 18 B.C. and 12 B.C.”（建造于公元前 18 年至前 12 年之间的某个时间）。两句话给出的都是工程本身的时间信息：一个期限（330 days）、一个年代区间（18 B.C. to 12 B.C.）。题干要判断的是 “completed before Cestius' death”（完工早于他的去世），这需要知道 Cestius 的死亡年份，而全文六段没有任何一处提及他的生卒时间，也没有任何暗示（例如“他生前”或“他死后”之类的表述）。按判断题规则，原文没有提供判断所需的信息即为 NOT GIVEN。特别注意：这是一座为他本人建造的墓葬（burial pyramid），考生容易凭常识推断“墓主当然死前就修好了墓”，但常识不能替代原文，原文没说的内容一律不判 TRUE。",
          "traps": [
            "为什么不是 TRUE：原文只交代了工程期限（330 天）和建造年代（公元前 18 到 12 年），并未提到切斯提乌斯何时去世，因此“完工早于去世”这一关系在原文中无从证实；由“这是他的墓葬金字塔”推出的“他一定活着看到建成”属于常识推断，超出原文，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文出现与题干相反的信息，即需要说明“他在完工之前就去世了”或“完工晚于他的去世”，而原文对此完全没有交代，既没说先也没说后，只能按信息缺失处理，所以也不是 FALSE。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "In the Middle Ages, people thought an original founder of Rome was buried in the Pyramid of Cestius.",
          "translation": "在中世纪，人们认为罗马的一位创建者被埋葬在切斯提乌斯金字塔中。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "popular myth had developed that it might be a tomb for one of the twin brothers Romulus and Remus, who were regarded as the men who had established the city of Rome."
          },
          "synonyms": [
            "“In the Middle Ages” 与原文 “By the Middle Ages” 同义，都指中世纪时期",
            "“people thought” 与原文 “popular myth had developed”（民间流传着这样的传说）对应，都表示当时人们的普遍看法与说法",
            "“an original founder of Rome” 与原文 “the men who had established the city of Rome” 同义，established（建立）对应 founder（创建者）",
            "“was buried in the Pyramid of Cestius” 与原文 “it might be a tomb for one of the twin brothers Romulus and Remus” 对应，tomb（墓）即“埋葬之处”",
            "“Romulus and Remus” 是罗马传说中建立罗马城的双胞胎兄弟，正是题干 “an original founder” 所指的人"
          ],
          "locatingTip": "定位：题干的时间词 In the Middle Ages 与原文 By the Middle Ages 是明显的同义时间标记，先扫读各段首句找时间线索，在第 4 段中部找到该短语即可锁定本句。确定答案技巧：题干包含两个信息点，一是时代（中世纪），二是内容（当时人以为罗马的创建者葬在这里），判分要看两者是否都在原文得到印证。原文说中世纪时金字塔被草木与厚土覆盖，并因此流传开一种民间传说，认为它可能是罗慕路斯或雷穆斯之一（the twin brothers Romulus and Remus）的墓，而原文紧接着点明这兄弟俩 “were regarded as the men who had established the city of Rome”（被认为是建立罗马城的人），恰好等于题干的 an original founder of Rome。myth 对应 people thought，established 对应 founder，全部对上且方向一致，故判 TRUE。要特别留意 were regarded as 这一措辞，它强调“当时人们如此认为”，与题干的人民主观看法完全吻合。",
          "analysis": "第 4 段中间写道：“By the Middle Ages, the pyramid was covered in vegetation and thick dirt, and popular myth had developed that it might be a tomb for one of the twin brothers Romulus and Remus, who were regarded as the men who had established the city of Rome.”（到中世纪时，金字塔被植被与厚厚的泥土覆盖，并流传开一种民间传说，认为它可能是罗慕路斯与雷穆斯这对双胞胎兄弟之一的墓，而这两人被视为建立罗马城的人）。这句话与题干构成三处对应：①时间 By the Middle Ages 对应 In the Middle Ages；②popular myth had developed 对应 people thought（传说即当时人们的普遍想法）；③a tomb for one of the twin brothers Romulus and Remus … who had established the city of Rome 对应 an original founder of Rome was buried in the Pyramid of Cestius。原文用 regarded as（被认为是）来表述兄弟俩的“城市创建者”身份，说明这是当时流行的说法而非史实判断，而题干用的正是 people thought，两者都是主观认知层面，语义完全吻合。因此答案是 TRUE。做题提示：中世纪、传说、罗马建城者这几个概念在第 4 段是连在一起出现的，只要认出 By the Middle Ages 与题干 In the Middle Ages 的同义关系，就能一步定位并顺势读出全部对应信息。",
          "traps": [
            "为什么不是 FALSE：原文明确记载了“民间传说认为这可能是罗慕路斯或雷穆斯的墓”，而罗慕路斯与雷穆斯在原文中就被描述为建立罗马城的人（the men who had established the city of Rome），题干的两个要点（中世纪、人们以为是罗马创建者葬于此）都与原文同向，找不到矛盾，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干所问的时代、看法与人物身份，原文全部有明确交代，甚至连当时人的措辞（regarded as、popular myth）都已给出，属于信息完整而非缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Today, the height of the Pyramid is something that tourists and residents immediately notice.",
          "translation": "如今，金字塔的高度是游客和居民一眼就会注意到的东西。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Today, the foundations of Cestius' pyramid rest below street level near an intersection with heavy traffic, so that passing tourists and residents could easily fail to notice its full height of 119 feet."
          },
          "synonyms": [
            "“Today” 与原文 “Today” 原词复现，时间点一致",
            "“tourists and residents” 与原文 “passing tourists and residents” 对应，指路过的游客与当地居民",
            "“immediately notice” 与原文 “could easily fail to notice” 直接冲突：原文说的是很容易注意不到",
            "“the height of the Pyramid” 与原文 “its full height of 119 feet” 对应，原文还给出了具体高度",
            "“something that tourists and residents notice” 在原文中没有得到肯定，原文反而强调地基低于街面（below street level）导致视线容易忽略它"
          ],
          "locatingTip": "定位：题干的时间词 Today 是极好的切入点，它在第 5 段开头原词出现，一下子就能锁定段落；再顺着读 “passing tourists and residents” 就找到本题的句子。确定答案技巧：本题的判分点是一个“是否注意到”的正反判断。原文用 “could easily fail to notice its full height of 119 feet”（很容易注意不到它 119 英尺的完整高度），这是因为金字塔地基低于街面（rest below street level）、又处在车流密集的路口；题干的 immediately notice 与 fail to notice 正好相反，属于正面对立，判 FALSE。答题时要警惕题干把原文的否定结构被动地 paraphrased 成肯定说法：could easily fail to notice 不等于 do not notice，但它的方向是“注意不到”，与“一眼就注意到”绝不可能同真。",
          "analysis": "第 5 段首句即本题定位句：“Today, the foundations of Cestius' pyramid rest below street level near an intersection with heavy traffic, so that passing tourists and residents could easily fail to notice its full height of 119 feet.”（如今，切斯提乌斯金字塔的地基位于街面以下、处在车流密集的十字路口附近，因此路过的游客与居民很容易注意不到它 119 英尺的完整高度）。原文的因果链条是：地基沉到街面以下（rest below street level）加上交通繁忙的环境，导致路过的人容易忽略它的高度。题干却断言高度是 tourists and residents 立即就会注意到的东西（immediately notice），把原文的否定（fail to notice）改写成了肯定（notice），且加上 immediately 强化“一眼就看到”。一否定一肯定，语义方向相反，故判 FALSE。这里还要注意 not 的落点：fail to notice 属于否定表达，考生如果只抓住 notice 一词而不看 fail to，很容易误判为 TRUE。做否定结构的判断题时，务必连着否定词一起读。",
          "traps": [
            "为什么不是 TRUE：原文说得很清楚，由于地基低于街面、位于繁忙路口，路过的游客和居民 “could easily fail to notice its full height”（很容易注意不到它的高度），与题干的 immediately notice 恰好相反，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“能不能注意到”这一点有明确且具体的交代（给出了 below street level、heavy traffic 等成因，还给出了 119 feet 这一高度数据），并不是没有提及，只是信息与题干冲突，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Japanese businessman Yuzo Yagi was an admirer of both Italian and Egyptian architecture.",
          "translation": "日本商人八木雄三（Yuzo Yagi）是意大利建筑与埃及建筑的双重仰慕者。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In 2011, the Japanese clothing-company entrepreneur Yuzo Yagi, president of Yagi Tsusho Ltd, announced his intention to help the Italian government pay for an ambitious renovation of the Pyramid of Cestius."
          },
          "synonyms": [
            "“Japanese businessman” 与原文 “the Japanese clothing-company entrepreneur” 对应，都指日本企业家身份",
            "“Yuzo Yagi” 人名在原文原样出现，定位无歧义",
            "原文只说他 “announced his intention to help the Italian government pay for an ambitious renovation”，即他打算出资协助修复，除此之外只表达了 “an act of gratitude”（一种感激之举），从未评价或赞赏任何建筑风格",
            "“an admirer of both Italian and Egyptian architecture” 中的 admiration（仰慕）在原文中没有任何对应词，Egyptian architecture 更是完全没有与八木雄三产生关联"
          ],
          "locatingTip": "定位：题目里有两个大写专有名词 Yuzo Yagi 和（隐含的）Italian，人名在文中只出现一次，落在第 5 段中部，一步即可锁定，无需读完全文。确定答案技巧：本题考的是人物的“情感倾向”这类主观信息。原文关于八木雄三只交代了三件事：他打算出钱帮助意大利政府修复金字塔、他称这是 “an act of gratitude”（一种感激之举）、以及他说 “Our company has grown thanks to Italy”（我们公司的发展要感谢意大利）。全部内容都围绕“感激意大利”，既没有说他欣赏意大利建筑，更没有一个字提到埃及建筑。题干把 gratitude 拔高为 admiration，又把 Egyptian architecture 硬塞进他的偏好清单，两层信息都超出原文，属于信息缺失，判 NOT GIVEN。切记不要把“出钱修这座金字塔”等同于“仰慕相关建筑风格”，那是主观推断。",
          "analysis": "第 5 段中段写道：“In 2011, the Japanese clothing-company entrepreneur Yuzo Yagi, president of Yagi Tsusho Ltd, announced his intention to help the Italian government pay for an ambitious renovation of the Pyramid of Cestius. 'It's an act of gratitude,' he later told journalists. 'Our company has grown thanks to Italy.'”（2011 年，日本服装企业经营者、Yagi Tsusho Ltd 总裁八木雄三宣布，他打算帮助意大利政府支付切斯提乌斯金字塔一项宏大修复工程的费用。他后来对记者说：“这是一种感激之举。”“我们公司的发展要感谢意大利。”）。原文给出的动机是 gratitude（感激），针对的对象是意大利这个国家及其对公司发展的帮助；题干却把它改写为 “an admirer of both Italian and Egyptian architecture”（意大利建筑与埃及建筑的双重仰慕者），一方面把“感激一国”偷换成“仰慕其建筑”，另一方面凭空增加了 Egyptian architecture 这一成分——原文中埃及建筑只在第 2、3 段作为罗马建筑风尚的来源出现，与八木雄三毫无关系。原文既没有说他欣赏建筑，也没有任何信息可以否定这一点，属于典型的“信息缺失”，因此答案是 NOT GIVEN。做题时要注意区分“出资修复某物”与“仰慕某物所属的文化/风格”，前者是原文事实，后者是题干的额外添加。",
          "traps": [
            "为什么不是 TRUE：原文只说明他出于感激而资助意大利的修复工程，并引用了 “It's an act of gratitude” 与 “Our company has grown thanks to Italy”，通篇没有出现欣赏、仰慕意大利或埃及建筑的表述；由资助行为推出“他是建筑仰慕者”属于超出原文的推断，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文给出相反信息，例如说明他并不欣赏意大利或埃及建筑、或者明确表示动机与建筑无关而另有原因；原文只是没有提及他的审美偏好，并未否认，所以不能判 FALSE，只能判信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The restoration of the Pyramid of Cestius, which was funded by Yuzo Yagi, finished earlier than expected.",
          "translation": "由八木雄三出资的切斯提乌斯金字塔修复工程，比预期更早完工。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Work began at the site shortly after Yagi signed an official agreement with the Special Superintendency for the Archaeological Heritage of Rome, and was completed ahead of schedule thanks to his 2-million-euro contribution."
          },
          "synonyms": [
            "“finished earlier than expected” 与原文 “was completed ahead of schedule” 同义，ahead of schedule 就是比预定计划提前",
            "“which was funded by Yuzo Yagi” 与原文 “thanks to his 2-million-euro contribution” 对应，说明工程靠他 200 万欧元的捐资完成",
            "“The restoration of the Pyramid of Cestius” 与原文的 “Work began at the site” 中的 Work 对应，指同一项修复工程（上文已点明是 renovation of the Pyramid of Cestius）",
            "“Yagi” 与题干 “Yuzo Yagi” 是同一人，原文用人名简称回指前一句的 Yuzo Yagi"
          ],
          "locatingTip": "定位：本题与第 5 题同在第 5 段，题干的关键信息是“完工时间”与“出资人”，回原文找与工程进度、完工有关的句子，即段末那句 “Work began at the site … and was completed ahead of schedule”。确定答案技巧：题干用 finished earlier than expected 表达“提前完成”，原文用 completed ahead of schedule，二者是同义替换（schedule 即预期计划）；题干用 was funded by Yuzo Yagi 表达出资关系，原文用 thanks to his 2-million-euro contribution，同指这笔资金。两处对应都成立且方向一致，因此判 TRUE。注意 ahead of schedule 只能理解为“提前”，不要与“按计划”或“推迟”混淆。",
          "analysis": "第 5 段末句：“Work began at the site shortly after Yagi signed an official agreement with the Special Superintendency for the Archaeological Heritage of Rome, and was completed ahead of schedule thanks to his 2-million-euro contribution.”（在八木与罗马考古遗产特别监管局签署正式协议后不久，工地上的工程便开始了，并且多亏他 200 万欧元的捐资，工程提前完工）。题干可以逐项还原到原文：The restoration of the Pyramid of Cestius 对应上文出现的 ambitious renovation of the Pyramid of Cestius 以及本句的 Work；which was funded by Yuzo Yagi 对应 thanks to his 2-million-euro contribution；finished earlier than expected 对应 was completed ahead of schedule。三处信息一一对上，语义方向也一致（提前、靠他的钱），因此答案是 TRUE。作答提示：本题的难点在于识别同位语与让步短语的对应关系——题干把“出资”处理成了定语从句（which was funded by …），而原文处理成了原因状语（thanks to …），形式不同但所指相同，这类“句式重组、语义不变”的改写是雅思 TRUE 题的典型特征。第 5 段中 Yagi 共出现三次（Yuzo Yagi、Yagi Tsusho Ltd、Yagi signed），只有末句同时包含“完工时间”信息。",
          "traps": [
            "为什么不是 FALSE：原文明确说工程 “was completed ahead of schedule”（提前完工），与题干 “finished earlier than expected”（比预期更早完成）同义；出资关系也有 “thanks to his 2-million-euro contribution” 作证，题目与原文没有任何矛盾之处，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：完工时间与资金来源两项信息原文都直接给出，属于信息完整且一致，并非未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Most of the original frescoes inside Cestius' tomb have survived to this day.",
          "translation": "切斯提乌斯墓内原有壁画的大部分留存至今。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "We know from the writings of earlier visitors that there used to be more here, but the majority have disappeared over time."
          },
          "synonyms": [
            "“Most of the original frescoes” 与原文 “the majority” 对应，都指大多数",
            "“have survived to this day” 与原文 “have disappeared over time” 直接冲突：原文说大多数已经随时间消失",
            "“there used to be more here” 说明从前数量更多，反证如今数量减少，与题干“留存至今”方向相反",
            "“frescoes inside Cestius' tomb” 对应原文上文的 “the frescoes” 与 “the burial chamber”，原文谈的正是墓室内壁上的壁画"
          ],
          "locatingTip": "定位：第 6 段整段都在讲修复后的参观与墓室内的壁画，题干关键词 frescoes 与 majority/survive 的同义线索都集中在这一段，读到 “We know from the writings of earlier visitors that there used to be more here” 即锁定本句。确定答案技巧：本题的判分点是“多数是否留存”。原文用 but 转折给出结果：the majority have disappeared over time（大多数已经随时间消失），与题干的 have survived to this day（留存至今）完全相反；前半句 there used to be more here（从前这里更多）也暗示如今已然减少。因此判 FALSE。做题时要抓 but 之后的分句，这是作者真正要强调的信息，也往往是答案所在。",
          "analysis": "第 6 段在介绍新修复金字塔的参观线路与墓室陈设后写道：“We know from the writings of earlier visitors that there used to be more here, but the majority have disappeared over time.”（从早期访客的文字记载中我们得知，这里从前有更多，但大多数已经随时间消失了）。句子的信息结构是“让步 + 转折”：前半句 there used to be more here 说明历史上壁画数量多于现在，后半句 but the majority have disappeared over time 直接点明大多数已经不在了。题干的落点是“大部分”（Most of the original frescoes）留存至今（have survived to this day），与原文的 the majority have disappeared 在数量与结果两方面都相反：原文说多数消失，题干说多数留存。注意题干中的 Most 与原文的 the majority 是同一比例概念（大多数），替换没有问题，错误出在“消失”被改成了“留存”。信息存在且相反，故判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确用 the majority have disappeared over time 说明大多数壁画已经消失，并以 there used to be more here 佐证昔日数量更多，与题干的 “Most of the original frescoes … have survived”（大多数留存）正相反，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对壁画的存留状况有明确判断（the majority have disappeared），并非未提及；信息不仅存在而且与题干冲突，所以不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "it was made from 8 ________ and cement",
          "translation": "它是用 ________ 和水泥（cement）制成的。",
          "answer": "brick",
          "wordClass": "名词（不可数，建筑材料名；位于介词 from 之后作宾语，与并列的 cement 同属材料，保持不可数形式，不加冠词、不变复数）",
          "locating": {
            "paragraph": "3",
            "quote": "Cestius' pyramid had a layer of white Carrara marble on the outside, and was constructed from brick held together by a basic kind of cement on the inside."
          },
          "synonyms": [
            "“was made from” 与原文 “was constructed from” 同义，都表示由某种材料建造而成",
            "“brick” 与原文 “brick held together by a basic kind of cement” 中的 brick 原词对应，答案就是这个名词",
            "“cement” 与原文 “a basic kind of cement” 对应，题干省略了 a basic kind of 这层修饰",
            "原文用 inside 与 outside 对照：外层的 white Carrara marble 是干扰项，内层才是 brick 加 cement"
          ],
          "locatingTip": "定位：笔记的小标题是 Construction of Cestius' pyramid，直接指向第 3 段讲建造的那几句；再用关键词 cement 扫读，全篇只有第 3 段出现 cement，一步锁定。确定答案技巧：题干说“由某物和水泥制成”，在原文中找与 cement 并列出现在同一材料清单里的词。定位句中 “constructed from brick held together by a basic kind of cement” 把 brick 和 cement 连在一起：砖块靠最基础的水泥黏合，空格缺的就是 brick。填词时注意两个坑：一是不要把 outside 的 Carrara marble 当作答案，那是外层装饰；二是保持原词形式 brick（不可数，不加冠词、不加复数），并满足 ONE WORD ONLY。",
          "analysis": "第 3 段第 4 句写道：“Cestius' pyramid had a layer of white Carrara marble on the outside, and was constructed from brick held together by a basic kind of cement on the inside.”（切斯提乌斯金字塔外层覆盖着一层白色卡拉拉大理石，内部则用砖块砌成，砖块由一种最基础的水泥黏合）。题干把它压缩成 “it was made from [8] and cement”，只保留了材料这一维度，并且只保留两个成分：待填的词与 cement。原文中与 cement 直接搭配的材料正是 brick（held together by a basic kind of cement 中的被动关系说明水泥是用来黏合砖块的），因此答案为 brick。写成 brick 一词即可，词性上是不可数的材料名词，因此写单数原形、不加冠词也不加复数；切勿填 marble（那是外层材料，且原文用 on the outside 与之对应，与题干的 “and cement” 不在同一句的同一层描述上）。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "its 9 ________ is different to the pyramids found in Egypt",
          "translation": "它的 ________ 与埃及的金字塔不同。",
          "answer": "shape",
          "wordClass": "名词（单数，指物体的形状；空格前有形容词性物主代词 its 限定，故填名词单数形式，不加冠词、不用复数）",
          "locating": {
            "paragraph": "3",
            "quote": "One of the things that strikes you when you look at the pyramid is how steep it is, so that the shape of Cestius' pyramid is quite unlike that of typical Egyptian ones."
          },
          "synonyms": [
            "“its shape” 与原文 “the shape of Cestius' pyramid” 对应，题干的 its 即 the pyramid's",
            "“is different to” 与原文 “is quite unlike” 同义，unlike（不像）即不同",
            "“the pyramids found in Egypt” 与原文 “typical Egyptian ones” 对应，ones 回指前文的 pyramids",
            "“how steep it is”（它有多陡）是原文对形状差异的具体说明，也是 shape 一词的注解"
          ],
          "locatingTip": "定位：笔记同属 Construction of Cestius' pyramid 一节，仍在第 3 段；用关键词 Egypt 定位，本句出现 typical Egyptian ones，且全段只在这里把切斯提乌斯的金字塔与其他金字塔作对比。确定答案技巧：题干是 “its [9] is different to …”，需要一个表示金字塔自身属性的名词作主语。原文对应结构是 “the shape of Cestius' pyramid is quite unlike that of typical Egyptian ones”，主语部分 the shape of Cestius' pyramid 恰好等于题干的 its shape，谓语 quite unlike 等于题干的 is different to，因此空格应填 shape；原句中 how steep it is（有多陡）正是形状差异的具体表现，也印证这里谈的是形状。填名词单数原形 shape 即可，不要填 steepness（原文中 steep 是形容词，且 ONE WORD ONLY 之下的答案本应是原文用作主语的名词）。",
          "analysis": "第 3 段第 5 句：“One of the things that strikes you when you look at the pyramid is how steep it is, so that the shape of Cestius' pyramid is quite unlike that of typical Egyptian ones.”（当你看着这座金字塔时，最让你惊讶的一点是它有多陡，所以切斯提乌斯金字塔的形状与典型的埃及金字塔很不相同）。原文先用 “how steep it is” 引出视觉上最突出的特征（陡峭），再用 so that 归结为形状问题：the shape of Cestius' pyramid is quite unlike that of typical Egyptian ones。题干的 its [9] is different to the pyramids found in Egypt 正是对后半句的直接改写：主语 its 对应 the pyramid's，谓语 is different to 对应 is quite unlike，比较对象 the pyramids found in Egypt 对应 typical Egyptian ones。因此空格填 shape。词性上，shape 在此为可数名词单数，被 its 限定，不需要冠词；填写时保持原形 shape，不加 -s，也不改写为形近词 steepness。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "it was originally built in the 10 ________ as building tombs in the city was forbidden",
          "translation": "由于城内禁止建造墓葬，它最初建在 ________。",
          "answer": "countryside",
          "wordClass": "名词（不可数，地点名词；位于介词 in 与定冠词 the 之后作地点状语，说明金字塔最初建在何处，保持不可数形式，不加复数）",
          "locating": {
            "paragraph": "4",
            "quote": "since there was a strict Roman law prohibiting the placement of tombs within the city itself, the Pyramid of Cestius would have stood in the countryside."
          },
          "synonyms": [
            "“it was originally built in the countryside” 与原文 “the Pyramid of Cestius would have stood in the countryside” 对应，originally 对应 At the time of its construction，built/stood 同指“位于、建在”",
            "“as building tombs in the city was forbidden” 与原文 “since there was a strict Roman law prohibiting the placement of tombs within the city itself” 同义，prohibiting 即 forbidden，within the city 即 in the city",
            "“countryside” 与原文 “in the countryside” 原词对应，是空格答案"
          ],
          "locatingTip": "定位：题干出现了 city、tombs、forbidden 这组概念，回原文找“法律禁止在城内建墓”的表述，只在第 4 段首句出现，看到 “prohibiting the placement of tombs within the city itself” 即可锁定。确定答案技巧：题干问“由于城内禁墓，它最初建在哪里”，需要顺着因果关系读出地点。原文用 since 引导原因（严格的法律禁止在城内安放墓穴），主句给出结果：“the Pyramid of Cestius would have stood in the countryside”，介词 in 后面的 countryside 就是要填的词。填词时保持原形 countryside（不可数，不加复数、不加冠词），并且不要把 city 填进去——那是禁止的地点，不是实际建造的地点。",
          "analysis": "第 4 段首句：“At the time of its construction, since there was a strict Roman law prohibiting the placement of tombs within the city itself, the Pyramid of Cestius would have stood in the countryside.”（在它建造之时，由于有一条严格的罗马法律禁止在城内安放墓穴，切斯提乌斯金字塔本应坐落在乡野之中）。题干与原文的对应分为两步：原因部分，原文的 a strict Roman law prohibiting the placement of tombs within the city itself 被题干概括为 “building tombs in the city was forbidden”；结果部分，原文的 would have stood in the countryside 被题干改写为 “it was originally built in the [10]”，其中 originally 对应 At the time of its construction（初建之时），built in 对应 stood in（位于）。因此空格填 countryside。注意 would have stood 是虚拟语气，用来描述当时的情形（因为如今城市已扩到它周围），并不影响地点判断；词性上 countryside 是不可数地点名词，位于 the 之后直接填原形，符合 ONE WORD ONLY。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "In the 1660s, some broken 11 ________ were found next to it",
          "translation": "在 17 世纪 60 年代，它旁边发现了一些破碎的 ________。",
          "answer": "statues",
          "wordClass": "名词（复数；原文为碎片状态的青铜像 fragments of bronze statues，题干谓语是复数 were found，故必须填复数形式 statues）",
          "locating": {
            "paragraph": "4",
            "quote": "two marble bases were found in front of the pyramid, as well as fragments of bronze statues that had once stood on them, on either side of the pyramid."
          },
          "synonyms": [
            "“some broken statues” 与原文 “fragments of bronze statues” 对应，fragments（碎片）就是 broken 的具体化表达，题干省略了材料信息 bronze",
            "“were found next to it” 与原文 “were found in front of the pyramid … on either side of the pyramid” 对应，两处方位被题干概括为 next to it（在它旁边）",
            "“In the 1660s” 与原文上一句 “weren't rediscovered until the 1660s, when the pyramid underwent restoration” 对应"
          ],
          "locatingTip": "定位：笔记小标题是 Restoration of Cestius' pyramid in the 1660s，直接锁定第 4 段讲 1660 年代重修的句子；再用关键词 found 与 broken 的同义表述搜索，读到 “two marble bases were found in front of the pyramid, as well as fragments of bronze statues” 即可。确定答案技巧：题干说“在它旁边发现了一些破碎的某物”，原文说发现了两座大理石基座以及曾经立在其上的青铜像碎片（fragments of bronze statues）。fragments 对应 broken，雕像的位置（前方与两侧）对应 next to it，被发现的物品就是 statues。填词要点有二：一是必须是复数 statues，因为原文是复数 statues 且题干谓语用复数 were found；二是不要把 bases（基座）当答案，基座本身没有“破碎”这一属性，破碎的是立在基座上的铜像。",
          "analysis": "第 4 段写 1660 年代重修之后：“During excavations, when trees and plants were cleared away, two marble bases were found in front of the pyramid, as well as fragments of bronze statues that had once stood on them, on either side of the pyramid.”（在发掘过程中，树木与植物被清除后，金字塔前方发现了两座大理石基座，以及曾经立在这些基座上的青铜像的碎片，它们位于金字塔两侧）。题干把它压缩为 “In the 1660s, some broken [11] were found next to it”。对应关系是：fragments of bronze statues 中的 fragments 对应题干的 broken（碎裂的），statues 就是待填的名词；位置上原文说 in front of the pyramid 与 on either side of the pyramid，题干用 next to it 概括，语义一致。因此答案为 statues。注意两点：一是复数形式不可少，原文明确是 statues，且题干用复数谓语 were found，写 statue 会因单复数不符而丢分；二是不要填 bases，那是承托雕像的大理石基座，原文并没有说它们碎裂。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "the 12 ________ inside the tomb suggests that robbers had been there",
          "translation": "墓内的 ________ 表明曾有盗墓者来过。",
          "answer": "tunnel",
          "wordClass": "名词（单数；空格前有定冠词 the，且题干谓语 suggests 为第三人称单数，故填单数名词 tunnel）",
          "locating": {
            "paragraph": "4",
            "quote": "The people employed to excavate the pyramid did not find the urn that would have contained Cestius' remains, but they did come across a tunnel. It was quite possible, therefore, that robbers had at some earlier time removed the contents of the tomb."
          },
          "synonyms": [
            "“the tunnel inside the tomb suggests that robbers had been there” 与原文 “they did come across a tunnel. It was quite possible, therefore, that robbers had at some earlier time removed the contents of the tomb” 对应",
            "“suggests” 与原文 “It was quite possible, therefore” 对应，都是对未发生现场的推测性表达",
            "“robbers had been there” 与原文 “robbers had at some earlier time removed the contents of the tomb” 对应，都指盗墓者曾进入墓中",
            "“inside the tomb” 与原文语境中的 urn（骨灰瓮）、contents of the tomb（墓内物品）相呼应，说明所谈的是墓室内部"
          ],
          "locatingTip": "定位：笔记这一条的关键词是 robbers，全篇只有第 4 段末尾谈到盗墓者的推测，读到 “robbers had at some earlier time removed the contents of the tomb” 即锁定本句，答案就在它前一句。确定答案技巧：题干说“墓内的某物表明曾有盗墓者来过”，需要找出那个“可疑的发现物”。原文先交代发掘者 did not find the urn（没找到骨灰瓮），紧接着用 but 给出实际发现：“they did come across a tunnel”（他们发现了一条隧道），随后用 therefore 把它与盗墓者联系起来：很可能盗墓者很早以前就把墓内物品取走了。可见起提示作用的东西就是 tunnel，故填 tunnel。填词要点：单数形式（题干谓语是 suggests），且是 ONE WORD ONLY；不要填 urn（那是没找到的物品），也不要填 robbers（那是被推测的对象而非线索物）。",
          "analysis": "第 4 段后部：“The people employed to excavate the pyramid did not find the urn that would have contained Cestius' remains, but they did come across a tunnel. It was quite possible, therefore, that robbers had at some earlier time removed the contents of the tomb.”（受雇发掘金字塔的人没有找到本应盛放切斯提乌斯遗骸的骨灰瓮，但他们确实发现了一条隧道。因此很有可能，盗墓者曾在更早的时候把墓内的东西取走了）。原文的逻辑链是“未找到骨灰瓮（否定）加发现隧道（肯定），由此推测盗墓”。题干把这一段浓缩为 “the [12] inside the tomb suggests that robbers had been there”，其中 suggests 对应原文的 It was quite possible, therefore，主语位置上的名词就是那条起提示作用的隧道，即 tunnel。注意第一个分句是否定信息，不能作为答案：urn 是发掘者没有找到的东西，正因为骨灰瓮不见了、又有一条隧道，才引出盗墓的推测。词性上 tunnel 是可数名词，被 the 限定、题干的谓语是第三人称单数 suggests，故填单数原形 tunnel。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "climbers are helping to get rid of signs of 13 ________",
          "translation": "攀爬者正在帮助清除 ________ 的痕迹。",
          "answer": "pollution",
          "wordClass": "名词（不可数，指污染；位于介词 of 之后作宾语，与前面的 signs 构成名词短语 signs of pollution，保持不可数形式，不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "The white exterior of the Pyramid of Cestius will have to be cleaned every few months to remove the layer of urban pollution. A team of free-climbers will be employed to do the job"
          },
          "synonyms": [
            "“signs of pollution” 与原文 “the layer of urban pollution” 对应，layer（一层）就是可见的痕迹",
            "“climbers” 与原文 “A team of free-climbers” 对应，free-climbers 即自由攀爬者",
            "“get rid of” 与原文 “to remove” 同义，都是清除、去除",
            "“are helping” 与原文 “will be employed to do the job” 对应，都指他们参与这项清理工作"
          ],
          "locatingTip": "定位：笔记最后一个小标题是 Restoration of Cestius' pyramid today，指向第 6 段末两句；用关键词 climbers 扫读，全篇只有一处出现 free-climbers，配合 remove、cleaned 等清理类动词即可锁定。确定答案技巧：题干说“攀爬者帮忙清除某物的痕迹”，在原文中找到攀爬者对应的动作与对象：句子先说白外墙每隔几个月就得清洗一次，以去除 the layer of urban pollution（城市污染形成的表层），随后说会雇用一队自由攀爬者来做这件事。也就是说，攀爬者要清除的对象是污染，因此空格填 pollution。填词要点：只填 pollution 一个词，不要把前面的 urban 一起写上（会超出 ONE WORD ONLY 的要求，且题干已用 signs of 表达“痕迹”这一层意思）。",
          "analysis": "第 6 段末两句：“The white exterior of the Pyramid of Cestius will have to be cleaned every few months to remove the layer of urban pollution. A team of free-climbers will be employed to do the job, in order to avoid placing builders' scaffolding around the newly welcoming monument.”（切斯提乌斯金字塔白色的外墙每隔几个月就得清洗一次，以清除城市污染形成的那一层污垢。为保证这座重新向公众开放的古迹周围不搭起施工脚手架，将雇用一队自由攀爬者来完成这项工作）。题干 “climbers are helping to get rid of signs of [13]” 与原文的对应十分紧凑：climbers 对应 A team of free-climbers，get rid of 对应 remove，signs of 对应 the layer of，空格对应 urban pollution 中的中心名词 pollution。语句顺序上原文是先说清洗目的（remove the layer of urban pollution），再说由谁来做（A team of free-climbers），题干把两者合并成一句，因果关系不变。因此答案为 pollution，词性为不可数名词，位于 of 之后直接填原形，不加冠词也不加复数。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
