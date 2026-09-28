(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-27", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-27",
  "meta": {
    "examId": "p1-high-27",
    "title": "Footprints in the Mud 恐龙脚印",
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
          "stem": "There is still doubt about the theory that an asteroid strike killed the dinosaurs.",
          "translation": "关于小行星撞击导致恐龙灭绝这一理论，目前仍存在疑问。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Everybody knows that the dinosaurs became extinct as a result of a large asteroid; something big hit the Earth 65 million years ago and, when the dust had fallen, so had the great reptiles."
          },
          "synonyms": [
            "题干 “an asteroid strike killed the dinosaurs” 对应原文 “the dinosaurs became extinct as a result of a large asteroid”",
            "题干 “There is still doubt about” 与原文 “Everybody knows” 表达的态度完全相反（一个是存疑，一个是众所周知）"
          ],
          "locatingTip": "定位：利用题干中的核心概念 asteroid（小行星）以及 killed the dinosaurs（使恐龙灭绝），回文章开头找同义表达，第 1 段首句即出现 “became extinct as a result of a large asteroid”。确定答案技巧：本题考的不是事实本身，而是作者对该理论的态度词——原文用 Everybody knows（人人都知道）把它当成公认常识来陈述，即毫无争议；题干用 There is still doubt（仍存疑问）表示尚有争议，两者态度直接对立，故判 FALSE。",
          "analysis": "第 1 段首句作者以 “Everybody knows that the dinosaurs became extinct as a result of a large asteroid” 开篇，Everybody knows 是一种常识性断言，说明作者认为该理论早已人尽皆知、被普遍接受，不存在悬而未决的争议。题干主干 There is still doubt about the theory 意为“这一理论仍令人怀疑”，与原文的“人人都知道”构成正反冲突。判断题的关键是看原文对同一对象有没有明确表态：这里原文既提到了该理论，又给出了“毫无疑问”的明确态度，因此不属于“未提及”。可见答案不是 TRUE（题干与原文相反），而是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文用 “Everybody knows” 强调该理论是众所周知、被普遍接受的定论；题干却说 “There is still doubt”，态度完全相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“撞击导致恐龙灭绝”这一理论有明确的态度表述（Everybody knows），信息确实存在且与题干冲突，属于原文相矛盾，而不是未提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Books and the cinema have exaggerated the size of dinosaurs.",
          "translation": "书籍和电影夸大了恐龙的体型。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "It was in the subsequent Jurassic period, which began 202 million years ago, that they overran the planet and turned into the monsters realistically depicted in modern books and movies."
          },
          "synonyms": [
            "题干 “books and the cinema” 对应原文 “modern books and movies”",
            "题干 “have exaggerated”（夸大）与原文 “realistically depicted”（写实地描绘）意思相反"
          ],
          "locatingTip": "定位：用题干中 Books and the cinema 的近义表达 books and movies 扫读第 2 段，看到 modern books and movies 即可锁定。确定答案技巧：不能只看“书和电影描述了恐龙”就选 TRUE，关键在修饰副词 realistically（逼真地、写实地），它说明影视与书籍中的恐龙形象是对真实形象的忠实再现；题干用的 exaggerated 意为“夸大”，两者语义相反，故判 FALSE。",
          "analysis": "第 2 段谓语部分说恐龙在侏罗纪 “overran the planet and turned into the monsters realistically depicted in modern books and movies”，即现代书籍和电影里那些庞然大物是对恐龙形象的写实再现。realistically 表示“写实地、逼真地”，暗含“与实际相符、并未夸大”。题干却把这句话改写为 Books and the cinema have exaggerated the size of dinosaurs（书籍和电影夸大了恐龙的体型），把原文的“如实描绘”偷换成“夸大其词”，属于典型的反义改写。因此题干与原文矛盾，答案为 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文对该呈现方式的评价是 “realistically”（写实的），而 exaggerated 意为“夸张的”，二者相反；若选 TRUE 就等于把原文的正面修饰换成了负面评价，与原文不符。",
            "为什么不是 NOT GIVEN：原文确实对“书籍与电影呈现恐龙的方式”作了明确评价（realistically depicted），信息存在且与题干冲突，不能算作未提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Other scientists have rejected Olsen's idea of a sudden dinosaur occupation of the Earth.",
          "translation": "其他科学家拒绝了奥尔森关于恐龙突然占领地球的观点。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Dr Olsen and his colleagues are not the first to suggest that the dinosaurs inherited the Earth as the result of an asteroid strike. But they are the first to show that the takeover did, indeed, happen in a geological eye-blink."
          },
          "synonyms": [
            "题干 “Olsen's idea” 对应原文 “Dr Olsen and his colleagues … suggest”",
            "题干 “a sudden dinosaur occupation of the Earth” 对应原文 “the takeover did, indeed, happen in a geological eye-blink”"
          ],
          "locatingTip": "定位：以人名 Olsen 以及“恐龙快速接管地球”这一观点为线索，扫读第 2 段最后两三句。确定答案技巧：原文只交代了 Olsen 团队的“首创性”（他们不是第一个提出该观点的人，但是第一个证明该观点的人），并没有涉及学界同行对这一观点的反应；题干却断言 Other scientists have rejected（其他科学家反对），这个“他人态度”在原文中找不到任何依据，属于典型的信息缺失，故判 NOT GIVEN。",
          "analysis": "第 2 段末两句的意思是：Olsen 博士及其同事并非第一个提出“恐龙因小行星撞击而接管了地球”的人，但他们是第一个证明这次“接管”确实发生在一次地质眨眼之间（geological eye-blink）的人。这两句讨论的全是 Olsen 团队自身的学术位置与贡献，完全没有提到其他科学家（other scientists）对该观点是接受、赞同还是拒绝。题干中的 rejected（否定、反对）属于“他人的态度与反应”，而原文对此一片空白——既没说有人反对，也没说有人支持。判断题中，凡是题干新增了原文没有交代的“第三方态度”，通常就是 NOT GIVEN。",
          "traps": [
            "为什么不是 FALSE：原文从未说“其他科学家赞同该观点”，因此不能把题干的“其他科学家反对”当作与原文矛盾；相反的证据在原文根本不存在，不能凭常理臆断学术界的立场。",
            "为什么不是 TRUE：题干多出了 “Other scientists” 这一主语，原文只提到 Olsen 本人及其同事，没有任何关于同行态度的记载，无法支撑题干。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Dinosaur footprints are found more frequently than dinosaur skeletons.",
          "translation": "恐龙脚印被发现得比恐龙骨骼更频繁。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Dinosaur skeletons are rare. Dinosaur footprints are, however, surprisingly abundant."
          },
          "synonyms": [
            "题干 “are found more frequently” 对应原文 “rare”（骨骼）与 “surprisingly abundant”（脚印）所构成的数量对比",
            "题干的比较对象 footprints 与 skeletons 与原文一一对应"
          ],
          "locatingTip": "定位：题干是比较“脚印与骨骼的出现频率”，直接去名词 footprints 与 skeletons 首次同时出现的地方，即第 3 段开头。确定答案技巧：抓一对对比形容词 rare（稀少）与 abundant（大量、丰富），二者构成明确的频率高低关系——脚印 abundant、骨骼 rare，正好等于“脚印比骨骼更容易被发现”，故判 TRUE。",
          "analysis": "第 3 段开头用一对反义形容词形成对比：Dinosaur skeletons are rare（恐龙骨骼很稀少），Dinosaur footprints are, however, surprisingly abundant（然而恐龙脚印却多得出人意料）。转折词 however 提示前后是对比关系，即“骨骼罕见、脚印极多”。题干 Dinosaur footprints are found more frequently than dinosaur skeletons（脚印比骨骼被发现得更频繁）正是这一对比的同义转述：abundant 表示数量大、常见，对应 found more frequently；rare 表示罕见，对应出现得不那么频繁。原文的对比方向与题干完全一致，答案 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文对比方向十分清晰——骨骼 rare、脚印 surprisingly abundant，没有任何反向表述，题干也没有把两者颠倒。",
            "为什么不是 NOT GIVEN：原文用 rare 与 surprisingly abundant 直接给出了两类化石出现频率高低的对比，信息明确存在，不属于未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Ichnotaxa offer an exact identification of a dinosaur species.",
          "translation": "足迹分类（Ichnotaxa）能够提供恐龙物种的精确鉴定。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "These are recognisable types of footprint that cannot be matched precisely within the species of animal that left them."
          },
          "synonyms": [
            "题干 “Ichnotaxa” 对应原文 “so-called 'ichnotaxa'”，其后的 These 即指代 ichnotaxa",
            "题干 “offer an exact identification of a dinosaur species” 与原文 “cannot be matched precisely within the species of animal that left them” 意思相反（原文是否定）"
          ],
          "locatingTip": "定位：Ichnotaxa 是带引号的生僻术语，属于天然定位词，回到第 4 段首句找到 “look at 18 so-called 'ichnotaxa'”，紧随其后的 These 就指代它。确定答案技巧：注意原文用了 cannot be matched precisely（不能精确对应到物种）这一否定结构，而题干把它换成了肯定意义的 exact identification（精确鉴定），一否一肯正好相反，故判 FALSE。",
          "analysis": "第 4 段先说明研究团队把工作分开进行，考察了 80 个地点、18 种所谓的 “ichnotaxa”（足迹分类单位），紧接着用 These（即 ichnotaxa）作解释：它们是可辨识的足迹类型，that cannot be matched precisely within the species of animal that left them，即无法精确对应到留下脚印的那个具体物种，随后补充 “But they can be matched with a general sort of animal”，说明它们只能与某一“大类动物”相匹配，并借此指示该类群的命运。可见 ichnotaxa 的价值在于判断“大类”而非“具体物种”。题干的 exact identification of a dinosaur species（精确鉴定恐龙物种）恰好抹掉了原文的否定，把“不能精确”写成“能够精确”，与原文直接矛盾，答案 FALSE。",
          "traps": [
            "为什么不是 TRUE：题干把原文的否定结构 cannot be matched precisely 改写成了肯定表述 exact identification，属于“漏掉否定词”的经典陷阱，不能判 TRUE。",
            "为什么不是 NOT GIVEN：原文对 ichnotaxa 能否精确鉴定物种给出了明确说明（只能匹配大类、无法精确到物种），信息存在且与题干冲突，不属于未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "There is evidence that some groups of dinosaurs survived from the Triassic period into the Jurassic period.",
          "translation": "有证据表明，部分恐龙种群从三叠纪存活到了侏罗纪。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Their findings show that five of the ichnotaxa disappear before the end of the Triassic, and four march confidently across the boundary into the Jurassic."
          },
          "synonyms": [
            "题干 “evidence” 对应原文 “Their findings show that”（研究发现即证据）",
            "题干 “some groups … survived from the Triassic period into the Jurassic period” 对应原文 “four march confidently across the boundary into the Jurassic”"
          ],
          "locatingTip": "定位：利用地质年代专有名词 Triassic 与 Jurassic 扫读正文，第 5 段首句同时出现这两个词并给出统计结论。确定答案技巧：把“研究结论”视为 evidence 的同义表达（Their findings show that），再看有没有“部分种群跨越三叠纪进入侏罗纪”的表述——four march confidently across the boundary into the Jurassic 正是此意，而 four 属于 some（部分）而非全部，故判 TRUE。",
          "analysis": "第 5 段首句给出研究结论：在他们研究的足迹分类中，有五种在三叠纪结束之前就消失了，而“四种自信地跨越边界进入侏罗纪”（four march confidently across the boundary into the Jurassic）。march confidently across the boundary 形象地说明这些种群顺利越过了三叠纪与侏罗纪之间的界线，即从三叠纪延续生存到了侏罗纪。题干 There is evidence that some groups of dinosaurs survived from the Triassic period into the Jurassic period 中，evidence 对应原文的 Their findings show that，some groups 对应 four（四种，属于部分物种而非全部），survived … into 对应 march … across the boundary into，三处对应严密，答案 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文后面确实还提到五种在三叠纪末消失、六种在交界处灭绝，但题干的限定语是 some groups（部分种群），而原文的 four 恰好构成了“部分存活下来”的证据，二者并不冲突。",
            "为什么不是 NOT GIVEN：原文以研究结果的形式明确给出了跨越三叠纪与侏罗纪边界的足迹类别数量，证据在文中确实存在，不能用“未提及”来回避。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 摘要填空（Summary Completion，NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Dr Olsen's group believe that the sudden increase in the size of dinosaurs may have been due to something known as 7 __________.",
          "translation": "奥尔森博士的研究小组认为，恐龙体型的突然增大可能是由于一种被称为 7 ______ 的现象。",
          "answer": "ecological release",
          "wordClass": "名词短语（术语/现象名称，在 something known as 之后作介词 as 的补足语，说明 that 从句所推测的原因；照抄原文两词）",
          "locating": {
            "paragraph": "7",
            "quote": "how quickly they increased in size. Dr Olsen and his colleagues suggest that the explanation for this may be a phenomenon called ecological release."
          },
          "synonyms": [
            "题干 “the sudden increase in the size of dinosaurs” 对应原文 “how quickly they increased in size”",
            "题干 “may have been due to something known as” 对应原文 “the explanation for this may be a phenomenon called”"
          ],
          "locatingTip": "定位：以人名 Dr Olsen 及其团队的“解释”为线索，扫读第 7 段（“The surprises are how rapidly the new ichnotaxa appeared…”）。确定答案技巧：抓住固定搭配 a phenomenon called ...（一种被称为……的现象），called 之后的名词短语就是答案 ecological release；同时注意空格前后的 “something known as” 与 “a phenomenon called” 的对应关系。",
          "analysis": "摘要第一段首句说 Olsen 小组认为恐龙体型的骤增可能源于某个 “known as” 的东西。原文第 7 段先感叹新的足迹类型出现之快、体型增大之迅速（how rapidly the new ichnotaxa appeared and how quickly they increased in size），紧接着给出解释：Dr Olsen and his colleagues suggest that the explanation for this may be a phenomenon called ecological release。其中 the explanation for this 对应题干的 may have been due to，a phenomenon called ecological release 对应 something known as ___。因此空格填 ecological release（生态释放）。空格前 known as 提示需要的是现象/理论的名称，词性上是一个名词短语；答案须照抄原文两个单词，不要自行改写成 ecological release theory 等，也不能超三词。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "A current example of this can be found on Komodo Island in Indonesia, where some of the lizards are commonly called 8 __________ because of their size.",
          "translation": "目前的一个例子可以在印度尼西亚的科莫多岛上找到，那里的一些蜥蜴由于体型巨大，常被称为 8 ______。",
          "answer": "dragons",
          "wordClass": "名词（复数，作 are called 的表语，指这些蜥蜴因体型而得的俗称）",
          "locating": {
            "paragraph": "7",
            "quote": "The most spectacular example is on the Indonesian island of Komodo, where local lizards have grown so large that they are often referred to as dragons."
          },
          "synonyms": [
            "题干 “A current example of this” 对应原文 “This is seen today” 与 “The most spectacular example”",
            "题干 “Komodo Island in Indonesia” 对应原文 “the Indonesian island of Komodo”",
            "题干 “commonly called” 对应原文 “often referred to as”",
            "题干 “because of their size” 对应原文 “have grown so large”"
          ],
          "locatingTip": "定位：用专有名词 Komodo（及 Indonesian island）一步命中第 7 段第四句。确定答案技巧：找到表示“被称为”的词组 referred to as，其后的名词 dragons 即为所填内容；题干 commonly called 与 often referred to as 是同义替换，because of their size 对应 have grown so large。",
          "analysis": "摘要接着说这一现象今天仍能看到：在印度尼西亚的科莫多岛，一些蜥蜴因为长得太大而常被称作“龙”。原文第 7 段在给出 ecological release 的定义后，用 “This is seen today when reptiles … reach islands where they face no competitors” 引出当下实例，再用 “The most spectacular example is on the Indonesian island of Komodo” 具体到科莫多岛，并以 “where local lizards have grown so large that they are often referred to as dragons” 说明当地蜥蜴的俗称。题干的 A current example 对应原文的 seen today 及 The most spectacular example，Komodo Island in Indonesia 对应 the Indonesian island of Komodo，commonly called 对应 often referred to as，因此空格填 dragons。空格前 called 提示须填表示称呼的名词，且空前没有冠词、原文用复数 dragons，答案照抄为 dragons。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Apparently, they have grown this big because they do not have any 9 __________.",
          "translation": "显然，它们长得这么大，是因为它们没有任何 9 ______。",
          "answer": "competitors",
          "wordClass": "名词（复数，作 have 的宾语；位于否定结构 do not have any 之后，表示所缺少的对象，须用可数名词复数）",
          "locating": {
            "paragraph": "7",
            "quote": "This is seen today when reptiles (which in modern times tend to be small creatures) reach islands where they face no competitors."
          },
          "synonyms": [
            "题干 “do not have any” 对应原文 “face no”",
            "题干 “they have grown this big” 对应原文 “local lizards have grown so large”",
            "原文后文的 “the competition had been knocked out” 中的 competition 与答案 competitors 属同一语义场（竞争/竞争对手）"
          ],
          "locatingTip": "定位：空格前的 they 指上一句的科莫多蜥蜴，回到第 7 段找解释蜥蜴体型成因的句子。确定答案技巧：原文用 face no competitors（没有任何竞争对手）说明原因，题干把否定意思前置改写成 do not have any ___，face no 与 do not have any 同义，因此填 competitors。",
          "analysis": "第 7 段先用 “This is seen today when reptiles … reach islands where they face no competitors” 解释 ecological release 的发生机制：现代爬行动物（通常体型很小）一旦到达没有竞争者的岛屿，就会长得特别大。题干 Apparently, they have grown this big because they do not have any ___ 正是这一因果关系的改写：they have grown this big 对应 local lizards have grown so large，do not have any 对应 face no，因此空格应填 competitors（竞争对手）。需注意词性：空前是否定结构 do not have any，any 后接可数名词时通常用复数，原文 competitors 也正好是复数，直接照抄即可；原文后文还出现 “could flourish only when the competition had been knocked out”，其中 competition 是抽象名词，不能直接填入本题。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "First, it may have been 10 __________ by scientists, because craters are easily covered up.",
          "translation": "第一，它可能被科学家 10 ______ 了，因为陨石坑很容易被覆盖。",
          "answer": "overlooked",
          "wordClass": "动词过去分词（与 may have been 构成被动语态，后接 by scientists 表示动作执行者；原形为 overlook）",
          "locating": {
            "paragraph": "8",
            "quote": "It may, of course, have been overlooked. Old craters are eroded and buried, and not always easy to find."
          },
          "synonyms": [
            "题干 “it may have been … by scientists” 对应原文 “It may, of course, have been overlooked”（原文用被动语态，动作执行者未点明，题干补出 by scientists）",
            "题干 “craters are easily covered up” 对应原文 “Old craters are eroded and buried, and not always easy to find”"
          ],
          "locatingTip": "定位：摘要第二段转入“为什么找不到两亿零两百万年前的那个大坑”，题干的列举词 First 对应原文第 8 段给出的第一种可能性。确定答案技巧：原文 It may, of course, have been overlooked 与题干 it may have been ___ by scientists 结构几乎一致，直接照搬原词 overlooked；同时用 craters are eroded and buried / not always easy to find 印证“容易被覆盖、被忽略”。",
          "analysis": "摘要第二段开头说，作者给出了“我们至今没找到两亿零两百万年前的大坑”的三种可能原因。第 8 段先陈述问题 “No large hole in the Earth's crust seems to be 202 million years old”，随后给出第一种可能：“It may, of course, have been overlooked”（它当然有可能被忽略了），并解释原因——古老的陨石坑会被侵蚀、被掩埋，总是难以发现（Old craters are eroded and buried, and not always easy to find）。题干 First, it may have been ___ by scientists, because craters are easily covered up 中，because 后的“坑容易被覆盖”对应原文的 eroded and buried…not always easy to find，因此空格应填 overlooked（被忽略、被忽视）。词性上 may have been 之后需要过去分词构成被动语态，与后置的 by scientists 配套，原文原词 overlooked 正好符合。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Or, it could have 11 __________.",
          "translation": "或者，它可能已经 11 ______ 了。",
          "answer": "vanished",
          "wordClass": "动词过去分词（与 could have 构成对过去情况的推测结构；原形为 vanish）",
          "locating": {
            "paragraph": "8",
            "quote": "Alternatively, it may have vanished. Although continental crust is more or less permanent, the ocean floor is constantly recycled by the tectonic processes that bring about continental drift."
          },
          "synonyms": [
            "题干 “Or” 对应原文 “Alternatively”",
            "题干 “could have” 对应原文 “may have”"
          ],
          "locatingTip": "定位：题干的 Or 引出第二种可能性，对应原文表示“另一种情况”的连接副词 Alternatively，位于第 8 段中部。确定答案技巧：在 Alternatively 之后直接找到谓语动词 vanished，其结构 may have vanished 与题干的 could have ___ 完全对应（may have 与 could have 都是对过去可能性的推测），因此填 vanished。",
          "analysis": "第 8 段用一个副词 “Alternatively”（或者、换一种情况）引出第二种可能：“it may have vanished”——那个大坑可能已经消失了。紧随其后的句子给出理由：大陆地壳大体是永久性的，但海底会不断被产生大陆漂移的构造作用循环更新（the ocean floor is constantly recycled…），因此两亿年以上的洋底早已不复存在，如果陨石坑落在海里，早就被“吞掉”了。题干 Or, it could have ___ 正是这一条的改写：Or 对应 Alternatively，could have 对应 may have，因此空格填 vanished（消失）。词性上 could have 之后须用过去分词，vanished 原形为 vanish，注意拼写为 -ed 形式，不可写成 vanish 或 vanishing。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "…if the hole had been in the ocean, it would no longer exist because of the 12 __________ that produce continental drift.",
          "translation": "……如果那个坑当时位于海洋中，由于造成大陆漂移的 12 ______，它现在就已不复存在了。",
          "answer": "tectonic processes",
          "wordClass": "名词短语（复数，作定语从句 that produce continental drift 的先行词，即被从句修饰的中心名词）",
          "locating": {
            "paragraph": "8",
            "quote": "Although continental crust is more or less permanent, the ocean floor is constantly recycled by the tectonic processes that bring about continental drift."
          },
          "synonyms": [
            "题干 “because of” 对应原文 “by”",
            "题干 “produce” 对应原文 “bring about”",
            "题干 “continental drift” 与原文 “continental drift” 完全同形，可直接作定位词"
          ],
          "locatingTip": "定位：题干中 continental drift（大陆漂移）与原文完全同形，是最好用的定位词，扫到第 8 段最后一句即可。确定答案技巧：空格后有定语从句 that produce continental drift，原文对应的结构是 the tectonic processes that bring about continental drift，bring about 与 produce 同义，定语从句的先行词 tectonic processes 就是答案；注意它是两个单词，符合 NO MORE THAN THREE WORDS 的字数限制。",
          "analysis": "第 8 段末句解释“坑为何会消失”：Although continental crust is more or less permanent, the ocean floor is constantly recycled by the tectonic processes that bring about continental drift——虽然大陆地壳大体永久，但洋底会被造成大陆漂移的构造运动不断循环更新，因此两亿年前的洋底不可能保留至今。题干的 it would no longer exist because of the ___ that produce continental drift 就是这句的转述：because of 对应 by，produce 对应 bring about，而 that produce continental drift 这一后置定语从句对应原文的 that bring about continental drift。因此空格应填先行词 tectonic processes（构造运动/构造过程）。词性上空前有定冠词 the、空后有定语从句修饰，需要一个名词短语；tectonic processes 为复数，与从句中 produce（复数动词）一致，填写时必须保留复数词尾 -s 与两个单词的完整形式，不要只写 processes。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Thirdly, the hole could still exist but have been 13 __________.",
          "translation": "第三，那个坑可能依然存在，只是年代被 13 ______ 了。",
          "answer": "misdated",
          "wordClass": "动词过去分词（与 have been 构成被动完成结构，与 could still exist 中的动词并列；原形为 misdate）",
          "locating": {
            "paragraph": "9",
            "quote": "There is a third possibility, however. This is that the crater is known, but has been misdated."
          },
          "synonyms": [
            "题干 “Thirdly” 对应原文 “a third possibility”",
            "题干 “the hole could still exist” 对应原文 “the crater is known”",
            "题干 “have been” 对应原文 “has been”"
          ],
          "locatingTip": "定位：题干的 Thirdly 是列举的第三个要点，对应第 9 段开头的 “a third possibility”，这是全篇列举结构的收尾。确定答案技巧：原文 “This is that the crater is known, but has been misdated” 中，the crater is known 对应题干的 the hole could still exist，转折词 but 之后的 has been misdated 就是所填内容，注意照抄原词 misdated（年代测定有误），不要自行改写成 wrongly dated 等。",
          "analysis": "第 9 段开头用 “There is a third possibility, however” 引出第三种可能，并用 “This is that the crater is known, but has been misdated” 说明：坑其实是已知的（即文中后述的加拿大魁北克 Manicouagan 陨石坑），只是它的年代被测定错了。后文进一步印证：Manicouagan 被认为是 2.14 亿年前形成，体量巨大（直径约 100 公里），但 2.14 亿年前的岩层并没有留下本该有的撞击痕迹，因此“Manicouagan 可能被误测了年代”（It is possible, therefore, that Manicouagan has been misdated），也正是作者下一步要验证的事情。题干 Thirdly, the hole could still exist but have been ___ 中，could still exist 对应 the crater is known，but 对应原文的 but，have been 对应 has been，因此空格填 misdated。词性上 have been 之后须用过去分词构成被动语态，与并列的 exist 形成“存在但被误测”的转折，原文原词 misdated 可直接照抄。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
