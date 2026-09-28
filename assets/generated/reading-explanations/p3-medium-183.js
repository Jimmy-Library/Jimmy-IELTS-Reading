(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-medium-183", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-medium-183",
  "meta": {
    "examId": "p3-medium-183",
    "title": "The hazards of multitasking 多任务处理",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 观点匹配题（将观点与人物配对）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "Less attention will be paid to each task when more than one task is attempted at the same time.",
          "translation": "当同时尝试做一件以上的任务时，分配给每项任务的注意力都会减少。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Psychologist and brain-researcher Ernst Pöppel, of the Ludwig-Maximilian University in Munich, believes that it is impossible to carry out two or three different tasks simultaneously with the same degree of concentration."
          },
          "synonyms": [
            "“more than one task is attempted at the same time” 同义替换为原文的 “carry out two or three different tasks simultaneously”",
            "“Less attention will be paid to each task” 同义替换为原文的 “it is impossible to … with the same degree of concentration”，即“无法维持同样的专注程度”对应“每项任务分到的注意力都变少”"
          ],
          "locatingTip": "定位：本题组的人物名单在题组末尾给出（A John Ridley Stroop、B Ernst Pöppel、C David E. Meyer、D Edward Hallowell & John Ratey）。先在原文里把四个名字的位置摸清：Stroop 在第 3 段，Pöppel 在第 4 段，Meyer 在第 6 段，Hallowell 和 Ratey 在第 8 段。这样第 27 题只需回第 4 段核对即可。确定答案技巧：题干的关键是“同时做多件事（more than one task … at the same time）”与“注意力被稀释（Less attention … to each task）”，而第 4 段 Pöppel 的原话正是“不可能同时执行两三个不同任务并保持同样的专注程度”，两者一一对应，故选 B。",
          "analysis": "第 4 段第 2 句写道：“Psychologist and brain-researcher Ernst Pöppel, of the Ludwig-Maximilian University in Munich, believes that it is impossible to carry out two or three different tasks simultaneously with the same degree of concentration.”（慕尼黑路德维希-马克西米利安大学的心理学家兼脑研究者 Ernst Pöppel 认为，人不可能以同样的专注程度同时执行两三项不同的任务）。题干把这句话转成两半：more than one task is attempted at the same time 对应 carry out two or three different tasks simultaneously；Less attention will be paid to each task 对应 it is impossible to … with the same degree of concentration（既然无法维持同等的专注度，就意味着每项任务分到的注意力都会减少）。Pöppel 接着用“三秒窗口（three-second windows）”进一步说明注意力只能轮流分配给单个对象。因此这句话的提出者是 B（Ernst Pöppel）。注意区分：Stroop 讲的是任务之间的相互干扰，Meyer 讲的是任务切换耗时，Hallowell 与 Ratey 讲的是不断寻求新信息、难以专注的脑部病况，只有 Pöppel 在讲“同时进行时专注度无法同等分配”，与本题的注意力稀释完全吻合。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Repeated changes of task mean that the brain will take a while to adjust.",
          "translation": "反复切换任务意味着大脑需要一段时间才能适应。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "It also takes the brain longer to adapt when switching rapidly back to an interrupted task rather than waiting longer before switching back."
          },
          "synonyms": [
            "“Repeated changes of task” 同义替换为原文的 “switching rapidly back to an interrupted task”，并对应同段前文的 “constantly jumped back and forth between the two tasks”",
            "“the brain will take a while to adjust” 同义替换为原文的 “It also takes the brain longer to adapt”"
          ],
          "locatingTip": "定位：题干关键词是 changes of task 与 adjust，对应原文的 switching 与 adapt。第 6 段整段讲 David E. Meyer 的实验，反复出现 switchover、switching back 等词，锁定该段即可。确定答案技巧：找到与“切换任务”和“适应需要时间”同时对应的句子——“It also takes the brain longer to adapt when switching rapidly back to an interrupted task”，adapt 与题干 adjust 同义，take the brain longer 与 take a while 同义；该句所在的实验由 Meyer 主持，所以答案是 C（David E. Meyer）。",
          "analysis": "第 6 段开头点明人物：“Another experiment by psychologist David E. Meyer, of the University of Michigan, quantified just how much time we can lose when we shuttle between tasks.”（密歇根大学的心理学家 David E. Meyer 的另一项实验量化了我们在任务之间来回穿梭时到底会损失多少时间）。段内先给出“来回报切换的人完成任务所花的时间约为一次性做完一件事的一点五倍”，随后解释原因：“Each switchover from one task to another meant re-thinking and thus involved additional neural resources. In effect, the brain needs time to shut off the rules for one task and to turn on the rules for another.”（每次切换任务都意味着重新思考，因而需要额外的神经资源；实际上，大脑需要时间去关闭一项任务的规则、再开启另一项任务的规则）。段末再补一句本题的定位句：“It also takes the brain longer to adapt when switching rapidly back to an interrupted task rather than waiting longer before switching back.”（当迅速切回一个被打断的任务时，大脑适应所需的时间比多等一会儿再切回去更长）。题干 Repeated changes of task 对应 switching 这一反复动作，the brain will take a while to adjust 对应 takes the brain longer to adapt，说法完全一致，因此观点的提出者是 C（David E. Meyer）。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Using the skills required for one task may make performing another one more difficult.",
          "translation": "做一项任务所需的技能，可能会让另一项任务变得更难完成。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "One of the modern foundations of current knowledge of multitasking was laid in 1935, when the American psychologist John Ridley Stroop reported that processing information from one task could cause interference with another."
          },
          "synonyms": [
            "“Using the skills required for one task” 同义替换为原文的 “processing information from one task”",
            "“may make performing another one more difficult” 同义替换为原文的 “could cause interference with another”，即“干扰另一项任务”等于“让另一项任务变得更难”"
          ],
          "locatingTip": "定位：本段是全文唯一集中介绍 Stroop 实验的地方（第 3 段），题干中的 interference 概念就出自该段；人名 John Ridley Stroop 是极佳的专有名词定位词。确定答案技巧：题目问“一项任务所需技能会干扰另一项任务”是谁的观点，原文用 reported that 引出 Stroop 的发现：“processing information from one task could cause interference with another”，processing information from one task 对应 Using the skills required for one task，could cause interference with another 对应 make performing another one more difficult，两条信息完全对应，故答案是 A（John Ridley Stroop）。",
          "analysis": "第 3 段先提出问题“为什么一种已成为常识的时间管理策略会错得如此离谱”，然后回溯到注意力的经典研究：“One of the modern foundations of current knowledge of multitasking was laid in 1935, when the American psychologist John Ridley Stroop reported that processing information from one task could cause interference with another.”（现代多任务处理知识的基石之一奠定于 1935 年，当时美国心理学家 John Ridley Stroop 报告说，处理来自一项任务的信息可能会对另一项任务造成干扰）。紧接着一句给出实验细节：被试被要求说出一个单词的颜色，而单词本身印成另一种颜色，他们感到困难。段末解释原因：“the brain must suppress one that has been learned so well that it has become automatic (reading) to attend to a second task that requires concentration (naming the colour)”（大脑必须压抑已经高度熟练、变成自动化的那项任务（阅读），以便专注于需要集中注意力的第二项任务（说出颜色））。题干说的“一项任务所需的技能会让另一项任务更难完成”，正是这里 processing information from one task could cause interference with another 的通俗表达，因此该观点属于 A（John Ridley Stroop）。",
          "traps": []
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "When multitasking, the brain can only focus on single tasks for very short periods.",
          "translation": "在进行多任务处理时，大脑只能对单个任务保持极短时间的专注。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "He says that seemingly simultaneous awareness and processing of information actually take place in 'three-second windows'."
          },
          "synonyms": [
            "“focus on single tasks” 同义替换为原文的 “one subject at a time occupies the foreground of consciousness”，即注意力一次只落在一个对象上",
            "“for very short periods” 同义替换为原文的 “three-second windows”（三秒的窗口）"
          ],
          "locatingTip": "定位：题干的关键词是 very short periods，原文唯一给出具体时长的地方是第 4 段的 three-second windows（该句紧跟在 Pöppel 的观点句之后），代词 He 回指的就是 Pöppel。确定答案技巧：把“极短时间”与“三秒窗口”对应起来即可。第 5 段进一步说“a person can concentrate on a conversation for three seconds, then for three seconds on a crying child, and three seconds on a computer screen”（一个人可以先专注一段对话三秒，再专注一个哭闹的孩子三秒，再专注电脑屏幕三秒），说明注意力一次只能给一个对象、且只有三秒，正是题干的意思，故答案是 B（Ernst Pöppel）。",
          "analysis": "第 4 段末尾 Pöppel 说：“He says that seemingly simultaneous awareness and processing of information actually take place in 'three-second windows'.”（他说，看似同时发生的对信息的觉察与处理，实际上是在“三秒窗口”中进行的）。第 5 段把这个窗口机制展开：“In these three-second segments, the brain takes in, as a block, all the data about the environment streaming in from the sensory systems; subsequent events are processed in the next window. So a person can concentrate on a conversation for three seconds, then for three seconds on a crying child, and three seconds on a computer screen. While one subject at a time occupies the foreground of consciousness, the others stay in the background until they, in turn, are given access to the central processor.”（在这些三秒片段里，大脑作为一个整体接收感官系统传来的环境数据，随后的事件在下一个窗口处理；因此一个人可以先专注对话三秒、再专注哭闹的孩子三秒、再专注电脑屏幕三秒；同一时间只有一个对象占据意识的前景，其余留在背景中，直到轮到它们进入中央处理器）。题干“大脑只能对单个任务保持极短时间的专注”，对应其中“while one subject at a time occupies the foreground of consciousness”与“three seconds”两点，因此观点属于 B（Ernst Pöppel）。本题与第 27 题同属 Pöppel，答案同为 B，属于正常现象，不要因为“一个人物只配一次”的错误直觉而改选别的字母。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "Multitasking can lead to a medical problem.",
          "translation": "多任务处理可能导致一种医学（疾病）问题。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Psychiatrists Edward Hallowell and John Ratey, of Harvard University, say that multitasking can bring about a brain condition that causes sufferers to constantly seek new information while having difficulties concentrating on its content."
          },
          "synonyms": [
            "“Multitasking can lead to” 同义替换为原文的 “multitasking can bring about”",
            "“a medical problem” 同义替换为原文的 “a brain condition”，condition 在此指一种脑部病症，提出者是精神科医师"
          ],
          "locatingTip": "定位：题干关键词是 medical problem，全文唯一把多任务处理与“疾病/病症”挂钩的是第 8 段，那里由精神科医师（psychiatrists）提出，属于医学表述。确定答案技巧：抓住 bring about a brain condition 这一动宾结构，condition 在医学语境中即“病症、病况”，与题干的 medical problem 同义；提这句话的人是 Edward Hallowell 与 John Ratey，对应名单中的 D。注意第 7 段虽然也讲生理影响（前额皮质、海马体受损），但那是描述大脑受压力的影响，并没有说多任务处理会导致某种病症，因此不能选 A、B 或 C。",
          "analysis": "第 8 段（末段）开头写道：“Psychiatrists Edward Hallowell and John Ratey, of Harvard University, say that multitasking can bring about a brain condition that causes sufferers to constantly seek new information while having difficulties concentrating on its content.”（哈佛大学的精神科医师 Edward Hallowell 与 John Ratey 表示，多任务处理可能导致一种脑部病况，使患者不断寻求新信息，却难以专注于信息内容）。句子中的主语身份是 psychiatrists（精神科医师），宾语结构是 bring about a brain condition（引发一种脑部病况），两个信息点合起来正好对应题干“多任务处理可能导致一种医学问题”。相比之下，第 3 段的 Stroop（A）谈的是干扰现象，第 4 至 5 段的 Pöppel（B）谈的是三秒窗口的注意力分配，第 6 段的 Meyer（C）谈的是切换任务浪费时间，都没有涉及病症，只有 D（Edward Hallowell & John Ratey）的表述带有医学诊断色彩，故选 D。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–34 选择题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 34
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "What is suggested about the worker in the opening paragraph?",
          "translation": "关于第 1 段中的那位员工，文章暗示了什么？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "You arrive at the office, review your to-do list and start to feel a headache coming on. You resolve to tackle the items as quickly as possible. While you return calls, you sort e-mail and other letters."
          },
          "synonyms": [
            "“feels overwhelmed by his workload” 同义替换为原文一系列同时压来的任务描写：“review your to-do list and start to feel a headache coming on”“tackle the items as quickly as possible”以及电话、邮件、幻灯片、报表、客户接连不断",
            "“the worker” 对应原文第二人称主角 You，全文以“你”的一天为开场"
          ],
          "locatingTip": "定位：题干已提示 opening paragraph，直接锁定第 1 段，无需通读全文。确定答案技巧：这类“暗示某人状态”的题要看细节的**叠加效果**。第 1 段把一天写成任务连续轰炸：要看待办清单、要回电话、要整理邮件、要做幻灯片，经理要销售数据，重要客户又打来电话，最后还要一边夹着话筒一边加总销售额。一件未完另一件已到，且开篇就“开始感到头痛”，这些细节共同指向“被工作量压得喘不过气”，故选 B。",
          "analysis": "第 1 段用第二人称描写典型的一天：“You arrive at the office, review your to-do list and start to feel a headache coming on. You resolve to tackle the items as quickly as possible. While you return calls, you sort e-mail and other letters. You begin keying in slides for tomorrow's presentation. Then your manager comes in wanting an immediate update on sales figures. You have just opened the spreadsheet when a very important customer calls. With the receiver held between your shoulder and your ear, you continue adding up the sales totals until, 15 minutes later, you finally manage, politely, to get rid of the client. You've been multitasking again.”（你到办公室、翻看待办清单，开始感到头痛；你决心尽快把手上的事处理完；你在回电话的同时整理邮件和信件；你开始录入明天演讲用的幻灯片；这时经理进来要求立刻汇报销售数据；你刚打开电子表格，一位非常重要的客户又打来电话；你把听筒夹在肩膀和耳朵之间继续累加销售总额，十五分钟后才礼貌地摆脱这位客户。你又一次在同时处理多件事了）。整段没有任何一句说他的工作枯燥（D）或经理表达了不满（C），更没有提头一晚失眠（A），唯一的情绪线索是“开始感到头痛”和任务接连不断，说明他面对工作量感到压力巨大、力不从心，这与 B（He feels overwhelmed by his workload，他被工作量压得不堪重负）一致，因此答案是 B。",
          "traps": [
            "为什么不是 A（Anxiety deprived him of sleep the previous night）：原文只说“start to feel a headache coming on”（开始感到头痛），头痛可能因压力而起，但全文从未提到前一晚失眠或睡眠不足，属于把头痛过度推断成失眠。",
            "为什么不是 C（His manager has expressed disapproval）：原文写的是经理“wanting an immediate update on sales figures”（要求立刻汇报销售数据），这是提出工作要求，并没有任何 disapprove、criticise 之类的负面评价，属于无据推断。",
            "为什么不是 D（He finds his work dull and uninteresting）：原文列举的任务虽然繁杂，但没有一处出现 dull、boring、uninteresting 之类的评价，作者强调的是任务过多而非工作乏味，因此不能选。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "Drivers and air-traffic controllers are mentioned in the passage because they",
          "translation": "文中提到司机和空中交通管制员，是因为他们",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The combination results in inefficiency, careless thinking and mistakes – not to mention the possible dangers of divided attention for drivers, air-traffic controllers and others who handle machinery."
          },
          "synonyms": [
            "“cannot afford to make mistakes” 同义替换为原文的 “the possible dangers of divided attention”，即注意力分散会带来危险、后果严重（对他们而言错误代价太高）",
            "“Drivers and air-traffic controllers” 与原文原词复现：“drivers, air-traffic controllers and others who handle machinery”"
          ],
          "locatingTip": "定位：扫读专有名词组合 drivers、air-traffic controllers，全文只出现在第 2 段最后一句。确定答案技巧：答题关键是要看作者把这两类人与什么绑在一起——原文把它们放在“divided attention（注意力被分散）”的“dangers（危险）”之后，并且用 and others who handle machinery（以及其他操作机械的人）来扩展，说明举这两类人的目的是强调分心后果之严重：他们一旦出错，代价无法承受。对照选项，A 说“需要同时做多件事”，原文与此相反（作者正是反对同时做多件事）；B 说“无法保持专注”，曲解为能力缺失；C 说“高效利用时间”，与原文的 inefficiency 相反；只有 D“错误代价太高”与 dangers 对应，故选 D。",
          "analysis": "第 2 段先说多任务处理导致效率下降：“a growing number of studies show that trying to juggle jobs rather than completing them sequentially can take longer and leave workers with a reduced ability to perform each task”，接着补充压力会造成短期记忆困难，最后用本题定位句收尾：“The combination results in inefficiency, careless thinking and mistakes – not to mention the possible dangers of divided attention for drivers, air-traffic controllers and others who handle machinery.”（这些因素叠加会导致效率低下、思维粗疏和错误，更不用说注意力分散对司机、空中交通管制员以及其他操作机械的人可能带来的危险）。作者把司机与空管人员放进这句，是为了说明分心在这些岗位上不只是效率问题，而是**安全问题**——也就是说他们犯错的代价极高，对应 D“cannot afford to make mistakes”。B 项“无法保持专注”是偷换：原文说的是注意力被分散（divided attention）带来的危险，并未断言他们本身无法专注；C 项与原文的 inefficiency 直接相反；A 项若成立，作者等于在肯定多任务处理，与全文批判多任务处理的立场矛盾。故答案为 D。",
          "traps": [
            "为什么不是 A（need to perform several tasks at once）：全文主旨是说明多任务处理有害，作者举司机和空管人员正是为了避免他们同时处理多件事，A 项把“危险来自同时做几件事”曲解成“他们有必要同时做几件事”，方向完全相反。",
            "为什么不是 B（are unable to maintain concentration）：原文说 divided attention（注意力被分散）会带来危险，讨论的是分心这一状况本身，并没有说这些人先天或普遍无法集中注意力，属于对原文的曲解。",
            "为什么不是 C（use their time efficiently）：原文用词是 inefficiency（效率低下），恰恰与 efficiently 相反，若选 C 则与作者的立场冲突。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "In John Ridley Stroop's experiment, participants found it difficult to",
          "translation": "在 John Ridley Stroop 的实验中，参与者感到困难的是",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Stroop noticed that when study participants were asked to name the colour of a word – such as 'green' – printed in a different colour – red, for example - they experienced difficulty saying the name of the colour."
          },
          "synonyms": [
            "“found it difficult to” 同义替换为原文的 “they experienced difficulty”",
            "“read out the name of one colour printed in another colour” 同义替换为原文的 “to name the colour of a word … printed in a different colour”，即说出该颜色的名称"
          ],
          "locatingTip": "定位：人名 John Ridley Stroop 是绝佳的专有名词定位词，全文只出现在第 3 段，与该段中的 participants、difficulty 同处一段。确定答案技巧：把题干“参与者觉得难的是……”与原文实验描述逐一对照。原文的实验设计是：单词的意思是一个颜色词（如 green），但它被印成另一种颜色（如红色），被试要说出**印刷的颜色**。原文问题就在“说”上：they experienced difficulty saying the name of the colour。因此答案是 C（读出用另一种颜色印刷的颜色词的名字）。A、B、D 三项都在讲辨认或搭配颜色，与原文“说出印刷颜色”的要求不符。",
          "analysis": "第 3 段在介绍 Stroop 的同时描述了他的实验：“Stroop noticed that when study participants were asked to name the colour of a word – such as 'green' – printed in a different colour – red, for example - they experienced difficulty saying the name of the colour. This phenomenon is thought to occur when two tasks get tangled: the brain must suppress one that has been learned so well that it has become automatic (reading) to attend to a second task that requires concentration (naming the colour).”（Stroop 注意到，当研究参与者被要求说出一个单词的颜色时——比如把 green 这个词印成红色——他们会感到难以说出该颜色的名称。人们认为这一现象发生于两项任务纠缠在一起时：大脑必须压抑那项已被学得过于熟练、变成自动化的任务（阅读），才能专注于那项需要集中注意力的任务（说出颜色））。题干的 the participants found it difficult to 对应原文的 they experienced difficulty；原文的困难点是 saying the name of the colour，即“读出颜色名称”，并且注意括号里的 (naming the colour) 也印证了实验落在“说出颜色”这一动作上。选项 C 的 read out the name of one colour printed in another colour（读出用另一种颜色印刷的颜色词的名字）与实验设计完全吻合，故选 C。",
          "traps": [
            "为什么不是 A（tell one colour from another）：原文从未要求被试区分两种颜色，被试面对的是一个颜色词与它被印成的颜色这一对信息，难点在于压制自动化的阅读反应，而非辨色能力。",
            "为什么不是 B（match up pairs of similar colours）：原文没有出现任何配对或相似颜色的操作，实验只涉及一个单词的一种印刷色，B 项是凭空添加的实验步骤。",
            "为什么不是 D（decide what colour looks appropriate for a particular word）：原文讨论的是客观存在的印刷颜色与词义之间的冲突，而不是审美判断（looks appropriate），D 项把一道注意力干扰题改写成了对颜色搭配的主观评价题，与原文无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 35–39 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 35,
        "end": 39
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "The area most affected is the prefrontal cortex, which is found to the rear of the 35 ________",
          "translation": "受影响最大的区域是前额皮质，它位于 ________ 的后方。",
          "answer": "forehead",
          "wordClass": "名词（单数，指身体部位；位于介词 of 之后作宾语，照抄原文的单数形式 forehead，不加冠词、不变复数）",
          "locating": {
            "paragraph": "7",
            "quote": "Located behind the forehead, the prefrontal cortex – which neuroscientists call the ‘executive' part of the brain – helps us to assess tasks, prioritise them and assign mental resources."
          },
          "synonyms": [
            "“is found to the rear of” 同义替换为原文的 “Located behind”，rear 与 behind 同义，都表示“在……后面”",
            "“the prefrontal cortex” 与原文原词复现（前额皮质）"
          ],
          "locatingTip": "定位：题干已给出专有术语 prefrontal cortex（前额皮质），这是全篇唯一出现该术语的地方，出现在第 7 段第 2 句。确定答案技巧：空格前是 the rear of（……的后部），要在原文中找表示位置的介词短语。原文用分词短语 Located behind the forehead 开头，behind 正对应 the rear of，介词宾语是 the forehead，因此答案填 forehead。填写时注意：答案是身体部位名，属于普通名词，题干的 the 已在空格外，所以只写 forehead 一个词，不要写成 the forehead。",
          "analysis": "第 7 段说明多任务处理对大脑的生理影响，第 2 句为本题依据：“Located behind the forehead, the prefrontal cortex – which neuroscientists call the ‘executive' part of the brain – helps us to assess tasks, prioritise them and assign mental resources.”（前额皮质位于额头后方，神经科学家称之为大脑的“执行”部分，它帮助我们评估任务、排出优先级并分配脑力资源）。题干把分词短语“Located behind the forehead”改写成定语从句“which is found to the rear of the 35 ______”，其中 to the rear of 与 behind 同义，因此空格对应 the 后面那个表部位的名词 forehead。从语法看，of 是介词，其后需接名词，而 the 已在前，故只填名词主体 forehead；从字数看，NO MORE THAN TWO WORDS 只用一个词即可，无需写成 the forehead。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "It is the part of the brain which judges tasks, then puts them in order of importance and allocates 36 ________",
          "translation": "它是大脑中评判各项任务、再按重要性排序，并分配 ________ 的部分。",
          "answer": "mental resources",
          "wordClass": "名词短语（复数形式；resources 是可数名词，此处用复数，作动词 allocates 的宾语，照抄原文的 mental resources 两个词）",
          "locating": {
            "paragraph": "7",
            "quote": "helps us to assess tasks, prioritise them and assign mental resources."
          },
          "synonyms": [
            "“judges tasks” 同义替换为原文的 “assess tasks”",
            "“puts them in order of importance” 同义替换为原文的 “prioritise them”",
            "“allocates” 同义替换为原文的 “assign”，宾语同为 mental resources"
          ],
          "locatingTip": "定位：本题与第 35 题同在第 7 段同一句里，继续往右读即可找齐三个动作。确定答案技巧：题干用三个并列动作概括前额皮质的功能——judges tasks、puts them in order of importance、allocates …，与原文的 assess tasks、prioritise them、assign mental resources 一一对应，第三个动作的宾语就是答案。填写时只写 mental resources 两个词，正好卡在 NO MORE THAN TWO WORDS 的上限，不要写成 mental resources for tasks 之类超出词数的内容。",
          "analysis": "本题三个动作构成完整的功能描述链，全部来自第 7 段同一句：“helps us to assess tasks, prioritise them and assign mental resources.”（帮助我们评估任务、排出优先级并分配脑力资源）。对应关系为：assess tasks 改写为 judges tasks；prioritise them 改写为 puts them in order of importance；assign 改写为 allocates，其宾语 mental resources 就是空格所需内容。这里 assign 与 allocate 是同义词，都表示“分配（资源）”，题干正是利用这组同义替换来完成改写。词性上，mental resources 是“形容词加复数名词”的名词短语，作 allocates 的宾语，mental 为形容词、resources 为复数名词，二者缺一不可，因此答案必须写完整的两词短语 mental resources。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "If any 37 ________ in the hippocampus are affected, people may have problems with storing 38 ________ as well as learning 39 ________",
          "translation": "如果海马体中的任何 ________ 受到影响，人们就可能在储存 ________ 以及学习 ________ 方面出现问题。",
          "answer": "cells",
          "wordClass": "名词（复数；作从句主语，后接复数谓语 are affected，且前面有 any，须填复数形式 cells）",
          "locating": {
            "paragraph": "7",
            "quote": "This stress can also affect brain cells in another region, the hippocampus, which is important for forming new memories"
          },
          "synonyms": [
            "“If any … are affected” 同义替换为原文的 “This stress can also affect …”，原文用主动语态，题干改写为条件句加被动语态",
            "“in the hippocampus” 与原文原词复现（海马体）",
            "“the brain … cells” 概括为题干中的空格词 cells"
          ],
          "locatingTip": "定位：题干给出了 hippocampus 这个专业名词，全文只出现在第 7 段第 4 句，据此锁定该句。确定答案技巧：题干写“If any 37 ________ in the hippocampus are affected”，被影响的对象是海马体中的某种东西，而谓语是复数 are，提示空格要填复数名词。原文对应部分是 “This stress can also affect brain cells in another region, the hippocampus”，被影响的是 brain cells，因此空格填 cells（题干已有 brain 的语义框架，故只填 cells 一词）。",
          "analysis": "第 7 段末句集中交代本题组的三个答案：“This stress can also affect brain cells in another region, the hippocampus, which is important for forming new memories; damage in that area also makes it difficult for a person to acquire new skills.”（这种压力还会影响另一个区域的脑细胞，即海马体，海马体对形成新记忆很重要；该区域的损伤也会使人难以习得新技能）。本题对应第一分句：原文用主动语态 This stress can also affect brain cells，题干改写为条件句加被动的 If any … in the hippocampus are affected，被影响对象 brain cells 中的中心名词 cells 即为答案。语法提示：any 后接复数可数名词，且谓语是 are affected，两处都要求复数形式，因此必须写 cells 而不是 cell；此外 brain 一词已在题干语境中隐含，NO MORE THAN TWO WORDS 下只写 cells 一个词更准确。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "If any cells in the hippocampus are affected, people may have problems with storing 38 ________ as well as learning 39 ________",
          "translation": "如果海马体中的任何细胞受到影响，人们就可能在储存 ________ 以及学习 ________ 方面出现问题。",
          "answer": "new memories",
          "wordClass": "名词短语（复数，由形容词 new 修饰复数名词 memories 构成；作动名词 storing 的宾语，照抄原文的 new memories 两个词）",
          "locating": {
            "paragraph": "7",
            "quote": "the hippocampus, which is important for forming new memories; damage in that area also makes it difficult for a person to acquire new skills."
          },
          "synonyms": [
            "“may have problems with storing” 同义替换为原文的 “is important for forming new memories，damage … makes it difficult”，即“该区域重要/受损会造成困难”对应“在储存方面出现问题”",
            "“storing new memories” 与原文的 “forming new memories” 同义，都与记忆的存留有关"
          ],
          "locatingTip": "定位：仍锚定第 7 段末句中的 hippocampus，其后紧跟 which 引导的定语从句说明海马体的功能。确定答案技巧：题干说“在 storing（储存）……方面出现问题”，原文用 forming new memories（形成新记忆）说明同一功能，forming 与 storing 属于同一语义场，宾语 new memories 即空格答案。填写时为两个单词，正好符合 NO MORE THAN TWO WORDS。",
          "analysis": "第 7 段末句：“This stress can also affect brain cells in another region, the hippocampus, which is important for forming new memories; damage in that area also makes it difficult for a person to acquire new skills.”（这种压力还会影响另一区域的脑细胞，即海马体，它对形成新记忆很重要；该区域受损也会使人难以习得新技能）。题干把原文的名词性表述改写为“people may have problems with storing 38 ______”，即原文“海马体对 forming new memories 很重要、该区域受损会造成困难”这一层意思，被压缩成“在储存某物方面出现问题”。forming new memories 中的 new memories 就是空格内容。词性上，storing 是动名词，其后需要名词性宾语，new 为形容词、memories 为复数名词，两者共同构成名词短语，因此必须写全 new memories 两个词（不能只写 memories，因为原文的修饰词 new 是语义要点，且题干的空格对应整个短语）。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "If any cells in the hippocampus are affected, people may have problems with storing new memories as well as learning 39 ________",
          "translation": "如果海马体中的任何细胞受到影响，人们就可能在储存新记忆以及学习 ________ 方面出现问题。",
          "answer": "new skills",
          "wordClass": "名词短语（复数，由形容词 new 修饰复数名词 skills 构成；作动名词 learning 的宾语，照抄原文的 new skills 两个词）",
          "locating": {
            "paragraph": "7",
            "quote": "damage in that area also makes it difficult for a person to acquire new skills."
          },
          "synonyms": [
            "“learning” 同义替换为原文的 “acquire”",
            "“have problems with” 同义替换为原文的 “makes it difficult for a person”，即“使人难以”对应“在……方面有问题”",
            "“in that area” 回指前文的 the hippocampus，与题干中的 hippocampus 对应"
          ],
          "locatingTip": "定位：题干用 as well as 把空格与前面的 storing new memories 并列，因此答案应在同一句的并列分句里，即第 7 段末句的分号之后。确定答案技巧：分号后写的是 “damage in that area also makes it difficult for a person to acquire new skills”，其中 acquire 与题干的 learning 同义，makes it difficult 与 have problems with 同义，宾语 new skills 即答案。填两个词，符合字数上限；注意不能只写 skills，因为 new 是原文的限定成分。",
          "analysis": "原文第 7 段末句的后半部分：“damage in that area also makes it difficult for a person to acquire new skills.”（该区域的损伤也会使人难以获得新技能）。其中 that area 回指本句前半部分提到的 the hippocampus，与题干的 hippocampus 完全对应；makes it difficult for a person to acquire 被题干改写成 people may have problems with … learning。acquire 与 learn 是同义替换（获得技能即学习技能），因此 acquire 的宾语 new skills 就是空格答案。词性上，learning 为动名词，后接名词性宾语，new skills 是“形容词加复数名词”的名词短语，两个词都要写上，且 skills 用复数与原文一致（技能通常多项）。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Question 40 选择题（文章主旨）",
      "mode": "per_question",
      "questionRange": {
        "start": 40,
        "end": 40
      },
      "items": [
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "The main aim of this passage is to",
          "translation": "这篇文章的主要目的是",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "How can a time-management strategy that has become part of the common wisdom actually be so wrong?"
          },
          "synonyms": [
            "“challenge widely held opinions” 同义替换为原文的 “How can a time-management strategy that has become part of the common wisdom actually be so wrong?”，即质疑被普遍接受的看法",
            "“widely held opinions on multitasking” 对应原文的 “a time-management strategy that has become part of the common wisdom” 以及第 2 段开头的 “You may believe that anyone who wants to get ahead today should master the art of multitasking”"
          ],
          "locatingTip": "定位：主旨题要找全文的立场句。第 2 段开头先摆出大众信念“想出头就得掌握多任务处理的技巧”，紧接着用 However 转折，引出多项研究证明其有害；第 3 段第 1 句用一个反问总结全文动机：“How can a time-management strategy that has become part of the common wisdom actually be so wrong?”，这就是作者写作目的的核心表达。确定答案技巧：抓住 common wisdom（普遍看法）与 be so wrong（竟是错的）之间的对立，即可判断全文意在质疑一种被广泛接受的观念，选 B。其余三个选项在文中都找不到对应的主旨支撑。",
          "analysis": "全文结构清晰：第 1 段用一天的手忙脚乱铺陈现象，第 2 段先陈述“想上进就该掌握多任务处理”这一流行信念（“You may believe that anyone who wants to get ahead today should master the art of multitasking”），随即用 However 转折，引用研究指出大脑无法像电脑那样在后台处理数据，同时处理多件事会耗时更长、表现更差、压力更大；第 3 段开头以反问点题：“How can a time-management strategy that has become part of the common wisdom actually be so wrong?”（一种已经成为常识一部分的时间管理策略，怎么会错得如此离谱？）；第 4 至 7 段依次用 Stroop 实验、Pöppel 的三秒窗口、Meyer 的切换实验和大脑生理影响作为证据；第 8 段收束到建议“让邮件先等着”。整篇的写作动机正是**挑战并推翻关于多任务处理的流行观念（common wisdom）**，这正是 B“challenge widely held opinions on multitasking”。A 项说描述多任务处理的用处，与全文批判立场相反；C 项说展示多任务处理造成的身体损伤，原文虽提到海马体受损，但那只是论证环节之一，且文中强调的是压力、效率与注意力，并不是全文主旨；D 项说呼吁开展更好的心理学实验，原文引用了大量实验却从未呼吁改进实验方法，属于无据推断。因此答案是 B。",
          "traps": [
            "为什么不是 A（describe areas where multitasking is useful）：全文立场是否定多任务处理，唯一带有让步意味的是 Meyer 的一句“Multitasking saves time only when it is a matter of relaxed, routine tasks”，那只是例外说明，并非文章目的，更不是“描述哪些领域适用”，与全文的批判基调相反。",
            "为什么不是 C（show the physical damage that multitasking can cause）：第 7 段确实写到压力会影响前额皮质与海马体，但这是全文若干论据中的一条，而且作者反复强调的是效率下降、注意力被分散和思维粗疏，用一条局部证据当作全文主旨属于以偏概全。",
            "为什么不是 D（call for better psychological experiments on multitasking）：原文引用了 1935 年以来的多项研究作为支持性证据，作者从未质疑这些实验的可靠性，也没有提出要改进实验方法的呼吁，该项属于凭空添加。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
