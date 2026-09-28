(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-14", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-14",
  "meta": {
    "examId": "p2-high-14",
    "title": "Should space be explored by robots or by humans 人机太空探索",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–19 小标题匹配（List of Headings，i–ix）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 19
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "Choose the correct heading for Paragraph A from the list of headings below.",
          "translation": "从下面的小标题列表中为 A 段选择正确的小标题。",
          "answer": "vi",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "There is no doubt that the presence of people on board a space vehicle makes its design much more complex and challenging, and produces a large increase in costs, since safety requirements are greatly increased"
          },
          "synonyms": [
            "“Problems in using humans for space exploration” 同义替换为 A 段连续列举的一串困难：“makes its design much more complex and challenging”“produces a large increase in costs”“the systems required are bulky and costly”",
            "“problems” 同义替换为原文的 “more complex and challenging”，原文用形容词词组描写困难，题干用名词 problems 概括",
            "“using humans” 同义替换为原文的 “the presence of people on board a space vehicle”（让人类身处航天器上），即人类直接参与太空飞行",
            "“space exploration” 同义替换为原文的 “space travel” 与 “long-duration missions”（长时间的远航任务）"
          ],
          "locatingTip": "定位：小标题题不需要找关键词，A 段就是文章首段，直接通读。确定答案技巧：读完 A 段要能一眼看出全段都在算“载人”的代价账——设计更复杂（more complex and challenging）、费用大增（a large increase in costs）、安全要求被大幅提高（safety requirements are greatly increased）、所需系统笨重而昂贵（bulky and costly），而且任务时间越长复杂度越高（their complexity increases for long-duration missions）。这些全部是“让人类上天”所带来的麻烦，正对选项 vi 的 Problems。段落最后一句谈机器人变得轻便、无人探测器越来越小，只是作为对照的收尾，不是段落主旨，不要因为出现 robots 就误选含机器人字样的 iii 或 vii。",
          "analysis": "A 段是全文的立论起点，作者先把“人类亲自参与太空旅行是否可取”这个争论摆出来，然后集中论证载人的不利面。第 2 句是本段的定位句：“There is no doubt that the presence of people on board a space vehicle makes its design much more complex and challenging, and produces a large increase in costs, since safety requirements are greatly increased, and the performance of the technology providing necessities for human passengers such as oxygen, food and water must be guaranteed.”（毫无疑问，航天器上有人会使其设计复杂得多、难得多，并导致费用大幅增加，因为安全要求被大幅提高，而且为人类乘客提供氧气、食物和水等必需品的技术，其性能必须得到保证）。第 3 句继续加码：“Moreover, the systems required are bulky and costly, and their complexity increases for long-duration missions.”（此外，所需的系统既笨重又昂贵，而且任务时间越长，其复杂度越高）。段末用 Meanwhile 一转，说电子学与计算机科学的进步使越来越复杂的任务可以交给机器人，无人探测器正变得更轻、更小、更方便。把这三层意思合起来看：段落的落点是“载人给航天器设计与任务带来一系列负担”，机器人只是拿来衬托人类代价的对照面，因此标题选 vi（Problems in using humans for space exploration）。做题时要注意区分“段落提到某个词”和“段落围绕某个意思展开”——本段出现了 robots，但机器人只是配角。",
          "traps": [
            "为什么不是 iv（Reduced expectations for space exploration）：iv 说的是对太空探索本身的期望被调低，而 A 段讲的是载人所造成的设计、成本与安全负担，全文没有任何“人们对太空探索降低了期望”的表述；真正写“期望落空”的是 C 段，对象是人工智能与自动化生产，而不是太空探索。",
            "为什么不是 viii（Space settlement and the development of greater self-awareness）：viii 的两个关键词是定居（settlement）与自我意识（self-awareness），对应末段 F 的 colonisation 与 “a new consciousness of its fragility, its smallness, and its unity”；A 段通篇只谈代价与复杂度，没有一句涉及定居或人类对自身的认识。",
            "为什么不是 ii（The barriers to cooperation in space exploration）：ii 要求段落同时涉及“合作”与“合作的障碍”，而 A 段完全没有出现人机合作的话题，它讲的是人上天会带来哪些麻烦，因此与 ii 无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "Choose the correct heading for Paragraph B from the list of headings below.",
          "translation": "从下面的小标题列表中为 B 段选择正确的小标题。",
          "answer": "iii",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "One human characteristic which is particularly precious in space missions, and which so far is lacking in robots, is the ability to perform a great variety of tasks. In addition, robots are not good at reacting to situations they have not been specifically prepared for."
          },
          "synonyms": [
            "“Some limitations of robots” 同义替换为原文的 “lacking in robots”（机器人目前所缺的）与 “robots are not good at …”（机器人不擅长……），都是对机器人能力不足的描述",
            "“lacking in robots” 对应题干 limitations（局限），原文用分词短语 lacking in 表达“缺乏”，题干用名词 limitations 概括",
            "“the ability to perform a great variety of tasks” 说明机器人缺的是“完成多种任务的能力”，即具体的一项局限",
            "“in space” 同义替换为原文的 “in space missions” 与 “in the case of deep space missions”，本段的时延论证全部落在太空任务的情境里"
          ],
          "locatingTip": "定位：B 段首句以 However 转折，思路是“先扬人、后抑机器人”。确定答案技巧：抓住段落内部的转向信号词——前三句讲人类的优点（受公众欢迎、能排除自动设备故障、能适应失重并完成哈勃望远镜的维修升级），随后 One human characteristic … which so far is lacking in robots 开始转向机器人的短板，In addition 再补一刀（不擅长应对未预先设定的情况），最后用深空任务的火星通信延迟收尾。全段后半部分连续三处都在讲机器人“做不到什么”，所以标题只能是 iii（Some limitations of robots in space），而不是谈人类问题的 vi。",
          "analysis": "B 段是全文第一个正面讨论人类价值的段落，但段落的重心落在“机器人还不行”上。前半段说人类在太空仍有价值：公众支持载人（“the idea of humans in space is popular with the public”），很多情况下只有宇航员的直接介入才能排除自动装置的故障（“there are many cases when only direct intervention by an astronaut or cosmonaut can correct the malfunction of an automatic device”），而且宇航员已被证明能适应失重、顺利完成哈勃太空望远镜的维修与升级，这是人类“能完成多种任务”的能力的实例。本段定位句随即把话题转到机器人身上：“One human characteristic which is particularly precious in space missions, and which so far is lacking in robots, is the ability to perform a great variety of tasks.”（有一项在太空任务中特别宝贵的人类特质，机器人至今仍然缺乏，那就是完成各种各样任务的能力）。紧接着 “In addition, robots are not good at reacting to situations they have not been specifically prepared for.”（此外，机器人不擅长对未专门准备过的情况作出反应），并指出这在深空任务中尤其重要：月球与地球的双向通信只需几秒，所以还能遥操作；而火星的双向时延长达数分钟，从地球发指令就困难得多。三处信息叠加，段落主旨就是“机器人在太空中的能力局限”，故选 iii。",
          "traps": [
            "为什么不是 vi（Problems in using humans for space exploration）：vi 讲的是使用人类所带来的问题，A 段讲的正是这些（成本、复杂度、安全要求），而 B 段恰恰相反，它先证明人类不可替代、再列举机器人的不足，方向与 vi 相反。",
            "为什么不是 ix（Possible examples of cooperation in space）：本段虽然提到人类与自动装置的关系（排故障、修望远镜），但落点是“人类比机器人强在哪”，并没有给出人机协同的具体方案；真正给出合作实例的是 E 段的 Mars Outposts 与金星、木星方案。",
            "为什么不是 i（Robots on Earth – a re-evaluation）：i 的关键词是地球上的机器人，对应 C 段的全自动工厂与在生产领域取代工人；B 段讨论的通信时延、失重、深空任务等场景全部发生在太空，与地球无关。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "Choose the correct heading for Paragraph C from the list of headings below.",
          "translation": "从下面的小标题列表中为 C 段选择正确的小标题。",
          "answer": "i",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "In the past it was confidently predicted that we would soon have fully automated factories in which all operations were performed without any human intervention, and forecasts of the complete substitution of workers by robots in many production areas were made. Today, these perspectives are being revised."
          },
          "synonyms": [
            "“Robots on Earth” 对应原文的 “fully automated factories”（全自动工厂）与 “the complete substitution of workers by robots in many production areas”（在许多生产领域用机器人完全取代工人），这两处讲的都是地球上的生产场景，与太空无关",
            "“a re-evaluation” 同义替换为原文的 “Today, these perspectives are being revised”，revise 就是重新审视、重新评估",
            "“are being revised” 与 “In the past it was confidently predicted” 构成时间对照：过去的乐观预言如今被修正，正是“重新评估”的含义",
            "段首的 “Many of the promises of artificial intelligence are still far from being fulfilled.” 与 “The construction of machines simulating human logical reasoning moves towards ever more distant dates.” 同样在说明过去的期待被现实拉长了兑现时间"
          ],
          "locatingTip": "定位：C 段是纯理论段，没有专有名词可抓，只能整段通读并抓主旨。确定答案技巧：先圈出段落里的时间对照词——In the past、Today，再看被对照的内容是什么：过去人们信心十足地预言会有全自动工厂、机器人将在许多生产领域完全取代工人，Today 却说 these perspectives are being revised（这些看法正在被修正）。一件事先被高估、随后被修正，就是 re-evaluation（重新评估）。再看场景词 fully automated factories、production areas，全部落在地球工业场景，所以选 i 而不是 iv；iv 虽然也含“期望降低”的意思，但它被限定在 space exploration（太空探索）上，与 C 段的对象不符。",
          "analysis": "C 段讨论人工智能承诺与现实的落差。“Many of the promises of artificial intelligence are still far from being fulfilled.”（人工智能的许多承诺仍远未兑现）；“The construction of machines simulating human logical reasoning moves towards ever more distant dates.”（建造能模拟人类逻辑推理的机器，其时间表被推向越来越遥远的将来）；“The more the performance of computers improves, the more we realise how difficult it is to build machines which display logical abilities.”（计算机性能越提高，我们越意识到让机器具备逻辑能力有多难）。本段定位句给出过去与现在的对照：“In the past it was confidently predicted that we would soon have fully automated factories in which all operations were performed without any human intervention, and forecasts of the complete substitution of workers by robots in many production areas were made. Today, these perspectives are being revised.”（过去人们自信地预言，我们很快就会拥有所有操作都无需人类干预的全自动工厂，并做出了在许多生产领域用机器人完全取代工人的预测；而今天，这些看法正在被修正）。段末的结论是转折后的新认识：所有机器，即便是最聪明的机器，也必须与人合作——而不是取代人；于是人们造出了 “cobot”（collaborative robot，协作机器人）这个词，把定位落在“帮助人类操作者而不取代他”的智能机器上。整段对象是地球上的工厂与生产岗位，主线是“原先的乐观预期被修正”，故标题为 i。",
          "traps": [
            "为什么不是 iv（Reduced expectations for space exploration）：这是本题最强的干扰项。C 段的确写的是“预期被降低”，但被降低的对象不是太空探索，而是地球上的人工智能与自动化生产：fully automated factories、production areas、substitution of workers by robots。iv 把话题限定在 space exploration，与 C 段的场景不符。",
            "为什么不是 vii（The danger to humans of intelligent machines）：vii 说的是智能机器对人的威胁或危险，而 C 段的结论恰恰相反——“It seems that all machines, even the smartest ones, must cooperate with humans.”，机器不但不威胁人，还必须与人配合，因此 vii 与段落立场相反。",
            "为什么不是 ii（The barriers to cooperation in space exploration）：C 段没有涉及太空探索，谈的是地球上的工厂与工人，且段落完全没有讨论任何“合作的障碍”，而是强调合作是当下的需要。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "Choose the correct heading for Paragraph D from the list of headings below.",
          "translation": "从下面的小标题列表中为 D 段选择正确的小标题。",
          "answer": "v",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Tasks which were in the past entrusted only to machines are now performed by human beings, sometimes with the aim of using simpler and less costly devices, sometimes to obtain better performance."
          },
          "synonyms": [
            "“A general reconsideration” 同义替换为原文的 “A similar trend is also apparent in the field of space exploration” 与 “The human-machine relationship must evolve towards a closer collaboration”，都是在讲分工需要被重新界定",
            "“human/robot responsibilities” 同义替换为原文的 “Tasks which were in the past entrusted only to machines are now performed by human beings”，原文用 in the past 与 now 的时间对照说明任务该由谁承担发生了调换",
            "“reconsideration” 同义替换为原文的 “to involve a person in the control loop is a welcome simplification”，原文把这看作一种值得欢迎的简化，即对原有分工的重新评价",
            "“in space” 同义替换为原文的 “in the field of space exploration”"
          ],
          "locatingTip": "定位：D 段首句 “A similar trend is also apparent in the field of space exploration.” 中的 similar 提示它承接 C 段的结论，把话题从地球生产平移到太空探索。确定答案技巧：本段的骨架是一组时间对照——in the past 与 now：过去只交给机器的任务，如今由人来完成（Tasks which were in the past entrusted only to machines are now performed by human beings）；后面又补上 to involve a person in the control loop is a welcome simplification、Many operations originally designed to be performed under completely automatic control can be performed more efficiently by astronauts，最后一句收束到 The human-machine relationship must evolve towards a closer collaboration。全段既没有给出具体方案（那是 E 段），也没有列举障碍（那是与 ii 相反的方向），而是对太空探索中“人与机器各自该干什么”作总体重估，因此选 v。",
          "analysis": "D 段把 C 段的判断推广到太空领域。首句 “A similar trend is also apparent in the field of space exploration.”（同样的趋势在太空探索领域也显而易见）。定位句进一步说明方向：“Tasks which were in the past entrusted only to machines are now performed by human beings, sometimes with the aim of using simpler and less costly devices, sometimes to obtain better performance.”（过去只委托给机器完成的任务，如今由人来执行，有时是为了使用更简单、更便宜的设备，有时是为了取得更好的效果）。随后两句给出理由与评价：把一个人纳入控制回路（to involve a person in the control loop）是一种值得欢迎的简化，可以在不损害安全的前提下降低任务成本；许多原本按全自动控制设计的操作，由宇航员来做效率更高，也许还能借助他们的 cobots。段末用 “The human-machine relationship must evolve towards a closer collaboration.”（人机关系必须朝着更紧密的协作演进）定调。整段是对“太空探索里人与机器各自承担什么”的总体重新审视，不是具体案例，也不是障碍清单，故选 v。",
          "traps": [
            "为什么不是 ii（The barriers to cooperation in space exploration）：ii 的关键词是 barriers（障碍），而 D 段通篇主张合作、且认为合作能降低成本、提高效率，完全没有讨论任何阻碍合作的因素，立场与 ii 相反。",
            "为什么不是 ix（Possible examples of cooperation in space）：ix 要求段落给出合作的具体实例，D 段只有一般性论断（to involve a person in the control loop、performed more efficiently by astronauts），真正给出实例的是 E 段（Mars Outposts、金星与木星方案），故 D 段不能选 ix。",
            "为什么不是 vi（Problems in using humans for space exploration）：vi 讲人类参与带来的问题，对应 A 段；D 段虽然也谈人类参与，但态度是正面的——a welcome simplification、lower the cost of a mission without compromising safety，正是对人类参与价值的重新肯定，与 vi 相反。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "Choose the correct heading for Paragraph E from the list of headings below.",
          "translation": "从下面的小标题列表中为 E 段选择正确的小标题。",
          "answer": "ix",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "One way this could happen is by adopting the Mars Outposts approach, proposed by the Planetary Society. This would involve sending a number of robotic research stations to Mars, equipped with permanent communications and navigational systems."
          },
          "synonyms": [
            "“Possible examples” 同义替换为原文的 “One way this could happen is by adopting the Mars Outposts approach” 与 “It has also been suggested that …”，前者提出一种做法，后者提出另一种设想，都是举例性质的表达",
            "“of cooperation in space” 同义替换为原文的 “sending a number of robotic research stations to Mars” 与 “robots could be controlled by human beings located in spaceships”，即机器人到行星表面工作、人类在轨道航天器上指挥的分工合作",
            "“the Mars Outposts approach, proposed by the Planetary Society” 是原文给出的第一个具体方案，属于“可能的实例”",
            "“in space” 同义替换为原文的 “in orbit around the planet” 与 “the exploration of Mars by humans”"
          ],
          "locatingTip": "定位：E 段首句 “One way this could happen …” 中的 this could happen 直接回指 D 段末句的 closer collaboration，说明本段是在给 D 段的抽象主张配例子。确定答案技巧：看两个提出方案的句式——One way this could happen is by adopting the Mars Outposts approach, proposed by the Planetary Society（一种方式是采用行星协会提出的火星前哨站方案）、It has also been suggested that …（也有人提出……），这两处都是“举例、给出可行方案”的信号；再看方案内容：派机器人研究站去火星、在金星或木星等最困难的环境里由停在行星轨道的飞船上的宇航员遥控机器人，并说明这样通信时延远小于从地球遥控。两例都是太空场景中人与机器分工合作的设想，故标题为 ix。",
          "analysis": "E 段紧接 D 段的结论，给出人机合作的可能性。定位句提出第一种方案：“One way this could happen is by adopting the Mars Outposts approach, proposed by the Planetary Society. This would involve sending a number of robotic research stations to Mars, equipped with permanent communications and navigational systems.”（实现这一点的一种方式是采用行星协会提出的火星前哨站方案：向火星发送若干机器人研究站，配备永久的通信与导航系统）。随后说明它们的功能：“They would perform research, and establish the infrastructure needed to prepare future landing sites for the exploration of Mars by humans.”（它们将开展研究，并建立为未来人类探索火星准备着陆点所需的基础设施）。第 4 句 “It has also been suggested that in the most difficult environments, as on Venus or Jupiter, robots could be controlled by human beings located in spaceships which remain in orbit around the planet.”（也有人提出，在金星或木星这类最困难的环境中，机器人可以由停留在行星轨道上的飞船里的宇航员控制），并给出好处：此时人与机器人之间的通信时延远小于从地球遥控。全段由两个具体设想构成，都是太空合作的实例，故选 ix。",
          "traps": [
            "为什么不是 v（A general reconsideration of human/robot responsibilities in space）：v 描写的是一般性的重新审视，对应的正是 D 段（A similar trend、tasks now performed by human beings、the human-machine relationship must evolve）；E 段已经进入具体方案与实例层面，落点是“有哪些可能的做法”，因此不选 v。",
            "为什么不是 ii（The barriers to cooperation in space exploration）：ii 要求出现障碍或阻力，而 E 段给的恰恰是解决办法（火星前哨站、轨道遥控）与它们的好处（时延更短、为人类登陆做准备），全段没有任何“合作难以进行”的内容。",
            "为什么不是 iii（Some limitations of robots in space）：E 段虽提到机器人的工作，但落点是通过人类参与（在轨道飞船里遥控）来弥补遥控距离的限制，讲的是可行的合作方式，而不是机器人的能力缺陷；讲机器人局限的是 B 段。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "Choose the correct heading for Paragraph F from the list of headings below.",
          "translation": "从下面的小标题列表中为 F 段选择正确的小标题。",
          "answer": "viii",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "So the aim for humankind in the future will be not just the exploration of space, but its colonisation. The result of exploring and living in space may be a deep change in the views which humankind has of itself."
          },
          "synonyms": [
            "“Space settlement” 同义替换为原文的 “its colonisation”（对太空的殖民定居）与 “places to live”（可居住的地方），也对应 “They must learn how to voyage through space towards destinations which will be not only scientific bases but also places to live.”",
            "“the development of greater self-awareness” 同义替换为原文的 “a deep change in the views which humankind has of itself”（人类对自身的看法发生深刻改变）",
            "“greater self-awareness” 同义替换为原文的 “have given humankind a new consciousness of its fragility, its smallness, and its unity”（使人类对自身的脆弱、渺小与统一有了新的意识）",
            "“the need to protect and preserve it” 与 “a realisation” 说明这种自我认识已经带来行动上的觉悟，仍是 self-awareness 这一层意思"
          ],
          "locatingTip": "定位：F 段是末段，以 But 开头作全篇的结论性升华，没有可抓的专有名词，只能通读并抓两个主题词。确定答案技巧：一段话里出现了两件不同层面的事就很可能对应一个双主题标题。本段前半层是“定居”：they must learn how to voyage through space towards destinations which will be not only scientific bases but also places to live，段中又说 the aim for humankind in the future will be not just the exploration of space, but its colonisation，注意 not just … but 结构把重心明确放在 colonisation 上。后半层是“自我认识”：The result of exploring and living in space may be a deep change in the views which humankind has of itself，接着用阿波罗计划从月球拍回的地球照片说明人类由此产生了对自身脆弱、渺小与统一的新意识（a new consciousness of its fragility, its smallness, and its unity），并进而意识到要保护与保存地球。定居与自我意识两层意思齐备，故选 viii。",
          "analysis": "F 段收束全文并给出结论。“But if space is to be more than a place to build automatic laboratories or set up industrial enterprises in the vicinity of our planet, the presence of humans is essential.”（但如果太空不只是在地球附近建自动实验室或办工业企业的场所，那么人的存在就必不可少）；“They must learn how to voyage through space towards destinations which will be not only scientific bases but also places to live.”（他们必须学会穿越太空，前往那些不仅是科研基地、也是居住之地的地方）；“If space is a frontier, that frontier must see the presence of people.”（如果太空是一片边疆，那片边疆就必须有人）。本段定位句把目标讲得最明确：“So the aim for humankind in the future will be not just the exploration of space, but its colonisation.”（因此人类未来的目标将不只是探索太空，而是对太空的殖民定居）。紧接着转入第二层意思：“The result of exploring and living in space may be a deep change in the views which humankind has of itself.”（在太空探索与生活的结果，可能会深刻改变人类对自身的看法），并以阿波罗计划拍摄的地球照片为例——“have given humankind a new consciousness of its fragility, its smallness, and its unity”（让人类对自身的脆弱、渺小与统一产生了新的意识），由此生出保护与保存地球的觉悟。定居与自我意识两条线索都落在本段，故选 viii。",
          "traps": [
            "为什么不是 iv（Reduced expectations for space exploration）：iv 说的是期望被降低，而 F 段恰恰在提高目标——from exploration to colonisation（从探索到殖民定居），把太空视为必须有人存在的新边疆，态度是进取的，与 iv 相反。",
            "为什么不是 ii（The barriers to cooperation in space exploration）：F 段完全没有讨论合作的障碍，它讲的是人类的最终目标与由此产生的自我认识；文中 “The images of Earth taken from the Moon in the Apollo programme have given humankind a new consciousness …” 属于人类认知层面的内容，与 ii 的 barriers 无关。",
            "为什么不是 i（Robots on Earth – a re-evaluation）：F 段虽然提到 automatic laboratories 与 industrial enterprises，但那只是作为“太空不该仅止于此”的铺垫，段落随后立刻转向 humans 与 colonisation，机器人不是本段的论述对象；谈地球机器人重新评估的是 C 段。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–21 多项选择（Choose TWO letters，A–E）",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 21
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "According to the writer, which TWO predictions about artificial intelligence have not yet been fulfilled?",
          "translation": "根据作者，关于人工智能的哪两项预言至今尚未实现？（本题为该道选两项题的第一个答案：A. Robots will work independently of humans. 机器人将独立于人类工作）",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "forecasts of the complete substitution of workers by robots in many production areas were made. Today, these perspectives are being revised. It seems that all machines, even the smartest ones, must cooperate with humans."
          },
          "synonyms": [
            "“predictions” 同义替换为原文的 “it was confidently predicted that …” 与 “forecasts … were made”，predicted 与 forecasts 都是“预言、预测”",
            "“have not yet been fulfilled” 同义替换为原文的 “Today, these perspectives are being revised”（今天这些看法正在被修正）与段首的 “Many of the promises of artificial intelligence are still far from being fulfilled.”",
            "“Robots will work independently of humans” 同义替换为原文的 “fully automated factories in which all operations were performed without any human intervention”，without any human intervention 即“无需人类介入、独立于人类”",
            "“the complete substitution of workers by robots in many production areas” 从“工人被完全取代”的角度再次印证“机器人独立于人类工作”这一预言",
            "“must cooperate with humans” 从反面说明机器人今天仍离不开人，因此“独立工作”的预言未兑现"
          ],
          "locatingTip": "定位：题干问的是对人工智能的预言，全文集中谈这一点的只有 C 段，本段第 4 句以 “In the past it was confidently predicted that …” 引出预言，第 5 句以 “Today, these perspectives are being revised.” 给出结论，扫读时盯住 In the past 与 Today 这组时间对照即可。确定答案技巧：题干的条件有两个——是“预言”（题干的 predictions 对应原文 forecast/predicted），而且“尚未实现”（对应 these perspectives are being revised、still far from being fulfilled）。选项 A 的内容是机器人独立于人类工作，正好对应原文 “fully automated factories in which all operations were performed without any human intervention” 与 “the complete substitution of workers by robots”，而原文接着说今天这些看法正在被修正、所有机器都必须与人合作，正好证明这项预言没有实现，所以 A 入选。本题为选两项题的第一个答案，与第 21 题的 D 合起来构成完整答案。",
          "analysis": "C 段全段围绕“人工智能的承诺与现实”展开。段首两句先定基调：“Many of the promises of artificial intelligence are still far from being fulfilled.”（人工智能的许多承诺仍远未兑现）；“The construction of machines simulating human logical reasoning moves towards ever more distant dates.”（建造能模拟人类逻辑推理的机器，其实现日期被推向越来越遥远的将来）。随后两句是本题的核心证据：“In the past it was confidently predicted that we would soon have fully automated factories in which all operations were performed without any human intervention, and forecasts of the complete substitution of workers by robots in many production areas were made. Today, these perspectives are being revised.”（过去人们自信地预言，我们很快就会拥有所有操作都无需人类干预的全自动工厂，并预测在许多生产领域中机器人将完全取代工人；而今天，这些看法正在被修正）。定位段末与结论句合读可知，现在的事实是 “It seems that all machines, even the smartest ones, must cooperate with humans.”（似乎所有机器，即使是最聪明的机器，都必须与人合作），并且人们造出了 cobot（协作机器人）这个概念，指帮助人类操作者而不取代他的智能机器。选项 A 说的正是“机器人将独立于人类工作”，对应原文的 without any human intervention 与 the complete substitution of workers by robots，而原文明确说这一预期正在被修正、机器必须与人合作，可见预言尚未实现，故选 A。",
          "traps": [
            "为什么不是 B（Robots will begin to oppose human interests）：全文没有任何关于机器人“反对或对抗人类利益”的表述，C 段的立场恰恰相反——“It seems that all machines, even the smartest ones, must cooperate with humans.”，机器要与人合作；B 属于无中生有。",
            "为什么不是 C（Robots will be used to help humans perform tasks more efficiently）：这不是尚未实现的预言，而是原文所说的当下需要与正在实现的方向——“the present need appears to be for an intelligent machine capable of helping a human operator without replacing him or her”；D 段还说 “Many operations originally designed to be performed under completely automatic control can be performed more efficiently by astronauts, perhaps helped by their ‘cobots’”，可见“机器帮助人更高效地完成任务”已是现实或现实需求，与题干“尚未实现”的条件不符。",
            "为什么不是 E（Robots will become too costly to use on space missions）：原文谈成本问题的是“人类的参与”——A 段说 “produces a large increase in costs”“the systems required are bulky and costly”，指的是载人使航天器昂贵笨重，而不是机器人本身昂贵到无法用于太空任务；E 把成本问题安到了机器人身上，属于张冠李戴。",
            "补充说明：本题与第 21 题同属一道 Choose TWO 题，两项答案合起来是 A 与 D；另一正确项 D 的详细依据见第 21 题解析。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "According to the writer, which TWO predictions about artificial intelligence have not yet been fulfilled?",
          "translation": "根据作者，关于人工智能的哪两项预言至今尚未实现？（本题为该道选两项题的第二个答案：D. Robots will think in the same way as humans. 机器人将像人一样思考）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Many of the promises of artificial intelligence are still far from being fulfilled. The construction of machines simulating human logical reasoning moves towards ever more distant dates. The more the performance of computers improves, the more we realise how difficult it is to build machines which display logical abilities."
          },
          "synonyms": [
            "“Robots will think in the same way as humans” 同义替换为原文的 “machines simulating human logical reasoning”（模拟人类逻辑推理的机器），simulating human logical reasoning 即像人一样进行思考与推理",
            "“have not yet been fulfilled” 同义替换为原文的 “moves towards ever more distant dates”（实现日期被推向越来越遥远的将来）与 “still far from being fulfilled”（远未兑现）",
            "“The more the performance of computers improves, the more we realise how difficult it is to build machines which display logical abilities.” 进一步说明让机器具备人的逻辑思维能力这一目标至今难以达成，hardware 变强也没能解决问题",
            "“promises of artificial intelligence” 是题干 predictions 的同义表达，说明这几句正是对人工智能预言的兑现情况所作的评价"
          ],
          "locatingTip": "定位：与第 20 题同一段、同一道选题，先在 C 段中锁定谈“预言未兑现”的三句话：段首 many of the promises … are still far from being fulfilled、第 2 句 The construction of machines simulating human logical reasoning moves towards ever more distant dates、第 3 句 The more the performance of computers improves…。确定答案技巧：选项 D 说的是机器人像人一样思考，对应原文的 simulating human logical reasoning（模拟人类逻辑推理）与 machines which display logical abilities（能表现出逻辑能力的机器）；原文用 moves towards ever more distant dates 说明这类机器的实现被一推再推，用 the more … the more 结构说明计算机性能提升反而让人更看清困难，两处都指向“至今没有实现”，所以 D 入选。注意本题是选两项题的第二个答案，与第 20 题的 A 合起来构成完整答案，作答时不要在同一道题里重复选 A。",
          "analysis": "C 段开头三句构成本题的证据链，且句句递进。第 1 句总述：“Many of the promises of artificial intelligence are still far from being fulfilled.”（人工智能的许多承诺仍远未兑现）。第 2 句具体到“思考能力”这一项：“The construction of machines simulating human logical reasoning moves towards ever more distant dates.”（建造能模拟人类逻辑推理的机器，被推向越来越遥远的日期），即“让机器像人一样推理”的设想不仅没有实现，兑现时间反而一再延后。第 3 句从技术现实解释原因：“The more the performance of computers improves, the more we realise how difficult it is to build machines which display logical abilities.”（计算机性能越提高，我们越意识到建造能展现逻辑能力的机器有多困难）。选项 D “Robots will think in the same way as humans” 与 simulating human logical reasoning、machines which display logical abilities 完全对应，而原文说实现日期越来越远、远未兑现，说明这项预言至今落空，故选 D。再与第 20 题的 A 对照可见两项各占一层：A 对应“独立工作”（without any human intervention），D 对应“像人一样思考”（simulating human logical reasoning），一项是社会分工层面，一项是思维能力层面。",
          "traps": [
            "为什么不是 B（Robots will begin to oppose human interests）：C 段与全文都没有关于机器人对抗人类利益的任何表述，原文强调机器必须与人合作（must cooperate with humans），B 无据。",
            "为什么不是 C（Robots will be used to help humans perform tasks more efficiently）：这是原文所说的当前现实与需求——“the present need appears to be for an intelligent machine capable of helping a human operator”，D 段也说借助 cobots 的操作可以更高效地完成；既然已经在做，就不属于“至今尚未实现的预言”。",
            "为什么不是 E（Robots will become too costly to use on space missions）：原文讲成本高的是载人方案（A 段 “produces a large increase in costs”“the systems required are bulky and costly”），而不是机器人；全文也没有预言机器人会因过于昂贵而无法用于太空任务，E 属于把成本话题错位到机器人身上。",
            "补充说明：本题与第 20 题同属一道 Choose TWO 题，两项答案合起来是 A 与 D；A 项的详细依据见第 20 题解析。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 22–26 摘要填空（Summary completion，ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 22,
        "end": 26
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "For example, when exploring the planet Mars, robots could be used to set up 22 ________ and do initial research before humans arrive.",
          "translation": "例如，在探索火星时，机器人可以被用来建立 ________，并在人类到达之前开展初步研究。",
          "answer": "infrastructure",
          "wordClass": "名词（不可数抽象名词；作动词短语 set up 的宾语，与后面的 do initial research 并列，题干中不加冠词，填不可数形式 infrastructure）",
          "locating": {
            "paragraph": "E",
            "quote": "They would perform research, and establish the infrastructure needed to prepare future landing sites for the exploration of Mars by humans."
          },
          "synonyms": [
            "“set up” 同义替换为原文的 “establish”，两词都表示“建立、设立”",
            "“robots could be used to” 同义替换为原文的 “sending a number of robotic research stations to Mars”，题干的 robots 对应原文的 robotic research stations",
            "“do initial research before humans arrive” 同义替换为原文的 “perform research, and establish the infrastructure needed to prepare future landing sites for the exploration of Mars by humans”，perform 对应 do，initial 对应 before humans arrive",
            "“For example, when exploring the planet Mars” 对应原文的 “One way this could happen is by adopting the Mars Outposts approach”，都是引出火星探索这一具体做法"
          ],
          "locatingTip": "定位：摘要有小标题 “Humans in space – the Mars Outposts approach and its implications”，Mars Outposts 这一专有说法全文只出现在 E 段首句，因此第 22、23、24 题都应先在 E 段范围内找。确定答案技巧：题干的关键动词是 set up，回原文找它的同义动词，定位句中的 establish 与之对应；题干说机器人先“set up 某物”并“做初步研究”，原文正是 “perform research, and establish the infrastructure” 两件事并列，只是把顺序前后调换了，因此空格要填的是 establish 后面的宾语 infrastructure。填词时注意 ONE WORD ONLY，写 infrastructure 原形即可，不要写 buildings 之类的近义泛词，也不要漏掉复数的判断：此处 infrastructure 为不可数名词，不加 s。",
          "analysis": "E 段介绍“火星前哨站”方案。前两句交代做法：“One way this could happen is by adopting the Mars Outposts approach, proposed by the Planetary Society. This would involve sending a number of robotic research stations to Mars, equipped with permanent communications and navigational systems.”（实现这一目标的一种方式是采用行星协会提出的火星前哨站方案：向火星发送若干机器人研究站，配备永久的通信与导航系统）。定位句接着说明这些研究站的任务：“They would perform research, and establish the infrastructure needed to prepare future landing sites for the exploration of Mars by humans.”（它们将开展研究，并建立为未来人类探索火星准备着陆点所需的基础设施）。题干把原文的两件事换序改写：原文先 perform research 后 establish the infrastructure，题干先 set up [22] 后 do initial research。对应关系很清楚：set up 对应 establish，initial research 对应 perform research，而 before humans arrive 对应 needed to prepare future landing sites for the exploration of Mars by humans（为人类未来探索准备着陆点），因此空格填 infrastructure。词性上，establish 是及物动词，其后需要名词作宾语，infrastructure 在此为不可数抽象名词，与后面的过去分词短语 needed to prepare future landing sites 一起构成“为将来人类登陆所必需的基础设施”，填原形即可。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "In other cases, humans could stay in orbiting 23 ________ and give orders to robots working on the surface of the planet.",
          "translation": "在其他情况下，人类可以待在环绕行星运行的 ________ 中，向在行星表面工作的机器人下达指令。",
          "answer": "spaceships",
          "wordClass": "名词（复数；位于介词 in 之后作地点宾语，受 orbiting 修饰，指停留在行星轨道上的航天器）",
          "locating": {
            "paragraph": "E",
            "quote": "It has also been suggested that in the most difficult environments, as on Venus or Jupiter, robots could be controlled by human beings located in spaceships which remain in orbit around the planet."
          },
          "synonyms": [
            "“give orders to robots” 同义替换为原文的 “robots could be controlled by human beings”，原文用被动语态“机器人被人类控制”，题干改写成主动语态“人类向机器人下指令”",
            "“humans could stay in orbiting …” 同义替换为原文的 “human beings located in spaceships which remain in orbit around the planet”，stay 对应 located，orbiting 对应 remain in orbit",
            "“In other cases” 同义替换为原文的 “It has also been suggested that …”，都是引出另一种可行的设想",
            "“the surface of the planet” 是原文 “in the most difficult environments, as on Venus or Jupiter” 的概括表达：在金星、木星这类环境恶劣的行星上工作，人只能在轨道上遥控，因此工作地点必然是行星表面"
          ],
          "locatingTip": "定位：本题仍在 E 段，题干讲的是人类待在轨道上、向机器人发指令，正是 E 段倒数第二句 “robots could be controlled by human beings located in spaceships which remain in orbit around the planet” 所描述的第二套方案（第一套是火星研究站）。确定答案技巧：先看语法位置——空格前是介词 in、后有分词 orbiting 修饰，说明要填的是一个“能在轨道上待人的具体物体”，是一个名词；原文对应处是 human beings located in spaceships which remain in orbit around the planet，其中 spaceships 出现在介词 in 之后，与空格的语法位置完全一致，因此填 spaceships。注意要用复数形式，因为原文是复数 spaceships，而且人类不可能只坐一艘；同时不要填 orbit（那是它所在的位置，不是容器）、也不要填 planet（那是被环绕的对象）。",
          "analysis": "E 段在讲完火星前哨站方案后，用 “It has also been suggested that …” 引出第二套设想：“It has also been suggested that in the most difficult environments, as on Venus or Jupiter, robots could be controlled by human beings located in spaceships which remain in orbit around the planet. In this case, the link time for communication between humans and robots would be far less than it would be from Earth.”（也有人提出，在金星或木星这类最困难的环境中，机器人可以由停留在行星轨道上的飞船里的人类控制；在这种情况下，人与机器人之间的通信时延将远小于从地球遥控的时延）。题干把这一设想概括为：“In other cases, humans could stay in orbiting [23] and give orders to robots working on the surface of the planet.”，其中 humans could stay in orbiting … 对应原文 human beings located in spaceships which remain in orbit around the planet，give orders to robots 对应 robots could be controlled by human beings（主动与被动互换）。逐项核对后，空格处的名词就是 spaceships，且必须保持原文的复数形式。需要注意的是，题干中的 on the surface of the planet 并非原文原词，而是对 “in the most difficult environments, as on Venus or Jupiter” 的合理概括（环境恶劣的行星上，人无法落地，只能在轨道遥控），这层转述不影响答案判断；本题答案的唯一依据仍是原文的 spaceships。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "This would increase the speed of 24 ________ with the robots.",
          "translation": "这会提高与机器人之间的 ________ 速度。",
          "answer": "communication",
          "wordClass": "名词（不可数抽象名词，作介词 of 的宾语，与 increase the speed of 搭配，指人与机器人之间的通信）",
          "locating": {
            "paragraph": "E",
            "quote": "In this case, the link time for communication between humans and robots would be far less than it would be from Earth."
          },
          "synonyms": [
            "“increase the speed of …” 同义替换为原文的 “the link time … would be far less”，原文从“连接时间更短”的反面表达，题干从“速度更快”的正面表达，语义相同",
            "“communication” 在原文中原词出现：“the link time for communication between humans and robots”",
            "“with the robots” 同义替换为原文的 “between humans and robots”，题干的 with 概括了双向联系的关系",
            "“This would …” 对应原文的 “In this case …”，都回指前一句“人类在轨道飞船上遥控机器人”的设想"
          ],
          "locatingTip": "定位：本题的 this 回指上一句（人类待在轨道飞船上控制机器人）的做法，因此仍落在 E 段最后一句。确定答案技巧：题干说这种做法会“提高……的速度”，原文并没有直接说速度变快，而是说 “the link time … would be far less than it would be from Earth”（连接时间远少于从地球遥控），时延变短即通信速度变快，这是典型的正反互换改写；再看原文这一时延是限定在哪件事上的——“for communication between humans and robots”，与题干 “the speed of [24] with the robots” 的语法槽位吻合，故填 communication。注意 ONE WORD ONLY，填不可数名词 communication，不要加 s，也不要填 link（link time 是“连接时长”，不是被提速的对象）。",
          "analysis": "E 段末句是本题的依据：“In this case, the link time for communication between humans and robots would be far less than it would be from Earth.”（在这种情况下，人类与机器人之间通信的连接时间将远少于从地球遥控时的连接时间）。题干改写为 “This would increase the speed of [24] with the robots.”，两处对应如下：In this case 对应题干的 This（都指前一句的“人在轨道飞船上遥控机器人”）；the link time … would be far less 对应题干的 increase the speed，原文用“延迟更少”表达，题干用“速度更快”表达，方向相反、意思相同；for communication between humans and robots 对应题干的 of [24] with the robots。因此空格填 communication（通信）。词性上，of 是介词，其后需名词性成分，communication 在此为不可数抽象名词，表示“通信”这一行为，不加冠词、不变复数，保持原文的单词形式填入即可。本题的判分要点是识别“时延更短”与“速度更快”这对反向表述，很多考生一看到原文是 less 就以为要填表示“减少”的词，其实空格前是 the speed of，只能填被提速的那件事。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "In such ways, robots might be used to work in space in commercial enterprises or 25 ________.",
          "translation": "通过这类方式，机器人或许可以在太空中的商业企业或 ________ 里工作。",
          "answer": "laboratories",
          "wordClass": "名词（复数；与前面的 enterprises 并列，作介词 in 的宾语，指太空中的自动实验室）",
          "locating": {
            "paragraph": "F",
            "quote": "But if space is to be more than a place to build automatic laboratories or set up industrial enterprises in the vicinity of our planet, the presence of humans is essential."
          },
          "synonyms": [
            "“commercial enterprises” 同义替换为原文的 “industrial enterprises”，“工业企业”在题干中被概括为“商业企业”，仍属“在太空中经营的企业”这一类",
            "“robots might be used to work in space in …” 对应原文的 “a place to build automatic laboratories”，即把太空当作建实验室（以及办企业）的场所",
            "“laboratories” 在原文中原词出现，且带 automatic（自动的）这一修饰语，正说明这类实验室由机器（机器人）运作，与题干 robots … work in 相合",
            "“In such ways” 是对前面 Mars Outposts 等方案的总结，与原文此处谈论太空用途的语境一致"
          ],
          "locatingTip": "定位：本题转到 F 段，因为摘要在最后两句说 “In such ways, robots might be used to work in space in commercial enterprises or [25]”，与 “However, the final aim of humankind may be the [26] of space” 相衔接，而这两层意思都在末段 F：“robots 在太空中工作”对应 F 段首句的 laboratories 与 enterprises，“人类最终目标”对应 F 段的 its colonisation。确定答案技巧：题干用 or 并列两个工作场所，回原文找同样的 or 并列结构，即 “a place to build automatic laboratories or set up industrial enterprises in the vicinity of our planet”；原文的顺序是先 laboratories 后 industrial enterprises，题干相反，先 commercial enterprises 后 [25]，把剩下的一项填进去即可，答案是 laboratories（实验室）。填词时注意保持复数形式，因为原文是复数 automatic laboratories，且与并列的 enterprises 数一致；不要填 research（那是动作，不是场所），也不要写成 lab 这种缩写形式。",
          "analysis": "F 段首句为本题提供依据：“But if space is to be more than a place to build automatic laboratories or set up industrial enterprises in the vicinity of our planet, the presence of humans is essential.”（但如果太空不只是在地球附近建造自动实验室或开办工业企业的场所，那么人的存在就必不可少）。句中出现一组 or 并列：automatic laboratories（自动实验室）与 industrial enterprises（工业企业），都是“机器人可以在太空中从事的场所”；题干改写为 “robots might be used to work in space in commercial enterprises or [25]”，并列结构相同、顺序相反，因此空格应填原文的 laboratories。语义上也完全吻合：原文给 laboratories 加的修饰语是 automatic（自动的），恰好说明这些实验室由自动化设备、即机器人来运作，与题干的 robots might be used to work in space 相呼应；而题干的 commercial enterprises 是对 industrial enterprises 的概括改写。需要注意两点：一是必须保留复数形式 laboratories（与并列的 enterprises 一致，且原文即为复数）；二是不受题干把 enterprises 放在前面的影响，答案仍然是原文中与之并列的另一项。该句同时用 But 转折，暗示“太空不应仅限于建实验室和办企业”，为末段的殖民定居主张作铺垫，这也解释了为何紧接着的第 26 题要填 colonisation。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "However, the final aim of humankind may be the 26 ________ of space, and this could in turn change people's attitudes towards Earth.",
          "translation": "然而，人类最终的目标也许是对太空的 ________，而这反过来可能改变人们对地球的态度。",
          "answer": "colonisation",
          "wordClass": "名词（不可数；动词 colonise 的名词形式，作系动词 be 后表语 the … of space 的中心词，其后由介词 of 引出对象 space，填不可数形式 colonisation）",
          "locating": {
            "paragraph": "F",
            "quote": "So the aim for humankind in the future will be not just the exploration of space, but its colonisation."
          },
          "synonyms": [
            "“the final aim of humankind” 同义替换为原文的 “the aim for humankind in the future”，final 对应 in the future，即“未来的、最终的目标”",
            "“the colonisation of space” 同义替换为原文的 “its colonisation”，原文用代词 its 回指前面的 space",
            "“not just the exploration of space, but its colonisation” 这一 not just … but 结构把重心落在 colonisation 上，正对应题干的 final aim",
            "“this could in turn change people's attitudes towards Earth” 同义替换为原文的 “The result of exploring and living in space may be a deep change in the views which humankind has of itself.” 以及后文 “have given humankind a new consciousness of its fragility, its smallness, and its unity”“a realisation of the need to protect and preserve it”"
          ],
          "locatingTip": "定位：题干的关键词是 final aim of humankind 与 of space，F 段中唯一同时出现 humankind 与太空目标的是 “So the aim for humankind in the future will be not just the exploration of space, but its colonisation.”，句首的 So 表明这是全篇的结论，扫读末段时看到 So 与 not just … but 结构即可锁定。确定答案技巧：题干空格前是定冠词 the、后是 of space，说明所填词是名词并与 of space 构成“对太空的某种动作”的名词短语；原文 its colonisation 中的 its 正是 space 的代词，因此直接填入 colonisation。同时题干后半句 “this could in turn change people's attitudes towards Earth” 可与原文接下来的 “The result of exploring and living in space may be a deep change in the views which humankind has of itself.” 及阿波罗照片一段互相印证，确认后半句取材于同一段。拼写要走英式拼写 colonisation（原文为 s），不要写成 colonization 或 colonize。",
          "analysis": "F 段末五句是全文的落点。定位句：“So the aim for humankind in the future will be not just the exploration of space, but its colonisation.”（因此，人类未来的目标将不只是探索太空，而是对太空的殖民定居）。句中的 not just … but 结构很重要，它把“探索”降为手段、把“殖民定居”立为最终目标，正对应题干的 final aim。随后两句说明这一目标带来的认知变化：“The result of exploring and living in space may be a deep change in the views which humankind has of itself. And this process is already under way.”（在太空探索与生活的结果，可能是人类对自身看法的一次深刻改变，而这一过程已经在进行中）；再以阿波罗计划从月球拍摄的地球照片为例：“The images of Earth taken from the Moon in the Apollo programme have given humankind a new consciousness of its fragility, its smallness, and its unity. These impressions have triggered a realisation of the need to protect and preserve it, for it is the place in the solar system most suitable for us and above all it is the only place we have, at least for now.”（这些地球影像让人类对自身的脆弱、渺小与统一产生了新的意识，并促成了保护与保存地球的觉悟——因为地球是太阳系中最适合我们的地方，而且最重要的是，至少目前它是我们唯一拥有的地方）。题干后半句 this could in turn change people's attitudes towards Earth 即取材于此。就本题而言，只需抓住 its colonisation 并注意 its 指代 space、保持英式拼写 colonisation 即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
