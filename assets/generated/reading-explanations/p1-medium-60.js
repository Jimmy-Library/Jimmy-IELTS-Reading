(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-60", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-60",
  "meta": {
    "examId": "p1-medium-60",
    "title": "Sorry—who are you 脸盲症",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–7 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 7
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Before attending college, Jacob was capable of recognising people he knew well.",
          "translation": "上大学之前，雅各布（Jacob）能够认出他熟悉的人。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "He had had the same trouble all his life. Friends and relatives would greet him and he would have no idea who they were."
          },
          "synonyms": [
            "“Before attending college” 对应原文的时间背景 “It was Jacob Hodes's first day at college.”，指上大学之前的那段人生",
            "“people he knew well” 同义替换为原文的 “Friends and relatives”（朋友和亲戚）",
            "“was capable of recognising” 与原文 “he would have no idea who they were”（完全不知道他们是谁）方向相反，构成事实冲突"
          ],
          "locatingTip": "定位：题干的关键词 Jacob 与 college 都集中在第 1 段开头，第 1 段讲述他大学第一天以及此后一年认不出那位学长 Daniel Byrne 的经历。确定答案技巧：判断“上大学之前他的识别能力如何”，必须看第 1 段对过去状态的总结——“He had had the same trouble all his life.”（他这一辈子一直有同样的困扰），紧接着又举例说明：“Friends and relatives would greet him and he would have no idea who they were.”（亲友跟他打招呼，他却完全不知道是谁）。题干说他在上大学前“能认出熟悉的人”，而原文说这一困扰伴随他一生、连亲友都认不出，两者直接对立，故判 FALSE。注意题干用 Before attending college 设了一个时间圈套，答案依据并不在第 1 段开头那句，而在同一段最后两句对长期状况的概括。",
          "analysis": "第 1 段前两句交代背景：Jacob Hodes 上大学第一天，由二年级学生 Daniel Byrne 带他参观校园，接下来一年他却一直“无视”对方。第 3 至 5 句补充说明这不是有意为之：“This behaviour wasn't intentional. Jacob just couldn't recollect what his fellow student looked like.”（这一行为并非故意，他只是想不起这位同学长什么样）。本段最后两句是本题的判分依据：“He had had the same trouble all his life. Friends and relatives would greet him and he would have no idea who they were.”（他这一辈子一直有同样的困扰。朋友和亲戚跟他打招呼，他根本不知道他们是谁）。题干把时间限定在“上大学之前（Before attending college）”，并声称他“was capable of recognising people he knew well（能认出熟悉的人）”。原文的信息有三层含义：一是这种识别困难是长期的（all his life，涵盖上大学之前）；二是受影响的对象恰恰是最熟悉的人（Friends and relatives）；三是表现在 greeting 这种日常场合。换言之，原文说的是“上大学之前他也认不出熟人”，与题干完全相反，属于信息矛盾，因此答案是 FALSE。做本题时要特别警惕 all his life、always 这类涵盖全时间段的表达，它们会把题干的时间限定条件一并否定。",
          "traps": [
            "为什么不是 TRUE：原文明确写 “He had had the same trouble all his life.”，即这种认不出人的困扰贯穿他一生，上大学之前同样存在；再加 “Friends and relatives would greet him and he would have no idea who they were.”，连最熟悉的亲友都认不出来，与题干“能认出熟悉的人”截然相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“上大学之前他的识别能力”给出了明确的、而且是相反的信息（all his life 加亲友例子），并非未提及，按判断题规则应判 FALSE；考生容易误以为“题目只说他上大学第一天的事，上大学之前没写”，其实 all his life 已把该时间段覆盖了。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Researchers believe that prosopagnosia may be a growing problem.",
          "translation": "研究人员认为脸盲症可能是一个日益严重的问题。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "According to researchers, he is far from alone. In fact, the condition is not that uncommon, but until a few years ago only a few dozen cases had ever been described, and all of these had been caused by brain injury."
          },
          "synonyms": [
            "“prosopagnosia” 在原文中由上一句的名词复现为代词 “the condition”，指同一疾病",
            "“Researchers believe” 同义替换为原文的 “According to researchers”，表示研究人员的看法",
            "“may be a growing problem” 在原文中找不到任何对应：原文只说 “not that uncommon”（并不罕见）和过去“只描述过几十例”，谈的是认知程度而非患病率的增长"
          ],
          "locatingTip": "定位：researchers 与 prosopagnosia 这类词集中在第 2 段，第 2 段主要交代脸盲症的两种成因类型以及学界过去对它的认识。确定答案技巧：本题是典型的“趋势／增长类”陷阱词题。growing（日益严重、越来越多）要求原文给出“随时间推移而增多”的证据，而原文给的是两条静态信息——一是 “the condition is not that uncommon”（这种病并不那么罕见），二是 “until a few years ago only a few dozen cases had ever been described”（几年前被记录下来的病例只有几十例）。后者说的是“过去记录得少、最近才认识到发育型”，属于研究史而非疾病本身的增长；原文也没有任何研究人员表示该病在增多。信息缺失，故判 NOT GIVEN。",
          "analysis": "第 2 段讲 Jacob 五年前被确诊为 prosopagnosia（脸盲症），并借研究人员之口说明这种病并不罕见。相关句子为：“According to researchers, he is far from alone.”（据研究人员说，他绝非个例）“In fact, the condition is not that uncommon, but until a few years ago only a few dozen cases had ever been described, and all of these had been caused by brain injury.”（事实上，这种病并不那么罕见，但直到几年前被描述过的病例也只有几十例，而且这些全都是由脑损伤造成的）以及末句“Recently, though, researchers identified a second form of face blindness, developmental prosopagnosia, which is either present from birth or develops very early in life.”（不过最近研究人员确认了第二种脸盲——发育型脸盲症，它要么出生即有，要么在生命早期形成）。把这些信息与题干比对：原文的说法是“患病人数不少（far from alone、not that uncommon）”，以及“学界直到近年才认识清楚”，都没有说患病率在上升、形势在恶化。题干中的 growing 属于趋势判断，原文既没有确认也没有否认，属于完全没有提及的信息，因此答案是 NOT GIVEN。要区分“研究变多了”和“病变多了”——原文所谓的 recent / recently 修饰的是研究进展，不是疾病本身。",
          "traps": [
            "为什么不是 TRUE：原文只给出“并不罕见”“并非个例”这类关于患病普遍程度的静态描述，从未出现 increase、rise、more common than before 之类表示增长的说法；题干里的 growing 是原文没有作出的判断，不能凭“最近研究变多”推断“问题在变大”，所以不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文有与题干相反的信息，例如“患病率保持稳定”或“问题并不严重”。原文对此没有表态，只是没有谈到趋势，因此不属于信息矛盾，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "It is harder to identify developmental prosopagnosia in babies than in young children.",
          "translation": "在婴儿身上识别发育型脸盲症比在幼儿身上更难。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Recently, though, researchers identified a second form of face blindness, developmental prosopagnosia, which is either present from birth or develops very early in life."
          },
          "synonyms": [
            "“developmental prosopagnosia” 在原文中原词复现，指同一种先天或早年形成的脸盲症",
            "“in babies” 对应原文的 “present from birth”（出生即有），“in young children” 对应 “develops very early in life”（生命早期形成）",
            "“It is harder to identify … than …” 这一比较在原文中没有任何对应：原文只说明该病出现的时间，没有比较不同年龄段被识别出来的难易"
          ],
          "locatingTip": "定位：题干的核心专有概念 developmental prosopagnosia 在第 2 段最后一句，用这个词就能跳过前文。确定答案技巧：识别“比较级／难度对比”题型——题干用了 harder … than …，要求原文给出两个对象的难度对比。回原文核对会发现，原文只说明发育型脸盲症的两个特点：either present from birth or develops very early in life（要么出生即有，要么生命早期形成），这句话谈的是发病时间，不是诊断难度；前后也没有出现 identify、diagnose、difficult 之类的比较。既没有说婴儿更难确诊，也没有说幼儿更易确诊，信息缺失，故判 NOT GIVEN。切记不要把“出生就有”自行推演成“出生时难以发现”。",
          "analysis": "第 2 段交代了脸盲症的两大类别：一类是过去描述过的、由脑损伤造成的（all of these had been caused by brain injury），另一类是近年才确认的发育型脸盲症，原文的界定是“which is either present from birth or develops very early in life”（它要么出生时即存在，要么在生命早期形成）。题干的落点却是一个难度比较：“It is harder to identify developmental prosopagnosia in babies than in young children.”（在婴儿身上识别发育型脸盲症比在幼儿身上更难）。原文给出的信息只有两点，都与时间有关（from birth 与 very early in life），完全属于界定发病时点的表述；而“识别／诊断的难易程度”在原文中没有任何句子涉及，全文其他地方也没有讨论不同年龄段的诊断难度。题干把一个原文未作比较的对象强行拉成比较关系，属于无据推理，因此答案是 NOT GIVEN。这类题的判断口诀是：题干出现比较级、最高级或因果时，先问原文有没有同向比较；只提到两个概念而没比较，就是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说这种脸盲症 from birth 或 very early in life 就会出现，完全没有提到婴儿阶段是否难以被发现，更没有说比幼儿阶段更难。“出生即有”不等于“出生时难诊断”，属于额外推理，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文给出相反的难度关系（例如“婴儿比幼儿更容易发现”）。原文同样没有作出这种比较，只是没有谈，属于信息缺失，所以也不能选 FALSE。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "A German study seems to support the Harvard and UCL research findings.",
          "translation": "一项德国研究似乎支持哈佛和伦敦大学学院（UCL）的研究发现。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Then in August, Martina Gruter and colleagues at the Institute for Human Genetics in Munster, Germany, similarly reported that 2.5 per cent of 700 secondary-school pupils they had tested had trouble recognising faces."
          },
          "synonyms": [
            "“A German study” 同义替换为原文的 “Martina Gruter and colleagues at the Institute for Human Genetics in Munster, Germany”",
            "“the Harvard and UCL research findings” 对应原文上一句 “a team from Harvard University in the US and University College London (UCL) announced the results of a web survey of 1,600 people”",
            "“seems to support” 同义替换为原文的 “similarly reported”（同样报告出相近的结果）"
          ],
          "locatingTip": "定位：题干里有两组专有名词——Harvard、UCL 与 German，全部集中在第 3 段，只需精读该段即可。确定答案技巧：判断“两个研究是否互相支持”，关键看原文是否出现表示结果一致的副词或连接词。第 3 段先讲哈佛与 UCL 的网络调查：1,600 人中有多达 2% 存在一定程度的脸盲；紧接着讲德国明斯特的 Martina Gruter 团队：700 名中学生中有 2.5% 有识别面孔的困难，并用 similarly（同样地）一词把两项结果并列起来。两个百分比高度接近，加上 similarly 这一明确的呼应词，说明德国研究的结果与哈佛／UCL 属于同一方向、互为印证，故判 TRUE。",
          "analysis": "第 3 段前两句构成对比与呼应。第一句：“In May a team from Harvard University in the US and University College London (UCL) announced the results of a web survey of 1,600 people, suggesting that up to 2 per cent of people have some degree of face blindness.”（5 月，一个来自美国哈佛大学与伦敦大学学院的团队公布了针对 1600 人的网络调查结果，表明多达 2% 的人有某种程度的脸盲）。第二句即本题的定位句：“Then in August, Martina Gruter and colleagues at the Institute for Human Genetics in Munster, Germany, similarly reported that 2.5 per cent of 700 secondary-school pupils they had tested had trouble recognising faces.”（随后在 8 月，德国明斯特人类遗传学研究所的 Martina Gruter 及同事同样报告，他们测试的 700 名中学生中有 2.5% 存在识别面孔的困难）。两句的呼应关系非常明显：调查对象不同（普通网络受访者与中学生），比例却分别为约 2% 与 2.5%，方向一致；作者还特意用 similarly（同样地）这个副词点明两次结论的相似性，末句“The results of the surveys took everyone by surprise.”（这些调查结果让所有人吃惊）也把两项调查并称为 surveys。题干说“一项德国研究似乎支持哈佛和 UCL 的研究发现”，正是原文 similarly 所传达的含义，因此答案是 TRUE。做题时要抓两个信号：一是国别与机构名的对应（Germany 对 Harvard／UCL），二是副词 similarly，它通常就是“支持、印证”这类判断题的判分标志。",
          "traps": [
            "为什么不是 FALSE：原文用 similarly 把两项研究并列，且给出的比例（约 2% 与 2.5%）十分接近，方向完全一致，不存在任何矛盾信息，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅分别给出了两项研究的具体结果，还用 similarly 明确建立了“结果相似”的关系，属于已经交代且与题干一致的信息，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "In general, prosopagnosics are aware that other people can recognise faces more easily than they can.",
          "translation": "总体而言，脸盲症患者知道别人比他们更容易认出面孔。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Prosopagnosics almost always know that they have trouble recognising people, but they often don't realise that other people have better recognition skills than they do, says Brad Duchaine, a researcher at UCL."
          },
          "synonyms": [
            "“In general” 同义替换为原文的 “almost always” 与 “often”",
            "“other people can recognise faces more easily than they can” 同义替换为原文的 “other people have better recognition skills than they do”",
            "“are aware” 与原文的 “they often don't realise”（往往并未意识到）正好相反，构成事实矛盾"
          ],
          "locatingTip": "定位：题干关键词 prosopagnosics 与 recognise 在第 4 段集中出现，且该段短小，只需读两句。确定答案技巧：本题的着眼点是 but 前后的转折。原文先承认一点——“Prosopagnosics almost always know that they have trouble recognising people”（患者几乎总是知道自己有认人的困难），随即用 but 转折：“they often don't realise that other people have better recognition skills than they do”（他们往往没有意识到别人认人的能力比他们强）。题干恰恰把后半句的否定内容写成了肯定（are aware），与原文相互矛盾，故判 FALSE。做这种题要盯住让步转折结构中的后半部分，雅思常把 but 之后的否定表述改写成肯定来设错。",
          "analysis": "第 4 段的主题是“患者未必知道自己的识别能力有欠缺”。前一句写道：“It seems that if you have never known what it is to recognise a face, you don't necessarily know that you are supposed to be able to.”（看起来，如果你从不知道“认出一张脸”是什么感觉，你也未必知道自己本来应该能做到这件事）。接着是本段的核心句，也是本题定位句：“Prosopagnosics almost always know that they have trouble recognising people, but they often don't realise that other people have better recognition skills than they do, says Brad Duchaine, a researcher at UCL.”（伦敦大学学院的研究员 Brad Duchaine 说，脸盲症患者几乎总是知道自己认人有困难，但他们往往没有意识到别人的识别能力比他们更强）。题干把句子的第二部分整体做了改写：“other people can recognise faces more easily than they can” 对应 “other people have better recognition skills than they do”，改写没有问题；但 “are aware（意识到）” 与原文的 “often don't realise（往往没有意识到）” 正好是相反的意思。原文承认的是患者知道自己“有困难”，否认的是患者知道“别人比自己强”，而题干的落脚点恰恰是后者，因此答案是 FALSE。做题提示：本题题干前半句 “prosopagnosics are aware” 确实与原文前半句一致，很容易让人误选 TRUE；必须一路读到 but 之后，才能发现被否定的是题干真正要问的那一层信息。",
          "traps": [
            "为什么不是 TRUE：原文说患者“almost always know that they have trouble recognising people”，即他们只知道“自己有困难”这一点，而题干要问的是他们是否意识到“别人比他们更容易认出面孔”，原文对此的表述是 “they often don't realise”，明确否定，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“患者是否意识到别人更强”给出了直接且相反的表态（often don't realise），并非没有提及，所以按规则判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "In most cases, prosopagnosics have developed ways to deal with their problem.",
          "translation": "在大多数情况下，脸盲症患者已经发展出应对自身问题的办法。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Despite these issues, the majority of developmental prosopagnosics possess strategies that allow them to get around their difficulty"
          },
          "synonyms": [
            "“In most cases” 同义替换为原文的 “the majority of”",
            "“have developed ways” 同义替换为原文的 “possess strategies”（拥有策略／办法）",
            "“to deal with their problem” 同义替换为原文的 “that allow them to get around their difficulty”（让他们绕开困难）"
          ],
          "locatingTip": "定位：题干关键词 prosopagnosics 与 problem 对应第 5 段首句，该段开头就用 Despite these issues 承接上文，一句之内即可锁定。确定答案技巧：本题考“比例是否与原文一致”。题干用 In most cases 表示主体部分，原文用的正是 the majority of（大多数）；题干说“已经形成办法（have developed ways）”，原文说“possess strategies … to get around their difficulty（拥有绕开困难的策略）”，同义对应。三处改写一一吻合，因此判 TRUE。注意不要把 majority 误解为“全部”——原文并未说所有患者都有策略，只说大多数；但题干用的也是“大多数”，程度一致，不构成偷换。",
          "analysis": "第 5 段承接上段讨论患者的实际应对能力。首句即本题定位句：“Despite these issues, the majority of developmental prosopagnosics possess strategies that allow them to get around their difficulty”（尽管存在这些问题，大多数发育型脸盲症患者仍拥有能让他们绕开困难的策略），紧接破折号后是具体举例：“for instance, by recognising hair, clothing, or a person's way of speaking”（例如通过辨认头发、衣着或说话方式），并进一步说明：“so, unless they see a familiar person out of context, with a new hairstyle or in different clothes, they can recognise people just fine.”（因此，除非在脱离情境的场合遇到换了发型或换了衣服的熟人，他们认人其实没有问题）。把这些信息与题干对照：In most cases 对应 the majority of；have developed ways 对应 possess strategies；to deal with their problem 对应 to get around their difficulty；破折号后的举例（辨认头发、衣着、说话方式）正是题干所说的“办法”的具体内容。三层信息方向一致、程度相当，因此答案是 TRUE。做题时要留意原文的让步结构 Despite these issues——它只表示“尽管有困难”，并不会削弱后面“大多数人有应对策略”这一结论。",
          "traps": [
            "为什么不是 FALSE：原文明确说 the majority of（大多数）患者 possess strategies（拥有策略），并给出辨认头发、衣着、说话方式等具体的应对办法，与题干“大多数情况下已有应对办法”完全一致，没有任何矛盾点，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅给出了比例（the majority of），还列举了具体的应对手段，信息完整且与题干同向，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The study of prosopagnosia may help neuroscientists to treat different kinds of brain injury.",
          "translation": "对脸盲症的研究或许能帮助神经科学家治疗不同类型的脑损伤。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Even so, the discovery of developmental prosopagnosia has attracted attention from neuroscientists keen to discover what is different about the brain of face-blind people. This difference, they believe, could help solve the problem of how the brain deals with information in general, not just visual data."
          },
          "synonyms": [
            "“neuroscientists” 在原文中原词复现",
            "“The study of prosopagnosia may help …” 同义替换为原文的 “the discovery of developmental prosopagnosia has attracted attention from neuroscientists … This difference … could help solve the problem”",
            "“to treat different kinds of brain injury” 在原文中没有任何对应：原文说的是帮助解决“大脑如何处理信息”这一普遍性问题，并未涉及治疗脑损伤"
          ],
          "locatingTip": "定位：题干关键词 neuroscientists 是全文唯一的学科身份词，出现在第 5 段第 2 句，用它可以一步跳到 Even so 之后的那两句话。确定答案技巧：本题的判定点是宾语——“神经科学家关心的结果是什么”。原文说该发现“could help solve the problem of how the brain deals with information in general, not just visual data”（有助于解决大脑总体上如何处理信息、而不只是视觉数据这一问题），甚至在末句给出了具体方向：大脑是否具有专门处理特定任务的分区。题干却把它替换成 “treat different kinds of brain injury（治疗各种脑损伤）”，而 brain injury 只在第 2 段出现过一次，且是在讲旧式脸盲症的成因（all of these had been caused by brain injury），与“研究能帮神经科学家治脑损伤”毫无关系。信息缺失且被改写，故判 NOT GIVEN。",
          "analysis": "第 5 段后半部分讲这项研究的学术价值：“Even so, the discovery of developmental prosopagnosia has attracted attention from neuroscientists keen to discover what is different about the brain of face-blind people.”（即便如此，发育型脸盲症的发现还是引起了神经科学家的关注，他们急于弄清脸盲者的大脑究竟有何不同）“This difference, they believe, could help solve the problem of how the brain deals with information in general, not just visual data. In other words, it may show whether the brain has specialised parts for specific tasks or is more of a general-purpose information processor.”（他们相信，这一差异有助于解决“大脑总体上如何处理信息、而不只是处理视觉数据”的问题；换言之，它可能揭示大脑究竟是拥有处理特定任务的专门分区，还是更像一个通用的信息处理器）。可见原文谈的是认知神经科学层面的理论意义——信息处理机制、功能分区，完全没有把研究与脑损伤治疗联系起来。题干把“有助于弄清大脑如何处理信息”偷换成“有助于治疗不同类型的脑损伤（treat different kinds of brain injury）”，其中 treat 是原文没有的内容，brain injury 虽在第 2 段出现过，但指的是旧式脸盲症的成因，与“治疗”无关。原文既没说研究可以治疗脑损伤，也没说不能，属于信息缺失，因此答案是 NOT GIVEN。做题提示：brain injury 一词在全文第 2 段确实出现过，但它描述的是早期病例的成因，属于同一词汇在不同话题下的干扰性复现，不能当作本题依据。",
          "traps": [
            "为什么不是 TRUE：原文说的是研究有助于理解大脑的信息处理方式（help solve the problem of how the brain deals with information），完全没有提到临床治疗；题干中的 treat 是原文没有出现的信息，而 brain injury 虽在第 2 段出现过，指的却是旧式脸盲症的成因，不能当作本题依据，两者属于同义改写之外的额外添加，不能选 TRUE。",
            "为什么不是 FALSE：原文没有否认研究能帮助治疗脑损伤，只是根本没有谈到临床治疗这一话题；缺少相反信息，只能按信息缺失判 NOT GIVEN，而不是 FALSE。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "As well as being unable to recognise facial features, prosopagnosics may also have problems recognising commonly seen 8 ________ and objects.",
          "translation": "除了无法识别面部特征之外，脸盲症患者还可能在识别常见的 ________ 和物品时有困难。",
          "answer": "animals",
          "wordClass": "名词（可数名词复数，与后面的 objects 并列作 recognising 的宾语；原文用复数 animals，须保持复数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "Some have problems only with faces, while others have trouble with ordinary everyday objects and, so it turns out, animals which would normally be familiar as well."
          },
          "synonyms": [
            "“prosopagnosics may also have problems recognising” 同义替换为原文的 “others have trouble with …”",
            "“commonly seen … and objects” 同义替换为原文的 “ordinary everyday objects and … animals which would normally be familiar as well”",
            "题干的语序为“空格加 objects”，与原文 “objects … and animals” 的语序正好相反，需按并列关系还原"
          ],
          "locatingTip": "定位：笔记的栏目是 Differences in prosopagnosics（脸盲症患者的差异），对应原文第 6 段——该段首句就用 “no two prosopagnosics are the same”（没有两个脸盲症患者是一样的）点题。抓关键词 faces 与 objects 即可锁定第 6 段第 2 句。确定答案技巧：题干说患者除了认不出面部特征，识别常见的“空格”和物品也有困难，空格与 objects 并列，因此要找原文中与 objects 并列的那一类事物。原文表述为 “ordinary everyday objects and, so it turns out, animals which would normally be familiar as well”，即除了日常物品，连本来应该熟悉的动物也认不出；commonly seen 对应 ordinary everyday 与 normally be familiar，故空格填 animals。填词时注意：一、只能写一个词，不能写 animals and objects；二、原文为复数，须写 animals 而非 animal。",
          "analysis": "第 6 段开门见山：“One issue, however, that will present challenges for researchers is that no two prosopagnosics are the same.”（但有一个问题会给研究者带来挑战：没有两个脸盲症患者是完全相同的）。第 2 句即本题定位句：“Some have problems only with faces, while others have trouble with ordinary everyday objects and, so it turns out, animals which would normally be familiar as well.”（有些人只对面孔有困难，而另一些人连日常物品也有困难，而且事实证明，连本来应该熟悉的动物也一样）。题干的句式是把原文的并列结构倒过来写：题干是 “commonly seen 8 … and objects”，原文是 “ordinary everyday objects and … animals which would normally be familiar as well”，其中 ordinary everyday 与 commonly seen 对应，which would normally be familiar 也与 commonly seen 呼应，可见空格要填的是 animals。原句的 so it turns out（事实证明）还带有“研究结果出乎意料”的意味，说明这一类别是研究者后来才发现的，正好构成笔记里“除物品之外另外一类”的信息点。答案形式：名词复数 animals，与并列的 objects 保持数的一致，符合 ONE WORD ONLY 的要求。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Some also have problems recognizing the 9 ________ on someone else's face.",
          "translation": "有些人还在识别别人脸上的 ________ 时有困难。",
          "answer": "emotion",
          "wordClass": "名词（可数名词单数，指面部传达的具体某种情绪；位于定冠词 the 之后作 recognizing 的宾语，保持原文单数形式 emotion）",
          "locating": {
            "paragraph": "6",
            "quote": "When some have been tested they could identify the emotion that was conveyed on another's face, even though the face itself seemed unfamiliar, while for other subjects this was an impossibility."
          },
          "synonyms": [
            "“on someone else's face” 同义替换为原文的 “on another's face”",
            "“Some also have problems recognizing” 对应原文的反面表述 “while for other subjects this was an impossibility”（对另一些受试者而言这不可能做到）",
            "“the emotion” 在原文中原词复现，是 “identify” 的宾语，即被辨认的对象"
          ],
          "locatingTip": "定位：题干关键词 emotion 在全文只出现一次，位于第 6 段第 4 句，用它定位最快；若从 face 入手会撞上同段多个句子，效率更低。确定答案技巧：题干说“有些人识别别人脸上的某样东西有困难”，而原文是先讲“有些人做得到（could identify the emotion …）”，紧接着用 while 转折指出“另一些受试者却做不到（this was an impossibility）”。雅思笔记填空常把原文的分述（有些人能／有些人不能）压缩成“有些人在某方面有困难”，因此被识别的对象就是空格答案：emotion。注意不要填 unfamiliar 或 impossibility，它们描述的是脸的状态与结果，不是被辨认的对象；也不要写成 emotions 复数，原文为单数不可数形式。",
          "analysis": "第 6 段第 4 句是本题定位句：“When some have been tested they could identify the emotion that was conveyed on another's face, even though the face itself seemed unfamiliar, while for other subjects this was an impossibility.”（在测试中，一些受试者能够辨认出别人脸上传达的情绪，尽管那张脸本身看上去很陌生；而对另一些受试者来说，这是不可能做到的）。这句话包含两个信息层：一是受试者能够辨认的对象是 “the emotion that was conveyed on another's face”（别人脸上传达的情绪），即便脸本身陌生也不影响；二是用 while 引出对照——“for other subjects this was an impossibility”（另一些受试者做不到）。题干把第二层的信息重组为“有些人在识别别人脸上的这一对象时有困难”，正对应原文的 while 分句；被识别的东西就是 emotion。从语法看，空格前有定冠词 the，说明要填一个特指的名词，emotion 在原文中正是 “the emotion that was conveyed on another's face”，形式与题干完全吻合。此外要注意替换关系：another's face 与题干 someone else's face 同义，是本句与题干之间的确认信号。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Prosopagnosia may be caused by just one 10 ________, according to Martina Gruter.",
          "translation": "据玛蒂娜·格鲁特（Martina Gruter）所说，脸盲症可能仅由一种 ________ 引起。",
          "answer": "gene",
          "wordClass": "名词（可数名词单数，空格前有 one 限定，故填单数 gene，不加复数、不加冠词）",
          "locating": {
            "paragraph": "7",
            "quote": "Having looked at 38 cases in seven families, the German team believe they have good evidence that a single gene could be responsible."
          },
          "synonyms": [
            "“just one” 同义替换为原文的 “a single”",
            "“may be caused by” 同义替换为原文的 “could be responsible”（可能是原因）",
            "“according to Martina Gruter” 对应原文本段首句的研究归属 “In Martina Gruter's study” 以及定位句中的 “the German team”"
          ],
          "locatingTip": "定位：笔记栏目是 Causes of prosopagnosia，人名 Martina Gruter 出现在第 7 段第 1 句，扫到该名字即可确认答案在第 7 段。确定答案技巧：题干的限定语是 just one（仅一种），回原文找与之对应的“单一”表述，即 a single gene；一个 single 对应 just one，被它修饰的名词 gene 就是答案。填词时不要误填修饰成分：single 与 a 都只是限定词，不能作为答案；responsible 是形容词，也排除。答案取名词原形 gene。",
          "analysis": "第 7 段讲脸盲症的遗传证据。首句交代样本来源：“In Martina Gruter's study, the prosopagnosics who agreed to have their parents and relatives tested reported at least one relative with the condition.”（在 Martina Gruter 的研究中，同意让父母和亲属接受测试的患者都报告说至少有一位亲属也有这种病）。第 2 句即本题定位句：“Having looked at 38 cases in seven families, the German team believe they have good evidence that a single gene could be responsible.”（在考察了七个家庭中的 38 个病例后，这个德国团队相信他们有充分证据表明单一基因可能是原因）。题干把该句重组为“Prosopagnosia may be caused by just one 10 …, according to Martina Gruter”，其中 just one 对应 a single，may be caused by 对应 could be responsible，答案是被“单一”修饰的名词 gene。注意本段后半部分 Duchaine 的观点（thinks other factors might be more significant）与 Gruter 的主张不同，做题时要认准题干限定的人名，只取 Gruter 团队的说法，不要被 other factors 干扰。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "It may also be caused by a defect in the 11 ________ eye, according to Brad Duchaine.",
          "translation": "据布拉德·杜沙因（Brad Duchaine）所说，它也可能由 ________ 眼的缺陷引起。",
          "answer": "left",
          "wordClass": "形容词（left，作 eye 的前置定语，表示“左侧的”；原文以 the left one 的形式出现，填词时还原为修饰 eye 的形容词 left）",
          "locating": {
            "paragraph": "7",
            "quote": "He refers to studies of babies born with a condition which means the eye's lens is not clear, and when it's the left one, being unable to see through this eye during the first two months of life is a major risk factor for prosopagnosia."
          },
          "synonyms": [
            "“a defect in the left eye” 同义替换为原文的 “the eye's lens is not clear … when it's the left one”",
            "“according to Brad Duchaine” 对应原文的 “He refers to studies of babies …”，其中 He 回指上一句出现的研究者 Duchaine",
            "“may also be caused by” 同义替换为原文的 “is a major risk factor for prosopagnosia”"
          ],
          "locatingTip": "定位：人名 Brad Duchaine 在第 7 段第 3 句（Duchaine also has some evidence …），紧接着的 “He refers to studies of babies …” 就是以 He 开头的本空所在句，找到 Duchaine 后往下读一句即可。确定答案技巧：题干问的是“哪只眼睛有缺陷”，原文的说法是 “when it's the left one”（当问题出在左眼时），其中 one 回指前文的 the eye，所以修饰语 left 就是答案。同时注意原文的条件结构：lens is not clear（晶状体不透明）是基本条件，left one 是进一步限定，只有左眼才构成重大风险因素（major risk factor）。因此答案取形容词 left，与题干中作 eye 前置定语的语法位置吻合，且符合 ONE WORD ONLY。",
          "analysis": "第 7 段后半部分转向 Duchaine 的观点：“Duchaine also has some evidence that face blindness could be inherited but thinks other factors might be more significant.”（Duchaine 也有一些证据表明脸盲可能遗传，但他认为其他因素可能更为重要）接着是本题定位句：“He refers to studies of babies born with a condition which means the eye's lens is not clear, and when it's the left one, being unable to see through this eye during the first two months of life is a major risk factor for prosopagnosia.”（他提到了对一类婴儿的研究：这些婴儿天生晶状体不透明；如果问题出在左眼，那么在出生后头两个月里无法用这只眼睛看东西，就是脸盲症的一个重要风险因素）。题干把这句压缩成“a defect in the 11 … eye, according to Brad Duchaine”：原文的 the eye's lens is not clear 即 a defect（缺陷）；而 “when it's the left one” 中的 it 指代前文的 the eye，one 是避免重复的代名词，还原后即 the left eye。可见空格要填的是 left，它在题干中作 eye 的前置定语，与原文的限定关系一致。注意不要填 lens（那是缺陷所在部位，不是眼睛的方位），也不要填 babies（那是研究对象）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Joseph DeGutis's patient proved he had been successfully trained to recognise faces inside the 12 ________ and in the outside world.",
          "translation": "约瑟夫·德古蒂斯（Joseph DeGutis）的病人证明，他已被成功训练到能在 ________ 内以及外部世界中识别面孔。",
          "answer": "laboratory",
          "wordClass": "名词（单数，指实验室这一场所；作介词 inside 的宾语，与 in the outside world 对举，保持原文形式 laboratory）",
          "locating": {
            "paragraph": "8",
            "quote": "Joseph DeGutis, a graduate student at the University of California, recently reported successfully training a severe developmental prosopagnosic to recognise faces during tests carried out in the laboratory."
          },
          "synonyms": [
            "“inside the laboratory” 同义替换为原文的 “during tests carried out in the laboratory”",
            "“in the outside world” 对应原文下一句的 “in everyday life”（日常生活）",
            "“proved he had been successfully trained” 同义替换为原文的 “reported successfully training a severe developmental prosopagnosic”"
          ],
          "locatingTip": "定位：笔记栏目是 Treatment for prosopagnosia，专有名词 Joseph DeGutis 是极佳的定位词（全文只出现一次），位于第 8 段第 2 句，一步锁定。确定答案技巧：题干用 inside the 12 … 与 in the outside world 构成“室内／外部世界”的对举，回原文找与之对应的空间对照：训练是在 “tests carried out in the laboratory”（在实验室进行的测试）中完成的，而随后一句补充 “recognising faces in everyday life became easier”（日常生活中认人变得更容易）。实验室对日常生活，正好与题干的 inside／outside world 对应，因此空格填 laboratory。注意填名词原形，不加冠词（题干已有 the），也不要填 tests 或 training。",
          "analysis": "第 8 段讨论能否改善脸盲症患者的认人能力。第 2 句即本题定位句：“Joseph DeGutis, a graduate student at the University of California, recently reported successfully training a severe developmental prosopagnosic to recognise faces during tests carried out in the laboratory.”（加州大学的研究生 Joseph DeGutis 最近报告说，他成功地训练了一名重度发育型脸盲症患者在实验室测试中辨认面孔）。第 3 句进一步交代训练效果的外溢：“The subject also reported that recognising faces in everyday life became easier due to the training.”（该受试者还报告说，由于训练，日常生活中认面孔变得更容易了）。题干把这两句合并成一个“里外对应”的句子：inside the 12 … 对应 in the laboratory，in the outside world 对应 in everyday life；题干的 proved（证明）对应原文 reported，successfully trained 也是原文同义表述。由此可知答案是 laboratory，它作介词 inside 的宾语，指训练与测试所在的场所。从词性看，lab 虽也常见，但原文使用的是完整形式 laboratory，雅思填空以原文用词为准，故填 laboratory 一个词。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Thomas Gruter doubts that the training will work and mentions that 13 ________ by some subjects can affect research results.",
          "translation": "托马斯·格鲁特（Thomas Gruter）怀疑这种训练是否有效，并提到部分受试者的 ________ 会影响研究结果。",
          "answer": "cheating",
          "wordClass": "名词（不可数名词，作 that 从句的主语；原文形式 cheating 不加冠词、不变复数）",
          "locating": {
            "paragraph": "8",
            "quote": "He also points out that cheating is a possibility during tests and provides an example."
          },
          "synonyms": [
            "“mentions” 同义替换为原文的 “points out”（指出）",
            "“can affect research results” 对应原文的 “cheating is a possibility during tests” 加上后文举例所得的结论 “you can perform well in the test and not do so well in real life”",
            "“by some subjects” 对应原文的 “She wasn't the only one.”，说明作弊者不止一个"
          ],
          "locatingTip": "定位：人名 Thomas Gruter 出现在第 8 段第 5 句，本空紧接他的观点，往下找 He also points out 一句即可。确定答案技巧：题干说“部分受试者的某种行为会影响研究结果”，原文的对应句是 “He also points out that cheating is a possibility during tests and provides an example.”（他还指出测试中可能存在作弊，并举了一个例子），随后举例说明那位受试者靠记住鼻子到上唇的距离应付测试，末句总结 “So you can perform well in the test and not do so well in real life.”（所以你可能测试表现很好，在现实生活中却不行）。可知被指出的行为就是 cheating。注意句法结构：that 从句中 cheating 作主语，is a possibility 是谓语部分，答案取 cheating 一词，不加冠词、不变复数。",
          "analysis": "第 8 段后半部分是 Thomas Gruter 的质疑。他先质疑训练效果：“Thomas Gruter, Martina Gruter's husband, who also works on her team, however, is not convinced it will work.”（Martina Gruter 的丈夫、同在该团队工作的 Thomas Gruter 却并不相信这种做法会奏效）他反问道：“I don't know how you can have more training than you have already had.”（我不知道你怎么能比已经做到的还要多练）并补充：“Humans already spend all day looking at faces.”（人类本来就整天在看脸）。随后转向研究方法上的漏洞，即本题定位句：“He also points out that cheating is a possibility during tests and provides an example.”（他还指出，测试中可能存在作弊，并举例说明）例子如下：“One person we studied said that when she was doing the face-recognition test, she memorised the distance between nose and upper lip. She wasn't the only one. So you can perform well in the test and not do so well in real life.”（我们研究的一位受试者说，她在做面孔识别测试时记住了鼻子到上唇之间的距离。不止她一个人这样做。所以你可能在测试里表现很好，在现实生活中却不行）。题干把这一系列内容压缩为“mentions that 13 … by some subjects can affect research results”：被提到的行为是 cheating（作弊），实施者是不止一位受试者（She wasn't the only one 对应 some subjects），造成的后果是测试成绩失真、研究结果受影响（perform well in the test and not do so well in real life）。因此答案填 cheating。填词时注意它在本句中是主语位置的抽象名词，保持原形与不可数形式。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
