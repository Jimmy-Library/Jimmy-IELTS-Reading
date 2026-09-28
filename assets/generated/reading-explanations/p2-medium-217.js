(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-medium-217", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-medium-217",
  "meta": {
    "examId": "p2-medium-217",
    "title": "A mechanical friend for children 孩子的机器人朋友【次】",
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
          "stem": "a comparison of children's reactions towards different robots",
          "translation": "对不同的机器人，孩子们反应的比较",
          "answer": "d",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Another robot-like toy named Robby, which resembled QRIO but did not move, was used as a control in the study. While hugging of QRIO increased, hugging of Robby decreased throughout the study."
          },
          "synonyms": [
            "“different robots” 对应原文并列出现的两个对象 “QRIO” 与 “another robot-like toy named Robby”",
            "“a comparison of children's reactions” 同义替换为原文的 “While hugging of QRIO increased, hugging of Robby decreased throughout the study”，用一增一减的对照写出比较关系",
            "“reactions” 具体化为原文的 “hugging”（拥抱）这一可观察行为，后文还补充了 “caretaking behaviors”（照料行为）"
          ],
          "locatingTip": "定位：段落信息匹配题先把题干拆成核心概念——“两个不同机器人”加“孩子行为的对比”。全文中同时出现两种机器人对照描写的只有一段：QRIO 与另一个玩具机器人 Robby（Robby 只出现在第 4 段、在该段内共出现三次，本身也是极佳的定位词）。回到原文第 4 段，看到 control（对照组）这个词就该警觉，凡是有“实验组／对照组”的地方必然包含比较。确定答案技巧：判断依据不在“有机器人”而在“有对比”。第 4 段用 While 引导两个并列分句，把 QRIO 的拥抱量上升与 Robby 的拥抱量下降放在一起，构成典型的 comparison；题干中的 children's reactions 就落在 hugging 这种可观察反应上。因此答案是 D。",
          "analysis": "本题对应第 4 段（题干答段落 D）。该段先引 Tanaka 的话描述孩子对机器人的态度变化，随后引入对照物：“Another robot-like toy named Robby, which resembled QRIO but did not move, was used as a control in the study. While hugging of QRIO increased, hugging of Robby decreased throughout the study. Furthermore, when QRIO laid down on the floor, caretaking behaviors were frequently observed toward QRIO but seldom toward Robby.”（研究中使用了一个名叫 Robby 的类机器人玩具作对照，它外形像 QRIO 但不会动。整个研究期间，对 QRIO 的拥抱增加了，而对 Robby 的拥抱减少了。此外，当 QRIO 躺在地上时，孩子对 QRIO 经常表现出照料行为，对 Robby 则很少。）这段文字把两个外形相似、但一个会动一个不会动的“different robots”放在同一句话里做对照，还给出两项具体指标（hugging 与 caretaking behaviors）的一增一减、一多一少，正是题干所说的“对不同机器人反应的比较”。注意本段前半部分讲的是孩子如何在同一个机器人身上改变接触方式（touch 的部位从脸变为手和手臂），那是第 16 题的内容，第 14 题必须落到 Robby 与 QRIO 的对照句上，否则会把同段的两题混淆。",
          "traps": [
            "为什么不选 B：第 2 段只介绍研究背景与 QRIO 机器人本体（Sony 制造、58 cm、18–24 个月大的孩子），通篇只有一个机器人，没有任何对照对象，做不了“不同机器人的比较”。",
            "为什么不选 E：第 5 段是研究结论段，说孩子逐渐把机器人当作同伴（more as a peer than a plaything），只谈孩子对这一个机器人的总体态度变化，没有出现第二个机器人，也没有横向比较。",
            "为什么不选 F／G：第 6 段展望未来教学用途，第 7 段是 Powers 与 Arkin 的评论与担忧，都与“孩子对不同机器人的反应比较”无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a speculation about ways robots may be able to communicate",
          "translation": "对机器人可能可以怎样交流（沟通）的一种推测",
          "answer": "f",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "A robotic tutor could react on the spot to social cues and approximate social skills like facial expression and eye gaze, they said."
          },
          "synonyms": [
            "“a speculation” 同义替换为原文的情态动词 “could”（可能、能够）以及句末的 “they said”，表示研究者对未来能力的设想而非已实现的事实",
            "“ways robots may be able to communicate” 同义替换为原文的 “react on the spot to social cues and approximate social skills like facial expression and eye gaze”，即通过面部表情与眼神等社交信号进行交流",
            "“communicate” 与原文的 “social skills like facial expression and eye gaze” 形成上下义对应：面部表情和眼神属于非语言的交流方式"
          ],
          "locatingTip": "定位：题干的关键词是 speculation（推测）与 communicate（交流）。全文的推测性、展望性内容集中在第 6 段——该段开头说 Tanaka 和 Movellan “are now developing”（正在开发）未来的机器人，随后用 “could have great potential”“could become personalized tutors” 等一连串 could 虚拟表达设想。确定答案技巧：speculation 对应的是情态动词 could，communicate 对应的是 social cues（社交信号）、facial expression（面部表情）、eye gaze（眼神）这类交流手段；原文说机器人导师可以当场对社交信号作出反应，并模仿面部表情、眼神等社交技能，这正是“机器人可能怎样交流”的推测。故答案为 F。",
          "analysis": "本题对应第 6 段（题干答段落 F）。该段是全文唯一的未来展望段：“Tanaka and Movellan are now developing autonomous robots for the toddler classroom. ‘It could have great potential in educational settings, assisting teachers and enriching the classroom environment,’ Tanaka said. The researchers hope that more advanced versions of robots like QRIO could become personalized tutors to assist teachers in classrooms. A robotic tutor could react on the spot to social cues and approximate social skills like facial expression and eye gaze, they said.”（Tanaka 和 Movellan 正在为孩子课堂开发自主机器人。Tanaka 说：“它在教育环境中可能有巨大潜力，可以协助教师、丰富课堂环境。”研究者希望更高级版本的 QRIO 类机器人能成为个性化导师来辅助课堂上的教师。他们说，机器人导师可以当场对社交信号作出反应，并模仿面部表情和眼神这类社交技能。）句中三个 could／hope 标记出这是对未来的推测，而 “react on the spot to social cues”“approximate social skills like facial expression and eye gaze” 明确描述机器人以面部表情、眼神等非语言方式与人互动交流，与题干的 “ways robots may be able to communicate” 完全对应。注意该段同时是第 23 题（Tanaka 认为用于学校有很多好处）的定位段，两题共用一段但落点不同：第 15 题落在 could react … eye gaze 一句，第 23 题落在 educational settings / assisting teachers 一句。",
          "traps": [
            "为什么不选 C：第 3 段讲的是研究者如何给机器人下指令（每两分钟发送指令让它笑、跳舞、坐下、摔倒或朝某方向走），是实验过程中的实际操作，既不是推测，也与“交流”无关。",
            "为什么不选 E：第 5 段是已完成的结论（long-term bonding and socialization occurred），陈述的是已经发生的事实，没有推测语气。",
            "为什么不选 G：第 7 段虽有 Arkin 的担忧与疑问，但那是关于机器人进入儿童群体对社会影响的质疑（good thing or a bad thing），并非对机器人如何交流的设想。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "a description of changes in the way the children physically handled a robot",
          "translation": "对孩子身体上触碰（摆弄）机器人方式变化的描述",
          "answer": "d",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "At first, the toddlers would touch the robot on its face, but later on they would touch it only on its hands and arms, like they would with other humans."
          },
          "synonyms": [
            "“physically handled” 同义替换为原文的 “touch”（身体接触、触碰）",
            "“changes in the way” 同义替换为原文的 “At first … but later on …”，用时间对照表示方式发生了变化",
            "“the children” 在原文中具体化为 “the toddlers”，指同一批 18–24 个月大的幼儿"
          ],
          "locatingTip": "定位：题干的定位词是 physically handled（身体接触）与 changes（变化）。全文谈身体接触最多的是第 4 段，该段甚至有一句总结性的话 “The most important aspect of interaction was touch”。确定答案技巧：题目问的是“接触方式的变化”，因此必须找到带时间前后对照的句子。第 4 段中 “At first, the toddlers would touch the robot on its face, but later on they would touch it only on its hands and arms” 用 At first 与 later on 构成 Before／After 对照，接触部位从面部改为只碰手和手臂，正是题干所说的 change。答案是 D。注意同段还有 Robby 对照组（第 14 题）与孩子哭泣、扶机器人站立等内容，不要与第 16 题的接触方式变化混为一谈。",
          "analysis": "本题对应第 4 段（题干答段落 D）。Tanaka 在段中说：“‘The most important aspect of interaction was touch,’ Tanaka said. ‘At first, the toddlers would touch the robot on its face, but later on they would touch it only on its hands and arms, like they would with other humans.’”（Tanaka 说：“互动中最重要的方面是触碰。起初，幼儿会触碰机器人的脸，但后来他们只碰它的手和手臂，就像他们对待其他人那样。”）这里 “At first … but later on …” 清楚交代了接触方式的前后变化：从碰脸变成只碰手和手臂，并点明这种变化是向人类社交规范靠拢（like they would with other humans）。题干把这一变化概括为 “changes in the way the children physically handled a robot”，其中 physically handled 对应 touch，changes 对应 At first 与 later on 的对照，符合“某段落包含某信息”的要求，故填 D。本段开头 “Early in the study, some children cried when QRIO fell. But a month into the study, the toddlers helped QRIO stand up by pushing its back or pulling its hands.” 也涉及身体接触，但讲的是孩子从哭泣到主动帮忙的行为转变，与“接触部位的变化”相比，后者更精确地对应题干中的 the way … handled（方式），因此本文把定位句锁定在 touch its face 与 touch it only on its hands and arms 这一句上。",
          "traps": [
            "为什么不选 C：第 3 段确实有变化（interactions improved、deteriorated、improved again），但那是互动质量随机器人行为模式变化而起伏，与孩子“身体上如何摆弄机器人”无关。",
            "为什么不选 E：第 5 段给出的是总体结论（孩子逐渐把它当作同伴而不是玩具），属于态度层面的概括，没有描写具体接触方式的改变。",
            "为什么不选 B：第 2 段只交代研究设计与机器人来历，未涉及孩子的任何触碰行为。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "a comparison between people's connections with animals and their connections with robots",
          "translation": "人对动物的情感联系与对机器人的情感联系之间的比较",
          "answer": "a",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "This observation is in sharp contrast to the long-term interactions and bonding that commonly develop between humans and their pets."
          },
          "synonyms": [
            "“people's connections with animals” 同义替换为原文的 “the long-term interactions and bonding that commonly develop between humans and their pets”（人与宠物之间长期互动与依恋）",
            "“people's connections with robots” 对应原文上一句的 “commercially available robots seldom cross the 10-hour barrier”，即人最多只与机器人相处不到十小时",
            "“a comparison” 同义替换为原文的 “in sharp contrast to”（形成鲜明对照）"
          ],
          "locatingTip": "定位：题干有两个对比对象——animals 与 robots。全文提到动物的只有一处，即第 1 段末句的 pets（宠物），而该句同时又用 in sharp contrast to 与前文关于机器人（10-hour barrier）的论述构成对照，两个要素同句出现。确定答案技巧：段落信息匹配题中 comparison 的标志词是 contrast／unlike／whereas 等；此处的 in sharp contrast to 正是比较信号，比较的双方一方是人宠之间长期的情感依恋，另一方是人与机器人短到不足十小时的相处，因此答案是 A。",
          "analysis": "本题对应第 1 段（题干答段落 A）。第 1 段先描述社交机器人的困境：“In practice, commercially available robots seldom cross the 10-hour barrier (i.e., individual users tend to spend less than a combined total of 10 hours with the robots before losing interest).”（现实中，市面可买的机器人很少能跨过 10 小时这道坎，也就是说单个用户与机器人相处的累计时间通常不到 10 小时就会失去兴趣。）紧接着一句就是本题定位句：“This observation is in sharp contrast to the long-term interactions and bonding that commonly develop between humans and their pets.”（这一观察与人和宠物之间常见的长期互动和依恋形成鲜明对照。）句中 this observation 回指前述人与机器人的短暂相处，in sharp contrast to 引出对比的另一方 humans and their pets，形成“人与机器人”对“人与动物（宠物）”的横向比较，与题干 “people's connections with animals and their connections with robots” 逐项对应，故该信息在第 1 段，答案 A。注意 pets 属于 animals 的具体化表达，雅思常用上义词 animals 来指代原文下义词 pets，看到 pets 不要因为字面不同而不敢选。",
          "traps": [
            "为什么不选 D：第 4 段有对照组比较（QRIO 与 Robby），但那是两个机器人之间的比较，不涉及动物。",
            "为什么不选 G：第 7 段 Arkin 说 “Humans have a tremendous propensity to bond with artifacts, whether it be a car, a doll, or a robot.”，谈的是人对人造物（汽车、玩偶、机器人）的依恋倾向，句中并没有动物或宠物，无法构成题干要求的“与动物的联系”。",
            "为什么不选 E：第 5 段只讲孩子与机器人之间产生了长期依恋，缺少人与动物这一对比项。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "an account of the way one robot was programmed",
          "translation": "对某个机器人被设定（编程）方式的叙述",
          "answer": "c",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The researchers sent instructions to the robot about every two minutes to do things like giggle, dance, sit down, fall down, or walk in a certain direction."
          },
          "synonyms": [
            "“the way one robot was programmed” 同义替换为原文的 “the researchers sent instructions to the robot about every two minutes”，即研究者的指令设定方式",
            "“programmed” 对应原文列举的具体动作指令 “giggle, dance, sit down, fall down, or walk in a certain direction”",
            "“an account of” 对应原文的客观叙述句，第 3 段后半部分还进一步说明机器人被要求 “behave in a more limited, predictable manner” 以及被指令 “display its full range of behaviors”"
          ],
          "locatingTip": "定位：题干的关键词是 programmed（被设定、被编程），对应原文中与“下指令”相关的表达。扫读全文找 instructions、ordered、instructed 这类词，只在第 3 段密集出现（sent instructions、was ordered to behave、had been instructed to display）。确定答案技巧：确定答案时不要只看“有指令”，而要看是否有系统交代“这台机器人被设定成什么样”：第 3 段先讲研究者每两分钟给它发一次指令，让它做笑、跳舞、坐下、摔倒、朝某方向走等动作；随后又讲它先后被设定为“更有限、更可预测”的行为模式和“展示全部行为”的模式。这一整段就是对机器人如何被设定的叙述，故填 C。",
          "analysis": "本题对应第 3 段（题干答段落 C）。该段全部围绕“如何控制这台机器人”展开：“The researchers sent instructions to the robot about every two minutes to do things like giggle, dance, sit down, fall down, or walk in a certain direction. The 45 sessions were videotaped, and interactions between toddlers and the robot were later analyzed. The results showed that the quality of those interactions improved steadily over 27 sessions. The interactions deteriorated quickly over the next 15 sessions, when the robot was ordered to behave in a more limited, predictable manner. Finally, the human/robot relations improved in the last three sessions, after the robot had been instructed to display its full range of behaviors.”（研究者大约每两分钟向机器人发送一次指令，让它做诸如咯咯笑、跳舞、坐下、摔倒或朝某个方向走等动作。45 次课程被录了像……接下来 15 次课程中，机器人被要求以更有限、更可预测的方式行动，互动质量迅速下降。最后三次课程中，机器人被指令展示其全部行为，人机关系又有所改善。）段中 sent instructions、was ordered to behave、had been instructed to display 三种说法反复出现，共同构成对“这台机器人被怎样设定、设定如何调整”的完整叙述，与题干的 an account of the way one robot was programmed 高度吻合，因此答案为 C。注意第 2 段虽然也提到机器人（QRIO、Sony 制造），但讲的是研究背景与来历，没有涉及指令与行为设定。",
          "traps": [
            "为什么不选 B：第 2 段介绍的是研究者把机器人引入课堂、机器人型号与制造方（Sony）、为何选幼儿作被试，属于研究设计与设备背景，没有“如何被编程设定”的内容。",
            "为什么不选 F：第 6 段展望未来的机器人导师可以“当场对社交信号作出反应”，那是尚未实现的能力设想，不是对现有机器人设定方式的叙述。",
            "为什么不选 D：第 4 段记叙的是孩子对机器人的行为反应（哭泣、扶它站起、触碰部位变化），主语是孩子而不是研究者的编程指令。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–23 人物观点匹配（Match each statement with the correct person A-D）",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 23
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "In future, robots will not only have to think, but also to show feelings.",
          "translation": "未来机器人不仅要会思考，还得会表达情感。",
          "answer": "b",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "‘It is becoming clear that, to achieve this goal, we are going to endow machines with something similar to emotion, not just traditional forms of intelligence,’ said Movellan."
          },
          "synonyms": [
            "“In future” 同义替换为原文的 “we are going to”，表示将来必定要发生的事",
            "“show feelings” 同义替换为原文的 “endow machines with something similar to emotion”（给机器赋予类似情感的东西）",
            "“not only have to think” 同义替换为原文的 “not just traditional forms of intelligence”（不只是传统形式的智能）"
          ],
          "locatingTip": "定位：题干的关键词是 feelings 与 think，回原文找 emotion、intelligence 这类词，二者同句出现的地方只有第 6 段末句，且该句明确说 “said Movellan”，说话人直接署名，属于送分式定位。确定答案技巧：人物匹配题必须在“谁说的”这一层上核实。原文末句把 something similar to emotion 与 traditional forms of intelligence 用 not just 并列对照，对应题干的 show feelings 与 think；而句末的 said Movellan 标明观点出自 Javier R. Movellan，对应选项 B。注意不要把 this goal 误当作别人的观点——this goal 回指的是前一句研究者的目标，但本句的立场是由 Movellan 说出口的，答题以说话人署名为准。",
          "analysis": "本题对应第 6 段末句，说话人为 Javier R. Movellan（选项 B）。原文：“‘It is becoming clear that, to achieve this goal, we are going to endow machines with something similar to emotion, not just traditional forms of intelligence,’ said Movellan.”（Movellan 说：“越来越清楚的是，为了实现这一目标，我们将要赋予机器某种类似情感的东西，而不只是传统形式的智能。”）题干 “In future, robots will not only have to think, but also to show feelings.” 中的 In future 对应 we are going to，show feelings 对应 endow machines with something similar to emotion，think 对应 traditional forms of intelligence，三处改写与该句一一对应，且句式同为“不只是 A，还要 B”的递进结构。因此答案是 B（Javier R. Movellan）。作答提示：人物匹配题中，人名往往出现在引语之后（said Movellan）或之前（Tanaka said），只要引语内容与题干吻合，就要果断锁定该人名，不要因为引语内容涉及其他人（如 this goal 指代 Tanaka 与研究者的目标）而动摇。",
          "traps": [
            "为什么不是 A（Fumihide Tanaka）：Tanaka 的观点集中在第 2 段（幼儿没有关于机器人的先入之见）、第 4 段（互动中最重要的方面是触碰）与第 6 段（机器人在教育环境中有潜力），他从未谈到要给机器赋予情感。",
            "为什么不是 C（Ronald Arkin）：Arkin 出现在第 5 段与第 7 段，谈的是研究是首个长期研究、人类有与人工制品建立依恋的倾向，以及对后果的担忧，没有关于机器人需要情感的观点。",
            "为什么不是 D（David Powers）：Powers 只在第 7 段出现，观点是机器人行为种类的广度比单一行为的出色程度更重要，不涉及情感与思考。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "It is uncertain whether more contact between people and robots will be beneficial.",
          "translation": "人与机器人之间更多的接触是否有益，目前尚不确定。",
          "answer": "c",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "But he also cautioned that researchers do not yet understand the consequences of increased human/robot interaction."
          },
          "synonyms": [
            "“It is uncertain” 同义替换为原文的 “researchers do not yet understand” 与 “cautioned”（尚未弄清楚、提出警示）",
            "“more contact between people and robots” 同义替换为原文的 “increased human/robot interaction”",
            "“whether … will be beneficial” 对应原文紧接其后的疑问 “whether this is a good thing or a bad thing for society”，把“有益”落在一个好／坏的判断上"
          ],
          "locatingTip": "定位：题干的关键词是 uncertain（不确定）与 beneficial（有益）。全文充满不确定语气的地方在第 7 段，找 do not yet understand、whether this is a good thing or a bad thing 这类表述。确定答案技巧：人物匹配题的关键是确定说话人。定位句的主语 he 回指前一句刚刚出现的人名 Ronald Arkin，紧随其后的引语又以 “Arkin said” 收尾，两处署名共同确认观点来自第 7 段的 Ronald Arkin，对应选项 C。题干把原文的“尚不了解后果（do not yet understand the consequences）”概括为“是否有益尚不确定（uncertain … beneficial）”，是同义改写而非新信息。",
          "analysis": "本题对应第 7 段，说话人为 Ronald Arkin（选项 C）。原文相关句群：“Ronald Arkin was not surprised by the affection demonstrated by the toddlers toward the robot. ‘Humans have a tremendous propensity to bond with artifacts, whether it be a car, a doll, or a robot,’ he said. But he also cautioned that researchers do not yet understand the consequences of increased human/robot interaction. ‘Studying how robots and humans work together can give us insight into whether this is a good thing or a bad thing for society,’ Arkin said.”（Arkin 对幼儿表现出的情感并不惊讶。他说：“人类有一种极大的倾向去与人造物建立依恋，无论是汽车、玩偶还是机器人。”但他也警告说，研究者尚未弄清人机互动增加会带来什么后果。Arkin 说：“研究机器人与人类如何共处，可以帮助我们看清这对社会究竟是好事还是坏事。”）But he also cautioned that researchers do not yet understand the consequences 对应题干的 It is uncertain，increased human/robot interaction 对应 more contact between people and robots，而 whether this is a good thing or a bad thing 正是 beneficial 与否的疑问，因此答案是 C。注意 he 的指代：该句中 he 承接上一句的 Ronald Arkin，若单独截取句子会看不清说话人，这正是本题的定位要点——必须把代词回指出来的句子一并读懂。",
          "traps": [
            "为什么不是 A（Fumihide Tanaka）：Tanaka 在第 2、4、6 段发言，态度是积极的（机器人在教育环境中可能有巨大潜力），没有对后果表示不确定。",
            "为什么不是 B（Javier R. Movellan）：Movellan 的观点是未来必须给机器赋予类似情感的东西，语气是断定要实现目标就得这样做，不是“不确定是否有益”。",
            "为什么不是 D（David Powers）：Powers 在第 7 段作的是学术评价（行为多样性的重要程度），他的陈述是明确论断（it is clearly demonstrated），不含不确定语气。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Very young children have not yet developed ideas about robots.",
          "translation": "非常年幼的孩子还没有形成关于机器人的概念（看法）。",
          "answer": "a",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "‘Children of toddler age were chosen because they have no preconceived notions of robots,’ according to Tanaka."
          },
          "synonyms": [
            "“Very young children” 同义替换为原文的 “children of toddler age”（学步期幼儿，即 18–24 个月大的幼儿）",
            "“have not yet developed ideas about robots” 同义替换为原文的 “have no preconceived notions of robots”（对机器人没有任何先入之见）",
            "“according to Tanaka” 直接标明观点归属，对应选项 A（Fumihide Tanaka）"
          ],
          "locatingTip": "定位：题干的核心词只有一个——children 与 robots，回原文找“为什么选幼儿做被试”的说明，落在第 2 段引述 Tanaka 的那一句。确定答案技巧：这一题是本题组里署名最明确的一题，句末 according to Tanaka 直接交代出处，只需确认题干与引语是否同义即可。原文的 no preconceived notions（没有先入之见）对应题干的 have not yet developed ideas（还没有形成看法），toddler age 对应 very young children，因此答案为 A。切勿因为句子提到 “children … were chosen”（研究者选择被试的行为）而把责任归给其他人。",
          "analysis": "本题对应第 2 段，说话人为 Fumihide Tanaka（选项 A）。原文在交代研究设计时说：“One of the QRIO series of robots, the 58 cm machine, was originally developed by Sony. ‘Children of toddler age were chosen because they have no preconceived notions of robots,’ according to Tanaka.”（这台属于 QRIO 系列、高 58 厘米的机器最初由索尼开发。Tanaka 表示：“之所以选择学步期幼儿，是因为他们对机器人没有先入之见。”）题干 “Very young children have not yet developed ideas about robots.” 中的 very young children 对应 children of toddler age，have not yet developed ideas 对应 have no preconceived notions，语义完全相同，且句末 according to Tanaka 明确署名，故答案是 A（Fumihide Tanaka）。作答提示：no preconceived notions 中的 notion 与题干 ideas 是同义替换，preconceived（先入为主）则与 not yet developed（尚未形成）对应，属于人物匹配题中常见的“抽象名词互换”考法。",
          "traps": [
            "为什么不是 B（Javier R. Movellan）：Movellan 与 Tanaka 同为研究者，但本句署名是 Tanaka；Movellan 的观点句在第 6 段末，内容关于赋予机器情感。",
            "为什么不是 C（Ronald Arkin）：Arkin 评论的对象是研究本身的重要性和人机互动的后果，从未说明幼儿对机器人有无概念。",
            "为什么不是 D（David Powers）：Powers 以 Flinders 大学副教授身份评价机器人行为多样性的重要性，与幼儿认知无关。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "Robots need to perform a wide variety of actions for people to relate to them.",
          "translation": "机器人需要做出多种多样的动作，人们才能与它们建立联系。",
          "answer": "d",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "‘In this study, it is clearly demonstrated that a limited range of robot behaviors, however impressive, is nowhere near as important to human/robot interaction as being able to make appropriate responses from a broad repertoire of behaviors.’"
          },
          "synonyms": [
            "“a wide variety of actions” 同义替换为原文的 “a broad repertoire of behaviors”（广泛的行为储备）",
            "“perform … actions” 同义替换为原文的 “make appropriate responses from a broad repertoire of behaviors”",
            "“for people to relate to them” 同义替换为原文的 “important to human/robot interaction”（对人机互动至关重要）",
            "“need to” 对应原文的比较结构 “nowhere near as important … as …”，即有限行为远不如行为多样重要"
          ],
          "locatingTip": "定位：题干的关键词是 a wide variety of actions。全文谈“行为种类多寡”的地方有两处：第 3 段说机器人最后被指令 “display its full range of behaviors”（实验操作描述），第 7 段说 “a broad repertoire of behaviors”（观点评价）。由于本题组要求匹配人，只能取第 7 段，说话人是开头署名的 Associate Professor David Powers。确定答案技巧：识别原文的比较句式 “a limited range of robot behaviors, however impressive, is nowhere near as important … as being able to make appropriate responses from a broad repertoire of behaviors”，其含义是“行为种类多”比“单个行为出色”更重要，正是题干所说的“机器人需要做多种动作，人们才会与之建立联系”。故答案是 D。",
          "analysis": "本题对应第 7 段，说话人为 David Powers（选项 D）。原文：“Associate Professor David Powers, an expert in artificial intelligence and cognitive science at Flinders University in South Australia, commented, ‘In this study, it is clearly demonstrated that a limited range of robot behaviors, however impressive, is nowhere near as important to human/robot interaction as being able to make appropriate responses from a broad repertoire of behaviors.’”（南澳弗林德斯大学人工智能与认知科学专家 David Powers 副教授评论说：“这项研究清楚表明，对人与机器人的互动来说，有限的机器人行为范围无论多么令人印象深刻，都远不如能够从广泛的行为储备中作出恰当反应来得重要。”）句中 a limited range of robot behaviors 与 a broad repertoire of behaviors 构成对照，落脚点是“广泛的行为储备更重要”，对应题干的 a wide variety of actions；is … important to human/robot interaction 对应 for people to relate to them。因此该观点属于 David Powers，答案是 D。注意本题与第 18 题（机器人如何被编程）容易混淆：第 18 题的定位句在第 3 段，说的是实验中研究者如何给机器人设定行为，属于事实叙述；本题落点在第 7 段 Powers 的评论，属于观点评价，两者不要互换。",
          "traps": [
            "为什么不是 A（Fumihide Tanaka）：Tanaka 谈的是幼儿无先入之见、互动中关键在触碰、机器人有教育潜力，没有论述行为多样性的重要。",
            "为什么不是 B（Javier R. Movellan）：Movellan 强调要达到目标必须给机器赋予类似情感的能力，谈的是情感而非行为种类的广度。",
            "为什么不是 C（Ronald Arkin）：Arkin 谈的是人类倾向于与人造物依恋、以及人机互动后果尚不明确，均与“需要多种行为”无关。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Using robots as an aid in schools may have many benefits.",
          "translation": "把机器人作为学校里的辅助手段可能有许多好处。",
          "answer": "a",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "‘It could have great potential in educational settings, assisting teachers and enriching the classroom environment,’ Tanaka said."
          },
          "synonyms": [
            "“Using robots as an aid in schools” 同义替换为原文的 “assisting teachers and enriching the classroom environment” 与 “educational settings”，即在学校中辅助教学",
            "“may have many benefits” 同义替换为原文的 “could have great potential”（可能具有巨大潜力）",
            "“could” 与 “may” 同为表示可能性的情态动词，语气一致，说明这仍是设想而非既成事实"
          ],
          "locatingTip": "定位：题干关键词是 schools 与 benefits／aid。全文谈学校用途的是第 6 段：educational settings、toddler classroom、assist teachers、personalized tutors 等词集中出现，而署名句 “Tanaka said” 就紧跟在这句潜力陈述之后。确定答案技巧：先找到“好处／潜力”的表述，再核对说话人。原文说机器人在教育环境中可能有巨大潜力，能协助教师、丰富课堂环境，对应题干的 aid in schools 与 many benefits；句末 Tanaka said 标明观点出自 Fumihide Tanaka，对应选项 A。注意本句与第 19 题（Movellan 关于情感的论断）同在第 6 段且相邻，定位时要区分两句的说话人：潜力句属于 Tanaka，情感句属于 Movellan。",
          "analysis": "本题对应第 6 段，说话人为 Fumihide Tanaka（选项 A）。原文：“Tanaka and Movellan are now developing autonomous robots for the toddler classroom. ‘It could have great potential in educational settings, assisting teachers and enriching the classroom environment,’ Tanaka said.”（Tanaka 和 Movellan 正在为幼儿课堂开发自主机器人。Tanaka 说：“它在教育环境中可能有巨大潜力，可以协助教师、丰富课堂环境。”）题干中的 Using robots as an aid in schools 对应 assisting teachers 与 educational settings，may have many benefits 对应 could have great potential 与 enriching the classroom environment，两处情态动词 could 与 may 也彼此呼应，说明这是对未来的正面设想。因此观点出自 Tanaka，答案是 A。作答提示：人物匹配题常在同一段内安排两到三个不同人名的观点（本段即有 Tanaka 与 Movellan 两位），务必逐句核对引语前后的署名，切勿凭段落印象作答。",
          "traps": [
            "为什么不是 B（Javier R. Movellan）：Movellan 在同段末句发言，内容是赋予机器类似情感的能力，属于技术条件而非学校用途的好处。",
            "为什么不是 C（Ronald Arkin）：Arkin 的观点带有警示色彩（后果尚不明确、是好是坏未定），与题干“可能有许多好处”的正面判断不符。",
            "为什么不是 D（David Powers）：Powers 谈的是行为多样性的重要性，完全没有涉及学校或教学场景。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 句子填空（Choose ONE WORD ONLY from the passage）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "Until recently, robots that were best at holding people's attention were those that acted as 24 ________ .",
          "translation": "直到最近，最善于吸引人们注意力的机器人是那些充当 ________ 的机器人。",
          "answer": "storytellers",
          "wordClass": "名词（复数，指一类机器人；位于 acted as 之后，作表语（主语补足语），说明这些机器人的身份；原文该类机器人是复数概念，故填复数形式 storytellers）",
          "locating": {
            "paragraph": "1",
            "quote": "The most successful robots so far have been storytellers, but they have only been able to maintain human interest for a limited time and typically rely on the robot telling stories that change over time."
          },
          "synonyms": [
            "“best at holding people's attention” 同义替换为原文的 “The most successful robots so far”（迄今为止最成功的机器人）与 “maintain human interest”（维持人的兴趣）",
            "“Until recently” 同义替换为原文的 “so far”（迄今为止），并与后文 “commercially available robots seldom cross the 10-hour barrier” 的现状描述对应",
            "“acted as storytellers” 与原文的 “have been storytellers” 同义，都表示机器人的角色是讲故事者"
          ],
          "locatingTip": "定位：题干的核心是“最擅长吸引人注意力的机器人”，回原文找最高级 the most successful robots，落在第 1 段第 3 句。确定答案技巧：找到句子后直接看谓语后面的表语——have been storytellers，即“最成功的机器人一直是讲故事者”，对应题干中 acted as 后面的空格。填写时注意两点：一是必须写原文原词 storytellers（复数），不能写 story-teller、storyteller；二是不要填句中的 stories，因为题干问的是机器人所充当的角色（人），而不是它讲的内容。",
          "analysis": "原文第 1 段第 3 句：“The most successful robots so far have been storytellers, but they have only been able to maintain human interest for a limited time and typically rely on the robot telling stories that change over time.”（迄今为止最成功的机器人一直是讲故事者，但它们只能在有限时间内维持人的兴趣，而且通常要依赖机器人讲述不断变化的故事。）题干 “Until recently, robots that were best at holding people's attention were those that acted as [24]” 是对该句的改写：The most successful 改写为 best at holding people's attention，so far 改写为 Until recently，结合 maintain human interest 的双重呼应，可以确定空格处就是 storytellers。从词性看，空格作 acted as（充当）的宾语，需要表身份的名词，且要与主语 those（那些机器人）在类别上一致，故用复数形式 storytellers。答题时常见错误是填 stories 或 story——原文 storytellers 是“讲故事的人”，stories 是“故事”，两者虽同根但词性类别不同，题干问的是机器人的角色，只能填 storytellers。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "The children responded to the QRIO robot as a friend or a 25 ________ rather than as a toy.",
          "translation": "孩子们把 QRIO 机器人当作朋友或 ________ 来对待，而不是当作玩具。",
          "answer": "peer",
          "wordClass": "名词（单数，作介词 as 的宾语，与 a friend 并列，指同伴、同辈；空格前有不定冠词 a，故填单数名词 peer）",
          "locating": {
            "paragraph": "5",
            "quote": "Overall, the interaction between children and the robot improved over time and the children progressively treated it more as a peer than a plaything."
          },
          "synonyms": [
            "“responded to … as a friend or a peer” 同义替换为原文的 “treated it more as a peer than a plaything”（把它更多当作同伴而不是玩物）",
            "“rather than as a toy” 同义替换为原文的 “more as a peer than a plaything”，plaything 即 toy（玩物、玩具）",
            "“The children” 与原文主语 “the children” 完全一致，主语直接复现，定位确定性高"
          ],
          "locatingTip": "定位：题干有专有名词 QRIO 与关键词 friend／toy，QRIO 在第 2、4 段多次出现，但只有第 5 段把“同伴”与“玩具”对立起来（more as a peer than a plaything）。确定答案技巧：题干用 “a friend or a [25] rather than as a toy” 对应原文的 “more as a peer than a plaything”，其中 plaything 对应 toy，那么空格处就是与 plaything 相对的 peer。填写时保持原文单数形式 peer，不要写成 friend（题干已给出 a friend，空格填的是并列的另一个身份），也不要因为看到 as a friend 就误以为要填 children。",
          "analysis": "原文第 5 段写道：“The study concluded that after 45 days of immersion in a childcare center over a period of five months, long-term bonding and socialization occurred between toddlers and a state-of-the-art social robot. Overall, the interaction between children and the robot improved over time and the children progressively treated it more as a peer than a plaything.”（研究得出结论：在五个月的时间里累计 45 天沉浸于托儿所环境后，幼儿与最先进的社交机器人之间产生了长期依恋与社交化。总体而言，孩子与机器人的互动随时间改善，孩子逐渐把它更多地当作同伴而不是玩物。）题干把 treated it more as a peer than a plaything 改写为 responded to the QRIO robot as a friend or a peer rather than as a toy：其中 plaything 被替换为 toy（rather than as a toy），而所填的空正是与 plaything 对立、与 friend 并列的 peer。因此答案是一个单词 peer（单数）。词性上，空格前有不定冠词 a，且与 a friend 并列作 responded to … as 的宾语补足语，必须是可数名词单数；peer 本身也是雅思高频学术词，意为“同辈、同伴”。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Arkin expected that the children would show 26 ________ towards the QRIO robot.",
          "translation": "Arkin 预料到孩子们会对 QRIO 机器人表现出 ________。",
          "answer": "affection",
          "wordClass": "名词（不可数，作 show 的宾语，表示情感；空格前无冠词，填单数不可数形式 affection）",
          "locating": {
            "paragraph": "7",
            "quote": "Ronald Arkin was not surprised by the affection demonstrated by the toddlers toward the robot."
          },
          "synonyms": [
            "“expected” 同义替换为原文的 “was not surprised by”，即 Arkin 事先就有这种预料，故见怪不怪",
            "“show … towards the QRIO robot” 同义替换为原文的 “the affection demonstrated by the toddlers toward the robot”，demonstrated 即 show，toward 介词直接对应",
            "“the children” 与原文的 “the toddlers” 同上义替换，指同一批幼儿被试"
          ],
          "locatingTip": "定位：题干带有人名 Arkin 与机器人名 QRIO，人名在文中只出现在第 5 段末与第 7 段，其中只有第 7 段说到孩子对机器人的情感表现，定位一步到位。确定答案技巧：本题的陷阱在于 expect（预料）在原文里是用否定形式表达的——“was not surprised by the affection demonstrated by the toddlers”（对幼儿表现出的情感并不感到意外），不意外就等于事先预料到了，因此空格要填的是被预料的那种表现，即 affection。填写时保持原文的单数不可数形式 affection，不要写成 feelings（题干要求从原文选一个词），也不要误填 surprise。",
          "analysis": "原文第 7 段写道：“Ronald Arkin was not surprised by the affection demonstrated by the toddlers toward the robot. ‘Humans have a tremendous propensity to bond with artifacts, whether it be a car, a doll, or a robot,’ he said.”（Ronald Arkin 对幼儿对机器人表现出的情感并不感到惊讶。他说：“人类有一种极大的倾向去与人造物建立依恋，无论是汽车、玩偶还是机器人。”）题干把 “was not surprised by the affection demonstrated by the toddlers toward the robot” 改写为 “Arkin expected that the children would show [26] towards the QRIO robot”：expected 是 not surprised by 的正面表达（不惊讶即已预料），show 对应 demonstrated，toward 保留不变，因此空格填的就是被预料、被表现出的那种情感，即 affection（爱意、喜爱之情）。词性上，affection 是不可数名词，作 show 的宾语时不加冠词、不变复数，ONE WORD ONLY 只需写一个词 affection。补充说明：原文中 “the toddlers” 与题干 “the children” 是同义替换，虽然本题句子没有直接出现 QRIO 一词，但第 7 段讨论的正是本研究中的那台社交机器人，与题干所指一致。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
