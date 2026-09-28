(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-19", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-19",
  "meta": {
    "examId": "p2-high-19",
    "title": "Mind Music 脑海中的音乐(心灵音乐)",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–17 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 17
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "a description of the characteristics common to songs with earworms",
          "translation": "对容易变成耳虫的歌曲所共有的特征的一段描述。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Songs with earworm potential appear to share certain features: a repeating pattern of ups and downs in pitch, and irregular musical intervals."
          },
          "synonyms": [
            "“the characteristics common to songs with earworms” 同义替换为原文的 “Songs with earworm potential appear to share certain features”，即“容易成为耳虫的歌曲所共有的特征”",
            "“common to” 同义替换为原文的 “share”（共有、共享）",
            "“characteristics” 对应原文冒号后所列的具体项目 “a repeating pattern of ups and downs in pitch, and irregular musical intervals”（音高上下起伏的重复模式与不规则的音程）",
            "“songs with earworms” 对应原文的 “Songs with earworm potential”（有耳虫潜质的歌曲）"
          ],
          "locatingTip": "定位：题干的关键是 characteristics（特征）与 songs with earworms，属于“列举特征”类信息，扫读时盯住冒号引出清单的句式（share certain features: …）以及 pitch、intervals 这类音乐术语。确定答案技巧：八个段落中只有 G 段末句用 “Songs with earworm potential appear to share certain features” 明确列出耳虫歌曲的共同特征，冒号后面紧跟的两个名词短语就是特征的实质内容，与题干的 characteristics 严丝合缝，因此选 G。",
          "analysis": "本题问“哪一段描述了容易成为耳虫的歌曲所共有的特征”。G 段先讲重复是让歌曲“黏住”大脑的一个因素，引用 John Seabrook 关于“听觉钩子（hooks）”的说法，随后交代研究者正在把 100 首常被提及的歌曲与另外 100 首同样流行却未被列为耳虫的歌曲做旋律结构比对，最后一句给出比对结论：“Songs with earworm potential appear to share certain features: a repeating pattern of ups and downs in pitch, and irregular musical intervals.”（有耳虫潜质的歌曲似乎共有某些特征：音高上下起伏的重复模式，以及不规则的音程）。题干中的 description of the characteristics 正对应句中的 share certain features 与其后冒号列出的具体特征（音高起伏模式、不规则音程），common to songs with earworms 对应 songs with earworm potential，因此答案是 G。做段落信息匹配题时要注意：题干若出现 characteristics、features、factors 这类概括词，原文往往用冒号、破折号或 such as 引出清单，找到清单也就找到了段落。",
          "traps": [
            "为什么不是 D：D 段也在讨论“哪些歌容易被大脑抓住”，但落脚点是歌曲被听到的频率与场合（exposed to recently、heavy radio play、listened to music while doing other tasks），讲的是耳虫的来源与触发条件，并未列出歌曲本身共有的音乐特征。",
            "为什么不是 E：E 段讲的是耳虫为什么反复循环（片段式重复、泽加尼克效应），属于耳虫的形成机制，而不是耳虫歌曲的特征清单。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a justification for research into earworms",
          "translation": "为研究耳虫提供理由（说明研究耳虫的价值所在）。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Some neuroscientists and cognitive psychologists are studying earworms to explore the mysteries of memory and the part of the brain that is beyond our conscious control."
          },
          "synonyms": [
            "“a justification for research into earworms” 同义替换为原文的 “are studying earworms to explore the mysteries of memory and the part of the brain that is beyond our conscious control”，句中的 to explore 目的状语就是研究的理由",
            "“research into earworms” 对应原文的 “are studying earworms”",
            "“a justification” 对应同段前一句的 “what can be learned from them”（能从耳虫身上学到什么），说明研究的价值与意义"
          ],
          "locatingTip": "定位：justification 表示“研究这件事的理由、价值”，这类信息通常出现在文章开头交代研究动机的位置，直接到第 1 段找带 to explore、to understand 之类目的状语或 what can be learned 的句子。确定答案技巧：A 段先总述“一波新研究正在揭示耳虫为何出现、能从中获得什么”，紧接着一句用 are studying earworms to explore … 说明研究的目的是探索记忆之谜以及不受意识控制的那部分大脑，这正是“研究理由”的表达；B、C、D、F 各段给的是具体研究结果，E、G 段讲机制与特征，H 段讲未来计划，都不含“为什么值得研究”，故答案只能是 A。",
          "analysis": "题干问“哪一段给出了研究耳虫的理由”。A 段开头用一个设问引出话题（“Ever had a song stuck in your head, playing on an endless loop?”），随后写道：“a wave of new research is shining light on why they occur and what can be learned from them.”（一波新研究正在揭示它们出现的原因以及人们能从中了解什么），这已经点出研究的意义；紧接着的关键句是：“Some neuroscientists and cognitive psychologists are studying earworms to explore the mysteries of memory and the part of the brain that is beyond our conscious control.”（一些神经科学家和认知心理学家正在研究耳虫，以探索记忆的奥秘以及不受我们意识控制的那部分大脑）。句中 to explore 引导的目的状语就是研究耳虫的理由（justification），宾语 the mysteries of memory 与 the part of the brain that is beyond our conscious control 说明这项研究要解决的问题。识别这类题的要领是抓住抽象名词 justification 与原文目的状语、价值表述之间的对应关系，而不是去数哪一段提到 earworm 的次数最多。",
          "traps": [
            "为什么不是 B：B 段交代的是戈德史密斯学院两项已发表研究的结论（脑中歌声与录音一致、脑结构与情绪处理相关），属于研究结果，不是“为什么要研究”的理由。",
            "为什么不是 H：H 段说的是研究者计划下一步怎样做（测试结果的反向实验、招募不同年龄段的调查对象），属于未来计划与安排，而非研究耳虫的理由。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "a description of the brain's reaction to known and unknown songs",
          "translation": "对大脑在听到熟悉歌曲与陌生歌曲时所作反应的描述。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Dr Halpern's earlier studies showed that when subjects listened to the first few notes of familiar music, areas in the right frontal and superior temporal portions of the brain became activated, along with the supplementary motor area at the top, which is typically involved in remembering sequences. When the same subjects listened to unfamiliar music and were asked to recall it, there was activity in the left frontal portions of the brain instead."
          },
          "synonyms": [
            "“known songs” 同义替换为原文的 “familiar music”（熟悉的音乐）",
            "“unknown songs” 同义替换为原文的 “unfamiliar music”（不熟悉的音乐）",
            "“the brain's reaction” 同义替换为原文的 “areas in the right frontal and superior temporal portions of the brain became activated” 与 “there was activity in the left frontal portions of the brain”（脑区被激活、出现活动）",
            "“a description of …” 对应原文整段用两句话分别描述熟悉音乐与陌生音乐引起的大脑活动，两个句子的对照就是这段描述的实质"
          ],
          "locatingTip": "定位：题干的核心是 known 与 unknown 这组正反对比，回原文搜索 familiar 与 unfamiliar 这对反义词，它们出现在第 6 段 Halpern 早期研究的描述中（Dr Halpern's earlier studies … familiar music … unfamiliar music …）。确定答案技巧：这两句先说听熟悉音乐最初几个音符时右额叶、颞上区以及辅助运动区被激活，再说同一批受试者听不熟悉音乐并被要求回忆时改由左额叶出现活动，一正一反正好对应题干“大脑对已知歌曲与未知歌曲的反应”，因此选 F；注意 A 段虽然也讲大脑，但说的是“还没能直接观察耳虫发生时的大脑”，方向不同。",
          "analysis": "题干问“哪一段描述了大脑对已知歌曲与未知歌曲的反应”。第 6 段先声明研究者尚无法指出耳虫“住在”大脑的哪个位置，接着给出 Andrea Halpern 的脑成像研究结论：刻意想象音乐与真正听音乐会激活许多相同的神经回路；随后两句是本题的落点——“Dr Halpern's earlier studies showed that when subjects listened to the first few notes of familiar music, areas in the right frontal and superior temporal portions of the brain became activated, along with the supplementary motor area at the top, which is typically involved in remembering sequences. When the same subjects listened to unfamiliar music and were asked to recall it, there was activity in the left frontal portions of the brain instead.”（Halpern 博士更早的研究显示，当受试者听到熟悉音乐的最初几个音符时，大脑的右额叶与颞上区域，以及顶部通常负责记忆序列的辅助运动区被激活；而当同一批受试者听到不熟悉的音乐并被要求回忆时，出现活动的则改成了大脑左额叶区域）。familiar 对应题干的 known，unfamiliar 对应 unknown，became activated 与 there was activity 对应 the brain's reaction，两次对照的脑区差异构成完整描述，所以答案是 F。做本题时要留意原文用 familiar 而不是 known，遇到同义替换要敢于认定。",
          "traps": [
            "为什么不是 A：A 段只说研究者因为耳虫出现不可预测而无法观察耳虫发生时的大脑活动，并没有区分熟悉与陌生歌曲，更没有给出脑区反应。",
            "为什么不是 C：C 段讨论的是大脑在“低认知负荷”时自动播放音乐，对比的是任务难易程度，与歌曲是否熟悉无关。",
            "为什么不是 E：E 段解释耳虫片段为何反复循环，并提到泽加尼克效应，属于耳虫持续原因的解释，不涉及熟悉或陌生歌曲引起的大脑反应。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "details of proposed research into the frequency with which earworms occur in different age groups",
          "translation": "关于计划开展的研究——研究不同年龄段人群出现耳虫的频率——的细节。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Drs Stewart and Halpern are now working together to recruit survey participants for a study looking at whether people at different stages of life experience earworms differently."
          },
          "synonyms": [
            "“proposed research” 同义替换为原文的 “are now working together to recruit survey participants for a study”，正在招募参与者、尚待开展的研究即拟进行的研究",
            "“different age groups” 同义替换为原文的 “people at different stages of life”（处于人生不同阶段的人）",
            "“the frequency with which earworms occur” 对应原文的 “experience earworms differently”，并可由后文 Dr Halpern 所说 older people … have earworms less often（年长者出现耳虫更少）得到印证，即频率高低",
            "“details of” 对应原文随后给出的研究目的与初步反馈（招募调查对象、研究不同人生阶段的差异、现有的少量反馈）"
          ],
          "locatingTip": "定位：题干含 proposed research（拟开展的研究）与 different age groups（不同年龄群体），表示“未来的计划”，因此优先跳到文章最后一段。H 段首句 “The researchers plan next to test their results in reverse …” 与第二句 “Drs Stewart and Halpern are now working together to recruit survey participants …” 都在讲下一步的安排。确定答案技巧：锁定 “for a study looking at whether people at different stages of life experience earworms differently”，这正是“不同年龄段耳虫出现频率”的研究计划，再看该段结尾 Halpern 关于老年人 earworms less often 的说法，进一步印证频率主题，因此选 H。",
          "analysis": "题干问“哪一段给出了关于拟开展研究、研究不同年龄段耳虫出现频率的细节”。第 8 段属于收尾段，先说明研究者计划把结果反过来验证（播放耳虫类与非耳虫类歌曲的铃声，反复多次，看哪些会“卡住”），接着给出本题定位句：“Drs Stewart and Halpern are now working together to recruit survey participants for a study looking at whether people at different stages of life experience earworms differently.”（Stewart 博士与 Halpern 博士正合作招募调查对象，开展一项研究，考察处于人生不同阶段的人是否会有不同的耳虫体验）。句中 are now working together to recruit survey participants for a study 就是 proposed research 的具体细节，people at different stages of life 即不同年龄段，experience earworms differently 经后文 “older people might get them more often … But the few responses we have so far indicate that they have earworms less often”（年长者未必更常出现耳虫，目前少量反馈反而显示更少）明确指向出现频率的高低，与题干 frequency 完全对应，所以答案是 H。段落信息题中遇到 proposed、plan、next、future 这类表示“尚未发生”的提示词，一般直奔末段，因为计划通常写在文章结尾。",
          "traps": [
            "为什么不是 G：G 段比较的是 100 首常被提及的耳虫歌曲与 100 首同样流行却未被列为耳虫的歌曲的旋律结构，样本虽然很大，但研究对象是歌曲而不是人群，也不涉及年龄。",
            "为什么不是 F：F 段是已经完成的脑成像研究结果（Halpern 早期研究），属于既有发现，不是拟开展的、按年龄比较频率的研究。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 18–21 摘要填空（Choose ONE WORD ONLY from the passage）",
      "mode": "per_question",
      "questionRange": {
        "start": 18,
        "end": 21
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "They proved this by asking volunteers to record the rhythm of music using a monitor on their 18 ________.",
          "translation": "他们通过让志愿者用佩戴在身上的监测器记录音乐的节奏来证明这一点。",
          "answer": "wrist",
          "wordClass": "名词（单数；位于介词 on 之后、物主代词 their 之后作宾语，指身体部位，保持单数形式 wrist）",
          "locating": {
            "paragraph": "2",
            "quote": "Researchers had 17 volunteers tap to the beat of any earworm they heard during a four-day period while a device attached to their wrist recorded their movements."
          },
          "synonyms": [
            "“a monitor” 同义替换为原文的 “a device”（装置、设备）",
            "“on their [18]” 同义替换为原文的 “attached to their wrist”（固定在他们的手腕上）",
            "“record the rhythm of music” 同义替换为原文的 “tap to the beat” 与 “the tapping tempos were within 10% of the tempos of the original recordings”，即志愿者用手打节拍，装置记录其动作",
            "“They proved this” 对应原文 “showed that the singing we hear in our heads tends to be true to actual recordings”，即证明脑中的歌声与真实录音一致"
          ],
          "locatingTip": "定位：摘要以 Goldsmiths study 开头，回第 2 段找 Goldsmiths 的研究，第一句即给出“脑中歌声与真实录音一致”的结论，紧接第二句交代验证方式。确定答案技巧：题干说“让志愿者记录音乐节奏、用一个装在身体某处的监测器”，对应原文 “while a device attached to their wrist recorded their movements”，其中 device 对应 monitor，attached to their wrist 说明装置佩戴的位置，介词 to 后紧跟的 wrist 就是所填单词；同时注意 ONE WORD ONLY，只能填 wrist 一个词，不要把 their 一起写上。",
          "analysis": "摘要第一句概括第 2 段戈德史密斯学院研究的第一项结论：脑中的歌声与真实录音相当接近（“the singing we hear in our heads tends to be true to actual recordings”）。题干用 They proved this by asking volunteers to record the rhythm of music using a monitor on their [18] 复述验证方式，对应原文：“Researchers had 17 volunteers tap to the beat of any earworm they heard during a four-day period while a device attached to their wrist recorded their movements.”（研究者让 17 名志愿者在四天里用手打出所听到的任何耳虫的节拍，与此同时一只固定在手腕上的装置记录他们的动作）。两句的对应关系是：record the rhythm of music 对应 tap to the beat（按节拍敲击）与后文 the tapping tempos；a monitor 对应 a device；on their [18] 对应 attached to their wrist。因此空格答案是 wrist（手腕）。从词性看，空格位于介词 on 与物主代词 their 之后，需要一个表示身体部位的单数名词，wrist 完全符合，且只填一个词即可。",
          "traps": [
            "为什么不是 movements：movements 是装置记录的对象（recorded their movements），不是装置佩戴的位置，题干问的是 on their 之后的部位。",
            "为什么不是 monitor：monitor 对应原文的 device，已经出现在空格之前（using a monitor），不可能重复成为答案。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "Further research has demonstrated that those who hear earworms more frequently have brains that may deal with 19 ________ differently from other people.",
          "translation": "进一步的研究表明，更频繁听到耳虫的人，其大脑在处理某种信息的方式上可能与其他人不同。",
          "answer": "emotions",
          "wordClass": "名词（复数，指情绪；题干中作介词 with（deal with）的宾语，其后是副词 differently，故按原文用复数形式 emotions，不加冠词）",
          "locating": {
            "paragraph": "2",
            "quote": "Another Goldsmiths study, published this year in Consciousness and Cognition, found that people who report hearing earworms often, and find them most intrusive, have slightly different brain structures, with more gray matter in areas associated with processing emotions."
          },
          "synonyms": [
            "“Further research has demonstrated” 同义替换为原文的 “Another Goldsmiths study, published this year in Consciousness and Cognition, found that”",
            "“those who hear earworms more frequently” 同义替换为原文的 “people who report hearing earworms often”",
            "“have brains that may deal with [19] differently from other people” 同义替换为原文的 “have slightly different brain structures” 与 “more gray matter in areas associated with processing emotions”",
            "“deal with” 同义替换为原文的 “processing”（处理）"
          ],
          "locatingTip": "定位：题干用 further research 承接上一句的同校研究，回第 2 段找第二项戈德史密斯学院的研究，关键词是 Another Goldsmiths study 与 Consciousness and Cognition。确定答案技巧：原文说这类人的脑结构略有不同（slightly different brain structures），差异在于 “more gray matter in areas associated with processing emotions”，即与处理情绪有关的区域灰质更多；删掉修饰成分后，题干 “brains that may deal with [19] differently” 中的宾语就是 processing 的对象 emotions，故填 emotions。注意词形：原文就是复数 emotions，照抄即可。",
          "analysis": "摘要第二句转到“进一步的研究”，对应原文第 2 段后半部分的第二项研究：“Another Goldsmiths study, published this year in Consciousness and Cognition, found that people who report hearing earworms often, and find them most intrusive, have slightly different brain structures, with more gray matter in areas associated with processing emotions.”（另一项今年发表于 Consciousness and Cognition 的戈德史密斯学院研究发现，经常报告听到耳虫、并且觉得耳虫最侵入的人，脑结构略有不同，在处理情绪相关的区域灰质更多）。对应关系为：Further research has demonstrated 对应 Another Goldsmiths study … found；those who hear earworms more frequently 对应 people who report hearing earworms often；deal with 对应 processing。题干把“与处理情绪有关的脑区灰质更多”概括为“大脑在处理某事时与他人不同”，空格正是 processing 的宾语 emotions（情绪）。词性上，of、in、with 等介词后需名词，此处 processing 之后直接跟宾语，填名词 emotions，且原文即为复数形式，不需要改写或加冠词。",
          "traps": [
            "为什么不是 structures 或 gray matter：题干要求的是大脑“处理（deal with）”的对象，structures 与 gray matter 是原文用来描述差异的名词，属于被描述的对象，不是 processing 的宾语。",
            "为什么不是 intrusive：该词在原文中作宾语补足语，说明这些人觉得耳虫最扰人，是描述他们的感受，不是大脑处理的内容。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Dr Stewart also believes that the brain is 20 ________ by earworms when it is not focused on a task.",
          "translation": "Stewart 博士还认为，当大脑不专注于某项任务时，耳虫会让大脑处于玩乐娱乐的状态。",
          "answer": "entertained",
          "wordClass": "动词过去分词（与前面的 is 构成被动语态，表示大脑被耳虫“娱乐、逗着玩”，须保持过去分词形式 entertained）",
          "locating": {
            "paragraph": "3",
            "quote": "Dr Stewart likens earworms to 'sonic screen savers' that keep the mind entertained while it is otherwise unoccupied."
          },
          "synonyms": [
            "“the brain is entertained by earworms” 同义替换为原文的 “keep the mind entertained”，原文是主动结构“让大脑保持娱乐”，题干改写为被动结构“大脑被娱乐”",
            "“when it is not focused on a task” 同义替换为原文的 “while it is otherwise unoccupied”（大脑没有别的事可做时）",
            "“sonic screen savers” 对应原文用来比喻耳虫的 “声波屏保”，与题干“耳虫作用于空闲的大脑”一致"
          ],
          "locatingTip": "定位：题干出现人名 Dr Stewart 与关键词 not focused on a task，对应第 3 段开头关于“低认知负荷（low cognitive load）”的讨论。确定答案技巧：原文关键句是 “Dr Stewart likens earworms to 'sonic screen savers' that keep the mind entertained while it is otherwise unoccupied”，题干把它改写成被动语态 “the brain is [20] by earworms”，主动句中的宾语补足语 entertained 就成为被动句中的过去分词，故填 entertained；同时 while it is otherwise unoccupied 与题干 when it is not focused on a task 相互对应，可作为二次验证。注意拼写与词形，不要写成 entertaining 或 entertain。",
          "analysis": "摘要第三句把话题转向 Stewart 博士的比喻。原文第 3 段写道：“Studies also show that the music in our heads often starts playing during times of 'low cognitive load', such as while showering, getting dressed, walking, or doing chores. Dr Stewart likens earworms to 'sonic screen savers' that keep the mind entertained while it is otherwise unoccupied.”（研究还显示，我们脑中的音乐常常在“低认知负荷”的时候开始播放，例如洗澡、穿衣、走路或做家务时。Stewart 博士把耳虫比作“声波屏保”，在大脑本来无事可做时让它保持娱乐）。题干 “Dr Stewart also believes that the brain is [20] by earworms when it is not focused on a task” 与第二句严格对应：when it is not focused on a task 对应 while it is otherwise unoccupied，is entertained by earworms 对应 that keep the mind entertained，只是语态由主动（耳虫让大脑保持娱乐）换成被动（大脑被娱乐）。因此空格填过去分词 entertained。词形判断是本题的关键失分点：空格前已有系动词 is，后面又有 by earworms，是典型被动语态结构，只能填过去分词。",
          "traps": [
            "为什么不是 unoccupied：unoccupied 在原文中是描述大脑状态的形容词，出现在 while 引导的状语从句里，对应题干的 when it is not focused on a task，位置已被占用，不能再作为答案。",
            "为什么不是 entertaining：空格前是 is、后有 by earworms，构成被动语态，需要过去分词 entertained；entertaining 是现在分词，表示“令人娱乐的”，与被动结构不符。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "In fact, a reduction in the occurrence of earworms was found to be directly related to how 21 ________ the task was.",
          "translation": "事实上，人们发现耳虫出现次数的减少与任务的困难程度直接相关。",
          "answer": "challenging",
          "wordClass": "形容词（位于 how 引导的从句中作 the task 的表语，说明任务的难易程度，保持原级 challenging）",
          "locating": {
            "paragraph": "3",
            "quote": "Dr Stewart observed that the more challenging the activity, the less likely the volunteers were to hear the music."
          },
          "synonyms": [
            "“the task” 同义替换为原文的 “the activity”（所从事的活动）",
            "“a reduction in the occurrence of earworms” 同义替换为原文的 “the less likely the volunteers were to hear the music”（志愿者越不容易听到音乐，即耳虫出现得越少）",
            "“directly related to how challenging …” 对应原文的 “the more … the less …” 比例关系，说明任务越难耳虫越少，两者成反比关联"
          ],
          "locatingTip": "定位：本题与第 20 题同在第 3 段，紧接前面 “Dr Stewart observed that …” 这一句，题干出现 task、occurrence of earworms、directly related，与 the more … the less … 的比例句一一对应。确定答案技巧：原文用 “the more challenging the activity, the less likely the volunteers were to hear the music” 表达“活动越难，听到音乐的可能性越小”，把难易程度与耳虫多少直接挂钩，题干将其改写为 “how [21] the task was”；how 之后需要形容词作表语，原文给出的唯一形容词就是 challenging，故填 challenging。注意不要填 difficult（原文没有这个词），也不要把 the more challenging 中的比较级标记写进去，答案只取形容词原级。",
          "analysis": "摘要最后一句继续复述第 3 段的实验结果。原文相关部分是：“The volunteers who sat idly for the next five minutes were the most likely to report hearing the music in their heads. Dr Stewart observed that the more challenging the activity, the less likely the volunteers were to hear the music.”（接下来五分钟无所事事的志愿者最有可能报告脑中听到音乐；Stewart 博士观察到，活动越具有挑战性，志愿者越不容易听到音乐）。题干用 “a reduction in the occurrence of earworms was found to be directly related to how [21] the task was” 概括第二个发现，其中 a reduction in the occurrence of earworms 对应 the less likely the volunteers were to hear the music，the task 对应 the activity，directly related to 对应 the more … the less … 的反比关联；原文 the more challenging 中的 challenging 正是题干 how 之后缺失的表语形容词。词性上，how 引导的从句中 the task was 需要形容词作表语，challenging 为形容词，且原文形式即为原级（more 属于 the more … the less … 句型标记，不属于答案词），所以直接填 challenging。",
          "traps": [
            "为什么不是 difficult：原文使用的是 challenging 一词，摘要填空要求从原文中选词，不能用同义的 difficult 替换。",
            "为什么不是 idly：idly 描述的是“无所事事坐下来”的那组志愿者，对应的是相反的结果（最容易听到音乐），与题干“耳虫减少”的方向无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 22–26 人名观点匹配（Match each statement with the correct person）",
      "mode": "per_question",
      "questionRange": {
        "start": 22,
        "end": 26
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "Some musicians create music that is intentionally memorable.",
          "translation": "有些音乐人会刻意创作令人印象深刻的音乐。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "says John Seabrook, author of The Song Machine: Inside the Hit Factory, about how producers pump pop songs full of aural 'hooks', the punchy melodic phrases designed to target the brain and leave it wanting more."
          },
          "synonyms": [
            "“Some musicians” 同义替换为原文的 “producers”（音乐制作人）",
            "“create music that is intentionally memorable” 同义替换为原文的 “designed to target the brain and leave it wanting more”，即刻意设计成直击大脑、让人意犹未尽",
            "“create music” 对应原文的 “pump pop songs full of aural 'hooks'”（往流行歌曲里塞满“听觉钩子”）",
            "“intentionally” 对应原文的 “designed to”（被有意设计用来），强调创作的主观故意"
          ],
          "locatingTip": "定位：题干关键词是 create music 与 intentionally memorable，原文中对应的说法是“制作人往流行歌里塞满听觉钩子（hooks）”，这一内容出现在第 7 段并明确归属给 John Seabrook。确定答案技巧：第 7 段先引 Seabrook 谈重复带来熟悉感与期待感，接着解释他所说的 hooks 是 “the punchy melodic phrases designed to target the brain and leave it wanting more”，design 一词点出“故意设计”，与题干 intentionally 对应；四人中只有 Seabrook 谈创作手法，故选 D。N.B. 允许重复使用字母，因此不必用排除法，逐个比对归属更稳妥。",
          "analysis": "本题问“有些音乐人刻意创作令人难忘的音乐”这一说法出自谁。第 7 段写道：“‘Repetition leads to familiarity which leads to anticipation, which is satisfied by hearing the song,' says John Seabrook, author of The Song Machine: Inside the Hit Factory, about how producers pump pop songs full of aural 'hooks', the punchy melodic phrases designed to target the brain and leave it wanting more.”（“重复带来熟悉感，熟悉感带来期待感，而听到这首歌就满足了这种期待，”《歌曲机器：走进热门歌曲工厂》的作者 John Seabrook 说，该书讲的是制作人如何往流行歌曲里塞满听觉“钩子”——那些节奏强劲的旋律短语，被设计用来直击大脑、让人欲罢不能）。题干中的 Some musicians 对应 producers，intentionally memorable 对应 designed to target the brain and leave it wanting more，两者强调的都是“有意为之、让人记住”的创作策略，观点归属为 Seabrook，即选项 D。做这类题时，应把话语内容与说话人姓名同时锁定：原文用 says John Seabrook 引出观点，姓名的位置在句子的前半段，容易因为关注引文而漏掉。",
          "traps": [
            "为什么不是 A（Lauren Stewart）：她两次发言分别是“完全掌控自己的思维过程是一种错觉”与“耳虫像声波屏保让大脑保持娱乐”，谈的都是耳虫现象与大脑，与音乐人的创作意图无关。",
            "为什么不是 B（Ira Hyman）：他谈的是听过却没留意的歌也会潜入潜意识、以及歌曲片段循环会让耳虫更顽固，属于耳虫形成的机制。",
            "为什么不是 C（Andrea Halpern）：她的内容是脑成像研究，比较“刻意想象音乐”与“真正听音乐”所激活的神经回路，以及熟悉与陌生音乐引起的脑区差异。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "People are unable to completely regulate how they think.",
          "translation": "人们无法完全控制自己的思考过程。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "'The idea that we have full control over our thought processes is an illusion,' says psychologist Lauren Stewart, who founded the master's program in music, mind and brain at Goldsmiths, University of London, UK, where recent research has taken place."
          },
          "synonyms": [
            "“People are unable to completely regulate how they think” 同义替换为原文的 “we have full control over our thought processes is an illusion”，原文用“完全掌控思维只是一种错觉”反向表达同一意思",
            "“how they think” 同义替换为原文的 “our thought processes”（思维过程）",
            "“unable to completely regulate” 对应原文的 “is an illusion”，否定“完全控制”的存在"
          ],
          "locatingTip": "定位：题干说的是“人对自身思维的控制有限”，属于典型观点句，扫读时盯住带引号的观点以及 says、argue、believes 这类引述动词。第 1 段中就有人名 Lauren Stewart 加直接引语，内容是“完全掌控自己的思维过程是一种错觉”。确定答案技巧：把题干的否定表达 People are unable to completely regulate how they think 与原文的肯定假象 full control … is an illusion 对齐，两者是同一意思的正反表达，说话人是 Lauren Stewart，故选 A；虽然第 22 题已用过 A/B/C/D 中的选项，但本题的 N.B. 明确允许重复使用字母，不必回避 A。",
          "analysis": "本题问“人们无法完全控制自己的思考过程”这一说法出自谁。第 1 段在解释科学家为何研究耳虫时引用道：“‘The idea that we have full control over our thought processes is an illusion,' says psychologist Lauren Stewart, who founded the master's program in music, mind and brain at Goldsmiths, University of London, UK, where recent research has taken place.”（“我们能够完全掌控自己思维过程的想法只是一种错觉，”心理学家 Lauren Stewart 说；她是伦敦大学戈德史密斯学院“音乐、心智与大脑”硕士项目的创办者，该学院是近期研究的开展地）。题干 People are unable to completely regulate how they think 与原文 we have full control over our thought processes is an illusion 完全同义：原文用 illusion 否定“完全控制”，题干用 unable to completely regulate 表达同一层意思；how they think 对应 our thought processes。观点归属为 Lauren Stewart，即选项 A。做本题的要点是把汉语式的否定表达与原文的“假象”说法对接起来，不要因为字面不同就排除 A。",
          "traps": [
            "为什么不是 C（Andrea Halpern）：她谈的是脑成像结果（想象音乐与听音乐激活相同神经回路），属于对大脑机制的研究发现，不是对人的思维控制能力的论断。",
            "为什么不是 D（John Seabrook）：他讲的是制作人如何用旋律钩子抓住听众，与思维是否能被控制无关。",
            "为什么不是 B（Ira Hyman）：他谈的是听过却未留意的歌会潜入潜意识、片段循环令耳虫更顽固，涉及的是记忆与耳虫持续，并非“无法完全控制思维”的总体论断。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "We can remember songs without knowing that we have heard them.",
          "translation": "我们能在没有意识到自己听过某首歌的情况下记住它。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Even tunes you may have heard but didn't pay attention to can worm their way into your subconscious, says Ira Hyman, a psychologist at Western Washington University in Bellingham, USA."
          },
          "synonyms": [
            "“without knowing that we have heard them” 同义替换为原文的 “may have heard but didn't pay attention to”（听过却没有留意）",
            "“remember songs” 同义替换为原文的 “can worm their way into your subconscious”（潜入潜意识，意味着歌被存进了记忆）",
            "“We can …” 的泛指主语对应原文第二人称 “you”，都是泛指人"
          ],
          "locatingTip": "定位：题干关键词是 heard 与 without knowing，对应原文 “you may have heard but didn't pay attention to” 以及 “worm their way into your subconscious”，这句话由 Ira Hyman 说出，落点的引述标志是句末的 says Ira Hyman。确定答案技巧：第 4 段开头 “Songs the brain fixates on are usually those it has been exposed to recently, surveys show” 只是综述性结论、未归属到具体人名，不要据此乱选；只有紧跟的 Even tunes … says Ira Hyman 才把“听过但未留意的歌也能进入潜意识”归给具体研究者，故选 B。",
          "analysis": "本题问“我们不自觉地记住听过的歌”这一说法出自谁。第 4 段先给出调查综述结论：“Songs the brain fixates on are usually those it has been exposed to recently, surveys show, which is why tunes getting heavy radio play frequently top the earworm charts.”（调查显示，大脑念念不忘的歌通常是最近接触过的，这也是电台大量播放的歌曲常常高居耳虫榜的原因）。紧接着：“Even tunes you may have heard but didn't pay attention to can worm their way into your subconscious, says Ira Hyman, a psychologist at Western Washington University in Bellingham, USA.”（美国贝灵汉西华盛顿大学的心理学家 Ira Hyman 说，即使是那些你可能听过却并未留意的曲子，也能潜入你的潜意识）。题干 We can remember songs without knowing that we have heard them 与后半句严格对应：heard but didn't pay attention to 对应 without knowing that we have heard，worm their way into your subconscious 对应记住（进入潜意识即被记住），观点归属 Ira Hyman，即选项 B。定位时的技巧是抓住引述标签 says 加人名：雅思人名匹配题的判分依据往往是姓名出现的那一处，而非紧邻的综述句。",
          "traps": [
            "为什么不是 C（Andrea Halpern）：她的研究讨论熟悉与陌生音乐激活不同脑区，以及被要求回忆时的脑区活动，谈的是“回忆时的大脑区域”，而不是“在不知情的情况下记住歌曲”。",
            "为什么不是 A（Lauren Stewart）：她的发言涉及思维控制错觉与耳虫作为声波屏保的比喻，未提到无意识记忆歌曲。",
            "为什么不是 D（John Seabrook）：他讲的是创作人如何用钩子让歌曲被记住，是创作端的策略，不是听众在未留意的情况下记住歌曲。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Thinking about music has a similar effect on the brain to hearing music.",
          "translation": "在脑中想象音乐与真正听音乐对大脑产生的影响相似。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Imaging studies by Andrea Halpern at Bucknell University, in Lewisburg, USA, have shown that deliberately imagining music and actually listening to music activate many of the same neurological networks."
          },
          "synonyms": [
            "“Thinking about music” 同义替换为原文的 “deliberately imagining music”（刻意想象音乐）",
            "“hearing music” 同义替换为原文的 “actually listening to music”（真正听音乐）",
            "“has a similar effect on the brain” 同义替换为原文的 “activate many of the same neurological networks”（激活许多相同的神经回路）",
            "“Imaging studies by Andrea Halpern” 明确把这项发现归属给 Andrea Halpern"
          ],
          "locatingTip": "定位：题干是一组对照——想象音乐与听音乐，回原文搜索表示“想象”与“听”的成对动词，第 6 段出现 imagining music 与 listening to music 的并列结构，并直接带出人名 Andrea Halpern。确定答案技巧：原文说这两种活动 “activate many of the same neurological networks”，many of the same 正对应题干的 similar effect on the brain，发现归属 Andrea Halpern，故选 C。注意不要与第 6 段随后 Halpern 的“前期研究”（熟悉与陌生音乐激活不同脑区）混为一谈，那是另一个对比。",
          "analysis": "本题问“想象音乐与听音乐对大脑的作用相似”这一说法出自谁。第 6 段写道：“Imaging studies by Andrea Halpern at Bucknell University, in Lewisburg, USA, have shown that deliberately imagining music and actually listening to music activate many of the same neurological networks.”（美国刘易斯堡巴克内尔大学的 Andrea Halpern 所作的脑成像研究显示，刻意想象音乐与真正聆听音乐会激活许多相同的神经回路）。题干的 Thinking about music 对应 deliberately imagining music，hearing music 对应 actually listening to music，has a similar effect on the brain 对应 activate many of the same neurological networks，三项对应关系明确，观点归属 Andrea Halpern，即选项 C。定位提示：题干若把两个行为并列比较，原文通常会以 and 并列结构出现，抓住并列结构即可同时锁定主语出处；另外，本段后半部分提到的 familiar music 与 unfamiliar music 是同一研究者的另一项结果，不能与本题的“想象与聆听”混淆。",
          "traps": [
            "为什么不是 B（Ira Hyman）：他从未涉及脑成像研究，谈的是耳虫的来源与片段循环机制。",
            "为什么不是 A（Lauren Stewart）：她讨论的是思维控制的错觉以及耳虫在低认知负荷时出现，没有比较“想象”与“聆听”对大脑的影响。",
            "为什么不是 D（John Seabrook）：他从创作角度谈旋律钩子与重复带来的熟悉感，不涉及神经科学实验。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Earworms are more persistent when only a short section of the song is constantly replayed.",
          "translation": "当歌曲只有一小段被不断重复时，耳虫会更难摆脱。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Some earworms are just fragments of a song that repeat like a broken record. So, when the mind hits a part of a song it can't remember, it loops back rather than moving on. That could make an earworm even more entrenched, Dr Hyman says."
          },
          "synonyms": [
            "“only a short section of the song” 同义替换为原文的 “fragments of a song” 与 “a part of a song”（歌曲的片段、一部分）",
            "“is constantly replayed” 同义替换为原文的 “repeat like a broken record” 与 “it loops back rather than moving on”（像坏唱片一样反复、绕回原处）",
            "“more persistent” 同义替换为原文的 “even more entrenched”（更加根深蒂固、更难消除）",
            "“Dr Hyman says” 明确把这一观点归属给 Ira Hyman"
          ],
          "locatingTip": "定位：题干关键词是 short section 与 persistent，回原文搜索表示“片段”和“顽固”的词，第 5 段用 fragments、broken record、loops back 与 entrenched 集中表达这一意思，句末的 “Dr Hyman says” 是归属标志。确定答案技巧：把题干与原文逐一对应——short section 对应 fragments of a song，constantly replayed 对应 repeat like a broken record 与 loops back，more persistent 对应 even more entrenched；说话人是 Dr Hyman，即选项 B。本题与第 24 题同选 B，属于 N.B. 所允许的重复使用；段内还提到 Zeigarnik 与 Bluma Zeigarnik，但那只是理论名称，观点持有者仍是 Dr Hyman，不要误选列表中没有的人名。",
          "analysis": "本题问“歌曲只有一小段不断重复时耳虫会更难摆脱”这一说法出自谁。第 5 段写道：“Some earworms are just fragments of a song that repeat like a broken record. So, when the mind hits a part of a song it can't remember, it loops back rather than moving on. That could make an earworm even more entrenched, Dr Hyman says.”（有些耳虫只是歌曲的片段，像坏唱片一样反复播放。因此，当心智遇到记不起来的歌曲某一部分时，它会绕回原处而不是继续往下走。Hyman 博士说，这会让耳虫变得更加根深蒂固）。题干 Earworms are more persistent when only a short section of the song is constantly replayed 与三句内容层层对应：fragments of a song、a part of a song 对应 only a short section；repeat like a broken record、loops back 对应 constantly replayed；even more entrenched 对应 more persistent，最后一句的 Dr Hyman says 给出归属，故选 B。段落虽以人名为结尾标签出现，但雅思人名匹配题中“姓名加引述动词”是标准归属写法；另外注意该段后半句提到理论名为 Zeigarnik effect，属于专有名词干扰，并不代表观点出自该理论提出者。",
          "traps": [
            "为什么不是 A（Lauren Stewart）：她的观点集中在思维控制的错觉与耳虫在空闲大脑中出现，未涉及歌曲片段的循环。",
            "为什么不是 C（Andrea Halpern）：她研究的是脑区激活差异，不涉及耳虫为何持续。",
            "为什么不是 D（John Seabrook）：他解释重复带来熟悉感与期待感，讲的是歌曲被记住的原因，而不是片段循环导致耳虫顽固难消。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
