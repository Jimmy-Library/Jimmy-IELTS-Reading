(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-91", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-91",
  "meta": {
    "examId": "p2-high-91",
    "title": "Australia’s camouflaged creatures 澳洲伪装生物",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–18 段落信息匹配（Which section contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 18
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "a species that indicates to its young to move to a place where they are less visible",
          "translation": "有一种物种会示意自己的幼崽转移到它们不太显眼的地方。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "When the chicks land, they are usually highly conspicuous, and their parents try to signal to them to move to a safe location."
          },
          "synonyms": [
            "“a species that indicates to its young” 同义替换为原文的 “their parents try to signal to them”，indicates 对应 signal，to its young 对应 to them（them 指同一句前半出现的 the chicks）",
            "“its young” 同义替换为原文的 “the chicks”（雏鸟）与 “a hatchling”（雏鸟），均指幼鸟",
            "“to move to a place where they are less visible” 同义替换为原文的 “to move to a safe location”；同一句前半已说明雏鸟落地时 “they are usually highly conspicuous”（非常显眼），故“安全的地点”正是“不那么显眼的地方”"
          ],
          "locatingTip": "定位：题干是概括性描述，没有专有名词，需要先扫读 A–G 各段的主题句。A 段讲自然选择与伪装原理，B 段讲昆虫像植物，D 段讲墨鱼与仿雀鲷变色，E、F、G 段讲防御性拟态与分心术；“幼崽、雏鸟”这一组概念只在 C 段（tawny frogmouth 蛙嘴夜鹰）出现，因此锁定 C。确定答案技巧：抓住题干的两个信息点——成年个体向幼体发出信号、把幼体引到不显眼处。C 段末句 “their parents try to signal to them to move to a safe location” 与之一一对应，而同一句前半交代雏鸟落地时 “highly conspicuous”，正好解释为什么需要转移到 less visible 的地方。",
          "analysis": "C 段（第 4 段）讲的是蛙嘴夜鹰（tawny frogmouth）一动不动地停在树桩上，借以说明“有说服力的外表必须配以相应的行为”。该段末句写道：“When the chicks land, they are usually highly conspicuous, and their parents try to signal to them to move to a safe location.”（雏鸟落地时通常非常显眼，父母会示意它们转移到安全地点）。题干 “a species that indicates to its young to move to a place where they are less visible” 与该句完全对应：a species 即蛙嘴夜鹰，indicates to its young 对应 signal to them，a place where they are less visible 对应 a safe location（同一句前半的 highly conspicuous 是其反面，构成同义改写）。全篇只有这一段出现亲代向幼体示意的内容，因此答案是 C。",
          "traps": [
            "为什么不选 B：B 段讲竹节虫、叶䗛把外形做成树枝与枯叶来躲避天敌，通篇没有亲代与幼体互动的内容。",
            "为什么不选 G：G 段写变色壁虎断尾自救，虽然也出现 “the gecko can sneak away”，但那是成体自己脱身，与“示意幼崽”无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "an instance where sound is used to help an animal escape",
          "translation": "有一个实例：声音被用来帮助动物逃脱。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Many lizards do this, but in the case of the chameleon gecko the tail bones actually rub against one another, so it squeaks."
          },
          "synonyms": [
            "“sound” 同义替换为原文的 “it squeaks”（发出吱吱声），是原文唯一明确的声音描写",
            "“is used to help an animal escape” 同义替换为原文的 “so it squeaks” 之后的 “the gecko can sneak away”，即声音起到掩护逃脱的作用",
            "“an instance” 对应原文给出的具体个案 “the chameleon gecko”（变色壁虎）"
          ],
          "locatingTip": "定位：题干关键词是 sound 与 escape。全文提到声音的地方只有 G 段（第 8 段）的 squeaks 一词，看到 squeak 即可判定答案在这一段；同时注意该段说明声音的目的是让壁虎溜走。确定答案技巧：题干说“声音被用来帮助动物逃脱”，原文先说变色壁虎断尾、尾巴在地上扭动，接着说 “the tail bones actually rub against one another, so it squeaks”，随后引 Robinson 的话说天敌被地上这个又扭又叫的东西牢牢吸引，因此 “the gecko can sneak away”。squeaks 对应 sound，sneak away 对应 escape，链条完整，故选 G。",
          "analysis": "G 段（第 8 段）讲昆士兰台地（Queensland's tablelands）的变色壁虎（chameleon gecko）如何让天敌迟疑：它的身体是褐色的，尾巴却有黑白环纹；一旦被攻击，它会把尾巴断掉，断尾留在地上扭动。许多蜥蜴都会断尾，但变色壁虎的尾骨会互相摩擦，因此发出吱吱声。“Many lizards do this, but in the case of the chameleon gecko the tail bones actually rub against one another, so it squeaks.”（许多蜥蜴都这么做，但变色壁虎的尾骨会互相摩擦，所以会发出吱吱声）。接着 Robinson 说，天敌完全被地上这个黑白条纹、扭动、吱吱作响的东西吸引住，壁虎便能趁机溜走。题干 sound 对应 squeaks，escape 对应 sneak away，an instance 对应变色壁虎这一具体例子，因此答案是 G。",
          "traps": [
            "为什么不选 C：C 段确实出现了 signal 一词，但那是父母示意雏鸟转移，与声音无关，而且主体是幼鸟被引导而不是成体逃脱。",
            "为什么不选 F：F 段写鹰蛾毛虫腹部的“蛇眼”花纹闪开，属于视觉拟态，原文还说天敌是以为看到蛇还是单纯被吓到 “is unclear”，全段没有声音，也没有 squeak。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "a creature that can use camouflage to match a range of different backgrounds",
          "translation": "有一种生物能利用伪装来匹配各种不同的背景。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The cuttlefish can almost instantly change its colour, pattern and texture to match its surroundings, using specialised cells and muscles."
          },
          "synonyms": [
            "“a creature” 对应原文的 “the cuttlefish”（墨鱼）",
            "“can use camouflage to match” 同义替换为原文的 “can almost instantly change its colour, pattern and texture to match”，即通过变色、变花纹、变质感来匹配",
            "“a range of different backgrounds” 同义替换为原文的 “its surroundings”（周围环境）；同段前句的 “an adaptable disguise”（可调节的伪装）进一步说明其能适应多种背景"
          ],
          "locatingTip": "定位：题干关键词 creature 与 match a range of different backgrounds。墨鱼（cuttlefish）是 D 段（第 5 段）首句给出的例子，扫读到 cuttlefish 即可锁定该段。确定答案技巧：题干强调“能匹配多种不同背景”，原文的落点是 “can almost instantly change its colour, pattern and texture to match its surroundings”，能随时改变颜色花纹，就意味着能应付不同的背景；前一句还称这类伪装为 “adaptable disguise”（可调节的伪装）。两个要点合起来与题干一致，故选 D。",
          "analysis": "D 段（第 5 段）开头指出：固定不变的伪装只对相对不变的环境有效，因此一些动物（例如墨鱼）进化出了可调节的伪装。“The cuttlefish can almost instantly change its colour, pattern and texture to match its surroundings, using specialised cells and muscles.”（墨鱼借助特化的细胞和肌肉，几乎能瞬间改变自身的颜色、花纹和质感以匹配周围环境）。题干 “a creature that can use camouflage to match a range of different backgrounds” 与该句对应：a creature 即墨鱼，a range of different backgrounds 是 surroundings 的概括改写，almost instantly change（随时改变）正是“能匹配多种背景”的能力来源；上一句的 adaptable disguise 也是同一意思的呼应。故选 D。",
          "traps": [
            "为什么不选 B：B 段的昆虫把外形做得像树枝、枯叶，属固定形态的拟态，只能对应特定的某类背景，原文并没有“能匹配多种背景”的表述。",
            "为什么不选 E：E 段的 Batesian mimicry 模仿的对象是危险的动物（如剧毒海蛇），而不是背景，模仿方向不同。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "a claim that the majority of animals disguise themselves in some way",
          "translation": "有一个论断：大多数动物都以某种方式伪装自己。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Most species use camouflage to some extent. If they are convincing, they survive to pass their genes on to future generations."
          },
          "synonyms": [
            "“the majority of animals” 同义替换为原文的 “Most species”（大多数物种）",
            "“disguise themselves in some way” 同义替换为原文的 “use camouflage to some extent”（在某种程度上使用伪装）",
            "“a claim” 对应原文以陈述句形式直接给出的论断 “Most species use camouflage to some extent.”"
          ],
          "locatingTip": "定位：题干是纯概括性论断，没有具体动物名，只能靠“多数、大多数”这一量化表达定位。全文只有 A 段（第 2 段）首句以 “Most species use camouflage to some extent” 给出整体性论断，一眼可锁定 A。确定答案技巧：题干 majority of animals 对应 Most species，disguise themselves 对应 use camouflage，in some way 对应 to some extent，三处同义，故选 A；随后原文用自然选择解释为什么大多数物种都能进化出复杂伪装，也说明这一论断属于该段的主题句。",
          "analysis": "A 段（第 2 段）首句是 “Most species use camouflage to some extent. If they are convincing, they survive to pass their genes on to future generations.”（大多数物种都会在某种程度上使用伪装。如果伪装足够逼真，它们就能存活下来，把基因传给后代）。这正是题干 “a claim that the majority of animals disguise themselves in some way” 的原文出处：Most species 对应 the majority of animals，use camouflage 对应 disguise themselves，to some extent 对应 in some way。该段随后解释，经过世代自然选择，动物能发展出极其复杂的伪装技巧（调整形状、颜色与动作），并引 Elgar 教授的话说明伪装让捕食者觉得追捕不划算。整段是从“多数物种都伪装”这一论断展开的，因此答案是 A。",
          "traps": [
            "为什么不选 C：C 段只讨论蛙嘴夜鹰一种鸟的伪装能力如何后天习得，没有对“大多数动物”作任何整体性论断。",
            "为什么不选 F：F 段只讲鹰蛾毛虫一个例子，同样没有“多数物种都会伪装”这样的概括陈述。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "examples of animals that use camouflage to look like plants",
          "translation": "有一些动物的例子：它们用伪装使自己看起来像植物。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "To that end, stick and leaf insects have evolved complex camouflage to hide themselves from predators. Many have the texture of sticks or dry leaves, while others imitate living foliage, even the veins in a leaf."
          },
          "synonyms": [
            "“look like plants” 同义替换为原文的 “have the texture of sticks or dry leaves” 与 “imitate living foliage, even the veins in a leaf”（树枝、枯叶、活叶片、叶片上的叶脉都属于植物）",
            "“animals” 对应原文的 “stick and leaf insects”（竹节虫与叶䗛，即枝条虫和叶子虫）",
            "“examples” 对应原文用复数举证的结构 “Many have …, while others imitate …”（许多……而另一些……）"
          ],
          "locatingTip": "定位：题干关键词 animals 与 look like plants。B 段（第 3 段）集中讲昆虫把自己变成植物：sticks（树枝）、dry leaves（枯叶）、living foliage（活叶片）、the veins in a leaf（叶脉），是全文唯一一处“动物像植物”的例子集。确定答案技巧：题干要求的是“例子（复数）”，原文用 “Many have …, while others imitate …” 的并列结构给出多个例子，逐一对应 plant 这一上位概念即可确定 B。",
          "analysis": "B 段（第 3 段）讲动物最省力的伪装方式是让自己在环境中隐形，并举例说明：“To that end, stick and leaf insects have evolved complex camouflage to hide themselves from predators. Many have the texture of sticks or dry leaves, while others imitate living foliage, even the veins in a leaf.”（为此，竹节虫和叶䗛进化出复杂的伪装以躲避天敌。许多具有树枝或枯叶的质感，另一些则模仿活着的叶片，甚至连叶脉都模仿）。题干 “examples of animals that use camouflage to look like plants” 与该段对应：animals 即 stick and leaf insects，look like plants 概括了 sticks、dry leaves、living foliage、veins in a leaf 这些植物性特征，examples 对应 Many … while others … 的多例并列。故选 B。",
          "traps": [
            "为什么不选 F：F 段中鹰蛾毛虫模仿的是蛇的眼睛（动物特征），不是植物。",
            "为什么不选 G：G 段变色壁虎的身体与尾巴以褐色、黑白条纹为特征，与植物无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–23 人物观点匹配（Match each statement with the correct person）",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 23
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "one species has a camouflage tactic that is not present from birth.",
          "translation": "有一种物种的伪装策略并非与生俱来。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "While adopting a pose may be a reflex of the bird, and can be observed in a hatchling's first week, the ability to choose a backdrop which matches its colouration does not develop for 4–6 months."
          },
          "synonyms": [
            "“a camouflage tactic that is not present from birth” 同义替换为原文的 “the ability to choose a backdrop which matches its colouration does not develop for 4–6 months”（要到 4—6 个月才发育出来）",
            "“not present from birth” 与原文的对照关系：出生时就有的是摆姿势的反射（“can be observed in a hatchling's first week”），出生时没有的是挑选背景的能力",
            "“one species” 对应原文的 “the frogmouth”（蛙嘴夜鹰），陈述人是 “Professor Gisela Kaplan”，即选项 C"
          ],
          "locatingTip": "定位：人物匹配题先圈出题干的关键特征词 not present from birth（后天才有），再回原文找相应的研究者。全文只有 C 段（第 4 段）同时出现 “learned behaviour”（习得行为）与 “does not develop for 4–6 months”，而该段的研究者是 Professor Gisela Kaplan，对应选项 C。确定答案技巧：题干说“并非出生就有”，原文先说蛙嘴夜鹰的伪装技能是后天学会的行为，再补充“挑选与自身体色相配的背景”这一能力要到 4—6 个月才形成，与“出生时没有、后天习得”完全一致，故选 C。",
          "analysis": "C 段（第 4 段）由新英格兰大学的 Gisela Kaplan 教授发言：蛙嘴夜鹰停在树桩上不动的样子说明“有说服力的外表要与行为配对”，而这种伪装本领是 learned behaviour（习得行为）。“While adopting a pose may be a reflex of the bird, and can be observed in a hatchling's first week, the ability to choose a backdrop which matches its colouration does not develop for 4–6 months.”（虽然摆出姿势可能只是这种鸟的反射动作，在雏鸟出生第一周就可见到，但挑选与自身体色相配的背景这项能力要到 4—6 个月才发育出来）。题干 “one species has a camouflage tactic that is not present from birth” 正对应这句：出生时没有（not present from birth）的是“选背景”的能力，它要到 4—6 个月才形成；该说法出自 Kaplan 教授，故答案为 C。",
          "traps": [
            "为什么不是 D（Dr Karen Cheney）：D 段讲墨鱼与蓝带仿雀鲷的即时变色，属生理性的可即时启动的能力，没有“出生时没有、后天学会”的表述。",
            "为什么不是 A（Professor Mark Elgar）：A 段是伪装原理的一般论述，只谈自然选择与捕食者的取舍，不涉及个体发育与后天学习。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "species that live in an ancient environment have become very effective at camouflaging themselves.",
          "translation": "生活在古老环境中的物种已经变得非常擅长伪装自己。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Entomologist Paul Zborowski, who has spent decades photographing inconspicuous creatures, rates the desert insects of Central Australia as the most convincingly disguised creatures he's seen. 'It's an incredibly old habitat, so the creatures have had a long time to adapt,' Zborowski explains."
          },
          "synonyms": [
            "“an ancient environment” 同义替换为原文的 “an incredibly old habitat”（极其古老的栖息地）",
            "“have become very effective at camouflaging themselves” 同义替换为原文的 “rates the desert insects of Central Australia as the most convincingly disguised creatures he's seen”（评为他所见过伪装最逼真的生物）",
            "“species that live in …” 对应原文的 “the desert insects of Central Australia”，说话人是昆虫学家 “Paul Zborowski”，即选项 B"
          ],
          "locatingTip": "定位：题干关键词 ancient environment 与 camouflaging。B 段（第 3 段）后半由昆虫学家 Paul Zborowski 说出 “an incredibly old habitat” 与 “a long time to adapt”，人名与“古老环境”两点同现，直接锁定该段与选项 B（Paul Zborowski）。确定答案技巧：old habitat 对应 ancient environment，the most convincingly disguised 对应 very effective at camouflaging，原文的因果链（栖息地古老，所以动物有很长时间去适应）与题干“因为生活在古老环境中，所以变得非常擅长伪装”一致，故选 B。",
          "analysis": "B 段（第 3 段）在讲完昆虫拟态后，引多年拍摄不起眼生物的昆虫学家 Paul Zborowski 的话：“Entomologist Paul Zborowski, who has spent decades photographing inconspicuous creatures, rates the desert insects of Central Australia as the most convincingly disguised creatures he's seen. ‘It's an incredibly old habitat, so the creatures have had a long time to adapt,’ Zborowski explains.”（昆虫学家 Paul Zborowski 数十年来拍摄那些不显眼的生物，他认为澳大利亚中部的沙漠昆虫是他见过伪装最逼真的生物。“那是一个极其古老的栖息地，所以这些生物有很长的时间去适应，”Zborowski 解释道）。题干 “species that live in an ancient environment have become very effective at camouflaging themselves” 对应这两句：ancient environment 对应 an incredibly old habitat，very effective at camouflaging 对应 the most convincingly disguised creatures，且原文用 so 明确给出“古老环境带来长期适应”的因果关系。该观点出自 Paul Zborowski，故答案为 B。",
          "traps": [
            "为什么不是 A（Professor Mark Elgar）：A 段谈的是一般原理，即自然选择让动物发展出复杂伪装、伪装延长捕食者搜索时间，没有提到“古老环境”或其物种。",
            "为什么不是 D（Dr Karen Cheney）：D 段的主角是墨鱼和蓝带仿雀鲷，讲即时变色与模仿其他鱼类，与古老栖息地无关。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "part of an animal is left behind to distract predators.",
          "translation": "动物身体的某一部分被留在原地以分散天敌的注意力。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Robinson explains that if attacked, the chameleon gecko will drop off its tail, which will wriggle around on the ground."
          },
          "synonyms": [
            "“part of an animal is left behind” 同义替换为原文的 “the chameleon gecko will drop off its tail”（断掉尾巴，尾巴留在原地）",
            "“to distract predators” 同义替换为原文的 “The predator is, of course, thoroughly absorbed by this black-and-white-striped, wriggling, squeaking thing on the ground”（天敌被地上那个东西牢牢吸引）",
            "陈述人是 “Robinson”，即名单中的 Martyn Robinson，对应选项 F"
          ],
          "locatingTip": "定位：题干关键词是“身体的一部分被留下”与“分散天敌注意力”，对应原文的断尾（drop off its tail）与天敌被吸引（thoroughly absorbed）。这段解释出自 G 段（第 8 段）中的 Martyn Robinson，对应选项 F。确定答案技巧：先确认说话人，再确认内容。A 段的 Elgar、B 段的 Zborowski、C 段的 Kaplan、D 段的 Cheney 都不讲断尾，只有 F（Martyn Robinson）解释变色壁虎断尾分心术，故填 F。",
          "analysis": "G 段（第 8 段）中，教育博物学家 Martyn Robinson 解释变色壁虎的自救方式：“Robinson explains that if attacked, the chameleon gecko will drop off its tail, which will wriggle around on the ground.”（Robinson 解释说，一旦受到攻击，变色壁虎会把尾巴断掉，断尾会在地上扭动）。随后他补充，天敌完全被地上这个黑白条纹、扭动、吱吱作响的东西吸引住，“and the gecko can sneak away”。题干 “part of an animal is left behind to distract predators” 与该内容对应：part of an animal 即断落的尾巴（被留下），to distract predators 即天敌被断尾吸引从而壁虎得以脱身。该说法出自 Martyn Robinson，故答案为 F。",
          "traps": [
            "为什么不是 E（Henry Bates）：E 段的 Bates 讲的是 Batesian mimicry 的提出与命名，即模仿危险生物以自保，与“留下身体的一部分”无关。",
            "为什么不是 C（Professor Gisela Kaplan）：C 段讲雏鸟学习伪装，没有断尾或身体部件分离的内容。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "if it takes too long to find one kind of prey, animals will look for an alternative source of food.",
          "translation": "如果花太长时间才能找到某种猎物，动物就会转而寻找别的食物来源。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "'Camouflage increases the search time and, as a consequence, the predator will simply target another species, either because it doesn't see the camouflaged individual or it just finds something more obvious to do.'"
          },
          "synonyms": [
            "“if it takes too long to find one kind of prey” 同义替换为原文的 “Camouflage increases the search time”",
            "“animals will look for an alternative source of food” 同义替换为原文的 “the predator will simply target another species”（捕食者干脆转而攻击另一个物种）",
            "陈述人是 “Professor Mark Elgar of the University of Melbourne”，对应选项 A"
          ],
          "locatingTip": "定位：题干关键词是搜索时间与更换食物来源。A 段（第 2 段）中 Elgar 教授的话里出现 “search time” 与 “target another species”，两个概念同句出现，直接锁定该段与选项 A（Professor Mark Elgar）。确定答案技巧：原文的逻辑是“伪装延长搜索时间，因此捕食者会干脆改攻另一个物种”，这与题干 “if it takes too long to find one kind of prey, animals will look for an alternative source of food” 的条件状语结构严丝合缝，而该观点出自 Elgar 教授，故选 A。",
          "analysis": "A 段（第 2 段）中，墨尔本大学的 Mark Elgar 教授解释伪装的原理：“‘Camouflage increases the search time and, as a consequence, the predator will simply target another species, either because it doesn't see the camouflaged individual or it just finds something more obvious to do.’”（“伪装会延长搜索时间，结果捕食者会干脆改攻另一个物种，要么因为它看不见这只有伪装的个体，要么只是因为它找到了更值得做的事。”）。他还说伪装的原则就是让捕食者觉得继续追捕某个物种在经济上不划算。题干 “if it takes too long to find one kind of prey, animals will look for an alternative source of food” 与 “increases the search time … will simply target another species” 一一对应：takes too long 对应 increases the search time，an alternative source of food 对应 another species。该说法出自 Elgar 教授，故答案为 A。",
          "traps": [
            "为什么不是 B（Paul Zborowski）：Zborowski 讲的是澳大利亚中部沙漠昆虫的伪装效果与古老栖息地，没有提到捕食者的搜索时间或更换猎物。",
            "为什么不是 F（Martyn Robinson）：Robinson 谈的是断尾分心术以及 Batesian mimicry 依赖模仿者与原型的比例，都不涉及“找猎物太费时间就换目标”。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "camouflage can involve copying a threatening type of animal.",
          "translation": "伪装可以包括模仿某种具有威胁性的动物。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Batesian mimicry refers to animals that gain protection from predators by imitating a dangerous organism, often using conspicuous colours. The nineteenth-century naturalist Henry Bates first suggested this camouflage technique after noticing that several Amazonian butterfly species looked the same."
          },
          "synonyms": [
            "“copying a threatening type of animal” 同义替换为原文的 “imitating a dangerous organism”（模仿一种危险的生物）",
            "“camouflage can involve …” 对应原文的 “Batesian mimicry refers to animals that gain protection from predators by …”（拟态是伪装的一种形式，可用于防御）",
            "“a threatening type of animal” 的实例是原文的 “the highly toxic yellow-lipped sea krait”（剧毒的金唇海蛇），模仿它的则是无害的 “harlequin snake eel”；该技术的提出者与命名者 “Henry Bates” 对应选项 E"
          ],
          "locatingTip": "定位：题干关键词 threatening animal 与 copying，对应原文的 “imitating a dangerous organism”，该表述出现在 E 段（第 6 段）关于 Batesian mimicry 的首句；而这一技术由 “the nineteenth-century naturalist Henry Bates” 提出并以他命名，对应选项 E。确定答案技巧：注意区分“谁提出并命名了这一模仿危险生物的技术”与“谁只是评论它”，题干讲的是命题本身，提出者是 Henry Bates，故选 E。",
          "analysis": "E 段（第 6 段）首句指出，最著名的一种拟态形式是为了防御，而非攻击：“Batesian mimicry refers to animals that gain protection from predators by imitating a dangerous organism, often using conspicuous colours.”（Bates 拟态指动物通过模仿危险的生物来获得保护，常常使用醒目的颜色）。随后说明 19 世纪博物学家 Henry Bates 因注意到亚马逊多种蝴蝶长相相同而最先提出这一伪装技术，该技术后来以他命名；并举澳大利亚海域无害的 harlequin snake eel 与剧毒的 yellow-lipped sea krait 拥有相同黑白斑纹为例。题干 “camouflage can involve copying a threatening type of animal” 与该段首句对应：copying 对应 imitating，a threatening type of animal 对应 a dangerous organism（其具体化就是剧毒海蛇）。该技术的名称与提出者都是 Henry Bates，故答案为 E。",
          "traps": [
            "为什么不是 F（Martyn Robinson）：Robinson 在 E 段末尾只是评论“模仿者与原型比例失衡会让整群伪装失效”，并非该命题的提出者，题干对应的却是 Batesian mimicry 本身。",
            "为什么不是 A（Professor Mark Elgar）：A 段讲的是伪装延长搜索时间、让捕食者改攻其他物种，没有提到模仿危险动物。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 摘要填空（Complete the summary，ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "Dr Karen Cheney studies the bluestriped fangblenny on 24 ________ off Queensland's coast.",
          "translation": "Karen Cheney 博士在昆士兰海岸外的 ________ 研究蓝带仿雀鲷。",
          "answer": "reefs",
          "wordClass": "名词（复数，指珊瑚礁；位于介词 on 之后作 on 的宾语，on reefs 整体在句中作地点状语，原文即为复数形式 reefs）",
          "locating": {
            "paragraph": "5",
            "quote": "On Queensland's reefs, scientists have been studying another ocean dweller that uses colour change, although not to blend into the surroundings."
          },
          "synonyms": [
            "“on 24 ________ off Queensland's coast” 同义替换为原文的 “On Queensland's reefs”，on 与 off … coast 同指昆士兰近海的位置",
            "“studies” 同义替换为原文的 “have been studying”（现在完成进行时，表示持续研究）",
            "“the bluestriped fangblenny” 在原文原词复现：“the bluestriped fangblenny alters its colouration to mimic other species of fish”"
          ],
          "locatingTip": "定位：人名 Dr Karen Cheney 与动物名 bluestriped fangblenny 都出现在 D 段（第 5 段）后半部分，一步即可锁定该段。确定答案技巧：题干说“在昆士兰海岸外的某处研究”，回原文找地点状语 “On Queensland's reefs, scientists have been studying another ocean dweller”，地点就是 reefs；空格前是介词 on，填 reefs 后读作 “on reefs off Queensland's coast”，语法通顺。注意 ONE WORD ONLY，只写 reefs 一词，不写 coral reefs，也不改写为单数 reef。",
          "analysis": "第 5 段（D）先讲固定伪装只对不变的环境有效，墨鱼因此进化出可调节的伪装；接着把话题转到海边：“On Queensland's reefs, scientists have been studying another ocean dweller that uses colour change, although not to blend into the surroundings.”（在昆士兰的珊瑚礁，科学家们一直在研究另一种会变色的海洋生物，只不过不是为了融入环境）。随后 Cheney 博士说明蓝带仿雀鲷通过改变体色模仿其他鱼类，从而与它们同行、获得群体的安全。摘要把原文的 “scientists have been studying another ocean dweller” 改写为 “Dr Karen Cheney studies the bluestriped fangblenny”，把地点状语 “On Queensland's reefs” 改写成 “on 24 ________ off Queensland's coast”，因此空格填 reefs。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "The fangblenny impersonates the striped cleaner wrasse, a fish that is welcomed by other species as it gets rid of their 25 ________.",
          "translation": "蓝带仿雀鲷模仿条纹清洁鱼（裂唇鱼），这种鱼因替其他物种清除它们的 ________ 而受到欢迎。",
          "answer": "parasites",
          "wordClass": "名词（复数，指寄生虫；作 gets rid of 的宾语，原文即为复数形式 parasites，指大鱼身上的寄生虫）",
          "locating": {
            "paragraph": "5",
            "quote": "Its most impressive impersonation is of the black-with-neon-blue-striped cleaner wrasse, which eats the parasites on larger fish."
          },
          "synonyms": [
            "“impersonates” 同义替换为原文的 “impersonation”（原文 “Its most impressive impersonation is of …”）",
            "“the striped cleaner wrasse” 同义替换为原文的 “the black-with-neon-blue-striped cleaner wrasse”（黑色带霓虹蓝条纹的清洁鱼）",
            "“gets rid of” 同义替换为原文的 “eats”（吃掉寄生虫即清除寄生虫），被清除的对象对应原文的 “the parasites on larger fish”",
            "“is welcomed by other species” 对应原文的 “on larger fish”，即为大鱼清除寄生虫，因而受大鱼欢迎"
          ],
          "locatingTip": "定位：关键词 cleaner wrasse 在全篇只出现于 D 段（第 5 段），且紧接在蓝带仿雀鲷的 “most impressive impersonation” 之后，扫到 cleaner wrasse 即可停在该句。确定答案技巧：题干说清洁鱼“受到其他物种欢迎”，原因就在原文的定语从句 “which eats the parasites on larger fish”——它吃掉大鱼身上的寄生虫，被吃掉的 parasites 就是答案。注意 ONE WORD ONLY，填复数形式 parasites。",
          "analysis": "第 5 段（D）继续说明蓝带仿雀鲷的模仿对象：“Its most impressive impersonation is of the black-with-neon-blue-striped cleaner wrasse, which eats the parasites on larger fish.”（它最令人惊叹的模仿对象是黑色带霓虹蓝条纹的清洁鱼，这种鱼会吃掉大鱼身上的寄生虫）。正因为清洁鱼能为大鱼除去寄生虫，它才受到大鱼的欢迎，也因此能自由出入其他鱼类身边。摘要把这一因果关系写成 “a fish that is welcomed by other species as it gets rid of their 25 ________”，gets rid of 对应 eats（清除即吃掉），被清除的东西对应 the parasites，故填 parasites。词性上空格作 gets rid of 的宾语，且原文为复数，故写复数形式。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "The fangblenny can approach its 26 ________ without drawing the attention of predators or disturbing the work of the striped cleaner wrasse.",
          "translation": "蓝带仿雀鲷能接近它的 ________，既不引起天敌注意，也不打扰条纹清洁鱼的工作。",
          "answer": "prey",
          "wordClass": "名词（不可数，意为“猎物”；位于物主代词 its 之后作宾语，原文为不可数形式 prey，不加复数）",
          "locating": {
            "paragraph": "5",
            "quote": "Not only does the fangblenny benefit from the reduced predation that comes with the wrasse's beneficial relationships with other fish, but the disguise also lets it get closer to prey."
          },
          "synonyms": [
            "“can approach its 26 ________” 同义替换为原文的 “lets it get closer to prey”（让它更接近猎物）",
            "“without drawing the attention of predators” 同义替换为原文的 “benefit from the reduced predation”（因为伪装而少被捕食者盯上）",
            "“without disturbing the work of the striped cleaner wrasse” 同义替换为原文的 “it doesn't attack those coming to be cleaned”（不攻击前来接受清洁服务的鱼，即不干扰清洁鱼的工作）"
          ],
          "locatingTip": "定位：本题顺承第 25 题，仍在 D 段（第 5 段），关键词是 fangblenny 与“接近某物”，对应 “the disguise also lets it get closer to prey”。确定答案技巧：题干说它“接近某物”，原文的介词 to 之后就是答案 prey；再由下一句 “It darts out from the safety of the wrasse's cleaning station to nip at unsuspecting fish passing by, but it doesn't attack those coming to be cleaned” 可知它咬的是毫无防备的过路鱼，同时不惊动前来接受清洁的鱼，与题干“不引起天敌注意、不打扰清洁鱼工作”一致，进一步确认答案为 prey。填写时保持不可数形式 prey，不要写 preys。",
          "analysis": "第 5 段（D）说明蓝带仿雀鲷模仿清洁鱼的两重好处：“Not only does the fangblenny benefit from the reduced predation that comes with the wrasse's beneficial relationships with other fish, but the disguise also lets it get closer to prey.”（蓝带仿雀鲷不仅因裂唇鱼与其他鱼之间的互利关系而少被捕食，这一伪装还让它能更接近猎物）。紧接着说它从清洁站的安全地带窜出来，去咬毫无防备的过路鱼，但不攻击前来接受清洁的鱼。摘要把两重好处改写为“能接近某物（不引起天敌注意、不打扰清洁鱼工作）”，“can approach its 26 ________” 对应原文的 “lets it get closer to prey”，故空格填 prey。词性上，its 之后需要名词，prey 在此为不可数名词，保持原形即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
