(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1923", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1923",
  "meta": {
    "examId": "p1-medium-1923",
    "title": "Why Risks Can Go Wrong 风险为何会出错",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 小标题匹配（List of Headings，i–xi）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Choose the correct heading for Paragraph B from the list of headings below.",
          "translation": "从下面的标题列表中为 B 段选择正确的小标题。",
          "answer": "vi",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "But in the past decade the fields of behavioural finance and behavioural economics have blossomed, and in 2002 Kahneman shared a Nobel prize in economics for his work."
          },
          "synonyms": [
            "“A successful approach to the study of decision-making” 同义替换为 “the fields of behavioural finance and behavioural economics have blossomed”（研究决策的这条道路最终开花结果）",
            "“A successful” 同义替换为 “shared a Nobel prize in economics for his work”（以诺贝尔经济学奖证明其成功）",
            "“the study of decision-making” 同义替换为 “applying psychological insights to economics and business decisions”（把心理学洞见用于经济与商业决策的研究）"
          ],
          "locatingTip": "定位：本题是给 B 段配小标题，直接通读 B 段即可；B 段以专有名词 Daniel Kahneman 与时间 1960s 开头，是全文唯一介绍他研究历程的段落，抓住人名就能锁定段落。确定答案技巧：段落主线是“把心理学洞见用于经济与商业决策这一研究方法，从当初被认为相当怪异（seen as rather bizarre）到成为蓬勃发展的领域并获得诺贝尔奖”，即研究决策的一种方法取得了成功，与 vi 完全对应；注意不要被末句“错误是系统性、可预测的”带偏，那只是他研究的结论之一。",
          "analysis": "B 段先说 1960 年代年轻的美国研究心理学家 Daniel Kahneman 对“人无法做出合乎逻辑的决定”产生兴趣，随后说明他与同事刚起步时，把心理学洞见应用于经济与商业决策的想法被视为相当怪异（rather bizarre）；但过去十年行为金融与行为经济蓬勃发展，2002 年他更分享了诺贝尔经济学奖，如今企业与跨国银行纷纷求助于他。这一“不被看好最终走向成功”的脉络说明本段在讲“研究决策的一条成功路径”，所以答案是 vi。段末“这些错误并非随机，而是系统且可预测的”只是他研究得出的结论，属于支撑性信息，不构成段落主旨。",
          "traps": [
            "为什么不是 ii（A solution for the long term）：B 段并未提出任何针对长期问题的“解决方案”，只是叙述一种研究思路从被质疑到被认可的过程。",
            "为什么不是 x（The need for more effective risk assessment）：讨论需要改进风险评估、调整决策方式的是 G 段与 I 段，B 段没有这层“需要”的论述。",
            "为什么不是 xi（Underestimating the difficulties ahead）：B 段提到研究起步时被看作怪异，但重点不是人们低估前路困难，而是这种研究方法后来取得了成功。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Choose the correct heading for Paragraph D from the list of headings below.",
          "translation": "从下面的标题列表中为 D 段选择正确的小标题。",
          "answer": "ix",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Once a figure has been mentioned, it takes a strange hold over the human mind."
          },
          "synonyms": [
            "“The power of the first number” 同义替换为 “Once a figure has been mentioned, it takes a strange hold over the human mind”（第一个被说出的数字对思维有奇特的控制力）",
            "“the first number” 同义替换为 “the decisive effect of the initial meeting” 与 “the 'anchor effect'”（初次会面中被提出的数字成为锚）",
            "“power” 同义替换为 “takes a strange hold”"
          ],
          "locatingTip": "定位：D 段以 Another source of wrong decisions is related to… 开头，是典型的并列列举段，用术语 anchor effect 以及 house sale、salary negotiations、mergers and acquisitions 这些金钱谈判场景定位。确定答案技巧：段落反复强调“某个数字一旦被提出就会牢牢控制人的思维”，房屋报价会被各方当成谈判围绕的锚，可见主旨是“最先出现的数字的力量”，即 ix。",
          "analysis": "D 段指出错误决策的另一来源与“初次会面（initial meeting）的决定性作用”有关，尤其在涉及金钱的谈判中，这一现象被称为 'anchor effect'（锚定效应）。原文接着解释：一旦某个数字被提到，它就会对人的头脑产生奇特的控制力；房屋出售时报出的价格往往被各方接受为谈判围绕的“锚”，薪资谈判或并购也是如此；在信息不足时，一个数字甚至能带来心理安慰，哪怕它可能导致严重错误。全段都在说明“最先出现的那个数字”如何左右判断，所以答案是 ix。",
          "traps": [
            "为什么不是 vii（The danger of trusting a global market）：D 段讲的是谈判中的锚定效应，与信任全球市场无关。",
            "为什么不是 i（Not identifying the correct priorities）：讨论时间与精力分配、分不清轻重缓急的是 G 段，D 段不涉及优先级问题。",
            "为什么不是 viii（Reluctance to go beyond the familiar）：只肯投资本国市场是 F 段的内容，D 段的关键词是数字与谈判。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Choose the correct heading for Paragraph E from the list of headings below.",
          "translation": "从下面的标题列表中为 E 段选择正确的小标题。",
          "answer": "iii",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "No one likes to abandon a cherished belief, and the earlier a decision has been taken, the harder it is to abandon it."
          },
          "synonyms": [
            "“The difficulty of changing your mind” 同义替换为 “the harder it is to abandon it”（越难放弃原来的判断）",
            "“changing your mind” 同义替换为 “abandon a cherished belief”（放弃珍视的信念）",
            "“stubbornness” 同义替换为 “No one likes to abandon a cherished belief”（没人愿意放弃自己已经认定的想法）"
          ],
          "locatingTip": "定位：E 段首句 In addition, mistakes may arise due to stubbornness 直接给出主题词 stubbornness，整段只有四句，通读即可。确定答案技巧：段落用“决定作得越早越难放弃”“药企难以及时取消失败项目、难以承认错误”“分析师早早固守一种解释”三个论据反复证明一件事——改变自己原有的想法很难，故与 iii 对应。",
          "analysis": "E 段主题是固执（stubbornness）导致的错误决策。原文说没人喜欢放弃自己珍视的信念，而且决定作得越早就越难放弃；制药公司本该尽早取消失败的研究项目以免浪费资金，却往往难以承认自己犯了错；同样，分析师可能很早就认定某一种解释，从而影响了自己的判断，因此“换一双新眼睛（a fresh eye）总是有帮助的”。这些内容都在说明改变已经形成的想法十分困难，与 iii “The difficulty of changing your mind” 吻合。",
          "traps": [
            "为什么不是 v（Strengthening inner resources）：E 段没有提到增强内在资源或心理素质。",
            "为什么不是 iv（Why looking back is unhelpful）：讲“回头懊悔没有用”的是 H 段（crying over spilled milk），E 段讲的是不肯放弃既有决定。",
            "为什么不是 i（Not identifying the correct priorities）：谈优先次序的是 G 段，E 段的落点是难以改变主意。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Choose the correct heading for Paragraph F from the list of headings below.",
          "translation": "从下面的标题列表中为 F 段选择正确的小标题。",
          "answer": "viii",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "In finance, too much emphasis on information close at hand helps to explain the tendency by most investors to invest only within the country they live in."
          },
          "synonyms": [
            "“Reluctance to go beyond the familiar” 同义替换为 “too much emphasis on information close at hand”（过度看重近在手边的信息）",
            "“beyond the familiar” 同义替换为 “invest only within the country they live in”（只在熟悉的本国投资，不肯跨出国门）",
            "“the familiar” 同义替换为 “things they have seen and experienced themselves”（自己亲眼见过、亲身经历过的事）"
          ],
          "locatingTip": "定位：F 段首句 People also tend to put a lot of emphasis on things they have seen and experienced themselves 就是主题句；再用专有群体名 Americans and Europeans 定位本段后半。确定答案技巧：段内两个例子（因为亲戚赚钱而买进被高估的股票、绝大多数美欧投资者只买本国股票）都体现“只相信身边熟悉的信息，不肯走出去”，与 viii 的 Reluctance to go beyond the familiar 一一对应。",
          "analysis": "F 段说人们往往过分看重自己亲眼见过、亲身经历过的事情，而这未必是决策的好向导：有人因为亲戚在某只股票上赚了成千上万就买进被高估的股票，结果被烫了手；在金融领域，对“近在手边的信息”的过度重视，解释了大多数投资者只在自己居住国投资的倾向——尽管他们知道分散投资对投资组合有好处，绝大多数美国人和欧洲人仍把过多资金投向本国股票，而他们本应更广泛地分散风险。全段核心是“偏爱熟悉的事物、不愿跨出熟悉范围”，因此答案是 viii。",
          "traps": [
            "为什么不是 vii（The danger of trusting a global market）：F 段恰好相反，讲的是人们只信本国、只信身边所见，而不是相信全球市场带来的危险。",
            "为什么不是 ix（The power of the first number）：锚定效应与第一个数字是 D 段的主题，F 段没有涉及。",
            "为什么不是 i（Not identifying the correct priorities）：F 段谈的是信息来源的偏好（近处优先），不是分不清事情的轻重缓急。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Choose the correct heading for Paragraph G from the list of headings below.",
          "translation": "从下面的标题列表中为 G 段选择正确的小标题。",
          "answer": "i",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "More information is helpful in making any decision but, says Kahneman, people spend proportionally too much time on small decisions and not enough on big ones."
          },
          "synonyms": [
            "“Not identifying the correct priorities” 同义替换为 “people spend proportionally too much time on small decisions and not enough on big ones”（在小决定上花的时间过多、在大决定上过少）",
            "“the correct priorities” 同义替换为 “big ones”（真正重要的大事）"
          ],
          "locatingTip": "定位：G 段很短，首句即出现 Kahneman 与 decisions，并用 small decisions 与 big ones 作对比；找到 proportionally too much time 就能确认主题。确定答案技巧：紧接的一句 They need to adjust the balance（他们需要调整这种平衡）表明作者批评的是精力分配失衡，也就是没抓住真正重要的事，故选 i。",
          "analysis": "G 段承认信息越多越有助于决策，但 Kahneman 指出人们在小决定上花的精力比例过大，在大决定上却不够，因此需要调整这种失衡；繁荣年代有些公司规划一场办公室派对的投入，竟然和考虑战略性并购一样多。用派对与并购的对比，正是要说明人们没有分清事情的轻重缓急、没把资源放在真正重要的事情上，与 i “Not identifying the correct priorities” 完全一致。",
          "traps": [
            "为什么不是 x（The need for more effective risk assessment）：G 段讲的是决策时间与精力的分配，不是风险评估本身需要改进。",
            "为什么不是 xi（Underestimating the difficulties ahead）：G 段没有提到人们低估前方的困难。",
            "为什么不是 ii（A solution for the long term）：G 段只是指出问题并说需要调整，并未给出长期解决方案。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Choose the correct heading for Paragraph H from the list of headings below.",
          "translation": "从下面的标题列表中为 H 段选择正确的小标题。",
          "answer": "iv",
          "wordClass": "",
          "locating": {
            "paragraph": "H",
            "quote": "Finally, crying over spilled milk is not just a waste of time; it also often colours people's perceptions of the future."
          },
          "synonyms": [
            "“Why looking back is unhelpful” 同义替换为 “crying over spilled milk is not just a waste of time”（为过去的事懊悔不只是浪费时间）",
            "“looking back” 同义替换为 “they are chasing the returns on shares they wish they had bought earlier”（一直追逐那些后悔没早点买入的股票）"
          ],
          "locatingTip": "定位：H 段以 Finally 开头，是全文列举的最后一点；用习语 crying over spilled milk（为打翻的牛奶哭泣，即追悔过去）与 wish they had bought earlier 定位即可。确定答案技巧：抓住“回头看/追悔过去”与“不仅浪费时间，还影响对未来的判断”之间的对应，即 iv。",
          "analysis": "H 段用 crying over spilled milk 这一习语指出，为过去的事情懊悔不仅是浪费时间，还常常影响人们对未来的判断；有些股市投资者交易过于频繁，正是因为他们一直在追逐那些后悔没有早点买入的股票。整段的核心是“纠结过去、回头看毫无帮助”，所以答案是 iv。",
          "traps": [
            "为什么不是 iii（The difficulty of changing your mind）：H 段讲的是后悔过去，而不是难以改变自己的想法。",
            "为什么不是 v（Strengthening inner resources）：H 段完全没有涉及增强内在资源。",
            "为什么不是 vii（The danger of trusting a global market）：H 段只讲投资者交易过频与后悔没早买，与信任全球市场无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–10 单选题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 10
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "People initially found Kahneman's work unusual because he",
          "translation": "人们起初觉得卡尼曼的研究不同寻常，是因为他……",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "When Kahneman and his colleagues first started work, the idea of applying psychological insights to economics and business decisions was seen as rather bizarre."
          },
          "synonyms": [
            "“initially found … unusual” 同义替换为 “was seen as rather bizarre”（当初被认为相当怪异）",
            "“applied psychology to finance and economics” 同义替换为 “applying psychological insights to economics and business decisions”"
          ],
          "locatingTip": "定位：用专有名词 Kahneman 定位到 B 段；题干 work unusual 与 first started work、was seen as rather bizarre 对应，答案句即第一次说“他的研究被看作奇怪”的那句。确定答案技巧：题目问“他做了什么使得人们觉得他的工作不同寻常”，原文给出的原因就是他开创性地把心理学的洞见用到了经济与商业决策上，即 D。",
          "analysis": "B 段说 Kahneman 与同事刚开始工作时，把心理学洞见应用于经济与商业决策的想法被视为相当怪异（rather bizarre）。也就是说，他觉得“人无法做出合乎逻辑的决定”这件事值得研究，并用心理学方法去研究经济与金融决策，这在当时是没有先例的，所以人们觉得他的工作不同寻常，选 D。rather bizarre 是对“当初”的评价，与后文该领域蓬勃发展形成对照，正好呼应题干的 initially。",
          "traps": [
            "A 为什么错：“错误是系统且可预测的”确实是原文中 Kahneman 的主张（these mistakes are systematic and predictable），但那只是他研究得出的结论，不是当初人们觉得他研究古怪的原因；选项把“研究结论”当成了“被觉得奇怪的理由”。",
            "B 为什么错：原文说在他之后行为金融与行为经济两个领域才蓬勃发展，说明行为学方法正是由他带起来的，因此说他 unaware of behavioural approaches（不了解行为学方法）与原文矛盾。",
            "C 为什么错：原文是 how irrationally people behave in practice（人在实践中表现得多么不理性），研究对象是人；C 的 dealt with irrational types of practice（处理不理性的实践类型）偷换了概念，原文并无此说。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "The writer mentions house-owners' attitudes towards the value of their homes to illustrate that",
          "translation": "作者提到房主对自己房产价值的态度，是为了说明……",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "The same goes for their hopes of ever-rising prices for their homes or doing well in games of chance."
          },
          "synonyms": [
            "“house-owners' attitudes towards the value of their homes” 同义替换为 “their hopes of ever-rising prices for their homes”",
            "“people tend to exaggerate their chances of success” 同义替换为 “far more optimistic than past long-term returns would justify”（乐观程度远超历史数据所能支持的水平）"
          ],
          "locatingTip": "定位：用 homes、ever-rising prices 在 C 段找到 The same goes for their hopes of ever-rising prices for their homes 一句，其上文 Surveys have shown … far more optimistic than past long-term returns would justify 给出解释，下文说多数情况下结果是白费力气与希望落空。确定答案技巧：例子前后都在讲“预测过于乐观、超出合理范围”，可见作者举房主例子是为了证明人们高估自己成功的可能，即 B。",
          "analysis": "C 段的主题是 over-optimism：问多数人未来如何，他们只看到一片晴空，即使过去的经验说明相反；调查显示人们对股市未来走势的预测远比长期历史回报所能支持的乐观，房主对房价持续上涨的期待、在赌博中赢钱的期待也是如此；这种乐观有时对管理者或运动员有用，但多数时候只会带来白费的力气与落空的希望。作者举房主例子，正是要说明人们系统性地高估自己成功的概率，与 B 对应；下文 Kahneman 归纳的第一种过度自信 people tend to exaggerate their own skill and prowess 也印证了这一点。",
          "traps": [
            "A 为什么错：原文说即便 past experience suggests otherwise（过去的经验说明了相反的情况）人们仍然乐观，说明过去的不如意并未摧毁乐观态度，与 A“过去的失败会摧毁乐观”方向相反。",
            "C 为什么错：Such optimism can be useful for managers or sportsmen 确实承认乐观有时有用，但那是在讲“乐观的正面作用”这一另一层意思；房主对房价的期待是被调查证实“过于乐观、缺乏依据”的例子，不属于“在特定情况下合理的乐观”，也绝不是本段举例的目的。",
            "D 为什么错：提到受他人成功影响（亲戚在股票上赚了钱）是 F 段的例子，与 C 段的房主例子无关，属于张冠李戴。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Stubbornness and inflexibility can cause problems when people",
          "translation": "当人们……时，固执与不知变通会引发问题。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Drug companies must decide early to cancel a failing research project to avoid wasting money, but may find it difficult to admit they have made a mistake."
          },
          "synonyms": [
            "“Stubbornness and inflexibility” 同义替换为 “may find it difficult to admit they have made a mistake”（难以承认自己犯了错）",
            "“unwilling to give up unsuccessful activities” 同义替换为 “difficult to … cancel a failing research project”（难以及时取消失败的项目）",
            "“beliefs” 对应上句的 “a cherished belief”（No one likes to abandon a cherished belief）"
          ],
          "locatingTip": "定位：题干词 stubbornness 在 E 段首句原词复现（mistakes may arise due to stubbornness），可直接定位。确定答案技巧：段落用“没人愿意放弃珍视的信念”“药企难以及时取消失败项目、难以承认错误”说明固执的具体表现，就是抱着不成功的活动或想法不放，即 D。",
          "analysis": "E 段开篇即说固执会造成错误决策：没人喜欢放弃自己珍视的信念，决定作得越早越难放弃；制药公司必须在早期就决定取消失败的研究项目以免浪费资金，却往往难以承认自己犯了错；分析师也可能早早认定一种解释而影响判断。把这两点合起来看，固执与不知变通之所以出问题，就是因为人们不愿意放弃已经不成功的事情或自己原有的信念，对应 D。",
          "traps": [
            "A 为什么错：原文出现 luck 是在 C 段，说的是过度自信的人把成功全归于技能（chalking up success solely to skill），与 E 段的固执无关；原文也没有“把财务困难归咎于运气不好”的说法。",
            "B 为什么错：E 段提到 analysts 是说分析师自己过早固守一种解释（become wedded early to a single explanation），并不是人们不去向专家和分析师求助，选项无中生有。",
            "C 为什么错：原文是公司必须在早期就决定取消失败项目（decide early to cancel a failing research project），强调及时止损；C 说的 refuse to invest in the early stages of a project（拒绝在项目早期投资）把意思完全改掉了。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Why do many Americans and Europeans fail to spread their financial risks when investing?",
          "translation": "为什么许多美国人和欧洲人在投资时没有分散自己的财务风险？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "In finance, too much emphasis on information close at hand helps to explain the tendency by most investors to invest only within the country they live in."
          },
          "synonyms": [
            "“fail to spread their financial risks” 与 “invest far too heavily in the shares of their home countries” 构成同义表达，原文还以 “They would be much better off spreading their risks more widely” 点明本应分散风险",
            "“They feel safer dealing in a context which is close to home” 同义替换为 “too much emphasis on information close at hand”（过度看重近在手边的信息）"
          ],
          "locatingTip": "定位：用专有群体名 Americans and Europeans 精准定位到 F 段最后两句。确定答案技巧：题目问原因，原文用 helps to explain 明确给出解释——过分看重近在手边的信息，所以只投资自己居住国的股票；同时 Even though they know that diversification is good for their portfolio 这一让步句可直接排除 B。",
          "analysis": "F 段末尾说，在金融领域，对“近在手边的信息”的过度重视，解释了大多数投资者只在本国投资这一倾向；即便他们知道分散投资对投资组合有益，绝大多数美国人和欧洲人仍把过多资金投入本国股票，而他们本应更广泛地分散风险。可见不分散风险的原因是他们倾向于相信身边熟悉的信息和市场，即在离家近的语境中交易让他们更有安全感，对应 A。",
          "traps": [
            "B 为什么错：原文明确说 Even though they know that diversification is good for their portfolio（尽管他们知道分散投资对自己有好处），说明他们并非不懂分散的好处，B 与原文直接矛盾。",
            "C 为什么错：亲戚在股票上赚钱的例子（a relative has made thousands on it）是 F 段前半部分用来说明“过度依赖自身见闻”的另一个例子，不是美欧投资者不分散风险的被解释对象。",
            "D 为什么错：原文并未提到他们不了解他国情况，而是归因于过分看重近处的信息；D 属于原文没有的信息，且与“就近”这一归因方向相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 简答题（NO MORE THAN THREE WORDS 填空）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Which two occupations may benefit from being over-optimistic?",
          "translation": "哪两种职业可能从过度乐观中受益？",
          "answer": [
            "managers",
            "sportsmen"
          ],
          "wordClass": "名词（职业名称，两词都是可数名词复数；题干问的是哪两种职业，答案在同一空内写出 managers 与 sportsmen，用原文的复数形式，合起来不超过三个词）",
          "locating": {
            "paragraph": "C",
            "quote": "Such optimism can be useful for managers or sportsmen, and sometimes turns into a self-fulfilling prophecy."
          },
          "synonyms": [
            "“may benefit from being over-optimistic” 同义替换为 “can be useful for”（对……有用）",
            "“being over-optimistic” 同义替换为 “Such optimism”（指上一句所讲的过度乐观）"
          ],
          "locatingTip": "定位：题干关键词 over-optimistic 对应 C 段的 over-optimism，在段落中段找到 Such optimism can be useful for…。确定答案技巧：题目问哪两种职业“能从乐观中获益”，原文 useful for 后面并列的两个职业就是答案，注意这是复数并列，两个都要写，且照抄原文的 managers、sportsmen（不要加冠词或多写词）。",
          "analysis": "C 段先说过度乐观是决策出问题的常见原因，但紧接着指出这种乐观对 managers or sportsmen 可能有用，有时甚至会变成自我实现的预言。题干的 may benefit from 对应原文的 can be useful for，being over-optimistic 对应 Such optimism，因此两个职业是 managers 与 sportsmen。",
          "traps": [
            "不能只写一个：题目明确要求 two occupations，两个职业都要作答，否则不算全对。",
            "不能填 self-fulfilling prophecy：它是过度乐观可能带来的结果，不是职业。",
            "不能填 stock market：它是原文讨论人们过度乐观时所涉及的领域，不是从乐观中获益的职业。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Which practical skill are many people over-confident about?",
          "translation": "许多人对哪一项实用技能过度自信？",
          "answer": "driving",
          "wordClass": "名词（动名词作名词用，表示“驾驶”这项技能，单数形式；题干用 Which practical skill 提问，故直接填原词 driving，不加冠词）",
          "locating": {
            "paragraph": "C",
            "quote": "First, people tend to exaggerate their own skill and prowess; in polls, far fewer than half the respondents admit to having below-average skills in, say, driving."
          },
          "synonyms": [
            "“over-confident about” 同义替换为 “exaggerate their own skill and prowess”（夸大自己的技能与本领）",
            "“many people” 同义替换为 “far fewer than half the respondents admit to having below-average skills”（承认自己技能低于平均的受访者远不到一半，说明多数人自我感觉良好）"
          ],
          "locatingTip": "定位：题干 practical skill 与 C 段 three types of over-confidence 中的第一条对应，用 polls、skills、below-average 定位；具体技能在 in, say, driving 处给出。确定答案技巧：原文 skills in, say, driving 中的 say 表示举例，紧跟其后的名词就是被举例的具体技能，即 driving，照抄原词即可（不超过三个词）。",
          "analysis": "C 段列举过度自信的第一种表现：人们倾向于夸大自己的技能与本领；调查中承认自己某项技能低于平均水平的人远不到一半，例如开车（driving）。既然绝大多数受访者都不承认自己开车水平低于平均，正说明许多人对 driving 这项实用技能过度自信，所以答案是 driving。",
          "traps": [
            "不能填 skill 或 prowess：它们是笼统的概括性名词，题目问的是具体哪一项实用技能。",
            "不能填 below-average skills：这是原文描述“技能低于平均水平”的表述，不是技能本身的名称。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Which type of business has a generally good attitude to dealing with uncertainty?",
          "translation": "哪一类企业对处理不确定性持有总体良好的态度？",
          "answer": "Pharmaceutical companies",
          "wordClass": "名词（可数名词复数，指制药企业这一类机构；原文中该短语在句中作主语，说明这类企业对风险的态度；两个词，符合 NO MORE THAN THREE WORDS）",
          "locating": {
            "paragraph": "I",
            "quote": "Pharmaceutical companies, which are accustomed to many failures and a few big successes in their drug-discovery programmes, are fairly rational about their risk-taking."
          },
          "synonyms": [
            "“has a generally good attitude to dealing with uncertainty” 同义替换为 “are fairly rational about their risk-taking”（对承担风险相当理性）",
            "“dealing with uncertainty” 同义替换为 “dealing with risk” 与 “risk-taking”"
          ],
          "locatingTip": "定位：题干 type of business 与 uncertainty/risk 指向最后一段 I 段首句 Kahneman reckons that some types of businesses are much better than others at dealing with risk，随后用例子具体化。确定答案技巧：原文说制药企业因为习惯研发中的多次失败与少数巨大成功，对承担风险相当理性；紧接着说 banks 还差得远（have a long way to go），一正一反形成对照，可见答案是 Pharmaceutical companies。",
          "analysis": "I 段开头说 Kahneman 认为有些类型的企业在应对风险方面比其他企业强得多。制药公司在药物研发中对许多次失败和少数几次巨大成功习以为常，因此对承担风险相当理性；而银行在这方面还差得远。题干“对处理不确定性总体持良好态度”对应原文 fairly rational about their risk-taking，答案为 Pharmaceutical companies。",
          "traps": [
            "不能填 banks：原文说 banks have a long way to go（银行还差得远），与题干“总体态度良好”相反，属于反例。",
            "不能填 drug-discovery programmes：它是制药公司研发项目的名称，不是题目所问的企业类型。",
            "不能填 governments：原文说政府面临相互冲突的政治压力，因而更可能做出不理性的决定，不符合题干。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
