(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1471", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1471",
  "meta": {
    "examId": "p1-medium-1471",
    "title": "Keep a Watchful Eye on the Bridges 留心桥梁",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 选择题（四选一 A/B/C/D）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "How did the traditional way to prevent damage of the bridges before the invention of new monitoring system?",
          "translation": "在新监测系统发明之前，防止桥梁受损的传统做法是怎样的？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Most road and rail bridges are only inspected visually, if at all. Every few months, engineers have to clamber over the structure in an attempt to find problems before the bridge shows obvious signs of damage."
          },
          "synonyms": [
            "「the traditional way」在原文中体现为第 1 段前两句描述的旧式检查方式，即只有人工目视检查，而没有仪器长期监控",
            "「to prevent damage of the bridges」同义替换为原文的「in an attempt to find problems before the bridge shows obvious signs of damage」，即赶在桥梁出现明显损坏迹象之前找出问题",
            "「frequently」同义替换为原文的「Every few months」（每隔几个月一次）",
            "「inspected by professional workers with naked eyes」同义替换为原文的「inspected visually」以及「engineers have to clamber over the structure」，其中 engineers 对应 professional workers，visually 对应 with naked eyes",
            "「before the invention of new monitoring system」对应原文第 1 段末句的对照信息「may replace these surveys with microwave sensors」，说明微波传感器是之后才出现的新技术"
          ],
          "locatingTip": "定位：题干问的是「新技术出现之前的传统做法」，而原文第 1 段恰好按时间顺序排布——前两句讲旧办法（人工攀爬目视检查），最后一句才引入新技术（微波传感器）。因此答案句必然落在第 1 段倒数第一句之前的两句里。确定答案技巧：把题干拆成三个得分点逐一核对——①谁来做（professional workers）、②怎么做（with naked eyes）、③多久做一次（frequently）。原文「engineers have to clamber over the structure」对应人工攀爬检查，「inspected visually」对应肉眼查看，「Every few months」对应频繁，三处全部吻合，故选 D。",
          "analysis": "第 1 段前三句构成本题的完整依据。首句「Most road and rail bridges are only inspected visually, if at all.」（大多数公路桥和铁路桥即使检查，也只是进行目视检查）；第二句「Every few months, engineers have to clamber over the structure in an attempt to find problems before the bridge shows obvious signs of damage.」（每隔几个月，工程师必须攀爬到桥梁结构上，试图在桥梁出现明显损坏迹象之前找出问题）；第三句才引出 Los Alamos 国家实验室与 Texas A&M 大学研发的微波传感器技术，并说它可能取代（replace）这类人工检查。题干的 the traditional way 指的就是被取代的那套旧办法，before the invention of new monitoring system 正是「replace these surveys」之前的状态。逐项核对：原文的关键动作是 engineers clamber over the structure（工程师攀爬到结构上）加 inspected visually（目视检查），这正是选项 D 所说的「被专业工作人员用肉眼频繁检查」——engineers 等于 professional workers，visually 等于 with naked eyes，Every few months 等于 frequently。三个信息点严丝合缝，所以答案是 D。注意本题是「时间立场题」：microwave sensors、sensors 这类词都是新技术，凡是把新技术当成传统做法的选项都不能选。",
          "traps": [
            "为什么不是 A：原文只说每隔几个月要攀爬检查一次，完全没有提到「两个点（two points）」或「每一次移动都要测试」这类信息，two points 与 in every movement 都属于原文没有、由选项自行添加的细节，属于无据编造。",
            "为什么不是 B：microwave devices（微波装置）恰恰是第 1 段末句介绍的新技术，原文说它会 replace these surveys（取代这类人工检查）；题干问的是新技术之前的老办法，把新技术当历史做法属于时间立场颠倒。",
            "为什么不是 C：sensors（传感器）同样属于新技术范畴。「may replace these surveys with microwave sensors」明确说传感器是用来取代旧检查方式的新手段，而题干问的 old way 只能对应人工目视检查，因此 C 与题干的时间设定矛盾。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "How does the new microwave monitors find out the problems of bridges?",
          "translation": "新型微波监测装置是如何发现桥梁问题的？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "\"The device uses microwaves to measure the distance between the sensor and the bridge, much like radar does,\" says Albert Migliori, a Los Alamos physicist. \"Any load on the bridge – such as traffic induces displacements, which change that distance as the bridge moves up and down.\""
          },
          "synonyms": [
            "「the new microwave monitors」同义替换为原文的「The device uses microwaves」，指同一台微波监测设备",
            "「by monitoring the distance」同义替换为原文的「uses microwaves to measure the distance」以及「By monitoring these movements over several minutes」",
            "「the distance caused by traffic between two points」同义替换为原文的「Any load on the bridge – such as traffic induces displacements, which change that distance」加上「the distance between the sensor and the bridge」，即传感器与桥面这两点之间的距离因交通荷载而变化",
            "「find out the problems」同义替换为原文的「Changes in its behaviour can give an early warning of damage」"
          ],
          "locatingTip": "定位：题干的核心词是 microwave 与 distance，二者同时出现在第 2 段第 1 句，且第 2 段紧接第 1 段末句的新技术介绍，属于「技术原理段」，读到这里就能锁定答案区。确定答案技巧：本题考原理，必须在原文里找到「测什么」和「为什么会变」两条信息。原文说装置用微波测量「传感器与桥之间」的距离（the distance between the sensor and the bridge），又说「桥上的任何荷载，例如交通，会引起位移，从而改变这个距离」。把两句合并：被测量的就是因交通而产生的、两点（传感器与桥面）之间的距离变化，与选项 C 完全对应。注意区分「因荷载而改变的距离」（原文）与「人为改变设备位置」（选项 A），后者是偷换动作主体。",
          "analysis": "第 2 段是全文的技术原理段。第 1 句引述 Los Alamos 物理学家 Albert Migliori 的话：「The device uses microwaves to measure the distance between the sensor and the bridge, much like radar does.」（该装置用微波测量传感器与桥梁之间的距离，方式很像雷达）。第 2 句继续引述：「Any load on the bridge – such as traffic induces displacements, which change that distance as the bridge moves up and down.」（桥梁上的任何荷载，比如交通，都会引起位移，当桥梁上下移动时这个距离随之改变）。第 3 句说研究人员通过监测若干分钟内的这些运动来判断桥梁如何共振（how the bridge resonates），第 4 句说其行为的变化可以给出损坏的早期预警。题干的问法是「微波监测装置怎样发现问题」，三个关键信息点分别是：手段是 microwave、对象是 the distance、来源是 traffic。原文第 1 句提供 microwave 与 the distance，第 2 句提供 traffic（交通荷载）与 displacements，两者合起来就是选项 C 所说的「通过监测由交通引起的、两点之间的距离」，因此答案是 C。这里务必注意原文的因果关系：交通引起位移，位移改变距离，装置监测的是距离的变化，而不是去控制车流或主动改变设备位置。",
          "traps": [
            "为什么不是 A：原文说的是交通荷载引起桥梁位移，进而改变了「传感器与桥之间的」距离，距离是被动改变的结果；选项 A 的「by changing the distance between the positions of devices」把改变距离说成了装置主动采取的动作，还出现了原文没有的复数 devices，主被动关系与对象都错。",
            "为什么不是 B：原文提到 traffic 只是作为造成位移的一种荷载来源（Any load on the bridge – such as traffic），从未提及装置需要「控制桥上的车流（controlling the traffic flow）」，属于无据信息。",
            "为什么不是 D：原文的 displacement（位移）是交通荷载造成桥梁上下移动的现象，装置真正测量的是 change that distance（那个距离的变化），而不是选项 D 所说的「桥梁中若干关键部件的位移」，原文也没有把部件分成 several critical parts。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Why did the expert believe there is a problem for the design called \"fracture critical\"?",
          "translation": "为什么专家认为那种被称为「fracture critical」的设计存在问题？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "They have two steel girders supporting the load in each section. Highway experts know that this design is \"fracture critical\" because a failure in either girder would cause the bridge to fail."
          },
          "synonyms": [
            "「the expert」同义替换为原文的「Highway experts」（公路专家）",
            "「the design called \"fracture critical\"」在原文中为原词复现：「this design is \"fracture critical\"」",
            "「the supporting parts of the bridges」同义替换为原文的「two steel girders supporting the load in each section」，girders 正是承重构件",
            "「may crack」同义替换为原文的「a failure in either girder」，并可结合第 5 段的「fatigue cracks」（疲劳裂纹）理解 failure 的具体形态",
            "「cause the bridge to fail」为原文原词复现：「would cause the bridge to fail」"
          ],
          "locatingTip": "定位：题干里的专业术语 fracture critical 带引号，属于极佳的低频定位词，全文只出现一次，直接跳到第 3 段末两句即可，无需通读全文。确定答案技巧：英语的 because 是答案的信号灯。原文「this design is \"fracture critical\" because a failure in either girder would cause the bridge to fail」中的 because 从句直接给出了专家担心的原因：任一根梁失效就会导致整座桥垮塌。把 cause 从句的两端分别对照选项——a failure in either girder 对应「supporting parts may crack」，would cause the bridge to fail 与选项 C 的措辞几乎一致，因此选 C。",
          "analysis": "第 3 段先讲研究人员在 Albuquerque 的 Interstate 40 桥进行试验的难得机会，随后交代背景：「In the 1960s and 1970s, 2500 similar bridges were built in the US. They have two steel girders supporting the load in each section. Highway experts know that this design is \"fracture critical\" because a failure in either girder would cause the bridge to fail.」（20 世纪 60、70 年代美国建了 2500 座同类桥梁，每节桥段用两根钢梁承托荷载；公路专家知道这种设计属于「易致断裂」型，因为任一根梁一旦失效就会导致整座桥垮塌）。题干问专家为什么认为该设计有问题，原文用 because 明确给出因果：钢梁（承重构件）失效，桥就垮。选项 C「桥梁的承重部件可能开裂并导致桥梁失败」正是这句话的改写——supporting parts 对应 girders，crack 对应 failure，cause the bridge to fail 与原文完全重合。故答案是 C。本题是典型的「因果信号词题」，看到 because 就要立刻意识到其后就是答案依据。",
          "traps": [
            "为什么不是 A：原文完全没提建筑材料问题，也没有提到工程师未能采用新研发的建材（the newly developed construction materials）；第 3 段讨论的是 20 世纪 60、70 年代既有桥梁的结构形式，属于无据信息。",
            "为什么不是 B：原文只提到新墨西哥州当局决定拆掉并重建这座桥（decided to raze this bridge and replace it），原因与资金是否充足无关，not enough finance 在原文中没有任何依据。",
            "为什么不是 D：原文说每节桥段由两根钢梁承托荷载，并未比较交通荷载与设计预期的大小；把「承重构件失效」的原因解释为「交通荷载超出设计者的预计」，是把结构设计缺陷偷换成了外部荷载问题。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Defect was not recognized by a basic method in the beginning.",
          "translation": "起初，一种基本的方法并没有识别出缺陷。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The initial, crude analysis of the bridge's behaviour, based on the frequency at which the bridge resonates, did not indicate that anything was wrong until the flange was damaged."
          },
          "synonyms": [
            "「a basic method」同义替换为原文的「The initial, crude analysis … based on the frequency at which the bridge resonates」，即以共振频率为基础的粗略分析",
            "「Defect was not recognized」同义替换为原文的「did not indicate that anything was wrong」",
            "「in the beginning」同义替换为原文的「initial」（最初的）",
            "「until the damage appears along and down to the flanges」同义替换为原文的「until the flange was damaged」，并可结合第 5 段「They then extended the cut until it reached the bottom of the girder and finally they cut across the flange」，说明损伤位置就是沿梁身向下、直到翼缘"
          ],
          "locatingTip": "定位：题干的关键词是 basic method 与 in the beginning，原文第 6 段首句的 initial, crude analysis 正好与之对应（crude 即粗略、初级，对应 basic）；句末的 flange 又是独有的专业词，双重锁定第 6 段第 1 句。确定答案技巧：not … until 结构是本题的判分点——原文说最初的粗糙分析 did not indicate that anything was wrong until the flange was damaged，意思是只有损伤发展到翼缘时才被察觉。选项中只有 B 提到损伤沿梁身向下扩展到 flanges，与 until the flange was damaged 对应，故选 B。注意 A 里的 faces 与 C 里的 punched 都是把其他段落的情节搬来做干扰。",
          "analysis": "第 6 段首句给出本题答案：「The initial, crude analysis of the bridge's behaviour, based on the frequency at which the bridge resonates, did not indicate that anything was wrong until the flange was damaged.」（最初对桥梁行为的粗略分析以桥梁共振的频率为依据，直到翼缘受损时才显示出异常）。这里 initial, crude analysis 就是题干的 a basic method，did not indicate that anything was wrong 就是 Defect was not recognized，not … until 结构则点明「到翼缘被破坏才识别出来」。再看第 5 段交代损伤如何一步步造成：先在一根梁中部切出约 60 厘米长的槽（cut a slot about 60 centimetres long in the middle of one girder），再把切口延长到底部（extended the cut until it reached the bottom of the girder），最后横切翼缘（cut across the flange）。把两段合起来可知，损伤是沿着梁身向下延伸、最终才波及翼缘的，正对应选项 B「until the damage appears along and down to the flanges」。第 6 段后半句还说，改用 Stubbs 的复杂算法后重新分析数据，成功识别并定位了最初那次切口造成的损伤，进一步印证「起初的基本方法识别不出」。",
          "traps": [
            "为什么不是 A：原文没有提到桥梁的 faces（面）出现 fractures（断裂），损伤是研究人员在一根钢梁上人工切出来的（cut a slot、extended the cut、cut across the flange）；mid of faces 是把 girders 中部（in the middle of one girder）误读成了「梁面的中部」，属于术语张冠李戴。",
            "为什么不是 C：原文的确提到用一个「shaker」向路面某一点施加精确冲击（delivered precise punches to a specific point on the road），但那是第 4 段加载测试的方式，与「基本方法识别不出缺陷」的判定条件无关；缺陷被识别的时间点是翼缘受损，而不是路面被敲击的时间。",
            "为什么不是 D：原文说最初的粗糙分析正是基于共振频率（based on the frequency at which the bridge resonates），并未提到频率出现紊乱（appears disordered）；相反，是频率分析在损伤早期失灵，直到翼缘受损才报警。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–8 图示填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 8
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Label 5: the dish-shaped device set up on the ground below the bridge",
          "translation": "图示 5：架设在桥梁下方地面上的碟形装置。",
          "answer": "microwave dish",
          "wordClass": "名词短语（microwave 作定语修饰名词 dish，指碟形微波天线；题干限填 NO MORE THAN TWO WORDS，答案恰好两个词，按原文形式写小写的 microwave dish）",
          "locating": {
            "paragraph": "4",
            "quote": "After setting up the microwave dish on the ground below the bridge, the Los Alamos team installed conventional accelerometers at several points along the span to measure its motion."
          },
          "synonyms": [
            "「the dish-shaped device」同义替换为原文的「the microwave dish」，dish 即碟形天线",
            "「set up on the ground below the bridge」同义替换为原文的「setting up the microwave dish on the ground below the bridge」，地点状语完全相同",
            "「the device」在原文的上下文里就是第 2 段所说的「The device uses microwaves」中的同一台设备"
          ],
          "locatingTip": "定位：图中 5 号空指向架在地面上的那面碟形天线，回到原文找与「架设在地面」有关的表述，第 4 段开头「After setting up the … on the ground below the bridge」一句完全吻合，图中 dish 的形态也印证了这一点。确定答案技巧：原文该句的宾语就是答案词，即 the microwave dish；由于题干限填 NO MORE THAN TWO WORDS，只需写出 microwave dish 两个词，不要带上定冠词 the，也不要写成 radar 或 interferometer（第 8 段出现的 microwave interferometer 是这类仪器的统称，而图中标注的是具体的那面碟形天线）。",
          "analysis": "第 4 段首句：「After setting up the microwave dish on the ground below the bridge, the Los Alamos team installed conventional accelerometers at several points along the span to measure its motion.」（在桥下地面架好微波天线之后，Los Alamos 团队又沿桥跨在若干点安装了常规加速度计，用来测量桥梁的运动）。图中 5 号空正是那面安放在地面上的碟形天线，句子里的 setting up（架设）与 on the ground below the bridge（在桥下地面上）与图中位置一一对应，因此要填的词就是句中的宾语 the microwave dish，去掉冠词写作 microwave dish。这一句同时还是第 6 题的定位句（accelerometers），两题同段不同空，答题时按图中编号分别回原文取词即可。注意第 8 段还出现过 microwave interferometer（微波干涉仪），那是 Tim Darling 与 Migliori 合作研发的整套仪器系统，并非图中那面架在地面上的碟形天线，不能作为本题答案。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Label 6: the small devices fixed at several points along the bridge span",
          "translation": "图示 6：沿桥梁跨距安装在多个点上的小型装置。",
          "answer": "accelerometers",
          "wordClass": "名词（复数；原文用复数 accelerometers，与句中的 several points 相呼应，指安装在各测点上的测振加速度计，答案保持复数形式）",
          "locating": {
            "paragraph": "4",
            "quote": "the Los Alamos team installed conventional accelerometers at several points along the span to measure its motion"
          },
          "synonyms": [
            "「the small devices fixed at several points」同义替换为原文的「accelerometers at several points」，several points 为原词复现",
            "「along the bridge span」同义替换为原文的「along the span」，span 指桥跨",
            "「fixed」同义替换为原文的「installed」（安装）"
          ],
          "locatingTip": "定位：图中 6 号空指向桥面上沿桥跨排列的一排小方块，回到原文找「在若干点上安装的小装置」，第 4 段首句后半部分的 accelerometers at several points along the span 与之精确对应。确定答案技巧：本题的取词依据是复数与位置两重线索——原文用复数 accelerometers，与图中多个小方块以及 several points 一致；装置位置 along the span（沿桥跨）也与图中排列方式一致。答案写 accelerometers 一词，注意拼写不要漏掉词尾，也不要与第 5 题的 microwave dish 混淆（后者在地面，不在桥面上）。",
          "analysis": "答案出自第 4 段首句的后半部分：「the Los Alamos team installed conventional accelerometers at several points along the span to measure its motion」（Los Alamos 团队沿桥跨在若干点安装了常规加速度计，用来测量桥梁的运动）。图中 6 号空标注在桥面上沿跨距排列的一排小方块上，对应的正是「安装在若干测点上的仪器」，也就是 accelerometers。从做题角度看，「测桥梁运动」这一功能与加速度计的用途完全吻合（加速度计用于测量振动与运动），这也是判断答案的有力旁证。填写时注意两点：一是原文用复数形式，与图中多个测点对应，因此写 accelerometers 而不是单数；二是本题与第 5 题同出一句，但两题分别对应句子的不同成分，切勿把 microwave dish 填到 6 号空。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Label 7: the supporting members under each section of the bridge",
          "translation": "图示 7：每节桥段下方起承重作用的构件。",
          "answer": "steel girders",
          "wordClass": "名词短语（steel 作定语修饰复数名词 girders，指每节桥段中承托荷载的两根钢梁；答案两个词，符合 NO MORE THAN TWO WORDS 的限制）",
          "locating": {
            "paragraph": "3",
            "quote": "They have two steel girders supporting the load in each section."
          },
          "synonyms": [
            "「the supporting members」同义替换为原文的「steel girders supporting the load」，girders 即承托荷载的梁",
            "「under each section of the bridge」对应原文的「in each section」，图中 7 号空指向的正是每节桥段下方的承重梁体",
            "「two」这一数量信息在原文中与图中每节桥段下方的构件数目一致，可作辅助验证"
          ],
          "locatingTip": "定位：图中 7 号指向桥面下方、每节桥段各自的一组承重构件，回原文找介绍桥梁结构的部分，即第 3 段末尾两句（in the 1960s and 1970s 那批桥梁的结构描述），其中 steel girders 是唯一的承重构件名称。确定答案技巧：题干的 supporting members 与原文的 supporting the load 形成同义呼应，据此可在句中锁定 girders 这一中心词；girders 前面的 steel 是限定材料的前置定语，必须一并写出才符合「每节桥段的两根钢梁」这一完整表述。答案共两个词 steel girders，不要写成 girder、beam 或 support（要注意原文只用了 girders 这个词）。",
          "analysis": "第 3 段在介绍试验桥梁的来历时交代了结构信息：「In the 1960s and 1970s, 2500 similar bridges were built in the US. They have two steel girders supporting the load in each section.」（20 世纪 60、70 年代美国建造了 2500 座同类桥梁，每节桥段由两根钢梁承托荷载）。图中 7 号空标注在桥面下方的承重构件上，与句子中的 steel girders supporting the load in each section 完全对应：supporting the load 对应题干的 supporting members，in each section 对应 each section of the bridge，数量 two 也与图示一致。因此答案取原文的 steel girders 两个词。本题还要与第 5 段的裂纹描写相互印证：第 5 段说研究人员把 60 厘米长的切口切在一根梁的中部（in the middle of one girder），说明桥梁的关键承重构件正是 girder，这也从侧面确认了 7 号空所指的是钢梁。作答时保持原文用词与复数形式，不必补冠词。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Label 8: the bottom part of the girder's \"I\" shape",
          "translation": "图示 8：工字梁「I」形底部的部分。",
          "answer": "flange",
          "wordClass": "名词（单数，指工字梁下缘的翼缘；作为图示 Label 8 的标签答案，对应题干 the bottom part of the girder's \"I\" shape，用单数、不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "They then extended the cut until it reached the bottom of the girder and finally they cut across the flange – the bottom of the girder's \"I\" shape."
          },
          "synonyms": [
            "「the bottom part of the girder's \"I\" shape」在原文中就是同义解释：「the flange – the bottom of the girder's \"I\" shape」，破折号后是对 flange 的释义",
            "「the bottom part」同义替换为原文的「the bottom of the girder」，两处相呼应",
            "「cut across」与图中 8 号空所指的梁底横向部位对应，构成答案的空间证据"
          ],
          "locatingTip": "定位：图中 8 号空指向工字梁最下端的横向板，原文用专有名词 flange 来称呼它，并紧跟一个破折号作解释「the bottom of the girder's \"I\" shape」，二者措辞几乎一致，属于最容易锁定的「原词加释义」结构。确定答案技巧：破折号后的释义是雅思阅读中提示定义的常见写法，只要识别出 it reached the bottom of the girder 与 the bottom of the girder's \"I\" shape 说的是同一处，就能确定答案词是破折号之前的 flange。答案只写 flange 一个词，不要写成 I shape（那是形状比喻，不是部件名称），也不要写成 girder（那是整体构件）。",
          "analysis": "第 5 段描述研究人员如何人为制造损伤：「They first cut a slot about 60 centimetres long in the middle of one girder. They then extended the cut until it reached the bottom of the girder and finally they cut across the flange – the bottom of the girder's \"I\" shape.」（他们先在一根梁中部切出约 60 厘米长的槽，随后把切口延长至梁的底部，最后横切翼缘，也就是工字梁「I」形的底边）。句中破折号后的 the bottom of the girder's \"I\" shape 正是对 flange 的释义，与题干 Label 8 所描述的部位完全等义，因此 8 号空填 flange。这一处也是全文的关键伏笔：第 6 段说最初的粗糙分析直到 the flange was damaged 才显示异常，说明底部的翼缘是裂纹扩展到最后才触及的部位，与图中 8 号空位于梁底的位置一致。作答时保留原文单数形式 flange，词数为一，符合限制。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 段落信息匹配（A–H）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "the opportunity the researchers had to test their ideas",
          "translation": "研究人员测试其构想的机会。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The Interstate 40 bridge over the Rio Grande river in Albuquerque provided the researchers with a rare opportunity to test their ideas."
          },
          "synonyms": [
            "「the opportunity」为原文原词复现：「a rare opportunity」",
            "「the researchers」为原文原词复现：「provided the researchers with」",
            "「to test their ideas」为原文原词复现：「to test their ideas」",
            "「had」对应原文的「provided … with」，同样表示获得（得到提供）"
          ],
          "locatingTip": "定位：题干为名词短语，中心词是 opportunity，属于抽象名词，不易扫读，但后面的 test their ideas 提示要在原文找「测试构想的机会」这类表述；第 3 段首句以专有名词 Interstate 40、Rio Grande、Albuquerque 开头，一眼可见，句中即含 opportunity 一词。确定答案技巧：段落信息匹配题不要逐段精读，而是抓住题干的独特名词组合去扫读。本题的机会（opportunity）、研究者（researchers）、构想（ideas）三词在同一句里同时出现，属于「原词重合法」，可直接判定为 C 段。",
          "analysis": "C 段首句：「The Interstate 40 bridge over the Rio Grande river in Albuquerque provided the researchers with a rare opportunity to test their ideas.」（Albuquerque 的 Rio Grande 河上的 Interstate 40 大桥，为研究人员提供了一个难得的测试其构想的机会）。题干「the opportunity the researchers had to test their ideas」几乎是这句话的压缩版：opportunity、researchers、test their ideas 三处核心词完全重合，只是把原文的 provided … with 换成 had（拥有）。C 段接下来交代新墨西哥州当局决定拆桥重建，研究人员因此得以在桥上安装仪器、在各种荷载条件下测试，甚至在拆毁前人为制造损伤，这些细节都是对「难得机会」的具体展开，进一步确认答案是该段。做段落匹配题时，这类「题干与原文几乎逐词对应」的句子属于最省时的送分点，找到即可落笔，不必纠缠其他段落。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "a ten-year plan for the monitoring device",
          "translation": "针对这种监测装置的十年规划。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "\"In a decade I would like to see a battery or solar-powered package mounted under each bridge, scanning it every day to detect changes,\" he says."
          },
          "synonyms": [
            "「a ten-year plan」同义替换为原文的「In a decade I would like to see」，十年即 a decade，计划即 would like to see",
            "「the monitoring device」同义替换为原文的「a battery or solar-powered package mounted under each bridge, scanning it every day to detect changes」",
            "「every day」与「to detect changes」进一步印证这是在谈持续监测的安排"
          ],
          "locatingTip": "定位：题干含数字概念 ten-year，回原文找时间跨度表述，H 段末句的「In a decade」是最直接的对应；同时该段是全文最后一段，谈的正是商业化与未来展望，属于「规划类」信息的自然归属段。确定答案技巧：段落匹配题中的「时间加计划」类题干，往往对应段末的引语或展望句。找到 In a decade 后继续读下去，可见 a battery or solar-powered package mounted under each bridge, scanning it every day 这样的设备与监测安排，与题干的 the monitoring device 精确对应，故判定为 H。",
          "analysis": "H 段是全篇的收尾段，先讲基于 Los Alamos 硬件的商业系统已可购得（A commercial system based on the Los Alamos hardware is now available … from the Quatro Corporation in Albuquerque for about $100,000），再由物理学家 Tim Darling 展望未来：「In a decade I would like to see a battery or solar-powered package mounted under each bridge, scanning it every day to detect changes.」（十年之内，我希望看到一种电池或太阳能供电的装置安装在每座桥下，每天扫描一次以探测变化）。题干 the monitoring device（监测装置）对应句中的 battery or solar-powered package（该装置的功能就是 scanning it every day to detect changes，即监测），a ten-year plan（十年规划）对应 In a decade I would like to see（十年之内我希望能看到），故答案是 H。注意区分：该段前半句讲的是现在已经可以买到的商业系统，而「十年」这一时间跨度只出现在引语部分；若题干问的是「已投入使用的机构」，则应看 G 段（见第 11 题）。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "an organisation that has already put the technique to use",
          "translation": "一个已经将该技术投入使用的机构。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "NASA already uses Stubbs' method to check the behaviour of the body flap that slows space shuttles down after they land."
          },
          "synonyms": [
            "「an organisation」对应原文的「NASA」（美国国家航空航天局，是一个机构）",
            "「has already put the technique to use」同义替换为原文的「already uses Stubbs' method」，already 为原词复现，put … to use 对应 uses",
            "「the technique」对应原文的「Stubbs' method」，即 Stubbs 的算法方法"
          ],
          "locatingTip": "定位：题干的 organisation 提示要找机构名，全文出现的机构有 Los Alamos National Laboratory、Texas A&M University、NASA、Quatro Corporation 等，而「已经使用该技术」这一条件把范围收窄到句中含 already 的表述，G 段末句正是 NASA already uses Stubbs' method。确定答案技巧：先按机构名扫读，再用 already uses 与题干的 has already put the technique to use 做同义比对。G 段说 NASA 已经用 Stubbs 的方法检查航天飞机着陆后用于减速的机身襟翼，属于「已投入实际使用」的典型例证，故答案为 G。注意 H 段的 Quatro Corporation 是出售商业系统（now available … for about $100,000），与「已使用该技术」的落点不同，是本题最常见的干扰项。",
          "analysis": "G 段由 Stubbs 本人解释其算法原理：「When any structure vibrates, the energy is distributed throughout with some points not moving, while others vibrate strongly at various frequencies … My algorithms use pattern recognition to detect changes in the distribution of this energy.」（任何结构振动时，能量会分布到各处，有些点不动，另一些点以各种频率强烈振动……我的算法用模式识别来检测这种能量分布的变化）。随后 G 段末句给出应用实例：「NASA already uses Stubbs' method to check the behaviour of the body flap that slows space shuttles down after they land.」（NASA 已经在使用 Stubbs 的方法检查航天飞机着陆后用于减速的机身襟翼的状态）。题干 an organisation（机构）对应 NASA，has already put the technique to use（已把该技术投入使用）对应 already uses（已经使用），the technique 对应 Stubbs' method（该算法技术），三处一一对应，故答案是 G。做题时若先被 H 段的 Quatro Corporation 吸引，要注意该句说的是系统可以买到（now available），强调商业可得性而非使用机构本身，而题干的时间副词 already 与 G 段的 already uses 才是精准对应。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "explanation of the mechanism for the new microwave monitoring to work",
          "translation": "对新型微波监测工作原理的说明。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "\"The device uses microwaves to measure the distance between the sensor and the bridge, much like radar does,\" says Albert Migliori, a Los Alamos physicist."
          },
          "synonyms": [
            "「explanation of the mechanism」对应原文的技术原理描述「The device uses microwaves to measure the distance between the sensor and the bridge, much like radar does」",
            "「the new microwave monitoring」同义替换为原文的「The device uses microwaves」",
            "「to work」对应原文的「uses … to measure」，即装置如何运作"
          ],
          "locatingTip": "定位：题干的 mechanism（原理、机制）提示要找解释「如何工作」的文字，而全文只有 B 段集中讲装置的工作方式；B 段首句同时含 microwaves 与 measure the distance，与题干的 microwave monitoring 形成同义对应。确定答案技巧：区分「原理段」与「试验或结果段」是关键——B 段用科学家的引语解释设备怎样用微波测距、荷载如何造成位移、如何通过共振变化预警损坏，属于原理说明；C 段讲试验机会，D、E 段讲仪器安装与人为损伤，F 段讲数据分析算法的对比，因此只有 B 段承担「说明机制」的功能，判定为 B。",
          "analysis": "B 段开篇即以引语形式给出装置的工作原理：「\"The device uses microwaves to measure the distance between the sensor and the bridge, much like radar does,\" says Albert Migliori, a Los Alamos physicist.」（Los Alamos 物理学家 Albert Migliori 说，该装置用微波测量传感器与桥梁之间的距离，方式很像雷达）。紧接着说桥上任何荷载（如交通）会引起位移从而改变这一距离，再说明研究人员通过若干分钟内的运动监测来判断桥梁如何共振，其行为变化可提供损坏的早期预警。这一整段都在回答「新微波监测如何工作」，也就是题干所说的 explanation of the mechanism for the new microwave monitoring to work，因此答案是 B。注意与 C 段分工：C 段说的是研究人员获得了测试机会（对应第 9 题），属于应用背景而非原理；F 段虽然也涉及监测方法，但讲的是数据处理算法的改进与对比，不涉及微波装置本身的运作机制。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "how is the damage deliberately created by the researchers",
          "translation": "研究人员如何人为制造损伤。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "\"We then created damage that we hoped would simulate fatigue cracks that can occur in steel girders,\" says Farrar. They first cut a slot about 60 centimetres long in the middle of one girder."
          },
          "synonyms": [
            "「deliberately created」同义替换为原文的「created damage that we hoped would simulate」（为模拟而刻意造成），并对应随后一系列主动切割动作",
            "「the researchers」对应原文的「Farrar」（Los Alamos 的工程师，代表研究团队）以及「They」",
            "「how … the damage … created」对应原文的「They first cut a slot … They then extended the cut … and finally they cut across the flange」，即制造损伤的步骤"
          ],
          "locatingTip": "定位：题干问「损伤是如何被制造出来的」，属于过程类信息，回原文找表示先后动作的标记词。E 段连续出现 first、then、finally 三个步骤标志词，是全文唯一详细描述「如何造成损伤」的段落。确定答案技巧：注意与 D 段的区别——D 段讲的是安装仪器并施加交通荷载与振动机冲击（施加荷载），E 段讲的才是人为切割制造损伤（created damage、cut a slot、extended the cut、cut across the flange）。抓住 created damage 这一动宾搭配并核对三个步骤词，即可锁定 E 段。",
          "analysis": "E 段开始处引述 Farrar 的话：「\"We then created damage that we hoped would simulate fatigue cracks that can occur in steel girders,\" says Farrar.」（Farrar 说，随后我们制造了损伤，希望模拟钢梁中可能出现的疲劳裂纹）。紧接着用三个动作词交代具体做法：「They first cut a slot about 60 centimetres long in the middle of one girder. They then extended the cut until it reached the bottom of the girder and finally they cut across the flange …」（他们先在一根梁中部切出约 60 厘米长的槽，再把切口延长到梁的底部，最后横切翼缘）。题干 how is the damage deliberately created by the researchers 问的正是这套人为制造损伤的流程：created damage 对应原文 created damage，deliberately（刻意）体现在他们为模拟疲劳裂纹而主动切割，how 则由 first、then、finally 三步回答，因此答案是 E。本题最需要提防的是 D 段：D 段虽也出现 pounding、punches 等带破坏意味的词，但那是用振动机向路面施加冲击以加载测试，并非制造结构损伤本身，二者切不可混为一谈。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
