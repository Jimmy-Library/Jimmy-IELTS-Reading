(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-130", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-130",
  "meta": {
    "examId": "p2-high-130",
    "title": "Investment in shares versus investment in other assets 回报数据分析",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–20 段落标题匹配（List of Headings）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 20
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "Paragraph A — Choose the correct heading for this paragraph from the list of headings below.",
          "translation": "A 段——从下方标题列表中为 A 段选出正确的标题。正确标题为 iii. A request and a far-reaching result（一个请求，以及一个影响深远的结果）。",
          "answer": "iii",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Louis Engel soon agreed to provide the funding, and more. The result, in 1960, was the launch of the University's Center for Research in Security Prices."
          },
          "synonyms": [
            "“A request” 对应原文的 “a phone call from Louis Engel, a banker at Merrill Lynch, a US-based financial management company, who wanted to know how investors in shares had performed relative to investors in other assets”，即 Engel 打电话提出的那项研究请求",
            "“a far-reaching result” 同义替换为原文的 “The result, in 1960, was the launch of the University's Center for Research in Security Prices.”，一通电话最终促成了一个研究中心的成立",
            "“far-reaching（影响深远）” 由下文 “Half a century later CRSP (pronounced 'crisp') data are everywhere. They provided the foundation of at least one-third of all empirical research in finance over the past 40 years.” 得到印证"
          ],
          "locatingTip": "定位：段落标题题不必读完全段，先看每段的“起始句 + 结尾句”。A 段开头是 1958 年的一通电话，结尾落在 1960 年 CRSP 的成立。确定答案技巧：把候选标题拆成信息点逐个回原文核对——“A request”对应打电话询问（who wanted to know how investors in shares had performed …），“a far-reaching result”对应 the launch of the University's Center for Research in Security Prices；两处证据都在本段，故锁定 iii。段末 “Half a century later CRSP (pronounced 'crisp') data are everywhere” 进一步说明结果影响之大。",
          "analysis": "A 段是全文第一段，讲 CRSP 这个数据库是怎么来的。开头写道：“It all began in 1958 with a phone call from Louis Engel, a banker at Merrill Lynch, a US-based financial management company, who wanted to know how investors in shares had performed relative to investors in other assets such as low-risk investments with guaranteed returns.”（一切始于 1958 年的一通电话，打电话的是美国金融管理公司美林的银行家 Louis Engel，他想知道相比低风险、有保证收益一类的其他资产，股票投资者的表现如何）。这里包含标题的第一个信息点“一个请求（A request）”：Engel 提出的正是一个具体的研究请求。接着是第二个信息点：“‘I don't know, but if you gave me $50,000 I could find out,’ replied Jim Lorie, a dean at the University of Chicago's business school. Louis Engel soon agreed to provide the funding, and more. The result, in 1960, was the launch of the University's Center for Research in Security Prices.”（Jim Lorie 回答“我不知道，但如果你给我 5 万美元，我就能查清楚”；Engel 很快同意出资，而且不止出钱。结果 1960 年芝加哥大学证券价格研究中心成立）。一通询问电话最终催生了一个研究机构，这就是“一个影响深远的结果（a far-reaching result）”。段末用 “Half a century later CRSP (pronounced 'crisp') data are everywhere. They provided the foundation of at least one-third of all empirical research in finance over the past 40 years.”（半个世纪后 CRSP 数据无处不在，过去 40 年金融领域至少三分之一的实证研究以它为基础）证明这个结果影响之大。全段逻辑是“请求—结果—结果的深远影响”，与标题 iii 严格吻合。",
          "traps": [
            "为什么不是 vii（Other university departments which depend on CRSP）：A 段虽然出现 University of Chicago's business school，但那只是 Jim Lorie 的身份背景，用来交代 CRSP 的诞生地；全段没有一句话谈到大学里其他院系依赖 CRSP 数据。",
            "为什么不是 ii（Initial findings of the CRSP project）：A 段只讲到 1960 年 CRSP 成立以及这些数据日后被广泛使用，没有出现任何研究结论或数据结果（第一份研究结论出现在 C 段 1964 年）。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "Paragraph B — Choose the correct heading for this paragraph from the list of headings below.",
          "translation": "B 段——从下方标题列表中为 B 段选出正确的标题。正确标题为 iv. Difficulties in collecting CRSP data（搜集 CRSP 数据过程中的困难）。",
          "answer": "iv",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Getting the CRSP data together was a tough process in what were then the early days of computers."
          },
          "synonyms": [
            "“collecting CRSP data” 同义替换为原文的 “Getting the CRSP data together”，即把数据汇集、整理到一起",
            "“Difficulties” 同义替换为原文的 “a tough process”（一个艰难的过程）",
            "“in what were then the early days of computers” 说明当时技术条件落后，是造成困难的原因之一"
          ],
          "locatingTip": "定位：B 段首句就是主题句，看到 Getting the CRSP data together was a tough process 即可停读判断。确定答案技巧：标题 iv 的两个关键词 Difficulties 与 collecting CRSP data，分别对应原文的 a tough process 与 Getting the CRSP data together；再往下读 “Up to three million pieces of information … were transferred from paper … to magnetic tape. A lot of time was spent adjusting prices …” 全是“难”的具体化，用来验证本段主题就是“收集数据之难”。",
          "analysis": "B 段第一句直接点题：“Getting the CRSP data together was a tough process in what were then the early days of computers.”（在当时电脑尚处早期阶段的条件下，把 CRSP 数据汇集起来是个艰难的过程）。其后三句把“难”具体化：一是数据量极大、还要从纸质档案转录到磁带——“Up to three million pieces of information on all the shares traded on the New York Stock Exchange between 1926 and 1960 were transferred from paper in the exchange's archive to magnetic tape.”（1926 至 1960 年间纽约证券交易所全部股票多达三百万条信息，要从交易所档案室的纸张转录到磁带）；二是价格调整耗时——“A lot of time was spent adjusting prices to take account of complexities in the market.”（大量时间花在按市场复杂性调整价格上）；三是起始年份的选择也颇费斟酌——“Lorie and his co-researcher, Lawrence Fisher, chose January 1926 as the start date because they wanted the data to span at least one complete business cycle from boom to bust, or vice versa.”（两人之所以选 1926 年 1 月为起点，是为了让数据至少跨越一个从繁荣到萧条的完整商业周期）。全段没有一句研究结论，通篇在讲“搜集数据有多难”，与标题 iv 完全对应。",
          "traps": [
            "为什么不是 i（Technological developments improve CRSP data）：B 段提到 “the early days of computers”，是为了说明当时电脑技术不成熟、反而增加了工作难度；技术“帮上忙、改进数据”这一层意思要到 D 段的 computing power became more affordable 才出现。",
            "为什么不是 ii（Initial findings of the CRSP project）：B 段通篇讲的是数据汇集与整理的过程，没有任何研究发现或结果。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "Paragraph C — Choose the correct heading for this paragraph from the list of headings below.",
          "translation": "C 段——从下方标题列表中为 C 段选出正确的标题。正确标题为 ii. Initial findings of the CRSP project（CRSP 项目最初的研究结果）。",
          "answer": "ii",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "When these two economists published the first study based on the CRSP data in 1964, they reported that the annual compound return on the shares over the entire 35-year period was (depending on the tax status of the investor) between 6.8% and 9%."
          },
          "synonyms": [
            "“Initial” 同义替换为原文的 “the first study based on the CRSP data in 1964”",
            "“findings” 同义替换为原文的 “they reported that the annual compound return on the shares … was … between 6.8% and 9%” 以及 “the study claimed that the rate of return on shares was 'substantially higher than for alternative investment media'”",
            "“the CRSP project” 对应原文的 “the CRSP data”"
          ],
          "locatingTip": "定位：C 段首句含有明确的时间 1964 和 the first study，是“最初研究结果”的信号词。确定答案技巧：标题 ii 中 initial 对应 the first study，findings 对应 reported that …、the study claimed that …；本段给出的 6.8% 至 9% 的年复合回报率、以及“股票回报远高于其他投资渠道”的结论，都是这些最初发现的内容，可互相印证。",
          "analysis": "C 段的主题是 CRSP 数据带来的第一批研究成果。首句：“When these two economists published the first study based on the CRSP data in 1964, they reported that the annual compound return on the shares over the entire 35-year period was (depending on the tax status of the investor) between 6.8% and 9%.”（1964 年，这两位经济学家发表了基于 CRSP 数据的第一项研究，报告称整个 35 年间股票的年复合回报率在 6.8% 到 9% 之间，具体视投资者的纳税身份而定）。这一句里 the first study 对应 initial，reported that … 及其后的具体数字对应 findings，正是标题 ii 的内容。第二句继续给出结论：“Acknowledging that good data on the performance of other assets were not available, the study claimed that the rate of return on shares was 'substantially higher than for alternative investment media', providing the first empirical support for the still-popular idea that shares outperform other investments over the long run.”（研究承认当时缺乏其他资产品种表现的可靠数据，但仍声称股票回报率“远高于其他投资渠道”，首次为“股票长期跑赢其他投资”这一至今流行的观点提供了实证支持）。段末两句（许多投资者出于谨慎而选择低回报资产；经济学家后来把这部分额外回报称为 equity risk premium）只是对这些发现的补充解释，并不改变本段“公布最初研究结果”的主题。",
          "traps": [
            "为什么不是 viii（CRSP data not always being a useful basis for investment）：C 段确实提到许多人因谨慎而选择低回报资产，但本段重心仍是用数据得出的“股票长期跑赢其他投资”这一最初结论；标题 viii 所说的“数据并非总能作为投资的有用依据”要靠 E 段“异象一旦发表就消失”的内容才成立。",
            "为什么不是 iv（Difficulties in collecting CRSP data）：搜集数据的困难属于 B 段，C 段已经进入了结果发布阶段，没有描写任何搜集环节的障碍。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "Paragraph D — Choose the correct heading for this paragraph from the list of headings below.",
          "translation": "D 段——从下方标题列表中为 D 段选出正确的标题。正确标题为 i. Technological developments improve CRSP data（技术发展改进 CRSP 数据）。",
          "answer": "i",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "In turn, this resource became ever more useful as computing power became more affordable. The CRSP database has since been expanded to include a full range of different types of investments."
          },
          "synonyms": [
            "“Technological developments” 同义替换为原文的 “computing power became more affordable”（计算能力越来越便宜，即技术条件进步）",
            "“improve CRSP data” 同义替换为原文的 “The CRSP database has since been expanded to include a full range of different types of investments.”",
            "“improve” 还对应原文的 “ensured the database was both kept up to date and made readily available to academic economists everywhere” 与 “It has been replicated across the world.”"
          ],
          "locatingTip": "定位：D 段第 3、4 句是本段主题句，出现 computing power 与 The CRSP database has since been expanded，扫读时盯住这两处即可。确定答案技巧：标题 i 的两个信息点分别落位——Technological developments 对应 computing power became more affordable（算力这一技术条件变好），improve CRSP data 对应 database has since been expanded to include a full range of different types of investments（数据库内容被扩充、覆盖更多投资类型）。技术条件与数据质量的对应关系成立，故答案是 i。",
          "analysis": "D 段讲 1964 年报告之后 CRSP 数据库的持续演变。前半段写制度与推广：“Myron Scholes, now a Nobel laureate, became director of CRSP in 1974, and ensured the database was both kept up to date and made readily available to academic economists everywhere.”（如今的诺贝尔奖得主 Myron Scholes 于 1974 年出任 CRSP 主任，确保数据库既保持更新，又能方便地提供给世界各地的学术经济学家使用）。后半段是判分所在：“In turn, this resource became ever more useful as computing power became more affordable. The CRSP database has since been expanded to include a full range of different types of investments. It has been replicated across the world.”（反过来，随着计算能力越来越便宜，这一资源变得越来越有用；此后 CRSP 数据库已扩展，涵盖各种不同类型的投资，并被复制到世界各地）。computing power became more affordable 说的是电脑与算力这类“技术条件”的进步，has since been expanded 说的是数据库本身在内容上不断扩充、覆盖范围变广，两者合起来正是标题 i 的意思：技术发展让 CRSP 数据变得更好、更有用。",
          "traps": [
            "为什么不是 vii（Other university departments which depend on CRSP）：D 段说数据库被 “made readily available to academic economists everywhere”，受益者是各地的学术经济学家个人，而不是“大学里的其他院系”，原文没有任何院系层面的表述。",
            "为什么不是 iii（A request and a far-reaching result）：那是 A 段的主题（CRSP 如何诞生）；D 段讲的是成立之后的持续发展与扩充，两段主题不同。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "Paragraph E — Choose the correct heading for this paragraph from the list of headings below.",
          "translation": "E 段——从下方标题列表中为 E 段选出正确的标题。正确标题为 viii. CRSP data not always being a useful basis for investment（CRSP 数据并不总能成为投资的有用依据）。",
          "answer": "viii",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "In theory, such anomalies are potentially lucrative for investors, but as believers in efficient markets observe with satisfaction, it seems that no sooner are such anomalies discovered and reported in journals than they typically disappear."
          },
          "synonyms": [
            "“not always being a useful basis for investment” 同义替换为原文的 “no sooner are such anomalies discovered and reported in journals than they typically disappear”，即靠数据挖出来的规律一经公布就失效，无法据此稳定获利",
            "“not always” 对应原文的 “it seems that … typically disappear” 与 “potentially lucrative”，说明只是“可能”“通常”而非必然",
            "“CRSP data” 对应原文的 “That stipulation has resulted in a vast number of papers based on discovering such 'variations' through data mining”"
          ],
          "locatingTip": "定位：本段末尾的转折句是主题落脚点，找 anomalies 与 disappear 这一组词，只在 E 段末句出现。确定答案技巧：标题 viii 讲“CRSP 数据并不总能成为投资的有用依据”，与末句“异象在被发现并发表后就往往消失”完全同向——规律既然会消失，投资者就无法依靠它赚钱；前文的 “no predictable movements in prices for smart investors to exploit” 也在支持这层意思，两处互相印证。",
          "analysis": "E 段讲的是 CRSP 数据的一种用途及其结论。Eugene Fama 用它支持“有效市场假说”：他发现 “over a lengthy period share prices tended to rise and fall randomly, without showing much of a pattern”（长期看股价随机涨跌，没有明显规律），并认为 “all relevant information is reflected in share prices at any given moment, meaning there are no predictable movements in prices for smart investors to exploit”（所有相关信息随时都反映在股价里，因此没有可预测的走势供聪明的投资者利用）。他承认 “Fama did concede that there was some evidence of temporary short-term predictability in share prices, however.”（不过 Fama 确实承认有证据显示股价存在暂时性的短期可预测性），这类短期规律催生了大量靠数据挖掘寻找“variations”的论文。段末是判分句：“In theory, such anomalies are potentially lucrative for investors, but as believers in efficient markets observe with satisfaction, it seems that no sooner are such anomalies discovered and reported in journals than they typically disappear.”（理论上这类异象对投资者可能有利可图，但信奉有效市场的人满意地指出，这些异象往往一被发现并在期刊上发表就消失了）。既然数据挖出的规律一公布就失效，它就无法稳定地作为投资依据，这正是标题 viii 的含义。",
          "traps": [
            "为什么不是 ii（Initial findings of the CRSP project）：E 段虽然提到研究结论，但讲的是 Fama 用 CRSP 数据支持“有效市场假说”以及短期规律会被抹平，重点落在“数据挖出的规律通常无法带来持续收益”，而不是 CRSP 项目最初公布的收益率结果（那是 C 段）。",
            "为什么不是 vii（Other university departments which depend on CRSP）：E 段只出现一位经济学家 Eugene Fama 及其假说，全段没有提到任何院系对 CRSP 的依赖。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "Paragraph F — Choose the correct heading for this paragraph from the list of headings below.",
          "translation": "F 段——从下方标题列表中为 F 段选出正确的标题。正确标题为 vi. Too much data for people to have an overall understanding（数据过多，人们难以形成整体理解）。",
          "answer": "vi",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "He worries that academic departments are full of economists who are so specialised in data analysis that they fail to see and understand the whole."
          },
          "synonyms": [
            "“Too much data” 同义替换为原文的 “the sheer volume of material” 与 “so specialised in data analysis”",
            "“for people to have an overall understanding” 同义替换为原文的 “they fail to see and understand the whole”",
            "“the whole（整体）” 与原文的 “drowns out serious thinking about the big questions” 相互呼应，均指失去全局视野"
          ],
          "locatingTip": "定位：F 段首句的 the sheer volume of material 就是标题里 too much data 的信号，可直接判定本段主题。确定答案技巧：标题 vi 的两个信息点分别对应 volume of material（数据/材料太多）与 fail to see and understand the whole（看不到整体）；段中 “much of this statistical analysis is creating some interference that drowns out serious thinking about the big questions” 是同一意思的另一种表达，可作交叉验证。",
          "analysis": "F 段讲数据与论文数量过多带来的负面后果。首句：“However, the sheer volume of material means that financial economists are becoming increasingly specialised, which may have costs as well as benefits.”（然而材料数量之巨使金融经济学家越来越专门化，这既有好处也有代价），the sheer volume of material 正对应标题中的 too much data。接着写代价：“Some economists worry that much of this statistical analysis is creating some interference that drowns out serious thinking about the big questions, such as why the financial system nearly collapsed in 2008 and how a repeat can be avoided.”（一些经济学家担心大量统计分析正在制造干扰，淹没对重大问题的严肃思考，例如金融体系为何在 2008 年几近崩溃、如何避免重演）。Robert Shiller 的批评落在同一处，也就是本段判分句：“He worries that academic departments are full of economists who are so specialised in data analysis that they fail to see and understand the whole. They get a sense of authority from work that contains lots of data.”（他担心学术院系里满是过于专注数据分析的经济学家，以致看不到也理解不了整体；他们从含大量数据的工作中获得权威感）。数据太多导致只见树木不见森林，与标题 vi 精确对应。",
          "traps": [
            "为什么不是 vii（Other university departments which depend on CRSP）：F 段虽出现 academic departments，但说的是这些院系里挤满了过度专门化的经济学家（full of economists who are so specialised in data analysis），并不是“其他院系依赖 CRSP 数据”。",
            "为什么不是 viii（CRSP data not always being a useful basis for investment）：F 段的落点是数据过多导致学者忽略整体（认知层面的问题），不是讲数据对投资是否有用（那是 E 段）。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Paragraph G — Choose the correct heading for this paragraph from the list of headings below.",
          "translation": "G 段——从下方标题列表中为 G 段选出正确的标题。正确标题为 v. What the future holds（未来会怎样）。",
          "answer": "v",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "At CRSP's 50th-anniversary symposium, plans were unveiled to publish indicators on an expanding range of investments, as well as for growth and value stocks."
          },
          "synonyms": [
            "“What the future holds” 对应原文的 “plans were unveiled to publish indicators on an expanding range of investments”（计划才刚公布，指向未来）",
            "“the future” 还对应原文的 “These indicators, CRSP claims, will be more academically rigorous and cheaper than existing ones.” 与 “that should be enough to ensure CRSP's continuing success.”",
            "“What … holds” 同义替换为原文的 “continuing success”，即对日后前景的判断"
          ],
          "locatingTip": "定位：G 段是全文最后一段，出现 plans were unveiled、will be、continuing success 等将来指向的表述，是典型的“展望段”。确定答案技巧：标题 v（What the future holds）属于展望型标题，对应原文中的计划与前景类表达——“plans were unveiled to publish indicators …”、“These indicators … will be more academically rigorous and cheaper than existing ones.”、“that should be enough to ensure CRSP's continuing success.”。三处都指向尚未发生的将来，故答案为 v。",
          "analysis": "G 段是全文末段，内容为对批评的回应与后续规划。Scholes 先以需求增长反驳批评：“Scholes responds to this criticism with the contention that the usefulness of this empirical analysis is proven by the fact that demand for it continues to grow.”（Scholes 回应这一批评时主张，对这类实证分析的需求持续增长，正好证明它有用）。随后进入前瞻部分，也就是本题定位句：“At CRSP's 50th-anniversary symposium, plans were unveiled to publish indicators on an expanding range of investments, as well as for growth and value stocks. These indicators, CRSP claims, will be more academically rigorous and cheaper than existing ones. For believers in the efficiency of markets, that should be enough to ensure CRSP's continuing success.”（在 CRSP 五十周年研讨会上公布了新计划：发布覆盖更多投资类别的指标，还包括成长型股票和价值型股票；CRSP 称这些指标将比现有指标更具学术严谨性、成本更低；对相信市场有效的人来说，这足以确保 CRSP 持续成功）。plans were unveiled、will be more academically rigorous、continuing success 都是面向将来、展望前景的表述，与标题 v 完全一致。",
          "traps": [
            "为什么不是 viii（CRSP data not always being a useful basis for investment）：G 段是 Scholes 对批评的回应以及 CRSP 的未来规划，并未讨论“数据是否适合作投资依据”；相反，他坚持这类分析有用。",
            "为什么不是 i（Technological developments improve CRSP data）：G 段提到新指标会更严谨、更便宜，但这是拓展全新的指标范围，而不是技术发展改进已有数据；“Technological developments”这一层出现在 D 段。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 21–23 人名观点匹配（List of Economists）",
      "mode": "per_question",
      "questionRange": {
        "start": 21,
        "end": 23
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "A traditional approach may have helped predict a financial downturn.",
          "translation": "一种传统的做法本来可能有助于预测一次金融衰退（金融危机）。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "To have seen the 2008 global financial crisis coming, he argues, it would have been better to ‘go back to old-fashioned readings of history, studying institutions and laws."
          },
          "synonyms": [
            "“A traditional approach” 同义替换为原文的 “old-fashioned readings of history”（回到老式的历史研读方法）",
            "“may have helped predict” 同义替换为原文的 “it would have been better to …” 与 “To have seen … coming”（本应那样做、本应预见）",
            "“a financial downturn” 同义替换为原文的 “the 2008 global financial crisis”"
          ],
          "locatingTip": "定位：题干关键词是 predict a financial downturn，回原文找“危机/崩溃”一类词，只有 F 段末尾出现 the 2008 global financial crisis，且由 Robert Shiller 说出。确定答案技巧：题干说“传统做法本可能帮助预测危机”，原文对应 “it would have been better to 'go back to old-fashioned readings of history, studying institutions and laws. We should have talked to grandpa.'”——old-fashioned 对应 traditional，would have been better 对应 may have helped，go back 对应 approach，说话人是 Robert Shiller，故选 D。",
          "analysis": "F 段末尾，Robert Shiller 在批评金融经济学过度依赖数据分析时提出这一主张：“To have seen the 2008 global financial crisis coming, he argues, it would have been better to 'go back to old-fashioned readings of history, studying institutions and laws. We should have talked to grandpa.'”（他认为，要想预见到 2008 年全球金融危机的到来，更好的做法是“回到老派的历史研读方式，研究制度与法律。我们本该和祖父辈聊一聊”）。题干把这段意思压缩成一句话：A traditional approach（传统做法）对应 old-fashioned readings of history，may have helped predict（本来可能有助于预测）对应 it would have been better to … 与 To have seen … coming，a financial downturn（一次金融衰退）对应 the 2008 global financial crisis。三个信息点全部指向同一位经济学家 Robert Shiller，即选项 D。",
          "traps": [
            "为什么不是 A（Fisher and Lorie）：两人对应第 22 题，讲的是许多投资者出于谨慎选择低回报资产，从未提到预测危机的方法。",
            "为什么不是 C（Eugene Fama）：Fama 的立场是市场有效、股价没有可被利用的规律，他虽然承认存在短期可预测性，但与“传统方法本可帮助预见危机”这一主张无关，且方向相反。",
            "为什么不是 B（Myron Scholes）：Scholes 出现在 D 段（出任 CRSP 主任、推广数据库）和 G 段（为新指标与实证分析辩护），没有谈论如何预测危机。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "Some people invest conservatively and as a result make less money.",
          "translation": "有些人投资方式保守，结果赚得更少。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Fisher and Lorie also observed that many people chose to invest in assets with lower returns because they were cautious by nature and were concerned about the risk of loss inherent in investing in the stock market."
          },
          "synonyms": [
            "“invest conservatively” 同义替换为原文的 “were cautious by nature and were concerned about the risk of loss inherent in investing in the stock market”",
            "“make less money” 同义替换为原文的 “chose to invest in assets with lower returns”",
            "“Some people” 同义替换为原文的 “many people”"
          ],
          "locatingTip": "定位：题干关键词是 invest conservatively 与 make less money，回原文找“谨慎”与“回报低”同现的句子，只在 C 段出现（cautious by nature 与 assets with lower returns）。确定答案技巧：cautious by nature 对应 conservatively，chose to invest in assets with lower returns 对应 make less money，做出这一观察的人是 Fisher and Lorie（原文句首明写 Fisher and Lorie also observed that …），故选 A。",
          "analysis": "C 段在给出股票长期回报较高的结论后，补充了一个观察：“Fisher and Lorie also observed that many people chose to invest in assets with lower returns because they were cautious by nature and were concerned about the risk of loss inherent in investing in the stock market.”（Fisher 和 Lorie 还观察到，许多人之所以选择回报更低的资产，是因为他们天性谨慎，且担心投资股市固有的亏损风险）。题干 “Some people invest conservatively and as a result make less money” 与这句话逐点对应：Some people 对应 many people 与 they，invest conservatively 对应 were cautious by nature 与 were concerned about the risk of loss，make less money 对应 chose to invest in assets with lower returns。这一观察由 Fisher and Lorie 提出，因此选 A。",
          "traps": [
            "为什么不是 C（Eugene Fama）：Fama 讨论的是股价随机、信息已反映在价格中的有效市场假说，全段没有涉及投资者的保守取向与收益高低。",
            "为什么不是 B（Myron Scholes）：Scholes 的内容是维护并推广 CRSP 数据库、以及在末段为实证分析辩护，与个人投资风格无关。",
            "为什么不是 D（Robert Shiller）：Shiller 谈的是经济学过度专业化、忽略历史与制度，以及 2008 年危机本可预见，不涉及“投资保守所以赚得少”。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "It may be possible to forecast share prices but not over the long term.",
          "translation": "股价也许是可以预测的，但这种预测只适用于短期，不适用于长期。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Fama did concede that there was some evidence of temporary short-term predictability in share prices, however."
          },
          "synonyms": [
            "“It may be possible to forecast share prices” 同义替换为原文的 “there was some evidence of temporary short-term predictability in share prices”",
            "“but not over the long term” 同义替换为原文的 “temporary short-term”，说明这种可预测性只是暂时的、短期的",
            "“Fama did concede” 表明这是 Eugene Fama 承认的观点，对应选项 C"
          ],
          "locatingTip": "定位：题干关键词 forecast、share prices、long term，回原文找 share prices 与 predictability 同现的句子，只有 E 段 “Fama did concede that there was some evidence of temporary short-term predictability in share prices”。确定答案技巧：forecast 对应 predictability，not over the long term 对应 temporary short-term（只是短期的、暂时的）；句中 Fama did concede 说明这是 Fama 的观点，故选 C。",
          "analysis": "E 段围绕 Eugene Fama 的有效市场假说展开。段中先说他发现 “over a lengthy period share prices tended to rise and fall randomly”（长期看股价随机涨跌），并认定 “there are no predictable movements in prices for smart investors to exploit”（没有可预测的走势可供投资者利用）；紧接着的让步句就是本题定位句：“Fama did concede that there was some evidence of temporary short-term predictability in share prices, however.”（不过 Fama 确实承认，有证据显示股价存在暂时性的短期可预测性）。题干 “It may be possible to forecast share prices but not over the long term” 与之逐点对应：may be possible 对应 did concede that there was some evidence，forecast share prices 对应 predictability in share prices，not over the long term 对应 temporary short-term（短期内的、暂时的，而非长期稳定存在）。观点的提出者是 Fama，故选 C。",
          "traps": [
            "为什么不是 A（Fisher and Lorie）：他们的结论是股票长期回报高于其他投资渠道，并解释了谨慎投资者为何收益更低，全段没有讨论股价能否预测。",
            "为什么不是 D（Robert Shiller）：Shiller 虽然质疑有效市场假说，但他谈的是经济学过度专门化与 2008 年危机本可预见，没有提出“短期可预测、不适用长期”的看法。",
            "为什么不是 B（Myron Scholes）：Scholes 的内容集中在出任 CRSP 主任、推广数据库，以及在末段为实证分析辩护，与股价可预测性无关。"
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
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "In 1958 a 24 ________ working for a financial management company telephoned Jim Lorie to ask how well investments in shares performed in comparison to investments in low-risk assets.",
          "translation": "1958 年，一位在一家金融管理公司工作的 ________ 打电话给 Jim Lorie，询问相比低风险资产，股票投资的表现有多好。",
          "answer": "banker",
          "wordClass": "名词（单数，表人；空格前有不定冠词 a，后接现在分词短语 working for a financial management company 作后置定语，故必须填可数名词单数形式）",
          "locating": {
            "paragraph": "A",
            "quote": "a phone call from Louis Engel, a banker at Merrill Lynch, a US-based financial management company"
          },
          "synonyms": [
            "“working for a financial management company” 同义替换为原文的 “a banker at Merrill Lynch, a US-based financial management company”",
            "“telephoned Jim Lorie” 同义替换为原文的 “a phone call from Louis Engel”",
            "“how well investments in shares performed in comparison to investments in low-risk assets” 同义替换为原文的 “how investors in shares had performed relative to investors in other assets such as low-risk investments with guaranteed returns”"
          ],
          "locatingTip": "定位：摘要题先看小标题 The beginnings of CRSP 与时间 1958，回原文锁定 A 段首句（It all began in 1958 …），无需读后面段落。确定答案技巧：摘要句说“一个在某金融管理公司工作的人打电话给 Jim Lorie”，与原文 “a phone call from Louis Engel, a banker at Merrill Lynch, a US-based financial management company” 一一对应：金融管理公司对应 a US-based financial management company，打电话的人对应 Louis Engel，其身份 a banker 就是答案。注意 ONE WORD ONLY，只能写 banker 一个词，不要写 Merrill Lynch 或 Louis Engel。",
          "analysis": "摘要第一句承接段首的起源叙事：“In 1958 a 24 [banker] working for a financial management company telephoned Jim Lorie to ask how well investments in shares performed in comparison to investments in low-risk assets.”（1958 年，一位在一家金融管理公司工作的银行家打电话给 Jim Lorie，询问相比低风险资产，股票投资表现如何）。原文 A 段首句为：“It all began in 1958 with a phone call from Louis Engel, a banker at Merrill Lynch, a US-based financial management company, who wanted to know how investors in shares had performed relative to investors in other assets such as low-risk investments with guaranteed returns.”（一切始于 1958 年的一通电话，打电话的是美国金融管理公司美林的银行家 Louis Engel，他想知道相比低风险、有保证收益一类的其他资产，股票投资者的表现如何）。对应关系十分整齐：telephoned 对应 a phone call from，working for a financial management company 对应 at Merrill Lynch, a US-based financial management company，how well investments in shares performed in comparison to investments in low-risk assets 对应 how investors in shares had performed relative to investors in other assets such as low-risk investments with guaranteed returns。空格所在的成分是“从事该职业的人”，原文给出的身份词是 a banker，故填 banker；从词性看，空格前有不定冠词 a、后有现在分词短语作后置定语，必须填可数名词单数。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Compiling the CRSP data was difficult because 25 ________ were still being developed and information that had previously been on 26 ________ needed to be put onto magnetic tape.",
          "translation": "整理 CRSP 数据十分困难，因为 ________ 当时仍在发展，而过去记录在 ________ 上的信息还需要被转录到磁带上。",
          "answer": "computers",
          "wordClass": "名词（复数；空格后接复数谓语 were still being developed，故必须使用复数形式 computers）",
          "locating": {
            "paragraph": "B",
            "quote": "Getting the CRSP data together was a tough process in what were then the early days of computers."
          },
          "synonyms": [
            "“Compiling the CRSP data was difficult” 同义替换为原文的 “Getting the CRSP data together was a tough process”",
            "“were still being developed” 同义替换为原文的 “in what were then the early days of computers”（当时电脑尚处早期阶段，即技术尚未成熟）",
            "“magnetic tape” 与原文的 “magnetic tape” 原词复现，同属 B 段"
          ],
          "locatingTip": "定位：摘要第二句讲数据整理的困难，回原文找“艰难”的近义表达与“仍在发展”的技术，落在 B 段首句 “Getting the CRSP data together was a tough process in what were then the early days of computers.”。确定答案技巧：摘要说“因为某事物当时仍在发展（were still being developed）”，对应原文 the early days of computers（电脑的早期阶段，技术远未成熟）；空格后的谓语是复数 were，故填复数名词 computers。不要误填 data 或 CRSP，那是被整理的对象，不是造成困难的技术条件。",
          "analysis": "摘要第二句对应 B 段首句：“Getting the CRSP data together was a tough process in what were then the early days of computers.”（在当时电脑尚处早期阶段的条件下，把 CRSP 数据汇集起来是个艰难的过程）。摘要把它改写为 “Compiling the CRSP data was difficult because 25 [computers] were still being developed and information that had previously been on 26 [paper] needed to be put onto magnetic tape.”（整理 CRSP 数据十分困难，因为电脑当时仍在发展，而原先记录在纸上的信息需要转录到磁带上）。其中 Compiling … was difficult 对应 Getting … was a tough process，were still being developed 对应 in what were then the early days of computers，因此第 25 空填 computers。语法上，空格后紧跟的谓语是复数 were，说明主语必须是复数名词，写 computer 会因主谓不一致而失分；此外答案只能是 passage 中出现的原词 computers，不能改写成 machines 或 technology。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "information that had previously been on 26 ________ needed to be put onto magnetic tape",
          "translation": "过去记录在 ________ 上的信息，需要被转录到磁带上。",
          "answer": "paper",
          "wordClass": "名词（不可数，表示信息原先的载体；位于介词 on 之后作介词宾语，保持不可数形式 paper，不加复数、不加冠词）",
          "locating": {
            "paragraph": "B",
            "quote": "Up to three million pieces of information on all the shares traded on the New York Stock Exchange between 1926 and 1960 were transferred from paper in the exchange's archive to magnetic tape."
          },
          "synonyms": [
            "“needed to be put onto magnetic tape” 同义替换为原文的 “were transferred … to magnetic tape”",
            "“information that had previously been on …” 同义替换为原文的 “were transferred from paper in the exchange's archive”，from 后面就是信息的旧载体",
            "“Up to three million pieces of information” 与摘要句的 information 对应，均指同一批数据"
          ],
          "locatingTip": "定位：本题与第 25 题同属 B 段，题干出现 magnetic tape，回原文搜索 magnetic tape 只出现一次，即 “were transferred from paper in the exchange's archive to magnetic tape”。确定答案技巧：题干用 previously been on 加空格加 needed to be put onto magnetic tape 描述载体的转换，原文对应的结构是 transferred from A to B，其中 A（即 from 之后的名词）就是信息原来的载体 paper；介词 on 之后需要名词，paper 在此作不可数名词，不加冠词也不变复数。注意不要填 archive，那是保存这些纸张的地点，不是载体本身。",
          "analysis": "B 段第二句为：“Up to three million pieces of information on all the shares traded on the New York Stock Exchange between 1926 and 1960 were transferred from paper in the exchange's archive to magnetic tape.”（1926 至 1960 年间纽约证券交易所全部股票多达三百万条信息，要从交易所档案室里的纸上转录到磁带上）。摘要把这一句改写成被动加情态的结构：“information that had previously been on 26 [paper] needed to be put onto magnetic tape”，其中 previously been on 与 needed to be put onto 分别对应原文的 from 与 to，表示信息载体由旧的转为新的；往 magnetic tape 上转录，说明它原先在纸上，因此空格填 paper。从词性看，on 是介词，其后需要名词性成分，paper 在此表示“纸张”这一物质，不可数，不加冠词、不变复数，保持原文的单词形式即可。另外要区分地点与载体：in the exchange's archive 说明这些纸保存在交易所档案室，那是地点信息，不能填入空格。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
