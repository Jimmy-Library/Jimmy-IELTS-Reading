(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1040", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1040",
  "meta": {
    "examId": "p1-medium-1040",
    "title": "An important language development 重要的语言发展",
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
          "stem": "Cuneiform tablets were produced in different shapes and sizes.",
          "translation": "楔形文字泥板被制作成不同的形状和尺寸。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "It was most often inscribed on palm-sized, rectangular clay tablets measuring several centimetres across, although occasionally, larger tablets or cylinders were used."
          },
          "synonyms": [
            "“different shapes” 同义替换为原文的 “palm-sized, rectangular” 与 “cylinders”：原文给出长方形泥板与圆柱形泥板两种不同形态",
            "“different sizes” 同义替换为原文的 “measuring several centimetres across” 与 “larger tablets”：原文给出宽约几厘米的小泥板与更大的泥板两种尺寸",
            "“were produced” 同义替换为原文的 “It was most often inscribed on”（大多被刻写于）以及 “larger tablets or cylinders were used”（更大的泥板或圆柱也被使用）"
          ],
          "locatingTip": "定位：题干的核心名词是 Cuneiform tablets，它出现在第 1 段（A 段）第 2 句，紧接首句之后，扫读第一段即可锁定，不必读后面段落。确定答案技巧：本题考查“形状和尺寸是否多样”，判分点是原文有没有出现形态与大小上的并列或对比。原文先用 “palm-sized, rectangular clay tablets measuring several centimetres across” 给出常规形制（手掌大小、长方形、几厘米宽），紧接着用 although occasionally 转折引出例外 “larger tablets or cylinders were used”，即偶尔也用更大的泥板或圆柱形泥板。rectangular 与 cylinders 对应形状上的不同，several centimetres 与 larger 对应尺寸上的不同，两处差异正合题干的 different shapes and sizes，故判 TRUE。提醒：although、occasionally、sometimes 这类词常常带出与常规不同的第二种情况，是判断题 TRUE 的高发信号词。",
          "analysis": "第 1 段（A 段）第 2 句写道：“It was most often inscribed on palm-sized, rectangular clay tablets measuring several centimetres across, although occasionally, larger tablets or cylinders were used.”（它最常被刻写在手掌大小、长方形的泥板上，泥板宽度约几厘米，不过偶尔也会使用更大的泥板或圆柱形泥板）。句中给出两组形制信息：常态是 palm-sized, rectangular（手掌大小、长方形），例外是 larger tablets or cylinders（更大的泥板或圆柱）。题干的 different shapes 对应原文的 rectangular（长方形）与 cylinders（圆柱形）两种形状，different sizes 对应 measuring several centimetres across（约几厘米宽）与 larger（更大）两种尺寸，were produced 对应 was inscribed on 以及 were used。原文对“形状与尺寸多样”的交代明确而充分，也没有与之矛盾或超出范围的信息，因此答案是 TRUE。注意不要因为句中出现 most often 就怀疑“多样性”——although occasionally 引出的让步内容恰恰是作者给出的第二种可能，让步与转折之后的信息往往就是考点所在。",
          "traps": [
            "为什么不是 FALSE：原文用 although occasionally 明确列出第二种情况 “larger tablets or cylinders were used”，与常规的 palm-sized, rectangular clay tablets 并存，形状与尺寸确实不同，不存在任何与题干相矛盾的信息。",
            "为什么不是 NOT GIVEN：题干问的两件事——形状（shapes）与尺寸（sizes）——原文都逐一交代：形状有长方形与圆柱形，尺寸有几厘米宽与更大之分，信息完整，不属于未提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "When Sumerian writers marked on the clay tablets, the tablets were dry.",
          "translation": "当苏美尔书写者在泥板上刻写时，泥板是干的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Sumerian writers would impress these lines into the wet clay with a stylus – a long, thin, pointed instrument which looked somewhat like a pen."
          },
          "synonyms": [
            "“marked on the clay tablets” 同义替换为原文的 “impress these lines into the wet clay with a stylus”（用尖笔把线条压进湿黏土）",
            "“Sumerian writers” 在原文中原词复现：“Sumerian writers would impress these lines”",
            "“the tablets were dry” 与原文的 “the wet clay” 直接冲突：原文明确说书写时的黏土是湿的"
          ],
          "locatingTip": "定位：题干的关键词是 Sumerian writers 与 clay tablets，两者在第 2 段（B 段）第 3 句同时出现，顺着楔形符号书写方式的介绍往下读即可遇到，无需看后面段落。确定答案技巧：本题真假的唯一判分点是黏土当时的状态。原文写 “impress these lines into the wet clay”，wet（湿的）与题干 the tablets were dry（干的）构成正面对立，属于事实冲突，因此判 FALSE。做判断题时要把题干中每一个具体修饰语（干、湿、冷、热、新、旧、容易、困难）都当作独立判分点逐字核对，本题抓住 wet 一词即可快速判定。",
          "analysis": "第 2 段（B 段）介绍楔形文字的书写方式：“The original cuneiform signs consisted of a series of lines – triangular, vertical, diagonal and horizontal. Sumerian writers would impress these lines into the wet clay with a stylus – a long, thin, pointed instrument which looked somewhat like a pen.”（最初的楔形文字符号由三角形、竖直、斜向和水平的线条组成。苏美尔书写者会用一根尖笔把这些线条压进湿黏土里，尖笔是一种细长的尖头工具，外形有点像钢笔）。题干把“往泥板上刻写”改写为 marked on the clay tablets，把书写者保留为 Sumerian writers，这部分对应无误；出错的地方在最后的状态词：原文明确写 the wet clay（湿黏土），题干却断言 the tablets were dry（泥板是干的）。湿与干互斥，原文给出了明确且相反的信息，按判断题规则应判 FALSE，而不是信息缺失的 NOT GIVEN。做题提醒：黏土制成泥板后通常会被晾干或烧硬，考生容易凭常识推断“刻写时当然是干的”，但雅思判断题只认原文，凡是靠背景知识补出来的结论都必须回到原句核对。",
          "traps": [
            "为什么不是 TRUE：原文用的是 “the wet clay”，明确说书写时黏土是湿的，与题干“泥板是干的（were dry）”相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：题干所问的“泥板当时的状态”原文已经正面交代（wet），信息存在只是与题干相反，属于事实冲突，按规则判 FALSE，而不是信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Cuneiform was often difficult to read because of its size.",
          "translation": "楔形文字常常因为其尺寸而难以辨识。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Oddly, the signs were often almost too small to see with the naked eye."
          },
          "synonyms": [
            "“often difficult to read” 同义替换为原文的 “were often almost too small to see with the naked eye”（常常小到肉眼几乎看不见）",
            "“because of its size” 同义替换为原文的 “too small”，即问题出在符号的尺寸太小",
            "“Cuneiform” 与原文的 “the signs” 指向同一对象，原文上句已说明楔形符号就是刻在黏土里的 marks or signs"
          ],
          "locatingTip": "定位：题干中的 size 与 read 都是抽象词，不适合做定位词；应改用原文独有的表述来锚定——第 2 段（B 段）第 4 句 “Oddly, the signs were often almost too small to see with the naked eye.” 是全文唯一讨论符号大小的地方。确定答案技巧：题干问“是否因为尺寸问题而难以辨识”，原文说符号“常常小到肉眼几乎看不见（almost too small to see with the naked eye）”，看不清即难以辨识，而导致看不清的原因正是 too small（尺寸太小），两处一一对应，故判 TRUE。注意题干用 difficult to read 这种概括表达，原文用 too small to see 这种具体描写，属于合理的同义概括，不能因为字面用词不同就误判。",
          "analysis": "第 2 段（B 段）在描述完线条形状与书写工具后写道：“Oddly, the signs were often almost too small to see with the naked eye.”（奇怪的是，这些符号常常小到肉眼几乎看不见）。题干的意思是“楔形文字常因尺寸问题而难以辨识”，对应关系为：difficult to read 对应 too small to see（看不清即读不了），because of its size 对应 too small（尺寸太小这一原因），often 在原文中原词复现。原文明确把“符号太小”与“肉眼看不见”联系起来，由此得出的结论正是“难以辨识”，信息方向完全一致，因此答案是 TRUE。做题提醒：题干把原文的具体描写 too small to see with the naked eye 抽象概括成 difficult to read，这是雅思阅读最常见的同义改写手段之一，判断时看“大意是否一致”即可，不必纠结字面差异；同时 almost too small 中的 almost 只是加强程度（几乎小到看不见），并未否定“小”这一事实，不能据此判 FALSE。",
          "traps": [
            "为什么不是 FALSE：原文明确写出 “too small to see with the naked eye”，即符号小到看不清，与题干“因尺寸而难以辨识”同向，没有任何相反信息。",
            "为什么不是 NOT GIVEN：题干涉及两件事——是否难读、是否因为尺寸，原文用 too small 与 to see with the naked eye 同时交代了原因和结果，信息完备，不属于未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "A number of languages adopted cuneiform.",
          "translation": "若干种语言采用了楔形文字。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Cuneiform signs were used for the writing of at least a dozen languages."
          },
          "synonyms": [
            "“A number of languages” 同义替换为原文的 “at least a dozen languages”（至少一打，即至少十二种语言）",
            "“adopted cuneiform” 同义替换为原文的 “Cuneiform signs were used for the writing of …”（楔形符号被用于书写这些语言），原文用被动语态表达“被采用”",
            "“cuneiform” 与原文的 “Cuneiform signs” 对应，signs 即文字符号本身"
          ],
          "locatingTip": "定位：题干的定位词是 languages，第 2 段（B 段）倒数第二句直接出现 “at least a dozen languages”，这是本段讨论楔形文字使用范围的地方，扫到 languages 就可以停下精读。确定答案技巧：本题的判分点是“有多少种语言使用了楔形文字”。原文说 “Cuneiform signs were used for the writing of at least a dozen languages”，at least a dozen 即“至少十二种”，与题干的 A number of（若干、好些）在方向上完全一致，都是“多”；而且 dozen 这一具体数量本身就排除了“只有一种”的可能。紧接着的拉丁字母类比进一步印证“一种文字系统被多种语言共用”，故判 TRUE。",
          "analysis": "第 2 段（B 段）末两句：“Cuneiform signs were used for the writing of at least a dozen languages. This is similar to how the Latin alphabet is used today for writing English, French, Spanish and German for example.”（楔形文字符号至少被用于书写十二种语言。这与今天用拉丁字母书写英语、法语、西班牙语和德语的情形类似）。题干说“若干种语言采用了楔形文字”，对应关系十分清晰：A number of languages 对应 at least a dozen languages，adopted cuneiform 对应 Cuneiform signs were used for the writing of（被动语态改写主动的“采用”）。原文用 at least 放宽下限、用 dozen 给出具体量级，明确指向“多种语言”；紧接的拉丁字母类比更把“一种书写系统服务多种语言”这一观点坐实，因此答案是 TRUE。做题提醒：本题与第 5 题同段相邻，第 5 题考的是同一句类比句的另一层含义（现代字母表里是否有楔形符号），两题必须分别回到各自的原句核对，不能互相牵连。",
          "traps": [
            "为什么不是 FALSE：原文说至少十二种语言使用楔形文字，属于“多种”，与题干“若干种语言采用”同向，不存在任何矛盾点。",
            "为什么不是 NOT GIVEN：原文给出了明确的数字下限（at least a dozen），并辅以拉丁字母用于多种语言的类比，正面回答了“有多少种语言使用”这一问题，属于已明确交代的信息。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Cuneiform signs can be found in some modern alphabets.",
          "translation": "在某些现代字母表中可以找到楔形文字符号。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "This is similar to how the Latin alphabet is used today for writing English, French, Spanish and German for example."
          },
          "synonyms": [
            "“modern” 同义替换为原文的 “today”，都指当代",
            "“alphabets” 对应原文的 “the Latin alphabet”，原文给出的是一个具体的现代字母系统",
            "原文只说楔形文字与拉丁字母的“使用方式相似（This is similar to how）”，没有任何“楔形符号出现在现代字母表中”的表述，题干中的 “Cuneiform signs can be found in” 在原文里找不到依据"
          ],
          "locatingTip": "定位：题干的落点是 modern alphabets，原文与之最接近的表述是第 2 段（B 段）末句的 “the Latin alphabet is used today”。确定答案技巧：这是典型的“类比被误读成包含”的陷阱题。原文只是说楔形文字被多种语言共用这一情形“与今天拉丁字母被用于书写英语、法语、西班牙语和德语类似”，比较的是使用方式，而不是符号本身；原文从未说现代字母表中含有楔形符号。题干把“使用情形相似”偷换成“现代字母表里能找到楔形符号”，这是原文没有提供的信息，因此判 NOT GIVEN。做题提醒：遇到 similar to、like、compare 这类比较词，一定要问清“比较的是什么”，比较对象之间相似并不等于彼此包含或同源。",
          "analysis": "第 2 段（B 段）末句：“This is similar to how the Latin alphabet is used today for writing English, French, Spanish and German for example.”（这与今天拉丁字母被用来书写英语、法语、西班牙语和德语的情形类似）。句中 This 回指的是上一句“楔形文字符号至少被用于书写十二种语言”，作者做的是一个功能层面的类比：一种书写系统被多种语言共用，古今同理。本类比句里与“现代”“字母表”相关的表述只有 today 与 the Latin alphabet 两处，二者都在句中充当参照物，既没有说拉丁字母脱胎于楔形符号，也没有说现代字母表中保留着楔形符号。题干却提出 “Cuneiform signs can be found in some modern alphabets（在某些现代字母表中可以找到楔形文字符号）”，这是一个关于符号谱系与留存的新命题，原文完全没有涉及，既无法由相似性推出，也没有相反证据，因此答案是 NOT GIVEN。做题提醒：NOT GIVEN 常常出现在“原文有相关词汇、但没有该命题”的情况下，本题的 modern 与 alphabets 都能在第 2 段找到，很容易造成题目已提及的错觉，一定要逐字核对原文究竟说了什么。",
          "traps": [
            "为什么不是 TRUE：原文只做了使用方式上的类比（一种文字系统供多种语言使用，古今相似），没有任何一句提到现代字母表里含有楔形符号，题干的核心命题在原文中没有依据，不能凭类比推断成 TRUE。",
            "为什么不是 FALSE：原文并未否认楔形符号与现代字母之间存在任何关联，也没有给出相反的说法；没有相反信息就不构成 FALSE，只能按信息缺失判 NOT GIVEN。"
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
          "stem": "tokens, for example, 6 ________ were often used",
          "translation": "例如，________ 常被当作代币使用。",
          "answer": "stones",
          "wordClass": "名词（复数；题干空格后的谓语是 were often used，主语须与其数一致，故填复数名词 stones，不加冠词）",
          "locating": {
            "paragraph": "3",
            "quote": "For example, they might take small stones and use them as tokens or representations of something else, like a goat."
          },
          "synonyms": [
            "“tokens, for example, … were often used” 对应原文的 “they might take small stones and use them as tokens”：原文先说“把小石头当作代币使用”，题干改写成“例如被用作代币的某物”",
            "“used as tokens” 同义替换为原文的 “use them as tokens or representations of something else”",
            "“were often used” 对应原文的 “use them as tokens”（被用来充当代币）；原文的 might 只表示这种做法的可能性，并不表示“常常”"
          ],
          "locatingTip": "定位：笔记第一小节的标题是 Before cuneiform（楔形文字出现之前），回原文找时间逻辑对应的段落，即讲 tokens（代币）的第 3 段（C 段）。确定答案技巧：题干问“例如什么东西常被用作代币”，句式为“名词复数加 were often used”，提示要填的是一个复数名词。原文第 3 段第 2 句 “For example, they might take small stones and use them as tokens or representations of something else, like a goat.” 直接给出对象 small stones：题干的 for example 与原文 For example 原词对应，use them as tokens 与 were used as tokens 同义，被当作代币使用的就是 small stones，取其名词中心词得 stones。填写时注意两点：只写一个词，small 只是修饰语，不能连写；答案须为复数 stones，以匹配题干的复数谓语 were。",
          "analysis": "第 3 段（C 段）讲楔形文字出现之前的记账方式：“Before the development of cuneiform, tokens were used by the Sumerians to record certain information. For example, they might take small stones and use them as tokens or representations of something else, like a goat.”（在楔形文字发展出来之前，苏美尔人用代币来记录某些信息。例如，他们可能拿一些小石头，把它们当作代币或别的东西的象征，比如一只山羊）。笔记第一小节标题 Before cuneiform 与原文首句的时间状语 Before the development of cuneiform 精确对应；笔记第一条“tokens, for example, [6] were often used”是把原文 “they might take small stones and use them as tokens” 重组后的形式：原文的宾语 them（即 small stones）在题干中提升为句子主语，use them as tokens 变成被动的 were used as tokens，剩下的核心信息就是“什么被用作代币”，即 small stones，取其名词中心词 stones。答案词性为可数名词复数，与题干谓语 were often used 数上一致；受 ONE WORD ONLY 限制不能写 small stones，只能写 stones。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "the first tokens were kept in containers made of 7 ________",
          "translation": "最早的代币被存放在用 ________ 制成的容器里。",
          "answer": "cloth",
          "wordClass": "名词（不可数，材料名；位于介词 of 之后作宾语，说明容器的材质，保持不可数形式 cloth，不加复数、不加冠词）",
          "locating": {
            "paragraph": "3",
            "quote": "These tokens might then be placed in a cloth container and provided to a buyer as a receipt for a transaction, perhaps five tokens for five animals."
          },
          "synonyms": [
            "“were kept in” 同义替换为原文的 “might then be placed in”（被放入、被存放于）",
            "“containers made of cloth” 同义替换为原文的 “a cloth container”：原文用名词作前置定语，题干改写为 made of 结构",
            "“the first tokens” 对应原文的 “These tokens”，回指前文最早使用的那批代币"
          ],
          "locatingTip": "定位：笔记第二条的关键词是 containers，回原文第 3 段（C 段）找与容器有关的句子，即 “These tokens might then be placed in a cloth container …”，这是全文第一次出现容器。确定答案技巧：题干问容器的材质（made of），原文用名词前置定语的形式写成 a cloth container，把材料信息挪到介词 of 之后即为 cloth。做本题要分清两条笔记的时间限制：第 7 题问 Before cuneiform 时期（最早）的容器，第 9 题问 By 4th century BCE 的容器；原文第 3 段说的是 cloth container（布制容器），第 4 段说的是 “made of clay instead of cloth”（改用黏土而非布），两处正好构成对比，选择时务必按笔记小标题的时间定位，不要把 clay 填到第 7 题。",
          "analysis": "第 3 段（C 段）中段写道：“These tokens might then be placed in a cloth container and provided to a buyer as a receipt for a transaction, perhaps five tokens for five animals.”（这些代币随后可能会被放进一个布制容器，作为交易收据交给买家，比如五只动物就对应五个代币）。题干“最早的代币被存放在用某种材料制成的容器里”，对应原文的 These tokens 与 a cloth container：These 回指最早那批小石子代币，placed in 对应 were kept in，容器 a cloth container 在题干中被改写为 containers made of [7]，材料信息从定语位置移到介词 of 之后，因此答案是 cloth。答案词性为材料名词，不可数，不加复数也不加冠词。做题提醒：第 4 段紧接着说新容器 “now made of clay instead of cloth”（现在用黏土而非布制成），这句话是第 9 题的答案依据，也正是本题最大的干扰项——务必按笔记小节的标题（Before cuneiform 与 By 4th century BCE）区分时间段，不要张冠李戴。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "tokens were used as a 8 ________ to give when selling something",
          "translation": "出售东西时，代币被当作交给对方的 ________ 使用。",
          "answer": "receipt",
          "wordClass": "名词（单数；空格前有不定冠词 a，指交易时交给买家的凭证，故填单数形式 receipt）",
          "locating": {
            "paragraph": "3",
            "quote": "provided to a buyer as a receipt for a transaction, perhaps five tokens for five animals."
          },
          "synonyms": [
            "“tokens were used as a receipt” 同义替换为原文的 “provided to a buyer as a receipt for a transaction”，即代币充当交易凭证",
            "“to give when selling something” 同义替换为原文的 “provided to a buyer”，give 对应 provided to，selling something 对应 a transaction",
            "“a receipt” 在原文中原词出现：“as a receipt for a transaction”"
          ],
          "locatingTip": "定位：笔记第三条的落点是“买卖中交给对方的凭证”，回原文第 3 段（C 段）找与交易、买家相关的部分，即 “provided to a buyer as a receipt for a transaction”。确定答案技巧：题干用 selling something 概括原文的 a transaction（交易），用 to give 概括 provided to a buyer（交给买家），而“代币在交易中充当的角色”原文用一个名词直接给出，即 as a receipt，其不定冠词 a 与题干完全一致，可据此确认填单数名词 receipt。注意区分同一句中的另外两个名词：container 是容器（第 7 题题干所问的对象，答案填的是材质 cloth）、animals 是被交易的对象，都不是题干所问的“凭证”。",
          "analysis": "第 3 段（C 段）：“These tokens might then be placed in a cloth container and provided to a buyer as a receipt for a transaction, perhaps five tokens for five animals.”（这些代币随后可能被放进一个布制容器，作为交易收据交给买家，比如五只动物对应五个代币）。笔记第三条“tokens were used as a [8] to give when selling something”正是对这句话的信息重组：tokens were used as 对应 provided … as，a [8] 对应 a receipt，to give 对应 provided to a buyer，when selling something 对应 for a transaction。原文的介词短语 as a receipt 已经把代币的功能说得很清楚——它就是交易时交给买方的凭证，因此答案是 receipt。答案词性为可数名词单数，空格前的不定冠词 a 提示了数的一致性。做题提醒：本句信息密度高，一句话里含多个可能的填词点（cloth、container、buyer、receipt），答题时要靠题干给出的语法框架（a 加名词单数、made of 加材料）和语义角色（谁交给谁、做什么用）逐一收窄范围，不要见到近义名词就填。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "tokens were put in a container that looked like a clay 9 ________",
          "translation": "代币被放进一个看起来像黏土做的 ________ 的容器里。",
          "answer": "envelope",
          "wordClass": "名词（单数；与前面的 clay 一起构成名词短语，指外形类似信封的容器，故填单数形式 envelope）",
          "locating": {
            "paragraph": "4",
            "quote": "They began putting tokens in a container resembling an envelope, and now made of clay instead of cloth."
          },
          "synonyms": [
            "“a container that looked like a …” 同义替换为原文的 “a container resembling …”，resembling 即 looked like",
            "“tokens were put in” 同义替换为原文的 “They began putting tokens in”",
            "“a clay envelope” 对应原文的 “a container resembling an envelope, and now made of clay”，即黏土做成、外形像信封的容器"
          ],
          "locatingTip": "定位：笔记第四条的标题是 By 4th century BCE，回原文找相同的时间状语 “By the 4th century BCE”，即第 4 段（D 段）首句，其后第 2 句正是本题的定位句。确定答案技巧：题干结构是 “a container that looked like a clay [9]”，形容词 clay 直接修饰空格词，说明要填的是一个“外形名称”类的名词。原文说 “a container resembling an envelope, and now made of clay instead of cloth”，resembling an envelope 对应 looked like a(n) …，made of clay 对应 clay 这一前置修饰语，空格要填的就是被比作外形的那个东西，即 envelope（信封）。注意原文说的是容器“形似信封”而非真的是信封，答案照抄 envelope 即可，并且限一个词。",
          "analysis": "第 4 段（D 段）：“By the 4th century BCE, the Sumerians had adapted this system to a form of writing. They began putting tokens in a container resembling an envelope, and now made of clay instead of cloth.”（到公元前 4 世纪，苏美尔人已把这一系统改造成一种书写形式。他们开始把代币放进一种形似信封的容器里，容器此时用黏土做成，而不再用布）。笔记第四条“tokens were put in a container that looked like a clay [9]”与原文第 2 句一一对应：putting tokens in 对应 were put in，a container resembling 对应 a container that looked like，made of clay 对应 clay 这一修饰语，因此空格填 envelope。从词性看，空格与 clay 一起构成被 looked like 支配的名词短语，需要可数名词单数，envelope 符合要求。做题提醒：第 7 题与本题构成一组对照——前期用布制容器（cloth container），公元前 4 世纪改用黏土制的形似信封的容器（a container resembling an envelope, and now made of clay）；笔记用 Before cuneiform 和 By 4th century BCE 两个小标题划清时间，答题时务必按各自标题回原文核对，切勿把 cloth 与 clay 的位置互换。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "at first, signs looked like what they indicated, e.g. 10 ________",
          "translation": "起初，符号看起来就像它们所指的事物，例如 ________。",
          "answer": "sheep",
          "wordClass": "名词（单数；用于举例之后指代具体事物，指绵羊，故填单数形式 sheep；该词单复数同形）",
          "locating": {
            "paragraph": "5",
            "quote": "For example, an image which resembled the drawing of a sheep meant just that."
          },
          "synonyms": [
            "“signs looked like what they indicated” 同义替换为原文的 “an image which resembled the drawing of a sheep meant just that”，即符号的样子与所指事物一致",
            "“e.g.” 同义替换为原文的 “For example”，属原词对应",
            "“at first” 同义替换为原文的 “When first developed, each symbol looked like the concrete thing it represented”"
          ],
          "locatingTip": "定位：笔记第五小节讲 Complex, abstract symbols developed（复杂抽象符号的发展），对应原文第 5 段（E 段），该段首句 “Gradually, Sumerians developed symbols for words.” 与笔记小标题直接呼应。确定答案技巧：题干说“起初符号看起来就像它们所指的事物，例如 ……”，其中 at first 对应原文的 When first developed，举例信号 e.g. 对应原文的 For example，紧跟其后的名词就是举例对象——an image which resembled the drawing of a sheep，答案是 sheep。填词时注意：名词中心词是 sheep，前面的 drawing 指所画的形象，不是被指代的事物本身；受 ONE WORD ONLY 限制只能写一个词。",
          "analysis": "第 5 段（E 段）开头：“Gradually, Sumerians developed symbols for words. When first developed, each symbol looked like the concrete thing it represented. For example, an image which resembled the drawing of a sheep meant just that.”（苏美尔人逐渐为词语发展出符号。最初发展出来时，每个符号看起来就像它所代表的那个具体事物。例如，一幅像绵羊图案的图像表示的就是绵羊）。笔记的表述“at first, signs looked like what they indicated, e.g. [10]”正是这段话的浓缩：at first 对应 When first developed，signs looked like what they indicated 对应 each symbol looked like the concrete thing it represented，e.g. 对应 For example，而所举的例子就是 an image which resembled the drawing of a sheep，取其名词中心词得 sheep。从词性看，空格是举例部分的具体事物名称，需要可数名词；sheep 单复数同形，直接照抄原文即可。做题提醒：本段随后讲抽象化过程（intangible ideas such as female or hot or God），还提到 h-o-u-s-e 与三角形符号，那些内容是第 11 题的依托，与第 10 题“最初的具体形象”分属两个阶段，答题时不要越读越远。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "eventually, cuneiform signs shaped like 11 ________ were developed",
          "translation": "最终，发展出了形状像 ________ 的楔形文字符号。",
          "answer": "triangles",
          "wordClass": "名词（复数；与 shaped like 搭配表示符号的形状，原文用的是复数形式 triangles，照抄复数）",
          "locating": {
            "paragraph": "5",
            "quote": "At this last stage in the evolution of cuneiform, the signs took the form of triangles, which became common cuneiform signs."
          },
          "synonyms": [
            "“shaped like” 同义替换为原文的 “took the form of”（呈现……的形状）",
            "“eventually” 同义替换为原文的 “At this last stage in the evolution of cuneiform”（在楔形文字演变的最后阶段）",
            "“cuneiform signs” 在原文中复现：“which became common cuneiform signs”"
          ],
          "locatingTip": "定位：题干关键词 eventually 与 shaped like 对应原文 “At this last stage in the evolution of cuneiform”（在楔形文字演变的最后阶段），落在第 5 段（E 段）末句，这是本段最后也是唯一交代符号最终形状的地方。确定答案技巧：判分点是符号最后变成了什么形状。原文说 “the signs took the form of triangles”，took the form of 与题干的 shaped like 同义，形状名称就是 triangles；该句后半 “which became common cuneiform signs” 又与题干的 cuneiform signs 原词呼应，进一步确认落点无误。答案写复数 triangles，与原文保持一致，且为一个词。",
          "analysis": "第 5 段（E 段）末两句：“Over the centuries, the marks became ever more abstract, finally evolving into signs that looked nothing like what they referred to, just as the letters 'h-o-u-s-e' have no visual connection to the place we live in. At this last stage in the evolution of cuneiform, the signs took the form of triangles, which became common cuneiform signs.”（几个世纪间，这些符号变得越发抽象，最终演变成与所指事物毫不相似的符号，就像字母 h-o-u-s-e 与我们居住的地方毫无视觉关联一样。在楔形文字演变的这一最后阶段，符号呈现为三角形，三角形也成为常见的楔形文字符号）。笔记最后一条“eventually, cuneiform signs shaped like [11] were developed”对应后半句：eventually 对应 At this last stage in the evolution，shaped like 对应 took the form of，cuneiform signs 在 which 从句中原词出现，空格应填 triangles。从词性看，形状类名词在此为可数名词复数（对应符号整体的复数形式与常见符号的类别），照抄原文的 triangles 即可。做题提醒：本段还有一处易混信息——字母 h-o-u-s-e 只是用来说明“符号与所指事物失去视觉联系”的类比，并不是符号的形状，切勿误填 house。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "according to experts, cuneiform was mainly used for 12 ________",
          "translation": "据专家所言，楔形文字主要用于 ________。",
          "answer": "accounting",
          "wordClass": "名词（不可数，指记账这一用途；位于介词 for 之后作宾语，保持不可数形式 accounting，不加复数、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "However, most linguists and historians agree cuneiform developed primarily as a tool for accounting."
          },
          "synonyms": [
            "“according to experts” 同义替换为原文的 “most linguists and historians agree”（多数语言学家和历史学家一致认为）",
            "“mainly used for” 同义替换为原文的 “developed primarily as a tool for”，primarily 对应 mainly，used for 对应 as a tool for",
            "“accounting” 在原文介词 for 之后原词出现：“a tool for accounting”"
          ],
          "locatingTip": "定位：题干的关键词是 experts（专家）与 mainly used for，回原文找权威人士的观点句，即第 6 段（F 段）的 “most linguists and historians agree cuneiform developed primarily as a tool for accounting”，句中 linguists and historians 正是题干 experts 的具体化。确定答案技巧：题干问“主要用途”，原文对应表达是 developed primarily as a tool for，其中 primarily（主要地）与题干的 mainly 同义，介词 for 之后需要名词或动名词作宾语，即 accounting（记账）。答完可用紧随其后的数据句验证：“about 75 percent contain this type of practical information, rather than artistic or imaginative work”，75% 的泥板载有这类实用信息而非文艺作品，正好支撑“主要用于记账”的结论。答案写 accounting 一个词，不要写 account。",
          "analysis": "第 6 段（F 段）中后段：“However, most linguists and historians agree cuneiform developed primarily as a tool for accounting. Of the cuneiform tablets that have been discovered, excavated and translated, about 75 percent contain this type of practical information, rather than artistic or imaginative work.”（不过，多数语言学家和历史学家一致认为，楔形文字主要是作为记账工具发展起来的。在已经发现、发掘并译读的楔形文字泥板中，约 75% 载有这类实用信息，而非艺术或想象性作品）。笔记该条“according to experts, cuneiform was mainly used for [12]”对应原文的判断句：according to experts 对应 most linguists and historians agree，mainly 对应 primarily，used for 对应 as a tool for，空格填 accounting。从词性看，介词 for 后接名词或动名词，accounting 在此为不可数的动名词化名词，不加冠词也不变复数。做题提醒：同一段前面还谈到楔形文字随社会变复杂而需要表达更多概念（more ideas and concepts that needed to be expressed），那是系统变得复杂的背景原因，不是它的主要用途；作者用 However 转折后给出的 accounting 才是本题要答的结论性信息，而 75 percent 的数据句就是最有力的佐证。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Rawlinson copied inscriptions onto 13 ________",
          "translation": "罗林森把铭文拓印到了 ________ 上。",
          "answer": "paper",
          "wordClass": "名词（不可数，材料名；位于介词 onto 之后作宾语，指拓印所用的载体，保持不可数形式 paper，不加复数、不加冠词）",
          "locating": {
            "paragraph": "7",
            "quote": "Rawlinson made impressions of the marks on large pieces of paper, as he balanced dangerously on the surrounding rocks."
          },
          "synonyms": [
            "“copied inscriptions” 同义替换为原文的 “made impressions of the marks”（为这些符号制作拓印）",
            "“onto” 同义替换为原文的 “on large pieces of paper”，即拓印落在纸上",
            "“Rawlinson” 在原文中原词出现：“Rawlinson made impressions of the marks on large pieces of paper”"
          ],
          "locatingTip": "定位：笔记最后一节的小标题是 19th-century translation of cuneiform inscriptions by Henry Rawlinson，人名 Rawlinson 是极佳的大写定位词，出现在第 7 段（G 段）末与第 8 段（H 段）首。本题问“把铭文拓印到什么上面”，对应第 7 段末句 “Rawlinson made impressions of the marks on large pieces of paper”。确定答案技巧：题干动词 copied（拓印、复制）对应原文 made impressions of（制作拓片），介词 onto 提示要填的是拓印的载体，原文介词 on 之后的 large pieces of paper 中，名词中心词就是 paper。填写时只写 paper 一个词，不要写 pieces of paper（超出词数），也不要写 impressions（那是拓印本身，不是承载体）。",
          "analysis": "第 7 段（G 段）末：“In the late 19th century, a British army officer, Henry Rawlinson, discovered cuneiform inscriptions which had been carved in the surface of rocks in the Behistun mountains in what is present-day Iran. Rawlinson made impressions of the marks on large pieces of paper, as he balanced dangerously on the surrounding rocks.”（19 世纪晚期，英国军官 Henry Rawlinson 在现今伊朗境内的贝希斯敦山岩石表面发现了刻写的楔形文字铭文。他危险地站在周围的岩石上，把那些符号拓印到大张的纸上）。笔记最后一条“Rawlinson copied inscriptions onto [13]”正是对末句的信息重组：copied 对应 made impressions of，inscriptions 对应 the marks，onto 对应 on，载体就是 large pieces of paper，取名词中心词得 paper。从词性看，介词 onto 后接名词，paper 在此为不可数名词，不加冠词也不变复数。做题提醒：本句还有 on the surrounding rocks（站在周围的岩石上）这一介词短语，容易被误当作拓印的载体；判断时要抓住动词搭配与语义——他做的是“符号的拓片”，拓片落在纸上，岩石只是他身体的立足处。遇到同类结构务必看清各个介词短语分别修饰哪个动作。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
