(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-1455", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-1455",
  "meta": {
    "examId": "p2-high-1455",
    "title": "Investment in shares versus investment in other assets - which gives the greater gain? 股票投资与其他资产投资——哪个回报更高？",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–20 标题匹配（List of Headings，段落 A–G）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 20
      },
      "items": [
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "Paragraph A: Choose the correct heading for paragraph A from the list of headings below.",
          "translation": "A 段：从下方小标题列表中为 A 段选择正确的小标题。",
          "answer": "iii",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "It all began in 1958 with a phone call from Louis Engel, a banker at Merrill Lynch, a US-based financial management company, who wanted to know how investors in shares had performed relative to investors in other assets such as low risk investments with guaranteed returns."
          },
          "synonyms": [
            "小标题中的 “A request” 同义替换为原文的 “a phone call from Louis Engel … who wanted to know how investors in shares had performed”",
            "小标题中的 “a far-reaching result” 对应原文紧接着的结果句 “The result, in 1960, was the launch of the University's Center for Research in Security Prices.”",
            "结果的“深远影响”还体现在原文的 “They provided the foundation of at least one-third of all empirical research in finance over the past 40 years”"
          ],
          "locatingTip": "定位：本段第一句就出现大写专有名词 Louis Engel、Merrill Lynch，且 1958 这一年份全文仅此一处，扫读 A 段首句即可判定。确定答案技巧：标题题的判分点是“段落主旨”，不是细节。A 段可以拆成两条信息：①1958 年一个银行家打来电话，想弄清楚股票投资者相对其他资产投资者的表现（a request）；②这个电话促成了 1960 年 CRSP 的成立，而 CRSP 数据后来成了金融实证研究的基石（a far-reaching result）。一个“请求”加一个“影响深远的结果”，与小标题 iii 完全吻合。",
          "analysis": "A 段共七句，逻辑是“一通电话—一笔资助—一个研究所—席卷学界的影响”。第一句交代请求的发起人和内容：Louis Engel 想弄明白投资股票的人与投资低风险等其他资产的人相比表现如何。第二、三、四句交代结果：Jim Lorie 答应查清楚，Louis Engel 出资，1960 年芝加哥大学证券价格研究中心（CRSP）成立。第五至七句说明这个结果的深远影响：半个世纪后 CRSP 数据无处不在，至少三分之一的金融实证研究以它为基础，其余研究多半也受其影响。题干所给的标题 iii “A request and a far-reaching result” 恰好概括了这一“因（请求）—果（影响深远的研究中心与数据库）”的结构，因此 A 段对应 iii。",
          "traps": [
            "为什么不选 i（Technological developments improve CRSP data）：A 段谈的是 CRSP 的起源，全文没有任何“技术发展改进数据”的内容，那属于 D 段（computing power became more affordable）。",
            "为什么不选 ii（Initial findings of the CRSP project）：A 段尚未涉及任何研究发现，最初的研究成果出现在 C 段（1964 年两位经济学家发表的第一份研究）。"
          ]
        },
        {
          "questionId": "q15",
          "questionNumber": 15,
          "stem": "Paragraph B: Choose the correct heading for paragraph B from the list of headings below.",
          "translation": "B 段：从下方小标题列表中为 B 段选择正确的小标题。",
          "answer": "iv",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Getting the CRSP data together was a tough process in what were then the early days of computers. Up to three million pieces of information on all the shares traded on the New York Stock Exchange between 1926 and 1960 were transferred from paper in the exchange's archive to magnetic tape."
          },
          "synonyms": [
            "小标题中的 “Difficulties” 同义替换为原文的 “a tough process”",
            "小标题中的 “collecting CRSP data” 同义替换为原文的 “Getting the CRSP data together”",
            "原文的 “A lot of time was spent adjusting prices to take account of complexities in the market.” 进一步佐证收集数据过程中的困难"
          ],
          "locatingTip": "定位：B 段首句即以 Getting the CRSP data together was a tough process 点明整段话题，关键词 tough 等价于标题中的 difficulties，一眼可辨。确定答案技巧：标题题的答案往往藏在段首或段尾的“概括句”里。B 段首句说“把 CRSP 数据汇总起来是个艰难的过程”，随后用三句展开困难的具体表现——资料要逐条搬运、价格要花大量时间调整、起点年份反复斟酌。首句是总，后面是分，因此标题取 iv“Difficulties in collecting CRSP data”。",
          "analysis": "B 段是典型的“论点加例证”结构。首句是论点：在当时计算机尚处早期的情况下，把 CRSP 数据收集齐全是一个 tough process（艰难的过程）。随后三句是例证：①1926 至 1960 年间纽约证券交易所全部股票约三百万条信息，要从交易所档案的纸上转录到磁带；②大量时间用于调整价格，以反映市场的复杂性；③Lorie 与 Fisher 把起始时间定在 1926 年 1 月，是为了让数据至少覆盖一个从繁荣到萧条的完整商业周期。三项内容围绕的核心都是“收集数据有多难”，与标题 iv 的难处（Difficulties）完全对应。",
          "traps": [
            "为什么不选 vii（Other university departments which depend on CRSP）：B 段完全没有提到其他院系，涉及机构的内容在 D 段（academic economists everywhere），且未提“院系依赖”这层关系。",
            "为什么不选 i（Technological developments improve CRSP data）：B 段的确提到 computers，但它的作用是说明“当时电脑刚起步、因此困难”，与“技术发展改善数据”的因果方向正好相反。"
          ]
        },
        {
          "questionId": "q16",
          "questionNumber": 16,
          "stem": "Paragraph C: Choose the correct heading for paragraph C from the list of headings below.",
          "translation": "C 段：从下方小标题列表中为 C 段选择正确的小标题。",
          "answer": "ii",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "When these two economists published the first study based on the CRSP data in 1964, they reported that the annual compound return on the shares over the entire 35-year period was (depending on the tax status of the investor) between 6.8% and 9%."
          },
          "synonyms": [
            "小标题中的 “Initial findings” 同义替换为原文的 “the first study based on the CRSP data” 以及 “they reported that …”",
            "小标题中的 “the CRSP project” 对应原文的 “the CRSP data”，即该研究项目所依托的数据",
            "原文的 “the study claimed that the rate of return on shares was 'substantially higher than for alternative investment media” 是这一最初研究得出的核心结论"
          ],
          "locatingTip": "定位：本题的关键词是 first study 与 1964，年份数字在扫读时极醒目，落在 C 段首句。确定答案技巧：标题题只需抓住段落的“功能”。C 段开头用 published the first study based on the CRSP data in 1964 明确交代这是基于 CRSP 数据的**第一份研究**，随后三句都在报告这份研究的具体发现（年复合回报率 6.8%–9%、股票收益高于其他投资、以及多数人因风险顾虑而选择低收益资产），整段就是“最初的研究结论”，对应标题 ii。",
          "analysis": "C 段首句交代研究的时间与身份——1964 年这些基于 CRSP 数据的第一份研究发表，两位经济学家报告 35 年间股票的年复合回报率为 6.8% 至 9%（视投资者的纳税身份而定）。第二句说这份研究承认当时缺乏其他资产的可靠数据，但仍断言股票回报“substantially higher than for alternative investment media”，并称这是首次为“长期来看股票胜过其他投资”这一流行观念提供了实证支持。第三句补充另一个观察：许多人天性谨慎、担心股市亏损风险，因而选择回报更低的资产；第四句引出今日所谓 equity risk premium 的概念。四句全部围绕“最初研究的发现”展开，与标题 ii“Initial findings of the CRSP project”严丝合缝。",
          "traps": [
            "为什么不选 viii（CRSP data not always being a useful basis for investment）：“CRSP 数据不总是投资的有用依据”讲的是数据可用于投资时的局限，那是 E 段（Fama 的异常现象一经发现即消失）的内容，C 段反而在强调该研究的肯定性结论。",
            "为什么不选 iii（A request and a far-reaching result）：请求与结果的因果链属于 A 段，C 段只是“结果”之后由别人做出的第一批研究，段落重心在 findings（发现）而非 request（请求）。"
          ]
        },
        {
          "questionId": "q17",
          "questionNumber": 17,
          "stem": "Paragraph D: Choose the correct heading for paragraph D from the list of headings below.",
          "translation": "D 段：从下方小标题列表中为 D 段选择正确的小标题。",
          "answer": "i",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "In turn, this resource became ever more useful as computing power became more affordable. The CRSP database has since been expanded to include a full range of different types of investments."
          },
          "synonyms": [
            "小标题中的 “Technological developments” 同义替换为原文的 “as computing power became more affordable”",
            "小标题中的 “improve CRSP data” 同义替换为原文的 “this resource became ever more useful” 以及 “has since been expanded to include a full range of different types of investments”",
            "原文的 “ensured the database was both kept up to date and made readily available to academic economists everywhere” 说明数据在持续更新与改良"
          ],
          "locatingTip": "定位：D 段出现大写专有名词 Myron Scholes 和年份 1974，但真正的判分句是表示技术进步的那一句 computing power became more affordable，扫读时盯住 computing/technology 类词汇即可锁定。确定答案技巧：标题题要区分“人物”与“主题”。D 段虽然以 Myron Scholes 担任 CRSP 主任开篇，但整段的主线是：随着计算能力越来越便宜，CRSP 这个资源越来越好用，数据库被扩展到各类投资品种，并被复制到世界各地——即技术（算力）的进步不断改良 CRSP 数据，对应标题 i。",
          "analysis": "D 段承接 C 段，讲 CRSP 数据在 1964 年之后的演进。首句说费雪与 Lorie 的报告之后，金融经济学家与数据之间的“恋情”一发不可收拾。第二句写 Myron Scholes 1974 年出任 CRSP 主任，保证数据库持续更新、并让各地学术经济学家都能方便取用；第三句是关键：“In turn, this resource became ever more useful as computing power became more affordable.”（反过来，随着计算能力越来越便宜，这一资源变得越来越有用）——算力的进步直接提升了数据的可用性。第四、五句继续写数据库被扩充到各种投资类型、并被复制到全世界。整段围绕“技术进步带来数据的改良与扩展”展开，故对应标题 i“Technological developments improve CRSP data”。",
          "traps": [
            "为什么不选 vii（Other university departments which depend on CRSP）：D 段提到的 academic economists everywhere 指学术界的广大使用者，并非“其他院系依赖 CRSP”，且这只是段落的一个细节，不是主旨。",
            "为什么不选 v（What the future holds）：D 段叙述的是 1974 年以来已经发生的历史演进，展望未来的是 G 段（CRSP's 50th anniversary symposium 上公布的下一步计划）。"
          ]
        },
        {
          "questionId": "q18",
          "questionNumber": 18,
          "stem": "Paragraph E: Choose the correct heading for paragraph E from the list of headings below.",
          "translation": "E 段：从下方小标题列表中为 E 段选择正确的小标题。",
          "answer": "viii",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In theory, such anomalies are potentially lucrative for investors, but as believers in efficient markets observe with satisfaction, it seems that no sooner are such anomalies discovered and reported in journals than they typically disappear."
          },
          "synonyms": [
            "小标题中的 “not always being a useful basis for investment” 同义替换为原文的 “no sooner are such anomalies discovered and reported in journals than they typically disappear”，即靠数据挖出来的机会转眼消失、难以真正用于投资",
            "小标题中的 “CRSP data” 对应原文的 “One of the earliest uses of CRSP data”，以及由此产生的 “a vast number of papers based on discovering such anomalies through data mining”",
            "原文的 “there are no predictable movements in prices for smart investors to exploit” 说明很难借助这些数据稳定获利"
          ],
          "locatingTip": "定位：E 段第一句就出现大写人名 Eugene Fama 与专有名词 efficient-market hypothesis，属于极佳定位词。确定答案技巧：标题题要抓段落的“结论走向”。E 段先说 Fama 用 CRSP 数据支持“有效市场假说”，指出股价随机涨跌、信息已反映在价格中、投资者无可利用的规律；继而又承认短期内存在一些可预测性，于是大量论文通过数据挖掘去寻找这类异常现象；但段末话锋一转——这些异常一经发现并发表往往就消失了。可见作者对“以数据为基础寻找投资机会”持消极态度，对应标题 viii。",
          "analysis": "E 段讲述 CRSP 数据最早的用途之一：Eugene Fama 用它来支持其“有效市场假说”。Fama 发现长期来看股价上下波动是随机的，没有明显规律；他说市场之所以有效，是因为所有相关信息在任何时刻都已反映在股价中，聪明投资者没有可预测的价格波动可利用。接着他有所让步，承认有证据表明股价存在暂时的短期可预测性，这一让步催生了大量通过数据挖掘寻找异常现象的论文。段末是判分关键：“In theory, such anomalies are potentially lucrative for investors, but … it seems that no sooner are such anomalies discovered and reported in journals than they typically disappear.”（理论上这些异常现象对投资者有利可图，但一旦被发现并发表，往往就消失了）。这说明基于 CRSP 数据挖出的“投资机会”并不可靠，对应标题 viii“CRSP data not always being a useful basis for investment”。",
          "traps": [
            "为什么不选 vi（Too much data for people to have an overall understanding）：E 段谈的是数据能否带来可预测的投资机会，而不是“数据多到让人看不清全局”，后者是 F 段（sheer volume of material、fail to see and understand the whole）。",
            "为什么不选 ii（Initial findings of the CRSP project）：Fama 的研究属于 CRSP 数据的“早期用途之一”，晚于 C 段 1964 年那份最初研究，且段落落点在“异常现象会消失”，不是“最初发现”。"
          ]
        },
        {
          "questionId": "q19",
          "questionNumber": 19,
          "stem": "Paragraph F: Choose the correct heading for paragraph F from the list of headings below.",
          "translation": "F 段：从下方小标题列表中为 F 段选择正确的小标题。",
          "answer": "vi",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "He worries that academic departments are full of economists who are so specialized in data analysis that they fail to see and understand the whole."
          },
          "synonyms": [
            "小标题中的 “Too much data” 同义替换为原文的 “the sheer volume of material” 与 “work that contains lots of data”",
            "小标题中的 “fail to have an overall understanding” 同义替换为原文的 “fail to see and understand the whole”",
            "原文的 “much of this statistical analysis is creating some interference that drowns out serious thinking about the big questions” 同样表达“海量数据淹没了对全局的思考”"
          ],
          "locatingTip": "定位：F 段以 However 转折开头，首句出现 the sheer volume of material，volume/lots of data 与标题 Too much data 直接呼应，可一步锁定。确定答案技巧：标题题看清段落的“批评对象”。F 段先说材料数量庞大导致经济学家日益专业化、利弊并存；接着借一些经济学家的担忧指出，大量统计分析制造了干扰，淹没了对“大问题”的严肃思考；最后引 Robert Shiller 的话——学者们过于专精数据分析，以致 fail to see and understand the whole（看不见也理解不了整体）。从“数据太多”到“看不到整体”，链条与标题 vi 完全一致。",
          "analysis": "F 段是全文唯一一段批评性内容。首句用 However 转折：材料数量之庞大（the sheer volume of material）使金融经济学家日益专业化，这可能有利也有弊。第二句指出一些经济学家的担忧：大量统计分析正在制造干扰，淹没了对重大问题（例如 2008 年金融体系为何几近崩溃、如何避免重演）的严肃思考。随后引入耶鲁大学的 Robert Shiller，他长期怀疑有效市场假说，认为 CRSP 数据库建立后，经济学家忽然相信金融已成科学，传统观念显得过时；他担心学术院系里充斥着过于专精数据分析的人，以致“fail to see and understand the whole”（看不见也理解不了整体），并认为要预见 2008 年的危机，本该“回到老派的历史阅读、研究机构与法律、跟爷爷辈聊聊”。整段的批评焦点正是“数据过多导致丧失全局视野”，对应标题 vi。",
          "traps": [
            "为什么不选 viii（CRSP data not always being a useful basis for investment）：F 段的批评针对的是“研究者被数据淹没、丧失宏观思考”，并未讨论 CRSP 数据作为投资依据是否可靠，那是 E 段的落点。",
            "为什么不选 i（Technological developments improve CRSP data）：F 段虽提到 information technology，但说的是信息技术反而加快了资源消耗（见下一段 Thackara 的观点），与“技术进步改良数据”无关。"
          ]
        },
        {
          "questionId": "q20",
          "questionNumber": 20,
          "stem": "Paragraph G: Choose the correct heading for paragraph G from the list of headings below.",
          "translation": "G 段：从下方小标题列表中为 G 段选择正确的小标题。",
          "answer": "v",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "At CRSP's 50th anniversary symposium, plans were unveiled to publish indicators on an expanding range of investments, as well as for growth and value stocks."
          },
          "synonyms": [
            "小标题中的 “What the future holds” 同义替换为原文的 “plans were unveiled to publish indicators on an expanding range of investments”",
            "小标题中的 “What the future holds” 也对应原文结尾的 “that should be enough to ensure CRSP's continuing success”",
            "原文的 “These indicators, CRSP claims, will be more academically rigorous and cheaper than existing ones.” 是面向未来的承诺与规划"
          ],
          "locatingTip": "定位：G 段首句出现专有名词 Scholes，第二句出现 CRSP's 50th anniversary symposium 与 plans were unveiled，plans（计划）是典型的“未来”信号词，据此锁定。确定答案技巧：标题题看到 plan、will、next、future 之类的词就要想到“展望未来”类标题。G 段先以 Scholes 的回应开篇（这一实证分析的价值体现在需求持续增长），随后公布 50 周年研讨会上的计划——将发布覆盖更多投资品种以及成长型、价值型股票的指标，并承诺这些指标更严谨、更便宜，最后说这对相信市场有效的人而言足以确保 CRSP 的持续成功。整段面向未来，对应标题 v。",
          "analysis": "G 段是全文的收尾与回应段。首句：Scholes 回应上一段 Shiller 的批评，主张这类实证分析的价值已由“需求持续增长”这一事实得到证明。第二句是本段的判分句：“At CRSP's 50th anniversary symposium, plans were unveiled to publish indicators on an expanding range of investments, as well as for growth and value stocks.”（在 CRSP 五十周年研讨会上公布了计划，将发布覆盖范围不断扩大的各类投资以及成长型和价值型股票的指标）。第三句说 CRSP 声称这些指标在学术上更严谨、价格也更便宜。末句是展望：对相信市场有效的人而言，这足以确保 CRSP 的持续成功。从“计划发布新指标”到“确保未来的持续成功”，全段讲的是 CRSP 接下来要做什么、前景如何，对应标题 v“What the future holds”。",
          "traps": [
            "为什么不选 i（Technological developments improve CRSP data）：G 段的新指标计划属于研究产品与市场的拓展，并未涉及任何技术手段的进步，算力那条线在 D 段。",
            "为什么不选 vi（Too much data for people to have an overall understanding）：G 段的态度是乐观的（continuing success），与“数据过多、丧失全局理解”的批评口吻相反，那段批评在 F 段。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 21–23 人物观点匹配（Match each statement with A–D）",
      "mode": "per_question",
      "questionRange": {
        "start": 21,
        "end": 23
      },
      "items": [
        {
          "questionId": "q21",
          "questionNumber": 21,
          "stem": "A traditional approach may have helped predict a financial downturn.",
          "translation": "一种传统的做法或许有助于预判一次金融衰退。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "To have seen the 2008 global financial crisis coming, he argues, it would have been better to \"go back to old-fashioned readings of history, studying institutions and laws. We should have talked to grandpa.\""
          },
          "synonyms": [
            "题干中的 “A traditional approach” 同义替换为原文的 “old-fashioned readings of history” 与 “talked to grandpa”",
            "题干中的 “may have helped predict a financial downturn” 同义替换为原文的 “To have seen the 2008 global financial crisis coming … it would have been better to”",
            "题干中的 “a financial downturn” 对应原文的 “the 2008 global financial crisis”"
          ],
          "locatingTip": "定位：题干中的 financial downturn 在原文对应 the 2008 global financial crisis，这一表述只在 F 段出现，而该句的说话人正是 Robert Shiller（D 选项）。确定答案技巧：人物观点匹配题要把“观点内容”与“发言人”绑定，切忌凭人物在段落中的出场顺序作答。F 段先由作者转述一些经济学家的担忧，再明确写出 Robert Shiller … feels / He worries / he argues，本题所引的“回到老式的历史阅读、研究机构与法律、跟爷爷辈聊聊”正落在 he argues 之后，发言人清楚无误，故选 D。",
          "analysis": "F 段后半以 Robert Shiller 为主线。作者先交代他是耶鲁大学经济学家、长期怀疑有效市场假说，然后连续用 He worries、he argues 引出他的主张。最后两句是本题的落点：“To have seen the 2008 global financial crisis coming, he argues, it would have been better to 'go back to old-fashioned readings of history, studying institutions and laws. We should have talked to grandpa.'”（他认为，若想预见 2008 年全球金融危机，本应回到老派的历史阅读，研究机构与法律；本该跟爷爷辈多聊聊）。题干把它概括为“一种传统的做法（a traditional approach）或许有助于预判一次金融衰退（a financial downturn）”——old-fashioned readings、talked to grandpa 即“传统做法”，the 2008 global financial crisis 即“金融衰退”，To have seen … coming 即“预判”。观点与 Shiller 完全对应，故选 D。",
          "traps": [
            "为什么不是 A Fisher and Lorie：他们的观点出现在 C 段，讲的是股票长期回报高于其他投资，以及许多人因谨慎而选择低回报资产，从未涉及“传统方法能预判金融危机”。",
            "为什么不是 B Myron Scholes：B 段没有他的主张，D 段他的贡献是 1974 年出任 CRSP 主任、保证数据更新与共享；G 段他回应批评时谈的也是实证分析的价值与未来指标计划，与“预判衰退的传统方法”无关。",
            "为什么不是 C Eugene Fama：Fama 在 E 段主张市场有效、价格随机、异常现象会消失，他的立场恰恰与“能预判市场走势”相反，更谈不上用传统方法来预判危机。"
          ]
        },
        {
          "questionId": "q22",
          "questionNumber": 22,
          "stem": "Some people invest conservatively and as a result make less money.",
          "translation": "有些人投资保守，结果赚的钱更少。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Fisher and Lorie also observed that many people chose to invest in assets with lower returns because they were cautious by nature, and were concerned about the risk of loss inherent in investing in the stock market."
          },
          "synonyms": [
            "题干中的 “invest conservatively” 同义替换为原文的 “were cautious by nature”",
            "题干中的 “make less money” 同义替换为原文的 “chose to invest in assets with lower returns”",
            "题干中的 “as a result” 对应原文的 because 所标示的因果：因为天性谨慎，所以选择低回报资产"
          ],
          "locatingTip": "定位：题干的关键词是 conservatively、make less money，回原文找“谨慎”“回报较低”这类表述，C 段 third sentence 中 cautious by nature 与 assets with lower returns 同现，且主语正是 Fisher and Lorie（A 选项）。确定答案技巧：本题是“因果型”陈述，原文用 because 明确点出因果关系（因为天性谨慎、担心股市亏损，所以选择低回报资产），与题干 as a result 的逻辑方向一致；把发言人锁定为 Fisher and Lorie 即可作答。",
          "analysis": "C 段第三句：“Fisher and Lorie also observed that many people chose to invest in assets with lower returns because they were cautious by nature, and were concerned about the risk of loss inherent in investing in the stock market.”（费雪与 Lorie 还观察到，许多人选择投资回报较低的资产，是因为他们天性谨慎，也担心投资股市本身固有的亏损风险）。题干把它压缩为“有些人投资保守，结果赚的钱更少”：invest conservatively 对应 were cautious by nature，make less money 对应 chose to invest in assets with lower returns，as a result 对应原文的 because 因果结构。观察者身份在句首明写为 Fisher and Lorie，故选 A。",
          "traps": [
            "为什么不是 B Myron Scholes：D 段与 G 段关于 Scholes 的内容是数据库管理与对批评的回应，没有任何关于“投资者因谨慎而少赚”的观察。",
            "为什么不是 C Eugene Fama：E 段 Fama 谈的是市场有效、价格随机以及短期可预测性，其论述对象是市场与信息，而非个人的投资性格与收益高低。",
            "为什么不是 D Robert Shiller：F 段 Shiller 关注的是经济学的过度专业化与金融危机预警，并未讨论普通投资者的风险偏好与回报差异。"
          ]
        },
        {
          "questionId": "q23",
          "questionNumber": 23,
          "stem": "It may be possible to predict short-term movements in share prices but not over the long term.",
          "translation": "或许可以预测股价的短期走势，但无法预测长期走势。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Fama did concede that there was some evidence of temporary short-term predictability in share prices, however."
          },
          "synonyms": [
            "题干中的 “short-term movements in share prices” 同义替换为原文的 “temporary short-term predictability in share prices”",
            "题干中的 “may be possible to predict” 同义替换为原文的 “there was some evidence of … predictability”",
            "题干中的 “but not over the long term” 对应原文上一句的 “over a lengthy period share prices tended to rise and fall randomly, without showing much of a pattern”"
          ],
          "locatingTip": "定位：题干出现 short-term 与 predict，原文 E 段中 temporary short-term predictability 这一表述全文仅此一处，落到该句即可。确定答案技巧：本题的讨论人是 Eugene Fama（C 选项）。E 段先说他发现长期股价随机涨跌、没有规律，接着用 however 转折，承认短期内存在一定可预测性——长期不可测、短期可测的对比正是题干所说的“短期可预测、长期不可预测”，而主语 Fama did concede 已把发言人写明，故选 C。",
          "analysis": "E 段第三、四句构成本题的完整依据。第三句：“He found that over a lengthy period share prices tended to rise and fall randomly, without showing much of a pattern.”（他发现长期来看股价随机涨跌，没有太多规律）——对应题干“无法预测长期走势”。第四句：“Fama did concede that there was some evidence of temporary short-term predictability in share prices, however.”（不过 Fama 确实承认有证据显示股价存在暂时的短期可预测性）——对应题干“或许可以预测短期走势”。两句合起来正是题干的对比结构，而这两句的主语都是 Eugene Fama，故答案是 C。",
          "traps": [
            "为什么不是 A Fisher and Lorie：他们在 C 段讨论的是长期回报率与投资者的风险顾虑，并未区分短期与长期的可预测性。",
            "为什么不是 B Myron Scholes：Scholes 的相关内容在 D、G 段，涉及数据库维护、数据扩展与对批评的回应，没有关于股价可预测性的论述。",
            "为什么不是 D Robert Shiller：Shiller 在 F 段是有效市场假说的怀疑者，他质疑的是经济学家的研究方法与危机预警能力，并未提出“短期可测、长期不可测”这一具体判断。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 摘要填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q24",
          "questionNumber": 24,
          "stem": "In 1958, a 24 ________ working for a financial management company telephoned in Chicago to ask how well investments in shares performed in comparison to investments in low-risk assets.",
          "translation": "1958 年，一位为某金融管理公司工作的 ________ 从芝加哥打来电话，询问股票投资与低风险资产投资相比表现如何。",
          "answer": "banker",
          "wordClass": "名词（单数，表示职业身份；空格前有不定冠词 a，故用单数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "1",
            "quote": "It all began in 1958 with a phone call from Louis Engel, a banker at Merrill Lynch, a US-based financial management company"
          },
          "synonyms": [
            "题干中的 “telephoned in Chicago” 同义替换为原文的 “a phone call from Louis Engel”，打电话者即 Louis Engel",
            "题干中的 “working for a financial management company” 同义替换为原文的 “at Merrill Lynch, a US-based financial management company”",
            "题干中的 “asked how well investments in shares performed in comparison to investments in low-risk assets” 同义替换为原文的 “wanted to know how investors in shares had performed relative to investors in other assets such as low risk investments with guaranteed returns”"
          ],
          "locatingTip": "定位：题干的首个线索是年份 1958，全文只有 A 段首句出现；同句中的 financial management company 与原文 a US-based financial management company 完全对应，定位几乎零成本。确定答案技巧：找到句子后，看清空缺处需要的是什么身份——原文的同位语 “a banker at Merrill Lynch, a US-based financial management company” 正好把“某金融管理公司（Merrill Lynch）里的一位 banker（银行家）”这个身份交代清楚，题目把同位语拆开，把职业名词挖空，因此答案就是 banker。注意 ONE WORD ONLY，只填一个词。",
          "analysis": "摘要第一句对应原文 A 段首句：“It all began in 1958 with a phone call from Louis Engel, a banker at Merrill Lynch, a US-based financial management company, who wanted to know how investors in shares had performed relative to investors in other assets such as low risk investments with guaranteed returns.”（一切都始于 1958 年 Louis Engel 的一通电话，他是美国金融管理公司美林证券的银行家，想知道股票投资者相对于低风险、有保证回报等其他资产投资者的表现如何）。题干用 “a 24 ______ working for a financial management company telephoned in Chicago” 改写，把原文的同位语 a banker at Merrill Lynch（公司名用作机构类别）改写成 working for a financial management company，留空的是职业本身。原文的同位语结构已明确给出答案词 banker（银行家），词性为可数名词单数，空格前已有不定冠词 a，故填 banker。",
          "traps": []
        },
        {
          "questionId": "q25",
          "questionNumber": 25,
          "stem": "Compiling the CRSP data was difficult because 25 ________ were still being developed and information that had previously been on 26 ________ needed to be put onto magnetic tape.",
          "translation": "汇编 CRSP 数据很困难，因为 ________ 当时仍在研制/开发之中，而且此前保存在 ________ 上的信息需要转录到磁带上。",
          "answer": "computers",
          "wordClass": "名词（复数；题干谓语为复数 were，故必须用复数形式 computers，不能写单数 computer）",
          "locating": {
            "paragraph": "2",
            "quote": "Getting the CRSP data together was a tough process in what were then the early days of computers."
          },
          "synonyms": [
            "题干中的 “Compiling the CRSP data” 同义替换为原文的 “Getting the CRSP data together”",
            "题干中的 “was difficult” 同义替换为原文的 “was a tough process”",
            "题干中的 “were still being developed” 同义替换为原文的 “in what were then the early days of computers”，即电脑尚处早期、仍在发展"
          ],
          "locatingTip": "定位：摘要在 1958 年那通电话之后转入“汇编数据很难”，对应原文 B 段首句 Getting the CRSP data together was a tough process…，句中 computers 直接可填。确定答案技巧：注意题干的语法提示——空缺后是复数谓语 were still being developed，说明答案必须是复数名词；原文 “in what were then the early days of computers” 中被介词 of 修饰的 computers 恰为复数，且代入后语义通顺（电脑仍在早期发展阶段），故填 computers。",
          "analysis": "摘要第二句对应原文 B 段首句：“Getting the CRSP data together was a tough process in what were then the early days of computers.”（把 CRSP 数据汇总起来是个艰难的过程，当时还是计算机的早期年代）。题干把这一句改写成 “Compiling the CRSP data was difficult because 25 ______ were still being developed”，把原文“当时还处于电脑的早期阶段”这一时间背景改写成原因状语“因为电脑仍在发展之中”：early days 对应 still being developed。空格所需名词即 computers，且必须为复数，与题干 were still being developed 一致。原文紧接着说 1926 至 1960 年间约三百万条信息要从纸上转录到磁带，正是电脑不发达时期工作繁重的写照。",
          "traps": []
        },
        {
          "questionId": "q26",
          "questionNumber": 26,
          "stem": "Compiling the CRSP data was difficult because 25 ________ were still being developed and information that had previously been on 26 ________ needed to be put onto magnetic tape.",
          "translation": "汇编 CRSP 数据很困难，因为 ________ 当时仍在研制/开发之中，而且此前保存在 ________ 上的信息需要转录到磁带上。",
          "answer": "paper",
          "wordClass": "名词（不可数，指信息原先承载的纸质载体；作介词 on 的宾语，用原形 paper，不变复数、不加冠词）",
          "locating": {
            "paragraph": "2",
            "quote": "Up to three million pieces of information on all the shares traded on the New York Stock Exchange between 1926 and 1960 were transferred from paper in the exchange's archive to magnetic tape."
          },
          "synonyms": [
            "题干中的 “information that had previously been on …” 同义替换为原文的 “information … were transferred from paper”",
            "题干中的 “needed to be put onto magnetic tape” 同义替换为原文的 “were transferred … to magnetic tape”",
            "题干中的 “previously been on” 与原文的 “from paper in the exchange's archive” 对应：信息原先存放在纸质档案上"
          ],
          "locatingTip": "定位：本题与第 25 题同出一句，题干后半段 “information that had previously been on … needed to be put onto magnetic tape” 直接指向原文同一段的 “were transferred from paper in the exchange's archive to magnetic tape”。确定答案技巧：比对两组动词即可锁定——“移到磁带上”原文用 transferred … to magnetic tape，题干用 put onto magnetic tape；“原先在……上”原文用 from paper，题干用 previously been on，把 from 换成 on 后，介词后的名词 paper 就是答案。空格位于介词 on 之后，需名词性成分，paper 为不可数名词，保持原形。",
          "analysis": "原文 B 段第二句：“Up to three million pieces of information on all the shares traded on the New York Stock Exchange between 1926 and 1960 were transferred from paper in the exchange's archive to magnetic tape.”（1926 至 1960 年间纽约证券交易所所有股票的多达三百万条信息，从交易所档案中的纸质材料转录到了磁带上）。题干把它改写为 “information that had previously been on 26 ______ needed to be put onto magnetic tape”，句式的转换在于把原文的“从纸上（from paper）转录到磁带”改写成“原先在某种载体上、后需转到磁带”，介词由 from 变为 on，但所指的载体没有变化，仍是 paper（纸质档案）。从词性看，on 后接名词，paper 在此表示“纸张／纸质材料”，为不可数名词，不加冠词也不变复数，故填 paper。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
