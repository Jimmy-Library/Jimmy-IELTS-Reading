(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-low-102", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-low-102",
  "meta": {
    "examId": "p2-low-102",
    "title": "The power of music 音乐的力量",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–18 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 18
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "a reference to studies involving children",
          "translation": "提及涉及儿童的研究（提到与儿童有关的研究）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "In tests, even three-year-olds have been shown to link music in a major mode to happy faces and minor modes to sad faces."
          },
          "synonyms": [
            "“studies involving children” 同义替换为原文的 “In tests”（在测试中），即研究所做的实验",
            "“children” 同义替换为原文的 “three-year-olds”（三岁幼儿），属于儿童这一范畴",
            "“a reference to studies” 对应原文的被动结构 “have been shown to link”，说明这是受试者在研究中所表现出的反应"
          ],
          "locatingTip": "定位：题干没有任何专有名词，只能抓实体词 children，在九个段落中扫读表示年龄或儿童的词（child、children、three-year-olds 等）。A 段讲网络推荐音乐，B 段讲作曲家与考古发现，C 段讲心理学研究音乐情感的难处，只有 D 段末句出现表示幼儿年龄的 three-year-olds。确定答案技巧：段落信息匹配题只要求找出“哪一段含有此信息”，不必纠结段落主旨。D 段末句 “In tests, even three-year-olds have been shown to link music in a major mode to happy faces and minor modes to sad faces.” 中，In tests 对应 studies、three-year-olds 对应 children，两个要素同时命中，答案锁定 D。注意 even 一词强调“连三岁幼儿都能做到”，这正是原文提到儿童的原因，不要因为找不到 child 这个原词而漏掉 three-year-olds 这一改写。",
          "analysis": "D 段通篇讲 Cook 与同事研究大调和小调和弦的情绪差异：第二句说几百年来作曲者都知道大调和弦听上去欢快、小调和弦听上去悲伤；末句正是本题的落点：“In tests, even three-year-olds have been shown to link music in a major mode to happy faces and minor modes to sad faces.”（在测试中，就连三岁幼儿也被证明会把大调音乐与快乐的面孔、小调音乐与悲伤的面孔联系起来）。这句话包含三个与题干对应的信息点：一是 In tests，说明这是研究或实验场景，对应题干 studies；二是 three-year-olds，明确给出了受试者的年龄，对应题干 children；三是 have been shown，说明这是研究得出的结果。因此“提及涉及儿童的研究”这一信息只出现在 D 段。要注意题干问的是“涉及儿童的研究”，而不一定是“研究儿童的专题”，只要段落中出现以幼儿为受试者的实验记录就符合条件；D 段是全篇唯一出现受试者年龄的段落，其他段落提到的受试者都是 volunteers（志愿者，见 F、G 段）或 patients（患者，见 G 段），均未交代年龄，故不能选。",
          "traps": [
            "为什么不是 G 段：G 段虽然也讲了研究（brain scans on volunteers），但受试者被称为 volunteers，本段唯一的限定条件是 first-rate physical health but musically untrained（身体健康、未受过音乐训练），完全没有提到他们的年龄，因此不存在“涉及儿童”的信息。",
            "为什么不是 A 段：A 段讨论的是网络音乐推荐算法（trawling our existing files or online listening habits），说的是网站如何根据收听习惯推荐艺人，既没有研究设计，也没有任何年龄信息。",
            "为什么不是 I 段：I 段提到 Zatorre 正在研究“有些人是否拥有更强的音乐脑”，讨论的是能力差异与训练，全文没有儿童或年龄的字样。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a mention of the discovery of significant artefacts",
          "translation": "提及重要文物（器物）的发现",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Given that archaeologists have found musical instruments played by Neanderthals at least 50,000 years ago, why have scientists taken so long to investigate such a source of pleasure?"
          },
          "synonyms": [
            "“the discovery of significant artefacts” 同义替换为原文的 “archaeologists have found musical instruments”（考古学家发现了乐器），乐器即古代遗物、器物",
            "“significant” 对应原文的 “played by Neanderthals at least 50,000 years ago”，距今至少五万年的尼安德特人乐器，说明其年代久远、意义重大",
            "“a mention of” 对应原文用 Given that 引出的背景陈述，作者正是以这一发现作为发问的前提"
          ],
          "locatingTip": "定位：题干的关键词是 artefacts（人工制品、文物）与 discovery，回原文找“发现”与“古代物件”的组合。全篇涉及实物（文物）搜寻、发现的表述有两处：A 段 The search often turns up surprises（指网络检索推荐，与文物无关），B 段 archaeologists have found musical instruments played by Neanderthals（考古学家发现的乐器），显然只有后者是真正的文物发现。确定答案技巧：artefacts 是抽象名词，雅思考生要能把它落到原文的具体名词 musical instruments 上；同时注意 significant 这一评价性形容词，原文没有出现 important、valuable 之类的词，但用 at least 50,000 years ago（至少五万年前）以年代之古老来体现其重要，这类“以事实代替评价”的写法在段落匹配题中很常见。",
          "analysis": "B 段先说明作曲家几个世纪以来都在凭关于“某些声音组合有情感感染力”的既有观念创作，而科学家直到现在才开始揭示这些声音组合为何能对心智产生如此巨大的影响；随后用 Given that 引出本题定位句：“Given that archaeologists have found musical instruments played by Neanderthals at least 50,000 years ago, why have scientists taken so long to investigate such a source of pleasure?”（既然考古学家发现了尼安德特人至少五万年前演奏过的乐器，科学家为何迟迟不去研究这样一种快乐的来源？）。句中 archaeologists have found 对应题干的 the discovery，其宾语 musical instruments 即题干所说的 artefacts（器物、遗物，古代乐器正是最典型的器物之一），而 played by Neanderthals 与 at least 50,000 years ago 共同说明这些器物非同一般，对应题干中的 significant。这一句同时连接了本段与前一段的逻辑：正因为古代乐器早已被发现（文物线索），科学家研究音乐情感为何如此滞后才显得奇怪。因此“提及重要文物的发现”落在 B 段。",
          "traps": [
            "为什么不是 A 段：A 段确实出现了 found 的近义表达 The search often turns up surprises，但该句讲的是网络音乐搜索时常给用户带来惊喜，属于在线推荐行为，与考古器物毫无关系。",
            "为什么不是 C 段：C 段讨论心理学家研究音乐情感的两个障碍（形象问题与“音乐反应是后天习得”的旧观念），既无文物也无发现。",
            "为什么不是 F 段：F 段提到在 McGill 大学做的研究（carried out studies），属现代实验研究，与古代器物无关；本题的干扰点在于 studies 一词，但题干要的是文物发现，因此不能选。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "reasons why a particular aspect of music has not been researched",
          "translation": "音乐某一特定方面一直未被研究的原因（为何某个音乐议题迟迟得不到研究）",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "there's an image problem in tackling the emotionality of music,' says Professor Norman Cook of Kansai University in Osaka, Japan, one of the pioneers of the new science of music. 'Emotion is such a slippery topic.'"
          },
          "synonyms": [
            "“a particular aspect of music” 同义替换为原文的 “the emotionality of music”（音乐的情感性）",
            "“reasons” 对应原文并列列出的两项障碍：一是 “there's an image problem in tackling the emotionality of music”（研究音乐情感会带来形象问题），二是 “The other problem, says Cook, is the long-standing principle among psychologists that our response to music is an acquired one”（另一个问题是心理学家长期以来认为音乐反应是后天习得的）",
            "“has not been researched” 同义替换为原文的 “taken so long to investigate”（迟迟未去研究，见 B 段），以及 C 段 “in tackling the emotionality of music” 所隐含的“研究长期受阻、尚未真正开展”"
          ],
          "locatingTip": "定位：题干的关键词是 reasons（复数，原因）与 has not been researched（未被研究）。这类“为何没人研究”的表述在全篇只有 C 段成体系地给出解释：该段连续用 there's an image problem、The other problem 两个并列的信号词把“没被研究的原因”逐条列出。确定答案技巧：段落匹配题遇到 reasons 时要找“并列罗列原因”的段落结构，而不是找某一句话。C 段先引 Cook 的话说明研究音乐情感有形象问题（心理学家怕被同行认为不严谨），紧接着说 The other problem 是心理学界长期以来的原则——人对音乐的反应是后天获得的，而非声音作用于脑细胞所致；两个 problem 合起来回答了 B 段末尾“为什么科学家迟迟不研究”的疑问，因此答案锁定 C。",
          "analysis": "C 段是本篇解释“研究空白”的段落，其结构非常清楚：先引用 Cook 的话：“For psychologists, who are always desperate to show that their work is rigorous, there's an image problem in tackling the emotionality of music”（对于总想证明自己研究严谨的心理学家来说，去研究音乐的情感性存在形象问题），并补充一句 “Emotion is such a slippery topic.”（情感是个太滑溜、难以把握的话题）；随后用 “The other problem, says Cook, is the long-standing principle among psychologists that our response to music is an acquired one, rather than something that is stimulated by the effect of sound on our brain cells.”（另一个问题是心理学家长期以来的原则，即我们对音乐的反应是后天习得的，而不是声音作用于脑细胞所激发的）。这两处合起来正是题干所问的 reasons why a particular aspect of music has not been researched：particular aspect of music 对应 the emotionality of music（音乐的情感性）；reasons 对应 “形象问题”与“音乐反应是后天习得”这一传统观念这两个障碍；has not been researched 则与 B 段末尾 “why have scientists taken so long to investigate such a source of pleasure?” 相呼应，说的是研究长期缺位。因此信息落在 C 段。答题提醒：原文并未出现 not researched 这样的字样，它是通过对“研究困难”的陈述间接表达出来的，需要理解“有障碍”才等价于“没有被研究”。",
          "traps": [
            "为什么不是 B 段：B 段末尾虽然提出了 “why have scientists taken so long to investigate such a source of pleasure?”（为什么科学家研究得这么晚），但这一句是设问、只是引出问题，具体的原因解释要到下一段 C 段才给出。段落匹配题要选“给出信息”的段落，而不是“提出问题”的段落。",
            "为什么不是 A 段：A 段谈音乐推荐技术如何分析收听习惯，通篇乐观，没有任何关于研究受阻或研究空缺的论述。",
            "为什么不是 E 段：E 段讲库克对音高如何影响情绪的发现（大小调与哺乳动物、人类语音的升调降调），属于研究结果，不是研究缺失的原因。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "a mention of an unexpected discovery involving two different areas of the brain",
          "translation": "提及一项涉及大脑两个不同区域的意外发现",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "the rhythms triggered activity in parts of the brain linked to hearing, but something even more surprising was that the rhythms also triggered activity in the motor regions of the brain"
          },
          "synonyms": [
            "“unexpected discovery” 同义替换为原文的 “something even more surprising”（更令人惊讶的事）以及紧邻前句的 “The results have been another revelation”（结果又是一个新发现）",
            "“two different areas of the brain” 同义替换为原文并列的两个区域：parts of the brain linked to hearing（与听觉相关的脑区）与 the motor regions of the brain（大脑的运动区）",
            "“a mention of” 对应原文以 found 引出的实验结论表述"
          ],
          "locatingTip": "定位：题干的核心词是 two different areas of the brain（大脑的两个区域），全篇提到脑区的段落集中在 F、G 两段。F 段谈的是愉悦音乐激活的古老脑回路（brain circuitry），只有一个整体回路；G 段则明确列出 two 个脑区：与听觉相关的部分和运动区。确定答案技巧：抓住表示“意外”的评价词。原文先铺垫 “The results have been another revelation.”（结果又是一个新发现），再用 “but something even more surprising was that …” 引出第二个脑区，两层“意外”叠加，正好对应题干的 unexpected discovery。而且本题要与第 18 题区分：第 18 题问动物与人类的音高对比，落在 E 段；本题问脑区，落在 G 段。",
          "analysis": "G 段讲牛津大学的 Joyce Chen 研究节奏为何难以抗拒。她先被一些涉及运动障碍患者的研究触动：给这些患者播放节奏强烈的音乐（例如进行曲），他们的行走能力能够得到改善；为了弄清单纯的聆听为何能帮助残疾患者，Chen 与蒙特利尔国际脑、音乐与声音研究实验室的同事对正在听节奏性声音的志愿者做了脑部扫描。本段最后两句是本题的落点：“The results have been another revelation. Chen and her colleagues found the rhythms triggered activity in parts of the brain linked to hearing, but something even more surprising was that the rhythms also triggered activity in the motor regions of the brain, linked to active movement.”（结果又是一个新发现。Chen 和同事发现，节奏激发了与听觉有关的脑区的活动，但更令人惊讶的是，节奏还激发了与主动运动有关的大脑运动区的活动）。两点与题干精确对应：another revelation 与 even more surprising 合起来对应 unexpected discovery；parts of the brain linked to hearing 与 the motor regions of the brain 对应 two different areas of the brain。原文用 also 强调第二个脑区的出现超出预期，这正是“意外发现”的来源，因此答案锁定 G 段。",
          "traps": [
            "为什么不是 F 段：F 段虽然也谈“意外”——The biggest surprise was the evidence that pleasurable music activates brain circuitry，但落点是“一段古老脑回路被激活”，段落里只有单一的 circuitry 概念，没有出现两个并列脑区的对照，与题干的 two different areas 不符。",
            "为什么不是 H 段：H 段是 Chen 对上一段发现的评论（mere act of just listening triggers motor-neural activity），提到的是 auditory-motor loop（听觉与运动回路）这一整体概念，属于对 G 段发现的应用与解释，本身没有再列出两个脑区的发现过程。",
            "为什么不是 I 段：I 段谈 Zatorre 研究“某些人是否拥有更强的音乐脑”，使用 brain features（脑部特征）这一泛称，并未指出具体是哪两个脑区被激活。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "a comparison of tone variations produced by certain animals and humans",
          "translation": "对某些动物与人类所产生的音高变化（声调变化）的比较",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "The same change in pitch works as an emotional telltale in communication between some mammals, where rising pitch is used to communicate weakness or defeat, while falling pitch signals social dominance. It's also present in our speech."
          },
          "synonyms": [
            "“tone variations” 同义替换为原文的 “change in pitch”（音高的变化）与 “rising pitch … falling pitch”（升调与降调）",
            "“certain animals” 同义替换为原文的 “some mammals”（某些哺乳动物）",
            "“humans” 同义替换为原文的 “our speech”（我们的说话声）与下一句的 “A rising inflection is used to denote questions, politeness or deference”",
            "“a comparison” 对应原文的 “The same change in pitch”（同样的音高变化）与 “It's also present in our speech”（它也出现在我们的语言中）这两处表“相同、也”的并列连接"
          ],
          "locatingTip": "定位：题干的关键词是 animals 与 humans，回原文找“动物”与“人”同时出现的句子。全篇出现动物的地方有两处：F 段 We share it with rats and other distant relatives on the evolutionary tree（与老鼠等远亲共有脑回路）和 E 段 in communication between some mammals … It's also present in our speech（某些哺乳动物之间的交流……我们的语言中也有）。前者只说共有回路，没有谈音高变化；后者同时给出哺乳动物的升降调与人类语音的升降调，构成直接的对比。确定答案技巧：判定“对比”类信息要看原文是否把两者并列陈述，E 段用 The same change in pitch 和 It's also present in our speech 把动物与人类放在同一逻辑层面，因此答案锁定 E 段。",
          "analysis": "E 段是库克解释大调小调情绪效应的段落：他指出，悲伤的小调和弦可以通过把一组音中的某个音的音高抬高来构成，而降低音高则产生大调和弦；随后把这一规律推广到动物与人类的交流之中，本段中间至末尾的三句是本题落点：“The same change in pitch works as an emotional telltale in communication between some mammals, where rising pitch is used to communicate weakness or defeat, while falling pitch signals social dominance. It's also present in our speech.”（同样的音高变化在几种哺乳动物的交流中充当情绪的提示信号：升调用以传达虚弱或失败，降调则表示社会支配地位。这也出现在我们的语言中。）最后再引库克的话：“A rising inflection is used to denote questions, politeness or deference, whereas a falling inflection signals dominance”。题干中的 tone variations 对应 change in pitch（升调与降调的差别），certain animals 对应 some mammals，humans 对应 our speech 与紧接的下句中的 inflection（升调与降调）；而原文用 The same … and It's also present 明确把动物与人类两种场景摆在一起比较，正符合题干的 a comparison。因此答案是 E 段。注意 F 段虽然也提到 rats，但那里的落点是“共有的一套奖励脑回路”，不涉及音高变化，不能与本题混淆。",
          "traps": [
            "为什么不是 F 段：F 段确实出现了动物（rats and other distant relatives on the evolutionary tree），但谈的是人与鼠共有的一段古老脑回路，以及它与食物等生物性奖赏的关系，全段没有 pitch、tone、inflection 之类的音高概念，构不成“音高变化的比较”。",
            "为什么不是 D 段：D 段谈的是大调与小调和弦的情绪差别以及幼儿的反应，虽然涉及声音与情绪，但没有任何动物内容，缺少比较的另一方。",
            "为什么不是 C 段：C 段讨论研究音乐情感为何困难，提到 “Emotion is such a slippery topic”，属于研究障碍，与动物和人类的音高对比无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–22 摘要填空（Complete the summary，NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 22
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "The participants in this study led by Dr Chen were chosen because they were not musicians, and they demonstrated a good state of 19 ________.",
          "translation": "由陈博士主持的这项研究，其参与者之所以被选中，是因为他们不是音乐从业者（未受过音乐训练），而且他们表现出良好的 ________ 状态。",
          "answer": "physical health",
          "wordClass": "名词短语（不可数，指身体状况；作介词 of 的宾语，由形容词 physical 修饰不可数名词 health 构成，共两个词，符合 NO MORE THAN TWO WORDS；不加冠词、不变复数）",
          "locating": {
            "paragraph": "G",
            "quote": "The criteria for selecting these volunteers were that they should be in first-rate physical health but musically untrained."
          },
          "synonyms": [
            "“were chosen” 同义替换为原文的 “The criteria for selecting these volunteers”（挑选这些志愿者的标准）",
            "“they were not musicians” 同义替换为原文的 “musically untrained”（未受过音乐训练）",
            "“a good state of …” 同义替换为原文的 “in first-rate physical health”，first-rate 即“一流的、极好的”，与 good 同向",
            "空格所需的词就是原文被 first-rate 修饰的名词短语 “physical health”"
          ],
          "locatingTip": "定位：摘要首句已经给出研究者与实验地点的关键词——researchers in Oxford and Montreal、Dr Chen，回原文找同时满足这两个条件的研究描述，落在 G 段：“Dr Chen and colleagues from the International Laboratory for Brain, Music and Sound Research in Montreal …”。确定答案技巧：摘要把原文的“筛选标准”改写成了“他们被选中的原因”，所以要在 G 段找 criteria 或 were chosen 一类的表述，原文对应句是 “The criteria for selecting these volunteers were that they should be in first-rate physical health but musically untrained.”。句中并列两个条件，第一个条件 musically untrained 已经由摘要的 they were not musicians 用掉，剩下的 first-rate physical health 就是第 19 空的答案。填空时注意题目限 NO MORE THAN TWO WORDS，physical health 恰为两个词，需整块照抄，不能只写 health（会丢掉“身体”这一关键限定），也不能写成 physical health condition 之类的自创短语。",
          "analysis": "摘要部分第 19 空与第 22 空都取材于 G 段，本题对应的是 G 段关于志愿者筛选标准的句子：“In an attempt to find out why the simple act of listening to music might help disabled patients, Dr Chen and colleagues from the International Laboratory for Brain, Music and Sound Research in Montreal carried out brain scans on volunteers who were listening to rhythmic sounds. The criteria for selecting these volunteers were that they should be in first-rate physical health but musically untrained.”（为了弄清为什么单纯听音乐就能帮助残疾患者，陈博士与蒙特利尔国际脑、音乐与声音研究实验室的同事对正在聆听节奏性声音的志愿者进行脑部扫描。挑选这些志愿者的标准是：身体状况一流，但没有受过音乐训练。）摘要把这句话拆成两个信息点：一是 they were not musicians，对应 musically untrained；二是 a good state of 19，对应 in first-rate physical health。这里的改写有两处值得注意：good 对应 first-rate（评价词程度相当），state 对应 health（状态即健康状况），因此第 19 空填 physical health。从词性看，a good state of 后面要求名词性成分，health 是不可数名词，前面的 physical 作定语不可缺少，因为它区分的是“身体的健康”而非泛泛的状态。答案写 physical health 两个词，符合 NO MORE THAN TWO WORDS 的限制。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "The participants were given 20 ________ while music with a very noticeable rhythm was being played.",
          "translation": "在播放节奏非常明显的音乐时，参与者接受了 ________。",
          "answer": "brain scans",
          "wordClass": "名词短语（可数名词 scan 的复数形式，由名词 brain 作定语修饰；作被动结构 were given 的宾语（保留宾语），指参与者接受的脑部扫描检查，共两个词；原文用复数，故不加冠词、不用单数）",
          "locating": {
            "paragraph": "G",
            "quote": "Dr Chen and colleagues from the International Laboratory for Brain, Music and Sound Research in Montreal carried out brain scans on volunteers who were listening to rhythmic sounds."
          },
          "synonyms": [
            "“were given” 同义替换为原文的 “carried out … on volunteers”（对志愿者实施了某项检查），原文的宾语是志愿者，检查手段由 carried out 引出",
            "“music with a very noticeable rhythm” 同义替换为原文的 “rhythmic sounds”，并与本段前文 “music that had a strong rhythm”（节奏强烈的音乐）同义",
            "“while … was being played” 同义替换为原文的 “who were listening to”，即在做检查的同时听音乐",
            "空格所需名词对应原文的 “brain scans”（脑部扫描）"
          ],
          "locatingTip": "定位：空格所在句紧接第 19 空，讲的仍是 Chen 的实验，回 G 段找“实验给参与者做了什么”。G 段中与实验操作相关的动词短语只有两个：played to these patients（给患者播放音乐）和 carried out brain scans on volunteers（对志愿者做脑部扫描）。摘要已经用 while music … was being played 交代了播放音乐这一动作，剩下的 carried out brain scans 就是第 20 空的答案。确定答案技巧：注意主被动转换——原文是研究者 carried out brain scans on volunteers（研究者给志愿者做扫描），摘要把焦点转到参与者身上，写成 The participants were given brain scans（参与者接受了脑部扫描），语义完全相同。填空时保留复数形式 brain scans，因为原文用的是复数，且 scans 指一系列扫描；只写 brain 会因信息不完整而欠佳，写 scanning 则不是原文用词。",
          "analysis": "G 段在交代完研究目的与筛选标准之后，具体描述了实验操作：“Dr Chen and colleagues from the International Laboratory for Brain, Music and Sound Research in Montreal carried out brain scans on volunteers who were listening to rhythmic sounds.”（陈博士与蒙特利尔国际脑、音乐与声音研究实验室的同事，对正在听节奏性声音的志愿者进行了脑部扫描）。摘要第 20 空所在句是“The participants were given 20 while music with a very noticeable rhythm was being played.”，两处对应关系是：carried out brain scans on volunteers 改写为 were given brain scans（主动变被动、施事者省略），who were listening to rhythmic sounds 改写为 while music with a very noticeable rhythm was being played（定语从句变时间状语从句，rhythmic 对应 very noticeable rhythm，而 very noticeable 又与 G 段前文的 strong rhythm 呼应）。因此空格填 brain scans。词性上，were given 后接名词性成分，原文的 scans 为复数，摘要也应保持复数 brain scans（材料给出 NO MORE THAN TWO WORDS，两个词刚好符合）。本题容易误填 volunteers，但该词在原文中是被扫描的对象（on volunteers），并非扫描这一手段本身，与空格的位置和语义都不符。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Previous research had indicated that listening to this type of music seemed to be of assistance to some 21 ________ people.",
          "translation": "此前的研究表明，聆听这类音乐似乎对某些 ________ 的人有帮助。",
          "answer": "disabled",
          "wordClass": "形容词（作前置定语修饰 people，说明其身体状况；原文为 help disabled patients 中的形容词 disabled，保持原级、不加 the，也不改为名词 disability）",
          "locating": {
            "paragraph": "G",
            "quote": "In an attempt to find out why the simple act of listening to music might help disabled patients"
          },
          "synonyms": [
            "“be of assistance to” 同义替换为原文的 “help”（帮助）",
            "“some … people” 同义替换为原文的 “patients”（患者），残疾患者即某些有障碍的人",
            "“Previous research had indicated” 对应原文 “Her interest was sparked by studies involving patients with movement difficulties” 以及 “they were able to improve their walking ability, says Chen”，即早于本次脑扫描研究的既有研究",
            "空格所需词对应原文的 “disabled”（disabled patients 中的定语）"
          ],
          "locatingTip": "定位：空格前有 some，后有 people，说明要填一个修饰人的词；同一句还提示“聆听这类音乐有助于某人”，回 G 段找 help 加宾语的表述，原文对应 “the simple act of listening to music might help disabled patients” 以及 “She believes the discovery … may cast light on why disabled patients can benefit from listening to music”。确定答案技巧：摘要里 Previous research 指本次脑扫描研究之前的既有研究，即 G 段 The results 之前的 “If music that had a strong rhythm … was played to these patients, they were able to improve their walking ability” 所述内容；而“有帮助”这一语义在原文出现两次，宾语都是 disabled patients。题目用 assistance 替换 help、用 some … people 替换 patients，把形容词的位置留了出来，因此第 21 空填 disabled。注意 disabled 在原文中作定语直接置于 patients 之前，摘要同样保留形容词形式，不要写成 disability（那是名词，无法修饰 people），也不要加 the disabled（超出词数与格式要求）。",
          "analysis": "本题与第 22 空同取 G 段。G 段先交代 Chen 的研究兴趣来源：“Her interest was sparked by studies involving patients with movement difficulties. If music that had a strong rhythm – say, a marching band – was played to these patients, they were able to improve their walking ability, says Chen.”（她的兴趣源于一些涉及有运动困难的病人的研究。如果给这些病人播放节奏强烈的音乐，比如一首进行曲，他们的行走能力就能得到改善）。随后点出研究动机：“In an attempt to find out why the simple act of listening to music might help disabled patients, Dr Chen and colleagues … carried out brain scans …”（为了弄清为什么单纯听音乐就能帮助残疾患者，陈博士与同事……进行了脑部扫描）。摘要把这两层信息合并为一句：“Previous research had indicated that listening to this type of music seemed to be of assistance to some 21 people.”，其中 Previous research 对应 G 段此前已经存在的既有研究（即给病人放进行曲的那批研究），be of assistance to 对应 help，空格修饰的 people 对应原文 patients，而原文在这两处对病人的限定词就是 disabled，因此答案填 disabled。从语法看，空格位于 some 与 people 之间，只能填形容词或名词定语，原文的 disabled 正好可以照抄；语义上，摘要在本空后面还有一句 “By listening to it, their 22 ability had definitely got better”，与 G 段 improve their walking ability 对应，也印证这几个空都出自同一段关于残疾患者的内容。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "By listening to it, their 22 ________ ability had definitely got better.",
          "translation": "通过聆听这类音乐，他们的 ________ 能力确实有所改善。",
          "answer": "walking",
          "wordClass": "动名词（作前置定语修饰 ability，说明能力的具体类别；原文为 improve their walking ability，与原文词形一致 walking，不加 s、不改为动词 walk）",
          "locating": {
            "paragraph": "G",
            "quote": "If music that had a strong rhythm – say, a marching band – was played to these patients, they were able to improve their walking ability, says Chen."
          },
          "synonyms": [
            "“had definitely got better” 同义替换为原文的 “were able to improve”（得到了改善）",
            "“By listening to it” 同义替换为原文的 “If music that had a strong rhythm … was played to these patients”（音乐被播放给他们听）",
            "空格所需词对应原文 “their walking ability” 中的定语 “walking”"
          ],
          "locatingTip": "定位：题干保留了 ability 一词，回原文搜 ability，G 段中只此一处：“they were able to improve their walking ability”（全篇 ability 共出现两处，另一处在 I 段 “This ability could be enhanced by training”，与本题无关）。确定答案技巧：题干说“他们的某项能力确实变好了”，原文说的是 “they were able to improve their walking ability”，improve 对应 had definitely got better，their … ability 则是原词复现，因此 ability 前面缺的那个定语就是要填的词 walking。填空时要注意此处 walking 是动名词作定语，说明能力的类别（行走能力），必须保持原形，不能写成 walk ability、walked 或 walks；同时它只占一个词，符合 NO MORE THAN TWO WORDS。另外要避免被 patients with movement difficulties（运动困难）误导而填 movement，因为原文明确说的是行走能力得到改善，而 movement 只是那批病人原本的困难类别。",
          "analysis": "第 22 空仍在 G 段。原文相关句为：“Her interest was sparked by studies involving patients with movement difficulties. If music that had a strong rhythm – say, a marching band – was played to these patients, they were able to improve their walking ability, says Chen.”（她的兴趣源于一些涉及有运动困难的病人的研究。陈说，如果给这些病人播放节奏强烈的音乐，比如一首进行曲，他们的行走能力就得到了改善）。摘要末两句写成 “Previous research had indicated that listening to this type of music seemed to be of assistance to some 21 people. By listening to it, their 22 ability had definitely got better.”（此前的研究表明聆听这类音乐似乎对某些人有所帮助；通过聆听，他们的某项能力确实变好了）。对应关系是：If music that had a strong rhythm … was played to these patients 改写为 By listening to it（从音乐被播放，改写为患者聆听）；were able to improve 改写为 had definitely got better；而 their walking ability 被拆成 their 22 ability，把中间的定语留空。因此第 22 空填 walking。从词性看，这里需要的是修饰 ability 的名词性定语，英文中常用动名词充当（walking ability 即行走能力），保持原形即可；从语义看，G 段全程围绕“节奏帮助运动障碍患者改善行走”展开，下一段 H 段还提到 tapping our feet、move or dance 与听觉—运动回路，也都指向 movement 与 walking 这一主题，可相互印证。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 23–26 人物观点匹配（Match each statement with the correct researcher，A–C）",
      "mode": "per_question",
      "questionRange": {
        "start": 23,
        "end": 26
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Research into the brain activity set off by music may help people with speech defects.",
          "translation": "对音乐所引发的脑活动的研究，可能对有言语缺陷的人有帮助。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "H",
            "quote": "may cast light on why disabled patients can benefit from listening to music – and could also prove useful with other impairments such as those involved in sound production."
          },
          "synonyms": [
            "“speech defects” 同义替换为原文的 “impairments such as those involved in sound production”（与发声有关的障碍），并在下一句被具体化为 “people who talk with a stutter”（口吃的人）",
            "“may help” 同义替换为原文的 “could also prove useful”（可能被证明有用）",
            "“Research into the brain activity set off by music” 对应原文的 “the discovery of this deep connection between music and movement”，也与 H 段首句 “the mere act of just listening triggers motor-neural activity” 相呼应",
            "人名线索：本段由 Chen 的引语与 She believes 引出，说话者是 Dr Joyce Chen，对应名单中的 C"
          ],
          "locatingTip": "定位：本题是观点匹配，先圈定题干的独特信息点——speech defects（言语缺陷），回原文找与说话、发声有关的障碍。全篇只在 H 段末尾出现 “people who talk with a stutter might have problems in this auditory-motor loop”（口吃者在这条听觉—运动回路上可能有问题），以及紧邻的 “other impairments such as those involved in sound production”（与发声有关的其他障碍）。确定答案技巧：匹配题务必把人名与观点一起看。H 段是 Chen 说的话（’Somehow, the mere act of just listening triggers motor-neural activity…' says Chen），整段以 Dr Joyce Chen 为主语，因此答案是 C。注意名单提示字母可以重复使用，本题选 C 与第 23 题之外的其他 Chen 相关题目无关，不必顾虑。",
          "analysis": "H 段是 Chen 对 G 段脑扫描发现的解读与延伸：“'Somehow, the mere act of just listening triggers motor-neural activity. Maybe this is one reason why we often tap our feet, move or dance when hearing music,' says Chen. She believes the discovery of this deep connection between music and movement may cast light on why disabled patients can benefit from listening to music – and could also prove useful with other impairments such as those involved in sound production. 'It's been shown that people who talk with a stutter might have problems in this auditory-motor loop.'”（“不知何故，仅仅聆听这一动作就触发了运动神经活动。也许这就是我们听音乐时常常抖脚、动起来或跳舞的原因之一，”Chen 说。她认为，音乐与运动之间存在这种深层联系的发现，可能有助于解释残疾患者为何能从聆听音乐中获益，也可能在与发声有关的其他障碍上派上用场。“已有研究表明，说话口吃的人可能在这条听觉—运动回路上存在问题。”）。题干说“对音乐引发的脑活动的研究可能帮助有言语缺陷的人”，三点对应明确：Research into the brain activity set off by music 对应 the discovery of this deep connection between music and movement 与 motor-neural activity；may help 对应 could also prove useful；speech defects 对应 impairments involved in sound production 以及 people who talk with a stutter。这一段全部是 Chen 的观点，所以答案是 C。",
          "traps": [
            "为什么不是 A（Professor Norman Cook）：库克的研究集中在大调与小调和弦的情绪差异，以及音高升降在哺乳动物交流与人类语音中传递情绪的作用（D、E 段）。他虽然谈到语音的升调与降调（a rising inflection），但落点是“表达疑问、礼貌或支配地位”，从未涉及语言障碍、口吃或发声缺陷的治疗价值，与题干不符。",
            "为什么不是 B（Professor Robert Zatorre）：扎托雷的研究（F、I 段）讨论愉悦音乐激活的古老奖励脑回路，以及个体音乐能力差异与训练的作用，全篇没有提到任何言语或发声方面的缺陷。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "It may be possible in time to improve a person's ability to recognise certain musical characteristics.",
          "translation": "假以时日，一个人识别某些音乐特征的能力也许是可以提高的。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "I",
            "quote": "how well somebody can do things like identify a slight change in a melody,' explains Zatorre. 'This ability could be enhanced by training"
          },
          "synonyms": [
            "“to improve” 同义替换为原文的 “could be enhanced”（可以被增强）",
            "“a person's ability to recognise certain musical characteristics” 同义替换为原文的 “how well somebody can do things like identify a slight change in a melody”（某人识别旋律细微变化的能力，即识别音乐特征的能力）",
            "“It may be possible in time” 对应原文的 “could be enhanced by training”，说明这种能力在未来可以通过训练逐步提高",
            "人名线索：本句以 “explains Zatorre” 引出，说话人为 Professor Robert Zatorre，对应名单中的 B"
          ],
          "locatingTip": "定位：本题的关键词是 ability、recognise、musical characteristics，回原文搜 ability 与 training。全篇出现 training（训练）的只有 I 段末尾：“This ability could be enhanced by training – just like someone born with a predisposition to building strong muscles can enhance them by taking up weightlifting.”，同段前一句还直接列出了“识别旋律细微变化”这一能力。确定答案技巧：匹配题先看谁在说话——“certain subtle brain features that can tell us how well somebody can do things like identify a slight change in a melody,' explains Zatorre”，两句都由 Robert Zatorre 说出，因此答案是 B。本题的干扰点是 A 选项的 Cook 也谈音乐特征（和弦、音高），但那属于情绪反应而非能力提升；务必以“谁说的”为准。",
          "analysis": "I 段是全文最后一段，讲这一新兴领域的研究展望：“For researchers working in this new area of science, these early discoveries hold the promise of much more to come. Zatorre and his colleagues are investigating whether some people have more musical brains than others. 'We can see certain subtle brain features that can tell us how well somebody can do things like identify a slight change in a melody,' explains Zatorre. 'This ability could be enhanced by training – just like someone born with a predisposition to building strong muscles can enhance them by taking up weightlifting.'”（对于从事这一新科学领域的研究者来说，这些早期发现预示着更多成果即将到来。扎托雷和同事正在研究是否有些人的音乐脑比其他人更强。“我们能看到某些微妙的脑部特征，它们能告诉我们一个人完成诸如识别旋律细微变化这类事情的水平如何，”扎托雷解释说。“这种能力可以通过训练得到增强——就像天生有长肌肉倾向的人可以通过举重来进一步增强一样。”）。题干包含两项要素：一是 it may be possible in time to improve（未来有可能提高），对应 could be enhanced，并通过 like someone … can enhance them by taking up weightlifting 的类比强调“后天可提升”；二是 a person's ability to recognise certain musical characteristics，对应 identify a slight change in a melody（识别旋律中的细微变化）。两句引语的主语都是 Zatorre，因此答案是 B。",
          "traps": [
            "为什么不是 A（Professor Norman Cook）：库克确实研究“某些声音组合（和弦）与音高如何影响情绪”（D、E 段），但那是情绪反应的规律，不是个人识别音乐特征能力的可训练性；而且库克从未提到 training、enhance 之类的提升机制。",
            "为什么不是 C（Dr Joyce Chen）：陈博士（G、H 段）研究的是节奏激发听觉区与运动区、以及聆听音乐对残疾患者行走能力和发声障碍的帮助，落点是节奏与运动，与“识别音乐特征的能力能否通过训练提高”无关。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "The way listeners react to certain musical combinations may be similar to the way they react to other noises.",
          "translation": "听者对某些音乐组合的反应方式，可能与他们对其他声音的反应方式相似。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "According to Cook, analysis of how people respond to notes suggests a link with how our brains interpret certain sounds in everyday life."
          },
          "synonyms": [
            "“listeners react” 同义替换为原文的 “how people respond”（人们如何反应）",
            "“certain musical combinations” 同义替换为原文的 “notes”（构成和弦的音的组合），本段前文也点明讨论对象是小调与大调和弦",
            "“other noises” 同义替换为原文的 “certain sounds in everyday life”（日常生活中的某些声音）",
            "“may be similar to” 同义替换为原文的 “suggests a link with”（暗示与……存在关联）"
          ],
          "locatingTip": "定位：本题的关键词是 musical combinations 与 other noises。musical combinations 是抽象说法，原文对应的具体词是 chords（和弦）或 notes（音），而“日常生活中的其他声音”对应 sounds in everyday life。全篇出现 everyday life 的只有 E 段首句。确定答案技巧：找到句子后确认说话人——该句以 “According to Cook, …” 开头，整段都由库克的观点构成（He points out that …，says Cook），因此答案是 A（Professor Norman Cook）。要注意与第 26 题区分：第 26 题谈“愉悦音乐与动物奖励回路”，落在 Zatorre 的 F 段；本题谈“音乐组合与日常声音的类比”，落在 Cook 的 E 段，两题都在比较，但比较的对象和人物完全不同。",
          "analysis": "E 段首句是本题定位句：“According to Cook, analysis of how people respond to notes suggests a link with how our brains interpret certain sounds in everyday life.”（库克认为，对人们如何对音作出反应的分析，暗示这与我们大脑如何解读日常生活中某些声音存在关联）。题干把这一句的四层信息完整复述：listeners react 对应 how people respond；certain musical combinations 对应 notes（在 D、E 段的语境中，notes 指构成大小调和弦的乐音，即“音乐组合”）；other noises 对应 certain sounds in everyday life；may be similar to 对应 suggests a link with。本段后半部分进一步落实这种相似性：悲伤的小调可以通过抬高音高构成，降音高则产生大调，而同样的音高变化在若干哺乳动物的交流中充当情绪信号（升调表示虚弱或失败、降调表示支配地位），并且“It's also present in our speech”（也出现在我们的语言里）。整段既贯穿“音乐—日常声音”的类比，又始终以库克的判断为依据，因此答案是 A。",
          "traps": [
            "为什么不是 B（Professor Robert Zatorre）：扎托雷（F、I 段）研究的是愉悦音乐激活的古老奖励脑回路，以及与老鼠等远亲“共有”这套回路，落点是音乐的愉悦与生物性奖赏，并未把音乐组合与其他日常声音作类比。",
            "为什么不是 C（Dr Joyce Chen）：陈博士（G、H 段）研究节奏对大脑运动区的激发，以及聆听音乐对残疾患者运动与发声的帮助，讨论的是节奏与运动神经，不涉及音乐组合与日常声音的相似性。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "When a person reacts positively to music, the same parts of the brain are stimulated as when certain animals react to a positive outcome.",
          "translation": "当一个人对音乐产生积极反应时，大脑被激活的部位与某些动物对积极结果作出反应时被激活的部位相同。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "pleasurable music activates brain circuitry which has been in existence in the human brain for thousands of years, says Zatorre. 'We share it with rats and other distant relatives on the evolutionary tree"
          },
          "synonyms": [
            "“reacts positively to music” 同义替换为原文的 “pleasurable music”（令人愉悦的音乐，即人对其产生积极反应的音乐）",
            "“the same parts of the brain are stimulated” 同义替换为原文的 “activates brain circuitry” 以及 “We share it”（我们与它们共有同一套脑回路）",
            "“certain animals” 同义替换为原文的 “rats and other distant relatives on the evolutionary tree”（老鼠等进化树上的远亲）",
            "“a positive outcome” 同义替换为原文的 “biological rewards, like food”（诸如食物这样的生物性奖赏）"
          ],
          "locatingTip": "定位：本题的关键词是 animals 与 the same parts of the brain are stimulated。全篇提到动物的地方有两处：E 段 some mammals（讲音高变化），F 段 rats and other distant relatives on the evolutionary tree（讲共有的脑回路）。题干说的是“脑区相同”，与 F 段的 brain circuitry 及 We share it 精确对应。确定答案技巧：判定说话人——F 段的结论句以 “says Zatorre” 收尾，其后的直接引语 “We share it with rats …” 也出自扎托雷，因此答案是 B。要注意本题与第 25 题都在谈“相似性”，但第 25 题是音乐与其他声音的反应相似（库克，E 段），本题是人的脑区与动物脑区相同（扎托雷，F 段）。",
          "analysis": "F 段先承上：大调小调音乐触及我们与世界及彼此相处的一些基本特征，可能追溯到数百万年前；接着问“音乐整体上是否也在做类似的事”，并引出去加拿大 McGill 大学的研究：“At McGill University in Canada, Professor Robert Zatorre and his colleagues have carried out studies in which volunteers listen to different types of music while their brain activity is monitored. The biggest surprise was the evidence that pleasurable music activates brain circuitry which has been in existence in the human brain for thousands of years, says Zatorre. 'We share it with rats and other distant relatives on the evolutionary tree – and it's typically associated with biological rewards, like food, for example.'”（在加拿大麦吉尔大学，Robert Zatorre 教授和同事开展了让志愿者聆听不同类型音乐、同时监测其脑活动的研究。扎托雷说，最大的意外是，有证据表明令人愉悦的音乐激活了人类大脑中已存在数千年的脑回路。“我们与老鼠以及进化树上的其他远亲共有这套回路——它通常与诸如食物这类生物性奖赏相关联。”）。题干四要素逐一对应：reacts positively to music 对应 pleasurable music；the same parts of the brain are stimulated 对应 activates brain circuitry 与 We share it；certain animals 对应 rats and other distant relatives；a positive outcome 对应 biological rewards, like food。这些内容都是扎托雷的研究与引语，因此答案是 B。",
          "traps": [
            "为什么不是 A（Professor Norman Cook）：库克（E 段）确实把音乐与动物放在一起谈，但比较的是“音高升降”这种交流信号（rising pitch 与 falling pitch）在哺乳动物沟通和人类语音中的共同作用，落点是情绪与支配关系的表达，并未涉及脑区被激活或生物性奖赏。",
            "为什么不是 C（Dr Joyce Chen）：陈博士（G、H 段）研究的是节奏激活听觉区与运动区，以及聆听音乐对残疾患者行走和发声的帮助，全程没有提到动物，也没有提到奖赏回路。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
