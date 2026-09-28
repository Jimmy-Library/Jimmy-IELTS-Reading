(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-211", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-211",
  "meta": {
    "examId": "p1-high-211",
    "title": "Ahead of its time 新西兰头骨",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "The Ruamahanga River often floods.",
          "translation": "鲁阿马汉加河（Ruamahanga River）经常泛滥。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The family farm borders the river, and a four-metre-high flood bank testifies to its natural tendency to flood."
          },
          "synonyms": [
            "“often floods” 同义替换为原文的 “its natural tendency to flood”：题干用频次副词 often，原文用 natural tendency（天然的倾向）表达同一种反复发生的习性",
            "“The Ruamahanga River” 与原文的 “the river” 指同一条河：第 2 段首句已点明河名 “the nearby Ruamahanga River”，后文用 the river 回指",
            "旁证：同段第二句 “Having been very high for days, the river had at last fallen, and Tobin was eager to see what changes the floods had brought.” 中的 the floods 与题干 often 同向，都表明泛洪在这里是常态"
          ],
          "locatingTip": "定位：题干只有一个专有名词 Ruamahanga River，它是第 2 段首句里出现的地名，扫读时锁定第 2 段即可，不必通读全文。确定答案技巧：本题考“河流是否经常泛滥”，属于频率与习性判断。回原文找同段末句，即 “The family farm borders the river, and a four-metre-high flood bank testifies to its natural tendency to flood.”。其中 flood bank（防洪堤）本身就是人们为反复阻挡洪水而修建的工程，而 testifies to its natural tendency to flood 更是直接给出结论——泛滥是这条河的固有习性。tendency 描述长期习性，与题干的频次说法方向一致，因此判 TRUE。看到 testifies to、tendency 这类表“证明、习性”的词，基本可以确认原文在支持题干。",
          "analysis": "第 2 段先交代背景：Tobin 在一个十月的下午带着狗走到鲁阿马汉加河边（a young New Zealander, Sam Tobin, called his dogs and went for a walk down to the nearby Ruamahanga River），接着说河水多日高涨之后终于退去。本段的落点在末句：“The family farm borders the river, and a four-metre-high flood bank testifies to its natural tendency to flood.”（他家的农场紧挨着这条河，一道四米高的防洪堤证明它天生就有泛滥的倾向）。这句话给出两层信息：一是农场与河相邻，二是这里修有四米高的防洪堤。防洪堤的存在本身就是人们为反复阻挡洪水而建造的设施，而 testifies to its natural tendency to flood 更用“证明”一词直接给出结论——泛滥是这条河的固有习性。题干说 The Ruamahanga River often floods，用频次副词 often 描述经常发生；原文的 natural tendency to flood 用“天然倾向”表达同一层含义，二者在雅思阅读中属于同义改写，方向完全一致，因此答案是 TRUE。此外同段第二句提到 Tobin 迫不及待想看洪水带来了什么变化（what changes the floods had brought），也侧面说明洪水在此地是常见现象，可互相印证。",
          "traps": [
            "为什么不是 FALSE：原文用的是肯定性表述 “testifies to its natural tendency to flood”，直言这条河有天然的泛滥倾向，并用四米高的防洪堤作实证，与题干“经常泛滥”完全同向，没有任何矛盾信息，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到了泛滥这件事，还给出了带频率性质的判断（natural tendency to flood）和实物证据（four-metre-high flood bank），属于已经交代且与题干一致的信息，不属于信息缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "When Tobin first found the object in the river, he mistook it for something else.",
          "translation": "托宾最初在河里发现那个物体时，把它错认成了别的东西。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "where he noticed what he initially took to be a whitish rock, lit by the sun. Then, getting closer, he realised it was a bone."
          },
          "synonyms": [
            "“first found the object” 同义替换为原文的 “he noticed what he initially took to be”：题干的时间副词 first 对应原文的 initially",
            "“mistook it for something else” 同义替换为原文的 “took to be a whitish rock”：起初以为是一块发白的石头，而紧接着的 “he realised it was a bone” 说明先前的判断是错的",
            "“the object” 对应原文的 “a bone” 以及后文的 “it was a skull”，三者指同一件东西"
          ],
          "locatingTip": "定位：题干的关键词是专有名词 Tobin 与 river，集中在第 3 段首句（Tobin stepped out onto a broad shoulder of river sand）。确定答案技巧：本题考“是否误认”，解题关键是抓住表示“起初、后来”的时间对比词。原文用 initially took to be（起初以为是）与 Then, getting closer, he realised（再靠近才发现）构成前后反差：起初以为是一块被太阳照得发白的石头（a whitish rock），走近才意识到是一根骨头（a bone），这正是题干所说的 mistook it for something else。只要读出 initially 与 realised 之间的反差，答案 TRUE 就能确定。",
          "analysis": "第 3 段首句写 Tobin 走到一片宽阔的河沙高地上：“where he noticed what he initially took to be a whitish rock, lit by the sun. Then, getting closer, he realised it was a bone.”（他在那里注意到一个东西，起初以为是一块被太阳照得发白的石头；再走近一些，才意识到那是一根骨头）。这句话的内部结构就是一次典型的“误认再更正”：initially took to be a whitish rock（起初误当作白石）对应题干的 mistook it for something else（把它错认成别的东西），而 realised it was a bone（意识到是骨头）表明他最初的判断并不正确。题干中的 first found the object 对应原文 he noticed what he initially took to be，时间副词 first 与 initially 同义。信息链条完整、方向一致，因此答案是 TRUE。做题时要注意，判断题里最常见的“误认”信号词就是 initially、at first、originally 加上随后的 realised、turned out，看到这种前后转折句式，基本可以直接判断“起初认成了别的东西”为真。",
          "traps": [
            "为什么不是 FALSE：原文明确写着 “he noticed what he initially took to be a whitish rock”，即他起初把那件东西当成了一块发白的石头，这正是题干所说的错认，原文支持而非反驳题干，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不但写了他最初看成什么（whitish rock），还写了他后来的更正（realised it was a bone），关于“初次发现时有无误认”的信息完整给出，并非未提及，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Tobin could not decide what part of the body the bone came from.",
          "translation": "托宾无法判断这块骨头来自身体的哪个部位。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "But as he scraped aside a stone he realised that it was a human bone, something quite new in his experience. As he picked it up, he saw it was a skull, discoloured with age."
          },
          "synonyms": [
            "“could not decide” 与原文的 “he realised” “he saw it was a skull” 直接冲突：原文是他已经认出来了，而不是认不出来",
            "“what part of the body the bone came from” 对应原文的 “it was a skull”：原文直接给出部位名称（头骨），说明他判断得很明确",
            "“the bone” 对应原文的 “a human bone”，随后被进一步确认为 “a skull”"
          ],
          "locatingTip": "定位：本题与第 2 题同在第 3 段，定位词仍是 Tobin 与 bone，直接从第 3 段中后部往下读即可。确定答案技巧：本题的判分点是“他到底有没有认出部位”。原文连续用了两个表示“看清、意识到”的动词：as he scraped aside a stone he realised that it was a human bone（刮开石头后意识到那是人骨），紧接着 As he picked it up, he saw it was a skull（捡起来一看是个头骨）。两个动作都表明他不仅认出这是人骨，还准确判断出部位是头骨，与题干“无法判断来自哪个部位（could not decide）”正好相反，因此判 FALSE。注意不要被上文“起初误认成石头”干扰，那是发现阶段的事，本题问的是对部位的判断，属于另一回事。",
          "analysis": "题目说托宾无法判断骨头来自身体的哪个部位，而第 3 段的叙述恰恰相反。原文在描述他刮开石头之后写道：“But as he scraped aside a stone he realised that it was a human bone, something quite new in his experience. As he picked it up, he saw it was a skull, discoloured with age.”（但当他拨开一块石头时，他意识到那是一根人骨，这在他的经验中相当新鲜；捡起来的时候，他看出那是一个头骨，因年深日久而变了色）。这段话给出了一次明确的辨认过程：先是 human bone（人骨），紧接着是 a skull（头骨）。skull（头骨）本身就是一个具体的身体部位名称，说明他完全判断出了骨头来自哪个部位，而且是当场识别、毫不含糊。题干的落点是 could not decide what part of the body the bone came from（无法判断来自身体哪个部位），与原文的 realised、saw it was a skull 构成正面对立，因此答案是 FALSE。本题的常见陷阱是把第 3 段开头“起初以为是一块白石”与本题混为一谈：起初误判的是“石头还是骨头”，并不是“哪个部位”，两处判断在原文里其实都完成得很清楚。",
          "traps": [
            "为什么不是 TRUE：原文用 realised、saw 两个明确的认知动词，写他当场认出了 human bone 并进一步确认是 skull，还描述了头骨的状态（discoloured with age）。这些细节只可能来自清楚的辨认，与“无法判断部位”完全相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对他“认出了什么部位”给出了确定答案（a skull），信息清楚且与题干矛盾。存在明确相反信息时按规则判 FALSE，不能因为原文没有出现 decide 这个词就当成信息缺失。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Tobin's mother was surprised that the skull caused debate among specialists.",
          "translation": "托宾的母亲对这块头骨在专家之间引发争论感到惊讶。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Tobin replaced the skull and hurried home to tell his mother what the river had delivered to their doorstep. It would prove to be a spectacular find, setting in motion an investigation by some of the country's most respected specialists, and ultimately challenging our most firmly held assertions about the human settlement of New Zealand."
          },
          "synonyms": [
            "“Tobin's mother” 在原文中原词出现：“tell his mother”，所指人物一致",
            "“caused debate among specialists” 与原文的 “setting in motion an investigation by some of the country's most respected specialists” 只是方向相近（都涉及专家介入），但原文说的是启动调查，并非专家之间的争论",
            "“was surprised” 在原文中没有任何对应表述：原文只写了 Tobin 匆忙回家告诉母亲，完全没有交代母亲听到后的情绪或反应"
          ],
          "locatingTip": "定位：题干的关键词是 mother，虽为普通名词但指向明确，出现在第 4 段首句（hurried home to tell his mother）；specialists 也在紧接的下一句出现，可以一并核对。确定答案技巧：判断题里凡出现心理或情绪类描述（surprised、shocked、pleased、worried），都要立刻警惕 NOT GIVEN。回原文核对会发现，关于母亲只有“告诉他母亲（tell his mother）”这一个动作，作者既没写她惊讶，也没写她不惊讶；至于 specialists，原文说的是专家展开调查（an investigation），并非专家之间“争论（debate）”。题干同时叠加了“母亲的惊讶”与“专家争论”两层原文未给的信息，属于信息缺失，判 NOT GIVEN。切忌凭“母亲听到惊人发现后理应吃惊”这类生活常识作答。",
          "analysis": "第 4 段只有两句：“Tobin replaced the skull and hurried home to tell his mother what the river had delivered to their doorstep. It would prove to be a spectacular find, setting in motion an investigation by some of the country's most respected specialists, and ultimately challenging our most firmly held assertions about the human settlement of New Zealand.”（托宾把头骨放回原处，匆匆回家告诉母亲河里送上门来的是什么。后来的事实证明这是一次惊人的发现，它促使该国一些最受尊敬的专家展开调查，并最终动摇了我们关于新西兰人类定居史最牢固的看法）。逐项核对题干：其一，Tobin's mother 在原文确实出现，但只说她被告知了这件事，没有任何关于她情绪反应的描写，surprised 无据；其二，caused debate among specialists 对应不上，原文用的是 an investigation（调查）以及 challenging our most firmly held assertions（挑战既有论断），这是学者对学术结论提出质疑，与“专家之间在争论”并不等同；其三，综合起来，“母亲对专家间的争论感到惊讶”这一整句在原文中完全没有对应信息，属于典型的 NOT GIVEN。所谓 NOT GIVEN，就是题干中至少有一部分内容（本题是母亲的反应，以及“争论”这一性质）原文未涉及，既不能证实也不能证伪。",
          "traps": [
            "为什么不是 TRUE：原文只交代 Tobin “hurried home to tell his mother”，并未描写母亲听到后的任何心理活动，surprised 无从确认；原文所说的 specialists 是在开展 investigation（调查），也不等同于题干所说的 debate（争论）。缺少原文支撑，不能选 TRUE。",
            "为什么不是 FALSE：原文没有出现任何与题干相反的信息，例如既没说母亲并不惊讶，也没说专家之间没有分歧，仅仅是没有提及。按规则判 NOT GIVEN，而不是 FALSE。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–9 流程图填空（NO MORE THAN TWO WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 9
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The 5 ________ were initially involved in trying to explain the presence of the skull.",
          "translation": "最初是 ________ 介入，试图解释这块头骨为何会出现。",
          "answer": "police",
          "wordClass": "名词（复数集合名词 police；在句中作主语，其后谓语用复数 were initially involved；police 无单数形式，词尾不加 s）",
          "locating": {
            "paragraph": "5",
            "quote": "The police were immediately called, but despite a thorough search they could find nothing that might shed light on the identity of the Ruamahanga skull, or the circumstances of its sudden appearance."
          },
          "synonyms": [
            "“were initially involved” 同义替换为原文的 “were immediately called”：接到报案后立刻着手查找，就是最初的介入",
            "“trying to explain the presence of the skull” 同义替换为原文的 “might shed light on the identity of the Ruamahanga skull, or the circumstances of its sudden appearance”：shed light on（查明、弄清）对应 explain，the circumstances of its sudden appearance 对应 the presence of the skull",
            "“initially” 对应原文的 “immediately”，都指事件发生后的第一时间"
          ],
          "locatingTip": "定位：流程图的第一格已限定“Tobin found a human skull”之后发生的事，紧接着问谁最先介入，直接回到第 5 段找第一个介入者。第 5 段开头即是 The police were immediately called。确定答案技巧：题干 “The 5 ______ were initially involved in trying to explain the presence of the skull” 中的 the 提示答案应是确定的复数名词，谓语 were 也要求复数主语。原文 “The police were immediately called, but despite a thorough search they could find nothing that might shed light on the identity of the Ruamahanga skull” 中，被叫来并展开搜查、试图查明身份的正是在第 5 段打头出现的 the police（警方）。police 在英语中是集合名词，永远作复数，与题干 were 完全吻合，因此答案是 police。注意不要为了“复数”而写成 polices，也不要写成 police officers（原文并非此词）。",
          "analysis": "第 5 段开头写道：“The police were immediately called, but despite a thorough search they could find nothing that might shed light on the identity of the Ruamahanga skull, or the circumstances of its sudden appearance.”（警方立即被叫来，但尽管进行了彻底的搜查，他们也找不到任何能够揭示鲁阿马汉加头骨身份或它突然出现情形的线索）。题干改写为“The 5 ______ were initially involved in trying to explain the presence of the skull”，关键对应有三处：其一，were immediately called 与 were initially involved 都表示第一时间介入；其二，shed light on（查明、阐明）与 trying to explain 同义；其三，the circumstances of its sudden appearance（它突然出现的情形）与 the presence of the skull 同义。据此可确定空格应填最早介入调查的一方，即 the police。词性方面，police 是复数集合名词，形式虽不加 s，但永远接复数动词（原文用 were，题干也用 were），所以直接填 police 即可。本题词数限制为 NO MORE THAN TWO WORDS AND/OR A NUMBER，答案只有一个单词，完全合规。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Dr Koelmeyer suggested it was a 6 ________ skull.",
          "translation": "科尔迈耶（Koelmeyer）医生认为这是一块 ________ 的头骨。",
          "answer": "european",
          "wordClass": "形容词（作名词 skull 的前置定语，位于冠词 a 与 skull 之间，不是 was 的表语；由地名派生，原文首字母大写写作 European，答案以小写 european 给出）",
          "locating": {
            "paragraph": "5",
            "quote": "He'd then consulted with a colleague, Dr Koelmeyer, who believed that the deterioration of the bone placed the time of dead 'before living memory' and, most significantly as it would turn out, the skull appeared to be European in origin."
          },
          "synonyms": [
            "“suggested” 同义替换为原文的 “believed”：都表示提出一种看法而非断言",
            "“it was a European skull” 同义替换为原文的 “the skull appeared to be European in origin”：原文用 in origin（来源上）后置说明，题干把它前移成 skull 的定语",
            "“most significantly as it would turn out” 是与空格无关的插入语，答题时只需提取其中的 European 一词"
          ],
          "locatingTip": "定位：题干出现专有名词 Dr Koelmeyer，第 5 段后半部分集中写他，一步定位到 “He'd then consulted with a colleague, Dr Koelmeyer, who believed that…”。确定答案技巧：本题问 Dr Koelmeyer 认为这是哪种头骨。原文该句给出两条判断：年代上是 before living memory（在有生记忆之前），来源上是 the skull appeared to be European in origin（这块头骨来源上似乎是欧洲人的）。题干用 “a 6 ______ skull” 的结构把来源信息前移为定语，空格要填的就是 European。填形容词原形 european 即可（评分不区分大小写）；注意不要填 before living memory，那是年代信息，对应的是流程图后面第 9 空那一格（The age of the skull was about 9 years），不是本题的空格。",
          "analysis": "第 5 段在写警方搜查无果之后，叙述头骨被送往奥克兰医院由法医病理学家 Dr Fetvis 检验，Fetvis 判断这是女性头骨；随后交代了他咨询同事所得的结论：“He'd then consulted with a colleague, Dr Koelmeyer, who believed that the deterioration of the bone placed the time of dead 'before living memory' and, most significantly as it would turn out, the skull appeared to be European in origin.”（他随后咨询了同事 Koelmeyer 医生，后者认为骨质的劣化程度说明死亡时间在“有生记忆之前”，而最关键的是，事后看来，这块头骨似乎源自欧洲人）。这句话包含两个判断维度：时间（before living memory）与来源（European in origin）。题干问的是“a ______ skull”，即头骨的属性定语，对应的正是 European in origin 中的 European。语法上，空格前的 a 与空格后的名词 skull 之间只能放形容词或名词定语，european 作形容词修饰 skull，表示“欧洲人的头骨”。答题时要能把 in origin 这类介词短语后置的表述转换成前置定语形式，这是流程图填空最常见的改写方式之一。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Dr Watt recommended 7 ________ to establish the skull's age.",
          "translation": "瓦特（Watt）博士建议使用 ________ 来确定头骨的年代。",
          "answer": "radiocarbon dating",
          "wordClass": "名词短语（不可数，一种测年方法的名称，作 recommended 的宾语；由两个单词组成，符合 NO MORE THAN TWO WORDS 的限制）",
          "locating": {
            "paragraph": "6",
            "quote": "He believed that it could be the remains of an old farm burial, but was not certain, and proposed the use of radiocarbon dating to make sure it wasn't a recent death."
          },
          "synonyms": [
            "“recommended” 同义替换为原文的 “proposed the use of”：提议使用某种方法，就是建议采用",
            "“to establish the skull's age” 同义替换为原文的 “to make sure it wasn't a recent death”：确认这不是近期死亡，目的就是判定年代",
            "“radiocarbon dating” 在原文中原词出现，是被介绍的具体技术名称"
          ],
          "locatingTip": "定位：流程图的上一格是“Dr Koelmeyer suggested it was a 6 ______ skull”，这一格转到另一名专家 Dr Watt，第 6 段开头即出现 “Wellington-based forensic anthropologist Dr Watt also examined the skull”。确定答案技巧：题干 “Dr Watt recommended 7 ______ to establish the skull's age” 中的 to 引出目的，说明空格是一种手段或方法。回原文找 Dr Watt 提出的建议，即 proposed the use of radiocarbon dating to make sure it wasn't a recent death。proposed the use of 对应 recommended，to make sure it wasn't a recent death 对应 to establish the skull's age，因此空格填 radiocarbon dating。这是原文原词，两个单词恰好卡在 NO MORE THAN TWO WORDS 的上限，不要连带 the use of 一起抄，那会超出词数。",
          "analysis": "第 6 段写惠灵顿的法医人类学家 Dr Watt 也检验了头骨，并认为它属于一个 40–45 岁的人；他猜测这可能是某个旧农场的墓葬遗存，但并不确定，于是提出用科学手段加以确认。原文：“He believed that it could be the remains of an old farm burial, but was not certain, and proposed the use of radiocarbon dating to make sure it wasn't a recent death.”（他认为这可能是某个旧农场墓葬的遗存，但不能确定，于是提议使用放射性碳测年法，以确认这不是近期的死亡）。这里 proposed the use of 意为“建议采用”，与题干的 recommended 同义；radiocarbon dating 即放射性碳测年法，是一种通过测定样品中碳十四含量来推定年代的科学技术，用它来确认“不是近期死亡（wasn't a recent death）”，正是题干所说的“确定头骨年代（establish the skull's age）”。答案由两个单词组成，属于专门的技术名称，填写时照抄原文形式 radiocarbon dating 即可，不要写成 carbon dating 或 radiocarbon。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "A bone 8 ________ was sent to the GNS.",
          "translation": "一份骨 ________ 被送往 GNS。",
          "answer": "sample",
          "wordClass": "名词（单数；与前面的 bone 连用构成名词短语 a bone sample，整个短语在句中作主语，指被送去检测的那份骨样）",
          "locating": {
            "paragraph": "6",
            "quote": "As a result, the Institute of Geological and Nuclear Sciences (GNS) in Lower Hutt was contacted, and provided with a sample of bone that had originated in the top of the skull."
          },
          "synonyms": [
            "“A bone sample” 同义替换为原文的 “a sample of bone”：原文用 of 短语后置，题干压缩成前置名词修饰结构 bone sample",
            "“was sent to the GNS” 同义替换为原文的 “was contacted, and provided with”：原文用被动说该机构被提供了一份样品，等于样品被送交该机构",
            "“GNS” 在原文中作为括注缩写原词出现：“the Institute of Geological and Nuclear Sciences (GNS)”"
          ],
          "locatingTip": "定位：流程图里的 GNS 是大写缩写，第 6 段中出现两次，即括注 “the Institute of Geological and Nuclear Sciences (GNS) in Lower Hutt was contacted” 与后文的 “the GNS laboratory”。确定答案技巧：题干结构是 “A bone 8 ______ was sent to the GNS”，空格紧跟 bone 之后，说明它与 bone 一起构成被送检物。原文对应表达是 “provided with a sample of bone that had originated in the top of the skull”，即该机构收到的是“一份骨质样品”。原文写 a sample of bone，题干改写为 a bone sample，语序颠倒但所指相同，故空格填 sample。注意不要填 skull（送检的是取自头骨顶部的一块骨质样品，不是整块头骨），也不要填 top，那是样品取自的位置。",
          "analysis": "第 6 段在 Dr Watt 提议使用放射性碳测年之后，叙述事情如何落实：“As a result, the Institute of Geological and Nuclear Sciences (GNS) in Lower Hutt was contacted, and provided with a sample of bone that had originated in the top of the skull.”（于是他们联系了下哈特的地质与核科学研究所，并向其提供了一份取自头骨顶部的骨质样品）。题干把这一句压缩成流程图的下一步 “A bone 8 ______ was sent to the GNS”，对应关系是：原文的 provided with 表示该机构得到了样品，题干用 was sent to 表示样品被送至该机构；原文的 a sample of bone 指“一份骨头样品”，题干改成 a bone ______ 的结构，把 bone 提前作定语，空格自然落在中心名词 sample 上。从词性看，sample 是可数名词单数，与前面的 a 呼应，构成 a bone sample 这一紧凑的复合名词短语，表示“骨样”。有两个易错点要避开：一是别填 top，那是样品取自的位置，属于定语从句 that had originated in the top of the skull 里的信息；二是别填 bone，题干中 bone 已经出现在空格之前了。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "The age of the skull was about 9 ________ years.",
          "translation": "这块头骨的年代大约是 ________ 年。",
          "answer": "296",
          "wordClass": "数词（数字，作 years 前面的数量词；题目允许填数字，不需要写单位）",
          "locating": {
            "paragraph": "6",
            "quote": "Cutting through the bewildering complexity of the scientific analysis was a single line reading: conventional radiocarbon age approximately 296 years."
          },
          "synonyms": [
            "“about” 同义替换为原文的 “approximately”：二者都表示约数",
            "“The age of the skull” 同义替换为原文的 “conventional radiocarbon age”：原文用专业的“常规放射性碳年龄”指代头骨的年代",
            "“years” 在原文中原词保留，说明测得值的单位是年"
          ],
          "locatingTip": "定位：流程图最后一格问年代，第 6 段里只有一处给出测定年代的具体数字，即 a single line reading: conventional radiocarbon age approximately 296 years。确定答案技巧：题干 “The age of the skull was about 9 ______ years” 中的 about 提示要找约数。原文用 approximately 296 years，approximately 与 about 同义，years 与题干完全一致，所以空格就是 296。填写时照原文写阿拉伯数字 296，不要写成英文单词 two hundred and ninety-six（那会超出词数限制）。同时注意区分本段出现的两个数字：296 是测得年代，200 是它与 Koelmeyer 先前判断之间的差值。",
          "analysis": "第 6 段后半部分交代检测结果：“In a little over three weeks, the seemingly astonishing results from the GNS laboratory came back. Cutting through the bewildering complexity of the scientific analysis was a single line reading: conventional radiocarbon age approximately 296 years. This was staggering, for the skull was about 200 years older than Dr Koelmeyer had believed.”（三周多一点，GNS 实验室那看似惊人的结果就回来了。穿过令人困惑的复杂科学分析，最醒目的是这样一行字：常规放射性碳年龄约为 296 年。这令人震惊，因为这块头骨比 Koelmeyer 医生所认为的要早大约 200 年）。题干把这一行关键数字概括为“头骨的年代约为多少年”，其中 approximately 被改写为 about，conventional radiocarbon age 被概括为 the age of the skull，因此空格填 296。读题时要特别小心同段出现的两个数字：296 是测得的年代，200 是与先前判断之间的差值，二者相邻出现极易混淆，务必按题干“the age of the skull（头骨本身的年代）”这一落点选 296。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Ruamahanga skull surprising because of its – age – 10 ________ – gender",
          "translation": "鲁阿马汉加头骨之所以令人惊讶，是因为它的 —— 年代 —— ________ —— 性别。",
          "answer": "race",
          "wordClass": "名词（单数；在笔记条目中与 age、gender 并列，由限定词 its 修饰，与 its 一起作介词 of（because of its …）的宾语，指人群的种族属性）",
          "locating": {
            "paragraph": "7",
            "quote": "The fascinating question, however, was how a skull of this race, let alone this gender, had reached these remote islands in the South Pacific at such a time"
          },
          "synonyms": [
            "“surprising” 同义替换为原文的 “fascinating”：都表示令人费解、引人注目",
            "“its ______” 对应原文的 “this race”：原文用 of this race（这一种族的）说明头骨所属人群，与年代、性别并列",
            "“gender” 在原文中原词出现：“let alone this gender”，与题干最后一个要点完全对应"
          ],
          "locatingTip": "定位：笔记小标题是 Problem of the skull's origins，并已给出 age 与 gender 两个并列要点，说明原题所在句把这三项并列讨论。回原文第 7 段找同时出现年代、种族、性别三项的句子，即 how a skull of this race, let alone this gender, had reached these remote islands。确定答案技巧：题干 “Ruamahanga skull surprising because of its – age – 10 ______ – gender” 给出三个并列的“令人惊讶之处”。原文对应句用 fascinating question 引出疑问，并列出 this race（种族）与 this gender（性别）两个并列成分，而年代在第 6 段末已经交代（This was staggering）。空格与 age、gender 并列，因此填 race。注意填名词单数原形 race，不要写 racial（那是形容词），也不要写 nationality、people 等同义但非原文的词——答案必须取自原文。",
          "analysis": "第 7 段先安抚读者：“Of course, a skull of this age wasn't particularly unusual in New Zealand. The Maori people have been living in the country for at least 800 years and scientists frequently come across human remains of considerable age.”（当然，这个年代的头骨在新西兰并不罕见——毛利人在这片土地上生活了至少 800 年，科学家经常遇到年代久远的人类遗骸）。接着作者才抛出真正的问题：“The fascinating question, however, was how a skull of this race, let alone this gender, had reached these remote islands in the South Pacific at such a time, long before the arrival of the explorer Captain Cook in 1769…”（然而真正引人入胜的问题是：一块属于这一种族、更不用说是这一性别的头骨，怎么可能在那么早的时候就到达南太平洋这些偏远的岛屿……）。题干把“令人惊讶之处”拆成三条并列要点：age（年代）、空格、gender（性别）。原文这句话用 of this race 与 let alone this gender 两个并列成分给出种族与性别，年代则在第 6 段末 This was staggering 处已经交代，三者正好一一对应。race 在此作名词，意为种族、人种，与 age（年代）、gender（性别）属于同一层级的人群属性，词性与并列结构一致。要注意区分 race 与 nationality（国籍）：原文的疑问落在“一名欧洲女性为何在如此早的年代出现在新西兰”，属于人种与来源层面的疑问，原文用词就是 race。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "evidence of this expedition found elsewhere by 11 ________",
          "translation": "这次远征的证据由 ________ 在其他地方发现。",
          "answer": "archaeologists",
          "wordClass": "名词（复数，作介词 by 的宾语，表示执行发现行为的人；原文 a team of archaeologists 中即为复数，空格前无冠词，须用复数形式）",
          "locating": {
            "paragraph": "8",
            "quote": "However, it is unlikely the Ruamahanga skull originated from this expedition because no evidence of Mendana's ships has ever been found in New Zealand, while a team of archaeologists working in the Solomon Islands in 1979 did discover the remains of European vessels dating from the 16th century."
          },
          "synonyms": [
            "“evidence of this expedition found elsewhere” 同义替换为原文的 “the remains of European vessels dating from the 16th century” 出现在 “the Solomon Islands”：欧洲船只的残骸就是远征队留下的证据",
            "“by archaeologists” 同义替换为原文的 “a team of archaeologists”：发现行为的执行者就是一队考古学家",
            "“elsewhere” 对应原文的 “in the Solomon Islands”，与 “in New Zealand” 形成对照，指明证据的发现地不在新西兰"
          ],
          "locatingTip": "定位：笔记小标题是 Mendana expedition，原文第 8 段整段都在谈 Mendana 远征队。题干 “evidence of this expedition found elsewhere by 11 ______” 的关键词是 evidence 与 elsewhere，对应原文的 no evidence … in New Zealand 与 while a team of … in the Solomon Islands 这一组对比。确定答案技巧：原文先说“在新西兰从未发现任何 Mendana 船只的证据（no evidence of Mendana's ships has ever been found in New Zealand）”，随即用 while 转折，说 1979 年在所罗门群岛发现了一批 16 世纪欧洲船只的残骸。这个转折分句的主语就是发现者：a team of archaeologists（一队考古学家）。把它放进题干的 by 之后即为答案 archaeologists。注意填复数原词，不要写 archaeology（那是学科名）。",
          "analysis": "第 8 段介绍最早到太平洋的欧洲女性是随 1595 年从秘鲁出发、由西班牙船长 Mendana 指挥的远征队而来，接着给出排除理由：“However, it is unlikely the Ruamahanga skull originated from this expedition because no evidence of Mendana's ships has ever been found in New Zealand, while a team of archaeologists working in the Solomon Islands in 1979 did discover the remains of European vessels dating from the 16th century.”（不过，鲁阿马汉加头骨来自这次远征的可能性不大，因为在新西兰从未发现过 Mendana 船只的任何证据；而 1979 年一支在所罗门群岛工作的考古学家队伍确实发现了可追溯至 16 世纪的欧洲船只残骸）。这句话用 while 把两件事并列对比：在新西兰找不到证据，但在所罗门群岛找到了 16 世纪欧洲船只残骸。题干 “evidence of this expedition found elsewhere by 11 ______” 中的 elsewhere 就是“新西兰以外的地方”，即所罗门群岛；而发出发现这一动作的主语是 a team of archaeologists，所以 by 之后应填 archaeologists。词性上，archaeologists 为复数可数名词，与原文 a team of 的集体含义相符（一支队伍由多名考古学家组成），不能填单数 archaeologist，也不能填学科名 archaeology。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Hagerty and Edgar arrived in 1806 from 12 ________, where they had been imprisoned",
          "translation": "哈格蒂与埃德加于 1806 年从 ________ 来到这里，她们此前在那里被监禁。",
          "answer": "australia",
          "wordClass": "专有名词（国家名；作介词 from 的宾语，说明她们来自何处；原文首字母大写写作 Australia，答案以小写 australia 给出）",
          "locating": {
            "paragraph": "9",
            "quote": "Two centuries were to pass before the first recorded European females arrived in New Zealand, both having escaped from prison in Australia. Kathleen Hagerty and Charlotte Edgar are known to have reached the country in 1806."
          },
          "synonyms": [
            "“arrived in 1806” 同义替换为原文的 “are known to have reached the country in 1806”：reached the country 对应 arrived，年份 1806 原样保留",
            "“where they had been imprisoned” 同义替换为原文的 “both having escaped from prison in Australia”：能从监狱逃脱，说明此前被关押在那里",
            "“Hagerty and Edgar” 在原文原词出现：“Kathleen Hagerty and Charlotte Edgar”"
          ],
          "locatingTip": "定位：题干含两个大写人名 Hagerty 与 Edgar，第 9 段第二句 “Kathleen Hagerty and Charlotte Edgar are known to have reached the country in 1806” 一步锁定，这两个名字在全文只出现一次。确定答案技巧：题干问她们“来自哪里”，并提示“此前在那里被监禁”。上一句交代 “both having escaped from prison in Australia”，其中 escaped from prison（从监狱脱逃）直接对应题干的 had been imprisoned（曾被监禁），而 in Australia 就是被关押的地点，也是她们出发的地方，因此空格填 australia。填词时只写国家名一个单词；不要填 prison，那是被监禁的场所类型，不是题目问的地点名。",
          "analysis": "第 9 段先交代一个时间跨度：“Two centuries were to pass before the first recorded European females arrived in New Zealand, both having escaped from prison in Australia. Kathleen Hagerty and Charlotte Edgar are known to have reached the country in 1806.”（两个世纪之后，有记录的最早一批欧洲女性才抵达新西兰，两人都是从澳大利亚的监狱逃出来的。已知 Kathleen Hagerty 与 Charlotte Edgar 于 1806 年到达该国）。题干 “Hagerty and Edgar arrived in 1806 from 12 ______, where they had been imprisoned” 把这两句的信息合并：arrived in 1806 来自第二句 are known to have reached the country in 1806；而 where they had been imprisoned 对应第一句的 having escaped from prison in Australia——能“从监狱逃脱（escaped from prison）”自然意味着此前被关押在那里，地点就是 Australia。因此空格填 australia，词性为国家专有名词，作介词 from 的宾语。这里要避免两个常见误填：一是 prison，题干已经用 imprisoned 表达了监禁这一概念，空格要的是地点；二是 New Zealand，她们是来到新西兰，不是来自新西兰。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Ruamahanga skull may have reached New Zealand in 17th century after a 13 ________",
          "translation": "鲁阿马汉加头骨可能是在一场 ________ 之后于 17 世纪到达新西兰的。",
          "answer": "shipwreck",
          "wordClass": "名词（单数，作介词 after 的宾语；空格前有 a，故须为可数名词单数）",
          "locating": {
            "paragraph": "9",
            "quote": "It is impossible to say with certainty, but the most likely explanation is that a Spanish or Portuguese trading ship was washed onto these wild shores as a result of a shipwreck and a woman got ashore."
          },
          "synonyms": [
            "“after a shipwreck” 同义替换为原文的 “as a result of a shipwreck”：as a result of（由于某事的缘故）与 after（在……之后）表达同一因果先后关系",
            "“may have reached New Zealand” 同义替换为原文的 “a Spanish or Portuguese trading ship was washed onto these wild shores”：船被冲上这些荒凉的海岸，即是抵达新西兰",
            "“shipwreck” 在原文中原词出现，是导致船只被冲上岸的直接原因"
          ],
          "locatingTip": "定位：笔记最后一个板块是 Possible solution，题干里的 after 提示“在某个事件之后到达”，回原文第 9 段末尾找解释性句子，即 the most likely explanation is that a Spanish or Portuguese trading ship was washed onto these wild shores as a result of a shipwreck。确定答案技巧：题干 “may have reached New Zealand … after a 13 ______” 中的 after 需要与原文表示因果的短语对应。原文用 as a result of a shipwreck（由于一次海难），它说明船只被冲上这些海岸的原因是海难，也就等于“在海难之后到达”。空格前的 a 要求可数名词单数，shipwreck 正好是单数可数名词，因此填 shipwreck。不要误填 ship 或 trading ship，那是被冲上岸的船本身，不是题干所问的事件。",
          "analysis": "第 9 段末给出作者的推测：“It is impossible to say with certainty, but the most likely explanation is that a Spanish or Portuguese trading ship was washed onto these wild shores as a result of a shipwreck and a woman got ashore. Implausible, perhaps, but the Ruamahanga skull, today resting in the Wellington Museum, could be the kind of concrete evidence that demands such a drastic re-evaluation of history.”（无法确切断言，但最可能的解释是：一艘西班牙或葡萄牙商船因海难被冲上这些荒凉的海岸，一名女性上了岸。这听起来也许难以置信，但如今陈列在惠灵顿博物馆的鲁阿马汉加头骨，也许正是那种要求我们如此彻底重写历史的实证）。题干问的是“在什么事之后（after a …）到达新西兰”，原文用因果短语 as a result of a shipwreck 给出原因，其中 shipwreck 意为海难、船只失事，空格前的 a 与原文 a shipwreck 的冠词一致，因此答案填 shipwreck（单数）。答题时要分清句中的两层信息：a Spanish or Portuguese trading ship 是被冲上岸的船，即抵达新西兰的那个东西；as a result of a shipwreck 才是导致这一切发生的事件，题干的 after a 只与后者对应。另需一提，笔记里 17th century 是题目给出的时间概括，而原文提到的推算分别是“约 296 年前”与“比 1806 年那批早约 100 年”，换算下来接近 18 世纪初，年份上略有出入；但本题的空格考的是到达的原因（shipwreck），时间不影响作答，按答案表照抄 shipwreck 即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
