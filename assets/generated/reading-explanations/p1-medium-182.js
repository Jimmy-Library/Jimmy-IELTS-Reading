(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-182", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-182",
  "meta": {
    "examId": "p1-medium-182",
    "title": "Listening to the Ocean 海洋探测",
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
          "stem": "In the past, it was easier for scientists to study the Moon than the oceans.",
          "translation": "在过去，科学家研究月球比研究海洋更容易。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The oceans cover more than 70 per cent of the planet's surface, yet until quite recently we knew less about their depths than about the surface of the Moon. The Moon has been far more accessible to study because astronomers have long been able to look at its surface, first with the naked eye and then with the telescope, both instruments that focus light."
          },
          "synonyms": [
            "“In the past” 同义替换为原文的 “until quite recently”（直到不久以前），两者都指过去的一段时间",
            "“easier for scientists to study” 同义替换为原文的 “far more accessible to study”，accessible 与 easy 都表示“容易接近、容易研究”",
            "“the Moon than the oceans” 的比较关系对应原文的 “we knew less about their depths than about the surface of the Moon”：less about A than about B 等于说 B（月球）比 A（海洋）更容易研究"
          ],
          "locatingTip": "定位：题干的关键词 Moon 与 oceans 在第 1 段（A 段）首句同时出现，且 Moon 是大写专有名词，扫读第一段即可锁定，无需读完全文。确定答案技巧：本题考“比较关系”，要在原文找到把月球与海洋放在一起比较的那句话。原文先说 “we knew less about their depths than about the surface of the Moon”（对海洋深处的了解比对月球表面更少），less about 海洋 than about 月球，换一种说法就是月球比海洋好研究；接着用 because 给出原因——天文学家能用肉眼和望远镜看月球表面，而这两种仪器都是聚焦光线的。比较方向与题干完全一致，因此答案是 TRUE，包含 less ... than ... 与 far more ... than 这类比较结构的句子，是判断题最常见的判分点。",
          "analysis": "第 1 段开头：“The oceans cover more than 70 per cent of the planet's surface, yet until quite recently we knew less about their depths than about the surface of the Moon.”（海洋占地球表面 70% 以上，但直到不久以前，我们对海洋深处的了解还少于对月球表面的了解）。紧接着一句：“The Moon has been far more accessible to study because astronomers have long been able to look at its surface, first with the naked eye and then with the telescope, both instruments that focus light.”（月球一直远比海洋容易研究，因为天文学家很久以来就能观察月球表面，先用肉眼，后用望远镜，这两种仪器都聚焦光线）。题干说“在过去，科学家研究月球比研究海洋更容易”，对应关系清晰：In the past 对应 until quite recently；easier to study 对应 far more accessible to study；比较的对象同样是 the Moon 与 the oceans（原文用 less about ... than about ... 把海洋与月球对举，比较结论落在月球上）。原文还补充了原因（有可用的观测仪器）与失败的对比（二十世纪以前研究海洋根本没有可用仪器），进一步支持“月球更好研究”这一判断，所以答案是 TRUE。做题时不要把注意力放在数字 70 per cent 上，那只是背景信息，真正的判分依据是两句比较句。",
          "traps": [
            "为什么不是 FALSE：原文两处都指向“月球更好研究”——“we knew less about their depths than about the surface of the Moon” 与 “The Moon has been far more accessible to study”。没有任何一句说海洋比月球容易研究，矛盾信息不存在，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不但给出了比较（less ... than ...），还解释了为什么月球更好研究（天文学家能用肉眼和望远镜看月球表面），信息明确且与题干同向，不属于未提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Techniques for investigating the Moon are the same as techniques for researching the ocean.",
          "translation": "研究月球的技术与研究海洋的技术是相同的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The Moon has been far more accessible to study because astronomers have long been able to look at its surface, first with the naked eye and then with the telescope, both instruments that focus light. Until the twentieth century, however, no instruments were available for the study of Earth's oceans: light, which can travel trillions of kilometres through the vast vacuum of space, cannot penetrate very far in seawater."
          },
          "synonyms": [
            "“Techniques for investigating” 同义替换为原文的 “instruments”（仪器手段）与 “the study of”（研究），指研究时所用的手段",
            "“the same as” 在原文中被 however 转折直接否定：原文说研究海洋 “no instruments were available”，即当时根本没有可用的研究手段",
            "“the same” 的反证还在于手段性质相反：月球靠 “both instruments that focus light”（聚焦光线的仪器），而光在海水里 “cannot penetrate very far in seawater”，一靠光、一不能用光"
          ],
          "locatingTip": "定位：题干关键词 techniques、Moon、the ocean 仍落在第 1 段，Moon 在第 2 句，the study of Earth's oceans 在第 4 句，两词同段共现，精读第 1 段后半部分即可。确定答案技巧：判断题里出现 the same as、identical、exactly like 这类“完全相同”的绝对化表述要立刻警觉。回原文核对会发现，作者用 however 转折指出：二十世纪以前，研究地球海洋 “no instruments were available”（没有任何仪器可用），原因是光在海水中无法穿透很远；而月球之所以可研究，恰恰因为有聚焦光线的肉眼与望远镜。研究月球靠光学手段，研究海洋恰恰不能用光学手段，两者并不同，题干把“不同”写成“相同”，属于与原文直接冲突，判 FALSE。",
          "analysis": "第 1 段从第 2 句起做了一个对照式论述。第 2 句：“The Moon has been far more accessible to study because astronomers have long been able to look at its surface, first with the naked eye and then with the telescope, both instruments that focus light.”（研究月球容易，是因为天文学家能用肉眼与望远镜观察其表面，这两种仪器都聚焦光线）。第 3 句用 however 转折：“Until the twentieth century, however, no instruments were available for the study of Earth's oceans: light, which can travel trillions of kilometres through the vast vacuum of space, cannot penetrate very far in seawater.”（然而直到二十世纪，还没有可用于研究地球海洋的仪器：光能在真空中穿越数万亿公里，却无法在海水里穿透很远）。原文的逻辑是：研究月球依赖聚焦光线的仪器，而研究海洋不能依赖光，因为光在水里穿透力极差，所以二十世纪前根本没有可用的研究手段（第 2 段的声学手段是后话）。题干断言两者的研究技术“相同（are the same as）”，与原文“手段不同、性质相反”构成正面冲突，因此判 FALSE。答题提示：遇到 the same as / similar to 这类比较类判断，一定要找原文有没有“对照”写法，however、by contrast、whereas、unlike 往往就是否定的信号词。",
          "traps": [
            "为什么不是 TRUE：原文用 however 明确转折，指出月球的研究靠“聚焦光线的仪器”，而海洋在二十世纪前“没有任何可用仪器”，因为光无法穿透海水。手段在原理上就不相同，与题干“相同”的说法相反。",
            "为什么不是 NOT GIVEN：原文既交代了研究月球的手段（肉眼、望远镜），又交代了研究海洋的困难（无可用的仪器、光无法穿透海水），两者的差异是原文明确写出的信息，不是信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Measuring temperature changes in the ocean using sound is more time-consuming than other methods.",
          "translation": "用声波测量海洋温度变化比其他方法更耗时。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Thus, the travel time of a wave of sound between two points is a sensitive indicator of the average temperature along its path."
          },
          "synonyms": [
            "“Measuring temperature changes in the ocean using sound” 同义替换为原文的 “the travel time of a wave of sound between two points is a sensitive indicator of the average temperature along its path”，即用声波传播时间来测温度",
            "“temperature changes” 对应原文的 “the average temperature” 以及同段末尾的 “track changes in temperature over months or years”",
            "“more time-consuming than other methods” 在原文中找不到任何对应：原文既没有与其他测量方法作比较，也没有出现任何关于耗时、快慢的表述"
          ],
          "locatingTip": "定位：题干关键词是 temperature、sound 与 measure，第 6 段（F 段）整段围绕“声波与海洋温度”展开，其中最直接的落点句是 “Thus, the travel time of a wave of sound between two points is a sensitive indicator of the average temperature along its path.”。确定答案技巧：本题的判分点是比较结构 more time-consuming than other methods。回原文核对：原文只说声波传播时间是平均温度的敏感指标、可用来给全球海洋温度作图、通过反复测量能追踪数月或数年的温度变化，讲的都是可行性与效果，从未与其他方法比较快慢，也没有任何“耗时”的措辞。原文缺这一层信息就是 NOT GIVEN，不能因为出现 “over months or years” 就自行推断“它比别人慢”。",
          "analysis": "第 6 段先讲 SOSUS 让研究者能做全球尺度的海洋温度测量，随后解释原理：“For sound waves travelling horizontally in the ocean, speed is largely a function of temperature. Thus, the travel time of a wave of sound between two points is a sensitive indicator of the average temperature along its path.”（在海中水平传播的声波，其速度主要由温度决定；因此声波在两点之间的传播时间是沿途平均温度的敏感指标）。段末还补充：“by repeating measurements along the same paths over time, scientists can track changes in temperature over months or years.”（通过在相同路径上反复测量，科学家可以追踪数月到数年的温度变化）。题干把这套方法拿去和“其他方法”比耗时（more time-consuming than other methods），但原文通篇没有做这样的横向比较：没提过任何其他测温度的方法，也没有说哪种更快、哪种更慢。句中 over months or years 指的是可追踪的时间跨度，属于研究尺度，而不是完成任务所花的时间。按判断题规则，原文未提及的信息判 NOT GIVEN，既不能因“感觉复杂所以慢”选 TRUE，也没有相反信息可以判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文没有把声学测温与其他方法作比较，也没有出现 time-consuming、slow、takes longer 之类的表述；over months or years 说的是可追踪的时间跨度（能测多长时间的变化），而不是“测量本身需要多久”。把“跨越数月或数年的重复测量”读成“比其他方法耗时”属于超出原文的推理。",
            "为什么不是 FALSE：原文也没有说“声学测温更快”或“并不耗时”，既然没有与之相反的信息，就不构成矛盾，因此不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Hydrophones can distinguish different kinds of rain.",
          "translation": "水听器能分辨不同种类的雨。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Since 1985, Nystuen has used hydrophones to listen to rain over the ocean, acoustically measuring not only the rainfall rate but also the rainfall type, ranging from drizzle to thunderstorms."
          },
          "synonyms": [
            "“Hydrophones” 在原文原词复现：“Nystuen has used hydrophones to listen to rain over the ocean”",
            "“distinguish different kinds of rain” 同义替换为原文的 “acoustically measuring not only the rainfall rate but also the rainfall type”，rainfall type 即“雨的类别”",
            "“different kinds” 的具体例证是原文的 “ranging from drizzle to thunderstorms”（从毛毛雨到雷暴），属于把类别一一列举"
          ],
          "locatingTip": "定位：hydrophones 是专有名词，全篇只出现两次（第 4 段末的 underwater microphones, called hydrophones 与第 7 段讨论听雨的那句），而题干的落点是“分辨雨的种类”，因此锁定第 7 段（G 段）讲用声学方法测雨的句子。确定答案技巧：题干的判断动词是 distinguish，要回原文找“把不同类别区分开”的表述。原文说 Nystuen 用水听器听海上的雨，“不仅测降雨强度，还测降雨类型，从毛毛雨到雷暴”，not only ... but also ... 强调的正是“除强度之外还能分出类型”，ranging from drizzle to thunderstorms 又把类型逐项列出，说明水听器确实能区分不同种类的雨，故判 TRUE。",
          "analysis": "第 7 段讲用声学技术监测气候，其中写道：“Since 1985, Nystuen has used hydrophones to listen to rain over the ocean, acoustically measuring not only the rainfall rate but also the rainfall type, ranging from drizzle to thunderstorms.”（自 1985 年起，Nystuen 一直用水听器听海洋上空的雨声，声学测量的不仅是降雨强度，还包括降雨类型，从毛毛雨到雷暴）。题干的主语 Hydrophones 与原文一致，distinguish different kinds of rain 正是原文 acoustically measuring ... the rainfall type 的另一种说法：能测出类型、并区分出从 drizzle 到 thunderstorms 的不同类别，就是能分辨不同的雨。原文用 not only A but also B 的句型把“测强度”和“测类型”并列，暗示后者是额外的能力，与题干的 distinguish 相呼应；ranging from ... to ... 这一区间表述正是“种类多样”的证据。信息同向且具体，答案是 TRUE。注意题干说的是水听器能分辨雨的种类，而不是分辨温度或鲸叫，定位时不要被第 4 段出现的 hydrophones 干扰，第 4 段讲的是监听鲸鱼。",
          "traps": [
            "为什么不是 FALSE：原文明确写了 “acoustically measuring not only the rainfall rate but also the rainfall type, ranging from drizzle to thunderstorms”，说明水听器不仅能测强度还能测类型，与题干同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不仅提到水听器用于听雨，还具体交代了它能测出降雨类型（rainfall type）并给出从毛毛雨到雷暴的范围，信息充分具体，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–8 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 8
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "examples of things that affect the distance sound can travel in water",
          "translation": "影响声音在水中传播距离的因素的例子。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "A number of factors influence how far sound travels under water and how long it lasts, including particles, salinity, temperature and pressure."
          },
          "synonyms": [
            "“things that affect” 同义替换为原文的 “factors influence”，factor 与 thing 对应，influence 与 affect 对应",
            "“the distance sound can travel in water” 同义替换为原文的 “how far sound travels under water”，in water 与 under water 同义",
            "“examples of things” 的具体展开是原文的 “including particles, salinity, temperature and pressure”（颗粒物、盐度、温度和压力）"
          ],
          "locatingTip": "定位：本题题干的核心是“影响声音在水中传播距离的因素”，属于“主题加例举”型信息，扫读各段首句（雅思段落主题句多在段首）即可一击命中：C 段（第 3 段）首句为 “A number of factors influence how far sound travels under water and how long it lasts, including particles, salinity, temperature and pressure.”，其中 how far sound travels 与题干 the distance sound can travel 直接对应。确定答案技巧：题干的 examples 提示原文必有例举，找到 including ... 后面的并列清单即可确认；再用排除法核对其他段落：A 段比较月球与海洋的可研究性，B 段讲声在水中的速度、D 段讲海军开发 SOSUS，E 段讲鲸鱼，F 段讲温度与气候，G 段讲降雨，只有 C 段同时给出“多个影响因素”与具体例举，故答案为 C（第 3 段）。",
          "analysis": "C 段（第 3 段）首句：“A number of factors influence how far sound travels under water and how long it lasts, including particles, salinity, temperature and pressure.”（有多种因素影响声音在水下传播的距离和持续的时间，包括颗粒物、盐度、温度和压力）。题干 “examples of things that affect the distance sound can travel in water” 是这句话的概括式改写：things that affect 对应 A number of factors influence，the distance sound can travel 对应 how far sound travels，examples 对应 including 引出的四项具体例举 particles、salinity、temperature and pressure。原文接下来还进一步解释颗粒物会反射、散射和吸收某些频率的声波，属于对第一项因素的展开，佐证该段确实在讲影响因素。段落信息匹配题的解法是“先提关键词、再找主题句”：本题的关键词是 distance 与 affect（影响因素），而 C 段首句刚好两者齐全，答案锁定 C。注意本题答案字母 C 与第 7 题相同，题目说明中已提示 “You may use any letter more than once”，同一字母可以重复使用。",
          "traps": [
            "为什么不是 B 段（第 2 段）：该段讲的是声音是穿透海水的最佳工具、以及 1826 年科拉东与施图尔姆测量声在水中的速度，落点在“声速”，没有提到影响传播距离的多种因素。",
            "为什么不是 D 段（第 4 段）：该段讲美国海军利用低频声与深层声道开发 SOSUS，并用水听器听鲸鱼，属于技术应用，不是影响因素。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "details of the connection between ocean temperatures and climate",
          "translation": "关于海洋温度与气候之间联系的细节。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The system has enabled researchers to begin making ocean-temperature measurements on a global scale, measurements that are key to understanding the workings of heat transfer between the ocean and the atmosphere. The ocean plays an enormous role in determining air temperature — the heat capacity in only the upper few metres of ocean is thought to be equal to all of the heat in the entire atmosphere."
          },
          "synonyms": [
            "“ocean temperatures” 同义替换为原文的 “ocean-temperature measurements”，temperature 原词复现，只是由名词转为定语",
            "“climate” 同义替换为原文的 “heat transfer between the ocean and the atmosphere” 与 “determining air temperature”，气候问题的核心正是海气之间的热量交换",
            "“the connection between” 对应原文的 “key to understanding the workings of heat transfer between the ocean and the atmosphere”，between ... and ... 结构直接点明二者的关联"
          ],
          "locatingTip": "定位：题干关键词 ocean temperatures 与 climate，F 段（第 6 段）首句即出现 climate（“information crucial to our understanding of climate”），紧接着一句出现 ocean-temperature measurements 与 heat transfer between the ocean and the atmosphere，两词同段共现，锁定 F。确定答案技巧：这类“A 与 B 之间联系”的题，要在原文找同时出现 A、B 并带关系词（key to、between ... and ...、a role in）的句子。原文说系统让研究者开始在全球尺度做海洋温度测量，而这些测量是理解海洋与大气之间热量交换的关键，并进一步说明海洋对气温起决定作用，这正是“海洋温度与气候之间的联系”的细节。小心 G 段的干扰：G 段虽然也谈气候，但落点是降雨而不是海洋温度。",
          "analysis": "F 段（第 6 段）首句：“SOSUS has also proved instrumental in obtaining information crucial to our understanding of climate.”（SOSUS 对于获取理解气候至关重要的信息也发挥了作用），这句话把全段主题锁定为“气候”。随后两句给出细节：“The system has enabled researchers to begin making ocean-temperature measurements on a global scale, measurements that are key to understanding the workings of heat transfer between the ocean and the atmosphere. The ocean plays an enormous role in determining air temperature — the heat capacity in only the upper few metres of ocean is thought to be equal to all of the heat in the entire atmosphere.”（该系统使研究者能开始在全球尺度上进行海洋温度测量，而这些测量正是理解海洋与大气之间热量交换机制的关键。海洋对气温起着巨大的决定作用：仅仅海洋上层几米的热容量就被认为相当于整个大气的全部热量）。题干中的 ocean temperatures 对应 ocean-temperature measurements，climate 对应 heat transfer between the ocean and the atmosphere 与 determining air temperature，connection between 对应 key to understanding the workings of heat transfer between ... and ...，三处改写一一对应，因此答案为 F（第 6 段）。本题的解题要点是抓住“关系型表述”的语法信号：between A and B、A is key to B、A plays a role in B 都是原文在明确交代两个概念之间的联系。",
          "traps": [
            "为什么不是 G 段（第 7 段）：G 段虽然首句也说 researchers are also using other acoustic techniques to monitor climate，但整段讲的是用水听器测量海上的降雨（rainfall rate 与 rainfall type），落点是降雨与气候，没有涉及海洋温度。",
            "为什么不是 C 段（第 3 段）：C 段提到 temperature，但那是影响声音传播距离的因素之一（颗粒物、盐度、温度和压力），没有讨论海洋温度与气候的关系。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "details of ways in which light and sound are similar",
          "translation": "关于光与声音相似之处的细节。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Particles in seawater can reflect, scatter and absorb certain frequencies of sound, just as certain wavelengths of light may be reflected, scattered and absorbed by specific types of particles in the atmosphere."
          },
          "synonyms": [
            "“light and sound are similar” 同义替换为原文的 “just as”，just as 是明确表示类比的连接词",
            "“ways in which” 的具体相似点是两组同义动词：“reflect, scatter and absorb certain frequencies of sound” 与 “reflected, scattered and absorbed by specific types of particles”（反射、散射、吸收）",
            "“are similar” 的依据是原文用同一组动词分别描述声与光，形成一一对应的类比关系"
          ],
          "locatingTip": "定位：题干同时出现 light 与 sound，“光与声的相似之处”必有类比标志词，扫读时专找 just as、like、similarly、in the same way 这类信号词。第 3 段（C 段）第 2 句 “Particles in seawater can reflect, scatter and absorb certain frequencies of sound, just as certain wavelengths of light may be reflected, scattered and absorbed by specific types of particles in the atmosphere.” 在一句之内同时出现 sound 和 light 并用 just as 连接，锁定 C。确定答案技巧：抓到 just as 就等于找到了相似点——前半句讲声波被海水中的颗粒反射、散射和吸收，后半句讲光波被大气中的颗粒反射、散射和吸收，两种波的机制逐词对应。其他段落也零散提到光（如 A 段讲光能穿越太空却无法穿透海水）或声音，但只有 C 段把光与声并列表述，答案是 C。",
          "analysis": "C 段（第 3 段）第 2 句：“Particles in seawater can reflect, scatter and absorb certain frequencies of sound, just as certain wavelengths of light may be reflected, scattered and absorbed by specific types of particles in the atmosphere.”（海水中的颗粒能反射、散射和吸收某些频率的声波，正如某些波长的光会被大气中特定类型的颗粒反射、散射和吸收）。题干问“光与声相似之处的细节”，原文用 just as（正如）这一明喻连接词把两个句子衔接起来：前半分句讲声波遇到颗粒时的三种物理过程，后半分句讲光波遇到大气颗粒时的同样三种过程，动词 reflect、scatter、absorb 被完全重复使用（后半句改为被动形式 reflected, scattered and absorbed），这正是“相似之处”的直接证据。因此答案是 C（第 3 段）。解题要点：段落信息匹配题里，抽象的 “ways in which A and B are similar”（A 与 B 的相似方式）几乎总能在原文找到类比标志词（just as、like、as ... as、similarly），先扫信号词再看内容，比逐段读更快。",
          "traps": [
            "为什么不是 A 段（第 1 段）：该段确实提到 light（“light, which can travel trillions of kilometres through the vast vacuum of space, cannot penetrate very far in seawater”），但那是用光在海水中的穿透力差来解释为什么不能用光学手段研究海洋，讲的是光的局限，并未把光与声作类比。",
            "为什么不是 B 段（第 2 段）：该段讲声是穿透海水的最佳工具、达芬奇的观察与 1826 年测声速，全段没有出现 light 一词。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "a reference to a long-term study of different types of weather",
          "translation": "提到一项关于不同天气类型的长期研究。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Since 1985, Nystuen has used hydrophones to listen to rain over the ocean, acoustically measuring not only the rainfall rate but also the rainfall type, ranging from drizzle to thunderstorms."
          },
          "synonyms": [
            "“long-term study” 同义替换为原文的 “Since 1985”：从 1985 年起持续进行，正是长期研究的标志",
            "“different types of weather” 同义替换为原文的 “not only the rainfall rate but also the rainfall type, ranging from drizzle to thunderstorms”，drizzle 与 thunderstorms 是不同天气类型的例举",
            "“a reference to” 对应原文用专有名词与职务 “Oceanographer Jeff Nystuen” 加时间状语 Since 1985 引出的具体研究事例"
          ],
          "locatingTip": "定位：题干的时间线索 long-term 指向原文的年代表述，全篇唯一的 “Since 1985” 出现在第 7 段（G 段）；types of weather 又指向 weather、rain、drizzle、thunderstorms 这一串天气词，两处线索同段，锁定 G。确定答案技巧：long-term 不等于某个具体年份，而是一个“自某年起持续至今”的时间状语，回原文只有 G 段的 Since 1985 符合这一形式；再看研究对象，原文测的是雨的 rate 与 type，范围从 drizzle（毛毛雨）到 thunderstorms（雷暴），正对应 different types of weather。注意 F 段也在讲气候，但落点是海洋温度，不是天气类型，不能混选。",
          "analysis": "G 段（第 7 段）围绕用声学方法测雨展开，其中两句是本题的落点：“Oceanographer Jeff Nystuen, for example, has explored the use of sound to measure rainfall over the ocean.”（例如海洋学家 Jeff Nystuen 探索了用声波测量海上降雨的方法）与 “Since 1985, Nystuen has used hydrophones to listen to rain over the ocean, acoustically measuring not only the rainfall rate but also the rainfall type, ranging from drizzle to thunderstorms.”（自 1985 年起，Nystuen 一直用水听器听海洋上空的雨声，声学测量不仅覆盖降雨强度，还覆盖降雨类型，从毛毛雨到雷暴）。题干的两个要素在这里都能找到对应：long-term study 对应 Since 1985 这一延续数十年的时间状语；different types of weather 对应 rainfall type 与 ranging from drizzle to thunderstorms，原文用区间式的例举说明所测天气类型多样。段末还提到这些数据可供气候学家使用，进一步印证研究具有长期、系统的性质，因此答案是 G（第 7 段）。",
          "traps": [
            "为什么不是 F 段（第 6 段）：F 段同样讲长期测量（over months or years），但研究内容是海洋温度与海气热交换，不是不同的天气类型。",
            "为什么不是 D 段（第 4 段）：D 段讲 SOSUS 系统的开发与用水听器听鲸鱼，没有任何天气或长期研究的内容。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 单项选择（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "According to the passage, who conducted research into the rate at which sound travels in water?",
          "translation": "根据文章，谁研究过声音在水中的传播速率？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "It was not until 1826 that two scientists, Colladon and Sturm, accurately measured the speed of sound in water."
          },
          "synonyms": [
            "“the rate at which sound travels in water” 同义替换为原文的 “the speed of sound in water”，rate 与 speed 同义",
            "“conducted research into” 同义替换为原文的 “accurately measured”，精确测量就是研究的具体方式",
            "“who” 的答案落在原文主语 “two scientists, Colladon and Sturm”"
          ],
          "locatingTip": "定位：题干核心词是 rate（速率）与 sound travels in water，回第 2 段（B 段）找测“声速”的人，落点句是 “It was not until 1826 that two scientists, Colladon and Sturm, accurately measured the speed of sound in water.”。确定答案技巧：题目问“谁”，就去原文找“测声速”这一动作的主语——原文主语是 Colladon and Sturm，动作是 accurately measured the speed of sound，与题干的 rate at which sound travels 精确对应，故选 B。四个选项的人名在文中各有分工，用“动作”匹配比用“人名”记忆更可靠：达芬奇只是观察到把管子伸入水中能听到远处船只；Ewing and Worzel 研究低频声波能传多远；Jeff Nystuen 研究用声测雨。",
          "analysis": "第 2 段讲声音如何在水中传播，先提到 1490 年达芬奇的观察（把长管一端放入水中、另一端贴在耳边就能听到远处船只），随后写：“It was not until 1826 that two scientists, Colladon and Sturm, accurately measured the speed of sound in water. Using a long tube to listen under water (as da Vinci had suggested), they recorded how fast the sound of a submerged bell travelled across Lake Geneva in Switzerland.”（直到 1826 年，科拉东与施图尔姆两位科学家才精确测量出声音在水中的速度。他们按达芬奇的建议用长管在水下收听，记录了瑞士日内瓦湖中一口沉入水下的钟所发声音的传播速度）。题干中的 the rate at which sound travels 与原文 the speed of sound 是同义改写，accurately measured 即题干的 conducted research into，动作的执行者 two scientists, Colladon and Sturm 就是答案，故答案为 B。注意区分“观察现象”与“测量”这一层级差别：达芬奇只是发现能听到远处的船，属于定性观察，真正做定量测量的是 1826 年这两位科学家。",
          "traps": [
            "为什么不是 A（Leonardo da Vinci）：原文只说他 1490 年观察到把管子放进水中、把另一端贴在耳旁就能听到很远的船，属于现象的定性观察，他并未测量声速，后文 Colladon and Sturm 反而“as da Vinci had suggested（按达芬奇的建议）”来操作。",
            "为什么不是 C（Ewing and Worzel）：他们 1943 年做的是水下爆炸实验，验证低频波能传播很远的距离并由此发现“深层声道”，研究落点是距离而非速度。",
            "为什么不是 D（Jeff Nystuen）：他研究的是用声学方法测量海洋上空的降雨量和降雨类型，与声音在水中的速度无关。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "According to the passage, who conducted research into the distances certain types of sound waves travel in water?",
          "translation": "根据文章，谁研究过某些类型的声波在水中能够传播的距离？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In 1943, Maurice Ewing and J. L. Worzel conducted an experiment to test the theory that low-frequency waves, which are less vulnerable than higher frequencies to scattering and absorption, should be able to travel great distances, if the sound source is placed correctly."
          },
          "synonyms": [
            "“distances ... sound waves travel in water” 同义替换为原文的 “should be able to travel great distances”，后面还用 “receivers 3,200 kilometres away” 给出具体距离",
            "“certain types of sound waves” 同义替换为原文的 “low-frequency waves”，指特定频率的声波",
            "“conducted research into” 同义替换为原文的 “conducted an experiment to test the theory”，做实验验证理论就是研究"
          ],
          "locatingTip": "定位：本题与第 9 题的选项高度重叠，必须靠题干的名词区分——第 9 题问 rate（速率），本题问 distances 加 certain types of waves。回原文找“距离”与美国科学家：第 3 段（C 段）有 “should be able to travel great distances”，随后一句给出 “receivers 3,200 kilometres away”（3200 公里外的接收器），落点句主语是 Maurice Ewing and J. L. Worzel。确定答案技巧：抓住 certain types of sound waves 这一限定，对应原文的 low-frequency waves——低频波不易被散射和吸收，因此能传播很远。把“低频波加远距离”两个特征合起来，只有 Ewing and Worzel 的 1943 年实验符合，故选 C。",
          "analysis": "第 3 段讲影响声波传播的因素，中段写道：“In 1943, Maurice Ewing and J. L. Worzel conducted an experiment to test the theory that low-frequency waves, which are less vulnerable than higher frequencies to scattering and absorption, should be able to travel great distances, if the sound source is placed correctly. The researchers set off an underwater explosion and learned that it was detected easily by receivers 3,200 kilometres away.”（1943 年，莫里斯·尤因与 J. L. 沃泽尔做了一项实验，检验这样一个理论：低频波比高频波更不易被散射和吸收，只要声源放置得当，应能传播很远。他们引爆炸药，发现 3200 公里外的接收器仍能轻松探测到信号）。题干中的 distances 对应 travel great distances，certain types of sound waves 对应 low-frequency waves，conducted research 对应 conducted an experiment to test the theory，动作执行者为 Ewing and Worzel，故选 C。本题的干扰点来自选项 A、B：人名在文中都真实出现，但只要锁定题干的名词落点（distance、低频率声波），就能把 Colladon and Sturm 所属的“测声速”情节排除出去。",
          "traps": [
            "为什么不是 A（Leonardo da Vinci）：他是 1490 年提出用管子听水下声音的人，属于现象观察与建议，没有做任何关于传播距离的研究。",
            "为什么不是 B（Colladon and Sturm）：他们 1826 年在日内瓦湖测的是声音在水中的速度（the speed of sound in water），研究对象是速度不是距离，虽然他们“把声音传过了一个湖”，但原文并没有把它作为距离研究来介绍。",
            "为什么不是 D（Christopher Clark）：他用水听器听到 1770 公里外的鲸鱼，研究的是鲸鱼而不是某类声波能传播多远。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "SOSUS allows whale researchers to",
          "translation": "SOSUS 使鲸鱼研究者能够",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Moreover, they can track not just one whale at a time, but many creatures simultaneously."
          },
          "synonyms": [
            "“follow a number of whales” 同义替换为原文的 “track not just one whale at a time, but many creatures”，track 与 follow 同义",
            "“at the same time” 同义替换为原文的 “at a time” 与 “simultaneously”（同时）",
            "“SOSUS allows whale researchers to” 对应原文的 “by using SOSUS, scientists can track the whales and position them on a map” 与随后的 Moreover 句"
          ],
          "locatingTip": "定位：题干关键词 SOSUS 与 whale researchers，第 5 段（E 段）整段讲鲸鱼，其中 “by using SOSUS, scientists can track the whales and position them on a map” 与题干句式几乎一致。确定答案技巧：题干问 SOSUS 让研究者能做什么，就要在原文找 can 后面的动词短语；原文用 Moreover 递进补充 “they can track not just one whale at a time, but many creatures simultaneously”，not just ... but ... 的强调重点在后半句“同时追踪许多生物”，正好等于选项 A 的 follow a number of whales at the same time。故选 A。",
          "analysis": "第 5 段先说明鲸鱼虽大却很难以传统方式观察（研究者只能把船停在海上等蓝鲸浮出水面，追踪的距离有限，很多情况仍属未知），随后指出 SOSUS 带来的改变：“But by using SOSUS, scientists can track the whales and position them on a map. Moreover, they can track not just one whale at a time, but many creatures simultaneously.”（但借助 SOSUS，科学家能追踪鲸鱼并在地图上定位；更进一步，他们不是一次只能追踪一头鲸，而是能同时追踪许多生物）。题干的 a number of whales at the same time 与原文 many creatures simultaneously 完全对应：a number of 对应 many，at the same time 对应 simultaneously，动作 track 对应 follow。因此答案为 A。解题提示：选项 B、C、D 都是在“追踪”这一动作之外凭空添加目的的干扰项，原文同段确实还讲了“分辨鲸的叫声”，那是选项 C 的出处，但原文用的是 distinguish（听辨），而不是 imitate（模仿）。",
          "traps": [
            "为什么不是 B（protect whales as they migrate）：原文只讲追踪与定位鲸鱼，全篇没有出现保护鲸鱼或鲸鱼迁徙的内容。",
            "为什么不是 C（imitate whale calls of different species）：原文写的是 “They can also learn to distinguish whale calls”（他们还能学会分辨鲸的叫声），distinguish 是听辨区分，不是 imitate（模仿），动作性质不同。",
            "为什么不是 D（change the whales' direction of travel）：原文从未提到改变鲸鱼的游动方向，属于无中生有。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Finback whale calls change",
          "translation": "长须鲸的叫声会发生变化，",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "They can also learn to distinguish whale calls; researchers have detected changes in the calls of finback whales as the seasons change, and have found that blue whales in different regions of the Pacific Ocean have different calls."
          },
          "synonyms": [
            "“Finback whale calls change” 同义替换为原文的 “changes in the calls of finback whales”，原词一一对应",
            "“at different times of year” 同义替换为原文的 “as the seasons change”，季节更替就是一年中的不同时段",
            "原文用 as 引导时间状语，表明叫声变化与季节更替同步发生，构成时间上的对应"
          ],
          "locatingTip": "定位：题干含专有名词 Finback whale，全篇只出现在第 5 段（E 段）最后一句，一步定位，无需读其他段落。确定答案技巧：题目问叫声随什么变化，原文给的是 “researchers have detected changes in the calls of finback whales as the seasons change”，as the seasons change 中的 seasons 就是落点，对应选项 B 的 at different times of year。同段还提到太平洋不同海域的蓝鲸叫声不同，那是另一个发现，不要与本题的时间条件混淆；选项 D 的 surface 来自前文“研究者只能等蓝鲸浮出水面”这一观察困难，与叫声变化无关。",
          "analysis": "第 5 段末句：“They can also learn to distinguish whale calls; researchers have detected changes in the calls of finback whales as the seasons change, and have found that blue whales in different regions of the Pacific Ocean have different calls.”（他们还能学会分辨鲸的叫声；研究者发现长须鲸的叫声随季节更替而变化，并发现太平洋不同海域的蓝鲸叫声各不相同）。题干 Finback whale calls change 直接对应 changes in the calls of finback whales，变化的触发条件即 as the seasons change（随着季节更替），季节更替就是一年中的不同时间段，与选项 B 的 at different times of year 完全同义。原文同句后半部分讲的是另一项发现——不同海域的蓝鲸叫声不同（地域差异，不是时间差异），做题时要把“季节差异”与“海域差异”分开，避免错选。因此答案为 B。",
          "traps": [
            "为什么不是 A（when scientists track them）：原文说研究者借助 SOSUS 追踪鲸鱼、分辨叫声，但追踪只是研究手段；叫声变化的原因是季节更替，不是被追踪本身。",
            "为什么不是 C（when whales communicate with other species）：原文只提到不同海域的蓝鲸叫声不同，从未出现与其他物种交流的表述。",
            "为什么不是 D（when whales come to the surface）：surface 出现在同段前文，讲的是研究者只能在船上等蓝鲸浮出水面才能观察，属于传统观察方式的局限，与叫声变化无关。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "SOSUS allows scientists to",
          "translation": "SOSUS 使科学家能够",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Thousands of sound paths in the ocean can be pieced together into a map of global ocean temperatures, and by repeating measurements along the same paths over time, scientists can track changes in temperature over months or years."
          },
          "synonyms": [
            "“measure variations in temperature” 同义替换为原文的 “track changes in temperature”，changes 与 variations 同义",
            "“SOSUS allows scientists to” 同义替换为原文的 “scientists can”，情态动词 can 表示能力",
            "“SOSUS” 在第 6 段（F 段）首句以 “SOSUS has also proved instrumental” 直接复现，句中的 the same paths 回指上文的 sound paths，即 SOSUS 的测量路径"
          ],
          "locatingTip": "定位：与第 11 题区分——第 11 题的 SOSUS 落在鲸鱼（E 段），本题的 SOSUS 落在气候与温度（F 段）。扫描第 6 段找 scientists can 加温度类动词，落点句为 “by repeating measurements along the same paths over time, scientists can track changes in temperature over months or years.”。确定答案技巧：选项 D 的核心词是 variations in temperature，对应原文 track changes in temperature（追踪温度变化），variations 与 changes 同义；其余三个选项在 F 段找不到依据——原文提到的是 “a map of global ocean temperatures”（全球海洋温度图），不是海底地图；全篇没有水位内容；也没讲洋流。故选 D。",
          "analysis": "第 6 段讲 SOSUS 对气候研究的贡献：系统让研究者能在全球尺度测量海洋温度，而这些测量是理解海气热量交换的关键；接着解释原理——海中水平传播的声波速度主要由温度决定，因此声波传播时间是沿途平均温度的敏感指标；段末总结：“Thousands of sound paths in the ocean can be pieced together into a map of global ocean temperatures, and by repeating measurements along the same paths over time, scientists can track changes in temperature over months or years.”（海中成千上万条声音路径可以拼成一张全球海洋温度图，而通过在相同路径上反复测量，科学家能够追踪数月乃至数年的温度变化）。题干 SOSUS allows scientists to 与原文 scientists can track changes in temperature 对应，选项 D 的 measure variations in temperature 正是 track changes in temperature 的同义改写（variations 即 changes，measure 即 track），故答案为 D。解题提示：本题与第 11 题的题干措辞完全相同（SOSUS allows ... to），区别只在主语名词，出题人正是借此考查考生能否用主题词而非句式定位，SOSUS 相关段落共有 D、E、F 三段，务必回到题干名词（whale researchers 与 scientists 加温度线索）去区分。",
          "traps": [
            "为什么不是 A（make accurate maps of the ocean floor）：原文说的是 “a map of global ocean temperatures”（全球海洋温度分布图），画的是温度而不是海底地形，ocean floor 属于偷换对象。",
            "为什么不是 B（measure water-level changes）：全篇讲的是温度、降雨、鲸鱼等主题，从未出现水位变化（water level）的相关内容。",
            "为什么不是 C（investigate ocean currents）：原文强调的是用声波沿路径测温度，全篇没有涉及洋流的调查。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
