(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-medium-168", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-medium-168",
  "meta": {
    "examId": "p3-medium-168",
    "title": "Marketing and the information age 信息时代营销",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "the fact that there may be too much information to cope with",
          "translation": "信息可能多到难以应付这一事实。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "a packaged-goods product controller is bombarded with one million to one billion new numbers each week"
          },
          "synonyms": [
            "“there may be too much information” 同义替换为原文的 “bombarded with one million to one billion new numbers each week”，即被海量数字持续冲击",
            "“to cope with” 同义替换为原文引言中的 “drowning in it”（被信息淹没），说明问题不是信息太少而是太多",
            "“the fact that” 对应的原文依据是 “One study found that …” 与 “As Naisbitt points out …” 两处对信息过量的陈述"
          ],
          "locatingTip": "定位：题干的核心名词是 information，但真正能区分的语义是 “too much”。先用 one million to one billion 这类数字表达和超市扫描仪 scanners 这类信息源做扫读锚点，直接落在第 6 段（F 段）第一句。确定答案技巧：段落信息匹配题要在段落中找“主题句之外的语义场”。第 6 段开篇就用研究数据给出“每周一百万个到十亿个新数字”的冲击量，随后引用 Naisbitt 的 “Running out of information is not a problem, but drowning in it is.”，两句共同表达“信息过量、难以应付”，与题干完全吻合。反之第 5 段（E 段）只说 “The supply of information has also increased greatly”，讲的是信息供给变多这一中性事实，没有“多到无法应付”的判断，因此不是 E。",
          "analysis": "原文第 6 段（F 段）第 1 句：“One study found that with all the information now available through supermarket scanners, a packaged-goods product controller is bombarded with one million to one billion new numbers each week.”（一项研究发现，面对如今通过超市扫描仪可获得的所有信息，一名包装货品产品经理每周被一百万个到十亿个新数字轰炸）。紧接着引用 Naisbitt 的观点：“Running out of information is not a problem, but drowning in it is.”（信息匮乏不是问题，被信息淹没才是问题）。题干 “the fact that there may be too much information to cope with” 说的正是“信息量过大、难以应付”：bombarded（被轰炸）与 drowning in it（被淹没）都指向“过量”，week 与 one million to one billion 则把“过量”量化。第 6 段随后还列举了信息过量带来的具体后果（信息太多却缺对的信息、重要信息来得太晚、准时到的信息又不准确），进一步围绕“信息多而难用”展开，因此信息落点是 F 段。",
          "traps": [
            "为什么不是 E 段：E 段首句 “The supply of information has also increased greatly.” 只说明信息供给大量增加，接着说发达国家正从工业经济转向信息经济，全段没有任何“多到难以应付、被淹没”的表述，属于同义替换的假对照。",
            "为什么不是 C 段：C 段讲营销信息系统依靠信息技术收集、存储和分析信息，讨论的是“如何收集与处理”，并未讨论信息量超出承受能力的问题。",
            "为什么不是 G 段：G 段介绍 MIS 的组成部分与运作流程（收集、分析、评估、分发），关注的是信息系统的结构，与“信息过量”无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "the relevance of generating repeat business",
          "translation": "创造回头客生意的重要性。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "This also means that customers must see value in returning continually to the stores where they shop, as well as to the service providers they deal with."
          },
          "synonyms": [
            "“generating repeat business” 同义替换为原文的 “returning continually to the stores where they shop”，即顾客反复回来消费",
            "“the relevance of” 同义替换为原文的 “customers must see value in”，说明回头客生意之所以重要是因为顾客要觉得有价值",
            "“business” 的范围由原文 “the stores where they shop” 与 “the service providers they deal with” 共同体现，涵盖零售与服务两类商家"
          ],
          "locatingTip": "定位：题干的关键词是 repeat business（回头生意），原文不会原词复现，需要用 “再来一次” 的语义去扫读：repeatedly、again、return、continually。第 1 段（A 段）末句出现 returning continually to the stores，正好对应“反复回店”。确定答案技巧：第 1 段整体在对比“早期只看新客户”与“当代重视长期关系”，末句用 This also means 承接上文的价值认知，说明顾客要觉得持续回来有价值，这正是题干所说的“回头生意的重要性”，故落点为 A 段。注意不要把“价值 perceptions of value”误当成信息类内容而跑去其他段。",
          "analysis": "原文第 1 段（A 段）先讲早期营销者只想着“ continually finding new customers（不断找新客户）”，接着用 By contrast 转折，说当代营销管理者认识到必须让顾客从品牌中获得长期而非一次性的价值感，末句进一步说：“This also means that customers must see value in returning continually to the stores where they shop, as well as to the service providers they deal with.”（这还意味着顾客必须觉得反复回到他们购物的商店、以及他们打交道的服务提供商那里是有价值的）。句中的 returning continually（持续回流）就是题干 repeat business（重复生意、回头客生意）的原文表达，see value in 则回答了题目中 “the relevance of” 这一层含义：回头生意之所以重要，在于顾客必须感知到持续交易的价值。整段围绕“长期关系而非单次交易”的营销理念，正是题干所需信息。",
          "traps": [
            "为什么不是 D 段：D 段列举营销管理者需要的各类信息（客户、竞争对手、政府与市场力量），并提到信息是战略资产，核心是信息需求的范围，没有涉及顾客反复回来消费。",
            "为什么不是 G 段：G 段讲 MIS 的构成与运作流程，属于信息系统的技术性说明，与回头客生意无关。",
            "为什么不是 H 段：H 段讨论信息成本与收益的权衡，主题是信息的价值取决于使用，不涉及回头客。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "an example of personalised marketing",
          "translation": "个性化营销的一个例子。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "For instance, the subscriber-TV music channel Channel [V] encourages its viewers to sign up for text messages and email alerts that tell them when their favourite artists and songs are about to be broadcast."
          },
          "synonyms": [
            "“personalised marketing” 同义替换为原文的 “email alerts that tell them when their favourite artists and songs are about to be broadcast”，即按个人喜好定向推送提醒",
            "“an example of” 同义替换为原文的举例标志词 “For instance”",
            "“marketing” 的行为主体由原文的 “the subscriber-TV music channel Channel [V]” 体现，电视台向观众推送提醒即一种营销行为"
          ],
          "locatingTip": "定位：题干有两个抓手，一是 an example（要找一个具体案例），二是 personalised（针对个人的）。扫读时优先找大写专有名词与举例标志词 For instance、for example、such as；第 2 段（B 段）右侧出现频道名 Channel [V] 与 For instance，一步锁定。确定答案技巧：判断“个性化”的关键在于推送内容是否因人而异——原文说提醒会告知观众他们最喜欢的歌手和歌曲何时播出，favourite 一词就说明内容按个人偏好定制，因此是 B 段。",
          "analysis": "原文第 2 段（B 段）先说这是信息时代、客户期望上升，随后用 “For instance” 引出一个具体案例：“For instance, the subscriber-TV music channel Channel [V] encourages its viewers to sign up for text messages and email alerts that tell them when their favourite artists and songs are about to be broadcast.”（例如，付费电视音乐频道 Channel [V] 鼓励观众订阅短信和邮件提醒，这些提醒会告知他们最喜欢的歌手与歌曲何时将要播出）。这是给个人推送、内容因人而异的营销做法，即题干所说的 personalised marketing；For instance 又正好对应题干中的 an example of。该段末句 “Competitive advantage lies in being able to recognise which customers can be given greater attention …” 进一步强调识别具体客户并给予更多关注，与“个性化”一脉相承。",
          "traps": [
            "为什么不是 C 段：C 段讲信息系统如何用电脑技术收集和处理数据以发现经营问题，属于后台技术，没有面向顾客的个性化营销实例。",
            "为什么不是 G 段：G 段描述 MIS 的构成（人、设备、程序）与运作顺序，是系统说明，不含营销案例。",
            "为什么不是 E 段：E 段讨论信息供给增加与国家经济形态转变，提到 Australia、New Zealand、Singapore 只是举例说明发达国家，与个性化营销无关。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "an illustration of a situation where commissioning new information research might not be advisable",
          "translation": "一个说明“委托开展新信息调研可能并不可取”的情形。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "For example, if an organisation estimates that launching a new product without any further information will yield a profit of $500,000, then it would be foolish to spend $30,000 for additional information that would increase the profit to only $525,000."
          },
          "synonyms": [
            "“an illustration” 同义替换为原文的举例标志词 “For example”",
            "“commissioning new information research” 同义替换为原文的 “spend $30,000 for additional information”，即花钱去搞更多信息",
            "“might not be advisable” 同义替换为原文的 “it would be foolish”，即这种做法很不明智"
          ],
          "locatingTip": "定位：题干的关键词是具体数字化的例子与判断词 advisable，扫读时先抓 $ 符号与数字（500,000、30,000、525,000），它们在全篇只出现在最后一段。确定答案技巧：题干问的是“不值得花钱做新调研”的情形，原文第 8 段（H 段）先说信息成本可能超过收益，再举数字例子：不额外调研能赚 50 万美元，花 3 万美元只把利润提到 52.5 万美元，并直接用 foolish（愚蠢）定性，与 not advisable 完全对应，因此落点为 H 段。",
          "analysis": "原文第 8 段（H 段）开篇提出主题：“However, the costs of obtaining, processing, storing and delivering information can mount quickly.”（然而获取、处理、存储和传递信息的成本可能迅速攀升），随后判断“在某些情况下，额外的信息几乎不会改变或改善管理者的决策，或者信息成本会超过改进决策带来的回报”。为说明这一点，作者给出本题定位句：“For example, if an organisation estimates that launching a new product without any further information will yield a profit of $500,000, then it would be foolish to spend $30,000 for additional information that would increase the profit to only $525,000.”（例如，如果一家机构估算，不做任何进一步的信息调研就推出新产品能带来 50 万美元利润，那么花 3 万美元购买额外信息、只把利润提升到 52.5 万美元就是愚蠢的）。花钱做新调研（spend $30,000 for additional information）换来 2.5 万美元的增量，得不偿失，正是题干所说的 commissioning new information research might not be advisable，属于典型的举例说明（illustration）。",
          "traps": [
            "为什么不是 C 段：C 段说明信息由谁收集、如何用电脑技术处理呈现，全段没有涉及信息成本与收益的比较，也没有任何数字化示例。",
            "为什么不是 F 段：F 段列举的是信息过多、信息分布分散、信息来得太晚或不准确等问题，落点在“需要更好的信息”，而不是“买信息不划算”。",
            "为什么不是 G 段：G 段介绍 MIS 的构成与工作流程，讨论系统如何满足管理者的信息需求，并未讨论是否值得为额外信息花钱。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "how the greater wealth of customers enables them to select from a broader range of products",
          "translation": "顾客更富有如何使他们能够从更广泛的产品中挑选。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "As household incomes increase, choice widens and buyers become better at discriminating, so sellers need information about how buyers respond to different products and advertising campaigns."
          },
          "synonyms": [
            "“the greater wealth of customers” 同义替换为原文的 “household incomes increase”（家庭收入增加）",
            "“select from a broader range of products” 同义替换为原文的 “choice widens”（可选范围扩大）",
            "“enables them to select” 还对应原文的 “buyers become better at discriminating”，即买家更有能力辨别和挑选"
          ],
          "locatingTip": "定位：题干的关键词是 wealth、broader range of products，原文用 household incomes increase 表达“顾客更富裕”，用 choice widens 表达“选择变多”，两组替换同时出现在第 4 段（D 段）末句，扫读时留意 incomes 与 choice 即可。确定答案技巧：题干是“收入增加导致选择范围扩大”的因果链，原文对应句用 As … increase 引出原因、choice widens 给出结果，因果结构完全一致；该句后半 “so sellers need information about how buyers respond to different products and advertising campaigns” 又与本段“营销者需要信息”的主题衔接，证明落点是 D 段。",
          "analysis": "原文第 4 段（D 段）先说明营销管理者几乎在每个环节都需要信息，需要了解客户、转售商、竞争对手以及政府与市场中的其他力量，并引用一位营销高管的话强调管理未来就是管理信息。本段末句是本题定位句：“As household incomes increase, choice widens and buyers become better at discriminating, so sellers need information about how buyers respond to different products and advertising campaigns.”（随着家庭收入增加，选择范围扩大，买家也更善于辨别，因此卖家需要了解买家对不同产品和广告活动的反应）。句子前半正是题干的内容：household incomes increase 对应 the greater wealth of customers，choice widens 对应 select from a broader range of products，buyers become better at discriminating 对应 enables them to select（有能力挑选）；后半句则把这一变化与“卖家需要信息”的主题联系起来，说明作者为何在此提及顾客更富有。",
          "traps": [
            "为什么不是 E 段：E 段提到 GDP、服务经济与“信息时代”等宏观概念，讨论国家经济形态从工业转向信息，并未涉及顾客收入增加与商品选择范围扩大。",
            "为什么不是 A 段：A 段讲的是早期营销只找新客户与当代重视长期价值感的对比，落脚点是顾客忠诚与长期关系，不涉及收入与选择面。",
            "为什么不是 G 段：G 段通篇描述 MIS 的组成与流程（互动评估需求、内部记录与情报、分析单元、分发），是系统说明段，与消费者收入无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–36 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 36
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "The majority of marketing statistics are gathered by government agencies.",
          "translation": "大多数营销统计数据是由政府机构收集的。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "While some of the information used is gathered by government bodies such as the Australian Bureau of Statistics and Statistics New Zealand, most of it is purposefully gathered by marketing organisations for client companies."
          },
          "synonyms": [
            "“marketing statistics” 同义替换为原文的 “the information used”，即营销所用的信息",
            "“gathered by government agencies” 同义替换为原文的 “gathered by government bodies”，机构名称直接对应",
            "“The majority of” 与原文的 “most of it” 说的是同一个“大部分”的概念，而原文把这个“大部分”给了 “marketing organisations” 而不是政府部门"
          ],
          "locatingTip": "定位：题干的话题词是 marketing statistics 与 government agencies，原文对应表达是 information 与 government bodies，专有名词 Australian Bureau of Statistics、Statistics New Zealand 是极佳的扫读锚点，落在第 3 段（C 段）第 2 句。确定答案技巧：本题的判分点是“谁是多数”。原文用 While 引导让步，先说 some（一部分）由政府机构收集，紧接着说 most of it（大部分）由营销机构为客户公司专门收集；题干却把“大部分”安到政府机构头上，正好把原文的主次颠倒，属于事实冲突，故判 NO。做题时务必盯住 some 与 most 这一对数量词，它们是雅思最常用的“比例陷阱”。",
          "analysis": "原文第 3 段（C 段）第 2 句：“While some of the information used is gathered by government bodies such as the Australian Bureau of Statistics and Statistics New Zealand, most of it is purposefully gathered by marketing organisations for client companies.”（虽然所使用的信息有一部分是由澳大利亚统计局、新西兰统计局这类政府机构收集的，但其中大部分是由营销机构为客户公司专门收集的）。句中数量关系非常明确：some 对应政府机构，most of it 对应营销机构。题干 “The majority of marketing statistics are gathered by government agencies.” 把“大多数信息的来源”说成政府机构，恰好与原文相反——原文的 majority 是 marketing organisations。这种“主次对调”是 YES / NO / NOT GIVEN 的典型设错方式，因此答案判 NO。",
          "traps": [
            "为什么不是 YES：原文明确把“大部分（most of it）”分配给营销机构，把“一部分（some）”分配给政府机构；题干把 majority 归给 government agencies，与原文直接冲突，不能选 YES。",
            "为什么不是 NOT GIVEN：原文既提到了政府机构收集信息这一事实，也给出了各方的比例关系（some 对 most），信息完整明确，只是与题干相反，所以不能按“未提及”处理。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "The move from an industrial to an information-based economy has happened more quickly in New Zealand than in Australia.",
          "translation": "从工业经济向信息型经济的转变在新西兰比在澳大利亚发生得更快。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "developed countries such as Australia, New Zealand and Singapore are moving from industrial to information-based economies"
          },
          "synonyms": [
            "“The move from an industrial to an information-based economy” 同义替换为原文的 “moving from industrial to information-based economies”",
            "“New Zealand” 与 “Australia” 在原文中只是 “developed countries such as Australia, New Zealand and Singapore” 这一并列举例中的两个例子",
            "“has happened more quickly … than …” 比较速度的表述在原文中找不到任何对应（原文没有 more quickly、faster、sooner 之类的时间或速度比较）"
          ],
          "locatingTip": "定位：题干的两个专有名词 New Zealand 与 Australia 在原文第 5 段（E 段）同句出现，且都处于 such as 的举例列表中，扫读国家名即可一步锁定。确定答案技巧：题干的核心是比较结构 more quickly … than …，因此判断的关键是原文有没有对两国转变速度做比较。原文只是把澳大利亚、新西兰、新加坡并列为“正在从工业经济转向信息型经济”的发达国家，既没有排序，也没有时间先后或速度快慢，属于原文完全未涉及的信息，故判 NOT GIVEN。注意：两个国家同时出现并不等于原文回答了“谁更快”。",
          "analysis": "原文第 5 段（E 段）借未来学家 John Naisbitt 的观点说：“It has been suggested by the futurist and best-selling author John Naisbitt that the United States and, by observation, developed countries such as Australia, New Zealand and Singapore are moving from industrial to information-based economies.”（未来学家、畅销书作者 John Naisbitt 提出，美国以及据观察澳大利亚、新西兰、新加坡等发达国家正在从工业经济转向以信息为基础的经济）。作者把三个国家并列在 such as 之后，只是在举例说明“哪些发达国家处在同一转变过程中”，全段没有任何比较两国转变快慢的措辞。题干加入的比较级 more quickly … than … 是原文未曾提供的新信息——既没有说新西兰更快，也没有说两国速度相同——因此只能判 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文把澳大利亚和新西兰放在同一个并列列表里，只说明两国都在经历这一转变，完全没有“新西兰更快”这类速度比较的表述，缺证据不能选 YES。",
            "为什么不是 NO：选 NO 需要原文给出相反信息，例如“两国速度相同”或“澳大利亚更快”。原文对速度问题只字未提，既没有正面陈述也没有反面陈述，故按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Employees sometimes hide information that gives a poor impression of them.",
          "translation": "员工有时会隐瞒那些会给他们留下不良印象的信息。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "subordinates may withhold information they believe will reflect badly on their performance"
          },
          "synonyms": [
            "“Employees” 同义替换为原文的 “subordinates”（下属）",
            "“hide” 同义替换为原文的 “withhold”（隐瞒、不提供）",
            "“information that gives a poor impression of them” 同义替换为原文的 “information they believe will reflect badly on their performance”",
            "“sometimes” 同义替换为原文的情态动词 “may”，表示“有可能、有时会”"
          ],
          "locatingTip": "定位：题干关键词是 employees 与 hide information，原文用的是更具体的 subordinates 与 withhold information，同义词需要自己转换，落在第 6 段（F 段）第 4 句（开头标志词 In addition）。确定答案技巧：把题干的每一层意思与原文逐一对齐：下属对员工、withhold 对 hide、reflect badly on their performance 对 gives a poor impression of them、may 对 sometimes，四条全部吻合且方向一致，因此判 YES。做本题时不要因为原文出现的是 subordinates 就以为话题不同——在职场语境中它就是指员工（下属）。",
          "analysis": "原文第 6 段（F 段）在列举“信息为何难以用好”时说：“In addition, subordinates may withhold information they believe will reflect badly on their performance and important information often arrives too late to be useful, or on-time information is not accurate.”（此外，下属可能会隐瞒他们认为会对自己业绩造成不良影响的信息；重要信息常常到得太晚而无用，或者准时送到的信息并不准确）。题干 “Employees sometimes hide information that gives a poor impression of them.” 与前半句一一对应：employees 对应 subordinates，hide 对应 withhold，gives a poor impression of them 对应 will reflect badly on their performance，sometimes 对应 may。原文承认这种行为的可能存在，题干只说“有时会”，程度也与 may 相当，没有夸大，因此判 YES。",
          "traps": [
            "为什么不是 NO：原文不仅没有否认员工隐瞒信息，反而明确指出下属 “may withhold information they believe will reflect badly on their performance”，与题干陈述的动机和做法一致，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文已把“员工可能因为担心影响自己的业绩评价而隐瞒信息”这一情形明确写出，信息充分，不属于无从判断。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Managers frequently fail to make good use of the information they receive.",
          "translation": "管理者常常未能好好利用他们收到的信息。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Although marketing organisations have greater capacity to provide managers with information, they often do not use it well."
          },
          "synonyms": [
            "“frequently fail to make good use of” 同义替换为原文的 “often do not use it well”，often 对应 frequently，do not use it well 对应 fail to make good use of",
            "“the information they receive” 同义替换为原文的 “provide managers with information”，原文的主动“提供给管理者”在题干中变为被动“他们收到的”",
            "“Managers” 与原文的 “managers” 原词复现，指同一批人"
          ],
          "locatingTip": "定位：题干关键词是 managers、information、use，第 6 段（F 段）倒数第二句出现 “they often do not use it well”，其中 it 回指 information、they 回指前面的 managers，扫读时注意 often 与 use 这两个词。确定答案技巧：题干说“常常未能好好利用”，原文说“常常用不好”，副词 often 与 frequently 对应、否定结构一致，程度也一致，因此判 YES。要特别留意原文的 Although 让步句：让步部分说的是“营销机构有能力提供信息”，主句才是作者真正的判断“他们却往往用不好”，答案取决于主句。",
          "analysis": "原文第 6 段（F 段）后半部分先归纳 “So marketing managers need better information.”（所以营销管理者需要更好的信息），紧接着是本题定位句：“Although marketing organisations have greater capacity to provide managers with information, they often do not use it well.”（尽管营销机构有更强的能力为管理者提供信息，他们却常常没有很好地利用这些信息）。这句的主句正是题干的意思：often 对应 frequently，do not use it well 对应 fail to make good use of，被提供信息的管理者即题干中“收到信息的管理者”。作者用了 Although 让步，把重点放在主句的批评上，说明“用不好信息”是普遍现象而非个别情况。下一句 “As a result, many marketing organisations are now studying their managers' information needs …” 也印证了问题的存在，因此判 YES。",
          "traps": [
            "为什么不是 NO：原文用 “they often do not use it well” 明确指出管理者常常用不好信息，与题干完全同向，没有任何相反表述。",
            "为什么不是 NOT GIVEN：原文对“是否善于利用信息”给出了明确判断（often do not use it well），并且给出机构因此开始研究管理者信息需求这一后果，信息充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Marketing information has to be used to be valuable.",
          "translation": "营销信息必须被使用才有价值。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "By itself, information is valueless – its value comes from its use."
          },
          "synonyms": [
            "“has to be used to be valuable” 同义替换为原文的 “its value comes from its use”，即价值来源于使用",
            "题干“不使用就没有价值”这层意思对应原文的 “By itself, information is valueless”（信息本身没有价值）",
            "“Marketing information” 与原文的 “information” 所指一致，均指全文讨论的营销信息"
          ],
          "locatingTip": "定位：题干是全篇最后一句的高度概括，关键词是 valuable 与 use，扫读时直接看文章结尾，第 8 段（H 段）末句 “By itself, information is valueless … its value comes from its use.” 一句到位。确定答案技巧：本题是“把原文末句抽象成结论”的典型判断题。原文从两面说同一件事：离开使用（By itself）信息没有价值，而价值的来源是使用（its value comes from its use）。题干 “has to be used to be valuable” 正是这两句的合并表述，方向一致，故判 YES。答题时不要被 valueless 这个否定词吓到，它否定的对象是“不使用时的信息”，与题干的判断相同。",
          "analysis": "原文第 8 段（H 段）先用费用与收益的例子说明并非所有额外信息都值得购买，最后以本题定位句收束全篇：“By itself, information is valueless – its value comes from its use.”（信息本身没有价值——它的价值来自被使用）。这句话的逻辑是：信息的价值不是内在的、自动获得的，而是通过使用实现的；换句话说，必须被使用，信息才有价值。题干 “Marketing information has to be used to be valuable.” 与之一一对应：has to be used 对应 its value comes from its use，be valuable 对应 valueless 的否定。作者在结尾用 valueless 与 value 形成对照，正是为了强调“用”才是价值的关键，因此判 YES。",
          "traps": [
            "为什么不是 NO：原文没有“信息无需使用也有价值”的意思，相反它明确说信息本身（By itself）是没有价值的，价值依赖使用，题干与原文方向一致。",
            "为什么不是 NOT GIVEN：原文用一句话同时给出“不使用则无价值”与“价值来自使用”两个判断，是明确的因果陈述，不属于信息缺失。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 流程图填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "37 ________ (the first box of the flow chart, before 'Find out their …')",
          "translation": "37 ________（流程图的第一个方框，紧接其后的是“了解他们的……”这一环节）。",
          "answer": "marketing managers",
          "wordClass": "名词短语（复数，指人；流程图第一个方框中的条目，与下一框“Find out their …”相接，属方框片段而非完整句，不作句子成分，按原文填复数 marketing managers）",
          "locating": {
            "paragraph": "7",
            "quote": "The MIS begins and ends with marketing managers."
          },
          "synonyms": [
            "“37 空” 对应原文的 “marketing managers”，即 “The MIS begins and ends with marketing managers.” 中介词 with 后的主体",
            "流程图第二格 “Find out their …” 中的 their 同义回指原文的 “these managers”，说明 37 空与第二格指的是同一批人",
            "“The MIS” 与流程图标题 “The Marketing Information System (MIS)” 完全对应，确定本段就是流程图所描述的系统"
          ],
          "locatingTip": "定位：流程图标题 The Marketing Information System (MIS) 是全篇唯一的专有名词组合，回原文搜索 MIS，只在第 7 段（G 段）集中出现，一步锁定段落。确定答案技巧：流程图第一格位于 MIS 之后、紧接着 “Find out their …”，说明它代表 MIS 运作的起点与终点；原文第 7 段第 3 句 “The MIS begins and ends with marketing managers.” 用 begins and ends 明确给出这个起点与终点，下一句 “First, it interacts with these managers to assess the information needs they have.” 中的 these managers 又回指 marketing managers，与流程图的衔接完全吻合。答案限两词以内，marketing managers 正好两个词。",
          "analysis": "原文第 7 段（G 段）介绍 MIS 的定义与流程：“One solution is to use a Marketing Information System (MIS). This consists of people, equipment and procedures which, when put together, are able to gather, analyse, evaluate and distribute needed, timely and accurate information to marketing decision-makers. The MIS begins and ends with marketing managers. First, it interacts with these managers to assess the information needs they have.”（一个解决方案是使用营销信息系统（MIS）……MIS 从营销管理者开始，也在营销管理者这里结束。首先，它与这些管理者互动，以评估他们有什么信息需求）。流程图最左侧的方框代表流程的起点，紧接着的方框是 “Find out their …”，可见起点方框要填的是“被了解需求的那一方”，即营销管理者。原文用 begins and ends with 明确把 MIS 的起点与终点都定在 marketing managers，其后的 these managers 也印证了这一指代，因此答案填 marketing managers。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Find out their 38 ________",
          "translation": "了解他们的 38 ________（即找出他们的信息需求）。",
          "answer": "information needs",
          "wordClass": "名词短语（复数，可数；受所有格 their 限定，在方框片段 Find out their … 中作动词短语 find out 的宾语，按原文填复数 information needs）",
          "locating": {
            "paragraph": "7",
            "quote": "First, it interacts with these managers to assess the information needs they have."
          },
          "synonyms": [
            "“Find out” 同义替换为原文的 “assess”（评估、了解）",
            "“their 38” 同义替换为原文的 “the information needs they have”，their 与 they 同指前面的营销管理者",
            "“38 空” 对应原文中 assess 的宾语 “information needs”，即 MIS 首先要弄清的内容"
          ],
          "locatingTip": "定位：本题紧接 37 空，仍在第 7 段（G 段），关键词是 First 与 interact，原文 “First, it interacts with these managers to assess the information needs they have.” 一句同时出现 First 与 assess 的信息，直接对应流程图的第一步。确定答案技巧：题干 “Find out their 38” 是动宾结构，空格是 find out 的宾语且被 their 限定，对应原文 assess 的宾语 information needs；their 与 these managers 指同一批人，因此空格与“管理者”并列出现，答案确定为 information needs（两个词，符合 NO MORE THAN TWO WORDS）。注意不要只写 needs 或 information，原文的固定搭配是 information needs。",
          "analysis": "原文第 7 段（G 段）在说明 MIS 的运作顺序时写道：“First, it interacts with these managers to assess the information needs they have. Next, it develops the needed information from internal records, marketing intelligence activities and the research process.”（首先，它与这些管理者互动，评估他们的信息需求。接着，它从内部记录、营销情报活动和调研过程中开发所需的信息）。流程图的第二格是 “Find out their …”，其中 Find out 就是原文 interact … to assess 的目的，空格处要填的是被评估的对象，即 information needs；紧接着的第三格 “Developed through: …” 对应原文的 Next, it develops the needed information from …，两格与原文两句严格按顺序对应，说明答案划分正确。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "Developed through: 39 ________ , marketing intelligence activities, research process",
          "translation": "通过以下途径开发：39 ________、营销情报活动、调研过程。",
          "answer": "internal records",
          "wordClass": "名词短语（复数，可数；方框条目“Developed through:”之后的第一项，与并列的 marketing intelligence activities、research process 构成列举，不作句子成分，按原文填复数 internal records）",
          "locating": {
            "paragraph": "7",
            "quote": "Next, it develops the needed information from internal records, marketing intelligence activities and the research process."
          },
          "synonyms": [
            "“Developed through” 同义替换为原文的 “develops the needed information from”，介词 from 后就是信息来源",
            "“marketing intelligence activities” 与 “research process” 在原文中与答案并列出现，是完全一致的对应线索",
            "“39 空” 对应原文并列列表中的第一项 “internal records”（内部记录）"
          ],
          "locatingTip": "定位：流程图第三格给出 “Developed through:” 以及 marketing intelligence activities 与 research process 两项，这两个词组在原文中同句出现，回到第 7 段（G 段）找到 “Next, it develops the needed information from internal records, marketing intelligence activities and the research process.” 即可。确定答案技巧：题图中已给出的两项就是原文并列结构的后两项，空格应填列表中的第一项，即 internal records；原文用 from 引出三个来源，与题图的 Developed through 同义，结构完全对应，因此答案锁定。答案两个词，符合词数限制。",
          "analysis": "原文第 7 段（G 段）：“Next, it develops the needed information from internal records, marketing intelligence activities and the research process.”（接着，它从内部记录、营销情报活动和调研过程中开发所需信息）。句中 from 之后是一个三项并列的来源列表：internal records、marketing intelligence activities、research process。流程图的这一格把三项拆成“空格 + 已给出的两项”，已给出的 marketing intelligence activities 与 research process 正是并列列表的第二、三项，因此空格处应填第一项 internal records（内部记录）。注意顺序不能颠倒，也不能因为已给出两项就改动原文措辞：题图只是把同一句原文拆成了填空形式。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Processed by the 40 ________",
          "translation": "由 40 ________ 处理（数据由该部门处理后向外分发）。",
          "answer": "analysis unit",
          "wordClass": "名词短语（单数，可数；在方框片段 Processed by the 中位于介词 by 之后作其宾语，与定冠词 the 连用，指 MIS 中负责处理数据的一个部门，按原文填单数 analysis unit）",
          "locating": {
            "paragraph": "7",
            "quote": "The analysis unit processes the data to make it more useful"
          },
          "synonyms": [
            "“Processed by” 同义替换为原文的 “processes the data”，原文主动语态在题干中改为被动语态",
            "“40 空” 对应原文的主语 “The analysis unit”（分析单元）",
            "“Timely and accurate data distribution” 中的 timely and accurate 与 distribute 对应原文 “distribute needed, timely and accurate information”，可验证本格与原文同段同系统"
          ],
          "locatingTip": "定位：题干关键词是 Processed，原文第 7 段（G 段）出现 “processes the data”，且同段前文有 “able to gather, analyse, evaluate and distribute … timely and accurate information”，与流程图里的 “Timely and accurate data distribution” 一一呼应。确定答案技巧：题干是被动结构 “Processed by the 40”，还原成主动句就是“某个主体处理数据”，原文 “The analysis unit processes the data to make it more useful” 的主语正是这个主体，即 analysis unit；其后 “finally, the MIS distributes it to managers in the right form and at the right time” 又对应流程图中“分发”的环节，进一步确认本行对应关系。答案两个词，符合 NO MORE THAN TWO WORDS。",
          "analysis": "原文第 7 段（G 段）描述 MIS 的内部环节：“The analysis unit processes the data to make it more useful and, finally, the MIS distributes it to managers in the right form and at the right time to help them make better marketing decisions.”（分析单元处理数据使其更有用；最后，MIS 以正确的形式、在正确的时间把它分发给管理者，帮助他们做出更好的营销决策）。流程图中 “Processed by the 40” 与 “Timely and accurate data distribution” 相邻，正好对应原文的“处理”与“分发”两个连续环节：题干的被动式 Processed by 来自原文的主动句 processes the data，其主语 The analysis unit 就是空格答案。另外，本段第 2 句已说明 MIS 能把 “needed, timely and accurate information” 分发给营销决策者，与流程图中的 timely and accurate 措辞一致，可交叉验证本格确实出自这一段的流程描述。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
