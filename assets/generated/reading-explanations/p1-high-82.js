(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-82", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-82",
  "meta": {
    "examId": "p1-high-82",
    "title": "Think Small 微观科学",
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
          "stem": "Izon's new US headquarters are located in an area popular with other science businesses.",
          "translation": "Izon 的新美国总部位于一个受其他科学企业欢迎的地区。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The new US headquarters of Izon are situated in Cambridge, Massachusetts, one of the most important global centres of scientific research and technology. Half the other offices in the building Izon shares have scientific names like Stemgent, or the word 'pharmaceutical' in the name."
          },
          "synonyms": [
            "“Izon's new US headquarters” 与原文 “The new US headquarters of Izon” 指同一个办公地点，只是所有格语序不同",
            "“are located in” 同义替换为原文的 “are situated in”",
            "“an area popular with other science businesses” 同义替换为原文的 “one of the most important global centres of scientific research and technology”，并落到具体证据 “Half the other offices in the building Izon shares have scientific names like Stemgent, or the word 'pharmaceutical' in the name”"
          ],
          "locatingTip": "定位：题干里的大写专有名词 Izon 与 US headquarters 出现在第 1 段第 1 句，属于段首定位，扫读时最先看到，不必读完全文。确定答案技巧：题干的核心是“总部所在地区科学企业扎堆（popular with other science businesses）”，回原文要同时看两层证据——第一层是 Cambridge, Massachusetts 被定性为“全球最重要的科研与技术中心之一（one of the most important global centres of scientific research and technology）”，第二层是 Izon 所在大楼里其他办公室有一半挂着科学公司的名字，如 Stemgent，名字里还含 'pharmaceutical'（制药的）。地点不仅科研氛围浓厚，而且同楼邻居就是同行，与题干方向完全一致，故判 TRUE。",
          "analysis": "第 1 段首两句构成本题的全部依据。第 1 句：“The new US headquarters of Izon are situated in Cambridge, Massachusetts, one of the most important global centres of scientific research and technology.”（Izon 的新美国总部位于马萨诸塞州剑桥市，这里是全球最重要的科研与技术中心之一）。第 2 句：“Half the other offices in the building Izon shares have scientific names like Stemgent, or the word 'pharmaceutical' in the name.”（与 Izon 共用同一栋楼的其他办公室里，有一半挂着科学味十足的名字，比如 Stemgent，或者名字里带 'pharmaceutical' 这个词）。题干说总部“位于一个受其他科学企业欢迎的地区”，对应关系很清楚：are located in 对应 are situated in；an area popular with other science businesses 对应第 1 句的“全球科研中心之一”与第 2 句的“邻居半数都是科学公司”这一事实。原文既给出了宏观定位（科研重镇），又给出了微观佐证（同楼科学公司扎堆），两条证据都指向题干成立，逻辑上没有任何冲突，也没有缺失，因此答案是 TRUE。做题提醒：本题的考点词是 popular with other science businesses（其他科学企业多），不要把它误读成“受大众欢迎”，否则会去文中找顾客评价而找不到。",
          "traps": [
            "为什么不是 FALSE：原文明确说该地是“全球最重要的科研与技术中心之一”，并说同栋楼的其他办公室有一半名字带科学或制药字样（Stemgent、pharmaceutical），与题干“该地区科学企业众多”完全同向，不存在相反信息，故不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅交代了总部所在地的性质（科研中心），还用具体例子（Stemgent、pharmaceutical）说明楼内其他公司也属于科学行业，题干所需的“同行聚集”这一信息在原文中是有据可查的，并非没有提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Izon's growth in the last three years has been faster than the company predicted.",
          "translation": "Izon 在过去三年里的增长快于公司的预期。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "In the past three years, Izon has expanded to 17 times its previous size."
          },
          "synonyms": [
            "“Izon's growth in the last three years” 同义替换为原文的 “In the past three years, Izon has expanded”，last three years 对应 past three years，growth 对应 expanded",
            "“faster than the company predicted” 中的比较对象“公司预期（predicted）”在原文中找不到任何对应词，原文只给出增长倍数的客观事实，没有任何关于预期、预测或目标的表述"
          ],
          "locatingTip": "定位：题干中的时间状语 the last three years 与主语 Izon 组合，直接锁定第 1 段第 3 句 “In the past three years, Izon has expanded to 17 times its previous size.”。确定答案技巧：本题的考点不在“增长快不快”，而在“快于预期”这个比较。原文只客观陈述“规模扩到原来的 17 倍”，既没有提公司当初设定的目标，也没有提管理层的预测或期待，因此“比较基准”这一半信息在原文中是空白。雅思判断题里凡是出现 than … expected / than predicted / more than planned 这种带比较基准的表述，都要先回原文找那个基准是否存在；找不到基准就判 NOT GIVEN，切忌用“17 倍看起来确实很夸张，想必超出预期”这种感觉做题。",
          "analysis": "原文第 1 段第 3 句：“In the past three years, Izon has expanded to 17 times its previous size.”（过去三年里，Izon 的规模扩张到了此前的 17 倍）。这句话与题干的前半部分完全吻合：the last three years 对应 in the past three years，growth 对应 expanded to 17 times its previous size。分歧出在题干的比较结构 has been faster than the company predicted（快于公司预期）上：原文只提供“膨胀到 17 倍”这一结果性数据，全文再没有出现 prediction、expectation、target、forecast 之类的词，也没有任何地方交代公司当初打算增长到多少。换句话说，原文回答了“增长了多少”，却没有回答“是否超出预期”。按判断题判分规则，题干中有一部分信息在原文中完全空白，就不能判 TRUE；而原文既没说“超出预期”，也没说“未达预期”，没有相反信息，所以也不能判 FALSE，只能判 NOT GIVEN。做题经验：看到 than + 预期／计划／估计的题目，优先怀疑 NOT GIVEN，因为出题人常用的干扰点就是用一个真实数据让你误以为整句都成立。",
          "traps": [
            "为什么不是 TRUE：题干要求“增长速度超过公司预期”，这需要原文同时给出“实际增长”和“预期值”两项信息才能成立。原文只给了实际增长（17 倍），从未提到公司预期是多少，缺少比较的另一端，题干的结论无法被原文证实。",
            "为什么不是 FALSE：FALSE 需要原文给出相反信息，例如“增长低于预期”或“公司早已预料到这一增长速度”。原文对预期全无交代，既没有肯定也没有否定，因此不属于矛盾，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Since 2004, Izon has developed a range of equipment for use in scientific research.",
          "translation": "自 2004 年以来，Izon 已研发了一系列用于科学研究的设备。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "It's done so selling only one product that it's been developing since 2004, the qNano. This is an adjustable tool for the measurement and analysis of tiny particles in scientific research, which comes with a $27,000 price tag."
          },
          "synonyms": [
            "“Since 2004” 与原文 “since 2004” 完全对应，时间起点一致",
            "“has developed a range of equipment” 与原文 “selling only one product that it's been developing since 2004” 相互冲突：原文的关键限定词是 only one product（仅一款产品），而题干说的是 a range of equipment（一系列设备）",
            "“for use in scientific research” 同义替换为原文的 “for the measurement and analysis of tiny particles in scientific research”，研究用途这一层与原文一致，错误只出在数量上"
          ],
          "locatingTip": "定位：题干的时间标记 Since 2004 在全文只出现一次，位于第 1 段倒数第 4 句，一个数字就能一步锁定。确定答案技巧：锁定句子后要抓住数量限定词 only one（仅一款）。原文说的是“靠卖它从 2004 年就开始研发的唯一一款产品——qNano 起家”，也就是产品线只有一款；题干却把这个单数事实放大成 a range of equipment（一系列、一整套设备），数量范围被无限扩张，与原文的 only one 正面对立，故判 FALSE。判断题遇到 a range of、various、several、many 这类“多”的表达，一定要回原文核对数量词，本题的 only one 就是最直接的否定依据。",
          "analysis": "原文第 1 段第 4 句和第 5 句：“It's done so selling only one product that it's been developing since 2004, the qNano. This is an adjustable tool for the measurement and analysis of tiny particles in scientific research, which comes with a $27,000 price tag.”（它是靠只卖一款产品做到这一点的，这款自 2004 年起就一直在研发的产品就是 qNano。这是一种可调节的工具，用于科研中微小颗粒的测量与分析，标价 27000 美元）。题干说“自 2004 年以来 Izon 已研发了一系列科研设备”，把原文拆开看有两处问题：其一，原文的 only one product 明确限定产品只有一款，题干却写成 a range of equipment（一系列设备），数量上直接矛盾；其二，原文说自 2004 年起一直在研发的就是这一款 qNano，研发线也并未“多元化”。至于 for use in scientific research 这层，原文确实说是用于科研，属于正确的改写，但判断题只要有一处与原文冲突即判 FALSE，所以正确答案是 FALSE。这道题是典型的“量词设陷”：only one 与 a range of 是互斥关系，读题时要格外留意题干里的复数与集合名词。",
          "traps": [
            "为什么不是 TRUE：原文用 only one product（仅一款产品）明确限定 Izon 的产品数量，并在后一句用单数 This is an adjustable tool 继续说明，题干却称“一系列设备（a range of equipment）”，把单款产品说成多款，与原文事实相悖。",
            "为什么不是 NOT GIVEN：原文对 Izon 的产品数量交代得非常明确——只有一款 qNano，并且明确指出它从 2004 年起被持续研发。这属于“已给出且与题干冲突”的信息，而不是没有提及，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "One advantage of the qNano is that it is cheaper than its competitors.",
          "translation": "qNano 的一项优势是它比竞争对手的产品便宜。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Izon's success results from the fact that the qNano machine provides precise measurements, while similar machines of the same price only offer averaging techniques."
          },
          "synonyms": [
            "“One advantage of the qNano” 对应原文所述的竞争优势 “the qNano machine provides precise measurements”，原文给出的优势是测量精度而非价格",
            "“it is cheaper than its competitors” 与原文 “similar machines of the same price”（同价位的同类机器）直接冲突：原文说价格相同，题干说更便宜",
            "“its competitors” 同义替换为原文的 “similar machines”，指同一档次、同一价位的其他测量仪器"
          ],
          "locatingTip": "定位：题干关键词是产品名 qNano 与价格比较 cheaper，第 1 段后半句同时出现 qNano 与 price 相关表述，其中 “similar machines of the same price” 是明确的锚点。确定答案技巧：题干用 cheaper than 提出价格优势，而原文说的是“同价位的同类机器（similar machines of the same price）只提供平均化技术”，也就是 qNano 与竞品价格持平，胜在“精确测量（precise measurements）”而非“便宜”。前文还给出了 $27,000 的标价，虽然不能说贵，但同样没有任何与竞品比价的表述。价格优势在原文中不仅不存在，反而被 same price 明确否定，属于事实冲突，故判 FALSE。做题提示：判断“优势”类题目时，要区分原文列出的优势（精度、可调、应用广泛）与题干安插的优势（便宜），张冠李戴即判 FALSE。",
          "analysis": "原文第 1 段第 6 句：“Izon's success results from the fact that the qNano machine provides precise measurements, while similar machines of the same price only offer averaging techniques.”（Izon 的成功源于这样一个事实：qNano 机器能提供精确的测量，而同样价位的同类机器只能提供取平均值的做法）。这句话把 qNano 的竞争优势交代得很清楚：一是测量精确（precise measurements），二是同价位竞品只能做平均化处理。题干把“优势”这一格填成了“比竞争对手便宜（cheaper than its competitors）”，而原文恰恰说同类机器 of the same price（价格相同）。同价就谈不上“更便宜”，题干与原文的表述构成直接矛盾，因此答案是 FALSE。此外第 5 句提到 qNano 标价 27000 美元（comes with a $27,000 price tag），也只是交代定价，并没有说比别家低。综合来看，原文给的优势是“精度”，题干说的是“价格”，不仅内容对不上，而且原文的 same price 正面否定了 cheaper 的说法，所以判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确指出竞品是 “similar machines of the same price”（同价位的机器），即 qNano 与其竞争对手价格相当，并没有更便宜；原文认可的优势是 precise measurements（测量精确），题干把优势换成了价格便宜，与原文相悖。",
            "为什么不是 NOT GIVEN：原文不仅给出了竞品的价位关系（same price），还给出了 qNano 的标价（$27,000 price tag），价格方面的信息是完整且明确的，而且与题干说法冲突，因此不能按“未提及”处理。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Drug delivery analysis will be the most profitable application of the qNano.",
          "translation": "药物递送分析将成为 qNano 最赚钱的应用领域。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "In effect, researchers using the qNano are able to gather information about very small things, and it has many possible applications from drug delivery analysis through to environmental research."
          },
          "synonyms": [
            "“Drug delivery analysis” 在原文中名词原词复现：“from drug delivery analysis through to environmental research”",
            "“application” 同义替换为原文的 “applications”，原文说它有“许多可能的应用（many possible applications）”",
            "“will be the most profitable” 在原文中完全没有对应：原文只说应用范围广，并列出药物递送分析到环境研究的两端，从未涉及盈利能力、收益高低或哪一项最赚钱"
          ],
          "locatingTip": "定位：题干里的专业短语 drug delivery analysis 是极强定位词，全文只出现在第 1 段最后一句，扫到它即可停下精读。确定答案技巧：题干的关键落点是最高级 the most profitable（最赚钱的），这属于对各项应用进行收益比较的判断。原文只做了一件事——列举应用的广泛性，用 from … through to … 把药物递送分析与环境研究作为范围的两端，说明 qNano 用途很宽；对每一项应用的商业回报、利润高低只字未提。既没有说药物递送分析赚钱，也没有说它比环境研究更赚钱，最高级所需的比较信息缺位，因此判 NOT GIVEN。做题经验：题干含最高级（most profitable、most popular、most effective）而原文只给“范围广、种类多”时，几乎都是 NOT GIVEN。",
          "analysis": "原文第 1 段最后一句：“In effect, researchers using the qNano are able to gather information about very small things, and it has many possible applications from drug delivery analysis through to environmental research.”（实际上，使用 qNano 的研究人员能够获取关于极小物体的信息，它有着许多可能的应用，从药物递送分析一直到环境研究）。题干由这句话出发，把“药物递送分析是众多可能应用之一”改写成“药物递送分析将是最赚钱的应用”。原文的落点在于 many possible applications（应用可能性多），from … through to … 只是给出应用范围的两端，本身不含任何排序或优劣含义；而题干的 the most profitable 是一个最高级判断，需要原文给出各项应用的盈利数据或收益比较才能成立。全文（包括第 5 段提到的血栓诊断项目、把美国基地搬到更大办公室等）都没有出现 profit、revenue、income、commercial value 之类与盈利相关的表述。因此题干中“最赚钱”这一层在原文中没有信息支撑，属于信息缺失，判 NOT GIVEN。注意不要因为第 5 段提到与哈佛合作研究血栓而自行推断“药物相关应用前景最好、最赚钱”，这类超出原文的推理是本题最大的陷阱。",
          "traps": [
            "为什么不是 TRUE：原文只是把药物递送分析列为 qNano“许多可能应用”中的一端，从未说明它赚钱，更未与其它应用作收益比较。最高级 the most profitable 所需的比较性依据在原文中完全不存在，无法支持 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文明确否定，例如“药物递送分析并不是最赚钱的应用”或“该应用并不盈利”。原文对此没有任何否定表述，只是没有涉及盈利能力，因此属于信息缺失而非矛盾，应判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Kristoffer Bolen is still completing his studies.",
          "translation": "Kristoffer Bolen 仍在完成他的学业。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Alongside his full-time role with the company, he's just finished the fifth semester of six for his High-Tech Master of Business Administration at Northeastern University, which will be his second master's degree, alongside a Master of Science."
          },
          "synonyms": [
            "“is still completing his studies” 同义替换为原文的 “he's just finished the fifth semester of six”，六学期里才读完第五学期，说明学业尚未结束",
            "“his studies” 对应原文的 “his High-Tech Master of Business Administration at Northeastern University”，并补充说明这将是他继 Master of Science 之后的第二个硕士学位",
            "“Kristoffer Bolen” 在原文中与身份词同时出现：“Kristoffer Bolen is Izon's US head of sales”，人名原词复现"
          ],
          "locatingTip": "定位：题干的人名 Kristoffer Bolen 出现在第 2 段第 1 句，是段落的首个专有名词，扫读时极易锁定，随后在该段第 2 句找到学业信息。确定答案技巧：判断“是否还在读书”要看学期进度。原文写 “he's just finished the fifth semester of six”（他刚刚读完六个学期中的第五个学期），six 减去已完成（just finished）的第五个学期，还剩最后一个学期未读，且课程要到读完才算完成，另有 “which will be his second master's degree”（这将是他的第二个硕士学位）用的是将来时，说明学位尚未拿到，学业仍在进行中。题干说“仍在完成学业”，与原文的进度表述完全吻合，故选 TRUE。这类题的关键是把数字进度（5/6）换算成状态（未完成），不要一看 just finished 就误以为“已经读完、不再读书”。",
          "analysis": "原文第 2 段开头两句：“Kristoffer Bolen is Izon's US head of sales. Alongside his full-time role with the company, he's just finished the fifth semester of six for his High-Tech Master of Business Administration at Northeastern University, which will be his second master's degree, alongside a Master of Science.”（Kristoffer Bolen 是 Izon 的美国销售主管。在为公司全职工作之余，他刚刚读完东北大学高科技工商管理硕士六个学期中的第五个学期，这将是他继理学硕士之后的第二个硕士学位）。题干问“Bolen 是否仍在完成学业”，判分依据就是学业进度：六学期制课程只读完五个学期，第六个学期尚待完成；同时原文用 will be（将会是）来描述这个即将到手的第二个硕士学位，属于将来时态，进一步说明学位还没拿到。此外，第 2 段第 3 句还提到 “These soon-to-be twin master's degrees”（这两个即将取得的双硕士学位），soon-to-be 同样表明学业处于收尾阶段而非已经结束。原文三处信息（五分之六的学期进度、will be 的将来时、soon-to-be 的措辞）互相印证 Bolen 仍在读书，与题干所述一致，答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：题干的“仍在完成学业”与原文的学期进度一致——六个学期只读完五个，还剩一个学期，且用 will be 与 soon-to-be 说明学位尚未取得，没有任何信息表明他已辍学或已毕业，故不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对学生身份、学校、专业、学期进度以及学位获取的时态都交代得非常具体，这些正是判断“是否仍在读书”所需的全部信息，属于信息充分而非缺失，因此不选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Bolen's job requires him to fully understand how the qNano works.",
          "translation": "Bolen 的工作要求他完全理解 qNano 的工作原理。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "These soon-to-be twin master's degrees provide Bolen with the perfect combination of skills for his job, which depends on him being able to manage the sales process and also comprehend in depth a very complicated piece of technology."
          },
          "synonyms": [
            "“Bolen's job requires him to” 同义替换为原文的 “his job, which depends on him being able to”，depends on 表达“取决于、必须做到”，与 requires 同义",
            "“fully understand” 同义替换为原文的 “comprehend in depth”，in depth（深入地）对应 fully（完全地）",
            "“how the qNano works” 同义替换为原文的 “a very complicated piece of technology”，即指 qNano 这一复杂的技术设备，后文 “how to use the instrument”“how each qNano is being used” 也都在说明其技术属性"
          ],
          "locatingTip": "定位：题干的主语是 Bolen，第 2 段专写此人，用 Bolen 加关键词 skills 或 job 定位到第 3 句即可。确定答案技巧：题干的核心是“工作要求他完全弄懂 qNano 的工作原理”，对应原文中 job 后面 which depends on 引出的两个必备能力：一是 manage the sales process（管理销售流程），二是 comprehend in depth a very complicated piece of technology（深入理解一件非常复杂的技术产品）。comprehend in depth 正是 fully understand 的对应表达，a very complicated piece of technology 则指 qNano 这种精密仪器，两处一模一样地对应题干，因此判 TRUE。注意不要把 depends on 理解成“可能依赖”，它在雅思里就是“必须、取决于”的意思，等同于题干的要求（requires）。",
          "analysis": "原文第 2 段第 3 句：“These soon-to-be twin master's degrees provide Bolen with the perfect combination of skills for his job, which depends on him being able to manage the sales process and also comprehend in depth a very complicated piece of technology.”（这两个即将取得的双硕士学位为 Bolen 的工作提供了完美的技能组合，他的工作既要求他能够管理销售流程，也要求他能够深入理解一件非常复杂的技术产品）。这句把 Bolen 的岗位要求拆成两条：销售流程管理（manage the sales process）与深入理解复杂技术（comprehend in depth a very complicated piece of technology）。前文还交代了他的双硕士背景——高科技工商管理硕士搭配理学硕士（High-Tech Master of Business Administration 与 Master of Science），这种组合正是为“懂技术又会销售”而设，反过来印证技术理解是岗位的硬性要求。此外该段紧接着说，客户购买 qNano 后 Izon 会派代表飞赴全美培训客户使用仪器，并持续跟进了解每台 qNano 的使用情况（be completely informed about how each qNano is being used），说明与产品技术打交道是这项工作的日常内容。题干说“他的工作要求他完全理解 qNano 的工作原理”，与 comprehend in depth a very complicated piece of technology 一一对应，故答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用 which depends on him being able to manage the sales process and also comprehend in depth a very complicated piece of technology 明确把“深入理解复杂技术”列为岗位必须具备的能力，与题干“工作要求他完全理解”完全同向，没有相反信息。",
            "为什么不是 NOT GIVEN：原文是直接描述该岗位的必备条件（depends on him being able to …），而不是含糊提及其工作内容，读到这里就能明确得出“技术理解是硬性要求”；同时段内还补充了他需持续了解每台 qNano 的使用情况，信息充分，不属于未提及。"
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
          "stem": "He made the 8 ________ which enabled the prototype to be created.",
          "translation": "他投入了 ________，这才使样机得以制造出来。",
          "answer": "investment",
          "wordClass": "名词（单数，指投入的资金；空格前有定冠词 the，与 the 构成名词短语，在句中作 made 的宾语，用原文单数形式 investment）",
          "locating": {
            "paragraph": "3",
            "quote": "Initially he put up an investment of $1.5 million to move the process forward to the development of a prototype, and this led to the founding of Izon and the production of the qNano."
          },
          "synonyms": [
            "“made” 同义替换为原文的 “put up”，put up an investment 即“投入一笔资金”，与 make an investment 同义",
            "“which enabled the prototype to be created” 同义替换为原文的 “to move the process forward to the development of a prototype”，两者都表示“这笔投入使样机研发得以推进”",
            "“prototype” 在原文中名词原词复现：“the development of a prototype”"
          ],
          "locatingTip": "定位：笔记的小标题是 Hans van der Voorn，题干关键词是 prototype（样机），第 3 段中 prototype 只出现一次，位于 “Initially he put up an investment of $1.5 million to move the process forward to the development of a prototype” 一句，一步锁定。确定答案技巧：空格出现在 He made the 8 之后，需要一个名词作宾语，且其后的定语从句 which enabled the prototype to be created 说明这笔钱促成了样机诞生。原文对应结构是 put up an investment of $1.5 million（投入一笔 150 万美元的资金），把动词 put up 换成题干中更通用的 made，宾语 investment 就是答案。填写时注意 ONE WORD ONLY，只写 investment，不要带上金额 $1.5 million，也不要写成动词 invest 或复数 investments；空格前的 the 已经提供了限定成分。",
          "analysis": "原文第 3 段第 4 句：“Initially he put up an investment of $1.5 million to move the process forward to the development of a prototype, and this led to the founding of Izon and the production of the qNano.”（起初他投入了 150 万美元，把这一进程推进到样机研发阶段，这最终促成了 Izon 的创立和 qNano 的诞生）。笔记题干把这句压缩成 “He made the 8 ________ which enabled the prototype to be created”，改写有几处：动词 put up 被替换为更常见的 made，语义仍是“投入（资金）”；to move the process forward to the development of a prototype 被改写成定语从句 which enabled the prototype to be created，其中 enabled 对应 move the process forward，created 对应 development。空格要填的是 made 的宾语，也就是原文 put up 的宾语 investment（投资、投入的资金）。从词性看，空格前有定冠词 the，说明需要一个可数名词单数形式，investment 正好符合；原文中 investment 本身也是单数（an investment of $1.5 million），直接照抄即可，不改变形式、不加金额、不加冠词。若误填 money 或 $1.5 million，既不是原文单词形式，也超出了 ONE WORD ONLY 的限制。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "His background in 9 ________ as well as business gave him the skills to run Izon.",
          "translation": "他在 ________ 和商业两方面的背景，给了他经营 Izon 所需的技能。",
          "answer": "engineering",
          "wordClass": "名词（不可数，学科领域名称；作介词 in 的宾语，与并列成分 business 对应，用原文词形 engineering）",
          "locating": {
            "paragraph": "3",
            "quote": "However, he thinks that engineering can be a bridge between the two, and his long experience in that field has been crucial to the company's success."
          },
          "synonyms": [
            "“His background in …” 同义替换为原文的 “his long experience in that field”，background 对应 long experience，in that field 对应 in engineering",
            "“as well as business” 对应原文的 “a bridge between the two”，其中的 two 指前一句 “the worlds of science and business”（科学与商业两个世界）",
            "“gave him the skills to run Izon” 同义替换为原文的 “has been crucial to the company's success”，即这种经验对公司成功起了决定性作用"
          ],
          "locatingTip": "定位：笔记小标题仍是 Hans van der Voorn，题干关键词是 background 与 business 的并列，回到第 3 段中同时谈“科学、商业、桥梁”的那两句，即 “Van der Voorn believes that the worlds of science and business sometimes don't understand each other very well. However, he thinks that engineering can be a bridge between the two …”。确定答案技巧：题干要求填一个与 business 并列的领域，语法上作介词 in 的宾语。原文的逻辑是：科学与商业两个世界互不了解，而 engineering（工程学）可以充当二者之间的桥梁，随后又说 “his long experience in that field”（他在该领域的长期经验）对公司的成功至关重要。in that field 回指的就是 engineering，因此空格应填 engineering。注意 field 只是对前文工程学的概括指代，本身不是具体学科，不能填 field；答案须为原文原词 engineering，保持不变形、不写 engineer。",
          "analysis": "原文第 3 段第五、六句：“Van der Voorn believes that the worlds of science and business sometimes don't understand each other very well. However, he thinks that engineering can be a bridge between the two, and his long experience in that field has been crucial to the company's success.”（van der Voorn 认为，科学界与商界有时并不能很好地互相理解。不过，他认为工程学可以成为二者之间的桥梁，而他在该领域的长期经验对公司的成功起到了关键作用）。笔记题干说 “His background in 9 ________ as well as business gave him the skills to run Izon”，需要填一个与 business 并列、且能解释他为何有经营能力的领域。原文给出的答案链条是：先提出“科学与商业两个世界（the worlds of science and business）”这组对立，再指出工程学（engineering）是两者之间的桥梁，最后用 in that field 回指 engineering，说明他在这方面的长期经验才是公司成功的关键。background 在这里对应 long experience，in that field 对应 in engineering，二者严丝合缝。从语法看，空格前是介词 in，需要名词性成分，engineering 作不可数名词正好合适。注意区分：science（科学）虽然也出现在同一句，但题干已经用 business 覆盖了商业一侧，另一侧指的是位于科学与商业之间的 engineering，且只有 engineering 有“in that field 的长期经验”这一背景属性，因此答案是 engineering。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "The company's marketing relies on 10 ________ about its customers' research.",
          "translation": "该公司的营销依赖于 ________，内容是关于客户所进行的研究。",
          "answer": "articles",
          "wordClass": "名词（复数，指客户公开发表的文章；作介词 on 的宾语，用原文复数形式 articles）",
          "locating": {
            "paragraph": "4",
            "quote": "As a result, the critical part of the company's marketing is articles that clients publish describing work they have performed with the qNano."
          },
          "synonyms": [
            "“relies on” 同义替换为原文的 “the critical part of the company's marketing is”，the critical part 表示营销中最倚重的部分，与 relies on 同义",
            "“the company's marketing” 在原文中名词原词复现：“the company's marketing”",
            "“about its customers' research” 同义替换为原文的 “describing work they have performed with the qNano”，其中 clients 对应 customers，work they have performed 对应 research"
          ],
          "locatingTip": "定位：笔记小标题是 Izon in the United States，题干关键词是 marketing 与 customers，第 4 段第 1 句讲 “Marketing the qNano is complicated”，第 4 句给出营销的具体依赖对象，用 marketing 一词即可锁定整段。确定答案技巧：题干结构是 relies on 加名词加 about …, 需要一个能被 publish、能被阅读的复数名词。原文说 “the critical part of the company's marketing is articles that clients publish describing work they have performed with the qNano”，即营销的关键在于客户发表的、描述其使用 qNano 所做工作的文章；articles 正好是 that clients publish（由客户发表）的先行词，其后的 describing work they have performed with the qNano 又与题干的 about its customers' research 对应。故填 articles，须写复数（原文即为复数），不要写成 article、publications 或 articles about research。",
          "analysis": "原文第 4 段第 4 句：“As a result, the critical part of the company's marketing is articles that clients publish describing work they have performed with the qNano.”（因此，公司营销中最关键的部分，就是客户发表的、描述他们用 qNano 所做工作的那些文章）。笔记题干把这句改写为 “The company's marketing relies on 10 ________ about its customers' research”，对应关系是：the critical part of the company's marketing is 被改写成 The company's marketing relies on，clients 被替换为 customers（第 4 段前文亦用 customers 一词，如 how customers are using the qNano），work they have performed 被概括为 research。空格要填的是被客户发表、被公司倚重的那种东西，即 articles（文章）。原文此处用复数 articles 且由 that 引导定语从句修饰，填入时保持复数形式。前文还提供了语境支撑：“Izon needs scientists both to buy and advertise the product”（Izon 既需要科学家购买产品，也需要他们宣传产品），以及 “the science world … is actually a small group”（科学圈其实是个小圈子），说明学术圈的口碑传播（即客户发表的文章）正是这家小众科研仪器公司的营销命脉，与题干 relies on 的语义完全吻合。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Yaniv Gaynor was formerly a 11 ________ with no experience in sales.",
          "translation": "Yaniv Gaynor 以前是一名 ________，毫无销售经验。",
          "answer": "teacher",
          "wordClass": "名词（单数，职业名称；空格前有不定冠词 a，作 was 的表语，用原文单数形式 teacher）",
          "locating": {
            "paragraph": "4",
            "quote": "The sales process is new for Gaynor, who shifted cities and switched from a role as teacher at the University of Minnesota to his first private sector role with Izon."
          },
          "synonyms": [
            "“was formerly a …” 同义替换为原文的 “switched from a role as …”，switch from 表示“从（某岗位）转职而来”，对应 formerly",
            "“with no experience in sales” 同义替换为原文的 “The sales process is new for Gaynor … his first private sector role”，new for 与 first 共同说明他此前没有销售经验",
            "“Yaniv Gaynor” 在原文中名词原词复现，且与身份说明 “As development and training manager” 相邻出现"
          ],
          "locatingTip": "定位：题干的人名 Yaniv Gaynor 是专有名词，第 4 段第 6 句 “That's where Yaniv Gaynor comes in.” 直接点出此人，随后几句给出他的履历，紧接的关键句含 teacher 一词。确定答案技巧：题干问“他以前是什么”，表达过去身份的典型信号是 formerly 与 a，需要在原文中找表示“从某个身份转来”的表述。原文写 switched from a role as teacher at the University of Minnesota to his first private sector role with Izon，switch from A to B 的结构里 A 是旧身份、B 是新身份，A 位置上就是 teacher。同时前一句 The sales process is new for Gaynor 与句中的 first private sector role 共同印证他此前没有销售经验，与题干的 with no experience in sales 对应。填写时用单数 teacher（空格前有 a），不要写 teachers、teaching 或 University of Minnesota（那是地点，不是职业）。",
          "analysis": "原文第 4 段后部：“That's where Yaniv Gaynor comes in. As development and training manager, he's involved throughout the sales process and manages most of the customer's post-sale experience. The sales process is new for Gaynor, who shifted cities and switched from a role as teacher at the University of Minnesota to his first private sector role with Izon.”（这时就轮到 Yaniv Gaynor 出场了。作为开发与培训经理，他参与整个销售流程，并负责管理客户在售后的大部分体验。销售流程对 Gaynor 来说是全新的，他为此换了城市，从明尼苏达大学的一名教师岗位转到他平生第一份私营部门的工作——Izon。）。本题的落点非常集中：题干要填 Gaynor 从前的职业，原文用 switched from a role as teacher at the University of Minnesota to his first private sector role with Izon 清楚给出了转职路径，from 之后就是旧身份 teacher。题干的 formerly 对应 switched from（从……转来），with no experience in sales 对应 The sales process is new for Gaynor 以及 his first private sector role（他的第一份私营部门工作，暗示此前在公立高校任教，不涉及销售）。从语法看，空格前有不定冠词 a，需要可数名词单数，填 teacher 即可，不改形式。注意不要填 University of Minnesota，因为那是任教机构而非题干所问的职业；也不要填 manager（development and training manager 是他进 Izon 之后的新职位，与 formerly 相矛盾）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "To diagnose thrombosis, a 12 ________ may be developed.",
          "translation": "为了诊断血栓症，可能会开发出一种 ________。",
          "answer": "test",
          "wordClass": "名词（单数，指检测手段；空格前有不定冠词 a，与 a 构成名词短语在句中作主语，用原文单数形式 test）",
          "locating": {
            "paragraph": "5",
            "quote": "If in the future they can identify this particle, they can design a simple test for it. This would make it easier for doctors to diagnose thrombosis."
          },
          "synonyms": [
            "“To diagnose thrombosis” 同义替换为原文的 “This would make it easier for doctors to diagnose thrombosis”，血栓症一词原词复现",
            "“may be developed” 同义替换为原文的 “they can design …”，design（设计）与 develop 同向，if in the future 与 can 共同表达“将来可能会”的推测语气",
            "“a …” 对应原文的 “a simple test”，其中 simple 是修饰语，不作答案"
          ],
          "locatingTip": "定位：笔记最后一块的小标题是 Plans for the future，题干的关键词 thrombosis（血栓症）只出现在第 5 段，且该段出现两次——第 3 句的 “a symptom of the medical condition of thrombosis” 与第 5 句的 “to diagnose thrombosis”，锁定该段即可。确定答案技巧：题干说“为了诊断血栓症，可能会开发出某种东西”，需要在原文中找与血栓诊断相关的研发计划。原文先讲与哈佛合作寻找一种血液中的特定颗粒（a particular type of particle of blood that is a symptom of the medical condition of thrombosis），接着说若能识别这种颗粒就 “can design a simple test for it”，随后指出这会让医生更容易诊断血栓症。设计出来用于检测该颗粒的东西就是 a simple test，故填 test。注意空格前已有不定冠词 a，答案只写名词单数 test，不要带simple，也不要填 particle（颗粒是被检测的对象，不是被开发的产品）。",
          "analysis": "原文第 5 段中段：“For instance, Izon is engaged in a project with Harvard University, looking for a particular type of particle of blood that is a symptom of the medical condition of thrombosis. If in the future they can identify this particle, they can design a simple test for it. This would make it easier for doctors to diagnose thrombosis.”（例如，Izon 正与哈佛大学合作开展一个项目，寻找血液中某种特定类型的颗粒，这种颗粒是血栓症的症状。如果将来他们能够识别出这种颗粒，就可以为它设计一种简单的检测方法。这会让医生更容易诊断血栓症）。笔记题干把它压缩为 “To diagnose thrombosis, a 12 ________ may be developed”，需要填一个“可被开发出来、用于诊断血栓症的东西”。原文的因果链条清晰：识别颗粒，进而设计 a simple test（一种简单的检测方法），最终目的正是让医生更容易诊断血栓症（diagnose thrombosis）。因此被开发的对象是 test，与题干 may be developed 对应 can design。从语法看，空格前已有冠词 a 和形容词 simple 中的 a，答案须为可数名词单数，直接照抄原文的词 test。要留意两个干扰项：particle 是该项目正在寻找的对象，属于“检测什么”，不是“开发出什么”；thrombosis 则是病症名，题干已给出，不能再填。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "13 ________ will be done at Izon's US headquarters.",
          "translation": "________ 将在 Izon 的美国总部进行。",
          "answer": "training",
          "wordClass": "名词（不可数，指培训这一活动；在题干中作主语，用原文词形 training，不写 trainings）",
          "locating": {
            "paragraph": "5",
            "quote": "With larger headquarters, the company will be able to bring clients into the Izon building for training with its product, rather than travelling to them, which will hopefully result in an even closer relationship between the company and its customers."
          },
          "synonyms": [
            "“at Izon's US headquarters” 同义替换为原文的 “into the Izon building”，其中 the Izon building 即前文所述将迁入的更宽敞的美国总部；“larger headquarters” 指代同一处新总部",
            "“will be done” 与原文的 “will be able to bring clients … for training” 对应：把客户请进楼里开展的这项活动，就是被动结构所说的“将在总部进行的事”",
            "“training” 在原文中名词原词复现：“for training with its product”"
          ],
          "locatingTip": "定位：笔记最后一条的小标题是 Plans for the future，题干关键词是 Izon's US headquarters 与 will be done，第 5 段末句谈的正是迁址扩场后的打算，其中 headquarters 与 training 同时出现，一句锁定。确定答案技巧：题干需要一个能作主语、搭配 will be done 的名词，表示“将在美国总部开展的活动”。原文说搬到更大的总部后，公司 “will be able to bring clients into the Izon building for training with its product, rather than travelling to them”，即把客户请到 Izon 大楼里进行产品培训，而不再上门服务。被请进楼里做的这件事就是 training（培训），与题干 at Izon's US headquarters 的场所信息吻合（in the Izon building 即新总部内）。注意区分 travelling（出差上门）是被取代的旧做法，不是要填的内容；答案只写 training 一个词，不加 product，也不用复数 trainings。",
          "analysis": "原文第 5 段末句：“Another planned development is eventually to shift the US base to more spacious offices on the other side of town. With larger headquarters, the company will be able to bring clients into the Izon building for training with its product, rather than travelling to them, which will hopefully result in an even closer relationship between the company and its customers.”（另一项规划中的发展是最终把美国基地迁到城市另一头更宽敞的办公室。有了更大的总部之后，公司就能把客户请进 Izon 大楼里进行产品培训，而不用再上门去找他们，这有望让公司与客户的关系更加紧密）。笔记题干 “13 ________ will be done at Izon's US headquarters” 要填一项将在美国总部开展的活动。原文的信息链条是：迁入更大的总部（larger headquarters、the Izon building）之后，公司把客户请进楼里做 training with its product，替代了原先的 travelling to them。场所线索完全吻合——in the Izon building 对应的正是题干所说的 Izon's US headquarters，而在这栋楼里开展的活动就是 training。也就是说，总部扩建的直接目的就是把培训从客户所在地转移到自家大楼里。从词性看，training 在此为不可数名词，直接在句中作主语，填原作形，不改复数、不加冠词。注意不要误填 travelling：那是被取代的旧方式（原文用 rather than 引出，属于对立项）；也不要填 clients，因为客户是被请来的对象，不是被开展的活动。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
