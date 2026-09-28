(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1021", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1021",
  "meta": {
    "examId": "p1-high-1021",
    "title": "A river reveals its Roman past 一条河流显露罗马往事",
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
          "stem": "In 1986 Luc Long had been looking for an opportunity to dive in the Rhone for some time.",
          "translation": "1986 年，路克·朗（Luc Long）已经有一段时间在寻找在罗讷河（Rhone）潜水的机会了。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In 1986, a friend persuaded Luc Long, a keen diver, to dive for the first time in his home river. Long reluctantly agreed."
          },
          "synonyms": [
            "「had been looking for an opportunity to dive」与原文的「a friend persuaded Luc Long … to dive」相互冲突：原文是他朋友主动劝说他去潜水，不是他自己长期寻找机会",
            "「had been looking for」所暗示的主动、长期的状态，与原文的「persuaded」（被说服）、「reluctantly agreed」（勉强同意）正好相反",
            "「in 1986」与原文「In 1986」时间词完全一致，说明两处在讲同一件事；「dive in the Rhone」对应原文的「dive … in his home river」（他家乡的河即罗讷河）"
          ],
          "locatingTip": "定位：题干带有年份 1986 和专有名词 Luc Long、Rhone，第 2 段首句同时出现这三点，扫读到 In 1986 即可停下精读。确定答案技巧：本题考“谁发起了这次潜水”。题干用 had been looking for an opportunity（一直在找机会）强调朗本人的意愿与主动性，而原文写的是 a friend persuaded Luc Long … to dive for the first time（朋友劝他第一次下河），紧接着 Long reluctantly agreed（他勉强答应）。两句话在“谁想下水”这一点上完全对立：是别人劝他、他勉强同意，而不是他主动找机会，因此判 FALSE。做题时注意时态信号 had been looking for 表示“此前一直在做某事”，原文并无任何支持这种持续行为的表述。",
          "analysis": "原文第 2 段开头两句：“In 1986, a friend persuaded Luc Long, a keen diver, to dive for the first time in his home river. Long reluctantly agreed.”（1986 年，一位朋友说服了热衷潜水的路克·朗，让他第一次在自己家乡的河里潜水。朗勉强答应了。）这两句交代了三件事：时间（1986）、发起人（a friend，朋友）、朗的态度（reluctantly agreed，勉强同意）。题干却写成 “In 1986 Luc Long had been looking for an opportunity to dive in the Rhone for some time.”（1986 年，朗已经有一段时间在寻找在罗讷河潜水的机会）。题干把“被人劝说”改成了“自己寻找机会”，把“第一次下河、勉强答应”改成了“长期主动寻找机会”，两者是方向相反的信息冲突，而不是原文没说。朗是 keen diver（热衷潜水者）只是说明他爱好潜水，并不意味着他此前一直在找罗讷河的机会，这一点是雅思常见的信息嫁接：用原文的关键词（dive、diver）包装一个原文没有的动作。因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确写 a friend persuaded Luc Long … to dive（是朋友说服了他去潜水），并用 Long reluctantly agreed（他勉强同意）交代他的态度。若题干成立，原文应出现 he had wanted / he had been waiting for a chance 之类的表述，但原文完全没有，反而给出相反信息（被动、勉强），所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：NOT GIVEN 要求原文对题干的说法没有交代；这里原文不但交代了这次潜水的由来（朋友劝说）和朗的态度（勉强同意），而且与题干的“他一直在找机会”直接抵触，属于有相反信息，按规则判 FALSE。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Long and his friend were the first divers to find Roman remains in the Rhone.",
          "translation": "朗和他的朋友是最早在罗讷河中发现罗马遗迹的潜水者。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "At a depth of about six metres, Long saw a sunken truck. To his surprise, he discovered an ancient Roman jar known as an amphora on the driver's seat."
          },
          "synonyms": [
            "「Long and his friend」对应原文的「Long」与首句的「a friend」（the two men 也指这两人）",
            "「Roman remains」同义替换为原文的「an ancient Roman jar known as an amphora」（一种叫 amphora 的古罗马罐子），以及下文的「dozens more amphorae」",
            "「were the first divers to find」在原文中没有任何对应表达：原文只写「At a depth of about six metres, Long saw …」「To his surprise, he discovered …」，交代发现了什么，却从未交代是不是“最早发现者”"
          ],
          "locatingTip": "定位：题干的人物（Long、his friend）与对象（Roman remains）都落在第 2 段中后部，扫读到 Long saw a sunken truck 与 discovered an ancient Roman jar 就是发现罗马遗物的现场。确定答案技巧：本题的判分点是“the first divers（最早的潜水者）”这一身份。回到原文逐字核对会发现：原文只叙述“他看到一辆沉没的卡车”“他惊讶地在驾驶座上发现了一个古罗马罐子”“很快潜水者又找到几十个这样的罐子”，从头到尾没有出现 first、earliest、no one had ever 之类的表述，也没有提到此前是否有人发现过罗马遗物。属于信息缺失，因此判 NOT GIVEN。切忌用“这是 1986 年一次意外的首次发现”这种生活常识去补全原文。",
          "analysis": "第 2 段讲朗第一次下罗讷河的经过：水又冷又浑（around 8°C, thick, cloudy and foul-smelling），能见度不足一米；随后写道 “At a depth of about six metres, Long saw a sunken truck. To his surprise, he discovered an ancient Roman jar known as an amphora on the driver's seat.”（在大约六米深处，朗看见一辆沉没的卡车；令他意外的是，他在驾驶座上发现了一个被称为 amphora 的古罗马罐子）。再往后又说 “Within a short time the divers had located dozens more amphorae, and he has been mapping this Roman rubbish dump ever since.”（很快潜水者又定位到几十个这样的罐子，此后他一直在绘制这座罗马垃圾场的图）。原文对这些发现的时间、地点、数量都交代得很清楚，唯独没有回答“他们是不是最早的发现者”。题干加入的最高级 the first divers 在原文中找不到落点：既没有说“在此之前无人发现过”，也没有说“此前已有人发现过”，两种可能原文都没有交代，因此既不是 TRUE 也不是 FALSE，而是 NOT GIVEN。这是判断题的典型套路——把具体事实（发现了什么）与排序身份（是不是最早）捆绑在一起，只答了前者。",
          "traps": [
            "为什么不是 TRUE：TRUE 要求原文明确支持“他们是最早的发现者”，但原文只描述了发现过程与发现物，从未出现 the first / the earliest 或任何表示“此前无人发现”的说法。由“朗在 1986 年偶然发现”推不出“历史上从没人发现过”，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文给出相反信息，即原文须说明“在他们之前已经有其他潜水者发现过罗马遗物”。原文对是否有人更早发现只字未提，属于纯信息缺失，所以不是 FALSE。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Long's work in the Rhone attracted immediate interest.",
          "translation": "朗在罗讷河的工作立刻引起了关注。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "For the first 20 years or so, no one paid much attention to what Long was doing. In 2004, one of his colleagues came across a 34-metre-long Roman barge."
          },
          "synonyms": [
            "「Long's work in the Rhone」同义替换为原文的「what Long was doing」（朗在做的事）",
            "「attracted immediate interest」与原文的「For the first 20 years or so, no one paid much attention」（头 20 年左右没人太在意）直接冲突：no one paid much attention 是“没什么人关注”，for the first 20 years or so 是“长达约 20 年”，都否定了 immediate（立刻）",
            "「attracted interest」的反义表达是原文的「no one paid much attention」；原文直到很晚才出现「Word began to leak out」（消息开始传出去）"
          ],
          "locatingTip": "定位：题干关键词 work、Rhone、interest 都不够独特，但题干讲的是“朗的工作是否受关注”，第 3 段首句正好以 no one paid much attention 谈关注度，且句首 For the first 20 years or so 是极显眼的时间状语，扫读时抓住 no one paid much attention 即可锁定。确定答案技巧：判分关键是时间副词 immediate（立刻）。原文用两个“慢”的信号否定它：一是 “For the first 20 years or so, no one paid much attention to what Long was doing.”（头 20 年左右没人太在意他做的事），二是关注出现的时间点很晚——先是 2004 年同事发现驳船，2007 年才出现 Neptune 雕像与 “Word began to leak out”（消息开始传出去）。从 1986 年首次潜水到 2007 年消息外传，隔了 20 多年，与“立刻”相反，故判 FALSE。",
          "analysis": "第 3 段首句就是本题的判分依据：“For the first 20 years or so, no one paid much attention to what Long was doing.”（头 20 年左右，几乎没人在意朗在做的事）。这句话用否定结构 no one paid much attention 直接说明关注度极低，并用 for the first 20 years or so 给出持续时长；随后段落才按时间推进讲述关注如何慢慢到来：2004 年一位同事发现 34 米长的罗马驳船，2007 年朗把驳船研究交给考古学家 Sabrina Marlier，同一时期潜水者发现 Neptune 雕像，“Word began to leak out”，法国海关警察才警告朗可能有文物窃贼盯着他的行动。可见从 1986 年（第 2 段）到 2004—2007 年，20 多年里根本谈不上“立刻引起关注”。题干的 immediate interest 与原文的 no one paid much attention 正面对立，所以答案是 FALSE。做题提示：判断题里 immediate、soon、quickly 这类表示“快慢”的副词往往是考点，回原文要找时间量词（20 years、2007 等）来验证。",
          "traps": [
            "为什么不是 TRUE：原文首句明确说头 20 年左右 no one paid much attention（没人太关注），并且关注的出现要等到 2004 年驳船被发现、2007 年消息外传之后，时间跨度长达 20 余年。题干说“立刻引起关注”，与原文的时间线冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“关注度”这一信息交代得非常明确（先无人关注，后逐渐引发关注），并非没有提及；只是它描述的是“缓慢到来”的关注，与题干的“立刻”相反，因此按规则判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "It was thought that the Neptune statue would be of interest to thieves.",
          "translation": "当时人们认为海神涅普顿（Neptune）雕像会引起窃贼的兴趣。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In 2007, divers found a larger-than-life marble statue of Neptune, the Roman god of the sea. Word began to leak out. The French customs police warned Long that antiquities thieves might be watching his operation."
          },
          "synonyms": [
            "「the Neptune statue」在原文原词复现：「a larger-than-life marble statue of Neptune, the Roman god of the sea」",
            "「It was thought」同义替换为原文的「The French customs police warned」（警方警告），即这一看法来自法国海关警察的判断",
            "「would be of interest to thieves」同义替换为原文的「antiquities thieves might be watching his operation」（文物窃贼可能正在盯着他的打捞行动），窃贼关注的对象正是朗发现这批文物（以涅普顿雕像为代表）的行动"
          ],
          "locatingTip": "定位：题干的核心名词是 Neptune statue，原文第 3 段中后部原词出现这一专有名词，且紧接着就有 thieves 一词，两词同段紧邻，扫读抓住 Neptune 即可。确定答案技巧：本题考“谁认为这些文物会被窃贼盯上”。原文的逻辑链条是：2007 年潜水者发现巨大的涅普顿大理石雕像，随后 “Word began to leak out”（消息开始外传），接着 “The French customs police warned Long that antiquities thieves might be watching his operation”（法国海关警察警告朗，文物窃贼可能正在盯着他的行动）。消息传出正是因为雕像等重大发现，而警方也据此判断窃贼会对它感兴趣，朗随后甚至把同样珍贵的凯撒胸像藏进朋友的车库加以保护。题干的 It was thought（人们认为）正是对这一警告内容的概括，故判 TRUE。",
          "analysis": "第 3 段后半部分按时间顺序推进：“In 2007, divers found a larger-than-life marble statue of Neptune, the Roman god of the sea. Word began to leak out. The French customs police warned Long that antiquities thieves might be watching his operation. So when a rare marble bust of the Roman emperor Caesar was found, Long hid it in a friend's garage.”（2007 年，潜水者发现一尊比真人还大的海神涅普顿大理石雕像。消息开始外传。法国海关警察警告朗，文物窃贼可能正在盯着他的行动。于是当一尊罕见的罗马皇帝凯撒大理石胸像被发现时，朗把它藏在了一位朋友的车库里。）把这几句连起来看：正是涅普顿雕像的发现让消息传了出去，警方由此判断文物窃贼会对朗的打捞行动（即他所发现的这些珍贵文物，涅普顿雕像是其中的代表）产生兴趣；朗也随即采取藏匿凯撒胸像的防范措施，从侧面印证了“认为这些文物会被窃贼盯上”这一判断。题干把警方的警告概括为 It was thought（人们认为），把 antiquities thieves might be watching his operation 概括为 would be of interest to thieves，语义方向一致，因此答案是 TRUE。做题提示：判断题中被动概括性开头（It was thought / It is believed）通常对应原文中某人说的话或某项判断，要在原文里找“谁说的”，本题对应的就是法国海关警察。",
          "traps": [
            "为什么不是 FALSE：原文给出了明确的支持信息——发现涅普顿雕像后消息外传，法国海关警察警告“文物窃贼可能正在盯着他的行动”，朗也因此把凯撒胸像藏了起来。这说明当时确实认为这批文物（含涅普顿雕像）会被窃贼看中，与题干一致，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文既点明了涅普顿雕像，又点明了窃贼（antiquities thieves）与其关注对象（his operation），两条信息明确挂钩，并非没有提及，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Benoit Poinard doubted that the barge could be raised in one diving season.",
          "translation": "贝努瓦·普瓦纳尔（Benoit Poinard）怀疑这艘驳船能否在一个潜水季内被打捞出水。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "So there was only one diving season to extract the boat from the Rhone. \"We all thought the deadline was impossible,\" said Benoit Poinard, who led the diving team."
          },
          "synonyms": [
            "「Benoit Poinard」在原文原词复现，并给出身份「who led the diving team」（潜水队负责人）",
            "「doubted that the barge could be raised」同义替换为原文的「thought the deadline was impossible」（认为这个期限不可能完成），doubted 与 thought … impossible 表达同一种怀疑态度",
            "「in one diving season」同义替换为原文的「there was only one diving season to extract the boat」（只有一个潜水季可以取出这条船）"
          ],
          "locatingTip": "定位：题干出现人名 Benoit Poinard，属于大写专有名词，全篇只在第 5 段出现，扫读全文遇到即停。确定答案技巧：本题考“怀疑/不可能”这一态度。原文用直接引语给出 “We all thought the deadline was impossible,”（我们都认为这个期限不可能完成），说话人正是潜水队负责人 Benoit Poinard；上句交代前提 “So there was only one diving season to extract the boat from the Rhone.”（只有一个潜水季来完成打捞）。期限只有一个潜水季，而队长认为不可能，两点合起来就是“他怀疑能否在一个潜水季内打捞出水”，与题干完全对应，故判 TRUE。注意 Poinard 紧接着解释 “Three or four months would not be enough to excavate Arles-Rhone 3.”（三四个月不够挖出这条船），进一步坐实怀疑态度。",
          "analysis": "第 5 段开头连用三句交代困难与态度：“So there was only one diving season to extract the boat from the Rhone. \"We all thought the deadline was impossible,\" said Benoit Poinard, who led the diving team. Normally, Poinard explained, the Rhone is safe for diving only from late June to October; otherwise the current is too strong. Three or four months would not be enough to excavate Arles-Rhone 3.”（所以只有一个潜水季可以把这条船从罗讷河里取出。潜水队负责人贝努瓦·普瓦纳尔说：“我们都认为这个期限是不可能完成的。”普瓦纳尔解释说，通常罗讷河只有 6 月下旬到 10 月才适合潜水，其余时间水流太急。三四个月不足以挖出 Arles-Rhone 3。）题干把 “We all thought the deadline was impossible” 概括为 doubted（怀疑），把“期限”所指的内容（只有一个潜水季完成打捞）概括为 the barge could be raised in one diving season，两处一一对应；何况说话人正是 led the diving team 的 Poinard 本人。除此之外，原文还有 “Three or four months would not be enough” 这样的判断句支撑怀疑态度，因此答案为 TRUE。做题提示：直接引语中的主观判断（impossible、not enough）是判断题的高频依据，看到引号就要留意说话人与题干的对应关系。",
          "traps": [
            "为什么不是 FALSE：原文中 Poinard 明确说 “We all thought the deadline was impossible”，并进一步说三四个月不足以完成发掘，态度就是怀疑该期限内无法完成，与题干的 doubted 完全同向，没有相反信息，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到 Poinard 其人，还直接引用了他对期限的怀疑判断，信息充分且明确，不属于未提及，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The restorers were surprised to discover a silver coin in the barge.",
          "translation": "修复人员惊讶地发现驳船里有一枚银币。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "When the restorers were taking the boat apart, they found a silver coin dated to 30 BCE – the year before the battle of Actium – under the floorboards."
          },
          "synonyms": [
            "「The restorers」在原文原词复现：「When the restorers were taking the boat apart」（修复人员拆解这条船时）",
            "「a silver coin」在原文原词复现：「a silver coin dated to 30 BCE」（一枚年代为公元前 30 年的银币）",
            "「were surprised to discover」在原文中找不到任何对应：原文只写「they found」（他们发现），随后是「They guessed someone had left it there to bring good luck」（他们猜测有人把它留在那儿以求好运），只交代了推测，完全没写修复人员是否感到惊讶"
          ],
          "locatingTip": "定位：题干名词 restorers 与 silver coin 都是极具特征的关键词，第 6 段后半句两者同时出现，扫读时抓住 restorers 一词即可一步锁定。确定答案技巧：本题的落点是 were surprised（感到惊讶）这个情绪描述。原文用动词 found 客观陈述发现过程，之后写 They guessed someone had left it there to bring good luck（他们猜测有人把硬币放在那里以求好运），说明修复人员的好奇点在“硬币为何在此”，而不是“惊讶于竟然有硬币”。是否感到意外，原文一句未提，属于信息缺失，故判 NOT GIVEN。要特别警惕与 surprise 有关的词：本篇的 To his surprise 出现在第 2 段朗发现 amphora 时，与修复人员无关，不能张冠李戴。",
          "analysis": "第 6 段写 Arles-Rhone 3 沉没时的情形与船上的发现：“When the restorers were taking the boat apart, they found a silver coin dated to 30 BCE – the year before the battle of Actium – under the floorboards. They guessed someone had left it there to bring good luck. And it did – 2,000 years later.”（修复人员在拆解这条船时，在船底板下发现了一枚年代为公元前 30 年——也就是亚克兴海战前一年——的银币。他们猜测是有人把它放在那里求好运。而它确实带来了好运——2000 年之后。）原文提供的信息是：谁发现的（restorers）、在哪里发现（under the floorboards）、发现了什么（a silver coin dated to 30 BCE），以及他们对硬币用途的推测（求好运）。题干的落点却是 were surprised（感到惊讶），这是原文完全没有的情绪描写；原文只写 they found（发现），是客观动作。既然原文既没说“惊讶”，也没说“不惊讶”，按判断题规则属于信息缺失，判 NOT GIVEN。做题提示：情绪、态度类形容词（surprised、disappointed、delighted）与主观评价一样，是 NOT GIVEN 的高发点，除非原文出现同义的情绪词，否则不能凭“发现古币当然令人惊讶”的常识作答。",
          "traps": [
            "为什么不是 TRUE：原文只交代修复人员拆船时在底板下发现银币及其年代，并写出他们对硬币来历的猜测，从未出现 surprised、astonished、amazed 之类的词。注意本篇的 To his surprise 属于第 2 段朗的经历，与修复人员无关，不能据此判 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文有相反信息，即原文须说明修复人员“并不惊讶”。原文对他们的情绪没有任何交代，谈不上反驳，只能按信息缺失判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The barge was 34 metres long and was found by one of Long's 7 ________ in 2004.",
          "translation": "这艘驳船长 34 米，2004 年由朗的一位 ________ 发现。",
          "answer": "colleagues",
          "wordClass": "名词（复数，指同事；空格是介词 by 的宾语中心词，空格前是 one of Long's，one of 之后必须接可数名词复数，故填 colleagues，不加冠词）",
          "locating": {
            "paragraph": "3",
            "quote": "In 2004, one of his colleagues came across a 34-metre-long Roman barge."
          },
          "synonyms": [
            "「was found by one of Long's …」同义替换为原文的「one of his colleagues came across …」，主动的 came across（偶然遇到）被改写成被动的 was found by",
            "「Long's」同义替换为原文的物主代词「his」，回指 Luc Long",
            "「The barge was 34 metres long」与原文的「a 34-metre-long Roman barge」完全对应，数字与单位一致",
            "「in 2004」与原文句首的「In 2004」原词复现"
          ],
          "locatingTip": "定位：题干给出两个硬线索——年份 2004 与数字 34 metres，回到原文搜索 2004 或 34-metre-long，两句都落在第 3 段第 2 句，一步到位。确定答案技巧：题干说“由朗的一位某某发现”，原句是 one of his colleagues came across a 34-metre-long Roman barge，其中 came across 就是 found 的同义替换，his 对应 Long's，那么被 “one of” 修饰的角色就是答案：colleagues（同事）。语法上要特别小心：one of 后面只能接复数名词，若写 colleague 形式错误，虽然词义对也会失分；同时 ONE WORD ONLY 要求只写 colleagues 一词，不能写成 work colleagues、his colleagues 之类。",
          "analysis": "第 3 段第 2 句：“In 2004, one of his colleagues came across a 34-metre-long Roman barge.”（2004 年，他的一位同事偶然发现了一条 34 米长的罗马驳船。）笔记题干把这一句改写成 “The barge was 34 metres long and was found by one of Long's 7 ________ in 2004.”，改写路径是：主动句 one of his colleagues came across（某位同事偶然遇到）变为被动句 was found by，came across 与 found 同义，his 与 Long's 指同一人。因此空格所要填的正是“发现者”的身份名词 colleagues。从词性上判断，空格前有 one of Long's，one of 是“其中之一”的结构，其后必须是复数可数名词，所以答案必须写成复数 colleagues，与原文保持一致，也不能加 any 之类的限定词。抓住 came across 与 found 的替换、并注意 one of 后的复数要求，本题即可稳拿分。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "The wood had not decayed, but water had filled its cells, making the structure soft and 8 ________.",
          "translation": "木材没有腐烂，但水分充满了它的细胞，使整个结构变得柔软而 ________。",
          "answer": "spongy",
          "wordClass": "形容词（与前面的 soft 并列，作 make 的宾语补足语，描述结构的状态；保持原级，不加词尾变化）",
          "locating": {
            "paragraph": "4",
            "quote": "This was because although the wood of the boat had suffered no microbial decay, water had filled its cells, leaving the whole structure soft and spongy."
          },
          "synonyms": [
            "「The wood had not decayed」同义替换为原文的「the wood of the boat had suffered no microbial decay」（木材没有遭受微生物造成的腐烂）",
            "「water had filled its cells」与原文「water had filled its cells」原词复现",
            "「making the structure soft and …」同义替换为原文的「leaving the whole structure soft and spongy」，making 与 leaving 对应，the structure 与 the whole structure 对应",
            "「spongy」与原文中的「soft」以 and 并列，共同描述结构的性状"
          ],
          "locatingTip": "定位：题干的关键词是 wood、cells、structure、soft，其中 cells（细胞）一词在雅思阅读里较少见，非常独特，回原文搜索 cells 即落在第 4 段后半部描述船体状态的那句。确定答案技巧：题干说水充满细胞使结构“柔软而某某”，原文对应结构是 leaving the whole structure soft and spongy，其中 soft 对应题干的 soft，与 soft 并列的形容词 spongy（海绵状的、松软的）就是答案。填空时注意并列结构：题干用 soft and … 留空，说明所填词与 soft 词性一致、地位相当，都是形容词；ONE WORD ONLY 且按原文原形抄写 spongy，不要改写成 sponge（名词）或 spongy-like 之类。",
          "analysis": "第 4 段在讲打捞期限时解释了为什么要抢时间：“This was because although the wood of the boat had suffered no microbial decay, water had filled its cells, leaving the whole structure soft and spongy. If that water were to evaporate, the boat would collapse.”（这是因为，虽然船上的木材没有受到微生物造成的腐坏，但水已经充满了它的细胞，使整个结构变得柔软、海绵一般。要是这些水蒸发掉，船就会塌掉。）笔记题干几乎逐项对应前半句：The wood had not decayed 对应 the wood of the boat had suffered no microbial decay，water had filled its cells 原词复现，making the structure soft and 对应 leaving the whole structure soft and spongy，因此空格填与 soft 并列的形容词 spongy。从词性看，leaving the whole structure soft and spongy 是“leave 加宾语加形容词作宾补”的结构，soft 与 spongy 同为形容词补语；题干的 making 结构与之完全平行，所以空格应填形容词原形。同时可以借上文逻辑校验：正因结构变得松软如海绵、里面充满水，水一旦蒸发船体才会塌陷，spongy 与 collapse 的因果关系也印证了答案。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Normally, the Rhone is safe for diving only from late June to 9 ________.",
          "translation": "通常，罗讷河只有在 6 月下旬到 ________ 期间才适合潜水。",
          "answer": "October",
          "wordClass": "名词（月份名，属专有名词，首字母必须大写；空格在介词 to 之后，与 late June 一起构成 from ... to ... 时间区间，在句中作时间状语；填单数 October，不加冠词，不能写成复数）",
          "locating": {
            "paragraph": "5",
            "quote": "Normally, Poinard explained, the Rhone is safe for diving only from late June to October; otherwise the current is too strong."
          },
          "synonyms": [
            "「Normally」在原文原词复现：「Normally, Poinard explained, the Rhone is safe for diving」",
            "「is safe for diving only from late June to …」与原文「is safe for diving only from late June to October」逐字对应，只把终点月份留空",
            "「from late June to …」这一区间结构的另一端「late June」也原词复现，说明填的必须是同一句里 from … to … 结构对应的终点月份"
          ],
          "locatingTip": "定位：题干中的时间标志 late June 与主题词 the Rhone、diving 都是原文用词，第 5 段中部的 Normally, Poinard explained, the Rhone is safe for diving only from late June to … 与题干几乎逐字相同，扫读到 from late June 即可作答。确定答案技巧：题干把原文句子中的终点月份挖空，只要顺着 from late June to 往后读，紧跟的名词 October 就是答案。填写时注意两点：一是范围词 only（仅限）说明原文列出的是一个封闭区间，终点就是 October，不要臆想成 November（原文后文 November 是团队加班作业的时间，不是安全潜水期的常规终点）；二是 October 是月份专有名词，首字母必须大写，且是 ONE WORD ONLY 的单词形式。",
          "analysis": "第 5 段中 Poinard 解释任务为何艰难：“Normally, Poinard explained, the Rhone is safe for diving only from late June to October; otherwise the current is too strong.”（普瓦纳尔解释说，通常罗讷河只有在 6 月下旬到 10 月才适合潜水，其余时候水流太急。）笔记题干把这句话的时间区间照抄下来，仅将区间终点留空：“Normally, the Rhone is safe for diving only from late June to 9 ________.”，因此答案就是原文 from late June to 后面的 October。判定时要注意原文的逻辑作用：正因为常规安全期只有 6 月下旬到 10 月这几个月，“Three or four months would not be enough to excavate Arles-Rhone 3”（三四个月不够完成发掘）才成立，这也反过来验证答案应是 10 月这个终点，而不是别的月份。从词性看，空格位于介词 to 之后，需要名词或名词性成分，October 为月份专有名词，首字母大写，按原文形式填写即可。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "In 2011, because it hardly snowed in the Alps, the river's 10 ________ was very gentle.",
          "translation": "2011 年，因为阿尔卑斯山几乎没有下雪，河水的 ________ 非常平缓。",
          "answer": "current",
          "wordClass": "名词（单数，指河流的水流；空格作从句主语，其后的系动词是 was；空格前有所有格 the river's 限定，故用单数名词 current，不加复数、不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "It hardly snowed in the Alps that winter and that spring it barely rained. The Rhone's current was so gentle that the team got in the water by early May."
          },
          "synonyms": [
            "「it hardly snowed in the Alps」与原文「It hardly snowed in the Alps」原词复现",
            "「the river's …」同义替换为原文的「The Rhone's …」，用上位词 the river 指代罗讷河",
            "「was very gentle」同义替换为原文的「was so gentle that …」，very gentle 与 so gentle 程度对应",
            "「In 2011」对应原文前句的「Then 2011 arrived」，说明降雪稀少与水流平缓都发生在 2011 年"
          ],
          "locatingTip": "定位：题干给出两条特征明显的线索——地域词 the Alps 与形容词 gentle，第 5 段后部同时出现 It hardly snowed in the Alps 与 The Rhone's current was so gentle，扫读到 Alps 即可停下。确定答案技巧：题干说“河水的某某非常平缓”，原文对应结构是 The Rhone's current was so gentle that …，其中 the Rhone's 被改写成 the river's（上位词替换），so gentle 被改写成 very gentle，剩下被所有格限定的名词 current（水流）正是空格答案。填写时注意 the river's 已经提供了所有格限定，答案只写单数名词 current，不能写成 currents（复数）或 current's；也不要误填 snow 或 weather，那是原因部分（阿尔卑斯少雪）而非被描述“平缓”的对象。",
          "analysis": "第 5 段后半段讲 2011 年的天气如何帮了大忙：“Then 2011 arrived. It hardly snowed in the Alps that winter and that spring it barely rained. The Rhone's current was so gentle that the team got in the water by early May.”（接着 2011 年到了。那年冬天阿尔卑斯山几乎没有下雪，那年春天也几乎没下雨。罗讷河的水流如此平缓，以至于团队 5 月初就下水了。）笔记题干用 because 把因果关系理清：“In 2011, because it hardly snowed in the Alps, the river's 10 ________ was very gentle.”，即“少雪少雨”为因，“水流平缓”为果，后者正是原文 The Rhone's current was so gentle。答案因此是 current（水流）。从词性看，空格前 the river's 是所有格，其后需要一个名词中心词，且原文用单数 the Rhone's current，所以填单数名词 current 即可，不加冠词、不变复数。可以顺带记住本段的一条因果链：阿尔卑斯少雪、春天少雨，河水水流变缓，团队提前下水，工期才得以完成——这条逻辑链同时服务于后面的第 11 题。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The diving team lost only one 11 ________ to bad weather.",
          "translation": "潜水队只因恶劣天气损失了一个 ________ 的时间。",
          "answer": "week",
          "wordClass": "名词（单数，可数，表示时间单位；空格作动词 lost 的宾语，空格前有 only one 限定，故填单数 week）",
          "locating": {
            "paragraph": "5",
            "quote": "The team worked straight into November, losing only a single week to bad weather and completed the job."
          },
          "synonyms": [
            "「The diving team」同义替换为原文的「The team」，上文已交代该队由 Poinard 带领，即潜水队",
            "「lost only one …」同义替换为原文的「losing only a single week」，a single 与 one 同义，二者都表“仅仅一个”",
            "「to bad weather」与原文「to bad weather」原词复现，说明损失的原因",
            "“数量少”这一语气由原文的 only 与 a single 共同强调，与题干的 only one 完全对应"
          ],
          "locatingTip": "定位：题干关键词 bad weather 与数字 one 都出现在第 5 段后半句，原文写 The team worked straight into November, losing only a single week to bad weather，扫读到 bad weather 即可锁定。确定答案技巧：题干说“只因恶劣天气损失了一个某某”，原文对应结构 losing only a single week to bad weather，其中 a single 与 one 同义、bad weather 原词复现，剩下的名词 week（一周）就是答案。填写时注意两点：一是 only one 与 a single 均要求单数，答案写 week 而非 weeks；二是不要误填 November（那是工作持续到的时间点）或 weather（那是原因）等看似邻近但不合结构的词。",
          "analysis": "第 5 段描述团队如何抢在期限内完工：“The team worked straight into November, losing only a single week to bad weather and completed the job.”（团队一直工作到 11 月，只因天气恶劣损失了短短一周，就完成了任务。）笔记题干把它改写成 “The diving team lost only one 11 ________ to bad weather.”，改写方式是：主动的分词结构 losing only a single week to bad weather 变成主句谓语 lost only one … to bad weather，其中 a single 与 one 同义替换，bad weather 原词复现，失去的那个时间单位 week 被留空，因此答案是 week。结构上，lose … to … 是固定搭配，表示“因某原因而失去某物”，空格位于 only one 之后，需要单数可数名词；原文用 a single week 而非 weeks，也印证了单数形式。这道题与上文构成完整的时间线：正常安全期只有 6 月下旬到 10 月，团队却从 5 月初一直干到 11 月，只因天气损失一周，所以才能按期完工。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "The barge was carrying 33 tons of 12 ________ for building work.",
          "translation": "这艘驳船当时载着 33 吨用于建筑工程的 ________。",
          "answer": "stone",
          "wordClass": "名词（不可数，材料名；作介词 of 的宾语，说明所载货物，保持不可数形式 stone，不加复数、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "When Arles-Rhone 3 sank, it was carrying 33 tons of stone for building work."
          },
          "synonyms": [
            "「The barge」同义替换为原文的「Arles-Rhone 3」（即这条驳船的名字），并用代词「it」回指",
            "「was carrying 33 tons of …」与原文「was carrying 33 tons of stone」逐字对应，仅留空所载货物",
            "「for building work」与原文「for building work」原词复现，说明这批货物的用途"
          ],
          "locatingTip": "定位：题干给出两个极强的定位点——数字 33 tons 与用途短语 for building work，二者都出现在第 6 段首句，扫读全文数字 33 即可一步锁定。确定答案技巧：题干几乎照抄原文的 When Arles-Rhone 3 sank, it was carrying 33 tons of … for building work，只把货物名称挖空，介词 of 与 for building work 之间紧跟的名词 stone（石头）就是答案。填写时注意 of 后接名词，stone 在此为不可数材料名词，保持原形，不加复数也不加冠词；不要误填 tons（那是计量单位）或 building（那是用途的一部分，且 for building work 已在题面中出现）。",
          "analysis": "第 6 段首句交代沉船时的载货情况：“When Arles-Rhone 3 sank, it was carrying 33 tons of stone for building work. It had come from a quarry just north of Arles, and was probably heading towards a construction site further down the river.”（Arles-Rhone 3 沉没时正载着 33 吨用于建筑工程的石头。它来自阿尔勒以北的一处采石场，很可能正驶向河下游的一个建筑工地。）笔记题干 “The barge was carrying 33 tons of 12 ________ for building work.” 与首句几乎逐字相同，挖空处正是 of 与 for building work 之间的名词 stone。后续句子提供了有力的交叉验证：这批货来自 a quarry（采石场）、要送往 a construction site（建筑工地），货物自然就是 stone（石料），与前句的 for building work（用于建筑工程）在语义上严丝合缝。从词性看，空格位于介词 of 之后，需要名词或名词性成分作 of 的宾语；stone 表示材料时不加复数，按原文原形填写即可。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Under the floorboards, restorers found a silver 13 ________ dated to 30 BCE.",
          "translation": "在船底板下，修复人员发现了一枚年代为公元前 30 年的银质 ________。",
          "answer": "coin",
          "wordClass": "名词（单数，可数；空格前有不定冠词 a 和形容词 silver，一起构成名词短语 a silver coin，整体作 found 的宾语，故填单数名词 coin）",
          "locating": {
            "paragraph": "6",
            "quote": "they found a silver coin dated to 30 BCE – the year before the battle of Actium – under the floorboards. They guessed someone had left it there to bring good luck."
          },
          "synonyms": [
            "「restorers found」同义替换为原文的「the restorers were taking the boat apart, they found」，动作与主体一致",
            "「Under the floorboards」与原文「under the floorboards」原词复现，只是题干把它提前作状语",
            "「a silver …」与原文「a silver coin」对应，silver 为材料定语",
            "「dated to 30 BCE」与原文「dated to 30 BCE」完全一致，年代直接复现"
          ],
          "locatingTip": "定位：题干提供两个硬线索——介词短语 under the floorboards 与年代 30 BCE，两者在第 6 段后部同一句中同时出现，扫读数字 30 BCE 即可一步定位。确定答案技巧：原文句为 “When the restorers were taking the boat apart, they found a silver coin dated to 30 BCE – the year before the battle of Actium – under the floorboards.”，把 under the floorboards 挪到句首作状语后，剩余的 a silver … dated to 30 BCE 与题干完全平行，其中被 silver 修饰、被 dated to 30 BCE 后置限定的名词就是 coin（硬币）。从语法看，空格前有不定冠词 a，说明所填为单数可数名词；也不要误填 silver（那是修饰语，若填 silver 则题干变成 a silver silver，结构不通）。",
          "analysis": "第 6 段后部写修复过程中的意外收获：“When the restorers were taking the boat apart, they found a silver coin dated to 30 BCE – the year before the battle of Actium – under the floorboards. They guessed someone had left it there to bring good luck. And it did – 2,000 years later.”（修复人员在拆解这条船时，在船底板下发现了一枚年代为公元前 30 年——也就是亚克兴海战前一年——的银币。他们猜测是有人把它留在那儿求好运。而它确实带来了好运——2000 年之后。）笔记题干把语序调整为 “Under the floorboards, restorers found a silver 13 ________ dated to 30 BCE.”，主干 found a silver … dated to 30 BCE 与原文的 found a silver coin dated to 30 BCE 完全吻合，因此空格填 coin。这个答案还能由后续两句间接验证：They guessed someone had left it there to bring good luck（有人把它留下求好运）以及 And it did（它确实灵验了），其中代词 it 回指的是一件可随身携带、能带来好运的小物件，正是硬币。从词性看，空格位于不定冠词 a 与形容词 silver 之后，需要一个单数可数名词作 found 的宾语，故填 coin，保持原文单数原形。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
