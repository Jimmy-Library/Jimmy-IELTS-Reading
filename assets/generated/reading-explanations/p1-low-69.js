(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-69", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-69",
  "meta": {
    "examId": "p1-low-69",
    "title": "An important language development 楔形文字",
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
            "quote": "It was most often inscribed on palm-sized, rectangular clay tablets measuring several centimetres across, although occasionally larger tablets or cylinders were used."
          },
          "synonyms": [
            "“different shapes and sizes” 同义替换为原文的 “palm-sized, rectangular clay tablets” 与 “larger tablets or cylinders”：前者是掌上大小、长方形的泥板，后者是更大的泥板和圆柱形泥板，形状与尺寸都不相同",
            "“were produced” 在原文中体现为 “inscribed on … clay tablets”，泥板作为书写载体被制作并用于书写",
            "“most often” 与原文的 “occasionally” 构成常规与例外的对比，正是这种对比说明形制并不单一"
          ],
          "locatingTip": "定位：题干首词 Cuneiform 与本段主题词一致，tablets 一词在第 1 段第 2 句原词出现，扫读首段即可锁定。确定答案技巧：判断“是否多样”要抓住原文的让步对比结构 “most often … although occasionally …”：most often 给出常见形制（palm-sized, rectangular，宽几厘米），although occasionally 引出少数例外（larger tablets or cylinders）。大小上有 palm-sized 与 larger 之别，形状上有 rectangular tablets 与 cylinders 之别（长方形泥板与圆柱形泥板），两个维度都对应题干的 different shapes and sizes，故判 TRUE。",
          "analysis": "第 1 段第 2 句：“It was most often inscribed on palm-sized, rectangular clay tablets measuring several centimetres across, although occasionally larger tablets or cylinders were used.”（它最常被书写在掌上大小、宽几厘米的长方形黏土泥板上，不过偶尔也会使用更大的泥板或圆柱形泥板）。原文先把最常见的形制交代清楚——掌上大小、长方形、几厘米宽，随后用 although occasionally 补充另一种情况：更大的泥板以及圆柱形泥板。题干说泥板“被制成不同的形状和尺寸（different shapes and sizes）”，恰好概括了这两层信息：尺寸上存在 palm-sized 与 larger 的差别，形状上存在长方形泥板与圆柱形泥板的差别。原文没有出现任何与题干相反的说法，而“不同形状与尺寸”这一概括又有具体证据支撑，因此答案是 TRUE。做这类题时，重点看原文有没有让步或列举结构（although、occasionally、or），这类结构往往就是把“单一”变成“多样”的关键。",
          "traps": [
            "为什么不是 FALSE：原文的 “although occasionally larger tablets or cylinders were used” 明确给出了与常规长方形掌上泥板不同的另一种形制，说明泥板在大小与形状上确有变化，与题干方向一致，不存在矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对尺寸（palm-sized、measuring several centimetres across、larger）和形状（rectangular clay tablets 与 cylinders）都有明确交代，属于信息充分且正面支持题干，不是“没有提及”。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "When Sumerian writers marked the clay tablets, the tablets were dry.",
          "translation": "当苏美尔书写者在泥板上刻写时，泥板是干燥的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Sumerian writers would impress these lines into the wet clay with a stylus—a long, thin, pointed instrument which looked somewhat like a pen."
          },
          "synonyms": [
            "“Sumerian writers” 在原文中原词复现，是本题最直接的定位词",
            "“marked the clay tablets” 同义替换为原文的 “impress these lines into the … clay”（把线条压印进黏土里）",
            "“the tablets were dry” 与原文的 “the wet clay” 形成正面对立：原文明确交代黏土是湿的"
          ],
          "locatingTip": "定位：民族名/人称 Sumerian writers 是专门名词，第 2 段第 3 句出现，题干关键词 marked the clay 也落在同一句，一次精读即可解决。确定答案技巧：本题的判断点是一个状态形容词——dry（干的）。作答时不必通读全段，只要回到原文核对这个状态词：原文写的是 “impress these lines into the wet clay”，wet（湿的）与 dry（干的）恰好相反，属于事实层面的直接冲突，故判 FALSE。这也符合常识：线条是压印进湿黏土的，干泥板根本无法压出线条，原文与常识互相印证。",
          "analysis": "第 2 段第 3 句：“Sumerian writers would impress these lines into the wet clay with a stylus—a long, thin, pointed instrument which looked somewhat like a pen.”（苏美尔书写者会用笔杆把这些线条压印进湿黏土中，笔杆是一种细长的尖头工具，外形有点像钢笔）。句中 “into the wet clay” 说明书写动作发生时黏土处于湿润状态；破折号后的部分只是解释 tool（stylus，笔杆）的形制，与泥板干湿无关。题干却把泥板的状态写成 “the tablets were dry”，与原文的 wet 完全相反。判断 TRUE / FALSE / NOT GIVEN 时，形容词与状态词是高频考点，一旦题干给出的是一个具体状态，就一定要在原文里找到该状态词，看它是否被肯定、被否定，还是根本没提。本题原文明确肯定的是 wet，因此题干属于与原文矛盾，选 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确说线条被压进 “the wet clay（湿黏土）”，即书写时泥板是潮湿的，题干却断言泥板是干的，与原文事实相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对黏土状态有明确交代（wet），并非没有提及干湿问题；既然存在与题干相反的信息，就应按规则判 FALSE。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Cuneiform was often difficult to read because of its size.",
          "translation": "楔形文字常常因其尺寸（过小）而难以辨认。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Oddly, the signs were often almost too small to see with the naked eye."
          },
          "synonyms": [
            "“difficult to read” 同义替换为原文的 “almost too small to see with the naked eye”（几乎小到肉眼看不见，自然也就难以辨认）",
            "“because of its size” 同义替换为原文的 “too small”，问题的根源被明确归结为尺寸",
            "“often” 在原文与题干中同时出现（the signs were often almost too small）"
          ],
          "locatingTip": "定位：题干关键词 difficult to read 属于抽象概括，不好直接搜；改抓 size 与 often，回第 2 段找与“符号大小、能否看见”有关的句子，即以 Oddly 开头的那句，它是全段唯一谈论尺寸的句子。确定答案技巧：看清“难以辨认”的原因——原文用 almost too small to see with the naked eye 把问题归因于符号太小，与题干 because of its size 的因果关系相同；题干的 often 与原文的 often 原词吻合，说明频率也一致，故判 TRUE。注意原文说的是 signs（符号）小，而不是泥板小；题干用 Cuneiform 概括这一现象，范畴略有放大但结论方向一致，不影响判断。",
          "analysis": "第 2 段第 4 句：“Oddly, the signs were often almost too small to see with the naked eye.”（奇怪的是，这些符号常常小到几乎无法用肉眼看清楚）。句子以 Oddly（奇怪地）起头，正是要强调“尺寸过小、难以看清”这一反常特征：almost too small to see with the naked eye 直译是“几乎小到肉眼看不见”，其后果自然是书写和辨认都很困难。题干把它概括为 “often difficult to read because of its size”，其中 often 对应原文的 often，difficult to read 对应 almost too small to see，because of its size 对应 too small。三处对应关系一一吻合，原文没有任何相反或缺失的信息，因此答案是 TRUE。做题提示：当题干把原文的“结果描述”（看不清）改写为“功能描述”（难以辨认）时，只要因果关系和程度没有被夸大，就属于合理同义改写，应判 TRUE；但要警惕把 almost（几乎）夸大为完全看不见的表述。",
          "traps": [
            "为什么不是 FALSE：原文用 Oddly 强调符号小到肉眼几乎看不清，方向与“难以辨认”一致，原文并没有说楔形文字容易辨认，因此不存在矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对符号的尺寸与可见度都有明确交代，题干只是对其做同义概括，信息并不缺失，也不属于臆造。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "A number of languages adopted cuneiform.",
          "translation": "有相当多的语言采用了楔形文字。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Cuneiform signs were used for the writing of at least a dozen languages."
          },
          "synonyms": [
            "“A number of languages” 同义替换为原文的 “at least a dozen languages”（至少一打，即十几种语言）",
            "“adopted cuneiform” 同义替换为原文的 “Cuneiform signs were used for the writing of … languages”，原文是被动“被用于书写”，题干改为主动“采用”",
            "“This is similar to how the Latin alphabet is used today for writing English, French, Spanish and German, for example.” 用拉丁字母服务多种语言作类比，进一步支持“一种文字被多种语言共用”"
          ],
          "locatingTip": "定位：题干关键词 languages 与 cuneiform 都不难认，第 2 段倒数第二句直接出现 “at least a dozen languages”，属一步定位。确定答案技巧：本题判分点在数量表达。a dozen 指“一打（十二个）”，at least a dozen 即至少十二种，“at least + 数量”正好对应题干的 A number of（若干、许多）；“were used for the writing of … languages” 与 adopted cuneiform 是同一事实的被动与主动两种说法，语义方向一致，故选 TRUE。注意不要望文生义把 A number of 理解成“一个编号”，也不要因为题干泛指（a number of）而原文具体（at least a dozen）就判错——具体数字概括为“若干、许多”属于合理同义替换。",
          "analysis": "第 2 段倒数第二句：“Cuneiform signs were used for the writing of at least a dozen languages.”（楔形文字符号曾被用于至少十几种语言的书写），紧接着一句是 “This is similar to how the Latin alphabet is used today for writing English, French, Spanish and German, for example.”（这与今天拉丁字母被用来书写英语、法语、西班牙语和德语的情况类似）。两句连读，作者先给出数量事实——至少十几门语言使用楔形文字，再用拉丁字母服务英语、法语、西班牙语、德语的现象作类比，强调“一种书写系统被多种语言共享”这一特点。题干把它概括为 “A number of languages adopted cuneiform”，数量上 a number of 与 at least a dozen 相符，动作上 adopted（采用）与 were used for the writing of（被用于书写）是同一关系的两种语态表达，因此答案是 TRUE。做题提醒：原文的 at least 说明实际数量可能更多，题干用模糊量词 a number of 保守概括，不会造成程度冲突，反而与 at least 的语气相容。",
          "traps": [
            "为什么不是 FALSE：原文明确说楔形文字符号服务至少十几种语言，数量众多，与题干“多种语言采用楔形文字”完全一致，找不到任何矛盾点。",
            "为什么不是 NOT GIVEN：原文既给出数量（at least a dozen languages），又用拉丁字母的例子说明这种现象，信息充分且明确，属于已提及且支持题干，而非未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Cuneiform signs can be found in some modern alphabets.",
          "translation": "在一些现代字母表中可以找到楔形文字的符号。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "This is similar to how the Latin alphabet is used today for writing English, French, Spanish and German, for example."
          },
          "synonyms": [
            "原文的 “the Latin alphabet” 只是被拿来与楔形文字作类比的现代字母表，原文并未说楔形文字符号进入了任何现代字母表",
            "“can be found in some modern alphabets” 在原文中没有任何对应表达：原文谈到现代文字时只说两者“相似（is similar to）”，相似的是使用方式，不是符号本身",
            "原文第 5 段的 “signs that looked nothing like what they referred to” 说明楔形文字符号最终演变成为与所指事物毫无相似之处的抽象形状，与“出现在现代字母表中”无关"
          ],
          "locatingTip": "定位：题干关键词 modern alphabets 在全文只与第 2 段末尾的 the Latin alphabet 相关，锁定该句即可。确定答案技巧：要区分“类比”与“事实陈述”。原文用 “This is similar to how the Latin alphabet is used today …” 属于打比方，说的是“一种书写系统服务多种语言”这一现象相似，讨论对象是使用方式，而不是符号的形制或传承。原文既没有说楔形文字符号被现代字母表沿用，也没有说没有被沿用，属于信息缺失，故判 NOT GIVEN。切忌看到 Latin alphabet 就把“现代字母表”与“楔形文字符号”强行连线——这正是本题设置的陷阱。",
          "analysis": "第 2 段最后两句：“Cuneiform signs were used for the writing of at least a dozen languages. This is similar to how the Latin alphabet is used today for writing English, French, Spanish and German, for example.”（楔形文字符号曾被用于至少十几种语言的书写。这与今天拉丁字母被用来书写英语、法语、西班牙语和德语的情况类似）。这里的 This is similar to 明确标示出这是类比句：作者关心的是“同一种文字被多种语言共用”这一共性，与 symbols 的形体无关。题干却把话题换成了“楔形文字的符号能否在一些现代字母表中找到”，这是一种关于符号传承关系的新陈述。原文没有任何语句谈及楔形文字符号与现代字母表的传承或收录关系——既没有肯定（因此不是 TRUE），也没有否定（因此不是 FALSE），按判断题规则只能判 NOT GIVEN。答题经验：原文出现的类比对象（如拉丁字母）常被用来制造“似乎提到过”的错觉，判断时务必回到陈述本身的主语和谓语，看原文是否真的就这一点作出交代。",
          "traps": [
            "为什么不是 TRUE：原文的 similarity 说的只是“一种文字被多种语言使用”这一现象的相似，并未声称楔形文字的符号出现在任何现代字母表中；把类比关系误读为符号传承，是超范围的推断。",
            "为什么不是 FALSE：原文没有出现任何否认楔形文字符号出现在现代字母表中的表述，只是完全没有涉及这一点。没有相反信息就不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
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
          "translation": "代币，例如 ________（石头），常被使用。",
          "answer": "stones",
          "wordClass": "名词（复数；指多块小石子，原文用复数 small stones，与复数谓语 were used 保持一致，故填复数形式）",
          "locating": {
            "paragraph": "3",
            "quote": "For example, they might take small stones and use them as tokens or representations of something else, like a goat."
          },
          "synonyms": [
            "“tokens … were often used” 同义替换为原文的 “tokens were used by the Sumerians to record certain information”",
            "“for example” 在原文中原词复现（“For example, they might take small stones …”）",
            "“small stones” 是原文给出的具体例证：他们会用小石子来充当代币，代表别的东西（如一只山羊）"
          ],
          "locatingTip": "定位：笔记小标题 Before cuneiform 与第 3 段首句 “Before the development of cuneiform” 对应，题干信号词 for example 在该段第 2 句原词出现，一步锁定。确定答案技巧：题干结构是“tokens, for example, 空格 were often used”，空格要填的是原文中“举例说明可充当代币的东西”。原文 “they might take small stones and use them as tokens” 说明石子被拿来当代币用，与题干的 for example 严丝合缝，故填 stones。注意两点：一是 ONE WORD ONLY，只写 stones，不能写 small stones；二是复数，原文用复数 small stones，谓语也是复数，写 stone 会因单复数不符失分。",
          "analysis": "第 3 段前两句：“Before the development of cuneiform, tokens were used by the Sumerians to record certain information. For example, they might take small stones and use them as tokens or representations of something else, like a goat.”（在楔形文字出现之前，苏美尔人用代币来记录某些信息。例如，他们可能会拿小石子当作代币，或用来代表其他东西，比如山羊）。题干把这段内容压缩成笔记形式“tokens, for example, 6 ________ were often used”，句式主语仍是 tokens，for example 之后紧跟的正是原文举例中的名词 small stones，因此空格答案是 stones。判定时抓住三点：①笔记的时间提示 Before cuneiform 对应原文的 Before the development of cuneiform；②for example 是原文原词，说明答案必在举例句中；③空格处于主语位置且谓语为复数 were，需要的是复数名词 stones。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "the first tokens were kept in containers made of 7 ________",
          "translation": "最早的代币被存放在用 ________（布）制成的容器里。",
          "answer": "cloth",
          "wordClass": "名词（不可数，材料名；作 made of 的宾语，保持原文形式，不加冠词也不变复数）",
          "locating": {
            "paragraph": "3",
            "quote": "These tokens might then be placed in a cloth container and provided to a buyer as a receipt for a transaction, perhaps five tokens for five animals."
          },
          "synonyms": [
            "“containers” 同义替换为原文的 “a cloth container”：原文用名词 cloth 作前置定语，题干改写为 “made of …” 的后置结构",
            "“were kept in” 同义替换为原文的 “might then be placed in”（被放进某容器中）",
            "“cloth” 是原文直接给出的材料名，位于 container 之前作定语"
          ],
          "locatingTip": "定位：笔记小标题 Before cuneiform 之下第二条备注谈“存放代币的容器”，回第 3 段找 container 一词，落在第 4 句 “These tokens might then be placed in a cloth container”。确定答案技巧：原文用名词前置定语 cloth container 表达材料，题干把它改写成后置结构 “made of 空格”，信息位置变了但内容不变，因此填 cloth。作答时注意区分同一篇里的两种容器材料：第 3 段讲更早阶段的容器是 cloth（布）做的，第 4 段讲公元前 4 世纪改用黏土（clay）做的信封形容器，clay 属于第 9 题所在的“By the 4th century BCE”那一栏，两题不可混淆。答案按原文写不可数名词 cloth。",
          "analysis": "第 3 段第 3、4 句：“A number of tokens, then, might mean a herd of goats. These tokens might then be placed in a cloth container and provided to a buyer as a receipt for a transaction, perhaps five tokens for five animals.”（若干代币可能表示一群山羊。这些代币随后会被放进一个布做的容器里，交给买方作为交易的凭证，比如五枚代币对应五只牲畜）。笔记条目的结构是“最早期的代币被放在某种材料做的容器里”，提示词 containers 与原文的 container 同源，made of 则把原文的定语位置改写成了补语位置，空格所需的正是材料名 cloth。这里还要注意原文的时间顺序：cloth container 属于“楔形文字出现之前（Before cuneiform）”的阶段；到了第 4 段 “By the 4th century BCE”，容器改成用黏土（clay）做的信封形状，作者用 instead of cloth 明确做了新旧对比，因此本题只能填 cloth，不能填 clay。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "tokens were used as a 8 ________ to give when selling something",
          "translation": "代币被用作一种在出售东西时交给对方的 ________（收据）。",
          "answer": "receipt",
          "wordClass": "名词（可数名词单数；前面有不定冠词 a，指“收据、凭证”）",
          "locating": {
            "paragraph": "3",
            "quote": "provided to a buyer as a receipt for a transaction, perhaps five tokens for five animals."
          },
          "synonyms": [
            "“used as a receipt” 同义替换为原文的 “provided to a buyer as a receipt”，as a receipt 的结构完全一致",
            "“when selling something” 同义替换为原文的 “for a transaction”（为一笔交易），也呼应下文 “five tokens for five animals”（五枚代币换五只牲畜）",
            "“to give” 对应原文的 “provided to a buyer”，都是把凭证交给买方"
          ],
          "locatingTip": "定位：笔记这一条讲代币的功能，关键词 receipt 的概念集中在第 3 段第 4 句 “provided to a buyer as a receipt for a transaction”，与第 7 题同句，定位时继续停留在该句即可。确定答案技巧：题干说代币被当作“某种东西”交给买方（as a 空格 to give），原文用 as a receipt 明确给出这个身份，二者结构相同；题干把 when selling something 概括了 of a transaction 的含义，交易与买卖是一回事。所有信息点都对上，故填 receipt。语法上空格前有不定冠词 a，receipt 是可数名词单数，直接按原文拼写填入；不要填 transaction（那是交易的场合，不是代币充当的东西）。",
          "analysis": "第 3 段第 4 句：“These tokens might then be placed in a cloth container and provided to a buyer as a receipt for a transaction, perhaps five tokens for five animals.”（这些代币会被放进布做的容器里，交给买方作为交易的凭证，比如五枚代币对应五只牲畜）。笔记条目把这句话里的功能信息提取出来：“tokens were used as a 8 ________ to give when selling something”。原文用 as a receipt for a transaction 说明代币的功能相当于“交易凭证”，题干把它概括为 “as a … to give when selling something（在售卖时交给对方的……）”，其中 when selling something 对应 for a transaction，to give 对应 provided to a buyer，空格便是 receipt 一词。原文紧接着还补充 “perhaps five tokens for five animals”，用一个具体例子说明凭证与实物的一一对应关系，进一步印证 receipt 的功能含义。注意答案只写一个词 receipt，不要写成 receipts 或 a receipt。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "tokens were put in a container that looked like a clay 9 ________",
          "translation": "代币被放进一个外形像黏土 ________（信封）的容器中。",
          "answer": "envelope",
          "wordClass": "名词（可数名词单数；受 a clay 修饰，指“信封”形的容器）",
          "locating": {
            "paragraph": "4",
            "quote": "They began putting tokens in a container resembling an envelope, one made of clay instead of cloth."
          },
          "synonyms": [
            "“a container that looked like” 同义替换为原文的 “a container resembling”（resembling 即“看起来像”）",
            "“a clay envelope” 与原文 “a container resembling an envelope, one made of clay instead of cloth” 对应：envelope 是外形，clay 是材料",
            "“were put in” 同义替换为原文的 “began putting tokens in”，都表示把代币放进容器"
          ],
          "locatingTip": "定位：笔记小标题 By the 4th century BCE 与第 4 段开头的时间状语一致，题干关键词 container、clay 都集中在该段第 2 句，一次精读即可。确定答案技巧：题干把原文分散表达的两条信息合并成一个名词短语——“外形像信封（resembling an envelope）”和“材质是黏土（made of clay）”，压缩成 “a clay 空格”，空格承担的是外形名词 envelope。判定时注意原文的 instead of cloth 是关键提示：黏土容器是取代布容器的新版本，说明这里对应的是 4 世纪 BCE 那一栏，不能填第 7 题的 cloth，也不能填 container 本身。答案按原文写 envelope。",
          "analysis": "第 4 段前两句：“By the 4th century BCE, the Sumerians had adapted this system to a form of writing. They began putting tokens in a container resembling an envelope, one made of clay instead of cloth.”（到公元前 4 世纪，苏美尔人已把这一体系改造成一种书写形式。他们开始把代币放进一个像信封一样的容器里，这种容器是用黏土而不是布做的）。这里原文给出两个信息点：容器外形类似 envelope（信封），材质是 clay（黏土）。笔记条目把它们并合成 “a container that looked like a clay 9 ________”，形容词 clay 已经提供了材质，空格只剩外形名词，故填 envelope。题目设计上，原文的 “instead of cloth” 既是与第 3 段布容器的对比，也是防止考生误填 cloth 的干扰项：第 7 题对应更早的阶段，第 9 题对应 By the 4th century BCE 的阶段，两题的时间栏不同、材料也不同。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "at first, signs looked like what they indicated, e.g. 10 ________",
          "translation": "起初，符号看起来就像它们所指代的事物，例如 ________（羊）。",
          "answer": "sheep",
          "wordClass": "名词（单数，可数；原文 sheep 单复数同形，此处指“一只羊”，与 “an image which resembled the drawing of a sheep” 一致）",
          "locating": {
            "paragraph": "5",
            "quote": "For example, an image which resembled the drawing of a sheep meant just that."
          },
          "synonyms": [
            "“signs looked like what they indicated” 同义替换为原文的 “an image which resembled the drawing of a sheep meant just that”，resembled 对应 looked like，meant just that 对应 indicated",
            "“at first” 同义替换为原文的 “When first developed, each symbol looked like the concrete thing it represented.”",
            "“e.g.” 对应原文的 “For example”，是举例的信号词"
          ],
          "locatingTip": "定位：笔记小标题 Complex, abstract symbols developed 之下的第一条备注讲“最初符号与所指事物外形相似”，对应第 5 段第 2、3 句；信号词 For example 直接引出例子。确定答案技巧：题干要求填“举例的对象”，原文用 “an image which resembled the drawing of a sheep” 给出唯一的具体例子，故空格填 sheep。做题时注意区分“图画（drawing/image）”与“被描绘的东西（sheep）”：题干说 signs looked like what they indicated（符号像它们所指的东西），问的就是所指事物本身，因此不能填 image 或 drawing。另外 sheep 单复数同形，按原文形式写 sheep 即可，不要加 s。",
          "analysis": "第 5 段前三句：“Gradually, Sumerians developed symbols for words. When first developed, each symbol looked like the concrete thing it represented. For example, an image which resembled the drawing of a sheep meant just that.”（苏美尔人逐渐为词语发明了符号。最初发明时，每个符号看起来就像它所代表的具体事物。例如，一个像羊的画的图形，意思就正好是羊）。原文的逻辑是“符号初期是象形的”，随后用一个具体例子加以说明：画着一只羊的图形就表示羊。题干把这段改写为笔记条目“at first, signs looked like what they indicated, e.g. 10 ________”，其中 at first 对应 When first developed，looked like what they indicated 对应 each symbol looked like the concrete thing it represented，e.g. 对应 For example，空格处只需填出举例的对象，即 sheep。这个例子也是全文唯一与“象形”对应的具体例子，定位范围极小，不易误填。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "eventually, cuneiform signs shaped like 11 ________ were developed",
          "translation": "最终，发展出了形状像 ________（三角形）的楔形文字符号。",
          "answer": "triangles",
          "wordClass": "名词（复数，指三角形；与 shaped 构成 shaped like triangles，作介词 like 的宾语，说明符号的形状；原文用复数形式 triangles，故填复数 triangles）",
          "locating": {
            "paragraph": "5",
            "quote": "At this last stage in the evolution of cuneiform, the signs took the form of triangles, which became common cuneiform signs."
          },
          "synonyms": [
            "“signs shaped like triangles” 同义替换为原文的 “the signs took the form of triangles”（符号变成了三角形的形状）",
            "“eventually” 同义替换为原文的 “At this last stage in the evolution of cuneiform”（在楔形文字演变的最后阶段）",
            "“were developed” 对应原文的 “became common cuneiform signs”（成为常见的楔形文字符号）"
          ],
          "locatingTip": "定位：笔记小标题 Complex, abstract symbols developed 之下的第三条备注讲“最终形成的符号形状”，回第 5 段末尾找以 At this last stage 开头的句子（末段标志词正好对应题干的 eventually）。确定答案技巧：“形状”类空格要盯住表示形状的动词短语 took the form of / shaped like，其后的名词就是答案；原文的 of triangles 即空格内容。关键提示是复数：原文 “the form of triangles” 用的是复数 triangles，空格也必须写复数，写成 triangle 会因单复数与原文不符而失分；这也与后文 “which became common cuneiform signs” 中“多种常见符号”的复数概念一致。",
          "analysis": "第 5 段末句：“At this last stage in the evolution of cuneiform, the signs took the form of triangles, which became common cuneiform signs.”（在楔形文字演变的最后阶段，符号采用了三角形的形状，三角形后来成为常见的楔形文字符号）。笔记条目说“最终，发展出了形状像某种东西的楔形文字符号”，对应关系是：eventually 对应 At this last stage（最后阶段）；shaped like 对应 took the form of；空格即 of 之后的名词 triangles。本段前文还交代了符号抽象化的过程——从“像羊的画”这样的象形符号，到为 female、hot、God 等抽象概念造符号，最后变成与所指事物毫无相似之处（looked nothing like what they referred to）的符号，三角形正是这一抽象化终点的形态，与题干 eventually 的时间含义吻合。答案需为复数 triangles。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "according to experts, cuneiform was mainly used for 12 ________",
          "translation": "根据专家的看法，楔形文字主要用于 ________（记账）。",
          "answer": "accounting",
          "wordClass": "名词（不可数，动名词性名词，指“记账/会计”；作介词 for 的宾语，保持原文形式，不加冠词也不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "However, most linguists and historians agree cuneiform developed primarily as a tool for accounting."
          },
          "synonyms": [
            "“according to experts” 同义替换为原文的 “most linguists and historians agree”（多数语言学家和历史学家都持相同看法）",
            "“was mainly used for” 同义替换为原文的 “developed primarily as a tool for”，primarily 对应 mainly，a tool for 对应 used for",
            "“accounting” 是原文 for 之后的名词，直接充当空格答案"
          ],
          "locatingTip": "定位：题干关键词 experts 是抽象说法，应对位原文中具体的人群名 linguists and historians，出现在第 6 段倒数第二句；该句以 However 转折引出结论，很好辨认。确定答案技巧：题干问“主要用于什么用途”，原文用 “primarily as a tool for accounting” 明确给出用途 accounting；primarily 与 mainly 同义，a tool for 与 used for 同义，对应关系清晰。注意别被紧随其后的数字句带偏：“about 75 percent contain this type of practical information” 只是用数据支持前面的结论，其中 this type of practical information 回指的正是 accounting 这一用途，不能据此填 tablets 或 information。",
          "analysis": "第 6 段讲楔形文字演变带来的两面性：符号更抽象使体系更高效（fewer marks for a reader to learn），但社会变复杂又需要表达更多概念，所以体系也更复杂。随后作者用 However 引出学界共识：“However, most linguists and historians agree cuneiform developed primarily as a tool for accounting.”（不过，多数语言学家和历史学家都认为，楔形文字主要是作为一种记账工具发展起来的）。再以数据补充说明：“Of the cuneiform tablets that have been discovered, excavated and translated, about 75 percent contain this type of practical information, rather than artistic or imaginative work.”（在已发现、发掘并翻译的泥板中，约 75% 属于这类实用信息，而非艺术或想象性作品）。笔记条目 “according to experts, cuneiform was mainly used for 12 ________” 取的就是前一句：experts 对应 linguists and historians（语言学与历史学的专家），mainly 对应 primarily，used for 对应 a tool for，空格即 accounting。第二句的 75 percent 是佐证而非另一用途，因此不要改填其他词。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Rawlinson copied the inscriptions onto 13 ________",
          "translation": "罗林森把铭文复制（拓印）到了 ________（纸）上。",
          "answer": "paper",
          "wordClass": "名词（不可数，材料名；作介词 onto 的宾语，保持原文 paper 的形式，不加冠词也不变复数）",
          "locating": {
            "paragraph": "7",
            "quote": "Rawlinson made impressions of the marks on large pieces of paper as he balanced dangerously on the surrounding rocks."
          },
          "synonyms": [
            "“copied the inscriptions” 同义替换为原文的 “made impressions of the marks”（把符号拓印下来）",
            "“onto” 同义替换为原文的 “on”，都表示拓印的承载物",
            "“paper” 是原文 “large pieces of paper” 的中心名词，前面只有数量限定语 large pieces of，题干简化为 onto 加空格"
          ],
          "locatingTip": "定位：人名 Henry Rawlinson 与地名 Behistun Mountains 都出现在第 7 段，笔记该栏的第三条备注讲他“抄录”的动作，对位该段最后一句 “Rawlinson made impressions of the marks on large pieces of paper”。确定答案技巧：问“抄在哪里/拓在什么上”，就要找介词 on / onto 之后的名词——原文用 on large pieces of paper，承载物是 paper，因此空格填 paper。要区分两类名词：marks（被复制的对象）和 paper（承载材料），题干问的显然是后者；同时 ONE WORD ONLY，不能写 pieces of paper，也不要受 large pieces of 的干扰而把 pieces 当答案。paper 为不可数名词，按原文单数形式填入。",
          "analysis": "第 7 段末两句：“In the late 19th century, a British army officer, Henry Rawlinson, discovered cuneiform inscriptions which had been carved into the surface of rocks in the Behistun Mountains in what is present-day Iran. Rawlinson made impressions of the marks on large pieces of paper as he balanced dangerously on the surrounding rocks.”（19 世纪后期，英国军官 Henry Rawlinson 在位于今伊朗的贝希斯敦山岩壁上发现了刻着的楔形文字铭文。他冒着危险在周围岩石上保持平衡，把那些符号拓印在几张大纸上）。笔记条目 “Rawlinson copied the inscriptions onto 13 ________” 是对第二句的改写：copied 对应 made impressions（拓印复制），inscriptions 对应 the marks（符号/铭文），onto 对应 on，空格即 paper。此处 as he balanced dangerously on the surrounding rocks 只是描写他拓印时的危险处境，属于附加细节，不构成答案来源；真正的语义焦点是“把符号拓到了纸上”。答案写不可数名词 paper。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
