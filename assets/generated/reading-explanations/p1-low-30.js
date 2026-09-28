(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-30", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-30",
  "meta": {
    "examId": "p1-low-30",
    "title": "Investing in the Future 投资未来",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–8 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 8
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Harvard and Yale were the first universities to benefit from philanthropy.",
          "translation": "哈佛大学和耶鲁大学是最早从慈善捐赠中受益的大学。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "This has been true from some of the oldest universities such as Bologna, Oxford and Cambridge in the twelfth century, to relative newcomers like the universities of Harvard and Yale in the seventeenth century."
          },
          "synonyms": [
            "“the first universities to benefit from philanthropy” 与原文 “some of the oldest universities such as Bologna, Oxford and Cambridge in the twelfth century” 相互冲突：原文把“最早、最古老”这一身份给了 12 世纪的博洛尼亚、牛津和剑桥",
            "“Harvard and Yale” 在原文中被称作 “relative newcomers”（相对较晚出现的后来者），并明确标出年代为 “the seventeenth century”（17 世纪），与题干所说的“最早”方向相反",
            "“benefit from philanthropy” 对应原文句首的 “This has been true from …”（慈善捐赠对大学的作用从……就开始了），这层替换本身无误，出错的是时间先后关系"
          ],
          "locatingTip": "定位：题干中的 Harvard 和 Yale 是专有名词，全文只在第 2 段出现一次，扫读时直接跳到第 2 段第 2 句即可，同句还并列出现 Bologna、Oxford、Cambridge 等大学名可供印证。确定答案技巧：本题的关键词是最高级 the first，判断题里凡出现 first、oldest、earliest 这类绝对化表述，都必须回原文核对“第一”这一身份到底给了谁。原文搭了一个从早到晚的时间阶梯：12 世纪的 Bologna、Oxford、Cambridge 属于 the oldest universities，而 Harvard 和 Yale 是 17 世纪才出现的 relative newcomers。题干把最晚出现的一批说成最早的，事实方向完全相反，因此判 FALSE。",
          "analysis": "第 2 段第 2 句写道：“This has been true from some of the oldest universities such as Bologna, Oxford and Cambridge in the twelfth century, to relative newcomers like the universities of Harvard and Yale in the seventeenth century.”（从 12 世纪最古老的一批大学，如博洛尼亚、牛津和剑桥，到 17 世纪才出现的相对后来者，如哈佛和耶鲁，情况都是如此）。这句话用 from 加 to 的结构搭出一条从早到晚的时间线：oldest（最古老）这一端是 12 世纪的博洛尼亚、牛津、剑桥；newcomers（后来者）这一端才是 17 世纪的哈佛和耶鲁。题干却说 Harvard and Yale were the first universities to benefit from philanthropy（哈佛和耶鲁是最早从慈善捐赠中受益的大学），把时间线两端的身份对调了，与原文直接矛盾，所以答案是 FALSE。做题提示：the first 与 relative newcomers 属于正反对立关系，看到最高级就要警惕原文是否把它安在别的对象上。",
          "traps": [
            "为什么不是 TRUE：原文明确把 “some of the oldest universities” 这个头衔给了 Bologna、Oxford 和 Cambridge（12 世纪），而 Harvard 和 Yale 被写作 “relative newcomers”，年代是 17 世纪。题干把最晚出现的两所说成最早的，与原文事实相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到了哈佛和耶鲁，还明确交代了它们的年代（the seventeenth century）以及它们在慈善捐赠时间线上的位置（relative newcomers），信息完整且与题干冲突，属于“有信息但相反”，因此不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Merchants liked to donate to the same universities they attended themselves.",
          "translation": "商人们乐于向自己曾就读的那些大学捐款。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Wealthy merchants gave young institutions money, land, libraries and rare items."
          },
          "synonyms": [
            "“Merchants” 同义替换为原文的 “Wealthy merchants”（富有的商人），身份词原词复现",
            "“donate to” 同义替换为原文的 “gave … money, land, libraries and rare items”，即把“给钱给物”概括为“捐赠”",
            "“the same universities they attended themselves” 在原文中找不到任何对应：原文只交代富商给年轻院校捐钱物，完全没有提到他们本人是否在这些院校读过书"
          ],
          "locatingTip": "定位：题干的核心名词 Merchants 是很好的实词定位点，对应原文第 2 段第 3 句的 Wealthy merchants；真正需要精读核对的是“捐赠对象与商人求学经历的关系”这一层意思。确定答案技巧：本题的陷阱就在同一个句子里——原文确实讲商人捐赠，但受赠方只写成 young institutions（年轻的院校），并没有说明这些院校与商人本人的就读经历有任何关联。题干新增了“自己曾就读”这一限定信息，属于原文未提及，所以判 NOT GIVEN。做题时要区分“原文提到了捐赠这件事”与“原文解释了捐赠的动机或对象选择”，本题只做到前者。",
          "analysis": "第 2 段第 3 句是本题唯一的落点：“Wealthy merchants gave young institutions money, land, libraries and rare items.”（富有的商人给年轻的院校送去金钱、土地、藏书和珍稀物品）。句中关于捐赠者的信息只有两个身份标签：wealthy（富有）和 merchants（商人）；关于受赠方只有 young institutions 这一笼统说法。题干却补出了“他们自己曾就读的那些大学（the same universities they attended themselves）”这一动机与对象限定。原文全篇没有出现 attend、study、graduate 之类表示求学的词，也没有任何一句谈到商人与所捐院校的私人渊源，属于纯粹的信息缺失，因此判 NOT GIVEN。注意第 6 段末句虽然出现了 alumni（校友）一词，但那是现代募款针对海外毕业生的做法，与本句 17 世纪的商人毫无关联，不能张冠李戴。",
          "traps": [
            "为什么不是 TRUE：题干的关键是“捐给自己就读过的学校”，而原文只写了富商给年轻院校捐钱物，既没有说他们读过大学，也没有说捐赠对象就是母校。把“商人捐赠”直接读成“捐给母校”，属于超出原文的推断，不能选 TRUE。",
            "为什么不是 FALSE：原文并没有否认商人与受赠院校之间存在校友关系，只是完全没有提及这层关系。要判 FALSE 需要有相反信息（例如原文明说捐赠者与受赠学校毫无渊源），本题没有，所以只能是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The first gift to the University of Auckland came in 1884.",
          "translation": "给奥克兰大学的第一笔捐赠出现在 1884 年。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In 1884 Mr Justice Gillies made history when he gave $3,000 to the then very young University of Auckland, and so became its original philanthropist."
          },
          "synonyms": [
            "“The first gift to the University of Auckland” 同义替换为原文的 “gave $3,000 to the then very young University of Auckland, and so became its original philanthropist”，其中 original philanthropist（最初的慈善捐赠者）与 first gift 对应",
            "“came in 1884” 与原文的 “In 1884” 直接对应，年份原词复现",
            "“gift” 同义替换为原文的 “gave $3,000”，名词与动词互换"
          ],
          "locatingTip": "定位：题干的年份 1884 和专有名词 University of Auckland 都是硬定位词，直接跳到第 3 段首句即可，不必往下读。确定答案技巧：本题的关键是判断“1884 年这一笔是不是第一笔”。原文用两处措辞坐实这一点：一是时间状语 In 1884 与题干的 came in 1884 吻合；二是结果分句 and so became its original philanthropist，其中 original 意为“最初的、第一位的”，等于说在 Gillies 之前该校没有别的捐赠者。两处信息同向支持题干，故判 TRUE。",
          "analysis": "第 3 段首句：“In 1884 Mr Justice Gillies made history when he gave $3,000 to the then very young University of Auckland, and so became its original philanthropist.”（1884 年，Gillies 法官先生向当时还非常年轻的奥克兰大学捐出 3000 美元，由此成为该校的第一位慈善捐赠者，创造了历史）。题干把它简化为 The first gift to the University of Auckland came in 1884。对应关系清晰：时间 In 1884 对应 came in 1884；gave $3,000 to the University of Auckland 对应 the first gift to the University of Auckland；而 original philanthropist 中的 original（最初的）为“第一笔”提供了直接支撑。原文还特意用 made history（创造历史）强调这笔捐赠的开创意义，与题干的 first 语义一致。故答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文没有任何与“1884 年是第一笔捐赠”相冲突的表述，相反，original philanthropist 和 made history 都在强调这是该校捐赠史的开端。",
            "为什么不是 NOT GIVEN：原文既给出了明确年份（1884），又给出了明确身份（该校第一位慈善捐赠者），两条信息都与题干对得上，属于信息完整且一致，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The University of Otago often received larger gifts than Gillies' gift to Auckland.",
          "translation": "奥塔哥大学经常收到比 Gillies 给奥克兰的那笔捐赠更丰厚的礼物。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Gillies' gift was more generous even than those regularly given to New Zealand's older University of Otago, and was exceptional because Auckland had a smaller population and was less wealthy than the other university cities at that time."
          },
          "synonyms": [
            "“larger gifts” 与原文的 “more generous” 属于同一比较维度，都是指金额更丰厚",
            "“often received” 同义替换为原文的 “those regularly given to New Zealand's older University of Otago”（经常给予奥塔哥大学的那些捐赠）",
            "比较方向被题干反转：原文是 “Gillies' gift was more generous even than those regularly given to … Otago”，即 Gillies 那笔比奥塔哥常收到的更慷慨，题干却说奥塔哥收到的礼物更大"
          ],
          "locatingTip": "定位：专有名词 University of Otago 是本题最独特的钓鱼词，全文只在第 3 段第 2 句出现一次，一步到位。确定答案技巧：比较级判断题必须看清“谁比谁大”。原文句子的主语是 Gillies' gift，结构为 Gillies' gift was more generous even than those regularly given to … Otago，即“Gillies 的捐赠比奥塔哥经常收到的那些更慷慨”；题干把比较双方调换了位置，说 Otago 收到的礼物比 Gillies 那笔更大，比较方向正好相反，因此判 FALSE。做题时可把 even than 后面的成分还原成主语，立刻就能发现被比较的对象被偷换。",
          "analysis": "第 3 段第 2 句：“Gillies' gift was more generous even than those regularly given to New Zealand's older University of Otago, and was exceptional because Auckland had a smaller population and was less wealthy than the other university cities at that time.”（Gillies 的这笔捐赠甚至比新西兰历史更悠久的奥塔哥大学经常收到的捐赠还要慷慨；它之所以格外难得，是因为当时奥克兰人口更少、也比其他大学城更不富有）。原文的比较关系是：Gillies 给奥克兰的 3000 美元 大于 奥塔哥大学平时收到的捐赠（more generous even than those regularly given to Otago）。题干却写成 The University of Otago often received larger gifts than Gillies' gift to Auckland，把两个比较项对调，变成奥塔哥收到的礼物更大，与原文的事实方向完全相反，故判 FALSE。后半句 was exceptional（格外难得）也在提示这笔捐赠超出常规，进一步否定了“奥塔哥常收到更大捐赠”的说法。",
          "traps": [
            "为什么不是 TRUE：原文用 more generous even than those regularly given to … Otago 明确表达“Gillies 的捐赠比奥塔哥常收到的更慷慨”，题干把比较双方调换，与原文相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到了奥塔哥大学，还直接给出了双方捐赠的对比关系（more generous even than），信息明确且与题干冲突，不属于未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "In the 1930s the government wanted to close Auckland's engineering school.",
          "translation": "在 20 世纪 30 年代，政府想要关闭奥克兰的工程学院。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In that decade a local engineer and former lecturer in engineering, Samuel Crookes, launched a fund to save the engineering school in Auckland, which the state was determined to see discontinued, and raised over $6,500 in three years."
          },
          "synonyms": [
            "“In the 1930s” 同义替换为原文的 “In that decade”，that decade 回指前一句的 “from the 1930s”",
            "“the government” 同义替换为原文的 “the state”（国家、政府当局）",
            "“wanted to close” 同义替换为原文的 “was determined to see discontinued”（决心让它停办）"
          ],
          "locatingTip": "定位：题干的时间 the 1930s 与名词 engineering school 都很醒目，落在第 3 段中段；原文把 1930s 写成 that decade（那十年），属于指代式替换，需要留意。确定答案技巧：本题的关键是识别三组同义替换：the state 就是 the government；was determined to see discontinued 就是 wanted to close；that decade 就是前句的 the 1930s。三组都确认后，题干与原文完全同向，判 TRUE。做题时不要因为原文没有出现 government 一词就犹豫，雅思常用 the state、the authorities 替换“政府”。",
          "analysis": "第 3 段第 4 句是本题落点：“In that decade a local engineer and former lecturer in engineering, Samuel Crookes, launched a fund to save the engineering school in Auckland, which the state was determined to see discontinued, and raised over $6,500 in three years.”（就在那十年里，当地工程师、曾任工程学讲师的 Samuel Crookes 发起了一项基金，以挽救州政府决意停办的奥克兰工程学院，并在三年内募集到 6500 多美元）。解题分三步核对：① 时间——In that decade 承接前文指 the 1930s，与题干 In the 1930s 一致；② 主体——the state 指政府当局，与题干 the government 同义；③ 意图——was determined to see discontinued（决心让它停办）与 wanted to close（想要关闭）同义，而且从 Crookes “发起基金去挽救（save）”这一相反动作也能反推出政府一方主张停办。三条信息同向，答案 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用 was determined to see discontinued 明确写出政府一方要停办该学院的态度，与题干 wanted to close 一致，没有任何相反信息，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到工程学院，还交代了政府在 1930 年代打算让其停办（the state was determined to see discontinued），正是题干所说内容，信息明确存在，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "After raising $6,500, Crookes returned to academic life.",
          "translation": "募集到 6500 美元之后，Crookes 重返学术生涯。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "and raised over $6,500 in three years. Another significant philanthropist, Sir William Goodfellow, made his initial gift to the University in 1947"
          },
          "synonyms": [
            "“After raising $6,500” 同义替换为原文的 “raised over $6,500 in three years”，金额原词复现",
            "“Crookes” 在原文中人名原词复现：“Samuel Crookes”",
            "“returned to academic life” 在原文中毫无对应：原文只交代他是 “a local engineer and former lecturer in engineering”（当地工程师、曾任工程学讲师）以及发起基金募集善款，既没说他离开过学术岗位，也没说他回到了学术岗位"
          ],
          "locatingTip": "定位：人名 Samuel Crookes 与金额 $6,500 组合出现的位置只有第 3 段第 4 句，定位非常快。确定答案技巧：题干把两件事连成先后因果（募集完钱以后回到学术生活），需要分别核对两个信息点：金额已经对上（over $6,500），但“回到学术生活”这一步在原文里完全没有。注意原文说他是 former lecturer in engineering（曾经的工程学讲师），former 只说明他当时已不在教学岗位上，并不能推出他后来又回去了。信息缺失即 NOT GIVEN。",
          "analysis": "第 3 段第 4 句给出了 Crookes 的全部信息：“In that decade a local engineer and former lecturer in engineering, Samuel Crookes, launched a fund to save the engineering school in Auckland, which the state was determined to see discontinued, and raised over $6,500 in three years.”（在那十年里，当地工程师、曾任工程学讲师的 Samuel Crookes 发起基金挽救岌岌可危的奥克兰工程学院，三年内筹得 6500 多美元）。核对题干的两个落点：其一，After raising $6,500，原文确实有 raised over $6,500，并且发生在三年之内，这半句吻合；其二，returned to academic life，原文只说他“曾经是（former）工程学讲师”，没有说他此后重新回到教学或学术岗位，全文也没有再出现 Crookes 的名字。既然原文对他的后续去向一字未提，题干关于“重返学术生涯”的说法就是额外添加的信息，按判断题规则判 NOT GIVEN。提醒：former lecturer 只能说明“曾经的身份”，不能逆向推出“后来回去了”，这是典型的自我脑补陷阱。",
          "traps": [
            "为什么不是 TRUE：原文只交代了他之前的身份（former lecturer in engineering）以及发起募款、筹到款项的事实，没有任何一句说他此后回到学术岗位，题干后半句缺少原文依据。",
            "为什么不是 FALSE：FALSE 需要原文出现相反信息（例如说他此后仍继续做工程师、从未离开商界等），而原文对他的后续经历完全没有交代，属于信息缺失，只能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "In the 1950s the best lecturers chose to work in Britain or Australia rather than Auckland.",
          "translation": "在 20 世纪 50 年代，最优秀的讲师选择去英国或澳大利亚工作，而不是留在奥克兰。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "In Auckland the problem largely resulted from the fact that academic salaries had slipped well behind those available in Britain and Australia, so the strongest candidates tended to be recruited to those countries."
          },
          "synonyms": [
            "“the best lecturers” 同义替换为原文的 “the strongest candidates”（最强的候选人，即最优秀的人才）",
            "“chose to work in Britain or Australia” 同义替换为原文的 “tended to be recruited to those countries”，those countries 回指前文的 Britain and Australia",
            "“In the 1950s” 对应原文第 4 段首句的 “The University had a difficult decade in the 1950s”"
          ],
          "locatingTip": "定位：时间 the 1950s 出现在第 4 段首句，题干中的国家名 Britain 和 Australia 把落点进一步收窄到第 4 段第 3 句。确定答案技巧：本题要顺着“因”读到“果”——原文先说明原因（academic salaries had slipped well behind those available in Britain and Australia，即薪金远远落后），再给出结果（so the strongest candidates tended to be recruited to those countries）。the strongest candidates 对应题干的 the best lecturers，those countries 就是题干的 Britain or Australia，因果链完整且方向一致，故判 TRUE。",
          "analysis": "第 4 段前两句交代背景：“The University had a difficult decade in the 1950s as it was short of equipment, buildings and money. It also had its first taste of international rivalry, when universities in many parts of the world competed to attract first-class lecturers.”（20 世纪 50 年代该校处境艰难，设备、建筑和资金都短缺；它还第一次尝到国际竞争的滋味，世界各地的大学都在竞相吸引一流讲师）。第 3 句给出原因与结果：“In Auckland the problem largely resulted from the fact that academic salaries had slipped well behind those available in Britain and Australia, so the strongest candidates tended to be recruited to those countries.”（在奥克兰，问题主要源于学术薪金已经远远落后于英国和澳大利亚的水平，因此最强的候选人往往被那些国家招走）。题干说 1950 年代最优秀的讲师选择去英国或澳大利亚而不是奥克兰，与原文的因果表述完全一致：the strongest candidates 即 the best lecturers，tended to be recruited to those countries 即他们流向 Britain and Australia 而非留在 Auckland。时间、主体、流向三项都对上，答案 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确写出 strongest candidates tended to be recruited to those countries，与题干“最优秀的讲师选择去英国或澳大利亚而不是奥克兰”方向一致，没有相反表述。",
            "为什么不是 NOT GIVEN：原文不仅提到英国和澳大利亚，还解释了人才外流的原因（薪金落后）并点明结果（最强的候选人被这些国家招走），信息完整，因此不属于未提及。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "A single philanthropist was responsible for the new Medical School.",
          "translation": "新医学院是由一位慈善家独自出资促成的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "But when the new Medical School opened in 1968, it attracted significant gifts for academic positions and equipment from an unusually wide range of donors, including individuals, trusts, charitable foundations, societies and community groups."
          },
          "synonyms": [
            "“was responsible for” 同义替换为原文的 “it attracted significant gifts … from an unusually wide range of donors”，即由多方捐赠共同促成",
            "“A single philanthropist” 与原文的 “an unusually wide range of donors, including individuals, trusts, charitable foundations, societies and community groups” 直接冲突：捐赠者是一个范围极广的群体，而不是一个人",
            "“the new Medical School” 在原文中以 “the new Medical School opened in 1968” 原词复现"
          ],
          "locatingTip": "定位：专有名词 Medical School 加上年份 1968，落到第 4 段第 4 句。确定答案技巧：题干的关键限定是 A single（单一的、仅仅一位），判断题中凡出现 single、only、solely 这类排他性词，都要追问“原文是否排除了其他参与者”。原文紧接着 donors 给出了一长串捐赠者类型：individuals、trusts、charitable foundations、societies and community groups，并用 unusually wide range of（异常广泛的一系列）加以修饰，明确表示资金来源是多方而非一人。题干与原文在捐赠者数量上正面对立，故判 FALSE。",
          "analysis": "第 4 段第 4 句：“But when the new Medical School opened in 1968, it attracted significant gifts for academic positions and equipment from an unusually wide range of donors, including individuals, trusts, charitable foundations, societies and community groups.”（但当新的医学院于 1968 年开办时，它为教职岗位和教学设备吸引了来自异常广泛的捐赠者群体的可观捐赠，其中包括个人、信托、慈善基金会、社团以及社区团体）。题干主张“新医学院由一位慈善家独自促成”，而原文用两个层次明确否定它：一是修饰语 an unusually wide range of（异常广泛的），二是其后 including 引出的至少五类捐赠主体，其中还包括 trusts、foundations、societies 等机构而不仅是个人。这种多项列举直接说明资金来源是群体行为，与 A single philanthropist 相矛盾，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文列举了个人、信托、慈善基金会、社团、社区团体等多类捐赠者，并用 an unusually wide range of donors 加以概括，明确排除“只有一位慈善家”的可能，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对捐赠者的构成交代得非常具体（整串列举），属于信息明确且与题干冲突，不是没有提及，因此不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Henry Cooper's campaign marked the 9 ________ of the University",
          "translation": "Henry Cooper 发起的募款活动纪念了该大学的 ________（第 9 题）。",
          "answer": "centenary",
          "wordClass": "名词（单数，指周年纪念；空格前有定冠词 the，其后跟介词短语 of the University，整体作 marked 的宾语，故填名词单数形式）",
          "locating": {
            "paragraph": "5",
            "quote": "This was followed by another appeal in 1983 under the then Chancellor Henry Cooper, who raised $800,000 to celebrate the University's centenary."
          },
          "synonyms": [
            "“marked” 同义替换为原文的 “to celebrate”（为庆祝……而举办）",
            "“Henry Cooper's campaign” 同义替换为原文的 “another appeal in 1983 under the then Chancellor Henry Cooper”",
            "“the 9 … of the University” 对应原文的 “the University's centenary”，原文用名词所有格，题干改为 of 结构后留空中心名词"
          ],
          "locatingTip": "定位：专有名词 Henry Cooper 是人名，全文只出现一次（第 5 段），一步即可定位。确定答案技巧：题干说 Cooper 的募款活动 marked（纪念）了大学的某个事项，回原文找 1983 年那 80 万美元的用途即可，即 who raised $800,000 to celebrate the University's centenary。celebrate 对应 marked，剩余成分 the University's centenary 中 University 已经出现在题干里，剩下的名词 centenary（百年校庆）就是答案。注意 ONE WORD ONLY，只写 centenary 一个词，不要写成 the centenary 或 centenary anniversary。",
          "analysis": "第 5 段第 2 句：“This was followed by another appeal in 1983 under the then Chancellor Henry Cooper, who raised $800,000 to celebrate the University's centenary.”（随后在 1983 年，时任校监 Henry Cooper 又发起了一次募款，筹得 80 万美元以庆祝该校的百年校庆）。题干改写为 Henry Cooper's campaign marked the 9 ______ of the University：another appeal 对应 campaign，to celebrate 对应 marked，the University's centenary 拆分后剩下 centenary 填入空格。原文用 centenary（一百周年纪念）一词直接点明这笔募款的用途，与题干 marked … of the University 的表述完全吻合。词性上空格需要名词作 marked 的宾语，且前面已有 the、后面已有 of the University 提供限定，故填单数名词 centenary，不加冠词、不必复数。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "this appeal is raising money to invest in the University's 10 ________",
          "translation": "这次募款活动正在筹钱，用于投入到该大学的 ________（第 10 题）上。",
          "answer": "staff",
          "wordClass": "名词（集合名词，指教职员工；位于名词所有格 the University's 之后作其中心词，整体作介词 in 的宾语，故填单数形式 staff，不加复数、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "It is intended as a drive to secure support for the whole University, with a focus on generating funds to recruit, support and retain the very best staff for the University."
          },
          "synonyms": [
            "“invest in the University's …” 同义替换为原文的 “generating funds to recruit, support and retain the very best staff for the University”，把“筹钱用于招募、支持和留住人才”概括为“把钱投入大学的某方面”",
            "“is raising money” 同义替换为原文的 “generating funds”",
            "“the very best …” 这一修饰语在原文与题干中同样出现，是锁定空格的中心词的关键"
          ],
          "locatingTip": "定位：笔记小标题 'Leading the Way' 是带引号的活动名，在原文第 6 段首句原样出现，据此定位整段。确定答案技巧：题干说募款是为了投入大学的某项资源，回原文找这次活动的目的句，即 with a focus on generating funds to recruit, support and retain the very best staff for the University。把“募集资金去招募、支持和留住最优秀的员工”概括起来，就是“投入到大学的人力资源”上。空格受 the University's 限定并要求填名词，原文中与该所有格内容对应的中心名词就是 staff（教职员工），故填 staff。注意 staff 在此指人且是集合名词，保持原形，不加复数也不加冠词。",
          "analysis": "第 6 段第 2 句：“It is intended as a drive to secure support for the whole University, with a focus on generating funds to recruit, support and retain the very best staff for the University.”（它旨在为整所大学争取支持，重点是把资金募集用于招募、支持和留住大学最优秀的教职员工）。题干 this appeal is raising money to invest in the University's 10 ______ 是对这一目的的压缩改写：raising money 对应 generating funds，invest in 对应 recruit、support and retain（招募、支持和留住人才本质上都是对人力资源的投入），而 the University's 后面所接的中心名词正是原文 the very best staff for the University 中的 staff。从搭配上看，the very best 这一修饰语在原文与题干中都以某种形式出现，进一步互相印证。词性上 staff 为集合名词，指全体员工，用单数形式即可。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "gifts are being sought from graduates who are located 11 ________",
          "translation": "学校正在向位于 ________（第 11 题）的毕业生寻求捐赠。",
          "answer": "overseas",
          "wordClass": "副词（作地点状语，说明 graduates 所在的地点，修饰前面的过去分词 located，表示“在国外”；填与原文词形一致的 overseas，不加介词）",
          "locating": {
            "paragraph": "6",
            "quote": "by looking at campaigns in other parts of the world, and targeting alumni, or former students now living overseas."
          },
          "synonyms": [
            "“graduates” 同义替换为原文的 “alumni, or former students”（校友，即以前的学生）",
            "“are located …” 同义替换为原文的 “now living …”，located 与 living 都表示所在位置",
            "“overseas” 在原文中原词出现：targeting alumni, or former students now living overseas"
          ],
          "locatingTip": "定位：题干的关键词 graduates 在原文中并不直接出现，需要先想到它的同义替换 alumni 或 former students，落点在原文第 6 段最后一句。确定答案技巧：原文用同位语给出线索，即 alumni, or former students now living overseas，其中 former students 就是题干的 graduates，now living 对应题干的 are located，那么剩下的地点词 overseas（在国外）就是空格答案。注意空格前的 are located 后面接副词即可，不要误填 campaigns、alumni 等词；overseas 兼具副词和形容词性质，此处作副词用，写原形即可。",
          "analysis": "第 6 段末句：“The University is investing considerable time and energy in devising new methods of fund-raising both within its local communities and—remembering that New Zealanders love to travel—by looking at campaigns in other parts of the world, and targeting alumni, or former students now living overseas.”（校方投入大量时间和精力设计新的募款方式，既立足本地社区，也考虑到新西兰人喜欢出国旅行这一点，参考世界其他地区的募款活动，并把目标锁定在校友，也就是如今居住在海外的昔日的学生）。原文用 or 引出同位语，直接解释了 alumni 就是 former students，也就是题干所说的 graduates；now living 与题干的 are located 对应；剩下的信息点只有表示地点的 overseas，所以答案填 overseas。从语法看，空格位于 are located 之后，需要一个副词性成分收尾，overseas 正好承担这一功能，答案保持单词原形、不改变形式。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "some donations had not been 12 ________ by the University",
          "translation": "有些捐赠没有被该大学 ________（第 12 题）。",
          "answer": "recorded",
          "wordClass": "动词（过去分词，与 had not been 一起构成过去完成时的被动语态，在句中作谓语的一部分，故填过去分词 recorded，而非原形或过去式）",
          "locating": {
            "paragraph": "8",
            "quote": "we have come to realise that there has been considerable giving to the University that has not been previously recorded through our Advancement Office"
          },
          "synonyms": [
            "“some donations” 同义替换为原文的 “considerable giving to the University”（对大学的相当多的捐赠）",
            "“had not been … by the University” 同义替换为原文的 “has not been previously recorded through our Advancement Office”，被动语态与否定含义完全对应",
            "“recorded” 在原文中原词出现，正是空格所缺的动词过去分词"
          ],
          "locatingTip": "定位：笔记小标题 Financial matters 对应原文第 8 段开头的 On the financial side，人名 Stuart McCutcheon 也是硬定位词，据此锁定第 8 段。确定答案技巧：题干是完成时的被动结构 had not been ______ by the University，回原文找同样的被动结构即可，即 there has been considerable giving to the University that has not been previously recorded through our Advancement Office，其中 has not been previously recorded 与题干 had not been 结构一致，空格所缺的动词就是 recorded。注意空格位于 been 之后，必须填过去分词形式，不能写 record 或 recording。",
          "analysis": "第 8 段引述校方财务负责人 Stuart McCutcheon 的话：“In the course of developing these new fund-raising systems,” he says, “we have come to realise that there has been considerable giving to the University that has not been previously recorded through our Advancement Office …”（他说：“在开发这些新募款体系的过程中，我们逐渐意识到，有相当多的捐赠此前并未通过我们的发展办公室记录下来……”）。题干 some donations had not been 12 ______ by the University 对应的就是 that has not been previously recorded through our Advancement Office 这一部分：considerable giving to the University 概括为 some donations，has not been previously recorded 变成 had not been 加空格，因此空格填 recorded。词性上，been 后面必须是过去分词才能构成被动语态，recorded 符合要求。后文 The good news from this error 中的 error（错误）也回证了这次“漏记”的事实，与题干语义一致。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "there is a new financial 13 ________ for the campaign",
          "translation": "这次募款活动有了一个新的财务 ________（第 13 题）。",
          "answer": "target",
          "wordClass": "名词（单数，指募款的目标金额；空格前有 a new financial 限定，作存在句 there is 的主语，填名词单数形式）",
          "locating": {
            "paragraph": "8",
            "quote": "it was announced that the campaign target was now being increased from $100 million to $150 million, and would recognise all sources of philanthropic support."
          },
          "synonyms": [
            "“a new financial …” 同义替换为原文的 “the campaign target was now being increased from $100 million to $150 million”，金额上调即目标被更新",
            "“for the campaign” 同义替换为原文的 “the campaign target” 中的 the campaign",
            "“new” 与原文的 “increased”（被提高）呼应，说明题干指的是新调整后的那一个目标"
          ],
          "locatingTip": "定位：本题仍属 Financial matters 部分，落点在 The good news from this error is that at the recent Chancellor's dinner it was announced that the campaign target was now being increased 一句，抓住 campaign 与金额数字即可，$100 million、$150 million 是最醒目的数字锚点。确定答案技巧：题干说“活动有了一个新的财务某物”，回原文看那笔钱发生了什么变化——the campaign target was now being increased from $100 million to $150 million，被提高的正是 campaign target（募款目标金额）。target 就是 a new financial 后面的中心名词，故填 target。注意不要填 increase（那是动作）、也不要填 money（该句中并无此词），且 ONE WORD ONLY 只能写一个词。",
          "analysis": "第 8 段后半句：“The good news from this error is that at the recent Chancellor's dinner it was announced that the campaign target was now being increased from $100 million to $150 million, and would recognise all sources of philanthropic support.”（这个失误带来的好消息是：在最近的校监晚宴上宣布，募款目标如今从 1 亿美元提高到 1.5 亿美元，并且将承认所有渠道的慈善支持）。题干 there is a new financial 13 ______ for the campaign 正对应 the campaign target was now being increased 这一变化：金额从 1 亿升到 1.5 亿，说明目标是“新”的（new）；被提高的对象是 the campaign target，其中 campaign 就是题干的 for the campaign，剩下的名词 target 填入空格。词性上空格受 a new financial 修饰，需要一个单数可数名词，target 正好符合，答案是 target。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
